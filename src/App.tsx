import { useFetch } from './hooks/userFecth';

interface IProps{
  full_name: string;
  description: string;
}


function App() { 
  const {data: Repositoreis, isFetching} = useFetch<IProps[]>('https://api.github.com/users/JoaoVitorLiberato/repos')
  return (
   <>
      <ul>
        {isFetching && <p>Caregando...</p>}
        {Repositoreis?.map( repos => {
          return(
            <li key ={repos.full_name}>
               <strong>{repos.full_name}</strong>
               <p>{repos.description}</p> 
            </li>
          )
        })}
      </ul>
   </>
  )
}

export default App
