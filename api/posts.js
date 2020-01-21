import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "https://serhiyyarosh.ghost.io",
  key: "c86707177789af8ef6e903cc66",
  version: "v2"
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
      include: "tags,authors"
    })
    .catch( err => {
      console.error(err);
    })

}
