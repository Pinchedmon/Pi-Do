import React from "react";

const PreviewTitle = () => {
  return (
    <div className="leading-normal text-3xl md:text-4xl lg:text-5xl font-black mb-12">
      Первое{" "}
      <span className="text-green-700 text-justify text-4xl md:text-5xl lg:text-7xl">
        To - Do{" "}
      </span>{" "}
      <br className="block md:hidden" />
      приложение. <br />
      Только 100%
      <br className="block md:hidden" /> продуктивности.
    </div>
  );
};

export default PreviewTitle;
