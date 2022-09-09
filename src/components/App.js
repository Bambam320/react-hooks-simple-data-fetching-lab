import React, {useState, useEffect} from "react"

function App () {
  const [image, setImage] = useState('')  
  const [imgReady, setImgReady] = useState(false)

  useEffect(() => {
      fetch('https://dog.ceo/api/breeds/image/random')
      .then(r => r.json())
      .then(data => {
        setImage(data.message)
        setImgReady(true)
      })
    }, [])

  
  return (
    <div>
      {!imgReady ? <p>...Loading</p> : <img src={image} alt="A Random Dog" ></img>}
    </div>
  )
}

export default App;