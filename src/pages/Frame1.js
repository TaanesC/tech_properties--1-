import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame1.module.css";

const Frame1 = () => {
  const navigate = useNavigate();

  const onImage1Click = useCallback(() => {
    navigate("/14");
  }, [navigate]);

  const onRm600Click = useCallback(() => {
    navigate("/14");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/7");
  }, [navigate]);

  const onVectorIcon1Click = useCallback(() => {
    navigate("/10");
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
      <div className={styles.inbox}>Inbox</div>
      <div className={styles.child} />
      <div className={styles.item} />
      <div className={styles.allChats}>All chats</div>
      <div className={styles.select}>Select</div>
      <img
        className={styles.image1Icon}
        alt=""
        src="/image-1@2x.png"
        onClick={onImage1Click}
      />
      <div className={styles.inner} />
      <div className={styles.rm600} onClick={onRm600Click}>
        Rm 600 / month
      </div>
      <div className={styles.theOasisCondo}>The Oasis Condo, Gelugor</div>
      <img className={styles.heartIcon} alt="" src="/heart.svg" />
      <div className={styles.room70Sqft}>Room 70 sqft</div>
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <div className={styles.lineDiv} />
      <div className={styles.rectangleDiv} />
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
      <img
        className={styles.vectorIcon2}
        alt=""
        src="/vector2.svg"
        onClick={onVectorIcon2Click}
      />
      <div className={styles.home}>HOME</div>
      <div className={styles.saved}>SAVED</div>
      <div className={styles.inbox1}>INBOX</div>
      <div className={styles.account}>ACCOUNT</div>
      <img
        className={styles.iconMessageSquareOutlineI}
        alt=""
        src="/-icon-message-square-outline-icon.svg"
        onClick={onIconMessageSquareOutlineIClick}
      />
    </div>
  );
};

export default Frame1;
