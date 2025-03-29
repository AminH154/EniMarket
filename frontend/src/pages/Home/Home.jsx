import React from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'; 
import ExploreCategory from '../../components/ExploreCategory/ExploreCategory';



const Home = () => {
  return (
    <div className='home'>
       <Header/>
       <div style={{ height: '1500px' }}>
        <p>Contenu de test pour activer le défilement...</p>
        <ExploreCategory/>
      </div>
      
        
      
    </div>
  )
}

export default Home
