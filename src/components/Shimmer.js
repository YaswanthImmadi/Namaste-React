import React from "react";

const Shimmer = () => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="border-t-4 border-blue-500 border-solid rounded-full h-14 w-14 animate-spin">
        <div className="border-t-4 border-orange-500 border-solid rounded-full h-16 w-16 animate-spin"></div>
        {/* <div className="border-t-4 border-green-500 border-solid rounded-full h-18 w-18 animate-spin"></div> */}
      </div>
       
    </div>
  );
};

export default Shimmer;
