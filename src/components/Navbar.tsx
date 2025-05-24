import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // 使用 Framer Motion 的 useScroll hook 获取滚动位置
  const { scrollY } = useScroll();
  
  // 关键帧动画插值
  // 0-200px: 导航栏固定在顶部 (translateY: 0)
  // 200-300px: 导航栏向上滑动直到完全隐藏 (translateY: -100%)
  const navbarY = useTransform(
    scrollY,
    [0, 200, 300],
    [0, 0, -100]
  );
  
  // 导航栏背景透明度变化
  // 当滚动到一定位置时，背景变为半透明
  const backgroundOpacity = useTransform(
    scrollY,
    [0, 50, 200],
    [0.6, 0.8, 0.9]
  );

  const menuItems = [
    { label: '首页', href: '#home' },
    { label: '关于', href: '#about' },
    { label: '项目', href: '#projects' },
    { label: '联系', href: '#contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${className}`}
      style={{
        y: navbarY,
        backgroundColor: `rgba(255, 255, 255, ${backgroundOpacity})`,
      }}
      initial={{ y: 0 }}
    >
      {/* 背景模糊效果 */}
      <div className="absolute inset-0 backdrop-blur-[8px] bg-white/60" />
      
      {/* 导航内容 */}
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#home" className="text-xl font-bold text-gray-900">
              MyPage
            </a>
          </motion.div>

          {/* 桌面端菜单 */}
          <div className="hidden sm:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* 移动端汉堡菜单按钮 */}
          <div className="sm:hidden">
            <motion.button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">打开主菜单</span>
              {/* 汉堡菜单图标 */}
              <motion.div
                className="block h-6 w-6"
                animate={isMobileMenuOpen ? "open" : "closed"}
              >
                <motion.span
                  className="block absolute h-0.5 w-6 bg-current transform transition duration-500"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 8 }
                  }}
                  style={{ top: '6px' }}
                />
                <motion.span
                  className="block absolute h-0.5 w-6 bg-current transform transition duration-500"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  style={{ top: '12px' }}
                />
                <motion.span
                  className="block absolute h-0.5 w-6 bg-current transform transition duration-500"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -8 }
                  }}
                  style={{ top: '18px' }}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* 移动端菜单 */}
        <motion.div
          className="sm:hidden"
          initial="closed"
          animate={isMobileMenuOpen ? "open" : "closed"}
          variants={{
            open: {
              opacity: 1,
              height: "auto",
              transition: {
                duration: 0.3,
                ease: "easeInOut"
              }
            },
            closed: {
              opacity: 0,
              height: 0,
              transition: {
                duration: 0.3,
                ease: "easeInOut"
              }
            }
          }}
          style={{ overflow: 'hidden' }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-sm rounded-b-lg">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0, 
                  x: isMobileMenuOpen ? 0 : -20 
                }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 