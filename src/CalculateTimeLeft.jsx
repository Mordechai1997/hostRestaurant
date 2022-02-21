import React from "react";
import { connect } from "react-redux";
import { updatingTables } from "./actions";
const formattedSeconds = sec =>
    ("0" + Math.floor((sec % 5460) / 60)).slice(-2) +
    ":" +
    ("0" + (sec % 60)).slice(-2);
class CalculateTimeLeft extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            secondsElapsed: 0
        };
        this.incrementer = null;
    }


    startTimer() {
        this.incrementer = setInterval(() => {

            this.setState(prevState => ({
                secondsElapsed: prevState.secondsElapsed + 1
            }));
            this.props.updatingTables(
                this.props.list.map(x => x === this.props.singleOrder ? { t: x.t, o: x.o, s: formattedSeconds(this.state.secondsElapsed) } : x))

        }, 1000);
    }

    stopTimer() {
        clearInterval(this.incrementer);
    }

    resetTimer() {
        clearInterval(this.incrementer);
        this.setState({
            secondsElapsed: 0
        });
        this.incrementer = null;
    }

    componentDidUpdate(prevProps, prevState) {
        if (formattedSeconds(this.state.secondsElapsed) === "90:01") {
            this.resetTimer();
        }
        if (!this.props.singleOrder.o) {
            return;
        }
        else if (!this.incrementer) {
            this.startTimer();
        }

    }

    render() {
        return <span>{formattedSeconds(this.state.secondsElapsed)}</span>;
    }
}
const mapStateToProps = (state) => {
    return {
        list: state.list,
        closedOrders: state.closedOrders

    }
}
export default connect(mapStateToProps, { updatingTables })(CalculateTimeLeft);