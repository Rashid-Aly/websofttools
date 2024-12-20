import { api_instagram, instagram_url } from "../../../../configs.js";

// pages/index.js
import { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState(null); // Initialize data as null

  useEffect(() => {
    // Fetch JSON data when the component mounts
    fetch(`${api_instagram}${instagram_url}`)
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData));
  }, []);

  return (
    <div>
      <h1>Instagram Data</h1>
      {data ? (
        <div>
          <h2>Post Information</h2>
          <p>ID: {data?.id}</p>
          <p>Shortcode: {data?.shortcode}</p>
          {/* Add more properties as needed */}
          <a href={data?.video_url} />
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default Home;
