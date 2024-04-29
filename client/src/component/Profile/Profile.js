import React, { useState, useEffect } from "react";
import Web3 from "web3";

const ProfilePage = () => {
  const [address, setAddress] = useState("");

  useEffect(() => {
    const loadWeb3 = async () => {
      if (window.ethereum) {
        // Connect to MetaMask
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        const accounts = await window.web3.eth.getAccounts();
        setAddress(accounts[0]);
      } else {
        console.log("MetaMask not detected!");
      }
    };

    loadWeb3();
  }, []);

  return (
    <div className="profile-container">
      <h1>Profile Page</h1>
      <p>Connected MetaMask Address: {address}</p>
      {/* Your image upload and display code */}
    </div>
  );
};

export default ProfilePage;
