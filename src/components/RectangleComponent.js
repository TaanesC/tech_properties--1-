import styles from "./RectangleComponent.module.css";

const RectangleComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.componentChild} />
      <img className={styles.vectorIcon} alt="" src="/vector15.svg" />
      <div className={styles.location}>Location</div>
      <div className={styles.penang}>Penang</div>
    </div>
  );
};

export default RectangleComponent;
