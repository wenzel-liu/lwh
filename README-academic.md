# 学术个人主页

一个现代化的响应式学术个人主页，展示Publications & Presentations，具有完整的暗色模式支持和流畅的滚动动画效果。

## ✨ 功能特性

### 🎯 布局设计
- **两栏布局**: 左侧固定宽度侧边名片（320px），右侧Publications & Presentations内容栏（宽度×2）
- **响应式设计**: 移动端（≤640px）自动切换为单列布局
- **粘性侧边栏**: 左侧名片在滚动时保持固定位置

### 🌙 暗色模式
- **智能检测**: 自动检测系统主题偏好
- **手动切换**: 导航栏内置暗色模式切换器
- **状态记忆**: 本地存储用户偏好设置
- **平滑过渡**: 所有元素支持暗色模式动画切换

### 📱 响应式导航栏
- **滚动交互**: 
  - 0-200px: 导航栏固定在顶部
  - 200-300px: 导航栏平滑向上滑出视口
  - 背景模糊效果: `backdrop-filter: blur(8px)` + 半透明背景
- **移动端优化**: 汉堡菜单位于右侧，与导航栏完美对齐
- **动画效果**: 使用Framer Motion实现流畅的动画过渡

### 📚 内容展示
- **Publications**: 学术论文展示，包含标题、作者、期刊/会议、年份等信息
- **Presentations**: 学术报告展示，包含演讲标题、活动、日期、地点等信息
- **个人信息**: 侧边名片展示个人基本信息、联系方式和技能标签
- **交互动画**: 所有卡片支持悬停动画效果

## 🛠️ 技术栈

- **React 18** + TypeScript
- **Framer Motion** - 动画库
- **TailwindCSS** - 样式框架
- **Vite** - 构建工具

## 📁 项目结构

```
src/
├── components/
│   ├── Navbar.tsx              # 响应式导航栏组件
│   ├── MainContent.tsx         # 主内容组件（两栏布局）
│   └── DarkModeToggle.tsx      # 暗色模式切换组件
├── App.tsx                     # 主应用组件
├── main.tsx                    # 应用入口
└── index.css                   # 样式文件
```

## 🚀 快速开始

### 方式1: 直接运行（推荐）
打开 `navbar-demo.html` 文件即可在浏览器中查看完整演示。

### 方式2: 开发环境
```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run dev

# 3. 构建生产版本
npm run build
```

## 🎨 设计特点

### 两栏布局比例
- **左侧侧边栏**: 固定宽度 320px (20rem)
- **右侧内容区**: flex-grow: 2，占据剩余空间的2倍
- **间距**: 两栏之间 2rem (32px) 间距

### 颜色主题
**浅色模式**:
- 背景: `bg-gradient-to-br from-gray-50 to-gray-100`
- 卡片: `bg-white` + `shadow-lg`
- 文字: `text-gray-900` / `text-gray-600`

**深色模式**:
- 背景: `bg-gradient-to-br from-gray-900 to-gray-800`
- 卡片: `bg-gray-800` + `shadow-lg`
- 文字: `text-white` / `text-gray-300`

### 动画效果
- **页面加载**: 左侧栏从左滑入，右侧内容从右滑入
- **卡片悬停**: 向上浮动 5px (`y: -5`)
- **导航栏**: 滚动触发的平滑位移动画
- **暗色模式**: 切换图标旋转动画

## 📱 响应式断点

- **移动端**: `< 640px` - 单列布局，显示汉堡菜单
- **平板端**: `640px - 1024px` - 两栏布局优化
- **桌面端**: `> 1024px` - 完整两栏布局

## 🌟 定制说明

### 修改个人信息
编辑 `src/components/MainContent.tsx` 中的个人信息部分：
```tsx
<h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">张三</h1>
<p className="text-gray-600 dark:text-gray-300 mb-4">前端开发工程师 | 技术研究员</p>
```

### 添加Publications
在 `publications` 数组中添加新的论文条目：
```tsx
{
  id: 6,
  title: "你的论文标题",
  authors: "作者列表",
  journal: "期刊名称",
  year: 2024,
  type: "期刊论文",
  link: "#",
  description: "论文描述"
}
```

### 添加Presentations
在 `presentations` 数组中添加新的演讲条目：
```tsx
{
  id: 4,
  title: "演讲标题",
  event: "会议名称",
  date: "日期",
  location: "地点",
  type: "演讲类型",
  slides: "#",
  description: "演讲描述"
}
```

## 🎯 核心实现

### 滚动动画
```typescript
const navbarY = useTransform(
  scrollY,
  [0, 200, 300],      // 输入范围
  [0, 0, -100]        // 输出范围 (0% to -100%)
);
```

### 两栏布局
```css
.lg\:flex-grow-2 {
  flex-grow: 2;
}
```

### 暗色模式切换
```typescript
const toggleDarkMode = () => {
  if (isDark) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
};
```

## 🎈 演示效果

1. **滚动交互**: 向下滚动观察导航栏动画效果
2. **暗色模式**: 点击导航栏中的主题切换按钮
3. **响应式**: 调整浏览器窗口大小测试布局变化
4. **移动端**: 在移动设备上测试汉堡菜单功能

## �� 许可证

MIT License 