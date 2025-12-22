<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="unobox-page">
    <!-- 第一部分：UnoBox通用智能决策模块 -->
    <section class="section page-section">
      <div class="section-content">
        <div class="section-header">
          <h2 class="section-title">UnoBox通用智能决策模块</h2>
        </div>
        
        <div class="intro-grid">
          <div class="intro-image">
            <img src="@/assets/unoboxgrey.png" alt="UnoBox主机">
          </div>
          <div class="intro-image">
            <img src="@/assets/unoboxgrey.png" alt="UnoBox电路板">
          </div>
        </div>

        <div class="intro-text">
          <p>我们为移动机器人构建了完整的认知决策系统，赋予其媲美人类的视觉感知能力。</p>
          <p>在传感器数据融合作用下，主控集成到各类机器人本体，充当其"眼睛"和"大脑"，借助这套系统，机器人能够在大规模复杂环境中自主导航，并完成精准的机械臂操作任务。</p>
        </div>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <img src="@/assets/fetch.png" alt="UnoPilot">
            </div>
            <h3>UnoPilot</h3>
            <h4>纯视觉驾驶地图导航</h4>
            <p>手推车、固定翼。仅靠平面图。GPS地磁整至手绘图即可实现跨场景全面大范围导航能导航。</p>
            <p>UnoPilot为多种传感器配置提供灵活适用导航方案：阿克曼转向底盘、全向移动底盘等导航底盘。</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <img src="@/assets/fetch.png" alt="UnoArm">
            </div>
            <h3>UnoArm</h3>
            <h4>纯视觉机械臂操作</h4>
            <p>UnoArm基于纯视觉技术，以深棉测的运动学模型和动态反馈制间。实现机械臂在复杂环境中执行高精度操作。</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <img src="@/assets/fetch.png" alt="全身协同控制">
            </div>
            <h3>全身协同控制</h3>
            <p>我们致力于打造集感知、决策、执行于一体的完整机器人智能系统。通过整合多模块能力推动机器人智能化演进，深耕高价值细分场景助推一线真实物理载体。造代优化Unobox，成为具身智能的核心基座。</p>
          </div>
        </div>

        <div class="ai-brain">
          <h2>移动机器人的AI大脑</h2>
          <p>赋予机器人和人类一样的智能决策能力</p>
          <p>纯视觉智能解决方案 细分场景系统集成</p>
        </div>
      </div>
    </section>

    <!-- 第二部分：UNOBOX技术规格 -->
    <section class="section section-specs">
      <div class="section-content">
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

        <!-- 底部：产品参数 -->
        <div class="specs-footer">
          <ul class="specs-features">
            <li><strong>精巧体积：</strong>110 × 72 × 24.7mm 超紧凑尺寸，采用双层铝合金外壳与高效散热片设计</li>
            <li><strong>低功耗设计：</strong>待机功耗<5W，满载功耗<30W。保证长时间续航工作</li>
            <li><strong>宽温工作能力：</strong>-30℃至+70℃工业级工作温度范围</li>
            <li><strong>多元应用场景：</strong>内置定制协议栈与虚拟设备功能。专为减速损、耗、自主清洁车、工业无人机及智慧城市感知系统等边缘计算场景优化。适配各种体体、商业化应用场景广泛</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.unobox-page {
  width: 100%;
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
}

.section {
  width: 100%;
  padding: 80px 0;
}

.section-intro {
  background: linear-gradient(135deg, #f0f3ff 0%, #cacaca 100%);
  color: #fff;
}

.section-specs {
  background: linear-gradient(135deg, #ffffff 0%, #abffed 100%);
  color: #fff;
}

.section-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 15px;
  background: rgba(255, 255, 255, 0.95);
  color: #2c3e50;
  padding: 15px 40px;
  border-radius: 50px;
  display: inline-block;
}

.section-subtitle {
  font-size: 28px;
  font-weight: 600;
  margin-top: 10px;
  color: #fff;
}

/* 介绍区域 */
.intro-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 40px;
}

.intro-image {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.intro-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.intro-text {
  text-align: center;
  margin-bottom: 60px;
  font-size: 18px;
  line-height: 1.8;
}

.intro-text p {
  margin-bottom: 15px;
}

/* 功能卡片 */
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 60px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
}

.feature-icon {
  width: 100%;
  height: 180px;
  margin-bottom: 20px;
  border-radius: 12px;
  overflow: hidden;
}

.feature-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.feature-card h3 {
  font-size: 24px;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 8px;
}

.feature-card h4 {
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 15px;
}

.feature-card p {
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 10px;
  text-align: left;
}

/* AI大脑部分 */
.ai-brain {
  text-align: center;
  padding: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  margin-top: 40px;
}

.ai-brain h2 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 15px;
}

.ai-brain p {
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 8px;
}

/* 技术规格区域 */
.specs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-bottom: 50px;
}

.specs-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 40px;
  color: #2c3e50;
}

.specs-title {
  font-size: 22px;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 3px solid #667eea;
}

.specs-list {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
}

.specs-list li {
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 15px;
  padding-left: 20px;
  position: relative;
}

.specs-list li::before {
  content: "●";
  color: #667eea;
  font-size: 12px;
  position: absolute;
  left: 0;
  top: 2px;
}

.product-image {
  text-align: center;
  margin-top: 30px;
}

.product-image img {
  width: 80%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
}

.image-caption {
  font-size: 13px;
  color: #666;
  line-height: 1.6;
}

.diagram-image {
  text-align: center;
  margin-top: 30px;
}

.diagram-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

/* 底部特性列表 */
.specs-footer {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 40px;
  color: #2c3e50;
}

.specs-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.specs-features li {
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 15px;
  padding-left: 20px;
  position: relative;
}

.specs-features li::before {
  content: "▶";
  color: #667eea;
  font-size: 12px;
  position: absolute;
  left: 0;
  top: 2px;
}

.specs-features strong {
  color: #667eea;
  font-weight: 600;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: 1fr;
  }

  .specs-grid {
    grid-template-columns: 1fr;
  }

  .intro-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 60px 0;
  }

  .section-content {
    padding: 0 20px;
  }

  .section-title {
    font-size: 28px;
    padding: 12px 30px;
  }

  .section-subtitle {
    font-size: 22px;
  }

  .intro-text {
    font-size: 16px;
  }

  .ai-brain h2 {
    font-size: 26px;
  }

  .ai-brain p {
    font-size: 16px;
  }
}
</style>