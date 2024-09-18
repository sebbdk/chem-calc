import { html } from "htm/preact";
import Latex from "react-latex-next";
import styled from "styled-components";
import 'katex/dist/katex.min.css';

const ChemTypePreview = styled.div`
    padding: 0.5rem;
    margin: 0 1rem;
    width: calc(15% - 2rem);
    text-align: center;
    background-color: rgba(255, 255, 255, 0.1);
    height: 2.5rem;
    box-sizing: border-box;
`;

const ChemPreviewRoot = styled.div`
    padding: 0.5rem;
    flex-grow: 1;
    width: calc(40% - 2rem);
    background-color: rgba(255, 255, 255, 0.1);
    height: 2.5rem;
    box-sizing: border-box;
`;

const ReactionPreviewRoot = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem 0;
`;


function ChemPreview(props) {
    const latex =  props.latex ? `$${props.latex}$` : "";

    const replacedLaTeX = (props.children || latex)
                            .replace("*", "\\cdot")

    return html`
        <${ChemPreviewRoot}>
            <${Latex}>
             ${replacedLaTeX}
            </${Latex}>
        </${ChemPreviewRoot}>
    `
}

export function ChemReactionPreview({leftLatex = "e^{x}", reactionType = String.fromCodePoint(8594), rightLatex = ""}) {
    return html`
        <${ReactionPreviewRoot}>
            <${ChemPreview} latex=${leftLatex} />
            <${ChemTypePreview}>
                ${reactionType}
            </${ChemTypePreview}>
            <${ChemPreview} latex=${rightLatex} />
        </${ReactionPreviewRoot}>
    `;
}