import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame8.module.css";

const Frame8 = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/7");
  }, [navigate]);

  const onVectorIcon1Click = useCallback(() => {
    navigate("/7");
  }, [navigate]);

  const onVectorIcon2Click = useCallback(() => {
    navigate("/10");
  }, [navigate]);

  const onVectorIcon3Click = useCallback(() => {
    navigate("/17");
  }, [navigate]);

  const onIconMessageSquareOutlineIClick = useCallback(() => {
    navigate("/16");
  }, [navigate]);

  const onGoldenPinkRealtyClick = useCallback(() => {
    navigate("/12");
  }, [navigate]);

  const onIconUserCircleClick = useCallback(() => {
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
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.child} />
      <div className={styles.rm600}>Rm 600 / month</div>
      <div className={styles.theOasisCondo}>The Oasis Condo, Gelugor</div>
      <div className={styles.room2}>Room - 2 days ago</div>
      <div className={styles.item} />
      <div className={styles.inner} />
      <img
        className={styles.vectorIcon1}
        alt=""
        src="/vector.svg"
        onClick={onVectorIcon1Click}
      />
      <img
        className={styles.vectorIcon2}
        alt=""
        src="/vector1.svg"
        onClick={onVectorIcon2Click}
      />
      <img
        className={styles.vectorIcon3}
        alt=""
        src="/vector2.svg"
        onClick={onVectorIcon3Click}
      />
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
      <div className={styles.propertyDetails}>Property Details</div>
      <div className={styles.listedBy}>Listed by</div>
      <div
        className={styles.goldenPinkRealty}
        onClick={onGoldenPinkRealtyClick}
      >
        Golden Pink Realty
      </div>
      <div className={styles.realEstateAgency}>Real Estate Agency</div>
      <img
        className={styles.iconUserCircle}
        alt=""
        src="/-icon-user-circle1.svg"
        onClick={onIconUserCircleClick}
      />
      <img className={styles.vectorIcon4} alt="" src="/vector6.svg" />
    </div>
  );
};

export default Frame8;
