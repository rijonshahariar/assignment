import React from 'react';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

export default function Friends() {
  
  const {
    data: userss,
    isLoading,
    error,
  } = useQuery(["user"], () =>
    fetch(`http://localhost:5000/user`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
}
  return (
<section class="w-75 mx-auto mt-5 mb-5">
        <h3 class="mb-3">Users</h3>
       {userss &&
          userss.map((user, key) => (
   <div key={key} class="card mb-3">
  <div class="card-body">
    <h5 class="card-title"> 
    <span className="px-2 text-light rounded-circle w-100 font-bold" style={{backgroundColor: '#0352a2'}}>{user.name[0]}
    </span> {user.name}</h5>
   
  </div>
</div>
))}
        </section>
  );
}