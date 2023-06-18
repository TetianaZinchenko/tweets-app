import React from 'react';

import GridLoader from 'react-spinners/GridLoader';

import { Spinner } from './Loader.styled';

const Loader = () => {
  return (
    <Spinner>
      <GridLoader color="#0000a0" aria-label="Loading Spinner" size={40} />
    </Spinner>
  );
};

export { Loader };
