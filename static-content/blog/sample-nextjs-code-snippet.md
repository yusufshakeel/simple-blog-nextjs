---
title: Sample Next.js code snippet
date: '2022-10-22'
image: home-page-default-banner.jpg
excerpt: This is a sample Next.js code snippet blog post.
isFeatured: true
---

Hello, World!

In this blog post we are going to display Hello, World message using Next.js project.

Head over to `pages/index.js` file and write the following code.

```js
export default function HomePage() {
    return (
        <div>
            <h1>Hello, World!</h1>
        </div>
    );
}
```

Save the changes made to the file.

Now, open terminal and run the following command.

```shell
npm run dev
```

This will start the local dev server.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.