import React from 'react';
import { Map, MapTypeId } from 'microsoft-maps-react';

const BingMap = (props) => {
  const { center, zoom } = props;

  return (
    <Map
      mapId={YOUR_MAP_ID}
      center={center}
      zoom={zoom}
      mapTypeId={MapTypeId.road}
      credentials={'AhBp0_MAy2tQRIl4qEy_QnOweBhzKJUoHYQ9vFYfaz74_aPW3GpL_13sUcwO1b55'}
      style={{ height: '100vh', width: '100%' }}
    />
  );
};

export default BingMap;
