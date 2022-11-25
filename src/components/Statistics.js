import React from 'react'
import {MdExpandMore} from "react-icons/md"
import{Chart}from'react-charts'
function Statistics() {
  const data=React.useMemo(
    ()=>[
    {
    label:'Series1',
    data:[[0,1],[1,2],[2,4]]
    },
    {
    label:'Series2',
    data:[[0,3],[1,1],[2,5]]
    }
    ],
    []
    )
    
  const axes=React.useMemo(
    ()=>[
    {primary:true,type:'linear',position:'bottom'},
    {type:'linear',position:'left'}
    ],
    []
    )

  return (
    <div>
    <div className='statistics_title'>
    <h5>Statistics</h5>
    <h6>Last 6 months <MdExpandMore/></h6>
    </div>
    
    <div
    style={{
    width:'300px',
    height:'280px',
    }}
    >
    <Chart data={data} axes={axes}/>
    </div>
    <div className="statistics_footer">
    <p><span style={{color:"#FC6868"}}> &#11044;</span>Products sold</p>
    <p><span style={{color:"#4AB5EB"}}> &#11044;</span>Total Views</p>
    </div>
    </div>
  )
}

export default Statistics