import React, { FC } from 'react';
import Btn from '../lib/Btn';

const Docs: FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-10 space-y-8 bg-gray-900 text-gray-200">
      <h1 className="text-4xl font-bold mb-4">Documentation Demo</h1>
      <p className="text-lg text-gray-400 mb-6">
        This is a simple demo showing the main content area. The sidebar would stay visible on the left in the full layout.
      </p>

      <section className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
        <h2 className="text-2xl font-semibold mb-3">Button Component</h2>
        <p className="text-gray-300 mb-4">Example buttons:</p>
        <div className="flex gap-3">
          <Btn text="Filled" variant="filled" />
          <Btn text="Outline" variant="outline" />
          <Btn text="Filling" variant="filling" />
        </div>
      </section>


    </div>
  );
};

export default Docs;
