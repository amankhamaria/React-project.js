import React from "react";
import YtCard from "../components/YtCard";

function HomePage() {

  const singleVideo ={
    thumbnail:"https://i.ytimg.com/vi/4zuNNzzHEcQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBNuS7l3PkI68b2b3ZzA_dJ7bYLCA",
    title:"राधे तेरे चरणों की धूल जो मिल जाए | Radhe Tere Charno Ki | Bhumika Sharma | Krishna New Bhajan 2025",
    chanelName:"Radhika",
    chanelLogo:"https://yt3.ggpht.com/Y02h6nGppvXQNMUK0mhYSp-iTmAOsLjrYduGIxkNpqCgVFo6lz5roGwmDFD-B11ugKXIiCrHKw=s68-c-k-c0x00ffffff-no-rj",
    views:"12M",
    uploadedTime:"20 days ago"
  }

  return (
    <div>
      <YtCard videoDetails={singleVideo}/>
    </div>
  );
}

export default HomePage;