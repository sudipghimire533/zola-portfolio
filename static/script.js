function expand_sidebar(sidebar) {
    sidebar.classList.remove('w-0');
    sidebar.classList.add('w-screen');
    sidebar.classList.add('lg:w-full')
}

function collapse_sidebar(sidebar) {
    sidebar.classList.add("w-0");
    sidebar.classList.remove("lg:w-full");
    sidebar.classList.remove("w-screen");
}

window.onload = function(event) {
    // If the something have anchor name #sidebar do not clack with it
    // So specify ith body prefix
    let sidebar = document.querySelector('body > #sidebar');
    let expand_sidebar_btn = sidebar.querySelector('#expand_sidebar');
    let collapse_sidebar_btn = sidebar.querySelector('#collapse_sidebar');

    let toggle_function = function() {
        let expanded = sidebar.offsetWidth > 0;
        if ( expanded ) {
            collapse_sidebar(sidebar);
        } else {
            expand_sidebar(sidebar);
        }
    };

    // Both button does basically same function that is to toggle the width of sidebar
    expand_sidebar_btn.onclick = toggle_function;
    collapse_sidebar_btn.onclick = toggle_function;
};
