import React from 'react'
import './Home.css'
import Header from '../../componments/Header/Header'
import ExploreMenu from '../../componments/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../componments/FoodDisplay/FoodDisplay'

import {useState} from 'react'
const Home = () => {

  const[category,setCategory]=useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home;
