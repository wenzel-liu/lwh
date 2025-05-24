import React from 'react';
import { motion } from 'framer-motion';

const MainContent: React.FC = () => {
  const sections = [
    {
      id: 'home',
      title: '欢迎来到我的页面',
      content: '这是一个展示响应式导航栏滚动效果的演示页面。当你向下滚动时，你会看到导航栏的动画效果。',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-100'
    },
    {
      id: 'about',
      title: '关于我们',
      content: '继续滚动可以看到导航栏在0-200px时保持固定，在200-300px时开始向上滑出视口。',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-100'
    },
    {
      id: 'projects',
      title: '我的项目',
      content: '这个导航栏使用了Framer Motion的useScroll和useTransform钩子来实现平滑的动画效果。',
      bgColor: 'bg-gradient-to-br from-purple-50 to-violet-100'
    },
    {
      id: 'contact',
      title: '联系我们',
      content: '导航栏具有backdrop-filter模糊效果和半透明背景，在移动端会显示汉堡菜单。',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-100'
    }
  ];

  // 创建更多内容以便测试滚动
  const additionalContent = Array.from({ length: 10 }, (_, i) => ({
    title: `附加内容区域 ${i + 1}`,
    content: `这是第 ${i + 1} 个内容区域。继续滚动以测试导航栏的交互效果。当滚动超过300px时，导航栏会完全隐藏。`,
    bgColor: i % 2 === 0 ? 'bg-gray-50' : 'bg-white'
  }));

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            响应式导航栏演示
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            向下滚动体验导航栏的动画效果
          </motion.p>
          <motion.div
            className="animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Sections */}
      {sections.map((section, index) => (
        <motion.section
          key={section.id}
          id={section.id}
          className={`min-h-screen flex items-center justify-center ${section.bgColor}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center px-4 max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {section.title}
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {section.content}
            </motion.p>
            <motion.div
              className="mt-8 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              滚动位置: <span className="font-mono">查看浏览器开发者工具获取详细信息</span>
            </motion.div>
          </div>
        </motion.section>
      ))}

      {/* Additional Content for Scroll Testing */}
      {additionalContent.map((content, index) => (
        <motion.section
          key={`additional-${index}`}
          className={`py-20 ${content.bgColor}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              {content.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {content.content}
            </p>
          </div>
        </motion.section>
      ))}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h3
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            页面底部
          </motion.h3>
          <motion.p
            className="text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            导航栏滚动效果演示完成。使用 Framer Motion + TailwindCSS 构建。
          </motion.p>
        </div>
      </footer>
    </main>
  );
};

export default MainContent; 