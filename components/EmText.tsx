import React from "react";
import { Box } from "@chakra-ui/react";

interface EmTextProps {
    text: string;
}

const EmText: React.FC<EmTextProps> = ({ text }) => {
    return (
        <Box
            as="em"
            bg="linear-gradient(88deg, #7557ff 0,#fe97dc 100%)"
            fontWeight={700}
            fontStyle={"normal"}
            bgClip={"text"}
        >
            {text}
        </Box>
    );
};

export default EmText;
