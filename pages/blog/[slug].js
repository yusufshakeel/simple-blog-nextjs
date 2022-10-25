import Head from 'next/head';
import {Fragment} from "react";
import BlogRepository from "../../repositories/blog-repository";
import BlogHeader from "../../components/blog/blog-header";
import BlogContent from "../../components/blog/blog-content";

const blogRepository = BlogRepository();

export default function BlogPostPage(props) {
    const title = `${props.blog.title} - Blog - ${process.env.NEXT_PUBLIC_WEBSITE_DEFAULT_TITLE}`;
    const url = `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/blog/${props.blog.slug}`;
    const imagePath = `/images/${props.blog.image}`;

    return (
        <Fragment>
            <Head>
                <title>{title}</title>
                <meta name='description' content={props.blog.excerpt}/>
                <meta itemProp="name" content={title}/>
                <meta itemProp="description" content={props.blog.excerpt}/>
                <meta itemProp="url" content={url}/>
                <meta itemProp="image" content={imagePath}/>
            </Head>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <BlogContent blog={{...props.blog, imagePath}}/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export function getStaticProps(context) {
    const {params} = context;
    const {slug} = params;
    const blog = blogRepository.getBlogData(slug);
    return {props: {blog}};
}

export function getStaticPaths() {
    const blogFilenames = blogRepository.getBlogFiles();
    const slugs = blogFilenames.map(v => v.replace(/\.md$/, ''));
    return {
        paths: slugs.map(slug => ({params: {slug}})),
        fallback: false,
    };
}