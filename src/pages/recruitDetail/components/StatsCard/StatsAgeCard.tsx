import DetailAge from '@shared/assets/svg/DetailAge';

import { STATS_AGE_DATA } from '../../constants/statsData';
import StatsCardBase from './StatsCardBase';
import * as styles from './StatsAgeCard.css';

const DATA_MAX = Math.max(...STATS_AGE_DATA.map((d) => d.percent));

const StatsAgeCard = () => {
  return (
    <StatsCardBase icon={<DetailAge width={24} height={24} />} title="연령">
      <div className={styles.chartArea}>
        <div className={styles.percentRow}>
          {STATS_AGE_DATA.filter((item) => item.percent > 0).map((item) => (
            <span
              key={item.label}
              className={
                item.percent === DATA_MAX
                  ? styles.activePercent
                  : styles.inactivePercent
              }
            >
              {item.percent}%
            </span>
          ))}
        </div>
        <ul className={styles.barList}>
          {STATS_AGE_DATA.map((item) => {
            const isActive = item.percent === DATA_MAX;
            return (
              <li key={item.label} className={styles.barItem}>
                <div className={styles.barTrack}>
                  <div
                    className={
                      isActive ? styles.barFill : styles.barFillInactive
                    }
                    style={{ height: `${item.percent}%` }}
                  />
                </div>
                <span className={styles.ageLabel}>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </StatsCardBase>
  );
};

export default StatsAgeCard;
