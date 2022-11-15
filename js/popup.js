;(function() {
    var body = document.querySelector('body');

    var closestItemByClass = function(item, className) {
        var node = item;

        while(node) {
            if(node.classList.contains(className)) {
                return node;
            }

            node = node.parentElement;
        }

        return null;
    };

    var closestAttr = function(item, attr) {
        var node = item;

        while(node) {
            var attrValue = node.getAttribute(attr);
            if (attrValue) {
                return attrValue;
            }

            node = node.parentElement;
        }

        return null;
    };

    var showPopup = function(target) {
        target.classList.add('disactive');
    };

    var showMenu = function(target) {
        target.classList.add('active');
    };

    var closeMenu = function(target) {
        target.classList.remove('active');
    };

    var hideBtn = function(target) {
        target.classList.add('disactive');
    };
    
    var showBtn = function(target) {
        target.classList.remove('disactive');
    };

    var showThemeMenu = function(target) {
        target.classList.add('active');
    };

    var hideThemeMenu = function(target) {
        target.classList.remove('active');
    };

    body.addEventListener('click', function(e) {
        var target = e.target;
        var popupClass = target.getAttribute('data-popup');

        if (popupClass == null) {
            return null;
        }

        e.preventDefault();
        var popup = document.querySelector('.' + popupClass);

        if (popup) {
            showPopup(popup);
        }

        console.log(popup)
    });
    
    body.addEventListener('click', function(e) {
        var target = e.target;
        var menuClass = target.getAttribute('data-menu');

        if (menuClass == null) {
            return null;
        }

        e.preventDefault();
        var menu = document.querySelector('.' + menuClass);

        if (menu) {
            showMenu(menu);
            hideBtn(btnOpenMenu);
            showBtn(btnCloseMenu);
        }

        console.log(menu)
    });
    
    body.addEventListener('click', function(e) {
        var target = e.target;
        var popupClass = target.getAttribute('data-themes');

        if (popupClass == null) {
            return null;
        }

        e.preventDefault();
        var menuThemePopup = document.querySelector('.' + popupClass);

        if (menuThemePopup) {
            showThemeMenu(menuThemePopup);
        }

        console.log(menuThemePopup)
    });

    body.addEventListener('click', function(e) {
        var target = e.target;
        if (target.classList.contains('header_btn_close_box') || 
            target.classList.contains('header_btn_close')) {
            
            var menu = closestItemByClass(target, 'header');

            closeMenu(menu);
            hideBtn(btnCloseMenu);
            showBtn(btnOpenMenu);
        };
    });

    body.addEventListener('click', function(e) {
        var target = e.target;
        if (target.classList.contains('menu_theme_btn_close_box') || 
            target.classList.contains('menu_theme_btn_close')) {
            
            var menuThemePopup = closestItemByClass(target, 'menu_themes');

            hideThemeMenu(menuThemePopup);
        };
    });
    
    body.addEventListener('keydown', function(e) {
        if (e.keyCode !== 27); {
            return;
        }

    });
    

    // function showSecondPopupFunc () {
    //     secondPopup.classList.add('activeSecondPopup')
    // }
    
    var menuThemePopup = document.querySelector('.menu_themes');
    var secondPopup = document.querySelector('.second_popup');
    var popup = document.querySelector('.popup.active');
    var menu = document.querySelector('.header');
    var btnOpenMenu = document.querySelector('.header_btn_open_box');
    var btnCloseMenu = document.querySelector('.header_btn_close_box');

    // export {showSecondPopupFunc};
})();
