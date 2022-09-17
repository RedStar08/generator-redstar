var generators = require("yeoman-generator")

module.exports = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments)

    // Next, add your custom code
    this.option("coffee") // This method adds support for a `--coffee` flag

    // instance method won`t be called automatically
    this.helperMethod1 = function () {
      this.log("instance method `helperMethod1` will not be auto run")
    }
  },

  // High priorities

  // initializing - Your initialization methods (checking current project state, getting configs, etc)
  initializing() {
    this.log("`initializing` -> run")
  },
  // prompting - Where you prompt users for options (where you’d call this.prompt())
  // prompting(options) {
  //   this.log("`prompting` -> run", options)
  // },
  async prompting() {
    const answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname, // Default to current folder name
      },
      {
        type: "confirm",
        name: "cool",
        message: "Would you like to enable the Cool feature?",
      },
    ])
    this.answers = answers
    this.log("app name", answers.name)
    this.log("cool feature", answers.cool)
  },
  // configuring - Saving configurations and configure the project (creating .editorconfig files and other metadata files)
  configuring() {
    this.log("`configuring` -> run")
  },

  method1: function () {
    this.log("method 1 just ran")
  },
  // method name startWith `_` will not be called automatically
  _privite_method1() {
    this.log("`_privite_method1` will not be auto run")
  },
  method2: function () {
    this.log("method 2 just ran")
  },
  helper() {
    this.log("methods on the parent generator won't be called automatically")
  },

  // Low priorities

  // writing - Where you write the generator specific files (routes, controllers, etc)
  writing() {
    this.log("`writing` -> run")
  },
  // conflicts - Where conflicts are handled (used internally)
  conflicts() {
    this.log("`conflicts` -> run")
  },
  // install - Where installations are run (npm, bower)
  install() {
    this.log("`install` -> run")
  },
  // end - Called last, cleanup, say good bye, etc
  end() {
    this.log("`end` -> run")
  },
})
