import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario'
import Time from './components/Time';

function App() {

  const times = [
    {
      nome:'Data Science',
      primaryColor: '#A6D157',
      secondColor: '#F0F8E2'
    },
    {
      nome:'Devops',
      primaryColor: '#E06869',
      secondColor: '#FDE7E8'
    },
    {
      nome:'Front-End',
      primaryColor: '#82CFFA',
      secondColor: '#E8F8FF'
    },
    {
      nome:'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondColor: '#FFEEDF'
    },
    {
      nome:'Mobile',
      primaryColor: '#FFBA05',
      secondColor: '#FFF5D9'
    },
    {
      nome:'Programação',
      primaryColor: '#57C278',
      secondColor: '#D9F7E9'
    },
    {
      nome:'UX e Design',
      primaryColor: '#DB6EBF',
      secondColor: '#FAE9F5'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])
  
  const newColaborador = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} addColaborador={colaborador => newColaborador(colaborador)}/>

      {times.map(time => <Time key={time.nome} nome={time.nome} primaryColor={time.primaryColor} secondColor={time.secondColor} colaboradores={colaboradores.filter(colaborador => colaborador.time == time.nome)}/>)}

    </div>
  );
}

export default App;