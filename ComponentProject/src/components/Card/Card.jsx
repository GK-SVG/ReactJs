import React from 'react';

function Card(props) {
  const { title, description, imageUrl="https://img.freepik.com/free-vector/gradient-ui-ux-elements_23-2149057419.jpg" } = props;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mt-2">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black">{title ? title : 'No title available.'}</div>
        <p className="text-gray-700 text-base">
          {description ? description : 'No description available.'}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Action
        </button>
      </div>
    </div>
  );
}


export default Card;