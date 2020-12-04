import React from 'react'
// Components
import HSKWordsData from 'Data/HSKWordsData'
import SiteTable from 'Components/SiteTable'


const HSK = () => {

    const hskColumns = [
        "chinese_characters",
        "pinyin",
        "definition",
        "type",
        "hsk_level"
    ]

    return (
        <>
            <h1 className="page-title">HSK</h1>
            <SiteTable columns={hskColumns} data={HSKWordsData} />
        </>
    )
}
export default HSK