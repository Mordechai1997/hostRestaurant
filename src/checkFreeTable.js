export const checkFreeTable = (props) => {
    if (initialTest(props.list) < 0)
        return false;
    const order = props.orders.shift();
    const allTables = props.list;
    const index = allTables.findIndex(x => !x.o && x.t.Diners === order.Diners);
    if (index === -1) {

        props.orders.push(order)
        return false;
    }
    allTables[index] = {
        t: allTables[index].t,
        o: order,
        s: true
    }
    props.updatingTables(allTables);
    return true;
}
const initialTest = (allTable) => {
    return allTable.findIndex(x => !x.s)
}