import React from 'react'
  import PropTypes from 'prop-types'
import { AiFillCheckCircle, AiFillCiCircle } from 'react-icons/ai'
const Feature = ({feature}) => {
  return (
    <div>
       <p className='flex items-center '> <AiFillCheckCircle className='text-green-500 mr-4'/> {feature} </p>
    </div>
  )
}
Feature.propTypes ={
    feature: PropTypes.string
}
export default Feature