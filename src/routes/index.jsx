import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CadastroProduto from '../pages/CadastroProduto/CadastroProduto'
import Produtos from '../pages/Produtos/Produtos'
import PrivateRoutes from './PrivateRoutes'
import Home from '../pages/Home/Home'

export default function RoutesApp() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/produtos' element={<Produtos />} />
                <Route path='/cadastro' element={<PrivateRoutes Item={CadastroProduto} />} />
            </Routes>
        </BrowserRouter>
    )
}