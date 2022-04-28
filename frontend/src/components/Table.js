import React from 'react';
import TableRow from './TableRow';
import PropTypes from 'prop-types';

function Table(props){
    return (
            <table className = "table table-bordered ">
                <thead>
                    <tr style={{textAlign: "center"}}>
                        <td>Data</td>
                        <td>Išlaidų pavadinimas</td>
                        <td>Suma</td>
                        <td>Veiksmai</td>
                    </tr>
                </thead>
                <tbody style={{textAlign: "center"}}>
                    { props.entries.map((entry) => <TableRow key={entry.id} entry={entry}
                                                                   handleUpdateRecord = {props.handleUpdateRecord}
                                                                   handleDeleteRecord = {props.handleDeleteRecord}/>)}
                </tbody>
            </table>
        );
}

export default Table;

Table.propTypes ={
    entries: PropTypes.array,
    handleUpdateRecord: PropTypes.func,
    handleDeleteRecord: PropTypes.func,
}
