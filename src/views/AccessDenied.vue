<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
        <div class="alert alert-danger shadow-sm" role="alert">
          <h4 class="alert-heading">Access Denied</h4>
          <p class="mb-0">
            You do not have permission to view this page. Please sign in to continue.
          </p>
        </div>

        <div class="d-flex gap-2 justify-content-center">
          <router-link to="/login" class="btn btn-primary">
            Go to Login
          </router-link>
          <router-link to="/" class="btn btn-outline-secondary">
            Back to Home
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
