<template>
	<aside class="sidebar-left border-right bg-white shadow" id="leftSidebar" data-simplebar>
        <a href="#" class="btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3" data-toggle="toggle">
          <i class="fe fe-x"><span class="sr-only"></span></i>
        </a>
        <nav class="vertnav navbar navbar-light">
          <!-- nav bar -->
          <div class="w-100 mb-4 d-flex">
            <a class="navbar-brand mx-auto mt-2 flex-fill text-center" href="./index.html">
              <svg version="1.1" id="logo" class="navbar-brand-img brand-sm" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 120" xml:space="preserve">
                <g>
                  <polygon class="st0" points="78,105 15,105 24,87 87,87 	" />
                  <polygon class="st0" points="96,69 33,69 42,51 105,51 	" />
                  <polygon class="st0" points="78,33 15,33 24,15 87,15 	" />
                </g>
              </svg>
            </a>
          </div>
          <ul class="navbar-nav flex-fill w-100 mb-2">
            <li class="nav-item dropdown">
              <a href="#dashboard" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
                <i class="fe fe-book fe-16"></i>
                <span class="ml-3 item-text">Books</span><span class="sr-only">(current)</span>
              </a>
              <ul class="collapse list-unstyled pl-4 w-100" id="dashboard">
                <li class="nav-item">
                  <router-link class="nav-link pl-3" to="/store/book_create"><span class="ml-1 item-text">Add book</span></router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link pl-3" to="/store/books"><span class="ml-1 item-text">View Books</span></router-link>
                </li>
              </ul>
            </li>
          </ul>
          <ul class="navbar-nav flex-fill w-100 mb-2">
            <li class="nav-item dropdown">
              <a href="#ui-elements" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
                <i class="fe fe-box fe-16"></i>
                <span class="ml-3 item-text">Genres</span>
              </a>
              <ul class="collapse list-unstyled pl-4 w-100" id="ui-elements">
                <li class="nav-item">
                  <router-link class="nav-link pl-3" to="/store/genre_create"><span class="ml-1 item-text">Add genre</span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link pl-3" to="/store/genres"><span class="ml-1 item-text">View genre</span></router-link>
                </li>
              </ul>
            </li>
            <!-- <li class="nav-item w-100">
              <a class="nav-link" href="widgets.html">
                <i class="fe fe-layers fe-16"></i>
                <span class="ml-3 item-text">Widgets</span>
                <span class="badge badge-pill badge-primary">New</span>
              </a>
            </li> -->
            <li class="nav-item dropdown">
              <a href="#forms" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
                <i class="fe fe-credit-card fe-16"></i>
                <span class="ml-3 item-text">Authors</span>
              </a>
              <ul class="collapse list-unstyled pl-4 w-100" id="forms">
                <li class="nav-item">
                  <router-link class="nav-link pl-3" to="/store/author_create"><span class="ml-1 item-text">Add authors</span></router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link pl-3" to="/store/authors"><span class="ml-1 item-text">View authors</span></router-link>
                </li>
              </ul>
            </li>
          </ul>
          <ul class="navbar-nav flex-fill w-100 mb-2">
            <li class="nav-item dropdown">
              <a href="#profile" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
                <i class="fe fe-user fe-16"></i>
                <span class="ml-3 item-text">Profile</span>
              </a>
              <ul class="collapse list-unstyled pl-4 w-100" id="profile">
                <a class="nav-link pl-3" href="./profile.html"><span class="ml-1">Overview</span></a>
                <a class="nav-link pl-3" href="./profile-settings.html"><span class="ml-1">Settings</span></a>
                <a class="nav-link pl-3" href="./profile-security.html"><span class="ml-1">Security</span></a>
                <a class="nav-link pl-3" href="./profile-notification.html"><span class="ml-1">Notifications</span></a>
              </ul>
            </li>
          </ul>
          <!-- <div class="btn-box w-100 mt-4 mb-1">
            <button type="button" class="btn mb-2 btn-primary btn-lg btn-block">
              <i class="fe fe-shopping-cart fe-12 mr-2"></i><span class="small">Buy now</span>
            </button>
          </div> -->
        </nav>
      </aside>
</template>