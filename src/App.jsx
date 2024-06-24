import './App.css'
import Items from './components/Item'

export default function App() {

  return (
    <div >
      <Items Product='Macbook Pro' Price='1000' />
      <Items Product='OnePlus 9 Pro' Price='200' />
      <Items Product='Samsung S21 Ultra' Price='800' />
      <Items Product='Iphone 13' Price='450' />
    </div>
  )
}