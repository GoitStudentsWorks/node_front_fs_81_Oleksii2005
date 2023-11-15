import React from 'react';
import css from './HomePage.module.css';
import classNames from 'classnames';
import '../../../css/main.css';
import Today from '../../today/Today';
import Month from '../../month/Month';
const MainPage = () => {
  return (
    <div className={css.mainPageContainer}>
      <div className={css.heroImg} />

      <div
        className={classNames(css.mainPageProgressWater, css.mainPageContainer)}
      >
        <label htmlFor="file" style={{ marginRight: 'auto' }}>
          Today
        </label>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <progress id="file" value="46" max="100" />
          <button>Add Water</button>
        </div>
      </div>
      <div className={css.mainPageCalendar}>
        <div
          style={{
            // width: '544px',
            height: '260px',
            outline: '1px solid red',
          }}
        >
          <Today />
        </div>

        <Month />
      </div>
    </div>
  );
};

export default MainPage;
