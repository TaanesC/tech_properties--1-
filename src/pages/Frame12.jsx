import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame12.module.css";

const Frame12 = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/4");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/6");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/6");
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
      <div className={styles.exploreYourNeighborhood}>
        Explore your neighborhood
      </div>
      <div className={styles.allowUsToContainer}>
        <p className={styles.allowUsTo}>
          Allow us to use your location so that we could
        </p>
        <p
          className={styles.allowUsTo}
        >{`show you the properties in your area   `}</p>
      </div>
      <div className={styles.rectangleDiv} onClick={onRectangle3Click} />
      <div className={styles.map} />
      <div className={styles.map} />
      <b className={styles.maybeLater}>{`Maybe  Later `}</b>
      <div className={styles.child1} onClick={onRectangle4Click} />
      <b className={styles.enableLocation}>Enable location</b>
      <img className={styles.vectorIcon1} alt="" src="/vector18.svg" />
      <img
        className={styles.searchLocationIcon}
        alt=""
        src="/searchlocation.svg"
      />
    </div>
  );
};

export default Frame12;
