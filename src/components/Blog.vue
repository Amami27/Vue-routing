<template>
  <div>
    <div v-for="(article, index) in newsArticle" :key="index">
      <h1>{{article.title}}</h1>
      <h3>{{article.author}}</h3>
      <p>{{article.description}}</p>
      <img :src="article.urlToImage"  alt="">
      <article>
        <p>{{article.publishedAt}}</p>
        <a :href="article.url" target="_blank">Read more</a>
      </article>
    </div>
  </div>
</template>
<script>
export default {
  name: "BlogPost",
  data() {
    return {
      newsArticle: []
    };
  },
  mounted() {
    this.$http
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=4fdc629110dd4d289874f897d1c480bc"
      )
      .then(response => {
        this.newsArticle = response.data.articles;
      });
  }
};
</script>