import Table from 'react-bootstrap/Table'
import React, { useState, useEffect } from "react";
import { getAllIncomes } from "../api/IncomesAPI";


const ExpenceTable = () => {

    const [incomes, setIncomes] = useState([]);
      useEffect(() => {
        getAllIncomes().then((res) => {
          console.log(res.data);
          setIncomes(res.data);
        });
      }, []);

    const incomesTable = incomes.map((income, index) => {
        return (
            <tr>
            <td>{income.id}</td>
            <td>{income.sum}</td>
            <td>{income.date}</td>
            <td>{income.comment}</td>
        </tr>
        );
      });
    return (
        <div className='ExpenseTable'>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>
                    {incomesTable}
                </tbody>
            </Table>
        </div>
    );
}

export default ExpenceTable;