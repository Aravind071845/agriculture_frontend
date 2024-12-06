import React from 'react'
 import { BsArrow90DegRight } from 'react-icons/bs';

function Home() {
  return (
     <main className='main-container'>

        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>

            <div className='card'>
                <div className='card-inner'>
                    <h3>CROP MATCH</h3>
                    <a href='' className='card-inner-link'><BsArrow90DegRight className='card_icon'/></a>
                </div>
                <h3>Analyze soil health and crop suitability based on data.</h3>
            </div>

            <div className='card'>
                <div className='card-inner'>
                    <h3>IMPROVE IRRIGATION</h3>
                    <a href='' className='card-inner-link'><BsArrow90DegRight className='card_icon'/></a>
                </div>
                <h3>Optimize irrigation based on real-time weather data.</h3>
            </div>

            <div className='card'>
                <div className='card-inner'>
                    <h3>MARKET CHECK</h3>
                    <a href='' className='card-inner-link'><BsArrow90DegRight className='card_icon'/></a>
                </div>
                <h3>Get price trends and alerts for optimized selling times.</h3>
            </div>

        </div>
        </main>
    
  )
}

export default Home

