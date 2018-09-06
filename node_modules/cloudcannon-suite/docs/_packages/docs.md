---
title: Docs
namespace: jekyllDocs
tagline: Document your site using the same tools
image: /images/docs.svg
commands:
  - task: install
    description_markdown: Runs `bundle install` on the `src` folder
  - task: build
    description_markdown: Runs `bundle exec jekyll serve` on the `src` folder
  - task: serve
    description_markdown: Runs a local webserver on the `dest` folder
  - task: watch
    description_markdown: Watches the `src` folder and triggers builds

output_markdown: |
  Running `gulp docs` runs jekyll build on the `docs` directory and outputs the site to `dist/docs`. Once completed the a local webserver will be started on port 5000. Any changes to the `docs` folder will trigger a rebuild of the contents.
output_code: |
  [12:04:12] Using gulpfile ./gulpfile.js
  [12:04:12] Starting 'docs'...
  [12:04:12] Starting 'docs:build'...
  [12:04:12] $ bundle exec jekyll build --destination /Users/george/Work/cloudcannon/suite/dist/docs --baseurl
  Configuration file: /Users/george/Work/cloudcannon/suite/docs/_config.yml
              Source: /Users/george/Work/cloudcannon/suite/docs
         Destination: /Users/george/Work/cloudcannon/suite/dist/docs
   Incremental build: disabled. Enable with --incremental
        Generating...
                      done in 0.622 seconds.
   Auto-regeneration: disabled. Use --watch to enable.
  [12:04:13] Finished 'docs:build' after 1.49 s
  [12:04:13] Starting 'docs:watch'...
  [12:04:13] Finished 'docs:watch' after 38 ms
  [12:04:13] Starting 'docs:serve'...
  [12:04:13] Webserver started at http://localhost:5000
  [12:04:13] Finished 'docs:serve' after 35 ms
  [12:04:13] Finished 'docs' after 1.57 s

default_json_code: |
  {
  	jekyll: {
  		src: "docs",
  		dest: "dist/docs"
  	},
  	tasks: [],
  	serve: {
  		port: 4000,
  		open: true
  	}
  }
config:
  - key: "jekyll.src"
    description_markdown: "Sets the input folder for jekyll"
    required: false
  - key: "jekyll.dest"
    description_markdown: "Sets the output folder for docs build"
    required: false
  - key: "tasks"
    description_markdown: "Adds additional tasks to be run before the jekyll build. This is useful for reducing build time in jekyll."
    required: false
  - key: "serve.port"
    description_markdown: "Specifies the port to serve the built site from."
    required: false
  - key: "serve.open"
    description_markdown: "Should the docs:serve task automatically open a tab in a browser"
    required: false
dev_path: packages/jekyll-docs
order: 2
---
