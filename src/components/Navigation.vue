<template>
 <header>
     <nav class="container">
         <div class="branding">
             <!-- look base on name of components -->
             <router-link class="header" :to="{name: 'Home'}">MyBlogs</router-link>
         </div>
         <div class="nav-link">
             <ul v-show="!mobile">
                 <router-link class="link" to="#">Home</router-link>
                 <router-link class="link" to="#">Blogs</router-link>
                 <router-link class="link" to="#">Add New Post</router-link>
                 <router-link class="link" to="#">Login/Register</router-link>
             </ul>
         </div>
     </nav>
     <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile"/>
     <transition name="mobile-nav">
         <ul class="mobile-nav" v-show="mobileNav">
            <router-link class="link" to="#">Home</router-link>
            <router-link class="link" to="#">Blogs</router-link>
            <router-link class="link" to="#">Add New Post</router-link>
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
    },
    data() {
        return {
            mobile: null,
            mobileNav: null,
            windowWidth: null
        }
    },
    created() {
        window.addEventListener('resize', this.checkScreen)
        this.checkScreen()
    },
    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth
            if(this.windowWidth <= 750) {
                this.mobile = true
                return
            }
            this.mobile = false
            this.mobileNav = false
            return
        },
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav
        }
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
        transition: 0.3s color ease;
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
                .link:last-child {
                    margin-right: 0;
                }
            }
        }
    }
    .menu-icon {
        cursor: pointer;
        position: absolute;
        top: 32px;
        right: 25px;
        height: 25px;
        width: auto;
    }
    .mobile-nav {
        padding: 20px;
        width: 70%;
        max-width: 250px;
        display: flex;
        flex-direction: column;
        position: fixed;
        height: 100%;
        background-color: rgb(59, 64, 63);
        top: 0;
        left: 0;
        .link {
            padding: 15px 0;
            color: aquamarine;
        }
    }
    .mobile-nav-enter-active, .mobile-nav-leave-active {
        transition: all 0.5s ease;
    }
    .mobile-nav-enter {
        transform: translateX(-250px);
    }
    .mobile-nav-enter-to {
        transform: translateX(0)
    }
    .mobile-nav-leave-to {
        transform: translateX(-250px);
    }
}
</style>