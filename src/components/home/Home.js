import React from 'react';
import Alljobs from '../alljobs/Alljobs';
import Banner from '../banner/Banner';
import Contacts from '../contacts/Contacts';
import Hero1 from '../hero/Hero1';
import ServiceType from '../service/ServiceType';

const Home = () => {
    return (
        <div className='container mx-auto'>
            {/* <Banner/> */}
           <Hero1/>
           <Alljobs/>
           <Contacts/>
           <ServiceType/>
         
          
            
        </div>
    );
};

export default Home;