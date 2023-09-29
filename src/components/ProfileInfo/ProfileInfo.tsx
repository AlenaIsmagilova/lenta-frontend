import calendar from "../../app/images/calendar.svg";
import store from "../../app/images/store.svg";
import user from "../../app/images/user.svg";
import arrowDown from "../../app/images/down.svg";
import phone from "../../app/images/phone.svg";
import settings from "../../app/images/settings.svg";
import logout from "../../app/images/logout.svg";

import styles from "./ProfileInfo.module.css";
import { useState } from "react";

const ProfileInfo = () => {
  const [isDropDownMenuOpened, setIsDropDownMenuOpened] = useState(false);

  const onClick = () => {
    setIsDropDownMenuOpened(!isDropDownMenuOpened);
  };

  return (
    <div className={styles.container}>
      <div className={styles.infoWrapper}>
        <img className={styles.image} src={calendar} alt="календарь" />
        <p className={styles.text}>Дата</p>
      </div>
      <div className={styles.infoWrapper}>
        <img className={styles.image} src={store} alt="магазин" />
        <p className={styles.text}>ID сотрудника</p>
      </div>
      <div className={styles.infoWrapper}>
        <img className={styles.image} src={user} alt="личный кабинет" />
        <p className={styles.text}>ФИО</p>
        <button className={styles.button} type="button" onClick={onClick}>
          <img
            className={isDropDownMenuOpened ? styles.turnedImage : styles.image}
            src={arrowDown}
            alt="стрелка вниз"
          />
        </button>
      </div>
      {isDropDownMenuOpened && (
        <div className={styles.dropDownMenuContainer}>
          <div className={styles.dropDownMenuInfoWrapper}>
            <img
              className={styles.dropDownMenuImage}
              src={phone}
              alt="телефон"
            />
            <p className={styles.text}>Помощь</p>
          </div>
          <div className={styles.dropDownMenuInfoWrapper}>
            <img
              className={styles.dropDownMenuImage}
              src={settings}
              alt="настройки"
            />
            <p className={styles.text}>Настройки</p>
          </div>
          <div className={styles.dropDownMenuInfoWrapper}>
            <img
              className={styles.dropDownMenuImage}
              src={logout}
              alt="выход"
            />
            <p className={styles.text}>Выход</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;
