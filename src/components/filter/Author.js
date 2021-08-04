import React from 'react'
import { Select, Space } from 'antd'
const { Option } = Select

const Author = ({Author})=>{

    const selectAuthor=(value)=>{
        console.log(value)
    }
    return(
        <Space align="center">
            <Select
                className="authorSelect"
                showSearch
                style={{ width: 200}}
                placeholder="Select Author"
                onSelect={selectAuthor}
            //     optionFilterProp="children"
            // //     filterOption={(input, option) =>
            // //     option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            // // }
            >
                {
                    Author.map((name, index)=>{
                        
                        return(                           
                            <Option value={name}>{name}</Option>
                        )
                    })
                }
            </Select>
        </Space>
    )
}

export default Author