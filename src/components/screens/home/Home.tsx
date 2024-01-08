import CreateCarForm from './create-car-form/CreateCarForm'
import { CarService } from '../../../services/car.service'
import VideoPlayer from './Player.jsx'
import { useQuery }  from '@tanstack/react-query'
import Header from '../../ui/Header'
import Catalog from '../../ui/Catalog'

function Home() {
  const {data, isLoading} = useQuery({
    queryKey: ['cars'],
    queryFn: () => CarService.getAll(),
  }
    
  )


if(isLoading)  return <p>Loading...</p>

    return (
      <div>
        <h1> Cars catalog </h1>
        <Header />
        <VideoPlayer />
        <CreateCarForm />
        <Catalog data={data}/>
      </div>   
    )
  }
  
export default Home
