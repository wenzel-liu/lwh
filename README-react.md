# 响应式导航栏演示

这是一个使用React、Framer Motion和TailwindCSS构建的响应式导航栏演示项目。

## 功能特性

### 🎯 滚动交互逻辑
- **0-200px**: 导航栏固定在视口顶部 (`position: fixed; top: 0`)
- **主体内容透过导航栏显示**: 使用 `backdrop-filter: blur(8px)` + 半透明白色背景 `bg-white/60`
- **200-300px**: 导航栏开始向上滑动
- **300px+**: 导航栏完全滑出视口

### ✨ 动画效果
- 使用 **Framer Motion** 的 `useScroll()` 和 `useTransform()` 钩子
- 关键帧插值实现平滑过渡动画
- 移动端汉堡菜单动画效果

### 📱 响应式设计
- **Mobile-first** 设计理念
- 宽度 < 640px 时隐藏桌面菜单项，显示汉堡按钮
- 完全响应式布局

### 🛠️ 技术栈
- React 18 + TypeScript
- Framer Motion (动画库)
- TailwindCSS (样式框架)
- Vite (构建工具)

## 安装和运行

### 1. 安装依赖
\`\`\`bash
npm install
\`\`\`

### 2. 启动开发服务器
\`\`\`bash
npm run dev
\`\`\`

### 3. 构建生产版本
\`\`\`bash
npm run build
\`\`\`

### 4. 预览生产版本
\`\`\`bash
npm run preview
\`\`\`

## 项目结构

\`\`\`
src/
├── components/
│   ├── Navbar.tsx          # 响应式导航栏组件
│   └── MainContent.tsx     # 主内容组件
├── App.tsx                 # 主应用组件
├── main.tsx               # 应用入口
└── index.css              # 样式文件
\`\`\`

## 核心实现

### 滚动动画逻辑
\`\`\`typescript
const { scrollY } = useScroll();

// 导航栏Y轴位移动画
const navbarY = useTransform(
  scrollY,
  [0, 200, 300],      // 输入范围
  [0, 0, -100]        // 输出范围 (0% to -100%)
);

// 背景透明度变化
const backgroundOpacity = useTransform(
  scrollY,
  [0, 50, 200],
  [0.6, 0.8, 0.9]
);
\`\`\`

### 背景模糊效果
\`\`\`css
backdrop-filter: blur(8px);
background-color: rgba(255, 255, 255, 0.6);
\`\`\`

## 演示效果

1. 打开浏览器访问开发服务器地址
2. 向下滚动页面观察导航栏动画效果
3. 在移动端设备或调整浏览器窗口大小测试响应式效果
4. 点击移动端汉堡菜单测试展开/收起动画

## 浏览器兼容性

- ✅ Chrome 88+
- ✅ Firefox 94+
- ✅ Safari 14+
- ✅ Edge 88+

注意：`backdrop-filter` 需要现代浏览器支持。

## 许可证

MIT License 