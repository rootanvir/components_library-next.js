import React, { ReactNode } from 'react';
import '../app/globals.css';

interface BtnProps {
  text: string;
  variant?: 'filled' | 'outline' | '3d' | 'liquid' | 'default';
  className?: string;
  image?: string;
}

const Btn: React.FC<BtnProps> = ({ text, variant, className = '', image }) => {
  let base =
    'px-3 py-2 rounded-md cursor-pointer flex items-center justify-center gap-2 transition-all duration-150 font-medium';

  let btnStyle = '';

  if (variant === 'filled') {
    btnStyle =
      'bg-blue-500 text-white hover:bg-blue-600 shadow-md active:scale-95';
  } else if (variant === 'outline') {
    btnStyle =
      'border border-gray-500 text-gray-800 hover:bg-gray-100 active:scale-95';
  } else if (variant === '3d') {
    btnStyle =
      'text-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-[0_6px_0_#1e40af] hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_#1e40af]';
  } else if (variant == 'liquid') {
    btnStyle = ''  }
  else {
    btnStyle = 'text-gray-700 hover:text-gray-500';
  }

  return (
    <button className={`${base} ${btnStyle} ${className}`}>
      {image && <img src={image} alt="icon" className="w-5 h-5" />}
      <span className="text-center">{text}</span>
    </button>
  );
};

export default Btn;
