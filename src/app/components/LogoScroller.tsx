'use client';
import React from "react";

const logos = Array.from({ length: 12 }, (_, i) => `/LogoCustomer/${i + 1}.jpg`);

export default function LogoScroller() {
  return (
    <section className="out-project-section">
      <h2 className="section-title">Out Project</h2>
      <div className="logo-scroller-wrapper" aria-label="Client logos scrolling">
        <div className="logo-scroller">
          {logos.concat(logos).map((logo, index) => (
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              key={index}
              className="logo-image"
              loading="lazy"
              draggable={false}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .out-project-section {
          margin: 0 auto;
          padding: 40px 20px;
          background: #fffaf5; /* โทนครีมนวลตา อบอุ่น */
          box-shadow: 0 10px 30px rgba(200, 180, 160, 0.15);
          user-select: none;
        }

        .section-title {
          font-family: 'Georgia', serif;
          font-size: 2.8rem;
          font-weight: 600;
          color: #6a533c; /* สีน้ำตาลเข้ม earth tone */
          text-align: center;
          margin-bottom: 32px;
          letter-spacing: 0.05em;
        }

        .logo-scroller-wrapper {
          overflow: hidden;
          width: 100%;
          padding: 14px 0;
          border-radius: 16px;
          background: transparent; /* ไม่มีพื้นหลัง */
        }

        .logo-scroller {
          display: flex;
          width: calc(150px * ${logos.length * 2});
          animation: scrollLeft 28s linear infinite;
          align-items: center;
          gap: 48px; /* เว้นระยะห่างที่นุ่มนวลขึ้น */
        }

        .logo-image {
          width: 150px;
          height: auto;
          border-radius: 12px;
          filter: drop-shadow(0 3px 5px rgba(150, 120, 90, 0.15));
          transition: transform 0.35s ease, filter 0.35s ease;
          background: transparent !important;
        }

        .logo-image:hover {
          transform: scale(1.15);
          filter: drop-shadow(0 6px 10px rgba(150, 120, 90, 0.3));
          cursor: pointer;
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-150px * ${logos.length} - 48px * ${logos.length}));
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.2rem;
          }
          .logo-scroller {
            width: calc(100px * ${logos.length * 2});
            gap: 32px;
          }
          .logo-image {
            width: 100px;
          }
          @keyframes scrollLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100px * ${logos.length} - 32px * ${logos.length}));
            }
          }
        }
      `}</style>
    </section>
  );
}
