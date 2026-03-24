'use client';
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            เราคือองค์กรที่ให้คำปรึกษาด้านระบบคุณภาพที่มีประสบการณ์ตรวจประเมินเพื่อให้การรับรองระบบคุณภาพมากกว่า 800 บริษัท ด้วยผลงานที่ผ่านมาทำให้องค์กรของคุณได้รับคำปรึกษาและการรับรองมาตรฐานสากลจากทีมผู้เชี่ยวชาญตัวจริง
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/policy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: k.p.plastic.co.ltd@gmail.com</p>
          <p>Phone: -</p>
          <p>Address: 13/13 หมู่ที่ 9 ตำบลนาดี อำเภอเมืองสมุทรสาคร จ.สมุทรสาคร 74000</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/people/%E0%B9%80%E0%B8%84%E0%B8%9E%E0%B8%B5%E0%B8%9E%E0%B8%A5%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%B4%E0%B8%81-%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94/61577548353934/" aria-label="Facebook" target="_blank" rel="noreferrer">
              <svg width="24" height="24" fill="#1a8b45" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.77l-.44 2.89h-2.33v6.99C18.34 21.13 22 17 22 12z" /></svg>
            </a>
            <a href="https://page.line.me/214qwlfq?openQrModal=true" aria-label="Line" target="_blank" rel="noreferrer" style={{ display: 'inline-block' }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2" y="2" width="20" height="20" rx="4" fill="#1a8b45" />
                <text
                  x="12"
                  y="17"
                  textAnchor="middle"
                  fontSize="14"
                  fontFamily="Arial, sans-serif"
                  fill="white"
                  fontWeight="bold"
                >
                  L
                </text>
              </svg>
            </a>

          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #f5fff5;
          padding: 40px 20px;
          color: #149144;
          font-family: 'Georgia', serif;
          box-shadow: 0 -5px 20px rgba(200, 180, 160, 0.1);
          user-select: none;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          justify-content: space-between;
        }

        .footer-section {
          flex: 1 1 280px;
          min-width: 280px;
        }

        .footer-section h3 {
          font-weight: 700;
          font-size: 1.6rem;
          margin-bottom: 18px;
          letter-spacing: 0.05em;
        }

        .footer-section p {
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.5;
          color: #000000;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-section ul li {
          margin-bottom: 12px;
        }

        .footer-section ul li a {
          color: #000000;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .footer-section ul li a:hover {
          color: #000000;
          text-decoration: underline;
        }

        .social-icons {
          margin-top: 12px;
          display: flex;
          gap: 20px;
        }

        .social-icons a svg {
          transition: fill 0.3s ease;
        }

        .social-icons a:hover svg {
          fill: #149144;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            gap: 30px;
          }
          .footer-section {
            min-width: auto;
          }
        }
      `}</style>
    </footer>
  );
}
