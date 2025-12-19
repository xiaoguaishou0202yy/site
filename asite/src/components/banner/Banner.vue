<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 视差滚动偏移量
const parallaxOffset = ref(0)

// 监听滚动事件实现视差效果
const handleScroll = () => {
  // 图片滚动速度是文字的 0.5 倍（更慢）
  parallaxOffset.value = window.scrollY * 0.5
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section class="banner">
    <!-- 背景图片层 - 视差滚动 -->
    <div 
      class="banner-bg" 
      :style="{ transform: `translateY(${parallaxOffset}px)` }"
    >
      <img src="@/assets/robots.png" alt="纯视觉智能解决方案">
      <!-- 灰度阴影遮罩 -->
      <div class="banner-overlay"></div>
    </div>
    
    <!-- 文字内容层 - 正常滚动 -->
    <div class="container banner-content">
      <h1 class="banner-title">纯视觉智能解决方案</h1>
      <button class="banner-btn">了解详情</button>
    </div>
  </section>
</template>

<style scoped>
/* Banner 容器 */
.banner {
  position: relative;
  width: 100%;
  height: 600px; /* 🎨 首次使用：Banner 高度 */
  margin-top: 70px; /* Header 高度 */
  overflow: hidden; /* ⭐ 关键：隐藏超出部分，实现视差效果 */
}

/* 背景图片层 - 高度更大以支持视差滚动 */
.banner-bg {
  position: absolute;
  top: -100px; /* ⭐ 向上偏移，为视差滚动预留空间 */
  left: 0;
  width: 100%;
  height: calc(100% + 200px); /* ⭐ 高度增加，确保滚动时不露底 */
  z-index: 1;
  will-change: transform; /* 性能优化 */
}

.banner-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* 灰度阴影遮罩 - 让图片看起来更高级 */
.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.3) 100%
  ); /* ⭐ 修改：降低遮罩深度，从 0.3/0.5 改为 0.1/0.3 */
  backdrop-filter: brightness(0.95) contrast(1.05); /* ⭐ 修改：减轻灰度效果，更亮 */
}

/* 文字内容层 - 使用全局 container 类 */
.banner-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* ⭐ 修改：改为底部对齐 */
  align-items: flex-start; /* 左对齐 */
  padding-bottom: var(--spacing-2xl); /* ⭐ 修改：底部留出边距 */
}

/* 标题样式 */
.banner-title {
  color: #FFFFFF;
  font-size: 64px; /* ⭐ 修改：放大字体，从 3rem 改为 64px */
  font-weight: 700;
  margin-bottom: var(--spacing-lg);
  text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.4); /* ⭐ 修改：增强文字阴影 */
  line-height: 1.2;
  max-width: 800px;
}

/* 按钮样式 */
.banner-btn {
  background-color: var(--primary-color); /* 🎨 使用主色调 */
  color: #FFFFFF;
  font-size: var(--font-size-lg);
  font-weight: 500;
  padding: var(--spacing-sm) var(--spacing-xl); /* 🎨 使用间距变量 */
  border: none;
  border-radius: var(--radius-sm); /* 🎨 使用圆角变量 */
  cursor: pointer;
  transition: all var(--transition-base); /* 🎨 使用过渡变量 */
  box-shadow: 0 4px 12px rgba(210, 105, 30, 0.3);
}

.banner-btn:hover {
  background-color: var(--primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(210, 105, 30, 0.4);
}

.banner-btn:active {
  transform: translateY(0);
}

/* 🎨 响应式设计 - 与全局 container 保持一致 */

/* 中等屏幕 */
@media (max-width: 1200px) {
  .banner {
    height: 500px;
  }
  
  .banner-title {
    font-size: 56px; /* ⭐ 修改：保持较大字体 */
  }
  
  .banner-content {
    padding-bottom: var(--spacing-xl);
  }
}

/* 小屏幕 */
@media (max-width: 1024px) {
  .banner {
    height: 450px;
  }
  
  .banner-title {
    font-size: 48px; /* ⭐ 修改：保持较大字体 */
  }
  
  .banner-btn {
    font-size: var(--font-size-base);
    padding: var(--spacing-xs) var(--spacing-lg);
  }
  
  .banner-content {
    padding-bottom: var(--spacing-lg);
  }
}

/* 平板 */
@media (max-width: 768px) {
  .banner {
    height: 400px;
    margin-top: 70px;
  }
  
  .banner-bg {
    top: -50px;
    height: calc(100% + 100px);
  }
  
  .banner-title {
    font-size: 40px; /* ⭐ 修改：平板仍保持较大字体 */
  }
  
  .banner-content {
    align-items: flex-start; /* ⭐ 修改：平板也保持左对齐 */
    text-align: left; /* ⭐ 修改：左对齐 */
    padding-bottom: var(--spacing-lg);
  }
}

/* 手机 */
@media (max-width: 480px) {
  .banner {
    height: 350px;
  }
  
  .banner-title {
    font-size: 32px; /* ⭐ 修改：手机端放大字体 */
    margin-bottom: var(--spacing-md);
  }
  
  .banner-btn {
    font-size: var(--font-size-sm);
    padding: var(--spacing-xs) var(--spacing-md);
  }
  
  .banner-content {
    padding-bottom: var(--spacing-md);
  }
}
</style>