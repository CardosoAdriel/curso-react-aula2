import './Image.css'

export default function Image({ srcImage }) {
    return <figure className='image'>
        <img src={srcImage} alt="" />
    </figure>
}