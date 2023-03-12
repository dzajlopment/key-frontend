import { Key } from "./components/key";

function App() {
    return <>
        <Key name="123" available={true} />
        <Key name="207" available={false} />
    </>;
}

export default App;
