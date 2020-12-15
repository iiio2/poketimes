import React from 'react';

const Rainbow = (WrappedComponent) => {
  const colors = ['red', 'orange', 'blue', 'green', 'violet', 'yellow'];
  const chooseColor = Math.floor(Math.random() * 6);
  const randomColor = colors[chooseColor];

  return (props) => {
    return (
      <div style={{ color: randomColor }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
