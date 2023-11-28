import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame.module.css";

const Frame = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/7");
  }, [navigate]);

  const onVectorIcon1Click = useCallback(() => {
    navigate("/10");
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
      <div className={styles.child} />
      <img
        className={styles.vectorIcon}
        alt=""
        src="/vector.svg"
        onClick={onVectorIconClick}
      />
      <img
        className={styles.vectorIcon1}
        alt=""
        src="/vector1.svg"
        onClick={onVectorIcon1Click}
      />
      <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
      <div className={styles.home}>HOME</div>
      <div className={styles.saved}>SAVED</div>
      <div className={styles.inbox}>INBOX</div>
      <div className={styles.account}>ACCOUNT</div>
      <img
        className={styles.iconMessageSquareOutlineI}
        alt=""
        src="/-icon-message-square-outline-icon.svg"
        onClick={onIconMessageSquareOutlineIClick}
      />
      
      <img
        className={styles.iconUserCircle}
        alt=""
        src="/-icon-user-circle.svg"
      />
      <div className={styles.hiUserName}>Hi, user name</div>
      <div className={styles.gciu123gmailcom}>gciu123@gmail.com</div>
      <div className={styles.editProfile}>Edit Profile</div>
      <div className={styles.email}>
        <p className={styles.blankLine}>
          @ Email ................................. hello@gmail.com
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>
          {" "}
          Phone ............................... +60 12-3456 789
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>
          {" "}
          Location ............................. Gelugor, Penang  Birth Date
          ..................................... 01 Jan 2000  Gender
          ..................................................... Male 
        </p>
        <p className={styles.blankLine}>
          Occupation ......................................... Student
        </p>
      </div>
      <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
      <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
      <div className={styles.logOut}>{`Log Out `}</div>
      <div className={styles.locationArrow} />
    </div>
  );
};

export default Frame;
