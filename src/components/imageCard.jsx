import React from "react";

export const ImageCard = ({ image }) => {
    const tags = image.tags.split(',');
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
      <img
        src={image.webformatURL}
        alt=""
        className="w-full"
      />
      <div className="p-2 mx-auto ">
        <div className="text-2xl font-bold text-red-800">
          Photo by {image.user}
        </div>
        <ul>
          <li>Views:</li>
          {image.views}
          <li>Downloads:</li>
          {image.downloads}
          <li>Likes:</li>
          {image.likes}
        </ul>
      </div>
      <div className=" px-6 py-4 space-y-1 mx-auto">
        {tags.map((tag, index) => <span key={index} className="text-sm inline-block rounded-full px-2 py-1 mr-2 text-white bg-red-500 font-semibold">
          {tag}
        </span>)}
      </div>
    </div>
  );
};
