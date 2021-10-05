<template>
  <div class="home">
    <!-- 在父组件里定义POST属性，并把相关数据传递给子组件 -->
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost.vue'
export default {
  name: "Home",
  components: {
    BlogPost
  },
  data() {
    return {
      welcomeScreen: {
        title: 'Welcome',
        blogPost: 'abc',
        welcomeScreen: true,
        photo: 'database1'
      },
      sampleBlogPost: [
        {
          title: 'this is title1',
          blogHTML: 'this is post title',
          blogCoverPhoto: 'database'
        },
        {
          title: 'this is title2',
          blogHTML: 'this is post title',
          blogCoverPhoto: 'functions'
        }
      ]
    }
  }
};
</script>
