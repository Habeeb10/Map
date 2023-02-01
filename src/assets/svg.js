import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const ArrowBack = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M10.7327 19.7911C11.0326 20.0768 11.5074 20.0652 11.7931 19.7653C12.0788 19.4654 12.0672 18.9907 11.7673 18.705L5.5159 12.7504L20.25 12.7504C20.6642 12.7504 21 12.4146 21 12.0004C21 11.5862 20.6642 11.2504 20.25 11.2504L5.5158 11.2504L11.7673 5.2957C12.0672 5.01 12.0788 4.5352 11.7931 4.2353C11.5074 3.9354 11.0326 3.9238 10.7327 4.2095L3.3138 11.2762C3.1449 11.4371 3.0449 11.6424 3.0139 11.8557C3.0048 11.9025 3 11.9509 3 12.0004C3 12.0499 3.0048 12.0984 3.014 12.1453C3.045 12.3585 3.145 12.5636 3.3138 12.7244L10.7327 19.7911Z"
        fill="white"
      />
    </Svg>
  );
};

export const LocationPin = props => {
  return (
    <Svg width="49" height="49" viewBox="0 0 49 49" fill="none" {...props}>
      <Path
        d="M24.5 4.08337C16.5988 4.08337 10.2083 10.4738 10.2083 18.375C10.2083 21.9275 11.2292 25.2555 13.0871 28.2567C15.0267 31.4009 17.5788 34.0959 19.5388 37.24C20.4983 38.7713 21.1925 40.2005 21.9275 41.8542C22.4583 42.9771 22.8871 44.9167 24.5 44.9167C26.1129 44.9167 26.5417 42.9771 27.0521 41.8542C27.8075 40.2005 28.4813 38.7713 29.4408 37.24C31.4009 34.1163 33.9529 31.4213 35.8925 28.2567C37.7709 25.2555 38.7917 21.9275 38.7917 18.375C38.7917 10.4738 32.4013 4.08337 24.5 4.08337ZM24.5 23.9896C21.6825 23.9896 19.3958 21.703 19.3958 18.8855C19.3958 16.068 21.6825 13.7813 24.5 13.7813C27.3175 13.7813 29.6042 16.068 29.6042 18.8855C29.6042 21.703 27.3175 23.9896 24.5 23.9896Z"
        fill="#25B73D"
      />
    </Svg>
  );
};

export const Tick = props => {
  return (
    <Svg width="20" height="22" viewBox="0 0 16 17" fill="none" {...props}>
      <Path
        d="M12.5713 4.61441L6.28561 10.9001L3.42847 8.04298"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
