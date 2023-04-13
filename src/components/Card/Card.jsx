import './Card.css'

export default function Card(props) {
    console.log(props)

    return <div className="card"> {props.children} </div>
}