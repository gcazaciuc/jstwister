import * as React from "react";

interface WelcomeTemplateProps {
    name: string;
}

export const WelcomeTemplate: React.FC<Readonly<WelcomeTemplateProps>> = ({
    name,
}) => (
    <div>
        <h1>Thank you for contacting us, {name}! We will get back to you as soon as possible.</h1>
    </div>
);
