import { LocationListPage } from './LocationListPage';
import { LocationPage } from './LocationPage';
import { useState } from 'react';


export const LocationToggle = () => {
  const [selectedLocation, setSelectedLocation] = useState();

  return (
    <>
      {selectedLocation ? (
        <LocationPage location={selectedLocation} handleClick={setSelectedLocation} />
      ) : (
        <LocationListPage handleClick={setSelectedLocation} />
      )}
    </>
  );
};