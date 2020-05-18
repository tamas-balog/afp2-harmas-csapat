import React from 'react';
import PreparationActions from "../../../../actions/PreparationActions";

class PreparationsCRUD extends React.Component{
    constructor(){
        super();
        this.state={
            sequentialNumber : "",
            id : "",
            name : "",
            preparedAt : ""
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
                                    PreparationActions.search(this.state.id, this.state.preparedAt);
                                }
                            }}
                        /></td>
                    </tr>
                    <tr>
                        <td><input type={"text"} placeholder="Prepared at"
                                   value={this.state.preparedAt}
                                   onChange={(e)=>{
                                       let st = this.state;
                                       st.preparedAt = e.target.value;
                                       this.setState(st);
                                   }}
                        /></td>
                    </tr>
                    <tr>
                        <td
                            colSpan={2}>
                            <button
                                className="btn btn-info"
                                onClick={()=>{PreparationActions.search(this.state.id, this.state.preparedAt)
                                }}
                            >Search
                            </button>
                            <button
                                className="btn btn-info"
                                onClick={()=>{
                                    PreparationActions.update(
                                        this.state.sequentialNumber,
                                        this.state.id,
                                        this.state.name,
                                        this.state.preparedAt,
                                    );window.location.reload();} }
                            >Update
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default PreparationsCRUD;