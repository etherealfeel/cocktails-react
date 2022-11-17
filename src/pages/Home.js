import React from 'react'
import Alcoholic from '../components/Alcoholic'
import NonAlcoholic from '../components/NonAlcoholic'
import Optional from '../components/Optional'

const Home = () => {
  return (
    <div>
      <NonAlcoholic/>
      <Alcoholic/>
      <Optional/>
    </div>
  )
}

export default Home
