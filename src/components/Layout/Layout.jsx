import Header from '../Header/Header';
import './Layout.css';

export default function Layout(props) {

    return <main className='main'>
        <Header />
        {props.children}
    </main>
}