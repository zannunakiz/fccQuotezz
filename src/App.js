import React from "react";
import { FaTwitter } from "react-icons/fa";
import { GoAlert } from "react-icons/go";
import QuoteData from "./quote";




export default function App(){

  const [quote, newQuote] = React.useState(QuoteData[0])
  const [theme, newTheme] = React.useState([59, 64, 218])

  function handleQuote(){
    let random = Math.floor(Math.random() * QuoteData.length)
    let quotez = QuoteData[random]
    newQuote(quotez)

    let red = Math.floor(Math.random() * 160) + 30
    let green = Math.floor(Math.random() * 160) + 30
    let blue = Math.floor(Math.random() * 160) + 30
    newTheme([red,green,blue])
  }

  let colorTheme = {
    color: `rgb(${theme[0]}, ${theme[1]}, ${theme[2]})`
  }
  let backgroundTheme = {
    backgroundColor: `rgb(${theme[0]}, ${theme[1]}, ${theme[2]})`
  }

  return(
    <div className="main" style={backgroundTheme}>

      <div className="quote-box" id="quote-box">

          <h2 id="text" style={colorTheme}><span>" </span>{quote.quote}</h2>

          <div className="author"><p id="author">- {quote.author}</p></div>

          <div className="button-container">
        
            <div className="tweet-container">

            <div className="tweet-box" style={backgroundTheme}><a id="tweeet-quote" className="tweets" href="twitter.com/intent/tweet" target="_blank">
            <FaTwitter /></a>
            </div>

            <div className="tweet-box" style={backgroundTheme}>
            <a id="t-quote" className="tweets" href="google.com" target="_blank">
              <GoAlert /></a>
            </div>
            
            </div>

            <button style={backgroundTheme} onClick={handleQuote} id="new-quote">New quote</button>
          </div>

      </div>

    </div>
  )
}