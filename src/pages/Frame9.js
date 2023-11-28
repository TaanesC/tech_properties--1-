import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame9.module.css";

const Frame9 = () => {
  const navigate = useNavigate();

  const onRectangle20Click = useCallback(() => {
    navigate("/15");
  }, [navigate]);

  const onIconActionCancelCircleCloClick = useCallback(() => {
    navigate("/7");
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
      <img className={styles.inner} alt="" src="/line-3.svg" />
      <b className={styles.clearAll}>Clear all</b>
      <div className={styles.filters}>Filters</div>
      <div className={styles.property}>Property</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.flat}>Flat</div>
      <div className={styles.child1} />
      <div className={styles.room}>Room</div>
      <div className={styles.house}>House</div>
      <div className={styles.child2} />
      <div className={styles.child3} />
      <div className={styles.rent}>Rent</div>
      <div className={styles.buy}>Buy</div>
      <img className={styles.lineIcon} alt="" src="/line-3.svg" />
      <div className={styles.bedrooms}>Bedrooms</div>
      <div className={styles.child4} />
      <div className={styles.child5} />
      <div className={styles.child6} />
      <div className={styles.div1}>1</div>
      <div className={styles.child7} />
      <div className={styles.child8} />
      <div className={styles.child9} />
      <div className={styles.any}>Any</div>
      <div className={styles.div2}>4</div>
      <div className={styles.div3}>2</div>
      <div className={styles.div4}>3</div>
      <div className={styles.div5}>5</div>
      <div className={styles.child10} />
      <div className={styles.div6}>6</div>
      <img className={styles.child11} alt="" src="/line-3.svg" />
      <div className={styles.baths}>Baths</div>
      <div className={styles.child12} />
      <div className={styles.child13} />
      <div className={styles.child14} />
      <div className={styles.div7}>1</div>
      <div className={styles.child15} />
      <div className={styles.child16} />
      <div className={styles.child17} />
      <div className={styles.any1}>Any</div>
      <div className={styles.div8}>4</div>
      <div className={styles.div9}>2</div>
      <div className={styles.div10}>3</div>
      <div className={styles.div11}>5</div>
      <div className={styles.child18} />
      <div className={styles.div12}>6</div>
      <img className={styles.child19} alt="" src="/line-3.svg" />
      <div className={styles.child20} onClick={onRectangle20Click} />
      <b className={styles.showResults}>Show Results</b>
      <div className={styles.priceRange}>Price range</div>
      <div className={styles.malaysianRinggit}>(Malaysian Ringgit)</div>
      <img className={styles.iconBarChart} alt="" src="/-icon-bar-chart.svg" />
      <img
        className={styles.iconBarChart1}
        alt=""
        src="/-icon-bar-chart1.svg"
      />
      <img
        className={styles.iconActionCancelCircleClo}
        alt=""
        src="/-icon-action-cancel-circle-close-delete-exit-remove-button-x-icon.svg"
        onClick={onIconActionCancelCircleCloClick}
      />
      <img
        className={styles.iconBarChart2}
        alt=""
        src="/-icon-bar-chart2.svg"
      />
    </div>
  );
};

export default Frame9;
