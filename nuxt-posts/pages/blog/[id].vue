<template>
    <h1>Blog detail</h1>
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
</template>

<script setup>
    const route = useRoute()
    const { data: post } = await useFetch(() => "/api/blogs/" + route.params.id)
</script>