<script setup>
import { ref } from 'vue'

// 控制移动端菜单的显示/隐藏
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// 点击链接后关闭移动菜单
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

</script>

<template>
  <header class="header">
    <div class="header-bg"></div>
    <div class="container header-content">
      <a href="/" class="logo">
        <img src="@/assets/logol.png" alt="M&B Remodeling">
      </a>
      
      <!-- 桌面端导航 -->
      <nav class="nav-desktop">
        <RouterLink to="/">主页</RouterLink>
        <RouterLink to="/about">关于我们</RouterLink>
        <RouterLink to="/product">产品介绍</RouterLink>
        <RouterLink to="/contact">联系我们</RouterLink>
      </nav>
      
      <!-- 移动端汉堡菜单按钮 -->
      <button 
        class="hamburger-btn" 
        @click="toggleMobileMenu"
        :class="{ 'active': isMobileMenuOpen }"
        aria-label="菜单"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    
    <!-- 移动端下拉菜单 -->
    <transition name="slide">
      <nav v-if="isMobileMenuOpen" class="nav-mobile">
        <div class="container">
          <RouterLink to="/" @click="closeMobileMenu">主页</RouterLink>
          <RouterLink to="/about" @click="closeMobileMenu">关于我们</RouterLink>
          <RouterLink to="/product" @click="closeMobileMenu">产品介绍</RouterLink>
          <RouterLink to="/contact" @click="closeMobileMenu">联系我们</RouterLink>
        </div>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
/* 固定定位的 header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  height: 140px;
}

/* 背景层 */
.header-bg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: var(--color-background); /* 🎨 首次使用：base.css 中定义的背景色变量 */
  box-shadow: var(--shadow-sm); /* 🎨 首次使用：main.css 中定义的阴影变量 */
  z-index: 1;
}

/* 内容容器 */
.header-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-top: 0; /* 重置垂直 padding */
  padding-bottom: 0;
}

/* Logo 样式 */
.logo {
  height: 100px;
  width: auto;
  display: flex;
  align-items: center;
  margin-right: var(--spacing-lg); /* 🎨 使用：间距变量 */
  flex-shrink: 0;
}

.logo img {
  width: auto;
  height: 100%;
  object-fit: contain;
}

/* 桌面端导航 */
.nav-desktop {
  display: flex;
  align-items: center;
  gap: 40px;
}

.nav-desktop a {
  color: #666666;
  font-size: 15px;
  font-weight: 400;
  padding: 0;
  transition: color var(--transition-base);
  text-decoration: none;
  position: relative;
}

.nav-desktop a:hover {
  color: var(--primary-color);
  background-color: transparent;
}

.nav-desktop a.router-link-active {
  color: var(--primary-color);
  font-weight: 500;
}

.nav-desktop a.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--primary-color);
}

/* 汉堡菜单按钮 - 默认隐藏 */
.hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 3;
}

.hamburger-btn span {
  width: 100%;
  height: 3px;
  background-color: #666666;
  border-radius: 2px;
  transition: all var(--transition-base);
}

/* 汉堡菜单激活状态（变成 X） */
.hamburger-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
  background-color: var(--primary-color);
}

.hamburger-btn.active span:nth-child(2) {
  opacity: 0;
}

.hamburger-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
  background-color: var(--primary-color);
}

/* 移动端导航 - 默认隐藏 */
.nav-mobile {
  display: none;
  position: absolute;
  top: 70px;
  right: 0;
  width: 200px;
  background-color: var(--color-background);
  box-shadow: var(--shadow-md);
  z-index: 2;
}

/* 移动端导航链接 */
.nav-mobile a {
  display: block;
  padding: var(--spacing-md) 0; /* 左右 padding 由 container 提供 */
  color: #666666;
  font-size: 16px;
  text-decoration: none;
  border-bottom: 1px solid #E5E5E5;
  transition: all var(--transition-base);
}

.nav-mobile a:last-child {
  border-bottom: none; /* 最后一项不显示底部边框 */
}

.nav-mobile a:hover {
  color: var(--primary-color);
  padding-left: 10px; /* 轻微缩进效果 */
}

.nav-mobile a.router-link-active {
  color: var(--primary-color);
  font-weight: 500;
}

/* 下拉动画 */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}

.slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

/* 🎨 响应式断点 1: 中等屏幕 (1200px - 1024px) */
@media (max-width: 1200px) {
  .nav-desktop {
    gap: 30px; /* 减小导航项间距 */
  }
}

/* 🎨 响应式断点 2: 小屏幕 (1024px - 768px) */
@media (max-width: 1024px) {
  .nav-desktop {
    gap: var(--spacing-md); /* 进一步减小间距 */
  }
  
  .nav-desktop a {
    font-size: 14px;
  }
}

/* 🎨 响应式断点 3: 平板 (768px 以下) - 显示汉堡菜单 */
@media (max-width: 768px) {
  .logo {
    height: 60px;
  }
  
  /* 隐藏桌面导航 */
  .nav-desktop {
    display: none;
  }
  
  /* 显示汉堡菜单按钮 */
  .hamburger-btn {
    display: flex;
  }
  
  /* 显示移动端导航 */
  .nav-mobile {
    display: block;
  }
}

/* 响应式断点 4: 手机 (480px 以下) */
@media (max-width: 480px) {
  .logo {
    height: 50px;
  }
  
  .nav-mobile a {
    padding: var(--spacing-sm) 0;
    font-size: 15px;
  }
}
</style>