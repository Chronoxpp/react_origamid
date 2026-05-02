import React from "react";

export const GlobalContext = React.createContext();

export function GlobalStorage({children})
{
    let produtos = null;

    return (
        <GlobalContext.Provider value={{produtos}}>
            {children}
        </GlobalContext.Provider>
    );
} 