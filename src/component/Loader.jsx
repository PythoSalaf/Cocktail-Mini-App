import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <InfinitySpin
        visible={true}
        width="200"
        color="#1c51e2"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;
