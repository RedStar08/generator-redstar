const Generator = require("yeoman-generator")

const MyBase = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts)

    // Next, add your custom code
    this.option("coffee") // This method adds support for a `--coffee` flag
  }
  helper() {
    console.log("helper -> run")
  }
}

module.exports = class extends MyBase {
  exec() {
    this.helper()
  }
}
