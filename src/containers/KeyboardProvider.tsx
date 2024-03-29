import { PropsWithChildren } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

export const KeyboardProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {

    const handleTouchablePress = () => {
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={handleTouchablePress}>
            <>
                {children}
            </>
        </TouchableWithoutFeedback>
    )

}