<script>
    import { ref } from 'vue'

</script>



<template>
    <div class="header">
        <div class="bg"></div>
        <div class="w">
            <a href="#" class="logo">
                <img src="@/assets/logol.png" alt="">
            </a>
            <nav class="nav-center">
                <RouterLink to="/">主页</RouterLink>
                <RouterLink to="/about">关于我们</RouterLink>
                <RouterLink to="/product">产品介绍</RouterLink>
                <RouterLink to="/contact">联系我们</RouterLink>
            </nav>
        </div>
    </div>
</template>

<style scoped>
.header {
  position: fixed;
  top:0;
  left:0;
  right:0;
  z-index:99;
  height:70px;
}
.header .bg {
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  background-color:rgb(248, 239, 253);
  box-shadow: 1px 1px 2px 1px;
  z-index:1;
}
.header .w{
  max-width: 1280px;
  margin: 0 auto;
  position:relative;
  z-index: 2;
  display:flex;
  align-items: center;
}
.header .logo {
  height:100px;
  width:auto;
}
.logo img {
  width:100%;
  height:100%;
}

.nav-center {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex: 1;
    
    a {
        text-decoration: none;
        color: #333;
        font-size: 16px;
        font-weight: 500;
        padding: 8px 12px;
        border-radius: 4px;
        transition: all 0.3s ease;
        
        &:hover {
            color: #007bff;
            background-color: rgba(0, 123, 255, 0.05);
        }
        
        &.router-link-active {
            color: #007bff;
            font-weight: 600;
        }
    }
}
</style>
