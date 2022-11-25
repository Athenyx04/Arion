import { format, parse } from 'date-fns';
import {
  doc,
  addDoc,
  collection,
  getDocs,
  query,
  Timestamp,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from './firebase';

function parseDoBToTimestamp(dob) {
  const parsedDateOfBirth = parse(dob, 'dd-MM-yyyy', new Date());
  return Timestamp.fromDate(parsedDateOfBirth);
}

export const addAnimal = (
  owner,
  tagId,
  name,
  sex,
  species,
  breed,
  dob,
  plot,
  sensor
) => {
  const timestampDateOfBirth = parseDoBToTimestamp(dob);

  const docRef = addDoc(collection(db, 'animals'), {
    owner,
    tagId,
    name,
    sex,
    species,
    breed,
    dob: timestampDateOfBirth, // Parse as date
    plot,
    sensor,
    createdAt: Timestamp.fromDate(new Date()),
  })
    .then(() => console.log('Document written with ID: ', docRef.id))
    .catch((err) => {
      console.error('Error adding document:', err);
    });
};

export const updateAnimal = async (
  id,
  tagId,
  name,
  sex,
  species,
  breed,
  dob
  // plot,
  // sensor
) => {
  const docRef = doc(db, 'animals', id);
  const timestampDateOfBirth = parseDoBToTimestamp(dob);

  updateDoc(docRef, {
    tagId,
    name,
    sex,
    species,
    breed,
    dob: timestampDateOfBirth,
    // plot,
    // sensor,
  })
    .then(() => console.log('Document updated with ID: ', docRef.id))
    .catch((err) => {
      console.error('Error updating document: ', err);
    });
};

export async function fetchAnimals(user) {
  const q = query(collection(db, 'animals'), where('owner', '==', user));

  const snapshot = await getDocs(q);

  return snapshot.docs.map((document) => {
    const data = document.data();
    const { id } = document;

    return {
      ...data,
      id,
    };
  });
}

export async function fetchPlotList(user) {
  const q = query(collection(db, 'plots'), where('owner', '==', user));

  const snapshot = await getDocs(q);

  return snapshot.docs.map((document) => {
    const data = document.data();
    const { id } = document;

    return {
      ...data,
      id,
    };
  });
}

export async function fetchSingleAnimal(tagId, user) {
  const q = query(
    collection(db, 'animals'),
    where('tagId', '==', tagId),
    where('owner', '==', user)
  );

  const snapshot = await getDocs(q);
  const element = snapshot.docs.shift();

  const { id } = element;
  const data = element.data();

  const formattedDoB = format(data.dob.toDate(), 'dd-MM-yyyy');

  return element ? { ...data, formattedDoB, id } : null;
}
