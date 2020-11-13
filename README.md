# SWEB-react
Simple WebExtensions Boilerplate ➡ React

# Setup
run `yarn install` to install required npm dependencies

# Development
- run `yarn start`
- load project's/top directory or manifest.json to install extension for development

# Sourcemaps
## Why sourcemaps normally don't work with extensions (in Chromium and Firefox)
All browsers with good devtools have trouble fetching and loading sourcemap files 
if their URL's scheme is not `http://`, for example `chrome-extension://`, `moz-extension://`.
relavent bug issues/tickets: [Chromium bug 974543](https://bugs.chromium.org/p/chromium/issues/detail?id=974543) [Firefox bug 1437937](https://bugzilla.mozilla.org/show_bug.cgi?id=1437937)
## How sourcemaps were made to work
by using Parcel V2's plugin system to write an [optimizer plugin](packages/parcel-optimizer-relative-to-local-server-sourcemappingurl-rewriter) that rewrites
the last line of compiled JS files to point to a URL of file served by a local HTTP server,
instead of the before outputed relative filename path that gets resolevd to `chrome-extension://` or `moz-extension://` when devtools try to fetch the sourcemaps and throw an error.
## Credit for the idea of the workaround goes to Luca Greco @rpl
the idea of using HTTP served sourcemaps files as a workaround I got from [this](https://github.com/webpack/webpack/issues/1194#issuecomment-402494524) comment.
as you can see from the date of that comment and my comment before it, I've been struggling for years from the lack of sourcemaps support for extension development. now the Developer Experiece (DX) for extension development got much better.