function getFoodCard(name, desc, image) {
    var first =
        '<div style="width: 400px; margin: 10px" class="mdc-card demo-card">\r\n        <div class="mdc-card__primary-action demo-card__primary-action" tabindex="0">\r\n          <div\r\n            class="mdc-card__media mdc-card__media--16-9 demo-card__media"\r\n            style="\r\n              background-image: url(\'';
    var second =
        '\');\r\n            "\r\n          ><\/div>\r\n          <div style="margin: 1em; margin-bottom: 0">\r\n            <div class="demo-card__primary">\r\n              <h2 class="demo-card__title mdc-typography mdc-typography--headline6">';
    var third =
        '<\/h2>\r\n            <\/div>\r\n            <div class="demo-card__secondary mdc-typography mdc-typography--body2">\r\n              ';

    var last =
        '<\/div>\r\n          <\/div>\r\n        <\/div>\r\n        <div class="mdc-card__actions">\r\n          <div class="mdc-card__action-buttons">\r\n            <button class="mdc-button mdc-card__action mdc-card__action--button">\r\n              <span class="mdc-button__ripple"><\/span>Order now\r\n            <\/button>\r\n          <\/div>\r\n        <\/div>\r\n      <\/div>';

    return first + image + second + name + third + desc + last;
}

function renderFood(name, desc, image) {
    document.getElementById("food").innerHTML =
        document.getElementById("food").innerHTML +
        getFoodCard(name, desc, image);
}