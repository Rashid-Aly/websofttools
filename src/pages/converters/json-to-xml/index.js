import React, { useState } from "react";
import xmljs from "xml-js";
import { Breadcrumb, Button } from "../../../components";
import { NextSeo } from "next-seo";

const JsonToXml = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [xmlOutput, setXmlOutput] = useState("");
  const [conversionError, setConversionError] = useState(null);

  const handleJsonInputChange = (e) => {
    setJsonInput(e.target.value);
  };

  const handleStartConversion = () => {
    // Inside handleStartConversion
    try {
      const parsedJson = JSON.parse(jsonInput);
      console.log(parsedJson, "Parsed Json");
      const xml = xmljs.js2xml(parsedJson, { compact: true, spaces: 2 });
      console.log(xml, "XML");
      setXmlOutput(xml);
      setConversionError(null);
    } catch (error) {
      console.error("XML Conversion Error:", error);
      setXmlOutput("");
      setConversionError("Error during XML conversion.");
    }
  };

  const handleDownloadXml = () => {
    if (xmlOutput) {
      // Create a Blob containing the XML data
      const blob = new Blob([xmlOutput], { type: "application/xml" });
      const url = URL.createObjectURL(blob);

      // Create a temporary anchor element to trigger the download
      const a = document.createElement("a");
      a.href = url;
      a.download = "converted.xml";
      document.body.appendChild(a);
      a.click();

      // Remove the temporary anchor element
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <>
      <NextSeo
        title="JSON to XML | Web Soft Tools"
        description="Websofttools supports a wide range of file types which includes JSON to XML file conversion."
        canonical="https://www.websofttools.com/converters/json-to-xml"
      />
      <div className="bg-Gradient p-6">
        <div className="px:3 sm:container">
          <div className="mt-20 py-8">
            <Breadcrumb
              pages={[
                { name: "Converters", href: "/converters", current: false },
                {
                  name: "JSON to XML",
                  href: "#",
                  current: true,
                },
              ]}
            />
          </div>
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="p-4">
              <h1 className="mb-4 text-2xl font-bold">JSON to XML Converter</h1>
              <div className="flex">
                <div className="w-1/2 pr-4">
                  <textarea
                    className="h-48 w-full rounded border border-gray-300 p-2 text-base font-normal leading-tight text-black outline-none drop-shadow-md focus:border-blue-500"
                    placeholder="Enter JSON here..."
                    value={jsonInput}
                    onChange={handleJsonInputChange}
                  />
                </div>
                <div className="w-1/2 pl-4">
                  <textarea
                    className="h-48 w-full rounded border border-gray-300 p-2 text-base font-normal leading-tight text-black outline-none drop-shadow-md focus:border-blue-500"
                    placeholder="XML Output"
                    value={xmlOutput}
                    onChange={() => {}}
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <Button roundedmd lg onClick={handleStartConversion}>
                  Start
                </Button>
                <button
                  className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
                  onClick={handleDownloadXml}
                  disabled={!xmlOutput}
                >
                  Download
                </button>
              </div>
              {conversionError && (
                <p className="mt-2 text-red-500">{conversionError}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JsonToXml;
