// Write your code here.
import './index.css'

const heading = 'heading'
const descript = 'descript'
const btn = 'btn'
const Card = props => {
  const {details} = props
  const {headerText, description, className} = details
  return (
    <li className={`${className} list`}>
      <div>
        <h1 className={heading}>{headerText}</h1>
        <p className={descript}>{description}</p>
        <button className={btn} type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default Card
