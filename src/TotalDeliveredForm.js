import React from 'react';

const TotalDeliveredForm = ({ totalPicked }) => {
  return (
    <table className="bordered total-delivered-form">
      <thead>
        <tr>
          <th>Total Order Delivered:</th>
          <th className="bold">{String(totalPicked).padStart(3, '0')}</th>
        </tr>
      </thead>
    </table>
  );
};

export default TotalDeliveredForm;
