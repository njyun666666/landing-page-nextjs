// Sub Dropdown
export const sub_dropdown = function () {
  // submenu
  const onekit_submenu = function onekit_submenu() {
    var onekit_toggle = document.querySelectorAll('.dropdown-menu a.dropdown-toggle');
    var _loop = function _loop(i: number) {
      onekit_toggle[i].addEventListener('click', function (event) {
        event.stopPropagation();
        event.preventDefault();

        onekit_toggle[i].nextElementSibling?.classList.toggle('show');
        (onekit_toggle[i].parentNode as Element).classList.toggle('show');
      });
      window.addEventListener('mouseup', function (event) {
        if (
          event.target != onekit_toggle[i].nextElementSibling &&
          (event.target as Element).parentNode != onekit_toggle[i].nextElementSibling &&
          (event.target as Element).classList.contains('dropdown-toggle') != true
        ) {
          onekit_toggle[i].nextElementSibling?.classList.remove('show');
          (onekit_toggle[i].parentNode as Element).classList.remove('show');
        }
      });
    };

    for (var i = 0; i < onekit_toggle.length; i++) {
      _loop(i);
    }
  };

  // close if dropdown click
  const close_all_submenu = function close_all_submenu() {
    var dropdown_x = document.querySelectorAll('.navbar-nav > .dropdown');
    var dropdown_submenu_x = document.querySelectorAll('.dropdown-menu li .dropdown-menu');

    var _loop2 = function _loop2(i: number) {
      dropdown_x[i].addEventListener('hide.bs.dropdown', function () {
        for (var j = 0; j < dropdown_submenu_x.length; j++) {
          if (i != j) {
            dropdown_submenu_x[j].classList.remove('show');
            (dropdown_submenu_x[j].parentNode as Element).classList.remove('show');
          }
        }
      });
    };

    for (var i = 0; i < dropdown_x.length; i++) {
      _loop2(i);
    }
  };

  // close submenu
  const close_submenu = function close_submenu() {
    var dropdown_a = document.querySelectorAll(
      '.navbar-nav > .dropdown > .dropdown-menu > .dropdown-submenu > .dropdown-toggle'
    );
    var dropdownMenu_a = document.querySelectorAll('.navbar-nav > .dropdown > .dropdown-menu > li > .dropdown-menu');
    var dropdownSubMenu_a = document.querySelectorAll(
      '.navbar-nav > .dropdown > .dropdown-menu > li > .dropdown-menu > li > .dropdown-menu'
    );

    var _loop2 = function _loop2(i: number) {
      dropdown_a[i].addEventListener('click', function () {
        for (var j = 0; j < dropdownMenu_a.length; j++) {
          if (i != j) {
            (dropdownMenu_a[j].parentNode as Element).classList.remove('show');
            dropdownMenu_a[j].classList.remove('show');
            if (dropdownSubMenu_a[j] === undefined) {
            } else {
              (dropdownSubMenu_a[j].parentNode as Element).classList.remove('show');
              dropdownSubMenu_a[j].classList.remove('show');
            }
          }
        }
      });
    };

    for (var i = 0; i < dropdown_a.length; i++) {
      _loop2(i);
    }
  };

  // close child submenu & dropdown reverse
  const close_child_submenu = function close_child_submenu() {
    var dropdown_b = document.querySelectorAll(
      '.navbar-nav > .dropdown > .dropdown-menu > li > .dropdown-menu > li > .dropdown-toggle'
    );
    var dropdownMenu_b = document.querySelectorAll(
      '.navbar-nav > .dropdown > .dropdown-menu > li > .dropdown-menu > li > .dropdown-menu'
    );

    var _loop3 = function _loop3(i: number) {
      dropdown_b[i].addEventListener('click', function () {
        for (var j = 0; j < dropdownMenu_b.length; j++) {
          if (i != j) {
            if (dropdownMenu_b[j] === undefined) {
            } else {
              (dropdownMenu_b[j].parentNode as Element).classList.remove('show');
              dropdownMenu_b[j].classList.remove('show');
            }
          }
        }
      });

      // dropdown reverse
      dropdown_b[i].addEventListener('mouseenter', function () {
        for (var j = 0; j < dropdownMenu_b.length; j++) {
          var elm = dropdownMenu_b[j] as HTMLElement;
          var rect = elm.getBoundingClientRect();
          var l = rect.left;
          var w = elm.offsetWidth;
          var docW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
          var isEntirelyVisible = l + w;

          if (isEntirelyVisible > docW) {
            elm.classList.add('dropdown-reverse');
          }
        }
      });
    };

    for (var i = 0; i < dropdown_b.length; i++) {
      _loop3(i);
    }
  };

  var ef = document.querySelector('.dropdown-submenu');
  if (ef != null) {
    onekit_submenu();
    close_all_submenu();
    close_submenu();
    close_child_submenu();
  }
};
