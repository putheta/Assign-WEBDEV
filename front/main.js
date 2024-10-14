// const node_drone_id = document.getElementById("drone_id")
// const config = {
//     "drone_id": 3001,
//     "drone_name": "Dot Dot",
//     "condition": "good",
//     "light": "on",
//     "max_speed": null,
//     "country": "India",
//     "population": 1450935791
// }
// const url ="http://localhost:8000/configs";

// async function getConfig() {
//     const rawData = fetch(url);
//     const jsonData = await rawData.json();
//     return config;
// }
// async function main() {
//     document.getElementById("drone_id").innerHTML = `Drone id : ${config.drone_id}`
//     document.getElementById("drone_name").innerHTML = `Drone Name : ${config.drone_name}`
//     document.getElementById("condition").innerHTML = `Condition : ${config.condition}`
//     document.getElementById("light").innerHTML = `Light: ${config.light}`
//     document.getElementById("max_speed").innerHTML = `Maximum Speed  : ${config.max_speed}`
//     document.getElementById("country").innerHTML = `Country : ${config.country}`
//     document.getElementById("population").innerHTML = `Population : ${config.population}`

// }

// main();

const conf_display = document.getElementById("config_display")
const submit_button = document.getElementById("submit_button")

conf_display.innerHTML = "<h2> Today is MONDAY</h2>"
// conf_display.style.color = "pink"
// conf_display.style.backgroundColor = "black"
// conf_display.style.textAlign = "center"

submit_button.addEventListener("click" , (e) => {
    e.preventDefault();
    conf_display.innerHTML = `<h2> ${document.getElementById("test").value} </h2>` 
    // conf_display.innerHTML = `<h2> Monday ${12} </h2>`
})

// submit_button.onclick = () => {
//     console.log("Submit_button Clicked")
// }

console.log("main.js called");
