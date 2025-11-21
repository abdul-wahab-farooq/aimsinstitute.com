const openAuthModalBtn = $('#open-auth-modal');
const closeAuthModalBtn = $('#close-auth-modal');
const authModal = $(".auth-modal-container");
const toggleAuthModeBtn = $(".toggle-auth-mode");
const authTabs = $(".auth-tab");
const openMobileNavBtn = $("#open-mobile-nav");
const closeMobileNavBtn = $("#close-mobile-nav");
const mobileNav = $("#mobile-nav");

const openAuthModal = () => {
    authModal.removeClass("hidden");
};

const closeAuthModal = () => {
    authModal.addClass("hidden");
};

const toggleAuthMode = (e) => {
    e.preventDefault();

    const clickedBtn = $(e.currentTarget);
    const tabIndex = clickedBtn.data("tab-index");

    $(".toggle-btn-container .toggle-auth-mode").removeClass("active");
    $(`.toggle-btn-container .toggle-auth-mode[data-tab-index="${tabIndex}"]`).addClass("active");

    authTabs.addClass("hidden");
    $(`.auth-tab[data-tab="${tabIndex}"]`).removeClass("hidden");
};

const toggleMobileNav = (e) => {
    e.preventDefault();

    if (mobileNav.hasClass("show-mobile-menu")) {
        mobileNav.removeClass("show-mobile-menu");
    } else {
        mobileNav.addClass("show-mobile-menu");
    }
}

$(openMobileNavBtn).on("click", toggleMobileNav)
$(closeMobileNavBtn).on("click", toggleMobileNav)
$(toggleAuthModeBtn).on('click', toggleAuthMode);
$(closeAuthModalBtn).on('click', closeAuthModal);
$(openAuthModalBtn).on('click', openAuthModal);