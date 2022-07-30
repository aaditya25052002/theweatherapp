const submitbutton = document.getElementById('submitbutton');
const cityname = document.getElementById('cityname');
const cityName = document.getElementById('cityName');
const temp = document.getElementById('temp1');
const tempstatus = document.getElementById('tempstatus');
const day = document.getElementById('day');
const date = document.getElementById('date');
const datahide = document.querySelector('.middlelayer');

const d = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
day.innerText = days[d.getDay()];
date.innerText = `${d.getDate()},${months[d.getMonth()]}`;



const getInfo  = async(event)=>{
    event.preventDefault();
    let cityval = cityname.value;

    if(cityval == ""){
        cityName.innerText= 'please write the name before you search';
        datahide.classList.add('datahide');


    }
    else{
    try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=d1eb38b6d41e73938c4a364f708b0943`
        const response = await fetch(url);
        const data = await response.json();
        const arrdata = [data];
        // console.log(data);
        cityName.innerText =` ${arrdata[0].name},${arrdata[0].sys.country}`;
        temp.innerText = arrdata[0].main.temp;
        const tempmood = arrdata[0].weather[0].main;
        // const tempmood = "Clear";
       
        //temperature mood
        if(tempmood == "Clear"){
            tempstatus.innerHTML = "<i class='fa fa-sun' style='color:#eccc68'></i>";
        }
        else if(tempmood == "Clouds"){
            tempstatus.innerHTML = "<i class='fa fa-cloud' ></i>";
        }
        else if(tempmood == "Rain"){
            tempstatus.innerHTML = "<i class='fa fa-cloud-showers-water' style='color:#a0b4be'></i>";
        }
        else {
            tempstatus.innerHTML = "<i class='fa fa-rainbow' style='color:#f1f2f6'></i>";
        }
        datahide.classList.remove('datahide');

    } 
    catch{
        cityName.innerText= 'please enter the city name properly';
        datahide.classList.add('datahide');
    }

    }
    

}
submitbutton.addEventListener('click',getInfo);
{/* <i class='fa-regular fa-cloud' style='color:#f1f2f6'></i> */}