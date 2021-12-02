import Post from "./Post/Post";
import profilePic from "@assets/images/dummyUser.jpg";
const Posts = () => {
  const posts = [
    {
      id: "123",
      userName: "Amit Mathur",
      userImg: profilePic,
      img: profilePic,

      caption: "yeah i am gonna make the instagram clone.",
    },
    {
      id: "145",
      userName: "John splash",
      userImg: profilePic,
      img: profilePic,

      caption: "yeah i am gonna make the instagram clone.",
    },
    {
      id: "152",
      userName: "Ranveer Singh",
      userImg: profilePic,
      img: profilePic,
      caption: "yeah i am gonna make the instagram clone.",
    },
  ];
  return (
    <div>
      {posts?.map((post) => (
        <Post
          key={post?.id}
          id={post.id}
          userName={post?.userName}
          userImage={post?.userImg}
          img={post?.img}
          caption={post?.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
