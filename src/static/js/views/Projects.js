import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Projects");
    }

    async getHTML() {
        return `
            <div>
                <h2>
                    Under construction...
                </h2>

                <p> (Prepare for my like one working project!) </p>
            </div>
        `;
    }
}