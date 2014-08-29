---
layout: post
title:  "Using Jekyll to make some blog posts"
date:   2014-08-29 13:36:10
tags: [jekyll, this-site, how-to]
---

Started using jekyll for this section of the website.  I have no idea what I'm doing.

I created the /blog directory using `jekyll new blog` in the base directory.
I needed to use the command `jekyll build` in the correct directory (the /blog one) to see what would result.
Then I needed to use the command `jekyll serve` from that directory to see the site.
Apostrophes looked [funny][1] when I ran `jekyll build` command from the parent directory.

Turns out when I pushed to github nothing worked.
A jekyll site hosted on github needs to be in the root directory,
as this foreboding [warning][2] from jekyll pages reveals.
![put it in the root](/img/jekyll-on-root.png)

[1]: https://github.com/jekyll/jekyll/issues/1891
[2]: http://jekyllrb.com/docs/github-pages/#project-pages
