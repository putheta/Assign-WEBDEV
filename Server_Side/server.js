const express = require("express")
const app = express()
const PORT = 8000

app.use(express.json())

const conver = response => response.json
//แปลงข้อมูลที่รับมาจาก http ให้เป็น json
const url = "https://script.googleusercontent.com/macros/echo?user_content_key=rNFw9TAGg3jKyWpkpjSThCIOezgdmWJDZEP9m7DHLlWi_onPKOvkGyJPeQ48fPBfB1kPq9x_M1NlqU4Ec1KRdasefZIL4GHXm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOQwROx_Wq-O5wsPy5w5JUsdPdcpj8TWgjjVAuN4sDTiMrnThHKU7n7LmNcslGllO5_ldGegmAJuXjfvqC1tFaecv-CYmXuM6Nz9Jw9Md8uu&lib=M9_yccKOaZVEQaYjEvK1gClQlFAuFWsxN"
const logs_url = "https://app-tracking.pockethost.io/api/collections/drone_logs/records"

app.get("/",(req,res)=>{
  res.send("Hello API World")
})

//รับ request ผ่าน body ใน bruno 
app.post("/logs" , async (req,res) => {
  console.log("posting log data")
  console.log(req.body) //print request ที่มาจาก body ตอน input ค่าใน bruno
  const rawData = await fetch(logs_url ,{ //await คือ รอให้ fetch(คือการส่ง http request) ให้เสร็จก่อน ค่อยทำบรรทัดถัดไป
    method : "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify(req.body) // body คือข้อมูลที่จะ post ส่่วนหลังคือแปลงข้อมูลจาก client ที่ตอนแรกเป็น object แปลงให้เป็น string , json เพื่อจะส่งผ่าน http ได้
  })
  res.send("OK")

})

app.get("/logs" , async (req,res) => {
  console.log("/logs");
  const rawData = await fetch(logs_url,{method:"GET"});
  const jsonData = await rawData.json();
  const logs = jsonData.items;
  console.log("test");
  res.send(logs);

})

app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`)
})