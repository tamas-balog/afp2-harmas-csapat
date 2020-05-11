import React from 'react';
import DeliveriesActions from '../../../../actions/DeliveriesActions'

class DeliveriesCRUD extends React.Component{
    constructor(){
        super();
        this.state={
            id : "",
            deliveredAt : ""
        }
    }

    render(){
        return(
            <div>
                <table>
                    <tr>
                        <td><input
                            type={"number"} min="0" placeholder="ID"
                            value={this.state.id}
                            onChange={(e)=>{
                                let st = this.state;
                                st.id = e.target.value;
                                this.setState(st);}
                            }
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    DeliveriesActions.search(this.state.id, this.state.deliveredAt);
                                }
                            }}
                        /></td>
                    </tr>
                    <tr>
                        <td><input type={"text"} placeholder="Delivered at"
                                   value={this.state.deliveredAt}
                                   onChange={(e)=>{
                                       let st = this.state;
                                       st.deliveredAt = e.target.value;
                                       this.setState(st);
                                   }}
                        /></td>
                    </tr>
                    <tr>
                        <td
                            colSpan={2}>
                            <button
                                className="btn btn-info"
                                onClick={()=>{DeliveriesActions.search(this.state.id, this.state.deliveredAt)
                                }}
                            >Search by ID
                            </button>
                            <button
                                className="btn btn-info"
                                onClick={()=>{
                                    DeliveriesActions.update(
                                        this.state.deliveredAt,
                                    );window.location.reload();}}
                            >Update
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default DeliveriesCRUD;