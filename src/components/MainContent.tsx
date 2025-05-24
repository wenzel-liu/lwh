import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Define page types
type PageType = 'home' | 'about' | 'research' | 'publications' | 'techno-industrialist';

const MainContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // 模拟Publications数据
  const publications = [
    {
      id: 1,
      title: "Advanced React Patterns for Modern Web Development",
      authors: "张三, 李四, 王五",
      journal: "Journal of Frontend Technologies",
      year: 2024,
      type: "期刊论文",
      link: "#",
      description: "探讨现代Web开发中的高级React模式，包括复合组件、渲染属性和自定义Hooks的最佳实践。"
    },
    {
      id: 2,
      title: "Machine Learning Applications in User Interface Design",
      authors: "张三, 赵六",
      conference: "International Conference on Human-Computer Interaction",
      year: 2024,
      type: "会议论文",
      link: "#",
      description: "研究机器学习在用户界面设计中的应用，包括自适应界面和智能交互系统。"
    },
    {
      id: 3,
      title: "Responsive Design Patterns for Cross-Platform Applications",
      authors: "张三",
      journal: "Mobile Computing Review",
      year: 2023,
      type: "期刊论文",
      link: "#",
      description: "跨平台应用的响应式设计模式研究，涵盖移动端、桌面端和Web端的统一设计方法。"
    },
    {
      id: 4,
      title: "Performance Optimization Strategies in Modern JavaScript",
      authors: "张三, 李四",
      conference: "JavaScript Conference 2023",
      year: 2023,
      type: "会议论文",
      link: "#",
      description: "现代JavaScript应用性能优化策略，包括代码分割、懒加载和渲染优化技术。"
    },
    {
      id: 5,
      title: "Accessibility in Web Development: Best Practices and Guidelines",
      authors: "张三, 王五, 赵六",
      journal: "Web Standards Quarterly",
      year: 2023,
      type: "期刊论文",
      link: "#",
      description: "Web开发中的无障碍设计最佳实践和指导原则，确保所有用户都能无障碍访问Web内容。"
    }
  ];

  // 模拟Presentations数据
  const presentations = [
    {
      id: 1,
      title: "The Future of Frontend Development",
      event: "Tech Summit 2024",
      date: "2024年10月15日",
      location: "上海",
      type: "主题演讲",
      slides: "#",
      description: "探讨前端开发的未来趋势，包括新兴技术和开发范式的变革。"
    },
    {
      id: 2,
      title: "Building Scalable React Applications",
      event: "React Developer Meetup",
      date: "2024年8月20日",
      location: "北京",
      type: "技术分享",
      slides: "#",
      description: "分享构建可扩展React应用的实践经验和架构设计原则。"
    },
    {
      id: 3,
      title: "Modern CSS Techniques for Responsive Design",
      event: "Frontend Conference 2024",
      date: "2024年6月10日",
      location: "深圳",
      type: "工作坊",
      slides: "#",
      description: "现代CSS技术在响应式设计中的应用，包括Grid、Flexbox和Container Queries。"
    }
  ];

  // 页面标题映射
  const pageTitle = {
    home: 'Home',
    about: 'About',
    research: 'Research',
    publications: 'Publications & Presentations',
    'techno-industrialist': 'Techno-Industrialist'
  };

  // 页面导航菜单
  const menuItems = [
    { label: 'Home', page: 'home' as PageType },
    { label: 'About', page: 'about' as PageType },
    { label: 'Research', page: 'research' as PageType },
    { label: 'Publications & Presentations', page: 'publications' as PageType },
    { label: 'Techno-Industrialist', page: 'techno-industrialist' as PageType }
  ];

  // 渲染不同页面的内容
  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">欢迎来到我的个人主页</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                我是一名专注于前端开发和技术研究的工程师，在现代Web开发、用户界面设计、
                以及技术产业趋势等领域拥有丰富的经验和深入的研究。
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                通过这个网站，您可以了解我的研究工作、学术发表、技术分享以及对技术产业的思考。
                我致力于推动技术创新，促进学术交流，并分享实用的开发经验。
              </p>
            </section>
          </motion.div>
        );

      case 'about':
        return (
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">关于我</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">教育背景</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    计算机科学硕士学位，专注于人机交互与前端技术研究。在学术期间，
                    深入研究了现代Web开发技术、用户体验设计以及跨平台应用开发。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">研究兴趣</h3>
                  <ul className="text-gray-600 dark:text-gray-300 leading-relaxed list-disc list-inside space-y-2">
                    <li>现代JavaScript框架与库的性能优化</li>
                    <li>响应式设计与跨平台开发模式</li>
                    <li>用户界面中的机器学习应用</li>
                    <li>Web无障碍性与包容性设计</li>
                    <li>技术产业趋势与创新分析</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">工作经历</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    现任某知名科技公司前端架构师，负责大规模Web应用的架构设计与性能优化。
                    曾参与多个开源项目的开发，并在国际会议上发表多篇技术论文。
                  </p>
                </div>
              </div>
            </section>
          </motion.div>
        );

      case 'research':
        return (
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">研究领域</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">前端技术研究</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    专注于现代前端框架的性能优化、组件化架构设计、以及新兴Web标准的应用研究。
                    重点关注React生态系统、TypeScript应用、以及Webpack等构建工具的优化策略。
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">用户体验设计</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    研究人机交互原理在Web界面设计中的应用，包括响应式设计模式、
                    无障碍性优化、以及跨设备用户体验的一致性设计方法。
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">性能优化</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    深入研究Web应用性能优化技术，包括代码分割、懒加载、缓存策略、
                    以及运行时性能监控与分析。致力于提升大规模应用的用户体验。
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">技术创新</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    探索新兴技术在前端开发中的应用可能性，包括WebAssembly、PWA、
                    以及AI辅助开发工具等前沿技术的实践与研究。
                  </p>
                </div>
              </div>
            </section>
          </motion.div>
        );

      case 'publications':
        return (
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Publications 部分 */}
            <section>
              <motion.h2 
                className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                📚 Publications
              </motion.h2>
              
              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <motion.article
                    key={pub.id}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          <a href={pub.link} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            {pub.title}
                          </a>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{pub.authors}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          {pub.journal || pub.conference} • {pub.year}
                        </p>
                      </div>
                      <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full mt-2 sm:mt-0 flex-shrink-0">
                        {pub.type}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {pub.description}
                    </p>
                  </motion.article>
                ))}
              </div>
            </section>

            {/* Presentations 部分 */}
            <section>
              <motion.h2 
                className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                🎤 Presentations
              </motion.h2>
              
              <div className="space-y-6">
                {presentations.map((pres, index) => (
                  <motion.article
                    key={pres.id}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          <a href={pres.slides} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            {pres.title}
                          </a>
                        </h3>
                        <div className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                          <p>{pres.event}</p>
                          <p>{pres.date} • {pres.location}</p>
                        </div>
                      </div>
                      <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full mt-2 sm:mt-0 flex-shrink-0">
                        {pres.type}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {pres.description}
                    </p>
                  </motion.article>
                ))}
              </div>
            </section>
          </motion.div>
        );

      case 'techno-industrialist':
        return (
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">技术产业思考</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">数字化转型趋势</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    在当今快速发展的数字经济时代，企业数字化转型已成为不可逆转的趋势。
                    从传统制造业到服务业，各行各业都在寻求通过技术创新来提升效率、
                    降低成本并创造新的商业价值。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">技术创新与产业融合</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    人工智能、物联网、区块链等新兴技术正在重塑传统产业格局。
                    这些技术的融合应用不仅提高了生产效率，更催生了全新的商业模式和价值链条。
                    作为技术从业者，我们需要深入理解这些变化趋势。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">可持续发展的技术策略</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    面对全球气候变化和环境挑战，技术企业和产业界需要承担更多社会责任。
                    绿色计算、可持续软件开发、以及环保技术的推广应用，
                    将成为未来技术发展的重要方向。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">人才培养与产业发展</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    技术产业的快速发展对人才培养提出了新的要求。
                    跨学科知识结构、持续学习能力、以及创新思维将成为未来技术人才的核心竞争力。
                    教育体系和企业培训需要与时俱进，培养适应未来产业需求的复合型人才。
                  </p>
                </div>
              </div>
            </section>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* 页面导航菜单 */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <nav className="flex flex-wrap justify-center gap-2 py-4">
            {menuItems.map((item) => (
              <motion.button
                key={item.page}
                onClick={() => setCurrentPage(item.page)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  currentPage === item.page
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>
        </div>
      </div>

      {/* 页面标题 - 移出内容栏外部 */}
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-2xl font-bold text-gray-900 dark:text-white px-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          key={currentPage} // 当页面切换时重新动画
        >
          {pageTitle[currentPage]}
        </motion.h1>
      </div>

      {/* 主内容区域 */}
      <main className="mt-6">
        <div className="container mx-auto px-4 py-8">
          {/* 两栏布局：移动端单列，桌面端双列 */}
          <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
            
            {/* 左侧：侧边名片 - 固定宽度 */}
            <motion.aside 
              className="lg:w-80 lg:flex-shrink-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="sticky top-24">
                {/* 个人头像和基本信息 */}
                <motion.div 
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-6"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-6">
                    <motion.div 
                      className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold"
                      whileHover={{ scale: 1.05 }}
                    >
                      张
                    </motion.div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">张三</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">前端开发工程师 | 技术研究员</p>
                  </div>

                  {/* 联系信息 */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                      <span className="text-sm">zhangsan@example.com</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm">北京, 中国</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm">github.com/zhangsan</span>
                    </div>
                  </div>
                </motion.div>

                {/* 技能标签 */}
                <motion.div 
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">技能专长</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Node.js', 'Python', 'Machine Learning', 'UI/UX Design', 'Web Performance', 'Accessibility'].map((skill, index) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.aside>

            {/* 右侧：页面内容 */}
            <motion.div 
              className="flex-1 lg:flex-grow-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {renderPageContent()}
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainContent; 