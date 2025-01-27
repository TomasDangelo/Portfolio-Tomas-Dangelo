import React, {createContext, useState} from "react";

const LanguageContext = createContext()


const LanguageProvider = ({children}) => {
       
    const [language, setLanguage] = useState('spanish')

    const switchLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === 'spanish' ? 'english' : 'spanish'));
    };
    
    

    return(
        <LanguageContext.Provider value={{language, switchLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}


export {LanguageContext, LanguageProvider};

