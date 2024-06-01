import { Button as btn, styled } from "@mui/material";
import { blue } from "@mui/material/colors";


export const Button = styled(btn)(({ active }: { active?: boolean }) => ({
    textTransform: 'none',
    size: 'small',
    backgroundColor: active ? blue[50] : undefined
}));
