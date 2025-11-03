import React from 'react';
import '../../styles/globals.css';

interface BtnProps {
  text: string;
  variant?: 'filled' | 'outline' | '3d' | 'glow' | 'neon' | 'gradient' | 'filling' | 'default';
  className?: string;
  image?: string;
  onClick?: () => void; 
}

const Btn: React.FC<BtnProps> = ({ text, variant, className = '', image, onClick }) => {
  let base =
    'px-3 py-2 rounded-md cursor-pointer flex items-center justify-center gap-2 transition-all duration-150 font-medium transform';

  let btnStyle = '';

  if (variant === 'filled') {
    btnStyle =
      'bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 active:scale-95 shadow-md';
  } else if (variant === 'outline') {
    btnStyle =
      'border border-gray-500 text-gray-800 hover:bg-gray-100 hover:scale-105 active:scale-95';
  } else if (variant === '3d') {
    btnStyle =
      'text-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-[0_6px_0_#1e40af] hover:bg-blue-700 hover:scale-105 hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_#1e40af]';
  } else if (variant === 'glow') {
    btnStyle =
      'bg-blue-600 text-white shadow-md hover:shadow-[0_0_15px_#3b82f6] hover:scale-105 active:scale-95';
  } else if (variant === 'filling') {
    btnStyle =
      'relative overflow-hidden px-6 py-2 text-blue-600 font-semibold border-2 border-blue-600 rounded-md transition-all duration-200 ease-out active:scale-95 before:absolute before:inset-0 before:bg-blue-600 before:scale-x-0 before:origin-left before:transition-transform before:duration-500 before:ease-out hover:before:scale-x-100 hover:text-white before:-z-10';
  } else {
    btnStyle = 'text-gray-700 hover:text-gray-500 hover:scale-105 active:scale-95';
  }

  return (
    <button onClick={onClick} className={`${base} ${btnStyle} ${className}`}> 
      {image && <img src={image} alt="icon" className="w-5 h-5" />}
      <span className="text-center">{text}</span>
    </button>
  );
};

export default Btn;
