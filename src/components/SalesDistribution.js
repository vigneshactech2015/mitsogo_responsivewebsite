import React from 'react'
import DonutChart from 'react-donut-chart';

function SalesDistribution() {
  return (
    <div>
    <h5 className='sales_distribution_title'>Sales Distribution</h5>
    <DonutChart
  data={[
    {
      label: 'France',
      value: 25,
    },
    {
      label: 'Italy',
      value: 25,
    },
    {
      label: 'Japan',
      value: 25,
    },
    {
      label: 'Canada',
      value: 25,
    },
  ]}
  height={230}
  width={300}

/>
<div className="statistics_footer">
<p><span style={{color:"#FC6868"}}> &#11044;</span>France</p>
<p><span style={{color:"#4AB5EB"}}> &#11044;</span>Italy</p>
</div>
<div className="statistics_footer">
<p><span style={{color:"#FC6868"}}> &#11044;</span>Japan</p>
<p><span style={{color:"#4AB5EB"}}> &#11044;</span>Canada</p>
</div>
    </div>
  )
}

export default SalesDistribution