import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { updatingTables, finishOrder } from './actions/index.jsx';
import CalculateTimeLeft from './CalculateTimeLeft.jsx'

function Table(props) {

    const [status, SetStatus] = useState('')


    useEffect(() => {
        if (!status && props.list[props.index]?.o) {
            SetStatus(props.list[props.index].o && 'busy');
        }
        if (props.list[props.index].s === '60:00') {
            SetStatus('shortly');

        }
        else if (props.list[props.index].s === '90:00') {
            props.finishOrder(props.list[props.index])
            props.updatingTables(props.list.map(x => x == props.list[props.index] ? { t: x.t, o: false, s: false } : x))
            SetStatus('');
        }

    })
    const setShape = (amountPeople) => {
        switch (amountPeople) {
            case 1:
                return 'onePersonTable';
            case 2:
                return 'towPersonTable';
            case 3:
                return 'threePersonTable';
            case 4:
                return 'fourPersonTable';
            default:
                return 'fivePersonTable';
        }
    }
    const guestDetails = () => {
        if (!props.list[props.index].o) return;
        alert(`mobile: ${props.list[props.index].o.Mobile},  Diner: ${props.table?.t.Diners},  start time:${props.list[props.index].s}`)
    }
    return (

        <div onClick={guestDetails}
            className={`${setShape(props.table.t.Diners)} table ${status ? status : ''}`}>
            <p>{props.table.t.Table}<br />
                <span><CalculateTimeLeft singleOrder={props.list[props.index]} />
                </span></p>


        </div >


    );
}
const mapStateToProps = (state) => {
    return {
        list: state.list,
        closedOrders: state.closedOrders
    }
}
export default connect(mapStateToProps, { updatingTables, finishOrder })(Table);
