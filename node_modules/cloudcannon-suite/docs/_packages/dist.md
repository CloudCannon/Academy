---
title: Distribute
namespace: dist
tagline: Baseurl configured in one spot not everywhere
image: /images/shipping.svg
commands:
  - task: build
    description_markdown: Compiles HTML and CSS to be run at a base url
  - task: serve
    description_markdown: Runs a local webserver on the `dest` folder
  - task: watch
    description_markdown: Watches the `src` folder and triggers builds
  - task: rewrite-html
    description_markdown: Clones HTML files from `src` to `dist` and rewrites attributes to include baseurl (`src`, `href`, `srcset` and `meta[http-equiv='refresh']`)
  - task: rewrite-css
    description_markdown: Clones CSS files from `src` to `dist` and rewrites urls to include baseurl
  - task: clone-assets
    description_markdown: Clones all other files from `src` to `dist`
  - task: clean
    description_markdown: Removes all files from the dist folder

output_markdown: |
  Running `gulp dist` adds a baseurl to the entire site at `src`. HTML and CSS files are rewritten to fix references to the new folder structure. All files are cloned into the `dist` folder with the baseurl prepended. Once completed a local webserver will be started on port 9000. Any changes to the `src` folder will trigger a rebuild of the contents.
output_code: |
  [12:04:18] Using gulpfile ./gulpfile.js
  [12:04:18] Starting 'dist'...
  [12:04:18] Starting 'dist:build'...
  [12:04:18] Starting 'dist:clean'...
  [12:04:19] Finished 'dist:clean' after 383 ms
  [12:04:19] Starting 'dist:rewrite-html'...
  [12:04:19] Starting 'dist:rewrite-css'...
  [12:04:19] Starting 'dist:clone-assets'...
  [12:04:19] Finished 'dist:rewrite-css' after 639 ms
  [12:04:26] Finished 'dist:rewrite-html' after 7.1 s
  [12:04:26] Finished 'dist:clone-assets' after 7.38 s
  [12:04:26] Finished 'dist:build' after 7.78 s
  [12:04:26] Starting 'dist:serve'...
  [12:04:26] Webserver started at http://localhost:9000
  [12:04:26] Finished 'dist:serve' after 18 ms
  [12:04:26] Starting 'dist:watch'...
  [12:04:33] Finished 'dist:watch' after 6.66 s
  [12:04:33] Finished 'dist' after 14 s

required_config:
  dist:
    baseurl: "p"
default_json_code: |
  {
    dist: {
        src: "dist/site",
        dest: "dist/prod",
        baseurl: ""
    },
    serve: {
        port: 9000,
        open: true,
        path: "/"
    }
  }
config:
  - key: "dist.baseurl"
    description_markdown: "Sets the baseurl to append to urls."
    required: true
  - key: "dist.src"
    description_markdown: "Sets the input folder for dist task"
    required: false
  - key: "dist.dest"
    description_markdown: "Sets the output folder for dist build"
    required: false
  - key: "serve.port"
    description_markdown: "Specifies the port to serve the built site from."
    required: false
  - key: "serve.open"
    description_markdown: "Should the docs:serve task automatically open a tab in a browser"
    required: false
dev_path: packages/distribute
order: 3
---
