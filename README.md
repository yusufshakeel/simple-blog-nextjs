# simple-blog-nextjs

This is a simple blog project created using [Next.js](https://nextjs.org/) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Table of Content

* [Getting Started](#getting-started)
* [Configurations](#configurations)
  * [Environment variables](#environment-variables)
  * [Set the domain name of the website](#set-the-domain-name-of-the-website)
  * [Set the default website title and description](#set-the-default-website-title-and-description)
  * [Set the home page banner image](#set-the-home-page-banner-image)
  * [Set the profile image](#set-the-profile-image)
  * [Set the favicon](#set-the-favicon)
* [Learn more about Next.js](#learn-more-about-nextjs)
* [Deploy on Vercel](#deploy-on-vercel)
* [License](#license)
* [Donate](#donate)

## Getting Started

First, install all the packages.

```shell
npm i
```

Now, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You are now ready to make changes and customise the blog.

## Configurations

### Environment variables

There are three environment variables files in this project.

* `.env` - default
* `.env.development` - for development environment
* `.env.production` - for production environment

### Set the domain name of the website

Open `.env.development`, `.env.production` and set the following variables.

* `NEXT_PUBLIC_DOMAIN_NAME`

Example: If you have purchased `example.com` domain name and your website url is `https://example.com` then set the following.

```text
NEXT_PUBLIC_DOMAIN_NAME="https://example.com"
```

### Set the default website title and description

Open `.env.development`, `.env.production` and set the following variables.

* `NEXT_PUBLIC_WEBSITE_DEFAULT_TITLE` - to set the title of the website.
* `NEXT_PUBLIC_WEBSITE_DEFAULT_DESCRIPTION` - to set the description of the website.

### Set the home page banner image

Open `.env.development`, `.env.production` and set the following variable.

* `NEXT_PUBLIC_HOME_PAGE_DEFAULT_BANNER`

Example:

```shell
NEXT_PUBLIC_HOME_PAGE_DEFAULT_BANNER="public/images/home-page-banner.jpg"
```

It is assumed that you have put your banner image file `home-page-banner.jpg` inside `public/images/` folder.

Note! There is a default banner image `public/images/home-page-default-banner.jpg`.

Recommendation: Try to put rectangular image of minimum dimensions `2400x800` (width x height) in pixels.

### Set the profile image

Open `.env.development`, `.env.production` and set the following variable.

* `NEXT_PUBLIC_DEFAULT_PROFILE_IMAGE`

Example:

```shell
NEXT_PUBLIC_DEFAULT_PROFILE_IMAGE="public/images/profile.jpg"
```

It is assumed that you have put your profile image file `profile.jpg` inside `public/images/` folder.

Note! There is a default profile image `public/images/default-profile.jpg`.

Recommendation: Try to put square image of minimum dimensions `300x300` (width x height) in pixels.

### Set the favicon

To set the Favicon of your blog head over to the `public` folder and put your `favicon.ico` file in there.

Note! There is a default `favicon.ico` file present.

## Learn more about Next.js

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub repository](https://github.com/vercel/next.js/)

## Deploy on Vercel

- [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
- [Next.js deployment documentation](https://nextjs.org/docs/deployment)

## License

It's free. 😃

[MIT License](https://github.com/yusufshakeel/simple-blog-nextjs/blob/main/LICENSE)

## Donate

You can support my open source project work by [donating via PayPal](https://www.paypal.com/paypalme/yusufshakeel) 😃