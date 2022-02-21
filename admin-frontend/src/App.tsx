import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@apollo/client";
import imageQuery from "./queries/image";
import { Images } from "./interfaces/Image";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { useEffect, useState } from "react";
import { Actions } from "@cloudinary/url-gen";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { setDefaultResultOrder } from "dns";
declare global {
  interface Window {
    cloudinary: any;
  }
}

window.cloudinary = window.cloudinary || {};
function App() {
  const cloud = new Cloudinary({
    cloud: {
      cloudName: "dqmgwrjoi",
    },
  });

  // const image = cloud.image("n1kbnpahwqtykcie4ybf");

  // const image = cloud.image("cld-sample");

  // image
  //   .resize(
  //     thumbnail().width(1280).height(720).gravity(focusOn(FocusOn.face()))
  //   )
  //   .roundCorners(byRadius(100));

  const [state, setState] = useState<any | null>("");

  const [pushed, setPushed] = useState<boolean>(false);

  const [url, setUrl] = useState<string>("");

  const [image, setImage] = useState<any>({});

  const handleChange = (files: any) => {
    setState(files[0]);
  };

  const handleClick = () => {
    const formData = new FormData();

    formData.append("file", state);

    formData.append("upload_preset", "qtzokf2m");

    const options = {
      method: "POST",
      body: formData,
    };

    fetch("https://api.cloudinary.com/v1_1/dqmgwrjoi/upload", options)
      .then((res) => res.json())
      .catch((e) => console.log(e, "message"))
      .then((res) => {
        console.log(res.secure_url);
        setPushed(true);
        setUrl(res.secure_url);
      })
      .catch((e) => console.log(e, "message1"));
  };

  let myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dqmgwrjoi",
      uploadPreset: "qtzokf2m",
    },
    (error: any, result: any) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        setImage(result);
        setPushed(true);
        setUrl(result.info.secure_url);
      }
    }
  );

  const openWidget = () => {
    myWidget.open();
  };
  // const { loading, error, data } = useQuery<Images>(imageQuery);
  // console.log(error, "er");
  return (
    // <AdvancedImage cldImg={images} />
    <div className="flex flex-col h-screen">
      {/* <AdvancedImage cldImg={image} /> */}
      <Header />
      <main className="flex-grow">
        <button
          onClick={openWidget}
          id="upload_widget"
          className="cloudinary-button"
        >
          Upload files
        </button>
        {/* <input
          className="mx-auto"
          type="file"
          onChange={(e) => handleChange(e.target.files)}
          name="sample_image"
        />

        <button
          onClick={handleClick}
          className="bg-red-500 hover:bg-red-900 max-w-2 font-bold py-2 px-4 rounded-xl"
        >
          Upload Image
        </button> */}
        {/* {pushed && <AdvancedImage cldImg={image} />} */}
        {pushed && <img src={url} className="justify-end" />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
