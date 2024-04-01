import React from "react";
import { Button as ButtonRegister } from "./styles";

function Button({children, ...props}) {

    return <ButtonRegister {...props}>{children}</ButtonRegister>
}
export default Button