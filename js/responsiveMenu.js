
$('nav').hcOffcanvasNav({
    disableAt: 1200,
    insertClose: true,
    insertBack: true,
    labelClose: 'Close',
    labelBack: 'Back',
    levelTitleAsBack: true,
    pushContent: false,
    position: 'left',
    // width & height
    width: 280,
    height: 'auto',

    // enable swipe gestures
    swipeGestures: true,

    // initialize the menu in expanded mode
    expanded: false,

    // overlap / expand / none
    levelOpen: 'overlap',

    // in pixels
    levelSpacing: 40,

    // shows titles for submenus
    levelTitles: false,

    // close sub levels when the nav closes
    closeOpenLevels: true,

    // clear active levels when the nav closes
    closeActiveLevel: false,

    // the title of the first level
    navTitle: null,

    // extra CSS class(es)
    navClass: '',

    // disable body scroll
    disableBody: false,

    // close the nav on click
    closeOnClick: true,

    // custom toggle element
    customToggle: null,

    // prepend or append the menu to body
    bodyInsert: 'prepend',

    // should original menus and their items classes be preserved or excluded.
    keepClasses: true,

    // remove original menu from the DOM
    removeOriginalNav: false,

    // enable RTL mode
    rtl: false
});