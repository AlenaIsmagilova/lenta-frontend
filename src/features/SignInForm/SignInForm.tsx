import {useSignInMutation} from "../../services/SignInService";
import {ISignIn} from "../../models/ISignIn";
import {
    Box,
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    Link,
    OutlinedInput, TextField, Typography
} from "@mui/material";
import {useState} from "react";
import {Visibility, VisibilityOff} from "@mui/icons-material";

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
        <Box component="section">
            <Typography component="h1" variant="h4" color={"primary.contrastText"}>
                Авторизуйтесь, пожалуйста
            </Typography>
            <Box
                bgcolor={"background.paper"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                width={"460px"}
                marginTop={8}
                borderRadius={4}
            >
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    width={"380px"}
                    padding={"40px"}
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
                        InputProps={{
                            sx: {
                                backgroundColor: "background.default",
                                borderRadius: 2
                            }
                        }}
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
                            sx={{
                                backgroundColor: "background.default",
                                borderRadius: 2
                            }}
                        />
                    </FormControl>


                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        size={"large"}
                        sx={{mt: 3, mb: 2, width: 160, borderRadius: 2}}
                    >
                        Войти
                    </Button>

                    <Link href="#" variant="body2" sx={{width: '100%'}} textAlign={'center'}>
                        Забыли пароль?
                    </Link>
                </Box>


            </Box>
        </Box>
    );

};

export default SignInForm;