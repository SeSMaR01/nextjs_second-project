import Link from "next/link";
import Layouts from "../../components/Layouts"
import Head from "next/head";

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json();
    
    console.log(users)

    return{
        props: {
            users
        }
    }
}

function pageUsers({ users }) {
    return (
        <Layouts>
            <Head>
                <title>Users</title>
            </Head>
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Users Page</h1>
                    </div>
                    <div className="row">
                        {
                            users.map(({id, name, username, email, phone, website}, i) => (
                                <div className="card col-md-3">
                                    <div className="card-body">
                                        <h2 className="card-title">{name}</h2>
                                        <p className="subtitle">{username}</p>
                                        <div className="card-text">
                                        <p>{email}</p>
                                        <p>{phone}</p>
                                        <p>{website}</p>
                                        </div>
                                    </div>
                                    <Link className="card-link btn btn-primary " href={`/users/${id}`}>Ver Post</Link>
                                </div>   
                            ))
                        }
                    </div>
                </div>
            </div>
        </Layouts>
    )
}

export default pageUsers;