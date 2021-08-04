import React from 'react'
import { Typography } from 'antd'
const {Text} = Typography

const ShowPoem = ({Poem})=>{
    return(
        <Typography>
            <Text italic strong>
                {Poem}
            </Text>
        </Typography>
    )
}

export default ShowPoem