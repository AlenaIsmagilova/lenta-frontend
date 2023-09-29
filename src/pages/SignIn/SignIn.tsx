import SignInForm from "../../features/SignInForm/SignInForm";
import {Box, Container} from "@mui/material";
import {Logo} from "../../ui/logo/logo";
import patternImage from "../../app/images/pattern.svg";

const SignIn = () => {
    return (
        <Box component="main" bgcolor={"primary.main"} width={"100%"}>
            <Box
                height={'100vh'}
                display={"flex"}
            >
                <Box width={"743px"}
                     alignItems={"center"}
                     display={"flex"}
                     flexDirection={"column"}
                >
                    <Box display={"flex"} alignSelf={"flex-start"}><Logo/></Box>
                    <SignInForm/>
                </Box>
                <Box
                    width={"calc(100% - 743px)"}
                    sx={{
                        backgroundImage: `url(${patternImage})`,
                        backgroundRepeat: 'repeat'
                    }}
                >
                </Box>

            </Box>
        </Box>
    )

};

export default SignIn;
