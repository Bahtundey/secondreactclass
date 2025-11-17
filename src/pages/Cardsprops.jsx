import React from 'react';
import Cards from '../components/Cards';

const Cardsprops = () => {
  return (
    <div className="d-flex" >
      <Cards color='bg-danger' title='Fashion Bag' description='An affordable product for everyone.' price='2,000' image='/img/bag2.jpeg' />
      <Cards title='Fashion Bag' description='This product is even better.' price='1,500' image='/img/bag1.jpeg' />
      <Cards title='Fashion Bag' description='This is a great product.' price='2,700' image='/img/bag3.jpeg' />
    </div>
  );
};

export default Cardsprops;
