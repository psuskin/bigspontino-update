import React from 'react';

interface PlusIconProps {
  width?: string | number;
  height?: string | number;
  className?: string;
}

const PlusIcon: React.FC<PlusIconProps> = ({ width = '34', height = '34', className }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 1920 1920"
      xmlns="http://www.w3.org/2000/svg"
      fill="#ffffff"
    >
      <path
        d="M866.332 213v653.332H213v186.666h653.332v653.332h186.666v-653.332h653.332V866.332h-653.332V213z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default PlusIcon;
