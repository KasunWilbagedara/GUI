import React from 'react'
import './Home.css'
import Header from '../../componments/Header/Header'
import ExploreMenu from '../../componments/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../componments/FoodDisplay/FoodDisplay'

import {useState} from 'react'
import AppDownload from '../../componments/AppDownload/AppDownload'
const Home = () => {

  const[category,setCategory]=useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home;
