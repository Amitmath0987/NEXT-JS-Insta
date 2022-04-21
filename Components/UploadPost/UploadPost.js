import React, { useState, useRef } from "react";
import Image from "next/image";
import { CameraIcon } from "@heroicons/react/outline";
import Modal from "Components/Modal/Modal";
import styles from "./UploadPost.module.css";
import { createPost } from "services/post";
import { useDispatch } from "react-redux";

const UploadPost = ({ showUploadPost, setShowUploadPost }) => {
  const filePickerRef = useRef(null);
  const [selectedFileToPost, setSelectedFileToPost] = useState(null);
  const [caption, setCaption] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const addImagePost = (e) => {
    console.log(e);
    const reader = new FileReader();
    if (e.target.files[0]) {
      const files = [e.target.files];
      console.log(`files`, files);
      console.log(e.target.files);
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFileToPost(readerEvent.target.result);
    };
  };
  const handleCreatePost = async () => {
    // first upload the image to cloudinary
    const formData = new FormData();
    formData.append("file", selectedFileToPost);
    formData.append("caption", caption);
    formData.append("body", body);
    // try {
    //   const postres = await createPost(formData);
    // } catch (error) {
    //   console.log(error, "error");
    // }

    dispatch({
      type: "CREATE_POST",
      payload: {
        formData,
      },
    })
    // formData.append("upload_preset", "insta-clone");
    // formData.append("cloud_name", "postsContainer");

    // try {
    //   const res = await axios.post(
    //     "https://api.cloudinary.com/v1_1/postsContainer/image/upload",
    //     formData
    //   );
    //   console.log(res);
    //   //after getting uploaded image url call service to create post.
    //   const postres = await createPost({
    //     caption,
    //     url: res?.secureUrl,
    //   });
    // } catch (error) {
    //   console.log(error, "error");
    // }
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
          <button
            className=" w-full text-white font-bold  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-3 hover:opacity-60 rounded-xl shadow-xl"
            onClick={handleCreatePost}
          >
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
              <Image
                src={selectedFileToPost}
                alt="post-image"
                layout="fill"
                objectFit="cover"
              />
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
                // multiple
                accept=""
              />
              <span className="font-bold">Upload a photo!</span>
            </>
          )}
          <input
            type="text"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Enter a caption here.."
            className="mx-1 outline-none focus:ring-0 rounded-lg"
          />
          <textarea
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter a about post."
          />
        </div>
      </Modal>
    </div>
  );
};

export default UploadPost;
