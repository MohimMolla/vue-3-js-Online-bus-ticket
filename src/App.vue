<script setup>
import { RouterLink, RouterView } from "vue-router";
import logo from "./assets/logo.svg";
</script>

<template>
  <div class="container">
    <header>
      <nav class="navbar navbar-expand-lg bg-body-dark text-light">
        <div class="container-fluid bg-success-subtle text-body-secondary">
          <!-- <a class="navbar-brand" href="#">Navbar</a> -->
          <RouterLink class="navbar-brand" to="/">
            <img
              class="logo"
              src="https://thumbs.dreamstime.com/z/modern-bus-symbol-modern-bus-symbol-stylized-icon-logo-emblem-template-98354255.jpg"
              alt=""
            />
          </RouterLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
                <RouterLink class="nav-link active" to="/">Home</RouterLink>
              </li>

              <li class="nav-item">
                <!-- <a class="nav-link" href="#">Link</a> -->
                <RouterLink class="nav-link" to="/about">About</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/contact">Contact Us</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/bus">Bus service</RouterLink>
              </li>
              <!-- <li class="nav-item">
              <RouterLink class="nav-link" to="/bus2">Bus 2 service</RouterLink>
            </li> -->
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact Us</RouterLink>
      </nav> -->
    </header>
    <hr />
    <h1 class="text-center text-success">Wellcome To Our Online Ticket Service</h1>
    <RouterView />
  </div>
    <!-- Remove the container if you want to extend the Footer to full width. -->
    <div class="container my-5">
      <!-- Footer -->
      <footer
        class="text-center text-lg-start text-dark"
        style="background-color: #eceff1"
      >
        <!-- Section: Social media -->
        <section
          class="d-flex justify-content-between p-4 text-white"
          style="background-color: #21d192"
        >
          <!-- Left -->
          <div class="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          <!-- Left -->

          <!-- Right -->
          <div>
            <a href="" class="text-white me-4">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-github"></i>
            </a>
          </div>
          <!-- Right -->
        </section>
        <!-- Section: Social media -->

        <!-- Section: Links  -->
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <!-- Grid row -->
            <div class="row mt-3">
              <!-- Grid column -->
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <!-- Content -->
                <h6 class="text-uppercase fw-bold">Company name</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style="width: 60px; background-color: #7c4dff; height: 2px"
                />
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <!-- Links -->
                <h6 class="text-uppercase fw-bold">Products</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style="width: 60px; background-color: #7c4dff; height: 2px"
                />
                <p>
                  <a href="#!" class="text-dark">MDBootstrap</a>
                </p>
                <p>
                  <a href="#!" class="text-dark">MDWordPress</a>
                </p>
                <p>
                  <a href="#!" class="text-dark">BrandFlow</a>
                </p>
                <p>
                  <a href="#!" class="text-dark">Bootstrap Angular</a>
                </p>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <!-- Links -->
                <h6 class="text-uppercase fw-bold">Useful links</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style="width: 60px; background-color: #7c4dff; height: 2px"
                />
                <p>
                  <a href="#!" class="text-dark">Your Account</a>
                </p>
                <p>
                  <a href="#!" class="text-dark">Become an Affiliate</a>
                </p>
                <p>
                  <a href="#!" class="text-dark">Shipping Rates</a>
                </p>
                <p>
                  <a href="#!" class="text-dark">Help</a>
                </p>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <!-- Links -->
                <h6 class="text-uppercase fw-bold">Contact</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style="width: 60px; background-color: #7c4dff; height: 2px"
                />
                <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
                <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </div>
              <!-- Grid column -->
            </div>
            <!-- Grid row -->
          </div>
        </section>
        <!-- Section: Links  -->

        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
          © 2020 Copyright:
          <a class="text-dark" href="">MDBootstrap.com</a>
        </div>
        <!-- Copyright -->
      </footer>
      <!-- Footer -->
    </div>
    <!-- End of .container -->

</template>

<style scoped>
.logo {
  width: 80px;
}

/* Style for the navigation links */
.nav-item {
  margin-right: 15px;
}
.text-light {
  color: blanchedalmond;
}

.nav-link {
  color: #333;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
}

.nav-link:hover {
  color: #ff6600; /* Change this to your desired hover color */
}

/* Style for the search button */
.btn-outline-success {
  border-color: #ff6600; /* Change this to your desired button border color */
  color: #ff6600;
}

.btn-outline-success:hover {
  background-color: #ff6600; /* Change this to your desired hover background color */
  color: #fff;
}

/* Animation for the navigation bar */
.navbar {
  animation: fadeInDown 0.5s ease-out;
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
