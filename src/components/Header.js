import React from 'react'
import '../stylesheets/Header.css'
import { faScissors } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Header = () => {
    const headerElements = [
        'Home',
        'Book a visit',
        'Contact us',
        'About us',
        'Rate a visit'
    ]
  return (
    <div className='container'>
        <div className='logo'>
            <FontAwesomeIcon icon={faScissors}/>
        </div>
        <div className='controls'>

                {headerElements.map((value,index)=>{
                    return(
                        <span onClick={()=>{console.log(value)}} key={index}>{value}</span>
                    )
                })}
        </div>
    </div>
  )
}

export default Header