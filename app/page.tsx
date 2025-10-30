import React, { FC } from 'react';
import Btn from '@/components/Btn';
interface Props {

}

const Page: FC<Props> = ({ }) => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="flex flex-col gap-6">
        <Btn text="Button" variant="filled" />
        <Btn text="Button" variant="outline" />
        <Btn text="Button" variant="outline" image='globe.svg' />
        <Btn text="Button" />
        <Btn text="Button" variant="3d" />
        <Btn text="Button" variant="liquid" />
      </div>
    </div>

  );
};

export default Page;