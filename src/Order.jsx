export default function Order(props) {
    return (
        <div >
            <p>Table : {props.order.t.Table}</p>
            <p>Diners : {props.order.o.Diners}</p>
            <p>Mobile : {props.order.o.Mobile}</p>

        </div>
    );
}

