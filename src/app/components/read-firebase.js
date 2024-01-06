import { getDatabase, ref, onValue } from "firebase/database";

const readfirebase = (userId) => {
  const db = getDatabase();
  let data;

  const userRef = ref(db, "users/" + userId);

  onValue(userRef, (snapshot) => {
    data = snapshot.val();
  });
  return data;
};

export default readfirebase;
