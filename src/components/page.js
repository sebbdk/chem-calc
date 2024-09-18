import { html } from "htm/preact";
import styled from "styled-components";
import { ChemReactionInput } from "./chem_reaction_input";
import { ChemReactionPreview } from "./chem_reaction_preview";
import { useState } from "react";
import { ReadMe } from "./readme";

const PageLayout = styled.div`
    border: 2px solid #999;
    margin:  4rem auto;
    padding: 1rem;
    padding-bottom: 0;
    max-width: 900px;
`;

export function Page() {
    const [state, setState] = useState({
        leftLatex: "5 * HCl(g) + 9000H_2O(l)",
        reactionType: String.fromCodePoint(8594),
        rightLatex: "OH^- + Cl^- + H_20\\ or\\ something"
    });

    function onReactionChange(newState) {
        setState(newState)
    }

    return html`
        <${PageLayout}>
            <h1>Chemistry Chaos</h1>

            <${ChemReactionInput}
                onChange=${onReactionChange}
                ...${state}
            />

            <${ChemReactionPreview}
                leftLatex=${state.leftLatex}
                reactionType=${state.reactionType}
                rightLatex=${state.rightLatex}
            />
        </${PageLayout}>

        <${ReadMe} />
    `;
}