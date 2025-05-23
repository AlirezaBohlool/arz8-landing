import React from "react";

interface StarProps {
  borderColor?: string; 
  backgroundColor?: string; 
}

const Star: React.FC<StarProps> = ({ borderColor = "currentColor", backgroundColor = "none"}) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 30 30"
      fill={backgroundColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.1631 4.38828L19.3631 8.78828C19.6631 9.40078 20.4631 9.98828 21.1381 10.1008L25.1256 10.7633C27.6756 11.1883 28.2756 13.0383 26.4381 14.8633L23.3381 17.9633C22.8131 18.4883 22.5256 19.5008 22.6881 20.2258L23.5756 24.0633C24.2756 27.1008 22.6631 28.2758 19.9756 26.6883L16.2381 24.4758C15.5631 24.0758 14.4506 24.0758 13.7631 24.4758L10.0256 26.6883C7.35062 28.2758 5.72562 27.0883 6.42562 24.0633L7.31312 20.2258C7.47562 19.5008 7.18812 18.4883 6.66312 17.9633L3.56312 14.8633C1.73812 13.0383 2.32562 11.1883 4.87562 10.7633L8.86312 10.1008C9.52562 9.98828 10.3256 9.40078 10.6256 8.78828L12.8256 4.38828C14.0256 2.00078 15.9756 2.00078 17.1631 4.38828Z"
        stroke={borderColor}
        strokeWidth="1.59677"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Star;
