function createNavbar() {
    const nav = document.createElement('nav');
    nav.className = 'navbar navbar-expand-lg navbar-dark bg-transparent p-3';

    const container = document.createElement('div');
    container.className = 'container-fluid';

    const brand = document.createElement('a');
    brand.className = 'navbar-brand d-flex flex-row justify-content-center align-items-center';
    brand.href = '#';

    const brandImg = document.createElement('img');
    brandImg.src = './pages/imgs/assa.png';
    brandImg.alt = '';
    brandImg.className = 'nav-logo';
    brand.appendChild(brandImg);

    const toggler = document.createElement('button');
    toggler.className = 'navbar-toggler';
    toggler.type = 'button';
    toggler.setAttribute('data-bs-toggle', 'collapse');
    toggler.setAttribute('data-bs-target', '#navbarNav');
    toggler.setAttribute('aria-controls', 'navbarNav');
    toggler.setAttribute('aria-expanded', 'false');
    toggler.setAttribute('aria-label', 'Toggle navigation');
    const togglerIcon = document.createElement('span');
    togglerIcon.className = 'navbar-toggler-icon';
    toggler.appendChild(togglerIcon);

    const collapse = document.createElement('div');
    collapse.className = 'collapse navbar-collapse';
    collapse.id = 'navbarNav';

    const navList = document.createElement('ul');
    navList.className = 'navbar-nav d-flex justify-content-around w-100';

    // Helper function to create a nav item
    function createNavItem(href, text, isDropdown = false, dropdownItems = []) {
        const navItem = document.createElement('li');
        navItem.className = 'nav-item' + (isDropdown ? ' dropdown' : '');

        const navLink = document.createElement('a');
        navLink.className = 'nav-link' + (isDropdown ? ' dropdown-toggle' : '');
        navLink.href = href;
        navLink.innerText = text;
        if (isDropdown) {
            navLink.id = 'navbarDropdownMenuLink' + Math.random().toString(36).substr(2, 9); // Generate unique id
            navLink.setAttribute('role', 'button');
            navLink.setAttribute('data-bs-toggle', 'dropdown');
            navLink.setAttribute('aria-expanded', 'false');

            const dropdownMenu = document.createElement('ul');
            dropdownMenu.className = 'dropdown-menu';
            dropdownMenu.setAttribute('aria-labelledby', navLink.id);

            dropdownItems.forEach(item => {
                const dropdownItem = document.createElement('li');
                const dropdownLink = document.createElement('a');
                dropdownLink.className = 'dropdown-item';
                dropdownLink.href = item.href;
                dropdownLink.innerText = item.text;
                dropdownItem.appendChild(dropdownLink);
                dropdownMenu.appendChild(dropdownItem);
            });

            navItem.appendChild(navLink);
            navItem.appendChild(dropdownMenu);
        } else {
            navLink.className += ' active';
            navLink.setAttribute('aria-current', 'page');
            navItem.appendChild(navLink);
        }

        return navItem;
    }

    // Add nav items
    navList.appendChild(createNavItem('/index.html', 'Home'));
    navList.appendChild(createNavItem('/pages/main-pages/about.html', 'About Us', true, [
        { href: '/pages/about-pages/company.html', text: 'Company' },
        { href: '/pages/about-pages/provider.html', text: 'Provider' },
        { href: '/pages/about-pages/implant.html', text: 'Implant' },
    ]));
    navList.appendChild(createNavItem('/pages/main-pages/specialities.html', 'Specialities', true, [
        { href: '/pages/specs-pages/hip.html', text: 'Hip' },
        { href: '/pages/specs-pages/knee.html', text: 'Knee' },
        { href: '/pages/specs-pages/shoulder.html', text: 'Shoulder' },
        { href: '/pages/specs-pages/cervical.html', text: 'Cervical' },
        { href: '/pages/specs-pages/lumbar.html', text: 'Lumbar' },
        { href: '/pages/specs-pages/thorax.html', text: 'Thorax' },
        { href: '/pages/specs-pages/trauma.html', text: 'Trauma' },
        { href: '/pages/specs-pages/general_orthopedics.html', text: 'General Orthopedics' },
        { href: '/pages/specs-pages/joint_replacement.html', text: 'Joint Replacement' },
    ]));
    navList.appendChild(createNavItem('/pages/main-pages/locations.html', 'Locations'));
    navList.appendChild(createNavItem('/pages/main-pages/news.html', 'News'));
    navList.appendChild(createNavItem('#', 'Patient Resources', true, [
        { href: '/pages/patient-pages/insurances.html', text: 'Insurances' },
        { href: '/pages/patient-pages/videos.html', text: 'Videos' },
    ]));
    navList.appendChild(createNavItem('/pages/main-pages/contact.html', 'Contact Us'));

    collapse.appendChild(navList);
    container.appendChild(brand);
    container.appendChild(toggler);
    container.appendChild(collapse);
    nav.appendChild(container);

    // Insert the navbar into the container
    document.getElementById('nav').appendChild(nav);
}

// Call the function to create and insert the navbar
createNavbar();
