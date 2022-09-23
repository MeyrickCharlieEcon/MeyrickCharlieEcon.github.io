
// Functions for getting my data:


///////////////////////////////////////////////////////////////////////
///////////////////////////////JSON////////////////////////////////////

async function getMyPortfolio() {
  
    // Build the URL, by adding the CORE helper:

    var corsHelper = 'https://api.allorigins.win/raw?url=';
    var url1 = 'https://www.google.com/finance/quote/AAPL:NASDAQ';
    var url2 = 'https://www.google.com/finance/quote/META:NASDAQ';

    var urlCORS1 = corsHelper + url1;
    var urlCORS2 = corsHelper + url2;

    // See what we have:
    console.log(urlCORS1);
    console.log(urlCORS2);

    // Get the HTML:    

    $.get(urlCORS1, function(html1) {
        // console.log(html);

        //Stuff we need to match:
            // <div role="heading" aria-level="1" class="zzDege">Apple Inc</div>
            // <div class="YMlKec fxKbKc">GBX&nbsp;44.91</div>

        var tickerName1 = $(html1).find(".zzDege").text();
        var tickerPrice1 = $(html1).find(".YMlKec.fxKbKc").text();

        console.log(tickerName1);
        // Apple Inc
        console.log(tickerPrice1);
        // GBX 45.44

        tickerName1 = tickerName1.replace("Inc", "");
        tickerPrice1 = tickerPrice1.replace("", "");

        console.log(tickerName1);
        // Apple Inc
        console.log(tickerPrice1);
        // VALUE

        var tickerResult1 = tickerName1 + ": " + tickerPrice1
        console.log(tickerResult1)
       
        //Now turn the results into JSON:
        // outputJSON = JSON.stringify(output, null, 2); 
        // console.log(outputJSON)

        //Now display the JSON on the page:
        // document.body.innerHTML = dataJSON;
        var x1 = document.getElementById("tickerResult1")
        
        x1.innerText = tickerResult1
       
    });

    $.get(urlCORS2, function(html2) {
        // console.log(html);

        //Stuff we need to match:
            // <div role="heading" aria-level="1" class="zzDege">Meta Platforms Inc</div>
            // <div class="YMlKec fxKbKc">GBX&nbsp;44.91</div>

        var tickerName2 = $(html2).find(".zzDege").text();
        var tickerPrice2 = $(html2).find(".YMlKec.fxKbKc").text();

        console.log(tickerName2);
        // Meta Platforms Inc
        console.log(tickerPrice2);

        tickerName2 = tickerName2.replace("Meta Platforms Inc", "Facebook (Meta)");

        var tickerResult2 = tickerName2 + ": " + tickerPrice2
        console.log(tickerResult2)
       
        //Now turn the results into JSON:
        // outputJSON = JSON.stringify(output, null, 2); 
        // console.log(outputJSON)

        //Now display the JSON on the page:
        // document.body.innerHTML = dataJSON;
        var x1 = document.getElementById("tickerResult2");
        
        x1.innerText = tickerResult2;
       
    });

}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////


    
                 
