"use strict";

const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        const id = e.target.id;
        const dropdownContent = document.querySelector('.dropdown');
        const chartContent = document.querySelector('.chart');

        if (id === "dropdown") {
            dropdownContent.classList.remove("hidden");
            chartContent.classList.add("hidden");
        }

        if (id === "chart") {
            chartContent.classList.remove("hidden");
            dropdownContent.classList.add("hidden");
        }
    });
})


const options = {
    valueNames: ["name", "city"],
    item: '<li><h3 class="name"></h3><p class="city"></p></li>'
};

const values = [];

for (let i = 0; i < 10; i++) {
    values.push({name: faker.name.firstName(), city: faker.address.city()});
}

const userList = new List('user-list', options, values);


async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return await response.json();
}

const button = document.querySelector(".fetch-data button").addEventListener("click", async () => {
    try {
        const data = await postData("http://localhost:3000/api/list/receive", {});
        console.log(data);
    } catch (err) {
        console.log(err);
    }
})