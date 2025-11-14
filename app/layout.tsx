import React, { ReactNode } from 'react';

export const metadata = {
  title: 'DRACARYS',          
  description: 'dragon favicon',
};

interface RootLayerProps {
  children: ReactNode;
}

const RootLayer: React.FC<RootLayerProps> = ({ children }) => {
  return (
    <html>
      <head>
        <link rel="icon" href="/images/dragon.png" sizes="any" />
      </head>
      <body>

        <div >
          {children}
        </div>
      </body>

    </html>

  );
};

export default RootLayer;