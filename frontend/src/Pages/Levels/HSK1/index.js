import React from 'react'
import {Table } from 'antd'
// Components
import HSK1Data from './Table/HSK1Data'
import HSk1Columns from './Table/HSK1Columns'


function HSK1 (){

    return (
        <>
            <h1 className="page-title">HSK1</h1>
            <Table columns={HSk1Columns} dataSource={HSK1Data} className="hsk-tables"/>
        </>
    )
}
export default HSK1