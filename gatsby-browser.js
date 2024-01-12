import React from 'react';
import { hydrate } from 'react-dom';
import Styles from './src/globalStyles'


export const wrapRootElement = ({ element }) => (
  <>
    <Styles />
    {element}
  </>
);

export const onClientEntry = () => {
  // Hydrate styles on the client side
  if (process.env.NODE_ENV === 'production') {
    import('react-dom').then(({ hydrate }) => {
      hydrate();
    });
  }
};
