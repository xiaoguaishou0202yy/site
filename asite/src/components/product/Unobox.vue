<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentFeatureIndex = ref(0)

const features = [
  {
    id: 'unpilot',
    title: 'UnoPilot纯视觉导航系统',
    subtitle: '',
    description: [
      '手推车、固定翼。仅靠平面图。GPS地磁整至手绘图即可实现跨场景全面大范围导航能导航。',
      'UnoPilot为多种传感器配置提供灵活适用导航方案：阿克曼转向底盘、全向移动底盘等导航底盘。'
    ],
    image: '/src/assets/fetch.png'
  },
  {
    id: 'unoarm',
    title: 'UnoArm视觉机械臂操作',
    subtitle: '',
    description: [
      'UnoArm基于纯视觉技术，以深棉测的运动学模型和动态反馈制间。实现机械臂在复杂环境中执行高精度操作。'
    ],
    image: '/src/assets/fetch.png'
  },
  {
    id: 'fullbody',
    title: '全身协同控制',
    subtitle: '',
    description: [
      '我们致力于打造集感知、决策、执行于一体的完整机器人智能系统。通过整合多模块能力推动机器人智能化演进，深耕高价值细分场景助推一线真实物理载体。造代优化Unobox，成为具身智能的核心基座。'
    ],
    image: '/src/assets/fetch.png'
  }
]

let featuresSection = null

const handleScroll = () => {
  if (!featuresSection) return
  
  const rect = featuresSection.getBoundingClientRect()
  const windowHeight = window.innerHeight
  
  // 当板块进入视口时开始计算
  if (rect.top <= 100 && rect.bottom >= windowHeight) {
    // 计算滚动进度
    const scrollProgress = Math.abs(rect.top - 100) / (rect.height - windowHeight)
    const newIndex = Math.min(
      Math.floor(scrollProgress * features.length),
      features.length - 1
    )
    currentFeatureIndex.value = Math.max(0, newIndex)
  }
}

