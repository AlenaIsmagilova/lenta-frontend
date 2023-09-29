import {useSignInMutation} from "../../services/SignInService";
import {ISignIn} from "../../models/ISignIn";
import {
    Avatar,
    Box,
    Button, Checkbox,
    Container, CssBaseline,
    FormControl, FormControlLabel,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    Link,
    OutlinedInput, TextField, Typography
} from "@mui/material";
import {useState} from "react";
import {Visibility, VisibilityOff} from "@mui/icons-material";

function LockOutlinedIcon() {
    return null;
}

const SignInForm = () => {
    const [signIn, {data, isLoading, isError, isSuccess}] = useSignInMutation();
    const handleSubmit = async () => {
        await signIn({username: 'test', password: 'pwd'} as ISignIn);
    }
    const [showPassword, setShowPassword] = useState(false);


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Container
            component="main"
            maxWidth="xs"
        >
            <Typography component="h1" variant="h5">
                Авторизуйтесь, пожалуйста
            </Typography>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: 4,
                    backgroundColor: 'primary.dark',
                    width: '460px'
                }}
            >
                <Box component="form" onSubmit={handleSubmit} noValidate
                     sx={{
                         display: 'flex',
                         flexDirection: 'column',
                         alignItems: 'center',
                         width: '380px',
                         padding: '40px'
                     }}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />

                    <FormControl sx={{mt: 2}} fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>


                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        size={"large"}
                        sx={{mt: 3, mb: 2, width: 160}}
                    >
                        Войти
                    </Button>

                    <Link href="#" variant="body2" sx={{width: '100%'}} textAlign={'center'}>
                        Забыли пароль?
                    </Link>
                </Box>


            </Box>
        </Container>
    );

};

export default SignInForm;