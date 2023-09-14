import React, { useState, useEffect } from "react";


const FetchData = () => {
  const [data, setData] = useState([]);
  const dataKey = "geeshauData";

  useEffect(() => {
    // Function to fetch and store data in localStorage
    const fetchData = async () => {
      try {
        // const response = await fetch("https://sheetdb.io/api/v1/iwggwlq423ayl");
        const response = await fetch("https://api.sheety.co/6a796c6b3ddf98bb6b180002a6297190/geeshauArtProducts/geeshauProducts");
        const jsonData = await response.json();
        
        // Store the JSON data in localStorage
        localStorage.setItem(dataKey, JSON.stringify(jsonData));
        console.log("Data stored in localStorage");

        // Set the state with the fetched data
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Initial fetch
    fetchData();

    // Update the JSON data in localStorage every 10 seconds
    const intervalId = setInterval(fetchData, 10000);

    // Cleanup the interval on unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div>{JSON.stringify(data)}</div>;
};

export default FetchData;

// https://sheetdb.io/api/v1/iwggwlq423ayl