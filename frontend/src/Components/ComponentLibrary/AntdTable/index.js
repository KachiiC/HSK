import React from "react"
//Components
import { Table } from 'antd';
import TableCaption from "./TableContents/TableCaption";

const AntdTable = (props) => {

    const table_info = () => {
        if (props.captions) {
            return props.captions.map((info, index) => (   
                <TableCaption 
                    index={index} 
                    info={info} 
                />
            ))
        }
    }

    return (
        <div className="w-90 m-auto">
            <Table 
                title={() => <h1>{props.title}</h1>}
                columns={props.columns} 
                dataSource={props.data} 
                pagination={props.pagination}
                bordered
            />
            {table_info()}
        </div>
    )
}

export default AntdTable;