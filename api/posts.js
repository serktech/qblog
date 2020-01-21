import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: 'https://serhiyyarosh.ghost.io',
  key: 'https://serhiyyarosh.ghost.io',
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: 'all',
      include: 'tags,authors'
    })
    .catch( err => {
      console.error(err);
    })

}
