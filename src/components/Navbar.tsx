import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';

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
      <div className="absolute inset-0 backdrop-blur-[8px] bg-white/60 dark:bg-gray-900/60" />
      
      {/* 导航内容 */}
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#home" className="text-xl font-bold text-gray-900 dark:text-white">
              学术主页
            </a>
          </motion.div>

          {/* 右侧只保留暗色模式切换器 */}
          <div className="flex items-center">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 