"use strict";

class AppChart extends HTMLElement {
    shadowRoot;
    dataset = [
        {date: "01/01/2016", pizzas: 10000},
        {date: "01/02/2016", pizzas: 20000},
        {date: "01/03/2016", pizzas: 40000},
        {date: "01/04/2016", pizzas: 30000},
        {date: "01/05/2016", pizzas: 30000},
        {date: "01/06/2016", pizzas: 50000},
        {date: "01/07/2016", pizzas: 30000},
        {date: "01/08/2016", pizzas: 50000},
        {date: "01/09/2016", pizzas: 60000},
        {date: "01/10/2016", pizzas: 20000},
        {date: "01/11/2016", pizzas: 10000},
        {date: "01/12/2016", pizzas: 90000},
    ];
    margin = {top: 40, right: 40, bottom: 40, left: 60};
    width = 700 - this.margin.left - this.margin.right;
    height = 400 - this.margin.top - this.margin.bottom;
    parseTime = d3.timeParse("%d/%m/%Y");
    formatTime = d3.timeFormat("%a/%b/%Y");

    constructor() {
        super();
        this.shadowRoot = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        const template = document.createElement("template");
        template.innerHTML = this.render();
        this.shadowRoot.innerHTML = "";
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.initChart();
    }

    initChart() {
        const x = d3.scaleTime()
            .range([0, this.width]);

        const y = d3.scaleLinear()
            .range([this.height, 0]);

        const line = d3.line()
            .x((d) => {
                return x(this.parseTime(d.date));
            })
            .y((d) => {
                return y(d.pizzas / 1000);
            })


        const container = this.shadowRoot.querySelector("#chart-container")
        const svg = d3.select(container).append("svg")
            .style("background-color", '#fff')
            .attr("width", this.width + this.margin.left + this.margin.right)
            .attr("height", this.height + this.margin.top + this.margin.bottom)
            .append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

        x.domain(d3.extent(this.dataset, (d) => {
            return this.parseTime(d.date);
        }));
        y.domain(d3.extent(this.dataset, (d) => {
            return d.pizzas / 1000;
        }));

        svg.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + this.height + ")")
            .call(d3.axisBottom(x));

        svg.append("g")
            .attr("class", "axis axis--y")
            .call(d3.axisLeft(y));

        svg.append("text")
            .attr("text-anchor", "middle")
            .style("font-size", "14px")
            .attr("transform", "translate(" + (this.margin.left - 94) + "," + (this.height / 2) + ")rotate(-90)")

        svg.append("text")
            .style("font-size", "14px")
            .attr("text-anchor", "middle")
            .attr("transform", "translate(" + (this.width / 2) + "," + (this.height - (this.margin.bottom - 74)) + ")")

        svg.append("text")
            .attr("x", (this.width / 2))
            .attr("y", 20 - (this.margin.top / 2))
            .attr("text-anchor", "middle")
            .style("font-size", "16px")

        svg.append("path")
            .datum(this.dataset)
            .attr("class", "line")
            .attr("d", line);
    }

    get styles() {
        return `<link rel="stylesheet" href="/components/chart/chart.css"/>`;
    }

    render() {
        return `
            ${this.styles}
            <div id="chart-container"></div>
        `;
    }
}

customElements.define('app-chart', AppChart);

