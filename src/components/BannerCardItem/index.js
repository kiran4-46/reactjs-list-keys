// Write your code here.
import './index.css'

const heading = 'heading'
const descript = 'descript'
const btn = 'btn'
const Card = props => {
  const {details} = props
  const {headerText, description, className} = details
  return (
    <li className="list">
      <div>
        <h1 className={heading}>{headerText}</h1>
        <p className={descript}>{description}</p>
        <button className={btn} type="button">
          ShowMore
        </button>
      </div>
    </li>
  )
}

export default Card
