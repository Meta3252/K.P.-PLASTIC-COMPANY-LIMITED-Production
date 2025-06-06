'use client';
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We bring modern earth tones and soft luxury vibes to your digital presence.
            Crafted with passion and attention to detail.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#out-project">Out Project</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +66 1234 5678</p>
          <p>Address: 123 Earth St, Soft City</p>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
              <svg width="24" height="24" fill="#6a533c" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.77l-.44 2.89h-2.33v6.99C18.34 21.13 22 17 22 12z"/></svg>
            </a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noreferrer">
              <svg width="24" height="24" fill="#6a533c" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.46.7a4.29 4.29 0 001.88-2.37 8.6 8.6 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9A12.15 12.15 0 013 4.15a4.28 4.28 0 001.32 5.71 4.24 4.24 0 01-1.94-.53v.05a4.28 4.28 0 003.43 4.2 4.3 4.3 0 01-1.93.07 4.28 4.28 0 003.99 2.98A8.59 8.59 0 012 19.54a12.12 12.12 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.39-.02-.58A8.67 8.67 0 0022.46 6z"/></svg>
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
              <svg width="24" height="24" fill="#6a533c" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.73 2.4a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #f7f3ee;
          padding: 40px 20px;
          border-radius: 20px 20px 0 0;
          color: #6a533c;
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
          color: #5a4730;
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
          color: #6a533c;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .footer-section ul li a:hover {
          color: #a07f52;
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
          fill: #a07f52;
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
