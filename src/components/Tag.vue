<template>
    <el-tag :type="type">{{ text }}</el-tag>
</template>

<script>
export default {
    name: "Tag",
    props: {
        text: "",
        type: ""
    }
}
</script>

<style scoped>
.el-tag {
    margin: 5px;
    font-size: 0.9rem;
    font-weight: bold;
}
</style>