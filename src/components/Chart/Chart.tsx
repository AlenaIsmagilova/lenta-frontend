import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { IForecastOfProducts } from "../../models/IProductsResponse";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    tooltip: {
      displayColors: true,
      boxWidth: 8,
      boxHeight: 8,
      boxPadding: 6,
      backgroundColor: "rgba(255, 255, 255, 1)",
      titleColor: "#2C2A29",
      bodyColor: "#2C2A29",
      cornerRadius: 0,
      callbacks: {
        title: (data: IForecastOfProducts[]) => {
          return `Кач-во прогноза ${data}`;
        },
        labels: (data: IForecastOfProducts[]) => {
          return `Факт. продажи ${data}`;
        },
      },
    },
    legend: {
      display: false,
    },
    title: {
      display: true,
      align: "start",
      text: "Лента фреш с курицей",
      fullSize: false,
    },
  },
};

const labels = [
  "ТК Пражская",
  "Мини Лента",
  "Макси Лента",
  "Гипер",
  "Коломяжский",
  "Завидово",
  "Кудрово",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [2, 5, 70, 34, 23, 56, 7],
      backgroundColor: "rgba(255, 185, 0, 1)",
    },
    {
      label: "Dataset 2",
      data: [2, 5, 70, 34, 23, 56, 7],
      backgroundColor: "rgba(0, 60, 150, 1)",
    },
  ],
};

const Chart = () => {
  return (
    <div style={{ width: "764px", height: "308px" }}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default Chart;
