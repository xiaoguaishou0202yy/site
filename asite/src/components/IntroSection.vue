<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 视差滚动偏移量
const parallaxOffset = ref(0)

// 监听滚动事件实现视差效果
const handleScroll = () => {
  const section = document.querySelector('.intro-section')
  if (section) {
    const rect = section.getBoundingClientRect()
    const scrollProgress = -rect.top
    // 图片滚动速度是正常的 0.3 倍（更慢）
    parallaxOffset.value = scrollProgress * 0.3
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // 初始化
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section class="intro-section">
    <div class="container intro-container">
      <!-- 左侧图片 - 视差滚动 -->
      <div class="intro-image-wrapper">
        <div 
          class="intro-image" 
          :style="{ transform: `translateY(${parallaxOffset}px)` }"
        >
          <img src="@/assets/demo.jpg" alt="The Leading Bay Area Remodeling Company" />
        </div>
      </div>

      <!-- 右侧文字 - 正常滚动 -->
      <div class="intro-content">
        <h2 class="intro-title">The Leading Bay Area Remodeling Company</h2>
        <p class="intro-description">
          I'm a paragraph. Click here to add your own text and edit me. 
          It's easy. Just click "Edit Text" or double click me to add your 
          own content and make changes to the font.
        </p>
        <button class="intro-btn">More About Us</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Section 容器 */
.intro-section {
  position: relative;
  width: 100%;
  padding: var(--spacing-4xl) 0;
  margin-top: var(--spacing-4xl); /* 与上方 banner 的间距 */
  background-color: var(--color-background);
}

/* Container 内容 - 使用 flex 布局 */
.intro-container {
  display: flex;
  gap: var(--spacing-2xl); /* 图片和文字之间的间隔 */
  align-items: center;
}

/* 左侧图片容器 */
.intro-image-wrapper {
  flex: 1;
  position: relative;
  overflow: hidden;
  height: 600px;
}

/* 图片视差效果 */
.intro-image {
  position: absolute;
  top: -50px;
  left: 0;
  width: 100%;
  height: calc(100% + 100px);
  will-change: transform;
}

.intro-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* 右侧文字内容 */
.intro-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

/* 标题样式 */
.intro-title {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--primary-dark);
  margin: 0;
}

/* 描述文字 */
.intro-description {
  font-size: var(--font-size-base);
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin: 0;
}

/* 按钮样式 */
.intro-btn {
  background-color: var(--primary-dark);
  color: #ffffff;
  font-size: var(--font-size-base);
  font-weight: 500;
  padding: var(--spacing-sm) var(--spacing-xl);
  border: none;
  border-radius: 0;
  cursor: pointer;
  transition: all var(--transition-base);
  align-self: flex-start;
}


.intro-btn:hover {
  background-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.intro-btn:active {
  transform: translateY(0);
}

/* 平板及以下 - 切换为垂直布局 */
@media (max-width: 768px) {
  .intro-container {
    flex-direction: column;
    gap: var(--spacing-xl);
  }

  .intro-image-wrapper {
    width: 100%;
    height: 400px;
  }

  .intro-title {
    font-size: 36px;
  }

  .intro-content {
    gap: var(--spacing-md);
  }
}

/* 手机 - 进一步调整 */
@media (max-width: 480px) {
  .intro-section {
    padding: var(--spacing-2xl) 0;
  }

  .intro-image-wrapper {
    height: 300px;
  }

  .intro-title {
    font-size: 28px;
  }

  .intro-description {
    font-size: var(--font-size-sm);
  }
}
</style>