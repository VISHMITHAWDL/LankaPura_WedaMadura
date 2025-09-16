import React from 'react';


import Aboutthedoctor from '../components/Home_Compo/Aboutthedoctor';
import Whoweare from '../components/Home_Compo/Whoweare';
import Landingview from '../components/Home_Compo/Landingview';
import Treatment from '../components/Home_Compo/Treatment';
import Whypeople from '../components/Home_Compo/Whypeople';
import Treatmenthours from '../components/Home_Compo/Treatmenthours';
import Comment from '../components/Home_Compo/Comment';
import EnhancedTreatmentCarousel from '../components/Home_Compo/Cardanimate';

const Home = () => {
  return (
    <div>
      <main>
        
        {/* LAnding view */}
        <Landingview/>
        {/*About the Doctor*/}
        <Aboutthedoctor/>
        {/*Who we are*/}
        <Whoweare/>
        {/*Treatment*/}
        <Treatment/>
        {/* Other traeatment */}
        <EnhancedTreatmentCarousel/>
        {/* Why people choose us  */}
        <Whypeople/>
        {/* Comment section */}
        <Comment/>
        {/* Treatment hours */}
        <Treatmenthours/>
      </main>
    </div>
  );
};

export default Home;