import { getDatabase, ref, set } from "firebase/database";

function writeUserData({ userId, name, email, subject, message }) {
  const db = getDatabase();
  set(ref(db, "users/" + userId), {
    userId,
    username: name,
    email,
    subject,
    message,
  });
}

export default writeUserData;
