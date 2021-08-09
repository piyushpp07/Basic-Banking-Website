
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import 'bootstrap/dist/css/bootstrap.min.css';


function Users() {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getDataFromFirebase = [];
    const subscriber = db.collection('students-list').onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getDataFromFirebase.push({ ...doc.data(), key: doc.id });
      });
      setPosts(getDataFromFirebase);
    });
    return () => subscriber();
  }, [])

  return (
    <div className="MainDiv" >

      <div className="container">
        <table id="example" className="display table" >
          <thead className="thead-dark">
            <tr>

              <th>Name</th>
              <th>Email</th>
              <th>Amount</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            {
              posts.map(data => {
                return (
                  <tr key={Math.random().toString(36).substr(2, 9)}>

                    <td >{data.name}</td>
                    <td >{data.email}</td>
                    <td >{data.Amount}</td>
                    <td >{data.mobile}</td>
                  </tr>
                );
              }
              )
            }</tbody>

        </table>

      </div>
    </div >
  );
}







export default Users;