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
    <!-- 背景图片层 - 视差滚动（全宽） -->
    <div class="banner-bg" :style="{ transform: `translateY(${parallaxOffset}px)` }">
      <div class="container banner-bg-container">
        <img src="@/assets/robots.png" alt="纯视觉智能解决方案" />
        <!-- overlay 放在图片上 -->
        <div class="banner-overlay"></div>
      </div>
    </div>

    <!-- 文字内容层 - 正常滚动（在container内） -->
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
  height: 600px;
  margin-top: 70px;
  overflow: hidden;
}

/* 背景图片层 - 全宽，超出部分隐藏 */
.banner-bg {
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: calc(100% + 200px);
  z-index: 1;
  will-change: transform;
  background-color: var(--color-background);
}

/* 图片容器 - 使用container宽度，但图片是绝对定位的 */
.banner-bg-container {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1200px; /* 和container相同 */
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  padding: 0 var(--container-padding);
}

/* 图片本身 */
.banner-bg img {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* overlay */
.banner-overlay {
  position: absolute;
  top: 0;
  left: var(--container-padding, 80px); /* 需要offset padding */
  width: calc(100% - var(--container-padding, 80px) * 2); /* 减去两边padding */
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%);
  backdrop-filter: brightness(0.95) contrast(1.05);
  z-index: 1;
}

/* 文字内容层 - 使用container */
.banner-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding-bottom: var(--spacing-2xl);
  padding-left: calc(var(--container-padding) + 40px);
  box-sizing: border-box;
}

/* 标题样式 */
.banner-title {
  color: #ffffff;
  font-size: 64px;
  font-weight: 700;
  margin-bottom: var(--spacing-lg);
  text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.4);
  line-height: 1.2;
  max-width: 800px;
}

/* 按钮样式 */
.banner-btn {
  background-color: var(--primary-color); /* 🎨 使用主色调 */
  color: #ffffff;
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

/* 响应式修改： */
/* 中等屏幕 (1200px) */
@media (max-width: 1200px) {
}

/* 小屏幕 (1024px) */
@media (max-width: 1024px) {
}

/* 平板 (768px) */
@media (max-width: 768px) {
}

/* 手机 (480px) */
@media (max-width: 480px) {
}
</style>
