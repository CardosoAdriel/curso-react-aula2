import './Button.css'

export default function Button(props) {
    const { action, children } = props

    return <button className='button' onClick={() => { action() }}>
        {children}
    </button>
}