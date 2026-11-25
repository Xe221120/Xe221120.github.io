import { useEffect, useState } from 'react'
import './App.css'

const works: {
  index: string
  name: string
  desc: string
  tags: string[]
  image: string
  href: string
}[] = []

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  useReveal()

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site">
      <header className={`nav${menuOpen ? ' is-open' : ''}`}>
        <a className="nav__brand" href="#top" onClick={closeMenu}>
          XIE YILIN
        </a>
        <button
          className="nav__menu"
          type="button"
          aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
        </button>
        <ul className="nav__links">
          <li>
            <a href="#about" onClick={closeMenu}>
              关于
            </a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu}>
              作品
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              联系
            </a>
          </li>
        </ul>
      </header>

      <main id="top">
        <section className="hero" aria-label="首页">
          <div className="hero__media">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0f4c33b20c2a?auto=format&fit=crop&w=2400&q=80"
              alt="工业设备与工程环境"
              width={2400}
              height={1600}
              fetchPriority="high"
            />
          </div>
          <div className="hero__content">
            <h1 className="hero__brand">
              <span>Automation / Lab Notes</span>
              谢一林
            </h1>
            <p className="hero__headline">从信号到系统，把控制逻辑写成可运行的东西。</p>
            <p className="hero__lede">
              安徽理工大学 · 自动化。记录课程、实验与个人项目，在反馈回路里持续迭代。
            </p>
            <div className="hero__actions">
              <a className="btn btn--solid" href="#about">
                系统简介
              </a>
              <a className="btn btn--ghost" href="#contact">
                建立连接
              </a>
            </div>
          </div>
          <div className="hero__scroll" aria-hidden="true">
            Scroll
            <i />
          </div>
        </section>

        <section className="section about" id="about">
          <div className="about__portrait reveal">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
              alt="电路板与精密元件特写"
              width={1200}
              height={1500}
              loading="lazy"
            />
          </div>
          <div className="about__copy reveal">
            <p className="section__label">About // 01</p>
            <h2 className="section__title">关注控制、传感与落地</h2>
            <p className="section__text">
              我是谢一林，安徽理工大学自动化专业。习惯把问题拆成输入、过程与输出，再用实验验证假设。
            </p>
            <p className="section__text">
              这个站点像实验台：先搭好框架，再把做过的项目、笔记与练习一件件接上去。
            </p>
            <dl className="about__meta">
              <div>
                <dt>School</dt>
                <dd>安徽理工大学</dd>
              </div>
              <div>
                <dt>Major</dt>
                <dd>自动化</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>控制 · 系统 · 实践</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>学习 / 构建中</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="section work" id="work">
          <div className="work__head reveal">
            <p className="section__label">Projects // 02</p>
            <h2 className="section__title">作品与实验</h2>
            <p className="section__text">
              项目会从后续课程与实践里陆续接入。通道已打开，等待第一次有效输出。
            </p>
          </div>
          {works.length > 0 ? (
            <ul className="work__list">
              {works.map((work) => (
                <li className="work__item reveal" key={work.index}>
                  <div>
                    <span className="work__index">{work.index}</span>
                    <h3 className="work__name">{work.name}</h3>
                    <p className="work__desc">{work.desc}</p>
                    <ul className="work__tags">
                      {work.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                    <a className="work__link" href={work.href}>
                      查看详情
                    </a>
                  </div>
                  <div className="work__visual">
                    <img
                      src={work.image}
                      alt={work.name}
                      width={1400}
                      height={960}
                      loading="lazy"
                    />
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="work__empty reveal">
              <p>awaiting_projects — 作品稍后从项目中添加</p>
            </div>
          )}
        </section>

        <section className="section contact" id="contact">
          <div className="reveal">
            <p className="section__label">Contact // 03</p>
            <h2 className="contact__title">发送信号。</h2>
            <p className="contact__text">
              学习交流、项目协作或随便聊聊都可以。邮件、微信、QQ 任选一路。
            </p>
          </div>
          <div className="contact__panel reveal">
            <div className="contact__row">
              <span>Email</span>
              <a href="mailto:xieyilin9554@gmail.com">xieyilin9554@gmail.com</a>
            </div>
            <div className="contact__row">
              <span>WeChat</span>
              <a href="#contact">Xe221120</a>
            </div>
            <div className="contact__row">
              <span>QQ</span>
              <a href="tencent://message/?uin=2040993639">2040993639</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span className="footer__mark">sys.xieyilin</span>
        <span>© {new Date().getFullYear()} 谢一林 / Automation</span>
      </footer>
    </div>
  )
}
