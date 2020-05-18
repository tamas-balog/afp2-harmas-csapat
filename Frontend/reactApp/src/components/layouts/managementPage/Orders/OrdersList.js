import React from 'react';
import OrderActions from "../../../../actions/OrderActions";

class OrdersList extends React.Component {

    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td colSpan={4}>
                            <button
                                className="btn btn-info"
                                onClick={() => {
                                    window.location.reload();
                                    OrderActions.list()
                                }}
                            >List
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default OrdersList;