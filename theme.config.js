/** *************************************************************
 * Please refer to the Theme Options section in documentation   *
 ****************************************************************/

/**
 * Icons from react-icons: https://react-icons.github.io/react-icons
 */

import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoStackoverflow,
} from 'react-icons/io5'
import { TfiHome, TfiPencilAlt } from 'react-icons/tfi'
import { SlUser, SlBriefcase, SlEnvolope, SlTrophy } from 'react-icons/sl'

/**
 * Main Menu Items
 */

export const menu = [
  {
    name: 'Home',
    slug: '/',
    Icon: TfiHome,
  },
  // {
  //   name: 'Home (2)',
  //   slug: '/index-2',
  //   Icon: TfiHome,
  //   number: 2,
  // },
  // {
  //   name: 'Home (3)',
  //   slug: '/index-3',
  //   Icon: TfiHome,
  //   number: 3,
  // },
  // {
  //   name: 'Home (4)',
  //   slug: '/index-4',
  //   Icon: TfiHome,
  //   number: 4,
  // },
  {
    name: 'About',
    slug: '/about',
    Icon: SlUser,
  },
  {
    name: 'Services',
    slug: '/services',
    Icon: SlBriefcase,
  },
  // {
  //   name: 'Articles',
  //   slug: '/blog',
  //   Icon: TfiPencilAlt,
  // },
  {
    name: 'Projects',
    slug: '/projects',
    Icon: SlTrophy,
  },
  {
    name: 'Contact',
    slug: '/contact',
    Icon: SlEnvolope,
  },
]

/**
 * Social Links under the Main Menu
 */

export const social = [
  {
    name: 'GitHub',
    url: 'https://github.com/mdnelles',
    Icon: IoLogoGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/michaelnelles/',
    Icon: IoLogoLinkedin,
  },
  {
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/4241624/michael-nelles',
    Icon: IoLogoStackoverflow,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/MdNelles',
    Icon: IoLogoTwitter,
  },
]

/**
 * General configurations
 */

export const config = {
  dateLocale: 'en-US',
  dateOptions: {
    // dateOptions is passed to JavaScript's toLocaleDateString()
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  },
  convertKit: {
    tipUrl: 'https://fantastic-mover-3439.ck.page/products/blog',
  },
  contactForm: {
    inputs: require('./content/contact-form.json'),
    recipient: 'RECIPIENT@EXAMPLE.com',
    sender: 'SENDER@EXAMPLE.com',
    subject: 'EMAIL NOTIFICATION SUBJECT',
  },
}

/**
 * MDX/Markdown configurations
 */

export const mdxConfig = {
  publicDir: 'public',
  pagesDir: 'content',
  fileExt: '.md',
  collections: ['/blog', '/projects'],
  remarkPlugins: [],
  rehypePlugins: [],
}

/**
 * Global SEO configuration for next-seo plugin
 * https://github.com/garmeeh/next-seo
 */

export const siteMetaData = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || 'http://localhost:3001',
  authorName: 'Michael Nelles',
  siteName: 'Michael Nelles',
  defaultTitle: 'Michael Nelles Personal Site',
  titleTemplate: 'Michael Nelles | %s',
  description: 'A short description goes here.',
  email: 'michael@nelles.io',
  locale: 'en_US',
  twitter: {
    handle: '@mdnelles',
    site: '@site',
    cardType: 'summary_large_image',
  },
}
