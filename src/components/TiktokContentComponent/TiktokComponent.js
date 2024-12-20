/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image.js";
import {
  AiFillHeart,
  AiTwotoneMessage,
  AiFillEye,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { HiSave } from "react-icons/hi";
import { toast } from "sonner";
import ReactPlayer from "react-player";
import { api_url } from "../../../configs.js";
import { formatDuration } from "../../utils/utils";
import Dropdown from "../Dropdown/Dropdown"; // Import the Dropdown component here
import Button from "../reusable/Button/Button.js";

const TiktokComponent = ({ url, setIsLoading }) => {
  const [result, setResult] = useState(null);
  const [selectedOption, setSelectedOption] = useState({
    id: 1,
    name: "Watermark",
  });

  // Handle the selected option change
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  // Handle the download action
  const handleDownloadClick = async () => {
    if (!selectedOption) {
      // Handle the case where no option is selected
      toast.error("Please select a download option.");
      return;
    }

    // Show a loading toast
    const loadingToastId = toast.loading(
      "Be patient! Do not refresh the page, we are downloading your video.",
    );

    let downloadUrl;
    let downloadFileName = "downloaded-video_websofttools.mp4"; // Default file name

    switch (selectedOption.name) {
      case "Watermark":
        downloadUrl = result.video_watermark;
        break;
      case "No Watermark":
        downloadUrl = result.video_nowatermark;
        break;
      case "Audio":
        downloadUrl = result.music.play_url;
        downloadFileName = "downloaded-audio_websofttools.mp3"; // Set the file name to .mp3 for audio downloads
        break;
      default:
        break;
    }

    if (downloadUrl) {
      try {
        const response = await fetch(downloadUrl);
        if (response.ok) {
          const blob = await response.blob();

          // Create a Blob URL for the downloaded content
          const blobUrl = window.URL.createObjectURL(blob);

          // Create a hidden anchor element for downloading
          const anchor = document.createElement("a");
          anchor.href = blobUrl;
          anchor.download = downloadFileName;
          anchor.style.display = "none";

          // Append the anchor to the document body
          document.body.appendChild(anchor);

          // Trigger a click event on the anchor to initiate the download
          anchor.click();

          // Remove the anchor and revoke the Blob URL
          document.body.removeChild(anchor);
          window.URL.revokeObjectURL(blobUrl);

          // Hide the loading toast once the download completes
          toast.dismiss(loadingToastId);

          // Enable the download button immediately after download completes
          const downloadButton = document.querySelector(".download-button");
          if (downloadButton) {
            downloadButton.disabled = false;
          }
        } else {
          toast.error("Failed to fetch the file for download.");
        }
      } catch (error) {
        console.error(error);
        toast.error("An error occurred during the download process.");
      }
    } else {
      toast.error("Download URL not available for the selected option.");
    }
  };

  const tiktokFetched = async () => {
    setIsLoading(true);
    if (setIsLoading) {
      setResult(null);
    }
    try {
      const response = await fetch(`${api_url}${url}`);
      if (response.ok) {
        const data = await response.json();
        setResult(data.result);
        setIsLoading(false);
      } else {
        throw new Error("Failed to fetch TikTok data");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while fetching TikTok data");
    }
  };

  useEffect(() => {
    if (url) {
      tiktokFetched();
    }
  }, [url]);

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
      <div className="mx-auto flex max-w-7xl flex-col gap-5 p-6 md:flex-row lg:px-8">
        <div className="w-full rounded border border-black bg-black md:w-1/2">
          {result.video_watermark && (
            <div>
              <ReactPlayer url={result.video_watermark} width="100%" />
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2">
          {result?.id && (
            <div className="flex items-center gap-2">
              <Image
                src={result.author.avatar_thumb}
                alt={"Author Logo here"}
                className="w-10 rounded-full border-2 border-blue-300 "
                width={40}
                height={40}
              />
              <h1 className="text-xl font-semibold">
                {result.author.nickname}
              </h1>
            </div>
          )}
          {result?.duration && (
            <div className="mt-2 text-lg font-semibold text-gray-600">
              <span>Durations : </span>
              <span>{formatDuration(result?.duration)}</span>{" "}
            </div>
          )}
          <div className="mt-2 flex flex-wrap items-center gap-2 pb-[10px]">
            <div className="flex items-center">
              <AiFillHeart className="h-6 w-6 text-red-400" />{" "}
              <span className="text-lg text-gray-500">
                {result.statistics.digg_count}
              </span>
            </div>

            <div className="flex items-center">
              <AiTwotoneMessage className="h-6 w-6 text-green-600" />{" "}
              <span className="text-lg text-gray-500">
                {result.statistics.comment_count}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <AiFillEye className="h-6 w-6 text-blue-800" />{" "}
              <span className="text-lg text-gray-500">
                {result.statistics.play_count}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <AiOutlineShareAlt className="h-6 w-6 text-blue-500" />{" "}
              <span className="text-lg text-gray-500">
                {result.statistics.share_count}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <FaCloudDownloadAlt className="h-6 w-6 text-red-500" />{" "}
              <span className="text-lg text-gray-500">
                {result?.statistics.download_count}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <HiSave className="h-6 w-6 text-red-500" />{" "}
              <span className="text-lg text-gray-500">
                {result?.statistics.collect_count}
              </span>
            </div>
          </div>
          <div className="mt-2 flex w-full items-center justify-between rounded border border-gray-300 shadow-sm">
            <div className="w-[30%] bg-gray-300 p-2 text-center text-lg font-semibold md:w-[20%]">
              Format
            </div>
            <Dropdown
              items={[
                { id: 1, name: "Watermark" },
                { id: 2, name: "No Watermark" },
                { id: 3, name: "Audio" },
              ]}
              selected={selectedOption}
              onChange={handleOptionChange}
            />
          </div>
          <div className="mt-5 flex h-[60px] w-full items-center justify-center gap-4 rounded border border-gray-300 p-2">
            <Button full roundedmd lg onClick={handleDownloadClick}>
              Download
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

TiktokComponent.propTypes = {
  url: PropTypes.string.isRequired,
  setIsLoading: PropTypes.boolean,
};

export default TiktokComponent;
