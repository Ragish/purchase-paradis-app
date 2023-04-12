// pages/auth/signout.js
import { signOut } from "next-auth/client";

export default function SignOut() {
  return (
    <div>
      <h1>Sign out</h1>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
