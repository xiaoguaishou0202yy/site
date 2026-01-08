<script setup>
import { ref, onMounted } from 'vue'

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  // 表单验证
  if (!formData.value.firstName || !formData.value.lastName || !formData.value.email || !formData.value.subject || !formData.value.message) {
    alert('请填写所有必填项')
    return
  }
  
  console.log('表单数据:', formData.value)
  alert('提交成功！我们会尽快与您联系。')
  
  // 清空表单
  formData.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    subject: '',
    message: ''
  }
}

// 高德地图初始化
onMounted(() => {
  // 动态加载高德地图API
  const script = document.createElement('script')
  script.src = 'https://webapi.amap.com/maps?v=2.0&key=YOUR_AMAP_KEY' // 请替换为您的高德地图key
  script.onload = initMap
  document.head.appendChild(script)
})

const initMap = () => {
  // 创建地图实例
  const map = new AMap.Map('map-container', {
    zoom: 16,
    center: [120.738, 31.315], // 苏州工业园区坐标,请根据实际地址调整
    mapStyle: 'amap://styles/light'
  })

  // 添加标记
  const marker = new AMap.Marker({
    position: [120.738, 31.315],
    title: '苏州纳米技术国家大学科技园'
  })

  map.add(marker)

  // 添加信息窗体
  const infoWindow = new AMap.InfoWindow({
    content: '<div style="padding: 10px;">苏州工业园区淞北路333号<br/>苏州纳米技术国家大学科技园二期A1幢702室</div>'
  })

  marker.on('click', () => {
    infoWindow.open(map, marker.getPosition())
  })
}
</script>

<template>
  <div class="contact-page">
    <!-- 主要内容区 -->
    <div class="contact-container">
      <!-- 左侧信息 -->
      <div class="left-section">
        <h1 class="main-title">让我们一起探讨您的下一个项目</h1>
        <p class="subtitle">填写表单,或致电我们<br/>预约免费上门咨询。</p>

        <div class="info-blocks">
          <div class="info-block">
            <h3>服务区域:</h3>
            <p>苏州、上海、南京、杭州</p>
          </div>

          <div class="info-block">
            <p>苏州工业园区淞北路333号<br/>苏州纳米技术国家大学科技园二期A1幢702室</p>
          </div>

          <div class="info-block">
            <p>contact@unomove.com</p>
          </div>

          <div class="info-block">
            <p>000-0000-0000</p>
          </div>
        </div>
      </div>

      <!-- 右侧表单 -->
      <div class="right-section">
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-row">
            <div class="form-group">
              <label>名 *</label>
              <input 
                v-model="formData.firstName" 
                type="text" 
                required
              >
            </div>
            <div class="form-group">
              <label>姓 *</label>
              <input 
                v-model="formData.lastName" 
                type="text" 
                required
              >
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>邮箱 *</label>
              <input 
                v-model="formData.email" 
                type="email" 
                required
              >
            </div>
            <div class="form-group">
              <label>电话</label>
              <div class="phone-input">
                <select class="country-code">
                  <option value="+86">🇨🇳</option>
                </select>
                <input 
                  v-model="formData.phone" 
                  type="tel"
                >
              </div>
            </div>
          </div>

          <div class="form-group full-width">
            <label>地址</label>
            <input 
              v-model="formData.address" 
              type="text"
            >
          </div>

          <div class="form-group full-width">
            <label>主题</label>
            <input 
              v-model="formData.subject" 
              type="text"
            >
          </div>

          <div class="form-group full-width">
            <label>留言</label>
            <textarea 
              v-model="formData.message" 
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" class="submit-btn">提交</button>
        </form>
      </div>
    </div>

    <!-- 地图部分 -->
    <div class="map-section">
      <div id="map-container" class="map-container"></div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  width: 100%;
  background-color: var(--color-background);
  min-height: 100vh;
}

/* 主容器 */
.contact-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 40px;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 80px;
  align-items: start;
}

/* 左侧信息区 */
.left-section {
  color: #2c3e50;
}

.main-title {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 30px;
  color: #1a1a1a;
}

.subtitle {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  margin-bottom: 60px;
}

.info-blocks {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.info-block h3 {
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.info-block p {
  font-size: 15px;
  line-height: 1.8;
  color: #666;
}

/* 右侧表单区 */
.right-section {
  background-color: var(--color-background);
  padding: 0;
}

.contact-form {
  width: 100%;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  margin-bottom: 20px;
}

.form-group label {
  font-size: 13px;
  color: #666;
  margin-bottom: 8px;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 0;
  border: none;
  border-bottom: 1px solid #ddd;
  font-size: 15px;
  color: #333;
  background-color: transparent;
  transition: border-color 0.3s;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-bottom-color: #1a1a1a;
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
}

/* 电话输入特殊样式 */
.phone-input {
  display: flex;
  gap: 10px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 12px;
}

.country-code {
  border: none;
  background-color: transparent;
  font-size: 15px;
  cursor: pointer;
  outline: none;
  padding: 0;
}

.phone-input input {
  flex: 1;
  border: none;
  border-bottom: none;
  padding: 0;
}

/* 提交按钮 */
.submit-btn {
  width: 100%;
  padding: 18px;
  background-color: #1a1a1a;
  border: none;
  border-radius: 0;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.submit-btn:hover {
  background-color: #333;
}

/* 地图部分 */
.map-section {
  width: 100%;
  height: 500px;
  margin-top: 0;
}

.map-container {
  width: 100%;
  height: 100%;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .contact-container {
    grid-template-columns: 1fr;
    gap: 60px;
    padding: 60px 30px;
  }

  .main-title {
    font-size: 40px;
  }
}

@media (max-width: 768px) {
  .contact-container {
    padding: 40px 20px;
  }

  .main-title {
    font-size: 32px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .map-section {
    height: 400px;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 28px;
  }

  .subtitle {
    font-size: 14px;
  }

  .contact-container {
    padding: 30px 15px;
  }

  .map-section {
    height: 300px;
  }
}
</style>