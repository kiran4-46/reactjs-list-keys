import './App.css'

import Card from './components/BannerCardItem/index'

import './components/BannerCardItem/index.css'

const bannerCardsList = [
  {
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of your hand',
    className: 'card-1',
  },
  {
    id: 2,
    headerText: 'Our New Designs',
    description:
      'Get the designs developed by our in-house team all for yourself',
    className: 'card-2',
  },
  {
    id: 3,
    headerText: 'Insiders',
    description: 'Get the top class products for yourself with an extra off',
    className: 'card-3',
  },
]

const App = () => (
  <div>
    <ul className="cards-container">
      {bannerCardsList.map(eachItem => (
        <Card
          key={eachItem.id}
          details={eachItem}
          className={eachItem.className}
        />
      ))}
    </ul>
  </div>
)
export default App
