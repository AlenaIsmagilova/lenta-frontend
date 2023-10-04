import styles from "./Alert.module.css";
import close from "../../app/images/close.svg";
import trash from "../../app/images/trash.svg";
import disk from "../../app/images/floppyDisk.svg";
import { useState } from "react";

export interface IAlertProps {
  extClassName: string;
  content?: string;
  icon?: string;
  alt?: string;
  isAlertMessage: boolean;
  clickCloseButton?: () => void;
}

const Alert = ({
  extClassName,
  content,
  icon,
  alt,
  isAlertMessage,
  clickCloseButton,
}: IAlertProps) => {
  function handleClickCloseBtn() {
    if (clickCloseButton) {
      clickCloseButton();
    }
  }
  return (
    <div className={extClassName}>
      <div className={styles.sumContainer}>
        {isAlertMessage ? (
          <img className={styles.icon} src={icon} alt={alt} />
        ) : (
          <>
            <input className={styles.sumCheckbox} type="checkbox" />
            <p className={styles.sumText}>Выбрано позиций:</p>
          </>
        )}
        <p className={styles.sumText}>{content}</p>
      </div>
      <div className={styles.buttonContainer}>
        {isAlertMessage ? (
          <div
            className={styles.closeIconWrapper}
            onClick={handleClickCloseBtn}
          >
            <img className={styles.closeIcon} src={close} alt="крестик" />
          </div>
        ) : (
          <>
            <button className={styles.deleteContainer}>
              <img className={styles.trashImage} src={trash} alt="корзина" />
            </button>
            <p className={styles.sumText}>Удалить</p>
            <button className={styles.deleteContainer}>
              <img className={styles.diskImage} src={disk} alt="диск" />
              <p className={styles.sumText}>
                Оставить только выбранные позиции
              </p>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Alert;
