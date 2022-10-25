import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

export default function BlogRepository() {
    const blogDir = path.join(process.cwd(), 'static-content', 'blog');

    const getFeaturedBlogs = () => {
        const allBlogs = getAllBlogs();
        return allBlogs.filter(v => v.isFeatured);
    };

    const getBlogFiles = () => {
        return fs.readdirSync(blogDir);
    }

    const getAllBlogs = () => {
        const blogFiles = getBlogFiles();
        const allBlogs = blogFiles.map(file => getBlogData(file));
        return allBlogs.sort((blogX, blogY) => blogX.date > blogY.date ? -1 : 1);
    }

    const getBlogData = filename => {
        const slug = filename.replace(/\.md$/, '');
        const filePath = path.join(blogDir, `${slug}.md`);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data, content } = matter(fileContent);

        return {
            slug,
            content,
            ...data,
        };
    }

    return {
        getFeaturedBlogs, getBlogFiles, getAllBlogs, getBlogData
    };
}