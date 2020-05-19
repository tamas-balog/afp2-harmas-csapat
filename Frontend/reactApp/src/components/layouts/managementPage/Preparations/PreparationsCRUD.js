import React from 'react';
import PreparationActions from "../../../../actions/PreparationActions";

class PreparationsCRUD extends React.Component{
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
                                onClick={()=>{PreparationActions.list()
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

export default PreparationsCRUD;