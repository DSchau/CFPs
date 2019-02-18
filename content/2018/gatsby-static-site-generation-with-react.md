---
title: 'Gatsby: Static Site Generation with React'
date: 2018-03-01T05:00:00.000Z
tags:
  - React
  - Web performance
  - Static site
  - Automated tooling
  - JavaScript
description: 'Static site generation has been solved with Jekyll, Hugo, et al. However, a challenger looms, and that challenger is Gatsby. This presentation presents the argument for how writing a static site in React is truly transformative'
---

## Abstract

From the React docs to Formidable's home page to seemingly everything in between, the "ludicrously fast" static site generator Gatsby is the engine powering a growing percentage of statically generated sites. This talk goes into the details of what Gatsby is, what static site generation really _is_, and how each of us armed with this combo can make performant, dynamic, and truly great static sites _and_ performant web applications with the incredibly powerful combination of Gatsby, React, and static site generation.

## Details

The talk will begin with an illustration of what static site generation means, and some sample code and approaches used by existing tools, e.g. Jekyll, Hugo, etc. From this perspective, we can then shift the discussion into what a (current) modern website stack looks like, outside of static site generation.

After introducing static site generation tools, the presentation will shift into what makes a modern website performant, and why performance is such a crucial, often overlooked concern. In the age of Webpack and other bundling tools, we've lost focus on the user experience that is significantly degraded in loading these huge, monolithic bundles of JavaScript, CSS, and other content. These slow, massive applications are costing your users and your company precious time and money.

Introducing... Gatsby! Gatsby is a modern static-site generator powered by React. Just as React is "eating the world" in areas like the web and native, it similarly is now attempting to conquer static site generation and performant web applications. We will discuss how GatsbyJS makes static sites, and in particular, several of its techniques that have led to Gatsby being described as "ludicrously fast" such as progressive image loading, content aware bundling, etc.

Finally, we will discuss Gatsby's data layer, which uses another technology (GraphQL) which seems to be growing rapidly in popularity and adoption. We will discuss how GraphQL works with Gatsby, and how it allows you to pick and choose content, types of content, and even sources of content (e.g. Wordpress, Contentful, etc.). We will discuss how one could, for instance, use Gatsby to build a blog or an e-commerce site simply, quickly, and easily with the language and tooling that many of us are most familiar with: React and JavaScript. With this information in mind, each attendee will leave empowered with a greater understanding of not only Gatsby, but also static site generation, web performance, and some great techniques that they can use in their application, today.

## The pitch

I'm _incredibly_ excited about Gatsby, and I believe I am well positioned to speak on a topic that I have been long contributing to. My [blog post](https://www.gatsbyjs.org/blog/2017-07-19-creating-a-blog-with-gatsby/) ended up being one of the most visited blog posts on the official Gatsby blog, and I've been regularly involved in contributing back to Gatsby. I truly believe that Gatsby is just as transformative a technology to the performant web as React has been to the modern web, and I believe myself more than able to deliver an impassioned, informative, and entertaining talk on a topic that I am and have been incredibly passionate about! I have given only one other conference talk ([Thunderplains 2017 in Oklahoma City](http://2017.thunderplainsconf.com/) in which I created [css-in-js-playground][css-in-js-playground]), but I'm a regular speaker at local meetups and consider myself more than able to deliver some great, informative content.

## Intended Audience

The intended audience is anyone with a passing interest in frontend development, but will, of course, be slightly more valuable to those in the audience who have used and/or are familiar with React. That said, regardless of subject matter expertise, this talk is intended to be valuable to anyone with at least a casual interest in topics such as static site generation, web performance, and modern website tooling.

[css-in-js-playground]: https://css-in-js-playground.com
