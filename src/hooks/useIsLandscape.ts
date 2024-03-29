import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

export const useIsLandscape = () => {

    const [isLandscape, setIsLandscape] = useState<boolean>(
        Dimensions.get('window').width > Dimensions.get('window').height
    );

    useEffect(() => {
        const updateOrientation = () => {
            const { width, height } = Dimensions.get('window');
            setIsLandscape(width > height);
        };

        const isLandscapeListener = Dimensions.addEventListener('change', updateOrientation);

        return () => {
            isLandscapeListener.remove()
        };
    }, []);

    return { isLandscape };
}