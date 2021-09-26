<template>
 <header>
     <nav class="container">
         <div class="branding">
             <!-- look base on name of components -->
             <router-link class="header" :to="{name: 'Home'}">FireBlogs</router-link>
         </div>
         <div class="nav-link">
             <ul>
                 <router-link class="link" to="#">Home</router-link>
                 <router-link class="link" to="#">Blogs</router-link>
                 <router-link class="link" to="#">Create New Post</router-link>
                 <router-link class="link" to="#">Login/Register</router-link>
             </ul>
         </div>
     </nav>
     <menuIcon class="menu-icon"/>
     <transition name="mobile-nav">
         <ul>
            <router-link class="link" to="#">Home</router-link>
            <router-link class="link" to="#">Blogs</router-link>
            <router-link class="link" to="#">Create New Post</router-link>
            <router-link class="link" to="#">Login/Register</router-link>
         </ul>
     </transition>
 </header>
</template>

<script>
import menuIcon from '@/assets/Icons/bars-regular.svg'
export default {
    name: 'navigation',
    components: {
        menuIcon
    }

}

</script>
<style lang="scss" scoped>
header {
    background-color: rgb(190, 202, 196);
    padding: 0 25px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    z-index: 99;
    link {
        font-weight: 500;
        padding: 0 8px;
        transition: .3s color ease;
        &:hover {
            color: rgb(70, 138, 111)
        }
    }
    nav {
        display: flex;
        padding: 25px 0;
        .branding {
            display: flex;
            align-items: center;
            .header {
                font-weight: 600;
                font-size: 24px;
                color: black;
                text-decoration: none;
            }
        }
        .nav-link {
            position: relative;
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: flex-end;
            ul {
                margin-right: 32px;
                .link {
                    margin-right: 32px;
                }
            }
        }
    }
}
</style>