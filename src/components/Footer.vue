<template>
 <footer>
     <div class="container">
         <div class="left">
             <div class="col-1">
                 <router-link class="header" :to="{name: 'home'}">MyBlogs</router-link>
                 <ul>
                     <li>
                         <a href="#"><youTube class="svg-icon"/></a>
                     </li>
                     <li>
                         <a href="#"><twitter class="svg-icon"/></a>
                     </li>
                     <li>
                         <a href="#"><instagram class="svg-icon"/></a>
                     </li>
                     <li>
                         <a href="#"><linkedin class="svg-icon"/></a>
                     </li>
                 </ul>
             </div>
             <div class="col-2">
                 <ul>
                     <router-link class="link" :to="{name: 'home'}">Home</router-link>
                     <router-link class="link" :to="{name: 'blogs'}">Blogs</router-link>
                     <router-link v-if="user" class="link" :to="{name: 'newpost'}">Add New Post</router-link>
                     <router-link v-if="!user" class="link" :to="{name: 'login'}">Login In / Register</router-link>
                 </ul>
             </div>
         </div>
         <div class="right">
             <p>Copyright 2021</p>
         </div>
     </div>
 </footer>
</template>

<script>
import youTube from '@/assets/Icons/youtube-brands.svg'
import twitter from '@/assets/Icons/twitter-brands.svg'
import instagram from '@/assets/Icons/instagram-brands.svg'
import linkedin from '@/assets/Icons/linkedin-brands.svg'
export default {
name: 'footer-vue',
components: {
    youTube,
    twitter,
    instagram,
    linkedin
}
}

</script>
<style lang="scss" scoped>
footer {
    margin-top: auto;
    padding: 100px 25px;
    background-color: rgb(91, 85, 85);
    .container {
        display: flex;
        flex-direction: column;
        gap: 32px;
        @media (min-width: 800px) {
            flex-direction: row;
            gap: 0px;
        }
        >div {
            display: flex;
            flex: 1;
        }
        .left {
            gap: 32px;
            color: rgb(39, 36, 36);
            display: flex;
            flex-direction: column;
            align-items: center;
            @media (min-width: 800px) {
                flex-direction: row;
                align-items: initial;
                gap: 0;
            }
            .header {
                text-align: center;
                font-size: 24px;
                color: khaki;
                text-decoration: none;
                font-weight: 600;
                @media (min-width: 800px) {
                    text-align: initial;
                }
            }
            ul {
                gap: 16px;
                list-style: none;
                display: flex;
            }
            .col-1, .col-2 {
                gap: 32px;
                display: flex;
                flex: 1;
                @media (min-width: 800px) {
                    gap: 0;
                }
            }
            .col-1 {
                flex-direction: column;
                h2 {
                    text-align: center;
                    @media (min-width: 800px) {
                        text-align: initial;
                    }
                }
                ul {
                    margin-top: auto;
                    li {
                        display: flex;
                        align-items: center;
                        .svg-icon {
                            width: 24px;
                            height: auto;
                            color: khaki;
                        }
                    }
                }
            }
            .col-2 {
                ul {
                    height: 100%;
                    justify-content: center;
                    flex-direction: row;
                    flex-wrap: wrap;
                    @media (min-width: 800px) {
                        -ms-flex-direction: column;
                    }
                    .link {
                        font-size: 16px;
                        font-weight: 500;
                        color: lightcoral;
                        text-decoration: none;
                    }
                }
            }
        }
        .right {
            gap: 32px;
            color: lightcoral;
            align-items: center;
            flex-direction: column;
            @media (min-width: 800px) {
                align-items: flex-end;
                gap: 0;
            }
        }
        p {
            margin-top: auto;
        }
    }
}
</style>