import BlogCard from "../../components/blog/blog-card";
import BlogRepository from "../../repositories/blog-repository";

export default function BlogHomePage(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="display-6 text-center">All blog posts</h3>
                </div>
            </div>
            <div className="row">
                {props.blogs.map(blog => <BlogCard key={blog.slug} blog={blog}/>)}
            </div>
        </div>
    );
}

export function getStaticProps() {
    const blogs = BlogRepository().getAllBlogs();

    return {
        props: {
            blogs
        },
    };
}