import React from "react";
import { useQuery } from "react-query";

const Post = () => {
  const {
    data: posts,
    isLoading,
    error,
    refetch,
  } = useQuery("posts", () =>
    fetch(`http://localhost:5000/posts`).then((res) => res.json())
  );
  

  return (
   
    <section class="w-75 mx-auto mt-5 mb-5">
        <h3 class="mb-3">Timeline 📌</h3>
       {posts &&
          posts.map((post, key) => (
   <div key={key} class="card mb-3">
  <div class="card-body">
    <h5 class="card-title"> 
    <span className="px-2 text-light rounded-circle w-100 font-bold" style={{backgroundColor: '#0352a2'}}>{post.name[0]}
    </span> {post.name} </h5>
    <p class="card-text">{post.rvw}</p>
   
  </div>
</div>
))}
        </section>
     
  );
};

export default Post;
