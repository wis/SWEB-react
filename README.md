# SWEB-react
Simple WebExtensions Boilerplate ➡ React

# Development
- run `yarn start`
- load extension from the `build` directory.
  - never delete the `build` directory, only the `pages` and `scripts` directories in it.

# Issues
only full page refresh is working for top level components like `Options` and `Popup`,
React Fast Refresh is not working with nested components, e.g `Componentx`, when the web page is not served form with a server and has an `https?://` URL scheme, e.g a web page is that's of an opened file from disk with a `file://` URL scheme or of a browser extension with a  `moz-extension://` or `chorme-extension://` URL scheme.