const { Optimizer } = require("@parcel/plugin");

module.exports = new Optimizer({
  async optimize({ bundle, contents, map }) {
    let { publicId, filePath, name, displayName } = bundle;
    console.log(publicId, filePath, name, displayName);
      let smatches = contents.match(
        new RegExp(`//# sourceMappingURL=${name}.map`)
      );
      if (smatches && smatches.length > 0) {
        console.log("js file matched", filePath);
        contents = contents.replace(
          new RegExp(`//# sourceMappingURL=${name}.map`),
          `//# sourceMappingURL=http://localhost:8080/${name}.map`
        );
      }
    return { contents: contents, map: map };
  },
});
