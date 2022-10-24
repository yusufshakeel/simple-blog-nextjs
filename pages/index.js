import Image from "next/image"

export default function HomePage() {
    return (
        <div className="container">
            <div className="row my-3">
                <div className="container text-center">
                    <h1 className="display-1 text-center">
                        Hello, World!
                    </h1>
                    <h3 className="display-6 text-center">
                        I am Yusuf Shakeel.
                    </h3>
                    <Image src={process.env.NEXT_PUBLIC_DEFAULT_PROFILE_IMAGE}
                           className="img-fluid rounded-circle img-thumbnail shadow-sm"
                           width="200" height="200" alt="profile image"/>
                </div>
            </div>

            <div className="row my-3">
                <div className="container text-center">
                    <p>Follow me on</p>
                </div>
            </div>
        </div>
    )
}
