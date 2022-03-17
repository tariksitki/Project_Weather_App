
// sectıon container form

// getElementsByTagName(‘span’)[0]

// asynchronous Jaavascript and XML ajax

// https://openweathermap.org/current

// URLSearchParams  (parametreleri ayirir)





// const form = document.querySelector("section.top-banner form");
// const input = document.querySelector("div.container input");
// const msg = document.querySelector("span.msg");
// const cityList = document.querySelector(".ajax-section .cities");

// localStorage.setItem("apiKey", EncryptStringAES("4d8fb5b93d4af21d66a2948710284366"));

// form.addEventListener("submit", (event)=>{
//     event.preventDefault();
//     getWeatherDataFromApi();
// });

// const getWeatherDataFromApi = async() =>{
//     let apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
//     let inputVal = input.value;
//     let units = "metric";
//     let lang = "tr";
//     // alert("apiKey : " + apiKey);
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=${units}&lang=${lang}`;

//     try {
//         const response = await axios(url);
//         console.log(response);
//         const { main, name, sys, weather} = response.data;
        
//     } 
//     catch (error) {
//         msg.innerText = error;
//     }

// }





{/* <li class="city">
    <h2 class="city-name" data-name="Ankara, TR">
        <span>Ankara</span>
        <sup>TR</sup>
    </h2>
    <div class="city-temp">1<sup>°C</sup></div>
    <figure>
        <img class="city-icon" src="https://openweathermap.org/img/wn/03n@2x.png">
        <figcaption>scattered clouds</figcaption>
    </figure>
</li> */}