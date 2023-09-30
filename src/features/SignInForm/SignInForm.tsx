import {useSignInMutation} from "../../services/SignInService";
// import {ISignInRequest} from "../../models/ISignInRequest";
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
import React, {useState} from "react";
import {Visibility, VisibilityOff} from "@mui/icons-material";

const SignInForm = () => {
    const [signIn, /*{data, isLoading, isError}*/] = useSignInMutation();
    const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.nativeEvent.target
        await signIn({username: 'test', password: 'pwd'});
    }
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Box component="section">
            <Typography component="h1" variant="h4">
                Авторизуйтесь для входа в Лента.Спрос
            </Typography>
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                width={"460px"}
                marginTop={8}
                borderRadius={4}
                sx={{
                    boxShadow: "0px 8px 32px 0px rgba(0, 0, 0, 0.08);"
                }}
            >
                <Box
                    component="form"
                    noValidate
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    width={"380px"}
                    padding={"40px"}
                    onSubmit={handleSubmit}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Логин"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        InputProps={{
                            sx: {
                                borderRadius: 2
                            }
                        }}
                    />

                    <FormControl sx={{mt: 2}} fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            required
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
                            label="Пароль"
                            sx={{
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