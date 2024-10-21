import React from 'react';
import './BentoLayout.css';

interface BentoItemProps {
  rows?: string;
  columns?: string;
  content: React.ReactNode; // 接受卡片内容
}

interface BentoContainerProps {
  variant: 'variant-1' | 'variant-2' | 'variant-3';
  items: BentoItemProps[]; // 每个 item 包含样式和内容
}

const BentoContainer: React.FC<BentoContainerProps> = ({ variant, items }) => {
  return (
    <div className={`bento__container ${variant}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className="bento__item"
          style={{
            '--rows': item.rows || 'span 1',
            '--columns': item.columns || 'span 1',
          } as React.CSSProperties}
        >
          {item.content} {/* 渲染卡片的内容 */}
        </div>
      ))}
    </div>
  );
};

export default BentoContainer;
