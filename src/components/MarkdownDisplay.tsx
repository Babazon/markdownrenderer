import { ScrollView, View, StyleSheet } from "react-native"
import Markdown from 'react-native-markdown-display';

import { usePreprocessMarkdown } from "../hooks/usePreprocessMarkdown";

interface MarkdownDisplayProps {
    markdownText: string
}

export const MarkdownDisplay: React.FC<MarkdownDisplayProps> = ({ markdownText }) => {

    const { markdownHtml } = usePreprocessMarkdown({ markdownText });

    return (
        <View style={styles.markdownDisplayContainer}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {/* @ts-ignore */}
                <Markdown>{markdownHtml}</Markdown>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    markdownDisplayContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
    },
    contentContainer: {
        padding: 8
    },
})
