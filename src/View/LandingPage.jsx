import React, { useEffect, useState } from "react";
import { auth } from "../Firebase";
export default function LandingPage() {
  const [username, setUsername] = useState("");

  useEffect((e) => {
    const user = auth.currentUser;
    if (user && user.email) {
      // take the part before '@'
      const name = user.email.split("@")[0];
      setUsername(name);
    }
  }, []);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-indigo-600">Hii {username ? username : "Guest"} 👋</h1>
    </div>
  );
}
