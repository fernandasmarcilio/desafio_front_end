import React from 'react';
import loadingAnimation from '../../../assets/svg/loading.svg';

import { Image } from './styles';

function Loading() {
  return <Image src={loadingAnimation} />;
}

export default Loading;