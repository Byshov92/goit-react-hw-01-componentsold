import { PropTypes } from 'prop-types';
import css from '../transactionHistory/TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
    <table className={css.transactionHistory}>
        <thead>
        <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
        </tr>
        </thead>
        {items.map(items => (
        <tbody key={items.id}>
            <tr>
            <td className={css.typeUp}>{items.type}</td>
            <td>{items.amount}</td>
            <td>{items.currency}</td>
            </tr>
        </tbody>
        ))}
    </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
    ),
};
