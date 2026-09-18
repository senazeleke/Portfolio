import React from 'react';
import { ECOMMERCE_CASE_STUDY, LAYOUT } from '../../constants';

const Ecommerce = () => {
  return (
    <div
      name="ecommerce"
      className={`w-full min-h-screen ${LAYOUT.sectionGradient} text-white py-16 pt-32 lg:pt-36`}
    >
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col gap-16">
        <div className="text-center pb-8">
          <h1 className="text-4xl font-bold">{ECOMMERCE_CASE_STUDY.title}</h1>
        </div>

        {ECOMMERCE_CASE_STUDY.sections.map(({ heading, body, items, image, imageAlt, placeholder }) => (
          <div key={heading} className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-2">{heading}</h2>
              {body && <p className="text-lg">{body}</p>}
              {items && (
                <ul className="list-disc list-inside text-lg space-y-1">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="flex-1">
              {image ? (
                <img src={image} alt={imageAlt} className="w-full rounded-lg shadow-lg" />
              ) : (
                <div className="w-full h-64 bg-gray-800 flex items-center justify-center rounded-lg">
                  <span className="text-gray-400">{placeholder}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ecommerce;
