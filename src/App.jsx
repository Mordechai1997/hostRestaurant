import floor from './floor.json';
import { connect } from "react-redux";
import { updatingTables } from "./actions";
import ControlPanel from './ControlPanel';
import SeatingArrangements from './SeatingArrangements';

import './App.css';

function App(props) {
    props.updatingTables(floor.map(x => x = { t: x, o: false,s:false }));
    return (
        <div className='my-app'>
            <ControlPanel />
            <SeatingArrangements/>
        </div>
    );
}

export default connect(null, { updatingTables })(App);
