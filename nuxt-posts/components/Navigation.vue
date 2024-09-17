<template>
    <nav class="navigation">
        <NuxtLink to="/">Home</NuxtLink><br/>
        <NuxtLink to="/blog">Blog</NuxtLink>
    </nav>
</template>
<style lang="scss">
    .navigation {
        background-color: #f0f0f0;
        display: flex;
        padding: 10px;
        a{
            color: #333333;
            margin-right: 10px;
            text-decoration: none;
        }
    }
</style>