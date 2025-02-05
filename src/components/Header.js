import filterShow, { filterAll } from "../tools/filterShow";
import SideBar from "./SideBar";

const Header = () => {
  window.setmenu = setmenu;

  return `<div class="header">
                <div class="header__top">
                    <img class="topNavvar__image" src="../src/assets/images/topNavvar.jpg" />
                </div>
                <div class="header__container">
                    <div class="header__right">
                        <div class="logo">
                            <a href="#" class="logo__link">
                                <img class="logo__image" src="../src/assets/images/logo.svg" alt="logo-icon" />
                            </a>
                        </div>
                        <div class="searchBox">
                            <input class="searchBox__input" type="search" placeholder="جستجو" />
                            <a class="searchBox__link" href="">
                                <i class="filterIcon fa fa-search"></i>
                            </a>
                        </div>
                    </div>
                    <div class="tools">
                        <ul class="tools__items">
                            <li class="tools__item">
                                <a href="#" class="tools__link tools__link--brd">
                                    <i class="icon icon--color fa fa-sign-in fa-4x"></i>
                                    <span class="tools__text">ورود | ثبت نام</span>
                                </a>
                            </li>
                             <li class="tools__item tools__itemCard tools__item--brdRight">
                                <a href="#" class="tools__link">
                                    <i class="icon icon--color fa fa-cart-plus"></i>
                                     <div class="widgetCard--width widgetCard--modal">
                                    <div class="widgetCard__title">1 کالا</div>
                                        <div class="widgetCard__box">
                                            <div class="widgetCard__right">
                                            <div class="widgetCard__image widgetCard__image--start">
                               <img class="image--size" src="../src/assets/images/camera1.webp" />
                             </div>
                             <div class="button button--color button--size">
                               <a class="button__link" href="#"
                                 ><i class="icon icon--color icon--size fa fa-plus"></i
                               ></a>
                               <div class="button__text" href="#">
                                 <span class="button__text">1</span
                                 ><span class="button__text button__text--color">حداکثر</span>
                               </div>
                               <a class="button__link" href="#"
                                 ><i class="icon icon--color fa fa-trash-o"></i
                               ></a>
                             </div>
                           </div>
                           <div class="widgetCard__description">
                           <div class="widgetCard__title">
                             گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و
                             رم 4 گیگابایت
                           </div>
                           <div class="widgetCard__properties">
                             <div class="widgetCard__property">
                               <i class="icon fa fa-dashboard"></i
                               ><span class="widgetCard__text widgetCard__text--color"
                                 >مشکی</span
                               >
                             </div>
                             <div class="widgetCard__property">
                               <i class="icon fa fa-get-pocket"></i
                               ><span class="widgetCard__text widgetCard__text--color"
                                 >دیجی کالا</span
                               >
                             </div>
                           </div>
                           <div class="widgetCard__price widgetCard__price--flexStart">
                             <span class="price">30 </span>
                             <span class="widgetCard__text">هزار تومان </span>
                           </div>
                          </div>
                        </div>
                      </div>
                                </a>
                            </li>
                        </ul>
                        <div class="tools__widget" id="countProductBox">
                        <div class="tools__count" id="countProduct">1</div>
                        </div>
                    </div>
                </div>
                <div class="header__menu">
                    <ul class="header__menu_items">
                      <li class="header__menu_item"><a class="header__menu_link" href="#" onclick="setmenu('mobile')">
                          <i class="icon icon--pd fa fa-mobile-phone"></i>موبایل </a>
                      </li>
                      <li class="header__menu_item"><a class="header__menu_link" href="#" onclick="setmenu('tv')">
                          <i class="icon icon--pd fa fa-tv"></i>تلویزیون</a>
                      </li>
                      <li class="header__menu_item"><a class="header__menu_link" href="#" onclick="setmenu('laptop')">
                          <i class="icon icon--pd fa fa-laptop"></i>لپ تاپ</a>
                      </li>
                      <li class="header__menu_item"><a class="header__menu_link" href="#" onclick="setmenu('camera')">
                          <i class="icon icon--pd fa fa-camera"></i>دوربین</a>
                      </li>
                    </ul>
                </div>
          </div>`;
};

export default Header;

const setmenu = (menuValue) => {
  filterAll.menu = menuValue;
  filterAll.sideBar = [];
  filterAll.sort = "";
  filterShow();
  // sidebar(menuValue);
  $('#sideBar').html(SideBar(menuValue));
}