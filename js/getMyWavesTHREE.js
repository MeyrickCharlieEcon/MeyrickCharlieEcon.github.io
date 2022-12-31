
// Functions for getting my data:


///////////////////////////////////////////////////////////////////////
///////////////////////////////JSON////////////////////////////////////

async function getMyWavesTHREE() {
  
    // Build the URL, by adding the CORE helper:

    var corsHelper = 'https://magicseaweed.com/Gwithian-Surf-Report/3/';
    var urlCORS = corsHelper + url;

    // See what we have:
    console.log(urlCORS);

    // Get the HTML:    

    $.get(urlCORS, function(html) {

        // See what we got (I turn this off when it is working)
        // console.log(html);

        // The code we use in Python and BS:
        // results = soup.find_all("span", class_="h3 font-sans-serif heavy nomargin text-white")

        // Target element:  <li class="rating-text text-dark">    2-3<small>ft</small>   </li>

        // Target element 2:
                  
        const waves = $(html).find(".rating-text.text-dark").text();
        const swellDetails = $(html).find(".list-group-item.list-group-item-block").text();

        const forecast = $(html).find(".h3.font-sans-serif.heavy.nomargin.text-white").text();
                
        console.log(waves);
        console.log(forecast);
        console.log(swellDetails)
       
        //Now turn the results into JSON:
        // outputJSON = JSON.stringify(output, null, 2); 
        // console.log(outputJSON)

        //Now display the JSON on the page:
        // document.body.innerHTML = dataJSON;

        var x1 = document.getElementById("waveLocation");
        var x2 = document.getElementById("waveHeight");
        var x3 = document.getElementById("swellDetails");
        
        x1.innerText = "Porthmoer: " + waves;
        // x2.innerText = waves;
        x3.innerText = swellDetails
       
    });

}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
