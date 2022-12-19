import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" href="/">2nd Project</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" href="/users">Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/posts">Posts</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" href="/posts/[pid]" as={`/posts/${5}`}>Posts #5</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}