<template>
  <div>
    <input placeholder="Owner" v-model="owner"/>
    <input placeholder="Repository" v-model="repository">
    <button @click="gotoRepo()">OK</button>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Home",
  data() {
    return {
      owner: null,
      repository: null
    }
  },
  methods: {
    gotoRepo() {
      router.push(`/${this.owner}/${this.repository}`);
    }
  }
}
</script>