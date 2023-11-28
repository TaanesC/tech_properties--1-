import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame4.module.css";

const Frame4 = () => {
  const navigate = useNavigate();

  const onRectangle7Click = useCallback(() => {
    navigate("/12");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <img
        className={styles.batteryThreeQuartersIcon}
        alt=""
        src="/batterythreequarters1.svg"
      />
      <img className={styles.wifiIcon} alt="" src="/wifi1.svg" />
      <img className={styles.signalIcon} alt="" src="/signal1.svg" />
      <b className={styles.pm}>9:41 PM</b>
      <img className={styles.vectorIcon} alt="" src="/vector7.svg" />
      <div className={styles.details}>Details</div>
      <img className={styles.heartIcon} alt="" src="/heart1.svg" />
      <img
        className={styles.iconUploadShare}
        alt=""
        src="/-icon-upload-share.svg"
      />
      <div className={styles.child} />
      <div className={styles.listedBy}>Listed by</div>
      <div className={styles.goldenPinkRealty}>Golden Pink Realty</div>
      <div className={styles.realEstateAgency}>Real Estate Agency</div>
      <img
        className={styles.iconUserCircle}
        alt=""
        src="/-icon-user-circle2.svg"
      />
      <img className={styles.vectorIcon1} alt="" src="/vector8.svg" />
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
      <img className={styles.vectorIcon2} alt="" src="/vector9.svg" />
      <div className={styles.phoneAlt} />
      <div className={styles.chevronRight} />
      <img className={styles.item} alt="" src="/rectangle-8.svg" />
      <img className={styles.inner} alt="" src="/rectangle-48.svg" />
      <b className={styles.messageInThe}>Message in the app</b>
      <b className={styles.call}>Call</b>
      <img
        className={styles.iconMessageSquareOutlineI}
        alt=""
        src="/-icon-message-square-outline-icon1.svg"
      />
      <img className={styles.vectorIcon3} alt="" src="/vector10.svg" />
      <div className={styles.rectangleDiv} />
      <img className={styles.vectorIcon4} alt="" src="/vector11.svg" />
      <img className={styles.vectorIcon5} alt="" src="/vector12.svg" />
      <img className={styles.vectorIcon6} alt="" src="/vector13.svg" />
      <div className={styles.home}>HOME</div>
      <div className={styles.saved}>SAVED</div>
      <div className={styles.inbox}>INBOX</div>
      <div className={styles.account}>ACCOUNT</div>
      <img
        className={styles.iconMessageSquareOutlineI1}
        alt=""
        src="/-icon-message-square-outline-icon2.svg"
      />
      <div className={styles.child1} />
      <div className={styles.child2} />
      <div className={styles.hideThisListing}>{`Hide this listing `}</div>
      <div className={styles.reportThisListing}>{`Report this listing `}</div>
      <img className={styles.iconEyeSlash} alt="" src="/-icon-eye-slash.svg" />
      <img
        className={styles.iconMessageReport}
        alt=""
        src="/-icon-message-report.svg"
      />
      <div className={styles.child3} />
      <div className={styles.child4} onClick={onRectangle7Click} />
      <b className={styles.cancel}>Cancel</b>
      <div className={styles.saveContactBeforeContainer}>
        <p className={styles.saveContactBeforeCall}>
          <b>Save contact before call?</b>
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>
          Saving the contacts helps you later to know what
        </p>
        <p className={styles.blankLine}>
          property the phone number is related to.
        </p>
      </div>
      <div className={styles.lineDiv} />
      <div className={styles.child5} />
      <b className={styles.call1}>Call</b>
      <b className={styles.saveContactAnd}>Save contact and call</b>
    </div>
  );
};

export default Frame4;
