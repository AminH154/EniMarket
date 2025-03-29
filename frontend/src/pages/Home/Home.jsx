import React from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'; 
import ExploreCategory from '../../components/ExploreCategory/ExploreCategory';
import Info from '../../components/Info/Info'; 



const Home = () => {
  return (
    <div className='home'>
       <Header/>
       <ExploreCategory/>
       <Info/>
      
        
      
    </div>
  )
}

export default Home
