import React from "react";

const Banner = () => {
  return (
    <div className="relative hero min-h-[60vh] overflow-hidden rounded-md">
      <div
        className="absolute inset-0 bg-cover bg-center blur-xs scale-110"
        style={{
          backgroundImage:
            "url(https://assets.gqindia.com/photos/5cdc0d2854004341343c40a7/16:9/w_2560%2Cc_limit/top-image16.jpg)",
        }}
      ></div>
      <div className="relative z-10 ">
      <div className="hero-overlay"></div>
      <div className="hero-content text-green-100 text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-warning text-gray-700">Claim free credit</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Banner;
