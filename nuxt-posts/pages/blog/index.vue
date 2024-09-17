<template>
    <h1>Blog</h1>
    <article v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
        <NuxtLink  class="blog__button" :to="`/blog/${post.id}`">Go to post</NuxtLink>
    </article> 
</template>

<script setup>
    const { data: posts } = await useFetch('/api/blogs')
</script>

<style lang="scss">
    .blog__button{
        background-color: tomato;
        color: white;
        padding: 10px;
        text-decoration: none;
        display: inline-block;
        margin-top: 10px;
        transition: 0.2s all linear;
        &:hover{
            background-color: #333333;
        }
    }
</style>     