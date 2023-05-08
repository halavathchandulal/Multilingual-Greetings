import {Component} from 'react'
import GreetingList from '../GreetingList'
import './index.css'

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

class Greetings extends Component {
  state = {
    activeId: languageGreetingsList[0].id,
  }

  getActiveObj = () => {
    const {activeId} = this.state

    const filteredId = languageGreetingsList.filter(
      eachItem => activeId === eachItem.id,
    )

    return filteredId
  }

  onChangeBtn = id => {
    this.setState({activeId: id})
  }

  render() {
    const {activeId} = this.state
    const getFilteredData = this.getActiveObj()
    const {imageUrl, imageAltText} = getFilteredData[0]

    return (
      <div className="bg-container">
        <h1 className="page-heading">Multilingual Greetings</h1>
        <ul className="list-items-container">
          {languageGreetingsList.map(eachItem => (
            <GreetingList
              key={eachItem.id}
              eachItem={eachItem}
              isActive={activeId === eachItem.id}
              onChangeBtn={this.onChangeBtn}
            />
          ))}
        </ul>
        <img alt={imageAltText} src={imageUrl} className="greeting-img" />
      </div>
    )
  }
}

export default Greetings
