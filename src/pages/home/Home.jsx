import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../componets/footer/Footer'
import Nav from '../../componets/nav/Nav'
import './Home.css'
import axios from 'axios'

function Home() {
  const sidebarItems = [
    {
      name: "Company home",
      class: "item__title active",
      illustration: 'https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/product/use-cases/figma.png',
      team: 'https://www.notion.so/front-static/shared/logos/color/figma.png'
    },
    {
      name: "Roadmap",
      class: "item__title",
      illustration: 'https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/product/use-cases/multiverse-v2.png',
      team: 'https://www.notion.so/front-static/shared/logos/color/match-v2.png'
    },
    {
      name: "Design docs",
      class: "item__title",
      illustration: 'https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/product/use-cases/design-docs/en-US.png',
      team: 'https://www.notion.so/front-static/shared/logos/color/headspace.png'
    },
    {
      name: "Engineering wiki",
      class: "item__title",
      illustration: 'https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/product/use-cases/multiverse-v2.png',
      team: 'https://www.notion.so/front-static/shared/logos/color/branch.png'
    },
    {
      name: "Meeting notes",
      class: "item__title",
      illustration: 'https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/product/use-cases/multiverse-v2.png',
      team: 'https://www.notion.so/front-static/shared/logos/color/mixpanel.png'
    },
    {
      name: "Website publishing",
      class: "item__title",
      illustration: 'https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/product/use-cases/figma.png',
      team: 'https://www.notion.so/front-static/shared/logos/color/multiverse.png'
    }
  ]
  const template = [
    {
      name: 'Design system',
      img: 'https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/https://images.ctfassets.net/spoqsaf9291f/37eAqxAynZsYk3hmkjyZVF/780fdc147a834af2e16cf28ef5e66ef0/Hero.png'
    },
    {
      name: 'Docs',
      img: 'https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/https://images.ctfassets.net/spoqsaf9291f/1xTJX1Wx9McjtXoNL5hqlq/41205b3ad145dbedd417b96134bc98db/Hero.jpg'
    },
    {
      name: 'Content calendar',
      img: 'https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/https://images.ctfassets.net/spoqsaf9291f/1RZ2GlD5IHk1IAd77Whejb/d967144e05dd971d253c40a679bbba72/Hero.jpg'
    },
    {
      name: 'Company home',
      img: 'https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/https://images.ctfassets.net/spoqsaf9291f/3rgtX4i8gix6nmIZGPXx10/3b828a7354b27fe894ae5ad145bc44e8/Hero.jpg'
    },
    {
      name: 'Roadmap',
      img: 'https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/https://images.ctfassets.net/spoqsaf9291f/4436AdRCPMLYAHECuw6y3/0329c1cf2f7a3f0eca8ba1156774bf63/Hero.png'
    },
    {
      name: 'Meeting notes',
      img: 'https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/https://images.ctfassets.net/spoqsaf9291f/2tpiTr9meibfgSPFKexFjs/a3ae2e8911a8d956e7b5d392c33ef8f8/meeting-notes.png'
    },
  ]
  const [popular, setPopular] = useState(sidebarItems)
  const [popularIndex, setPopularIndex] = useState(0)
  const [templateIndex, setTemplateIndex] = useState([0, 1, 2])
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   axios.get('http://localhost:3001/sidebarHome')
  //   .then(res => {
  //     setPopular(res.data)
  //     console.log(res.data)
  //   },[])
  // })
  const sideBarItemClick = (i) => {
    setPopularIndex(i)
    setPopular(popular.map((value, index) => {
      if (index === i) {
        value.class = "item__title active"
      } else {
        value.class = "item__title"
      }
      return value
    }))
  }
  const templateSliderLeft = () => {
    if (count % 2 === 0) {
      setTemplateIndex([3, 4, 5])

    } else {
      setTemplateIndex([0, 1, 2])
    }
    setCount(count + 1)
  }
  const templateSliderRight = () => {
    if (count % 2 === 0) {
      setTemplateIndex([3, 4, 5])

    } else {
      setTemplateIndex([0, 1, 2])
    }
    setCount(count + 1)
  }
  return (
    <>
      <Nav>
        <div id="main" className="wrapper">
          <div id="home">
            <div className="home__introduce">
              <div className="introduce__content">
                <h1 className="content__title">One workspace.</h1>
                <h1 className="content__title">Every team.</h1>
                <p className="content__desc">We’re more than a doc. Or a table. Customize Notion to work the way you do.</p>
                <div className="btn__try">
                  <Link to="sigin" className='btn__try--link'>Try Paytion free</Link>
                </div>
                <div className="content__trusted">
                  <p>Trusted by teams at</p>
                  <div className="trusted__team">
                    <div className="team__item">
                      <img src="https://images.ctfassets.net/spoqsaf9291f/502ApiNcRHgIwrDU8XRYTQ/c70d8752079a40241d08ec85dac5f93d/figma-logo.png" alt="" />
                    </div>
                    <div className="team__item">
                      <img src="https://images.ctfassets.net/spoqsaf9291f/248lpDOefbem7N1Q6QU9zn/ab900c553ee4e237a5901d799aa465ca/mixpanel.png" alt="" />
                    </div>
                    <div className="team__item">
                      <img src="https://images.ctfassets.net/spoqsaf9291f/6S40IUVrdki2SlPXQMHKKr/e02c776d183f70c84fa53e077a0f7b1a/pixar.png" alt="" />
                    </div>
                    <div className="team__item">
                      <img src="https://images.ctfassets.net/spoqsaf9291f/2Z03v7BH2brwtBG2qdA5dp/d6cd228d2f7b6048edcec9f4d5bcce3c/match.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="introduce__img">
                <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=640,quality=100/front-static/pages/product/home-page-hero-refreshed-v3.png" alt="" />
              </div>
            </div>
            {/* Home Feature */}
            <section className="home__feature">
              <div className="feature__img">
                <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/product/value-props/ecosystem-tile-v3.png" alt="" />
              </div>
              <div className="feature__desc">
                <img className='desc__logo' src="https://www.notion.so/cdn-cgi/image/format=auto,width=128,quality=100/front-static/pages/product/spot/spot-team-up.png" alt="" />
                <h3 className='desc__title'>Team up without the chaos</h3>
                <p className="desc__content">Connect your teams, projects, and docs in Notion — so you can bust silos and move as one.</p>
              </div>
            </section>

            <section className="home__feature">
              <div className="feature__img">
                <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/product/value-props/ecosystem-tile-v3.png" alt="" />
              </div>
              <div className="feature__desc">
                <img className='desc__logo' src="https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/product/spot/spot-context.png" alt="" />
                <h3 className='desc__title'>Never ask “What’s the context?” again</h3>
                <p className="desc__content">Stale wikis aren't helpful. Neither are floating docs. In Notion, your daily work and knowledge live side by side — so you never lose context.</p>
              </div>
            </section>

            <section className="home__feature">
              <div className="feature__img">
                <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/product/value-props/ecosystem-tile-v3.png" alt="" />
              </div>
              <div className="feature__desc">
                <img className='desc__logo' src="https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/product/spot/spot-context.png" alt="" />
                <h3 className='desc__title'>Build the workflow you want</h3>
                <p className="desc__content">Customize Notion to make it work the way you want it to. Just drag and drop to craft the dashboard, website, doc, or system you need.</p>
              </div>
            </section>

            <section className="home__feature">
              <div className="feature__img">
                <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/product/value-props/ecosystem-tile-v3.png" alt="" />
              </div>
              <div className="feature__desc">
                <img className='desc__logo' src="https://www.notion.so/cdn-cgi/image/format=auto,width=64,quality=100/front-static/pages/product/spot/spot-ecosystem.png" alt="" />
                <h3 className='desc__title'>Benefit from a global ecosystem of creators</h3>
                <p className="desc__content">
                  Get inspiration from thousands of community-made templates, integrations, and events.
                  <br />
                  You'll never want for resources or support.</p>
              </div>
            </section>
            <hr className='hr' />
            {/* Home Popular */}
            <div className="home__popular">
              {/* Home Header */}
              <div className="popular__header">
                <div className="header__content">
                  <h2 className='content__title'>Built for endless uses.
                    <br />
                    Across all teams.
                  </h2>
                  <p className="content__desc">Notion solves problems common and unique to every team. These are just a few.</p>
                  <div className="content__btn">
                    <div className="btn__try">
                      <Link to="sigin" className='btn__try--link'>Try Paytion free</Link>
                    </div>
                  </div>
                </div>
                <div className="header__img">
                  <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/product/bookshelf-spot.png" alt="books" />
                </div>
              </div>
              {/* Popular Feature */}
              <div className="popular__feature">
                <div className="popular__sidebar">
                  <div className="sidebar__list">
                    {
                      popular.map((sidebarItem, index) => {
                        return (
                          <div key={index} className="sidebar__item ">
                            <span className={sidebarItem.class} onClick={() => { sideBarItemClick(index) }}>{sidebarItem.name}</span>
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className="sidebar__trusted">
                    <div className="trusted__desc">
                      <p>Used by teams at</p>
                    </div>
                    <div className="trusted__team">
                      <img src={popular[popularIndex].team} alt="member" />
                    </div>
                  </div>
                </div>
                <div className="popular__illustration">
                  <div className="illustration__img">
                    <img src={popular[popularIndex].illustration} alt="Company home" />
                  </div>
                </div>
              </div>
            </div>
            <hr className='hr' />
            {/* Home Popular */}
            <div className="home__popular">
              {/* Home Header */}
              <div className="popular__header">
                <div className="header__content">
                  <h2 className='content__title'>
                    Start with a template.
                    <br />
                    Modify it however you need.
                  </h2>
                  <p className="content__desc">Choose from thousands of free, pre-built setups — for work and life.</p>
                  <div className="content__btn">
                    <div className="btn__see">
                      <Link to="sigin" className='btn__try--link'>See all template<i className="uil uil-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
                <div className="header__img">
                  <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/product/blocks-spot.png" alt="books" />
                </div>
              </div>
              {/* Popular Template */}
              <div className="popular__template">
                <div className="template__slider">
                  <div className="template__item">
                    <div className="template__img">
                      <img src={template[templateIndex[0]].img} alt="template" />
                    </div>
                    <div className="template__name">
                      <p>{template[templateIndex[0]].name}</p>
                    </div>
                  </div>
                  <div className="template__item">
                    <div className="template__img">
                      <img src={template[templateIndex[1]].img} alt="template" />
                    </div>
                    <div className="template__name">
                      <p>{template[templateIndex[1]].name}</p>
                    </div>
                  </div>
                  <div className="template__item">
                    <div className="template__img">
                      <img src={template[templateIndex[2]].img} alt="template" />
                    </div>
                    <div className="template__name">
                      <p>{template[templateIndex[2]].name}</p>
                    </div>
                  </div>
                </div>
                <div className="template__toggle">
                  <button onClick={templateSliderLeft} className='btn__toggle btn__left'><i className="uil uil-arrow-left"></i></button>
                  <button onClick={templateSliderRight} className='btn__toggle btn__right'><i className="uil uil-arrow-right"></i></button>
                </div>
              </div>
            </div>
            <hr className='hr' />
            {/* Home Popular */}
            <div className="home__popular">
              {/* Home Header */}
              <div className="popular__header">
                <div className="header__content">
                  <h2 className='content__title'>
                    Used by the world’s most <br /> innovative teams
                  </h2>
                  <div className="content__btn">
                    <div className="btn__see">
                      <Link to="sigin" className='btn__try--link'>Read all customer stories<i className="uil uil-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
                <div className="header__img">
                  <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/shared/illustrations/teamwork.png" alt="books" />
                </div>
              </div>
              {/* Popular Story */}
              <div className="popular__story">
                <div className="customer__story">
                  <div className="story__teams">
                    <div className="teams__logo">
                      <img src='https://www.notion.so/front-static/shared/logos/color/match-v2.png' alt="template" />
                    </div>
                    <div className="teams__comment">
                      <p>"Notion is a workspace that adapts to your needs. It’s as minimal or as powerful as you need it to be."</p>
                    </div>
                    <div className="team__member">
                      <div className="member__avatar">
                        <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/shared/people/rahim-makani.png" alt="avatar" />
                      </div>
                      <div className="member__identity">
                        <p className='member__name'>Rahim Makani</p>
                        <p className='member__job'>Director of Product</p>
                      </div>
                    </div>
                  </div>
                  <div className="story__teams">
                    <div className="teams__logo">
                      <img src='https://www.notion.so/front-static/shared/logos/color/loom.png' alt="template" />
                    </div>
                    <div className="teams__comment">
                      <p>"Notion continues to be the easiest way to get information centralized somewhere and shout it out to someone else. For us, that’s extremely important because half our team is remote."</p>
                    </div>
                    <div className="team__member">
                      <div className="member__avatar">
                        <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/shared/people/vinay-hiremath.png" alt="avatar" />
                      </div>
                      <div className="member__identity">
                        <p className='member__name'>Vinay Hiremath</p>
                        <p className='member__job'>Co-founder and Head of Engineering</p>
                      </div>
                    </div>
                  </div>
                  <div className="story__teams">
                    <div className="teams__logo">
                      <img src='https://www.notion.so/front-static/shared/logos/color/figma.png' alt="template" />
                    </div>
                    <div className="teams__comment">
                      <p>"Notion’s ease of use is one of its hallmarks. It helps you visually navigate content and remember where something is."</p>
                    </div>
                    <div className="team__member">
                      <div className="member__avatar">
                        <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/shared/people/marie-szuts.png" alt="avatar" />
                      </div>
                      <div className="member__identity">
                        <p className='member__name'>Marie Szuts</p>
                        <p className='member__job'>Head of People Ops</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className='hr' />
            {/* Home Try */}
            <div className="home__try">
              <div className="home__logo">
                <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/shared/icons/notion-app-icon-3d.png" alt="notion" />
              </div>
              <h2 className="try__today">Try Notion today</h2>
              <p className='try__content'>Get started for free. </p>
              <p className='try__content'>Add your whole team as your needs grow.</p>
              <div className="btn__try">
                <Link to="sigin" className='btn__try--link'>Try Paytion free</Link>
              </div>
              <p className="try__contact">On a big team? <Link to="/contact">Contact sale</Link></p>
              <div className="try__img">
                <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=384,quality=100/front-static/pages/product/sitting-character.png" alt="try img" />
              </div>
            </div>
            <hr className='hr' />
          </div>
          <Footer />
        </div>
      </Nav>
    </>
  )
}

export default Home