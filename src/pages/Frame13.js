import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame13.module.css";

const Frame13 = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/3");
  }, [navigate]);

  const onRectangle8Click = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  const onRectangle9Click = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <img
        className={styles.batteryThreeQuartersIcon}
        alt=""
        src="/batterythreequarters.svg"
      />
      <img className={styles.wifiIcon} alt="" src="/wifi.svg" />
      <img className={styles.signalIcon} alt="" src="/signal.svg" />
      <b className={styles.pm}>9:41 PM</b>
      <div className={styles.child} />
      <div className={styles.item} />
      <img
        className={styles.vectorIcon}
        alt=""
        src="/vector16.svg"
        onClick={onVectorIconClick}
      />
      <div className={styles.inner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.child1} />
      <div className={styles.neverMissA}>Never miss a perfect match!</div>
      <div className={styles.child2} />
      <div className={styles.child3} />
      <div className={styles.child4} />
      <div className={styles.child5} />
      <div className={styles.newProperties}>New properties !</div>
      <div className={styles.thereAreNewContainer}>
        <p className={styles.thereAreNew}>
          There are new 7 properties listed that
        </p>
        <p className={styles.thereAreNew}>{`matches your saved search.   `}</p>
      </div>
      <div className={styles.turnOnNotificationsContainer}>
        <p className={styles.thereAreNew}>
          Turn on notifications, so we could notify you
        </p>
        <p
          className={styles.thereAreNew}
        >{`once your dream property shows up on the list.    `}</p>
      </div>
      <div className={styles.child6} onClick={onRectangle8Click} />
      <b className={styles.turnOnNotification}>Turn on notification</b>
      <div className={styles.child7} onClick={onRectangle9Click} />
      <b className={styles.maybeLater}>{`Maybe  Later `}</b>
    </div>
  );
};

export default Frame13;
