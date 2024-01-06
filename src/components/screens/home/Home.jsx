
import { useContext } from 'react'
import CarItem from './car-item/CarItem.jsx'
import CreateCarForm from './create-car-form/CreateCarForm.jsx'
import { CarService } from '../../../services/car.service.js'
import VideoPlayer from './Player.jsx'
import { AuthContext } from '../../../providers/AuthProvider.jsx'
import { useQuery }  from '@tanstack/react-query'

function Home() {
  const {data, isLoading} = useQuery({
    queryKey: ['cars'],
    queryFn: () => CarService.getAll(),
  }
    
  )
const {user, setUser} = useContext(AuthContext)

if(isLoading)  return <p>Loading...</p>

    return (
      <div>
        <h1> Cars catalog </h1>

        { user ? ( <>
        <h2> Welcome, {user.name}! </h2> 
            <button onClick={() => setUser(null)}>Logout</button>
          </>
           ) : (<button onClick={() => setUser({name: 'Max', })}>Login</button> )}

        <VideoPlayer />

        <CreateCarForm />
          <div>
            {data.length ? ( 
              data.map(car => 
            <CarItem key={car.id} car={car}/>
            ))
             : ( 
            <p>There are no cars</p>
            )}
          </div>
      </div>   
    )
  }
  
export default Home
