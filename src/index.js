import { render } from 'preact/compat';
import { html } from 'htm/preact';
import { Page } from '/src/components/page';

render(html`<${Page} />`, document.getElementById('app'));