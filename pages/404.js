import Link from "next/link"

export default function NotFound404Page() {
    return (
        <div className="container">
            <div className="row my-5 p-5 text-center">
                <h1 className="display-1">404</h1>
                <h2 className="display-6">Not found</h2>
                <p><Link href={process.env.NEXT_PUBLIC_DOMAIN_NAME}><button className='btn btn-lg btn-primary'>Back to home</button></Link></p>
            </div>
        </div>
    )
}
