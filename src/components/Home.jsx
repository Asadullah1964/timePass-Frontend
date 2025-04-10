import { Link } from "react-router-dom";
import Post from "./Post";

const Home = () => {
  return (
    // <div
    //   style={{
    //     backgroundColor: "#f0f0f0",
    //     height: "100vh",
    //     width: "100vw",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <div className="home-container" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
    //     <h1>Welcome to the Home Page!</h1>
    //     <p>
    //       Explore the features and enjoy your stay.
    //     </p>
    //   </div>
    // </div>

    <>
    <Post />
    </>
  );
};

export default Home;
