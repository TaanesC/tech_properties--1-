import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame11.module.css";

const Frame11 = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/7");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/7");
  }, [navigate]);

  const onRectangle5Click = useCallback(() => {
    navigate("/7");
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
      <div className={styles.rectangleDiv} onClick={onRectangle3Click} />
      <div className={styles.whatAreYou}>What are you interested in ?</div>
      <div className={styles.of4}>1 of 4</div>
      <div className={styles.child1} onClick={onRectangle4Click} />
      <b className={styles.justLookAround}>{`  Just look around `}</b>
      <div className={styles.child2} onClick={onRectangle5Click} />
      <b className={styles.buy}>{`Buy `}</b>
      <b className={styles.rent}>{`Rent  `}</b>
      <div className={styles.child3} />
      <div className={styles.child4} />
      <img className={styles.vectorIcon1} alt="" src="/vector17.svg" />
      <div className={styles.photoVideo} />
      <div className={styles.child5} />
      <b className={styles.skip}>Skip</b>
    </div>
  );
};

export default Frame11;
