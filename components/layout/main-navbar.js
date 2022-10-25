import Link from "next/link";

function MainNavbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand">{process.env.NEXT_PUBLIC_WEBSITE_BRAND_NAME}</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href={process.env.NEXT_PUBLIC_DOMAIN_NAME}>
                                <a className="nav-link" aria-current="page">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/blog`}>
                                <a className="nav-link">Blog</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default MainNavbar;