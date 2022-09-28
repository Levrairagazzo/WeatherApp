document.getElementById('getWeather').addEventListener('click', fetchWeather);

// const async fetchLocationWeather = () => {
  
// }

function fetchWeather() {
  console.log("Hello world")
      fetch("https://api.openweathermap.org/data/2.5/weather?q=Pyongyang&APPID=6b55dc270d4a212bd0fb8253f1ce2d52", {mode: 'cors'})
        .then((res) => {
          // console.log(res.json());
          return res.json();
        }).then((data) => {
          console.log(data);
          document.getElementById('output').innerHTML += 
                    `<div> 
                    <p>Temperature in ${data.name}: ${data.weather[0].description}</p>
                    </div>`;
           document.getElementById('output').innerHTML += 
             JSON.stringify(data);
          

        })
    }
