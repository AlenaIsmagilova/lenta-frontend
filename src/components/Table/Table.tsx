import { useEffect, useState } from "react";
import moment from "moment";
import classNames from "classnames";
import styles from "./Table.module.css";
import Alert from "../Alert/Alert";
import disk from "../../app/images/floppyDisk.svg";

const hardData = [
  {
    tk: "Лента Химкиттттттттттттттттттттттттттттттттттттттттттттттттттт",
    group: "Кулинария",
    category: "Закуски и салаты",
    subcat: "Порционные салаты",
    product: "Лента фреш с лососем",
    id: 4,
  },
  {
    tk: "Лента Химки",
    group: "Кулинария",
    category: "Закуски и салаты",
    subcat: "Порционные салаты",
    product: "Лента фреш с лососем",
    id: 4,
  },
  {
    tk: "Лента Химки",
    group: "Кулинария",
    category: "Закуски и салаты",
    subcat: "Порционные салаты",
    product: "Лента фреш с лососем",
    id: 4,
  },
  {
    tk: "Лента Химки",
    group: "Кулинария",
    category: "Закуски и салаты",
    subcat: "Порционные салаты",
    product: "Лента фреш с лососем",
    id: 4,
  },
  {
    tk: "Лента Химки",
    group: "Кулинария",
    category: "Закуски и салаты",
    subcat: "Порционные салаты",
    product: "Лента фреш с лососем",
    id: 4,
  },
  {
    tk: "Лента Химки",
    group: "Кулинария",
    category: "Закуски и салаты",
    subcat: "Порционные салаты",
    product: "Лента фреш с лососем",
    id: 4,
  },
];

const hardForecast = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

const BasicTable = () => {
  const [dates, setDates] = useState<Array<string>>([]);
  const [allProducts, setAllProducts] = useState<number>(0);
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(true);

  const createArrayOfDates = () => {
    let prev = moment();
    let arrOfDates = [];

    for (let i = 1; i <= 14; i++) {
      arrOfDates.push(prev.format("DD.MM"));
      prev = prev.add(1, "days");
    }

    return arrOfDates;
  };

  const sumOfProduct = () => {
    return hardData.length;
  };

  useEffect(() => {
    setDates(createArrayOfDates());
    setAllProducts(sumOfProduct());
  }, []);

  return (
    <div className={styles.mainContainer}>
      <p className={styles.productSum}>Всего {allProducts} позиции</p>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <table className={styles.table}>
            <thead className={styles.head}>
              <tr>
                <th
                  className={classNames(
                    styles.col1,
                    styles.head,
                    styles.border
                  )}
                >
                  <input className={styles.input} type="checkbox" />
                </th>
                {/* //* массив должен прийти с бэка */}
                {["TK", "Группа", "Категория", "Подкатегория", "Товар"].map(
                  (item, index) => {
                    const colClassName = `col${index + 2}`;
                    return (
                      <th
                        className={classNames(
                          styles[colClassName],
                          styles.head,
                          styles.border
                        )}
                        key={index}
                      >
                        {item}
                      </th>
                    );
                  }
                )}
                {dates.map((data, index) => (
                  <td
                    key={index}
                    className={classNames(styles.border, styles.columnDate)}
                  >
                    {data}
                  </td>
                ))}
                <td className={classNames(styles.border, styles.columnDate)}>
                  Всего
                </td>
              </tr>
            </thead>
            <tbody>
              {hardData.map((el, index) => (
                <tr key={index}>
                  <td className={styles.col1}>
                    <input className={styles.input} type="checkbox" />
                  </td>
                  <td className={styles.col2}>{el.tk}</td>
                  <td className={styles.col3}>{el.group}</td>
                  <td className={styles.col4}>{el.category}</td>
                  <td className={styles.col5}>{el.subcat}</td>
                  <td className={styles.col6}>{el.product}</td>
                  {hardForecast.map((el, i) => (
                    <td className={styles.columnDate} key={i}>
                      {el}
                    </td>
                  ))}
                  <td className={styles.columnDate}>22</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isAlertOpen && (
        <Alert isAlertMessage={false} extClassName={styles.footer} />
      )}
    </div>
  );
};

export default BasicTable;
