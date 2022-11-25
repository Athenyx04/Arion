import { parse } from 'date-fns';
import {
  addDoc,
  collection,
  getDocs,
  query,
  Timestamp,
  where,
} from 'firebase/firestore';
import { db } from './firebase';

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
  const parsedDateOfBirth = parse(dob, 'dd-MM-yyyy', new Date());
  const timestampDateOfBirth = Timestamp.fromDate(parsedDateOfBirth);

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

export async function fetchAnimals(user) {
  const q = query(collection(db, 'animals'), where('owner', '==', user));

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => {
    const data = doc.data();
    const { id } = doc;

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
  return element ? element.data() : null;
}
