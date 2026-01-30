import styles from './Timer.module.scss';
import { formatTime } from '../Utils/Utils';

const Timer = ({ milliseconds = 0 }) => {
	return <div className={styles.stoper}> {formatTime(milliseconds)} </div>;
};
export default Timer;
