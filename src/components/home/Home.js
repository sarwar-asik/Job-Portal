import React from 'react';
import Alljobs from '../alljobs/Alljobs';
import Banner from '../banner/Banner';
import Hero1 from '../hero/Hero1';
import ServiceType from '../service/ServiceType';

const Home = () => {
    return (
        <div className='container mx-auto'>
            {/* <Banner/> */}
           <Hero1/>
           <Alljobs/>
           <ServiceType/>
         
          
            
        </div>
    );
};

export default Home;