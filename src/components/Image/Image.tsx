import { cnImage } from './Image.classname';
import { useState, type DragEvent, type MouseEvent } from 'react';

import type { DragEventHandler, FC, MouseEventHandler } from 'react';

import './Image.css';
type ImageProps = {
    imageUrL: string;
    text: string

  };
const Image: FC<ImageProps> = ({imageUrL, text}) => {

    return (
      <div className={cnImage()}>
      <img className={cnImage(text)}src={imageUrL} alt='dog'></img>
      </div>
    );

    }

  export { Image };