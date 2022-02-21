import React from 'react';
import { connect } from "react-redux";
import { updatingTables } from "./actions";
import { useState, useEffect } from 'react';
import { checkFreeTable } from './checkFreeTable'

function Expected(props) {

    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        let len = props.orders.length;
        let freeTable = true;
        for (let i = 0; i < len && freeTable; i++) {
            freeTable = checkFreeTable(props)
        }
        setLoaded(true)
    }, [props.closedOrders,props.orders])



    return (
        <div>
            {
                props.orders && props.orders.map((order, index) => (
                    <div key={index} className="orderDetails">
                        <p>Diners : {order.Diners}</p>
                        <p>Mobile : {order.Mobile}</p>
                    </div>
                ))
            }
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        list: state.list,
        closedOrders: state.closedOrders
    }
}
export default connect(mapStateToProps, { updatingTables })(Expected);