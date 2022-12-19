import Layouts from "../components/Layouts";
import Head from "next/head";

function Home() {
    return (
        <Layouts>
            <Head>
                <title>2nd Project</title>
            </Head>
            <div className="container py-4">
                <h1>Hola Mundo</h1>
            </div>
        </Layouts>
    )
}

export default Home;