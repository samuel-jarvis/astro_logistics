import React from "react";
import "./styles.scss";
import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import {
  collection,
  query,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase/config";

const ContactList = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [contactList, setContactList] = useState([]);

  const q = query(collection(db, "contacts"));

  useEffect(() => {
    try {
      onSnapshot(q, (querySnapshot) => {
        if (querySnapshot.empty) {
          setError("Sorry, we couldn't find that tracking number.");
          setLoading(false);
        } else {
          const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          console.log("data", data);
          setContactList(data);
        }
      });
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

  // delete id
  const deleteTracking = async (id) => {
    // prompt user to confirm delete
    const confirm = window.confirm(
      "Are you sure you want to delete this contact message?"
    );
    if (confirm) {
      // delete from firestore
      console.log(id);
      const ref = doc(db, "contacts", id);
      await deleteDoc(ref);
      alert("Successfully deleted message ");
    } else {
      return;
    }
  };

  return (
    <div className="contact-list">
      <h4 className="head">List of Contact Messages</h4>
      {contactList &&
        contactList.map((contact) => (
          <div className="contact" key={contact.id}>
            <div className="contact-card">
              <div>
                <h4>Name:</h4>
                <p>{contact.id}</p>
              </div>
              <div>
                <h4>Email:</h4>
                <p>{contact.email}</p>
              </div>
              <div>
                <h4>Message:</h4>
                <p>{contact.message}</p>
              </div>
            </div>
            <FaTimes
              onClick={() => deleteTracking(contact.id)}
              className="delete-icon"
            />
          </div>
        ))}
    </div>
  );
};

export default ContactList;
