import './index.css'

const GreetingList = props => {
  const {eachItem, isActive, onChangeBtn} = props
  const {id, buttonText} = eachItem
  const activeClass = isActive ? 'active-btn' : ''
  const changeBtn = () => {
    onChangeBtn(id)
  }
  return (
    <li className="list-item">
      <button
        type="button"
        className={`list-item-btn ${activeClass}`}
        onClick={changeBtn}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default GreetingList
