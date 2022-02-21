import { useState, useEffect } from 'react';
import Expected from './Expected';
import Seated from './Seated';
import Finished from './Finished';
import orders from './orders.json';
import { connect } from "react-redux";
import './ControlPanel.css'

function ControlPanel(props) {

    useEffect(() => {
        setEvent('expected');
    }, [props.closedOrders])

    const [event, setEvent] = useState('expected');
    
    const setAction = (e) => {
        e.target.attributes.name && setEvent(e.target.attributes.name.nodeValue)
    }
    return (
        <div className='Cpanel'>
            <ul>
                <li name='expected' className={`${event === 'expected' && 'action'}`}
                    onClick={setAction}>Expected <br /> <span>0</span></li>
                <li name='seated' className={`${event === 'seated' && 'action'}`}
                    onClick={setAction}>Seated <br /><span>0</span></li>
                <li name='finished' className={`${event === 'finished' && 'action'}`}
                    onClick={setAction}>Finished <br /><span>0</span></li>
            </ul>
            {event === 'expected' ? <Expected orders={orders} /> : event === 'seated' ? <Seated /> : <Finished />}
        </div>);
}
const mapStateToProps = (state) => {
    return {
        closedOrders: state.closedOrders
    }
}
export default connect(mapStateToProps, null)(ControlPanel);