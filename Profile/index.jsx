import { useEffect } from "react";
import { useState } from "react";
import User from "./user";
import './styles.css';

export default function FacebookProfileFinder() {
  const [userName, setUserName] = useState("sangammukherjee");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchFacebookUserData() {
    setLoading(true);
    const res = await fetch(`https://api.facebook.com/users/${userName}`);

    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName('')
    }
  }

  function handleSubmit() {
    fetchFacebookUserData()
  }

  useEffect(() => {
    fetchFacebookUserData();
  }, []);

  if (loading) {
    return <h1>Please wait ! Data Loading.....</h1>;
  }

  return (
    <div className="profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Facebook Username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}