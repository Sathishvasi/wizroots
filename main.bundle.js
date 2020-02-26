webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Components/menu-list/menuList.component.css":
/***/ (function(module, exports) {

module.exports = "\t\r\n\th1 {\r\n\t\tfont-family: 'Nunito', sans-serif;\r\n\t\tfont-size: 24px;\r\n\t\ttext-align: center;\r\n\t} \r\n\t\r\n\th5 {\r\n\t\tfont-family: 'Nunito', sans-serif;\r\n\t\tfont-size: 14px;\r\n\t\ttext-align: center;\r\n\t\tline-height: 22px;\r\n\t} \r\n\t\r\n\tul {\r\n\t\tfont-family: 'Nunito', sans-serif;\r\n\t\tlist-style: none;\r\n\t\tfont-size: 16px;\r\n\t\tmargin-left: 0px;\r\n\t\tpadding-left: 0px;\r\n\t\tpadding-top: 10px;\r\n\t\ttext-align: center;\r\n\t} \r\n\t\r\n\tul li {\r\n\t\tpadding-top: 8px;\r\n\t\t-webkit-transition: all 200ms ease-out;\r\n\t\ttransition: all 200ms ease-out;\r\n\t} \r\n\t\r\n\tul li .arrow-icon {\r\n\t\topacity: 0;\r\n\t\tpadding-left: 0px;\r\n\t\t-webkit-transition: all 200ms ease-out;\r\n\t\ttransition: all 200ms ease-out\r\n\t} \r\n\t\r\n\tul li:hover .arrow-icon{\r\n\t\topacity: 1;\r\n\t\tpadding-left: 5px;\r\n\t\t-webkit-transition: all 200ms ease-out;\r\n\t\ttransition: all 200ms ease-out\r\n\t} \r\n\t\r\n\tul li:hover {\r\n\t\tcursor: pointer;\r\n\t\t-webkit-transform: scale(1.3,1.3);\r\n\t\t        transform: scale(1.3,1.3);\r\n\t\t-webkit-transition: all 200ms ease-out;\r\n\t\ttransition: all 200ms ease-out; \r\n\t} \r\n\t\r\n\t/* .menu-list-section > div{\r\n        background: linear-gradient(to right, #C6426E , #642B73 ) ;\r\n        \r\n    } */ \r\n\t\r\n\t.menu-list-section > div:nth-of-type(odd) {\r\n\t\tposition: relative;\r\n\t\tpadding: 0px;\r\n\t\topacity: 1;\r\n\t\t-webkit-transition: all 2s ease-out;\r\n\t\ttransition: all 2s ease-out;\r\n\t} \r\n\t\r\n\t.menu-list-section > div:nth-of-type(even)  {\r\n\t\tposition: relative;\r\n\t\tmin-height: 400px;\r\n\t\tpadding-right: 0px;\r\n\t\tpadding-left: 0px;\r\n\t\topacity: 1;\r\n\t\t-webkit-transition: all 2s ease-out;\r\n\t\ttransition: all 2s ease-out;\r\n    } \r\n\t\r\n\t/* .menu-list-section > div:nth-of-type(odd){\r\n        background: linear-gradient(to right, #0f3443, #34e89e );\r\n    } */ \r\n\t\r\n\t.menu-list-section > div:nth-of-type(even) > .menu-content{\r\n\t\tposition: absolute;\r\n\t\theight: 100%;\r\n\t\tmin-height: 400px;\r\n\t\twidth: 100%;\r\n\t\tbackground: rgba(39, 39, 43, 1);\r\n\t\tpadding: 60px;\r\n\t\t-webkit-transition: all 0.6s ease-in-out;\r\n\t\ttransition: all 0.6s ease-in-out;\r\n\t} \r\n\t\r\n\t.menu-list-section  div:nth-of-type(even) > .menu-content:hover {\r\n\t\tbackground: rgba(39, 39, 43, 0);\r\n\t\t-webkit-transition: all 0.6s ease-in-out;\r\n\t\ttransition: all 0.6s ease-in-out;\r\n\t} \r\n\t\r\n\t.menu-list-section > div:nth-of-type(odd) > .menu-content {\r\n\t\tpadding: 60px;\r\n\t\theight: 100%;\r\n\t\twidth: 100%;\r\n\t\tbackground: rgba(48, 48, 53, 1);\r\n\t\t-webkit-transition: all 0.6s ease-in-out;\r\n\t\ttransition: all 0.6s ease-in-out;\r\n\t} \r\n\t\r\n\t.menu-list-section > div:nth-of-type(odd) > .menu-content:hover {\r\n\t\tbackground: rgba(48, 48, 53, 0);\r\n\t\t-webkit-transition: all 0.6s ease-in-out;\r\n\t\ttransition: all 0.6s ease-in-out;\r\n    } \r\n\t\r\n\t.menu-content{\r\n        color: #fff;\r\n\t} \r\n\t\r\n\t/* added by ben */ \r\n\t\r\n\t.services-list-row{\r\n\t\tpadding-bottom: 35px;\r\n\t\t/* align-items: center; */\r\n\t} \r\n\t\r\n\t.service-icon-wrapper{\r\n\t\tpadding:1px;\r\n\t\tposition: relative\r\n\t} \r\n\t\r\n\t.service-icon{\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t} \r\n\t\r\n\t.service-icon-abs{\r\n\t\ttop: 0%;\r\n\t\tbottom: 0%;\r\n\t\toverflow: hidden;\r\n\t} \r\n\t\r\n\t.service-description-wrapper{\r\n\t\tword-wrap: break-word;\r\n\t\tpadding-left: 0px;\r\n\t\tpadding-right: 15px;\r\n\t} \r\n\t\r\n\t.service-description-heading{\r\n\t\tfont-family: 'Nunito', sans-serif;\r\n\t\tfont-style: normal;\r\n\t\tfont-weight: 600;\r\n\t\tcolor: #3f4c56;\r\n\t\tfont-size: 1.5em;\r\n\t\tcursor: pointer;\r\n\t\tline-height: 1.2em;\r\n\t\twidth: 12em;\r\n\t} \r\n\t\r\n\t/* .service-description-heading:after{\r\n\t\tcontent: '\\02192';\r\n\t\tpadding-left: 12px;\r\n\t\tfont-size: 1.5em;\r\n\t\tposition: relative;\r\n\t\ttop: -2px;\r\n\t\tleft: 2px;\r\n\t\topacity: 0;\r\n\t\ttransition: 0.5s;\r\n\t}\r\n\r\n\ta:hover  .service-description-heading:hover::after{\r\n\t\topacity: 1;\r\n\t\tleft: 6px;\r\n\t\ttop: -2px;\r\n\t\tfont-size: 1.5em;\t\t\r\n\t} */ \r\n\t\r\n\tsvg.rarrow {\r\n    position: relative;\r\n    width: 1.1em;\r\n    right: 0px;\r\n    right: 0rem;\r\n    opacity: 0;\r\n    top: 50%;\r\n    -webkit-transition: all 300ms ease-out;\r\n    transition: all 300ms ease-out;\r\n    will-change: right, opacity;\r\n\t} \r\n\t\r\n\t.service-description-wrapper:hover svg.rarrow{\r\n\t\topacity: 1;\r\n\t\tright: -1rem;\r\n\t} \r\n\t\r\n\t.service-description-paragraph{\r\n\t\tfont-family: 'Nunito', sans-serif;\r\n\t\tfont-style: normal;\r\n\t\tfont-weight: 400;\r\n\t\tcolor: #888e93;\r\n\t\tfont-size: 1rem;\r\n\t\ttext-align: left;\r\n\t\tline-height: 1.5em;\r\n\t} \r\n\t\r\n\t.service-nav-arrow{\r\n\t\tpadding-left: 12px;\r\n\t\tfont-size: 0.8em;\r\n\t\tline-height: em;\r\n\t\tposition: absolute;\r\n\t\ttop: 4px;\r\n\t} \r\n\t\r\n\t.home-services-container{\r\n\t\tpadding-bottom:  65px !important;\r\n\t} \r\n\t\r\n\t.home-services-container .row{\r\n\t\tmargin-left: 0px;\r\n\t\tmargin-right: 0px;\r\n\t} \r\n\t\r\n\t/*----------------------Mobile Phones Portrait---------------------------------*/ \r\n\t\r\n\t@media screen and (max-device-width: 480px) and (orientation: portrait){\r\n\t\r\n\t.margin-0px {\r\n\t\tmargin-left: 0px;\r\n\t\tmargin-right: 0px; \r\n\t}\r\n\t.services-list-row {\r\n\t\tpadding-bottom: 0px;\r\n\t}\r\n\t.service-description-heading{\r\n\t\tcolor: #e8e8e8;\r\n\t}\r\n\t.service-description-paragraph{\r\n\t\tcolor: #bfbfbf;\t\t\r\n\t}\r\n\r\n} \r\n\t\r\n\t/*----------------------Tablets---------------------------------*/ \r\n\t\r\n\t@media screen and (max-device-width: 767px){\r\n\t.service-icon{\r\n\t\t width: 35%;\r\n\t}\r\n\r\n\t.service-description-wrapper{\r\n\t\t margin-top: -20px;\r\n\t}\r\n\r\n\t.service-icon-abs{\r\n\t\t margin-left: -20px;\r\n\t}\r\n\r\n}"

/***/ }),

/***/ "./src/app/Components/menu-list/menuList.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row margin-0px {{menuListPosition}}\">\r\n    <!-- <div *ngFor=\"let menus of menuList; let index = index\" class=\"col-sm-{{12/menuColumn}}\">\r\n        <div class=\"menu-content\">\r\n            <h1>{{menus.category}}</h1>\r\n            <h5>{{menus.content}}</h5>\r\n            <ul>\r\n                <li *ngFor=\"let menuList of menus.subCategory\">\r\n                    <a routerLink=\"{{menuList.url}}\">{{menuList.name}}\r\n                        <i class=\"ion-ios-arrow-thin-right arrow-icon\"></i>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"container-fluid home-services-container\">\r\n        <div class=\"row\">\r\n            <div class=\"services-list-row col-lg-4 col-md-6\">\r\n                <a>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4 service-icon-wrapper\">\r\n                            <div class=\"service-icon-abs\">\r\n                                <svg class=\"service-icon\" data-name=\"Слой 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\">\r\n                                    <path d=\"M64.38,49.29h-2V41.41H73.55a3.72,3.72,0,0,1,3.71,3.72v8.31a3.72,3.72,0,0,1-3.71,3.72H63.38v-2H73.55a1.72,1.72,0,0,0,1.71-1.72V45.13a1.72,1.72,0,0,0-1.71-1.72H64.38Zm5.34-5.88v3.13h2V43.41m-5.67,0v3.13h2V43.41m-12.39-11v-1H44.42a2,2,0,0,1-2-2V26a2,2,0,0,1,2-2H55.67a2,2,0,0,1,2,2v3.38a2,2,0,0,1-2,2v2a4,4,0,0,0,4-4V26a4,4,0,0,0-4-4H44.42a4,4,0,0,0-4,4v3.38a4,4,0,0,0,4,4H55.67Zm1.5,6v-1H42.83a2,2,0,0,1,0-4H57.17a2,2,0,0,1,0,4v2a4,4,0,0,0,0-8H42.83a4,4,0,0,0,0,8H57.17ZM45,38.37V62.55a1,1,0,0,0,2,0V38.37a1,1,0,0,0-2,0m4,0V62.55a1,1,0,0,0,2,0V38.37a1,1,0,0,0-2,0m4.39,0V62.55a1,1,0,0,0,2,0V38.37a1,1,0,0,0-2,0m4.46-.4V65.34l-7.71,10-7.79-10V38a1,1,0,1,0-2,0V65.68a1,1,0,0,0,.21.61L49.35,77.6a1,1,0,0,0,1.58,0l8.71-11.31a1,1,0,0,0,.21-.61V38a1,1,0,1,0-2,0ZM50.14,77l.79.61,8.42-10.94a1,1,0,0,0,0-1.26A12.29,12.29,0,0,0,50,61.55a12.38,12.38,0,0,0-9.2,3.7,1,1,0,0,0,0,1.28L49.4,77.6a1,1,0,0,0,1.58,0L50.14,77l.79-.61-8.6-11.07-.79.61.74.67a10.42,10.42,0,0,1,7.71-3,10.33,10.33,0,0,1,7.81,3.15l.76-.65-.79-.61-8.42,10.9.79.61.79-.61Zm0,0,.79.61,6.33-8.22a1,1,0,0,0-.18-1.4L57,67.92a14,14,0,0,0-13.74,0,1,1,0,0,0-.32,1.38l.06.08,6.39,8.22a1,1,0,0,0,1.58,0L50.14,77l.79-.61-6.39-8.22-.79.61.51.86a12,12,0,0,1,11.69,0l.51-.86-.79-.61-6.33,8.22.79.61.79-.61Zm0,0,3.47-4.5a13.28,13.28,0,0,0-7,0Zm0,0,.79.61,3.47-4.5a1,1,0,0,0-.53-1.57,14.28,14.28,0,0,0-7.5,0,1,1,0,0,0-.53,1.58l3.51,4.51a1,1,0,0,0,1.58,0L50.14,77l.79-.61-3.51-4.51-.79.61.26,1a12.28,12.28,0,0,1,6.45,0l.26-1-.79-.61-3.47,4.5.79.61.79-.61ZM37.62,49.29V41.41H26.45a3.72,3.72,0,0,0-3.71,3.72v8.31a3.72,3.72,0,0,0,3.71,3.72H36.62v-2H26.45a1.72,1.72,0,0,1-1.71-1.72V45.13a1.72,1.72,0,0,1,1.71-1.72h9.17v5.88Zm-9.34-6.87v4.13h2V42.41m1.67,0v4.13h2V42.41\"/>\r\n                                </svg>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-8 service-description-wrapper\">\r\n                            <a routerLink=\"/ui-ux\" style=\"cursor:pointer\">\r\n                            <h2 class=\"service-description-heading\" id=\"service-description-heading\">UX/UI\r\n                            <svg class=\"rarrow\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 36.1 25.8\" enable-background=\"new 0 0 36.1 25.8\" xml:space=\"preserve\"> <g> <line fill=\"none\" stroke=\"#3f4c56\" stroke-width=\"3\" stroke-miterlimit=\"10\" x1=\"0\" y1=\"12.9\" x2=\"34\" y2=\"12.9\"></line> <polyline fill=\"none\" stroke=\"#3f4c56\" stroke-width=\"3\" stroke-miterlimit=\"10\" points=\"22.2,1.1 34,12.9 22.2,24.7   \"></polyline> </g> </svg>\r\n                            </h2>\r\n                            </a>\r\n                            <h5 class=\"service-description-paragraph\">Our core strengths lie in user experience and user interface design. We consider it our responsibility to understand the\r\n                            business goals of the software and design it so that it achieves them as best as it could. To do this we take into consideration\r\n                            of the target market, the platforms of delivery and the technological constraints and only then design the application that\r\n                            produces the best result</h5>\r\n                        </div>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <div class=\"services-list-row col-lg-4 col-md-6\">\r\n                <a>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4 service-icon-wrapper\">\r\n                            <div class=\"service-icon-abs\">\r\n                                <svg class=\"service-icon\" data-name=\"Слой 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\">\r\n                                    <path d=\"M53.48,56.21a1,1,0,0,1-1.41-.07l-3.81-4.2-.08-.14a1,1,0,0,1,0-1.26L52,46.34a1,1,0,0,1,1.48,1.34L50.3,51.22l3.24,3.58A1,1,0,0,1,53.48,56.21Zm12.44-5.69-3.81-4.2a1,1,0,0,0-1.48,1.34l3.21,3.54L60.6,54.78a1,1,0,0,0,1.48,1.34l3.81-4.2.09-.14a1,1,0,0,0-.06-1.27ZM56.31,55.8l2.79-8.52a1,1,0,0,0-1.9-.62l-2.79,8.52a1,1,0,0,0,1.9.62ZM57,37a1,1,0,0,0,1-1V25.65A3.66,3.66,0,0,0,54.34,22H33.66A3.66,3.66,0,0,0,30,25.65v48.7A3.66,3.66,0,0,0,33.66,78H54.34A3.66,3.66,0,0,0,58,74.35V66a1,1,0,0,0-2,0v8.35A1.66,1.66,0,0,1,54.34,76H33.66A1.66,1.66,0,0,1,32,74.35V25.65A1.66,1.66,0,0,1,33.66,24H37v.5h0A1.47,1.47,0,0,0,38.44,26H49.56A1.47,1.47,0,0,0,51,24.5h0V24h3.34A1.66,1.66,0,0,1,56,25.65V36A1,1,0,0,0,57,37ZM70,50.67A13,13,0,1,0,56.88,63.55H57A12.94,12.94,0,0,0,70,50.67Zm-2,0A11,11,0,1,1,56.89,39.78H57A10.94,10.94,0,0,1,68,50.66Z\"\r\n                                    />\r\n                                </svg>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-8 service-description-wrapper\">\r\n                            <a routerLink=\"/mobile-development\" style=\"cursor:pointer\">\r\n                            <h2 class=\"service-description-heading\">Mobile Applications\r\n                            <svg class=\"rarrow\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 36.1 25.8\" enable-background=\"new 0 0 36.1 25.8\" xml:space=\"preserve\"> <g> <line fill=\"none\" stroke=\"#3f4c56\" stroke-width=\"3\" stroke-miterlimit=\"10\" x1=\"0\" y1=\"12.9\" x2=\"34\" y2=\"12.9\"></line> <polyline fill=\"none\" stroke=\"#3f4c56\" stroke-width=\"3\" stroke-miterlimit=\"10\" points=\"22.2,1.1 34,12.9 22.2,24.7   \"></polyline> </g> </svg>\r\n                            </h2>\r\n                            <h5 class=\"service-description-paragraph\">Offers end-to-end services for mobile application development across all major mobile platforms. We build applications that\r\n                            increase business efficiency and expand revenue opportunities through mobilization of processes and integrations with existing\r\n                            system.</h5>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <div class=\"services-list-row col-lg-4 col-md-6\">\r\n                <a>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4 service-icon-wrapper\">\r\n                            <div class=\"service-icon-abs\">\r\n                                <svg class=\"service-icon\" id=\"Слой_1\" data-name=\"Слой 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\">\r\n                                    <path d=\"M65.13,28.94a4.8,4.8,0,1,0,4.8,4.8A4.8,4.8,0,0,0,65.13,28.94Zm0,7.2a2.4,2.4,0,1,1,2.4-2.4A2.4,2.4,0,0,1,65.13,36.14ZM76,35.87l-1.39-.8a9.49,9.49,0,0,0,0-2.66l1.39-.8A1.2,1.2,0,0,0,76.46,30l-2.4-4.16a1.2,1.2,0,0,0-1.64-.44l-1.39.8a9.68,9.68,0,0,0-2.3-1.33v-1.6a1.2,1.2,0,0,0-1.2-1.2h-4.8a1.2,1.2,0,0,0-1.2,1.2v1.6a9.68,9.68,0,0,0-2.3,1.33l-1.39-.8a1.2,1.2,0,0,0-1.64.44L53.8,30a1.2,1.2,0,0,0,.44,1.64l1.39.8a9.49,9.49,0,0,0,0,2.66l-1.39.8a1.2,1.2,0,0,0-.44,1.64l2.4,4.16a1.2,1.2,0,0,0,1.64.44l1.39-.8a9.68,9.68,0,0,0,2.3,1.33v1.6a1.2,1.2,0,0,0,1.2,1.2h4.8a1.2,1.2,0,0,0,1.2-1.2v-1.6A9.68,9.68,0,0,0,71,41.3l1.39.8a1.2,1.2,0,0,0,1.64-.44l2.4-4.16A1.2,1.2,0,0,0,76,35.87Zm-3.89-3.8a7.15,7.15,0,0,1,0,3.33,1.2,1.2,0,0,0,.57,1.32l1.08.63-1.2,2.08L71.5,38.8a1.2,1.2,0,0,0-1.42.17,7.23,7.23,0,0,1-2.88,1.67,1.2,1.2,0,0,0-.86,1.15V43h-2.4V41.79a1.2,1.2,0,0,0-.86-1.15A7.23,7.23,0,0,1,60.19,39a1.2,1.2,0,0,0-1.42-.17l-1.09.63-1.2-2.08,1.08-.63a1.2,1.2,0,0,0,.57-1.32,7.15,7.15,0,0,1,0-3.33,1.2,1.2,0,0,0-.57-1.32l-1.08-.63L57.68,28l1.09.63a1.2,1.2,0,0,0,1.42-.17,7.24,7.24,0,0,1,2.88-1.67,1.2,1.2,0,0,0,.86-1.15V24.44h2.4v1.25a1.2,1.2,0,0,0,.86,1.15,7.24,7.24,0,0,1,2.88,1.67,1.2,1.2,0,0,0,1.42.17L72.58,28l1.2,2.08-1.08.63A1.2,1.2,0,0,0,72.13,32.07Zm1.61,21.45H73a4.17,4.17,0,0,0-.33-.8l.51-.51a1.2,1.2,0,0,0-1.7-1.7L71,51a4.18,4.18,0,0,0-.8-.33V50a1.2,1.2,0,1,0-2.4,0v.72A4.17,4.17,0,0,0,67,51l-.51-.51a1.2,1.2,0,0,0-1.7,1.7l.51.51a4.18,4.18,0,0,0-.33.8h-.72a1.2,1.2,0,1,0,0,2.4H65a4.17,4.17,0,0,0,.33.8l-.51.51a1.2,1.2,0,1,0,1.7,1.7l.51-.51a4.18,4.18,0,0,0,.8.33v.72a1.2,1.2,0,1,0,2.4,0v-.72a4.17,4.17,0,0,0,.8-.33l.51.51a1.2,1.2,0,1,0,1.7-1.7l-.51-.51a4.18,4.18,0,0,0,.33-.8h.72a1.2,1.2,0,0,0,0-2.4Zm-6.54,1.2a1.8,1.8,0,1,1,1.8,1.8A1.8,1.8,0,0,1,67.2,54.72ZM41.52,52a8.2,8.2,0,1,0,8.2,8.2A8.21,8.21,0,0,0,41.52,52Zm0,14a5.8,5.8,0,1,1,5.8-5.8A5.8,5.8,0,0,1,41.52,66ZM58.46,55.67H54.87a14,14,0,0,0-.72-1.73l2.54-2.54a1.2,1.2,0,0,0,0-1.7L52,45a1.2,1.2,0,0,0-1.7,0l-2.54,2.54A14,14,0,0,0,46,46.84V43.24a1.2,1.2,0,0,0-1.2-1.2H38.2a1.2,1.2,0,0,0-1.2,1.2v3.59a14,14,0,0,0-1.73.72L32.73,45A1.2,1.2,0,0,0,31,45L26.35,49.7a1.2,1.2,0,0,0,0,1.7l2.54,2.54a14,14,0,0,0-.72,1.73H24.58a1.2,1.2,0,0,0-1.2,1.2V63.5a1.2,1.2,0,0,0,1.2,1.2h3.59a14,14,0,0,0,.72,1.73L26.35,69a1.2,1.2,0,0,0,0,1.7L31,75.36a1.2,1.2,0,0,0,1.7,0l2.54-2.54a14,14,0,0,0,1.73.72v3.59a1.2,1.2,0,0,0,1.2,1.2h6.63a1.2,1.2,0,0,0,1.2-1.2V73.53a14,14,0,0,0,1.73-.72l2.54,2.54a1.2,1.2,0,0,0,1.7,0l4.69-4.69a1.2,1.2,0,0,0,0-1.7l-2.54-2.54a14,14,0,0,0,.72-1.73h3.59a1.2,1.2,0,0,0,1.2-1.2V56.87A1.2,1.2,0,0,0,58.46,55.67Zm-1.2,6.63H54a1.2,1.2,0,0,0-1.16.89A11.63,11.63,0,0,1,51.63,66a1.2,1.2,0,0,0,.19,1.45l2.32,2.32-3,3-2.32-2.33a1.2,1.2,0,0,0-1.45-.19,11.62,11.62,0,0,1-2.85,1.19,1.2,1.2,0,0,0-.89,1.16v3.28H39.4V72.64a1.2,1.2,0,0,0-.89-1.16,11.62,11.62,0,0,1-2.85-1.19,1.2,1.2,0,0,0-1.45.19l-2.32,2.32-3-3,2.32-2.32A1.2,1.2,0,0,0,31.41,66a11.62,11.62,0,0,1-1.19-2.85,1.2,1.2,0,0,0-1.16-.89H25.78V58.07h3.28a1.2,1.2,0,0,0,1.16-.89,11.62,11.62,0,0,1,1.19-2.85,1.2,1.2,0,0,0-.19-1.45l-2.33-2.32,3-3,2.32,2.32a1.2,1.2,0,0,0,1.45.19,11.62,11.62,0,0,1,2.85-1.19,1.2,1.2,0,0,0,.89-1.16V44.44h4.23v3.28a1.2,1.2,0,0,0,.89,1.16,11.62,11.62,0,0,1,2.85,1.19,1.2,1.2,0,0,0,1.45-.19l2.32-2.33,3,3-2.32,2.33a1.2,1.2,0,0,0-.19,1.45,11.63,11.63,0,0,1,1.19,2.85,1.2,1.2,0,0,0,1.16.89h3.28V62.3Zm-11-2.42L44,62.11l-.71-.71,1.52-1.52-1.52-1.52.71-.71Zm-8,0,1.52,1.52-.71.71-2.23-2.23L39,57.65l.71.71ZM39.95,63l2.17-6,.95.34-2.17,6Z\" />\r\n                                </svg>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-8 service-description-wrapper\">\r\n                            <a routerLink=\"#\" style=\"cursor:pointer\">\r\n                            <h2 class=\"service-description-heading\">Product Development                           \r\n                            <svg class=\"rarrow\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 36.1 25.8\" enable-background=\"new 0 0 36.1 25.8\" xml:space=\"preserve\"> <g> <line fill=\"none\" stroke=\"#3f4c56\" stroke-width=\"3\" stroke-miterlimit=\"10\" x1=\"0\" y1=\"12.9\" x2=\"34\" y2=\"12.9\"></line> <polyline fill=\"none\" stroke=\"#3f4c56\" stroke-width=\"3\" stroke-miterlimit=\"10\" points=\"22.2,1.1 34,12.9 22.2,24.7   \"></polyline> </g> </svg></h2>\r\n                            </a> \r\n                            <h5 class=\"service-description-paragraph\">Our next generation product engineering solutions help product companies and Startups to realise competitive advantage by\r\n                            leveraging a distributed global product R&D in all aspects of product life cycle.\r\n</h5>\r\n                        </div>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <div class=\"services-list-row col-lg-4 col-md-6\">\r\n                <a>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4 service-icon-wrapper\">\r\n                            <div class=\"service-icon-abs\">\r\n                                <svg class=\"service-icon\" id=\"Слой_1\" data-name=\"Слой 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\">\r\n                                    <path d=\"M73.88,44.56a12.41,12.41,0,0,0-11.94-8.85H61.7a12.48,12.48,0,0,0-23.31,0H38.1a12.41,12.41,0,0,0-12,8.85L22.35,56.88V77.65h.89a8,8,0,0,0,6.23-3v1.2h.89a8,8,0,0,0,6.24-3v1.2h.89a8,8,0,0,0,8-8V63.39H43.76v2.67a6.25,6.25,0,0,1-5.32,6.18V66.92H36.61v.89A6.25,6.25,0,0,1,31.29,74V68.68H29.47v.89a6.25,6.25,0,0,1-5.32,6.18V57.28l3.71-12.19a10.64,10.64,0,0,1,10-7.57A12.42,12.42,0,0,0,42,49.73v1.15H40.18v1.79H42v1.8H40.18v1.79H42v3.57h1.79v1.79h1.78v-1.8h8.93V61.6h1.79V59.82H58V56.24h1.79V54.47H58V52.68h1.79V50.89H58V49.74A12.42,12.42,0,0,0,62.2,37.52a10.64,10.64,0,0,1,10,7.57l3.71,12.19V75.82a6.25,6.25,0,0,1-5.32-6.18v-.89H68.74v5.32a6.25,6.25,0,0,1-5.32-6.18V67H61.6v5.32a6.25,6.25,0,0,1-5.32-6.18V63.39H54.47v2.67a8,8,0,0,0,8,8h.89v-1.2a8,8,0,0,0,6.24,3h.89v-1.2a8,8,0,0,0,6.24,3h.88V57.14ZM56.24,58H43.76V56.24H56.24Zm0-3.57H43.76V52.68H56.24Zm.34-5.85-.34.27v2H50.93V44.5a4.47,4.47,0,1,0-1.79,0v6.38H43.82v-2l-.34-.27a10.71,10.71,0,1,1,13.18,0ZM50,42.86a2.68,2.68,0,1,1,2.68-2.68A2.68,2.68,0,0,1,50,42.86ZM70.53,67V57l-2.73-7.3-1.67.63,2.62,7V67ZM61.6,52.68h1.79v12.5H61.6ZM29.47,67h1.79V57.3l2.62-7-1.67-.63L29.47,57Zm7.14-14.28H38.4V65.18H36.61Zm10.71,8.92h1.79V74.1H47.32Zm0,14.28h1.79v1.78H47.32Zm3.57-14.28h1.79V72.34H50.89Zm0,12.5h1.79v1.79H50.89ZM49.11,22.35h1.79V25.9H49.11Zm-7.25,1.94,1.77,3.08-1.54.89L40.3,25.18ZM35,30.48l3.1,1.79-.85,1.54L34,32Zm30,0L66,32l-3.19,1.79-.89-1.54Zm-6.87-6.2,1.54.89-1.79,3.1-1.52-.89Z\" />\r\n                                </svg>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-8 service-description-wrapper\">\r\n                            <a routerLink=\"#\" style=\"cursor:pointer\">\r\n                            <h2 class=\"service-description-heading\">Startup Accelerator                            \r\n                            <svg class=\"rarrow\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 36.1 25.8\" enable-background=\"new 0 0 36.1 25.8\" xml:space=\"preserve\"> <g> <line fill=\"none\" stroke=\"#3f4c56\" stroke-width=\"3\" stroke-miterlimit=\"10\" x1=\"0\" y1=\"12.9\" x2=\"34\" y2=\"12.9\"></line> <polyline fill=\"none\" stroke=\"#3f4c56\" stroke-width=\"3\" stroke-miterlimit=\"10\" points=\"22.2,1.1 34,12.9 22.2,24.7   \"></polyline> </g> </svg></h2></a><h5 class=\"service-description-paragraph\">Wondering where to start !. Let us help you to launch or grow your business. We help entrepreneurs and SMEs to plan, design, build and market their web and mobile based product or solutions with our product development life cycle</h5>\r\n                        </div>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <div class=\"services-list-row col-lg-4 col-md-6\">\r\n                <a>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4 service-icon-wrapper\">\r\n                            <div class=\"service-icon-abs\">\r\n                                <svg class=\"service-icon\" id=\"Слой_1\" data-name=\"Слой 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\">\r\n                                    <path d=\"M74.24,26.65H25.76a3.41,3.41,0,0,0-3.39,3.41V63a3.41,3.41,0,0,0,3.41,3.41H42.16l-.66,5.31H38.75a.81.81,0,1,0,0,1.62H61.25a.81.81,0,0,0,0-1.62H58.5l-.66-5.31h16.4A3.41,3.41,0,0,0,77.63,63V30A3.41,3.41,0,0,0,74.24,26.65Zm-31.12,45,.66-5.31h3l.3,1.17a3,3,0,0,0,5.88,0l.3-1.17h3l.66,5.31Zm5.31-5.31h3.12l-.19.78a1.4,1.4,0,0,1-2.73,0Zm27.63-3.41h0a1.79,1.79,0,0,1-1.79,1.79H25.76A1.79,1.79,0,0,1,24,62.94h0V30a1.79,1.79,0,0,1,1.79-1.79H74.24A1.79,1.79,0,0,1,76,30h0V62.94ZM70.82,30H29.22a.81.81,0,0,0-.81.81h0V62a.81.81,0,0,0,.81.81H31a.81.81,0,0,0,0-1.62H30V31.66H70.78a.81.81,0,0,0,0-1.62Zm0,0H69a.81.81,0,1,0,0,1.62H70V61.16H29.22a.81.81,0,0,0,0,1.62H70.78a.81.81,0,0,0,.81-.81V30.84a.81.81,0,0,0-.81-.81Zm-8.88,9a.81.81,0,0,0-.61-.31l-19.09-.83h0a1.68,1.68,0,0,0-.67-.9l-2.33-1.55a.82.82,0,0,0-.94,1.34l2.32,1.56h0l3,10.41a2.55,2.55,0,0,0,.44.87L43,51.69a1.68,1.68,0,0,0,.49,2.08,2.54,2.54,0,1,0,4.57.34h7.36a2.54,2.54,0,1,0,4.64-.21.81.81,0,0,0-.5-1.36H44.47a.05.05,0,0,1,0-.07h0l1-2a2.54,2.54,0,0,0,.64.09h.31L57.8,49.2a3.4,3.4,0,0,0,2.94-2.72l1.36-6.81a.81.81,0,0,0-.21-.67Zm-4.14,15.2a.92.92,0,1,1-.92.92h0A.92.92,0,0,1,57.79,54.17Zm-12.12,0a.92.92,0,1,1-.92.92h0A.92.92,0,0,1,45.67,54.17ZM43.69,43l-1.06-3.55,3.19.15.56,3.4Zm2.49,5.89a.91.91,0,0,1-1-.66l-1.06-3.61h2.59l.68,4.12Zm4.75-.56L49,48.57l-.66-3.91h2.54Zm0-5.31H48.11l-.55-3.33,3.36.15ZM55,47.84l-2.49.29V44.65h2.77ZM55.46,43H52.54V39.91l3.19.15Zm3.63,3.14a1.79,1.79,0,0,1-1.54,1.42l-.88.11.27-3h2.45ZM59.72,43H57.09l.27-2.88,2.92.14Z\"\r\n                                    />\r\n                                </svg>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-8 service-description-wrapper\">\r\n                            <a routerLink=\"#\" style=\"cursor:pointer\">\r\n                            <h2 class=\"service-description-heading\">E-commerce                            \r\n                            <svg class=\"rarrow\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 36.1 25.8\" enable-background=\"new 0 0 36.1 25.8\" xml:space=\"preserve\"> <g> <line fill=\"none\" stroke=\"#3f4c56\" stroke-width=\"3\" stroke-miterlimit=\"10\" x1=\"0\" y1=\"12.9\" x2=\"34\" y2=\"12.9\"></line> <polyline fill=\"none\" stroke=\"#3f4c56\" stroke-width=\"3\" stroke-miterlimit=\"10\" points=\"22.2,1.1 34,12.9 22.2,24.7   \"></polyline> </g> </svg></h2></a> <h5 class=\"service-description-paragraph\">We have  strong expertise in building e-commerce websites  with different platforms like Woocommerce, Magento, Opencart and custom build with guaranteed rich user experience.</h5>\r\n                        </div>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <div class=\"services-list-row col-lg-4 col-md-6\">\r\n                <a>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4 service-icon-wrapper\">\r\n                            <div class=\"service-icon-abs\">\r\n                                <svg class=\"service-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\">\r\n                                    <path d=\"M64,50.8c-1.8,0-3.5,0.4-5.1,1l-2.2-4.2c4.2-2.3,7.1-6.9,7.1-12c0-7.6-6.2-13.7-13.7-13.7s-13.7,6.2-13.7,13.7\r\n                                    \tc0,5.3,3,9.8,7.3,12.1l-2.2,4.2c-1.6-0.7-3.5-1.1-5.4-1.1c-7.6,0-13.7,6.2-13.7,13.7S28.4,78.2,36,78.2s13.7-6.2,13.7-13.7\r\n                                    \tc0-5-2.7-9.3-6.6-11.7l2.3-4.3c1.4,0.5,3,0.8,4.6,0.8c1.7,0,3.3-0.3,4.8-0.9l2.3,4.3c-4.1,2.4-6.9,6.8-6.9,11.9\r\n                                    \tc0,7.6,6.2,13.7,13.7,13.7s13.7-6.2,13.7-13.7S71.6,50.8,64,50.8z M47.7,64.5c0,6.5-5.3,11.7-11.7,11.7S24.3,71,24.3,64.5\r\n                                    \tS29.5,52.8,36,52.8S47.7,58,47.7,64.5z M38.3,35.5c0-6.5,5.3-11.7,11.7-11.7S61.7,29,61.7,35.5S56.5,47.2,50,47.2S38.3,42,38.3,35.5\r\n                                    \tz M64,76.2c-6.5,0-11.7-5.3-11.7-11.7S57.5,52.8,64,52.8S75.7,58,75.7,64.5S70.5,76.2,64,76.2z M36.1,65.1c3.7,0,6.6,2.9,6.6,6.5\r\n                                    \th-1.6c0-2.7-2.3-4.9-5-4.9c-2.8,0-5,2.2-5,4.9h-1.6C29.4,68,32.4,65.1,36.1,65.1z M31.7,60.2c0,2.4,2,4.4,4.4,4.4\r\n                                    \tc2.4,0,4.4-2,4.4-4.4c0-2.4-2-4.4-4.4-4.4C33.6,55.8,31.7,57.8,31.7,60.2z M36.1,57.4c1.5,0,2.8,1.3,2.8,2.8c0,1.5-1.3,2.8-2.8,2.8\r\n                                    \tc-1.5,0-2.8-1.3-2.8-2.8C33.3,58.6,34.5,57.4,36.1,57.4z M70.8,71.6h-1.6c0-2.7-2.3-4.9-5-4.9c-2.8,0-5,2.2-5,4.9h-1.6\r\n                                    \tc0-3.6,3-6.5,6.6-6.5S70.8,68,70.8,71.6z M64.1,64.6c2.4,0,4.4-2,4.4-4.4c0-2.4-2-4.4-4.4-4.4c-2.4,0-4.4,2-4.4,4.4\r\n                                    \tC59.7,62.6,61.7,64.6,64.1,64.6z M64.1,57.4c1.5,0,2.8,1.3,2.8,2.8c0,1.5-1.3,2.8-2.8,2.8c-1.5,0-2.8-1.2-2.8-2.8\r\n                                    \tC61.3,58.6,62.6,57.4,64.1,57.4z M56.7,42.8h-1.6c0-2.7-2.3-4.9-5-4.9c-2.8,0-5,2.2-5,4.9h-1.6c0-3.6,3-6.5,6.6-6.5\r\n                                    \tS56.7,39.2,56.7,42.8z M50.1,35.8c2.4,0,4.4-2,4.4-4.4c0-2.4-2-4.4-4.4-4.4c-2.4,0-4.4,2-4.4,4.4C45.7,33.8,47.7,35.8,50.1,35.8z\r\n                                    \t M50.1,28.6c1.5,0,2.8,1.3,2.8,2.8c0,1.5-1.3,2.8-2.8,2.8c-1.5,0-2.8-1.2-2.8-2.8C47.3,29.9,48.6,28.6,50.1,28.6z\" />\r\n                                </svg>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-8 service-description-wrapper\">\r\n                            <a routerLink=\"#\" style=\"cursor:pointer\">\r\n                            <h2 class=\"service-description-heading\">ERP/ CRM                            \r\n                            <svg class=\"rarrow\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 36.1 25.8\" enable-background=\"new 0 0 36.1 25.8\" xml:space=\"preserve\"> <g> <line fill=\"none\" stroke=\"#3f4c56\" stroke-width=\"3\" stroke-miterlimit=\"10\" x1=\"0\" y1=\"12.9\" x2=\"34\" y2=\"12.9\"></line> <polyline fill=\"none\" stroke=\"#3f4c56\" stroke-width=\"3\" stroke-miterlimit=\"10\" points=\"22.2,1.1 34,12.9 22.2,24.7   \"></polyline> </g> </svg></h2></a> <h5 class=\"service-description-paragraph\">We offer the best ERP software solutions and help organizations in streamlining their processes and make strategic decisions that keep them efficient and profitable. At the same time also allow organizations to keep pace with ever-changing technology.</h5>\r\n                        </div>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <div class=\"services-list-row col-lg-4 col-md-6\">\r\n                <a>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4 service-icon-wrapper\">\r\n                            <div class=\"service-icon-abs\">\r\n                                <svg class=\"service-icon\" id=\"Слой_1\" data-name=\"Слой 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\">\r\n                                    <path d=\"M76.61,25.79H23.42a1.14,1.14,0,0,0-1.17,1.11s0,0,0,0V70.34a1.14,1.14,0,0,0,1.14,1.14H76.61a1.14,1.14,0,0,0,1.14-1.14V26.92A1.14,1.14,0,0,0,76.61,25.79Zm-1.06,2.28v6.83H24.49V28.06ZM24.49,69.2V37.15H75.54V69.2ZM39.91,42.85h-9A1.14,1.14,0,0,0,29.73,44v9.18a1.14,1.14,0,0,0,1.14,1.13h9.06a1.14,1.14,0,0,0,1.14-1.14V44a1.14,1.14,0,0,0-1.13-1.14ZM38.77,52H32V45.11h6.8Zm6.59,2.27h9.06a1.14,1.14,0,0,0,1.14-1.14V44a1.14,1.14,0,0,0-1.14-1.14h-9A1.14,1.14,0,0,0,44.26,44v9.18a1.14,1.14,0,0,0,1.14,1.13Zm1.14-9.18h6.8V52H46.54ZM59.9,54.29H69a1.14,1.14,0,0,0,1.14-1.14V44A1.14,1.14,0,0,0,69,42.85h-9A1.14,1.14,0,0,0,58.79,44v9.18a1.14,1.14,0,0,0,1.14,1.13ZM61,45.11h6.8V52H61.06Zm-21.09,12H30.87a1.14,1.14,0,0,0,0,2.27h9.06a1.14,1.14,0,1,0,.22-2.27h-.21Zm0,4.19H30.87a1.14,1.14,0,0,0,0,2.27h9.06a1.14,1.14,0,1,0,.22-2.27h-.21Zm14.6-4.19H45.48a1.14,1.14,0,0,0,0,2.27h9.06a1.14,1.14,0,0,0,.22-2.27Zm0,4.19H45.48a1.14,1.14,0,0,0,0,2.27h9.06a1.14,1.14,0,1,0,.22-2.27Zm14.61-4.19H60.09a1.14,1.14,0,0,0-.22,2.27h9.29a1.14,1.14,0,0,0,.22-2.27Zm0,4.25H60.09a1.14,1.14,0,0,0-.22,2.27h9.29a1.14,1.14,0,0,0,.22-2.27ZM30.87,32.57h.56a1.14,1.14,0,0,0,0-2.27h-.56a1.14,1.14,0,0,0,0,2.27Zm4.7,0h.62a1.14,1.14,0,0,0,0-2.27h-.56a1.14,1.14,0,0,0,0,2.27Zm4.7,0h.56a1.14,1.14,0,0,0,.22-2.27h-.78a1.14,1.14,0,0,0-.22,2.27Z\" />\r\n                                </svg>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-8 service-description-wrapper\">\r\n                            <a routerLink=\"/web-applications\" style=\"cursor:pointer\">\r\n                            <h2 class=\"service-description-heading\">Web Applications                            \r\n                            <svg class=\"rarrow\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 36.1 25.8\" enable-background=\"new 0 0 36.1 25.8\" xml:space=\"preserve\"> <g> <line fill=\"none\" stroke=\"#3f4c56\" stroke-width=\"3\" stroke-miterlimit=\"10\" x1=\"0\" y1=\"12.9\" x2=\"34\" y2=\"12.9\"></line> <polyline fill=\"none\" stroke=\"#3f4c56\" stroke-width=\"3\" stroke-miterlimit=\"10\" points=\"22.2,1.1 34,12.9 22.2,24.7   \"></polyline> </g> </svg></h2></a> <h5 class=\"service-description-paragraph\">Our company uses the well-known strategy to develop the incredible web applications for a wide range of end-to-end IT solutions for various enterprises worldwide. We combine strategy, latest technology, and best development practice helps to deliver efficient web applications.</h5>\r\n                        </div>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <div class=\"services-list-row col-lg-4 col-md-6\">\r\n                <a>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4 service-icon-wrapper\">\r\n                            <div class=\"service-icon-abs\">\r\n                                <svg class=\"service-icon\" id=\"Слой_1\" data-name=\"Слой 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\">\r\n                                    <path d=\"M71.27,52,50.56,37.93a1,1,0,0,0-1.06,0C41.59,43.29,29.67,51.49,28.89,52a1,1,0,0,0-.5.83v2.87a1,1,0,0,0,1,1h2.87V54.73H30.3V53.29c1.54-1,6-4,19.76-13.46L69.79,53.31V54.7H67.88v1.91h2.87a1,1,0,0,0,1-1V52.86A1,1,0,0,0,71.27,52ZM50,44.35a3.76,3.76,0,1,0,3.76,3.76v0A3.77,3.77,0,0,0,50,44.35ZM50,50a1.91,1.91,0,1,1,1.91-1.91A1.91,1.91,0,0,1,50,50Zm10.35,5.65H54.74a1,1,0,0,0-1,1V69.75a1,1,0,0,0,1,1h5.65a1,1,0,0,0,1-1V56.57A1,1,0,0,0,60.39,55.64Zm-1,13.18H55.68V66.9h3.76Zm0-3.76H55.68V57.52h3.76Zm13.18,7.52H70.7V70.44c1.24-.72,1.91-2.87,1.91-4.92,0-2.57-1-5.18-2.87-5.18s-2.87,2.6-2.87,5.18c0,2.1.64,4.21,1.91,4.92v2.13H65.09V53.75H63.18V72.57H51.95v-16a1,1,0,0,0-1-1H39.68a1,1,0,0,0-1,1v16H36.81V53.75H34.9V72.57H31.21V70.44c1.24-.72,1.91-2.87,1.91-4.92,0-2.57-1-5.18-2.87-5.18s-2.87,2.6-2.87,5.18c0,2.1.64,4.21,1.91,4.92v2.13H27.39a1,1,0,0,0-1,1v3.76a1,1,0,0,0,1,1H72.61a1,1,0,0,0,1-1V73.52A1,1,0,0,0,72.61,72.57ZM69.74,62.22c.27.09,1,1.23,1,3.3s-.7,3.21-1,3.3c-.27-.09-1-1.23-1-3.3s.77-3.21,1-3.3Zm-23.47-4.7H50V72.57H46.27Zm-5.65,0h3.76V72.57H40.62Zm-10.37,4.7c.27.09,1,1.23,1,3.3s-.7,3.21-1,3.3c-.27-.09-1-1.23-1-3.3S30,62.3,30.26,62.22ZM71.69,76.34H28.39V74.43H71.68ZM50,21.75a15.94,15.94,0,0,0-14.26,8.74l1.67.85a14.12,14.12,0,0,1,25.16,0l1.67-.85A15.94,15.94,0,0,0,50,21.75Zm0,5.65a10.37,10.37,0,0,0-10,7.65l1.82.5a8.48,8.48,0,0,1,16.34,0l1.82-.5a10.37,10.37,0,0,0-10-7.64Zm0,5.43a5.83,5.83,0,0,0-5.62,4.28l1.82.5a3.93,3.93,0,0,1,7.6,0l1.82-.5A5.84,5.84,0,0,0,50,32.83Z\"\r\n                                    />\r\n                                </svg>\r\n                        \r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-8 service-description-wrapper\">\r\n                            <a routerLink=\"#\" style=\"cursor:pointer\">\r\n                            <h2 class=\"service-description-heading\">IOT                            \r\n                            <svg class=\"rarrow\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 36.1 25.8\" enable-background=\"new 0 0 36.1 25.8\" xml:space=\"preserve\"> <g> <line fill=\"none\" stroke=\"#3f4c56\" stroke-width=\"3\" stroke-miterlimit=\"10\" x1=\"0\" y1=\"12.9\" x2=\"34\" y2=\"12.9\"></line> <polyline fill=\"none\" stroke=\"#3f4c56\" stroke-width=\"3\" stroke-miterlimit=\"10\" points=\"22.2,1.1 34,12.9 22.2,24.7   \"></polyline> </g> </svg></h2></a> <h5 class=\"service-description-paragraph\">Together with our products & services and experience with mobile and cloud technologies in various verticals, we are well positioned to be a supplier of solution and services in the IoT space. We help you manage the complexities of the Internet of Things, from devices to applications, big data to analytics, security and scalability, all in the cloud.</h5>\r\n                        </div>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            <div class=\"services-list-row col-lg-4 col-md-6\">\r\n                <a>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4 service-icon-wrapper\">\r\n                            <div class=\"service-icon-abs\">\r\n                                <svg class=\"service-icon\" id=\"Слой_1\" data-name=\"Слой 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\">\r\n                                    <path d=\"M38.37,27.47v4.61h1.79V27.47a2.68,2.68,0,1,0-1.79,0ZM39.28,24a.89.89,0,1,1-.89.89h0A.9.9,0,0,1,39.28,24Zm6.25,3.44v4.61h1.79V27.47a2.68,2.68,0,1,0-1.79,0Zm.89-3.42a.89.89,0,1,1-.89.89.9.9,0,0,1,.89-.91h0Zm6.26,3.42v4.61h1.79V27.47a2.68,2.68,0,1,0-1.79,0Zm.89-3.42a.89.89,0,1,1-.89.89.9.9,0,0,1,.89-.91h0Zm6.28,3.42v4.61h1.79V27.47a2.68,2.68,0,1,0-1.79,0ZM60.73,24a.89.89,0,1,1-.89.89A.9.9,0,0,1,60.73,24Zm-35.81,34a2.68,2.68,0,1,0,2.55,3.58h3.74V59.85H27.48A2.68,2.68,0,0,0,24.93,58.06Zm0,3.58a.89.89,0,1,1,.9-.91.9.9,0,0,1-.89.91Zm0-10.73a2.68,2.68,0,1,0,2.55,3.56h3.74V52.68H27.48a2.68,2.68,0,0,0-2.55-1.79Zm0,3.58a.89.89,0,1,1,.89-.89.9.9,0,0,1-.89.87Zm0-10.73a2.68,2.68,0,1,0,2.55,3.55h3.74V45.53H27.48a2.68,2.68,0,0,0-2.55-1.79Zm0,3.58a.89.89,0,1,1,.89-.89h0a.9.9,0,0,1-.89.86Zm0-10.73a2.68,2.68,0,1,0,2.55,3.53h3.74V38.36H27.48a2.68,2.68,0,0,0-2.55-1.79Zm0,3.58a.89.89,0,1,1,.9-.93.9.9,0,0,1-.9.88ZM61.65,72.53V67.91H59.85v4.61a2.68,2.68,0,1,0,1.79,0ZM60.73,76a.89.89,0,1,1,.89-.89A.9.9,0,0,1,60.73,76Zm-6.25-3.44V67.91H52.69v4.61a2.68,2.68,0,1,0,1.79,0Zm-.89,3.42a.89.89,0,1,1,.89-.89.9.9,0,0,1-.89.91h0Zm-6.26-3.42V67.91H45.53v4.61a2.68,2.68,0,1,0,1.79,0Zm-.89,3.42a.89.89,0,1,1,.89-.89.9.9,0,0,1-.89.91h0Zm-6.28-3.42V67.91H38.37v4.61a2.68,2.68,0,1,0,1.79,0ZM39.28,76a.89.89,0,1,1,.89-.89A.9.9,0,0,1,39.28,76Zm35.83-34a2.68,2.68,0,1,0-2.57-3.57H68.81v1.79h3.72a2.68,2.68,0,0,0,2.55,1.79Zm0-3.58a.89.89,0,1,1-.89.89.9.9,0,0,1,.87-.88Zm0,5.36a2.68,2.68,0,0,0-2.57,1.81H68.81v1.79h3.72a2.68,2.68,0,1,0,2.52-3.58Zm0,3.58a.89.89,0,1,1,.89-.89.9.9,0,0,1-.89.91h0Zm0,3.58a2.68,2.68,0,0,0-2.57,1.8H68.81v1.79h3.72a2.68,2.68,0,1,0,2.52-3.58Zm0,3.58a.89.89,0,1,1,.89-.89.9.9,0,0,1-.9.9h0Zm0,3.58a2.68,2.68,0,0,0-2.57,1.8H68.81v1.79h3.72a2.68,2.68,0,1,0,2.52-3.58Zm0,3.58a.89.89,0,1,1,.89-.89.9.9,0,0,1-.9.9h0ZM38.47,52.76a3.41,3.41,0,0,0-.11.83,3.58,3.58,0,0,0,1.81,3.11v.47a5.36,5.36,0,0,0,9.84,3,5.36,5.36,0,0,0,9.85-3v-.47a3.58,3.58,0,0,0,1.81-3.11,3.42,3.42,0,0,0-.11-.83,4.46,4.46,0,0,0,0-7.28,4.43,4.43,0,0,0-3.48-5.21l-.37-.06a4.46,4.46,0,0,0-7.7-.93,4.46,4.46,0,0,0-7.71.92,4.43,4.43,0,0,0-3.91,4.9q0,.19.06.37a4.46,4.46,0,0,0,0,7.28ZM50.9,41.94a2.68,2.68,0,1,1,2.68,2.68v1.79A4.47,4.47,0,0,0,58,42.13a2.68,2.68,0,0,1-.88,5.21v1.79a4.47,4.47,0,0,0,3.67-1.92,2.67,2.67,0,0,1-.76,4.36l-.86.39.43.84a1.72,1.72,0,0,1-.33,2.07,5.36,5.36,0,0,0-4.84-3V53.6a3.58,3.58,0,1,1-3.58,3.58ZM39.17,47.19a4.47,4.47,0,0,0,3.67,1.92V47.32A2.68,2.68,0,0,1,42,42.1a4.47,4.47,0,0,0,4.46,4.29V44.64A2.68,2.68,0,1,1,49.11,42V57.17a3.58,3.58,0,1,1-3.58-3.58V51.79a5.36,5.36,0,0,0-4.84,3,1.72,1.72,0,0,1-.33-2.07l.43-.84-.86-.39a2.67,2.67,0,0,1-.76-4.36ZM33,38.89v27.2H67V33.91H38Zm32.25-3.22V64.33H34.79V39.66l4-4Z\"\r\n                                    />\r\n                                </svg>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-8 service-description-wrapper\">\r\n                            <a routerLink=\"#\" style=\"cursor:pointer\">\r\n                            <h2 class=\"service-description-heading\">AI & Analytics                            \r\n                            <svg class=\"rarrow\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 36.1 25.8\" enable-background=\"new 0 0 36.1 25.8\" xml:space=\"preserve\"> <g> <line fill=\"none\" stroke=\"#3f4c56\" stroke-width=\"3\" stroke-miterlimit=\"10\" x1=\"0\" y1=\"12.9\" x2=\"34\" y2=\"12.9\"></line> <polyline fill=\"none\" stroke=\"#3f4c56\" stroke-width=\"3\" stroke-miterlimit=\"10\" points=\"22.2,1.1 34,12.9 22.2,24.7   \"></polyline> </g> </svg></h2></a> <h5 class=\"service-description-paragraph\">Businesses in almost every industry find themselves at risk of Digital Disruption. Organizations are re-thinking business strategies and looking for new ways to strengthen their competitive advantage. We provide the technology and expertise for companies to go beyond human limitations and create intelligent solutions previously impossible using traditional analytics or data science technologies.</h5>\r\n                        </div>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Components/menu-list/menuList.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_menu_list__ = __webpack_require__("./src/app/Services/menu-list.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuListComponent = (function () {
    function MenuListComponent() {
    }
    MenuListComponent.prototype.ngOnInit = function () {
        this.menuColumn = 3;
        this.menuList = __WEBPACK_IMPORTED_MODULE_1__Services_menu_list__["a" /* menuList */];
        this.menuListPosition = 'menu-list-section';
    };
    MenuListComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            $("a").mouseenter(function () {
                $(this).find("path").attr("fill", "#ccc");
            });
            $("a").mouseleave(function () {
                $(this).find("path").attr("fill", "#fff");
            });
        });
    };
    MenuListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-menu-list",
            template: __webpack_require__("./src/app/Components/menu-list/menuList.component.html"),
            styles: [__webpack_require__("./src/app/Components/menu-list/menuList.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuListComponent);
    return MenuListComponent;
}());



/***/ }),

/***/ "./src/app/Components/scrollify/scrollify.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*-----------Texts on slides----------------------*/\r\n\r\n.section .section-inner .text {\r\n\tpadding-top: 15%;\r\n\tcolor: white;\r\n}\r\n\r\n.section .section-inner .text h1 {\r\n\tfont-size: 1.5em;\r\n}\r\n\r\n#scrollDisabled::-webkit-scrollbar { \r\n    display: none !important;\r\n}\r\n\r\n/*--------------------------------------------------\r\n\tMedia Queries\r\n----------------------------------------------------*/\r\n\r\n/*-------------------Desktop Screens---------------------------*/\r\n\r\n@media screen and (min-width: 480px){\r\n  \r\n\t.container-fluid-custom-200px {\r\n\t\tpadding: 0px 200px 0px 200px;\r\n\t}\r\n\r\n\t/*---------------------------------------------\r\n\tScrollify animation slides\r\n-----------------------------------------------*/\r\n\r\n.section {\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\toverflow: hidden;\r\n\tposition: relative;\r\n    z-index: 5;\r\n}\r\n\r\n.section-fixed {\r\n    z-index: 1;\r\n}\r\n\r\n.section-fixed .section-inner {\r\n    position: fixed;\r\n    z-index: 2;\r\n    top: 0;\r\n    left: 0; \r\n}\r\n\r\n#first {\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\tbackground: url('r1.1455f4504db4febe3a6b.jpg') center / cover no-repeat;\r\n\t-webkit-transform: scale(1,1);\r\n\ttransform: scale(1,1);\r\n\t-webkit-transition: cubic-bezier(0.165, 0.84, 0.44, 1) 1s !important;\r\n\ttransition: cubic-bezier(0.165, 0.84, 0.44, 1) 1s !important;\r\n}\r\n\r\n#second {\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\tbackground: url('r3.99136688c6c2fe285201.jpg') center / cover no-repeat;\r\n\t-webkit-transform: scale(1.5,1.5);\r\n\ttransform: scale(1.5,1.5);\r\n\t-webkit-transition: cubic-bezier(0.165, 0.84, 0.44, 1) 1s !important;\r\n\ttransition: cubic-bezier(0.165, 0.84, 0.44, 1) 1s !important;\r\n}\r\n\r\n#third {\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\tbackground: url('r2.c89d5d3a49360e6557e5.jpg') center / cover no-repeat;\r\n\t-webkit-transition: scale(1.5,1.5);\r\n\t-moz-transition: scale(1.5,1.5);\r\n\t-webkit-transform: scale(1.5,1.5);\r\n\t        transform: scale(1.5,1.5);\r\n\t-webkit-transition: cubic-bezier(0.165, 0.84, 0.44, 1) 1s !important;\r\n\ttransition: cubic-bezier(0.165, 0.84, 0.44, 1) 1s !important;\r\n}\r\n\r\n\t.section .section-inner .text {\r\n\t\tpadding-top: 15%;\r\n\t}\r\n\r\n\t.section .section-inner .text h3 {\r\n\t\tfont-size: 1.5em;\r\n\t\tfont-family: 'Nunito', sans-serif;\r\n\t\tfont-weight: 300;\r\n\t\tfont-style: normal;\r\n\t}\r\n\r\n\t.section .section-inner .text h1 {\r\n\t\tfont-size: 1.5em;\r\n\t\tfont-family: 'Nunito', sans-serif;\r\n\t\tfont-weight: 600;\r\n\t\tfont-style: normal;\r\n\t\twidth: 36%;\r\n    }\r\n    \r\n}\r\n\r\n/*----------------------Tablets Portrait or Landscape----------------*/\r\n\r\n@media screen and (min-device-width: 768px) and (max-device-width: 1024px){\r\n\r\n    .container-fluid-custom-200px {\r\n      padding: 0px 130px 0px 130px;\r\n    }\r\n\r\n}\r\n\r\n/*----------------------Mobile Phones Portrait---------------------------------*/\r\n\r\n@media screen and (max-device-width: 480px) and (orientation: portrait){\r\n\r\n\r\n\t/*---------------------------------------------\r\n\tScrollify animation slides\r\n-----------------------------------------------*/\r\n\r\n.section {\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\toverflow: hidden;\r\n\t\r\n}\r\n\r\n.section-fixed {\r\n   \r\n}\r\n\r\n.section-fixed .section-inner {\r\n    \r\n}\r\n\r\n#first {\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\tbackground: url('r1.1455f4504db4febe3a6b.jpg') center / cover no-repeat;\t\r\n}\r\n\r\n#second {\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\tbackground: url('r3.99136688c6c2fe285201.jpg') center / cover no-repeat;\r\n}\r\n\r\n#third {\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\tbackground: url('r2.c89d5d3a49360e6557e5.jpg') center / cover no-repeat;\r\n}\r\n\r\n\t/*-----------Texts on slides----------------------*/\r\n\r\n\t.section .section-inner .text {\r\n\t\tpadding: 60% 0px 0px 10%;\r\n\t\tcolor: white;\r\n\t}\r\n\r\n\t.section .section-inner .text h3 {\r\n\t\twidth:80%;\r\n\t\tfont-size: 1.2em;\r\n\t}\r\n\r\n\t.section .section-inner .text h1 {\r\n\t\twidth:80%;\r\n\t\tfont-weight: 600;\r\n\t\tfont-size: 1.2em;\t\t\r\n\t}\r\n\r\n\t#scrollDisabled::-webkit-scrollbar { \r\n\t\tdisplay: none !important;\r\n\t}\r\n\t\r\n    \r\n}"

/***/ }),

/***/ "./src/app/Components/scrollify/scrollify.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Scrolling section -->\r\n  <section class=\"section\" id=\"section-one\">\r\n    <div class=\"section-inner\" id=\"first\">\r\n      <div class=\"container-fluid-custom-200px text\">\r\n        <h3>SHARED VISION</h3>\r\n        <h1>Create Share vision with Technologies that are causing disruptive changes in digital world. We share the same vision\r\n          with our partners.\r\n        </h1>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"section\" id=\"section-two\">\r\n    <div class=\"section-inner\" id=\"second\">\r\n      <div class=\"container-fluid-custom-200px text\">\r\n        <h3>CREATIVITY FOR BUSINESS RESULTS</h3>\r\n        <h1>Business is changing and you can thank creativity for that. The truth is they produce amazing results together and\r\n          we are creative to support your business.</h1>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"section\" id=\"section-three\">\r\n    <div class=\"section-inner\" id=\"third\">\r\n      <div class=\"container-fluid-custom-200px text\">\r\n        <h3>DIGITAL TRANSFORMATION</h3>\r\n        <h1>We helps organisations to accelerate ‘Digital Transformation’ using disruptive technologies in Web, Mobile, Analytics\r\n          and Cloud.\r\n        </h1>\r\n      </div>\r\n    </div>\r\n  </section>"

/***/ }),

/***/ "./src/app/Components/scrollify/scrollify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollifyComponent = (function () {
    function ScrollifyComponent() {
        this.windowTop = {
            value: window.pageYOffset
        };
    }
    ScrollifyComponent.prototype.ngOnInit = function () {
    };
    ScrollifyComponent.prototype.ngAfterViewInit = function () {
        // jQuery code starts here
        // $(document).ready(function () {
        // 	window.onbeforeunload = function () { window.scrollTo(0, 0); }
        // 	if(window.screenTop > (window.innerHeight*2) && window.screenTop < (window.innerHeight*2 + 100)){
        // 		console.log("inside function!");
        // 	}
        // 	//Event listeners for key inputs
        // 	$(document).keydown(function (event) {
        // 		// checking if contact modal is open
        // 		if(!$('#contactModal').hasClass('show')){
        // 		if (event.keyCode == 38 || event.keyCode == 33 ) { // up arrow key
        // 			if ($(document).scrollTop() > ($("#third").offset().top) && $(document).scrollTop() < ($("#third").offset().top + 200)) {
        // 				$('html, body').animate({
        // 					scrollTop: $("#second").offset().top + window.innerHeight
        // 				}, {
        // 						queue: false,
        // 						easing: $.bez([0.165, 0.84, 0.44, 1]),
        // 						duration: 100,
        // 					}
        // 				);
        // 			}
        // 			else if ($(document).scrollTop() > ($("#third").offset().top)) {
        // 				return true;
        // 			}
        // 			else {
        // 				event.preventDefault();
        // 				scrollToPrevious();
        // 			}
        // 		} else if (event.keyCode == 40 || event.keyCode == 34) { // down arrow key
        // 			if ($(document).scrollTop() >= $("#third").offset().top) {
        // 				$('#section-two').removeClass('section-fixed');
        // 				return true;
        // 			}
        // 			else {
        // 				event.preventDefault();
        // 				scrollToNext();
        // 			}
        // 		} else if (event.keyCode == 32) {
        // 			$('#nav-icon').click();
        // 			return false; 
        // 		} 
        // 		}
        // 	});
        // 	function scrollToPrevious() {
        // 		var prevElement = getCurrentlyVisibleSection().prevAll('section');
        // 		if (prevElement.length > 0) scrollToElement(prevElement, "up");
        // 	}
        // 	function scrollToNext() {
        // 		var nextElement = getCurrentlyVisibleSection().nextAll('section');
        // 		if (nextElement.length > 0) scrollToElement(nextElement, "down");
        // 	}
        // 	function scrollToElement(ctrl, dir) {
        // 		console.log(ctrl[0].id);
        // 		var element = ctrl[0].id;
        // 		if (element == "section-two" && dir == "down") {
        // 			$("#second").css({
        // 				'transform': 'scale(1,1)'
        // 			});
        // 			$('#second > .text').addClass('animated fadeInUp');
        // 			// Animate to the section using scrollTop window position
        // 			$('body,html').animate({
        // 				scrollTop: $("#first").offset().top + window.innerHeight
        // 			}, {
        // 					queue: false,
        // 					easing: $.bez([0.165, 0.84, 0.44, 1]),
        // 					duration: 1000,
        // 					complete: function () {
        // 						$('#section-one').removeClass('section-fixed');
        // 						$('#section-two').addClass('section-fixed');
        // 						setTimeout(function () {
        // 							$('#second > .text').removeClass('animated fadeInUp');
        // 							document.querySelector("#section-two").addEventListener("wheel", myFunction2);
        // 							// $(window).bind("wheel", function(){ return true;});
        // 						}, 350)
        // 					}
        // 				}
        // 			);
        // 		}
        // 		else if (element == "section-three" && dir == "down") {
        // 			$('#third > .text').addClass('animated fadeInUp');
        // 			$("#third").css({
        // 				'transform': 'scale(1,1)'
        // 			});
        // 			// Animate to the section using scrollTop window position
        // 			$('html, body').animate({
        // 				scrollTop: $("#second").offset().top + window.innerHeight
        // 			}, {
        // 					queue: false,
        // 					easing: $.bez([0.165, 0.84, 0.44, 1]),
        // 					duration: 1000,
        // 					complete: function () {
        // 						setTimeout(function () {
        // 							$('#third > .text').removeClass('animated fadeInUp');
        // 							document.querySelector("#section-three").addEventListener("wheel", myFunction3);
        // 						}, 350)
        // 					}
        // 				}
        // 			);
        // 		}
        // 		else if (element == "section-two" && dir == "up") {
        // 			$('#section-two').addClass('section-fixed');
        // 			$("#third").css({
        // 				'transform': 'scale(1.5,1.5)'
        // 			});
        // 			$('html, body').animate({
        // 				scrollTop: $("#first").offset().top + window.innerHeight
        // 			}, {
        // 					queue: false,
        // 					easing: $.bez([0.165, 0.84, 0.44, 1]),
        // 					duration: 1000,
        // 					complete: function () {
        // 						setTimeout(function () {
        // 							document.querySelector("#section-two").addEventListener("wheel", myFunction2);
        // 						}, 350)
        // 					}
        // 				});
        // 		}
        // 		else if (element == "section-one" && dir == "up") {
        // 			$('#section-two').removeClass('section-fixed');
        // 			$('#section-one').addClass('section-fixed');
        // 			$("#second").css({
        // 				'transform': 'scale(1.5,1.5)'
        // 			});
        // 			// Animate to the section using scrollTop window position
        // 			$('html, body').animate({
        // 				scrollTop: 0
        // 			}, {
        // 					queue: false,
        // 					easing: $.bez([0.165, 0.84, 0.44, 1]),
        // 					duration: 1000,
        // 					complete: function () {
        // 						setTimeout(function () {
        // 							document.querySelector("#section-one").addEventListener("wheel", myFunction1);
        // 						}, 250)
        // 					}
        // 				}
        // 			);
        // 		}
        // 	}
        // 	function getCurrentlyVisibleSection() {
        // 		$("#Section1").visible(true);
        // 		var rtn;
        // 		$.each($('section'), function (ind, val) {
        // 			if ($(this).visible(false)) {
        // 				//true here means ALL the element has to be visible.. change to False if you want ANY Part of the item to be visible.. 
        // 				rtn = $(this);
        // 			}
        // 		});
        // 		return rtn;
        // 	}
        // 	/* Function to determine which section is on the viewport so we can change to prev/next section on pressing respective arrow keys in keyboard */
        // 	var $w = $(window);
        // 	$.fn.visible = function (partial, hidden, direction) {
        // 		if (this.length < 1) return;
        // 		var $t = this.length > 1 ? this.eq(0) : this,
        // 			t = $t.get(0),
        // 			vpWidth = $w.width(),
        // 			vpHeight = $w.height(),
        // 			direction = (direction) ? direction : 'both',
        // 			clientSize = hidden === true ? t.offsetWidth * t.offsetHeight : true;
        // 		if (typeof t.getBoundingClientRect === 'function') {
        // 			// Use this native browser method, if available.
        // 			var rec = t.getBoundingClientRect(),
        // 				tViz = rec.top >= 0 && rec.top < vpHeight,
        // 				bViz = rec.bottom > 0 && rec.bottom <= vpHeight,
        // 				lViz = rec.left >= 0 && rec.left < vpWidth,
        // 				rViz = rec.right > 0 && rec.right <= vpWidth,
        // 				vVisible = partial ? tViz || bViz : tViz && bViz,
        // 				hVisible = partial ? lViz || lViz : lViz && rViz;
        // 			if (direction === 'both') return clientSize && vVisible && hVisible;
        // 			else if (direction === 'vertical') return clientSize && vVisible;
        // 			else if (direction === 'horizontal') return clientSize && hVisible;
        // 		} else {
        // 			var viewTop = $w.scrollTop(),
        // 				viewBottom = viewTop + vpHeight,
        // 				viewLeft = $w.scrollLeft(),
        // 				viewRight = viewLeft + vpWidth,
        // 				offset = $t.offset(),
        // 				_top = offset.top,
        // 				_bottom = _top + $t.height(),
        // 				_left = offset.left,
        // 				_right = _left + $t.width(),
        // 				compareTop = partial === true ? _bottom : _top,
        // 				compareBottom = partial === true ? _top : _bottom,
        // 				compareLeft = partial === true ? _right : _left,
        // 				compareRight = partial === true ? _left : _right;
        // 			if (direction === 'both') return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
        // 			else if (direction === 'vertical') return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
        // 			else if (direction === 'horizontal') return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
        // 		}
        // 	};
        // 	//Event listeners for div elements that needs section scrolling on mouse wheel
        // 	document.querySelector("#section-one").addEventListener("wheel", myFunction1);
        // 	document.querySelector("#section-two").addEventListener("wheel", myFunction2);
        // 	function myFunction1(event) {
        // 		event.preventDefault();
        // 		$("#scrolling").bind("wheel", function () { return false; });
        // 		document.querySelector("#section-one").removeEventListener("wheel", myFunction1);
        // 		document.querySelector("#section-two").removeEventListener("wheel", myFunction2);
        // 		if (event.deltaY > 0) { // if mousescroll direction is down
        // 			$("#second").css({
        // 				'transform': 'scale(1,1)'
        // 			});
        // 			$('#second > .text').addClass('animated fadeInUp');
        // 			// Animate to the section using scrollTop window position
        // 			$('body,html').animate({
        // 				scrollTop: $("#first").offset().top + window.innerHeight
        // 			}, {
        // 					queue: false,
        // 					easing: $.bez([0.165, 0.84, 0.44, 1]),
        // 					duration: 1000,
        // 					complete: function () {
        // 						$('#section-one').removeClass('section-fixed');
        // 						$('#section-two').addClass('section-fixed');
        // 						setTimeout(function () {
        // 							$('#second > .text').removeClass('animated fadeInUp');
        // 							document.querySelector("#section-two").addEventListener("wheel", myFunction2);
        // 							// $(window).bind("wheel", function(){ return true;});
        // 						}, 350)
        // 					}
        // 				}
        // 			);
        // 		}
        // 		else { // if mousescroll direction is up
        // 			document.querySelector("#section-one").addEventListener("wheel", myFunction1);
        // 		}
        // 	}
        // 	function myFunction2(event) {
        // 		event.preventDefault();
        // 		document.querySelector("#section-two").removeEventListener("wheel", myFunction2);
        // 		document.querySelector("#section-three").removeEventListener("wheel", myFunction3);
        // 		if (event.deltaY > 0) {  // if mousescroll direction is down 
        // 			$('#third > .text').addClass('animated fadeInUp');
        // 			$("#third").css({
        // 				'transform': 'scale(1,1)'
        // 			});
        // 			// Animate to the section using scrollTop window position
        // 			$('html, body').animate({
        // 				scrollTop: $("#second").offset().top + window.innerHeight
        // 			}, {
        // 					queue: false,
        // 					easing: $.bez([0.165, 0.84, 0.44, 1]),
        // 					duration: 1000,
        // 					complete: function () {
        // 						setTimeout(function () {
        // 							$('#third > .text').removeClass('animated fadeInUp');
        // 							document.querySelector("#section-three").addEventListener("wheel", myFunction3);
        // 						}, 350)
        // 					}
        // 				}
        // 			);
        // 		}
        // 		else { // if mousescroll direction is up
        // 			$('#section-two').removeClass('section-fixed');
        // 			$('#section-one').addClass('section-fixed');
        // 			$("#second").css({
        // 				'transform': 'scale(1.5,1.5)'
        // 			});
        // 			// Animate to the section using scrollTop window position
        // 			$('html, body').animate({
        // 				scrollTop: 0
        // 			}, {
        // 					queue: false,
        // 					easing: $.bez([0.165, 0.84, 0.44, 1]),
        // 					duration: 1000,
        // 					complete: function () {
        // 						setTimeout(function () {
        // 							document.querySelector("#section-one").addEventListener("wheel", myFunction1);
        // 						}, 250)
        // 					}
        // 				}
        // 			);
        // 		}
        // 	}
        // 	function myFunction3(event) {
        // 		event.preventDefault();
        // 		this.navBarFlag = 1;
        // 		document.querySelector("#section-three").removeEventListener("wheel", myFunction3);
        // 		if (event.deltaY > 0) {
        // 			$('#section-two').removeClass('section-fixed');
        // 			$('html, body').animate({
        // 				scrollTop: $("#third").offset().top + window.innerHeight
        // 			}, {
        // 					queue: false,
        // 					easing: $.bez([0.165, 0.84, 0.44, 1]),
        // 					duration: 1000,
        // 					complete: function () {
        // 						(<HTMLElement>document.querySelector("#logo-container")).style.background = "#19191E";
        // 						setTimeout(function () {
        // 							document.querySelector("#section-three").addEventListener("wheel", myFunction3);
        // 						}, 350)
        // 					}
        // 				});
        // 		}
        // 		else { // if mousescroll direction is up
        // 			$('#section-two').addClass('section-fixed');
        // 			$("#third").css({
        // 				'transform': 'scale(1.5,1.5)'
        // 			});
        // 			$('html, body').animate({
        // 				scrollTop: $("#first").offset().top + window.innerHeight
        // 			}, {
        // 					queue: false,
        // 					easing: $.bez([0.165, 0.84, 0.44, 1]),
        // 					duration: 1000,
        // 					complete: function () {
        // 						setTimeout(function () {
        // 							document.querySelector("#section-two").addEventListener("wheel", myFunction2);
        // 						}, 350)
        // 					}
        // 				});
        // 		}
        // 	}
        // 	function myFunction4(event) {
        // 		if (event.deltaY > 0) {
        // 		}
        // 		else {
        // 			// this.navBarFlag = 0;
        // 			document.querySelector("#section-three").removeEventListener("wheel", myFunction3);
        // 			(<HTMLElement>document.querySelector("#logo-container")).style.background = "transparent";
        // 			$('html, body').animate({
        // 				scrollTop: $("#second").offset().top + window.innerHeight
        // 			}, {
        // 					queue: false,
        // 					easing: $.bez([0.165, 0.84, 0.44, 1]),
        // 					duration: 1000,
        // 					complete: function () {
        // 						setTimeout(function () {							
        // 							document.querySelector("#section-three").addEventListener("wheel", myFunction3);
        // 						}, 250)
        // 					}
        // 				});
        // 		}
        // 	}
        // 	window.addEventListener('wheel', function (event) {
        //         if (event.deltaY > 0) {
        //             return true;
        //         }
        //         else {
        //             if ($(document).scrollTop() > ($("#third").offset().top) && $(document).scrollTop() < ($("#third").offset().top + 200)) {
        //                 event.preventDefault();
        //                 $('html, body').animate({
        //                     scrollTop: $("#second").offset().top + window.innerHeight
        //                 }, {
        //                     queue: false,
        //                     easing: $.bez([0.165, 0.84, 0.44, 1]),
        //                     duration: 100,
        //                 });
        //             }
        //             else {
        //                 return true;
        //             }
        //         }
        // 	});
        // })// end document ready
    };
    ScrollifyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-scrollify',
            template: __webpack_require__("./src/app/Components/scrollify/scrollify.component.html"),
            styles: [__webpack_require__("./src/app/Components/scrollify/scrollify.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ScrollifyComponent);
    return ScrollifyComponent;
}());



/***/ }),

/***/ "./src/app/Directives/mouse-scroll.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MouseWheelDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MouseWheelDirective = (function () {
    function MouseWheelDirective() {
        this.mouseWheelUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.mouseWheelDown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MouseWheelDirective.prototype.onMouseWheelChrome = function (event) {
        this.mouseWheelFunc(event);
    };
    MouseWheelDirective.prototype.onMouseWheelFirefox = function (event) {
        this.mouseWheelFunc(event);
    };
    MouseWheelDirective.prototype.onMouseWheelIE = function (event) {
        this.mouseWheelFunc(event);
    };
    MouseWheelDirective.prototype.mouseWheelFunc = function (event) {
        var event = window.event || event; // old IE support
        var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
        if (delta > 0) {
            this.mouseWheelUp.emit(event);
        }
        else if (delta < 0) {
            this.mouseWheelDown.emit(event);
        }
        // for IE
        event.returnValue = false;
        // for Chrome and Firefox
        if (event.preventDefault) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MouseWheelDirective.prototype, "mouseWheelUp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MouseWheelDirective.prototype, "mouseWheelDown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mousewheel', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MouseWheelDirective.prototype, "onMouseWheelChrome", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('DOMMouseScroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MouseWheelDirective.prototype, "onMouseWheelFirefox", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('onmousewheel', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MouseWheelDirective.prototype, "onMouseWheelIE", null);
    MouseWheelDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[mouseWheel]' })
    ], MouseWheelDirective);
    return MouseWheelDirective;
}());



/***/ }),

/***/ "./src/app/Pages/AI-Analytics/AI-Analytics.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.section-inner::after {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.72)), to(rgba(65, 65, 65, 0)));\r\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.72) 0%, rgba(65, 65, 65, 0) 100%);\r\n  content: '';\r\n  }\r\n\r\n\r\n/* Animate on scroll */\r\n\r\n\r\n.animated {\r\n    visibility: visible !important;\r\n}\r\n\r\n\r\n.hide-on-init {\r\n    visibility: hidden;\r\n}\r\n\r\n\r\n.title-apply{\r\n  padding-top: 15px;\r\n  padding-bottom: 25px;\r\n}\r\n\r\n\r\n.media {\r\n  display: inline-block\r\n}\r\n\r\n\r\n.content h1 {\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n    color: #fff;\r\n    font-weight: 900;\r\n    font-style: normal;\r\n    line-height: 1.2;\r\n    margin-top: 0px;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n\r\n.background-1 {\r\n    background-image: url('ai.7abe6ea0fa0e98b91fbb.jpg');\r\n    background-position: center;\r\n  }\r\n\r\n\r\n.banner-section{\r\n    padding-bottom: 80px;\r\n  }\r\n\r\n\r\n.background-content h2 {\r\n    color: #1f1f1f;\r\n    font-size: 36px;\r\n  }\r\n\r\n\r\n.background-content p {\r\n    max-width: 100% !important;\r\n    color: #000 !important;\r\n    margin-bottom: 30px !important;\r\n  }\r\n\r\n\r\n.content h2:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 45px;\r\n    height: 5px;\r\n    background: #06D876;\r\n    left: -50px;\r\n    margin-top: 23px;\r\n  }\r\n\r\n\r\n.content h2 {\r\n    font-size: 38px;\r\n    font-weight: 700;\r\n    margin-left: 50px;\r\n    position: relative;\r\n  }\r\n\r\n\r\n.content-section h2 {\r\n    font-size: 38px;\r\n    color: rgb(0, 0, 0);\r\n    font-weight: 700;\r\n    padding: 120px 0px 20px;\r\n    text-align: center;\r\n    position: relative;\r\n  }\r\n\r\n\r\n.content-section p {\r\n    color: rgb(0, 0, 0);\r\n    max-width: 100% !important;\r\n    margin-bottom: 30px !important;\r\n    font-style: normal;\r\n    padding: 0px 50px;\r\n    text-align: center;\r\n    position: relative;\r\n    font-size: 18px;\r\n    line-height: 31px;\r\n    font-weight: 400;\r\n  }\r\n\r\n\r\n.content p {\r\n    margin-bottom: 0;\r\n    color: #fff;\r\n    font-style: normal;\r\n    margin-top: 0px;\r\n    max-width: 520px;\r\n    font-size: 18px;\r\n    line-height: 31px;\r\n    font-weight: 400;\r\n  }\r\n\r\n\r\n.row p{\r\n    padding-top: 13px;\r\n    color: #fff;\r\n    padding-right: 0px;\r\n    text-align: center;\r\n    font-size: 14px;\r\n  }\r\n\r\n\r\n.hexagon div{\r\n    color: #06D876;\r\n    font-weight: 900;\r\n    font-size: 20px;\r\n    padding-top: 15px;\r\n    text-align: center;\r\n  }\r\n\r\n\r\n.banner-background {\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    background-color: #000;\r\n    background-size: cover;\r\n    overflow: hidden;\r\n    background-position: center center;\r\n    background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    max-width: 100%;\r\n    font-family: 'Nunito', sans-serif;\r\n    z-index: 0;\r\n  }\r\n\r\n\r\n.banner-content .content {\r\n    vertical-align: middle;\r\n    display: table-cell;\r\n    color: #fff;\r\n  }\r\n\r\n\r\n.banner-content {\r\n    display: table;\r\n    height: 100%;\r\n    position: absolute;\r\n    z-index: 0;\r\n  }\r\n\r\n\r\n.position{\r\n    background-size: 90px;\r\n    background-position: center 51px;\r\n    background-repeat: no-repeat;\r\n    height: 150px;\r\n    width:100%;\r\n  }\r\n\r\n\r\n/*----------------------Mobile Phones Portrait---------------------------------*/\r\n\r\n\r\n@media screen and (max-device-width: 480px) and (orientation: portrait){\r\n    \r\n    .banner-content {\r\n      display: block;\r\n    }\r\n\r\n    .banner-content .content {\r\n      vertical-align: middle;\r\n      display: table-cell;\r\n      color: #fff;\r\n      padding-top: 75%;\r\n    }\r\n\r\n    .background-content{\r\n      padding: 20px !important;\r\n    }\r\n\r\n\r\n  }\r\n\r\n\r\n/*----------------------Tablet-------------------------------*/\r\n\r\n\r\n@media screen and (min-device-width: 768px) and (max-device-width: 1024px){\r\n\r\n    .banner-content {\r\n      display: block;\r\n    }\r\n     \r\n    .banner-content .content {\r\n      vertical-align: middle;\r\n      display: table-cell;\r\n      color: #fff;\r\n      padding-top: 75%;\r\n    }\r\n\r\n    .background-content{\r\n      padding: 20px !important;\r\n    }\r\n\r\n  }\r\n"

/***/ }),

/***/ "./src/app/Pages/AI-Analytics/AI-Analytics.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<section [style.height.px]=\"deviceHeight\">\r\n    <div class=\"banner-background background-1 section-inner\"></div>\r\n      <div class=\"container\">\r\n          <div class=\"banner-content\">\r\n              <div class=\"content\">\r\n                  <h1>Customized Solutions</h1>\r\n                  <h2>AI & Analytics</h2>\r\n                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiumod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud</p>\r\n              </div>\r\n          </div>\r\n    </div>\r\n</section>\r\n    \r\n<section class=\"banner-section\">\r\n    <div class=\"container\">\r\n            <div class=\"background-content content-section\">\r\n                <h2 class=\"hide-on-init\" animateOnScroll animationName=\"animated fadeInLeft\">AI & Analytics</h2>\r\n                <p class=\"hide-on-init\" animateOnScroll animationName=\"animated fadeInRight\">Our AI-Analytics services offer a wide range of end-to-end IT solutions for various bussinesses. Spanning from an enterprise, retail to customer-facing apps, we have built solutions for practically every domain. We at Keyideas deliver intuitive web solutions that best suit your business requirements.</p> \r\n\r\n                <p >\r\n\r\n                <!-- <img class=\"mobile-skelton hide-on-init animated-delay-3 d-none d-md-block\" animateOnScroll animationName=\"animated fadeIn\" src=\"assets/images/mobile/mobile-skelton.png\"> -->\r\n                <!-- <div class=\"row\">\r\n                        <div class=\"globe col-sm-6\">Responsive web app with adjustable layout</div>\r\n                        <div class=\"globe col-sm-6\">Responsive web app with adjustable layout</div>\r\n                        <div class=\"globe col-sm-6\">Responsive web app with adjustable layout</div>\r\n                        <div class=\"globe col-sm-6\">Responsive web app with adjustable layout</div>\r\n                        <div class=\"globe col-sm-6\">Responsive web app with adjustable layout</div>\r\n                        <div class=\"globe col-sm-6\">Responsive web app with adjustable layout</div>\r\n                    </div>     -->\r\n            </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/Pages/AI-Analytics/AI-Analytics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AIAnalyticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_nav_bar_color_service__ = __webpack_require__("./src/app/Services/nav-bar-color.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AIAnalyticsComponent = (function () {
    function AIAnalyticsComponent(navBarColorService) {
        this.navBarColorService = navBarColorService;
        this.deviceHeight = (window.screen.height) - 130;
    }
    AIAnalyticsComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        $(document).ready(function ($) {
            console.log("hai");
        });
    };
    AIAnalyticsComponent.prototype.ngAfterViewInit = function () {
    };
    /* Changing navbar color on respective scrolling positions */
    AIAnalyticsComponent.prototype.doSomething = function (event) {
        console.log(window.pageYOffset);
        if (window.pageYOffset > 100) {
            this.navBarColorService.navBarBackgroundColor.next("white");
            this.navBarColorService.logoColor.next("./assets/images/logo_black.png");
            this.navBarColorService.hamBurger.next("black");
            this.navBarColorService.currentPageName.next("career");
            this.navBarColorService.tFlagValue.next(false);
            console.log("done! navbar color changed");
        }
        else {
            this.navBarColorService.navBarBackgroundColor.next("transparent");
            this.navBarColorService.logoColor.next("./assets/images/logo_white.png");
            this.navBarColorService.hamBurger.next("white");
            this.navBarColorService.currentPageName.next("career");
            this.navBarColorService.tFlagValue.next(true);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AIAnalyticsComponent.prototype, "doSomething", null);
    AIAnalyticsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-AIAnalytics',
            template: __webpack_require__("./src/app/Pages/AI-Analytics/AI-Analytics.component.html"),
            styles: [__webpack_require__("./src/app/Pages/AI-Analytics/AI-Analytics.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_nav_bar_color_service__["a" /* NavBarColorService */]])
    ], AIAnalyticsComponent);
    return AIAnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/Pages/E-commerce/E-commerce.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.section-inner::after {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.72)), to(rgba(65, 65, 65, 0)));\r\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.72) 0%, rgba(65, 65, 65, 0) 100%);\r\n  content: '';\r\n  }\r\n\r\n\r\n/* Animate on scroll */\r\n\r\n\r\n.animated {\r\n    visibility: visible !important;\r\n}\r\n\r\n\r\n.hide-on-init {\r\n    visibility: hidden;\r\n}\r\n\r\n\r\n.title-apply{\r\n  padding-top: 15px;\r\n  padding-bottom: 25px;\r\n}\r\n\r\n\r\n.media {\r\n  display: inline-block\r\n}\r\n\r\n\r\n.content h1 {\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n    color: #fff;\r\n    font-weight: 900;\r\n    font-style: normal;\r\n    line-height: 1.2;\r\n    margin-top: 0px;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n\r\n.background-1 {\r\n    background-image: url('Ecommerce.e56d54deabc1f9d2be69.jpg');\r\n    background-position: center;\r\n  }\r\n\r\n\r\n.banner-section{\r\n    padding-bottom: 80px;\r\n  }\r\n\r\n\r\n.background-content h2 {\r\n    color: #1f1f1f;\r\n    font-size: 36px;\r\n  }\r\n\r\n\r\n.background-content p {\r\n    max-width: 100% !important;\r\n    color: #000 !important;\r\n    margin-bottom: 30px !important;\r\n  }\r\n\r\n\r\n.content h2:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 45px;\r\n    height: 5px;\r\n    background: #06D876;\r\n    left: -50px;\r\n    margin-top: 23px;\r\n  }\r\n\r\n\r\n.content h2 {\r\n    font-size: 38px;\r\n    font-weight: 700;\r\n    margin-left: 50px;\r\n    position: relative;\r\n  }\r\n\r\n\r\n.content-section h2 {\r\n    font-size: 38px;\r\n    color: rgb(0, 0, 0);\r\n    font-weight: 700;\r\n    padding: 120px 0px 20px;\r\n    text-align: center;\r\n    position: relative;\r\n  }\r\n\r\n\r\n.content-section p {\r\n    color: rgb(0, 0, 0);\r\n    max-width: 100% !important;\r\n    margin-bottom: 30px !important;\r\n    font-style: normal;\r\n    padding: 0px 50px;\r\n    text-align: center;\r\n    position: relative;\r\n    font-size: 18px;\r\n    line-height: 31px;\r\n    font-weight: 400;\r\n  }\r\n\r\n\r\n.content p {\r\n    margin-bottom: 0;\r\n    color: #fff;\r\n    font-style: normal;\r\n    margin-top: 0px;\r\n    max-width: 520px;\r\n    font-size: 18px;\r\n    line-height: 31px;\r\n    font-weight: 400;\r\n  }\r\n\r\n\r\n.row p{\r\n    padding-top: 13px;\r\n    color: #fff;\r\n    padding-right: 0px;\r\n    text-align: center;\r\n    font-size: 14px;\r\n  }\r\n\r\n\r\n.hexagon div{\r\n    color: #06D876;\r\n    font-weight: 900;\r\n    font-size: 20px;\r\n    padding-top: 15px;\r\n    text-align: center;\r\n  }\r\n\r\n\r\n.banner-background {\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    background-color: #000;\r\n    background-size: cover;\r\n    overflow: hidden;\r\n    background-position: center center;\r\n    background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    max-width: 100%;\r\n    font-family: 'Nunito', sans-serif;\r\n    z-index: 0;\r\n  }\r\n\r\n\r\n.banner-content .content {\r\n    vertical-align: middle;\r\n    display: table-cell;\r\n    color: #fff;\r\n  }\r\n\r\n\r\n.banner-content {\r\n    display: table;\r\n    height: 100%;\r\n    position: absolute;\r\n    z-index: 0;\r\n  }\r\n\r\n\r\n.position{\r\n    background-size: 90px;\r\n    background-position: center 51px;\r\n    background-repeat: no-repeat;\r\n    height: 150px;\r\n    width:100%;\r\n  }\r\n\r\n\r\n/*----------------------Mobile Phones Portrait---------------------------------*/\r\n\r\n\r\n@media screen and (max-device-width: 480px) and (orientation: portrait){\r\n    \r\n    .banner-content {\r\n      display: block;\r\n    }\r\n\r\n    .banner-content .content {\r\n      vertical-align: middle;\r\n      display: table-cell;\r\n      color: #fff;\r\n      padding-top: 75%;\r\n    }\r\n\r\n    .background-content{\r\n      padding: 20px !important;\r\n    }\r\n\r\n\r\n  }\r\n\r\n\r\n/*----------------------Tablet-------------------------------*/\r\n\r\n\r\n@media screen and (min-device-width: 768px) and (max-device-width: 1024px){\r\n\r\n    .banner-content {\r\n      display: block;\r\n    }\r\n     \r\n    .banner-content .content {\r\n      vertical-align: middle;\r\n      display: table-cell;\r\n      color: #fff;\r\n      padding-top: 75%;\r\n    }\r\n\r\n    .background-content{\r\n      padding: 20px !important;\r\n    }\r\n\r\n  }\r\n"

/***/ }),

/***/ "./src/app/Pages/E-commerce/E-commerce.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<section [style.height.px]=\"deviceHeight\">\r\n    <div class=\"banner-background background-1 section-inner\"></div>\r\n      <div class=\"container\">\r\n          <div class=\"banner-content\">\r\n              <div class=\"content\">\r\n                  <h1>Customized Solutions</h1>\r\n                  <h2>E-commerce</h2>\r\n                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiumod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud</p>\r\n              </div>\r\n          </div>\r\n    </div>\r\n</section>\r\n    \r\n<section class=\"banner-section\">\r\n    <div class=\"container\">\r\n            <div class=\"background-content content-section\">\r\n                <h2 class=\"hide-on-init\" animateOnScroll animationName=\"animated fadeInLeft\">Most used Ecommerce in India</h2>\r\n                <p class=\"hide-on-init\" animateOnScroll animationName=\"animated fadeInRight\">Our E-commerce services offer a wide range of end-to-end IT solutions for various bussinesses. Spanning from an enterprise, retail to customer-facing apps, we have built solutions for practically every domain. We at Keyideas deliver intuitive web solutions that best suit your business requirements.</p> \r\n\r\n                <p >\r\n\r\n                <!-- <img class=\"mobile-skelton hide-on-init animated-delay-3 d-none d-md-block\" animateOnScroll animationName=\"animated fadeIn\" src=\"assets/images/mobile/mobile-skelton.png\"> -->\r\n                <!-- <div class=\"row\">\r\n                        <div class=\"globe col-sm-6\">Responsive web app with adjustable layout</div>\r\n                        <div class=\"globe col-sm-6\">Responsive web app with adjustable layout</div>\r\n                        <div class=\"globe col-sm-6\">Responsive web app with adjustable layout</div>\r\n                        <div class=\"globe col-sm-6\">Responsive web app with adjustable layout</div>\r\n                        <div class=\"globe col-sm-6\">Responsive web app with adjustable layout</div>\r\n                        <div class=\"globe col-sm-6\">Responsive web app with adjustable layout</div>\r\n                    </div>     -->\r\n            </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/Pages/E-commerce/E-commerce.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EcommerceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_nav_bar_color_service__ = __webpack_require__("./src/app/Services/nav-bar-color.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EcommerceComponent = (function () {
    function EcommerceComponent(navBarColorService) {
        this.navBarColorService = navBarColorService;
        this.deviceHeight = (window.screen.height) - 130;
    }
    EcommerceComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        $(document).ready(function ($) {
            console.log("hai");
        });
    };
    EcommerceComponent.prototype.ngAfterViewInit = function () {
    };
    /* Changing navbar color on respective scrolling positions */
    EcommerceComponent.prototype.doSomething = function (event) {
        console.log(window.pageYOffset);
        if (window.pageYOffset > 100) {
            this.navBarColorService.navBarBackgroundColor.next("white");
            this.navBarColorService.logoColor.next("./assets/images/logo_black.png");
            this.navBarColorService.hamBurger.next("black");
            this.navBarColorService.currentPageName.next("career");
            this.navBarColorService.tFlagValue.next(false);
            console.log("done! navbar color changed");
        }
        else {
            this.navBarColorService.navBarBackgroundColor.next("transparent");
            this.navBarColorService.logoColor.next("./assets/images/logo_white.png");
            this.navBarColorService.hamBurger.next("white");
            this.navBarColorService.currentPageName.next("career");
            this.navBarColorService.tFlagValue.next(true);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], EcommerceComponent.prototype, "doSomething", null);
    EcommerceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-Ecommerce',
            template: __webpack_require__("./src/app/Pages/E-commerce/E-commerce.component.html"),
            styles: [__webpack_require__("./src/app/Pages/E-commerce/E-commerce.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_nav_bar_color_service__["a" /* NavBarColorService */]])
    ], EcommerceComponent);
    return EcommerceComponent;
}());



/***/ }),

/***/ "./src/app/Pages/ERP/ERP.component.css":
/***/ (function(module, exports) {

module.exports = ".section-inner::after {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.72)), to(rgba(65, 65, 65, 0)));\r\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.72) 0%, rgba(65, 65, 65, 0) 100%);\r\n  content: '';\r\n  }\r\n\r\n\r\n.service-background{\r\n  background-image: url('services.16205311da7da36474d2.jpg');\r\n  background-position: center;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n\r\n\r\n/* Animate on scroll */\r\n\r\n\r\n.animated {\r\n    visibility: visible !important;\r\n}\r\n\r\n\r\n.hide-on-init {\r\n    visibility: hidden;\r\n}\r\n\r\n\r\n.title-apply{\r\n  padding-top: 15px;\r\n  padding-bottom: 25px;\r\n}\r\n\r\n\r\n.media {\r\n  display: inline-block\r\n}\r\n\r\n\r\n.content h1 {\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n    color: #fff;\r\n    font-weight: 900;\r\n    font-style: normal;\r\n    line-height: 1.2;\r\n    margin-top: 0px;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n\r\n.background-1 {\r\n    background-image: url('ERP-banner.e3ae1e28899b47895542.jpg');\r\n    background-position: center;\r\n  }\r\n\r\n\r\n.background-2 {\r\n    background-image: url('matrix-banner.f6eeabec7080f5b32bcd.jpg');\r\n    padding-bottom: 63px;\r\n    padding-top: 76px;\r\n  }\r\n\r\n\r\n.banner-section{\r\n    padding-bottom: 80px;\r\n  }\r\n\r\n\r\n.background-content h2 {\r\n    color: #1f1f1f;\r\n    font-size: 36px;\r\n  }\r\n\r\n\r\n.background-content p {\r\n    max-width: 100% !important;\r\n    color: #000 !important;\r\n    margin-bottom: 30px !important;\r\n  }\r\n\r\n\r\n.content h2:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 45px;\r\n    height: 5px;\r\n    background: #06D876;\r\n    left: -50px;\r\n    margin-top: 23px;\r\n  }\r\n\r\n\r\n.content h2 {\r\n    font-size: 38px;\r\n    font-weight: 700;\r\n    margin-left: 50px;\r\n    position: relative;\r\n  }\r\n\r\n\r\n.content-section h2 {\r\n    font-size: 38px;\r\n    color: rgb(0, 0, 0);\r\n    font-weight: 700;\r\n    padding: 120px 0px 20px;\r\n    text-align: center;\r\n    position: relative;\r\n  }\r\n\r\n\r\n.content-section p {\r\n    color: rgb(0, 0, 0);\r\n    max-width: 100% !important;\r\n    margin-bottom: 30px !important;\r\n    font-style: normal;\r\n    padding: 0px 50px;\r\n    text-align: center;\r\n    position: relative;\r\n    font-size: 18px;\r\n    line-height: 31px;\r\n    font-weight: 400;\r\n  }\r\n\r\n\r\n.content p {\r\n    margin-bottom: 0;\r\n    color: #fff;\r\n    font-style: normal;\r\n    margin-top: 0px;\r\n    max-width: 520px;\r\n    font-size: 18px;\r\n    line-height: 31px;\r\n    font-weight: 400;\r\n  }\r\n\r\n\r\n.row p{\r\n    padding-top: 13px;\r\n    color: #fff;\r\n    padding-right: 0px;\r\n    text-align: center;\r\n    font-size: 14px;\r\n  }\r\n\r\n\r\n.hexagon div{\r\n    color: #06D876;\r\n    font-weight: 900;\r\n    font-size: 20px;\r\n    padding-top: 15px;\r\n    text-align: center;\r\n  }\r\n\r\n\r\n.banner-background {\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    background-color: #000;\r\n    background-size: cover;\r\n    overflow: hidden;\r\n    background-position: center center;\r\n    background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    max-width: 100%;\r\n    font-family: 'Nunito', sans-serif;\r\n    z-index: 0;\r\n  }\r\n\r\n\r\n.banner-content .content {\r\n    vertical-align: middle;\r\n    display: table-cell;\r\n    color: #fff;\r\n  }\r\n\r\n\r\n.banner-content {\r\n    display: table;\r\n    height: 100%;\r\n    position: absolute;\r\n    z-index: 0;\r\n  }\r\n\r\n\r\n.position{\r\n    background-size: 90px;\r\n    background-position: center 51px;\r\n    background-repeat: no-repeat;\r\n    height: 150px;\r\n    width:100%;\r\n  }\r\n\r\n\r\n/*----------------------Mobile Phones Portrait---------------------------------*/\r\n\r\n\r\n@media screen and (max-device-width: 480px) and (orientation: portrait){\r\n    \r\n    .banner-content {\r\n      display: block;\r\n    }\r\n\r\n    .banner-content .content {\r\n      vertical-align: middle;\r\n      display: table-cell;\r\n      color: #fff;\r\n      padding-top: 75%;\r\n    }\r\n\r\n    .background-content{\r\n      padding: 20px !important;\r\n    }\r\n\r\n\r\n  }\r\n\r\n\r\n/*----------------------Tablet-------------------------------*/\r\n\r\n\r\n@media screen and (min-device-width: 768px) and (max-device-width: 1024px){\r\n\r\n    .banner-content {\r\n      display: block;\r\n    }\r\n     \r\n    .banner-content .content {\r\n      vertical-align: middle;\r\n      display: table-cell;\r\n      color: #fff;\r\n      padding-top: 75%;\r\n    }\r\n\r\n    .background-content{\r\n      padding: 20px !important;\r\n    }\r\n\r\n  }\r\n"

/***/ }),

/***/ "./src/app/Pages/ERP/ERP.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Module done by Sathish-->\r\n<section [style.height.px]=\"deviceHeight\">\r\n    <div class=\"banner-background background-1 section-inner\"></div>\r\n      <div class=\"container\">\r\n          <div class=\"banner-content\">\r\n              <div class=\"content\">\r\n                  <h1>Customized Solutions</h1>\r\n                  <h2>Enterprise Resource Planning</h2>\r\n                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiumod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud</p>\r\n              </div>\r\n          </div>\r\n    </div>\r\n</section>\r\n    \r\n<section class=\"banner-section\">\r\n    <div class=\"container\">\r\n            <div class=\"background-content content-section\">\r\n                <h2 class=\"hide-on-init\" animateOnScroll animationName=\"animated fadeInLeft\">Top ERP in India</h2>\r\n                <p class=\"hide-on-init\" animateOnScroll animationName=\"animated fadeInRight\">Our ERP development services offer a wide range of end-to-end IT solutions for various bussinesses. Spanning from an enterprise, retail to customer-facing apps, we have built solutions for practically every domain. We at Keyideas deliver intuitive web solutions that best suit your business requirements.</p> \r\n\r\n                <p >\r\n\r\n                <!-- <img class=\"mobile-skelton hide-on-init animated-delay-3 d-none d-md-block\" animateOnScroll animationName=\"animated fadeIn\" src=\"assets/images/mobile/mobile-skelton.png\"> -->\r\n                <!-- <div class=\"row\">\r\n                        <div class=\"globe col-sm-6\">Responsive web app with adjustable layout</div>\r\n                        <div class=\"globe col-sm-6\">Responsive web app with adjustable layout</div>\r\n                        <div class=\"globe col-sm-6\">Responsive web app with adjustable layout</div>\r\n                        <div class=\"globe col-sm-6\">Responsive web app with adjustable layout</div>\r\n                        <div class=\"globe col-sm-6\">Responsive web app with adjustable layout</div>\r\n                        <div class=\"globe col-sm-6\">Responsive web app with adjustable layout</div>\r\n                    </div>     -->\r\n            </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"service-background\" style=\"padding-bottom: 50px;\">\r\n<div class=\"container hide-on-init\" animateOnScroll animationName=\"animated fadeIn\">\r\n        <div class=\"content-section\">\r\n                <h2 class=\"text-center\" style=\"padding-top: 65px !important;\">CRM Services</h2>\r\n                <p class=\"text-center\"> Make sure your virtual business gives you tangible results. Over the past few year, WIZROOTS has been building a portfolio of clients boasting outstanding results </p>\r\n                <div class=\"row\">\r\n\r\n                    <div *ngFor=\"let get of store\" class=\"col-md-4 text-center\">\r\n                        <div class=\"media\"> \r\n                            <img style=\"border-radius:100px;\" src=\"{{get.image}}\">\r\n                            <h6 class=\"title-apply\">Mobile App development</h6> \r\n                        </div>\r\n                    </div>\r\n                </div>         \r\n        </div>\r\n</div>\r\n</section>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/Pages/ERP/ERP.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ERPComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_nav_bar_color_service__ = __webpack_require__("./src/app/Services/nav-bar-color.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ERP__ = __webpack_require__("./src/app/Pages/ERP/ERP.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ERPComponent = (function () {
    function ERPComponent(navBarColorService) {
        this.navBarColorService = navBarColorService;
        this.deviceHeight = (window.screen.height) - 130;
    }
    ERPComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.store = __WEBPACK_IMPORTED_MODULE_2__ERP__["a" /* technology */];
        $(document).ready(function ($) {
            console.log("hai");
        });
    };
    ERPComponent.prototype.ngAfterViewInit = function () {
    };
    /* Changing navbar color on respective scrolling positions */
    ERPComponent.prototype.doSomething = function (event) {
        console.log(window.pageYOffset);
        if (window.pageYOffset > 100) {
            this.navBarColorService.navBarBackgroundColor.next("white");
            this.navBarColorService.logoColor.next("./assets/images/logo_black.png");
            this.navBarColorService.hamBurger.next("black");
            this.navBarColorService.currentPageName.next("career");
            this.navBarColorService.tFlagValue.next(false);
            console.log("done! navbar color changed");
        }
        else {
            this.navBarColorService.navBarBackgroundColor.next("transparent");
            this.navBarColorService.logoColor.next("./assets/images/logo_white.png");
            this.navBarColorService.hamBurger.next("white");
            this.navBarColorService.currentPageName.next("career");
            this.navBarColorService.tFlagValue.next(true);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ERPComponent.prototype, "doSomething", null);
    ERPComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ERP',
            template: __webpack_require__("./src/app/Pages/ERP/ERP.component.html"),
            styles: [__webpack_require__("./src/app/Pages/ERP/ERP.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_nav_bar_color_service__["a" /* NavBarColorService */]])
    ], ERPComponent);
    return ERPComponent;
}());



/***/ }),

/***/ "./src/app/Pages/ERP/ERP.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return technology; });
var technology = [
    {
        image: "./assets/images/technology/1.jpg"
    },
    {
        image: "./assets/images/technology/2.jpg"
    },
    {
        image: "./assets/images/technology/3.jpg"
    },
    {
        image: "./assets/images/technology/4.jpg"
    },
    {
        image: "./assets/images/technology/5.jpg"
    },
    {
        image: "./assets/images/technology/6.jpg"
    }
];


/***/ }),

/***/ "./src/app/Pages/IOT/IOT.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.section-inner::after {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.72)), to(rgba(65, 65, 65, 0)));\r\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.72) 0%, rgba(65, 65, 65, 0) 100%);\r\n  content: '';\r\n  }\r\n\r\n\r\n/* Animate on scroll */\r\n\r\n\r\n.animated {\r\n    visibility: visible !important;\r\n}\r\n\r\n\r\n.hide-on-init {\r\n    visibility: hidden;\r\n}\r\n\r\n\r\n.title-apply{\r\n  padding-top: 15px;\r\n  padding-bottom: 25px;\r\n}\r\n\r\n\r\n.media {\r\n  display: inline-block\r\n}\r\n\r\n\r\n.content h1 {\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n    color: #fff;\r\n    font-weight: 900;\r\n    font-style: normal;\r\n    line-height: 1.2;\r\n    margin-top: 0px;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n\r\n.background-1 {\r\n    background-image: url('iot.56b550be6a0222918e10.jpg');\r\n    background-position: center;\r\n  }\r\n\r\n\r\n.banner-section{\r\n    padding-bottom: 80px;\r\n  }\r\n\r\n\r\n.background-content h2 {\r\n    color: #1f1f1f;\r\n    font-size: 36px;\r\n  }\r\n\r\n\r\n.background-content p {\r\n    max-width: 100% !important;\r\n    color: #000 !important;\r\n    margin-bottom: 30px !important;\r\n  }\r\n\r\n\r\n.content h2:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 45px;\r\n    height: 5px;\r\n    background: #06D876;\r\n    left: -50px;\r\n    margin-top: 23px;\r\n  }\r\n\r\n\r\n.content h2 {\r\n    font-size: 38px;\r\n    font-weight: 700;\r\n    margin-left: 50px;\r\n    position: relative;\r\n  }\r\n\r\n\r\n.content-section h2 {\r\n    font-size: 38px;\r\n    color: rgb(0, 0, 0);\r\n    font-weight: 700;\r\n    padding: 120px 0px 20px;\r\n    text-align: center;\r\n    position: relative;\r\n  }\r\n\r\n\r\n.content-section p {\r\n    color: rgb(0, 0, 0);\r\n    max-width: 100% !important;\r\n    margin-bottom: 30px !important;\r\n    font-style: normal;\r\n    padding: 0px 50px;\r\n    text-align: center;\r\n    position: relative;\r\n    font-size: 18px;\r\n    line-height: 31px;\r\n    font-weight: 400;\r\n  }\r\n\r\n\r\n.content p {\r\n    margin-bottom: 0;\r\n    color: #fff;\r\n    font-style: normal;\r\n    margin-top: 0px;\r\n    max-width: 520px;\r\n    font-size: 18px;\r\n    line-height: 31px;\r\n    font-weight: 400;\r\n  }\r\n\r\n\r\n.row p{\r\n    padding-top: 13px;\r\n    color: #fff;\r\n    padding-right: 0px;\r\n    text-align: center;\r\n    font-size: 14px;\r\n  }\r\n\r\n\r\n.hexagon div{\r\n    color: #06D876;\r\n    font-weight: 900;\r\n    font-size: 20px;\r\n    padding-top: 15px;\r\n    text-align: center;\r\n  }\r\n\r\n\r\n.banner-background {\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    background-color: #000;\r\n    background-size: cover;\r\n    overflow: hidden;\r\n    background-position: center center;\r\n    background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    max-width: 100%;\r\n    font-family: 'Nunito', sans-serif;\r\n    z-index: 0;\r\n  }\r\n\r\n\r\n.banner-content .content {\r\n    vertical-align: middle;\r\n    display: table-cell;\r\n    color: #fff;\r\n  }\r\n\r\n\r\n.banner-content {\r\n    display: table;\r\n    height: 100%;\r\n    position: absolute;\r\n    z-index: 0;\r\n  }\r\n\r\n\r\n.position{\r\n    background-size: 90px;\r\n    background-position: center 51px;\r\n    background-repeat: no-repeat;\r\n    height: 150px;\r\n    width:100%;\r\n  }\r\n\r\n\r\n/*----------------------Mobile Phones Portrait---------------------------------*/\r\n\r\n\r\n@media screen and (max-device-width: 480px) and (orientation: portrait){\r\n    \r\n    .banner-content {\r\n      display: block;\r\n    }\r\n\r\n    .banner-content .content {\r\n      vertical-align: middle;\r\n      display: table-cell;\r\n      color: #fff;\r\n      padding-top: 75%;\r\n    }\r\n\r\n    .background-content{\r\n      padding: 20px !important;\r\n    }\r\n\r\n\r\n  }\r\n\r\n\r\n/*----------------------Tablet-------------------------------*/\r\n\r\n\r\n@media screen and (min-device-width: 768px) and (max-device-width: 1024px){\r\n\r\n    .banner-content {\r\n      display: block;\r\n    }\r\n     \r\n    .banner-content .content {\r\n      vertical-align: middle;\r\n      display: table-cell;\r\n      color: #fff;\r\n      padding-top: 75%;\r\n    }\r\n\r\n    .background-content{\r\n      padding: 20px !important;\r\n    }\r\n\r\n  }\r\n"

/***/ }),

/***/ "./src/app/Pages/IOT/IOT.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<section [style.height.px]=\"deviceHeight\">\r\n    <div class=\"banner-background background-1 section-inner\"></div>\r\n      <div class=\"container\">\r\n          <div class=\"banner-content\">\r\n              <div class=\"content\">\r\n                  <h1>Customized Solutions</h1>\r\n                  <h2>Internet Of Things</h2>\r\n                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiumod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud</p>\r\n              </div>\r\n          </div>\r\n    </div>\r\n</section>\r\n    \r\n<section class=\"banner-section\">\r\n    <div class=\"container\">\r\n            <div class=\"background-content content-section\">\r\n                <h2 class=\"hide-on-init\" animateOnScroll animationName=\"animated fadeInLeft\">Internet Of Things</h2>\r\n                <p class=\"hide-on-init\" animateOnScroll animationName=\"animated fadeInRight\">Our IOT services offer a wide range of end-to-end IT solutions for various bussinesses. Spanning from an enterprise, retail to customer-facing apps, we have built solutions for practically every domain. We at Keyideas deliver intuitive web solutions that best suit your business requirements.</p> \r\n\r\n                <p >\r\n\r\n                <!-- <img class=\"mobile-skelton hide-on-init animated-delay-3 d-none d-md-block\" animateOnScroll animationName=\"animated fadeIn\" src=\"assets/images/mobile/mobile-skelton.png\"> -->\r\n                <!-- <div class=\"row\">\r\n                        <div class=\"globe col-sm-6\">Responsive web app with adjustable layout</div>\r\n                        <div class=\"globe col-sm-6\">Responsive web app with adjustable layout</div>\r\n                        <div class=\"globe col-sm-6\">Responsive web app with adjustable layout</div>\r\n                        <div class=\"globe col-sm-6\">Responsive web app with adjustable layout</div>\r\n                        <div class=\"globe col-sm-6\">Responsive web app with adjustable layout</div>\r\n                        <div class=\"globe col-sm-6\">Responsive web app with adjustable layout</div>\r\n                    </div>     -->\r\n            </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/Pages/IOT/IOT.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IOTComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_nav_bar_color_service__ = __webpack_require__("./src/app/Services/nav-bar-color.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IOTComponent = (function () {
    function IOTComponent(navBarColorService) {
        this.navBarColorService = navBarColorService;
        this.deviceHeight = (window.screen.height) - 130;
    }
    IOTComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        $(document).ready(function ($) {
            console.log("hai");
        });
    };
    IOTComponent.prototype.ngAfterViewInit = function () {
    };
    /* Changing navbar color on respective scrolling positions */
    IOTComponent.prototype.doSomething = function (event) {
        console.log(window.pageYOffset);
        if (window.pageYOffset > 100) {
            this.navBarColorService.navBarBackgroundColor.next("white");
            this.navBarColorService.logoColor.next("./assets/images/logo_black.png");
            this.navBarColorService.hamBurger.next("black");
            this.navBarColorService.currentPageName.next("career");
            this.navBarColorService.tFlagValue.next(false);
            console.log("done! navbar color changed");
        }
        else {
            this.navBarColorService.navBarBackgroundColor.next("transparent");
            this.navBarColorService.logoColor.next("./assets/images/logo_white.png");
            this.navBarColorService.hamBurger.next("white");
            this.navBarColorService.currentPageName.next("career");
            this.navBarColorService.tFlagValue.next(true);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], IOTComponent.prototype, "doSomething", null);
    IOTComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-IOT',
            template: __webpack_require__("./src/app/Pages/IOT/IOT.component.html"),
            styles: [__webpack_require__("./src/app/Pages/IOT/IOT.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_nav_bar_color_service__["a" /* NavBarColorService */]])
    ], IOTComponent);
    return IOTComponent;
}());



/***/ }),

/***/ "./src/app/Pages/contact-us/contact-us.component.css":
/***/ (function(module, exports) {

module.exports = "/* Card */\r\n.card {\r\n    -webkit-box-shadow: 2px 4px 8px 2px rgba(0,0,0,0.2);\r\n            box-shadow: 2px 4px 8px 2px rgba(0,0,0,0.2);\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n    width: 40%;\r\n    height: 246px;\r\n    width: 400px;\r\n    padding: 15px 25px;\r\n    -webkit-transition: -webkit-transform .2s;\r\n    transition: -webkit-transform .2s;\r\n    transition: transform .2s;\r\n    transition: transform .2s, -webkit-transform .2s;\r\n    margin: 10.87px auto;\r\n}\r\n.card > h4{\r\n    margin-bottom: 25px\r\n}\r\n.card:hover {\r\n    -webkit-box-shadow: 2px 8px 16px 2px rgba(0, 0, 0, 0.5);\r\n            box-shadow: 2px 8px 16px 2px rgba(0, 0, 0, 0.5); /* IE 9 */\r\n    -webkit-transform: scale(1.2); /* Safari 3-8 */\r\n    transform: scale(1.2); \r\n}\r\n.branch-title{\r\n    height: 130px;\r\n    color: white;\r\n    font-weight: bold;\r\n    text-shadow: 2px 2px 2px #0100eba8;\r\n}\r\n.brand-btn {\r\n    background: transparent;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    border: 1px solid #353535;\r\n    font-size: 16px;\r\n    padding: 6px 25px;\r\n    border-radius: 0px;\r\n    line-height: 30px;\r\n    color: #4c4c4c;\r\n}\r\n.banner-background {\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    background-color: #000;\r\n    background-size: cover;\r\n    overflow: hidden;\r\n    background-position: center center;\r\n    background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    max-width: 100%;\r\n    font-family: 'Nunito', sans-serif;\r\n    z-index: 9;\r\n}\r\n.banner-content .content {\r\n    vertical-align: middle;\r\n    display: table-cell;\r\n    color: #fff;\r\n}\r\n.banner-content {\r\n    display: table;\r\n    height: 100%;\r\n    position: absolute;\r\n    z-index: 99;\r\n}\r\n.content h1 {\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n    color: #fff;\r\n    font-weight: 900;\r\n    font-style: normal;\r\n    line-height: 1.2;\r\n    margin-top: 0px;\r\n    text-transform: uppercase;\r\n}\r\n.content p {\r\n    font-size: 36px;\r\n    margin-bottom: 0;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    line-height: 1.2;\r\n    margin-top: 0px;\r\n    max-width: 510px;\r\n}\r\n.banner-section {\r\n    position: relative;\r\n}\r\n.content h1 {\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n    color: #fff;\r\n    font-weight: 900;\r\n    font-style: normal;\r\n    line-height: 1.2;\r\n    margin-top: 0px;\r\n    text-transform: uppercase;\r\n}\r\n.content h2:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 45px;\r\n    height: 5px;\r\n    background: #06D876;\r\n    left: -50px;\r\n    margin-top: 23px;\r\n    border-radius: 2px;\r\n}\r\n.background-1 {\r\n    background-image: url('contact-banner.3889e5e7107dcd24f489.jpg')\r\n}\r\n.content h2 {\r\n    font-size: 38px;\r\n    font-weight: 900;\r\n    margin-left: 50px;\r\n    position: relative;\r\n}\r\n.content p {\r\n    margin-bottom: 0;\r\n    color: #fff;\r\n    font-style: normal;\r\n    margin-top: 0px;\r\n    max-width: 520px;\r\n    font-size: 18px;\r\n    line-height: 31px;\r\n    font-weight: 400;\r\n}\r\n.form-control {\r\n    border-radius: 0px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    border: none;\r\n    border-bottom: 1px solid #ccc;\r\n    color: #333;\r\n    background: transparent;\r\n    font-weight: 600;\r\n}\r\n.form-group {\r\n    margin: 20px 20px;\r\n}\r\n.get-in-touch {\r\n    background: #eee;\r\n    padding: 50px 0px;\r\n}\r\n.get-in-touch .heading {\r\n    margin-bottom: 50px;\r\n    font-size: 20px;\r\n    font-weight: 900;\r\n}\r\n.send-button {\r\n    background-color: black;\r\n    color: white;\r\n    font-weight: bold;\r\n    padding: 5px 42px;\r\n}\r\n.send-button:hover{\r\n    background-color: #eeeeee;\r\n    color: black;\r\n}\r\n.send-button:disabled {\r\n    background-color: red !important;\r\n    color: white !important;\r\n    opacity: 0.4;\r\n}\r\n.send-button:disabled:hover {\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    opacity: 0.2;\r\n    cursor: not-allowed;\r\n}\r\n.card-map {\r\n    position: relative;\r\n    padding: 15px;\r\n}\r\n.card-map h1 {\r\n    text-transform: uppercase;\r\n    font-size: 20px;\r\n    font-weight: 900;\r\n    margin: 0;\r\n}\r\n.card-map h4 {\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    color: #a0a0a0;\r\n    font-size: 14px;\r\n    margin-top: 0px;\r\n    margin-bottom: 14px;\r\n    letter-spacing: 1px;\r\n}\r\n.card-map p {\r\n    font-size: 16px;\r\n    width: calc(50% - 50px);\r\n}\r\n.map-contact {\r\n    padding: 40px;\r\n    background-image: url('map.27c2127b21c8bcae8aee.jpg');\r\n    background-size: cover;\r\n    position: relative;\r\n    background-attachment: fixed;\r\n    background-position: 6px -16px;\r\n    height:640px;\r\n}\r\n.map-contact>div {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n.map-contact:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    background: rgba(0, 0, 0, 0.25);\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0;\r\n}\r\n.map-pin-estonia{\r\n    background-image: url('pin.2232143109c7b4f7f7f3.png');\r\n    background-repeat: no-repeat;\r\n    height: 400px;\r\n    width: 1000px;\r\n    background-size: 40px 40px;\r\n    background-position: 595px 220px;\r\n}\r\n.map-pin-estonia{\r\n    padding-left: 589px;\r\n    font-weight: bold;\r\n    padding-top: 197px;\r\n    color: #fffe;\r\n    font-size: 15px;\r\n}\r\n.map-pin-bangalore{\r\n    background-image: url('pin.2232143109c7b4f7f7f3.png');\r\n    background-repeat: no-repeat;\r\n    height:400px;\r\n    width: 1000px;\r\n    background-size: 40px 40px;\r\n    background-position: 772px 28px;\r\n}\r\n.map-pin-bangalore p{\r\n    padding-left: 760px;\r\n    font-weight: bold;\r\n    padding-top: 2px;\r\n    color: #fffe;\r\n    font-size: 15px;\r\n}\r\n.card-map span {\r\n    width: calc(50% - 0px);\r\n    display: inline-block;\r\n    font-weight: 900;\r\n    color: #111;\r\n    margin-top: 10px;\r\n}\r\n.card-map span:before {\r\n    margin-right: 7px;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    line-height: 0;\r\n}\r\n.card-map:before {\r\n    content: \"\";\r\n    background-position: calc(100% + 63px);\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    width: 50%;\r\n    height: 100%;\r\n    right: 0;\r\n    position: absolute;\r\n    top: 0;\r\n    opacity: 0.2;\r\n}\r\n.address-list:nth-of-type(1) .card-map:before {\r\n    background-image: url('/./assets/images/contact/skyline.png');\r\n}\r\n.address-list:nth-of-type(2) .card-map:before {\r\n    background-image: url('/./assets/images/contact/cityscape.png');\r\n}\r\n.quick-connect {\r\n    padding: 50px 0px 70px;\r\n}\r\n.quick-connect h3 {\r\n    font-size: 24px;\r\n    margin: 0px;\r\n    font-weight: 900;\r\n    position: relative;\r\n    -webkit-transition: 0.5s ease-in-out;\r\n    transition: 0.5s ease-in-out;\r\n    cursor: pointer;\r\n}\r\n.quick-connect p {\r\n    font-size: 17px;\r\n    opacity: 0.6;\r\n    margin: 0px;\r\n    margin-top: 80px;\r\n    font-weight: 600;\r\n}\r\n.quick-connect h3:hover {\r\n    color: #06d875;\r\n}\r\n.quick-connect h3 img {\r\n    width: 40px;\r\n    vertical-align: bottom;\r\n    position: absolute;\r\n    top: -40px;\r\n    margin-left: -9px;\r\n    opacity: 0.5;\r\n}\r\nspan.left-right:after,\r\nspan.left-right:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    width: 40px;\r\n    height: 4px;\r\n    background: #06D875;\r\n}\r\n.left-right {\r\n    font-weight: 900;\r\n    position: relative;\r\n}\r\n.left-right:after {\r\n    right: -50px;\r\n    top: calc(50% - 2px);\r\n}\r\n.left-right:before {\r\n    left: -50px;\r\n    top: calc(50% - 2px);\r\n}\r\n/* Snackbar */\r\n#snackbar {\r\n    visibility: hidden; \r\n    min-width: 250px; \r\n    margin-left: -125px; \r\n    background-color: #333; \r\n    color: #fff; \r\n    text-align: center; \r\n    border-radius: 10px; \r\n    padding: 16px; \r\n    position: fixed; \r\n    z-index: 1; \r\n    left: 50%; \r\n    bottom: 30px; \r\n}\r\n.show {\r\n    visibility: visible !important; \r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n/* Animations to fade the snackbar in and out */\r\n@-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n@-webkit-keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n@keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n.form-group .alert {\r\n    background: #f1ead0;\r\n    color: rgb(255, 0, 0);\r\n    padding: 0px 0px 0px 0px;\r\n    font-size: 13px;\r\n    margin: 0px 0px 0px 15px;\r\n    display: inline-block;\r\n    -webkit-animation: 2s alertAnim forwards;\r\n            animation: 2s alertAnim forwards;\r\n}\r\n.animated {\r\n    visibility: visible !important;\r\n}\r\n.hide-on-init {\r\n    visibility: hidden;\r\n}\r\n@media screen and (max-device-width: 480px) and (orientation: portrait){\r\n    .map-contact{\r\n        height: 1027px !important;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/Pages/contact-us/contact-us.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-section\" [style.height.px]=\"deviceHeight\">\r\n  <div class=\"banner-background background-1\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"banner-content\">\r\n      <div class=\"content\">\r\n        <h1>Contact Us</h1>\r\n        <h2 class=\"text-uppercase\">Say Hello</h2>\r\n        <p>If you are curious to hear more about what we can offer, do not hesitate to get in touch. Send us your brief and\r\n          learn how we work.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"get-in-touch\">\r\n  <div class=\"container\">\r\n    <!-- <div class=\"col-md-10 col-md-offset-1\"> -->\r\n      <h3 class=\"heading text-center text-uppercase\">get in touch with us</h3>\r\n      <form [formGroup]=\"rForm\">\r\n        <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n\r\n          <div class=\"form-group\">\r\n\r\n\r\n              <div class=\"alert\"> \r\n                  <ng-container *ngIf=\"!rForm.controls['fullName'].valid && rForm.controls['fullName'].touched\">* Minimum 3 letters required</ng-container> \r\n              </div>\r\n              <input formControlName=\"fullName\" [(ngModel)]=\"fullName\" type=\"text\" class=\"form-control\" id=\"fullName\" name=\"fullName\" placeholder=\"NAME\" required>\r\n\r\n\r\n            <!-- <input type=\"text\" class=\"form-control text-capitalize\" placeholder=\"NAME\" name=\"name\" ngModel required/>  -->\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n\r\n\r\n              <div class=\"alert\"> \r\n                  <ng-container *ngIf=\"!rForm.controls['cname'].valid && rForm.controls['cname'].touched\">* Minimum 3 letters required</ng-container> \r\n              </div>\r\n              <input formControlName=\"cname\" [(ngModel)]=\"cname\" type=\"text\" class=\"form-control\" id=\"cname\" name=\"cname\" placeholder=\"COMPANY NAME\" required>\r\n\r\n<!--               \r\n            <input type=\"text\" class=\"form-control  text-capitalize\" placeholder=\"COMPANY NAME\" name=\"cname\" ngModel/> </div> -->\r\n        </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n\r\n\r\n              <div class=\"alert\"> \r\n                <ng-container *ngIf=\"!rForm.controls['email'].valid && rForm.controls['email'].touched\">* Please enter a valid E-mail ( ex: yourname@domain.com )</ng-container> \r\n              </div>\r\n              <input formControlName=\"email\" [(ngModel)]=\"email\" type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"EMAIL\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required >\r\n\r\n            <!-- <input type=\"email\" class=\"form-control\" placeholder=\"EMAIL\" name=\"email\" ngModel/> </div> -->\r\n        </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n\r\n\r\n              <div class=\"alert\"> \r\n                <ng-container *ngIf=\"!rForm.controls['mobile'].valid && rForm.controls['mobile'].touched\">* Please enter a valid Phone Number</ng-container> \r\n              </div>\r\n              <input formControlName=\"mobile\" [(ngModel)]=\"mobile\" type=\"text\" class=\"form-control\" id=\"mobile\" name=\"mobile\" placeholder=\"MOBILE\" pattern=\"[0-9]*\" required>\r\n\r\n\r\n            <!-- <input type=\"text\" class=\"form-control\" placeholder=\"PHONE\" name=\"mobile\" ngModel/> </div> -->\r\n        </div>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <div class=\"form-group\">\r\n            <textarea formControlName=\"msg\" [(ngModel)]=\"msg\" class=\"form-control\" placeholder=\"MESSAGE\" name=\"msg\" id=\"msg\" required></textarea>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">       \r\n            <div #captchaRef2></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\" style=\"padding-top: 37px;\">\r\n          <button type=\"submit\" class=\"btn brand-btn pull-right background-btn send-button btn-validate\" [disabled]=\"!rForm.valid || !recaptcha\" (click)=\"sendEmail()\">SEND</button>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n        </div>\r\n      </form>\r\n    <!-- </div> -->\r\n  </div>\r\n  <div id=\"snackbar\">Mail sent successfully</div>\r\n</section>\r\n\r\n<!-- <section class=\"map-contact\" [style.height.px]=\"deviceHeight\">\r\n  <div class=\"container\">\r\n      <div class=\"map-point\"></div>\r\n  </div>\r\n</section> -->\r\n\r\n\r\n<section class=\"map-contact\" id=\"map-section\">\r\n    <div class=\"container\">\r\n\r\n          <!-- <div class=\"hide-on-init map-pin-estonia\" animateOnScroll animationName=\"animated fadeInDown\">\r\n            <p>Estonia</p>\r\n          </div>\r\n          <div class=\"hide-on-init map-pin-bangalore\" animateOnScroll animationName=\"animated fadeInDown\">\r\n            <p>Bangalore</p>\r\n          </div> -->\r\n          <h1 class=\"branch-title text-center\">LOCATIONS</h1>\r\n          <div class=\"row\">\r\n          \r\n            <div class=\"col-md-6\">\r\n            <div class=\"text-center card\">\r\n                <!-- <img src=\"./assets/images/about/BizSpark.jpg\" alt=\"Avatar\" style=\"width:100%\"> -->\r\n                  <br><h4>Wizroots Technologies</h4> \r\n                  <p>Address: Tower C, Global Technology Park,\r\n                    Marathahalli Outer Ring Road, \r\n                    Bellandur \r\n                    Bengaluru - 560103,\r\n                    Karnataka,\r\n                    India\r\n                    \r\n                      Phone: 090080 55299</p> \r\n            </div>\r\n            </div>\r\n            <!-- <div class=\"col-md-4\">\r\n              <div class=\"text-center card\"> -->\r\n                    <!-- <img src=\"./assets/images/about/BizSpark.jpg\" alt=\"Avatar\" style=\"width:100%\"> -->\r\n                    <!-- <br><h4>Wizroots Technologies</h4> \r\n                      <p>Address: 1008, AECS Layout - D Block, AECS Layout, Brookefield, Bengaluru, Karnataka 560037\r\n                          Phone: 090080 55299</p> \r\n              </div>\r\n            </div> -->\r\n            <div class=\"col-md-6\">\r\n                    <div class=\"text-center card\">\r\n                        <!-- <img src=\"./assets/images/about/BizSpark.jpg\" alt=\"Avatar\" style=\"width:100%\"> -->\r\n                        <br> <h4>LINK LABS OÜ </h4> \r\n                          <p>Address: Sepapaja tn 6, Lasnamäe linnaosa \r\n                              Tallinn, Harju maakond, 15551 Estonia </p> \r\n                </div>\r\n            </div>\r\n            \r\n          </div>\r\n            \r\n    </div>\r\n</section>\r\n\r\n<section class=\"quick-connect\">\r\n  <div class=\"container\">\r\n    <h2 class=\"text-center text-uppercase\">\r\n      <span class=\"left-right\">Quick Connect</span>\r\n    </h2>\r\n    <div class=\"col-md-10 offset-md-1\">\r\n      <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <p>For Business inquiries</p>\r\n        <h3>sales@wizroots.com\r\n          <img src=\"assets/images/contact/paper-plane.png\" />\r\n        </h3>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <p>Call us on </p>\r\n        <h3>+91 9008055299\r\n          <img src=\"assets/images/contact/smartphone.png\" />\r\n        </h3>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <p>Let's Skype</p>\r\n        <h3>wizroots@outlook.com\r\n          <img src=\"assets/images/contact/speech-bubble.png\" />\r\n        </h3>\r\n      </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/Pages/contact-us/contact-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_nav_bar_color_service__ = __webpack_require__("./src/app/Services/nav-bar-color.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_enquiry_mail_send_service__ = __webpack_require__("./src/app/Services/enquiry-mail-send.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactUsComponent = (function () {
    function ContactUsComponent(fb, navBarColorService, EnquiryMailSendService) {
        this.fb = fb;
        this.navBarColorService = navBarColorService;
        this.EnquiryMailSendService = EnquiryMailSendService;
        this.recaptcha = false;
        this.fullName = "";
        this.cname = "";
        this.email = "";
        this.mobile = "";
        this.msg = "";
        this.rForm = fb.group({
            'fullName': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(3)])],
            'cname': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(3)])],
            'mobile': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(10)])],
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            'msg': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])]
        });
        this.deviceHeight = window.innerHeight;
        this.navBarColorService.navBarBackgroundColor.next("transparent");
        this.navBarColorService.logoColor.next("./assets/images/logo_white.png");
        this.navBarColorService.hamBurger.next("white");
        this.navBarColorService.currentPageName.next("about-us");
    }
    // @ViewChild('myForm') myForm: NgForm; //for reseting form
    ContactUsComponent.prototype.sendEmail = function (message) {
        //console.log(message);
        message = {};
        message.name = this.fullName;
        message.email = this.email;
        message.mobile = this.mobile;
        message.message = this.msg;
        this.EnquiryMailSendService.sendEmail(message).subscribe(function (res) {
            console.log('AppComponent Success', res);
            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            // this.myForm.reset();
        }, function (error) {
            console.log('AppComponent Error', error);
        });
    };
    /* Changing navbar color on respective scrolling positions */
    ContactUsComponent.prototype.doSomething = function (event) {
        if (window.pageYOffset > 675) {
            this.navBarColorService.navBarBackgroundColor.next("white");
            this.navBarColorService.logoColor.next("./assets/images/logo_black.png");
            this.navBarColorService.hamBurger.next("black");
            this.navBarColorService.currentPageName.next("career");
            this.navBarColorService.tFlagValue.next(false);
            console.log("done! navbar color changed");
        }
        else {
            this.navBarColorService.navBarBackgroundColor.next("transparent");
            this.navBarColorService.logoColor.next("./assets/images/logo_white.png");
            this.navBarColorService.hamBurger.next("white");
            this.navBarColorService.currentPageName.next("career");
            this.navBarColorService.tFlagValue.next(true);
        }
    };
    ContactUsComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    ContactUsComponent.prototype.resolvedCaptcha = function () {
        this.recaptcha = true;
    };
    ContactUsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var grecaptcha = window.grecaptcha;
        if (grecaptcha) {
            this._reCaptchaId = grecaptcha.render(this.captchaRef2.nativeElement, {
                'sitekey': '6LdSNVQUAAAAAIst-6WxkY4zh4DWUO_0anpnZBXd',
                'callback': function (response) { return _this.resolvedCaptcha(); },
                'expired-callback': function () { return grecaptcha.reset(_this._reCaptchaId); }
            });
        }
        console.log("inside" + window.pageYOffset);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('captchaRef2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ContactUsComponent.prototype, "captchaRef2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeMailerModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ContactUsComponent.prototype, "closeMailerModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ContactUsComponent.prototype, "doSomething", null);
    ContactUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__("./src/app/Pages/contact-us/contact-us.component.html"),
            styles: [__webpack_require__("./src/app/Pages/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__Services_nav_bar_color_service__["a" /* NavBarColorService */], __WEBPACK_IMPORTED_MODULE_3__Services_enquiry_mail_send_service__["a" /* EnquiryMailSendService */]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/Pages/web-applications/web-applications.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n  .shadow-effect{\r\n    -webkit-box-shadow: 0 3px 30px rgba(0, 0, 0, 0.23), 0 3px 12px rgba(0, 0, 0, 0.31);\r\n    box-shadow: 0 3px 12px rgba(8, 8, 8, 0.31), 0 3px 12px rgba(0, 0, 0, 0.16);\r\n    border: 7px solid #14a261;\r\n    border-radius: 20px;\r\n    margin: 8px 0px;\r\n  }\r\n\r\n  .content h1 {\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n    color: #fff;\r\n    font-weight: 900;\r\n    font-style: normal;\r\n    line-height: 1.2;\r\n    margin-top: 0px;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  .background-1 {\r\n    background-image: url('web-app-banner.c90edcaa8bb03a2da906.jpg');\r\n    background-position: center;\r\n  }\r\n\r\n  .background-2 {\r\n    background-image: url('matrix-banner.f6eeabec7080f5b32bcd.jpg');\r\n    padding-bottom: 63px;\r\n    padding-top: 76px;\r\n  }\r\n\r\n  .banner-section{\r\n    padding-bottom: 80px;\r\n  }\r\n\r\n  .background-content h2 {\r\n    color: #1f1f1f;\r\n    font-size: 36px;\r\n  }\r\n\r\n  .background-content p {\r\n    max-width: 100% !important;\r\n    color: #000 !important;\r\n    margin-bottom: 30px !important;\r\n  }\r\n\r\n  .content h2:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 45px;\r\n    height: 5px;\r\n    background: #06D876;\r\n    left: -50px;\r\n    margin-top: 23px;\r\n    border-radius: 2px;\r\n  }\r\n\r\n  .content h2 {\r\n    font-size: 38px;\r\n    font-weight: 700;\r\n    margin-left: 50px;\r\n    position: relative;\r\n  }\r\n\r\n  .globe{\r\n    padding-bottom: 18px; \r\n    padding-left: 122px;\r\n    background: url('globe.7bada90885f2e54bff03.png');\r\n    background-repeat: no-repeat;\r\n    background-position: 17% 13%;\r\n    background-size: 17px 17px;\r\n  }\r\n\r\n  .content p {\r\n    margin-bottom: 0;\r\n    color: #fff;\r\n    font-style: normal;\r\n    margin-top: 0px;\r\n    max-width: 520px;\r\n    font-size: 18px;\r\n    line-height: 31px;\r\n    font-weight: 400;\r\n  }\r\n\r\n  .hexagon {\r\n    position: relative;\r\n    width: 100px; \r\n    height: 57.74px;\r\n    margin: 28.87px auto;\r\n    border-left: solid 5px #06D876;\r\n    border-right: solid 5px #06D876;\r\n  }\r\n\r\n  .hexagon:before,\r\n  .hexagon:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    z-index: 1;\r\n    width: 70.71px;\r\n    height: 70.71px;\r\n    -webkit-transform: scaleY(0.5774) rotate(-45deg);\r\n    transform: scaleY(0.5774) rotate(-45deg);\r\n    background-color: inherit;\r\n    left: 9.6447px;\r\n  }\r\n\r\n  .hexagon:before {\r\n    top: -35.3553px;\r\n    border-top: solid 7.0711px #06D876;\r\n    border-right: solid 7.0711px #06D876;\r\n  }\r\n\r\n  .hexagon:after {\r\n    bottom: -35.3553px;\r\n    border-bottom: solid 7.0711px #06D876;\r\n    border-left: solid 7.0711px #06D876;\r\n  }\r\n\r\n  .row p{\r\n    padding-top: 13px;\r\n    color: #fff;\r\n    padding-right: 0px;\r\n    text-align: center;\r\n    font-size: 14px;\r\n  }\r\n\r\n  .hexagon div{\r\n    color: #06D876;\r\n    font-weight: 900;\r\n    font-size: 20px;\r\n    padding-top: 15px;\r\n    text-align: center;\r\n  }\r\n\r\n  .banner-background {\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    background-color: #000;\r\n    background-size: cover;\r\n    overflow: hidden;\r\n    background-position: center center;\r\n    background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    max-width: 100%;\r\n    font-family: 'Nunito', sans-serif;\r\n    z-index: 0;\r\n  }\r\n\r\n  .banner-content .content {\r\n    vertical-align: middle;\r\n    display: table-cell;\r\n    color: #fff;\r\n  }\r\n\r\n  .banner-content {\r\n    display: table;\r\n    height: 100%;\r\n    position: absolute;\r\n    z-index: 0;\r\n  }\r\n\r\n  /* .network-group{\r\n    background-image: url('assets/images/web/networking-group.png');\r\n    background-size: 90px;\r\n    background-position: center 48px;\r\n    background-repeat: no-repeat;\r\n    height: 150px;\r\n    width:100%;\r\n  } */\r\n\r\n  .work-team{\r\n    background-image: url('work-team.11a8dde38455839f12af.png');\r\n    background-position: center 48px !important;\r\n  }\r\n\r\n  .secure-shield{\r\n    background-image: url('secure-shield.60126bce9c8447a72780.png');\r\n  }\r\n\r\n  .online-shop{\r\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC7lBMVEUAAAAG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYAAAAIUgugAAAA+HRSTlMACEqUudTv+CCh9AuLIdI87CTuD9f5ypeIIvrcRgajlvaTVNsKQsX1A9/E95GApPCeG3LJ86itnT7n1nzGanQfq1jLkH5FbY8Vic7HcRQ9g/6/kmvdPwR13kAo/V9kFozTvLCZjYJ2U0cwJRkNAuvIpY5IMRoOvbGad2BJJuCypnhsVTKq4QxhEdDowoUBFy46UV1p8fLDCSs2TW/Y5PybBcAsOERPW2dzbio3tTQHs77a1UGcp1AzzR16eZ+pI2a30biizO2EV4pWtoEcKZgT+ydSOa5woFlDL0zjfermZcEQtJU74odLHntc5U4SYmO7NbqGLenPr924ICQAAAABYktHRACIBR1IAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH4gMNCAI3pgokEQAADbtJREFUeNrtnXtAFVUexwcREZCX4gNQQ/GFV1HDXE0tBfOFCqYRm2bmo7WwlBLfSqaUaCzuGmo+CF+p+dhFxSQfmRY+ssK2pd0yVyVzXbRtd7PmzwXO78ycuXdg5s7cO+eMnu8/3Ply5sz5fe7MOefOnDlHELi4uLi4uLi4uLi4uLi4uLi4uLjuU/k08G3o18j/Hlcjv4a+DXxUwm8cECjeNwoMaOwUflATf9qFslb+TYLI+INDaBfIeoUEy/GHhtEuDQ2FheL4w5vSLgsdNQ1H8TeLoF0SWopoVgvAV3aat2jZ6h5XyxbN5Xh9a+KPjMKb0a3b0O6LWKE2raNxxFGR1dtt8dYDQabztomCHsAxt63eiIHP7WgXy0q1g6BjgoT28DG2A+1CWakOsRB2eyEAPnWkXSZr1RHCDhA6oQ+du9AukrXq0hnF3UmIQx+60i6R1eqK4o4THOhDN9oFslrdUNwOAa6F7tJ/IuPjethc0T17yZF2eTChEfhx8ZGS3R0CdwEQ3pt2B9UTCpMJPET6vcM1AfShXXbP6Dc4nr5Kv48mgH60i+4ZPYzj6a/0+2kCuEfuDA3A8QxU+v73C4BHcDyPdlb4jvsEwCC5XzdYQUD3GZCYZGMNeYxs8SOHDqv2Et0E0Mr7XRFr1YoD4AA4AA6AA+AAOAAOgAPgADgADoAD4AA4AM8CGD5iZPIotp+uehXA6NpBNrFjaAdJDUAK2ie1G8MngVcBDIBMxOi+tOOkA2AsBiCmPs7qOBuvAhgnyhr/BO1QKQBIG0QQSPVl8iTwbjPY5UkHgSD9t7SjtRyAIDyVTBCYMJF2uNYDUJ4EqU/Tjtd6AMqToPMk2gFTAKA4CZ6hHTANAORJ0Hxy8rNT4qdOm/7cwIm/mxH6/AsZM1+8DwA4NQdOinkpbvKsZ6fMnpo5/blxE9u/HPrKC3OyrBqfaBEAQZghuinHS3F+s+bOmz0/M2XBuIXtF415ZbE3sFgGoEsjdwmoYwlb4pcwd2n2/GEpry5b+NqiMcsX92qWZgcAwgqPAFCXf1jOgOmvMw7gDS8CqFXISrYBZKR6m8AQtgEIIyHLxNzoVYHeoLGacQBvQpatazbygn4fmb+m9R/+uLYHct/Kje5XMMEUgHWMAwiFLIcp7XXIRUM4149uvOHtjhsHP71pPLIDN2/pUagTwDuMA8AN4WalPRW5UUVKeyuyt9Z89hndeNv2HTvf3bV7LhQrfVVv14toF+MApIYwWOHuAfe9ugHIGkYUt8Pwxhv21pwt+yCH/awDwA3hQIW7A9z2egBkIzdHzYw6wDoA3BD+SeHOgSM5NWLqAP6M3ASFWYzMkYYKZSUA3BB2Vn5V0Aw8pAfAQeQuJb1mwHU++wBwQ6gYsoufHoToARCmUt8fMlMHWgsAN4SZCvcwFEH5S08VQBF82Smk+YiZOtBaALghjFC4o+BQi7UB9IKky0izBOpAY294WwpAaggVU5XMAPOINoD31VoMeNv1qLEiWQsAN4RrSbMUzA+0ATSApOTzZnN1oMUAcEOoqMWFAmTGawPAAMmrBb/ta6wOtHqECDSEgYqGMAGZynZcFcAxKFUW4T1pqg60GgBuCHeQ5nHkxShuD6sCSEKmg/ROmKoDrQaAG8JppInbsZOaAKDCX0J60abqQKsB4IawIJdQDhwrljRhAq9A0suF2sJBeqKpOtDyUWJeuzVqsA60HIDXbo2+bxMA3ro12tzoTD9WA5BujXpYRutA6wG86WZkOmW0DrQeQKibkenUh7YBgBvCwimyTsHBigkPfvmHEdaUjyDdadmCu0GG60AKg6VxQ0h0e9JgHrMzRDK1jtAHsOtM2YKJMAzXgRQA4IaQ/E0/GVkfawCAGV5iCMvcb2EqAHBDuI/woD8fmFc/APi642QnCzKbaiMAuCGMIeawHQJHI26UqAGAobfEPeEnzNaBNADghvBl2cIztzWoH8DDyCPuJjxotg6kAQA3hMQkVe+B9YhsqQH4BHnEPeF4s3UgDQC4ISyWrSKYvbJnvQDwPeEy2drsWnuyD0CtIYQHHrPqBYDvCe+RnG2i2TqQCgDcEA6VLRhWXlAvgOWw31nJOQfOeXsBwA3hBdn6FA53sT4AiyCRNOg8GCY+buSj57DsAFBpCM/C4WbUB2AhJPoMtjvgu0GfmygLFQCuDSG+mEfVB2ABJPoCbZ6EsSWiuN1uAHBD+LjktClHjtzCqQDIRFZ5bX/xUn9pJqgI3QdmBQBuCGNlC9qzTvUBmI2spl9uemZFuigp6i+2AyA1hNI0hsJXUJ3VCeDAyUO5oqoGundsJgC4NoTwjqWY4Qxg0v4v/5o5KKFfnfcSK8wVhQ4A3BCOlZyv4Xh/g+20TqI+rTPRBNIDIN0alS7fv4NxLP+bga2yO32rc2yg/6tmB9BTAnAZsv8OWrCip3R+4UolbjBdEkoAVr6FYxjrmzRo1hUjY2R7L/2HmRcF6AKQ+r7GVL7k6ohDnln0gBaAaz2MBN4j5Hrlgq+/L/XgmzO0AAgVbsRdeKPr7B/W3tyWZf6wzADQdQYUTN7X8ti7of/0wKXOHIDu9cQ94dtOJSPGfZN/zYtx0wagegL0Pnhq6q1/9W3szS+cFQD4MFUXImIcVcknzi27/fwdK+OmDEA6ARZSCZo+AHyUaEvPdnYASCfAG7TDpwQAH2Q8/ROACgDpBPiRdvSUAPRn6ASgAiCWoROABgD8JDSdhROABoDHIGs2ZpShAGAjZD3rlCfU9t/m5iChACBc9Kx+MnUpUQCQd8PDBEaZKQ0FANL7AR47BewGYP0ANyPU0Fy7ARDuHPQogAW2AyB86Mn4c4vsByBBKn1clfSxfJamyqXEVXHSR1NPx+kA+A8ue3aGIARfgI1UzYmAgvDzk5/CBSFDWhfY4AtzFAHg1/+Oo01M4Hut/bZDwv+iIbUtYTNFaz/mALyD8opCS3wLwXCsZVr77YKEML7udRgjkm07ADAVijTEG+qBw1r7VaJ03+FteIQ+QGs/5gCcRnkl422o0DSHOsCEM1V4GwZPb9XajzkAZSgvx3q0maH3EsCt5xy02QbeozQ1SyUVADshc5hJAmaBEfdq7bcfEg5Cm/+DzbNa+zEHAA/6Tc2sPgeawbvTYpTmYJc2MKZajL9T3aFughvFk3qOyRQAIR1yFx3JR3FQeuoyaeBQ1NFkaY7OKu39mANwU3RV4dva++0vV9nxiPZ+zAFQGx3wg579Ulz3i9ezH3MArm1xjuOgromw2nzkvF+VoXkkqQMQQquUccT+rG+/zyKc4g81WRBaAIRr5FUwIUn3Ihw+58gRZWdMfv9Ul9m5mY7D8HPra9wuXQY5t82XgiKA6v7AzrLTS4c0cHvC9dGLLi89XXbkorv7MQeABXEAHAAHwAFwABwAB8ABcAAcAAfAAXAAHAAHoAlgckVFxfHL5A28vNcyK2ysyW4CQIqSR3kWNRTvBbkJQPSX3vy/7NZxmJXDTQDym/8J7hyGXWmfAU5PMqSZ0P1oF90z2qIJoES5gzRxS0t3DsOuSjQBXLxLpq+UKsEvctw7Epu6e1ETgDDJ95clSHENydf9VmZ+vMTm+sVXfjQhAYhBf9t5vyvCltqhuGMEWOsr2XyW9hIsDzser4HmYOLFHuuUBgNP1uHFb8hZLu8H4VVMDktv9tzwxrQNzCoLv82yUfCBFQ7IaS7vffWEoAN9pAWgRDGbzov9FHQHj1isHbVbKo1Du3LeksksaOva+Ss4YkdpjdFE7iilFpd8fo+rpJiYrq1JLZEOXloLgX2NhBFLpatol4SOVpXiq2J5lfnc7Keq5XK9kJFMuzTWKzmDrBkP3CqgXSBrVXDLecTqpG53zWdrF93tpjZk78U1ZSe6xq3ynGBOWfEThQutULkyLQwPT1WYMMu82MiDhYrreqJsjbk38XXrRyi/cnhwC2SG5ZFmHqy10kKR9GfIgIk5OAxoOpR/psI9B24+aeaDeU6RdCa402lHYlBn4ApQuviH6CbS3ASm049yuAbOaB2JUa1GxXdaGSYLJpIlF18RYFnxQqff5EeRvZp2JAYFv7n7ONmJyJ4QKVuRMDQ+0SlpH2TfoB2JMRVBVNOcfHw/9rhs4RfKujslnQasimjHYkiRENVQJz8D1psSb2HnFhjNM5ySDoV/RGofjUHhdXI3Ov/jDO6PrKh99BourU7pUtnh+3UdacdiSOrdAEFeQ6S60gvJzg6RZ9de7pzS3h0B9W5AjU6rd1BPuyS0d0dAvRtQo2shavGHqNyQs3VHQL0bUKuMdNf40zNUEtq6IwCPk79S+1+4y0/Pu+Fq6WBBihzasRhRGlRumar/nVSpeD24vFL9lTJYb6XQjg/u8Iwhe+r4/+I+cvx9FteRaA8kCKYdjQEdgrLX/dLjpcEpvxYX/5oy+FKdSW5DJodoR2NAeIGVfDOZ4J/JDMzL67bw0gqmHrpmQSaf0o7GgAJQ0ZuaywWWWQugHY0BXUVFH2kuF3hqdZV2NAZUXzdAv+zbEai/G6Bb9u0IaHUDdMq+HQHtboAu2akjsHd3K0Lz8E2OVqaEb57MI83dmnNR0VClaKEqzZfX01poPip3RH/NDmddtxbAddrxusjiEQbsDe1NshZAEu14XTTc0oFGq4bTjtdVcypy/C1STsUc2tFycXFxcXFxcXFxcXFxcXFxcXFx2VT/B6NKpWHDxwoMAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTAzLTEzVDA4OjAyOjU1KzAxOjAwMpDFIQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wMy0xM1QwODowMjo1NSswMTowMEPNfZ0AAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC');\r\n  }\r\n\r\n  .cms{\r\n    background-image: url('cms.1b32e08224a5fa18eaf7.png');\r\n  }\r\n\r\n  .responsive-design{\r\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACT1BMVEUAAAAG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYI1nMG2HYH2HYK1noG13YG2HYG2HYG2HYG2HYG2HYG2HYG2HYG1nQJ2XEG2HYA220G13YG2XcH13YG2HYH2HYH13cA34AH23UAzIAG2HYG2HUG2HYF13UG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYH2XUH2XcG2HYA2XMF2HYA/1UG2HYG2HYI2ngG2XkJ1XcG2HYG2HYAAAB0SewNAAAAw3RSTlMAAQ4QDBZnt+L69dukUglu4UQiwJdd9N8yLfkKBM2Sfv5AKd4Fh0fZx3VwgZkN+zkCciar5jxNjfyAPjE6JTcaMwfQ8RgGIzY4MBGPkHwSmL5CbVbB7BdamtfK/fe7uBXEiztr8LB9zvicy+dUz9VbaJt4gq+8HU6OlMgLLpWiKuqte4jWs3eDalDaqRMgyWlVH56XGafg5bo/0VEULBvTDlJYc9xuTQgjCut842AZoZOJ77nuWbRxSZ0UvgMnRSIoHg/L3JHjAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB+IDDQgSB8oRBuwAAATdSURBVHja7d35W1RVGMDxMxKSQ6KpRSLuoyYFaZGiEiUqZRaSpa2aIhqh2Kq2aGVWtpdatmihtpft+6p1/7Hkgbkzg8Nzz4Vz7nuX7/fnc+ee9wPzDDB3uEoREREREREREREREREREVFBqRElsei8oQxfOrLs/FFOTEqXXzC6wt/XfkxaetOmG3uhj/nHjZfero0maD8VLrpYeq92qrxEb/6JVdI7tVX5JJ35qydL79NeU3QApkrv0mLTpnvPPyM2L37FmpnxBJglvUe7zfYEmJNbfOncmlh0WWVupsu95q91l9ZdofeiEYHmzXenmuy19kp36VXS2zZYpj47Vb3X0qtdgAXSuzbZwuxUDV4rp7sAGq8Y0WmROxYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJB3gcRi6U3LACxxVzZKb1oG4Bp3ZZP0pmUArnVXXie9aRmApc39C5ctl960DIBa0XL9DWdbeaP0nqUA4hkAAAAAAAAAAAAAAP0AFY01q24y082zW6Wn8w1Qu7rOMVlbi/R8/gBuGWt0/LOl10gP6AdgnI2PRt8qPaE+QOo2C/M7a9dJj6gNcLuN+R3nDukRtQEm2AG4U3pEbYC77ADcPaT/VCIBcI/nLOn1GwZW73lQyP+InAfgPf+95x5fvdHzsHC/keQHoOizeUqCAJxN7U0D29yRJIChBYD0jAAA4A9gzhYjbYwqwNaUoYdeHE2ABnPvfd4XSYBOc4+9AQAAAAAAAAAAkJ4RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALAM0HR/V3OY2hYwQI0T2gIB2D5NekxhgG7pKYUBKsz+r7boAbRLDykNsEZ7NzsWPvDgQ2tjB/Cw5l4aHsn0Ll/3aFIBtvavT+1MJkB3dfaAXelEAizKHTE+kQC7c0c8lkiA7bkjHk8kwKzcEU8kEmDmk9kD9oxKJICzt399JsjfHcIE4DxV0rv86a4A5+8IFYDzzL5n96/vDHB+57lwAQTf80kHGJlwgLrlQQC8ID3m4B1QQQC8KD3moDVnAgF4SXrOwaraowIB2BXWPwrPVcEAqDLpSYu2bYEKCqD0Zelhi/TKqyowAPXa69LjDqiqbHR2b4EAKLXyjZrQtPnN9trczgICCG8AAAAAAAAAAAAAEgAHD2le1HX4rXgCvK39s/vheAJUagN0xxPgiDZAMwCWAZwZph6v+p1oArw70czDla5yoglgvMQDvKdxbv3b3b4fAoDyo8dad+8w+R3wgT5nw4fiAD2Telev0L54JR/g+ImTRfroY30Ap+eTk4P36WcBADT2LV8yBIDPbdzZuKD6L6wDLMveiutL/wBf2Z6/4AozSwCnsuvL/QPstw/wtf2nwDd9y1t13+fLexUIN8ApzVN827d8r+6W8u5AH26ALbrn+K5CqaXf634D/JCKCsBU7ZN07PzxJ+3FbXmnCDdAi51L03+ODICPD7T4aF/+GUIOkPrF/H6OFNyu+1f7AL8NA0DNm+99A3Z//T6i4AR/9Nie/8+/hgOg1N+b2rzvpa1ZZ9fqf845wekzVvt3eOP3PRH+KzFTxsBmiIiIiIiIiIiIiIiIiIjIcP8DRxzM8rD/qJEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDMtMTNUMDg6MTg6MDcrMDE6MDA7Q5VlAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTAzLTEzVDA4OjE4OjA3KzAxOjAwSh4t2QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=');\r\n  }\r\n\r\n  .back-end{\r\n    background-image: url('back-end.c3a446ca193edc703bc9.png');\r\n  }\r\n\r\n  .growth{\r\n    background-image: url('growth.04f5d16418a6629898c2.png');\r\n  }\r\n\r\n  .projection-screen{\r\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC91BMVEUAAAAG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYG2HYAAACu+nDRAAAA+3RSTlMALF+TxvXywY1aJBewnA5V6+FFl39U/j4V6t0LrJQqE15GkXnE2sm9pZZ+PSbOtpqCB8q3AgynlQZ4YDAYnkivkChcTBlj8+ayNxy4/Ijw1DJL7BDlsaFCEYlHvnsB8a42CIv70J0FDZku3/kEUKboqFOr/eQ8b6N0zDNnw2s4CYzX4mIbpLVEbaC06QoeGoPcNNhDPydpIO72O7oUc+PtA1v6D4Ujrb/3FlEh22Tvj05A+HDIYRLLm3V8SXIxqbPS3lbZZtY5JeBq9Gy7z8KAhKp2jpLNKx0pWYaY5yIvLdPV0V1uxYF6fTq5x6J3vFhSNUqfh2XAQR9Xik2OQ1oAAAABYktHRACIBR1IAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH4gMPDRAlgYUv6gAADNdJREFUeNrtnXlgFEUWxocAiVyBcAyEcMkpILBgArhchkAwJISbIBAwhENMNEA4NJxhdQWBQDgFOUJQCBAUoggSuUQBEXAFUZB1ZVlXXN3DXd1z/lkUatJdXa+7prsOmOrvz/Sr9773y8x0v56ebo+HrHIh5StU9AWPQsPuq1TZQ60qVWUb5qJq4ZT9V68h2yonRdSk6r+WbJ8cVZui/zqyTfKUt65l//UiZZvkqvpRVgAayLbIWQ0t+m8k2yBveRubA2gi2yB33W8OoKlsf9zVzBxAc9n+uKuBOYBQ2f64q4U5gAjZ/rirpTmAVrL9cdcD5gBay/bHXW3MAbSV7Y+3vA9aHAm1k+2Qs9pb9O+pLtshX1FMQx1ke+SqX1j27+nYSbZJjnoo2hqAJ6azbJvc1KUrRf+39LBso5z0S7r2PZ5usp1yUnc7AHr0vLfVyymAh2kX3aV6xAXgAnABuABcAC4AF4AL4F4FEB3bu1lcH2UB9A2L/9lFv0cTVATQP7HMR9KAjsoBCEn2aTVwkGIABvswDamiFIChw3AAvuFKARjhMypEIQAphP59ySPVAfAYCYBvlDoARhMBjFEGQOpYIoBxygCIJfbvi1AGwCgyAJ8yAHq6AFwALgAXgAvABeACcAG4AFwAVABSKz+epi6AuuNHJ/t86RMm9p2kIoDJT5RtbjdFPQApT2q3Z4zJVAzAU14s4mm1ADTOMoTUUQrAVGNIZD2FAEwjxUxXCMBwUkx2jDoAZhCDZioDoDs5aJYyAAaTg2YrA+AZctCzygAAftgwwQXgAnABuADuegBdc+Z0mNtj3vwFagJIW5hxp0A68QZPwQ4gIVdTYhHhBk9BDqBNkt5xecUAxBks/0opACP7GSwnP6cSgOcJnn+tEIAcoukX1AGwmGgau9FdMANYQjT9ojoABhJNL1UGwLIksuvlqgAAzuP5urkAXAAuABeAC8AF4AJwAbgAXAAuABeAC8AF4AJwAbgAXAD3PIC8FStbG27krBCA/J+e17JKXQCrb98DaY2qAKpn3E6wVlEA67Jvr2+Fb1AEQJs7y4etVxJAdMM7q18qZ9imAoCu6HccGzYaNyoAIOblO2vTBxO2Bj+ATej+/N4mpM1BD2C5/wq4zcTtwQ6g0Ra0cgA5IMgBzN+KFk4EIoIbQE//o2qrFqgIYFshWhaWBsUEM4BZ/t/xTtgOBgUxgFf8i+qblApaAAVlDyjKetUkLlgBdNzhXzK2m1lgkAII3+lfUbTGNDI4Aewqe0Zb0m7z0KAEsKe4bMFei9hgBDBF8wOAZlbBQQig7Wtl4a9bRgcfgH1FZdGzUy3DhwKtxeqi9pODSvS53iBHvSkUwAHNxc/tMymybyGarligC3qL3NpBfarV5KhDIgG8rYmtsIwmey+i6eZY1EpiVC19EPBqmiMOQOp4TejAt6iyHyaaxj88yA89xHcxZEz5wgBkan/9EfEcXfZSoulKWNQ7xKgjWNRRUlCh9lkUXAEsOKYJrLGWMnvX4wTTJ6KwqF01CFE78c/YjdmEqKbaCJ4Ahmqf1B6fT5vdc6TQ4Nm73xD1rrGzeMO3LJ7xxqiTup9jcwTQR/ufzHiBNrmn7GujMpUnRE03RL1nDEp7Hw9KOqUL4AfgtPYubtnvBtC/JzMMM308ihBV7wwWtYOUKz8Ui8Ierc0NwKCl2qofBNL/LQKHM7T0FpLPn4VX05Y4+yH5IGv5OW1UvzhsMy8AKTrwtWkz+zXlvH9xi41gVGnZnaIugCdZUtfF+6OeNzyDgxOAaSXa/rsE3L/HM6nnmF6LfP2OfRS3wCQqfPdvHor01f/4YorZE5Pztl0KC00auGRxjnEbHwBzdHufozSPcyYqiiqK6vgyGuDIBYD+WO4c5eOc5YgDgNRPdP13iqFNGyQAJj2t63/VJtkt8gVQvAfbFpWo63/Gctqk9yaAy7uwTY3f1PW/9VPZDfIF0GoytuUz/ZFnxVO0Ke9NANPxZxxeWaTrP71Udnt8AdTC9+8JQ3T9e3vL7o4vgI/wP486q+vf94bs5rgCyDbMN1exMf5z/eaCLol3o87YBJBRHf/jYuwm3oew7RN9d70CABC6Gv/bCizZuAL99gGyu2MKIBIfq6KvYbl2YjuIzbKbYwqg/2nsDx0bYKnOY/cADPHacnS3AsA1uRWWaSX2ANy4dNm9cQWw6zKW6Ldf6ANmbpDdGpUK7T272rO+BZYo+Xf6gCmv2fIjXM/a6/9L/AHIRW31AXv62bIjXm1s9b8R//cm7dMHVCm25Ua8rts6cxVneHsf0AeEn7djRoIOnrbTfxPDx/tFfUDB1CykbDu2bCo9KzAVT59Hc+mCQZsNu/eFYOxkkbvCrbZPRAck4+OvR8CXwMTZ6MO+6L+Kta+CHoayL5q8jh6x0YZ9CbjleZrxCS7Nzb7E+b1QAK2o+7Cr7RcMRa+PNInvI7R/X8kC6k7sqfsNQ80n88wW/AFwOsPhCY2tQN6atJ3YU+UThoqR5vvREYDRdxw6+QTI+xjX/o8YH2EWmmO+ZBhgdApdRVD7gLyXefa/f6zxPZdivqQR4HOp9aWj5goHDi+8HL+S211iKJddx2LNVwCABxy7+SOQOaCLcgLSXsKNf+dYLXoUsHmApqKpvgYyd+DV/01CsW+sFmWGAjY/c+xnJpD5BJ/2U0kHdOUtl/0JcHnSuaNJ8UDuL5znJlQj3fu/s/UHWW3AZEMGno4BuS3flnZEupL720nW6+YCJp9i4GkWkHu689QG7SXUaUlxJVNMIdlj0nbrtZb6FADAYSTub9z/+3IbUywEnvvn+46JLeicY47z1JgIj+/bQvUx/jpgcQUTW38Gsv+FOQDjjxSGXKFaOBCwuIZqtZWaANn/yhxALl7ibALVOmgUPsvmCsI8IH1RmvPceuGf5YWj6Nb1Bhy2Z+QLOtcSyCX6VGqqz++9SrluCWDQ6SiMBJ1tG+A8tV5/0+f/inbdDMCg01EYCTrfynwkjq6gTU/9EX4F8JfldBRGgs64Z9PsogPSWs2PQJ+gXrUYAOB8FEaCDjSrO0+NqSa6EDDjMP1x1nDAnvNRGAkaNej/SdQKv/bT0WBhWDn6JZljAXvOR2GkjUCF+uwB3BqIT3//94CuJIBG4VWBJDEXeLqBy0gcqNoA5liMwkjQCaf3nKd2rguAORajMBL0Ofux7OY9nEdhJGhPO0TMt8Sm+gfgjc0ojAQdaw2S3T7vURgJOtpmPxIHrOuANTajMBI0b52T3T54TxRGo7BVGfYjcaDaBjhjNQojQS+01c5TO9MPgDFWozAS9FHzo2wAWwBjrEZhJGhnY/PyT2aKBXwxG4WRoMONbLo7t3DThwAAdqMwEnTAafW9NWdVBWyxG4WRvgEqXZPafwH/URjpFFBppVQAkCuGozASyHqP89z2Bb0uWY7CSNC77Z8yAYQBpliOwkjQ5+1Rif1HiRiFkdYCAGqw3uMGoFLAE9tRGAk65jriPLVdXQIssR2FkaCj7ovOU9vVccAS21EYqRJQ7WVp/VcBHDEehf3lgF9nbrD5czjngv4lrEdhJOgFl+I8tT31AAyxHoWR7gPqfe48tT0tAgyxHoWRSoF6B52ntiVox8x8FEaKyiAXzB7pPLcdzQMAsB+Fkf4FVJwmB0AvwA77URjpMFCxlvPUNlSQDNhhPwojJQAVV0oBMB9ww2EURgKZr3eeO3BBr0ceozAS9K6zuqc/F0GfSDxGYaQPgJpTJfQP7ZO4jMJIDwIAZIzEpYAXPqMwUgRQVcJIDB2X8hmFkaDbNb0tHsANwAqfURjpKlD1W+H97wJmU06jsFVZ8SMx9K/gNQojTQDq/ls0ANGjMNJCoK7wkRgahb/kXHcUULeT4P6hHTK3URhpWQa5sOiRGDok4zcKI40GKn8vFsA4wAa/URjpJlC5tdD+C6Dbh/EbhZEeByoXCwUADeYcR2Gk6JeA2v8RCWAMYILnKIy0A6jdVySAnYAJnqMw0jqgdmeB/UP7Iq6jMFJlAECkwJEYehge31EY6QxQvZvz1LSCjkf5jsJIh4Dqz4gDUAGwUFdI9f8C1ceJA3CS7IDzKIy0CRiJw8QBWEp2wHsURmpHLn9DHIASsgPeozDS/8jlzwjrPw14E/IehZHuJ5dPFgYglbwj4j4KIy0gvwJbCgMAvAbFXbVLvrOOqHfgLeWQ6qeLu2aV+LRZb39xADykmyn3EFifdGp0rsD6+K0Wfn4BvOo8LbUI969MZ35DDVMZ5+HxIsunGr8h4n8uSq9q+vLem2LLR+O3/An8mY8OlfmD9lbaJbT3W2FXX3cT0xIZV8rFzkZ3XizaIeORW/n+h40WNc1zns6OTl+amvhdbmJIuPNUtlT36wa5G4oTf+xjP8X/AXqwzCYkYjByAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTAzLTE1VDEzOjE2OjM3KzAxOjAwglKVBAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wMy0xNVQxMzoxNjozNyswMTowMPMPLbgAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC');\r\n  }\r\n\r\n  .open-source{\r\n    background-image: url('open-source.2f6dc31c44e0fa7bb4be.png');\r\n    background-size: 75px !important;\r\n  }\r\n\r\n  .position{\r\n    background-size: 80px;\r\n    background-position: center 51px;\r\n    background-repeat: no-repeat;\r\n    height: 150px;\r\n    width:100%;\r\n  }\r\n\r\n  /*----------------------Mobile Phones Portrait---------------------------------*/\r\n\r\n  @media screen and (max-device-width: 480px) and (orientation: portrait){\r\n    \r\n    .banner-content {\r\n      display: block;\r\n    }\r\n     \r\n\r\n    .banner-content .content {\r\n      vertical-align: middle;\r\n      display: table-cell;\r\n      color: #fff;\r\n      padding-top: 75%;\r\n    }\r\n\r\n    .background-content{\r\n      padding: 20px !important;\r\n    }\r\n\r\n    .globe{\r\n      padding-left: 80px;\r\n    }\r\n    \r\n    .service-description-heading, .service-description-paragraph{\r\n      text-align: center;\r\n    }\r\n\r\n    .tech-bar .heading{\r\n        padding: 40px 0px 10px;\r\n    }\r\n    \r\n    .tech-item img{\r\n        width: 50%;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .tech-container{\r\n        padding-bottom: 22px;\r\n    }\r\n  \r\n  }\r\n\r\n  /*----------------------Tablet-------------------------------*/\r\n\r\n  @media screen and (min-device-width: 768px) and (max-device-width: 1024px){\r\n\r\n    .banner-content {\r\n      display: block;\r\n    }\r\n     \r\n    .banner-content .content {\r\n      vertical-align: middle;\r\n      display: table-cell;\r\n      color: #fff;\r\n      padding-top: 75%;\r\n    }\r\n\r\n    .background-content{\r\n      padding: 20px !important;\r\n    }\r\n   \r\n    .globe{\r\n      padding-left: 80px;\r\n    }\r\n\r\n    .enterprise,.source-page,.computer,.responsive-design,.line-chart,.online-shop,.work-team,.secure-shield,.network-group{\r\n      background-size: 55px;\r\n    }\r\n\r\n  }\r\n"

/***/ }),

/***/ "./src/app/Pages/web-applications/web-applications.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Module done by Sathish-->\r\n<section [style.height.px]=\"deviceHeight\">\r\n    <div class=\"banner-background background-1\"></div>\r\n      <div class=\"container\">\r\n          <div class=\"banner-content\">\r\n              <div class=\"content\">\r\n                  <h1>Customized Solutions</h1>\r\n                  <h2>WEB APPLICATIONS</h2>\r\n                  <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiumod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud</p> -->\r\n                    <p>Responsive, Fast, Scalable & Secure Web Applications</p>\r\n                </div>\r\n          </div>\r\n    </div>\r\n</section>\r\n    \r\n<section class=\"banner-section\">\r\n    <div class=\"container animated\" animateOnScroll animationName=\"fadeIn\">\r\n            <div class=\" background-content content-section\">\r\n                <h2>Web Application Development</h2>\r\n                <p>We offer varying degree of web development services to give you an edge over your competitors in terms of ROI, quality, time-to-market, marketing, and many relevant things. Our Web Application Development encompasses a range of services including website designing, custom website design, web development, e-commerce online solutions and so on, for clients all over the world. With our dedicated professionals, we offer a wide range of new and innovative internet & web based technology solutions for clients with all business backgrounds. We are committed to excellence in our services and work towards delivering high-quality IT services to our clients.</p> \r\n                    <div class=\"row\">\r\n                        <div class=\"globe col-sm-6\">Enhanced Performance and Speed</div>\r\n                        <div class=\"globe col-sm-6\">Better Functionality and Features</div>\r\n                        <div class=\"globe col-sm-6\">Rich UI Elements and Experience</div>\r\n                        <div class=\"globe col-sm-6\">Enhanced Visual Appeal</div>\r\n                        <div class=\"globe col-sm-6\">Increased Business Impact</div>\r\n                        <div class=\"globe col-sm-6\">Responsive web app with adjustable layout</div>\r\n                    </div>    \r\n            </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"background-2\">\r\n    <div class=\"container animated\" animateOnScroll animationName=\"fadeIn\">\r\n        <div class=\"row\">\r\n                <div class=\"col-sm-2 offset-sm-1\">\r\n                    <div class=\"hexagon\">\r\n                    <div id=\"value1\">200+</div>\r\n                </div> \r\n                <p>PROJECTS COMPLETED</p>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                    <div class=\"hexagon\">\r\n                    <div id=\"value2\">50+</div>\r\n                </div>\r\n                <p>CLIENTS</p>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                    <div class=\"hexagon\">\r\n                    <div id=\"value3\">15+</div>\r\n                </div> \r\n                <p>EXPERTS</p>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                        <div class=\"hexagon\">\r\n                    <div id=\"value4\">3+</div>\r\n                </div> \r\n                <p>YEARS EXPERIENCE</p>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                    <div class=\"hexagon\">\r\n                    <div id=\"value5\">7+</div>\r\n                </div>\r\n                <p>COUNTRIES SERVED</p>\r\n                </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"banner-section\">\r\n    <div class=\"container animated\" animateOnScroll animationName=\"fadeIn\">\r\n        <div class=\"content-section\">\r\n                <h2>Web Application Services</h2>\r\n                <!-- <p></p> sub text need to add -->\r\n        </div>\r\n        \r\n    <div class=\"row\">\r\n        <!--<div *ngFor=\"let web of webList\">    //Iteration of all benefits\r\n\r\n            <div class=\"col-md-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\"></div>\r\n                    <div class=\"col-md-8\">\r\n                        <h2 class=\"service-description-heading\">{{web.heading}}</h2>\r\n                        <h5 class=\"service-description-paragraph\">{{web.description}}</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>-->\r\n        <div class=\"col-md-4\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4 service-icon-wrapper online-shop position\"></div>\r\n                <div class=\"col-md-8\">\r\n                    <h2 class=\"service-description-heading\">E-commerce Web Application Development</h2>\r\n                    <h5 class=\"service-description-paragraph\">Developing and maintaining a reliable e-commerce platform is vital for any website. Web app development primarily involves a feature-rich e-commerce solution.</h5>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4 service-icon-wrapper cms position\"></div>\r\n                    <div class=\"col-md-8\">\r\n                        <h2 class=\"service-description-heading\">CMS Website Developmenmt</h2>\r\n                        <h5 class=\"service-description-paragraph\">Content Management System based website just built to your specifications is our strength. This helps you to control and update all parts of the website without help of any web designer.</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4 service-icon-wrapper work-team position\"></div>\r\n                <div class=\"col-md-8\">\r\n                    <h2 class=\"service-description-heading\">Custom Web Application Development</h2>\r\n                    <h5 class=\"service-description-paragraph\">Custom Web Application Development services are built to offer excellent usability, scalability and compability in term of devices.</h5>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4 service-icon-wrapper back-end position\"></div>\r\n                <div class=\"col-md-8\">\r\n                    <h2 class=\"service-description-heading\">Back-End Development</h2>\r\n                    <h5 class=\"service-description-paragraph\">We have expertise in various robust back-end technologies using LAMP, MEAN,Node or Python. Our robust back-end technologies strengthen the front-end side of website or web application and help in functioning of the user-facing part.</h5>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4 service-icon-wrapper projection-screen position\"></div>\r\n                    <div class=\"col-md-8\">\r\n                        <h2 class=\"service-description-heading\">Enterprise Level Web Applications</h2>\r\n                        <h5 class=\"service-description-paragraph\">Enterprise level web applications are becoming increasingly popular as they help improve productivity besides providing great user experience.</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4 service-icon-wrapper growth position\"></div>\r\n                <div class=\"col-md-8\">\r\n                    <h2 class=\"service-description-heading\">Agile Development Processes for Web Apps</h2>\r\n                    <h5 class=\"service-description-paragraph\">When build powerful and scalable web apps that are custom made using agile development processes leveraging the latest web technologies.</h5>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4 service-icon-wrapper responsive-design position\"></div>\r\n                <div class=\"col-md-8\">\r\n                    <h2 class=\"service-description-heading\">Responsive Website Application Design</h2>\r\n                    <h5 class=\"service-description-paragraph\">Web Apps allows an easy responsive design with flexible layouts, together with flexible content for social media, real estate, and e-commerce websites.</h5>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4 service-icon-wrapper secure-shield position\"></div>\r\n                <div class=\"col-md-8\">\r\n                    <h2 class=\"service-description-heading\">Secure Web Application Development</h2>\r\n                    <h5 class=\"service-description-paragraph\">Web Applications must be designed with security in mind. Secure coding practices are certainly a logical first step, steps must be taken to improve web application security.</h5>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4 service-icon-wrapper open-source position\"></div>\r\n                <div class=\"col-md-8\">\r\n                    <h2 class=\"service-description-heading\">Open Source Web Development Services</h2>\r\n                    <h5 class=\"service-description-paragraph\">In digitalization, every business needs smart solutions to optimize, streamline and manage digital experiences through content. Our expert team of open source  works with  Joomla, OpenCart, Drupal and  WordPress  help us to deliver the latest solutions.</h5>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n    </div>\r\n</section>\r\n<!-- <section class=\"banner-section\" style=\"background-color:rgb(1, 217, 119);\">\r\n    <div class=\"container animated\" animateOnScroll animationName=\"fadeIn\">\r\n            <div class=\"content-section\">\r\n                    <h2>Technology</h2>\r\n                    <p>The technologies we use</p>\r\n            </div>\r\n                    <owl-carousel\r\n                    [options]=\"{nav: true,\r\n                                items: 5, \r\n                                dots: true, \r\n                                autoplay: true, \r\n                                autoplayTimeout: 3000, \r\n                                autoplaySpeed: 2500,\r\n                                margin: 30,\r\n                                loop: true,\r\n                                lazyLoad: true\r\n                            }\"\r\n                    [items]=\"technologies\"\r\n                    [carouselClasses]=\"['owl-theme', \r\n                                        'row', \r\n                                        'sliding', \r\n                                        'responsiveClass']\">\r\n                    <div class=\"item\" *ngFor=\"let tech of technologies;let i = index\">\r\n                        <div class=\"thumbnail-image\">\r\n                            <img class=\"shadow-effect\" src=\"{{tech.image}}\"/>\r\n                        </div>\r\n                    </div>\r\n                    </owl-carousel>\r\n    </div>\r\n</section> -->\r\n<div id=\"section-six\" class=\"container-fluid\">\r\n    <span class=\"bg-text-w\">W</span>\r\n    <div id=\"section-six-inner\">\r\n        <h1>Interested in working together?</h1>\r\n        <h4> Wizroots Technologies helps organisations to accelerate ‘Digital Transformation’ using disruptive technologies in\r\n            Web, Mobile, Analytics and Cloud </h4>\r\n        <button class=\"button_sliding_bg\" data-toggle=\"modal\" data-target=\"#contactModal\" (click)=\"contactModalService.captcha()\">\r\n            <p>LETS DISCUSS OUR PROJECT</p>\r\n        </button>\r\n    </div>\r\n</div>\r\n<div class=\"tech-bar\">\r\n    <div class=\"container-fluid\">\r\n        <p class=\"heading text-center\">Technologies in use</p>\r\n        <div class=\"row\">\r\n            <!-- <div *ngFor=\"let technology of technologyList; let index = index\" [ngClass]=\"(index == 0) ? 'col-md-2 offset-md-1 tech-holder' : 'col-md-2 tech-holder'\">\r\n                <img class=\"tech-img\" data-toggle=\"tooltip\" title=\"{{technology.tooltip}}\" src=\"{{technology.iconLocation}}\" />\r\n            </div> -->\r\n        </div>\r\n        <div class=\"container tech-container\">\r\n            <owl-carousel [options]=\"{\r\n                                                                                autoplay: true, \r\n                                                                                autoplayTimeout: 3000, \r\n                                                                                autoplaySpeed: 2500,\r\n                                                                                margin: 90,\r\n                                                                                loop: true,\r\n                                                                                autoWidth: false,\r\n                                                                                center: true,\r\n                                                                                lazyLoad: true,\r\n                                                                                 autoplayHoverPause: true,\r\n                                                                                 responsive: { '0': { items: 1, margin: 390}, \r\n                                                                                 '768': { items: 3 }, \r\n                                                                                 '1024': { items: 5} }\r\n                                                                            }\" [items]=\"technologies\" [carouselClasses]=\"\">\r\n                <div class=\"item tech-item\" *ngFor=\"let technology of technologies;let i = index\">\r\n                    <img class=\"tech-img\" src=\"{{technology.image}}\"\r\n                    />\r\n                </div>\r\n            </owl-carousel>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- navText:[&#x27;Next&#x27;,&#x27;Prev&#x27;] -->\r\n\r\n<!-- Modal contact form -->\r\n<div class=\"modal animated zoomIn\" id=\"contactModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Contact Us</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\" #closeMailerModal>&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form (submit)=\"contactModalService.sendEmail(contactModalService.model)\" #myForm=\"ngForm\" (keyup)=\"onKey($event)\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">Name</label>\r\n                        <input class=\"form-control\" type=\"text\" required name=\"name\" placeholder=\"Your Name\" required pattern=\"[a-zA-Z]+\" [(ngModel)]=\"contactModalService.model.name\"\r\n                            #name=\"ngModel\">\r\n                        <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\r\n                            <div [hidden]=\"!name.hasError('required')\">Name is required</div>\r\n                            <div [hidden]=\"!name.hasError('pattern')\">Only alphabetsallowed</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"email\">Email</label>\r\n                        <input class=\"form-control\" type=\"text\" required name=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" placeholder=\"Your Email\"\r\n                            [(ngModel)]=\"contactModalService.model.email\" #email=\"ngModel\">\r\n                        <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">\r\n                            <div [hidden]=\"!email.hasError('required')\">Email is required</div>\r\n                            <div [hidden]=\"!email.hasError('pattern')\">Email format should be\r\n                                <small>\r\n                                    <b>joe@abc.com</b>\r\n                                </small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"message\">Message</label>\r\n                        <textarea class=\"form-control\" rows=\"3\" name=\"message\" [(ngModel)]=\"contactModalService.model.message\" #message=\"ngModel\"></textarea>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div id=\"captcha\">\r\n                            <label>Recaptcha:</label> &nbsp; &nbsp; &nbsp; &nbsp;\r\n                            <span id=\"captchaaX\"></span> &nbsp; + &nbsp;\r\n                            <span id=\"captchaaY\"></span> =\r\n                            <input name=\"captchaAnswer\" required type=\"text\" class=\"form-control\" #captchaAnswer (keyup)=\"contactModalService.captchaCalcFunc(captchaAnswer.value)\"> &nbsp; &nbsp;\r\n                        </div>\r\n                    </div>\r\n                    <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"contactModalService.formValid()\">Send Email</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- end modal contact form -->"

/***/ }),

/***/ "./src/app/Pages/web-applications/web-applications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebApplicationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_nav_bar_color_service__ = __webpack_require__("./src/app/Services/nav-bar-color.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_contact_modal_service__ = __webpack_require__("./src/app/Services/contact-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_web_application_category__ = __webpack_require__("./src/app/Services/web-application-category.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__web__ = __webpack_require__("./src/app/Pages/web-applications/web.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WebApplicationsComponent = (function () {
    function WebApplicationsComponent(navBarColorService, contactModalService) {
        this.navBarColorService = navBarColorService;
        this.contactModalService = contactModalService;
        this.deviceHeight = (window.screen.height) - 130;
    }
    WebApplicationsComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.webList = __WEBPACK_IMPORTED_MODULE_3__Services_web_application_category__["a" /* webList */];
        this.technologies = __WEBPACK_IMPORTED_MODULE_4__web__["a" /* technology */];
        $(document).ready(function ($) {
            console.log("hai");
            // $('.owl-carousel').owlCarousel({
            //   navigation : true
            // })(jQuery);
        });
    };
    //added this code to check form validity (should be added in all components where contact modal is there)
    WebApplicationsComponent.prototype.onKey = function (event) {
        console.log("checker Called");
        if (this.myForm.valid) {
            this.contactModalService.formValidity = true;
        }
        else {
            this.contactModalService.formValidity = false;
        }
    };
    WebApplicationsComponent.prototype.ngAfterViewInit = function () {
    };
    /* Changing navbar color on respective scrolling positions */
    WebApplicationsComponent.prototype.doSomething = function (event) {
        console.log(window.pageYOffset);
        if (window.pageYOffset > 100) {
            this.navBarColorService.navBarBackgroundColor.next("white");
            this.navBarColorService.logoColor.next("./assets/images/logo_black.png");
            this.navBarColorService.hamBurger.next("black");
            this.navBarColorService.currentPageName.next("career");
            this.navBarColorService.tFlagValue.next(false);
            console.log("done! navbar color changed");
        }
        else {
            this.navBarColorService.navBarBackgroundColor.next("transparent");
            this.navBarColorService.logoColor.next("./assets/images/logo_white.png");
            this.navBarColorService.hamBurger.next("white");
            this.navBarColorService.currentPageName.next("career");
            this.navBarColorService.tFlagValue.next(true);
        }
        if (window.pageYOffset > 600 && window.pageYOffset < 630) {
            var animateValue = function (id, start, end, duration) {
                var range = end - start;
                var current = start;
                // var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function () {
                    current += 1;
                    obj.innerHTML = current + "+";
                    if (current == end) {
                        clearInterval(timer);
                    }
                }, stepTime);
            };
            animateValue("value1", 0, 200, 2000);
            animateValue("value2", 0, 50, 2000);
            animateValue("value3", 0, 15, 2000);
            animateValue("value4", 0, 3, 2000);
            animateValue("value5", 0, 7, 2000);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* NgForm */])
    ], WebApplicationsComponent.prototype, "myForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WebApplicationsComponent.prototype, "doSomething", null);
    WebApplicationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-web-applications',
            template: __webpack_require__("./src/app/Pages/web-applications/web-applications.component.html"),
            styles: [__webpack_require__("./src/app/Pages/web-applications/web-applications.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_nav_bar_color_service__["a" /* NavBarColorService */], __WEBPACK_IMPORTED_MODULE_2__Services_contact_modal_service__["a" /* ContactModalService */]])
    ], WebApplicationsComponent);
    return WebApplicationsComponent;
}());



/***/ }),

/***/ "./src/app/Pages/web-applications/web.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return technology; });
var technology = [
    {
        image: "./assets/images/technology/js.png"
    },
    {
        image: "./assets/images/technology/py.png"
    },
    {
        image: "./assets/images/technology/angular.png"
    },
    {
        image: "./assets/images/technology/njs.png"
    },
    {
        image: "./assets/images/technology/mdb.png"
    },
    {
        image: "./assets/images/technology/express.png"
    },
    {
        image: "./assets/images/technology/react.png"
    },
    {
        image: "./assets/images/technology/laravel.png"
    },
    {
        image: "./assets/images/technology/postgresql.png"
    },
    {
        image: "./assets/images/technology/ci.png"
    },
    {
        image: "./assets/images/technology/cdb.png"
    },
    {
        image: "./assets/images/technology/flask.png"
    },
    {
        image: "./assets/images/technology/magento.png"
    },
    {
        image: "./assets/images/technology/wp.png"
    },
    {
        image: "./assets/images/technology/handlebars-js.png"
    },
    {
        image: "./assets/images/technology/jhipster.png"
    },
    {
        image: "./assets/images/technology/ionic.png"
    },
    {
        image: "./assets/images/technology/spring.png"
    }
];


/***/ }),

/***/ "./src/app/Services/add.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddService = (function () {
    function AddService() {
        this.cars = ['ferrari', 'aston martin', 'lamborghini'];
    }
    AddService.prototype.method = function () {
        return 'Hello! I\'m here';
    };
    AddService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AddService);
    return AddService;
}());



/***/ }),

/***/ "./src/app/Services/apply-form-post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyFormPostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApplyFormPostService = (function () {
    function ApplyFormPostService(_http) {
        this._http = _http;
        this.connectionUrl = './assets/php/insert.php';
        this.http = _http;
    }
    ApplyFormPostService.prototype.insertData = function () {
        return this.http.get(this.connectionUrl)
            .map(function (data) {
            data.json();
            console.log("I CAN SEE DATA HERE in applyform: ", data.json());
            return data.json();
        });
    };
    ApplyFormPostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ApplyFormPostService);
    return ApplyFormPostService;
}());



/***/ }),

/***/ "./src/app/Services/contact-modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactModalService; });
/* unused harmony export User */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enquiry_mail_send_service__ = __webpack_require__("./src/app/Services/enquiry-mail-send.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactModalService = (function () {
    function ContactModalService(EnquiryMailSendService) {
        this.EnquiryMailSendService = EnquiryMailSendService;
        this.accessApply = false;
        // @ViewChild('myForm') myForm: NgForm; //for reseting form
        this.formValidity = false;
        this.model = new User('', '', '', '');
    }
    ContactModalService.prototype.sendEmail = function (message) {
        console.log(message);
        this.EnquiryMailSendService.sendEmail(message).subscribe(function (res) {
            console.log('AppComponent Success', res);
            // this.closeMailerModal.nativeElement.click();
            // this.myForm.reset();
        }, function (error) {
            console.log('AppComponent Error', error);
            // this.closeMailerModal.nativeElement.click();
        });
    };
    ContactModalService.prototype.ngOnInit = function () {
    };
    /* Calculating captcha value */
    ContactModalService.prototype.captcha = function () {
        this.x = Math.floor((Math.random() * 9) + 1);
        document.getElementById("captchaaX").innerHTML = this.x;
        this.y = Math.floor((Math.random() * 9) + 1);
        document.getElementById("captchaaY").innerHTML = this.y;
        this.captchaCalc = this.x + this.y;
    };
    /* Comparing captcha value to user entered value */
    ContactModalService.prototype.captchaCalcFunc = function (value) {
        console.log("Entered value:", value);
        console.log("Calculated value:", this.captchaCalc);
        this.userValue = value;
        if (value == this.captchaCalc) {
            this.accessApply = true;
        }
        else {
            this.accessApply = false;
        }
    };
    ContactModalService.prototype.onKey = function (event) {
        console.log("checker Called");
        if (this.myForm.valid) {
            this.formValidity = true;
        }
        else {
            this.formValidity = false;
        }
    };
    ContactModalService.prototype.formValid = function () {
        if (this.userValue == this.captchaCalc && this.formValidity) {
            return false;
        }
        else {
            return true;
        }
    };
    ContactModalService.prototype.ngOnChanges = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeMailerModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ContactModalService.prototype, "closeMailerModal", void 0);
    ContactModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__enquiry_mail_send_service__["a" /* EnquiryMailSendService */]])
    ], ContactModalService);
    return ContactModalService;
}());

var User = (function () {
    function User(name, email, message, captcha) {
        this.name = name;
        this.email = email;
        this.message = message;
        this.captcha = captcha;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/Services/enquiry-mail-send.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquiryMailSendService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EnquiryMailSendService = (function () {
    function EnquiryMailSendService(http) {
        this.http = http;
        this.emailUrl = './assets/php/email.php';
    }
    EnquiryMailSendService.prototype.sendEmail = function (message) {
        return this.http.post(this.emailUrl, message)
            .map(function (response) {
            console.log('Sending email was successfull', response);
            return response;
        })
            .catch(function (error) {
            console.log('Sending email got error', error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
        });
    };
    EnquiryMailSendService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], EnquiryMailSendService);
    return EnquiryMailSendService;
}());



/***/ }),

/***/ "./src/app/Services/gallery-images.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return galleryImages; });
var galleryImages = [
    {
        url: "assets/images/gallery/1.jpg",
        alt: "Adobe View"
    }, {
        url: "assets/images/gallery/2.jpg",
        alt: "First View"
    }, {
        url: "assets/images/gallery/3.jpg",
        alt: "Fitcarte"
    }, {
        url: "assets/images/gallery/4.jpg",
        alt: "Rangde"
    }
];


/***/ }),

/***/ "./src/app/Services/menu-list.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return menuList; });
var menuList = [
    {
        url: "",
        category: 'Customized Solutions',
        content: 'The one point stop to address all your customized software solutions from cloud ,wearables, mobile and web applications',
        image: "/images/services1.png",
        subCategory: [
            {
                url: "/ui-ux",
                name: "UI & UX"
            }, {
                url: "",
                name: "Startup"
            }, {
                url: "/web-applications",
                name: "Web Applications"
            }, {
                url: "/mobile-development",
                name: "Mobile Applications",
                nameForFunction: "navBackground('mobile-development')"
            }, {
                url: "",
                name: "Product Development"
            }
        ]
    }, {
        url: "",
        category: 'Enterprise Solutions',
        content: 'We develop right solutions for enterprise to prepare them for next generation of digital transformation.',
        image: "/images/services2.png",
        subCategory: [
            {
                url: "",
                name: "E-commerce"
            }, {
                url: "",
                name: "AI & Analytics"
            }, {
                url: "",
                name: "Internet Of Things"
            }, {
                url: "/ERP",
                name: "Enterprise Resource Planning - (ERP)"
            }
        ]
    }, {
        url: "",
        category: 'Products',
        content: 'Our innovative and adaptive digital learning solutions for audience ranging from K-12 to enterprises.',
        image: "/images/services3.png",
        subCategory: [
            {
                external: true,
                url: "https://elpfa.co",
                name: "ELPFA"
            }, {
                external: true,
                url: "https://learnroots.com",
                name: "Learnroots"
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/Services/nav-bar-color.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarColorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarColorService = (function () {
    function NavBarColorService() {
        this.navBarBackgroundColor = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("transparent");
        this.logoColor = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("./assets/images/logo_white.png");
        this.hamBurger = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("white");
        this.currentPageName = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("home");
        this.tFlagValue = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
    }
    NavBarColorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NavBarColorService);
    return NavBarColorService;
}());



/***/ }),

/***/ "./src/app/Services/web-application-category.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return webList; });
var webList = [
    {
        heading: "E-commerce Web Application Development",
        description: "Developing and maintaining a reliable e-commerce platform is vital for any website. Web app development primarily involves a feature-rich e-commerce solution."
    }, {
        heading: "Enterprise Level Web Applications",
        description: "Enterprise level web applications are becoming increasingly popular as they help improve productivity besides providing great user experience."
    }, {
        heading: "Custom Web Application Development",
        description: "Custom Web Application Development services are built to offer excellent usability, scalability and compability in term of devices."
    }, {
        heading: "Social Media Integration of Web Apps",
        description: "Integrating platforms Twitter, Facebook, LinkedIn into the website help boost SEO, improve business footprint and build your following across social platforms."
    }, {
        heading: "Web Application with clear Navigation",
        description: "When developing navigation strategy for web applications, one should consider a call to action. This helps us to make your goals clear and obvious."
    }, {
        heading: "Agile Development Processes for Web Apps",
        description: "When build powerful and scalable web apps that are custom made using agile development processes leveraging the latest web technologies."
    }, {
        heading: "Responsive Website Application Design",
        description: "Web Apps allows an easy responsive design with flexible layouts, together with flexible content for social media, real estate, and e-commerce websites."
    }, {
        heading: "Secure Web Application Development",
        description: "Web Applications must be designed with security in mind. Secure coding practices are certainly a logical first step, steps must be taken to improve web application security."
    }, {
        heading: "Third Party Integration of Web Apps",
        description: "Third party API integration of software application to run business operations include Quickbooks, Paypal, Google Maps, besides other online applications."
    }
];


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<section *ngIf=\"router.url !== '/' && router.url !== '/home'\"><app-footer></app-footer></section>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        // router.events.subscribe((url: any) => console.log(url));
        // console.log(router.url);  // to print only path eg:"/login"
        // if (router.url == '/'){
        //   console.log("hide")
        // }
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyHammerConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Services_apply_form_post_service__ = __webpack_require__("./src/app/Services/apply-form-post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Services_nav_bar_color_service__ = __webpack_require__("./src/app/Services/nav-bar-color.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_module__ = __webpack_require__("./src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_career_career_component__ = __webpack_require__("./src/app/pages/career/career.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Services_add_service__ = __webpack_require__("./src/app/Services/add.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_mobile_applications_mobile_applications_component__ = __webpack_require__("./src/app/pages/mobile-applications/mobile-applications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_ui_ux_ui_ux_component__ = __webpack_require__("./src/app/pages/ui-ux/ui-ux.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_about_about_component__ = __webpack_require__("./src/app/pages/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Directives_mouse_scroll_directive__ = __webpack_require__("./src/app/Directives/mouse-scroll.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Services_enquiry_mail_send_service__ = __webpack_require__("./src/app/Services/enquiry-mail-send.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Services_contact_modal_service__ = __webpack_require__("./src/app/Services/contact-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Pages_web_applications_web_applications_component__ = __webpack_require__("./src/app/Pages/web-applications/web-applications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Pages_ERP_ERP_component__ = __webpack_require__("./src/app/Pages/ERP/ERP.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Pages_E_commerce_E_commerce_component__ = __webpack_require__("./src/app/Pages/E-commerce/E-commerce.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Pages_AI_Analytics_AI_Analytics_component__ = __webpack_require__("./src/app/Pages/AI-Analytics/AI-Analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Pages_IOT_IOT_component__ = __webpack_require__("./src/app/Pages/IOT/IOT.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Pages_contact_us_contact_us_component__ = __webpack_require__("./src/app/Pages/contact-us/contact-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_owl_carousel__ = __webpack_require__("./node_modules/ng2-owl-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_owl_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_ng2_owl_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng2_animate_on_scroll__ = __webpack_require__("./node_modules/ng2-animate-on-scroll/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng2_animate_on_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_ng2_animate_on_scroll__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var MyHammerConfig = (function (_super) {
    __extends(MyHammerConfig, _super);
    function MyHammerConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyHammerConfig.prototype.buildHammer = function (element) {
        var mc = new Hammer(element, {
            touchAction: "pan-x"
        });
        return mc;
    };
    return MyHammerConfig;
}(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* HammerGestureConfig */]));

var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'career', component: __WEBPACK_IMPORTED_MODULE_11__pages_career_career_component__["a" /* CareerComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_16__pages_about_about_component__["a" /* AboutComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_12__pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'mobile-development', component: __WEBPACK_IMPORTED_MODULE_14__pages_mobile_applications_mobile_applications_component__["a" /* MobileApplicationsComponent */] },
    { path: 'ui-ux', component: __WEBPACK_IMPORTED_MODULE_15__pages_ui_ux_ui_ux_component__["a" /* UiUxComponent */] },
    { path: 'contact-us', component: __WEBPACK_IMPORTED_MODULE_25__Pages_contact_us_contact_us_component__["a" /* ContactUsComponent */] },
    { path: 'web-applications', component: __WEBPACK_IMPORTED_MODULE_20__Pages_web_applications_web_applications_component__["a" /* WebApplicationsComponent */] },
    { path: 'ERP', component: __WEBPACK_IMPORTED_MODULE_21__Pages_ERP_ERP_component__["a" /* ERPComponent */] },
    { path: 'E-commerce', component: __WEBPACK_IMPORTED_MODULE_22__Pages_E_commerce_E_commerce_component__["a" /* EcommerceComponent */] },
    { path: 'ai-analytics', component: __WEBPACK_IMPORTED_MODULE_23__Pages_AI_Analytics_AI_Analytics_component__["a" /* AIAnalyticsComponent */] },
    { path: 'IOT', component: __WEBPACK_IMPORTED_MODULE_24__Pages_IOT_IOT_component__["a" /* IOTComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_career_career_component__["a" /* CareerComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_mobile_applications_mobile_applications_component__["a" /* MobileApplicationsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_ui_ux_ui_ux_component__["a" /* UiUxComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_17__Directives_mouse_scroll_directive__["a" /* MouseWheelDirective */],
                __WEBPACK_IMPORTED_MODULE_20__Pages_web_applications_web_applications_component__["a" /* WebApplicationsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__Pages_ERP_ERP_component__["a" /* ERPComponent */],
                __WEBPACK_IMPORTED_MODULE_25__Pages_contact_us_contact_us_component__["a" /* ContactUsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__Pages_E_commerce_E_commerce_component__["a" /* EcommerceComponent */],
                __WEBPACK_IMPORTED_MODULE_23__Pages_AI_Analytics_AI_Analytics_component__["a" /* AIAnalyticsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__Pages_IOT_IOT_component__["a" /* IOTComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_26_ng2_owl_carousel__["OwlModule"],
                __WEBPACK_IMPORTED_MODULE_27_ng2_animate_on_scroll__["AnimateOnScrollModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: false,
                    useHash: true } // <-- debugging purposes only
                )
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__Services_add_service__["a" /* AddService */], __WEBPACK_IMPORTED_MODULE_7__Services_apply_form_post_service__["a" /* ApplyFormPostService */], __WEBPACK_IMPORTED_MODULE_18__Services_enquiry_mail_send_service__["a" /* EnquiryMailSendService */], __WEBPACK_IMPORTED_MODULE_8__Services_nav_bar_color_service__["a" /* NavBarColorService */], __WEBPACK_IMPORTED_MODULE_19__Services_contact_modal_service__["a" /* ContactModalService */], {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* HAMMER_GESTURE_CONFIG */],
                    useClass: MyHammerConfig
                }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    background: #111111;\r\n    color: #fff;\r\n    padding: 50px 0px;\r\n    margin-top: 0px;\r\n}\r\n\r\n.footer .heading {\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    letter-spacing: 1.1px;\r\n}\r\n\r\n.footer ul {\r\n    padding: 0px;\r\n    line-height: 35px;\r\n    /*font-family: 'Open Sans', sans-serif;*/\r\n    list-style: none;\r\n    font-size: 15px;\r\n}\r\n\r\n.footer ul.last-div li {\r\n    list-style: none;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: 500;\r\n    color: #ccc;\r\n    text-decoration: none;\r\n}\r\n\r\n.footer ul.last-div li:nth-of-type(3){\r\n    line-height: 20px;\r\n}\r\n\r\n.last-div {\r\n    text-align: center;\r\n}\r\n\r\n.footer a {\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: 500;\r\n    color: #ccc;\r\n    text-decoration: none;\r\n    opacity: 0.5;\r\n    -webkit-transition: 0.5s ease all;\r\n    transition: 0.5s ease all;\r\n}\r\n\r\n.footer a:hover {\r\n    opacity: 1;\r\n    color: #06d876;\r\n    -webkit-transition: 0.5s ease all;\r\n    transition: 0.5s ease all;\r\n}\r\n\r\n#talk-to-us-heading {\r\n    text-align: left;\r\n}\r\n\r\n.talk-to-us {\r\n    text-align: left;\r\n    color: #adadad;\r\n}\r\n\r\n/*------- icons settings --------------*/\r\n\r\n.fa-phone-square {\r\n    font-size: 20px;\r\n}\r\n\r\n.fa-envelope {\r\n    font-size: 20px;\r\n}\r\n\r\n.social-links span {\r\n    padding: 0px 5px;\r\n}\r\n\r\n.copy-rights {\r\n    background: #1A1A1A;\r\n    padding: 15px;\r\n    color: #585858;\r\n    text-align: center;\r\n    display: block !important;\r\n}\r\n\r\nul.main-menu {\r\n  margin-top: 50px;\r\n  padding: 0;\r\n}\r\n\r\nul.social-menu {\r\n    margin-top: 24px !important;\r\n    padding: 0;\r\n    float: right !important;\r\n}\r\n\r\nul.social-menu li {\r\n  list-style-type: none;\r\n  display: inline-block;\r\n  padding-right: 20px;\r\n}\r\n\r\nul.social-menu li a {\r\n  font-family: 'Nunito', sans-serif;\r\n  font-weight: 700;\r\n  font-size: 15px;\r\n  display: inline-block;\r\n  margin: 0px 0px;\r\n  color: #fff;\r\n  letter-spacing: 1.5px;\r\n  text-decoration: none;\r\n  line-height: 15px;\r\n  -webkit-font-smoothing: antialiased !important;\r\n  -moz-osx-font-smoothing: grayscale !important;\r\n}\r\n\r\nul.social-menu .social-icons {\r\n  font-size: 24px;\r\n  cursor: pointer;\r\n  -webkit-transition: all ease 0.2s;\r\n  transition: all ease 0.2s;\r\n}\r\n\r\nul.social-menu #facebook:hover {\r\n  color: #3b5998;\r\n  -webkit-transform: scale(1.3,1.3);\r\n          transform: scale(1.3,1.3);\r\n}\r\n\r\nul.social-menu #twitter:hover {\r\n  color: #0084b4;\r\n  -webkit-transform: scale(1.3,1.3);\r\n          transform: scale(1.3,1.3);\r\n}\r\n\r\nul.social-menu #linkedin:hover {\r\n  color: #0077B5;\r\n  -webkit-transform: scale(1.3,1.3);\r\n          transform: scale(1.3,1.3);\r\n}\r\n\r\nul.social-menu #instagram:hover {\r\n  color: #eb443a;\r\n  -webkit-transform: scale(1.3,1.3);\r\n          transform: scale(1.3,1.3);\r\n}\r\n\r\nul.main-menu li {\r\n  list-style-type: none;\r\n  display: inline-block;\r\n  padding-right: 40px;\r\n}\r\n\r\nul.main-menu li a {\r\n  font-family: 'Nunito', sans-serif;\r\n  font-weight: 700;\r\n  font-size: 20px;\r\n  display: inline-block;\r\n  margin: 0px 0px;\r\n  color: #fff;\r\n  letter-spacing: 1px;\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  -webkit-transition: 0.2s ease-in;\r\n  transition: 0.2s ease-in;\r\n  position: relative;\r\n}\r\n\r\nul.main-menu li a:hover {\r\n  color: #06d876;\r\n}\r\n\r\nul.main-menu li:not(:last-of-type) a:after {\r\n  content: '';\r\n  height: 10px;\r\n  width: 10px;\r\n  border-radius: 50%;\r\n  background: #06d876;\r\n  position: absolute;\r\n  right: -25px;\r\n  top: calc(50% - 5px);\r\n}\r\n\r\n.bottom-row {\r\n    font-size: 1em;\r\n    padding-right: 0px;\r\n    padding-left: 0px;\r\n  }\r\n\r\n.bottom-row .main-menu {\r\n    margin-top: 20px;\r\n  }\r\n\r\n.bottom-row .main-menu li {\r\n    padding-right: 30px;\r\n  }\r\n\r\n.bottom-row .main-menu li a {\r\n    font-size: 15px;\r\n  }\r\n\r\n.bottom-row .main-menu li:nth-last-child(1){\r\n    padding-right: 0px;\r\n  }\r\n\r\n.social-menu-outer-row {\r\n    padding-right: 0px !important;\r\n  }\r\n\r\n.social-menu {\r\n    margin-top: 10px !important;\r\n    margin-bottom: 100px;\r\n    float: left !important;\r\n  }\r\n\r\n.social-menu li{\r\n    padding-right: 10px !important;\r\n  }\r\n\r\n.social-menu li:nth-last-child(1){\r\n    padding-right: 0px !important;\r\n  }"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-3\" *ngFor=\"let footer of footerList\">\r\n          <h2 class=\"text-uppercase heading\">{{footer.category}}</h2>\r\n          <ul>\r\n              <li *ngFor=\"let subLinks of footer.subCategory\" class=\"animated fadeInDown\">\r\n                <a *ngIf=\"!subLinks.external\" routerLink=\"{{subLinks.url}}\" (click)=\"iconAnimate()\">{{subLinks.name}}</a>\r\n                <a *ngIf=\"subLinks.external\" href=\"{{subLinks.url}}\" target=\"_blank\" (click)=\"iconAnimate()\">{{subLinks.name}}</a>\r\n              </li>\r\n          </ul>\r\n      </div>\r\n      \r\n      <div class=\"col-sm-3\">\r\n          <h2 class=\"text-uppercase heading\" id=\"talk-to-us-heading\">Talk to Us</h2>\r\n          <ul class=\"talk-to-us\">\r\n             <li><span class=\"fa fa-phone-square\"></span> &nbsp; +91 9008055299</li>\r\n             <li><span class=\"fa fa-envelope\"></span> &nbsp; sales@wizroots.com</li>\r\n             <li>Tower C, Global Technology Park,\r\n              Marathahalli Outer Ring Road, \r\n              Bellandur \r\n              Bengaluru - 560103,\r\n              Karnataka,\r\n              India\r\n              </li>\r\n          </ul>\r\n      </div>\r\n    </div><!-- end row -->\r\n    <div class=\"row container bottom-row\">\r\n          <div class=\"col-sm-6 main-menu-outer-row\">\r\n            <ul class=\"main-menu\">\r\n                <li class=\"animated fadeInDown\"><a routerLink=\"/about\" (click)=\"navBackground('about')\">about</a></li>\r\n                <li class=\"animated fadeInDown\"><a routerLink=\"/career\" (click)=\"navBackground('career')\">career</a></li>\r\n                <li class=\"animated fadeInDown\"><a routerLink=\"/contact-us\" (click)=\"navBackground('career')\">contact</a></li>\r\n            </ul>\r\n          </div>\r\n            \r\n          <div class=\"col-sm-6 social-menu-outer-row\">\r\n            <ul class=\"social-menu animated fadeInDown\">\r\n                <li><a>Get in touch with us</a></li>\r\n                <li><a href=\"https://www.facebook.com/wizroots\" target=\"_blank\"><span id=\"facebook\" class=\"fa fa-facebook-square social-icons\"></span></a></li>\r\n                <li><a href=\"https://twitter.com/wizroots\" target=\"_blank\"><span id=\"twitter\" class=\"fa fa-twitter-square social-icons\"></span></a></li>\r\n                <li><a href=\"https://www.linkedin.com/company/wizroots/\" target=\"_blank\"><span id=\"linkedin\" class=\"fa fa-linkedin-square social-icons\"></span></a></li>\r\n                <li><a href=\"https://www.instagram.com/wizroots_tech/\" target=\"_blank\"><span id=\"instagram\" class=\"fa fa-instagram social-icons\"></span></a></li>\r\n            </ul>\r\n          </div>\r\n    </div>\r\n  </div><!-- end container -->\r\n</div><!-- end footer -->\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row copy-rights text-center\">\r\n    <p> &copy; Copyrights 2017 Wizroots Technologies </p>    \r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__("./src/app/pages/home/home.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent() {
        this.backgroundColor = 'transparent';
        this.name = 'close';
        this.navMenu = false;
        this.currentPage = ' ';
        this.logo = "./assets/images/logo_white.png";
        this.hamBurgerColor = 'white';
        this.tFlag = true;
        this.shadowStatus = ' ';
        this.displayMenu = false;
        this.state = 'hide';
        this.footerList = __WEBPACK_IMPORTED_MODULE_1__pages_home_home__["b" /* services */];
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.animateMe = function () {
        this.state = (this.state === 'hide' ? 'show' : 'hide');
    };
    FooterComponent.prototype.iconAnimate = function () {
        if (this.name == 'close') {
            this.name = 'open';
            this.navMenu = true;
            this.backgroundColor = "black";
            this.logo = './assets/images/logo_white.png';
            this.hamBurgerColor = 'white';
            document.querySelector("body").style.overflow = "hidden";
        }
        else {
            this.name = 'close';
            this.navMenu = false;
            document.querySelector("body").style.overflow = "auto";
            if (this.tFlag == true) {
                this.backgroundColor = "transparent";
                this.logo = './assets/images/logo_white.png';
                this.hamBurgerColor = 'white';
            }
            else if (this.tFlag == false && this.currentPage == "home") {
                this.backgroundColor = "#19191E";
                this.logo = './assets/images/logo_white.png';
                this.hamBurgerColor = 'white';
            }
            else {
                this.backgroundColor = "white";
                this.logo = './assets/images/logo_black.png';
                this.hamBurgerColor = 'black';
            }
        }
    };
    FooterComponent.prototype.navBackground = function (argument) {
        document.querySelector("body").style.overflow = "auto";
        if (argument == 'home') {
            this.backgroundColor = "transparent";
            this.name = 'close';
            this.navMenu = false;
            this.currentPage = "home";
            this.logo = './assets/images/logo_white.png';
        }
        else {
            this.backgroundColor = "white";
            this.shadowStatus = "navbar-shadow";
            this.name = 'close';
            this.navMenu = false;
            this.currentPage = "default";
            this.logo = './assets/images/logo_black.png';
            this.hamBurgerColor = 'black';
        }
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n#wholeNav {\r\n  -webkit-font-smoothing: antialiased !important;\r\n  -moz-osx-font-smoothing: grayscale !important;\r\n}\r\n\r\n/*------------Logo and Nav-icon------------*/\r\n\r\n.navbar {\r\n  border: none;\r\n  padding-top: 15px !important;\r\n  padding-bottom: 15px !important;\r\n  -webkit-transition: background-color 500ms ease;\r\n  transition: background-color 500ms ease; \t \r\n  display: inline;\r\n}\r\n\r\n.navbar-shadow{\r\n  -webkit-box-shadow: -1px 1px 9px 3px #00000012;\r\n          box-shadow: -1px 1px 9px 3px #00000012;\r\n}\r\n\r\n.navbar img {\r\n\theight: 50px;\r\n  max-height: 50px;\r\n}\r\n\r\n.navbar #nav-icon {\r\n\tfloat: right;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Icon Animations */\r\n\r\n#nav-icon{\r\n  width: 40px;\r\n  height: 45px;\r\n  -webkit-transform: rotate(0deg);\r\n  transform: rotate(0deg);\r\n  -webkit-transition: .5s ease-in-out;\r\n  transition: .5s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n.navbar #nav-icon span{\r\n  display: block;\r\n  position: absolute;\r\n  height: 3px;\r\n  width: 100%;\r\n  background-color: rgb(255, 255, 255);\r\n  border-radius: 9px;\r\n  opacity: 1;\r\n  left: 0;\r\n  -webkit-transform: rotate(0deg);\r\n  transform: rotate(0deg);\r\n  -webkit-transition: .25s ease-in-out;\r\n  transition: .25s ease-in-out;\r\n  z-index: 200;\r\n}\r\n\r\n#nav-icon span:nth-child(1) {\r\n  top: 5px;\r\n}\r\n\r\n#nav-icon span:nth-child(2) {\r\n  top: 13px;\r\n}\r\n\r\n#nav-icon span:nth-child(3) {\r\n  top: 21px;\r\n}\r\n\r\n#nav-icon.open span:nth-child(1) {\r\n  top: 18px;\r\n  -webkit-transform: rotate(135deg);\r\n  transform: rotate(135deg);\r\n}\r\n\r\n.close {\r\n  opacity: 1 !important;\r\n}\r\n\r\n#nav-icon.open span:nth-child(2) {\r\n  opacity: 0;\r\n  left: -60px;\r\n}\r\n\r\n#nav-icon.open span:nth-child(3) {\r\n  top: 18px;\r\n  -webkit-transform: rotate(-135deg);\r\n  transform: rotate(-135deg);\r\n}\r\n\r\n#nav-icon.close span:nth-child(1){\r\n  -webkit-transition: 100ms ease-in-out;\r\n  transition: 100ms ease-in-out;\r\n}\r\n\r\n#nav-icon.close:hover span:nth-child(1){\r\n  top: 2px;\r\n  -webkit-transition: 100ms ease-in-out;\r\n  transition: 100ms ease-in-out;\r\n}\r\n\r\n#nav-icon.close span:nth-child(3){\r\n  -webkit-transition: 100ms ease-in-out;\r\n  transition: 100ms ease-in-out;\r\n}\r\n\r\n#nav-icon.close:hover span:nth-child(3){\r\n  top: 24px;\r\n  -webkit-transition: 100ms ease-in-out;\r\n  transition: 100ms ease-in-out;\r\n}\r\n\r\n/*--------------------- navMenu ---------------------*/\r\n\r\n#navMenu {\r\n  position: fixed;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 100;\r\n  height: 100vh;\r\n  width: 100%;\r\n  margin-top: 75px;\r\n  background-color: black;\r\n  background-image: url('menu-back.299d80922efc415f2e62.jpg');\r\n  overflow: scroll;\r\n}\r\n\r\n#navMenu::-webkit-scrollbar { \r\n  display: none;\r\n}\r\n\r\n/*--------------------- Copied CSS (unsafe)-----------------------*/\r\n\r\n.home {\r\n  padding: 0px;\r\n  margin: 0px;\r\n  font-size: 18px;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 700;\r\n  margin-top: 30px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.home .fa-home {\r\n  font-size: 28px;\r\n}\r\n\r\n.second_heading {\r\n  margin-top: 0px !important;\r\n}\r\n\r\n.heading {\r\n  font-family: 'Nunito', sans-serif;\r\n  font-weight: 700;\r\n  font-size: 20px;\r\n  display: inline-block;\r\n  color: #fff;\r\n  letter-spacing: 1px !important;\r\n  -webkit-font-smoothing: antialiased !important;\r\n  -moz-osx-font-smoothing: grayscale !important;\r\n}\r\n\r\n.sub-headings .sub-head-text {\r\n  font-family: 'Nunito', sans-serif;\r\n  font-size: 17px;\r\n  text-transform: uppercase;\r\n  color: #fff;\r\n  font-weight: 700;\r\n  letter-spacing: 1px !important;\r\n}\r\n\r\n.sub-headings ul li {\r\n  list-style-type: none;\r\n}\r\n\r\n.sub-headings ul li a {\r\n  text-transform: capitalize;\r\n  color: #888888;\r\n  text-decoration: none;\r\n  font-size: 16px;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 600;\r\n  -webkit-transition: 0.2s ease-in;\r\n  transition: 0.2s ease-in;\r\n}\r\n\r\n.sub-headings ul li a:hover {\r\n  color: #06d876;\r\n}\r\n\r\n.sub-headings ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  line-height: 40px;\r\n  padding-top: 24px;\r\n}\r\n\r\n.sub-head-text:after {\r\n  content: '';\r\n  height: 4px;\r\n  width: 50px;\r\n  display: block;\r\n  background: #06d876;\r\n  border-radius: 2px;\r\n}\r\n\r\nul.main-menu {\r\n  margin-top: 50px;\r\n  padding: 0;\r\n}\r\n\r\nul.social-menu {\r\n  margin-top: 50px;\r\n  padding: 0;\r\n  float: right;\r\n}\r\n\r\nul.social-menu li {\r\n  list-style-type: none;\r\n  display: inline-block;\r\n  padding-right: 20px;\r\n}\r\n\r\nul.social-menu li a {\r\n  font-family: 'Nunito', sans-serif;\r\n  font-weight: 700;\r\n  font-size: 15px;\r\n  display: inline-block;\r\n  margin: 0px 0px;\r\n  color: #fff;\r\n  letter-spacing: 1.5px;\r\n  text-decoration: none;\r\n  line-height: 15px;\r\n  -webkit-font-smoothing: antialiased !important;\r\n  -moz-osx-font-smoothing: grayscale !important;\r\n}\r\n\r\nul.social-menu .social-icons {\r\n  font-size: 24px;\r\n  cursor: pointer;\r\n  -webkit-transition: all ease 0.2s;\r\n  transition: all ease 0.2s;\r\n}\r\n\r\nul.social-menu #facebook:hover {\r\n  color: #3b5998;\r\n  -webkit-transform: scale(1.3,1.3);\r\n          transform: scale(1.3,1.3);\r\n}\r\n\r\nul.social-menu #twitter:hover {\r\n  color: #0084b4;\r\n  -webkit-transform: scale(1.3,1.3);\r\n          transform: scale(1.3,1.3);\r\n}\r\n\r\nul.social-menu #linkedin:hover {\r\n  color: #0077B5;\r\n  -webkit-transform: scale(1.3,1.3);\r\n          transform: scale(1.3,1.3);\r\n}\r\n\r\nul.social-menu #instagram:hover {\r\n  color: #eb443a;\r\n  -webkit-transform: scale(1.3,1.3);\r\n          transform: scale(1.3,1.3);\r\n}\r\n\r\n.top-space{\r\n  margin-top: 10px;\r\n}\r\n\r\nul.main-menu li {\r\n  list-style-type: none;\r\n  display: inline-block;\r\n  padding-right: 40px;\r\n}\r\n\r\nul.main-menu li a {\r\n  font-family: 'Nunito', sans-serif;\r\n  font-weight: 700;\r\n  font-size: 20px;\r\n  display: inline-block;\r\n  margin: 0px 0px;\r\n  color: #fff;\r\n  letter-spacing: 1px;\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  -webkit-transition: 0.2s ease-in;\r\n  transition: 0.2s ease-in;\r\n  position: relative;\r\n}\r\n\r\nul.main-menu li a:hover {\r\n  color: #06d876;\r\n}\r\n\r\nul.main-menu li:not(:last-of-type) a:after {\r\n  content: '';\r\n  height: 10px;\r\n  width: 10px;\r\n  border-radius: 50%;\r\n  background: #06d876;\r\n  position: absolute;\r\n  right: -25px;\r\n  top: calc(50% - 5px);\r\n}\r\n\r\n/*--------------------------------------------------\r\n\tMedia Queries\r\n----------------------------------------------------*/\r\n\r\n/*-------------------Desktop Screens---------------------------*/\r\n\r\n@media screen and (min-width: 1024px){\r\n  \r\n\t.navbar {\r\n\t\tpadding: 25px 75px 0px 75px;\r\n\t}\r\n\r\n}\r\n\r\n/*----------------------Tablets Portrait or Landscape----------------*/\r\n\r\n@media screen and (min-device-width: 768px) and (max-device-width: 1024px){\r\n  \r\n\t.navbar {\r\n\t\tpadding: 15px 50px 0px 50px;\r\n\t}\r\n}\r\n\r\n/*----------------------Mobile Phones Portrait---------------------------------*/\r\n\r\n@media screen and (max-device-width: 480px) and (orientation: portrait){\r\n  \r\n\t.navbar {\r\n\t\tpadding: 10px 10px 0px 10px;\r\n  }\r\n\r\n  .home {\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .sub-headings {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .sub-headings ul{\r\n    padding-top: 10px;\r\n  }\r\n\r\n  .main-menu-outer-row {\r\n    padding-right: 0px !important;\r\n  }\r\n\r\n  .bottom-row {\r\n    font-size: 1em;\r\n    padding-right: 0px;\r\n    padding-left: 0px;\r\n  }\r\n\r\n  .bottom-row .main-menu {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .bottom-row .main-menu li {\r\n    padding-right: 30px;\r\n  }\r\n\r\n  .bottom-row .main-menu li a {\r\n    font-size: 15px;\r\n  }\r\n\r\n  .bottom-row .main-menu li:nth-last-child(1){\r\n    padding-right: 0px;\r\n  }\r\n\r\n  .social-menu-outer-row {\r\n    padding-right: 0px !important;\r\n  }\r\n\r\n  .social-menu {\r\n    margin-top: 10px !important;\r\n    margin-bottom: 100px;\r\n    float: left !important;\r\n  }\r\n\r\n  .social-menu li{\r\n    padding-right: 10px !important;\r\n  }\r\n\r\n  .social-menu li:nth-last-child(1){\r\n    padding-right: 0px !important;\r\n  }\r\n\r\n\r\n}"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wholeNav\">\r\n  <div class=\"navbar fixed-top {{shadowStatus}}\" [style.background]=\"backgroundColor\" id=\"logo-container\">\r\n            <a routerLink=\"/home\" routerLinkActive=\"active\" (click)=\"navBackground('home')\">\r\n                <img src={{logo}} id=\"logo\"></a>\r\n      <div (click)=\"iconAnimate()\" (click)=\"animateMe()\" id=\"nav-icon\" class={{name}}>\r\n        <span class=\"top-space\" [style.background-color]=\"hamBurgerColor\"></span>\r\n        <span class=\"top-space\" [style.background-color]=\"hamBurgerColor\"></span>\r\n        <span class=\"top-space\" [style.background-color]=\"hamBurgerColor\"></span>\r\n      </div>\r\n    </div>\r\n    <div id=\"navMenu\" *ngIf=\"navMenu\" [@myAwesomeAnimation]>\r\n        <div class=\"container\">\r\n          <div class=\"top-icons\">\r\n              <a class=\"pull-left home home-text animated fadeInDown\"  routerLink=\"/home\" routerLinkActive=\"active\" (click)=\"navBackground('home')\"><span class=\"fa fa-home\"></span> HOME </a>\r\n          </div>\r\n          <div class=\"clearfix \"></div>\r\n            <div class=\"head \">\r\n            <div class=\"row \">\r\n                <div class=\"col-md-4\" *ngFor=\"let services of servicesList\">\r\n                    <div class=\"sub-headings animated fadeInDown\">\r\n                        <span class=\"sub-head-text\">{{services.category}}</span>\r\n                        <ul>\r\n                            <li *ngFor=\"let subLinks of services.subCategory\" class=\"animated fadeInDown\"><a *ngIf=\"!subLinks.external\" routerLink=\"{{subLinks.url}}\" (click)=\"iconAnimate()\">{{subLinks.name}}</a>\r\n                            <a *ngIf=\"subLinks.external\" href=\"{{subLinks.url}}\" target=\"_blank\" (click)=\"iconAnimate()\">{{subLinks.name}}</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row container bottom-row\">\r\n                 <div class=\"col-sm-6 main-menu-outer-row\">\r\n                    <ul class=\"main-menu\">\r\n                        <li class=\"animated fadeInDown\"><a routerLink=\"/about\"(click)=\"navBackground('about')\">about</a></li>\r\n                        <li class=\"animated fadeInDown\"><a routerLink=\"/career\" (click)=\"navBackground('career')\">career</a></li>\r\n                        <li class=\"animated fadeInDown\"><a routerLink=\"/contact-us\" (click)=\"navBackground('career')\">contact</a></li>\r\n                    </ul>\r\n                 </div>\r\n                    \r\n                 <div class=\"col-sm-6 social-menu-outer-row\">\r\n                    <ul class=\"social-menu animated fadeInDown\">\r\n                        <li><a>Get in touch with us</a></li>\r\n                        <li>\r\n                            <a href=\"https://www.facebook.com/wizroots\" target=\"_blank\">\r\n                                <span id=\"facebook\" class=\"fa fa-facebook-square social-icons\"></span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"https://twitter.com/wizroots\" target=\"_blank\">\r\n                                <span id=\"twitter\" class=\"fa fa-twitter-square social-icons\"></span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"https://www.linkedin.com/company/wizroots/\" target=\"_blank\">\r\n                                <span id=\"linkedin\" class=\"fa fa-linkedin-square social-icons\"></span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"https://www.instagram.com/wizroots_tech/\" target=\"_blank\">\r\n                                <span id=\"instagram\" class=\"fa fa-instagram social-icons\"></span>\r\n                            </a>\r\n                        </li>\r\n\r\n                    </ul>\r\n                 </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_menu_list__ = __webpack_require__("./src/app/Services/menu-list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_nav_bar_color_service__ = __webpack_require__("./src/app/Services/nav-bar-color.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(navBarColorService, ref) {
        var _this = this;
        this.navBarColorService = navBarColorService;
        this.ref = ref;
        this.backgroundColor = 'transparent';
        this.name = 'close';
        this.navMenu = false;
        this.currentPage = ' ';
        this.logo = "./assets/images/logo_white.png";
        this.hamBurgerColor = 'white';
        this.tFlag = true;
        this.shadowStatus = ' ';
        this.displayMenu = false;
        this.state = 'hide';
        this.servicesList = __WEBPACK_IMPORTED_MODULE_2__Services_menu_list__["a" /* menuList */];
        this.navBarColorService.navBarBackgroundColor.subscribe(function (navBarBackgroundColor) {
            _this.backgroundColor = navBarBackgroundColor;
            if (_this.backgroundColor == 'white') {
                _this.shadowStatus = "navbar-shadow";
            }
            else {
                _this.shadowStatus = " ";
            }
        });
        this.navBarColorService.logoColor.subscribe(function (logoColor) {
            _this.logo = logoColor;
        });
        this.navBarColorService.hamBurger.subscribe(function (hamBurger) {
            _this.hamBurgerColor = hamBurger;
        });
        this.navBarColorService.currentPageName.subscribe(function (currentPageName) {
            _this.currentPage = currentPageName;
        });
        this.navBarColorService.tFlagValue.subscribe(function (tFlagValue) {
            _this.tFlag = tFlagValue;
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.animateMe = function () {
        this.state = (this.state === 'hide' ? 'show' : 'hide');
    };
    HeaderComponent.prototype.iconAnimate = function () {
        if (this.name == 'close') {
            this.name = 'open';
            this.navMenu = true;
            this.backgroundColor = "black";
            this.logo = './assets/images/logo_white.png';
            this.hamBurgerColor = 'white';
            document.querySelector("body").style.overflow = "hidden";
        }
        else {
            this.name = 'close';
            this.navMenu = false;
            document.querySelector("body").style.overflow = "auto";
            if (this.tFlag == true) {
                this.backgroundColor = "transparent";
                this.logo = './assets/images/logo_white.png';
                this.hamBurgerColor = 'white';
            }
            else if (this.tFlag == false && this.currentPage == "home") {
                this.backgroundColor = "#19191E";
                this.logo = './assets/images/logo_white.png';
                this.hamBurgerColor = 'white';
            }
            else {
                this.backgroundColor = "white";
                this.logo = './assets/images/logo_black.png';
                this.hamBurgerColor = 'black';
            }
        }
    };
    HeaderComponent.prototype.navBackground = function (argument) {
        document.querySelector("body").style.overflow = "auto";
        if (argument == 'home') {
            this.backgroundColor = "transparent";
            this.name = 'close';
            this.navMenu = false;
            this.currentPage = "home";
            this.logo = './assets/images/logo_white.png';
        }
        else {
            this.backgroundColor = "white";
            this.shadowStatus = "navbar-shadow";
            this.name = 'close';
            this.navMenu = false;
            this.currentPage = "default";
            this.logo = './assets/images/logo_black.png';
            this.hamBurgerColor = 'black';
        }
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/components/header/header.component.html"),
            styles: [__webpack_require__("./src/app/components/header/header.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('myAwesomeAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* style */])({ transform: ' translateY(-120%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('500ms cubic-bezier(0.075, 0.82, 0.165, 1)', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* style */])({ transform: ' translateY(0)' }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* style */])({ transform: ' translateY(0)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('900ms cubic-bezier(0.075, 0.82, 0.165, 1)', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* style */])({ transform: ' translateY(-120%)' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__Services_nav_bar_color_service__["a" /* NavBarColorService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/menu-section/menu-section.component.css":
/***/ (function(module, exports) {

module.exports = ".heading {\r\n\ttext-align: center;\r\n\tpadding-top: 15px;\r\n\tpadding-bottom: 15px;\r\n\tfont-family: 'Nunito', sans-serif;\r\n}\r\n\r\n.heading span {\r\n\tcolor: #06d876;\r\n\tpadding: 10px;\r\n}\r\n\r\n@media screen and (min-width: 480px){\r\n  \r\n\t.container-fluid-custom-100px {\r\n\t\tpadding: 0px 100px 0px 100px;\r\n\t}\r\n \r\n\t.fa-long-arrow-right {\r\n\t\tfont-size: 14px;\r\n\t}\r\n\t\r\n\t#section-four {\r\n\t\twidth: 100%;\r\n\t\tposition: relative;\r\n\t\tbackground-color: rgb(255, 255, 255);\r\n\t}\r\n\t\r\n\t#afterScroll-mainHeading {\r\n\t\tpadding-top: 100px;\r\n\t\tcolor: black;\r\n\t\tmargin: 0 auto;\r\n\t\ttext-align: center;\r\n\t}\r\n\t\r\n\t#afterScroll-mainHeading h1{\r\n\t\tfont-size: 2em;\r\n\t\tfont-family: 'Nunito', sans-serif;\r\n\t\tcolor: #3f4c56;\r\n\t\tfont-weight: 600;\r\n\t}\r\n\t\r\n\t#afterScroll-mainHeading p{\r\n\t\tfont-size: 1.3em;\r\n\t\tfont-family: 'Nunito', sans-serif;\r\n\t\tmargin-top: 0px;\r\n\t\tmargin-bottom: 75px; \r\n\t\tcolor: #899095;\r\n\r\n\t}\r\n\t\r\n\t#afterScroll-mainContent {\r\n\t\tpadding-bottom: 75px;\r\n\t\tcolor: rgb(224, 218, 218);\r\n\t}\r\n\t\r\n\t#afterScroll-mainContent h1 {\r\n\t\tfont-family: 'Nunito', sans-serif;\r\n\t\tfont-size: 24px;\r\n\t\ttext-align: center;\r\n\t} \r\n\t\r\n\t#afterScroll-mainContent h5 {\r\n\t\tfont-family: 'Nunito', sans-serif;\r\n\t\tfont-size: 14px;\r\n\t\ttext-align: center;\r\n\t\tline-height: 22px;\r\n\t} \r\n\t\r\n\t#afterScroll-mainContent ul {\r\n\t\tfont-family: 'Nunito', sans-serif;\r\n\t\tlist-style: none;\r\n\t\tfont-size: 16px;\r\n\t\tmargin-left: 0px;\r\n\t\tpadding-left: 0px;\r\n\t\tpadding-top: 10px;\r\n\t\ttext-align: center;\r\n\t} \r\n\t\r\n\t#afterScroll-mainContent ul li {\r\n\t\tpadding-top: 8px;\r\n\t\t-webkit-transition: all 200ms ease-out;\r\n\t\ttransition: all 200ms ease-out;\r\n\t}\r\n\r\n\t#afterScroll-mainContent ul li .arrow-icon {\r\n\t\topacity: 0;\r\n\t\tpadding-left: 0px;\r\n\t\t-webkit-transition: all 200ms ease-out;\r\n\t\ttransition: all 200ms ease-out\r\n\t}\r\n\r\n\t#afterScroll-mainContent ul li:hover .arrow-icon{\r\n\t\topacity: 1;\r\n\t\tpadding-left: 5px;\r\n\t\t-webkit-transition: all 200ms ease-out;\r\n\t\ttransition: all 200ms ease-out\r\n\t}\r\n\r\n\t\r\n\t#afterScroll-mainContent ul li:hover {\r\n\t\tcursor: pointer;\r\n\t\t-webkit-transform: scale(1.3,1.3);\r\n\t\t        transform: scale(1.3,1.3);\r\n\t\t-webkit-transition: all 200ms ease-out;\r\n\t\ttransition: all 200ms ease-out;\r\n\t}\r\n\t\r\n\t/* #afterScroll-mainContent .afterScroll-mainContent-odd {\r\n\t\tposition: relative;\r\n\t\tpadding-left: 0px;\r\n\t\tbackground: linear-gradient(to right, #0f3443, #34e89e );\r\n\t\topacity: 1;\r\n\t\ttransition: all 2s ease-out;\r\n\t}\r\n\t\r\n\t#afterScroll-mainContent .afterScroll-mainContent-even {\r\n\t\tposition: relative;\r\n\t\tpadding-right: 0px;\r\n\t\tpadding-left: 0px;\r\n\t\tbackground: linear-gradient(to right, #C6426E , #642B73 );\r\n\t\topacity: 1;\r\n\t\ttransition: all 2s ease-out;\r\n\t} */\r\n\t\r\n\t.inner-odd {\r\n\t\tposition: absolute;\r\n\t\theight: 100%;\r\n\t\twidth: 100%;\r\n\t\tbackground: rgba(39, 39, 43, 1);\r\n\t\tpadding: 60px;\r\n\t\t-webkit-transition: all 0.6s ease-in-out;\r\n\t\ttransition: all 0.6s ease-in-out;\r\n\t}\r\n\t\r\n\t.inner-odd:hover {\r\n\t\tbackground: rgba(39, 39, 43, 0);\r\n\t\t-webkit-transition: all 0.6s ease-in-out;\r\n\t\ttransition: all 0.6s ease-in-out;\r\n\t}\r\n\t\r\n\t.inner-even {\r\n\t\tpadding: 60px;\r\n\t\theight: 100%;\r\n\t\twidth: 100%;\r\n\t\tbackground: rgba(48, 48, 53, 1);\r\n\t\t-webkit-transition: all 0.6s ease-in-out;\r\n\t\ttransition: all 0.6s ease-in-out;\r\n\t}\r\n\t\r\n\t.inner-even:hover {\r\n\t\tbackground: rgba(48, 48, 53, 0);\r\n\t\t-webkit-transition: all 0.6s ease-in-out;\r\n\t\ttransition: all 0.6s ease-in-out;\r\n\t}\r\n\t\r\n}\r\n\r\n/*----------------------Mobile Phones Portrait---------------------------------*/\r\n\r\n@media screen and (max-device-width: 480px) and (orientation: portrait){\r\n\r\n\t#section-four {\r\n\t\twidth: 100%;\r\n\t\tposition: relative;\r\n\t\tbackground-color: #19191E;\r\n\t\tpadding: 0px 20px 0px 20px;\r\n\t}\r\n\t\r\n\t#afterScroll-mainHeading {\r\n\t\tpadding-top: 30px;\r\n\t\tcolor: white;\r\n\t\tmargin: 0 auto;\r\n\t\ttext-align: center;\r\n\t}\r\n\t\t\r\n\t#afterScroll-mainHeading h1{\r\n\t\tfont-size: 2em;\r\n\t\tfont-weight: 600;\r\n\t}\r\n\r\n\t#afterScroll-mainHeading p{\r\n\t\tfont-size: 1em;\t\t\r\n\t\tmargin-top: 30px;\r\n\t\tmargin-bottom: 25px;\r\n\t\tmargin-top: 0px;\r\n\t\tcolor: #d1d1d1;\r\n\t}\r\n\t\r\n\r\n\r\n}"

/***/ }),

/***/ "./src/app/components/menu-section/menu-section.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"section-four\" class=\"container-fluid-custom-100px\">\r\n  <div id=\"afterScroll-mainHeading\">\r\n    <h1>WHAT WE DO</h1>\r\n    <p>Our Engineering team with their design and technical capabilities understand the complex business logic and translate it\r\n    to products or applications.</p>\r\n  </div>\r\n      <app-menu-list></app-menu-list>\r\n</div>\r\n<!-- end section four -->\r\n"

/***/ }),

/***/ "./src/app/components/menu-section/menu-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuSectionComponent = (function () {
    function MenuSectionComponent() {
    }
    MenuSectionComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $("a").find("path").attr("fill", "#829BCD");
        });
    };
    MenuSectionComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            $(".services-list-row").mouseenter(function () {
                $(this).find("path").removeClass("st0").css({ fill: "#ef4481", transition: "2.0s" });
            });
            $(".services-list-row").mouseleave(function () {
                $(this).find("path").css({ fill: "#829BCD", transition: "2.0s" });
            });
        });
    };
    MenuSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu-section',
            template: __webpack_require__("./src/app/components/menu-section/menu-section.component.html"),
            styles: [__webpack_require__("./src/app/components/menu-section/menu-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuSectionComponent);
    return MenuSectionComponent;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.css":
/***/ (function(module, exports) {

module.exports = "#about-heading {\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n\r\n#about-heading p span{\r\n    color: #06d876;\r\n    font-weight: 900;\r\n    font-size: 20px;\r\n}\r\n\r\n#gallery-heading h1{\r\n    text-align: center;\r\n    font-weight: 600;\r\n    font-size: 3rem;\r\n}\r\n\r\n#about-heading h1 {\r\n   font-size: 3rem;\r\n    font-weight: 600;\r\n    margin-top: 85px;\r\n    text-align: center;\r\n}\r\n\r\n#outer-screen {\r\n    /* max-height: 200vh !important; */\r\n    max-width: 100% !important;\r\n    margin-bottom: 100px;\r\n}\r\n\r\n#inner-screen {\r\n    height: auto;\r\n    text-align: center;\r\n    padding: 0 25%;\r\n    max-width: 100% !important;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n    position: relative;\r\n    min-height: 100vh;\r\n}\r\n\r\n.image_div {\r\n    width: 80px;\r\n    height: 80px;\r\n    max-width:80px;\r\n    max-height: 80px;\r\n    display: inline-block;\r\n    border: 1px;\r\n    border-radius: 75px;\r\n    background-position: center center;\r\n    margin: 25px;\r\n    background-image: url('team.edefa09a08eec571c96e.jpg');\r\n    cursor: crosshair;\r\n    background-position-x: 20%;\r\n}\r\n\r\n.tooltiptext{\r\n    display: none;\r\n}\r\n\r\n.tooltiptext a{\r\n    font-size: 1.8em;\r\n    color: #ccc;\r\n    display: inline-block;\r\n}\r\n\r\n.tooltiptext a:hover{\r\n    color:#06d876;\r\n}\r\n\r\n#first-image {\r\n    background-position-y: 0px;\r\n}\r\n\r\n#second-image {\r\n    background-position-y: -87px;\r\n}\r\n\r\n#third-image {\r\n    background-position-y: -175px;\r\n}\r\n\r\n#fourth-image {\r\n    background-position-y: -260px;\r\n}\r\n\r\n#fifth-image {\r\n    background-position-y: -350px;\r\n}\r\n\r\n#sixth-image {\r\n    background-position-y: -430px;\r\n}\r\n\r\n#seventh-image {\r\n    background-position-y: -520px;\r\n}\r\n\r\n#eigth-image {\r\n    background-position-y: -605px;\r\n}\r\n\r\n#ninth-image {\r\n    background-position-y: -690px;\r\n}\r\n\r\n#tenth-image {\r\n    background-position-y: -780px;\r\n}\r\n\r\n#eleventh-image {\r\n    background-position-y: -865px;\r\n}\r\n\r\n#twelvth-image {\r\n    background-position-y: -950px;\r\n}\r\n\r\n#thirteenth-image {\r\n    background-position-y: -1035px;\r\n}\r\n\r\n#fourteenth-image {\r\n    background-position-y: -1120px;\r\n}\r\n\r\n#fifteenth-image {\r\n    background-position-y: -1210px;\r\n}\r\n\r\n/*------------------ second div -----------------*/\r\n\r\n#about-second-section {\r\n    height: auto;\r\n    width: 100%;\r\n    padding-top: 85px;\r\n}\r\n\r\n.insta-gallery{\r\n    padding: 10px;\r\n}\r\n\r\n.instagram-lite img {\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: 262px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\n.instagram-lite ul li{\r\n    list-style-type: none;\r\n    display: inline-block;\r\n    width: 25%;\r\n    padding: 10px;\r\n}\r\n\r\n.scroll-to-photos{\r\n    background: none;\r\n    border: 2px solid;\r\n    font: inherit;\r\n    line-height: 1;\r\n    margin: 0.5em;\r\n    padding: 1em 2em;\r\n    color: #000000;\r\n    cursor: pointer;\r\n    -webkit-transition: 0.25s;\r\n    transition: 0.25s;\r\n}\r\n\r\n/* .scroll-to-photos:hover , .scroll-to-photos:focus{\r\n    box-shadow: inset 0 3.5em 0 0 #363636;\r\n    color: #ffffff;\r\n} */\r\n\r\n/* for tablet preview */\r\n\r\n@media screen and (max-device-width: 768px){\r\n  \r\n    #inner-screen {\r\n    padding: 0 0px 0 0px; \r\n    }\r\n\r\n\r\n}\r\n\r\n/* third section */\r\n\r\n.container-fluid-custom-100px{\r\npadding: 0px 100px 0px 100px;\r\n}\r\n\r\n#about-third-section {\r\n    height: auto;\r\n    width: 100%;\r\n    padding-top: 85px;\r\n}\r\n\r\n.partner-image{\r\n        padding-bottom: 30px;\r\n}\r\n\r\n.partner-image img{\r\n    width: 200px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.partners-row{\r\n    padding-top: 50px;\r\n}\r\n\r\n.partner-text{\r\n    font-family: 'Nunito', sans-serif;\r\n    font-size: 17px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    letter-spacing: 1px !important;\r\n}\r\n\r\n.partner-text:after{\r\n    content: '';\r\n    height: 4px;\r\n    width: 50px;\r\n    display: block;\r\n    background: #06d876;\r\n    border-radius: 2px;\r\n}\r\n\r\n/*----------------------Mobile Phones Portrait---------------------------------*/\r\n\r\n@media screen and (max-device-width: 480px) and (orientation: portrait){\r\n  \r\n    .visiblility {\r\n        visibility: hidden;\r\n    }\r\n\r\n    .image_div{\r\n        background-position-x: 10% !important;\r\n        -webkit-filter: grayscale(100%);\r\n                filter: grayscale(100%);\r\n    }\r\n\r\n    .image_div:hover{\r\n        background-position-x: 0% !important;\r\n        -webkit-filter: grayscale(0%);\r\n                filter: grayscale(0%);\r\n    }\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"about\">\r\n   \r\n  <div id=\"outer-screen\">\r\n    <div id=\"inner-screen\" class=\"container visibility\">\r\n    <div id=\"about-heading\">\r\n      <h1>A Passionate Team</h1>\r\n      <p>We are a <span>passionate team </span>of experienced software <span>geeks, designers, innovators</span> doing crazy things to run your business and\r\n      keep live your dreams. We develop a wide range of creative and technical business applications for web & mobile.</p>\r\n    </div>\r\n      <div class=\"the-team\">\r\n      <div id=\"first-image\" class=\"image_div\" (click)=\"getFunkyPic('first-image')\">\r\n      </div>\r\n      <div class=\"tooltiptext\">\r\n        <h5>Robinson</h5>\r\n        <p>Coder, Hacker, Technologist, Traveller, Chelsea Fan, Rider</p>\r\n        <div class=\"row\">\r\n          <div class=\"col-3\">\r\n            <a href=\"https://www.linkedin.com/pub/robinson-c/3b/37b/80\"><i class=\"fa fa-lg fa-linkedin-square\" aria-hidden=\"true\"></i></a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"https://www.facebook.com/robin.son.5209\"><i class=\"fa fa-lg fa-facebook-square\" aria-hidden=\"true\"></i></a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"https://twitter.com/Robie_joe\"><i class=\"fa fa-lg fa-twitter-square\" aria-hidden=\"true\"></i></a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"https://twitter.com/Robie_joe\"><i class=\"fa fa-lg fa-google-plus-square\" aria-hidden=\"true\"></i></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n      <div id=\"second-image\" class=\"image_div\" (click)=\"getFunkyPic('second-image')\">\r\n      </div>\r\n      <div class=\"tooltiptext\">\r\n        <h5>Krishna Kumar</h5>\r\n        <p>Entrepreneur, Educationist, Dreamer</p>\r\n        <div class=\"row\">\r\n          <div class=\"col-3\">\r\n            <a href=\"http://in.linkedin.com/in/krishnakumarputhukara\">\r\n              <i class=\"fa fa-lg fa-linkedin-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"http://facebook.com/krishnakumar.puthukara\">\r\n              <i class=\"fa fa-lg fa-facebook-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"https://twitter.com/krishna_kumarp\">\r\n              <i class=\"fa fa-lg fa-twitter-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"https://plus.google.com/u/0/110367907407730182646\">\r\n              <i class=\"fa fa-lg fa-google-plus-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n      <div id=\"third-image\" class=\"image_div\" (click)=\"getFunkyPic('third-image')\" data-toggle=\"tooltip\" title=\"Arun\">\r\n      </div>\r\n      <div class=\"tooltiptext\">\r\n        <h5>Arun</h5>\r\n        <p>Dreamer, Audiophile, Innovator</p>\r\n        <div class=\"row\">\r\n          <div class=\"col-3\">\r\n            <a href=\"https://in.linkedin.com/in/arun-karayintavida-5320a1113\">\r\n              <i class=\"fa fa-lg fa-linkedin-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"https://www.facebook.com/arun.karayintavida\">\r\n              <i class=\"fa fa-lg fa-facebook-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-twitter-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"https://plus.google.com/117730134613581313106\">\r\n              <i class=\"fa fa-lg fa-google-plus-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div id=\"fourth-image\" class=\"image_div\" (click)=\"getFunkyPic('fourth-image')\" data-toggle=\"tooltip\" title=\"Ben\">\r\n      </div>\r\n      <div class=\"tooltiptext\">\r\n        <h5>Nibin Benjamin</h5>\r\n        <p>Artist, Hipster, Batman Fan, Gamer, Rider</p>\r\n        <div class=\"row\">\r\n          <div class=\"col-3\">\r\n            <a href=\"https://in.linkedin.com/in/nibin-benjamin\">\r\n              <i class=\"fa fa-lg fa-linkedin-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"https://www.facebook.com/nibin501?ref=br_rs\">\r\n              <i class=\"fa fa-lg fa-facebook-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-twitter-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"https://plus.google.com/u/0/109963865171171634779\">\r\n              <i class=\"fa fa-lg fa-google-plus-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div id=\"fifth-image\" class=\"image_div\" (click)=\"getFunkyPic('fifth-image')\" data-toggle=\"tooltip\" title=\"Prince\">\r\n      </div>\r\n      <div class=\"tooltiptext\">\r\n        <h5>Prince Mathew</h5>\r\n        <p>Coder,Movieholic, Anime Lover, Barca Fan, Night Owl</p>\r\n        <div class=\"row\">\r\n          <div class=\"col-3\">\r\n            <a href=\"https://in.linkedin.com/in/prince-mathew-7a5195102\">\r\n              <i class=\"fa fa-lg fa-linkedin-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"https://www.facebook.com/prince.mathew.794\">\r\n              <i class=\"fa fa-lg fa-facebook-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"http://www.wizroots.com/\">\r\n              <i class=\"fa fa-lg fa-twitter-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"https://plus.google.com/116326803787881953761\">\r\n              <i class=\"fa fa-lg fa-google-plus-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div id=\"sixth-image\" class=\"image_div\" (click)=\"getFunkyPic('sixth-image')\" data-toggle=\"tooltip\" title=\"Praveen\">\r\n      </div>\r\n      <div class=\"tooltiptext\">\r\n        <h5>Praveen K D</h5>\r\n        <p>Developer</p>\r\n        <div class=\"row\">\r\n          <div class=\"col-3\">\r\n            <a href=\"https://in.linkedin.com/in/praveen-kumar-d-112b9ba7\">\r\n              <i class=\"fa fa-lg fa-linkedin-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"https://www.facebook.com/praveenkd.ksd\">\r\n              <i class=\"fa fa-lg fa-facebook-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"https://twitter.com/PraveenkumarD6\">\r\n              <i class=\"fa fa-lg fa-twitter-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"https://plus.google.com/\">\r\n              <i class=\"fa fa-lg fa-google-plus-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div id=\"seventh-image\" class=\"image_div\" (click)=\"getFunkyPic('seventh-image')\" data-toggle=\"tooltip\" title=\"Karthik\">\r\n      </div>\r\n      <div class=\"tooltiptext\">\r\n        <h5>Karthik Samyak</h5>\r\n        <p>Fitness freak</p>\r\n        <div class=\"row\">\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-linkedin-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-facebook-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-twitter-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-google-plus-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div id=\"eigth-image\" class=\"image_div\" (click)=\"getFunkyPic('eigth-image')\" data-toggle=\"tooltip\" title=\"Robinson\">\r\n      </div>\r\n      <div class=\"tooltiptext\">\r\n        <h5>Karthik Samyak</h5>\r\n        <p>Fitness freak</p>\r\n        <div class=\"row\">\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-linkedin-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-facebook-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-twitter-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-google-plus-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n      <div id=\"ninth-image\" class=\"image_div\" (click)=\"getFunkyPic('ninth-image')\" data-toggle=\"tooltip\" title=\"Krishna Kumar\">\r\n      </div>\r\n      <div class=\"tooltiptext\">\r\n        <h5>Karthik Samyak</h5>\r\n        <p>Fitness freak</p>\r\n        <div class=\"row\">\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-linkedin-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-facebook-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-twitter-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-google-plus-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>    \r\n  \r\n      <div id=\"tenth-image\" class=\"image_div\" (click)=\"getFunkyPic('tenth-image')\" data-toggle=\"tooltip\" title=\"Arun\">\r\n      </div>\r\n      <div class=\"tooltiptext\">\r\n        <h5>Karthik Samyak</h5>\r\n        <p>Fitness freak</p>\r\n        <div class=\"row\">\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-linkedin-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-facebook-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-twitter-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-google-plus-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>    \r\n  \r\n      <div id=\"eleventh-image\" class=\"image_div\" (click)=\"getFunkyPic('eleventh-image')\" data-toggle=\"tooltip\" title=\"Ben\">\r\n      </div>\r\n      <div class=\"tooltiptext\">\r\n        <h5>Karthik Samyak</h5>\r\n        <p>Fitness freak</p>\r\n        <div class=\"row\">\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-linkedin-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-facebook-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-twitter-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-google-plus-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>    \r\n  \r\n      <div id=\"twelvth-image\" class=\"image_div\" (click)=\"getFunkyPic('twelvth-image')\" data-toggle=\"tooltip\" title=\"Prince\">\r\n      </div>\r\n      <div class=\"tooltiptext\">\r\n        <h5>Karthik Samyak</h5>\r\n        <p>Fitness freak</p>\r\n        <div class=\"row\">\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-linkedin-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-facebook-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-twitter-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-google-plus-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>    \r\n  \r\n      <div id=\"thirteenth-image\" class=\"image_div\" (click)=\"getFunkyPic('thirteenth-image')\" data-toggle=\"tooltip\" title=\"Praveen\">\r\n      </div>\r\n      <div class=\"tooltiptext\">\r\n        <h5>Karthik Samyak</h5>\r\n        <p>Fitness freak</p>\r\n        <div class=\"row\">\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-linkedin-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-facebook-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-twitter-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-google-plus-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>    \r\n  \r\n      <div id=\"fourteenth-image\" class=\"image_div\" (click)=\"getFunkyPic('fourteenth-image')\" data-toggle=\"tooltip\" title=\"Karthik\">\r\n      </div>\r\n      <div class=\"tooltiptext\">\r\n        <h5>Karthik Samyak</h5>\r\n        <p>Fitness freak</p>\r\n        <div class=\"row\">\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-linkedin-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-facebook-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-twitter-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-google-plus-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>    \r\n  \r\n      <div id=\"fifteenth-image\" class=\"image_div\" (click)=\"getFunkyPic('fifteenth-image')\" data-toggle=\"tooltip\" title=\"Robinson\">\r\n      </div>\r\n      <div class=\"tooltiptext\">\r\n        <h5>Karthik Samyak</h5>\r\n        <p>Fitness freak</p>\r\n        <div class=\"row\">\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-linkedin-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-facebook-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-twitter-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-3\">\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-lg fa-google-plus-square\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>    \r\n\r\n      </div>\r\n\r\n      <button type=\"button\" class=\"btn btn-secondary scroll-to-photos\">View Gallery</button>\r\n      \r\n    </div>\r\n    <div id=\"about-second-section\">\r\n      <div id=\"gallery-heading\">\r\n        <h1>Our Culture</h1>\r\n      </div>\r\n      <div class=\"insta-gallery\">\r\n        <ul class=\"instagram-lite\"></ul>\r\n      </div>\r\n    </div>\r\n    <div id=\"about-third-section\">\r\n      <div class=\"container-fluid-custom-100px\" id=\"gallery-heading\">\r\n        <h1>Our Partners</h1>\r\n        <div class=\"row partners-row\">\r\n          <div class=\"col-lg-3 col-md-6 partner-image\">\r\n            <span class=\"partner-text\">\r\n              Microsoft BizSpark Member\r\n            </span>\r\n            <img src=\"./assets/images/about/BizSpark.jpg\"/>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-6 partner-image\">\r\n            <span class=\"partner-text\">\r\n              IBM Business Partner\r\n            </span>\r\n            <img src=\"./assets/images/about/ibm.png\"/>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-6 partner-image\">\r\n            <span class=\"partner-text\">\r\n              Adobe Preferred Vendor\r\n            </span>\r\n            <img src=\"./assets/images/about/Adobe_Systems_Logo_002.svg.png\"/>\r\n          </div>\r\n          <div class=\"col-lg-3 col-md-6 partner-image\">\r\n            <span class=\"partner-text\">\r\n              AWS Technology Partner\r\n            </span>\r\n            <img src=\"./assets/images/about/Technology-Partner-Logo.png\"/>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_nav_bar_color_service__ = __webpack_require__("./src/app/Services/nav-bar-color.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_gallery_images__ = __webpack_require__("./src/app/Services/gallery-images.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = (function () {
    function AboutComponent(navBarColorService) {
        this.navBarColorService = navBarColorService;
        this.navBarColorService.navBarBackgroundColor.next("white");
        this.navBarColorService.logoColor.next("./assets/images/logo_black.png");
        this.navBarColorService.hamBurger.next("black");
        this.navBarColorService.currentPageName.next("about");
        this.galleryImages = __WEBPACK_IMPORTED_MODULE_2__Services_gallery_images__["a" /* galleryImages */];
    }
    AboutComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        // for qtip
        $(document).ready(function () {
            console.log("initasa");
            $('a').qtip();
            $('.image_div').each(function () {
                $(this).qtip({
                    content: $(this).next('.tooltiptext'),
                    hide: {
                        fixed: true,
                        delay: 300
                    },
                    style: 'qtip-bootstrap',
                    position: {
                        my: 'top right',
                        at: 'bottom center',
                        viewport: $('#inner-screen'),
                        adjust: {
                            method: 'flip',
                            resize: true
                        }
                    },
                    width: 320
                });
            });
        });
        $.each(__WEBPACK_IMPORTED_MODULE_2__Services_gallery_images__["a" /* galleryImages */], function () {
            $('.instagram-lite').append('<li class="il_item"><img class="il-photo__img" src="' + this.url + '" /></li>');
        });
    };
    AboutComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            $('[data-toggle="tooltip"]').tooltip();
            if ($('.instagram-lite').instagramLite({
                accessToken: '7167694846.89f9df4.40324e58c8ae4d6593f368e0d3ac0155',
                urls: true,
                list: true
            })) { }
            $(".scroll-to-photos").click(function () {
                $('html,body').animate({
                    scrollTop: $("#about-second-section").offset().top
                }, 1500);
            });
        });
    };
    AboutComponent.prototype.onMousemove = function (event) {
        var arr = ['first-image', 'second-image', 'third-image', 'fourth-image', 'fifth-image', 'sixth-image', 'seventh-image', 'eigth-image', 'ninth-image', 'tenth-image', 'eleventh-image', 'twelvth-image', 'thirteenth-image', 'fourteenth-image', 'fifteenth-image'];
        for (var i = 0; i < arr.length; i++) {
            this.relativePos(event, arr[i], i);
        }
        var x = event.clientX;
        var y = event.clientY;
        this.coords = "X coords: " + x + ", Y coords: " + y;
    };
    AboutComponent.prototype.relativePos = function (event, el, i) {
        var x = event.pageX;
        var y = event.pageY;
        var coordX = x;
        var coordY = y;
        var elementName = el;
        var element = document.getElementById(el);
        var elementTop = element.offsetTop;
        var elementLeft = element.offsetLeft;
        var elementWidth = element.offsetWidth;
        var elementHeight = element.offsetHeight;
        var elementRight = elementLeft + elementWidth;
        var elementBottom = elementTop + elementHeight;
        console.log("x:" + coordX, "y:" + coordY);
        // console.log("elementName:" + elementName, "elementTop:" + elementTop, "elementBottom:" + elementBottom ,"elementLeft:" + elementLeft,"elementRight:" + elementRight, "elementWidth:" + elementWidth, "elementHeight:" + elementHeight, "coordX:" + coordX, "coordY:" + coordY);
        if (coordX > elementLeft && coordX < elementRight && coordY > elementTop && coordY < elementBottom) {
            // console.log(elementName + ":FacingForward");
            element.style.backgroundPositionX = " 10% ";
        }
        else if (coordX <= (elementLeft) && coordX >= 0 && coordY <= (elementTop) && coordY >= 0) {
            // console.log(elementName + ":Turned North_West");
            element.style.backgroundPositionX = " 60% ";
        }
        else if (coordX >= (elementLeft) && coordX <= (elementRight) && coordY <= elementTop && coordY >= 0) {
            // console.log(elementName + ":Turned North");
            element.style.backgroundPositionX = " 50% ";
        }
        else if (coordX >= (elementRight) && coordX <= window.innerWidth && coordY <= (elementTop) && coordY >= 0) {
            // console.log(elementName + ":Turned North_East");
            element.style.backgroundPositionX = " 40% ";
        }
        else if (coordX >= elementRight && coordX <= window.innerWidth && coordY >= (elementTop) && coordY <= (elementBottom)) {
            // console.log(elementName + ":Turned East");
            element.style.backgroundPositionX = " 30% ";
        }
        else if (coordX >= (elementRight) && coordX <= window.innerWidth && coordY >= (elementBottom) && coordY <= window.innerHeight) {
            // console.log(elementName + ":Turned South_East");
            element.style.backgroundPositionX = " 70% ";
        }
        else if (coordX <= (elementRight) && coordX >= (elementLeft) && coordY >= (elementBottom) && coordY <= window.innerHeight) {
            // console.log(elementName + ":Turned South");
            element.style.backgroundPositionX = " 80% ";
        }
        else if (coordX <= (elementLeft) && coordX >= 0 && coordY >= elementBottom && coordY <= window.innerHeight) {
            // console.log(elementName + ":Turned South_West");
            element.style.backgroundPositionX = " 90% ";
        }
        else if (coordX <= elementLeft && coordX >= 0 && coordY >= elementTop && coordY <= elementBottom) {
            // console.log(elementName + ":Turned West");
            element.style.backgroundPositionX = " 100% ";
        }
    };
    AboutComponent.prototype.getFunkyPic = function (id) {
        var clickedElem = document.getElementById(id);
        var arr = ['first-image', 'second-image', 'third-image', 'fourth-image', 'fifth-image', 'sixth-image', 'seventh-image', 'eigth-image', 'ninth-image', 'tenth-image', 'eleventh-image', 'twelvth-image', 'thirteenth-image', 'fourteenth-image', 'fifteenth-image'];
        for (var i = 0; i < arr.length; i++) {
            this.getDownFace(arr[i], i);
        }
        clickedElem.style.backgroundPositionX = " 0% ";
    };
    AboutComponent.prototype.getDownFace = function (el, i) {
        var elementName = el;
        var element = document.getElementById(el);
        var elementTop = element.offsetTop;
        var elementLeft = element.offsetLeft;
        var elementWidth = element.offsetWidth;
        var elementHeight = element.offsetHeight;
        var elementRight = elementLeft + elementWidth;
        var elementBottom = elementTop + elementHeight;
        // console.log("elementName:" + elementName, "elementTop:" + elementTop, "elementBottom:" + elementBottom ,"elementLeft:" + elementLeft,"elementRight:" + elementRight, "elementWidth:" + elementWidth, "elementHeight:" + elementHeight, "coordX:" + coordX, "coordY:" + coordY);
        element.style.backgroundPositionX = " 80% ";
    };
    AboutComponent.prototype.getCoordinates = function () {
        console.log("elementName:" + this.elementName, "elementTop:" + this.elementTop, "elementLeft:" + this.elementLeft, "elementWidth:" + this.elementWidth, "elementHeight:" + this.elementHeight, "coordX:" + this.coordX, "coordY:" + this.coordY);
        //   this.coordsXY = {
        //     X: this.coordX,
        //     Y: this.coordY
        //   }
        //   return this.coordsXY;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mousemove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], AboutComponent.prototype, "onMousemove", null);
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__("./src/app/pages/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_nav_bar_color_service__["a" /* NavBarColorService */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/career/career.component.css":
/***/ (function(module, exports) {

module.exports = "#careerPage {\r\n    overflow: hidden;\r\n    margin-top: 00px;\r\n    -webkit-touch-callout: none; /* iOS Safari */\r\n    -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\r\n       -moz-user-select: none; /* Firefox */\r\n        -ms-user-select: none; /* Internet Explorer/Edge */\r\n            user-select: none; /* Non-prefixed version, currently\r\n                                  supported by Chrome and Opera */\r\n    margin-bottom: 100px;\r\n}\r\n\r\n#careerPageHeader {\r\n    margin-top: 80px;\r\n    background-color: white;\r\n    width: 100%;\r\n}\r\n\r\n.video-container {\r\n    width: 100%;\r\n    height: 100vh;\r\n    position: relative;\r\n    background-size: cover; \r\n    overflow: hidden;\r\n    display: block;\r\n    padding-bottom: 400px;\r\n  }\r\n\r\n.video-container video {\r\n    /* Make video to at least 100% wide and tall */\r\n    min-width: 100%; \r\n    min-height: 100%;\r\n  \r\n    /* Setting width & height to auto prevents the browser from stretching or squishing the video */\r\n    width: auto;\r\n    height: auto;\r\n  \r\n    /* Center the video */\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n    overflow: hidden;\r\n    z-index: -10;\r\n  }\r\n\r\n#textOnVideo {\r\n      color: white;\r\n      padding: 15% 0% 0px 3%;\r\n  }\r\n\r\n#textOnVideo h1 {\r\n      font-size: 75px;\r\n      padding-bottom: 25px;\r\n  }\r\n\r\n/*-------------------- offerings ------------------------*/\r\n\r\n#offerings {\r\n    background-color: rgb(221, 220, 220);\r\n    padding-bottom: 50px;\r\n}\r\n\r\n#offerings h2{\r\n    text-align: center;\r\n    padding: 15px 0px 15px 0px;\r\n}\r\n\r\n.offeringSec h5{\r\n    padding-left: 15px;\r\n    display: inline;\r\n    vertical-align: middle;\r\n}\r\n\r\n.headingAndImageOfferings {\r\n    text-align: left;\r\n    padding-left: 25%;\r\n}\r\n\r\n.offeringSec ul {\r\n    list-style-position: inside;\r\n    text-align: left;\r\n    padding-left: 33%;\r\n}\r\n\r\n.offeringSec ul li {\r\n    margin-top: 10px;\r\n}\r\n\r\n.offeringSec {\r\n    text-align: center;\r\n    padding-top: 25px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.imageFunWorkPlace {\r\n    width: 45px;\r\n}\r\n\r\n/*---------------- job-listing ---------------------*/\r\n\r\n#job-listing-headings {\r\n    background-color: #060820;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 6% 0px 12% 0px;   \r\n}\r\n\r\n#job-listing-headings h2 {\r\n    width: 100%;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n#job-listing-headings h6 {\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    text-align: center;\r\n    width: 100%;\r\n    margin-bottom: 5%;\r\n}\r\n\r\n#job-listing-contents {\r\n    padding-top: 25px;\r\n    -webkit-box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n    border-radius: 5px;\r\n    margin-top: -10%;\r\n    background-color: white;\r\n}\r\n\r\n#job-listing-contents .job-heading {\r\n    text-align: left;\r\n}\r\n\r\n#job-listing-contents .job-heading h1 {\r\n    font-size: 21px;\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n}\r\n\r\n#job-listing-contents .job-heading p {\r\n    font-size: 14px;\r\n}\r\n\r\n#job-listing-contents ul {\r\n    list-style-type: none;\r\n}\r\n\r\n#job-listing-contents ul li {\r\n    padding: 1% 0px 3% 0px;\r\n}\r\n\r\n#job-listing-contents img {\r\n    max-width: 75px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n}\r\n\r\n#job-listing-contents button {\r\n   background-color: #060820;\r\n   color: white;\r\n   padding: 4px 22px 4px 22px;\r\n   border: none;\r\n   border-radius: 0px;\r\n   font-size: 14px;\r\n   cursor: pointer;\r\n   -webkit-box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n           box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n}\r\n\r\n#job-listing-contents button:hover {\r\n    -webkit-box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\r\n            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\r\n}\r\n\r\n.requirements-list {\r\n    padding-left: 10%; \r\n}\r\n\r\n.requirements-list li{\r\n    padding-top: 2px !important;\r\n    padding-bottom: 2px !important;\r\n    list-style-type: disc !important;\r\n    list-style-position: inside;\r\n}\r\n\r\n/*----------------------- Apply modal -------------------*/\r\n\r\n#descriptionModal button, #applyModal button {\r\n    background-color: #060820;\r\n    color: white;\r\n    padding: 4px 22px 4px 22px;\r\n    border: none;\r\n    border-radius: 0px;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n    -webkit-box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n            box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n}\r\n\r\n#descriptionModal button:hover {\r\n    -webkit-box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\r\n            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\r\n}\r\n\r\n#applyModal button:hover {\r\n    -webkit-box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\r\n            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\r\n}\r\n\r\n#exampleModalLabel {\r\n    text-align: center;\r\n    margin: 0 auto;\r\n}\r\n\r\n#applyModal button[disabled] {\r\n    background-color: red !important;\r\n    opacity: 0.4;\r\n}\r\n\r\n#applyModal button[disabled]:hover {\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    opacity: 0.2;\r\n    cursor: not-allowed;\r\n}\r\n\r\n#applyForm .form-group .alert {\r\n    background: #f1ead0;\r\n    color: rgb(255, 0, 0);\r\n    padding: 0px 0px 0px 0px;\r\n    font-size: 13px;\r\n    margin: 0px 0px 0px 15px;\r\n    display: inline-block;\r\n    -webkit-animation: 2s alertAnim forwards;\r\n            animation: 2s alertAnim forwards;\r\n}\r\n\r\n#captcha input {\r\n    display: inline;\r\n    max-width: 30%;\r\n    margin-left: 10px;\r\n}\r\n\r\n/*----------------- Modal designs -----------------------*/\r\n\r\n.modal .modal-dialog {\r\n    border-radius: 0px !important;\r\n}\r\n\r\n.modal .modal-dialog h5 {\r\n    font-family: 'Reem Kufi', sans-serif;\r\n}\r\n\r\n.modal .modal-dialog p {\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    color: rgb(65, 65, 65);\r\n}\r\n\r\n.modal .modal-dialog ul {\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    color: rgb(65, 65, 65);\r\n}\r\n\r\n.modal .modal-header {\r\n    background-color: rgb(8, 90, 184);\r\n    color: white;\r\n}\r\n\r\n.modal .modal-footer {\r\n    background-color: rgb(8, 90, 184);\r\n    color: white;\r\n}\r\n\r\n.modal .modal-dialog form label {\r\n    font-family: 'Maven Pro', sans-serif;\r\n}\r\n\r\n.modal .modal-dialog form input {\r\n    font-family: 'Maven Pro', sans-serif;\r\n    border-radius: 0px;\r\n    max-height: 35px;\r\n}\r\n\r\n.modal .modal-dialog form input:focus {\r\n    outline: 0 none;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    border-color: rgb(8, 90, 184);\r\n}\r\n\r\n.modal .modal-dialog form input[type=\"file\"] {\r\n    max-height: 40px !important;\r\n}\r\n\r\n.modal .modal-dialog button {\r\n    background-color: #0d0f2c !important;\r\n}\r\n\r\n.modal .modal-dialog form #captcha h5 label {\r\n    font-size: 17px !important;\r\n}\r\n\r\n/*--------------------------------------------------\r\n\tMedia Queries\r\n----------------------------------------------------*/\r\n\r\n/*-------------------Desktop Screens---------------------------*/\r\n\r\n@media screen and (min-width: 1024px){\r\n    \r\n    #job-listing-contents .job-heading {\r\n        padding-left: 3%;\r\n    }\r\n     \r\n  \r\n  }\r\n\r\n/*----------------------Tablets Portrait or Landscape----------------*/\r\n\r\n@media screen and (min-device-width: 768px) and (max-device-width: 1024px){\r\n    \r\n      \r\n  \r\n  }\r\n\r\n/*----------------------Mobile Phones Portrait---------------------------------*/\r\n\r\n@media screen and (max-device-width: 480px) and (orientation: portrait){\r\n\r\n    .offeringSec ul {\r\n        list-style-position: inside;\r\n        text-align: left;\r\n        padding-left: 18%;\r\n    }  \r\n\r\n    .headingAndImageOfferings {\r\n        padding-left: 5px;\r\n    }\r\n\r\n    .headingAndImageOfferings h5 {\r\n        font-size: 15px;\r\n        font-weight: 700;\r\n    }\r\n\r\n    .offeringSec ul {\r\n        font-size: 15px;\r\n    }\r\n\r\n    #textOnVideo h1 {\r\n        font-size: 45px;\r\n        padding-top: 150px;\r\n        padding-bottom: 25px;\r\n    }\r\n\r\n  }\r\n"

/***/ }),

/***/ "./src/app/pages/career/career.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"careerPage\"> \r\n    <div class=\"video-container\" >\r\n        <video autoplay loop muted webkit-playsinline playsinline poster=\"./assets/images/r1.jpg\">\r\n            <source src=\"./assets/videos/3.mp4\" type=\"video/mp4\" />\r\n        </video> \r\n        <div id=\"textOnVideo\" class=\"col-sm-12\">\r\n            <h1>Obsessed With What's Next?</h1>\r\n            <h5>So are we. Search our open roles and find your ‘next’ with WIZROOTS.</h5>\r\n        </div> \r\n    </div><!-- end video-container -->\r\n\r\n    <div id=\"offerings\" class=\"container-fluid\">\r\n        <div>\r\n            <h2>OUR CULTURE</h2>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 offeringSec\" *ngFor=\"let policies of policies\">\r\n                <div>\r\n                    <div class=\"headingAndImageOfferings\"> \r\n                        <img [src]=\"policies.image\" class=\"imageFunWorkPlace\">\r\n                        <h5> {{policies.heading}} </h5>\r\n                    </div>\r\n                    <div>\r\n                        <ul>\r\n                            <li *ngFor=\"let policy of policies.list\">{{policy}}</li>\r\n                        </ul>\r\n                    </div> \r\n                </div>            \r\n            </div>\r\n        </div>\r\n    </div><!-- end offerings -->\r\n    \r\n    <div id=\"job-listing\" class=\"container-fluid\">\r\n        <div id=\"job-listing-headings\" class=\"row\">\r\n            <div class=\"container\">\r\n                <h2> Explore Career Openings</h2>\r\n                <h6>Wizroots is always seeking out the very best talent to join our creative culture. If you want to be a part of our team, take a look at our current openings.</h6>\r\n            </div>          \r\n        </div>\r\n        <div id=\"job-listing-contents\" class=\"container\">\r\n            <ul>\r\n                <li *ngFor=\"let jobs of jobList\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-1\">\r\n                                <img src=\"./assets/images/careers/{{jobs['domain_name']}}.png\" />\r\n                            </div>\r\n                            <div class=\"col-sm-9 job-heading\">\r\n                                <h1>{{jobs['job_title']}}</h1>\r\n                                <p>{{jobs['description']}}</p>\r\n                            </div>\r\n                            <div class=\"col-sm-2 text-right\">\r\n                                <button class=\"btn apply\" data-toggle=\"modal\" (click)=\"jobDescription(jobs['job_id'])\" data-target=\"#descriptionModal\" >View & Apply</button>\r\n                            </div>\r\n                        </div>\r\n                        <hr/>\r\n                    </li>\r\n            </ul>\r\n        </div>\r\n    </div><!--end job-listing -->\r\n\r\n    <!-- Job description Modal -->\r\n    <div class=\"modal bd-example-modal-lg\" id=\"descriptionModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\" style=\"width: 750px;left: -122px;\">\r\n                <div class=\"modal-header\">\r\n                <h5 class=\"modal-title text-center\" id=\"exampleModalLabel\">JOB DESCRIPTION</h5>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <button class=\"pull-right\" data-toggle=\"modal\" data-dismiss=\"modal\"  data-target=\"#applyModal\" (click)=\"captcha()\">APPLY</button>\r\n                    <br>\r\n                    <div id=\"descriptionModalBody\">\r\n                        <h5> {{title}} <span>( Job ID: {{id}} ) </span></h5>\r\n                        <h6>Description: </h6>\r\n                        <p>{{description}}</p>\r\n                        <h6>Requirements</h6>\r\n                        <ul>\r\n                            <li *ngFor=\"let requirement of requirements\">{{requirement}}</li>\r\n                        </ul>\r\n                        <h6>Education:</h6>\r\n                        <p>{{education}}</p>\r\n                        <h6>Experience:</h6>\r\n                        <p>{{experience}}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                <button type=\"button\" data-dismiss=\"modal\">Close</button>\r\n                <button data-toggle=\"modal\" data-dismiss=\"modal\" (click)=\"captcha()\"  data-target=\"#applyModal\"> APPLY </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div><!-- end job description modal -->\r\n\r\n    <!-- Apply Modal -->\r\n    <div class=\"modal fade bd-example-modal-lg\" id=\"applyModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog\" role=\"document\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title text-center\" id=\"exampleModalLabel\">Submit Your Details</h5>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <div *ngIf=\"!name; else forminfo\">\r\n                        <form id=\"applyForm\" [formGroup]=\"rForm\" enctype=\"multipart/form-data\">                          \r\n                            <div class=\"form-group\">\r\n                                <label for=\"fullName\">Full Name:</label>\r\n                                <div class=\"alert\"> \r\n                                    <ng-container *ngIf=\"!rForm.controls['fullName'].valid && rForm.controls['fullName'].touched\">* Minimum 3 letters required</ng-container> \r\n                                </div>\r\n                                <input formControlName=\"fullName\" [(ngModel)]=\"fullName\" type=\"text\" class=\"form-control\" id=\"fullName\" name=\"fullName\" placeholder=\"Your Full Name\" required>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"email\">Email:</label>\r\n                                <div class=\"alert\"> <ng-container *ngIf=\"!rForm.controls['email'].valid && rForm.controls['email'].touched\">* Please enter a valid E-mail ( ex: yourname@domain.com )</ng-container> </div>\r\n                                <input formControlName=\"email\" [(ngModel)]=\"email\" type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Your Email Address\">\r\n                            </div> \r\n                            <div class=\"form-group\">\r\n                                <label for=\"mobile\">Phone:</label>\r\n                                <div class=\"alert\"> <ng-container *ngIf=\"!rForm.controls['mobile'].valid && rForm.controls['mobile'].touched\">* Please enter a valid Phone Number</ng-container> </div>\r\n                                <input formControlName=\"mobile\" [(ngModel)]=\"mobile\" type=\"text\" class=\"form-control\" id=\"mobile\" name=\"mobile\" placeholder=\"Your Mobile Number\" pattern=\"[0-9]*\" required>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"resume\">Upload Your Resume/CV:</label>\r\n                                <input type=\"file\" class=\"form-control\" id=\"file\" name=\"file\" (change)=\"fileChange($event)\" accept=\".pdf,.doc,.docx,.PDF\" required>\r\n                                <small class=\"form-text text-muted\">*PDF/DOCX formats only</small>\r\n                            </div>\r\n                            <div id=\"captcha\">\r\n                                <h5> <label>Recaptcha:</label> &nbsp; &nbsp; &nbsp; &nbsp; <span id=\"captchaX\"></span> &nbsp; + &nbsp; <span id=\"captchaY\"></span> = <input name=\"captchaAnswer\" formControlName=\"captcha\" type=\"text\" class=\"form-control\"  #captchaAnswer (keyup)=\"captchaCalcFunc(captchaAnswer.value)\"> &nbsp; &nbsp; <span class=\"fa fa-exclamation-circle\"></span></h5>\r\n                            </div>\r\n                            \r\n                        </form>\r\n                        </div>\r\n                    </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" data-dismiss=\"modal\" (click)=\"formReset()\">Close</button>\r\n                    <button type=\"submit\" data-dismiss=\"modal\" [disabled]=\"formValid()\" (click)=\"sendEmail()\"><span class=\"fa fa-check\"></span> APPLY</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> <!-- end apply modal -->   \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/career/career.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__careers__ = __webpack_require__("./src/app/pages/career/careers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_apply_form_post_service__ = __webpack_require__("./src/app/Services/apply-form-post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_nav_bar_color_service__ = __webpack_require__("./src/app/Services/nav-bar-color.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_enquiry_mail_send_service__ = __webpack_require__("./src/app/Services/enquiry-mail-send.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CareerComponent = (function () {
    function CareerComponent(_getService, fb, applyFormPostService, navBarColorService, EnquiryMailSendService) {
        this._getService = _getService;
        this.fb = fb;
        this.applyFormPostService = applyFormPostService;
        this.navBarColorService = navBarColorService;
        this.EnquiryMailSendService = EnquiryMailSendService;
        this.jobShow = 0;
        this.accessApply = false;
        /*------- Form validation variables ---------*/
        this.fullName = "";
        this.email = "";
        this.mobile = "";
        this.post = "";
        this.filePath = "";
        this.fileName = "";
        this.fileType = "";
        this.policies = __WEBPACK_IMPORTED_MODULE_1__careers__["a" /* policiesList */];
        // this.jobList = jobListing;
        /*--------- Form building -----------*/
        this.rForm = fb.group({
            'fullName': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(3)])],
            'mobile': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(10)])],
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            'captcha': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])]
        });
        this.navBarColorService.navBarBackgroundColor.next("transparent");
        this.navBarColorService.logoColor.next("./assets/images/logo_white.png");
        this.navBarColorService.hamBurger.next("white");
        this.navBarColorService.currentPageName.next("career");
    }
    CareerComponent.prototype.sendEmail = function (message) {
        var _this = this;
        message = {};
        message.name = this.fullName;
        message.email = this.email;
        message.mobile = this.mobile;
        message.fileName = this.fileName;
        message.filePath = this.filePath;
        message.fileType = this.fileType;
        message.posting = this.post;
        this.EnquiryMailSendService.sendEmail(message).subscribe(function (res) {
            console.log('AppComponent Success', res);
            _this.formReset();
        }, function (error) {
            console.log('AppComponent Error', error);
            _this.formReset();
        });
    };
    /* Changing navbar color on respective scrolling positions */
    CareerComponent.prototype.doSomething = function (event) {
        if (window.pageYOffset > 675) {
            this.navBarColorService.navBarBackgroundColor.next("white");
            this.navBarColorService.logoColor.next("./assets/images/logo_black.png");
            this.navBarColorService.hamBurger.next("black");
            this.navBarColorService.currentPageName.next("career");
            this.navBarColorService.tFlagValue.next(false);
            console.log("done! navbar color changed");
        }
        else {
            this.navBarColorService.navBarBackgroundColor.next("transparent");
            this.navBarColorService.logoColor.next("./assets/images/logo_white.png");
            this.navBarColorService.hamBurger.next("white");
            this.navBarColorService.currentPageName.next("career");
            this.navBarColorService.tFlagValue.next(true);
        }
    };
    CareerComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        // this.getVal = this.applyFormPostService.insertData();
        // console.log(this.getVal);
        this.applyFormPostService.insertData().subscribe(function (data) {
            _this.testResponse = data;
            console.log("I CANT SEE DATA HERE in ts: ", _this.testResponse);
            for (var i = 0; i < Object.keys(_this.testResponse).length; i++) {
                _this.testResponse[i].requirements = (_this.testResponse[i].requirements).split("*");
            }
            _this.jobList = _this.testResponse;
        });
    };
    CareerComponent.prototype.ngAfterViewInit = function () {
    };
    CareerComponent.prototype.fileChange = function (event) {
        alert($('input[type=file]').val());
        this.filePath = URL.createObjectURL(event.target.files[0]);
        this.fileType = event.target.files[0].type;
        this.fileName = event.target.files[0].name.substr(0, event.target.files[0].name.lastIndexOf('.'));
    };
    /* Dynamically setting job details on clicked job modal */
    CareerComponent.prototype.jobDetail = function (jobId) {
        if (this.jobShow == jobId)
            this.jobShow = 0;
        else
            this.jobShow = jobId;
    };
    CareerComponent.prototype.jobDescription = function (jobId) {
        console.log(jobId);
        var job = this.jobList.find(function (o) { return o.job_id === jobId; });
        console.log(job);
        this.description = job.description;
        this.id = job.job_id;
        this.requirements = job.requirements;
        this.title = job.job_title;
        this.post = job.job_title; //Mail purpose
        this.education = job.education;
        this.experience = job.experience;
    };
    /* Calculating captcha value */
    CareerComponent.prototype.captcha = function () {
        this.x = Math.floor((Math.random() * 9) + 1);
        document.getElementById("captchaX").innerHTML = this.x;
        this.y = Math.floor((Math.random() * 9) + 1);
        document.getElementById("captchaY").innerHTML = this.y;
        this.captchaCalc = this.x + this.y;
    };
    /* Comparing captcha value to user entered value */
    CareerComponent.prototype.captchaCalcFunc = function (value) {
        console.log("Entered value:", value);
        console.log("Calculated value:", this.captchaCalc);
        this.userValue = value;
        if (value == this.captchaCalc) {
            this.accessApply = true;
        }
        else {
            this.accessApply = false;
        }
    };
    CareerComponent.prototype.formReset = function () {
        document.getElementById("applyForm").reset();
    };
    CareerComponent.prototype.formValid = function () {
        if (this.userValue == this.captchaCalc && this.rForm.valid) {
            return false;
        }
        else {
            return true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CareerComponent.prototype, "doSomething", null);
    CareerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-career',
            template: __webpack_require__("./src/app/pages/career/career.component.html"),
            styles: [__webpack_require__("./src/app/pages/career/career.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__Services_apply_form_post_service__["a" /* ApplyFormPostService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__Services_apply_form_post_service__["a" /* ApplyFormPostService */], __WEBPACK_IMPORTED_MODULE_4__Services_nav_bar_color_service__["a" /* NavBarColorService */], __WEBPACK_IMPORTED_MODULE_5__Services_enquiry_mail_send_service__["a" /* EnquiryMailSendService */]])
    ], CareerComponent);
    return CareerComponent;
}());



/***/ }),

/***/ "./src/app/pages/career/careers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return policiesList; });
/* unused harmony export jobListing */
var policiesList = [
    {
        heading: 'Fun Workplace',
        image: './assets/images/careers/fun-workspace.svg',
        list: ['Flat Job Hierarchy', 'Flexible Work Hours', 'Casual Dress Code', 'Disciplined Workspace Environment']
    }, {
        heading: 'Learning & Development',
        image: './assets/images/careers/learning-development.svg',
        list: ['Team Cohesion', 'Task Autonomy', 'Smooth Reporting', 'Extensive Training']
    }, {
        heading: 'HR Policies',
        image: './assets/images/careers/hr-polices.svg',
        list: ['Satisfactory Job Pay', 'Flexible Leave Policy', 'Monthly Paid Leaves', 'Bonus & Incentives']
    }, {
        heading: 'Motivational Top Management',
        image: './assets/images/careers/fun-workspace.svg',
        list: ['Team Appreciation', 'Individual Awards', 'Performance Rewards', 'Salary Appraisals']
    }
];
var jobListing = [{
        'job_id': 1,
        'job_title': 'Android Developer',
        'domain_name': 'android',
        'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        'requirements': ['Flat Job Hierarchy', 'Flexible Work Hours', 'Casual Dress Code', 'Disciplined Workspace Environment', 'Team Cohesion', 'Task Autonomy', 'Smooth Reporting', 'Extensive Training'],
        'education': 'B.E/B.tech',
        'experience': '0-2 Years'
    }, {
        'job_id': 2,
        'job_title': 'Senior Android Developer',
        'domain_name': 'android',
        'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        'requirements': ['Casual Dress Code', 'Disciplined Workspace Environment', 'Team Cohesion', 'Task Autonomy', 'Smooth Reporting', 'Extensive Training'],
        'education': 'MCA/B.E/B.tech or equivalent degree',
        'experience': '4-6 Years'
    }, {
        'job_id': 3,
        'job_title': 'Junior Android Developer',
        'domain_name': 'android',
        'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        'requirements': ['Casual Dress Code', 'Disciplined Workspace Environment', 'Team Cohesion', 'Task Autonomy', 'Smooth Reporting', 'Extensive Training'],
        'education': 'BCA',
        'experience': 'Freshers'
    }];



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n/*--------------- Global styles -------------------------*/\r\n\r\n\r\n.client-brands,.client-grid-title {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    text-align: center\r\n}\r\n\r\n\r\n.client-grid::after,footer:before {\r\n    content: \"\";\r\n    bottom: 0\r\n}\r\n\r\n\r\n.client-grid {\r\n    height: 400px;\r\n    overflow: hidden;\r\n    position: relative\r\n}\r\n\r\n\r\n.client-grid::after {\r\n    background-image: -webkit-gradient(linear,left top, left bottom,from(rgba(255,255,255,0)),to(#fff));\r\n    background-image: linear-gradient(rgba(255,255,255,0),#fff);\r\n    position: absolute;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 60%\r\n}\r\n\r\n\r\n.client-brands {\r\n    -webkit-transform:translateY(0);\r\n     transform:translateY(0); \r\n     -webkit-animation:client-brands 15s infinite linear; \r\n    animation:client-brands 15s infinite linear;\r\n    -ms-animation: client-brands 15s infinite linear;\r\n    -o-animation: client-brands 15s infinite linear;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 50%;\r\n    margin: 0 0 0 -675px;\r\n    opacity: .9;\r\n    width: 1350px;\r\n    will-change: transform;\r\n}\r\n\r\n\r\n.client-grid-title {\r\n    -webkit-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n    margin: 0 auto;\r\n    padding: 0 20px;\r\n    position: relative;\r\n    top: 50%;\r\n    width: 100%;\r\n    z-index: 2;\r\n    font-size: 30px;\r\n    line-height: 54px;\r\n    max-width: 1020px;\r\n    color: #567387\r\n}\r\n\r\n\r\n.client-brands .client-brands-items {\r\n    /* height: 1453px; */\r\n    padding: 10px 0;\r\n}\r\n\r\n\r\n.client-brands .client-brands-item {\r\n    position: relative;\r\n\theight: 170px;\r\n\tpadding-left: 177px;\r\n/* \r\n\theight: 161px;\r\n    padding-left: 123px; */\r\n}\r\n\r\n\r\n.privacy {\r\n    margin-top: 100px\r\n}\r\n\r\n\r\n@-webkit-keyframes client-brands {\r\n    from {\r\n        -webkit-transform: translateY(0);\r\n        transform: translateY(0)\r\n    }\r\n\r\n    to {\r\n        -webkit-transform: translateY(-50%);\r\n        transform: translateY(-50%)\r\n    }\r\n}\r\n\r\n\r\n@keyframes client-brands {\r\n    from {\r\n        -webkit-transform: translateY(0);\r\n        transform: translateY(0)\r\n    }\r\n\r\n    to {\r\n        -webkit-transform: translateY(-50%);\r\n        transform: translateY(-50%)\r\n    }\r\n}\r\n\r\n\r\n/*-------------------- Fixed get estimate button ------------------------*/\r\n\r\n\r\n#fixed-contact-button {\r\n\theight: 40px;\r\n\twidth: 160px;\r\n\tdisplay: table;\r\n\tbackground-image: linear-gradient(135deg, #8885d4 , #43C6AC  50%);\r\n\tcolor: white;\r\n\tcursor: pointer;\r\n\tposition: fixed;\r\n\tz-index: 10;\r\n\tborder: 1px solid transparent;\r\n\tborder-radius:0px 0px 20px 20px;\r\n\ttop: 48%;\r\n\tright: -65px;\r\n\ttext-align: center;\r\n\tvertical-align: middle;\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg);\r\n}\r\n\r\n\r\n#fixed-contact-button h6 {\r\n\tline-height: 38px;\r\n\tmargin-bottom: 0px;\r\n}\r\n\r\n\r\n/*-------------------- Sections after scrolify --------------------*/\r\n\r\n\r\n.heading {\r\n\ttext-align: center;\r\n\tpadding-top: 15px;\r\n\tpadding-bottom: 15px;\r\n\tfont-family: 'Alegreya Sans SC', sans-serif;\r\n}\r\n\r\n\r\n.heading span {\r\n\tcolor: #06d876;\r\n\tpadding: 10px;\r\n}\r\n\r\n\r\n/*----------- 135dg Button -----------------*/\r\n\r\n\r\n/*----------------- section five --------------*/\r\n\r\n\r\n.container-fluid-custom-100px{\r\n\tpadding: 0px 100px 0px 100px;\r\n  }\r\n\r\n\r\n#section-five{\r\n\tposition: relative;\r\n  }\r\n\r\n\r\n#section-five #main-heading {\r\n\t\tpadding-top: 100px;\r\n\t\tmargin: 0 auto;\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\r\n#section-five #main-heading h1{\r\n\t\tfont-size: 2em;\r\n\t\tfont-family: 'Nunito', sans-serif;\r\n\t\tcolor: #3f4c56;\r\n\t\tfont-weight: 600;\r\n\t}\r\n\r\n\r\n#section-five #main-heading p{\r\n\t\tfont-size: 1.3em;\r\n\t\tfont-family: 'Nunito', sans-serif;\r\n\t\tmargin-top: 0px;\r\n\t\tcolor: #899095;\r\n\r\n\t}\r\n\r\n\r\n#section-five .verticals-infographic{\r\n\t\tposition: absolute;\r\n\t\tbottom: 10px;\r\n\t\twidth: 56%;\r\n\t\tleft: 22%;\r\n\t}\r\n\r\n\r\n.ind-wrap{\r\n\t\tcolor: #eee;\r\n\t\t-webkit-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.16), 0 15px 12px rgba(0, 0, 0, 0.23);\r\n\t\t        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.16), 0 15px 12px rgba(0, 0, 0, 0.23);\r\n\t\toverflow: hidden;\r\n\t}\r\n\r\n\r\n.ind-box{\r\n\t\tpadding: 30px 30px 20px 20px;\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\r\n.ind-box ul{\r\n\t\tlist-style-type: none;\r\n\t\tmargin: 0;\r\n\t\tpadding: 0;\r\n\t}\r\n\r\n\r\n.ind-box:after{\r\n\t\tposition: absolute;\r\n\t\ttop: 45%;\r\n\t\tright: -18px;\r\n\t\tz-index: 1;\r\n\t\tcontent: \"\";\r\n\t\tborder-top: 20px solid transparent;\r\n\t\tborder-bottom: 20px solid transparent;\r\n\t\tborder-left: 20px solid #117ec3;\r\n\t\t-webkit-transition: all .3s ease-in-out;\r\n\t\ttransition: all .3s ease-in-out;\r\n\t}\r\n\r\n\r\n.ind-icon{\r\n\t\tpadding-bottom: 20px;\r\n\t\t-webkit-transition: all .3s ease-in-out;\r\n\t\ttransition: all .3s ease-in-out;\r\n\t}\r\n\r\n\r\n.ind-box:hover .ind-icon{\r\n\t-webkit-transform-origin: center;\r\n\t        transform-origin: center;\r\n\t-webkit-transform: scale(1.1);\r\n\t        transform: scale(1.1);\r\n\t}\r\n\r\n\r\n.ind-box:nth-child(2):after{\r\n\t\tborder-left: 20px solid #03A9E0;\r\n\t}\r\n\r\n\r\n.ind-box:nth-child(3):after{\r\n\t\tborder-left: 20px solid #4AC3D2;\r\n\t}\r\n\r\n\r\n.ind-box:nth-child(4):after{\r\n\t\tborder-left: 20px solid #47BCA0;\r\n\t}\r\n\r\n\r\n.ind-box:nth-child(5):after{\r\n\t\tborder-left: 20px solid #8EC96E;\r\n\t}\r\n\r\n\r\n.ind-box:nth-child(6):after{\r\n\t\tborder-left: 0px;\r\n\t}\r\n\r\n\r\n/* #box1,\r\n\t#box2,\r\n\t#box3 {\r\n\tfloat: left;\r\n\twidth: 33.33%;\r\n\theight: 100%;\r\n\t} */\r\n\r\n\r\n#box1 {\r\n\tbackground: #2280C3;\r\n\t}\r\n\r\n\r\n#box2 {\r\n\tbackground: #03A9E0;\r\n\t}\r\n\r\n\r\n#box3 {\r\n\tbackground: #4AC3D2;\r\n\t}\r\n\r\n\r\n#box4 {\r\n\tbackground: #47BCA0;\r\n\t}\r\n\r\n\r\n#box5 {\r\n\tbackground: #8EC96E;\r\n\t}\r\n\r\n\r\n#box6 {\r\n\tbackground: #03A9E0;\r\n\t}\r\n\r\n\r\n/* section 5 ends */\r\n\r\n\r\n#section-six {\r\n\tbackground: #0f0c29; /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\r\n\tbackground: -webkit-gradient(linear, left top, right top, color-stop(1%, #0f0c29),color-stop(50%, #302b63),to(#0f0c29));\r\n\tbackground: linear-gradient(to right, #0f0c29 1%,#302b63 50%,#0f0c29 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0f0c29', endColorstr='#0f0c29',GradientType=1 ); /* IE6-9 */\r\n\twidth: 100%;\r\n\tcolor: rgb(235, 235, 235);\r\n\ttext-align: center;\r\n\tmargin-bottom: 0px;\r\n\tpadding-top: 80px;\r\n\tpadding-bottom: 75px;\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\tz-index: 1;\r\n}\r\n\r\n\r\n#section-six .bg-text-w{\r\n\tposition: absolute;\r\n    color: #15132c;\r\n    font-size: 6000%;\r\n    line-height: 328px;\r\n    font-family: \"Nunito\";\r\n    padding: 0px -200px 0px -200px;\r\n    margin-left: -528px;\r\n\tmargin-right: -400px;\r\n\topacity: 0.25;\r\n}\r\n\r\n\r\n#section-six-inner{\r\n\tposition: relative;\r\n}\r\n\r\n\r\n#section-six h1 {\r\n\tfont-family: 'Nunito', sans-serif;\r\n\tfont-weight: 400;\r\n\tfont-size: 2em;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n\r\n#section-six h4 {\r\n\tmargin-bottom: 0px;\r\n\tfont-size: 1.3em;\r\n\tfont-weight: 300;\r\n\tfont-family: 'Nunito', sans-serif;\r\n\tmargin-bottom: 25px;\r\n    color: #d1d1d1;\r\n}\r\n\r\n\r\n#section-six button {\r\n\t/* margin: 50px; */\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n\r\n/* setion 6 styles */\r\n\r\n\r\n#section-five{\r\n\tpadding-bottom: 100px;\r\n\tbackground : #e4e8f3;;\r\n}\r\n\r\n\r\n/* section 6 style ends */\r\n\r\n\r\n#section-seven {\r\n\tbackground-color: #ffffff;\r\n}\r\n\r\n\r\n#section-seven .client-logos {\r\n\tpadding: 20px;\r\n}\r\n\r\n\r\n#section-seven .client-logo {\r\n\twidth: 200px;\r\n\theight: 100px;\r\n\t\r\n}\r\n\r\n\r\n#section-seven img {\r\n\tborder: 1px solid white;\r\n\tborder-radius: 100px;\r\n\t-webkit-box-shadow: 0 10px 20px rgba(117, 115, 115, 0.25), 0 7px 7px rgba(82, 76, 76, 0.22);\r\n\t        box-shadow: 0 10px 20px rgba(117, 115, 115, 0.25), 0 7px 7px rgba(82, 76, 76, 0.22);\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n\r\nngx-carousel {\r\n\twidth: 950px;\r\n}\r\n\r\n\r\n.item {\r\n\twidth: 26% !important;\r\n\tpointer-events: none;\r\n}\r\n\r\n\r\n#section-seven .client-logos button {\r\n\tdisplay: none !important;\r\n}\r\n\r\n\r\n.clients {\r\n    background: #fafafa;\r\n}\r\n\r\n\r\n.client-place {\r\n    padding: 30px;\r\n}\r\n\r\n\r\n.clients .client-image {\r\n    height: 100px;\r\n    -webkit-filter: grayscale();\r\n            filter: grayscale();\r\n    opacity: 0.7;\r\n    width: 150px;\r\n    margin: 0 auto;\r\n    background-position: center;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n\r\n.client-place .client-image:hover {\r\n    -webkit-filter: grayscale(0%) !important;\r\n            filter: grayscale(0%) !important;\r\n    opacity: 1;\r\n    cursor: auto;\r\n}\r\n\r\n\r\n#mobile-view{\r\n\tdisplay: none;\r\n}\r\n\r\n\r\n/*--------------------------------------------------\r\n\tMedia Queries\r\n----------------------------------------------------*/\r\n\r\n\r\n/*-------------------Desktop Screens---------------------------*/\r\n\r\n\r\n@media screen and (min-width: 1024px){\r\n  \r\n\t.container-fluid-custom-200px {\r\n\t\tpadding: 0px 200px 0px 200px;\r\n\t}\r\n\t\r\n}\r\n\r\n\r\n/*----------------------Tablets Portrait or Landscape----------------*/\r\n\r\n\r\n@media screen and (min-device-width: 768px) and (max-device-width: 1024px){\r\n  \r\n  \t.container-fluid-custom-200px {\r\n\t\tpadding: 0px 130px 0px 130px;\r\n\t}\r\n\r\n\tngx-carousel {\r\n\t\twidth: 100% !important;\r\n\t}\r\n\r\n\tngx-item {\r\n\t\tmargin: 20px !important;\r\n\t}\r\n\r\n\r\n}\r\n\r\n\r\n/*----------------------Mobile Phones Portrait---------------------------------*/\r\n\r\n\r\n@media screen and (max-device-width: 480px) and (orientation: portrait){\r\n\t#section-five{\r\n\t\theight: auto;\r\n\t\tpadding: 0px 20px 40px 20px;\r\n\t\tmin-height: 0;\r\n\t}\r\n\t\r\n\t#section-five  .container-fluid-custom-100px{\r\n\tpadding: 0px 20px 0px 20px;\r\n\t}\r\n\r\n\t#section-five #main-heading{\r\n\t\tpadding-top: 30px;\r\n\t}\r\n\t#section-five #main-heading h1{\r\n\t\tfont-size: 2em;\r\n\t\tcolor: #3f4c56;\r\n\t\tfont-weight: 600;\r\n\t}\r\n\r\n\t#section-five #main-heading p{\r\n\t\tfont-size: 1em;\r\n\t\tmargin-top: 0px;\r\n\t\tcolor: #899095;\r\n\r\n\t}\r\n\r\n\t#section-five .verticals-infographic{\r\n\t\t/* src: url(assets/images/cassata-mob.svg); */\r\n\t\tbottom: 10px;\r\n\t\twidth: 80%;\r\n\t\tposition: relative;\r\n\t\tpadding-top: 50px;\r\n\t\tleft: 10%;\r\n\t}\r\n\r\n\t#desktop-view{\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t#mobile-view{\r\n\t\tdisplay: block;\r\n\t\tbottom: 10px;\r\n\t\twidth: 80%;\r\n\t\tleft: 10%;\r\n\t}\r\n\r\n\t.container-fluid-custom-200px {\r\n\t\tpadding-left: 20px;\r\n\t\tpadding-right: 20px;\r\n\t}\r\n\r\n\t#section-six button {\r\n\t\t/* margin: 25px; */\r\n\t\tmargin-bottom: -25px;\r\n\t}\r\n\t\r\n\t#section-six h4 {\r\n\t\tfont-size: 1em;\r\n\t\tfont-weight: 300;\r\n\t\tcolor: #d1d1d1;\r\n    }\r\n\r\n\t#section-seven h1 {\r\n\t\tfont-size: 2em;\r\n\t}\r\n\r\n\tngx-carousel {\r\n\t\twidth: 100% !important;\r\n\t}\r\n\r\n\t.item {\r\n\t\tmargin-right: 48% !important;\r\n\t\tpadding: 25% !important;\r\n\t}\r\n\r\n}\r\n\r\n\r\n/* \r\nAdded for scrollify section */\r\n\r\n\r\n/*-----------Texts on slides----------------------*/\r\n\r\n\r\n.section .section-inner .text {\r\n\tpadding-top: 15%;\r\n\tcolor: white;\r\n}\r\n\r\n\r\n.section .section-inner .text h1 {\r\n\tfont-size: 1.5em;\r\n}\r\n\r\n\r\n#scrollDisabled::-webkit-scrollbar { \r\n    display: none !important;\r\n}\r\n\r\n\r\n/*--------------------------------------------------\r\n\tMedia Queries\r\n----------------------------------------------------*/\r\n\r\n\r\n/*-------------------Desktop Screens---------------------------*/\r\n\r\n\r\n@media screen and (min-width: 480px){\r\n  \r\n\t.container-fluid-custom-200px {\r\n\t\tpadding: 0px 200px 0px 200px;\r\n\t}\r\n\r\n\t/*---------------------------------------------\r\n\tScrollify animation slides\r\n-----------------------------------------------*/\r\n\r\n.section {\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\toverflow: hidden;\r\n\tposition: relative;\r\n    z-index: 5;\r\n}\r\n\r\n.section-fixed {\r\n    z-index: 1;\r\n}\r\n\r\n.section-fixed .section-inner {\r\n    position: fixed;\r\n    z-index: 2;\r\n    top: 0;\r\n    left: 0; \r\n}\r\n\r\n.section-inner::after {\r\nposition: absolute;\r\ntop: 0;\r\nleft: 0;\r\nbottom: 0;\r\nright: 0;\r\nbackground: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.72)), to(rgba(65, 65, 65, 0)));\r\nbackground: linear-gradient(to right, rgba(0, 0, 0, 0.72) 0%, rgba(65, 65, 65, 0) 100%);\r\ncontent: '';\r\n}\r\n\r\n#first {\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\tbackground: url('r1.1455f4504db4febe3a6b.jpg') center / cover no-repeat;\r\n\t/* -webkit-transform: scale(1,1);\r\n\t-moz-transform: scale(1,1);\r\n\ttransform: scale(1,1);\r\n\t-webkit-transition: cubic-bezier(0.165, 0.84, 0.44, 1) 1s !important;\r\n\t-moz-transition: cubic-bezier(0.165, 0.84, 0.44, 1) 1s !important;\r\n\ttransition: cubic-bezier(0.165, 0.84, 0.44, 1) 1s !important; */\r\n}\r\n\r\n#second {\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\tbackground: url('r3.99136688c6c2fe285201.jpg') center / cover no-repeat;\r\n\t/* -webkit-transform: scale(1.5,1.5);\r\n\t-moz-transform: scale(1.5,1.5);\r\n\ttransform: scale(1.5,1.5);\r\n\t-webkit-transition: cubic-bezier(0.165, 0.84, 0.44, 1) 1s !important;\r\n\t-moz-transition: cubic-bezier(0.165, 0.84, 0.44, 1) 1s !important;\r\n\ttransition: cubic-bezier(0.165, 0.84, 0.44, 1) 1s !important; */\r\n}\r\n\r\n#third {\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\tbackground: url('r2.c89d5d3a49360e6557e5.jpg') center / cover no-repeat;\r\n\t/* -webkit-transition: scale(1.5,1.5);\r\n\t-moz-transition: scale(1.5,1.5);\r\n\ttransform: scale(1.5,1.5);\r\n\t-webkit-transition: cubic-bezier(0.165, 0.84, 0.44, 1) 1s !important;\r\n\t-moz-transition: cubic-bezier(0.165, 0.84, 0.44, 1) 1s !important;\r\n\ttransition: cubic-bezier(0.165, 0.84, 0.44, 1) 1s !important; */\r\n}\r\n\t.section .section-inner .text {\r\n\t\tpadding-top: 15%;\r\n\t\tposition: relative;\r\n\t\tz-index: 99;\r\n\t}\r\n\r\n\t.section .section-inner .text h3 {\r\n\t\tfont-size: 1.5em;\r\n\t\tfont-family: 'Nunito', sans-serif;\r\n\t\tfont-weight: 300;\r\n\t\tfont-style: normal;\r\n\t}\r\n\r\n\t.section .section-inner .text h1 {\r\n\t\tfont-size: 1.5em;\r\n\t\tfont-family: 'Nunito', sans-serif;\r\n\t\tfont-weight: 600;\r\n\t\tfont-style: normal;\r\n\t\twidth: 36%;\r\n    }\r\n    \r\n}\r\n\r\n\r\n/*----------------------Tablets Portrait or Landscape----------------*/\r\n\r\n\r\n@media screen and (min-device-width: 768px) and (max-device-width: 1024px){\r\n\r\n    .container-fluid-custom-200px {\r\n      padding: 0px 130px 0px 130px;\r\n    }\r\n\r\n}\r\n\r\n\r\n/*----------------------Mobile Phones Portrait---------------------------------*/\r\n\r\n\r\n@media screen and (max-device-width: 480px) and (orientation: portrait){\r\n\r\n\r\n\t/*---------------------------------------------\r\n\tScrollify animation slides\r\n-----------------------------------------------*/\r\n\r\n.section {\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\toverflow: hidden;\r\n\t\r\n}\r\n\r\n/* .section-fixed {\r\n   \r\n}\r\n\r\n.section-fixed .section-inner {\r\n    \r\n} */\r\n\r\n#first {\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\tbackground: url('r1.1455f4504db4febe3a6b.jpg') center / cover no-repeat;\t\r\n}\r\n\r\n#second {\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\tbackground: url('r3.99136688c6c2fe285201.jpg') center / cover no-repeat;\r\n}\r\n\r\n#third {\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\tbackground: url('r2.c89d5d3a49360e6557e5.jpg') center / cover no-repeat;\r\n}\r\n\r\n.section-inner:before {\r\n\tcontent: '';\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    height: 100%;\r\n\tbackground-image: -webkit-gradient(linear, right top, left top, from(#383838), color-stop(50%, #1e1e1e), to(#000000));\r\n\tbackground-image: linear-gradient(270deg, #383838 0%, #1e1e1e 50%, #000000 100%);\r\n\topacity: 0.65;\r\n}\r\n\r\n\t/*-----------Texts on slides----------------------*/\r\n\r\n\t.section .section-inner .text {\r\n\t\tpadding: 60% 0px 0px 10%;\r\n\t\tcolor: white;\r\n\t\tposition: relative;\r\n\t}\r\n\r\n\t.section .section-inner .text h3 {\r\n\t\twidth:80%;\r\n\t\tfont-size: 1.2em;\r\n\t}\r\n\r\n\t.section .section-inner .text h1 {\r\n\t\twidth:80%;\r\n\t\tfont-weight: 600;\r\n\t\tfont-size: 1.2em;\t\t\r\n\t}\r\n\r\n\t#scrollDisabled::-webkit-scrollbar { \r\n\t\tdisplay: none !important;\r\n\t}\r\n\t\r\n    \r\n\t.client-brands .client-brands-item {\r\n\t\tpadding-left: 236px !important;\r\n\t}\r\n\t.client-brands {\r\n\t\t-webkit-animation:client-brands 10s infinite linear !important; \r\n\t   animation:client-brands 10s infinite linear !important;\r\n\t   -ms-animation: client-brands 10s infinite linear !important;\r\n\t   -o-animation: client-brands 10s infinite linear !important;\r\n   }\r\n}\r\n\r\n\r\n@media screen and (max-device-width: 1024px){\r\n\t.client-brands .client-brands-item {\r\n\t\tpadding-left: 236px !important;\r\n\t}\r\n\t.client-brands {\r\n\t\t-webkit-animation:client-brands 10s infinite linear !important; \r\n\t   animation:client-brands 10s infinite linear !important;\r\n\t   -ms-animation: client-brands 10s infinite linear !important;\r\n\t   -o-animation: client-brands 10s infinite linear !important;\r\n   }\r\n\t\r\n}\r\n\r\n\r\n@media  screen and (min-device-width: 768px) and (max-device-width: 768px) { \r\n\t.client-brands .client-brands-item {\r\n\t\tpadding-left: 150px !important;\r\n\t}\r\n}"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background-container\" id=\"fullpage\">\r\n\r\n\t<!-- Scrolling section -->\r\n\t<section class=\"section\" id=\"section-one\">\r\n\t\t<div class=\"section-inner\" id=\"first\">\r\n\t\t\t<div class=\"container-fluid-custom-200px text\">\r\n\t\t\t\t<h3>CREATE SHARED VISION</h3>\r\n\t\t\t\t<h1>Create shared vision with Technologies that are causing disruptive changes in digital world. We share the same vision\r\n\t\t\t\t\twith our partners.\r\n\t\t\t\t</h1>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\t<section class=\"section\" id=\"section-two\">\r\n\t\t<div class=\"section-inner\" id=\"second\">\r\n\t\t\t<div class=\"container-fluid-custom-200px text\">\r\n\t\t\t\t<h3>CREATIVITY FOR BUSINESS RESULTS</h3>\r\n\t\t\t\t<h1>Business is changing and you can thank creativity for that. The truth is they produce amazing results together and we\r\n\t\t\t\t\tare creative to support your business.</h1>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\t<section class=\"section\" id=\"section-three\">\r\n\t\t<div class=\"section-inner\" id=\"third\">\r\n\t\t\t<div class=\"container-fluid-custom-200px text\">\r\n\t\t\t\t<h3>DIGITAL TRANSFORMATION</h3>\r\n\t\t\t\t<h1>We helps organisations to accelerate ‘Digital Transformation’ using disruptive technologies in Web, Mobile, Analytics\r\n\t\t\t\t\tand Cloud.\r\n\t\t\t\t</h1>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\r\n\t<!-- Below scrolling section -->\r\n\t<div class=\"section fp-auto-height fp-normal-scroll\">\r\n\t\t<app-menu-section></app-menu-section>\r\n\t</div>\r\n\t<!-- end section five -->\r\n\t<!-- section 6 for showing verticals -->\r\n\t<div class=\"fp-normal-scroll\" id=\"section-five\">\r\n\t\t<div class=\"container-fluid-custom-100px\">\r\n\t\t\t<div id=\"main-heading\">\r\n\t\t\t\t<h1>Industries we serve</h1>\r\n\t\t\t\t<p>Wizroots Technologies have the best engineering team to create future ready solutions to accelerate digital transformation in a converging world.</p>\r\n\t\t\t</div>\r\n\t\t\t<!-- <img class=\"verticals-infographic\" id=\"desktop-view\" src=\"./assets/images/cassata.svg\" alt=\"verticals\">\r\n\t\t\t<img class=\"verticals-infographic\" id=\"mobile-view\" src=\"./assets/images/cassata-mob.svg\" alt=\"verticals\"> -->\r\n\t\t\t<div class=\"row ind-wrap\">\r\n\t\t\t\t<div class=\"col-lg-2 col-md-4 ind-box\" id=\"box1\">\r\n\t\t\t\t\t<div class=\"ind-icon\">\r\n\t\t\t\t\t\t<img src=\"assets/images/home/muscle.png\" width=\"80px\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<h2>Healthcare</h2>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li>MedTech</li>\r\n\t\t\t\t\t\t<li>Fitness</li>\r\n\t\t\t\t\t\t<li>Wellness App</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-2 col-md-4 ind-box\" id=\"box2\">\r\n\t\t\t\t\t<div class=\"ind-icon\">\r\n\t\t\t\t\t\t<img src=\"assets/images/home/books.png\" width=\"80px\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<h2>Education</h2>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li>EdTech</li>\r\n\t\t\t\t\t\t<li>Learning Management System (LMS)</li>\r\n\t\t\t\t\t\t<li>Digital Learning</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-2 col-md-4 ind-box\" id=\"box3\">\r\n\t\t\t\t\t<div class=\"ind-icon\">\r\n\t\t\t\t\t\t<img src=\"assets/images/home/shirt.png\" width=\"80px\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<h2>Textile</h2>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li>Manufacturing</li>\r\n\t\t\t\t\t\t<li>Process Automation</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-2 col-md-4 ind-box\" id=\"box4\">\r\n\t\t\t\t\t<div class=\"ind-icon\">\r\n\t\t\t\t\t\t<img src=\"assets/images/home/shop.png\" width=\"80px\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<h2>Consumer</h2>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li>Retail</li>\r\n\t\t\t\t\t\t<li>E Commerce</li>\r\n\t\t\t\t\t\t<li>FMCC</li>\r\n\t\t\t\t\t\t<li>Farming</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-2 col-md-4 ind-box\" id=\"box5\">\r\n\t\t\t\t\t<div class=\"ind-icon\">\r\n\t\t\t\t\t\t<img src=\"assets/images/home/online.png\" width=\"80px\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<h2>Food & Beverages</h2>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li>Hospitality</li>\r\n\t\t\t\t\t\t<li>Food Ordering</li>\r\n\t\t\t\t\t\t<li>Kitchen/Hotel Management</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-2 col-md-4 ind-box\" id=\"box6\">\r\n\t\t\t\t\t<div class=\"ind-icon\">\r\n\t\t\t\t\t\t<img src=\"assets/images/home/bars.png\" width=\"80px\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<h2>Finance</h2>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li>FinTech</li>\r\n\t\t\t\t\t\t<li>Banking</li>\r\n\t\t\t\t\t\t<li>Risk Management</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- section 6 end -->\r\n\t<div id=\"section-six\" class=\"fp-normal-scroll container-fluid-custom-200px\">\r\n\t\t<span class=\"bg-text-w\">W</span>\r\n\t\t<div id=\"section-six-inner\">\r\n\t\t\t<h1>Interested in working together?</h1>\r\n\t\t\t<h4> Wizroots Technologies helps organisations to accelerate ‘Digital Transformation’ using disruptive technologies in Web,\r\n\t\t\t\tMobile, Analytics and Cloud </h4>\r\n\t\t\t<button class=\"button_sliding_bg\" data-toggle=\"modal\" data-target=\"#contactModal\" (click)=\"contactModalService.captcha()\">\r\n\t\t\t\t<p>LETS DISCUSS OUR PROJECT</p>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- <div id=\"section-seven\" class=\"fp-normal-scroll hidden-md-down clients\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-2 client-place\" *ngFor=\"let clients of clientList\">\r\n\t\t\t\t\t<div class=\"client-image\" [style.background-image]=\"'url('+clients.image+')'\"> -->\r\n\r\n\r\n\t\r\n\r\n\r\n\t\t<!-- <div id=\"section-seven\" class=\"clients\">\r\n\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-2 client-place\" *ngFor=\"let clients of clientList\">\r\n\t\t\t\t\t\t\t<div class=\"client-image\" [style.background-image]=\"'url('+clients.image+')'\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div> -->\r\n\t\t\r\n\r\n\r\n\t\t\t\r\n\t\t<div class=\"container fp-normal-scroll\">\r\n\t\t\t<div class=\"client-grid\" id=\"work\">\r\n\t\t\t\t<div class=\"client-brands\">\r\n\t\t\t\t\t  <div class=\"client-brands-items\">\r\n\t\t\t\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t\t    <div class=\"row\">\r\n\t\t\t\t\t\t\t<div *ngFor=\"let clients of clientList\">\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 client-brands-item\">\r\n\t\t\t\t\t\t\t\t\t\t<img style=\"width: 120px;\" src=\"{{clients.image}}\" alt=\"{{clients.alt}}\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <div class=\"client-brands-items\">\r\n\t\t\t\t\t\t\t<div class=\"container\"> \r\n\t\t\t\t\t\t\t <div class=\"row\"> \r\n\t\t\t\t\t\t\t<div *ngFor=\"let clients of clientList\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 client-brands-item\">\r\n\t\t\t\t\t\t\t\t\t\t<img style=\"width: 120px;\" src=\"{{clients.image}}\" alt=\"{{clients.alt}}\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<h1 style=\"top: 325px;\" class=\"client-grid-title\">We build relationships and awesome products.</h1>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t<section class=\"fp-normal-scroll\">\r\n\t\t<app-footer></app-footer>\r\n\t</section>\r\n\r\n\r\n</div>\r\n\r\n\r\n<!--Get Estimate button blocked-->\r\n<!--<div id=\"fixed-contact-button\" data-toggle=\"modal\" data-target=\"#contactModal\" (click)=\"captcha()\">\r\n        <h6>GET ESTIMATE</h6>\r\n</div>-->\r\n\r\n<!-- Modal contact form -->\r\n<div class=\"modal animated zoomIn\" id=\"contactModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n\t<div class=\"modal-dialog\" role=\"document\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Contact Us</h5>\r\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t<span aria-hidden=\"true\" #closeMailerModal>&times;</span>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<form (submit)=\"contactModalService.sendEmail(contactModalService.model)\" #myForm=\"ngForm\" (keyup)=\"onKey($event)\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"name\">Name</label>\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" required name=\"name\" placeholder=\"Your Name\" required pattern=\"[a-zA-Z]+\" [(ngModel)]=\"contactModalService.model.name\"\r\n\t\t\t\t\t\t #name=\"ngModel\">\r\n\t\t\t\t\t\t<div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\t<div [hidden]=\"!name.hasError('required')\">Name is required</div>\r\n\t\t\t\t\t\t\t<div [hidden]=\"!name.hasError('pattern')\">Only alphabetsallowed</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"email\">Email</label>\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" required name=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\r\n\t\t\t\t\t\t placeholder=\"Your Email\" [(ngModel)]=\"contactModalService.model.email\" #email=\"ngModel\">\r\n\t\t\t\t\t\t<div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\t<div [hidden]=\"!email.hasError('required')\">Email is required</div>\r\n\t\t\t\t\t\t\t<div [hidden]=\"!email.hasError('pattern')\">Email format should be\r\n\t\t\t\t\t\t\t\t<small>\r\n\t\t\t\t\t\t\t\t\t<b>joe@abc.com</b>\r\n\t\t\t\t\t\t\t\t</small>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"message\">Message</label>\r\n\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"3\" name=\"message\" [(ngModel)]=\"contactModalService.model.message\" #message=\"ngModel\"></textarea>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<div id=\"captcha\">\r\n\t\t\t\t\t\t\t<label>Recaptcha:</label> &nbsp; &nbsp; &nbsp; &nbsp;\r\n\t\t\t\t\t\t\t<span id=\"captchaaX\"></span> &nbsp; + &nbsp;\r\n\t\t\t\t\t\t\t<span id=\"captchaaY\"></span> =\r\n\t\t\t\t\t\t\t<input name=\"captchaAnswer\" required  type=\"text\" class=\"form-control\" #captchaAnswer (keyup)=\"contactModalService.captchaCalcFunc(captchaAnswer.value)\"> &nbsp; &nbsp;\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"contactModalService.formValid()\">Send Email</button>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- end modal contact form demo -->\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* unused harmony export User */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_nav_bar_color_service__ = __webpack_require__("./src/app/Services/nav-bar-color.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_contact_modal_service__ = __webpack_require__("./src/app/Services/contact-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home__ = __webpack_require__("./src/app/pages/home/home.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { EnquiryMailSendService, IMessage } from '../../Services/enquiry-mail-send.service';


var HomeComponent = (function () {
    // model = new User('', '', '', '');
    function HomeComponent(navBarColorService, contactModalService) {
        this.navBarColorService = navBarColorService;
        this.contactModalService = contactModalService;
        this.clientList = __WEBPACK_IMPORTED_MODULE_3__home__["a" /* clients */];
    }
    // sendEmail(message: IMessage) {
    // 	// console.log(message);
    // 	this.EnquiryMailSendService.sendEmail(message).subscribe(res => {
    // 		console.log('AppComponent Success', res);
    // 		this.closeMailerModal.nativeElement.click();
    // 		this.myForm.reset();
    // 	}, error => {
    // 		console.log('AppComponent Error', error);
    // 		this.closeMailerModal.nativeElement.click();
    // 	})
    // }
    /* Listening for scroll events and changing navbar color based on respecting window.pageYOffset(vertical) position */
    HomeComponent.prototype.doSomething = function (event) {
        var threeSectionTotalHeight = window.innerHeight * 3;
        if (window.pageYOffset < threeSectionTotalHeight) {
            this.navBarColorService.navBarBackgroundColor.next("transparent");
            this.navBarColorService.logoColor.next("./assets/images/logo_white.png");
            this.navBarColorService.hamBurger.next("white");
            this.navBarColorService.currentPageName.next("home");
            this.navBarColorService.tFlagValue.next(true);
        }
        else {
            this.navBarColorService.navBarBackgroundColor.next("#19191E");
            this.navBarColorService.logoColor.next("./assets/images/logo_white.png");
            this.navBarColorService.hamBurger.next("white");
            this.navBarColorService.currentPageName.next("home");
            this.navBarColorService.tFlagValue.next(false);
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0); // scrolls window to top on this component initialization
        this.navBarColorService.tFlagValue.next(true);
        this.myGroup = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            captcha: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]()
        });
        $(document).ready(function () {
            $('#fullpage').fullpage({
                verticalCentered: false,
                hybrid: true,
                dragAndMove: true,
                responsiveWidth: 480,
                css3: true,
                scrollingSpeed: 700,
                fitToSectionDelay: 100
            });
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        // destroying fullpage functionality
        if (typeof $.fn.fullpage.destroy == 'function') {
            $.fn.fullpage.destroy('all');
        }
    };
    /* Calculating captcha value */
    // captcha() {
    // 	this.x = Math.floor((Math.random() * 9) + 1);
    // 	document.getElementById("captchaaX").innerHTML = this.x;
    // 	this.y = Math.floor((Math.random() * 9) + 1);
    // 	document.getElementById("captchaaY").innerHTML = this.y;
    // 	this.captchaCalc = this.x + this.y;
    // }
    /* Comparing captcha value to user entered value */
    // captchaCalcFunc(value: string) {
    // 	console.log("Entered value:", value);
    // 	console.log("Calculated value:", this.captchaCalc);
    // 	this.userValue = value;
    // 	if (value == this.captchaCalc) {
    // 		this.accessApply = true;
    // 	}
    // 	else {
    // 		this.accessApply = false;
    // 	}
    // }
    // formValid() {
    // 	if (this.userValue == this.captchaCalc && this.myForm.valid) {
    // 		return false;
    // 	}
    // 	else {
    // 		return true;
    // 	}
    // }
    //added this code to check form validity (should be added in all components where contact modal is there)
    HomeComponent.prototype.onKey = function (event) {
        console.log("checker Called");
        if (this.myForm.valid) {
            this.contactModalService.formValidity = true;
        }
        else {
            this.contactModalService.formValidity = false;
        }
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* NgForm */])
    ], HomeComponent.prototype, "myForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "doSomething", null);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_nav_bar_color_service__["a" /* NavBarColorService */], __WEBPACK_IMPORTED_MODULE_2__Services_contact_modal_service__["a" /* ContactModalService */]])
    ], HomeComponent);
    return HomeComponent;
}());

// making object containing contact details for get estimate
var User = (function () {
    function User(name, email, message, captcha) {
        this.name = name;
        this.email = email;
        this.message = message;
        this.captcha = captcha;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/pages/home/home.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export banner */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return services; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clients; });
var banner = [
    {
        image: "/images/1.webp",
        title: "Shared Vision",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text."
    }, {
        image: "/images/2.webp",
        title: "Creativity for business results",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text."
    }, {
        image: "/images/3.webp",
        title: "Digital Transformation",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text."
    }
];
var services = [
    {
        url: "",
        category: 'Customized Solutions',
        content: 'The one point stop to address all your customized software solutions from cloud ,wearables, mobile and web applications',
        image: "/images/services1.png",
        subCategory: [
            {
                url: "/ui-ux",
                name: "UI & UX"
            }, {
                url: "",
                name: "Startup"
            }, {
                url: "/web-applications",
                name: "Web Applications"
            }, {
                url: "/mobile-development",
                name: "Mobile Applications",
                nameForFunction: "navBackground('mobile-development')"
            }, {
                url: "",
                name: "Product Development"
            }
        ]
    }, {
        url: "",
        category: 'Enterprise Solutions',
        content: 'We develop right solutions for enterprise to prepare them for next generation of digital transformation.',
        image: "/images/services2.png",
        subCategory: [
            {
                url: "",
                name: "E-commerce"
            }, {
                url: "",
                name: "AI & Analytics"
            }, {
                url: "",
                name: "Internet Of Things"
            }, {
                url: "/ERP",
                name: "Enterprise Resource Planning - (ERP)"
            }
        ]
    }, {
        url: "",
        category: 'Products',
        content: 'Our innovative and adaptive digital learning solutions for audience ranging from K-12 to enterprises.',
        image: "/images/services3.png",
        subCategory: [
            {
                external: true,
                url: "https://elpfa.co",
                name: "ELPFA"
            }, {
                external: true,
                url: "https://learnroots.com",
                name: "Learnroots"
            }
        ]
    }
];
var clients = [
    {
        image: "./assets/images/clients/adobe.jpg",
        alt: "Adobe View"
    },
    {
        image: "./assets/images/clients/snapp.jpg",
        alt: "Snapp"
    },
    {
        image: "./assets/images/clients/wayol.jpg",
        alt: "Wayol"
    },
    {
        image: "./assets/images/clients/fitcarte.jpg",
        alt: "Fitcarte"
    },
    {
        image: "./assets/images/clients/habba.jpg",
        alt: "Habba"
    },
    {
        image: "./assets/images/clients/rangde.jpg",
        alt: "Rangde"
    },
    {
        image: "./assets/images/clients/community-farm.jpg",
        alt: "Community Farm"
    },
    {
        image: "./assets/images/clients/first-view.jpg",
        alt: "First View"
    },
    {
        image: "./assets/images/clients/ryzklytix.jpg",
        alt: "Ryzklytix"
    },
    {
        image: "./assets/images/clients/skill-tom.jpg",
        alt: "Skill Tom"
    },
    {
        image: "./assets/images/clients/vr-bengaluru.jpg",
        alt: "VR Bengaluru"
    },
    {
        image: "./assets/images/clients/zumutor.jpg",
        alt: "Zumutor"
    },
    {
        image: "./assets/images/clients/jupiter.jpg",
        alt: "Jupiter"
    },
    {
        image: "./assets/images/clients/woman.jpg",
        alt: "Woman"
    },
    {
        image: "./assets/images/clients/jeude-golf.jpg",
        alt: "Jeude Golf"
    }
];


/***/ }),

/***/ "./src/app/pages/mobile-applications/mobile-applications.component.css":
/***/ (function(module, exports) {

module.exports = ".background-1 {\r\n    background-image: url('mobile-dev.c4d56ef6ffa9c831f6f1.jpg')\r\n}\r\n\r\n.bubble-section {\r\n    position: absolute;\r\n    top: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    bottom: 0;\r\n    right: 50%;\r\n    zoom: 0.7;\r\n}\r\n\r\n.bubble-section .heading {\r\n    color: #fff;\r\n    margin: 0px;\r\n}\r\n\r\n.mobile-explanation{\r\n    padding-bottom: 30px;\r\n    padding-top: 30px;\r\n}\r\n\r\n.position{\r\n    background-size: 90px;\r\n    background-position: center 51px;\r\n    background-repeat: no-repeat;\r\n    height: 150px;\r\n    width:100%;\r\n  }\r\n\r\n.mobile-explanation .heading {\r\n    padding: 40px 120px 10px;\r\n    font-size: 2em;\r\n    font-weight: 600;\r\n}\r\n\r\n.mobile-explanation .line {\r\n    width: 2px;\r\n    height: 75px;\r\n    display: block;\r\n    margin: 0 auto;\r\n    background: #757575;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.mobile-image .background-image {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-position: center;\r\n    background-size: cover;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: -1;\r\n}\r\n\r\n.mobile-image img {\r\n    z-index: 9;\r\n    margin: 0 auto;\r\n    display: block;\r\n}\r\n\r\n.mobile-image {\r\n    background-size: cover;\r\n    background-position: right;\r\n    padding-top: 50px;\r\n}\r\n\r\n.content-div {\r\n    padding: 50px;\r\n    position: relative;\r\n    top: 10%;\r\n}\r\n\r\n.content-div div {\r\n    display: block;\r\n}\r\n\r\n.content-div .heading {\r\n    font-size: 40px;\r\n    font-weight: 900;\r\n    line-height: 44px;\r\n    padding: 0px;\r\n}\r\n\r\n.content-div .heading img {\r\n    width: 75px;\r\n    height: 75px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    -o-object-position: center;\r\n       object-position: center;\r\n    margin-right: 15px;\r\n    display: block;\r\n}\r\n\r\n.content-div .description {\r\n    font-size: 20px;\r\n    opacity: 0.7;\r\n    filter: alpha(opacity=70) progid:DXImageTransform.Microsoft.Alpha(opacity=70);\r\n    line-height: 33px;\r\n}\r\n\r\n.app-link{\r\n    width: 100%;\r\n}\r\n\r\n.app-link img {\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    height: 37px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.features-heading {\r\n    font-weight: 900;\r\n}\r\n\r\n.features-list {\r\n    line-height: 30px;\r\n    font-size: 20px;\r\n    opacity: 0.75;\r\n    filter: alpha(opacity=75) progid:DXImageTransform.Microsoft.Alpha(opacity=75);\r\n    /* margin-left: 0px; */\r\n    padding-left: 20px;\r\n}\r\n\r\n.features-list li {\r\n    position: relative;\r\n    padding: 0px 30px;\r\n    list-style: none;\r\n}\r\n\r\n.features-list li:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 20px;\r\n    height: 2px;\r\n    background: #ffffff;\r\n    left: 0;\r\n    top: calc(50% - 2px);\r\n}\r\n\r\n.mobile-show {\r\n    /* background: #eee; */\r\n    /* padding: 70px; */\r\n    /* max-height: 80vh;\r\n    min-height: 534px; */\r\n}\r\n\r\n.mobile-app-cards{\r\n    overflow: hidden;\r\n    -webkit-box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n            box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n    color: #ffffff;\r\n    margin: 30px 10px;\r\n    min-height: 510px;\r\n    /* background: linear-gradient(to right, #ff5f6d 0%,#ffc371 100%); for testing please remove */\r\n}\r\n\r\n.subText {\r\n    font-size: 16px;\r\n    opacity: 0.4;\r\n    filter: alpha(opacity=40) progid:DXImageTransform.Microsoft.Alpha(opacity=40);\r\n    margin-top: 0px;\r\n    display: block;\r\n    margin-bottom: 20px;\r\n    font-weight: 600;\r\n}\r\n\r\nspan.subText::before {\r\n    content: '';\r\n    background: #F2F2F2;\r\n    background: rgba(242, 242, 242, 1);\r\n    border-radius: 63px;\r\n    -moz-border-radius: 63px;\r\n    -webkit-border-radius: 63px;\r\n    display: inline-block;\r\n    width: 76px;\r\n    height: 15px;\r\n    margin-right: 9px;\r\n}\r\n\r\n.dark-font{\r\n    color: #555d63;\r\n}\r\n\r\n.dark-font .subText {\r\n    font-size: 16px;\r\n    opacity: 0.4;\r\n    filter: alpha(opacity=40) progid:DXImageTransform.Microsoft.Alpha(opacity=40);\r\n    margin-top: 0px;\r\n    display: block;\r\n    margin-bottom: 20px;\r\n    font-weight: 600;\r\n}\r\n\r\n.dark-font span.subText::before {\r\n    content: '';\r\n    background: #555d63;\r\n    border-radius: 63px;\r\n    -moz-border-radius: 63px;\r\n    -webkit-border-radius: 63px;\r\n    display: inline-block;\r\n    width: 76px;\r\n    height: 15px;\r\n    margin-right: 9px;\r\n}\r\n\r\n.main-bubble {\r\n    width: 340px;\r\n    height: 340px;\r\n    background: white;\r\n    border-radius: 50%;\r\n    margin: 0 auto;\r\n    position: absolute;\r\n    left: calc(50% - 220px);\r\n    top: calc(50% - 170px);\r\n    -webkit-box-shadow: 0px 0 5px 0px rgba(0, 0, 0, 0.22);\r\n            box-shadow: 0px 0 5px 0px rgba(0, 0, 0, 0.22);\r\n}\r\n\r\n.main-bubble .content{\r\n        z-index: 99;\r\n    background: #fff;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    border-radius: 50%;\r\n    padding: 110px 38px;\r\n}\r\n\r\n.bubble-section:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 640px;\r\n    height: 640px;\r\n    background: rgba(0, 0, 0, 0.03);\r\n    left: calc(50% - 370px);\r\n    top: calc(50% - 320px);\r\n    border-radius: 50%;\r\n}\r\n\r\n.main-bubble:after {\r\ncontent: \"\";\r\n    position: absolute;\r\n    width: 420px;\r\n    height: 420px;\r\n    background: rgba(0, 0, 0, 0.03);\r\n    top: -40px;\r\n    left: -40px;\r\n    border-radius: 50%;\r\n    z-index: 0;\r\n}\r\n\r\n.main-bubble:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 520px;\r\n    height: 520px;\r\n    background: rgba(0, 0, 0, 0.03);\r\n    top: -90px;\r\n    left: -90px;\r\n    border-radius: 50%;\r\n    z-index: 0;\r\n}\r\n\r\n.main-bubble span {\r\n    font-size: 25px;\r\n    font-weight: 900;\r\n    display: inline-block;color: #616161;\r\n}\r\n\r\n.text-block{\r\n    display: block !important;\r\n    text-align: center;\r\n    margin-top: 53px;\r\n}\r\n\r\n.small-bubble {\r\n    position: absolute;\r\n    width: 130px;\r\n    height: 130px;\r\n    border-radius: 50%;\r\n    background: white;\r\n    font-size: 17px;\r\n    text-align: center;\r\n    padding: 53px 0px;\r\n    line-height: 18px;\r\n    font-weight: 900;\r\n    color: #333;\r\n    -webkit-box-shadow: 0px 0 5px rgba(0, 0, 0, 0.05);\r\n            box-shadow: 0px 0 5px rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.bubble-1 {\r\n    top: calc(50% + 169px);\r\n    left: calc(50% - 382px);\r\n    -webkit-animation: bubble-1-animation 2s infinite ease-out alternate; /* Safari 4+ */ /* Fx 5+ */ /* Opera 12+ */\r\n  animation:         bubble-1-animation 2s infinite ease-out alternate; /* IE 10+, Fx 29+ */\r\n}\r\n\r\n@-webkit-keyframes bubble-1-animation{\r\n  0%   { -webkit-transform: translate3D(0px, 0px, 0px); transform: translate3D(0px, 0px, 0px)}\r\n  100% { -webkit-transform: translate3D(5px, 3px, 0px); transform: translate3D(5px, 3px, 0px) }\r\n}\r\n\r\n@keyframes bubble-1-animation{\r\n  0%   { -webkit-transform: translate3D(0px, 0px, 0px); transform: translate3D(0px, 0px, 0px)}\r\n  100% { -webkit-transform: translate3D(5px, 3px, 0px); transform: translate3D(5px, 3px, 0px) }\r\n}\r\n\r\n.bubble-2 {\r\n    top: calc(50% + 155px);\r\n    left: calc(50% + 77px);\r\n     -webkit-animation: bubble-2-animation 2s infinite ease-out alternate; /* Safari 4+ */ /* Fx 5+ */ /* Opera 12+ */\r\n  animation:         bubble-2-animation 2s infinite ease-out alternate; /* IE 10+, Fx 29+ */\r\n}\r\n\r\n@-webkit-keyframes bubble-2-animation{\r\n  0%   { -webkit-transform: translate(0px); transform: translate(0px)}\r\n  100% { -webkit-transform: translate(-8px); transform: translate(-8px) }\r\n}\r\n\r\n@keyframes bubble-2-animation{\r\n   0%   { -webkit-transform: translate(0px); transform: translate(0px)}\r\n  100% { -webkit-transform: translate(-8px); transform: translate(-8px) }\r\n}\r\n\r\n.bubble-3 {\r\n    top: calc(50% - 265px);\r\n    left: calc(50% - 348px);\r\n     -webkit-animation: bubble-3-animation 2s infinite ease-out alternate; /* Safari 4+ */ /* Fx 5+ */ /* Opera 12+ */\r\n  animation:         bubble-3-animation 2s infinite ease-out alternate; /* IE 10+, Fx 29+ */\r\n}\r\n\r\n@-webkit-keyframes bubble-3-animation{\r\n  0%   { -webkit-transform: translate(0px); transform: translate(0px)}\r\n  100% { -webkit-transform: translate3D(-5px,6px,0px); transform: translate3D(-5px,6px,0px) }\r\n}\r\n\r\n@keyframes bubble-3-animation{\r\n   0%   { -webkit-transform: translate(0px); transform: translate(0px)}\r\n  100% { -webkit-transform: translate3D(-5px,6px,0px); transform: translate3D(-5px,6px,0px) }\r\n}\r\n\r\n.bubble-4 {\r\n    right: calc(50% - 383px);\r\n    top: calc(50% - 325px);\r\n     -webkit-animation: bubble-4-animation 2s infinite ease-out alternate; /* Safari 4+ */ /* Fx 5+ */ /* Opera 12+ */\r\n  animation:         bubble-4-animation 2s infinite ease-out alternate; /* IE 10+, Fx 29+ */\r\n}\r\n\r\n@-webkit-keyframes bubble-4-animation{\r\n  0%   { -webkit-transform: translate(0px); transform: translate(0px)}\r\n  100% { -webkit-transform: translate3D(-5px,6px,0px); transform: translate3D(-5px,6px,0px) }\r\n}\r\n\r\n@keyframes bubble-4-animation{\r\n   0%   { -webkit-transform: translate(0px); transform: translate(0px)}\r\n  100% { -webkit-transform: translate3D(-5px,6px,0px); transform: translate3D(-5px,6px,0px) }\r\n}\r\n\r\n.bubble-5 {\r\n    right: calc(50% - 485px);\r\n    top: calc(50% - 165px);\r\n        padding: 0;\r\n         -webkit-animation: bubble-5-animation 4s infinite ease-out alternate; /* Safari 4+ */ /* Fx 5+ */ /* Opera 12+ */\r\n  animation:         bubble-5-animation 4s infinite ease-out alternate; /* IE 10+, Fx 29+ */\r\n}\r\n\r\n@-webkit-keyframes bubble-5-animation{\r\n  0%   { -webkit-transform: translate(0px); transform: translate(0px)}\r\n  100% { -webkit-transform: translate3D(-15px,-6px,0px); transform: translate3D(-15px,-6px,0px)}\r\n}\r\n\r\n@keyframes bubble-5-animation{\r\n   0%   { -webkit-transform: translate(0px); transform: translate(0px)}\r\n  100% { -webkit-transform: translate3D(-15px,-6px,0px); transform: translate3D(-15px,-6px,0px)}\r\n}\r\n\r\n.bubble-1:before {\r\ncontent: \"\";\r\n    position: absolute;\r\n    width: 30px;\r\n    height: 30px;\r\n    background: white;\r\n    top: -20px;\r\n    left: 188px;\r\n    border-radius: 50%;\r\n     -webkit-animation: bubble-1-animation-before 2s infinite ease-out alternate; /* Safari 4+ */ /* Fx 5+ */ /* Opera 12+ */\r\n  animation:         bubble-1-animation-before 2s infinite ease-out alternate; /* IE 10+, Fx 29+ */\r\n}\r\n\r\n@-webkit-keyframes bubble-1-animation-before {\r\n  0%   { -webkit-transform: translate3D(0px, 0px, 0px); transform: translate3D(0px, 0px, 0px)}\r\n  100% { -webkit-transform: translate3D(-5px, -16px, 0px); transform: translate3D(-5px, -16px, 0px) }\r\n}\r\n\r\n@keyframes bubble-1-animation-before {\r\n  0%   { -webkit-transform: translate3D(0px, 0px, 0px); transform: translate3D(0px, 0px, 0px)}\r\n  100% { -webkit-transform: translate3D(-5px, -16px, 0px); transform: translate3D(-5px, -16px, 0px) }\r\n}\r\n\r\n.bubble-1:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 50px;\r\n    height: 50px;\r\n    background: white;\r\n    top: -16px;\r\n    left: 130px;\r\n    border-radius: 50%;\r\n         -webkit-animation: bubble-1-animation-after 2s infinite ease-out alternate; /* Safari 4+ */ /* Fx 5+ */ /* Opera 12+ */\r\n  animation:         bubble-1-animation-after 2s infinite ease-out alternate; /* IE 10+, Fx 29+ */\r\n}\r\n\r\n@-webkit-keyframes bubble-1-animation-after {\r\n  0%   { -webkit-transform: translate3D(0px, 0px, 0px); transform: translate3D(0px, 0px, 0px)}\r\n  100% { -webkit-transform: translate3D(-9px, -3px, 0px); transform: translate3D(-9px, -3px, 0px) }\r\n}\r\n\r\n@keyframes bubble-1-animation-after {\r\n  0%   { -webkit-transform: translate3D(0px, 0px, 0px); transform: translate3D(0px, 0px, 0px)}\r\n  100% { -webkit-transform: translate3D(-9px, -3px, 0px); transform: translate3D(-9px, -3px, 0px) }\r\n}\r\n\r\n.bubble-2:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 30px;\r\n    height: 30px;\r\n    background: white;\r\n   top: -20px;\r\n    left: 8px;\r\n    border-radius: 50%;\r\n-webkit-animation: bubble-2-animation-after 2s infinite ease-out alternate; /* Safari 4+ */ /* Fx 5+ */ /* Opera 12+ */\r\n  animation:         bubble-2-animation-after 2s infinite ease-out alternate; /* IE 10+, Fx 29+ */\r\n}\r\n\r\n@-webkit-keyframes bubble-2-animation-after {\r\n  0%   { -webkit-transform: translate3D(0px, 0px, 0px); transform: translate3D(0px, 0px, 0px)}\r\n  100% { -webkit-transform: translate3D(-9px, -6px, 0px); transform: translate3D(-9px, -6px, 0px) }\r\n}\r\n\r\n@keyframes bubble-2-animation-after {\r\n  0%   { -webkit-transform: translate3D(0px, 0px, 0px); transform: translate3D(0px, 0px, 0px)}\r\n  100% { -webkit-transform: translate3D(-9px, -6px, 0px); transform: translate3D(-9px, -6px, 0px) }\r\n}\r\n\r\n.bubble-3:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 50px;\r\n    height: 50px;\r\n    background: white;\r\n    top: 85px;\r\n    left: 135px;\r\n    border-radius: 50%;\r\n    -webkit-animation: bubble-2-animation-after 2s infinite ease-out alternate; /* Safari 4+ */ /* Fx 5+ */ /* Opera 12+ */\r\n  animation:         bubble-2-animation-after 2s infinite ease-out alternate; /* IE 10+, Fx 29+ */\r\n}\r\n\r\n@keyframes bubble-2-animation-after {\r\n  0%   { -webkit-transform: translate3D(0px, 0px, 0px); transform: translate3D(0px, 0px, 0px)}\r\n  100% { -webkit-transform: translate3D(-9px, -6px, 0px); transform: translate3D(-9px, -6px, 0px) }\r\n}\r\n\r\n.bubble-4:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 35px;\r\n    height: 35px;\r\n    background: white;\r\n    top: 135px;\r\n    left: 48px;\r\n    border-radius: 50%;\r\n    -webkit-animation: bubble-4-animation-after 2s infinite ease-out alternate; /* Safari 4+ */ /* Fx 5+ */ /* Opera 12+ */\r\n  animation:         bubble-4-animation-after 2s infinite ease-out alternate; /* IE 10+, Fx 29+ */\r\n}\r\n\r\n@-webkit-keyframes bubble-4-animation-after {\r\n  0%   { -webkit-transform: translate3D(0px, 0px, 0px); transform: translate3D(0px, 0px, 0px)}\r\n  100% { -webkit-transform: translate3D(9px, 6px, 0px); transform: translate3D(9px, 6px, 0px) }\r\n}\r\n\r\n@keyframes bubble-4-animation-after {\r\n  0%   { -webkit-transform: translate3D(0px, 0px, 0px); transform: translate3D(0px, 0px, 0px)}\r\n  100% { -webkit-transform: translate3D(9px, 6px, 0px); transform: translate3D(9px, 6px, 0px) }\r\n}\r\n\r\n.bubble-5 img{\r\n    margin-top: 10px;\r\n}\r\n\r\n#ios-bubble {\r\n    right: calc(50% - 316px);\r\n    top: calc(50% - 165px);\r\n}\r\n\r\n#ios-bubble img{\r\n    width: 102px;\r\n}\r\n\r\n.images img {\r\n    width: 150px;\r\n    display: block;\r\n    margin-bottom: 41px;\r\n}\r\n\r\n.images img:nth-of-type(2){\r\n        margin-left: 35px;\r\n}\r\n\r\n.images {\r\n    position: absolute;\r\n    right: 200px;\r\n    top: 210px;\r\n}\r\n\r\n.content h2:before {\r\n    content: \"\";\r\n    display: inline-block;\r\n    width: 45px;\r\n    height: 5px;\r\n    background: #06D876;\r\n    margin-bottom: 10px;\r\n    border-radius: 2px;\r\n}\r\n\r\n.content h2 {\r\n    font-size: 38px;\r\n    font-weight: 700;\r\n    position: relative;\r\n}\r\n\r\n.content p {\r\n    margin-bottom: 0;\r\n    color: #fff;\r\n    font-style: normal;\r\n    margin-top: 0px;\r\n    max-width: 520px;\r\n    font-size: 18px;\r\n    line-height: 31px;\r\n    font-weight: 400;\r\n}\r\n\r\n.brand-btn {\r\n    background: transparent;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    border: 1px solid #353535;\r\n    font-size: 16px;\r\n    padding: 6px 25px;\r\n    border-radius: 0px;\r\n    line-height: 30px;\r\n    color: #4c4c4c;\r\n}\r\n\r\n.banner-background {\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    background-color: #000;\r\n    background-size: cover;\r\n    overflow: hidden;\r\n    background-position: center center;\r\n    background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    max-width: 100%;\r\n    font-family: 'Nunito', sans-serif;\r\n    /* z-index: 9; */\r\n}\r\n\r\n.banner-content .content {\r\n    vertical-align: middle;\r\n    display: table-cell;\r\n    color: #fff;\r\n}\r\n\r\n.banner-content {\r\n    display: block;\r\n    height: 100%;\r\n    position: absolute;\r\n    z-index: 10;\r\n    padding-top: 250px;\r\n}\r\n\r\n.banner-content.blue-box{\r\n    width: 60%;\r\n    height: 70%;\r\n    top: 15%;\r\n    left: 20%;\r\n    background-color: #076cf2;\r\n    padding: 3%;\r\n}\r\n\r\n.content h1 {\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n    color: #fff;\r\n    font-weight: 700;\r\n    font-style: normal;\r\n    line-height: 1.2;\r\n    margin-top: 0px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.content p {\r\n    font-size: 18px;\r\n    margin-bottom: 0;\r\n    color: #fff;\r\n    font-weight: 400;\r\n    font-style: normal;\r\n    line-height: 1.5;\r\n    margin-top: 0px;\r\n    /* max-width: 510px; */\r\n}\r\n\r\n.background-btn {\r\n    background: #353535;\r\n    color: #fff;\r\n}\r\n\r\nspan.left-right {\r\n    position: relative;\r\n}\r\n\r\nspan.left-right:after,\r\nspan.left-right:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    width: 40px;\r\n    height: 4px;\r\n    background: #06D875;\r\n}\r\n\r\n.left-right {\r\n    font-weight: 900;\r\n}\r\n\r\n.left-right:after {\r\n    right: -50px;\r\n    top: calc(50% - 2px);\r\n}\r\n\r\n.left-right:before {\r\n    left: -50px;\r\n    top: calc(50% - 2px);\r\n}\r\n\r\n.card {\r\n    background: #fff;\r\n    padding: 40px;\r\n    -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.27);\r\n            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.27);\r\n}\r\n\r\n.loading {\r\n    display: table;\r\n    height: 100%;\r\n    position: absolute;\r\n    width: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background: #000000;\r\n}\r\n\r\n.loader-content {\r\n    vertical-align: middle;\r\n    display: table-cell;\r\n    color: #fff;\r\n}\r\n\r\nh1.loader {\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-family: 'Nunito', sans-serif;\r\n    font-size: 4.6875em;\r\n    color: transparent;\r\n    letter-spacing: 0.01em;\r\n}\r\n\r\n.loader span {\r\n    text-shadow: 0 0 2px rgba(204, 208, 212, 0.9), 0 15px 25px rgba(0, 0, 0, 0.3), 0 -2px 3px rgba(0, 0, 0, 0.1), 0 -5px 10px rgba(255, 255, 255, 0.5), 0 5px 10px rgba(0, 0, 0, 0.3), 0 3px 4px rgba(255, 255, 255, 0.2), 0 0 20px rgba(255, 255, 255, 0.45);\r\n    -webkit-animation: loading 0.85s ease-in-out infinite alternate;\r\n            animation: loading 0.85s ease-in-out infinite alternate;\r\n}\r\n\r\n@-webkit-keyframes loading {\r\n    to {\r\n        text-shadow: 0 0 2px rgba(204, 208, 212, 0.2), 0 0 3px rgba(0, 0, 0, 0.02), 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(255, 255, 255, 0), 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(255, 255, 255, 0), 0 0 0 rgba(255, 255, 255, 0);\r\n    }\r\n}\r\n\r\n@keyframes loading {\r\n    to {\r\n        text-shadow: 0 0 2px rgba(204, 208, 212, 0.2), 0 0 3px rgba(0, 0, 0, 0.02), 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(255, 255, 255, 0), 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(255, 255, 255, 0), 0 0 0 rgba(255, 255, 255, 0);\r\n    }\r\n}\r\n\r\n.loader span:nth-child(2) {\r\n    -webkit-animation-delay: 0.15s;\r\n            animation-delay: 0.15s;\r\n}\r\n\r\n.loader span:nth-child(3) {\r\n    -webkit-animation-delay: 0.30s;\r\n            animation-delay: 0.30s;\r\n}\r\n\r\n.loader span:nth-child(4) {\r\n    -webkit-animation-delay: 0.45s;\r\n            animation-delay: 0.45s;\r\n}\r\n\r\n.loader span:nth-child(5) {\r\n    -webkit-animation-delay: 0.60s;\r\n            animation-delay: 0.60s;\r\n}\r\n\r\n.loader span:nth-child(6) {\r\n    -webkit-animation-delay: 0.75s;\r\n            animation-delay: 0.75s;\r\n}\r\n\r\n.loader span:nth-child(7) {\r\n    -webkit-animation-delay: 0.90s;\r\n            animation-delay: 0.90s;\r\n}\r\n\r\n/* for diagonally split section */\r\n\r\n.ui-ux-row{\r\n    height: 100%;\r\n    overflow: hidden;\r\n    color: #ffffff;\r\n    position: relative;\r\n}\r\n\r\n.ui-ux-row .heading{\r\n    font-size: 6em;\r\n}\r\n\r\n.ui-ux-row .explanation{\r\n    font-size: 1.2em;\r\n}\r\n\r\n#development-row .explanation{\r\n    padding-right: 45px;\r\n}\r\n\r\n.skelton-wrap{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n}\r\n\r\n.mobile-skelton{\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 50%;\r\n    -webkit-transform: translate(50% , -50%) rotate(30deg);\r\n            transform: translate(50% , -50%) rotate(30deg);\r\n    z-index: 3;\r\n    width: 200px;\r\n    height: 400px;\r\n}\r\n\r\n#ui-left{\r\n    background-color: #45b5c1;\r\n}\r\n\r\n#ux-right{\r\n    background-color: #1a191f;\r\n}\r\n\r\n.row.ui-design{\r\n    -webkit-transform: skew(-30deg);\r\n            transform: skew(-30deg);\r\n    height: 100%;\r\n    background-color: #45b5c1;\r\n    position: relative;\r\n    z-index: 2;\r\n}\r\n\r\n.row.ux-development{\r\n    -webkit-transform: skew(-30deg);\r\n            transform: skew(-30deg);\r\n    height: 100%;\r\n    background-color: #1a191f;\r\n}\r\n\r\n.content-skew.skew-right .explanation{\r\n    width: 62%;\r\n}\r\n\r\n.content-skew.skew-left .explanation{\r\n    width: 62%\r\n}\r\n\r\n#development-row{\r\n    background-color: #7fb3f8;\r\n        width: auto;\r\n}\r\n\r\n.row.dev-explanation{\r\n    /* transform: skew(30deg); */\r\n    height: 100%;\r\n    position: relative;\r\n    /* z-index: 2; */\r\n}\r\n\r\n.row.float-tech{\r\n    /* transform: skew(30deg); */\r\n    height: 100%;\r\n    position: relative;\r\n    padding-left: 100px;\r\n}\r\n\r\n.content-skew.skew-left{\r\n    -webkit-transform: skew(30deg);\r\n            transform: skew(30deg);\r\n    padding-left: 30px;\r\n}\r\n\r\n.content-skew.skew-2-right{\r\n    /* transform: skew(-30deg); */\r\n    width:100%;\r\n    position: relative;\r\n}\r\n\r\n.content-skew.skew-2-left{\r\n    /* transform: skew(-30deg); */\r\n    padding-left: 40px;\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n}\r\n\r\n.content-skew.skew-right{\r\n    -webkit-transform: skew(30deg);\r\n            transform: skew(30deg);\r\n    padding-right: 30px;\r\n    position: relative;\r\n    text-align: right;\r\n    width: 100%;\r\n}\r\n\r\n.mobile-dev-heading{\r\n    font-size:3em !important;\r\n}\r\n\r\n.tech-bar{\r\n    background-color: #ffffff;\r\n}\r\n\r\n.tech-bar .tech-holder{\r\n    text-align: center;\r\n    padding: 25px;\r\n}\r\n\r\n.tech-container{\r\n    padding-bottom: 75px;\r\n}\r\n\r\n.animated-delay-1 {\r\n    animation-delay: 1s;\r\n    -webkit-animation-delay: 1s;\r\n    -moz-animation-delay: 1s;\r\n    -o-animation-delay: 1s;\r\n}\r\n\r\n.animated-delay-2 {\r\n    animation-delay: 1.25s;\r\n    -webkit-animation-delay: 1.25s;\r\n    -moz-animation-delay: 1.25s;\r\n    -o-animation-delay: 1.25s;\r\n}\r\n\r\n.animated-delay-3 {\r\n    animation-delay: 1.5s;\r\n    -webkit-animation-delay: 1.5s;\r\n    -moz-animation-delay: 1.5s;\r\n    -o-animation-delay: 1.5s;\r\n}\r\n\r\n.animated {\r\n    visibility: visible !important;\r\n}\r\n\r\n.hide-on-init {\r\n    visibility: hidden;\r\n}\r\n\r\n.mobile-tech-bar{\r\n    position: relative;\r\n    -webkit-box-shadow: 0px 2px 6px 0px rgba(190, 190, 190, 0.66);\r\n    box-shadow: 0px 2px 6px 0px rgba(190, 190, 190, 0.66);\r\n}\r\n\r\n.tech-bar .heading{\r\n    padding: 40px 120px 30px;\r\n    font-size: 2em;\r\n    font-weight: 600;\r\n}\r\n\r\n/*----------------------Mobile Phones Portrait---------------------------------*/\r\n\r\n@media screen and (max-device-width: 480px) and (orientation: portrait){\r\n  \r\n    .content-div {\r\n        padding: 25px;\r\n    }\r\n\r\n    .mobile-explanation .heading {\r\n        padding: 40px 25px 10px;\r\n        font-size: 25px;\r\n        font-weight: 700;\r\n    }\r\n\r\n    .tech-bar .heading{\r\n        padding: 40px 0px 10px;\r\n    }\r\n    \r\n    .tech-item img{\r\n        width: 50%;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .tech-container{\r\n        padding-bottom: 22px;\r\n    }\r\n\r\n    .mobile-show{\r\n        max-height: 230vh;\r\n        padding: 15px 25px;\r\n    }\r\n\r\n    .mobile-image{\r\n        height: 200px;\r\n        padding-top: 20px;\r\n    }\r\n\r\n    .mobile-image img{\r\n        height: 200px !important;\r\n    }\r\n\r\n    .content-div{\r\n        top: 0%;\r\n        padding: 40px 0px 0px 0px;\r\n\r\n    }\r\n\r\n    .mobile-explanation .heading{\r\n        padding: 0px;\r\n        font-size: 20px;\r\n        line-height: normal;\r\n    }\r\n\r\n    .subText{\r\n        font-size: 10px;\r\n    }\r\n\r\n    .dark-font .subText{\r\n        font-size: 10px;\r\n    }\r\n\r\n    span.subText:before{\r\n        content: '';\r\n        background: #F2F2F2;\r\n        background: rgba(242, 242, 242, 1);\r\n        border-radius: 63px;\r\n        -moz-border-radius: 63px;\r\n        -webkit-border-radius: 63px;\r\n        display: inline-block;\r\n        width: 45px;\r\n        height: 8px;\r\n        margin-right: 9px;\r\n    }\r\n\r\n    .dark-font span.subText:before{\r\n        content: '';\r\n        background: #555d63;\r\n        border-radius: 63px;\r\n        -moz-border-radius: 63px;\r\n        -webkit-border-radius: 63px;\r\n        display: inline-block;\r\n        width: 45px;\r\n        height: 8px;\r\n        margin-right: 9px;\r\n    }\r\n\r\n    .content-div .description{\r\n        font-size: 16px;\r\n        line-height: normal;\r\n    }\r\n\r\n    .banner-content.blue-box{\r\n        width: 80%;\r\n        height: 70%;\r\n        top: 15%;\r\n        left: 10%;\r\n        background-color: #076cf2;\r\n        padding: 3%;\r\n    }\r\n\r\n    .mobile-height-fix{\r\n        height: auto !important;\r\n        min-height: 0 !important;\r\n    }\r\n  }\r\n\r\n/* for mobile view */\r\n\r\n@media screen and (max-device-width: 768px) and (min-device-width : 480px){\r\n    .mobile-show{\r\n        padding: 25px;\r\n    }\r\n    .content-div .heading{\r\n        font-size: 24px;\r\n        line-height: normal;\r\n    }\r\n    .content-div .description{\r\n        font-size: 16px;\r\n        line-height: normal;\r\n    } \r\n\r\n    .mobile-img{\r\n        padding-top: 40px;\r\n    }\r\n\r\n    .mobile-image img{\r\n        height: 300px !important;\r\n    }\r\n\r\n    .content-div{\r\n        padding:20px;\r\n        top: 0px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/pages/mobile-applications/mobile-applications.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"banner-section\" [style.height.px]=\"deviceHeight\">\r\n    <div class=\"banner-background background-1\"></div>\r\n    <div class=\"banner-background overlay-phone\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"banner-content blue-box\">\r\n            <div class=\"content\">\r\n                <h1>\r\n                    Customized Solutions</h1>\r\n                <h2>MOBILE APPLICATIONS</h2>\r\n                <p>Design is at the forefront of everything we do and there is a methodology of great design in any project that we take. Our team boasts of some top-notch designers and certified UX consultants</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section> -->\r\n<section class=\"banner-section\" [style.height.px]=\"deviceHeight\">\r\n    <div class=\"banner-background background-1\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"banner-content\">\r\n            <div class=\"content\">\r\n                <h1>\r\n                    Customized Solutions</h1>\r\n                <h2>MOBILE APPLICATION</h2>\r\n                <p>Whether you’re a unicorn start-up or an enterprise client, we help you to create killer application with WOW experience.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"banner-section mobile-height-fix\" [style.height.px]=\"deviceHeight - 80\" style=\"min-height: 686px;\">\r\n    <div class=\"container-fluid mobile-height-fix\" [style.height.px]=\"deviceHeight - 80\" style=\"min-height: 686px;\">\r\n        <div class=\"row ui-ux-row\">\r\n            <img class=\"mobile-skelton hide-on-init animated-delay-3 d-none d-md-block\" animateOnScroll animationName=\"animated fadeIn\" src=\"assets/images/mobile/mobile-skelton.png\">\r\n            <div id=\"ui-left\" class=\"col-md-6\">\r\n                <div class=\"row ui-design\">\r\n                    <div class=\"content-skew skew-left\">\r\n                        <h1 class=\"heading hide-on-init\" animateOnScroll animationName=\"animated fadeInLeft\">UX</h1>\r\n                        <p class=\"explanation hide-on-init\" animateOnScroll animationName=\"animated fadeInLeft\">We helps organisations build better products and experiences with a user-cantered approach is adopted by our team of well-equipped\r\n                        designers, to create outstanding user experiences across all the platforms consistently. Our innovative tech-driven processes\r\n                        blend efficiency and effectiveness that drives value to your business. Better usability and easy navigation ensures that\r\n                        your customers browse your site longer through their mobile devices. And that’s what we have been doing – providing you Mobile\r\n                        UX designs and creating mobile websites that increases visitor engagement.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div id=\"ux-right\" class=\"col-md-6 \">\r\n                <div class=\"row ux-development\">\r\n                    <div class=\"content-skew skew-right\">\r\n                        <h1 class=\"heading hide-on-init animated-delay-2\" animateOnScroll animationName=\"animated fadeInRight\">UI</h1>\r\n                        <p class=\"explanation hide-on-init animated-delay-2 float-right\" animateOnScroll animationName=\"animated fadeInRight\">User Experience is more than a design. It's a data driven strategy, understand user objectives, and treat visual with creative.\r\n                        We translate high-level requirements into interaction flows and artifacts, and transform them into beautiful, intuitive,\r\n                        and functional user interfaces. We provide highly individualized User Interface design which provides a unique experience\r\n                        to the visitor.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <div class=\"banner-background background-1\"></div> -->\r\n</section>\r\n<section class=\"container-fluid mobile-height-fix\" [style.height.px]=\"deviceHeight - 80\" style=\"min-height: 600px;\">\r\n\r\n    <!--    <h3 class=\"text-center heading\">Sample Text for Heading</h3>-->\r\n    <div class=\"row ui-ux-row\" id=\"development-row\">\r\n        <div id=\"mob-dev-left\" class=\"col-sm-12 col-md-4\">\r\n            <div class=\"row dev-explanation\">\r\n                <div class=\"content-skew skew-2-left\">\r\n                    <h1 class=\"heading mobile-dev-heading hide-on-init\" animateOnScroll animationName=\"animated fadeInLeft\">Mobile Development</h1>\r\n                    <p class=\"explanation hide-on-init\" animateOnScroll animationName=\"animated fadeInLeft\">Our expertise lies in building IoT, Android and iOS applications supported by a strong cloud based backend infrastructure.\r\n                    We want to elevate the product at every step of the process, from ideation to wireframing, testing, and debuting an MVP.\r\n                    We do end to end from initial prototyping, design, Android / iOS mobile development, as well as application backend and web\r\n                    infrastructure. Mobile devices are an integral part of the digital world, but no single platform has the definitive edge\r\n                    on the others. Whichever platform or approach best suits the needs of your business or users, Wizroots can craft a design\r\n                    that meets user experience and accessibility standards that bring value to your customers.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div id=\"mob-dev-right\" class=\"col-md-8 d-none d-md-block\">\r\n            <div class=\"row float-tech\">\r\n                <div class=\"content-skew skew-2-right\">\r\n                    <div class=\"bubble-section hide-on-init\" animateOnScroll animationName=\"animated zoomIn\" [style.height.px]=\"deviceHeight\">\r\n                        <div class=\"main-bubble\">\r\n                            <div class=\"content\">\r\n                                <span>Native</span>\r\n                                <span class=\"pull-right\">Hybrid</span>\r\n                                <span class=\"text-block\">Cross - Platform</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"small-bubble bubble-1\">Startup</div>\r\n                        <div class=\"small-bubble bubble-2\">Existing Buisness</div>\r\n                        <div class=\"small-bubble bubble-3\">Enterprise Mobility</div>\r\n                        <div class=\"small-bubble bubble-4\">Something</div>\r\n                        <div class=\"small-bubble bubble-5\">\r\n                            <img src=\"./assets/images/mobile/icons/career.png\">\r\n                        </div>\r\n                        <div class=\"small-bubble bubble-5\" id=\"ios-bubble\">\r\n                            <img src=\"./assets/images/mobile/icons/apple-icon.png\">\r\n                        </div>\r\n                        <!-- <div class=\"images\">\r\n                                <img src=\"./assets/images/mobile/icons/cordova.png\">\r\n                                <img src=\"./assets/images/mobile/icons/ionic.png\">\r\n                                <img src=\"./assets/images/mobile/icons/java.png\">\r\n                        \r\n                            </div> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</section>\r\n\r\n<section class=\"banner-section nine-grid\">\r\n    <div class=\"container animated\" animateOnScroll animationName=\"fadeIn\">\r\n        <div class=\"content-section\">\r\n            <h2>Services</h2>\r\n            <p>Mobile devices are an integral part of the digital world, but no single platform has the definitive edge on the others. Whichever\r\n            platform or approach best suits the needs of your business or users, Wizroots can craft a design that meets user experience\r\n            and accessibility standards that bring value to your customers.</p>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\" *ngFor=\"let service of servicesList\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4 service-icon-wrapper projection-screen position\" [style.background-image]=\"'url('+service.iconLocation+')'\">\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                        <h2 class=\"service-description-heading\">{{service.title}}</h2>\r\n                        <h5 class=\"service-description-paragraph\">{{service.explanation}}</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"mobile-explanation\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"container\">\r\n                <p class=\"heading text-center\">\r\n                    Our Recent Works\r\n                </p>\r\n            </div>\r\n        </div>\r\n      \r\n            <div class=\"row mobile-show mobile-app-cards hide-on-init\" *ngFor=\"let mobileApplication of mobileApplicationList; let index = index\" animateOnScroll animationName=\"animated fadeInUp\" [style.background]=\"mobileApplication.gradient\">\r\n                <div [ngClass]=\"(index%2==0)?'col-lg-7 col-sm-12 order-lg-2':'col-lg-7 col-sm-12 order-lg-1'\">\r\n                    <div class=\"mobile-image {{mobileApplication.image_class}}\">\r\n                        <img src=\"{{mobileApplication.image}}\" [style.height.px]=\"deviceHeight - 338\" /> </div>\r\n                </div>\r\n                <div style=\"padding-bottom: 40px;\" [ngClass]=\"(index%2==0)?'col-lg-5 col-sm-12 order-lg-1':'col-lg-5 col-sm-12 order-lg-2 dark-font'\">\r\n                    <div class=\"content-div\">\r\n                        <h1 class=\"heading\">\r\n                            <img src=\"{{mobileApplication.logo_image}}\" />{{mobileApplication.name}}</h1>\r\n                        <span *ngIf=\"mobileApplication.subtext\" class=\"subText\">({{mobileApplication.subtext}})</span>\r\n                        <!-- <ul *ngIf=\"mobileApplication.cases\" class=\"features-list\">\r\n                            <li *ngFor=\"let features of mobileApplication.cases\">{{features}}</li>\r\n                        </ul> -->\r\n                        <p class=\"description\">\r\n                            {{mobileApplication.description}}\r\n                        </p>\r\n                        <a *ngIf=\"mobileApplication.app_link\" href=\"{{mobileApplication.app_link}}\" class=\"app-link\" target=\"_blank\">\r\n                            <img src=\"./assets/images/mobile/applications/get-it-on-play.png\" />\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<div id=\"section-six\" class=\"container-fluid\">\r\n    <span class=\"bg-text-w\">W</span>\r\n    <div id=\"section-six-inner\">\r\n        <h1>Interested in working together?</h1>\r\n        <h4> Wizroots Technologies helps organisations to accelerate ‘Digital Transformation’ using disruptive technologies in\r\n            Web, Mobile, Analytics and Cloud </h4>\r\n        <button class=\"button_sliding_bg\" data-toggle=\"modal\" data-target=\"#contactModal\" (click)=\"contactModalService.captcha()\">\r\n            <p>LETS DISCUSS OUR PROJECT</p>\r\n        </button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"tech-bar mobile-tech-bar\">\r\n    <div class=\"container-fluid\">\r\n        <p class=\"heading text-center\">Technologies in use</p>\r\n        <div class=\"row\">\r\n            <!-- <div *ngFor=\"let technology of technologyList; let index = index\" [ngClass]=\"(index == 0) ? 'col-md-2 offset-md-1 tech-holder' : 'col-md-2 tech-holder'\">\r\n                <img class=\"tech-img\" data-toggle=\"tooltip\" title=\"{{technology.tooltip}}\" src=\"{{technology.iconLocation}}\" />\r\n            </div> -->\r\n        </div>\r\n        <div class=\"container tech-container\">\r\n            <owl-carousel [options]=\"{\r\n                                                                                autoplay: true, \r\n                                                                                autoplayTimeout: 3000, \r\n                                                                                autoplaySpeed: 2500,\r\n                                                                                margin: 90,\r\n                                                                                loop: true,\r\n                                                                                autoWidth: false,\r\n                                                                                center: true,\r\n                                                                                lazyLoad: true,\r\n                                                                                 autoplayHoverPause: true,\r\n                                                                                 responsive: { '0': { items: 1, margin: 390}, \r\n                                                                                 '768': { items: 3 }, \r\n                                                                                 '1024': { items: 5} }\r\n                                                                            }\" [items]=\"technologies\" [carouselClasses]=\"\">\r\n                <div class=\"item tech-item\" *ngFor=\"let technology of technologyList;let i = index\">\r\n                    <img class=\"tech-img shadow-effect\" data-toggle=\"tooltip\" title=\"{{technology.tooltip}}\" src=\"{{technology.iconLocation}}\"\r\n                    />\r\n                </div>\r\n            </owl-carousel>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/mobile-applications/mobile-applications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileApplicationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mobile_applications__ = __webpack_require__("./src/app/pages/mobile-applications/mobile-applications.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_nav_bar_color_service__ = __webpack_require__("./src/app/Services/nav-bar-color.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MobileApplicationsComponent = (function () {
    function MobileApplicationsComponent(navBarColorService) {
        this.navBarColorService = navBarColorService;
        this.deviceHeight = window.innerHeight;
        this.mobileApplicationList = __WEBPACK_IMPORTED_MODULE_0__mobile_applications__["a" /* mobileApplications */];
        this.technologyList = __WEBPACK_IMPORTED_MODULE_0__mobile_applications__["c" /* technologies */];
        this.servicesList = __WEBPACK_IMPORTED_MODULE_0__mobile_applications__["b" /* services */];
    }
    MobileApplicationsComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    /* Changing navbar color on respective scrolling positions */
    MobileApplicationsComponent.prototype.doSomething = function (event) {
        if (window.pageYOffset > 100) {
            this.navBarColorService.navBarBackgroundColor.next("white");
            this.navBarColorService.logoColor.next("./assets/images/logo_black.png");
            this.navBarColorService.hamBurger.next("black");
            this.navBarColorService.currentPageName.next("career");
            this.navBarColorService.tFlagValue.next(false);
            console.log("done! navbar color changed");
        }
        else {
            this.navBarColorService.navBarBackgroundColor.next("transparent");
            this.navBarColorService.logoColor.next("./assets/images/logo_white.png");
            this.navBarColorService.hamBurger.next("white");
            this.navBarColorService.currentPageName.next("career");
            this.navBarColorService.tFlagValue.next(true);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MobileApplicationsComponent.prototype, "doSomething", null);
    MobileApplicationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-mobile-application',
            template: __webpack_require__("./src/app/pages/mobile-applications/mobile-applications.component.html"),
            styles: [__webpack_require__("./src/app/pages/mobile-applications/mobile-applications.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_nav_bar_color_service__["a" /* NavBarColorService */]])
    ], MobileApplicationsComponent);
    return MobileApplicationsComponent;
}());



/***/ }),

/***/ "./src/app/pages/mobile-applications/mobile-applications.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return services; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return technologies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mobileApplications; });
var services = [
    {
        title: 'Mobile App Consultancy',
        iconLocation: './assets/images/mobile/services/consulting-message.png',
        explanation: 'Our team at Wizroots, creates a roadmap to make a mobile app successful in the market. We provide mobile app consultancy services that are laid down on in depth market study and well researched forecasts into the future of mobile apps.'
    },
    {
        title: 'iPhone App Development',
        iconLocation: './assets/images/mobile/services/ios.png',
        explanation: 'We have an experience in designing, developing, and deploying IOS apps for a range of devices, not restricted to mobile phones.'
    },
    {
        title: 'Android App Development',
        iconLocation: './assets/images/mobile/services/career.png',
        explanation: 'We have an experience in designing, developing, and deploying Android apps for a range of devices, not restricted to mobile phones.'
    },
    {
        title: 'Wearable Development',
        iconLocation: './assets/images/mobile/services/smartwatch.png',
        explanation: 'We have an extensive experience in wearable app development process that brings IOT-based wearable apps,wearable healthcare apps,wearable utility apps closer to the users.'
    },
    {
        title: 'UI/UX Design',
        iconLocation: './assets/images/mobile/services/ui.png',
        explanation: 'We provide UX Strategy, Interaction Design, UI Design, and UI Development services for Mobile platforms'
    },
    {
        title: 'Internet of Things',
        iconLocation: './assets/images/mobile/services/smart-house.png',
        explanation: 'We develop IoT apps that connects all the smart devices together, making the ecosystem our users live in, smarter and greatly in-sync with each other.'
    },
    {
        title: 'iBeacon',
        iconLocation: './assets/images/mobile/services/ibeacon.png',
        explanation: "We have an experience in developing apps that connects Beacon devices with nearby bluetooth enabled devices, seamlessly. We help retail outlets by enabling them in gathering customers' attention, with minimal efforts."
    },
    {
        title: 'Cross Platform Development',
        iconLocation: './assets/images/mobile/services/application-development.png',
        explanation: 'We offer cross platform mobile development on the most popular frameworks – Xamarin, Cordova (PhoneGap) and React Native.'
    },
    {
        title: 'Mobile App Architecture',
        iconLocation: './assets/images/mobile/services/march.png',
        explanation: 'Robust architecture is the foundation of great mobile apps .We  integrate with back-end and middleware systems to  evaluate on cost, time to market, implementation risk, performance, scaling, and security.'
    }
];
var technologies = [
    {
        tooltip: 'Java',
        iconLocation: './assets/images/mobile/tech/java.png'
    },
    {
        tooltip: 'Android Studio',
        iconLocation: './assets/images/mobile/tech/as.png'
    },
    {
        tooltip: 'Firebase',
        iconLocation: './assets/images/mobile/tech/fbase.png'
    },
    {
        tooltip: 'Cordova',
        iconLocation: './assets/images/mobile/tech/cordova.png'
    },
    {
        tooltip: 'Kotlin',
        iconLocation: './assets/images/mobile/tech/kotlin.png'
    },
];
var mobileApplications = [
    {
        name: 'A Complete Fitness App',
        subtext: 'android application',
        description: 'Online food ordering and subscribe to healthy meal plan for a stipulated period, with facility to consult dietitian and fitness trainer',
        //  cases:['Customer research / user profiling', 'Ux design/ userflows/ prototyping', 'UI development', 'Application development and testing'],
        image: './assets/images/mobile/food.png',
        image_class: 'fitness-app',
        app_link: 'https://play.google.com/store/apps/details?id=com.fitcarte.fitcarte',
        logo_image: './assets/images/mobile/applications/ico-fitcarte.png',
        gradient: 'linear-gradient(to right, #ff5f6d 0%,#ffc371 100%)'
    },
    {
        name: 'Industrial ordering portal',
        subtext: 'cross Platform - ionic Framework',
        description: 'Online order booking and delivery of industrial product',
        //  cases:['Requirement gathering', 'UX design', 'UI design', 'Application development/ optimization', 'Testing and Launch'],
        image: './assets/images/mobile/emerge.png',
        image_class: 'iportal-app',
        logo_image: './assets/images/mobile/applications/ico-emerge.png',
        gradient: 'linear-gradient(to right, #f9f9f9 0%,#e9e7e5 100%)'
    },
    {
        name: 'Cloud Based LMS',
        subtext: 'android application',
        description: 'Elpfa - Enterprise Learning Platform For All is a Cloud based LMS for Every Team, Division and Company',
        //  cases:['Requirement gathering', 'UX design', 'UI design', 'Application development/ optimization', 'Testing and Launch'],
        image: './assets/images/mobile/elpfa.png',
        image_class: 'elpha-app',
        app_link: 'https://play.google.com/store/apps/details?id=wizroots.elpfa',
        logo_image: './assets/images/mobile/applications/elpfa_logo.png',
        gradient: 'linear-gradient(to right, #3a6073 0%,#3a7bd5 100%)'
    },
    {
        name: 'Focus Santa',
        description: ' Exercise Your Brain! Focus Santa is intended to be brain challenging entertainment. This is a game for both children and adults of all ages. The game focuses on mental concentration and attention.',
        // background: './assets/images/mobile/fcs.jpg',
        app_link: 'https://play.google.com/store/apps/details?id=com.focussanta.focussanta',
        logo_image: './assets/images/mobile/applications/ico-focus.png',
        image: './assets/images/mobile/focus.png',
        image_class: 'fsanta-app',
        features: '',
        gradient: 'linear-gradient(to right, #d3d4ff 0%,#eee4ff 100%)'
    }, {
        name: 'The Brain Game',
        description: 'Exercise Your Brain! Memory Game is intended to be brain challenging entertainment. This is a game for both children and adults of all ages.The game challenges to memorize a series of numbers and later recognize them in ascending order.',
        // background: './assets/images/mobile/brn.jpg',
        app_link: 'https://play.google.com/store/apps/details?id=memgame.wizroots.memgame',
        logo_image: './assets/images/mobile/applications/ico-braingames.png',
        image: './assets/images/mobile/brngm.png',
        image_class: 'bgame-app',
        features: '',
        gradient: 'linear-gradient(to right, #863357 0%,#df7765 100%)'
    }
];


/***/ }),

/***/ "./src/app/pages/ui-ux/ui-ux.component.css":
/***/ (function(module, exports) {

module.exports = ".horizontal-center {\r\n  margin: 0 auto;\r\n}\r\n\r\n.banner-section {\r\n  position: relative;\r\n}\r\n\r\n.content h1 {\r\n  margin-bottom: 10px;\r\n  font-size: 14px;\r\n  color: #fff;\r\n  font-weight: 900;\r\n  font-style: normal;\r\n  line-height: 1.2;\r\n  margin-top: 0px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.background-1 {\r\n  background-image: url('ux-ui.9e52bd975d6302e794ed.jpg')\r\n}\r\n\r\n.background-2 {\r\n    background-image: url('ui-process.b9a5854da939496c58da.jpg');\r\n    /* background-color: #000; */\r\n    padding: 40px;\r\n    background-position: center;\r\n    background-size: cover;\r\n    position: relative;\r\n    padding-bottom: 167px;\r\n    /* background-attachment: fixed; */\r\n}\r\n\r\n.background-2:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  /* background: rgba(0, 0, 0, 0.45); */\r\n  width: 100%;\r\n  height: 100%;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n\r\n.expertise-to-work {\r\n  background-image: url('yellow-image.2609a3f4c2f76c95ce90.jpg');\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n\r\n.expertise-to-work .background-content {\r\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQYV2NkQAIrVqz4zwjjgzgRERGMYAEYB8RmROaABADcrQ78p1zpcgAAAABJRU5ErkJggg==) rgba(255, 255, 255, 0.77);\r\n  text-align: center;\r\n  padding: 50px;\r\n}\r\n\r\n.background-content h1 {\r\n  color: #1f1f1f;\r\n  font-size: 36px;\r\n}\r\n\r\n.background-content p {\r\n  max-width: 100% !important;\r\n  color: #000 !important;\r\n  margin-bottom: 30px !important;\r\n}\r\n\r\n.background-content .brand-btn {\r\n  font-weight: 600;\r\n}\r\n\r\n.explanation-text {\r\n  padding: 70px 100px;\r\n}\r\n\r\n.explanation-text h1 {\r\n  font-size: 30px;\r\n  font-weight: 700;\r\n}\r\n\r\n.explanation {\r\n  background: #eee;\r\n}\r\n\r\n.explanation-text p {\r\n  font-size: 16px;\r\n  line-height: 29px;\r\n}\r\n\r\n.explanation img {\r\n  -o-object-position: center;\r\n     object-position: center;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n\r\n.explanation ul {\r\n  line-height: 40px;\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  color: #616161;\r\n}\r\n\r\n.explanation-text li {\r\n  position: relative;\r\n  padding: 0px 30px;\r\n  list-style: none;\r\n}\r\n\r\n.explanation-text li:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 20px;\r\n  height: 2px;\r\n  background: #06D876;\r\n  top: calc(50% - 1px);\r\n  left: 0px;\r\n}\r\n\r\n.technologies {\r\n  font-size: 14px !important;\r\n  color: #3a3a3a;\r\n}\r\n\r\n.content h2:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 45px;\r\n  height: 5px;\r\n  background: #06D876;\r\n  left: -50px;\r\n  margin-top: 23px;\r\n  border-radius: 2px;\r\n}\r\n\r\n.content h2 {\r\n  font-size: 38px;\r\n  font-weight: 700;\r\n  margin-left: 50px;\r\n  position: relative;\r\n}\r\n\r\n.content p {\r\n  margin-bottom: 0;\r\n  color: #fff;\r\n  font-style: normal;\r\n  margin-top: 0px;\r\n  max-width: 520px;\r\n  font-size: 18px;\r\n  line-height: 31px;\r\n  font-weight: 400;\r\n}\r\n\r\n.banner-background {\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  background-color: #000;\r\n  background-size: cover;\r\n  overflow: hidden;\r\n  background-position: center center;\r\n  background-attachment: fixed;\r\n  background-repeat: no-repeat;\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  max-width: 100%;\r\n  font-family: 'Nunito', sans-serif;\r\n  z-index: 0;\r\n}\r\n\r\n.banner-content .content {\r\n  vertical-align: middle;\r\n  display: table-cell;\r\n  color: #fff;\r\n}\r\n\r\n.banner-content {\r\n  display: table;\r\n  height: 100%;\r\n  position: absolute;\r\n  z-index: 0;\r\n}\r\n\r\n#section-width{\r\n  width: 100%;\r\n}\r\n\r\n.height-fix{\r\n  height: 100vh;\r\n  min-height: 600px\r\n}\r\n\r\n.ui-title{\r\n    width: 70px;\r\n    height: 70px;\r\n    background:#ffe900;\r\n    margin-bottom: 10px;\r\n    /* -moz-border-radius: 50px;\r\n    -webkit-border-radius: 50px; */\r\n    border-radius: 50px;\r\n}\r\n\r\n.space .col-md-2{\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.ui-title svg{\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.ui-heading{\r\n  font-weight: bold;\r\n  padding-bottom: 5px;\r\n  font-size: 18px;\r\n  color: white;\r\n}\r\n\r\n.ui-description{\r\n  font-size: 16px;\r\n  color: #cbcbcb;\r\n}\r\n\r\n/*----------------------Mobile Phones Portrait---------------------------------*/\r\n\r\n@media screen and (max-device-width: 480px) and (orientation: portrait){\r\n\r\n  .banner-content {\r\n    display: block;\r\n  }\r\n  \r\n  .expertise-to-work .background-content {\r\n    padding: 0px;\r\n  }\r\n\r\n  .background-2{\r\n    padding-bottom: 40px !important;\r\n  }\r\n\r\n  .explanation-text {\r\n    padding: 70px 40px;\r\n  }\r\n\r\n  .banner-content .content {\r\n    padding-top: 50%;\r\n  }\r\n\r\n\r\n  .brand-btn {\r\n    background: transparent;\r\n    border-radius: 0px;\r\n    border: 2px solid #96957d;\r\n  }\r\n\r\n  .background-content{\r\n    padding-bottom: 20px !important;\r\n    padding-top: 20px !important;\r\n  }\r\n\r\n  /* .content-50-paddingT{\r\n    padding-right: 15px;\r\n    padding-top: 40% !important;\r\n  } */\r\n\r\n  \r\n\r\n}"

/***/ }),

/***/ "./src/app/pages/ui-ux/ui-ux.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-section height-fix\">\r\n    <div class=\"banner-background background-1\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"banner-content\">\r\n            <div class=\"content\">\r\n                <h1>\r\n                    Customized Solutions</h1>\r\n                <h2>UI-UX</h2>\r\n                <p>Design is at the forefront of everything we do and there is a methodology of great design in any project that we take. Our team boasts of some top-notch designers and certified UX consultants</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"expertise-to-work height-fix\">\r\n        <div class=\"banner-content\" id=\"section-width\">\r\n            <div class=\"content content-50-paddingT\">\r\n                <div class=\"background-content  col-md-8 horizontal-center\">\r\n                    <h1>Here For Tomorrow</h1>\r\n                    <p>Motivated and inspired by what is next, we help our clients navigate the unknown, drive change and transform business </p>\r\n                    <button class=\"btn d-none d-sm-inline-block brand-btn center-block text-uppercase\">put out expertise to work for you</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n</section>\r\n\r\n\r\n\r\n<section class=\"background-2\">\r\n    <div class=\"explanation-text\">\r\n            <h1 style=\"color:white;\">UX/UI DESIGN PROCESS</h1>\r\n    </div>\r\n<div class=\"container animated\" animateOnScroll animationName=\"fadeIn\">\r\n    <div class=\"row space\" align=\"center\">\r\n            <div class=\"col-md-2\" >\r\n                <div class=\"ui-title\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\" width=\"512px\" height=\"512px\"><g transform=\"matrix(6.12323e-17 -1 1 6.12323e-17 0 512)\"><g>\r\n                                <g>\r\n                                    <path d=\"M512,65.826l-76.797,10.969L446.175,0l-58.415,58.413c-39.762-27.068-87.789-42.898-139.518-42.898    C111.141,15.515,0,126.656,0,263.758S111.141,512,248.242,512c137.1,0,248.242-111.141,248.242-248.242    c0-51.729-15.83-99.758-42.898-139.52L512,65.826z M390.864,406.379c-38.096,38.096-88.745,59.075-142.621,59.075    s-104.527-20.98-142.621-59.075c-38.096-38.094-59.076-88.745-59.076-142.622s20.98-104.527,59.076-142.621    c38.094-38.096,88.745-59.076,142.621-59.076c46.04,0,89.715,15.332,125.223,43.562l-55.467,55.467    c-19.881-13.534-43.892-21.453-69.756-21.453c-68.551,0-124.121,55.571-124.121,124.121s55.571,124.121,124.121,124.121    s124.121-55.571,124.121-124.121c0-25.864-7.919-49.875-21.453-69.756l55.467-55.467c28.23,35.506,43.562,79.183,43.562,125.223    C449.939,317.634,428.96,368.283,390.864,406.379z M237.992,274.008c4.544,4.544,10.501,6.816,16.457,6.816    c5.956,0,11.913-2.271,16.455-6.817l46.1-46.1c5.616,10.732,8.814,22.922,8.814,35.851c0,42.775-34.8,77.576-77.576,77.576    s-77.576-34.8-77.576-77.576s34.8-77.576,77.576-77.576c12.929,0,25.118,3.196,35.849,8.814l-46.1,46.1    C228.903,250.185,228.903,264.92,237.992,274.008z\" data-original=\"#000000\" class=\"active-path\" data-old_color=\"#000000\" fill=\"#000000\"/>\r\n                                </g>\r\n                            </g></g> </svg>\r\n                </div>\r\n                    <div class=\"ui-heading\">Understanding<br></div>\r\n                    <div class=\"ui-description\">\r\n                                    Listen to stakeholders Understand business objectives Functional requirements Technology constraints\r\n                    </div>               \r\n            </div>\r\n            <div class=\"col-md-2\" >\r\n                    <div class=\"ui-title\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" width=\"512px\" height=\"512px\" viewBox=\"0 0 448 448\" style=\"enable-background:new 0 0 448 448;\" xml:space=\"preserve\"><g><g>\r\n                                    <path d=\"M279.412,311.368c-11.055-1.759-11.307-32.157-11.307-32.157s32.484-32.158,39.564-75.401   c19.045,0,30.809-45.973,11.76-62.148C320.227,124.635,343.91,8,224,8c-119.911,0-96.225,116.635-95.432,133.662   c-19.047,16.175-7.285,62.148,11.761,62.148c7.079,43.243,39.564,75.401,39.564,75.401s-0.252,30.398-11.307,32.157   C132.976,317.034,0,375.686,0,440h224h224C448,375.686,315.023,317.034,279.412,311.368z\" data-original=\"#000000\" class=\"active-path\" data-old_color=\"#000000\" fill=\"#000000\"/>\r\n                                </g></g> </svg>\r\n                    </div>\r\n                            <div class=\"ui-heading\">User Research<br></div>\r\n                            <div class=\"ui-description\">\r\n                                    Personas Ethnographic research Interviews & observations User stories & story map\r\n                            </div>                        \r\n            </div>\r\n            <div class=\"col-md-2\" >\r\n                    <div class=\"ui-title\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 503.532 503.532\" style=\"enable-background:new 0 0 503.532 503.532;\" xml:space=\"preserve\" width=\"512px\" height=\"512px\"><g transform=\"matrix(-1.83697e-16 -1 1 -1.83697e-16 8.52651e-14 503.532)\"><g>\r\n                                    <g>\r\n                                        <path d=\"M456.895,46.66C426.803,16.564,386.808,0,344.248,0c-42.552,0-82.56,16.568-112.652,46.66    c-54.644,54.64-61.188,139.424-19.696,201.324l-2.952,2.944c-8.244,8.256-10.4,20.328-6.476,30.608l-29.828,29.824l-3.432-3.424    c-1.508-1.508-3.92-1.548-5.48-0.084L8.564,453.796c-11.356,11.36-11.356,29.84,0,41.196c5.508,5.504,12.812,8.54,20.6,8.54    c7.772,0,15.084-3.036,20.672-8.624l145.872-155.084c1.452-1.552,1.416-3.98-0.084-5.48l-3.436-3.432l29.832-29.82    c3.304,1.256,6.792,1.916,10.276,1.916c7.364,0,14.728-2.792,20.328-8.4l2.916-2.92c26.024,17.52,56.636,26.94,88.708,26.94    c42.56,0,82.556-16.576,112.648-46.664C519.016,209.844,519.016,108.772,456.895,46.66z M429.124,244.18    c-22.672,22.66-52.816,35.152-84.876,35.152c-32.064,0-62.208-12.492-84.872-35.152c-46.8-46.792-46.8-122.944,0-169.744    c22.664-22.676,52.808-35.152,84.88-35.152c32.06,0,62.204,12.476,84.868,35.144C475.928,121.22,475.928,197.372,429.124,244.18z\" data-original=\"#000000\" class=\"active-path\" data-old_color=\"#000000\" fill=\"#000000\"/>\r\n                                    </g>\r\n                                </g></g> </svg>\r\n                    </div>\r\n                            <div class=\"ui-heading\">Analytics & Discovery<br></div>\r\n                            <div class=\"ui-description\">\r\n                                    Metrics & analytics Competitive analysis Ideation & strategy Benchmarking\r\n                            </div>                       \r\n            </div>\r\n            <div class=\"col-md-2\" >\r\n                    <div class=\"ui-title\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 27.271 27.271\" style=\"enable-background:new 0 0 27.271 27.271;\" xml:space=\"preserve\" width=\"512px\" height=\"512px\"><g><g>\r\n                                    <path d=\"M25.324,1.948H1.953C0.871,1.948,0,2.819,0,3.899v19.477c0,1.074,0.871,1.947,1.953,1.947h23.371   c1.072,0,1.947-0.873,1.947-1.947V3.899C27.271,2.819,26.396,1.948,25.324,1.948z M9.314,3.411c0.535,0,0.973,0.436,0.973,0.975   c0,0.537-0.438,0.973-0.973,0.973c-0.537,0-0.973-0.436-0.973-0.973C8.342,3.846,8.777,3.411,9.314,3.411z M6.334,3.411   c0.535,0,0.973,0.436,0.973,0.975c0,0.537-0.438,0.973-0.973,0.973c-0.541,0-0.977-0.436-0.977-0.973   C5.357,3.846,5.793,3.411,6.334,3.411z M3.41,3.411c0.539,0,0.973,0.436,0.973,0.975c0,0.537-0.434,0.973-0.973,0.973   c-0.537,0-0.973-0.436-0.973-0.973C2.438,3.846,2.873,3.411,3.41,3.411z M25.324,23.376H1.953V6.839h23.371V23.376z\" data-original=\"#000000\" class=\"active-path\" data-old_color=\"#000000\" fill=\"#000000\"/>\r\n                                    <rect x=\"4.955\" y=\"11.149\" width=\"3.701\" height=\"1.252\" data-original=\"#000000\" class=\"active-path\" data-old_color=\"#000000\" fill=\"#000000\"/>\r\n                                    <rect x=\"10.506\" y=\"11.149\" width=\"11.812\" height=\"1.252\" data-original=\"#000000\" class=\"active-path\" data-old_color=\"#000000\" fill=\"#000000\"/>\r\n                                    <rect x=\"4.955\" y=\"14.264\" width=\"3.701\" height=\"1.254\" data-original=\"#000000\" class=\"active-path\" data-old_color=\"#000000\" fill=\"000000\"/>\r\n                                    <rect x=\"4.955\" y=\"17.21\" width=\"3.701\" height=\"1.254\" data-original=\"#000000\" class=\"active-path\" data-old_color=\"#000000\" fill=\"#000000\"/>\r\n                                    <rect x=\"10.506\" y=\"14.264\" width=\"11.812\" height=\"1.254\" data-original=\"#000000\" class=\"active-path\" data-old_color=\"#000000\" fill=\"#000000\"/>\r\n                                    <rect x=\"10.506\" y=\"17.21\" width=\"11.812\" height=\"1.254\" data-original=\"#000000\" class=\"active-path\" data-old_color=\"#000000\" fill=\"#000000\"/>\r\n                                    \r\n                                </g></g> </svg>\r\n                    </div>\r\n                            <div class=\"ui-heading\">Wireframes<br></div>\r\n                            <div class=\"ui-description\">\r\n                                    Concept sketching System/process flow Information architecture Interaction design\r\n                            </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-2\" >\r\n                    <div class=\"ui-title\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 319.286 319.286\" style=\"enable-background:new 0 0 319.286 319.286;\" xml:space=\"preserve\" width=\"512px\" height=\"512px\" class=\"\"><g transform=\"matrix(-1.83697e-16 1 -1 -1.83697e-16 319.286 0)\"><g>\r\n                                    <g id=\"Nibs_2_\">\r\n                                        <g>\r\n                                            <path d=\"M86.798,248.52l-16.031-16.031l-32.063-32.063c-4.422-4.422-11.61-4.422-16.031,0c-4.422,4.422-4.422,11.61,0,16.031     l16.031,16.031c-0.023,0.023-0.023,0.023-0.023,0.023l-32.04,32.04c-8.843,8.843-8.866,23.219,0,32.063l16.031,16.031     c8.866,8.866,23.219,8.843,32.063,0l32.04-32.04l0.045-0.023l16.031,16.031c4.422,4.422,11.61,4.422,16.031,0     c4.422-4.422,4.422-11.61,0-16.031L86.798,248.52z M78.793,96.211l-16.031,96.188l64.125,64.125l96.211-16.031L319.286,0     L78.793,96.211z M206.772,220.244l-72.107,12.018l-47.618-47.64l12.018-72.107l152.808-61.132L210.06,93.195l0,0l-20.521,20.498     c-12.63-5.986-28.14-3.9-38.593,6.553c-13.288,13.288-13.288,34.806,0,48.094c13.288,13.288,34.829,13.288,48.094,0     c10.453-10.453,12.562-25.986,6.53-38.616l1.474-1.474l0,0l60.837-60.837L206.772,220.244z M183.008,152.332     c-4.422,4.422-11.61,4.422-16.031,0c-4.422-4.422-4.422-11.61,0-16.031c4.422-4.422,11.61-4.422,16.031,0     S187.43,147.887,183.008,152.332z\" data-original=\"#000000\" class=\"active-path\" data-old_color=\"#ffffff\" fill=\"#000000\"/>\r\n                                        </g>\r\n                                    </g>\r\n                                </g></g> </svg>\r\n                    </div>\r\n                            <div class=\"ui-heading\">Mockups & Prototypes<br></div>\r\n                            <div class=\"ui-description\">\r\n                                    Brand identity integration High-fidelity mockups Interactive prototypes\r\n                            </div> \r\n            </div>\r\n            <div class=\"col-md-2\" >\r\n                    <div class=\"ui-title\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 300 300\" style=\"enable-background:new 0 0 300 300;\" xml:space=\"preserve\" width=\"512px\" height=\"512px\">\r\n                                <g id=\"XMLID_496_\">\r\n                                    <path id=\"XMLID_497_\" d=\"M5.299,144.645l69.126,25.8l26.756,86.047c1.712,5.511,8.451,7.548,12.924,3.891l38.532-31.412   c4.039-3.291,9.792-3.455,14.013-0.391l69.498,50.457c4.785,3.478,11.564,0.856,12.764-4.926L299.823,29.22   c1.31-6.316-4.896-11.585-10.91-9.259L5.218,129.402C-1.783,132.102-1.722,142.014,5.299,144.645z M96.869,156.711l135.098-83.207   c2.428-1.491,4.926,1.792,2.841,3.726L123.313,180.87c-3.919,3.648-6.447,8.53-7.163,13.829l-3.798,28.146   c-0.503,3.758-5.782,4.131-6.819,0.494l-14.607-51.325C89.253,166.16,91.691,159.907,96.869,156.711z\" fill=\"#000000\"/>\r\n                                </g>\r\n                            </svg>\r\n                                \r\n                    </div>\r\n                            <div class=\"ui-heading\">Finalize & Code<br></div>\r\n                            <div class=\"ui-description\">\r\n                                    Finalize UX deliverables Suggestions/next steps Code front-end interaction\r\n                            </div>  \r\n            </div>\r\n    </div>\r\n</div>\r\n</section>\r\n\r\n\r\n\r\n<section class=\"explanation\" *ngFor=\"let explanation of uiExplanation; let index = index\">\r\n    <div class=\"container-fluid animated\" animateOnScroll animationName=\"fadeIn\">\r\n        <div class=\"row\">\r\n            <div [ngClass]=\"(index%2 == 0)?'col-sm-6':'col-md-6 push-md-6 order-second'\">\r\n                <div class=\"row d-none d-lg-block\">\r\n                    <img src=\"{{explanation.image}}\" class=\"img-fluid height-fix\"/>\r\n                </div>\r\n            </div>\r\n            <div [ngClass]=\"(index%2 != 0)?'col-md-6 pull-md-6 order-first':'col-sm-6'\">\r\n                <div class=\"row\">\r\n                    <div class=\"explanation-text\">\r\n                        <h1>{{explanation.heading}}</h1>\r\n                        <p>{{explanation.description}}</p>\r\n                        <ul>\r\n                            <li *ngFor=\"let services of explanation.services\">{{services}}</li>\r\n                        </ul>\r\n                        <p class=\"technologies\">{{explanation.technologies}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/pages/ui-ux/ui-ux.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiUxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_ux__ = __webpack_require__("./src/app/pages/ui-ux/ui-ux.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_nav_bar_color_service__ = __webpack_require__("./src/app/Services/nav-bar-color.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UiUxComponent = (function () {
    function UiUxComponent(navBarColorService) {
        this.navBarColorService = navBarColorService;
        this.deviceHeight = (window.screen.height) - 130;
        this.uiExplanation = __WEBPACK_IMPORTED_MODULE_1__ui_ux__["a" /* uiUx */];
    }
    UiUxComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    /* Changing navbar color on respective scrolling positions */
    UiUxComponent.prototype.doSomething = function (event) {
        if (window.pageYOffset > 100) {
            this.navBarColorService.navBarBackgroundColor.next("white");
            this.navBarColorService.logoColor.next("./assets/images/logo_black.png");
            this.navBarColorService.hamBurger.next("black");
            this.navBarColorService.currentPageName.next("career");
            this.navBarColorService.tFlagValue.next(false);
            console.log("done! navbar color changed");
        }
        else {
            this.navBarColorService.navBarBackgroundColor.next("transparent");
            this.navBarColorService.logoColor.next("./assets/images/logo_white.png");
            this.navBarColorService.hamBurger.next("white");
            this.navBarColorService.currentPageName.next("career");
            this.navBarColorService.tFlagValue.next(true);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UiUxComponent.prototype, "doSomething", null);
    UiUxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ui-ux',
            template: __webpack_require__("./src/app/pages/ui-ux/ui-ux.component.html"),
            styles: [__webpack_require__("./src/app/pages/ui-ux/ui-ux.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_nav_bar_color_service__["a" /* NavBarColorService */]])
    ], UiUxComponent);
    return UiUxComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui-ux/ui-ux.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return uiUx; });
var uiUx = [{
        image: "./assets/images/ui-ux/ux-stratrgy.jpg",
        heading: "UX STRATEGY",
        description: "We enable organizations gain competitive advantage through user experience (UX) strategies that impact their product and business success.We help startups and enterproises with concept ideation & validation, MVP definition, and product phase planning.",
        services: ["Customer Reasearch", "Experience Mapping", "User Profiling", "Ux Audit and analysis"]
    }, {
        image: "./assets/images/ui-ux/ux-design.jpg",
        heading: "UX DESIGN",
        description: "From delivering Interaction & UI Designs starting from a product idea/concept to driving significant product UX revamp efforts for products-in-market, we help companies at any stage with UX designs. We aslo support them with the corporate branding,Logo designs,User Research and UX reviews.",
        services: ["Visual Design", "Product Design", "Prototyping", "Branding & Identity", "Logo Design", "Graphic User Interface"]
    }, {
        image: "./assets/images/ui-ux/ui-development.jpg",
        heading: "UI DEVELOPMENT",
        description: "We offer UI app development for Native Mobile applications on iOS or Android, Cross-platform Hybrid Mobile applications and Responsive/reactive Web applications. We work on from simple, HTML5/CSS mockups, or interactive javascript prototypes to fully integrated UI applications.",
        services: ["Mobile App UI", "Web Design", "Responsive/Reactive Web Apps"],
        technologies: "Our developers have expertise in Android, PhoneGap & ionic frameworks for mobile apps, HTML5, CSS (Sass, Bootstrap, Foundation, Media Queries, etc.), and Javascript frameworks (Angular 2, jQuery, etc.) for Web Applications."
    }];


/***/ }),

/***/ "./src/app/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Components_menu_list_menuList_component__ = __webpack_require__("./src/app/Components/menu-list/menuList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_header_header_component__ = __webpack_require__("./src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_menu_section_menu_section_component__ = __webpack_require__("./src/app/components/menu-section/menu-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_scrollify_scrollify_component__ = __webpack_require__("./src/app/Components/scrollify/scrollify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








 //added in shared module inorder to use in multiple places
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__Components_menu_list_menuList_component__["a" /* MenuListComponent */], __WEBPACK_IMPORTED_MODULE_2__components_header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_3__components_footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_4__components_menu_section_menu_section_component__["a" /* MenuSectionComponent */], __WEBPACK_IMPORTED_MODULE_5__Components_scrollify_scrollify_component__["a" /* ScrollifyComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_8__angular_forms__["d" /* FormsModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__Components_menu_list_menuList_component__["a" /* MenuListComponent */], __WEBPACK_IMPORTED_MODULE_2__components_header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_3__components_footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_4__components_menu_section_menu_section_component__["a" /* MenuSectionComponent */], __WEBPACK_IMPORTED_MODULE_5__Components_scrollify_scrollify_component__["a" /* ScrollifyComponent */], __WEBPACK_IMPORTED_MODULE_8__angular_forms__["d" /* FormsModule */]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map