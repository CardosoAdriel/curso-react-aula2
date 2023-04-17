import { useContext } from "react"
import { ProdutosContext } from "../context/ProdutosContext"


export default function useProdutos() {
    const context = useContext(ProdutosContext)

    return context
}
