import { Box, CircularProgress, Typography } from "@mui/material";

const Loader = ({ message, size, thickness }: IProps) => {
    return (
        <Box className="absolute bottom-0 left-0 right-0 top-0 z-40 flex flex-col items-center justify-center gap-8 bg-opacity-25 backdrop-blur-sm">
            <CircularProgress
                size={size ?? 70}
                thickness={thickness ?? 1}
                color="primary"
            />

            {message ? <Typography variant="h6">{message}</Typography> : null}
        </Box>
    );
};

export default Loader;

interface IProps {
    message?: string;
    size?: number;
    thickness?: number;
}
