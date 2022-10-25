import Image from "next/image"
import BlogCard from "../components/blog/blog-card";
import BlogRepository from "../repositories/blog-repository";

const blogRepository = BlogRepository();

export default function HomePage(props) {
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

            <hr/>

            <div className="row">
                <div className="col-12">
                    <h3 className="display-6 text-center">Featured Blogs</h3>
                </div>
            </div>
            <div className="row">
                {props.featuredBlogs.map(blog => <BlogCard key={blog.slug} blog={blog}/>)}
            </div>
        </div>
    )
}

export function getStaticProps() {
    const featuredBlogs = blogRepository.getFeaturedBlogs();

    return {
        props: {
            featuredBlogs
        },
    };
}
