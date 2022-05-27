/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


  // between zero and the last index in the `quotes` array

  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable

  // 3. Return the variable storing the random quote object

  
/**
 * Created a nested array with quotes, sources, citation, year
 */

  const quotes = [ 
    {
      quote: "Do or do not. There is not try",
     source: "Yoda",
     citation: "Star Wars"
    },
    {
      quote: "Coincidence is God's way of remaining anonymous",
     source: "Unknown"
    },
    {
      quote: "The way to succeed is to double your failure rate.",
     source: "Thomas Watson"
    },
    {
      quote: "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me",
     source: "Michael Scott",
     year: "Release Date 2005"
    },
    {
      quote: "Don't ask if you can do something but how you can do something",
     source: "Adele Goldberg"
    }
    ];
    console.log(quotes);
   
   
   
   /***
    * `getRandomQuote` function
    * Created a function that created a random number which returned a quote from an index in the array above 
   ***/
   
   function getRandomQuote(){
     const randomNumber = Math.floor(Math.random() * quotes.length);
     return quotes[randomNumber];
   };
   
 
   /***
    * `printQuote` function
    * Created a function that called the function above (getRandomQuote) and concatenated the properties in the array 
    * <p> tags were used to display the specific quote and source in the html file
    * if statements were used to display if citation or year were found in array to display in html file
   ***/
 
   function printQuote(){
     const randomQuote = getRandomQuote();
      console.log(randomQuote);
//Console.log to make sure function is working 
    let html = 
    `<p class="quote"> ${randomQuote.quote} </p>
     <p class="source"> ${randomQuote.source}`

 
    if ("citation" in randomQuote){
      html += `<span class= "citation"> ${randomQuote.citation} </span>`;
    }
    if ("year" in randomQuote){
      html += `<span class= "year"> ${randomQuote.year}</span>`;
     }
   
    html += "</p>"
    document.getElementById('quote-box').innerHTML = html;
    console.log(html)
   };
   
   // /***
   //  * click event listener for the print quote button
   //  * DO NOT CHANGE THE CODE BELOW!!
   // ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);