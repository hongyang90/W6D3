const APIUtil = require("./api_util")

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');
    this.render();
    this.handleClick();
  }

  render () {
    let buttonText;

    if (this.followState === "unfollowed") {
      buttonText = "Follow";
    } else {
      buttonText = "Unfollow";
    }
    this.$el.text(`${buttonText}`)
  }

  // handleClick () {
  //   this.$el.on('click', event => {
  //     event.preventDefault();

  //     if (this.followState === "unfollowed") {
  //       $.ajax ({
  //         url: `/users/${this.userId}/follow`,
  //         method: 'POST',
  //         dataType: 'JSON'
  //       });

  //       this.followState = "followed";
  //       this.render();
  //     } else {
  //       $.ajax({
  //         url: `/users/${this.userId}/follow`,
  //         method: 'DELETE',
  //         dataType: 'JSON'
  //       });

  //       this.followState = "unfollowed";
  //       this.render();
  //     }
  //   })
  // }

  handleClick() {
    this.$el.on('click', event => {
      event.preventDefault();

      if (this.followState === "unfollowed") {
        this.$el.prop('disabled', true);
        APIUtil.followUser(this.userId).then(() => {
          this.followState = "followed";
          this.render();
          this.$el.prop('disabled', false);
        });
        // $.ajax({
        //   url: `/users/${this.userId}/follow`,
        //   method: 'POST',
        //   dataType: 'JSON'
        // }).then( () => {
        //   this.followState = "followed";
        //   this.render();

        // });

      } else {
        this.$el.prop('disabled', true);
        APIUtil.unfollowUser(this.userId).then(() => {
          this.followState = "unfollowed";
          this.render();

          this.$el.prop('disabled', false);
        });
        // $.ajax({
        //   url: `/users/${this.userId}/follow`,
        //   method: 'DELETE',
        //   dataType: 'JSON'
        // }).then(() => {
        //   this.followState = "unfollowed";
        //   this.render();

        // });

      }
    });
  }
}



module.exports = FollowToggle;