import React from 'react';
import { questions } from '../data/typewriterDataSets';
import WriteEffect from '../modules/Typewriter';

const Story = () => {
  return (
    <div className="w-full h-full bg-purple-50 rounded-2xl p-8 md:p-16 shadow-lg">
      <div className="w-full flex justify-center items-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center">
          What is <span className="text-purple-500">Hopes?</span>
        </h1>
      </div>

      <div className="max-w-3xl mx-auto text-lg md:text-xl text-gray-800 leading-relaxed space-y-6">
        <p>
          <span className="font-semibold">Hopes</span> started as a small idea — a place to express dreams, wishes, and thoughts anonymously. No usernames. No feeds. No pressure.
        </p>

        <p>
          Instead of a timeline, you’ll discover a giant floating sphere — a symbol of our world — filled with the hopes of people from everywhere. You can scroll through, float around, and read what others carry in their hearts.
        </p>

        <p>
          Whether you want to write your deepest dreams or simply explore what others envision — this is your space to connect through words and ideas.
        </p>

        <p className="text-purple-600 font-medium">
          Welcome to a place of inspiration. A universe of emotion. Welcome to <span className="font-bold">Hopes</span>.
        </p>
      </div>
    </div>
  );
};

export default Story;

