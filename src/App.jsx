import React from 'react'
import './App.css'

const App = () => {
  return (
    <div>
      <div className="wrap">
        <div className="card">
         
         <img src="https://seeklogo.com/images/N/nike-jordan-air-shoe-logo-3F633DDA45-seeklogo.com.png" alt="" className="nike1" />

         <h2>NIke pro 12 ultra ultimate edition</h2>

         <p>The 10: Air Jordan 1 off-white - Chikago </p>

         <p className="cost">$1000</p>

         <div className="buy">
         <button>Buy Now</button>
         <img src="https://cdn.icon-icons.com/icons2/2459/PNG/512/favourite_star_button_icon_149067.png" alt="" />
         </div>




         
          </div>



          <div className="card2">

            <img src="/public/pngegg.png" alt="" className="nike2" />

            <h2>NIke pro 12 + ultra ultimate edition</h2>

            <p>The 11: Air Jordan 2 off-blue - NewYork</p>

            <p className="cost">$1200</p>

         <div className="buy">
         <button>Buy Now</button>
         <img src="https://cdn.icon-icons.com/icons2/2459/PNG/512/favourite_star_button_icon_149067.png" alt="" />
         </div>
          </div>
       
      </div>
    </div>
  )
}

export default App