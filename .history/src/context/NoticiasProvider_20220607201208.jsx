import { useState, useEffect, createContext }from 'react';

const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {

  const [categoria, setCategoria] = useState('general');

  const handleChangeCategoria = e => {
    setCategoria(e.target.value)
  }

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ce516f9380fe4aa987ad67e6679a244f`;

    }
    consultarAPI();

  }, [categoria])

  
  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        handleChangeCategoria

      }}
    >
        {children}
    
    </NoticiasContext.Provider>
  )
}

export {
  NoticiasProvider
}

export default NoticiasContext;