import React, { useEffect } from 'react' ;
import {NavLink} from "react-router-dom";
const Blog2 = () => {
        
    useEffect(() => {
        window.onload = function () {
            crear_select();
        }

        var Navegador_ = (window.navigator.userAgent || window.navigator.vendor || window.opera),
            Firfx = /Firefox/i.test(Navegador_),
            Mobile_ = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(Navegador_),
            FirfoxMobile = (Firfx && Mobile_);

        var li = new Array();

        function crear_select() {
            var div_cont_select = document.querySelectorAll("[data-mate-select='active']");
            var select_ = '';
            for (var e = 0; e < div_cont_select.length; e++) {
                div_cont_select[e].setAttribute('data-indx-select', e);
                div_cont_select[e].setAttribute('data-selec-open', 'false');
                var ul_cont = document.querySelectorAll("[data-indx-select='" + e +
                    "'] > .cont_list_select_mate > ul");
                select_ = document.querySelectorAll("[data-indx-select='" + e + "'] >select")[0];
                if (Mobile_ || FirfoxMobile) {
                    select_.addEventListener('change', function () {
                        _select_option(select_.selectedIndex, e);
                    });
                }
                var select_optiones = select_.options;
                document.querySelectorAll("[data-indx-select='" + e + "']  > .selecionado_opcion ")[0].setAttribute(
                    'data-n-select', e);
                document.querySelectorAll("[data-indx-select='" + e + "']  > .icon_select_mate ")[0].setAttribute(
                    'data-n-select', e);
                for (var i = 0; i < select_optiones.length; i++) {
                    li[i] = document.createElement('li');
                    if (select_optiones[i].selected === true || select_.value === select_optiones[i].innerHTML) {
                        li[i].className = 'active';
                        document.querySelector("[data-indx-select='" + e + "']  > .selecionado_opcion ").innerHTML =
                            select_optiones[i].innerHTML;
                    };
                    li[i].setAttribute('data-index', i);
                    li[i].setAttribute('data-selec-index', e);
                    // funcion click al selecionar 
                    li[i].addEventListener('click', function () {
                        _select_option(this.getAttribute('data-index'), this.getAttribute(
                            'data-selec-index'));
                    });

                    li[i].innerHTML = select_optiones[i].innerHTML;
                    ul_cont[0].appendChild(li[i]);

                }; // Fin For select_optiones
            }; // fin for divs_cont_select
        } // Fin Function 



        var cont_slc = 0;

        function open_select(idx) {
            var idx1 = idx.getAttribute('data-n-select');
            var ul_cont_li = document.querySelectorAll("[data-indx-select='" + idx1 + "'] .cont_select_int > li");
            var hg = 0;
            var slect_open = document.querySelectorAll("[data-indx-select='" + idx1 + "']")[0].getAttribute(
                'data-selec-open');
            var slect_element_open = document.querySelectorAll("[data-indx-select='" + idx1 + "'] select")[0];
            if (Mobile_ || FirfoxMobile) {
                if (window.document.createEvent) { // All
                    var evt = window.document.createEvent("MouseEvents");
                    evt.initMouseEvent("mousedown", false, true, window, 0, 0, 0, 0, 0, false, false, false, false,
                        0,
                        null);
                    slect_element_open.dispatchEvent(evt);
                } else if (slect_element_open.fireEvent) { // IE
                    slect_element_open.fireEvent("onmousedown");
                }
            } else {


                for (var i = 0; i < ul_cont_li.length; i++) {
                    hg += ul_cont_li[i].offsetHeight;
                };
                if (slect_open === 'false') {
                    document.querySelectorAll("[data-indx-select='" + idx1 + "']")[0].setAttribute(
                        'data-selec-open',
                        'true');
                    document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul")[0]
                        .style.height = hg + "px";
                    document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .icon_select_mate")[0].style
                        .transform = 'rotate(180deg)';
                } else {
                    document.querySelectorAll("[data-indx-select='" + idx1 + "']")[0].setAttribute(
                        'data-selec-open',
                        'false');
                    document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .icon_select_mate")[0].style
                        .transform = 'rotate(0deg)';
                    document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul")[0]
                        .style.height = "0px";
                }
            }

        } // fin function open_select

        function salir_select(indx) {
            var select_ = document.querySelectorAll("[data-indx-select='" + indx + "'] > select")[0];
            document.querySelectorAll("[data-indx-select='" + indx + "'] > .cont_list_select_mate > ul")[0].style
                .height = "0px";
            document.querySelector("[data-indx-select='" + indx + "'] > .icon_select_mate").style.transform =
                'rotate(0deg)';
            document.querySelectorAll("[data-indx-select='" + indx + "']")[0].setAttribute('data-selec-open',
                'false');
        }


        function _select_option(indx, selc) {
            if (Mobile_ || FirfoxMobile) {
                selc = selc - 1;
            }
            var li_s = document.querySelectorAll("[data-indx-select='" + selc + "'] .cont_select_int > li");
            var p_act = document.querySelectorAll("[data-indx-select='" + selc + "'] > .selecionado_opcion")[0]
                .innerHTML = li_s[indx].innerHTML;
            var select_optiones = document.querySelectorAll("[data-indx-select='" + selc + "'] > select > option");
            for (var i = 0; i < li_s.length; i++) {
                if (li_s[i].className === 'active') {
                    li_s[i].className = '';
                };
                li_s[indx].className = 'active';

            };
            select_optiones[indx].selected = true;
            salir_select(selc);
        }
    }, [])




return (

        <div class="page-content">

        <div class="page-content-inner">

            <h2> articles </h2>

            <div uk-toggle="cls: uk-flex uk-flex-between@m uk-flex-middle; mode: media; media: @m">

                <nav class="responsive-tab mb-4 style-1">
                    <ul>
                        <li class="uk-active"><NavLink to = "#">JavaScript</NavLink></li>
                        <li><NavLink to = "#">CSS</NavLink></li>
                        <li><NavLink to = "#">HTML</NavLink></li>
                        <li><NavLink to = "#">Freebie</NavLink></li>
                        <li><NavLink to = "#">Resources</NavLink></li>
                    </ul>
                </nav>

                <div>
                    <div class="display-as">
                    <NavLink to ="/blog-card"><i class="icon-feather-grid"></i></NavLink>
                    <NavLink to ="/blog2"><i class="icon-feather-square"></i></NavLink>
                    <NavLink to ="/blog1" activeClassName="active"><i class="icon-feather-list"></i></NavLink>
                    </div>
                </div>

            </div>


            <div class="uk-grid-large" uk-grid>

                <div class="uk-width-expand@m">

                   
                    <div class="blog-article">
                        <NavLink to="/blog-single">
                            <h2>10 Interesting JavaScript and CSS Libraries for November 2020 </h2>
                        </NavLink>
                        <p class="blog-articl-meta">
                            <strong> Bootstrap </strong>
                            <NavLink to="/userprofile"> Nataly Birch </NavLink>
                            •
                            <span> 24 October </span>
                        </p>
                        <NavLink to="/blog-single">
                            <div class="blog-article-thumbnail">
                                <div class="blog-article-thumbnail-inner">
                                    <img src="assets/images/blog/img-3.jpg" alt="" />
                                </div>
                            </div>
                        </NavLink>
                        <p class="blog-article-content">Nam liber tempor cum soluta nobis eleifend option congue
                            nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum mayi dolor
                            sit amet, conse ctetuer adipiscing elit, nibh euismod tincidunt ut laoreet
                            <NavLink to="/blog-single"> Read more ..</NavLink>
                        </p>
                    </div>


                    <div class="blog-article">
                        <NavLink to="/blog-single">
                            <h2>Learn New 10 Interesting JavaScript and CSS libraries for 2020 </h2>
                        </NavLink>
                        <p class="blog-articl-meta">
                            <strong> Bootstrap </strong>
                            <NavLink to="/userprofile"> Nataly Birch </NavLink>
                            •
                            <span> 24 October </span>
                        </p>
                        <NavLink to="/blog-single">
                            <div class="blog-article-thumbnail">
                                <div class="blog-article-thumbnail-inner">
                                    <img src="assets/images/blog/img-4.jpg" alt="" />
                                </div>
                            </div>
                        </NavLink>
                        <p class="blog-article-content">Nam liber tempor cum soluta nobis eleifend option congue
                            nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum mayi dolor
                            sit amet, conse ctetuer adipiscing elit, nibh euismod tincidunt ut laoreet
                            <NavLink to="/blog-single"> Read more ..</NavLink>
                        </p>
                    </div>

                   
                    <div class="blog-article">
                        <NavLink to="/blog-single">
                            <h2> 10 amazing web demos and experiments </h2>
                        </NavLink>
                        <p class="blog-articl-meta">
                            <strong> Software </strong>
                            <NavLink to="user-profile.html"> Nataly Birch </NavLink>
                            •
                            <span> 24 October </span>
                        </p>
                        <NavLink to="/blog-single">
                            <div class="blog-article-thumbnail">
                                <div class="blog-article-thumbnail-inner">
                                    <img src="assets/images/blog/img-1.jpg" alt="" />
                                </div>
                            </div>
                        </NavLink>
                        <p class="blog-article-content">Nam liber tempor cum soluta nobis eleifend option congue
                            nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum mayi dolor
                            sit amet, conse ctetuer adipiscing elit, nibh euismod tincidunt ut laoreet
                            <NavLink to="/blog-single"> Read more ..</NavLink>
                        </p>
                    </div>

                  
                    <div class="blog-article">
                        <NavLink to="/blog-single">
                            <h2> Learn 10 Awesome Web Dev Tools and Resources For 2020 </h2>
                        </NavLink>
                        <p class="blog-articl-meta">
                            <strong> Bootstrap </strong>
                            <NavLink to="/userprofile"> Nataly Birch </NavLink>
                            •
                            <span> 24 October </span>
                        </p>
                        <NavLink to="/blog-single">
                            <div class="blog-article-thumbnail">
                                <div class="blog-article-thumbnail-inner">
                                    <img src="assets/images/blog/img-2.jpg" alt="" />
                                </div>
                            </div>
                        </NavLink>
                        <p class="blog-article-content">Nam liber tempor cum soluta nobis eleifend option congue
                            nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum mayi dolor
                            sit amet, conse ctetuer adipiscing elit, nibh euismod tincidunt ut laoreet
                            <NavLink to="/blog-single"> Read more ..</NavLink>
                        </p>
                    </div>



                    <ul class="uk-pagination my-5 uk-flex-center" uk-margin>
                        <li><NavLink to = "#"><span uk-pagination-previous></span></NavLink></li>
                        <li class="uk-disabled"><span>...</span></li>
                        <li><NavLink to = "#">4</NavLink></li>
                        <li class="uk-active"><span>7</span></li>
                        <li><NavLink to = "#">8</NavLink></li>
                        <li><NavLink to = "#">10</NavLink></li>
                        <li class="uk-disabled"><span>...</span></li>
                        <li><NavLink to = "#"><span uk-pagination-next></span></NavLink></li>
                    </ul>

                </div>

                <div class="uk-width-1-3@s">

                    <div class="uk-card-default rounded uk-overflow-hidden">
                        <div class="p-4 text-center">

                            <h4 class="uk-text-bold"> Subsicribe </h4>
                            <p> Get the Latest Posts and Article for us On Your Email</p>

                            <form class="mt-3">
                                <input type="text" class="uk-input uk-form-small"
                                    placeholder="Enter your email address" />
                                <input type="submit" value="Subscirbe" class="btn btn-default  btn-block mt-3" />
                            </form>

                        </div>
                    </div>

                    <div class="uk-card-default rounded mt-4">

                        <ul class="uk-child-width-expand uk-tab"
                            uk-switcher="animation: uk-animation-fade">
                            <li><NavLink to = "#">Newest</NavLink></li>
                            <li><NavLink to = "#">Popular</NavLink></li>
                        </ul>

                        <ul class="uk-switcher">
                         
                            <li>
                                <div class="py-3 px-4">

                                    <div class="uk-grid-small" uk-grid>
                                        <div class="uk-width-expand">
                                            <p> Overview of SQL Commands and PDO </p>
                                        </div>
                                        <div class="uk-width-1-3">
                                            <img src="assets/images/blog/img-3.jpg" alt="" class="rounded-sm" />
                                        </div>
                                    </div>
                                    <div class="uk-grid-small" uk-grid>
                                        <div class="uk-width-expand">
                                            <p> Writing a Simple MVC App in Plain </p>
                                        </div>
                                        <div class="uk-width-1-3">
                                            <img src="assets/images/blog/img-2.jpg" alt="" class="rounded-sm" />
                                        </div>
                                    </div>
                                    <div class="uk-grid-small" uk-grid>
                                        <div class="uk-width-expand">
                                            <p> How to Create and Use Bash Scripts </p>
                                        </div>
                                        <div class="uk-width-1-3">
                                            <img src="assets/images/blog/img-3.jpg" alt="" class="rounded-sm" /> 
                                        </div>
                                    </div>

                                </div>
                            </li>

                      
                            <li>
                                <div class="py-3 px-4">

                                    <div class="uk-grid-small" uk-grid>
                                        <div class="uk-width-expand">
                                            <p> Overview of SQL Commands and PDO </p>
                                        </div>
                                        <div class="uk-width-1-3">
                                            <img src="assets/images/blog/img-3.jpg" alt="" class="rounded-sm" />
                                        </div>
                                    </div>
                                    <div class="uk-grid-small" uk-grid>
                                        <div class="uk-width-expand">
                                            <p> Writing a Simple MVC App in Plain </p>
                                        </div>
                                        <div class="uk-width-1-3">
                                            <img src="assets/images/blog/img-2.jpg" alt="" class="rounded-sm" />
                                        </div>
                                    </div>
                                    <div class="uk-grid-small" uk-grid>
                                        <div class="uk-width-expand">
                                            <p> How to Create and Use Bash Scripts </p>
                                        </div>
                                        <div class="uk-width-1-3">
                                            <img src="../assets/images/blog/img-3.jpg" alt="" class="rounded-sm" />
                                        </div>
                                    </div>

                                </div>
                            </li>
                        </ul>

                    </div>

                    <h4 class="mt-4"> Tags </h4>
                    <div uk-margin>
                        <NavLink to="#" activeClassName="btn btn-small btn-light">#Webdesing</NavLink>
                        <NavLink to="#" activeClassName="btn btn-small btn-light">#Business</NavLink>
                        <NavLink to="#" activeClassName="btn btn-small btn-light">#Programming</NavLink>
                        <NavLink to="#" activeClassName="btn btn-small btn-light">#Hacking</NavLink>
                    </div>


                </div>

            </div>

        </div>

    </div>
        );
}



export default Blog2;