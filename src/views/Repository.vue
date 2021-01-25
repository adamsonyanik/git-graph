<template>
  <div>
    <h1>Branches</h1>
    <div v-if="gitService && gitService.branches">
      <pre v-for="branch in gitService.branches" :key="branch.name">{{ branch.name }}</pre>
    </div>
    <div v-else>Loading...</div>

    <h1>Tags</h1>
    <div v-if="gitService && gitService.tags">
      <pre v-for="tag in gitService.tags" :key="tag.name">{{ tag.name }}</pre>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import GitHubService from "@/services/github.service";

export default {
  name: "Repository",
  data() {
    return {
      gitService: null
    }
  },
  mounted() {
    this.gitService = new GitHubService(this.$route.params.owner, this.$route.params.repository);
  }
}
</script>

<style scoped>

</style>