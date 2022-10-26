import React from 'react';
import css from'./Transactions.module.css';
import PropTypes from 'prop-types';



 const TransactionHistory = ({items}) => {
  return (
    <table className={css.container}>
      <thead>
        <tr className={css.headTr}>
          <th className={css.th}>TYPE</th>
          <th className={css.th}>AMOUNT</th>
          <th className={css.th}>CURRENCY</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({id, type, amount, currency}) => (
          <tr className={css.bodyTr} key={id}>
            <td className={css.td}>{type}</td>
            <td className={css.td}>{amount}</td>
            <td className={css.td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }))
};

export default TransactionHistory;

