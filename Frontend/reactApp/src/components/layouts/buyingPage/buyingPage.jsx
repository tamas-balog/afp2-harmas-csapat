import PizzaSearchBar from "./PizzaSearchBar";
import PizzaSearchResults from "./PizzaSearchResults";
import React from "react";

class BuyingPage extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className={"row"}>
                    <div className="col-md-8">
                        <div className="row"><PizzaSearchBar/></div>
                        <div className="row"><PizzaSearchResults/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BuyingPage;