import React from 'react'
import PriceOption from '../PriceOption/PriceOption'

const PriceOptions = () => {

 const priceOptions = [
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 20,
          "currency": "USD",
          "features": [
            "Access to gym equipment",
            "Locker facility",
            "1 fitness class per week",
            "Free water bottle"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 50,
          "currency": "USD",
          "features": [
            "Access to gym equipment",
            "Locker facility",
            "5 fitness classes per week",
            "Access to swimming pool",
            "1 personal training session per month"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 80,
          "currency": "USD",
          "features": [
            "Unlimited access to gym equipment",
            "Locker facility",
            "Unlimited fitness classes",
            "Access to swimming pool",
            "Access to sauna and steam room",
            "4 personal training sessions per month",
            "Priority customer support"
          ]
        },
        {
          "id": 4,
          "name": "Family Plan",
          "price": 120,
          "currency": "USD",
          "features": [
            "Unlimited access for up to 4 family members",
            "Locker facility for each member",
            "Unlimited fitness classes for all members",
            "Access to swimming pool and kids' zone",
            "2 family personal training sessions per month"
          ]
        },
        {
          "id": 5,
          "name": "Student Plan",
          "price": 15,
          "currency": "USD",
          "features": [
            "Access to gym equipment",
            "Locker facility",
            "3 fitness classes per week",
            "Discounted snacks and drinks"
          ]
        }
      ]
      
  return (
    <div>
  <h2 className='text-5xl my-5'>Best Prices in the town</h2>
<div className='grid md:grid-cols-3 gap-6'>
{
    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
  }
</div>
    </div>
  )
}

export default PriceOptions