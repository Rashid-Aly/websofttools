import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Breadcrumb } from "../../../components";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiFillFile, AiFillFileAdd } from "react-icons/ai";
import { FaFolderOpen } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";
import { NextSeo } from "next-seo";

const ImageConverter = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [convertedData, setConvertedData] = useState(null);
  const [isConverting, setIsConverting] = useState(false);
  const [inputFormat, setInputFormat] = useState("jpeg");
  const [outputFormat, setOutputFormat] = useState("jpg");

  const fileInputRef = useRef();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Data = e.target.result;
        setConvertedData(base64Data);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputFormatChange = (event) => {
    setInputFormat(event.target.value);
  };

  const handleOutputFormatChange = (event) => {
    setOutputFormat(event.target.value);
  };

  const handleConvert = () => {
    if (!selectedFile) {
      toast.error("Please select an image first.");
      return;
    }

    if (!selectedFile.name.toLowerCase().endsWith(`.${inputFormat}`)) {
      toast.error(`Only .${inputFormat} files are allowed.`);
      return;
    }

    setIsConverting(true);

    const reader = new FileReader();
    reader.onload = () => {
      const base64Data = reader.result;

      setTimeout(async () => {
        setConvertedData(base64Data);
        setIsConverting(false);

        await new Promise((resolve) => setTimeout(resolve, 1000));
        toast.success("Successfully converted! Please download your image", {
          autoClose: 3000,
        });
      }, 2000);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleDownload = () => {
    if (convertedData) {
      const a = document.createElement("a");
      a.href = convertedData;
      a.download = `converted_websofttools.${outputFormat}`;
      a.click();
    } else {
      toast.error(
        "No converted image available. Please start the conversion first.",
      );
    }
  };

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleCloseClick = () => {
    setSelectedFile(null);
    setConvertedData(null); // Reset converted data when a file is closed.
  };

  return (
    <>
      <NextSeo
        title="JPEG to JPG | Web Soft Tools"
        description="converts your image files online from JPEG to JPG format."
        canonical="https://www.websofttools.com/converters/jpeg-to-jpg"
      />
      <div className="bg-Gradient p-6">
        <div className="px:3 sm:container">
          <div className="mt-20 py-8">
            <Breadcrumb
              pages={[
                { name: "Converters", href: "/converters", current: false },
                {
                  name: `Convert ${inputFormat} to ${outputFormat}`,
                  href: "#",
                  current: true,
                },
              ]}
            />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded p-4">
              <h1 className="font-roboto text-h3 text-Primary">
                {inputFormat.toUpperCase()} to {outputFormat.toUpperCase()}{" "}
                Converter
              </h1>
              <p className="mt-4 font-roboto text-Body1 text-[#828181]">
                JPEG to JPG converts your image files online. Amongst many
                others, we support PNG, JPG, GIF, WEBP, and HEIC. You can use
                the options to control image resolution, quality, and file size.
              </p>
            </div>
            <div className="rounded p-4">
              <div>
                <h2 className="text-2xl font-bold">Convert</h2>
              </div>
              <div className="relative inline-flex items-center">
                <select
                  value={inputFormat}
                  onChange={handleInputFormatChange}
                  className="focus:shadow-outline-blue block h-[45px] w-[100px] appearance-none rounded border border-gray-400 bg-gray-800 px-2 py-2 leading-tight text-white shadow hover:border-gray-500 focus:border-blue-500 focus:outline-none"
                >
                  <option value="jpeg">JPEG</option>
                </select>
              </div>
              <span className="ml-2 text-xl font-semibold">to</span>
              <div className="relative ml-2 mt-4 inline-flex items-center">
                <select
                  value={outputFormat}
                  onChange={handleOutputFormatChange}
                  className="focus:shadow-outline-blue block h-[45px] w-[100px] appearance-none rounded border border-gray-400 bg-gray-800 px-4 py-2 leading-tight text-white shadow hover:border-gray-500 focus:border-blue-500 focus:outline-none"
                >
                  <option value="jpeg">JPG</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-3xl ">
        <div className="rounded-md p-8">
          <div className="flex justify-center">
            <button
              onClick={() => fileInputRef.current.click()}
              className="flex rounded-lg rounded-r-none  border-r-0 border-blue-700 bg-blue-500 p-3 pr-6 text-xl text-white hover:bg-blue-600 focus:outline-none"
            >
              <AiFillFileAdd className="mr-4 mt-[2px] text-2xl" />
              Select File
            </button>

            <button
              onClick={toggleDropdown}
              className="rounded-lg rounded-l-none  border-l-0 border-blue-700 bg-blue-500 p-2 text-4xl text-white hover:bg-blue-600 focus:outline-none"
            >
              <RiArrowDropDownLine />
            </button>
            {isDropdownVisible && (
              <div className="absolute z-10 mt-[52px] border border-gray-300 bg-white shadow-md">
                <ul>
                  <li>
                    <button
                      onClick={() => fileInputRef.current.click()}
                      className="flex p-2 px-5 font-semibold hover:bg-gray-100"
                    >
                      <FaFolderOpen className="mr-4 mt-1" />
                      From my Computer
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
          {selectedFile && (
            <div className="mt-6 bg-gray-200 p-4">
              <div className="flex justify-between">
                <p className="flex gap-4 text-center">
                  <AiFillFile className="text-2xl font-semibold" />
                  {selectedFile.name}
                </p>
                <MdOutlineClear
                  className="cursor-pointer text-2xl font-bold text-red-800"
                  onClick={handleCloseClick}
                />
              </div>
            </div>
          )}
          <div className="grid grid-cols-2 gap-4">
            <div className="mt-8 flex space-x-2">
              {selectedFile && !isConverting && (
                <>
                  <button
                    onClick={() => {
                      handleConvert();
                      setIsConverting(true);
                    }}
                    className="w-full flex-grow rounded-lg bg-blue-500 py-4 text-white hover:bg-blue-600"
                    disabled={isConverting}
                  >
                    Convert
                  </button>
                </>
              )}
              {isConverting && (
                <button className="flex-grow cursor-not-allowed rounded-lg bg-gray-300 py-4 text-white">
                  Complete
                </button>
              )}
            </div>
            {isConverting && (
              <button
                onClick={handleDownload}
                className="mt-8 h-16 flex-grow  rounded-lg bg-green-500 text-white hover:bg-green-600"
              >
                Download
              </button>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
      </div>
    </>
  );
};

export default ImageConverter;
