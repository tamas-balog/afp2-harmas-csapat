import React from "react";
import OrderResults from "./OrderResults";
import OrdersList from "./OrdersList";

class OrdersPage extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className={"row"}>
                    <div className="col-md-12">
                        <div><h1>ORDERS</h1></div>
                        <div className="row"><OrdersList/></div>
                        <div className="row"><OrderResults/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrdersPage;