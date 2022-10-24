import Link from "next/link"

export default function NotFound404Page() {
    return (
        <div className="container">
            <div className="row my-3 text-center">
                <h1 className="display-1">404</h1>
                <h2 className="display-6">Not found</h2>
                <p><Link href='/'>Back to home</Link></p>
            </div>
        </div>
    )
}
