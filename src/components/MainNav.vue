<template>
    <nav role="navigation">
        <div class="nav-wrapper">
            <h1><a href="#" class="brand-logo">Liquibase GUI</a></h1>
            <ul class="menu">
                <li><a href="#">Navbar Link</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'MainNav'
    }
</script>

<style>
    nav {
        overflow: hidden;
        margin-bottom: 26px;
    }
    nav a {
        color: black;
        text-decoration: none;
    }
    nav a:hover {
        text-decoration: underline;
    }
    nav ul.menu {
        list-style: none;
    }
    nav ul.menu li {
        float: left;
    }
</style>