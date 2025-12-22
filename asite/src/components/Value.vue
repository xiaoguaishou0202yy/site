<script setup>
import { ref } from 'vue'

const features = ref([
  {
    title: '纯视觉方案',
    description: "I'm a paragraph. Click here to add your own text."
  },
  {
    title: '灵活高效部署',
    description: "I'm a paragraph. Click here to add your own text."
  },
  {
    title: '智能化解决方案',
    description: "I'm a paragraph. Click here to add your own text."
  },
  {
    title: '有趣的合作伙伴',
    description: "I'm a paragraph. Click here to add your own text."
  }
])
</script>

<template>
  <section class="why-choose-us page-section">
    <div class="container">
      <!-- 标题 -->
      <h2 class="section-title">Why Choose Us</h2>

      <!-- 特性网格 -->
      <div class="features-grid">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="feature-card"
        >
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Section 容器 */
.why-choose-us {
  width: 100%;
  padding: var(--spacing-4xl) 0;
  background-color: var(--color-background);
}

/* 标题样式 */
.section-title {
  font-size: 3rem; /* 48px */
  font-weight: 700;
  text-align: center;
  color: var(--color-text);
  margin-bottom: var(--spacing-4xl);
  line-height: 1.2;
}

/* 特性网格 */
.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-2xl);
}

/* 特性卡片 */
.feature-card {
  text-align: center;
  padding: var(--spacing-lg);
}

/* 特性标题 */
.feature-title {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: var(--spacing-md);
  line-height: 1.3;
}

/* 特性描述 */
.feature-description {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
}

/* 平板 - 2列布局 */
@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-xl);
  }

  .section-title {
    font-size: 2.5rem; /* 40px */
    margin-bottom: var(--spacing-3xl);
  }
}

/* 平板小屏 */
@media (max-width: 768px) {
  .why-choose-us {
    padding: var(--spacing-3xl) 0;
  }

  .section-title {
    font-size: 2rem; /* 32px */
    margin-bottom: var(--spacing-2xl);
  }

  .features-grid {
    gap: var(--spacing-lg);
  }

  .feature-card {
    padding: var(--spacing-md);
  }
}

/* 手机 - 单列布局 */
@media (max-width: 480px) {
  .features-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .section-title {
    font-size: 1.75rem; /* 28px */
  }

  .feature-title {
    font-size: var(--font-size-lg);
  }

  .feature-description {
    font-size: var(--font-size-sm);
  }
}
</style>