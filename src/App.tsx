import axios from 'axios'
import { useEffect, useState } from 'react'
import './index.css'

function App() {
  const [regiao, setregiao] = useState('')
  const [icon, setIcon] = useState('')
  const [temperatura, setTemperatura] = useState('')
  const [velocidadeVento, setvelocidadeVento] = useState('')
  const [pressure, setPressure] = useState('')
  const [precip, setPrecip] = useState('')

  useEffect(() => {
    const url = '/api/current?access_key=fafef66faddae3acf9d3966ab7a62ce3&query=Nilopolis'
    axios.get(url).then(response => {
      console.log(response.data)
      setregiao(String(response.data.location.name)
        .concat(',')
        .concat( response.data.location.region)
        .concat(',')
        .concat( response.data.location.country)
      )
      setIcon(response.data.current.weather_icons[0])
      setTemperatura(response.data.current.temperature)
      setTemperatura(response.data.current.wind_speed)
      setPrecip(response.data.current.precip)
      setPressure(response.data.current.pressure)
    })
  }, [])

  return (
    <div className='max-w-screen-sm space-y-5 bg-blue-600 rounded-lg border-2 border-gray-400 p-4'>
      <h2 className='text-center text-white'>{regiao}</h2>
      <div className='flex justify-between items-center gap-5'>
        <div>
          <img 
          src={icon}
          alt='nuvem' className='w-16'/>
          <p className='text-white'>Overcast</p>
        </div>
        <p className='text-white text-2xl'>{temperatura}ºc</p>
        <div className='text-white'>
          <p>Wind: {velocidadeVento} kmph</p>
          <p>Precip: {precip}mm</p>
          <p>Pressure: {pressure}mb</p>
        </div>
      </div>
    </div>
  )
}

export default App
