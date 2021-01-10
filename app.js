var trackBtn = document.querySelector('#trackBtn');

var textInput = document.querySelector('#textInput');


async function trackCases()
{
    const jsonData = await fetch('https://api.covid19api.com/summary');
  
    const jsData = await jsonData.json();
    // console.log(jsData.Countries);
    actualInput = jsData.Countries;
    actualInput.map((Country)=>{
        // console.log(Country);
        var res = Country;
        // console.log(res.CountryCode)
       
        if(textInput.value.toLowerCase()===res.Country.toLowerCase())
        {
            var searchCountry = res.Country;
            console.log(searchCountry);
            console.log(res.CountryCode);
            console.log(res.NewConfirmed);
            document.getElementById("incorrect").style.display="none";
            document.getElementById("country").innerHTML = res.Country;
            document.getElementById("active").innerHTML = res.NewConfirmed;
            document.getElementById("cases").innerHTML = res.TotalConfirmed;
            document.getElementById("critical").innerHTML =res.NewDeaths;
            document.getElementById("death").innerHTML = res.TotalDeaths;
            document.getElementById("recovered").innerHTML = res.NewRecovered;
            document.getElementById("tests").innerHTML = res.TotalRecovered;

        }
        else 
        {
            document.getElementById("incorrect").innerHTML="Sorry. Enter correct name!"
           

        }
       
    })

    
   
  
}



trackBtn.addEventListener('click', trackCases);
