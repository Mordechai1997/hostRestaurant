import React from 'react';
import { connect } from "react-redux";
import { useState, useEffect } from 'react';
function Finished(props) {
    const [tablesAvailable, setTablesAvailable] = useState([])

    useEffect(() => {
        setTablesAvailable(props.closedOrders)
    }, [props.closedOrders])

    return (
        <div>
            {
                tablesAvailable && tablesAvailable.map((order, index) => (
                    <div key={index} className="orderDetails">
                        <p> Table : {order.t.Table}</p>
                        <p> Diners : {order.t.Diners}</p>
                        <p> Mobile : {order.o.Mobile}</p>
                    </div>
                ))
            }
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        closedOrders: state.closedOrders
    }
}
export default connect(mapStateToProps, null)(Finished);