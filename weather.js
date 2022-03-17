
let input = document.querySelector(".container form input");
let form = document.querySelector(".container form");
let button = document.querySelector(".container button");
let cities = document.querySelector(".cities");
let apiKey = "4d8fb5b93d4af21d66a2948710284366";

    /// function:
let cityArray = [];

async function weather(cityName) {
   try {
        if (!input.value) {
            alert("Please Enter a City Name!")

        } else {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
            let response2 = await response.json();
            // console.log(response2);
            // localstorage:
            // localStorage.setItem(JSON.stringify());
            let {main : {humidity} } = response2;
            let {description} = response2.weather[0];
            localStorage.setItem("humidity", JSON.stringify(humidity));
            localStorage.setItem("description", JSON.stringify(description));

                // create card:
            let newCard = document.createElement("li");
            newCard.classList.add("city");
            let {name} = response2;
            let {sys : {country}} = response2;
            let {main : {temp} } = response2;
            let {icon} = response2.weather[0];
            const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
            // let {description} = response2.weather[0];
    
        
                //// filter:
                let {name : itemName} = response2;

                if (cityArray.length == 0) {
                    cityArray.push(itemName);
                
            // create new card:
            newCard.innerHTML = `
            <li class="city">
                <h2 class="city-name" data-name="${name}, ${country}">
                    <span>${name}</span>
                    <sup>${country}</sup>
                </h2>
                <div class="">${parseInt(temp)} <sup>°C</sup></div>
                <figure>
                    <img class="city-icon" src="${iconUrl}">
                    <figcaption>${description}</figcaption>
                </figure>
            </li>`;
                // prepend vs append:
            cities.prepend(newCard);

                } else {
                    let cityArray2 = cityArray.filter((city) => {
                        return city == itemName;
                    }) 
                    
                    if (cityArray2.length > 0) {
                        return;
                    } else {
                        newCard.innerHTML = `
                        <li class="city">
                            <h2 class="city-name" data-name="${name}, ${country}">
                                <span>${name}</span>
                                <sup>${country}</sup>
                            </h2>
                            <div class="">${parseInt(temp)} <sup>°C</sup></div>
                            <figure>
                                <img class="city-icon" src="${iconUrl}">
                                <figcaption>${description}</figcaption>
                            </figure>
                        </li>`;
                            // prepend vs append:
                        cities.prepend(newCard);
                        cityArray.push(itemName);
                    }
                } 
        }
        } catch (error) {
            throw new Error(error);
     }
    };

    // button add event:
    button.addEventListener("click", async (e) => {
        e.preventDefault();
        weather(input.value);
        input.value = "";
    });

        /// Önemli Not: Formlarin kendiliginden enter click özelligi vardir.
        // bu nedenle burada tekrar ekledigimizde iki kez kart ekler.
        ///  input enter:
    // input.addEventListener("keydown", (e) => {
    //     if (e.key == "Enter" || e.key == "NumpadEnter") {
    //         // button.click();
    //         console.log("hello");
    //         // input.value = "";
    //     } 
    // });

    // input.focus();
    // html de auto focus var gerek kalmadi
