import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import Order from './Order.jsx'

function Seated(props) {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        allOrders();
    }, [])
    const allOrders = () => {
        props.list.map((singleTable) => {
            if (singleTable.o)
                setOrders(prevState => [...prevState, singleTable])
        })
    }

    return (
        <div>
            {
                orders && orders.map((singleTable, index) => (
                    <div key={index} className="orderDetails">
                        <Order order={singleTable} index={index} />
                    </div>
                ))
            }
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}
export default connect(mapStateToProps, null)(Seated);
