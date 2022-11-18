import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase';

export const addAnimal = (tagId, owner, species, weight, name, plot) => {
  const docRef = addDoc(collection(db, 'animals'), {
    tagId,
    owner,
    species,
    weight, // Weight must be an array to analyze progression
    name,
    plot,
    // createdAt
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
