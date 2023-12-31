import { projectFirestore } from '../../firebase/config'
import { useEffect, useState } from 'react'

// styles
import './Home.css'

// components
import RecipeList from '../../components/RecipeList'


export default function Home() {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)

    projectFirestore.collection('recipes').get().then((snapshot) => {
      if (snapshot.empty) {
        setError('No recipes to load')
        setIsPending(false)
      } else {
        let result = []
        snapshot.docs.forEach(doc => {
          result.push({ id: doc.id, ...doc.data() })
        })
        setData(result)
        setIsPending(false)
      }
    })

  })

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipes={data}/>}
    </div>
  )
}
