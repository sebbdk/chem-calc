import { html } from "htm/preact";
import { useState } from "react";
import styled from "styled-components";

const ChemTypeSelector = styled.select`
    padding: 0.5rem;
    margin: 0 1rem;
    width: calc(15% - 2rem);
    text-align: center;
    height: 2.5rem;
    box-sizing: border-box;
`;

const ChemInput = styled.input`
    padding: 0.5rem;
    flex-grow: 1;
    width: calc(40% - 2rem);
    height: 2.5rem;
    box-sizing: border-box;
`;

const ReactionInputRoot = styled.div`
    display: flex;
    justify-content: center;
`;

export function ChemReactionInput({
        onChange = (newState) => {},
        leftLatex = "e^{x}",
        reactionType = String.fromCodePoint(8594),
        rightLatex = ""
    }) {

    const [state, setState] = useState({ leftLatex, reactionType, rightLatex });

    function onLeftInputChange(evt) {
        const newState = {
            ...state,
            leftLatex: evt.target.value
        }

        onChange(newState);
        setState(newState);
    }

    function onRightInputChange(evt) {
        const newState = {
            ...state,
            rightLatex: evt.target.value
        }

        onChange(newState);
        setState(newState);
    }

    function onReactionTypeChange(evt) {
        const newState = {
            ...state,
            reactionType: evt.target.value
        }

        onChange(newState);
        setState(newState);
    }

    return html`
        <${ReactionInputRoot}>
            <${ChemInput} value=${state.leftLatex} onChange=${onLeftInputChange} />
            <${ChemTypeSelector} value=${state.reactionType} onChange=${onReactionTypeChange}>
                <option value=${String.fromCodePoint(8594)}>${String.fromCodePoint(8594)}</option>
                <option value=${String.fromCodePoint(8596)}>${String.fromCodePoint(8596)}</option>
            </${ChemTypeSelector}>
            <${ChemInput} value=${state.rightLatex} onChange=${onRightInputChange}  />
        </${ReactionInputRoot}>
    `;
}
