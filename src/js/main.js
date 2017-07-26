/* global $ */
/* eslint-disable wrap-iife */

import '../../bower_components/bootstrap/dist/js/bootstrap.min';
import '../../bower_components/bootstrap/less/bootstrap.less';
import '../css/all.css';
import '../less/all.less';

var index = require('jsmp-infra-create-user-object');

(function () {
  var btn = $('[data-target="#myModal"]');

  function onButtonClick() {
    console.log(index.transformString('Lorem ipsum dolor sit amet, ipsum choro aperiam ut vel, insolens consulatu ea est'));
  }

  btn.click(onButtonClick);
})();
