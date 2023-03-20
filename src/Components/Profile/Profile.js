import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import auth from "../../firebase.init";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
const MyProfile = () => {
  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth);
  const [posts, setPosts] = useState([]);
  const myPosts = posts.filter((post) => post.email === user.email);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
        .then((res) => res.json())
        .then((data) => setPosts(data));
}, []);

  const handleDelete = id => {
    const proceed = window.confirm('Are you sure to delete this item?');
    if (proceed) {
        const url = `http://localhost:5000/posts/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const remaining = posts.filter((myPost) => myPost._id !== id);
                setPosts(remaining);
            })
    }
}
  // const {
  //   data: user,
  //   isLoading,
  //   error,
  //   refetch,
  // } = useQuery(["updateUserInfo", authUser?.email], () =>
  //   fetch(
  //     `http://localhost:5000/userByEmail?email=${authUser?.email}`
  //   ).then((res) => res.json())
  // );

  
  // if (isLoading) {
  //   return <Loading />;
  // }

  // const handleForm = async (event) => {
  //   event.preventDefault();
  //   setLoading(true);

  //   const mobile = event.target.mobile.value;
  //   const address = event.target.address.value;

  //   await fetch(`http://localhost:5000/usersByEmail?email=${user.email}`, {
  //     method: "put",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({ mobile, address }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.acknowledged) {
          
  //         refetch();
  //       }
  //     });
  //   event.target.reset();
  //   setLoading(false);
  // };

  return (
        <section style={{ backgroundColor: '#eee' }}>
          <MDBContainer className="py-5">
          
    
            <MDBRow>
              <MDBCol lg="4">
                <MDBCard className="mb-4">
                  <MDBCardBody className="text-center">
                    <MDBCardImage
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReiyHYtDJQ0t5jCs4j_PiD5ESMvPwnvHVa3w&usqp=CAU"
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: '150px' }}
                      fluid />
                    <h5 class="mt-3">{user.displayName}</h5>
                    <p className="text-muted mb-1">Student</p>
                    <p className="text-muted mb-4">International Islamic University Chittagong</p>
                    <div className="d-flex justify-content-center mb-2">
                      {/* <MDBBtn>Follow</MDBBtn>
                      <MDBBtn outline className="ms-1">Message</MDBBtn> */}
                    </div>
                  </MDBCardBody>
                </MDBCard>
    
                
              </MDBCol>
              <MDBCol lg="8">
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Full Name</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{user.displayName}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Email</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{user.email}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                  
                    {/* <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Metric ID</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{user.displayId}</MDBCardText>
                      </MDBCol>
                    </MDBRow> */}
                    
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Address</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">Bangladesh</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
     
                <MDBRow>
                {myPosts && 
          myPosts.map((posts, key) => (
   <div key={key} class="card mb-3 d-flex flex-column">
  <div class="card-body">
    <h5 class="card-title"> 
    <span className="px-2 text-light rounded-circle w-100 font-bold" style={{backgroundColor: '#0352a2'}}>{posts.name[0]}
    </span> {posts.name} </h5>
    <p class="card-text">{posts.rvw}</p>
    <button
            onClick={() => handleDelete(posts._id)}
          className="btn btn-light btn-outline-danger"
              >
            ❌
   </button>
  </div>
</div>
))}
              
               
                       
            
                    </MDBRow>
              

              </MDBCol>
            </MDBRow>
          </MDBContainer>

    </section>
  );
};

export default MyProfile;
