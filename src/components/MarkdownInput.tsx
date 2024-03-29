import { Keyboard, StyleSheet, TextInput, TextStyle } from "react-native"

interface MarkdownInputProps {
    markdownText: string
    handleMarkdownTextChange: (text: string) => void
    style?: TextStyle
}

export const MarkdownInput: React.FC<MarkdownInputProps> = ({ markdownText, handleMarkdownTextChange, style }) => {

    const handleSubmit = () => {
        Keyboard.dismiss();
    };

    return (
        <TextInput
            autoCorrect={false}
            style={[styles.input, style]}
            multiline={true}
            onChangeText={text => handleMarkdownTextChange(text)}
            value={markdownText}
            textAlignVertical="top" // android fix
            onSubmitEditing={handleSubmit}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        height: 200,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 16,
        backgroundColor: 'white',
        fontSize: 16
    }
});
