import '../../colors/colors.js';
import { css, html, LitElement } from 'lit-element/lit-element.js';
import { ButtonMixin } from '../../button/button-mixin.js';
import { buttonStyles } from '../../button/button-styles.js';
import { labelStyles } from '../../typography/styles.js';

class Button extends ButtonMixin(LitElement) {

	static get properties() {
		return {
			description: { type: String },
			tooltip: {type: String}
		};
	}

	static get styles() {
		return [ labelStyles, buttonStyles,
			css`
				:host {
					display: inline-block;
				}
				:host([hidden]) {
					display: none;
				}

				button {
					font-family: inherit;
					padding: 0.55rem 1.5rem;
					width: 100%;
				}

				/* Firefox includes a hidden border which messes up button dimensions */
				button::-moz-focus-inner {
					border: 0;
				}

				button,
				button[disabled]:hover,
				button[disabled]:focus,
				:host([active]) button[disabled] {
					background-color: var(--d2l-color-gypsum);
					color: var(--d2l-color-ferrite);
				}

				button:hover,
				button:focus,
				:host([active]) button {
					background-color: var(--d2l-color-mica);
				}

				button[disabled] {
					opacity: 0.5;
					cursor: default;
				}
				:host([primary]) button,
				:host([primary]) button[disabled]:hover,
				:host([primary]) button[disabled]:focus,
				:host([primary][active]) button[disabled] {
					background-color: var(--d2l-color-celestine);
					color: #ffffff;
				}
				:host([primary]) button:hover,
				:host([primary]) button:focus,
				:host([primary][active]) button{
					background-color: var(--d2l-color-celestine-minus-1);
				}
			`
		];
	}

	render() {
		return html`
			<button
			id="target"
				type="${this._getType()}">
				<slot></slot>
			</button>
			<d2l-tooltip for="target">${this.tooltip}</d2l-tooltip>
		`;
	}
}
customElements.define('custom-button', Button);
