import React from 'react';

const Stylecardslider = () => {
  const customKeyframes = {
    '0%': {
      transform: 'translate3d(0, 0, 0)',
      opacity: 1,
    },
    '50%': {
      transform: 'translate3d(100px, 0, 0)',
      opacity: 0.5,
    },
    '100%': {
      transform: 'translate3d(200px, 0, 0)',
      opacity: 0,
    },
  };

  const customAnimation = {
    animationName: 'myAnimation',
    animationDuration: '2s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  };

  return (
    <div>
      <div
        style={{
          ...customKeyframes,
          width: '100px',
          height: '100px',
          background: 'blue',
          ...customAnimation,
        }}
      >
        My Animated Element
      </div>
    </div>
  );
};

export default Stylecardslider;
