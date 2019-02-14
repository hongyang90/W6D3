const FollowToggle = require("./follow_toggle");
const APIUtil = require("./api_util")

$(function () {
  const $buttons = $('button');
  $buttons.each( (idx, ele) => {
    let button = new FollowToggle(ele);
  });

  const $navs = $('nav.users-search');
  $navs.each( (idx, ele) => {
    let nav = new UsersSearch(ele);
  });


});