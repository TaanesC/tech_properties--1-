import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./Frame15.module.css";

const Frame15 = () => {
  const navigate = useNavigate();

  const onRectangle7Click = useCallback(() => {
    navigate("/3");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <b className={styles.pm}>9:41 PM</b>
      <img
        className={styles.batteryThreeQuartersIcon}
        alt=""
        src="/batterythreequarters.svg"
      />
      <img className={styles.wifiIcon} alt="" src="/wifi.svg" />
      <img className={styles.signalIcon} alt="" src="/signal.svg" />
      <div className={styles.child} />
      <div className={styles.hello}>hello</div>
      <div className={styles.letsClarifyYour}>
        Let’s clarify your preferences
      </div>
      <div className={styles.whereAreYou}>
        Where are you going to search properties ?
      </div>
      <img className={styles.item} alt="" src="/rectangle-2.svg" />
      <Button className={styles.johor} variant="primary">
        Johor
      </Button>
      <img className={styles.inner} alt="" src="/rectangle-3.svg" />
      <Button className={styles.penang} variant="primary">
        Penang
      </Button>
      <img className={styles.rectangleIcon} alt="" src="/rectangle-3.svg" />
      <Button className={styles.kedah} variant="primary">
        Kedah
      </Button>
      <div className={styles.whatLanguageDo}>What language do you prefer ?</div>
      <img className={styles.child1} alt="" src="/rectangle-5.svg" />
      <Button className={styles.english} variant="primary">
        English
      </Button>
      <img className={styles.child2} alt="" src="/rectangle-3.svg" />
      <img className={styles.child3} alt="" src="/rectangle-3.svg" />
      <Button className={styles.malay} variant="primary">
        Malay
      </Button>
      <Button className={styles.chinese} variant="primary">
        Chinese
      </Button>
      <div className={styles.rectangleDiv} onClick={onRectangle7Click} />
      <b className={styles.continue}>Continue</b>
    </div>
  );
};

export default Frame15;
