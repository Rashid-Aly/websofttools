const axios = require("axios");

export default async (req, res) => {
  try {
    const { url } = req.query;

    console.log(req.query, "query");

    if (!url) {
      return res.status(400).json({ error: "Missing Instagram URL" });
    }

    const BASE_URL = "https://www.instagram.com/p/";
    const postId = url
      .replace(/\s/g, "")
      .split("/")
      .filter((x) => x.length > 0)[3];

    try {
      // Make a request to Instagram
      const response = await axios.get(
        `${BASE_URL}${postId}/?utm_source=ig_web_copy_link?&__a=1&__d=1`,
        {
          headers: {
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.52",
          },
        },
      );

      const result = response.data.graphql.shortcode_media;

      // Extract data from the Instagram result
      const newData = {
        id: result.id,
        shortcode: result.shortcode,
        has_audio: result.has_audio,
        is_video: result.is_video,
        video_url: result.video_url,
        product_type: result.clips,
        video_duration: result.video_duration,
        thumbnail_src: result.thumbnail_src,
        owner: {
          id: result.owner.id,
          is_verified: result.owner.is_verified,
          profile_pic_url: result.owner.profile_pic_url,
          username: result.owner.username,
          blocked_by_viewer: result.owner.blocked_by_viewer,
          restricted_by_viewer: result.owner.requested_by_viewer,
          followed_by_viewer: result.owner.followed_by_viewer,
          full_name: result.owner.full_name,
          has_blocked_viewer: result.owner.has_blocked_viewer,
          is_embeds_disabled: result.owner.is_embeds_disabled,
          is_private: result.owner.is_private,
          is_unpublished: result.owner.is_unpublished,
          requested_by_viewer: result.owner.requested_by_viewer,
          pass_tiering_recommendation: result.owner.pass_tiering_recommendation,
        },
        clips_music_attribution_info: {
          artist_name: result?.clips_music_attribution_info?.artist_name,
          song_name: result?.clips_music_attribution_info?.song_name,
          uses_original_audio:
            result?.clips_music_attribution_info?.uses_original_audio,
          should_mute_audio:
            result?.clips_music_attribution_info?.should_mute_audio,
          should_mute_audio_reason:
            result?.clips_music_attribution_info?.should_mute_audio_reason,
          audio_id: result?.clips_music_attribution_info?.audio_id,
        },
      };

      // Send the newData object back to the client as JSON
      return res.status(200).json(newData);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Handle 401 Unauthorized error
        console.log(
          "Received 401 Unauthorized error. You may need to add authentication logic.",
        );
        return res.status(401).json({ error: "Unauthorized" });
      } else {
        console.error(error);
        return res.status(500).json({ error: "Error fetching Instagram data" });
      }
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
