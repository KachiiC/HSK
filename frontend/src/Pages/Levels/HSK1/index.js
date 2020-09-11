import React, {useState, useEffect} from 'react'
// Components
import {Table } from 'antd'
import HSk1Columns from './Table/HSK1Columns'


function HSK1 (){

    const [hsk1Words, setHsk1Words] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:8000/word_list/")
        .then((response) => {
            return response.json() 
        })
        .then((wordData) => { 
            setHsk1Words(wordData)
        })
        .catch((error) => { 
            console.log(error)
        })
    }, [])

    return (
        <>
            <h1 className="page-title">HSK1</h1>
            <Table columns={HSk1Columns} dataSource={hsk1Words} className="hsk-tables"/>
        </>
    )
}
export default HSK1