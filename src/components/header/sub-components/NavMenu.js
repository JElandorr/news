import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import clsx from "clsx";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
    return (
        <div className={clsx(sidebarMenu ? "sidebar-menu" : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`)}>
            <nav>
                <ul>
                    <li>
                        <Link to={process.env.PUBLIC_URL + "/"}>
                            "home"
                            {sidebarMenu ? (
                                <span>
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            ) : (
                                <i className="fa fa-angle-down" />
                            )}
                        </Link>
                        <ul className="mega-menu mega-menu-padding">
                            <li>
                                <ul>
                                    <li className="mega-menu-title">
                                        <Link to={process.env.PUBLIC_URL + "/"}>"home_group_one"</Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-fashion"}>"home_fashion"</Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-fashion-two"}>
                                            "home_fashion_two"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-fashion-three"}>
                                            "home_fashion_three"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-fashion-four"}>
                                            "home_fashion_four"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-fashion-five"}>
                                            "home_fashion_five"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-fashion-six"}>
                                            "home_fashion_six"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-fashion-seven"}>
                                            "home_fashion_seven"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-fashion-eight"}>
                                            "home_fashion_eight"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-kids-fashion"}>
                                            "home_kids_fashion"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-cosmetics"}>"home_cosmetics"</Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-furniture"}>"home_furniture"</Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-furniture-two"}>
                                            "home_furniture_two"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-furniture-three"}>
                                            "home_furniture_three"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-furniture-four"}>
                                            "home_furniture_four"
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li className="mega-menu-title">
                                        <Link to={process.env.PUBLIC_URL + "/"}>"home_group_two"</Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-furniture-five"}>
                                            "home_furniture_five"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-furniture-six"}>
                                            "home_furniture_six"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-furniture-seven"}>
                                            "home_furniture_seven"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-electronics"}>
                                            "home_electronics"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-electronics-two"}>
                                            "home_electronics_two"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-electronics-three"}>
                                            "home_electronics_three"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-book-store"}>"home_book_store"</Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-book-store-two"}>
                                            "home_book_store_two"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-plants"}>"home_plants"</Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-flower-shop"}>
                                            "home_flower_shop"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-flower-shop-two"}>
                                            "home_flower_shop_two"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-organic-food"}>
                                            "home_organic_food"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-organic-food-two"}>
                                            "home_organic_food_two"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-onepage-scroll"}>
                                            "home_onepage_scroll"
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li className="mega-menu-title">
                                        <Link to={process.env.PUBLIC_URL + "/"}>"home_group_three"</Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-grid-banner"}>
                                            "home_grid_banner"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-auto-parts"}>"home_auto_parts"</Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-cake-shop"}>"home_cake_shop"</Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-handmade"}>"home_handmade"</Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-pet-food"}>"home_pet_food"</Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-medical-equipment"}>
                                            "home_medical_equipment"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-christmas"}>"home_christmas"</Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-black-friday"}>
                                            "home_black_friday"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-black-friday-two"}>
                                            "home_black_friday_two"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/home-valentines-day"}>
                                            "home_valentines_day"
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                            {" "}
                            "shop"
                            {sidebarMenu ? (
                                <span>
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            ) : (
                                <i className="fa fa-angle-down" />
                            )}
                        </Link>
                        <ul className="mega-menu">
                            <li>
                                <ul>
                                    <li className="mega-menu-title">
                                        <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>"shop_layout"</Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                                            "shop_grid_standard"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/shop-grid-filter"}>
                                            "shop_grid_filter"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/shop-grid-two-column"}>
                                            "shop_grid_two_column"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/shop-grid-no-sidebar"}>
                                            "shop_grid_no_sidebar"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/shop-grid-full-width"}>
                                            "shop_grid_full_width"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/shop-grid-right-sidebar"}>
                                            "shop_grid_right_sidebar"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/shop-list-standard"}>
                                            "shop_list_standard"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/shop-list-full-width"}>
                                            "shop_list_full_width"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/shop-list-two-column"}>
                                            "shop_list_two_column"
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li className="mega-menu-title">
                                        <Link to={process.env.PUBLIC_URL + "/product/1"}>"product_details"</Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/product/1"}>"product_tab_bottom"</Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/product-tab-left/1"}>
                                            "product_tab_left"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/product-tab-right/1"}>
                                            "product_tab_right"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/product-sticky/1"}>"product_sticky"</Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/product-slider/1"}>"product_slider"</Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/product-fixed-image/1"}>
                                            "product_fixed_image"
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/product/8"}>"product_simple"</Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/product/1"}>"product_variation"</Link>
                                    </li>
                                    <li>
                                        <Link to={process.env.PUBLIC_URL + "/product/9"}>"product_affiliate"</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li className="mega-menu-img">
                                        <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                                            <img
                                                src={process.env.PUBLIC_URL + "/assets/img/banner/banner-12.png"}
                                                alt=""
                                            />
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>"collection"</Link>
                    </li>
                    <li>
                        <Link to={process.env.PUBLIC_URL + "/"}>
                            "pages"
                            {sidebarMenu ? (
                                <span>
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            ) : (
                                <i className="fa fa-angle-down" />
                            )}
                        </Link>
                        <ul className="submenu">
                            <li>
                                <Link to={process.env.PUBLIC_URL + "/cart"}>"cart"</Link>
                            </li>
                            <li>
                                <Link to={process.env.PUBLIC_URL + "/checkout"}>"checkout"</Link>
                            </li>
                            <li>
                                <Link to={process.env.PUBLIC_URL + "/wishlist"}>"wishlist"</Link>
                            </li>
                            <li>
                                <Link to={process.env.PUBLIC_URL + "/compare"}>"compare"</Link>
                            </li>
                            <li>
                                <Link to={process.env.PUBLIC_URL + "/my-account"}>"my_account"</Link>
                            </li>
                            <li>
                                <Link to={process.env.PUBLIC_URL + "/login-register"}>"login_register"</Link>
                            </li>
                            <li>
                                <Link to={process.env.PUBLIC_URL + "/about"}>"about_us"</Link>
                            </li>
                            <li>
                                <Link to={process.env.PUBLIC_URL + "/contact"}>"contact_us"</Link>
                            </li>
                            <li>
                                <Link to={process.env.PUBLIC_URL + "/not-found"}>"404_page"</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                            "blog"
                            {sidebarMenu ? (
                                <span>
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            ) : (
                                <i className="fa fa-angle-down" />
                            )}
                        </Link>
                        <ul className="submenu">
                            <li>
                                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>"blog_standard"</Link>
                            </li>
                            <li>
                                <Link to={process.env.PUBLIC_URL + "/blog-no-sidebar"}>"blog_no_sidebar"</Link>
                            </li>
                            <li>
                                <Link to={process.env.PUBLIC_URL + "/blog-right-sidebar"}>"blog_right_sidebar"</Link>
                            </li>
                            <li>
                                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                    "blog_details_standard"
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to={process.env.PUBLIC_URL + "/contact"}>"contact_us"</Link>
                    </li>
                    <li>
                        <Link to={process.env.PUBLIC_URL + "/admin"}>admin</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

NavMenu.propTypes = {
    menuWhiteClass: PropTypes.string,
    sidebarMenu: PropTypes.bool,
};

export default NavMenu;
