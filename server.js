const express = require("express");
const app = express();
const PORT = 8000;

const customers = [
  { id: 1234, name: "Steven Adams", birthdate: "1980-01-02" },
  { id: 5678, name: "James Lukather", birthdate: "1980-01-02" },
];

// make Express.js able to parse json body
app.use(express.json());

const convert = response => response.json()
const url = "https://script.google.com/macros/s/AKfycbzwclqJRodyVjzYyY-NTQDb9cWG6Hoc5vGAABVtr5-jPA_ET_2IasrAJK4aeo5XoONiaA/exec"

//get / config/5
app.get("/config/:id", async (req,res)=>{
  const id = req.params.id
  const rawData = await fetch (url,{method: 'GET'});
  const jsonData = await rawData.json();
  
  const drones = jsonData.data;
  const myDrone = drones.find(item => item.drone_id == id)
  console.log(myDrone)

  const max = (myDrone.max_speed = null) ? 100: myDrone.max_speed = 100 ;
  console.log(max);

  myDrone.max_speed = !myDrone.max_speed ? 100 : myDrone.max_speed;
  myDrone.max_speed = myDrone.max_speed > 110 ? 110 : myDrone.max_speed;


  if (myDrone.max_speed == null) 
  {
    myDrone.max_speed = 100 ;
  }


  if (myDrone.max_speed > 110) {
    myDrone.max_speed = 110 ;
  }

  res.send(myDrone);
  
  
  // fetch(url , {method:"GET"})
  // .then(response=>response.json())
  // .then(data=>console.log(data));
  //.then(data=>console.log(data))
} ) //(patht,function(request,respond))

app.get("/", (req, res) => {
  res.send("Hello API World!");
});

app.get("/customers", (req, res) => {

  // response with all customer data
  res.send(customers);
})

// http://localhost:8000/customers/1234
app.get("/customers/:id", (req, res) => {
  // get target id from request params
  const id = req.params.id;

  // find customer by id
  const myCustomer = customers.find(item => item.id == id);

  if (!myCustomer) { // if customer not found

    //response with error message
    res.status(404).send({ status: "error", message: "Customer not found" });

  } else {

    // response with customer data
    res.send(myCustomer);
  }

})

app.delete("/customers/:id", (req, res) => {
  // get target id from request params
  const id = req.params.id;

  // find index of the element that has the target id
  const index = customers.findIndex(item => item.id == id);
  // remove the element from the array
  customers.splice(index, 1);

  // response with successful message
  res.send({ status: "success", message: "Customer deleted" });
})

app.post("/customers", (req, res) => {

  // get new customer from request body
  const newCustomer = req.body;

  // insert new customer record
  customers.push(newCustomer);

  // response with successful message
  res.send({ status: "success", message: "Customer created" });
})

// running server on specified PORT
app.listen(PORT, () => {
  // inform admin that server is running
  console.log(`Server running on port ${PORT}`);
});
