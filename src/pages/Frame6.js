import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame6.module.css";

const Frame6 = () => {
  const navigate = useNavigate();

  const onPropertiesTextClick = useCallback(() => {
    navigate("/10");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/7");
  }, [navigate]);

  const onVectorIcon2Click = useCallback(() => {
    navigate("/17");
  }, [navigate]);

  const onIconMessageSquareOutlineIClick = useCallback(() => {
    navigate("/16");
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
      <div className={styles.saved}>Saved</div>
      <div className={styles.child} />
      <div className={styles.item} />
      <div className={styles.properties} onClick={onPropertiesTextClick}>
        Properties
      </div>
      <div className={styles.searches}>Searches</div>
      <div className={styles.inner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.newListings}>+7 new listings</div>
      <div className={styles.roomForRent}>{`Room for rent `}</div>
      <div className={styles.locationAreaContainer}>
        <p className={styles.location}>Location :</p>
        <p className={styles.location}>Area :</p>
        <p className={styles.location}>Price:</p>
        <p className={styles.location}>Bedroom:</p>
        <p className={styles.location}>Furnishing:</p>
      </div>
      <div className={styles.lineDiv} />
      <div className={styles.receiveNotifications}>Receive notifications</div>
      <div className={styles.child1} />
      <div className={styles.newListings1}>+7 new listings</div>
      <div className={styles.roomForRent1}>{`Room for rent `}</div>
      <div className={styles.locationAreaContainer1}>
        <p className={styles.location}>Location :</p>
        <p className={styles.location}>Area :</p>
        <p className={styles.location}>Price:</p>
        <p className={styles.location}>Bedroom:</p>
        <p className={styles.location}>Furnishing:</p>
      </div>
      <div className={styles.child2} />
      <div className={styles.receiveNotifications1}>Receive notifications</div>
      <img className={styles.iconToggleOn} alt="" src="/-icon-toggle-on.svg" />
      <img className={styles.iconToggleOn1} alt="" src="/-icon-toggle-on.svg" />
      <div className={styles.child3} />
      <img
        className={styles.vectorIcon}
        alt=""
        src="/vector.svg"
        onClick={onVectorIconClick}
      />
      <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      <img
        className={styles.vectorIcon2}
        alt=""
        src="/vector2.svg"
        onClick={onVectorIcon2Click}
      />
      <div className={styles.home}>HOME</div>
      <div className={styles.saved1}>SAVED</div>
      <div className={styles.inbox}>INBOX</div>
      <div className={styles.account}>ACCOUNT</div>
      <img
        className={styles.iconMessageSquareOutlineI}
        alt=""
        src="/-icon-message-square-outline-icon.svg"
        onClick={onIconMessageSquareOutlineIClick}
      />
      <img className={styles.iconTimes} alt="" src="/-icon-times.svg" />
      <img className={styles.iconTimes1} alt="" src="/-icon-times.svg" />
    </div>
  );
};

export default Frame6;
