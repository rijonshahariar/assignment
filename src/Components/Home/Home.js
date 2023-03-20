import React, { useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Post from '../Posts/Posts';

export default function Home() {
  const [authUser] = useAuthState(auth);
  const [loading, setLoading] = useState(false);

  const handleForm = async (event) => {
    event.preventDefault();
    setLoading(true);
    const name = authUser.displayName;
    const rvw = event.target.rvw.value;

    const post = {
      name,
      rvw,
      
    };

    await fetch(`http://localhost:5000/posts`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          event.target.reset();
          window.location.reload(true);
        }
      });
    setLoading(false);
  };
  return (
<>
<form onSubmit={handleForm}>
  <div class="form-group mx-auto w-75 mt-5 text-center">
    <textarea name="rvw" placeholder="What's on your mind?" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    <button type="submit" className={`btn btn-primary w-50 mt-2 ${loading && "loading"}`}>
                   Post
                  </button>
  </div>
  
</form>
<Post></Post>
</>
  );
}