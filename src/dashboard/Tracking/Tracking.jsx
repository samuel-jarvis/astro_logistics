import React from "react";
import "./tracking.scss";
import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { db } from "../../firebase/config";
import { Link } from "react-router-dom";
import {
  collection,
  query,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

const Tracking = () => {
  const [trackingList, setTrackingList] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const q = query(collection(db, "tracking"));

  const [clientName, setClientName] = useState("");


  useEffect(() => {
    try {
      onSnapshot(q, (querySnapshot) => {
        if (querySnapshot.empty) {
          setError("Sorry, we couldn't find that tracking number.");
          setLoading(false);
        } else {
          const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
          }));
          console.log("data", data);
          setTrackingList(data);
        }
      });
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

  const [trackingId, setTrackingId] = useState("");
  const [clientDetails, setClientDetails] = useState("");

  // add id
  const addID = async (e) => {
    e.preventDefault();

    if (trackingId === "" || clientName === "") {
      setError("Please fill both info.");
      alert("Please fill both info.");
      return;
    }
    // add current id to firestore
    const ref = doc(db, "tracking", trackingId);

    await setDoc(ref, {
      shippingHistory: [],
      packaging: [],
      extra: [],
      clientName: clientName,
    });
    setTrackingId("");
    setClientName("");
  };

  // delete id
  const deleteTracking = async (id) => {
    // prompt user to confirm delete
    const confirm = window.confirm(
      "Are you sure you want to delete this tracking number?"
    );
    if (confirm) {
      // delete from firestore
      console.log(id);
      const ref = doc(db, "tracking", id);
      await deleteDoc(ref);
    } else {
      return;
    }
  };

  return (
    <div
    // style={{
    //   paddingTop: "15rem",
    // }}
    >
      <div className="trackingPage padding">
        <h1 className="heading">Dashboard: Add Tracking ID </h1>

        {/* form for adding tracking ID */}
        <form className="form">
          <input
            type="text"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            placeholder="Add Tracking ID eg US123456EE"
          />

          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="client name"
          />
          <button onClick={(e) => addID(e)} type="submit">
            Add New ID
          </button>
        </form>

        <Link to="/admin-contacts" className="view-message">
          <p>View Contact Messages</p>
        </Link>

        {/* list of tracking IDs */}
        <div className="tracking-list">
          <h4 className="head">List of Tracking IDs</h4>
          {trackingList &&
            trackingList.map((tracking) => (
              <div className="tracking" key={tracking.id}>
                <Link to={`/admin-tracking-details/${tracking.id}`}>
                  <p>{tracking.id}</p>
                </Link>
                <FaTimes
                  onClick={() => deleteTracking(tracking.id)}
                  className="delete-icon"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tracking;
