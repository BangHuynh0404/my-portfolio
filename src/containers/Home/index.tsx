import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeContainerProps {}

const HomeContainer: React.FC<HomeContainerProps> = () => {
  console.log("Im in Home, Delete me!");
  return (
    <>
      <h1>home</h1>
      <div style={{ height: "100vh", width: 200, backgroundColor: "red" }}>
      </div>
    </>
  );
};

export default HomeContainer;
