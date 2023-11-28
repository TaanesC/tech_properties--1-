import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame3.module.css";

const Frame3 = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/12");
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
      <div className={styles.today}>Today</div>
      <img
        className={styles.vectorIcon}
        alt=""
        src="/vector5.svg"
        onClick={onVectorIconClick}
      />
      <div className={styles.theOasisCondo}>The oasis condo</div>
      <img className={styles.image1Icon} alt="" src="/image-11@2x.png" />
      <img
        className={styles.iconHorizontalEllipsis}
        alt=""
        src="/-icon-horizontal-ellipsis.svg"
      />
      <div className={styles.item} />
      <div className={styles.openListingDetails}>Open Listing Details</div>
      <img className={styles.iconShare} alt="" src="/-icon-share.svg" />
      <div className={styles.inner} />
      <div className={styles.goldenPinkRealty}>Golden Pink Realty</div>
      <div className={styles.realEstateAgency}>Real Estate Agency</div>
      <img
        className={styles.iconUserCircle}
        alt=""
        src="/-icon-user-circle1.svg"
      />
      <img className={styles.vectorIcon1} alt="" src="/vector6.svg" />
      <div className={styles.lineDiv} />
      <div className={styles.child1} />
      <div className={styles.rectangleDiv} />
      <div className={styles.child2} />
      <div className={styles.child3} />
      <div className={styles.pm1}>1:45 PM</div>
      <div className={styles.child4} />
      <div className={styles.suggestedDate}>Suggested date</div>
      <div className={styles.at600Pm}>08/10/23 at 6.00 PM</div>
      <div className={styles.pm2}>1:50 PM</div>
      <img
        className={styles.iconDoubleCheck}
        alt=""
        src="/-icon-double-check.svg"
      />
      <img className={styles.iconCalander} alt="" src="/-icon-calander.svg" />
      <div className={styles.child5} />
      <div className={styles.child6} />
      <img
        className={styles.illustrationMapIcon}
        alt=""
        src="/-illustration-map.svg"
      />
      <div className={styles.child7} />
      <div className={styles.child8} />
      <div className={styles.writeAMessage}>Write a message...</div>
      <img className={styles.iconSend} alt="" src="/-icon-send.svg" />
      <img
        className={styles.iconAttachment}
        alt=""
        src="/-icon-attachment.svg"
      />
    </div>
  );
};

export default Frame3;
