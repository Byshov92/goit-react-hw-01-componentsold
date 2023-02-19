import PropTypes from 'prop-types';
import css from '../statistics/Statistics.module.css';

export const StatisticsItem = ({ label, percentage }) => {
    return (
    <li className={css.item} style = {{ backgroundColor: `rgba(${random()}, ${random()}, ${random()})` }}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
    </li>
    );
};
function random() {
    return Math.floor(Math.random() * 256);
}
StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}