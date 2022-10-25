import {Fragment} from "react";
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { idea } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import BlogHeader from "./blog-header";

function BlogContent(props) {
    const { blog } = props;

    const customRenderers = {
        p(paragraph) {
            const { node } = paragraph;

            if (node.children[0].tagName === 'img') {
                const image = node.children[0];

                return (
                    <div className={classes.image}>
                        <Image
                            src={`/images/blog/${blog.slug}/${image.properties.src}`}
                            alt={image.alt}
                            width={900}
                            height={300}
                            layout="responsive"
                        />
                    </div>
                );
            }

            return <p>{paragraph.children}</p>;
        },

        code(code) {
            const { className, children, inline } = code;
            const language = className?.split('-')[1];

            if (language) {
                return (
                    // eslint-disable-next-line react/no-children-prop
                    <SyntaxHighlighter children={children}
                        style={idea}
                        language={language}
                        showLineNumbers={true}
                        showInlineLineNumbers={true}
                        wrapLines={true}
                        wrapLongLines={true}
                    />
                );
            } else if (inline) {
                return <code>{children}</code>;
            }
        },
    };

    return (
        <Fragment>
            <BlogHeader blog={{title: blog.title, date: blog.date, image: blog.imagePath}} />
            <div className="blogContentContainer">
                <ReactMarkdown components={customRenderers}>{blog.content}</ReactMarkdown>
            </div>
        </Fragment>
    );
}

export default BlogContent;