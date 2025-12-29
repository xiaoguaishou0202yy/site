<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logisticImage from '@/assets/logistic.jpeg'
import toiletImage from '@/assets/toilet.jpeg'
import spotImage from '@/assets/spot.jpeg'
import unoboxImage from '@/assets/unoboxgrey.png'

// 视差滚动偏移量
const parallaxOffset = ref(0)

const aboutContent = ref({
  title: '关于我们',
  description:
    '优诺智行（苏州）科技有限公司成立于2024年5月，注册资本500万元，是一家专业从事具身智能机器人"大脑"认知系统及整体解决方案研发与产业化的高科技企业，荣获苏州工业园区科技领军人才和姑苏创新创业领军人才政策支持。公司凭借极具壁垒的纯视觉弱地图解决方案，采用"需求驱动"的商业模式，注重细分场景的技术落地与市场占领,目前聚焦于无人物流车、棕榈采摘机器人、外立面清洁等应用场景。',
})

const visionContent = ref({
  title: '我们的愿景',
  description:
    '致力于成为具身智能领域的领先企业，通过创新的视觉技术和智能解决方案，推动机器人产业的发展与变革。我们坚持以客户需求为导向，持续深耕垂直应用场景，为各行业提供高效、可靠的智能化解决方案，助力产业升级与数字化转型。',
})

const scenarios = ref([
  {
    title: '移动机器人场景',
    description:
      '为移动机器人提供智能导航与路径规划解决方案，基于纯视觉弱地图技术，实现精准定位与自主避障，广泛应用于无人物流车、配送机器人等领域。',
    image: logisticImage,
  },
  {
    title: '操作机器人场景',
    description:
      '专注于操作机器人的视觉感知与智能控制系统，为棕榈采摘、工业装配等场景提供高精度的视觉识别与操作控制解决方案，提升作业效率与安全性。',
    image: toiletImage,
  },
  {
    title: '机器狗适配场景',
    description:
      '为四足机器人提供地形感知与运动控制技术，适配复杂地形环境，实现稳定行走与灵活避障，应用于巡检、探测等多样化场景。',
    image: spotImage,
  },
  {
    title: '具身大脑提供商',
    description:
      '作为具身智能核心技术提供商，我们为各类机器人平台提供完整的认知系统解决方案，包括感知、决策、控制等核心模块，赋能机器人智能化升级。',
    image: unoboxImage,
  },
])

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
  <section class="about-section page-section">
    <div class="container">
      <!-- 第一段文字 -->
      <div class="text-container">
        <h2 class="about-title">{{ aboutContent.title }}</h2>
        <p class="about-description">{{ aboutContent.description }}</p>
      </div>
    </div>

    <!-- 全宽图片容器 - 固定高度的容器 -->
    <div class="full-width-image-container">
      <div class="full-width-image" :style="{ transform: `translateY(${parallaxOffset}px)` }">
        <img src="@/assets/fetch.png" alt="公司形象" />
      </div>
    </div>

    <div class="container">
      <!-- 第二段文字 -->
      <div class="text-container">
        <h2 class="about-title">{{ visionContent.title }}</h2>
        <p class="about-description">{{ visionContent.description }}</p>
      </div>
    </div>

    <!-- 应用场景模块 - 4列2行布局，每列内图片文字交替 -->
    <div class="scenarios-section">
      <div class="scenarios-grid">
        <!-- 第1列：文字在上，图片在下 -->
        <div class="scenario-column">
          <div class="scenario-text-card">
            <h3 class="scenario-title">{{ scenarios[0].title }}</h3>
            <p class="scenario-description">{{ scenarios[0].description }}</p>
          </div>
          <div class="scenario-image-card">
            <img :src="scenarios[0].image" :alt="scenarios[0].title" />
          </div>
        </div>

        <!-- 第2列：图片在上，文字在下 -->
        <div class="scenario-column">
          <div class="scenario-image-card">
            <img :src="scenarios[1].image" :alt="scenarios[1].title" />
          </div>
          <div class="scenario-text-card">
            <h3 class="scenario-title">{{ scenarios[1].title }}</h3>
            <p class="scenario-description">{{ scenarios[1].description }}</p>
          </div>
        </div>

        <!-- 第3列：文字在上，图片在下 -->
        <div class="scenario-column">
          <div class="scenario-text-card">
            <h3 class="scenario-title">{{ scenarios[2].title }}</h3>
            <p class="scenario-description">{{ scenarios[2].description }}</p>
          </div>
          <div class="scenario-image-card">
            <img :src="scenarios[2].image" :alt="scenarios[2].title" />
          </div>
        </div>

        <!-- 第4列：图片在上，文字在下 -->
        <div class="scenario-column">
          <div class="scenario-image-card">
            <img :src="scenarios[3].image" :alt="scenarios[3].title" />
          </div>
          <div class="scenario-text-card">
            <h3 class="scenario-title">{{ scenarios[3].title }}</h3>
            <p class="scenario-description">{{ scenarios[3].description }}</p>
          </div>
        </div>
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

