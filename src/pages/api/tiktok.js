// pages/api/tiktok.js
import TikTokNoWatermark from "./../api/tiktokApi";

export default async (req, res) => {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({ error: "Missing TikTok URL" });
    }

    // Call the TikTokNoWatermark function
    try {
      const tiktokData = await TikTokNoWatermark(url, true);

      // Set CORS headers
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept",
      );

      // Send the TikTok data back to the client as JSON
      res.status(200).json(tiktokData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error fetching TikTok data" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
