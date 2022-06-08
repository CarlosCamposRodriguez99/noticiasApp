import { useState, useEffect, createContext }from 'react';

const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {

  const [categoria, setCategoria] = useState('general');

  const handleChangeCategoria = e => {
    setCategoria(e.target.value)
  }

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}=business&apiKey=`;

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