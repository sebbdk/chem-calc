import { html } from "htm/preact";
import styled from "styled-components";
import Markdown from 'react-markdown'

import readmeMdText from '/readme.md'

const ReadMeRoot = styled.div`
    border: 2px solid #999;
    margin:  2rem auto;
    padding: 1rem;
    max-width: 900px;
`;

export function ReadMe() {
    return html`
        <${ReadMeRoot}>
            <${Markdown}>${readmeMdText}</${Markdown}>
        </${ReadMeRoot}>
    `;
}