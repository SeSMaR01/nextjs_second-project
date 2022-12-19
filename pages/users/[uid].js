import Layout from "../../components/Layouts";
import { useRouter } from "next/router";


export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.uid}`);
    const user = await res.json();

    return {
        props: {
            user
        }
    }
}

export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    const users = await res.json();
    
    const paths = users.map(user => {
        return {
            params: {uid: `${user.id}`}
        }
    })
    // const paths = [
    //     { params: { uid: '1' } },
    //     { params: { uid: '2' } }
    // ]

    return {
        paths,
        fallback: true
    }
}

export default function pageUser({ user }) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>LOADING...</div>
    }
    return (
        <Layout>
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="card-title">User ID: {user.id}</h1>
                        <h2 className="card-title">Nombre: {user.name}</h2>
                        <p className="card-subtitle">Usuario: {user.username}</p>
                        <br />
                        <p>Email: {user.email}</p>
                        <p>Telefono: {user.phone}</p>
                        <p>Sitio Web: {user.website}</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

