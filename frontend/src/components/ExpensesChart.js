import React, { useState } from 'react';
import { Bar } from 'react-chartjs';
import { CDBContainer } from 'cdbreact';

const Chart = () => {
  const [data] = useState({
    labels: ['Clothing', 'Car', 'Food', 'Rent', 'Coding', 'Cycling'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(194, 116, 161, 0.1)',
        borderColor: 'rgb(194, 116, 161)',
        data: [65, 59, 90, 81, 56, 55],
      },
    ],
  });

  return (
    <div className="ExpenceChart">
    <CDBContainer>
      <h5 className="mt-5">Expenses by Category</h5>
      <Bar data={data} options={{ responsive: true }} />
    </CDBContainer>
    </div>
  );
};

export default Chart;