import { createContext } from "react";

//como o context será usado como um componente normal
//precisa iniciar com letra Maiúscula.
export const ProdutosContext = createContext(); //nesse caso ele nao tem valor inicial

export default function ProdutosProvider({ children }) {

    const info = "Mudou a informação"

    return <ProdutosContext.Provider
        value={
            { info }
        }
    >
        {children}
    </ProdutosContext.Provider>
}