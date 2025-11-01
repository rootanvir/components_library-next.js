import React, { ReactNode } from 'react';

interface RootLayerProps {
  children: ReactNode;
}

const RootLayer: React.FC<RootLayerProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white">
        <div>
        </div>
        {children}
      </body>
    </html>
  );
};

export default RootLayer;