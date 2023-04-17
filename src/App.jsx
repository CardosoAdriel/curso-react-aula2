import Layout from './components/Layout/Layout'
import ProdutosProvider from './context/ProdutosContext'
import RoutesApp from './routes'

function App() {

  return (
    <ProdutosProvider>
      <Layout>
        <RoutesApp />
      </Layout>
    </ProdutosProvider>
  )
}

export default App
