import {useSignInMutation} from "../../services/SignInService";
import {ISignIn} from "../../models/ISignIn";

const SignInForm = () => {
    const [signIn, {data, isLoading, isError, isSuccess}] = useSignInMutation();
    const handleSubmit = async () => {
        await signIn({username: 'test', password: 'pwd'} as ISignIn);
    }
    return (
        <div>
            <h1>{isError && 'Ошибка'}</h1>
            <h1>{isLoading && 'Загрузка'}</h1>
            <h1>{isSuccess && 'Успех'}</h1>
            <h2>{data && data.token}</h2>
            <button onClick={handleSubmit}>Sign In</button>
        </div>
    );
};

export default SignInForm;