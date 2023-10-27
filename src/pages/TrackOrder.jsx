import React from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { useState, useEffect } from "react";
import "./trackorder.scss";
import { collection, query, doc, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { BsDot, BsTruck } from "react-icons/bs";
import { GiAirplaneDeparture } from "react-icons/gi";
import {FaShip} from "react-icons/fa";


const TrackOrder = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const [trackingData, setTrackingData] = useState("");
  const [reversedShippingHistory, setReversedShippingHistory] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);

    try {
      const q = query(collection(db, "tracking"));

      onSnapshot(q, (querySnapshot) => {
        if (querySnapshot.empty) {
          console.log("empty");
        } else {
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          const tracking = data.find((item) => item.id === id);
          console.log(tracking, "tracking");
          if (!tracking) {
            console.log("empty");
            alert("No Tracking Data Found");
            navigate("/");
            return;
          }
          setTrackingData(tracking);
          setReversedShippingHistory(tracking.shippingHistory?.reverse());
        }

        console.log();
      });
    } catch (err) {
      console.log(err.message);
    }
  }, [id]);

  return (
    <div className="">
     <div
        className="breadcrumb-option set-bg"
        data-setbg="img/breadcrumb-bg.jpg"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1485575301924-6891ef935dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h2>Track Your Order</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="padding id-container general_track">
        <div className="container tracking-infos basic_info">
          <div className="">
            <h4 className="track-id-heading">Logistics Info: {id}</h4>

            <div className="mb-4">
              <h6
                className="track-heading"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "400",
                  color: "#000",
                  marginBottom: "5px"
                }}
              >
                Delivery Address:
              </h6>
              <p
                className="delivery_details"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "400",

                }}
              >
                {trackingData?.clientAddress}
              </p>
            </div>

            <div>
              <h6
                className="track-heading"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "400",
                  color: "#000",
                  marginBottom: "5px"
                }}
              >
                Estimated Delivery Date:
              </h6>
              <p
                className="delivery_details"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "400",

                }}
              >
                {trackingData?.deliveryDate}
              </p>
            </div>
          </div>

          <hr />

          <div className="tracking-infos">
            {/* <h5 className="track-heading"
              style={{
                marginBottom: "1.5rem",
              }}
            >Shipment History</h5> */}

            <div className="location_history">
              {trackingData &&
                trackingData.shippingHistory?.map((item, index) => (
                  <div key={index} className="location"
                    // style the first item
                    style={{
                      color: index === 0 ? "#000000" : "#666663",
                      fontWeight: index === 0 ? "bold" : "",
                    }}
                  >
                    <p className="dot">
                      {item?.icon === "road" ? (
                        <BsTruck className="icon" />
                      ) : item.icon === "plane" ? (
                        <GiAirplaneDeparture className="icon" />
                      ) : item.icon === "ship" ? (
                        <FaShip className="icon" />
                      ) : (
                        <BsDot className="icon" />
                      )}
                    </p>
                    <div>
                      <div>{item.location}</div>
                      <div>{new Date(item.time).toLocaleDateString()}</div>
                      <div>{item.status}</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* <div className="tracking-infos">
            <h4 className="track-heading">Packages</h4>

            <table>
              <thead>
                <tr>
                  <th>Qty.</th>
                  <th>Type</th>
                  <th>Description</th>
                  <th>Length</th>
                  <th>Width</th>
                </tr>
              </thead>
              <tbody>
                {trackingData &&
                  trackingData.packaging.map((item, index) => (
                    <tr key={index}>
                      <td>{item.PQuantity}</td>
                      <td>{item.PType}</td>
                      <td>{item.PDesc}</td>
                      <td>{item.PLength}</td>
                      <td>{item.PWidth}</td>
                    </tr>
                  ))}
                {trackingData?.packaging.length === 0 ?
                <tr>
                  <td colSpan="5">No Package have been added</td>
                </tr> :
                null
              }
              </tbody>
            </table>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
