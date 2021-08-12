import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import "bootstrap/dist/css/bootstrap.min.css";
function AllTransactions() {
  const [tra, setTransfers] = useState([]);
  useEffect(() => {
    const getDataFromFirebase = [];
    const subscriber = db
      .collection("students-list")
      .doc("transfer")
      .collection("lists")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getDataFromFirebase.push({ ...doc.data(), key: doc.id });
        });
        setTransfers(getDataFromFirebase);
      });
    return () => subscriber();
  }, []);
  return (
    <div style={{ marginBottom: "14em", marginTop: "2em" }}>
      <div className="container">
        <h1 style={Styles.hea}>Transaction History</h1>
        <table id="example" className="display table">
          <thead className="thead-dark">
            <tr>
              <th>Time</th>
              <th>From User</th>
              <th>To User</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tra.map((data) => {
              return (
                <tr key={Math.random().toString(36).substr(2, 9)}>
                  <td>{data.time}</td>
                  <td>{data.from}</td>
                  <td>{data.to}</td>
                  <td>{data.amount}</td>
                  <td>{data.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
const Styles = {
  hea: {
    color: "#5C527F"
  }
};
export default AllTransactions;
