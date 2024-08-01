import React from 'react';
import { itara1, itara2, itara3 } from '../Object/assets';

function Cards() {
  return (
    <div className='flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-8 px-4 py-8'>
      {/* Card 1 */}
      <div className="bg-card1 w-full sm:w-80 md:w-96 lg:w-1/4 h-auto p-4 rounded-lg shadow-lg flex flex-col items-center">
        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-between w-full">
          <div className="text-center sm:text-left">
            <h1 className="text-lg font-semibold mb-2">Lamp</h1>
            <p className="font-bold">Best Lamp</p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-4">
            <img className="object-cover w-24 h-24 sm:w-20 sm:h-20" src={itara1} alt="Lamp 1" />
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-card2 w-full sm:w-80 md:w-96 lg:w-1/4 h-auto p-4 rounded-lg shadow-lg flex flex-col items-center">
        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-between w-full">
          <div className="text-center sm:text-left">
            <h1 className="text-lg font-semibold mb-2">Lamp</h1>
            <p className="font-bold">Best Lamp</p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-4">
            <img className="object-cover w-24 h-24 sm:w-20 sm:h-20" src={itara2} alt="Lamp 2" />
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-card3 w-full sm:w-80 md:w-96 lg:w-1/4 h-auto p-4 rounded-lg shadow-lg flex flex-col items-center">
        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-between w-full">
          <div className="text-center sm:text-left">
            <h1 className="text-lg font-semibold mb-2">Lamp</h1>
            <p className="font-bold">Best Lamp</p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-4">
            <img className="object-cover w-24 h-24 sm:w-20 sm:h-20" src={itara3} alt="Lamp 3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
