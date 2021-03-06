import React from 'react';
import background from '../images/wellcome.jpg';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  },
};

const HomePage = () => (
  <div style={styles.container}>
  </div>
);

export default HomePage;