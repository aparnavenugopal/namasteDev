import React from 'react'

const ResCard = (props) => {
  console.log(props);
  return (
    <div className="res-card">
     <img
     className="res-logo"
     alt="res-body" 
     src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/8aa874a03b5bd0804b6781b1fd13f02d"/>
     <h3>{props.resName}</h3>
     <h4>{props.cusinie}</h4>
     <h4>3.4 stars</h4>
     <h4>30 minutes</h4>
    </div>
  )
}

export default ResCard;