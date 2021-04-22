import { useState, useEffect } from 'react'

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => { // cleanup on unmount
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>{windowWidth}</div>
  );
}

export default App;
