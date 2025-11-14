import React, { ReactNode } from 'react';

interface RootLayerProps {
  children: ReactNode;
}

const RootLayer: React.FC<RootLayerProps> = ({ children }) => {
  return (
    <html>

      <body>

        <div >
          {children}
        </div>
      </body>

    </html>

  );
};

export default RootLayer;