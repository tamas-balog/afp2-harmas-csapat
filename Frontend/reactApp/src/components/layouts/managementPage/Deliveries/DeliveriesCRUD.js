import React from 'react';
import DeliveriesActions from '../../../../actions/DeliveriesActions'

class DeliveriesCRUD extends React.Component{
    constructor(){
        super();
        this.state={
        }
    }

    render(){
        return(
            <div>
                <table>
                    <tr>
                        <td
                            colSpan={2}>
                            <button
                                className="btn btn-info"
                                onClick={()=>{DeliveriesActions.list()
                                }}
                            >List
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default DeliveriesCRUD;