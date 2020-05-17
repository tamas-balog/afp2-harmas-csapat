import React from "react";
import PizzasCRUD from "./PizzasCRUD";
import PizzasResults from "./PizzasResults";

class PizzasPage extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className={"row"}>
                    <div className="col-md-4"></div>
                    <div className="col-md-10">
                        <div><h1>PIZZAS</h1></div>
                        <div className="row"><PizzasCRUD/></div>
                        <div className="row"><PizzasResults/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PizzasPage;