<template>
  <div>
    <h2>GitGraph</h2>
    <pre v-for="commit in graph" :key="commit.sha">{{ commit.sha + " " + commit.message }}</pre>
  </div>
</template>

<script>
export default {
name: "GitGraph",
  data(){
    return {
    }
  },
  props:{
    commits: Map,
  },
  computed: {
    graph: function () {
      if (!this.commits) return []

      let graph = []

      let commit = this.commits.get("10a170df290f0afb19e9e433e7a2cbdab8154410")
      if (!commit) {
        console.error("no start commit")
        return []
      }

      do {
        graph.push(commit)
        commit = this.commits.get(commit.parents[0])
      } while(commit && commit.parents.length > 0)

      if (commit){
        graph.push(commit)
      }

      return graph
    }
  }
}
</script>

<style scoped>

</style>