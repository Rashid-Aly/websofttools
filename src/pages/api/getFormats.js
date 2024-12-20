// pages/api/getFormats.js
import ytdl from "ytdl-core";

export default async function handler(req, res) {
  try {
    const { url } = req.query;

    if (!url) {
      return res
        .status(400)
        .json({ error: "Invalid request. Video URL is required." });
    }

    // Get video information
    const info = await ytdl.getInfo(url);

    // Use a Set to keep track of unique format labels
    const uniqueFormats = new Set();

    // Extract available format labels with non-null qualityLabel
    const formatsWithQualityLabel = info.formats
      .filter((format) => format.qualityLabel !== null)
      .map((format) => {
        const key = format.qualityLabel + format.container;
        if (!uniqueFormats.has(key)) {
          uniqueFormats.add(key);
          return {
            qualityLabel: format.qualityLabel,
            container: format.container,
            quality: format.quality,
            codecs: format.codecs,
            itag: format.itag,
            approxDurationMs: format.approxDurationMs,
            contentLength: format.contentLength,
          };
        }
        return null;
      })
      .filter((format) => format !== null); // Remove null entries

    console.log(formatsWithQualityLabel, "formatsWithQualityLabel");
    res.status(200).json({ formats: formatsWithQualityLabel });
  } catch (error) {
    console.error("API error:", error);
    res.status(500).json({ error: "Internal server error." });
  }
}
