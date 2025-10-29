import React, { FC, ReactNode } from 'react';
import { Children } from 'react';
interface Props {
  children: ReactNode;
}

const RootLayer: FC<Props> = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayer;