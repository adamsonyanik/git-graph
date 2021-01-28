import axios from "axios";
import Ref from "@/entities/ref.entity";

export default class GitHubService {

    constructor(owner, repository) {
        this.baseURL = "https://api.github.com";

        this.owner = owner;
        this.repository = repository;
        this.branches = null;
        this.tags = null;
        this.commits = null;

        this._loadBranches();
        this._loadTags();
    }

    async _loadMeta(){
        let url = `https://github.com/${this.owner}/${this.repository}/network/meta`;
        const d = await axios.get(`https://cors-anywhere.herokuapp.com/${url}`, { headers: {'x-requested-with':'XMLHttpRequest'}});
        console.log(d);
    }

    _loadBranches() {
        axios
            .get(`${this.baseURL}/repos/${this.owner}/${this.repository}/git/refs/heads`)
            .then(response => {
                this.branches = response.data.map(ref => new Ref(ref.ref.split("refs/heads/")[1], ref.object.sha))
            });
    }

    _loadTags() {
        axios
            .get(`${this.baseURL}/repos/${this.owner}/${this.repository}/git/refs/tags`)
            .then(response => {
                this.tags = response.data.map(ref => new Ref(ref.ref.split("refs/tags/")[1], ref.object.sha))
            });
    }

}
