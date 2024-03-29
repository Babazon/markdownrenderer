import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { debounce } from 'lodash';

export const useMarkdownText = () => {
    const [markdownText, setMarkdownText] = useState<string>('');

    useEffect(() => {
        const loadMarkdownText = async () => {
            try {
                const storedMarkdownText = await AsyncStorage.getItem('markdownText');
                if (storedMarkdownText !== null) {
                    setMarkdownText(storedMarkdownText);
                }
            } catch (error) {
                console.error('Error loading markdown text:', error);
            }
        };

        loadMarkdownText();
    }, []);


    const debouncedHandleMarkdownTextChange = debounce(async (text: string) => {
        try {
            await AsyncStorage.setItem('markdownText', text);
        } catch (error) {
            console.error('Error saving markdown text:', error);
        }
    }, 500);

    const handleMarkdownTextChange = (text: string) => {
        setMarkdownText(text);
        debouncedHandleMarkdownTextChange(text);
    };

    return { markdownText, handleMarkdownTextChange };
}