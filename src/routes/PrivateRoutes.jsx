import Home from "../pages/Home/Home";


export default function PrivateRoutes({ Item }) {

    const user = false;

    return user ? <Item /> : <Home />
}