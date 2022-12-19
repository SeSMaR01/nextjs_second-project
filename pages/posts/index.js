import Layouts from "../../components/Layouts"
import Head from "next/head";
import React from "react";
import Link from "next/link";

function pagePosts({ posts }) {

    //CLIENTE SIDE RENDERING
    // const [posts, setPosts] = React.useState([]);

    // React.useEffect(() => {
    //     const fetchPosts = async () => {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    //         const newPosts = await res.json()
    //         setPosts(newPosts);
    //     };

    //     fetchPosts();
    // }, [])

    return (
        <Layouts>
            <Head>
                <title>Posts</title>
            </Head>
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <h1>Post Page</h1>
                        </div>
                        <div className="row">
                            {
                                posts.map(({ id, title, body }, i) => (
                                    <div className="col-4 card" key={i}>
                                        <div className="card-body v-100">
                                            <Link id="postsLink" href={`/posts/[pid]`} as={`/posts/${id}`} key={id}>
                                                <h3 className="card-title">{title}</h3>
                                                <p className="card-text">{body}</p>
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layouts>
    )
}

export async function getServerSideProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    return {
        props: {
            posts: posts
        }, // will be passed to the page component as props
    }
}

export default pagePosts;