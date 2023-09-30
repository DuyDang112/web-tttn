import React, { useState } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import logo from '../../components/assets/images/logo.svg';
import { Link } from 'react-router-dom';
import Popper from '../../components/popper/popper';

const Search = () => {
  // fixed Header
  window.addEventListener('scroll', function () {
    const search = document.querySelector('.search');
    search.classList.toggle('active', window.scrollY > 100);
  });

  const dataCategory = [
    {
      title: 'bed',
      images: ['http', 'http'],
      active: true,
    },
    {
      title: 'lamp',
      images: ['http', 'http'],
    },
    {
      title: 'chair',
      images: ['http', 'http'],
    },
    {
      title: 'cabinet',
      images: ['http', 'http'],
    },
  ];

  const [hovered, setHovered] = useState(0);

  const [MobileMenu, setMobileMenu] = useState(false);

  console.log('render');

  return (
    <>
      <header className="header">
        <div className="search">
          <div className="container c_flex">
            <div className="logo width ">
              <img src={logo} alt="" />
            </div>

            {/* <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div> */}

            <div className="container d_flex">
              {/* <div className='catgrories d_flex'>
            <span class='fa-solid fa-border-all'></span>
            <h4>
              Categories <i className='fa fa-chevron-down'></i>
            </h4>
          </div> */}

              <div className="navlink">
                <ul
                  className={MobileMenu ? 'nav-links-MobileMenu' : 'link f_flex capitalize'}
                  onClick={() => setMobileMenu(false)}
                >
                  {/* <ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'> */}
                  <li>
                    <Link to="/">home</Link>
                  </li>
                  <li>
                    <Link to="/pages">pages</Link>
                  </li>
                  <TippyHeadless
                    interactive={true}
                    // visible={true}
                    // offset={[32, -355]}
                    placement="bottom"
                    render={(attrs) => (
                      <div className="category-tippy" tabIndex="-1" {...attrs}>
                        <Popper>
                          <div className="popper_category">
                            {dataCategory.map((category, index) => (
                              <p className={category.active ? 'category-title active' : 'category-title'} key={index}>
                                {category.title}
                              </p>
                            ))}
                          </div>
                          <div className="popper_category-image">
                            <div
                              className={`image-container ${hovered ? 'hovered' : ''}`}
                              onMouseEnter={() => setHovered(1)}
                              onMouseLeave={() => setHovered(0)}
                            >
                              <img
                                className="category-image"
                                alt=""
                                src={
                                  hovered === 1
                                    ? 'https://img4.thuthuatphanmem.vn/uploads/2020/12/17/hinh-anh-noi-that-nha-dep_103830177.jpg'
                                    : 'https://picart.vn/wp-content/uploads/2020/04/gallery-phong-khach-picart-01.jpg'
                                }
                              ></img>
                            </div>
                            <div
                              className={`image-container ${hovered ? 'hovered' : ''}`}
                              onMouseEnter={() => setHovered(2)}
                              onMouseLeave={() => setHovered(0)}
                            >
                              <img
                                className="category-image"
                                alt=""
                                src={
                                  hovered === 2
                                    ? 'https://picart.vn/wp-content/uploads/2020/04/gallery-phong-khach-picart-01.jpg'
                                    : 'https://img4.thuthuatphanmem.vn/uploads/2020/12/17/hinh-anh-noi-that-nha-dep_103830177.jpg'
                                }
                              ></img>
                            </div>
                            <div
                              className={`image-container ${hovered ? 'hovered' : ''}`}
                              onMouseEnter={() => setHovered(3)}
                              onMouseLeave={() => setHovered(0)}
                            >
                              <img
                                className="category-image"
                                alt=""
                                src={
                                  hovered === 3
                                    ? 'https://studiochupanhdep.com/Upload/Images/Album/anh-phong-khach-07.jpg'
                                    : 'https://neohouse.vn/wp-content/uploads/2017/07/thiet-ke-noi-that-biet-thu-hien-dai-anh-bia.jpg'
                                }
                              ></img>
                            </div>
                            <div
                              className={`image-container ${hovered ? 'hovered' : ''}`}
                              onMouseEnter={() => setHovered(4)}
                              onMouseLeave={() => setHovered(0)}
                            >
                              <img
                                className="category-image"
                                alt=""
                                src={
                                  hovered === 4
                                    ? 'https://neohouse.vn/wp-content/uploads/2017/07/thiet-ke-noi-that-biet-thu-hien-dai-anh-bia.jpg'
                                    : 'https://studiochupanhdep.com/Upload/Images/Album/anh-phong-khach-07.jpg'
                                }
                              ></img>
                            </div>
                            {/* <p className="category-image">Image 1</p>
                            <p>Image 2</p>
                            <p>Image 3</p> */}
                          </div>
                        </Popper>
                      </div>
                    )}
                  >
                    <li>
                      <Link to="/user">category</Link>
                    </li>
                  </TippyHeadless>
                  <li>
                    <Link to="/vendor">product layout</Link>
                  </li>
                  <li>
                    <Link to="/track">contact</Link>
                  </li>
                </ul>

                <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
                  {MobileMenu ? <i className="fas fa-times close home-btn"></i> : <i className="fas fa-bars open"></i>}
                </button>
              </div>
            </div>
            <div className="icon f_flex width">
              <TippyHeadless
                interactive={true}
                delay={[0, 500]}
                // visible={true}
                // offset={[32, -355]}
                placement="bottom-end"
                render={(attrs) => (
                  <div className="search-tippy" tabIndex="-1" {...attrs}>
                    <Popper>
                      <div className="popper-search">
                        <input placeholder="search" />
                        <i className="fa fa-search icon"></i>
                      </div>
                    </Popper>
                  </div>
                )}
              >
                <i className="fa fa-search icon-circle"></i>
              </TippyHeadless>
              <i className="fa fa-user icon-circle"></i>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Search;
