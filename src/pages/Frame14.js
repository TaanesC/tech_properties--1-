import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame14.module.css";

const Frame14 = () => {
  const navigate = useNavigate();

  const onRectangle6Click = useCallback(() => {
    navigate("/4");
  }, [navigate]);

  const onRectangle8Click = useCallback(() => {
    navigate("/7");
  }, [navigate]);

  const onVectorIcon2Click = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <div className={styles.child} />
      <img className={styles.item} alt="" src="/rectangle-13.svg" />
      <img className={styles.inner} alt="" src="/rectangle-13.svg" />
      <img className={styles.lineIcon} alt="" src="/line-2.svg" />
      <div className={styles.t}>T</div>
      <div className={styles.p}>P</div>
      <img
        className={styles.batteryThreeQuartersIcon}
        alt=""
        src="/batterythreequarters.svg"
      />
      <img className={styles.wifiIcon} alt="" src="/wifi.svg" />
      <img className={styles.signalIcon} alt="" src="/signal.svg" />
      <b className={styles.pm}>9:41 PM</b>
      <div className={styles.rectangleDiv} />
      <div className={styles.child1} />
      <div className={styles.signInOr}>Sign in or Register an account</div>
      <div className={styles.withARegisteredContainer}>
        <p className={styles.withARegistered}>
          With a registered account you can save your
        </p>
        <p
          className={styles.withARegistered}
        >{`properties and searches, and receive alerts   `}</p>
      </div>
      <div className={styles.child2} />
      <input className={styles.email} placeholder="Email" type="email" />
      <div className={styles.child3} onClick={onRectangle6Click} />
      <button className={styles.continueWithEmail}>Continue with email</button>
      <div className={styles.bySigningUpContainer}>
        <p
          className={styles.bySigningUp}
        >{`By signing up you agree to our `}</p>
        <p className={styles.termsOfUseAndPrivacyPolic}>
          <span className={styles.termsOfUse}>terms of use</span>
          <span className={styles.and}>
            <span className={styles.and1}> and</span>
          </span>
          <span className={styles.privacyPolicy}>
            <span className={styles.and}>{` `}</span>
            <span>privacy policy</span>
            <span className={styles.and}>{` `}</span>
          </span>
          <span className={styles.and}>
            <span className={styles.and1}>{`  `}</span>
          </span>
        </p>
      </div>
      <div className={styles.orSignWith}>or sign with</div>
      <div className={styles.lineDiv} />
      <img className={styles.vectorIcon} alt="" src="/vector19.svg" />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-13.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector20.svg" />
      <img
        className={styles.child4}
        alt=""
        src="/rectangle-15.svg"
        onClick={onRectangle8Click}
      />
      <button className={styles.continueAsA}>Continue as a guest</button>
      <div className={styles.facebook} />
      <div className={styles.facebook} />
      <div className={styles.facebook} />
      <img
        className={styles.vectorIcon2}
        alt=""
        src="/vector16.svg"
        onClick={onVectorIcon2Click}
      />
      <img className={styles.vectorIcon3} alt="" src="/vector21.svg" />
    </div>
  );
};

export default Frame14;
