import React from 'react'
import { Typography } from 'antd'
const {Text} = Typography

const ShowPoem = ({data})=>{
    return(
        <Typography><Text mark>{data}</Text></Typography>
    )
}

export default ShowPoem