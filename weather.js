let city_info=document.getElementById("city_info")
let get_weather=document.getElementById("get_weather")
let city_name=document.getElementById("city_name")
let temperature=document.getElementById("temperature")
let description=document.getElementById("description")

get_weather.addEventListener("click",()=>{
let city=city_info.value;
if(city){
    getWeatherReport(city)
}
else{
    alert("enter the city name")
}
    async function getWeatherReport(city){
        let apiKey="ad3aa18e9609dfd4d43b4234a4460a10";
        // let apiUrl=`https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}`
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
try{
        let data=await fetch(apiUrl)
        console.log(data);
        let finaldata=await data.json()
        console.log(finaldata);
        // console.log(`The weather of city ${finaldata.city.name},${finaldata.city.country}`);
        // console.log(`temperature is ${finaldata.list[0].main.temp}`);
        // console.log(`The description is ${finaldata.list[0].weather[0].description}`);
        city_name.innerHTML=`The Weather Of City ${finaldata.name},${finaldata.sys.country}`
        temperature.innerHTML=`The Temperature Is ${finaldata.main.temp}`
        description.innerHTML=`The Description Is ${finaldata.weather[0].description}`
    }

catch(error){
    console.log("error occurred",error);
}
}
})