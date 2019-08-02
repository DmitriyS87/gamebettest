import React from 'react';
import styled from 'styled-components';

const FigureChatIcon = styled.path`
  fill-rule: evenodd;
  clip-rule: evenodd;
  fill: #ff3c00;
`;

const SVGData = () => {
  return (
    <div className="visually-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <symbol id="chat_icon" x="0" y="0" viewBox="0 0 40 48" xmlSpace="preserve">
          <g>
            <FigureChatIcon
              d="M31.17,31.16v-0.82c0-1.2-0.84-2.18-1.86-2.18c-1.02,0-1.86,0.98-1.86,2.18v1.47c0,0.44,0.09,0.82,0.28,1.2
			l2.79,4.97h-1.21c-1.02,0-1.86,0.98-1.86,2.18c0,2.4-1.68,4.37-3.73,4.37H8.35c-2.05,0-3.73-1.97-3.73-4.37V20.51
			c0-2.4,1.68-4.37,3.73-4.37h6.05c1.02,0,1.86-0.98,1.86-2.18c0-1.2-0.84-2.18-1.86-2.18H8.35c-4.1,0-7.45,3.93-7.45,8.74v19.66
			c0,4.81,3.35,8.74,7.45,8.74h15.37c3.45,0,6.38-2.78,7.22-6.55h3.03c0.7,0,1.3-0.44,1.63-1.15c0.14-0.33,0.23-0.71,0.23-1.04
			c0-0.44-0.09-0.82-0.28-1.2L31.17,31.16z M40.67,6.2c-0.33-0.71-0.93-1.15-1.63-1.15h-1.3c-0.75-2.4-2.7-4.15-4.94-4.15H23.4
			c-2.89-0.05-5.26,2.78-5.26,6.28v12.45c0,3.5,2.38,6.33,5.26,6.33h9.41c2.93,0,5.26-2.84,5.26-6.33v-6.5l2.56-4.75
			c0.19-0.38,0.28-0.76,0.28-1.15S40.81,6.53,40.67,6.2z M34.66,11.34c-0.19,0.33-0.28,0.76-0.28,1.15v7.15
			c0,1.09-0.7,1.97-1.54,1.97H23.4c-0.84,0-1.54-0.87-1.54-1.97V7.19c0-1.09,0.7-1.97,1.54-1.97h9.41c0.84,0,1.54,0.87,1.54,1.97
			c0,0.98,0.61,1.86,1.4,2.13L34.66,11.34z"
            />
          </g>
        </symbol>
      </svg>
    </div>
  );
};

export default SVGData;