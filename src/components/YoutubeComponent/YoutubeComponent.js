import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "sonner";
import { api_yt } from "../../../configs.js";
import ReactPlayer from "react-player";
import { formatDuration } from "../../utils/utils.js";
import Dropdown from "../Dropdown/Dropdown.js";
import Button from "../reusable/Button/Button.js";

const YoutubeComponent = ({ yt_url, setIsLoading }) => {
  const [result, setResult] = useState(null);
  const [selectedOption, setSelectedOption] = useState({
    name: "360p",
  });

  let mp4Videos = [];
  result?.formatsData.map((item) => {
    if (
      item.container === "mp4" &&
      typeof item.qualityLabel === "string" &&
      item.audioBitrate !== null && // checking value of audioBitrate
      item.audioBitrate !== undefined // checking property exist  in array
    ) {
      mp4Videos.push(item);
    }
  });

  // filter mp4Videos an array to get  videoQualities value
  const videoQualities = [
    "244p",
    "360p",
    "480p",
    "720p",
    "1080p",
    "1080p50",
    "1440p",
    "2160p",
    "4320p",
  ];
  const selectedQualities = mp4Videos.filter((item) =>
    videoQualities.includes(item.qualityLabel),
  );

  // filter array to avoid occurance of mutiple value in array
  const selectedVideos = new Set();
  const duplicatedVideos = selectedQualities.filter((data) => {
    if (!selectedVideos.has(data.qualityLabel)) {
      selectedVideos.add(data.qualityLabel);
      return true;
    }
    return false;
  });

  // Handle the download action
  const handleDownloadClick = () => {
    if (!selectedOption) {
      toast.error("Please select a download option.");
      return;
    } else {
      const downloadVideo = duplicatedVideos.filter((link) => {
        return selectedOption.name === link.qualityLabel;
      })[0]; // Assigned value to downloadVideo which are selectedOption
      window.open(downloadVideo.url, "_blank");
    }
  };

  const handleOptionChange = (item) => {
    setSelectedOption({ name: item.qualityLabel });
  };

  const youtubeFetched = async () => {
    setIsLoading(true);
    if (setIsLoading) {
      setResult(null);
    }
    try {
      const response = await fetch(`${api_yt}${yt_url}`);
      if (response.ok) {
        const data = await response.json();
        setResult(data.result);
        setIsLoading(false);
      } else {
        throw new Error("Failed to fetch youtube data");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while fetching youtube data");
    }
  };
  useEffect(() => {
    if (yt_url) {
      youtubeFetched();
    }
  }, [yt_url]);

  useEffect(() => {
    if (result) {
      toast.success("Successfully...");
    }
  }, [result]);

  if (!result) {
    return null;
  }

  return (
    <>
      <div className="mx-auto mt-5 flex max-w-7xl flex-col gap-5 p-6 md:flex-row lg:px-8">
        <div className="w-full rounded border-2 border-black lg:w-1/2">
          <div>
            <ReactPlayer url={result.video_url} width="100%" />
          </div>
        </div>
        <div className="w-full p-3 lg:w-1/2 ">
          {result?.title && (
            <div className="text-xl font-semibold">{result.title}</div>
          )}
          {result?.lengthSeconds && (
            <div className="mt-2 text-lg font-semibold text-gray-600">
              <span>Durations : </span>
              <span>{formatDuration(result?.lengthSeconds)}</span>{" "}
            </div>
          )}

          <div className="mt-2 flex w-full items-center justify-between rounded border border-gray-300 shadow-sm">
            <div className="w-[30%] bg-gray-300 p-2 text-center text-lg font-semibold md:w-[20%]">
              Quality
            </div>
            <Dropdown
              items={duplicatedVideos}
              selected={selectedOption} //  by default 360p
              onChange={handleOptionChange}
            />
          </div>
          <div className="mt-5 flex h-[60px] w-full items-center justify-center rounded border border-gray-300 p-2">
            <Button rounded full onClick={handleDownloadClick}>
              Download
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default YoutubeComponent;

YoutubeComponent.propTypes = {
  yt_url: PropTypes.string.isRequired,
  setIsLoading: PropTypes.func,
};
