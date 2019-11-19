import { Override, Data } from "framer"

const appState = Data({
    emailError: "BLANK_INPUT", //no email error = false, function preperly, screaming snake case for the capitalized letter

    passwordError: "BLANK_INPUT",
})

export function EmailInput(): Override {
    return {
        onValueChange: value => {
            //pass in value to the console
            console.log(!value.includes("@"))
            // if (value.length === 0) {
            //     appState.emailError = true
            // } else {
            //     appState.emailError = false
            // }

            // appState.emailError =
            //     value.length === 0 ||
            //     !value.includes("@") ||
            //     !value.includes(".com")

            // if (value.length === 0) {
            //     appState.emailError = "BLANK_STATE"
            // }
            // else if (!value.includes("@") || !value.include(".com"))
            // {
            //     appState.emailError = "WORNG_ERROR"
            // }
            // else {
            //     appState.emailError = ""  // empty string is false
            // }

            appState.emailError =
                value.length === 0
                    ? "BLANK_INPUT"
                    : !value.includes("@") || !value.includes(".com") // is value.length === ), ? = then, : = or
                    ? "WRONG_FORMAT"
                    : "" // turnary operator
        },
    }
}

export function EmailError(): Override {
    const errorMessage = {
        BLANK_INPUT: "Enter your email address",
        WRONG_FORMAT: "Enter a valid email",
    }
    return {
        visible: appState.emailError != "",
        text: errorMessage[appState.emailError], // dot function = get or pull
    }
}

export function PasswordInput(): Override {
    return {
        onValueChange: value => {
            //pass in value to the console
            console.log(!value.includes("@"))
            // if (value.length === 0) {
            //     appState.emailError = true
            // } else {
            //     appState.emailError = false
            // }

            appState.passwordError =
                value.length === 0
                    ? "BLANK_INPUT"
                    : value.length < 5 // is value.length === ), ? = then, : = or
                    ? "WRONG_FORMAT"
                    : ""
        },
    }
}

export function PasswordError(): Override {
    const errorMessages = {
        BLANK_INPUT: "Enter a valid password",
        WRONG_FORMAT: "Your password is too short",
    }
    return {
        visible: appState.passwordError != "",
        text: errorMessages[appState.passwordError],
    }
}

export function ContinueButton(): Override {
    return {
        disabled: appState.emailError || appState.passwordError, //function disabled if appState has email or password erroriginal effect of ContinueButton
    }
}
