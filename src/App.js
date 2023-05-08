import {Component} from 'react'
import ButtonItem from './components/ButtonItem'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {presentActiveTabDetails: languageGreetingsList[0]}

  updatePresentTabDetails = index => {
    this.setState({presentActiveTabDetails: languageGreetingsList[index]})
  }

  render() {
    const {presentActiveTabDetails} = this.state
    const {id, imageUrl, imageAltText} = presentActiveTabDetails
    return (
      <div className="main-page-container">
        <div className="content-container">
          <h1 className="heading">Multilingual Greetings</h1>
          <ul className="buttons-list-container">
            {languageGreetingsList.map(eachItem => (
              <ButtonItem
                updatePresentTabDetails={this.updatePresentTabDetails}
                buttonDetails={eachItem}
                activeButton={eachItem.id === id}
                key={eachItem.id}
              />
            ))}
          </ul>
          <div className="image-container">
            <img
              alt={imageAltText}
              src={imageUrl}
              className="language-context-image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
