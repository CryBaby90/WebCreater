import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [bootComplete, setBootComplete] = useState(false)
  const [hoveredWork, setHoveredWork] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setBootComplete(true)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  const works = [
    {
      id: 1,
      title: 'PROJECT_01',
      desc: '交互式数据可视化平台 / Web应用 / 2024'
    },
    {
      id: 2,
      title: 'PROJECT_02',
      desc: '创意动画作品集 / 沉浸式体验 / 2024'
    },
    {
      id: 3,
      title: 'PROJECT_03',
      desc: '品牌官网设计 / 响应式布局 / 2023'
    }
  ]

  return (
    <div className="app">
      {/* 启动画面 */}
      <div className={`boot-screen ${bootComplete ? 'hidden' : ''}`}>
        <div className="line">RENDER_QUEUE_EMPTY</div>
        <div className="line">SYS.READY</div>
        <div className="line">COORD: 34.0522° N</div>
        <div className="line">118.2437° W</div>
        <div className="line">INIT_SEQUENCE_COMPLETE</div>
        <div className="line">LOADING_INTERFACE...</div>
      </div>

      {/* 主内容 */}
      <div className="main-content">
        {/* 顶部信息栏 */}
        <div className="top-bar">
          <div className="status">SYS.ONLINE</div>
          <div className="coord">
            COORD: 34.0522° N<br />
            118.2437° W
          </div>
        </div>

        {/* 顶部滚动文字 */}
        <div className="marquee-section top">
          <div className="marquee-track">
            <div className="marquee-content">
              <span className="marquee-text">DESIGN CODE MOTION ART</span>
              <span className="marquee-text">DESIGN CODE MOTION ART</span>
              <span className="marquee-text">DESIGN CODE MOTION ART</span>
              <span className="marquee-text">DESIGN CODE MOTION ART</span>
              <span className="marquee-text">DESIGN CODE MOTION ART</span>
              <span className="marquee-text">DESIGN CODE MOTION ART</span>
            </div>
            <div className="marquee-content">
              <span className="marquee-text">DESIGN CODE MOTION ART</span>
              <span className="marquee-text">DESIGN CODE MOTION ART</span>
              <span className="marquee-text">DESIGN CODE MOTION ART</span>
              <span className="marquee-text">DESIGN CODE MOTION ART</span>
              <span className="marquee-text">DESIGN CODE MOTION ART</span>
              <span className="marquee-text">DESIGN CODE MOTION ART</span>
            </div>
          </div>
        </div>

        {/* 英雄区域 */}
        <div className="hero">
          <h1 className="hero-name">YOUR NAME</h1>
          <p className="hero-subtitle">DESIGNER • DEVELOPER • CREATOR</p>
          <p className="hero-bio">锻造沉浸式数字现实</p>
          <div className="hero-tech">
            <span>REACT</span>
            <span>WEBGL</span>
            <span>交互体验</span>
          </div>
        </div>

        {/* 底部滚动文字 */}
        <div className="marquee-section bottom">
          <div className="marquee-track">
            <div className="marquee-content">
              <span className="marquee-text">DESIGN CODE MOTION ART YOUR NAME •</span>
              <span className="marquee-text">DESIGN CODE MOTION ART YOUR NAME •</span>
              <span className="marquee-text">DESIGN CODE MOTION ART YOUR NAME •</span>
              <span className="marquee-text">DESIGN CODE MOTION ART YOUR NAME •</span>
              <span className="marquee-text">DESIGN CODE MOTION ART YOUR NAME •</span>
              <span className="marquee-text">DESIGN CODE MOTION ART YOUR NAME •</span>
            </div>
            <div className="marquee-content">
              <span className="marquee-text">DESIGN CODE MOTION ART YOUR NAME •</span>
              <span className="marquee-text">DESIGN CODE MOTION ART YOUR NAME •</span>
              <span className="marquee-text">DESIGN CODE MOTION ART YOUR NAME •</span>
              <span className="marquee-text">DESIGN CODE MOTION ART YOUR NAME •</span>
              <span className="marquee-text">DESIGN CODE MOTION ART YOUR NAME •</span>
              <span className="marquee-text">DESIGN CODE MOTION ART YOUR NAME •</span>
            </div>
          </div>
        </div>

        {/* 作品区域 */}
        <div className="works-section">
          <h2 className="works-title">精 选 作 品</h2>
          <div className="works-grid">
            {works.map((work) => (
              <div
                key={work.id}
                className="work-card"
                onMouseEnter={() => setHoveredWork(work.id)}
                onMouseLeave={() => setHoveredWork(null)}
              >
                <h3 className="work-title">{work.title}</h3>
                <p className="work-desc">{work.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 提示区域 */}
        <div className="hint-section">
          /// 交互以展开
        </div>
      </div>

      {/* 页脚 */}
      <footer className="footer">
        <div className="footer-copy">
          © 2025 YOUR NAME. 版权所有
        </div>
        <div className="footer-social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TWITTER</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
        </div>
      </footer>
    </div>
  )
}

export default App
