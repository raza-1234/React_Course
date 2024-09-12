import React from 'react'

const ShimmerUi = () => {
  const shimmerArray = new Array(18).fill(0);

  return (
    <div className = 'shimmer-wrapper'>
      {
        shimmerArray.map((item, index) => (
          <div key = {index} className = 'container shimmer'></div>
        ))
      }
    </div>
  )
}

export default ShimmerUi
