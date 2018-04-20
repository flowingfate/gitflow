export default (app) => {
  Object.assign(app, {
    get nowName() {
      return `${this.firstName}-${this.lastName}`;
    }
  })
}