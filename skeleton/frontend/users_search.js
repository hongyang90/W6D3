class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.input = this.$el.val();
    this.ul = this.$el.children('.users')
  }

  // handleInput {
  // this.$el.on('input', 'input:text', event => {
  //   event.preventDefault();

  //     // APIUtil.searchUsers(this.input).then(() => {
  //     //   // this.input = "followed";
  //     //   // this.render();
  //     //   // this.$el.prop('disabled', false);
  //     // });
  //   });
  // }
}