import React, { useState, useRef } from "react";
import Image from "next/image";
import { CameraIcon } from "@heroicons/react/outline";
import Modal from "Components/Modal/Modal";
import styles from "./UploadPost.module.css";
const UploadPost = ({ showUploadPost, setShowUploadPost }) => {
  const filePickerRef = useRef(null);
  const [selectedFileToPost, setSelectedFileToPost] = useState(null);
  const addImagePost = (e) => {
    console.log(e);
    const reader = new FileReader();
    console.log(reader, "reader");
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    console.log(reader, "reader2");
    reader.onload = (readerEvent) => {
      console.log(readerEvent, "readerEvent");
      setSelectedFileToPost(readerEvent.target.result);
    };
  };
  return (
    <div>
      <Modal
        showModal={showUploadPost}
        onClose={() => {
          setSelectedFileToPost(null);
          setShowUploadPost(false);
        }}
        footer={
          <button className=" w-full text-white font-bold  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-3 hover:opacity-60 rounded-xl shadow-xl">
            Upload Post!
          </button>
        }
      >
        <div className="grid place-items-center space-y-4">
          {selectedFileToPost ? (
            <div
              //   style={{ position: "relative", width: "", height: "400px" }}
              className={`${styles.selectedPost__wrapper}`}
            >
              <Image src={selectedFileToPost} alt="post-image" layout="fill" />
            </div>
          ) : (
            <>
              <div
                className="h-10 w-10 bg-red-200 text-white rounded-full shadow-lg p-2 cursor-pointer  hover:scale-110 transition-all ease-in-out duration-120"
                onClick={() => filePickerRef.current.click()}
              >
                <CameraIcon className="h-6 w-6 text-red-500" />
              </div>
              <input
                type="file"
                ref={filePickerRef}
                hidden
                onChange={addImagePost}
              />
              <span className="font-bold">Upload a photo!</span>
            </>
          )}
          <input
            type="text"
            onChange={(e) => console.log(e.target.value)}
            placeholder="Enter a caption here.."
            className="mx-1 outline-none focus:ring-0 rounded-lg"
          />
        </div>
      </Modal>
    </div>
  );
};

export default UploadPost;