onMounted(() => {
  featuresSection = document.querySelector('.features-scroll-section')
  window.addEventListener('scroll', handleScroll)
  handleScroll() // 初始化检查
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="unobox-page">
    <!-- 第一部分：产品介绍 -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content">
            <h1 class="hero-title">UnoBox通用智能决策模块</h1>
            <div class="hero-text">
              <p>我们为移动机器人构建了完整的认知决策系统，赋予其媲美人类的视觉感知能力。</p>
              <p>在传感器数据融合作用下，主控集成到各类机器人本体，充当其"眼睛"和"大脑"，借助这套系统，机器人能够在大规模复杂环境中自主导航，并完成精准的机械臂操作任务。</p>
            </div>
          </div>
          <div class="hero-video">
            <video controls autoplay muted loop>
              <source src="@/assets/unoboxv.mp4" type="video/mp4">
              您的浏览器不支持视频播放。
            </video>
          </div>
        </div>
      </div>
    </section>

    <!-- 分隔标语区域 -->
    <section class="tagline-section">
      <div class="tagline-content">
        <h2>移动机器人的AI大脑</h2>
        <p>赋予机器人和人类一样的智能决策能力</p>
        <p>纯视觉智能解决方案 · 细分场景系统集成</p>
      </div>
    </section>

    <!-- 第二部分：滚动展示功能模块 -->
    <section class="features-scroll-section">
      <div class="features-sticky-wrapper">
        <div class="container">
          <div class="features-grid">
            <!-- 左侧：文字内容 -->
            <div class="features-content">
              <div 
                v-for="(feature, index) in features" 
                :key="feature.id"
                class="feature-text"
                :class="{ active: currentFeatureIndex === index }"
              >
                <h3>{{ feature.title }}</h3>
                <h4 v-if="feature.subtitle">{{ feature.subtitle }}</h4>
                <p v-for="(desc, i) in feature.description" :key="i">{{ desc }}</p>
              </div>
            </div>

            <!-- 右侧：图片展示 -->
            <div class="features-image-container">
              <div 
                v-for="(feature, index) in features" 
                :key="`img-${feature.id}`"
                class="feature-image"
                :class="{ active: currentFeatureIndex === index }"
              >
                <img :src="feature.image" :alt="feature.title">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 第三部分：技术规格 -->
    <section class="specs-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">UNOBOX - "即插即用"AI大脑</h2>
          <h3 class="section-subtitle">机器人通用控制器</h3>
        </div>

        <div class="specs-grid">
          <!-- 左侧：高性能边缘AI架构 -->
          <div class="specs-card">
            <h3 class="specs-title">高性能边缘AI架构</h3>
            <ul class="specs-list">
              <li>支持NVIDIA Jetson Orin，高通QCS8490等主流智能处理器 X86芯片。可根据实际应用场景灵活切换算力配置</li>
              <li>搭载高通骁龙QCS32F407 MCU，专责供跟踪与运维时序控制</li>
              <li>4GB LPDDR4内存 + 64GB eMMC存储。运行嵌入式Linux系统。保证高效处理流程多支持</li>
              <li>丰富I/O接口：多路模拟头（MIPI、AIHD、FAKRA）、CAN FD、RS232/RS485、UART、USB 3.0等工业标准接口</li>
            </ul>

            <div class="product-image">
              <img src="@/assets/detail1.png" alt="UnoBox设备">
              <p class="image-caption">UnoBox硬主机外形<br>比iphone 17 Air更小巧</p>
            </div>
          </div>

          <!-- 右侧：多相机融合与精确同步 -->
          <div class="specs-card">
            <h3 class="specs-title">多相机融合与精确同步</h3>
            <ul class="specs-list">
              <li>高密度相机接口：支持6-12路相机通道，可灵活配AHD、FAKRA等多种接口方式组合</li>
              <li>多规格传感器兼容：全面兼容4K AHD、8MP MIPI、2MP MIPI、2MP AHD等主流图像传感器</li>
              <li>精准时间同步：通过FSYNC硬件同步信号、PPS脉冲、CAN FD、NTP网络时间协议及GNSS差分定位系统实现微秒级多传感器同步</li>
            </ul>

            <div class="diagram-image">
              <img src="@/assets/detail2.png" alt="UnoBox结构图">
            </div>
          </div>
        </div>

        <!-- 底部：产品参数 - 横向四列 -->
        <div class="specs-highlights">
          <div class="highlight-card">
            <div class="highlight-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h4>精巧体积</h4>
            <p>110 × 72 × 24.7mm 超紧凑尺寸，采用双层铝合金外壳与高效散热片设计</p>
          </div>

          <div class="highlight-card">
            <div class="highlight-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h4>低功耗设计</h4>
            <p>待机功耗&lt;5W，满载功耗&lt;30W。保证长时间续航工作</p>
          </div>

          <div class="highlight-card">
            <div class="highlight-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" stroke-width="2"/>
                <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <h4>宽温工作能力</h4>
            <p>-30℃至+70℃工业级工作温度范围</p>
          </div>

          <div class="highlight-card">
            <div class="highlight-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.27002 6.96L12 12.01L20.73 6.96" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 22.08V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h4>多元应用场景</h4>
            <p>内置定制协议栈与虚拟设备功能。专为自主清洁车、工业无人机及智慧城市感知系统等边缘计算场景优化</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.unobox-page {
  width: 100%;
  background-color: var(--color-background);
}

/* 英雄区域 */
.hero-section {
  padding: var(--spacing-4xl) 0;
  background-color: var(--color-background);
}

.hero-grid {
  display: flex;
  gap: var(--spacing-3xl);
  align-items: center;
  min-height: 70vh;
}

.hero-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.hero-title {
  font-size: 48px;
  font-weight: 700;
  color: var(--primary-dark);
  line-height: 1.3;
  margin: 0;
}

.hero-text p {
  font-size: var(--font-size-base);
  line-height: 1.8;
  color: var(--color-text-secondary);
  margin: 0 0 var(--spacing-md) 0;
}

.hero-video {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-video video {
  width: 100%;
  height: auto;
  display: block;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  pointer-events: none; /* 防止用户点击视频 */
}

/* 分隔标语区域 */
.tagline-section {
  width: 100%;
  padding: var(--spacing-3xl) 0;
  background-color: var(--primary-dark);
  text-align: center;
}

.tagline-content h2 {
  font-size: 36px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 var(--spacing-md) 0;
}

.tagline-content p {
  font-size: var(--font-size-lg);
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 var(--spacing-xs) 0;
}

.tagline-content p:last-child {
  margin: 0;
}

/* 滚动功能展示区域 */
.features-scroll-section {
  min-height: 300vh;
  background-color: var(--color-background);
  position: relative;
}

.features-sticky-wrapper {
  position: sticky;
  top: 100px;
  padding: var(--spacing-4xl) 0;
}

.features-grid {
  display: flex;
  gap: var(--spacing-3xl);
  align-items: center;
  min-height: 80vh;
}

.features-content {
  flex: 1;
  position: relative;
  min-height: 500px;
}

.feature-text {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-30%);
  transition: opacity var(--transition-base), 
              visibility var(--transition-base),
              transform var(--transition-base);
}

.feature-text.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(-50%);
  z-index: 2;
}

.feature-text h3 {
  font-size: 42px;
  font-weight: 700;
  color: var(--primary-dark);
  margin: 0 0 var(--spacing-sm) 0;
}

.feature-text h4 {
  font-size: 24px;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 var(--spacing-md) 0;
}

.feature-text p {
  font-size: var(--font-size-base);
  line-height: 1.8;
  color: var(--color-text-secondary);
  margin: 0 0 var(--spacing-sm) 0;
}

.feature-text p:last-child {
  margin: 0;
}

.features-image-container {
  flex: 1;
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
}

.feature-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.8s ease, visibility 0.8s ease;
}

