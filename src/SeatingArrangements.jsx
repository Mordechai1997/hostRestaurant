import React, { useEffect, useState } from 'react';
import Table from './Table.jsx';
import { connect } from "react-redux";


function SeatingArrangements(props) {
    const [allOrders, setAllOrders] = useState(props.list)
    useEffect(() => {
        setAllOrders(props.list)
    }, [props.time])
    return (
        <div className='allTables'>
            {allOrders && allOrders.map((table, index) => (
                <Table key={index} table={table} index={index}></Table>
            ))}
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        list: state.list,
        time: state.time
    }
}
export default connect(mapStateToProps, null)(SeatingArrangements);