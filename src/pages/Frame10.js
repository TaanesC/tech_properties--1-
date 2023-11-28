import { useCallback } from "react";
import RectangleComponent from "../components/RectangleComponent";
import { useNavigate } from "react-router-dom";
import styles from "./Frame10.module.css";

const Frame10 = () => {
  const navigate = useNavigate();

  const onRectangle5Click = useCallback(() => {
    navigate("/8");
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

  const onRectangle9Click = useCallback(() => {
    navigate("/15");
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
      <div className={styles.inner} />
      <div className={styles.p}>P</div>
      <div className={styles.t}>T</div>
      <img className={styles.iconBrowser} alt="" src="/-icon-browser.svg" />
      <div className={styles.letsFindYouContainer}>
        <p className={styles.lets}>{`Let’s         find you `}</p>
        <p className={styles.lets}>the best home</p>
      </div>
      <RectangleComponent />
      <div className={styles.rectangleDiv} />
      <div className={styles.child1} />
      <div className={styles.child2} onClick={onRectangle5Click} />
      <img
        className={styles.emojiHouseWithGarden}
        alt=""
        src="/-emoji-house-with-garden.svg"
      />
      <img className={styles.iconSearch} alt="" src="/-icon-search.svg" />
      <div className={styles.child3} />
      <div className={styles.rent}>Rent</div>
      <div className={styles.buy}>Buy</div>
      <div className={styles.flat}>Flat</div>
      <div className={styles.child4} />
      <div className={styles.room}>Room</div>
      <div className={styles.house}>House</div>
      <b className={styles.moreFilter}>More Filter</b>
      <div className={styles.child5} />
      <div className={styles.recentlyViewed}>Recently Viewed</div>
      <b className={styles.seeAll}>See all</b>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
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
      <div className={styles.inbox}>INBOX</div>
      <div className={styles.account}>ACCOUNT</div>
      <img
        className={styles.iconMessageSquareOutlineI}
        alt=""
        src="/-icon-message-square-outline-icon.svg"
        onClick={onIconMessageSquareOutlineIClick}
      />
      <div className={styles.child6} onClick={onRectangle9Click} />
      <b className={styles.showResults}>Show Results</b>
    </div>
  );
};

export default Frame10;
