<script setup>
import { ref } from 'vue'

const aboutContent = ref({
  title: '关于我们',
  description: '优诺智行（苏州）科技有限公司成立于2024年5月，注册资本500万元，是一家专业从事具身智能机器人"大脑"认知系统及整体解决方案研发与产业化的高科技企业，荣获苏州工业园区科技领军人才和姑苏创新创业领军人才政策支持。公司凭借极具壁垒的纯视觉弱地图解决方案，采用"需求驱动"的商业模式，注重细分场景的技术落地与市场占领,目前聚焦于无人物流车、棕榈采摘机器人、外立面清洁等应用场景。'
})

const visionContent = ref({
  title: '我们的愿景',
  description: '致力于成为具身智能领域的领先企业，通过创新的视觉技术和智能解决方案，推动机器人产业的发展与变革。我们坚持以客户需求为导向，持续深耕垂直应用场景，为各行业提供高效、可靠的智能化解决方案，助力产业升级与数字化转型。'
})

// 图片路径 - 请替换为实际图片路径
const imageUrl = ref('/path-to-your-image.jpg')
</script>

<template>
  <section class="about-section page-section">
    <div class="container">
      <!-- 第一段文字 -->
      <div class="text-container">
        <h2 class="about-title">{{ aboutContent.title }}</h2>
        <p class="about-description">{{ aboutContent.description }}</p>
      </div>

      <!-- 全宽图片 -->
      <div class="full-width-image">
        <img :src="imageUrl" alt="公司形象" />
      </div>

      <!-- 第二段文字 -->
      <div class="text-container">
        <h2 class="about-title">{{ visionContent.title }}</h2>
        <p class="about-description">{{ visionContent.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Section 容器 */
.about-section {
  width: 100%;
  padding: var(--spacing-4xl) 0;
  background-color: var(--color-background);
}

/* 文字容器 - 使用专门的文字边距 */
.text-container {
  padding: 0 var(--text-padding);
  text-align: center;
}

/* 标题样式 */
.about-title {
  font-size: 3rem; /* 48px */
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--spacing-xl);
  line-height: 1.2;
}

/* 描述文字 */
.about-description {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin: 0;
  max-width: 100%;
}

/* 全宽图片容器 */
.full-width-image {
  width: 100vw;
  height: 500px;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-top: var(--spacing-4xl);
  margin-bottom: var(--spacing-4xl);
  overflow: hidden;
}

.full-width-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* 平板 */
@media (max-width: 1024px) {
  .about-title {
    font-size: 2.5rem; /* 40px */
  }

  .full-width-image {
    height: 400px;
  }
}

/* 平板小屏 */
@media (max-width: 768px) {
  .about-section {
    padding: var(--spacing-3xl) 0;
  }

  .about-title {
    font-size: 2rem; /* 32px */
    margin-bottom: var(--spacing-lg);
  }

  .about-description {
    font-size: var(--font-size-base);
  }

  .full-width-image {
    height: 300px;
    margin-top: var(--spacing-3xl);
    margin-bottom: var(--spacing-3xl);
  }
}

/* 手机 */
@media (max-width: 480px) {
  .about-title {
    font-size: 1.75rem; /* 28px */
  }

  .about-description {
    font-size: var(--font-size-sm);
    line-height: 1.7;
  }

  .full-width-image {
    height: 250px;
  }
}
</style>