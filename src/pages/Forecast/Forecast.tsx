import Layout from "../../components/Layout/Layout";
import ForecastTemplateRow from "../../components/ForecastTemplateRow/ForecastTemplateRow";
import ControlRow from "../../components/ControlRow/ControlRow";
import TableComponent from "../../components/Table/TableComponent";
import {useAppSelector} from "../../hooks/redux";
import {useEffect, useMemo} from "react";
import {useNavigate} from "react-router-dom";

const Forecast = () => {
    const reduxFilter = useAppSelector((state) => state.filterFormReducer);
    const navigate = useNavigate();
    const staticColumnNames = [
        "TK",
        "Группа",
        "Категория",
        "Подкатегория",
        "Товар",
    ];

    const {isLoggedIn} = useAppSelector((state) => state.authReducer);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/signin");
        }
    }, [isLoggedIn]);

    const columns = useMemo(() => {
        const dateColumns = new Array(reduxFilter.forecastDays)
            .fill("")
            .map((_v, i) => {
                const date = new Date();
                date.setDate(date.getDate() + i + 1);
                return `${date.getDate()}.${date.getMonth() + 1}`;
            });

        return staticColumnNames.concat(dateColumns);
    }, [reduxFilter]);

    const rows = useMemo(
        () => new Array(15).fill("").map(() => new Array(columns.length).fill("")),
        [columns]
    );

    return (
        <Layout>
            <ForecastTemplateRow/>
            <ControlRow/>
            <TableComponent
                tableColumns={columns}
                tableRows={[]}
                staticColumnsNumber={staticColumnNames.length}
            />
        </Layout>
    );
};

export default Forecast;
