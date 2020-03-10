# SWEB-react
Simple WebExtensions Boilerplate ➡ React

# Development
- run `yarn start`
- load extension from the `build` directory.
  - never delete the `build` directory, only the `pages` and `scripts` directories in it.

# Issues
only full page refresh is working for top level components like `Options` and `Popup`,
React Fast Refresh works for nested components, e.g `Componentx`,
only when the web page is served form with a server (with the `serve` command)
and has an `http://` URL scheme, and not when the web page is that's of an opened 
HTML file from disk with a `file://` URL scheme or of a browser extension with a 
`moz-extension://` or `chorme-extension://` URL scheme (that's built with the `watch` command).