import { useEffect, useMemo, useState } from 'react';
import { ASTNode, MarkdownIt, stringToTokens, tokensToAST } from 'react-native-markdown-display';
import { debounce } from 'lodash';

export const usePreprocessMarkdown = ({ markdownText }: { markdownText: string }) => {
    const [markdownHtml, setMarkdownHtml] = useState<ASTNode[]>();
    const markdownItInstance = useMemo(() => MarkdownIt({ typographer: true }), []);

    const calculateMarkdownHtml = async () => {
        const ast = tokensToAST(stringToTokens(markdownText, markdownItInstance));
        setMarkdownHtml(ast);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedCalculateMarkdownHtml = useMemo(() => debounce(calculateMarkdownHtml, 500), [markdownText, markdownItInstance]);

    useEffect(() => {
        debouncedCalculateMarkdownHtml();
        return () => {
            debouncedCalculateMarkdownHtml.cancel();
        };
    }, [markdownText, markdownItInstance, debouncedCalculateMarkdownHtml]);

    return { markdownHtml };
};
