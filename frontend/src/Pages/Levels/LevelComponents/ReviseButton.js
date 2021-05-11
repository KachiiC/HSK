import React from 'react'
import {Button} from 'antd'

const ReviseButton = (props) => (
    <Button onClick={props.click} type={props.type}>
        {props.title}
    </Button>
)

export default ReviseButton