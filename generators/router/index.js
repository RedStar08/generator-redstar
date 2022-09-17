var generators = require("yeoman-generator")

const MyBase = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments)

    // Next, add your custom code
    this.option("coffee") // This method adds support for a `--coffee` flag
  },
  helper() {
    console.log("helper -> run")
  },
})

module.exports = class extends MyBase {
  exec() {
    this.helper()
  }
}
