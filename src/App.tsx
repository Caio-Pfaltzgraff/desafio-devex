import axios from 'axios'
import { useEffect, useState } from 'react'
import './index.css'

function App() {
  const [regiao, setregiao] = useState('')
  const [icon, setIcon] = useState('')
  const [tempo, setTempo] = useState('')
  const [temperatura, setTemperatura] = useState('')
  const [velocidadeVento, setvelocidadeVento] = useState('')
  const [pressure, setPressure] = useState('')
  const [precip, setPrecip] = useState('')

  useEffect(() => {
    const url = '/api/current?access_key=fafef66faddae3acf9d3966ab7a62ce3&query=Nilopolis'
    axios.get(url).then(response => {
      console.log(response.data)
      setregiao(String(response.data.location.name)
        .concat(', ')
        .concat( response.data.location.region)
        .concat(', ')
        .concat( response.data.location.country)
      )
      setIcon(response.data.current.weather_icons[0])
      setTempo(response.data.current.weather_descriptions[0])
      setTemperatura(response.data.current.temperature)
      setvelocidadeVento(response.data.current.wind_speed)
      setPrecip(response.data.current.precip)
      setPressure(response.data.current.pressure)
    })
  }, [])

  return (
    <div className='mx-auto mt-44 max-w-screen-sm space-y-5 bg-[#0d3a4b] rounded-xl border-2 border-zinc-400 py-5 px-12'>
      <h2 className='text-center text-white'>{regiao}</h2>
      <div className='flex justify-between items-center gap-5'>
        <div className='flex flex-col justify-center items-center'>
          <img 
          src={icon}
          alt='nuvem' className='w-16 rounded-lg'/>
          <p className='text-white font-semibold text-center'>{tempo}</p>
        </div>
        <p className='text-white text-3xl'>{temperatura}ºc</p>
        <div className='text-gray-400'>
          <p>Wind: {velocidadeVento} kmph</p>
          <p>Precip: {precip}mm</p>
          <p>Pressure: {pressure}mb</p>
        </div>
      </div>
    </div>
  )
}

export default App
