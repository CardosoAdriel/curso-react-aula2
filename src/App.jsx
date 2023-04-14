import { useState, Component, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Styles from './App.module.css' // forma de trabalhar com CSS modules
import Card from './components/Card/Card'
import Image from './components/Image/Image'
import Text from './components/Text/Text'
import ContentCard from './components/ContentCard/ContentCard'
import Button from './components/Button/Button'
// import cards from './db.js'
import axios from 'axios'

function App() {
  const [number, setNumber] = useState(2);
  const [nome, setNome] = useState("Adriel");
  const [cards, setCards] = useState([]);
  const [url, setUrl] = useState('http://localhost:3000/produtos');

  async function getData() {
    const resposta = await axios.get(url)
    const data = resposta.data

    setCards(data)
  }

  const acaoBotao = () => {
    const nextNumber = number + 1
    setNumber(nextNumber)
  }

  // com segundo parametro [] vazio ele executa em conpilacao
  useEffect(() => {
    getData()
  }, [])

  // com o segundo parametro ele executa toda vez que houver modificação em um estado ou mais e executa uma lógica
  useEffect(() => {
    console.log('CHEGUEI !! ')
  }, [number])

  if (!cards.length) return <Text elemento="h3" estilo="title" conteudo="Não há produtos disponíveis! =(" />

  return (
    <div className='main'>
      <ContentCard between='between'>
        <Image srcImage={viteLogo} />
        <Text elemento="h3" estilo="title" conteudo={`Meu nome é: ${nome}`} />
        <Image srcImage={reactLogo} />
      </ContentCard>

      {cards.map(
        (card, index) => {
          const { id, srcImage, title, price, paragraph } = card
          return (
            <Card key={id || index}>
              <Image srcImage={srcImage} />

              <ContentCard column="column">

                <Text elemento="h3" estilo="title" conteudo={title} />
                <Text elemento="h1" estilo="price" conteudo={price} />
                <Text elemento="p" estilo="paragraph" conteudo={paragraph} />

                <Button action={acaoBotao}> Saiba Mais {number} </Button>
              </ContentCard>

            </Card>
          )
        }
      )}

    </div>
  )
}

export default App
