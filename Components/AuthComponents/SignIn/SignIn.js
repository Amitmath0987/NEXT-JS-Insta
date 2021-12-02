import Image from "next/image";
import leftBanner from "@assets/images/signinLeft.jpg";
import styles from "../Auth.module.css";
import Link from "next/link";
import instaTextLogo from "@assets/images/instaText.png";

const SignIn = () => {
  // <div className=" h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  p-10">
  //   <div className="mx-24 bg-white h-full rounded-xl shadow-2xl flex justify-between items-center  p-10 ">
  //     <div
  //       className=""
  //       style={{ height: "500px", width: "400px", position: "relative" }}
  //     >
  //       <Image
  //         src={leftBanner}
  //         className="rounded-2xl shadow-2xl"
  //         // objectFit="contain"
  //         layout="fill"
  //       />
  //     </div>
  //     <div className="border-2 h-full ">
  //       <h1 className={`${styles.formTitle} text-5xl`}>Instagram</h1>
  //     </div>
  //   </div>
  // </div>

  return (
    <div
      className="flex items-center justify-around h-screen
    bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  p-2 md:p-10
    "
    >
      <div className="flex items-center justify-around bg-white rounded-xl shadow-2xl h-full w-full p-10">
        <div
          className="hidden w-6/12 h-full px-5 lg:block"
          // style={{ backgroundColor: "#C7E5FD" }}
        >
          <div
            className="relative flex items-center h-full"
            style={{ height: "74vh" }}
          >
            <Image
              className="rounded-2xl shadow-xl"
              src={leftBanner}
              layout="fill"
            />
          </div>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col justify-center w-full p-3 md:w-6/12 "
        >
          <div className="flex justify-center mb-6 ">
            <div className="relative h-48 w-48 ">
              <Image
                src={instaTextLogo}
                alt="Instagram"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div style={{ width: "100%", maxWidth: "500px" }}>
              {/* <GoogleLogin /> */}
              <div className="flex flex-col space-y-3">
                {/* {errorMessage && <h5>{errorMessage}</h5>} */}
                <input
                  type="email"
                  placeholder="Username/Email"
                  className="rounded-xl focus:ring-2 focus:ring-pink-600 mb-4 "
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="rounded-xl focus:ring-2 focus:ring-pink-600 "
                />
                <div className="flex justify-end text-pink-700 underline">
                  <Link href="/forgot-password">Forgot Password</Link>
                </div>

                <button
                  type="button"
                  class="text-white py-3 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:opacity-75  rounded-lg"
                >
                  login
                </button>
                <div className="pt-1 text-sm text-center">
                  <span className="text-accent-7">Don't have an account?</span>
                  {` `}
                  <Link href="/signup">
                    <a className="font-bold cursor-pointer text-accent-9 hover:underline">
                      Sign Up
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
