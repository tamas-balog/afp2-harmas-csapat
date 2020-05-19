import React from "react";
import DeliveriesCRUD from "./DeliveriesCRUD";
import DeliveriesResults from "./DeliveriesResults"


class DeliveriesPage extends React.Component {
       render() {
        return (
            <div className="container-fluid">
                <div className={"row"}>
                    <div className="col-md-4"></div>
                    <div className="col-md-14">
                        <div><h1>DELIVERIES</h1></div>
                        <div className="row"><DeliveriesCRUD/></div>
                        <div className="row"><DeliveriesResults/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeliveriesPage;