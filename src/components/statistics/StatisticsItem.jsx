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

