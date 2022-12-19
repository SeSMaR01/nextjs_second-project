import Layout from "../../components/Layouts";


export async function getServerSideProps({query: {pid}}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${pid}`);
    const post = await res.json();

    return {
        props: {
            post
        }
    }
}

function pagePost({ post }) {
    return (
        <Layout>
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card card-title">
                                <h2>{post.title}</h2>
                            </div>
                            <div className="card card-body">
                                <p>{post.body}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default pagePost;