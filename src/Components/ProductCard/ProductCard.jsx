import React, { useState, useEffect } from "react";
import FrameDraw from "../FrameDraw/FrameDraw";
import "./ProductCard.css";

function ProductCard(props) {
  // const [isHovering, setIsHovering] = useState(false);
  // const handleMouseOver = () => {
  //     setIsHovering(true);
  //   };

  //   const handleMouseOut = () => {
  //     setIsHovering(false);
  //   };
  return (

      <div className="productCard rounded bg-gray-900 w-60 h-96 p-4">
        <div className="m-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.36 21.26">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_2-2" data-name="Layer 2">
                <path
                  stroke="#cc9900"
                  stroke-width="1px"
                  d="M4.28,16a1.28,1.28,0,0,1,1.34-.65,2.36,2.36,0,0,1,1.32.84,3.4,3.4,0,0,1,.85,3,2.93,2.93,0,0,1-2.41,1.91,4.12,4.12,0,0,1-3.12-.49A5.8,5.8,0,0,1,.09,14.81a8.62,8.62,0,0,1,.48-1.54,5.67,5.67,0,0,1,.86-1.39,4.76,4.76,0,0,1,2.81-1.61,12.68,12.68,0,0,1,6.34.82,53.2,53.2,0,0,1,5.87,2.48,42.69,42.69,0,0,0,11.89,4.11,21,21,0,0,0,6.23.25,12.47,12.47,0,0,0,5.73-2.17,17.8,17.8,0,0,0,4.4-4.34,4,4,0,0,0,.68-2.76,2,2,0,0,0-.65-1.18,4.51,4.51,0,0,0-1.21-.84,4.21,4.21,0,0,0-1.38-.45,1.62,1.62,0,0,0-.63,0,1.43,1.43,0,0,0-.58.28A3.43,3.43,0,0,0,40,9.1a5.45,5.45,0,0,0,.21,1.48,4.6,4.6,0,0,0,.61,1.31,5.26,5.26,0,0,0,2.27,1.83,8.61,8.61,0,0,0,2.93.7A6.1,6.1,0,0,0,49,14,10.47,10.47,0,0,0,53.38,10,10.18,10.18,0,0,0,55,4.16a4.18,4.18,0,0,0-.8-2.67,2.2,2.2,0,0,0-2.42-.38,2.9,2.9,0,0,0-1.52,2.17,9.45,9.45,0,0,0-.12,3,11.15,11.15,0,0,0,.7,3,9.23,9.23,0,0,0,1.63,2.55A5.84,5.84,0,0,0,57.69,14a7.27,7.27,0,0,0,2.68-1.25,8.66,8.66,0,0,0,2.15-2.12,4.4,4.4,0,0,0,.89-2.73A1.87,1.87,0,0,0,61.84,6a2.19,2.19,0,0,0-2.23,1.24,4,4,0,0,0-.1,2.84,4.68,4.68,0,0,0,1.66,2.39A11.89,11.89,0,0,0,63.85,14a20.16,20.16,0,0,0,6,1.72c4.17.49,8.31-.74,12.32-2,2-.65,4-1.23,6-1.92A50.62,50.62,0,0,1,94.32,10a11,11,0,0,1,6.38.27,7.11,7.11,0,0,1,2.6,1.94A10.19,10.19,0,0,1,104.91,15l0,0a3.29,3.29,0,0,1,.31,2.73,5.32,5.32,0,0,1-1.37,2.39,3.77,3.77,0,0,1-2.46,1.17,4,4,0,0,1-2.58-.85,5.29,5.29,0,0,1-1-1,2.84,2.84,0,0,1-.56-1.25,1.7,1.7,0,0,1,.37-1.31,2.87,2.87,0,0,1,1.1-.82,3.94,3.94,0,0,1,1.32-.33,2.63,2.63,0,0,1,1.33.2,1.22,1.22,0,0,1,.75,1.06,2.66,2.66,0,0,1-.32,1.3,2.82,2.82,0,0,0,.3-1.3,1.22,1.22,0,0,0-.75-1,2.54,2.54,0,0,0-1.31-.17,4.17,4.17,0,0,0-1.29.34,2.82,2.82,0,0,0-1,.8,1.61,1.61,0,0,0-.33,1.23,3.66,3.66,0,0,0,1.51,2.1,3.89,3.89,0,0,0,2.47.78,3.58,3.58,0,0,0,2.3-1.14,5.15,5.15,0,0,0,1.27-2.28,3,3,0,0,0-.3-2.48h0v0a7.78,7.78,0,0,0-4.08-4.45,11,11,0,0,0-6.13-.19,52.41,52.41,0,0,0-6,1.81c-2,.71-4,1.3-6,2-4,1.28-8.22,2.56-12.55,2.09a17.38,17.38,0,0,1-3.18-.63,26.28,26.28,0,0,1-3-1.11A12.53,12.53,0,0,1,60.74,13a5.44,5.44,0,0,1-1.91-2.73A4.63,4.63,0,0,1,59,6.92a2.9,2.9,0,0,1,3-1.65,2.48,2.48,0,0,1,1.59.88,3,3,0,0,1,.63,1.67,5,5,0,0,1-1,3.21,9.55,9.55,0,0,1-2.32,2.34,8.08,8.08,0,0,1-3,1.4,5.76,5.76,0,0,1-3.32-.44,7.8,7.8,0,0,1-2.67-2A10.12,10.12,0,0,1,50,9.58a11.61,11.61,0,0,1-.78-3.2,9.93,9.93,0,0,1,.12-3.3,3.74,3.74,0,0,1,2-2.81,3.11,3.11,0,0,1,3.46.6,5,5,0,0,1,1,3.27,12.29,12.29,0,0,1-.4,3.26,10.36,10.36,0,0,1-1.35,3,11.32,11.32,0,0,1-4.83,4.38,6.94,6.94,0,0,1-3.3.45,9.4,9.4,0,0,1-3.2-.79,6,6,0,0,1-2.59-2.13,5.14,5.14,0,0,1-.71-1.56,5.69,5.69,0,0,1-.22-1.66,4.09,4.09,0,0,1,1.19-3.18,2.29,2.29,0,0,1,.84-.42,2.11,2.11,0,0,1,.93,0A4.9,4.9,0,0,1,43.85,6a5.7,5.7,0,0,1,1.39,1,2.83,2.83,0,0,1,.84,1.56,4.62,4.62,0,0,1-.79,3.26,18,18,0,0,1-4.61,4.51,13,13,0,0,1-6,2.26,21.44,21.44,0,0,1-6.4-.29,43.2,43.2,0,0,1-12-4.22,53.91,53.91,0,0,0-5.8-2.5,12.86,12.86,0,0,0-6.1-.87,4.4,4.4,0,0,0-2.61,1.44A6.38,6.38,0,0,0,.39,14.87a5.53,5.53,0,0,0,2,5.53,3.89,3.89,0,0,0,3,.52,2.81,2.81,0,0,0,2.34-1.79,3.32,3.32,0,0,0-.79-2.91,2.35,2.35,0,0,0-1.28-.86A1.29,1.29,0,0,0,4.28,16Z"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="cardImage h-1/2 m-3 p-6 bg-base-100 rounded">
          <img
            src={props.image}
            alt={props.model}
            className="h-full w-full object-scale-down"
          />
        </div>
        <div className="m-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.48 23.06">
            <g data-name="Layer 2">
              <path
                stroke="#cc9900"
                stroke-width="1px"
                d="M109.29 1.23C104.45-.68 98.58 0 93.62 1a27.57 27.57 0 0 0-10.26 4 63.13 63.13 0 0 0-11.87-3c-4-.5-10.07-.56-13.15 3.16a11.25 11.25 0 0 0-1.6 2.76 11.25 11.25 0 0 0-1.6-2.76C52.06 1.43 46 1.49 42 2a62.93 62.93 0 0 0-11.87 3 27.7 27.7 0 0 0-10.26-4C14.9 0 9-.68 4.19 1.23 1.53 2.27-1.61 5.65 1 8.49c3.37 3.75 11.2 3.26 15.59 2.65 4.85-.67 9.48-2.27 14.13-3.76a10.8 10.8 0 0 1 2.1 2.92c2.15 4.44-1.34 8.89-5.54 10.14a12.42 12.42 0 0 1-6.57.11A5.55 5.55 0 0 1 18 19.1a3.35 3.35 0 0 1-.72-1 2.24 2.24 0 0 1 4.19-1.56c.37.68 1.37.08 1-.6-1.61-3.24-7-2.82-7.15 1.18s5.31 5.9 8.52 5.92c8.31.06 15.18-8.27 9.06-15.56-.18-.22-.38-.44-.58-.64 1.06-.45 2.54-1.05 4.37-1.64a34.25 34.25 0 0 1 7.22-1.7 13.72 13.72 0 0 1 5.59.13 7.74 7.74 0 0 1 4 2.14 9.1 9.1 0 0 1 2.34 4.05c0 .29.18 1.14.66 1.29a.46.46 0 0 0 .2 0 .44.44 0 0 0 .2 0c.48-.15.61-1 .66-1.29A9.11 9.11 0 0 1 60 5.77a7.71 7.71 0 0 1 4-2.14 13.67 13.67 0 0 1 5.58-.13 34.5 34.5 0 0 1 7.22 1.72c1.82.59 3.31 1.19 4.36 1.64-.2.2-.39.42-.58.64-6.12 7.29.75 15.62 9.07 15.56 3.2 0 8.62-1.86 8.51-5.92S92.61 12.72 91 16c-.33.68.67 1.28 1 .6a2.24 2.24 0 0 1 4.19 1.56 3.14 3.14 0 0 1-.71 1 5.54 5.54 0 0 1-2.69 1.45 12.38 12.38 0 0 1-6.56-.11c-4.21-1.25-7.7-5.7-5.55-10.14a11 11 0 0 1 2.1-2.92c4.66 1.49 9.28 3.09 14.13 3.76 4.4.61 12.23 1.1 15.6-2.65 2.58-2.9-.51-6.28-3.22-7.32ZM14.9 9a29.91 29.91 0 0 1-6.82 0C5.88 8.68.57 7.88 2.17 4.49c1.46-3.1 7.38-3.13 10.17-3.11 4.76 0 11.43 1.12 16.06 4.17A65.63 65.63 0 0 1 14.9 9Zm90.5 0a29.91 29.91 0 0 1-6.82 0 65.79 65.79 0 0 1-13.5-3.4c4.64-3 11.31-4.13 16.07-4.17 2.78 0 8.7 0 10.17 3.11 1.6 3.34-3.72 4.14-5.92 4.46Z"
                data-name="—ëîé_1"
              />
            </g>
          </svg>
        </div>

        <div className="cardText flex justify-between mx-3">
          <div className="cardName text-sm text-primary">{props.name}</div>

          <div className="cardPrice text-xs text-base-100">{props.price}<span> تومان </span></div>
        </div>
      </div>

  );
}

export default ProductCard;