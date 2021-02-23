"use strict";

class AppDropDown extends HTMLElement {
    shadowRoot;

    constructor() {
        super();
        this.shadowRoot = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        const template = document.createElement("template");
        template.innerHTML = this.render();
        this.shadowRoot.innerHTML = "";
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.handleDropDownEvents();
    }

    get styles() {
        return `<link rel="stylesheet" href="/components/dropdown/dropdown.css"/>`;
    }

    render() {
        return `
            ${this.styles}
            
            <div class="dropdown-container">
                <button class="dropdown-toggle">Toggle</button>
                <ul class="dropdown-menu hidden">
                   <li>Item 1</li>
                   <li>Item 2</li>
                   <li>Item 3</li>
                   <li>Item 4</li>
                   <li>Item 5</li> 
                </ul>
            </div>
        `;
    }

    handleDropDownEvents() {
        this.shadowRoot.querySelector(".dropdown-toggle").addEventListener("click", () => {
            const dropdown = this.shadowRoot.querySelector(".dropdown-container .dropdown-menu");
            dropdown.classList.toggle("hidden");
        });
    }
}

customElements.define('app-dropdown', AppDropDown);

