import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface MenuNavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

const MenuNavLink: React.FC<MenuNavLinkProps> = ({ href, label, onClick }) => {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const circleTopRef = useRef<HTMLSpanElement>(null);
  const circleBottomRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const btn = btnRef.current;
    const circleTop = circleTopRef.current;
    const circleBottom = circleBottomRef.current;

    if (!btn || !circleTop || !circleBottom) return;

    // 初期状態を設定(重要!)
    gsap.set(circleTop, { autoAlpha: 0, y: 0 });
    gsap.set(circleBottom, { autoAlpha: 1, y: 0 });

    const handleMouseEnter = () => {
      // 下の円を消す
      gsap.to(circleBottom, {
        y: 15,
        autoAlpha: 0,
        duration: 0.5,
        ease: "expo.out"
      });

      // 上の円を跳ねて表示
      gsap.fromTo(circleTop,
        { y: -60, autoAlpha: 0 },
        { 
          y: 0, 
          autoAlpha: 1,
          duration: 0.75,
          ease: "bounce.out"
        }
      );
    };

    const handleMouseLeave = () => {
      // 上の円を消す
      gsap.to(circleTop, {
        y: 15,
        autoAlpha: 0,
        duration: 0.5,
        ease: "expo.out"
      });

      // 下の円を跳ねて表示
      gsap.fromTo(circleBottom,
        { y: -60, autoAlpha: 0 },
        { 
          y: 0, 
          autoAlpha: 1,
          duration: 0.75,
          ease: "bounce.out"
        }
      );
    };

    btn.addEventListener('mouseenter', handleMouseEnter);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btn.removeEventListener('mouseenter', handleMouseEnter);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <a ref={btnRef} href={href} className="menu-btn js-menu-btn" onClick={onClick}>
      <div className="menu-btn__circles">
        <span ref={circleTopRef} className="menu-btn__circle menu-btn__circle--top"></span>
        <span ref={circleBottomRef} className="menu-btn__circle menu-btn__circle--bottom"></span>
      </div>
      <div className="menu-btn__text">{label}</div>
    </a>
  );
};

export default MenuNavLink;