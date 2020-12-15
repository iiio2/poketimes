import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      <p className='lead'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, assumenda
        molestiae sint autem dolor eaque delectus, adipisci praesentium mollitia
        nisi sed consequatur aspernatur eveniet dicta beatae officia nostrum
        minus architecto.
      </p>
    </div>
  );
};

export default Rainbow(About);
