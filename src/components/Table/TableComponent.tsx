import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Box,
} from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./TableComponent.module.css";

const rows = [
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
const clearHardForecast = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];

const TableComponent = () => {
  const [dates, setDates] = useState<Array<string>>([]);
  const [countOfAllProducts, setCountOfAllProducts] = useState<number>(0);
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(true);
  const [checked, setChecked] = useState<boolean[]>(
    new Array(rows.length).fill(false)
  );

  const clearArray = new Array(15).fill({
    tk: "",
    group: "",
    category: "",
    subcat: " ",
    product: "  ",
    id: null,
  });

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
    return rows.length;
  };

  const handleChangeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(
      e.target.checked
        ? new Array(checked.length).fill(true)
        : new Array(checked.length).fill(false)
    );
  };

  function handleSmallCheckbox(
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    setChecked(
      checked.map((bool, i) => {
        return index === i ? e.target.checked : bool;
      })
    );
  }

  useEffect(() => {
    setDates(createArrayOfDates());
    setCountOfAllProducts(sumOfProduct());
  }, []);

  const deleteClick = () => {
    setChecked(new Array(checked.length).fill(false));
  };

  return (
    <>
      {/* <p className={styles.productSum}>Всего позиции: {countOfAllProducts}</p>
      <TableContainer component={Paper} sx={{ width: "1556px" }}>
        <Table size="small">
          <TableHead
            sx={{
              backgroundColor: "primary.light",
              borderBottom: "2px solid primary.main",
            }}
          >
            <TableRow>
              <TableCell padding="checkbox" sx={{ heigth: "36px" }}>
                <Checkbox
                  checked={checked.every((i) => i)}
                  onChange={handleChangeChecked}
                />
              </TableCell>
              <TableCell>TK</TableCell>
              <TableCell>Группа</TableCell>
              <TableCell>Категория</TableCell>
              <TableCell>Подкатегория</TableCell>
              <TableCell>Товар</TableCell>
              {dates.map((date) => (
                <TableCell>{date}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              "& .MuiBox-root": {
                width: "161px",
                display: "block",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                boxSizing: "border-box",
              },
              "& .MuiTableCell-root": {
                borderRight: "0.5px solid light-grey",
              },
            }}
          >
            {rows.map((row, i) => (
              <TableRow
                component="th"
                scope="row"
                key={row.id}
                sx={{
                  backgroundColor:
                    i % 2 === 0 ? "background.paper" : "background.default",
                }}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={checked[i]}
                    onChange={(e) => handleSmallCheckbox(e, i)}
                  />
                </TableCell>
                <TableCell>
                  <Box>{row.tk}</Box>
                </TableCell>
                <TableCell>
                  <Box>{row.group}</Box>
                </TableCell>
                <TableCell>
                  <Box>{row.category}</Box>
                </TableCell>
                <TableCell>
                  <Box>{row.subcat}</Box>
                </TableCell>
                <TableCell>
                  <Box>{row.product}</Box>
                </TableCell>
                {hardForecast.map((el) => (
                  <TableCell>{el}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {isAlertOpen && (
        <Alert
          isAlertMessage={false}
          extClassName={styles.footer}
          countOfCheckedElement={checked.filter((el) => el).length}
          deleteClick={deleteClick}
          sumChecked={checked.includes(true) ? true : false}
        />
      )} */}
      <p className={styles.productSum}>Всего позиции: {countOfAllProducts}</p>
      <TableContainer component={Paper} sx={{ width: "1556px" }}>
        <Table size="small">
          <TableHead
            sx={{
              backgroundColor: "primary.light",
              borderBottom: "2px solid primary.main",
            }}
          >
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={checked.every((i) => i)}
                  onChange={handleChangeChecked}
                />
              </TableCell>
              <TableCell>TK</TableCell>
              <TableCell>Группа</TableCell>
              <TableCell>Категория</TableCell>
              <TableCell>Подкатегория</TableCell>
              <TableCell>Товар</TableCell>
              {dates.map((date) => (
                <TableCell>{date}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              "& .MuiBox-root": {
                width: "161px",
                display: "block",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                boxSizing: "border-box",
              },
              "& .MuiTableCell-root": {
                borderRight: "0.5px solid light-grey",
                height: "36px",
              },
            }}
          >
            {clearArray.map((row, i) => (
              <TableRow
                component="th"
                scope="row"
                key={row.id}
                sx={{
                  backgroundColor:
                    i % 2 === 0 ? "background.paper" : "background.default",
                  heigth: "36px",
                }}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={checked[i]}
                    onChange={(e) => handleSmallCheckbox(e, i)}
                  />
                </TableCell>
                <TableCell>
                  <Box>{row.tk}</Box>
                </TableCell>
                <TableCell>
                  <Box>{row.group}</Box>
                </TableCell>
                <TableCell>
                  <Box>{row.category}</Box>
                </TableCell>
                <TableCell>
                  <Box>{row.subcat}</Box>
                </TableCell>
                <TableCell>
                  <Box>{row.product}</Box>
                </TableCell>
                {clearHardForecast.map((el) => (
                  <TableCell>{el}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {isAlertOpen && (
        <Alert
          isAlertMessage={false}
          extClassName={styles.footer}
          countOfCheckedElement={checked.filter((el) => el).length}
          deleteClick={deleteClick}
          sumChecked={checked.includes(true) ? true : false}
        />
      )}
    </>
  );
};

export default TableComponent;
