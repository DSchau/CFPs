---
title: "CSS in JS: Benefits, Drawbacks, and Tools"
date: "2017-07-01T05:00:00.000Z"
conference: Thunderplains
draft: false
excerpt: This was a talk given at ThunderPlains in Oklahoma City about CSS in JS. It intended to be a gentle introduction to CSS in JS and some best practices around the budding practice.
---

## Abstract

There has recently been a proliferation of libraries and utilities that attempt to fix what is apparently broken in CSS by... writing it in JavaScript. Prior to the creation of these utilities, most of us did it with good old-fashioned CSS, some others in LESS, and others still in SASS, or some utility that cures the ills of writing in CSS. This talk will deep dive into the methodologies of these CSS in JS tools, the benefits and drawbacks of using them, and plenty of examples of how to author your CSS in JavaScript--that is, if you leave thinking that there's validity to the practice!

## Details

The talk will start with an illustration of some of the problems of writing vanilla CSS (or even languages that compile down to CSS--e.g. SASS), particularly those centered around writing CSS in a non-trivial application or at scale. With the drawbacks of CSS first demonstrated, we'll then segue into and explanation of why these CSS in JS solutions were created. After all, nothing exists in a vacuum, and these tools do serve a purpose and fix some very real problems of CSS.

From this point, we'll discuss some of the various CSS in JS libraries that exist and solve some of these problems with CSS in JS solutions, and show a few quick demos of various functionality built with these libraries. This may be more "show and tell" than live coding, although live coding can always be pretty fun, so I may still consider it.

At this point, the benefits and utility of these tools are well established. However, there are some significant drawbacks to CSS in JS (e.g. editor support, non-JS environments, etc.), and I'll illustrate these to portray a fair comparison between CSS in JS solutions and vanilla CSS.

Finally, the talk will finish with a brief summation of what we've discussed, and some brief takeaways and my own personal experiences with using CSS in JS libraries vs. pure CSS solutions. The audience should leave the talk with an improved understanding of _why_ CSS in JS exists, understanding the problems it solves, and an improved understanding and ability to decide for themselves whether CSS in JS is a valid solution to their current development needs.

## Pitch

CSS in JS is an especially hot topic recently, and is becoming hotter with the introduction of libraries like [styled-components](https://github.com/styled-components/styled-components), [glamorous](https://github.com/paypal/glamorous), etc. in the React ecosystem, among others. It seems evident that this topic will continue to experience rapid growth due to what is perceived as the drawbacks of CSS, primarily at scale. With that said, I am quailified to speak on this _particular_ topic due to my progression and use of the vast gamut of tools that CSS has offered throughout the years. Throughout my career as a frontend web developer, I've moved from writing vanilla CSS to using CSS preprocessors like LESS and SASS/Compass, then progressed to using tools like CSS Modules, and then finally found myself writing _tons_ of CSS in JavaScript. I will draw upon this experience to deliver what I truly believe to be an engaging, interesting, and most of all informative talk to all the great attendees of this conference.

<!-- https://cfp.techlahoma.org/events/thunderplains-2017/proposals/new -->
