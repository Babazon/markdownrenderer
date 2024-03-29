import { KeyboardAvoidingView, View, StyleSheet } from "react-native"

import { MarkdownDisplay } from "../components/MarkdownDisplay"
import { MarkdownInput } from "../components/MarkdownInput"
import { useIsLandscape } from "../hooks/useIsLandscape";
import { useMarkdownText } from "../hooks/useMarkdownText";

export const MarkdownView = () => {
    const { isLandscape } = useIsLandscape();
    const { markdownText, handleMarkdownTextChange } = useMarkdownText();

    return (
        <KeyboardAvoidingView style={styles.container} behavior={isLandscape ? 'padding' : undefined}>
            {!isLandscape ? (
                <View style={styles.columnContainer}>
                    <View style={styles.flexContainer}>
                        <MarkdownInput
                            handleMarkdownTextChange={handleMarkdownTextChange}
                            markdownText={markdownText}
                            style={styles.markdownInput}
                        />
                    </View>
                    <View style={styles.flexContainer}>
                        {markdownText && <MarkdownDisplay markdownText={markdownText} />}
                    </View>
                </View>
            ) : (
                <View style={styles.rowContainer}>
                    <View style={styles.markdownInputContainer}>
                        <MarkdownInput
                            markdownText={markdownText}
                            handleMarkdownTextChange={handleMarkdownTextChange}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.markdownDisplay}>
                        {markdownText && <MarkdownDisplay markdownText={markdownText} />}
                    </View>
                </View>
            )}
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    flexContainer: {
        flex: 1
    },
    markdownInputContainer: {
        flex: 1,
        marginRight: 20,
    },
    textInput: {
        height: '100%',
        borderColor: 'gray',
        borderWidth: 1,
    },
    rowContainer: {
        flexGrow: 1,
        flexDirection: 'row',
    },
    columnContainer: {
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    markdownInput: {
        flex: 1,
        marginBottom: 20
    },
    markdownDisplay: {
        flex: 1,
    },
});
