<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link  to="/" class="navbar-brand">Test</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link  to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item active">
                    <router-link  to="/about" class="nav-link">About</router-link>
                </li>
                <!--
                <li class="nav-item active">
                    <router-link  to="/todos" class="nav-link">Todos</router-link>
                </li>
                -->
                <li class="nav-item active">
                    <router-link  to="/users/test" class="nav-link">Auth</router-link>
                </li>                
            </ul>
        </div>
        <hr />
    </nav>
</template>

<script>
export default {
  created () {
    /* console.log('AA') */
  }
}
</script>
