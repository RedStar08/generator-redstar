var generators = require("yeoman-generator")

const MyBase = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments)

    // Next, add your custom code
    this.option("coffee") // This method adds support for a `--coffee` flag

    // instance method won`t be called automatically
    this.helperMethod1 = function () {
      console.log("instance method `helperMethod1` will not be auto run")
    }
  },
  method1: function () {
    console.log("method 1 just ran")
  },
  // method name startWith `_` will not be called automatically
  _privite_method1() {
    console.log("`_privite_method1` will not be auto run")
  },
  method2: function () {
    console.log("method 2 just ran")
  },
  helper() {
    console.log("methods on the parent generator won't be called automatically")
  },
})

module.exports = class extends MyBase {
  exec() {
    this.helper()
  }
}
