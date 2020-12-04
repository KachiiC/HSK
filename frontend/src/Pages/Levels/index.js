import React from 'react'
// Components
import { Table } from 'antd'
import HSKColumns from './HSKColumns'
import HSKWordsData from 'Data/HSKWordsData'


const HSK = (props) => {

    const level = props.level

    return (
        <>
            <h1 className="page-title">HSK1</h1>
            <Table columns={HSKColumns} dataSource={HSKWordsData} className="hsk-tables"/>
        </>
    )
}
export default HSK