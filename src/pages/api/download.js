import ytdl from "ytdl-core";

export default async function handler(req, res) {
  try {
    const { yt_url } = req.query;

    if (!yt_url) {
      return res
        .status(400)
        .json({ error: "Invalid request. Video URL and format are required." });
    }

    // Get video information
    const info = await ytdl.getInfo(yt_url);

    if (!info) {
      return res
        .status(400)
        .json({ error: "Video information not available." });
    }

    // const requestedFormat = info.formats.find(
    //   (f) => f.qualityLabel === format || f.container === format,

    //   console.log(info.formats, "info format"),
    // );

    // if (!requestedFormat) {
    //   return res
    //     .status(400)
    //     .json({ error: "Requested format not found for this video." });
    // }

    const result = {
      title: info.videoDetails.title,
      description: info.videoDetails.description,
      lengthSeconds: info.videoDetails.lengthSeconds,
      ownerProfileUrl: info.videoDetails.ownerProfileUrl,
      category: info.videoDetails.category,
      video_url: info.videoDetails.video_url,

      formatsData: info.formats.map((f) => ({
        mimeType: f.mimeType,
        bitrate: f.bitrate,
        audioBitrate: f.audioBitrate,
        itag: f.itag,
        qualityLabel: f.qualityLabel,
        container: f.container,
        url: f.url,
      })),
    };

    // // Generate a unique filename with a timestamp
    // const timestamp = Date.now(); // Add a timestamp to make the filename unique
    // const filename = `${info.videoDetails.title.replace(
    //   /[^a-zA-Z0-9]/g,
    //   "_",
    // )}_${timestamp}.${requestedFormat.container}`;

    // // Determine the user's download directory based on their OS
    // const downloadDirectory = os.homedir() + "/Downloads/test";

    // Download the video from YouTube using the chosen format and save it.
    // ytdl(url, { format: requestedFormat });
    // .pipe(createWriteStream(`${downloadDirectory}/${filename}`))
    res.status(200).json({ result });
    // .on("finish", () => {
    //   console.log("Video downloaded successfully.");
    // })
    // .on("error", (err) => {
    // console.error("Error downloading video:", err);
    // res.status(500).json({ error: "Error downloading video." });
    // });
  } catch (error) {
    console.error("API error:", error);
    res.status(500).json({ error: "Internal server error." });
  }
}
