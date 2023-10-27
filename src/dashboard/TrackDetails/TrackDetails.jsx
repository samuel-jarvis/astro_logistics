import React from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { useState, useEffect } from "react";
import "./editForm.scss";
import { Link } from "react-router-dom";
import { collection, query, doc, setDoc, onSnapshot } from "firebase/firestore";

const TrackDetails = () => {
  const params = useParams();
  const { id } = params;
  const [trackingData, setTrackingData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // location update
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [icon, setIcon] = useState("road"); // road, dot, plane

  // extra details
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [shippingHistory, setShippingHistory] = useState([]);

  useEffect(() => {
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
          console.log("tracking");
          console.log(tracking);
          setTrackingData(tracking);
          setClientName(tracking?.clientName);
          setClientAddress(tracking?.clientAddress);
          setDeliveryDate(tracking?.deliveryDate);
          setDeliveryDate(tracking?.deliveryDate);
          setShippingHistory(tracking?.shippingHistory);
        }
      });
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

  const addShipping = async (e) => {
    if (!time || !location || !status) {
      alert("Please fill all fields");
      return;
    }

    e.preventDefault();

    const payload = {
      clientName,
      clientAddress,
      deliveryDate,
      shippingHistory: [
        ...trackingData?.shippingHistory,
        {
          icon: icon ?? "dot",
          time,
          location,
          status,
        }
      ]
    }
    console.log("payload", payload);
    // return

    const ref = doc(db, "tracking", id);

    await setDoc(ref, payload);
    setTime("");
    setLocation("");
    setStatus("");
  };

  const deleteLastItem = async () => {
    if (trackingData.shippingHistory.length === 0) {
      alert("No location to delete");
      return;
    }

    const confirm = window.confirm(
      "Delete last location?"
    );
    if (confirm) {
      // delete from firestore
      const ref = doc(db, "tracking", id);

      const shippingHistory = trackingData.shippingHistory;
      shippingHistory.pop();
      await setDoc(ref, {
        clientName,
        clientAddress,
        deliveryDate,
        shippingHistory,
      });
    }
  };

  const addDetails = async (e) => {
    e.preventDefault();
    const ref = doc(db, "tracking", id);

    const payload = {
      clientName,
      clientAddress,
      deliveryDate,
      shippingHistory: trackingData.shippingHistory,
    };

    console.log("payload", payload);
    // return

    await setDoc(ref, payload);
  };

  return (
    <div className="trackingPage padding">
      <div className="section-title parallax-bg parallax-light">
        {/* <ul className="bg-slideshow">
          <li>
            <div
              style={{
                backgroundImage:
                  "url(https://plus.unsplash.com/premium_photo-1663011354048-a81a907effd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80)",
              }}
              class="bg-slide"
            ></div>
          </li>
        </ul> */}
        <div class="section__inner">
          <div class="container">
            <div class="row">
              <div class="col-xs-12">
                <h3 class="ui-title-page">Admin: Add Tracking Info</h3>
                <div class="decor-2 decor-2_mod-a decor-2_mod_white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Link className="back_link" to="/admin/tracking">
        Back to Tracking
      </Link> */}

      <div className="tracking-list">
        {trackingData && (
          <>
            <h2 className="head">ID: {trackingData.id}</h2>

            <div>
              <form action="" onSubmit={addDetails}>
                <div className="form__group">
                  <label htmlFor="clientName">Client Name</label>
                  <input
                    type="text"
                    name="clientName"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="clientName">Delivery Address</label>
                  <input
                    type="text"
                    name="Delivery address"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="clientName">Delivery Date</label>

                  <input
                    type="date"
                    name="deliveryDate"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <button className="" type="submit">
                    Update
                  </button>
                </div>
              </form>
            </div>

            <h3 style={{
              marginTop: "2rem",
              marginBottom: "1rem"
            }}>Tracking Locations</h3>
            <div>
              <table style={{
                width: "100%"
              }}>
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Location</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody style={{
                  fontSize: "1rem"
                }}>
                  {trackingData.shippingHistory && trackingData.shippingHistory.map((item, index) => (
                    <tr key={index}>
                      <td>{item.time}</td>
                      <td>{item.location}</td>
                      <td>{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {trackingData.shipping?.length === 0 ? (
                <p>No Location added yet</p>
              ) : null}
            </div>
          </>
        )}

        {/* add input for time and location */}
        <div className="add__tracking__details">
          <form>
            {/* select with input type for icon road, dot and plane */}
            <select for='icon' style={{
              fontSize: "1rem",
              marginBottom: "1rem",
              padding: "0.4rem 1rem"
            }}
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
            >
              <option value="dot">Dot</option>
              <option value="road">Truck</option>
              <option value="plane">Plane</option>
              <option value="ship">Ship</option>
            </select>

            <input
              type="datetime-local"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="Time"
            />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
            />
            <input
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              placeholder="Status"
            />
            <button onClick={(e) => addShipping(e)}>Add</button>
          </form>
        </div>

        <div className="delete_last">
          <p onClick={() => deleteLastItem()}>Delete Last Location</p>
        </div>
      </div>
    </div>
  );
};

export default TrackDetails;
