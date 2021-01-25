<template>
  <div>
    <h1>{{ repoLink }}</h1>
    <GitGraph :commits="commits" ></GitGraph>
  </div>
</template>

<script>
import GitGraph from "@/components/GitGraph";
import axios from "axios";
import Commit from "@/js/Commit";

export default {
  name: "GitRepo",
  components: {GitGraph},
  data(){
    return {
      commits: null
    }
  },
  props: {
    repoLink: String
  },
  mounted() {
    axios.get("https://api.github.com/repos/" + this.repoLink + "/commits?per_page=100")
        .then((res) => {
          let map = new Map()

          for (let commit of res.data) {
            console.log(commit)
            map.set(commit.sha, new Commit(commit.sha, commit.parents.map((parent) => parent.sha), commit.commit.message))
          }

          this.commits = map
        })
  }
}
</script>

<style scoped>

</style>