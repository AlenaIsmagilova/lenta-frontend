import Chart from "../../components/Chart/Chart";
import Layout from "../../components/Layout/Layout";
import ComparisonTemplateRow from "../../components/ComparisonTemplateRow/ComparisonTemplateRow";
import {useAppSelector} from "../../hooks/redux";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Comparison = () => {
    const {isLoggedIn} = useAppSelector((state) => state.authReducer);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/signin");
        }
    }, [isLoggedIn]);

    return (
        <Layout>
            <ComparisonTemplateRow/>
            <Chart/>
        </Layout>
    );
};

export default Comparison;
