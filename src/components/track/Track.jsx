import { collection, getDocs, query } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase/config";
import "./track.scss";

const Track = ({ handleModal, setData, setLoading }) => {
  const [trackingID, setTrackingID] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // if (trackingID === "") {
    //   alert("Please enter a tracking ID");
    //   return;
    // }

    // trim
    if (trackingID.trim() === "") {
      alert("Please enter a tracking ID");
      return;
    }

    const trimmedTrackingID = trackingID.trim();
    // console.log(trimmedTrackingID);

    const fetchData = async () => {
      try {
        const q = query(collection(db, "tracking"));

        const res = await getDocs(q);

        if (res.empty) {
          alert("Sorry, we couldn't find that tracking number");
          setLoading(false);
          return
        } else {
          const data = res.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));

          const tracking = data.find((item) => item.id === trimmedTrackingID);
          if (!tracking) {
            alert("Sorry, we couldn't find that tracking number");
            return;
          }
          console.log(tracking);
          if (tracking) {
            setData(tracking);
            navigate(`/tracking/${tracking.id}`);
            // handleModal()
            setLoading(false);
          } else {
            setData({ id: "", shipping: [] });
            handleModal();
          }
          setData(tracking);
        }
      } catch (err) {
        setLoading(false);
        console.log(err.message);
      }
    };
    fetchData();
    // handleModal()
  };

  return (
    <div className="track">
      <p className="track__heading">Track your Shipment</p>
      <div className="track__order">
        <div className="track__order__input">
            <input
              type="text"
              placeholder="Enter Tracking ID"
              value={trackingID}
              onChange={(e) => setTrackingID(e.target.value)}
            />
            <button onClick={() => handleSearch()}>Track Order</button>
        </div>
      </div>
    </div>
  );
};

export default Track;
