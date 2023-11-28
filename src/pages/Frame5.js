import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame5.module.css";

const Frame5 = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/8");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/14");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/13");
  }, [navigate]);

  const onVectorIcon4Click = useCallback(() => {
    navigate("/7");
  }, [navigate]);

  const onVectorIcon5Click = useCallback(() => {
    navigate("/7");
  }, [navigate]);

  const onVectorIcon6Click = useCallback(() => {
    navigate("/17");
  }, [navigate]);

  const onIconMessageSquareOutlineI1Click = useCallback(() => {
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
      <img
        className={styles.vectorIcon}
        alt=""
        src="/vector5.svg"
        onClick={onVectorIconClick}
      />
      <div className={styles.details}>Details</div>
      <img className={styles.heartIcon} alt="" src="/heart.svg" />
      <img
        className={styles.iconUploadShare}
        alt=""
        src="/-icon-upload-share1.svg"
      />
      <div className={styles.child} />
      <div className={styles.listedBy}>Listed by</div>
      <div className={styles.goldenPinkRealty}>Golden Pink Realty</div>
      <div className={styles.realEstateAgency}>Real Estate Agency</div>
      <img
        className={styles.iconUserCircle}
        alt=""
        src="/-icon-user-circle1.svg"
      />
      <img className={styles.vectorIcon1} alt="" src="/vector6.svg" />
      <div className={styles.email}>
        <p className={styles.blankLine}>
          <span>{`@ Email ................................. `}</span>
          <span className={styles.hellogmailcom}>hello@gmail.com</span>
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>
          <span>{`     Phone ............................... `}</span>
          <span className={styles.hellogmailcom}>+60 12-3456 789</span>
        </p>
      </div>
      <img className={styles.vectorIcon2} alt="" src="/vector3.svg" />
      <div className={styles.phoneAlt} />
      <div className={styles.chevronRight} />
      <img
        className={styles.item}
        alt=""
        src="/rectangle-81.svg"
        onClick={onRectangle1Click}
      />
      <img
        className={styles.inner}
        alt=""
        src="/rectangle-481.svg"
        onClick={onRectangle2Click}
      />
      <b className={styles.messageInThe}>Message in the app</b>
      <b className={styles.call}>Call</b>
      <img
        className={styles.iconMessageSquareOutlineI}
        alt=""
        src="/-icon-message-square-outline-icon3.svg"
      />
      <img className={styles.vectorIcon3} alt="" src="/vector14.svg" />
      <div className={styles.rectangleDiv} />
      <img
        className={styles.vectorIcon4}
        alt=""
        src="/vector.svg"
        onClick={onVectorIcon4Click}
      />
      <img
        className={styles.vectorIcon5}
        alt=""
        src="/vector1.svg"
        onClick={onVectorIcon5Click}
      />
      <img
        className={styles.vectorIcon6}
        alt=""
        src="/vector2.svg"
        onClick={onVectorIcon6Click}
      />
      <div className={styles.home}>HOME</div>
      <div className={styles.saved}>SAVED</div>
      <div className={styles.inbox}>INBOX</div>
      <div className={styles.account}>ACCOUNT</div>
      <img
        className={styles.iconMessageSquareOutlineI1}
        alt=""
        src="/-icon-message-square-outline-icon.svg"
        onClick={onIconMessageSquareOutlineI1Click}
      />
      <div className={styles.child1} />
      <div className={styles.child2} />
      <div className={styles.hideThisListing}>{`Hide this listing `}</div>
      <div className={styles.reportThisListing}>{`Report this listing `}</div>
      <img className={styles.iconEyeSlash} alt="" src="/-icon-eye-slash1.svg" />
      <img
        className={styles.iconMessageReport}
        alt=""
        src="/-icon-message-report1.svg"
      />
    </div>
  );
};

export default Frame5;
