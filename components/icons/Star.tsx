import React from "react";
import Image from "next/image";

const Star = () => {
    return (
        <Image
            src="/icons/orange-star.png"
            alt="Orange flame"
            width={60}
            height={60}
            style={{
                position: "absolute",
                top: "30px",
                left: "-16%",
            }}
        />
    );
};

export default Star;
