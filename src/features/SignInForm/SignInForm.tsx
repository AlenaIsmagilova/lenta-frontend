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
    OutlinedInput,
    TextField,
    Typography,
} from "@mui/material";
import React, {useState} from "react";
import {Visibility, VisibilityOff} from "@mui/icons-material";

const SignInForm = () => {
    const [signIn /*{data, isLoading, isError}*/] = useSignInMutation();
    const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.nativeEvent.target;
        await signIn({username: "test", password: "pwd"});
    };
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    return (
        <Box component="section" width={616} display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography
                component="h1"
                variant="h4"
                textAlign={"center"}
                color={"primary"}
                fontWeight={"bold"}
                lineHeight={"130%"}
                letterSpacing={"0.34px"}
            >
                Авторизуйтесь для входа <br/> в Лента.Спрос
            </Typography>
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                width={460}
                marginTop={5}
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
                    py={10}
                    onSubmit={handleSubmit}
                >
                    <TextField
                        required
                        fullWidth
                        id="username"
                        label="Логин"
                        name="username"
                        autoComplete="off"
                        autoFocus
                        InputProps={{
                            sx: {
                                borderRadius: 2,
                            },
                        }}
                    />

                    <FormControl sx={{mt: 6}} fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">
                            Пароль
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            required
                            type={showPassword ? "text" : "password"}
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
                                borderRadius: 2,
                            }}
                        />
                    </FormControl>

                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        size={"large"}
                        sx={{mt: 8, mb: 5, width: 160, height: 46, borderRadius: 2}}
                    >
                        Войти
                    </Button>

                    <Link
                        href="#"
                        variant="body2"
                        sx={{width: "100%"}}
                        textAlign={"center"}
                    >
                        Забыли пароль?
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default SignInForm;