.feature-image.active {
  opacity: 1;
  visibility: visible;
  z-index: 2;
}

.feature-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* 技术规格区域 */
.specs-section {
  padding: var(--spacing-4xl) 0;
  background-color: #f8f9fa;
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.section-title {
  font-size: 40px;
  font-weight: 700;
  color: var(--primary-dark);
  margin: 0 0 var(--spacing-md) 0;
}

.section-subtitle {
  font-size: 24px;
  font-weight: 500;
  color: var(--color-text-secondary);
  margin: 0;
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-3xl);
}

.specs-card {
  background-color: #ffffff;
  padding: var(--spacing-xl);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.specs-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.specs-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--primary-dark);
  margin: 0 0 var(--spacing-lg) 0;
  padding-bottom: var(--spacing-sm);
  border-bottom: 2px solid var(--primary-color);
}

.specs-list {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--spacing-lg) 0;
}

.specs-list li {
  font-size: var(--font-size-base);
  line-height: 1.8;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-sm);
  padding-left: 20px;
  position: relative;
}

.specs-list li::before {
  content: "•";
  color: var(--primary-color);
  font-size: 20px;
  position: absolute;
  left: 0;
  top: -2px;
}

.product-image,
.diagram-image {
  text-align: center;
  margin-top: var(--spacing-lg);
}

.product-image img,
.diagram-image img {
  width: 100%;
  height: auto;
  display: block;
}

.image-caption {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-top: var(--spacing-sm);
}

/* 产品亮点 - 横向四列 */
.specs-highlights {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
}

.highlight-card {
  padding: var(--spacing-xl);
  text-align: center;
  transition: transform var(--transition-base);
}

.highlight-card:hover {
  transform: translateY(-4px);
}

.highlight-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto var(--spacing-md);
  color: var(--primary-color);
}

.highlight-icon svg {
  width: 100%;
  height: 100%;
}

.highlight-card h4 {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--primary-dark);
  margin: 0 0 var(--spacing-sm) 0;
}

.highlight-card p {
  font-size: var(--font-size-sm);
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin: 0;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .hero-grid,
  .features-grid {
    flex-direction: column;
    gap: var(--spacing-2xl);
  }

  .specs-grid {
    grid-template-columns: 1fr;
  }

  .specs-highlights {
    grid-template-columns: repeat(2, 1fr);
  }

  .hero-title {
    font-size: 36px;
  }

  .features-scroll-section {
    min-height: auto;
  }

  .features-sticky-wrapper {
    position: relative;
    top: 0;
  }

  .features-content {
    min-height: auto;
  }

  .feature-text {
    position: relative;
    top: 0;
    transform: none;
    margin-bottom: var(--spacing-lg);
    opacity: 1;
    visibility: visible;
  }

  .features-image-container {
    height: 400px;
  }
}

@media (max-width: 768px) {
  .hero-section,
  .specs-section {
    padding: var(--spacing-2xl) 0;
  }

  .tagline-section {
    padding: var(--spacing-2xl) 0;
  }

  .tagline-content h2 {
    font-size: 28px;
  }

  .tagline-content p {
    font-size: var(--font-size-base);
  }

  .hero-title {
    font-size: 32px;
  }

  .hero-text p {
    font-size: var(--font-size-sm);
  }

  .feature-text h3 {
    font-size: 32px;
  }

  .feature-text h4 {
    font-size: 20px;
  }

  .section-title {
    font-size: 32px;
  }

  .section-subtitle {
    font-size: 20px;
  }

  .features-image-container {
    height: 300px;
  }

  .specs-highlights {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 28px;
  }

  .tagline-content h2 {
    font-size: 24px;
  }

  .feature-text h3 {
    font-size: 28px;
  }

  .section-title {
    font-size: 28px;
  }
}
</style>