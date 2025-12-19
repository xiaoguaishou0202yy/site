<script setup>
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Logo 区域 -->
      <div class="footer-logo">
        <img src="@/assets/logol.png" alt="Logo">
      </div>

      <!-- 主要内容区域 -->
      <div class="footer-main">
        <!-- 产品列 -->
        <div class="footer-column">
          <h3>产品介绍</h3>
          <ul>
            <li><a href="#">产品A</a></li>
            <li><a href="#">产品B</a></li>
            <li><a href="#">产品C</a></li>
            <li><a href="#">全系列产品</a></li>
          </ul>
        </div>

        <!-- 关于我们列 -->
        <div class="footer-column">
          <h3>关于我们</h3>
          <ul>
            <li><a href="#">公司介绍</a></li>
            <li><a href="#">新闻动态</a></li>
            <li><a href="#">联系我们</a></li>
          </ul>
        </div>

        <!-- 加入我们列 -->
        <div class="footer-column">
          <h3>加入我们</h3>
          <ul>
            <li><a href="#">在招职位</a></li>
          </ul>
        </div>

        <!-- 支持中心列 -->
        <div class="footer-column">
          <h3>支持中心</h3>
          <ul>
            <li><a href="#">下载中心</a></li>
            <li><a href="#">官方开源</a></li>
          </ul>
        </div>

        <!-- 关注我们列 -->
        <div class="footer-column">
          <h3>关注我们</h3>
          <div class="social-icons">
            <a href="#" class="social-icon">
              <i class="icon-wechat">微</i>
            </a>
            <a href="#" class="social-icon">
              <i class="icon-zhihu">知</i>
            </a>
            <a href="#" class="social-icon">
              <i class="icon-douyin">抖</i>
            </a>
            <a href="#" class="social-icon">
              <i class="icon-bilibili">B</i>
            </a>
          </div>
        </div>
      </div>

      <!-- 底部信息 -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <div class="footer-links">
            <a href="#">法律声明</a>
            <a href="#">隐私政策</a>
            <a href="#">关于我们</a>
            <a href="#">联系我们</a>
          </div>
          <div class="language-selector">
            <span class="globe-icon">🌐</span>
            <span>中文 / EN</span>
          </div>
        </div>
        <div class="footer-copyright">
          <p>Copyright © 2025 优诺智行（苏州）科技有限公司 版权所有 | XICP备xxxxxxxxxxxxx号-1 | X公网安备xxxxxxxxxxxxx号</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  background-color: rgb(232,232,232);
  color: #fff;
  padding: 60px 0 30px;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

/* Logo 区域 */
.footer-logo {
  margin-bottom: 40px;
}

.footer-logo img {
  height: 40px;
  width: auto;
}

/* 主要内容区域 */
.footer-main {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-column h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  color: rgba(44,45,40);;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column li {
  margin-bottom: 12px;
}

.footer-column a {
  color: rgba(44,45,40, 0.7);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;
}

.footer-column a:hover {
  color: rgba(44,45,40);;
}

/* 社交图标 */
.social-icons {
  display: flex;
  gap: 15px;
}

.social-icon {
  width: 32px;
  height: 32px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: background-color 0.3s;
  text-decoration: none;
}

.social-icon:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* 底部信息 */
.footer-bottom {
  padding-top: 30px;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.footer-links {
  display: flex;
  gap: 30px;
}

.footer-links a {
  color: rgba(44,45,40, 0.6);
  text-decoration: none;
  font-size: 13px;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: rgba(44,45,40);;
}

.language-selector {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: rgb(44,45,40, 0.7);
}

.globe-icon {
  font-size: 16px;
}

.footer-copyright {
  font-size: 12px;
  color: rgba(44,45,40, 0.5);
}

.footer-copyright p {
  margin: 0;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .footer-main {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .footer-content {
    padding: 0 20px;
  }

  .footer-main {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .footer-bottom-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .footer-links {
    flex-wrap: wrap;
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .footer-main {
    grid-template-columns: 1fr;
  }
}
</style>