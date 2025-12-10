<script setup>
import { ref } from 'vue'

const formData = ref({
  subject: '',
  name: '',
  phone: '',
  email: '',
  message: ''
})

const submitForm = () => {
  // 表单验证
  if (!formData.value.subject || !formData.value.name || !formData.value.email || !formData.value.message) {
    alert('请填写所有必填项')
    return
  }
  
  console.log('表单数据:', formData.value)
  // 这里可以添加提交逻辑 后端
  alert('提交成功！我们会尽快与您联系。')
  
  // 清空表单
  formData.value = {
    subject: '',
    name: '',
    phone: '',
    email: '',
    message: ''
  }
}
</script>

<template>
  <div class="contact-page">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1>在线留言</h1>
      <p>您可以在这里向我们发送关于产品或合作的留言，我们将在第一时间与您联系。</p>
    </div>

    <div class="contact-container">
      <!-- 左侧：联系信息 -->
      <div class="contact-info">
        <!-- 电话信息 -->
        <div class="info-section">
          <h2>电话</h2>
          <div class="info-list">
            <p><strong>官方热线：</strong>000-0000-0000</p>
          </div>
        </div>

        <!-- 二维码 -->
        <div class="qrcode-section">
          <div class="qrcode-item">
            <h3>公众号</h3>
            <div class="qrcode-placeholder">
              <img src="@/assets/qrcodewechat.png" alt="微信公众号">
            </div>
          </div>
          <div class="qrcode-item">
            <h3>在线联系</h3>
            <div class="qrcode-placeholder">
              <img src="@/assets/qrcodewechat.png" alt="在线联系">
            </div>
          </div>
        </div>

        <!-- 联系信息底部 -->
        <div class="contact-bottom">
          <div class="contact-item">
            <span class="icon">✉</span>
            <span>contact@unomove.com</span>
          </div>
          <div class="contact-item">
            <span class="icon">🌐</span>
            <span>https://unomove.com</span>
          </div>
        </div>
      </div>

      <!-- 右侧：留言表单 -->
      <div class="contact-form">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <input 
              v-model="formData.subject" 
              type="text" 
              placeholder="请输入您的主题"
              required
            >
          </div>

          <div class="form-row">
            <div class="form-group half">
              <input 
                v-model="formData.name" 
                type="text" 
                placeholder="请输入您的姓名"
                required
              >
            </div>
            <div class="form-group half">
              <input 
                v-model="formData.phone" 
                type="tel" 
                placeholder="请输入您的电话"
              >
            </div>
          </div>

          <div class="form-group">
            <input 
              v-model="formData.email" 
              type="email" 
              placeholder="请输入您的邮箱"
              required
            >
          </div>

          <div class="form-group">
            <textarea 
              v-model="formData.message" 
              placeholder="请输入您的留言"
              rows="6"
              required
            ></textarea>
          </div>

          <div class="form-submit">
            <button type="submit" class="submit-btn">提交</button>
          </div>
        </form>
      </div>
    </div>

    <!-- 地图部分 -->
    <div class="map-section">
        <h2>
        <span class="icon">📍</span>
        地址：苏州工业园区淞北路333号苏州纳米技术国家大学科技园二期A1幢702室
        </h2>
      <div class="map-container">
        <img src="@/assets/qrcodewechat.png" alt="地图位置">
        <div class="map-overlay">
          <p>© 2025 Amap – GS(2024)1158号</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  width: 100%;
  background-color: #f8f9fa;
  padding-bottom: 60px;
}

/* 页面标题 */
.page-header {
  background-color: #fff;
  padding: 60px 40px;
  text-align: left;
  max-width: 1400px;
  margin: 0 auto;
}

.page-header h1 {
  font-size: 36px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 15px;
}

.page-header p {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
}

/* 联系容器 */
.contact-container {
  max-width: 1400px;
  margin: 40px auto;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}

/* 左侧联系信息 */
.contact-info {
  background-color: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.info-section {
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e0e0e0;
}

.info-section:last-of-type {
  border-bottom: none;
}

.info-section h2 {
  font-size: 20px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 20px;
}

.info-list p {
  font-size: 15px;
  color: #555;
  line-height: 2;
  margin-bottom: 8px;
}

.info-list strong {
  color: #2c3e50;
  font-weight: 600;
}

/* 二维码区域 */
.qrcode-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 30px;
}

.qrcode-item {
  text-align: center;
}

.qrcode-item h3 {
  font-size: 16px;
  color: #2c3e50;
  margin-bottom: 15px;
}

.qrcode-placeholder {
  width: 150px;
  height: 150px;
  background-color: #f0f0f0;
  border: 2px dashed #ccc;
  border-radius: 8px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qrcode-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}

/* 联系信息底部 */
.contact-bottom {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  border-top: 1px solid #e0e0e0;
  margin-bottom: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #555;
}

.contact-item .icon {
  font-size: 18px;
}

.qrcode-mini {
  width: 40px;
  height: 40px;
  margin-left: auto;
}

.qrcode-mini img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

/* 地址信息 */
.address-section {
  margin-top: 20px;
}

.address-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: #555;
  line-height: 1.6;
}

.address-item .icon {
  font-size: 18px;
  flex-shrink: 0;
}

/* 右侧表单 */
.contact-form {
  background-color: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.form-group {
  margin-bottom: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 15px 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 15px;
  color: #333;
  background-color: #f8f9fa;
  transition: border-color 0.3s, background-color 0.3s;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
  background-color: #fff;
}

.form-group textarea {
  resize: vertical;
  min-height: 150px;
}

.form-submit {
  text-align: center;
  margin-top: 30px;
}

.submit-btn {
  padding: 15px 80px;
  background-color: #fff;
  border: 2px solid #2c3e50;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  color: #2c3e50;
  cursor: pointer;
  transition: all 0.3s;
}

.submit-btn:hover {
  background-color: #2c3e50;
  color: #fff;
}

/* 地图部分 */
.map-section {
  max-width: 1400px;
  margin: 60px auto 0;
  padding: 0 40px;
}

.map-section h2 {
  font-size: 18px;
  color: #2c3e50;
  margin-bottom: 20px;
}

.map-container {
  width: 100%;
  height: 400px;
  background-color: #f0f0f0;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}

.map-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.map-overlay {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 8px 15px;
  border-radius: 4px;
  font-size: 12px;
  color: #666;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .contact-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .qrcode-section {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 40px 20px;
  }

  .page-header h1 {
    font-size: 28px;
  }

  .contact-container {
    padding: 0 20px;
  }

  .contact-info,
  .contact-form {
    padding: 30px 20px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .contact-bottom {
    flex-direction: column;
    align-items: flex-start;
  }

  .qrcode-mini {
    margin-left: 0;
  }

  .map-section {
    padding: 0 20px;
  }

  .map-container {
    height: 300px;
  }
}

@media (max-width: 480px) {
  .qrcode-section {
    grid-template-columns: 1fr;
  }

  .submit-btn {
    padding: 15px 60px;
  }
}
</style>