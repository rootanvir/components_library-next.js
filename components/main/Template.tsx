import React, { FC } from 'react';

interface Props {}

const Template: FC<Props> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className='text-7xl font-bold'>
        This is template demo
      </h1>
    </div>
  );
};

export default Template;
