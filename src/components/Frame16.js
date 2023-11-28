import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../pages/Frame16.module.css";

const Frame16 = () => {
  const navigate = useNavigate();

  const onTECHPROPERTIESTextClick = useCallback(() => {
    navigate("/2");
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
      <div
        className={styles.techProperties}
        onClick={onTECHPROPERTIESTextClick}
      >
        <span className={styles.techPropertiesTxtContainer}>
          <p className={styles.tech}>{`TECH `}</p>
          <p className={styles.tech}>PROPERTIES</p>
        </span>
      </div>
      <div className={styles.p}>P</div>
      <div className={styles.t}>T</div>
    </div>
  );
};

export default Frame16;