/* 全宽图片外层容器 - 增加高度 */
.full-width-image-container {
  width: 100%;
  height: 700px; /* 从 500px 增加到 700px */
  margin-top: var(--spacing-4xl);
  margin-bottom: var(--spacing-4xl);
  overflow: hidden;
  position: relative;
}

/* 全宽图片 - 在容器内部进行视差滚动 */
.full-width-image {
  width: 100%;
  height: 100%;
  position: relative;
  will-change: transform;
}

.full-width-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* 应用场景模块 */
.scenarios-section {
  width: 100%;
  margin-top: var(--spacing-4xl);
  background-color: #ffffff;
  padding: 0;
}

.scenarios-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4列 */
  gap: 0;
  width: 100%;
}

.scenario-column {
  display: flex;
  flex-direction: column;
}

/* 文字卡片 */
.scenario-text-card {
  width: 100%;
  min-height: 280px;
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #e8e8e8;
}

/* 图片卡片 */
.scenario-image-card {
  width: 100%;
  height: 350px;
  overflow: hidden;
  background-color: #d0d0d0;
}

.scenario-image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.3s ease;
}

.scenario-image-card:hover img {
  transform: scale(1.05);
}

.scenario-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
  line-height: 1.3;
}

.scenario-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin: 0;
  max-width: 95%;
}

/* 大屏幕 */
@media (min-width: 1440px) {
  .scenario-image-card {
    height: 400px;
  }

  .scenario-text-card {
    min-height: 300px;
  }

  .scenario-title {
    font-size: 1.75rem;
  }

  .scenario-description {
    font-size: var(--font-size-base);
  }
}

/* 笔记本 */
@media (max-width: 1280px) {
  .scenario-image-card {
    height: 320px;
  }

  .scenario-text-card {
    min-height: 260px;
    padding: var(--spacing-lg);
  }
}

/* 平板 */
@media (max-width: 1024px) {
  .about-title {
    font-size: 2.5rem;
  }

  .full-width-image-container {
    height: 550px;
  }

  /* 改为 2列 */
  .scenarios-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .scenario-image-card {
    height: 300px;
  }

  .scenario-text-card {
    min-height: 240px;
  }

  .scenario-title {
    font-size: 1.35rem;
  }

  .scenario-description {
    font-size: var(--font-size-sm);
  }
}

/* 平板小屏 */
@media (max-width: 768px) {
  .about-section {
    padding: var(--spacing-3xl) 0;
  }

  .about-title {
    font-size: 2rem;
    margin-bottom: var(--spacing-lg);
  }

  .about-description {
    font-size: var(--font-size-base);
  }

  .full-width-image-container {
    height: 400px;
    margin-top: var(--spacing-3xl);
    margin-bottom: var(--spacing-3xl);
  }

  /* 改为单列 */
  .scenarios-grid {
    grid-template-columns: 1fr;
  }

  .scenario-image-card {
    height: 280px;
  }

  .scenario-text-card {
    min-height: 200px;
  }

  .scenario-title {
    font-size: 1.25rem;
  }
}

/* 手机 */
@media (max-width: 480px) {
  .about-title {
    font-size: 1.75rem;
  }

  .about-description {
    font-size: var(--font-size-sm);
    line-height: 1.7;
  }

  .full-width-image-container {
    height: 300px;
  }

  .scenario-image-card {
    height: 250px;
  }

  .scenario-text-card {
    min-height: 180px;
    padding: var(--spacing-md);
  }

  .scenario-title {
    font-size: 1.15rem;
    margin-bottom: var(--spacing-xs);
  }

  .scenario-description {
    font-size: 0.85rem;
    line-height: 1.5;
  }

  .scenarios-section {
    margin-top: var(--spacing-3xl);
  }
}
</style>
