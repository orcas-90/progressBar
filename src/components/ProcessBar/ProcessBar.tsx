import { cnProcessBar } from './ProcessBar.classname';
import { useState, type DragEvent, type MouseEvent } from 'react';

import type { DragEventHandler, FC, MouseEventHandler } from 'react';

import './ProcessBar.css';
import { Image } from '../Image/Image';
import Heydi from '../png/Heydi.jpeg';

const ProcessBar = () => {
  let lastPoint: number;
  let targetEvent: number;

  const [width, setWidth] = useState(0);
  const [current, setCurrent] = useState(0);
  const [display, setDisplay] = useState('Dog');

  const handleDown = (event: MouseEvent) => {};
  const handleUp = (event: MouseEvent) => {
    event.preventDefault();
  };
  const handleMove = (event: MouseEvent) => {
    event.preventDefault();
    console.log('drapE');

    if (current === 100) {
      event.stopPropagation();
      const yes = 'Dog_Yes';
      setDisplay(() => yes);
    } else {
      targetEvent = event.nativeEvent.offsetX;
      console.log(targetEvent);
      setWidth(() => targetEvent);
      setCurrent(() => Math.floor(targetEvent / 3));
    }
  };

  return (
    <div className={cnProcessBar()}>
      <div className={cnProcessBar('Main')} onMouseMove={handleMove}>
        <div
          className={cnProcessBar('Fill')}
          onMouseUp={handleUp}
          onMouseDown={handleDown}
          style={{ width: width + 'px' }}
        ></div>
      </div>
      <div className={cnProcessBar('Label')}>{current}%</div>

      <Image imageUrL={Heydi} text={display} />
    </div>
  );
};

export { ProcessBar };
