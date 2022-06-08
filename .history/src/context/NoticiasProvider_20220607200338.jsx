import { useState, useEffect, createContext }from 'react';

const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {

  const [categoria, setCategoria] = useState('general');

  const handleChangeCategoria = e => {

  }

  
  return (
    <NoticiasContext.Provider
      value={{

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