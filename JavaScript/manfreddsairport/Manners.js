"use strict";

function isJson(e) {
    try {
        JSON.parse(e)
    } catch (e) {
        return !1
    }
    return !0
}

function validateEmail(e) {
    var t = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
    return !!t.test(e)
}

function validateMultipleEmailsCommaSeparated(e, t) {
    var a = e.value;
    if ("" !== a)
        for (var o = a.split(t), n = 0; n < o.length; n++)
            if ("" !== o[n] && !validateEmail(o[n])) return e.focus(), !1;
    return !0
}

function isSelected(e) {
    var t = !1;
    return angular.forEach(e, function(e) {
        e && (t = !0)
    }), t
}

function loadGoogleAPI() {
    var e;
    try {
        void 0 !== typeof google && void 0 !== typeof google.maps || (e = document.createElement("script"), e.type = "text/javascript", e.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD-RaihsM1UfBAt_hpchM2xzQVlzLqvbgw&libraries=places&language=en", $("head").append(e))
    } catch (t) {
        e = document.createElement("script"), e.type = "text/javascript", e.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD-RaihsM1UfBAt_hpchM2xzQVlzLqvbgw&libraries=places&language=en", $("head").append(e)
    }
}

function initMap() {
    var e = new google.maps.Map(document.getElementById("map"), {
            center: {
                lat: -34.397,
                lng: 150.644
            },
            zoom: 6
        }),
        t = new google.maps.InfoWindow({
            map: e
        });
    navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(a) {
        var o = {
            lat: a.coords.latitude,
            lng: a.coords.longitude
        };
        t.setPosition(o), t.setContent("Location found."), e.setCenter(o)
    }, function() {
        handleLocationError(!0, t, e.getCenter())
    }) : handleLocationError(!1, t, e.getCenter())
}

function handleLocationError(e, t, a) {
    t.setPosition(a), t.setContent(e ? "Error: The Geolocation service failed." : "Error: Your browser doesn't support geolocation.")
}

function resetMap(e) {
    if (null !== e) {
        var t = e.getZoom(),
            a = e.getCenter();
        google.maps.event.trigger(e, "resize"), e.setZoom(t), e.setCenter(a)
    }
}

function calculateAge(e) {
    var t = Date.now() - e.getTime(),
        a = new Date(t);
    return Math.abs(a.getUTCFullYear() - 1970)
}

function isImage(e) {
    var t = $q.defer(),
        a = new Image;
    return a.onerror = function() {
        t.resolve(!1)
    }, a.onload = function() {
        t.resolve(!0)
    }, a.src = e, t.promise
}

function arrayUnique(e) {
    for (var t = e.concat(), a = 0; a < t.length; ++a)
        for (var o = a + 1; o < t.length; ++o) t[a] === t[o] && t.splice(o--, 1);
    return t
}

function isEmpty(e) {
    for (var t in e)
        if (e.hasOwnProperty(t)) return !1;
    return JSON.stringify(e) === JSON.stringify({})
}

function isExists(e, t) {
    var a = !1;
    return e && e.forEach(function(e) {
        e.name === t && (a = !0)
    }), a
}

function isItemExists(e, t) {
    var a = !1;
    return e.forEach(function(e) {
        e === t && (a = !0)
    }), a
}

function isTrue(e, t, a) {
    var o = !1;
    return e.forEach(function(e) {
        e[t] === a && (o = !0)
    }), o
}

function isItemSelected(e, t) {
    var a = !1;
    return e.forEach(function(e) {
        e.receiver_id === t && (a = !0)
    }), a
}

function isEmailSelected(e, t) {
    var a = !1;
    return e.forEach(function(e) {
        e === t && (a = !0)
    }), a
}

function isAthleteSelected(e, t) {
    var a = !1;
    return e.forEach(function(e) {
        e.id === t && (a = !0)
    }), a
}

function isSubstring(e, t) {
    var a = !1;
    return e.forEach(function(e) {
        e.name.toUpperCase().indexOf(t.toUpperCase()) > -1 && (a = !0)
    }), a
}

function calculateFee(e, t) {
    var a, o;
    if (e && t) {
        o = null === t ? 0 : t, a = null === e ? 0 : e;
        var n = Math.round(parseInt(a) + parseFloat(a * o));
        return n <= e && (n = angular.copy(parseInt(e) + 1)), null !== n && 0 !== n || (n = 0), n
    }
    return 0
}

function getParameterByName(e, t) {
    t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
    var a = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
        o = a.exec(t);
    return o ? o[2] ? decodeURIComponent(o[2].replace(/\+/g, " ")) : "" : null
}

function findObjectByKeyValue(e, t, a) {
    for (var o = 0; o < e.length; o++)
        if (e[o][t] === a) return e[o]
}

function getItemIndex(e, t) {
    for (var a = 0; a < e.length; a++)
        if (e[a].id.$oid === t) return a
}

function setCurrentDate(e) {
    currentDate = e, weekStart = currentDate.clone().startOf("week"), weekEnd = currentDate.clone().endOf("week")
}

function removejscssfile(e, t) {
    for (var a = "js" == t ? "script" : "css" == t ? "link" : "none", o = "js" == t ? "src" : "css" == t ? "href" : "none", n = document.getElementsByTagName(a), s = n.length; s >= 0; s--) n[s] && null != n[s].getAttribute(o) && n[s].getAttribute(o).indexOf(e) != -1 && n[s].parentNode.removeChild(n[s])
}

function isMobile() {
    return !!/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini|Googlebot-Mobile/i.test(navigator.userAgent)
}

function getBrowserVersion() {
    var e, t, a, o = navigator.userAgent,
        n = navigator.appName,
        s = "" + parseFloat(navigator.appVersion),
        i = parseInt(navigator.appVersion, 10);
    return (t = o.indexOf("Chrome")) !== -1 ? (n = "Chrome", s = o.substring(t + 7)) : (t = o.indexOf("MSIE")) !== -1 ? (n = "Microsoft Internet Explorer", s = o.substring(t + 5)) : (t = o.indexOf("Firefox")) !== -1 ? n = "Firefox" : (t = o.indexOf("Safari")) !== -1 ? (n = "Safari", s = o.substring(t + 7), (t = o.indexOf("Version")) !== -1 && (s = o.substring(t + 8))) : (e = o.lastIndexOf(" ") + 1) < (t = o.lastIndexOf("/")) && (n = o.substring(e, t), s = o.substring(t + 1), n.toLowerCase() === n.toUpperCase() && (n = navigator.appName)), (a = s.indexOf(";")) !== -1 && (s = s.substring(0, a)), (a = s.indexOf(" ")) !== -1 && (s = s.substring(0, a)), i = parseInt("" + s, 10), isNaN(i) && (s = "" + parseFloat(navigator.appVersion), i = parseInt(navigator.appVersion, 10)), i
}

function hyphenSeparated(e) {
    return e.toLowerCase().split(" ").join("-")
}

function separateHyphenedString(e) {
    var t = e.split("-"),
        a = "";
    return t.forEach(function(e) {
        a = a + e.capitalize() + " "
    }), a.trim()
}

function removeLastWord(e) {
    var t = e.split(" ");
    return t.pop(), t.join(" ")
}

function findActivityByName(e, t) {
    for (var a = 0; a < e.length; a++)
        if (t && e[a].activity.toLowerCase() === t.toLowerCase()) return e[a]
}

function findClubByID(e, t) {
    for (var a = 0; a < e.length; a++)
        if (e[a]._id.$oid === t) return e[a]
}

function findClubByName(e, t) {
    for (var a = 0; a < e.length; a++)
        if (t && e[a].name.toLowerCase() === t.toLowerCase()) return e[a]
}

function isNonEmptyObject(e) {
    return !(!e || null === e || isEmpty(e))
}

function loadAddToCalendarScript() {
    if (removejscssfile("atc.min.js", "js"), !window.addtocalendar || (window.addtocalendar.load(), "function" != typeof window.addtocalendar.start)) {
        window.ifaddtocalendar = 1;
        var e = document,
            t = e.createElement("script"),
            a = "getElementsByTagName";
        t.type = "text/javascript", t.charset = "UTF-8", t.async = !0, t.src = ("https:" === window.location.protocol ? "https" : "http") + "://addtocalendar.com/atc/1.5/atc.min.js";
        var o = e[a]("head")[0];
        o.appendChild(t), window.addtocalendar && (window.addtocalendar.load(), "function" == typeof window.addtocalendar.start)
    }
}

function addRichSnippetScript(e, t, a) {
    var o = document.getElementsByTagName("body")[0],
        n = document.createElement("script");
    n.type = "application/ld+json", n.text = ["{", '"@context": "http://schema.org/",', '"@type": "AggregateRating",', '"ratingValue": ', t, ",", '"bestRating": 5,', '"worstRating": 1,', '"reviewCount": ', a, ",", '"itemReviewed": {', '"@type": "Person",', '"name": "', e, '"', "}", "}"].join(""), o.appendChild(n)
}

function loadCSS(e) {
    $('<link rel="stylesheet" href="' + e + '" type="text/css" media="screen" defer/>').insertBefore("#mainCSS")
}

function formatUTCAMPM(e) {
    var t = e.getUTCHours(),
        a = e.getUTCMinutes(),
        o = t >= 12 ? "pm" : "am";
    t %= 12, t = t ? t : 12, a = a < 10 ? "0" + a : a;
    var n = t + ":" + a + " " + o;
    return n
}

function getItemIndexInList(e, t, a) {
    for (var o = 0; o < e.length; o++)
        if (e[o][t] === a) return o
}

function mathRoundDate() {}! function() {
    angular.module("Coachco", ["ngImageCache", "ngResource", "angular-flexslider", "ui.router", "ui.calendar", "ui.bootstrap", "bootstrap3-typeahead", "ngScrollbars", "ngCookies", "firebase", "ngTouch", "braintree-angular", "ngSanitize", "ngImgCrop", "ngFileUpload", "infinite-scroll", "MassAutoComplete", "bcherny/formatAsCurrency", "updateMeta", "ngAnimate", "pusher-angular", "ui.date", "oc.lazyLoad", "ui.date.multiselect"]).constant("clientTokenPath", "/api/braintree");
    angular.module("infinite-scroll").value("THROTTLE_MILLISECONDS", 500)
}(),
    function() {
        var e = function(e) {
            function t(t) {
                var a = e.getJwtToken(),
                    o = e.getExp();
                return a && o && o > (new Date).getTime() ? (t.headers = t.headers || {}, t.headers.Authorization = "Bearer " + a) : a && e.removeTokens(), t.headers["Cache-Control"] = "no-cache, max-age=0, must-revalidate, no-store", t
            }
            return {
                request: t
            }
        };
        e.$inject = ["AuthTokenFactory"], angular.module("Coachco").factory("AuthInterceptor", e)
    }(),
    function() {
        var e = function(e, t, a, o, n, s, i) {
            a.classNameFilter(/fade-element-\w+/), e.html5Mode({
                enabled: !0,
                requireBase: !1
            }).hashPrefix("!"), t.interceptors.push("AuthInterceptor"), angular.module("Coachco").register = {
                controller: o.register,
                directive: n.directive,
                filter: s.register,
                factory: i.factory,
                service: i.service
            }
        };
        e.$inject = ["$locationProvider", "$httpProvider", "$animateProvider", "$controllerProvider", "$compileProvider", "$filterProvider", "$provide"], angular.module("Coachco").config(e).config(["$ocLazyLoadProvider", function(e) {
            e.config({
                events: !0,
                modules: [{
                    name: "angular-libs",
                    files: ["/lib/other-vendor.min.js"],
                    serie: !0
                }, {
                    name: "coachSearch",
                    files: ["/css/core-coach-profile.min.css", "/css/core-coach-dashboard.min.css"],
                    serie: !0
                }, {
                    name: "registration",
                    files: ["/css/core-registration.min.css"],
                    serie: !0
                }, {
                    name: "coachDashbaord",
                    files: ["/css/core-coach-profile.min.css", "/css/core-dashboard.min.css", "/css/core-coach-dashboard.min.css"],
                    serie: !0
                }, {
                    name: "clientDashbaord",
                    files: ["/css/core-dashboard.min.css", "/css/core-client-profile.min.css", "/css/core-coach-profile.min.css"],
                    serie: !0
                }, {
                    name: "coachEnrollment",
                    files: ["/css/core-coach-profile.min.css", "/css/core-dashboard.min.css", "/css/core-coach-dashboard.min.css"],
                    serie: !0
                }, {
                    name: "adminDashbaord",
                    files: ["/css/core-dashboard.min.css"]
                }]
            })
        }])
    }(),
    function() {
        var e = function(e, t, a, o, n) {
            a.html5Mode(!0).hashPrefix("!"), t.otherwise("/"), t.rule(function(e, t) {
                var a = t.path(),
                    o = "/" === a[a.length - 1];
                if (o) {
                    var n = a.substr(0, a.length - 1);
                    return n
                }
            }), e.state("app", {
                url: "/",
                abstract: !0,
                views: {
                    "banner@": o.BANNER
                },
                onEnter: ["$rootScope", function(e) {
                    e.page = "other"
                }]
            }).state("home", {
                url: "",
                views: {
                    "header@": o.HEADER,
                    "content@": {
                        templateUrl: "partials/home/views/home.main.html",
                        controller: "mainController"
                    },
                    "footer@": o.FOOTER
                },
                parent: "app",
                onEnter: ["$rootScope", "AuthFactory", function(e, t) {
                    e.loggedIn = t.isLoggedIn(), e.page = "home", e.ngTitle = n.commonTitle, e.ngDescription = n.commonDesc, e.ngKeywords = n.commonKeywords
                }],
                onExit: ["$rootScope", function(e) {
                    e.page = "other";
                    var t = angular.element("#slider0");
                    sessionStorage.setItem("carouselHeight", t.height())
                }]
            }).state("coachSearch", {
                url: "",
                abstract: !0,
                parent: "app",
                views: {
                    "header@": o.HEADER,
                    "content@": {
                        templateUrl: "partials/coach/views/coachSearch.html"
                    },
                    "footer@": o.FOOTER
                },
                onEnter: ["$rootScope", function(e) {
                    e.ngTitle = n.commonTitle, e.ngDescription = n.commonDesc, e.ngKeywords = n.commonKeywords
                }]
            }).state("coachSearch.coaches", {
                url: "coaches-search/:searchParam/:sport",
                params: {
                    searchType: null,
                    coachId: null,
                    name: null,
                    zip: null,
                    club: null,
                    fromPage: null,
                    prevSearchType: null
                },
                views: {
                    summary: {
                        templateUrl: "partials/coach/views/coach.booking.html",
                        controller: "coachBookingController"
                    }
                },
                resolve: {
                    coachSearchParams: ["$stateParams", "$rootScope", "$ocLazyLoad", function(e, t, a) {
                        var o = separateHyphenedString(e.sport);
                        return angular.isDefined(e.zip) && null !== e.zip ? (t.ngTitle = o + " Coaches " + e.zip + " | StriveFar", t.ngDescription = "Book top private " + o + " coaches for personal training and one on lessons in " + e.zip + ". Professional " + o + " coaches for one on one lessons.", t.ngKeywords = o + " lessons, best " + o + " lessons, " + o + " lessons in " + e.zip + ", " + o + " classes, " + o + " lessons") : angular.isDefined(e.name) && null !== e.name ? (t.ngTitle = e.name.capitalize() + ", Private " + o + " Coach | StriveFar", t.ngDescription = e.name.capitalize() + " is a private " + o + " coach. Book " + e.name.capitalize() + " online for personal one on one lessons and trainings.", t.ngKeywords = o + " lessons, best " + o + " lessons, " + o + " lessons with " + e.name + ", " + o + " classes, " + o + " lessons") : angular.isDefined(e.club) && null !== e.club ? (t.ngDescription = "Book top private " + o + " coaches for personal training and one on lessons in " + e.club + " club. Professional " + o + " coaches for one on one lessons.", t.ngTitle = "Private " + o + " Coaches, " + e.club.capitalize() + " | StriveFar", t.ngKeywords = o + " lessons, best " + o + " lessons, " + o + " lessons with " + e.club + ", " + o + " classes, " + o + " lessons") : parseInt(e.searchParam) ? (t.ngTitle = "Private " + o + " Coaches " + e.searchParam + " | StriveFar", t.ngDescription = "Book top private " + o + " coaches for personal training and one on lessons in " + e.searchParam + ". Professional " + o + " coaches for one on one lessons.", t.ngKeywords = o + " lessons, best " + o + " lessons, " + o + " lessons in " + e.searchParam + ", " + o + " classes, " + o + " lessons") : (t.ngTitle = separateHyphenedString(e.searchParam) + ", Private " + o + " Coach | StriveFar", t.ngDescription = separateHyphenedString(e.searchParam) + " is a private " + o + " coach. Book " + separateHyphenedString(e.searchParam) + " online for personal one on one lessons and trainings.", t.ngKeywords = o + " lessons, best " + o + " lessons, " + o + " lessons with " + separateHyphenedString(e.searchParam) + ", " + o + " classes, " + o + " lessons"), localStorage.removeItem("BookCoach"), t.SEO = !1, e
                    }]
                },
                parent: "coachSearch",
                onExit: ["$rootScope", "$stateParams", function(e, t) {
                    angular.isDefined(t.coachId) && localStorage.setItem("coachId", t.coachId), localStorage.removeItem("currentSchedule"), localStorage.removeItem("pageSchedule"), localStorage.removeItem("rescheduleSession"), localStorage.removeItem("stateParams")
                }]
            }).state("reviews", {
                url: "coach/:coachId/reviews",
                views: {
                    "content@": {
                        templateUrl: "partials/coach/views/coach.reviews.html",
                        controller: "coachReviewController"
                    }
                },
                parent: "app",
                onEnter: ["$rootScope", function(e) {
                    e.ngTitle = n.commonTitle, e.ngDescription = n.commonDesc, e.ngKeywords = n.commonKeywords
                }]
            }).state("errorPage", {
                url: "unaccessible",
                params: {
                    message: null
                },
                views: {
                    "header@": o.HEADER,
                    "content@": {
                        templateUrl: "partials/shared/views/errorPage.html",
                        controller: "errorController"
                    }
                },
                parent: "app",
                onEnter: ["$rootScope", function(e) {
                    e.ngTitle = n.commonTitle, e.ngDescription = n.commonDesc, e.ngKeywords = n.commonKeywords
                }]
            }).state("sitemap", {
                url: "sitemap",
                views: {
                    "header@": o.HEADER,
                    "content@": {
                        templateUrl: "partials/shared/views/sitemap.html",
                        controller: "sitemapController"
                    }
                },
                parent: "app",
                onEnter: ["$rootScope", function(e) {
                    e.page = "seo", e.SEO = !0, e.ngTitle = n.commonTitle, e.ngDescription = n.commonDesc, e.ngKeywords = n.commonKeywords
                }]
            }).state("company", {
                url: "company",
                views: {
                    "header@": o.HEADER,
                    "content@": {
                        templateUrl: "partials/marketing/company/views/company.html",
                        controller: "marketingController"
                    },
                    "footer@": o.FOOTER
                },
                params: {
                    scrollPage: null
                },
                resolve: {
                    scrollPageSection: ["$stateParams", "$ocLazyLoad", function(e, t) {
                        return t.load("/css/company.min.css"), e
                    }]
                },
                parent: "app",
                onEnter: ["$rootScope", "AuthFactory", function(e, t) {
                    e.loggedIn = t.isLoggedIn(), e.page = "company", e.ngTitle = n.aboutTitle, e.ngDescription = n.companyDesc, e.ngKeywords = n.commonKeywords
                }]
            }).state("Coaches", {
                url: "becomeacoach",
                views: {
                    "header@": o.HEADER,
                    "content@": {
                        templateUrl: "partials/marketing/coaches/views/coaches.html"
                    },
                    "footer@": o.FOOTER
                },
                parent: "app",
                onEnter: ["$rootScope", "AuthFactory", function(e, t) {
                    e.loggedIn = t.isLoggedIn(), e.profileCompletionStatus = t.getCompletionStatus(), e.page = "coaches", e.ngTitle = n.coachesTitle, e.ngDescription = n.coachesDesc, e.ngKeywords = n.commonKeywords
                }],
                resolve: {
                    lazyLoad: ["$stateParams", "$ocLazyLoad", function(e, t) {
                        return t.load("/css/coaches.min.css"), e
                    }]
                }
            }).state("Athletes", {
                url: "athletes_info",
                views: {
                    "header@": o.HEADER,
                    "content@": {
                        templateUrl: "partials/marketing/athletes/views/athletes.html",
                        controller: "bannerController"
                    },
                    "footer@": o.FOOTER
                },
                params: {
                    scrollPage: null
                },
                parent: "app",
                onEnter: ["$rootScope", "AuthFactory", function(e, t) {
                    e.loggedIn = t.isLoggedIn(), e.page = "athletes", e.ngTitle = n.athletesTitle, e.ngDescription = n.athleteDesc, e.ngKeywords = n.commonKeywords
                }],
                resolve: {
                    lazyLoad: ["$stateParams", "$ocLazyLoad", function(e, t) {
                        return t.load("/css/athletes.min.css"), e
                    }]
                }
            }).state("SEOState", {
                url: "coaches/:state/:sport",
                views: {
                    "header@": o.HEADER,
                    "content@": {
                        templateUrl: "partials/marketing/SEO/views/lessons.html",
                        controller: "marketingSEOController"
                    },
                    "footer@": o.FOOTER
                },
                params: {
                    scrollPage: null,
                    state: null
                },
                parent: "app",
                onEnter: ["$rootScope", "$stateParams", function(e, t) {
                    var a = removeLastWord(separateHyphenedString(t.sport));
                    e.ngTitle = a + " Coaches in " + t.state.toUpperCase() + " | StriveFar", e.ngDescription = "Book top private " + a + " coaches for personal training and one on lessons in " + t.state.toUpperCase() + ". Professional " + a + " coaches for one on one lessons.", e.ngKeywords = a + " lessons, best " + a + " lessons, " + a + " lessons in " + t.state + ", " + a + " classes, " + a + " lessons", e.page = "seo", e.SEO = !0
                }],
                resolve: {
                    lazyLoad: ["$stateParams", "$ocLazyLoad", function(e, t) {
                        return t.load(["/css/core-coach-profile.min.css"]), t.load("/css/seo.min.css"), e
                    }]
                }
            }).state("SEO", {
                url: "coaches/:state/:city/:sport",
                views: {
                    "header@": o.HEADER,
                    "content@": {
                        templateUrl: "partials/marketing/SEO/views/lessons.html",
                        controller: "marketingSEOController"
                    },
                    "footer@": o.FOOTER
                },
                params: {
                    scrollPage: null,
                    state: null
                },
                parent: "app",
                onEnter: ["$rootScope", "$stateParams", function(e, t) {
                    var a = removeLastWord(separateHyphenedString(t.sport));
                    e.ngTitle = a + " Coaches in " + separateHyphenedString(t.city) + ", " + t.state.toUpperCase() + " | StriveFar", e.ngDescription = "Book top private " + a + " coaches for personal training and one on lessons in " + separateHyphenedString(t.city) + ", " + t.state.toUpperCase() + ". Professional " + a + " coaches for one on one lessons.", e.ngKeywords = separateHyphenedString(t.city) + " " + a + " lessons, best " + separateHyphenedString(t.city) + " " + a + " lessons, " + a + " lessons in " + separateHyphenedString(t.city) + " " + t.state + ", " + separateHyphenedString(t.city) + " " + a + " classes, " + a + " lessons", e.page = "seo", e.SEO = !0
                }],
                resolve: {
                    lazyLoad: ["$stateParams", "$ocLazyLoad", function(e, t) {
                        return t.load(["/css/core-coach-profile.min.css"]), t.load("/css/seo.min.css"), e
                    }]
                }
            })
        };
        e.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider", "Views", "appConfig"], angular.module("Coachco").config(e)
    }(),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d) {
            function u(e) {
                switch (e) {
                    case "coachSearch":
                        i.load(["coachSearch"]);
                        break;
                    case "adminProfile":
                        i.load(["adminDashbaord"]);
                        break;
                    case "booking":
                        i.load(["registration"]);
                        break;
                    case "clientProfile":
                        i.load(["clientDashbaord"]);
                        break;
                    case "coachEnrollment":
                        i.load(["coachEnrollment"]);
                        break;
                    case "coachProfile":
                    case "reviewCoachProfile":
                        i.load(["coachDashbaord"])
                }
            }
            location.href === n.liveUrl ? e.mode = "live" : location.href === n.productionUrl && (e.mode = "production"), e.$on("$stateChangeStart", function(i, d, m, h) {
                if (u(d.name.split(".")[0]), c.isLoggedIn() && (e.pusher || (console.log("pusher initialied"), window.client = new Pusher(n.pusherKey), e.pusher = t(client))), /Android|Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Googlebot-Mobile/i.test(navigator.userAgent) ? e.isDevice = !0 : e.isDevice = !1, s.baseUrl === n.gaURL) {
                    var p, g;
                    "coachSearch.coaches" === d.name && (p = "/coaches-search/" + m.searchParam + "/" + m.sport, g = m.searchType ? m.searchType.capitalize() + " Search Page: " + separateHyphenedString(m.searchParam) + "/" + m.sport : parseInt(m.searchParam) ? "Zip Search Page: " + separateHyphenedString(m.searchParam) + "/" + m.sport : "Name Search Page: " + separateHyphenedString(m.searchParam) + "/" + m.sport), "acceptInvite" === d.name && (p = "/clients/" + m.client_id + "/accept_invite/" + m.booked_session_id, g = "Accept Coach Created Custom Session"), ga("send", {
                        hitType: "pageview",
                        page: p,
                        title: g
                    })
                }
                if (e.previousState = h.name, "coachSearch.coaches" === d.name && null !== m.coachId ? h.name ? e.coachFromPage = !0 : e.coachFromPage = !1 : e.coachFromPage = !0, ("booking.login" === h.name || "booking.createNewAccount" === h.name) && "coachSearch.coaches" === d.name || "coachSearch.coaches" === h.name && d.name.indexOf("clientProfile.dashboard") >= 0 ? e.fromCalendarView = !0 : d.name.indexOf("clientProfile.dashboard") < 0 && h.name.indexOf("clientProfile.dashboard") < 0 && !e.fromCalendarView && (e.fromCalendarView = !1), "coachSearch.coaches" === h.name && "coachSearch.coaches" === d.name && null !== m.prevSearchType && m.name !== separateHyphenedString(m.searchParam) && (m.searchType = angular.copy(m.prevSearchType), m.name = null), d.requiresLogin)
                    if (c.isLoggedIn()) {
                        if ("coachAddToCalendar" !== d.name && "clientAddToCalendar" !== d.name || (e.acceptInvite = !1, e.redirected = !0, a.go(d.name, m)), ("acceptInvite" === d.name || "acceptSessionInvite" === d.name || "acceptRecurringInvite" === d.name || d.name.indexOf("clientProfile.dashboardView") > -1 || d.name.indexOf("coachProfile.dashboardView") > -1 || "reviewCoach" === d.name || "reviewRequestedCoach" === d.name) && !e.redirected) {
                            i.preventDefault();
                            var f, v;
                            c.isClient() ? ("acceptInvite" !== d.name && "acceptSessionInvite" !== d.name && "acceptRecurringInvite" !== d.name || (e.acceptInvite = !1, e.redirected = !0, a.go(d.name, m)), "reviewCoach" === d.name && (m.client_id === c.getParentId() ? (e.acceptInvite = !1, e.redirected = !0, a.go(d.name, m)) : (e.stateParams = m, e.acceptInvite = !0, e.stateName = d.name, f = "Oops, wrong user!", v = "reviewCoach" === d.name ? "You are already logged in as another user! Please logout and login again as the user who booked this session to rate your coach." : "You are not autorized", l.showAlert(f, v), a.go("home"))), "reviewRequestedCoach" === d.name && (m.email.toLowerCase() === c.getUserEmail().toLowerCase() ? (e.acceptInvite = !1, e.redirected = !0, a.go(d.name, m)) : (e.stateParams = m, e.acceptInvite = !0, e.stateName = d.name, f = "Oops, wrong user!", v = "reviewRequestedCoach" === d.name ? "You are already logged in as another user! Please logout and login again as the user who booked this session to rate your coach." : "You are not autorized", l.showAlert(f, v), a.go("home"))), d.name.indexOf("clientProfile.dashboardView") > -1 && (m.clientId === c.getParentId() ? (e.acceptInvite = !1, e.redirected = !0, m.stateName = d.name, a.go(d.name, m)) : (e.stateParams = m, e.acceptInvite = !0, e.stateName = d.name, f = "Oops, wrong user!", v = d.name.indexOf("clientProfile.dashboardView") > -1 ? "You are already logged in as another user! Please logout and login again as the expected user to view the dashboard" : "You are not autorized", l.showAlert(f, v), a.go("home")))) : c.isCoach() ? ("acceptInvite" !== d.name && "acceptSessionInvite" !== d.name && "acceptRecurringInvite" !== d.name || (f = "Oops, wrong user!", v = "acceptInvite" === d.name || "acceptSessionInvite" === d.name || "acceptRecurringInvite" === d.name ? "You are already logged in as another user! Please logout and login again as the user invited to this session." : "You are not autorized", l.showAlert(f, v), a.go("home")), "reviewCoach" !== d.name && "reviewRequestedCoach" !== d.name || (f = "Oops, wrong user!", v = "You are unable to complete this review as you're logged in as a coach.", l.showAlert(f, v), a.go("home")), d.name.indexOf("coachProfile.dashboardView") > -1 && (m.coachId === c.getCoachId() ? (e.acceptInvite = !1, e.redirected = !0, m.stateName = d.name, a.go(d.name, m)) : (e.stateParams = m, e.acceptInvite = !0, e.stateName = d.name, f = "Oops, wrong user!", v = "coachProfile.dashboardView" === d.name ? "You are already logged in as another user! Please logout and login again as the expected user to view the dashboard" : "You are not autorized", l.showAlert(f, v), a.go("home")))) : (f = "Oops, wrong user!", v = "acceptInvite" === d.name || "acceptSessionInvite" === d.name || "acceptRecurringInvite" === d.name ? "You are already logged in as another user! Please logout and login again as the user invited to this session." : "reviewCoach" === d.name || "reviewRequestedCoach" === d.name ? "You are already logged in as another user! Please logout and login again as the user who booked this session to rate your coach." : "You are not autorized", e.stateParams = m, e.acceptInvite = !0, e.stateName = d.name, l.showAlert(f, v), a.go("home"))
                        }(!c.isAdmin() && !c.isCoach() && d.name.indexOf("coachProfile.dashboard") > -1 || !c.isAdmin() && c.isCoach() && d.name.indexOf("coachProfile.dashboard") > -1 && angular.isDefined(m.coachId) && m.coachId !== c.getCoachId()) && (i.preventDefault(), "coachSearch.coaches" === h.name ? (f = "Warning!", v = "You are unauthorized to view this page!", l.showAlert(f, v)) : a.go("errorPage", {
                            message: "You are unauthorized to view this page! Please check your Login."
                        })), (!c.isAdmin() && !c.isClient() && d.name.indexOf("clientProfile.dashboard") > -1 || !c.isAdmin() && c.isClient() && d.name.indexOf("clientProfile.dashboard") > -1 && angular.isDefined(o.clientId) && o.clientId !== c.getParentId()) && (i.preventDefault(), a.go("errorPage", {
                            message: "You are unauthorized to view this page! Please check your Login."
                        })), s.baseUrl === n.gaURL && ("booking.selectYourAthlete" === d.name ? ga("send", {
                            hitType: "pageview",
                            page: "/select_your_athlete",
                            title: "Select your athletes"
                        }) : "booking.bookingPayment" === d.name ? ga("send", {
                            hitType: "pageview",
                            page: "/payment",
                            title: "Payment"
                        }) : "booking.inviteFriends" === d.name ? ga("send", {
                            hitType: "pageview",
                            page: "/invite_friends",
                            title: "Invite Friends"
                        }) : "booking.login" === d.name && ga("send", {
                            hitType: "pageview",
                            page: "/login",
                            title: "Login"
                        }))
                    } else e.postLoginUrl = r.path(), i.preventDefault(), "acceptInvite" !== d.name && "acceptSessionInvite" !== d.name && "acceptRecurringInvite" !== d.name && "reviewCoach" !== d.name && "reviewRequestedCoach" !== d.name && "clientAddToCalendar" !== d.name && "coachAddToCalendar" !== d.name || (e.stateParams = m, e.acceptInvite = !0, e.stateName = d.name), a.go("booking.login")
            }), e.$on("$stateChangeSuccess", function(t, a, o, n) {
                "coachEnrollment.trainingLocation" === a.name ? e.isTrainingPage = !0 : e.isTrainingPage = !1, n.name.indexOf("clientProfile.dashboard") > -1 && a.name.indexOf("clientProfile.dashboard") > -1 || n.name.indexOf("coachProfile.dashboard") > -1 && a.name.indexOf("coachProfile.dashboard") > -1 || angular.element("html, body").animate({
                    scrollTop: 0
                }, 50)
            }), Boolean(localStorage.getItem("cartCheckOut")) && (d.setSessionTimer("start"), localStorage.setItem("cartCheckOut", !0))
        };
        e.$inject = ["$rootScope", "$pusher", "$state", "$stateParams", "appConfig", "urlConfig", "$ocLazyLoad", "$location", "AuthFactory", "AlertService", "Coachco_CommonService"], angular.module("Coachco").run(e)
    }(),
    function() {
        var e = function(e, t, a, o, n) {
            e.state("adminProfile", {
                url: "",
                abstract: !0,
                views: {
                    "header@": o.HEADER,
                    "content@": {
                        templateUrl: "partials/adminProfile/views/adminProfile.html"
                    },
                    "footer@": o.FOOTER
                },
                parent: "app",
                onEnter: ["$rootScope", function(e) {
                    e.ngTitle = n.commonTitle, e.ngDescription = n.commonDesc
                }]
            }).state("adminProfile.dashboard", {
                url: "admin/:adminId",
                requiresLogin: !0,
                params: {
                    adminId: null
                },
                views: {
                    summary: {
                        templateUrl: "partials/adminProfile/views/adminProfile.dashboard.html",
                        controller: "adminProfileController"
                    }
                },
                resolve: {
                    redirect: ["$stateParams", function(e) {
                        return angular.isDefined(localStorage.getItem("currentStateName")) && null != localStorage.getItem("currentStateName") ? (e.stateName = "adminProfile.dashboard." + localStorage.getItem("currentStateName"), localStorage.removeItem("currentStateName")) : e.stateName = "adminProfile.dashboard.applications", e
                    }]
                },
                parent: "adminProfile",
                onExit: ["$rootScope", "$stateParams", function(e, t) {
                    e.profile = null, angular.isDefined(t.adminId) && localStorage.setItem("adminId", t.adminId)
                }]
            }).state("adminProfile.dashboard.messages", {
                url: "/messages",
                requiresLogin: !0,
                views: {
                    "tab-content": {
                        templateUrl: "partials/adminProfile/views/partials/adminProfile.messages.html",
                        controller: "adminMessagesController"
                    }
                }
            }).state("adminProfile.dashboard.applications", {
                url: "/applications",
                requiresLogin: !0,
                views: {
                    "tab-content": {
                        templateUrl: "partials/adminProfile/views/partials/adminProfile.applications.html",
                        controller: "adminApplicationsController"
                    }
                }
            }).state("adminProfile.dashboard.payments", {
                url: "/payments",
                requiresLogin: !0,
                views: {
                    "tab-content": {
                        templateUrl: "partials/adminProfile/views/partials/adminProfile.payments.html",
                        controller: "adminPaymentsController"
                    }
                }
            }).state("adminProfile.dashboard.sessions", {
                url: "/sessions",
                requiresLogin: !0,
                views: {
                    "tab-content": {
                        templateUrl: "partials/adminProfile/views/partials/adminProfile.sessions.html",
                        controller: "adminSessionsController"
                    }
                }
            }).state("adminProfile.dashboard.clients", {
                url: "/clients",
                requiresLogin: !0,
                views: {
                    "tab-content": {
                        templateUrl: "partials/adminProfile/views/partials/adminProfile.clients.html",
                        controller: "adminClientsController"
                    }
                }
            }).state("adminProfile.dashboard.partners", {
                url: "/partners",
                requiresLogin: !0,
                views: {
                    "tab-content": {
                        templateUrl: "partials/adminProfile/views/partials/adminProfile.partners.html",
                        controller: "adminPartnersController"
                    }
                }
            }).state("reviewCoachProfile", {
                url: "",
                abstract: !0,
                views: {
                    "header@": o.HEADER,
                    "content@": {
                        templateUrl: "partials/coachProfile/views/coachProfile.html"
                    },
                    "footer@": o.FOOTER
                },
                parent: "app"
            }).state("reviewCoachProfile.dashboard", {
                url: "admin/:adminId/coach/:coachId",
                requiresLogin: !0,
                params: {
                    coachId: null
                },
                views: {
                    dashboard: {
                        templateUrl: "partials/coachProfile/views/coachProfile.dashboard.html",
                        controller: "CoachProfileDashboardController"
                    }
                },
                resolve: {
                    redirect: ["$state", "$stateParams", function(e, t) {
                        return angular.isDefined(localStorage.getItem("currentStateName")) && null != localStorage.getItem("currentStateName") ? (t.stateName = "reviewCoachProfile.dashboard." + localStorage.getItem("currentStateName"), localStorage.removeItem("currentStateName")) : t.stateName = "reviewCoachProfile.dashboard.sessions", t
                    }]
                },
                parent: "reviewCoachProfile",
                onExit: ["$rootScope", "$stateParams", function(e, t) {
                    e.profile = null, angular.isDefined(t.coachId) && localStorage.setItem("coachId", t.coachId), angular.isDefined(t.coachId) && localStorage.setItem("adminId", t.adminId)
                }]
            }).state("reviewCoachProfile.dashboard.sessions", {
                url: "/sessions",
                requiresLogin: !0,
                views: {
                    "tab-content": {
                        templateUrl: "partials/coachProfile/views/partials/coachProfile.sessions.html",
                        controller: "CoachSessionController"
                    }
                },
                parent: "reviewCoachProfile.dashboard"
            }).state("reviewCoachProfile.dashboard.messages", {
                url: "/messages",
                requiresLogin: !0,
                views: {
                    "tab-content": {
                        templateUrl: "partials/coachProfile/views/partials/coachProfile.messages.html",
                        controller: "CoachMessagesController"
                    }
                },
                parent: "reviewCoachProfile.dashboard"
            }).state("reviewCoachProfile.dashboard.clients", {
                url: "/clients",
                requiresLogin: !0,
                views: {
                    "tab-content": {
                        templateUrl: "partials/coachProfile/views/partials/coachProfile.clients.html",
                        controller: "CoachClientsController"
                    }
                },
                parent: "reviewCoachProfile.dashboard"
            }).state("reviewCoachProfile.dashboard.clients.athlete", {
                views: {
                    "client-tab-content": {
                        templateUrl: "partials/coachProfile/views/partials/coachProfile.client.athlete.html"
                    }
                },
                parent: "reviewCoachProfile.dashboard.clients"
            }).state("reviewCoachProfile.dashboard.payments", {
                url: "/payments",
                requiresLogin: !0,
                views: {
                    "tab-content": {
                        templateUrl: "partials/coachProfile/views/partials/coachProfile.payments.html",
                        controller: "CoachPaymentsController"
                    }
                },
                parent: "reviewCoachProfile.dashboard"
            }).state("reviewCoachProfile.dashboard.profile", {
                url: "/profile",
                requiresLogin: !0,
                views: {
                    "tab-content": {
                        templateUrl: "partials/coachProfile/views/partials/coachProfile.profile.html",
                        controller: "CoachProfileController"
                    }
                },
                parent: "reviewCoachProfile.dashboard"
            })
        };
        e.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider", "Views", "appConfig"], angular.module("Coachco").config(e)
    }(),
    function() {
        var e = function(e, t, a, o, n) {
            a.html5Mode(!0).hashPrefix("!"), e.state("booking", {
                url: "",
                abstract: !0,
                parent: "app",
                views: {
                    "header@": o.HEADER,
                    "content@": {
                        templateUrl: "partials/booking/views/booking.html"
                    }
                }
            }).state("booking.selectYourAthlete", {
                url: "select_your_athlete",
                requiresLogin: !0,
                parent: "booking",
                views: {
                    summary: {
                        templateUrl: "partials/booking/views/booking.selectYourAthlete.html",
                        controller: "bookingSelectAthleteController"
                    }
                }
            }).state("booking.bookingPayment", {
                url: "payment",
                requiresLogin: !0,
                views: {
                    "content@": {
                        templateUrl: "partials/booking/views/booking.payment.html",
                        controller: "bookingPaymentController"
                    }
                },
                parent: "booking"
            }).state("booking.inviteFriends", {
                url: "invite_friends",
                requiresLogin: !0,
                views: {
                    summary: {
                        templateUrl: "partials/booking/views/booking.inviteFriend.html",
                        controller: "inviteFriendController"
                    }
                },
                parent: "booking"
            }).state("booking.createNewAccount", {
                url: "client/registration",
                views: {
                    summary: {
                        templateUrl: "partials/shared/views/createNewAccount.html",
                        controller: "bookingController"
                    }
                },
                parent: "booking",
                onEnter: ["AuthTokenFactory", "$rootScope", function(e, t) {
                    e.removeTokens(), t.ngTitle = n.createAccountTitle, t.ngDescription = n.commonDesc, t.ngKeywords = n.commonKeywords
                }]
            }).state("booking.login", {
                url: "login",
                views: {
                    summary: {
                        templateUrl: "partials/shared/views/signIn.html",
                        controller: "bookingController"
                    }
                },
                parent: "booking",
                onEnter: ["AuthTokenFactory", "$rootScope", function(e, t) {
                    e.removeTokens(), t.ngTitle = n.loginTitle, t.ngDescription = n.commonDesc, t.ngKeywords = n.commonKeywords
                }]
            }).state("booking.resetPassword", {
                url: "reset_password?:reset_password_token",
                views: {
                    summary: {
                        templateUrl: "partials/shared/views/resetPassword.html",
                        controller: "bookingController"
                    }
                },
                parent: "booking"
            })
        };
        e.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider", "Views", "appConfig"], angular.module("Coachco").config(e)
    }(),
    function(e) {
        var t = function(t, a, o, n, s) {
            o.html5Mode(!0).hashPrefix("!"), t.state("clientProfile", {
                url: "",
                abstract: !0,
                views: {
                    "header@": n.HEADER,
                    "content@": {
                        templateUrl: "partials/clientProfile/views/clientProfile.html"
                    },
                    "footer@": n.FOOTER
                },
                parent: "app",
                onEnter: ["$rootScope", function(e) {
                    e.ngTitle = s.commonTitle,
                        e.ngDescription = s.commonDesc, e.ngKeywords = s.commonKeywords
                }]
            }).state("clientProfile.dashboard", {
                url: "client/:clientId",
                requiresLogin: !0,
                params: {
                    clientId: null
                },
                views: {
                    summary: {
                        templateUrl: "partials/clientProfile/views/clientProfile.dashboard.html",
                        controller: "ClientProfileDashboardController"
                    }
                },
                resolve: {
                    redirect: ["$stateParams", function(t) {
                        var a = localStorage.getItem("currentStateName");
                        return e.isDefined(localStorage.getItem("currentStateName")) && null !== a ? (t.stateName = "clientProfile.dashboard." + a, localStorage.removeItem("currentStateName")) : t.stateName = "clientProfile.dashboard.sessions", t
                    }]
                },
                parent: "clientProfile",
                onExit: ["$rootScope", "$stateParams", function(t, a) {
                    t.profile = null, e.isDefined(a.clientId) && localStorage.setItem("clientId", a.clientId)
                }]
            }).state("clientProfile.dashboardView", {
                url: "client_profile_view/:clientId",
                requiresLogin: !0,
                params: {
                    clientId: null
                },
                views: {
                    summary: {
                        templateUrl: "partials/clientProfile/views/clientProfile.dashboard.html",
                        controller: "ClientProfileDashboardController"
                    }
                },
                resolve: {
                    redirect: ["$stateParams", function(t) {
                        return e.isDefined(localStorage.getItem("currentStateName")) && null != localStorage.getItem("currentStateName") ? (t.stateName = "clientProfile.dashboardView." + localStorage.getItem("currentStateName"), localStorage.removeItem("currentStateName")) : t.stateName = "clientProfile.dashboardView.sessions", t
                    }]
                },
                parent: "clientProfile",
                onExit: ["$rootScope", "$stateParams", function(t, a) {
                    t.profile = null, e.isDefined(a.clientId) && localStorage.setItem("clientId", a.clientId)
                }]
            }).state("clientProfile.dashboard.sessions", {
                url: "/sessions",
                requiresLogin: !0,
                views: {
                    "tab-content": {
                        templateUrl: "/partials/clientProfile/views/partials/clientProfile.sessions.html",
                        controller: "ClientProfileSessionsController"
                    }
                },
                parent: "clientProfile.dashboard"
            }).state("clientProfile.dashboard.messages", {
                url: "/messages",
                requiresLogin: !0,
                views: {
                    "tab-content": {
                        templateUrl: "/partials/clientProfile/views/partials/clientProfile.messages.html",
                        controller: "ClientProfileMessagesController"
                    }
                },
                parent: "clientProfile.dashboard"
            }).state("clientProfile.dashboard.accounts", {
                url: "/profile",
                requiresLogin: !0,
                views: {
                    "tab-content": {
                        templateUrl: "/partials/clientProfile/views/partials/clientProfile.accounts.html",
                        controller: "ClientProfileController"
                    }
                },
                parent: "clientProfile.dashboard"
            }).state("clientProfile.dashboardView.sessions", {
                url: "/sessions",
                requiresLogin: !0,
                views: {
                    "tab-content": {
                        templateUrl: "/partials/clientProfile/views/partials/clientProfile.sessions.html",
                        controller: "ClientProfileSessionsController"
                    }
                },
                parent: "clientProfile.dashboardView"
            }).state("clientProfile.dashboardView.messages", {
                url: "/messages",
                requiresLogin: !0,
                views: {
                    "tab-content": {
                        templateUrl: "/partials/clientProfile/views/partials/clientProfile.messages.html",
                        controller: "ClientProfileMessagesController"
                    }
                },
                parent: "clientProfile.dashboardView"
            }).state("clientProfile.dashboardView.accounts", {
                url: "/profile",
                requiresLogin: !0,
                views: {
                    "tab-content": {
                        templateUrl: "/partials/clientProfile/views/partials/clientProfile.accounts.html",
                        controller: "ClientProfileController"
                    }
                },
                parent: "clientProfile.dashboardView"
            }).state("acceptInvite", {
                url: "clients/:client_id/accept_invite/:booked_session_id",
                requiresLogin: !0,
                views: {
                    "header@": n.HEADER,
                    "content@": {
                        templateUrl: "partials/clientProfile/views/partials/clientProfile.acceptPayInvite.html",
                        controller: "ClientAcceptInviteController"
                    }
                },
                parent: "app"
            }).state("acceptRecurringInvite", {
                url: "clients/:client_id/invited_recurring_sessions/:booked_session_id",
                requiresLogin: !0,
                views: {
                    "header@": n.HEADER,
                    "content@": {
                        templateUrl: "partials/clientProfile/views/partials/clientProfile.acceptPayInvite.html",
                        controller: "ClientAcceptInviteController"
                    }
                },
                parent: "app"
            }).state("acceptSessionInvite", {
                url: "clients/:client_id/session_invite/:booked_session_id",
                requiresLogin: !0,
                views: {
                    "header@": n.HEADER,
                    "content@": {
                        templateUrl: "partials/clientProfile/views/partials/clientProfile.acceptPayInvite.html",
                        controller: "ClientAcceptInviteController"
                    }
                },
                parent: "app"
            }).state("clientAddToCalendar", {
                url: "addtocalendar/clients/:client_id/:booked_session_id",
                requiresLogin: !0,
                views: {
                    "header@": n.HEADER,
                    "content@": {
                        templateUrl: "partials/shared/views/addToCalendarOptions.html",
                        controller: "AddToCalendarController"
                    }
                },
                parent: "app"
            }).state("reviewCoach", {
                url: "clients/:client_id/review/:booked_session_id?:rating",
                requiresLogin: !0,
                views: {
                    "content@": {
                        templateUrl: "partials/coach/views/coach.reviews.html",
                        controller: "coachReviewController"
                    }
                },
                parent: "app"
            }).state("reviewRequestedCoach", {
                url: "clients/:client_id/request_reviews/:coach_id?:email",
                requiresLogin: !0,
                views: {
                    "content@": {
                        templateUrl: "partials/coach/views/coach.reviews.html",
                        controller: "coachReviewController"
                    }
                },
                parent: "app"
            })
        };
        t.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider", "Views", "appConfig"], e.module("Coachco").config(t)
    }(angular),
    function(e) {
        var t = function(t, a, o, n, s) {
            o.html5Mode(!0).hashPrefix("!"), t.state("coachEnrollment", {
                url: "coach",
                abstract: !0,
                views: {
                    "content@": {
                        templateUrl: "partials/coachEnrollment/views/coachEnrollment.html",
                        controller: "CoachEnrollmentParentController"
                    }
                },
                parent: "app",
                onExit: ["$stateParams", function(t) {
                    e.isDefined(t.coachId) && localStorage.setItem("coachId", t.coachId)
                }]
            }).state("coachEnrollment.createAccount", {
                url: "/registration",
                params: {
                    coachId: null
                },
                views: {
                    forms: {
                        templateUrl: "partials/coachEnrollment/views/coachEnrollment.createAccount.html",
                        controller: "CoachEnrollmentController"
                    }
                },
                parent: "coachEnrollment",
                onEnter: ["AuthTokenFactory", "$rootScope", function(e, t) {
                    e.removeTokens(), t.ngTitle = s.coachRegistrationTitle, t.ngDescription = s.commonDesc, t.ngKeywords = s.commonKeywords
                }]
            }).state("coachEnrollment.profileSummary", {
                url: "/:coachId/summary",
                params: {
                    coachId: null
                },
                views: {
                    forms: {
                        templateUrl: "partials/coachEnrollment/views/coachEnrollment.profileSummary.html",
                        controller: "CoachEnrollmentController"
                    }
                },
                parent: "coachEnrollment"
            }).state("coachEnrollment.supportAndExperience", {
                url: "/:coachId/experience",
                params: {
                    coachId: null
                },
                views: {
                    forms: {
                        templateUrl: "partials/coachEnrollment/views/coachEnrollment.supportAndExperience.html",
                        controller: "CoachEnrollmentController"
                    }
                },
                parent: "coachEnrollment"
            }).state("coachEnrollment.coachingInfo", {
                url: "/:coachId/philosophy",
                params: {
                    coachId: null
                },
                views: {
                    forms: {
                        templateUrl: "partials/coachEnrollment/views/coachEnrollment.coachingInfo.html",
                        controller: "CoachEnrollmentController"
                    }
                },
                parent: "coachEnrollment"
            }).state("coachEnrollment.trainingLocation", {
                url: "/:coachId/locations",
                params: {
                    coachId: null
                },
                views: {
                    forms: {
                        templateUrl: "partials/coachEnrollment/views/coachEnrollment.trainingLocation.html",
                        controller: "CoachEnrollmentController"
                    }
                },
                parent: "coachEnrollment"
            }).state("coachEnrollment.addressInfo", {
                url: "/:coachId/address",
                params: {
                    coachId: null
                },
                views: {
                    "header@": n.HEADER,
                    forms: {
                        templateUrl: "partials/coachEnrollment/views/coachEnrollment.addressInfo.html",
                        controller: "CoachEnrollmentController"
                    }
                },
                parent: "coachEnrollment"
            })
        };
        t.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider", "Views", "appConfig"], e.module("Coachco").config(t)
    }(angular),
    function(e) {
        var t = function(t, a, o, n, s) {
            o.html5Mode(!0).hashPrefix("!"), t.state("coachProfile", {
                url: "",
                abstract: !0,
                views: {
                    "header@": n.HEADER,
                    "content@": {
                        templateUrl: "partials/coachProfile/views/coachProfile.html"
                    },
                    "footer@": n.FOOTER
                },
                parent: "app",
                onEnter: ["$rootScope", function(e) {
                    e.ngTitle = s.commonTitle, e.ngDescription = s.commonDesc, e.ngKeywords = s.commonKeywords
                }]
            }).state("coachProfile.dashboard", {
                url: "coach/:coachId",
                requiresLogin: !0,
                params: {
                    coachId: null
                },
                views: {
                    dashboard: {
                        templateUrl: "partials/coachProfile/views/coachProfile.dashboard.html",
                        controller: "CoachProfileDashboardController"
                    }
                },
                resolve: {
                    redirect: ["$stateParams", "$ocLazyLoad", function(t, a) {
                        return a.load(["coachDashbaord"]), e.isDefined(localStorage.getItem("currentStateName")) && null != localStorage.getItem("currentStateName") ? (t.stateName = "coachProfile.dashboard." + localStorage.getItem("currentStateName"), localStorage.removeItem("currentStateName")) : e.isUndefined(t.stateName) && (t.stateName = "coachProfile.dashboard.sessions"), t
                    }]
                },
                parent: "coachProfile",
                onExit: ["$rootScope", "$stateParams", function(t, a) {
                    t.profile = null, e.isDefined(a.coachId) && localStorage.setItem("coachId", a.coachId), localStorage.removeItem("clientTabClientSelected"), localStorage.removeItem("clientsTabAthleteSelected")
                }]
            }).state("coachProfile.dashboardView", {
                url: "coach_profile_view/:coachId",
                requiresLogin: !0,
                params: {
                    coachId: null,
                    stateName: null
                },
                views: {
                    dashboard: {
                        templateUrl: "partials/coachProfile/views/coachProfile.dashboard.html",
                        controller: "CoachProfileDashboardController"
                    }
                },
                resolve: {
                    redirect: ["$stateParams", function(t) {
                        return e.isDefined(localStorage.getItem("currentStateName")) && null != localStorage.getItem("currentStateName") ? (t.stateName = "coachProfile.dashboard." + localStorage.getItem("currentStateName"), localStorage.removeItem("currentStateName")) : e.isUndefined(t.stateName) && (t.stateName = "coachProfile.dashboard.sessions"), t
                    }]
                },
                parent: "coachProfile",
                onExit: ["$rootScope", "$stateParams", function(t, a) {
                    t.profile = null, e.isDefined(a.coachId) && localStorage.setItem("coachId", a.coachId), localStorage.removeItem("clientTabClientSelected"), localStorage.removeItem("clientsTabAthleteSelected")
                }]
            }).state("coachProfile.dashboard.sessions", {
                url: "/sessions",
                requiresLogin: !0,
                views: {
                    "tab-content": {
                        templateUrl: "partials/coachProfile/views/partials/coachProfile.sessions.html",
                        controller: "CoachSessionController"
                    }
                },
                parent: "coachProfile.dashboard"
            }).state("coachProfile.dashboard.messages", {
                url: "/messages",
                requiresLogin: !0,
                views: {
                    "tab-content": {
                        templateUrl: "partials/coachProfile/views/partials/coachProfile.messages.html",
                        controller: "CoachMessagesController"
                    }
                },
                parent: "coachProfile.dashboard"
            }).state("coachProfile.dashboard.clients", {
                url: "/clients",
                requiresLogin: !0,
                views: {
                    "tab-content": {
                        templateUrl: "partials/coachProfile/views/partials/coachProfile.clients.html",
                        controller: "CoachClientsController"
                    }
                },
                parent: "coachProfile.dashboard"
            }).state("coachProfile.dashboard.clients.athlete", {
                views: {
                    "client-tab-content": {
                        templateUrl: "partials/coachProfile/views/partials/coachProfile.client.athlete.html"
                    }
                },
                parent: "coachProfile.dashboard.clients"
            }).state("coachProfile.dashboard.payments", {
                url: "/payments",
                requiresLogin: !0,
                views: {
                    "tab-content": {
                        templateUrl: "partials/coachProfile/views/partials/coachProfile.payments.html",
                        controller: "CoachPaymentsController"
                    }
                },
                resolve: {
                    redirect: ["$state", "$stateParams", "AlertService", "$q", function(e, t, a, o) {
                        if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Googlebot-Mobile/i.test(navigator.userAgent)) {
                            var n = "Please use a desktop or laptop to access your coach dashboard",
                                s = "We're sorry, but the coach dashboard is not optimized for smartphones yet.";
                            return a.showCoachAlert(n, s), o.reject()
                        }
                    }]
                },
                parent: "coachProfile.dashboard"
            }).state("coachProfile.dashboard.profile", {
                url: "/profile",
                requiresLogin: !0,
                views: {
                    "tab-content": {
                        templateUrl: "partials/coachProfile/views/partials/coachProfile.profile.html",
                        controller: "CoachProfileController"
                    }
                },
                resolve: {
                    redirect: ["$state", "$stateParams", "AlertService", "$q", function(e, t, a, o) {
                        if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Googlebot-Mobile/i.test(navigator.userAgent)) {
                            var n = "Please use a desktop or laptop to access your coach dashboard",
                                s = "We're sorry, but the coach dashboard is not optimized for smartphones yet.";
                            return a.showCoachAlert(n, s), o.reject()
                        }
                    }]
                },
                parent: "coachProfile.dashboard"
            }).state("coachProfile.dashboardView.sessions", {
                url: "/sessions",
                requiresLogin: !0,
                views: {
                    "tab-content": {
                        templateUrl: "partials/coachProfile/views/partials/coachProfile.sessions.html",
                        controller: "CoachSessionController"
                    }
                },
                parent: "coachProfile.dashboardView"
            }).state("coachProfile.dashboardView.messages", {
                url: "/messages",
                requiresLogin: !0,
                views: {
                    "tab-content": {
                        templateUrl: "partials/coachProfile/views/partials/coachProfile.messages.html",
                        controller: "CoachMessagesController"
                    }
                },
                parent: "coachProfile.dashboardView"
            }).state("coachProfile.dashboardView.clients", {
                url: "/clients",
                requiresLogin: !0,
                views: {
                    "tab-content": {
                        templateUrl: "partials/coachProfile/views/partials/coachProfile.clients.html",
                        controller: "CoachClientsController"
                    }
                },
                parent: "coachProfile.dashboardView"
            }).state("coachProfile.dashboardView.clients.athlete", {
                views: {
                    "client-tab-content": {
                        templateUrl: "partials/coachProfile/views/partials/coachProfile.client.athlete.html"
                    }
                },
                parent: "coachProfile.dashboardView.clients"
            }).state("coachProfile.dashboardView.payments", {
                url: "/payments",
                requiresLogin: !0,
                views: {
                    "tab-content": {
                        templateUrl: "partials/coachProfile/views/partials/coachProfile.payments.html",
                        controller: "CoachPaymentsController"
                    }
                },
                parent: "coachProfile.dashboardView"
            }).state("coachProfile.dashboardView.profile", {
                url: "/profile",
                requiresLogin: !0,
                views: {
                    "tab-content": {
                        templateUrl: "partials/coachProfile/views/partials/coachProfile.profile.html",
                        controller: "CoachProfileController"
                    }
                },
                parent: "coachProfile.dashboardView"
            }).state("reviewCoachByCoach", {
                url: "coaches/:coach_id/review/:booked_session_id?:rating",
                requiresLogin: !0,
                views: {
                    "content@": {
                        templateUrl: "partials/coach/views/coach.reviews.html",
                        controller: "coachReviewController"
                    }
                },
                parent: "app"
            }).state("coachAddToCalendar", {
                url: "addtocalendar/coaches/:coach_id/:booked_session_id",
                requiresLogin: !0,
                views: {
                    "header@": n.HEADER,
                    "content@": {
                        templateUrl: "partials/shared/views/addToCalendarOptions.html",
                        controller: "AddToCalendarController"
                    }
                },
                parent: "app"
            })
        };
        t.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider", "Views", "appConfig"], e.module("Coachco").config(t)
    }(angular),
    function() {
        var e = function(e, t, a, o) {
            t.scrollPage && o(function() {
                var e = angular.element("#" + t.scrollPage + "-section");
                angular.element("html, body").animate({
                    scrollTop: angular.element(e).offset().top - 20
                }, 1200)
            }), a.$on("scrollMarketingContents", function(e, t) {
                var a = angular.element("#" + t + "-section");
                angular.element("html, body").animate({
                    scrollTop: angular.element(a).offset().top - 20
                }, 1200)
            })
        };
        e.$inject = ["$scope", "scrollPageSection", "$rootScope", "$timeout"], angular.module("Coachco").controller("marketingController", e)
    }(),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c) {
            e.$parent.currentState = s.current.name, e.query = {}, e.query.status = e.coachStatus[0], e.query.background_check = e.bgChecks[0], e.query.commission = e.commissions[0], window.onbeforeunload = function() {
                localStorage.setItem("currentStateName", "applications"), angular.isDefined(a.adminId) && localStorage.setItem("adminId", a.adminId)
            }, e.updateStatus = function(t) {
                var a;
                t.selectedStatus && (a = {
                    coach: {
                        status: t.selectedStatus
                    }
                }), t.selectedBgCheck && (a = {
                    coach: {
                        background_check: t.selectedBgCheck
                    }
                }), c.updateStatus(t.coach_id, a, function(a) {
                    a.$resolved && 200 === a.status && (angular.isDefined(t.selectedStatus) && null !== t.selectedStatus && (t.currentStatus = findElement(e.coachStatus, "value", t.selectedStatus), t.status = t.currentStatus.value), angular.isDefined(t.selectedBgCheck) && null !== t.selectedBgCheck && (t.currentBgCheck = findElement(e.bgChecks, "value", t.selectedBgCheck), t.background_check = t.currentBgCheck.value)), t.selectedStatus = null, t.selectedBgCheck = null
                }, function(e) {
                    console.log(e)
                })
            }, e.updateCommission = function(e) {
                if ("Custom" === e.selectedCommisionType) {
                    var t = "Set Custom Commission",
                        a = "<p>Enter the custom commission percentage.</p>",
                        o = "SetCommissionController",
                        s = "partials/adminProfile/views/modal/adminProfile.setCommission.modal.html",
                        i = {
                            coachId: e.coach_id,
                            commission: null !== e.commission ? 100 * e.commission : e.commission
                        };
                    n.openModal(t, a, s, o, i, function(t) {
                        t.$$state.value && (e.currentCommission = t.$$state.value)
                    })
                } else {
                    var c = {
                        commission: null
                    };
                    r.updateCommission(e.coach_id, c, function(t) {
                        t.$resolved && 200 === t.status && (e.currentCommission = "Standard")
                    })
                }
            }, e.filterCoach = function() {
                return function(t) {
                    var a;
                    return a = 0 === e.query.status.value && 0 === e.query.background_check.value || (0 !== e.query.status.value && 0 === e.query.background_check.value ? t.status === e.query.status.value : 0 === e.query.status.value && 0 !== e.query.background_check.value ? t.background_check === e.query.background_check.value : t.background_check === e.query.background_check.value && t.status === e.query.status.value)
                }
            }
        };
        e.$inject = ["$scope", "$http", "$stateParams", "appConfig", "AlertService", "$state", "$rootScope", "CoachProfileInterfaceService", "AdminProfileInterfaceService"], angular.module("Coachco").controller("adminApplicationsController", e)
    }(),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d, u, m, h, p, g) {
            e.$parent.currentState = c.current.name, e.clientStatus = a.clientStatus, e.query = {}, e.query.status = e.clientStatus[0], window.onbeforeunload = function() {
                localStorage.setItem("currentStateName", "clients"), angular.isDefined(u.adminId) && localStorage.setItem("adminId", u.adminId)
            }, e.updateStatus = function(t) {
                var a;
                t.selectedStatus && (a = {
                    client: {
                        status: t.selectedStatus
                    }
                }), g.updateProfile(a, t.id, function(a) {
                    a.$resolved && 200 === a.status && angular.isDefined(t.selectedStatus) && null !== t.selectedStatus && (t.currentStatus = findElement(e.clientStatus, "value", t.selectedStatus), t.status = t.currentStatus.value), t.selectedStatus = null
                }, function(e) {
                    console.log(e)
                })
            }, e.filterClient = function() {
                return function(t) {
                    var a;
                    return 0 === e.query.status.value ? a = !0 : 0 !== e.query.status.value && (a = t.status === e.query.status.value), a
                }
            }, e.getAllClients = function() {
                e.showLoaderImage(), r.getAllClients(function(t) {
                    t.$resolved && 200 === t.status && (e.clients = t.data.clients, e.setStatus(), e.hideLoaderImage())
                }, function(e) {
                    console.log(e)
                })
            }, e.getAllClients(), e.notesOnClient = function(t) {
                var a = "/partials/clientProfile/views/modal/clientProfile.notesOnClient.html",
                    o = "model-createmessage",
                    n = "clientNotesController";
                h.modalOpen(a, o, n, t, function(a) {
                    "success" === a.$$state.value.status && (findElement(e.clients, "id", t.id).notes = a.$$state.value.notes)
                })
            }, e.setStatus = function() {
                e.clients.forEach(function(t) {
                    t.currentStatus = findElement(e.clientStatus, "value", t.status), null === t.status && (t.currentStatus = findElement(e.clientStatus, "value", "2"), t.status = t.currentStatus.value)
                })
            }, e.getClientsWithName = function(t) {
                r.getClientsWithName(t, function(t) {
                    t.$resolved && 200 === t.status && (e.clients = t.data.clients, e.setStatus())
                }, function(e) {
                    console.log(e)
                })
            }
        };
        e.$inject = ["$scope", "$http", "appConfig", "$filter", "$rootScope", "$timeout", "CommonAPIInterfaceService", "AdminProfileInterfaceService", "$state", "uiCalendarConfig", "$compile", "$stateParams", "$window", "Coachco_CommonService", "SessionService", "ClientProfileInterfaceService"], angular.module("Coachco").controller("adminClientsController", e)
    }(),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d, u, m, h, p) {
            e.coachStatus = a.coachStatus, e.bgChecks = a.backgroundCheck, e.clubStatus = a.clubStatus, e.commissions = a.commissions, e.adminId = h.adminId, e.selectedSport = null, e.zipCode = null, e.setTab = function() {
                l.go(h.stateName)
            }, e.setTab(), e.showLoaderImage = function() {
                e.loader = !0
            }, e.hideLoaderImage = function() {
                e.loader = !1
            }, e.setSelectedActivity = function(t) {
                e.activities.forEach(function(e) {
                    angular.isDefined(t.sport) && null !== t.sport && e.activity.toLowerCase() === t.sport.toLowerCase() && (t.sports = angular.copy(e))
                })
            }, e.fetchActivityDetails = function() {
                e.activities = [], r.getCoachActivities(function(t) {
                    t.$resolved && 200 === t.status && t.data.length > 0 && (e.activities = t.data, e.selectedActivity = t.data[0], e.positionLength = e.selectedActivity.questions.position_played.length, e.levelCoachLength = e.selectedActivity.questions.level_coached.length)
                }, function(e) {
                    var t = "Error!",
                        a = "Email " + e.statusText;
                    n.showAlert(t, a)
                })
            }, e.fetchActivityDetails(), e.setStatuses = function() {
                e.coaches.forEach(function(t) {
                    e.setSelectedActivity(t), t.currentStatus = findElement(e.coachStatus, "value", t.status), null === t.status && (t.currentStatus = findElement(e.coachStatus, "value", "2"), t.status = t.currentStatus.value), t.currentBgCheck = findElement(e.bgChecks, "value", t.background_check), null === t.background_check && (t.currentBgCheck = findElement(e.bgChecks, "value", "1"), t.background_check = t.currentBgCheck.value), t.currentClubStatus = findElement(e.clubStatus, "value", t.club_approved), null === t.commission || 0 === t.commission ? t.currentCommission = "Standard" : t.currentCommission = 100 * parseFloat(t.commission)
                }), e.partners.forEach(function(t) {
                    e.setSelectedActivity(t), t.currentClubStatus = findElement(e.clubStatus, "value", t.club_approved)
                })
            }, e.notesOnCoach = function(t) {
                var a = "/partials/coachProfile/views/modal/coachProfile.notesOnCoach.html",
                    o = "model-createmessage",
                    n = "coachNotesController";
                s.modalOpen(a, o, n, t, function(a) {
                    "success" === a.$$state.value.status && (findElement(e.coaches, "coach_id", t).notes = a.$$state.value.notes)
                })
            }, e.getAllCoaches = function() {
                e.showLoaderImage(), p.getAllCoachesList(function(t) {
                    t.$resolved && 200 === t.status && (e.coaches = t.data, e.partners = t.data, e.setStatuses(), e.hideLoaderImage())
                }, function(e) {
                    console.log(e)
                })
            }, e.getAllCoaches(), e.getCoachesWithName = function(t, a) {
                p.getCoachesWithName(t, function(t) {
                    t.$resolved && 200 === t.status && ("partners" === a ? e.partners = t.data : e.coaches = t.data, e.setStatuses())
                }, function(e) {
                    console.log(e)
                })
            }, e.getCoachesWithClub = function(t) {
                p.getCoachesWithClub(t, function(t) {
                    t.$resolved && 200 === t.status && (e.partners = t.data, e.setStatuses())
                }, function(e) {
                    console.log(e)
                })
            }, e.getCoachesWithZip = function(t) {
                p.getCoachesWithZip(t, function(t) {
                    t.$resolved && 200 === t.status && (e.coaches = [], e.coaches = t.data, e.setStatuses())
                }, function(e) {
                    console.log(e)
                })
            }, e.getCoachesWithSport = function(t) {
                p.getCoachesWithSport(t, function(t) {
                    t.$resolved && 200 === t.status && (e.coaches = [], e.coaches = t.data, e.setStatuses())
                }, function(e) {
                    console.log(e)
                })
            }, e.getCoachesWithZipNSport = function() {
                angular.isDefined(e.selectedSport) && null !== e.selectedSport ? angular.isDefined(e.zipCode) && null !== e.zipCode ? p.getCoachesWithZipNSport(e.zipCode, e.selectedSport.activity, function(t) {
                    t.$resolved && 200 === t.status && (e.coaches = t.data, e.setStatuses())
                }, function(e) {
                    console.log(e)
                }) : e.getCoachesWithSport(e.selectedSport.activity) : e.getCoachesWithZip(e.zipCode)
            }, e.searchCoach = function(a) {
                var o = "";
                return isNaN(parseInt(a)) || (o = i.ccUrl + "zipcodes?search=" + a + "&filter=all", e.isNumber = !0), t.get(o, {
                    params: {
                        address: a,
                        sensor: !1
                    }
                }).then(function(t) {
                    return e.zipcodeList = t.data, t.data.map(function(e) {
                        return e
                    })
                })
            }, e.onSelected = function() {
                e.getCoachesWithZipNSport()
            }, e.checkIfEnterKeyWasPressed = function(t) {
                var a = t.which || t.keyCode;
                switch (a) {
                    case 32:
                        if (t.preventDefault(), "zipcode" === t.currentTarget.name) {
                            var o = /^(\d{5}(-\d{4})?|[A-Z]\d[A-Z] *\d[A-Z]\d)$/;
                            o.test(e.zipcode) ? (e.isZipInList = e.searchZipList(), e.isZipInList ? t.target.value = angular.element(".typeahead").find('li[class="active"]').text() : e.zipElement.trigger("blur")) : (e.zipElement.trigger("click"), t.target.value = angular.element(".typeahead").find('li[class="active"]').text())
                        } else "Request a Sport" !== t.target.innerText ? (e.sportsElement.text(t.target.innerText), e.mainForm.$valid = !0, e.sportsElement.trigger("click"), e.changeFocusDropdown()) : e.requestASportModal();
                        break;
                    case 13:
                        t.preventDefault(), angular.element("#zip").trigger("blur")
                }
            }, e.searchZipList = function() {
                if (e.zipcodeList.indexOf(e.zipcode) !== -1) return !0
            }
        };
        e.$inject = ["$scope", "$http", "appConfig", "$rootScope", "AlertService", "Coachco_CommonService", "urlConfig", "CommonAPIInterfaceService", "$timeout", "$state", "uiCalendarConfig", "$compile", "redirect", "$stateParams", "AdminProfileInterfaceService"], angular.module("Coachco").controller("adminProfileController", e)
    }(),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d) {
            function u(t) {
                for (var a = t.toLowerCase().trim(), o = [], n = 0; n < e.coaches.length; n++) {
                    var s = e.coaches[n];
                    e.coaches[n].role = "coach", s.athleteList = "", angular.isDefined(s.athletes) && s.athletes.length > 0 && s.athletes.forEach(function(e, t) {
                        0 === t ? s.athleteList = s.athleteList + e.athlete_name : s.athleteList = s.athleteList + ", " + e.athlete_name
                    }), s.name.toLowerCase().indexOf(a) === -1 && s.email.toLowerCase().indexOf(a) === -1 && s.athleteList.toLowerCase().indexOf(a) === -1 || (null === s.profile_image ? o.push({
                        value: s.name,
                        obj: s,
                        label: l.trustAsHtml('<div class="row-holder">  <img class="avatar-thumb-nail" src="/images/default-msg-avatar.png"></img> <div class="col-left">  <strong>' + s.name + '</strong>  </div> <div class="col-right text-right text-muted">  <small>' + s.email + '</small> </div> <br><small class="text-ellipsise">' + s.athleteList + "</small>  <div> </div></div>")
                    }) : o.push({
                        value: s.name,
                        obj: s,
                        label: l.trustAsHtml('<div class="row-holder"> <img class="avatar-thumb-nail" src="' + s.profile_image + '"></img> <div class="col-left">  <strong>' + s.name + '</strong> </div> <div class="col-right text-right text-muted">  <small>' + s.email + '</small> </div> <br><small class="text-ellipsise">' + s.athleteList + "</small>  <div> </div></div>")
                    }))
                }
                for (var n = 0; n < e.associatedClients.length; n++) {
                    var s = e.associatedClients[n];
                    e.associatedClients[n].role = "client", s.athleteNames = "", s.athletes.forEach(function(e, t) {
                        0 === t ? s.athleteNames = s.athleteNames + e : s.athleteNames = s.athleteNames + ", " + e
                    }), s.name.toLowerCase().indexOf(a) === -1 && s.email.toLowerCase().indexOf(a) === -1 && s.athleteNames.toLowerCase().indexOf(a) === -1 || o.push({
                        value: s.name,
                        obj: s,
                        label: l.trustAsHtml('<div class="row-holder">  <img class="avatar-thumb-nail" src="/images/default-msg-avatar.png"></img> <div class="col-left">  <strong>' + s.name + '</strong>  </div> <div class="col-right text-right text-muted">  <small>' + s.email + '</small> </div> <br><small class="text-ellipsise">' + s.athleteNames + "</small>  <div> </div></div>")
                    })
                }
                return o
            }

            function m(e, t) {
                var a = !1;
                return e.forEach(function(e) {
                    e.id.$oid === t && (a = !0)
                }), a
            }
            e.isInboxAppended = !1, e.$parent.currentState = s.current.name, e.recepients = [], e.messages = [], e.toIds = [], e.glued = !0, e.updateMessage = !1, e.messageTypes = t.messageTypes, e.selectedMessageType = "All Messages", e.clientName = d.getFirstName() + "" + d.getLastName(), e.adminId = i.adminId, e.firstTime = !Boolean(localStorage.getItem("FirstTime")), e.setMessageConfig = function() {
                e.messageConfig = {
                    autoHideScrollbar: !1,
                    theme: "light",
                    advanced: {
                        updateOnContentResize: !0
                    },
                    setHeight: 732,
                    scrollInertia: 0
                }
            }, e.setMessageConfig(), e.scrollToBottom = function() {
                o(function() {
                    var t, a, o;
                    t = "#messagesDiv-" + e.selectedMessage.id.$oid, e.updateMessage ? (e.updateMessage = !1, o = "#day-" + (e.selectedMessage.conversations.length - 1) + "-conversation-" + (e.selectedMessage.conversations[e.selectedMessage.conversations.length - 1].conversations.length - 1), a = document.querySelector(t).scrollHeight + document.querySelector(o).scrollHeight) : a = document.querySelector(t).scrollHeight, angular.element(t).animate({
                        scrollTop: a
                    }, 600)
                }, 50)
            }, e.setInboxData = function(t, n) {
                var s = angular.copy(t.new_messages_count);
                e.newMessageView = !1, e.newMessageTemp = "", e.selectedMessage && t && t.id.$oid === e.selectedMessage.id.$oid && (e.newMessageTemp = angular.copy(e.selectedMessage.replyMessage)), e.selectedMessage = t, e.newMessageTemp ? e.selectedMessage.replyMessage = e.newMessageTemp : e.selectedMessage.replyMessage = "", angular.element(".dashbroad-wrapper").addClass("open"), e.setMessageConfig(), e.selectedMessage.new_messages_count > 0 ? o(function() {
                    var t = {
                        message: {
                            sender_id: e.adminId
                        }
                    };
                    c.resetMessageCount(e.selectedMessage.id.$oid, t, function() {
                        n ? o(function() {
                            e.selectedMessage.new_messages_count = 0, a.$emit("refreshHeader", s)
                        }, 1e3) : (e.selectedMessage.new_messages_count = 0, a.$emit("refreshHeader", s))
                    })
                }, 50) : e.updateMessage && (e.updateMessage = !1), e.scrollToBottom(), angular.forEach(e.selectedMessage.conversations, function(e, t) {
                    e.date && (e.date = new Date(e.date))
                }), e.newMsgSend = !1
            }, e.getMessages = function() {
                r.getAdminMessages(i.adminId, function(t) {
                    t.$resolved && 200 === t.status && (e.messages = t.data, e.messages.length > 0 && e.setInboxData(e.messages[0]), 0 === e.messages.length && e.createMessage())
                })
            }, e.getMessages(), e.getContacts = function() {
                r.getContactList(function(t) {
                    t.$resolved && 200 === t.status && (e.associatedClients = t.data.client, e.coaches = t.data.coach)
                })
            }, e.getContacts(), window.onbeforeunload = function() {
                localStorage.setItem("currentStateName", "messages"), angular.isDefined(i.adminId) && localStorage.setItem("adminId", i.adminId)
            }, e.newMsgSend = !1, e.sendMessage = function(t, a) {
                if (e.newMsgSend = !1, angular.isDefined(e.selectedMessage.replyMessage) && "" !== e.selectedMessage.replyMessage && null !== e.selectedMessage.replyMessage)
                    if (e.submitting = !0, "create" === a) {
                        e.newMsgSend = !0;
                        var o = {
                            message: {
                                sender_id: i.adminId,
                                role: "superuser",
                                to: e.toIds,
                                text: angular.isDefined(e.selectedMessage.replyMessage) ? e.selectedMessage.replyMessage.replace(/\r?\n/g, "<br />") : ""
                            }
                        };
                        c.postMessage(o, function() {
                            e.selectedMessage.replyMessage = null, e.setMessageConfig(), e.submitting = !1
                        }, function() {
                            e.submitting = !1
                        })
                    } else {
                        var n = {
                            message: {
                                sender_id: i.adminId,
                                role: "superuser",
                                text: angular.isDefined(e.selectedMessage.replyMessage) ? e.selectedMessage.replyMessage.replace(/\r?\n/g, "<br />") : ""
                            }
                        };
                        c.updateMessage(t.id.$oid, n, function(t) {
                            t.$resolved && 200 === t.status && (e.updateMessage = !0, e.getMessages(), e.selectedMessage.replyMessage = null, e.setMessageConfig()), e.submitting = !1
                        }, function() {
                            e.submitting = !1
                        })
                    }
            }, e.ac_options_users = {
                suggest: u,
                on_select: function(t) {
                    isItemSelected(e.toIds, t.obj.id) || e.addToRecepients(t.obj), e.selectedRecepient = null, angular.element(".matrix-cell").val(null)
                }
            }, e.newMessageView = !1, e.createMessage = function(t) {
                "new" === t && (e.newMessageView = !0);
                var a = {
                    subscribers: "New Message",
                    id: {
                        $oid: "new"
                    }
                };
                m(e.messages, a.id.$oid) || e.messages.splice(0, 0, a), e.setInboxData(e.messages[0]), e.setMessageConfig(), e.recepients = [], e.toIds = []
            }, e.createMessage(), e.stopCreateMessage = function(t) {
                angular.forEach(e.messages, function(t, a) {
                    "new" === t.id.$oid && e.messages.splice(a, 1)
                }), t || e.setInboxData(e.messages[0]), "All Messages" === e.selectedMessageType ? e.setInboxData(e.messages[0]) : e.filterdMessages.length ? e.setInboxData(e.filterdMessages[0]) : e.selectedMessage = "", e.newMsgSend = !1
            }, e.closeInfoMessage = function() {
                angular.element(".dashboard-message-info").hide(), localStorage.setItem("FirstTime", !1), e.firstTime = !1
            }, e.addToRecepients = function(t) {
                e.recepients.push(t);
                var a = {
                    receiver_id: t.id,
                    role: t.role
                };
                e.toIds.push(a), e.$$phase || e.$apply()
            }, e.deleteRecepient = function(t) {
                e.recepients.splice(t, 1), e.toIds.splice(t, 1), e.$$phase || e.$apply()
            }, e.filterMessages = function() {
                e.messages && e.messages.length && e.messages[0].id && "new" === e.messages[0].id.$oid && e.messages.splice(0, 1), e.filterdMessages = [], e.messages.forEach(function(t, a) {
                    "Groups" === e.selectedMessageType && t.group_mailer && e.filterdMessages.push(t), "Individuals" !== e.selectedMessageType || t.group_mailer || e.filterdMessages.push(t), e.messages.length - 1 === a && (e.filterdMessages.length && "All Messages" != e.selectedMessageType && e.setInboxData(e.filterdMessages[0]), "All Messages" === e.selectedMessageType || e.filterdMessages.length || (e.selectedMessage = ""))
                }), "All Messages" === e.selectedMessageType && e.messages.length && e.setInboxData(e.messages[0]), e.$$phase || e.$apply()
            }, e.swapMessagesOrder = function() {
                var t = angular.copy(e.messages[0]);
                e.messages[0] = angular.copy(e.messages[1]), e.messages[1] = t
            }, e.createNewMsgObject = function(e) {
                var t = e;
                t.id = {
                    $oid: e.message_id
                };
                var a = {
                    date: new Date(e.conversation.date),
                    conversations: [e.conversation]
                };
                return t.conversations = [a], t
            }, e.scrollToLatest = function() {
                var e = "#desktop-custom-scroll-main";
                angular.element(e).animate({
                    scrollTop: 0
                }, 200)
            }, a.pusher && (a.subscribedchannel || a.$emit("subscribeToChannel"), a.subscribedchannel.bind("new_message", function(t) {
                e.pusherMsgAdded = !1, e.newChatOpen = !1;
                var o = 0;
                if (e.messages) e.isMsgExisted = !1, e.messageTemp = "", angular.forEach(e.messages, function(n, s) {
                    if (e.pusherMsgAdded || n.id.$oid !== t.message_id || angular.forEach(n.conversations, function(a, o) {
                            if (!e.pusherMsgAdded && new Date(a.date).getTime() === new Date(t.conversation.date).getTime()) {
                                a.conversations.push(t.conversation), n.new_messages_count = t.new_messages_count, e.pusherMsgAdded = !0, e.isMsgExisted = !0, e.selectedMessage && e.selectedMessage.id.$oid === t.message_id && (e.messageTemp = n);
                                var i = n;
                                e.messages.splice(s, 1), e.messages.unshift(i), e.selectedMessage && "new" === e.selectedMessage.id.$oid && e.swapMessagesOrder()
                            }
                            if (!e.pusherMsgAdded && n.conversations.length - 1 === o) {
                                var r = {
                                    date: new Date(t.conversation.date),
                                    conversations: [t.conversation]
                                };
                                n.conversations.push(r), e.pusherMsgAdded = !0
                            }
                        }), o += n.new_messages_count, e.messages.length - 1 === s) {
                        if (!e.pusherMsgAdded) {
                            var i = e.createNewMsgObject(t);
                            e.messages.unshift(i), e.selectedMessage && "new" === e.selectedMessage.id.$oid && e.swapMessagesOrder(), o += t.new_messages_count, e.pusherMsgAdded = !0, e.newChatOpen = !0
                        }
                        e.isMsgExisted && e.messageTemp ? e.setInboxData(e.messageTemp, !0) : e.newMsgSend && e.stopCreateMessage(t.new_messages_count), e.newChatOpen && "All Messages" !== e.selectedMessageType && e.filterMessages(),
                            a.unreadMessages = o, 0 === t.new_messages_count && e.scrollToLatest()
                    }
                });
                else {
                    var n = e.createNewMsgObject(t);
                    e.messages.push(n), a.unreadMessages = a.isStriveFarMsgRead ? t.new_messages_count : t.new_messages_count + 1, e.pusherMsgAdded = !0, e.newMsgSend && e.stopCreateMessage(t.new_messages_count), "All Messages" !== e.selectedMessageType && e.filterMessages()
                }
            })), e.$on("$destroy", function() {
                a.subscribedchannel && a.subscribedchannel.unbind("new_message")
            })
        };
        e.$inject = ["$scope", "appConfig", "$rootScope", "$timeout", "AlertService", "$state", "$stateParams", "AdminProfileInterfaceService", "CommonAPIInterfaceService", "$sce", "AuthFactory"], angular.module("Coachco").controller("adminMessagesController", e)
    }(),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c) {
            function l(e) {
                d = e, u = d.clone().startOf("month"), m = d.clone().endOf("month")
            }
            e.$parent.currentState = o.current.name, e.query = {}, e.query.club_approved = e.$parent.clubStatus[0];
            var d = moment();
            e.currentMonthNo = d.format("M"), e.currentYear = d.year(), window.onbeforeunload = function() {
                localStorage.setItem("currentStateName", "partners"), angular.isDefined(n.adminId) && localStorage.setItem("adminId", n.adminId)
            }, e.approveClub = function(t) {
                var a = {
                    coach: {
                        club_approved: t.selectedClubStatus
                    }
                };
                c.updateStatus(t.coach_id, a, function(a) {
                    a.$resolved && 200 === a.status && angular.isDefined(t.selectedClubStatus) && null !== t.selectedClubStatus && (t.currentClubStatus = findElement(e.clubStatus, "value", t.selectedClubStatus), t.club_approved = t.currentClubStatus.value), t.selectedClubStatus = null
                }, function(e) {
                    console.log(e)
                })
            };
            var d, u, m, h = "MMM Do";
            e.currentMonthStart = function() {
                return u.format(h)
            }, e.currentMonthEnd = function() {
                return m.format(h)
            }, e.prevMonth = function() {
                l(d.subtract(30, "days"))
            }, e.setMonthFilters = function() {
                l(moment()), e.monthNum = d.format("M"), e.monthFilters = [];
                var t = {
                    name: "Current Month",
                    month_no: e.monthNum,
                    year_no: moment(u).year()
                };
                e.monthFilters.push(t);
                for (var a = e.monthNum - 1; a > e.monthNum - 12; a--) e.prevMonth(), t = {
                    name: e.currentMonthStart() + " - " + e.currentMonthEnd(),
                    month_no: a <= 0 ? 12 + a % 12 : a,
                    year_no: moment(u).year()
                }, e.monthFilters.push(t)
            }, e.setMonthFilters(), e.fetchClubs = function() {
                e.clubs = [], s.getApprovedClubs(function(t) {
                    t.$resolved && 200 === t.status && t.data.length > 0 && (e.clubs = t.data)
                }, function(e) {
                    var t = "Error!",
                        a = "Email " + e.statusText;
                    i.showAlert(t, a)
                })
            }, e.fetchClubs(), e.filterPartner = function() {
                return function(t) {
                    var a;
                    return 0 === e.query.club_approved.value && 1 === t.status && 3 === t.background_check ? a = !0 : 0 !== e.query.club_approved.value && (a = t.club_approved === e.query.club_approved.value && 1 === t.status && 3 === t.background_check), a
                }
            }
        };
        e.$inject = ["$scope", "$http", "appConfig", "$state", "$stateParams", "CommonAPIInterfaceService", "AlertService", "$rootScope", "AdminProfileInterfaceService"], angular.module("Coachco").controller("adminPartnersController", e)
    }(),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d) {
            function u(e) {
                m = e, h = m.clone().startOf("isoweek"), p = m.clone().endOf("isoweek"), g = m.clone().startOf("month"), f = m.clone().endOf("month"), v = m.clone().startOf("year"), S = m.clone().endOf("year")
            }
            e.$parent.currentState = r.current.name, e.paymentStatus = a.paymentStatus, window.onbeforeunload = function() {
                localStorage.setItem("currentStateName", "payments"), angular.isDefined(d.adminId) && localStorage.setItem("adminId", d.adminId)
            };
            var m, h, p, g, f, v, S, C = "MMM Do",
                y = "MMM Do YYYY";
            e.currentWeek = function() {
                return m.format(C)
            }, e.currentWeekStart = function() {
                return h.format(C)
            }, e.currentWeekEnd = function() {
                return p.format(C)
            }, e.currentMonthStart = function() {
                return g.format(C)
            }, e.currentMonthEnd = function() {
                return f.format(C)
            }, e.currentYearStart = function() {
                return v.format(y)
            }, e.currentYearEnd = function() {
                return S.format(y)
            }, e.nextWeek = function() {
                u(m.add(7, "days"))
            }, e.prevWeek = function() {
                u(m.subtract(7, "days"))
            }, e.prevMonth = function() {
                u(m.subtract(30, "days"))
            }, e.prevYear = function() {
                u(m.subtract(365, "days"))
            }, e.week = function(e) {
                var t = moment(e.jsdatetime);
                return t >= h && t <= p
            }, e.setWeekFilters = function() {
                u(moment());
                var t = new Date;
                e.weekNum = +o("date")(new Date(t.getFullYear(), t.getMonth(), t.getDate()), "w", "UTC"), e.weekFilters = [];
                var a = {
                    name: "Current Week",
                    week_no: e.weekNum,
                    year_no: moment(h).year()
                };
                e.weekFilters.push(a);
                for (var n = e.weekNum - 1; n > e.weekNum - 4; n--) e.prevWeek(), a = {
                    name: e.currentWeekStart() + " - " + e.currentWeekEnd(),
                    week_no: n <= 0 ? 52 + n % 52 : n,
                    year_no: moment(h).year()
                }, e.weekFilters.push(a)
            }, e.setWeekFilters(), e.setMonthFilters = function() {
                u(moment()), e.monthNum = m.format("M"), e.monthFilters = [];
                var t = {
                    name: "Current Month",
                    month_no: e.monthNum,
                    year_no: moment(g).year()
                };
                e.monthFilters.push(t);
                for (var a = e.monthNum - 1; a > e.monthNum - 12; a--) e.prevMonth(), t = {
                    name: e.currentMonthStart() + " - " + e.currentMonthEnd(),
                    month_no: a <= 0 ? 12 + a % 12 : a,
                    year_no: moment(g).year()
                }, e.monthFilters.push(t)
            }, e.setMonthFilters(), e.setYearFilters = function() {
                u(moment()), e.yearNum = m.format("YYYY"), e.yearFilters = [];
                var t = {
                    name: "Current Year",
                    year_no: e.yearNum
                };
                e.yearFilters.push(t);
                for (var a = e.yearNum - 1; a > e.yearNum - 4; a--) e.prevYear(), t = {
                    name: e.currentYearStart() + " - " + e.currentYearEnd(),
                    year_no: a
                }, e.yearFilters.push(t)
            }, e.setYearFilters(), e.getPaymentsWithinPeriod = function(t) {
                e.showLoaderImage(), "Week" === e.selectedTab ? (localStorage.setItem("selectedPaymentsWeekFilterPeriod", angular.toJson(t)), n.getWeeklyPayments(t.week_no, t.year_no, function(t) {
                    t.$resolved && 200 === t.status && (e.paymentData = t.data.coaches, e.paymentData.gross_revenue = t.data.gross_revenue, e.hideLoaderImage())
                }, function() {
                    e.hideLoaderImage()
                })) : "Month" === e.selectedTab ? (localStorage.setItem("selectedPaymentsMonthFilterPeriod", angular.toJson(t)), n.getMonthlyPayments(t.month_no, t.year_no, function(t) {
                    t.$resolved && 200 === t.status && (e.paymentData = t.data.coaches, e.paymentData.gross_revenue = t.data.gross_revenue, e.hideLoaderImage())
                }, function() {
                    e.hideLoaderImage()
                })) : "Year" === e.selectedTab && (localStorage.setItem("selectedPaymentsYearFilterPeriod", angular.toJson(t)), n.getYearlyPayments(t.year_no, function(t) {
                    t.$resolved && 200 === t.status && (e.paymentData = t.data.coaches, e.paymentData.gross_revenue = t.data.gross_revenue, e.hideLoaderImage())
                }, function() {
                    e.hideLoaderImage()
                }))
            }, e.selectTab = function(t) {
                e.selectedTab = t, "Week" === t ? angular.isDefined(localStorage.getItem("selectedPaymentsWeekFilterPeriod")) && null !== localStorage.getItem("selectedPaymentsWeekFilterPeriod") ? e.selectedPeriod = JSON.parse(localStorage.getItem("selectedPaymentsWeekFilterPeriod")) : e.selectedPeriod = e.weekFilters[0] : "Month" === t ? angular.isDefined(localStorage.getItem("selectedPaymentsMonthFilterPeriod")) && null !== localStorage.getItem("selectedPaymentsMonthFilterPeriod") ? e.selectedPeriod = JSON.parse(localStorage.getItem("selectedPaymentsMonthFilterPeriod")) : e.selectedPeriod = e.monthFilters[0] : "Year" === t ? angular.isDefined(localStorage.getItem("selectedPaymentsYearFilterPeriod")) && null !== localStorage.getItem("selectedPaymentsYearFilterPeriod") ? e.selectedPeriod = JSON.parse(localStorage.getItem("selectedPaymentsYearFilterPeriod")) : e.selectedPeriod = e.yearFilters[0] : angular.isDefined(localStorage.getItem("selectedPaymentsWeekFilterPeriod")) && null !== localStorage.getItem("selectedPaymentsWeekFilterPeriod") ? e.selectedPeriod = JSON.parse(localStorage.getItem("selectedPaymentsWeekFilterPeriod")) : e.selectedPeriod = e.weekFilters[0], localStorage.setItem("paymentFilter", t), e.getPaymentsWithinPeriod(e.selectedPeriod)
            }, angular.isDefined(localStorage.getItem("paymentFilter")) && null !== localStorage.getItem("paymentFilter") ? e.selectTab(localStorage.getItem("paymentFilter")) : e.selectTab("Week"), e.updatePayment = function(e) {
                var t = {
                    payment: {
                        amount: e.details.paid_to_coach,
                        payment_id: null !== e.details.payment_id ? e.details.payment_id : 0,
                        paid_on: null !== e.details.paid_on ? e.details.paid_on : moment().format("MM/DD/YYYY"),
                        status: null !== e.details.selectedStatus ? e.details.selectedStatus : e.details.status
                    }
                };
                n.updatePayment(e.coach_payment_id, t, function(t) {
                    t.$resolved && 200 === t.status && angular.isDefined(e.details.selectedStatus) && null !== e.details.selectedStatus && (e.details.status = e.details.selectedStatus), e.details.selectedStatus = null
                })
            }
        };
        e.$inject = ["$scope", "$http", "appConfig", "$filter", "AdminProfileInterfaceService", "$rootScope", "$timeout", "$state", "uiCalendarConfig", "$compile", "$stateParams"], angular.module("Coachco").controller("adminPaymentsController", e)
    }(),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d, u) {
            function m(e) {
                h = e, p = h.clone().startOf("isoweek"), g = h.clone().endOf("isoweek"), f = h.clone().startOf("month"), v = h.clone().endOf("month"), S = h.clone().startOf("year"), C = h.clone().endOf("year")
            }
            e.$parent.currentState = c.current.name, e.sessionStatus = a.sessionStatus, e.query = {}, e.query.status = e.sessionStatus[0], e.orderProperty = "coach", e.filterStatus = !1, window.onbeforeunload = function() {
                localStorage.setItem("currentStateName", "sessions"), angular.isDefined(u.adminId) && localStorage.setItem("adminId", u.adminId)
            }, e.filterSessions = function() {
                return function(t) {
                    var a;
                    return 0 === e.query.status.value ? a = !0 : 0 !== e.query.status.value && (a = t.status.toUpperCase() === e.query.status.name.toUpperCase()), a
                }
            }, e.setOrderProperty = function(t) {
                e.filterStatus = !e.filterStatus, e.orderProperty === t ? e.orderProperty = "-" + t : e.orderProperty === "-" + t ? e.orderProperty = t : e.orderProperty = t
            };
            var h, p, g, f, v, S, C, y = "MMM Do",
                _ = "MMM Do YYYY";
            e.currentWeek = function() {
                return h.format(y)
            }, e.currentWeekStart = function() {
                return p.format(y)
            }, e.currentWeekEnd = function() {
                return g.format(y)
            }, e.currentMonthStart = function() {
                return f.format(y)
            }, e.currentMonthEnd = function() {
                return v.format(y)
            }, e.currentYearStart = function() {
                return S.format(_)
            }, e.currentYearEnd = function() {
                return C.format(_)
            }, e.nextWeek = function() {
                m(h.add(7, "days"))
            }, e.prevWeek = function() {
                m(h.subtract(7, "days"))
            }, e.prevMonth = function() {
                m(h.subtract(30, "days"))
            }, e.prevYear = function() {
                m(h.subtract(365, "days"))
            }, e.week = function(e) {
                var t = moment(e.jsdatetime);
                return t >= p && t <= g
            }, e.setWeekFilters = function() {
                m(moment());
                var t = new Date;
                e.weekNum = +o("date")(new Date(t.getFullYear(), t.getMonth(), t.getDate()), "w", "UTC"), e.weekFilters = [];
                var a = {
                    name: "Current Week",
                    week_no: e.weekNum,
                    year_no: moment(p).year()
                };
                e.weekFilters.push(a);
                for (var n = e.weekNum - 1; n > e.weekNum - 4; n--) e.prevWeek(), a = {
                    name: e.currentWeekStart() + " - " + e.currentWeekEnd(),
                    week_no: n <= 0 ? 52 + n % 52 : n,
                    year_no: moment(p).year()
                }, e.weekFilters.push(a)
            }, e.setWeekFilters(), e.setMonthFilters = function() {
                m(moment()), e.monthNum = h.format("M"), e.monthFilters = [];
                var t = {
                    name: "Current Month",
                    month_no: e.monthNum,
                    year_no: moment(f).year()
                };
                e.monthFilters.push(t);
                for (var a = e.monthNum - 1; a > e.monthNum - 12; a--) e.prevMonth(), t = {
                    name: e.currentMonthStart() + " - " + e.currentMonthEnd(),
                    month_no: a <= 0 ? 12 + a % 12 : a,
                    year_no: moment(f).year()
                }, e.monthFilters.push(t)
            }, e.setMonthFilters(), e.setYearFilters = function() {
                m(moment()), e.yearNum = h.format("YYYY"), e.yearFilters = [];
                var t = {
                    name: "Current Year",
                    year_no: e.yearNum
                };
                e.yearFilters.push(t);
                for (var a = e.yearNum - 1; a > e.yearNum - 4; a--) e.prevYear(), t = {
                    name: e.currentYearStart() + " - " + e.currentYearEnd(),
                    year_no: a
                }, e.yearFilters.push(t)
            }, e.setYearFilters(), e.fetchServiceFee = function() {
                i.getServiceFee(function(t) {
                    t.$resolved && 200 === t.status && (e.serviceFee = t.data.service_fee, angular.isDefined(localStorage.getItem("adminSessionFilter")) && null !== localStorage.getItem("adminSessionFilter") ? e.selectTab(localStorage.getItem("adminSessionFilter")) : e.selectTab("Week"))
                })
            }, e.getSessionsWithinPeriod = function(t) {
                e.showLoaderImage(), "Week" === e.selectedTab ? (localStorage.setItem("selectedSessionsWeekFilterPeriod", angular.toJson(t)), r.getWeeklySessions(t.week_no, t.year_no, function(t) {
                    t.$resolved && 200 === t.status && (e.sessionData = t.data, e.sessionData.sessions.forEach(function(t) {
                        e.setSelectedActivity(t), t.service_fee = Math.round(t.coach_fee * e.serviceFee), t.coach_fee && !t.service_fee && (t.service_fee = 1)
                    }), e.hideLoaderImage())
                }, function() {
                    e.hideLoaderImage()
                })) : "Month" === e.selectedTab ? (localStorage.setItem("selectedSessionsMonthFilterPeriod", angular.toJson(t)), r.getMonthlySessions(t.month_no, t.year_no, function(t) {
                    t.$resolved && 200 === t.status && (e.sessionData = t.data, e.sessionData.sessions.forEach(function(t) {
                        e.setSelectedActivity(t), t.service_fee = Math.round(t.coach_fee * e.serviceFee), t.coach_fee && !t.service_fee && (t.service_fee = 1)
                    }), e.hideLoaderImage())
                }, function() {
                    e.hideLoaderImage()
                })) : "Year" === e.selectedTab && (localStorage.setItem("selectedSessionsYearFilterPeriod", angular.toJson(t)), r.getYearlySessions(t.year_no, function(t) {
                    t.$resolved && 200 === t.status && (e.sessionData = t.data, e.sessionData.sessions.forEach(function(t) {
                        e.setSelectedActivity(t), t.service_fee = Math.round(t.coach_fee * e.serviceFee), t.coach_fee && !t.service_fee && (t.service_fee = 1)
                    }), e.hideLoaderImage())
                }, function() {
                    e.hideLoaderImage()
                })), e.$$phase || e.$apply()
            }, e.selectTab = function(t) {
                e.selectedTab = t, "Week" === t ? angular.isDefined(localStorage.getItem("selectedSessionsWeekFilterPeriod")) && null !== localStorage.getItem("selectedSessionsWeekFilterPeriod") ? e.selectedPeriod = JSON.parse(localStorage.getItem("selectedSessionsWeekFilterPeriod")) : e.selectedPeriod = e.weekFilters[0] : "Month" === t ? angular.isDefined(localStorage.getItem("selectedSessionsMonthFilterPeriod")) && null !== localStorage.getItem("selectedSessionsMonthFilterPeriod") ? e.selectedPeriod = JSON.parse(localStorage.getItem("selectedSessionsMonthFilterPeriod")) : e.selectedPeriod = e.monthFilters[0] : "Year" === t ? angular.isDefined(localStorage.getItem("selectedSessionsYearFilterPeriod")) && null !== localStorage.getItem("selectedSessionsYearFilterPeriod") ? e.selectedPeriod = JSON.parse(localStorage.getItem("selectedSessionsYearFilterPeriod")) : e.selectedPeriod = e.yearFilters[0] : angular.isDefined(localStorage.getItem("selectedSessionsWeekFilterPeriod")) && null !== localStorage.getItem("selectedSessionsWeekFilterPeriod") ? e.selectedPeriod = JSON.parse(localStorage.getItem("selectedSessionsWeekFilterPeriod")) : e.selectedPeriod = e.weekFilters[0], e.$$phase || e.$apply(), localStorage.setItem("adminSessionFilter", t), e.getSessionsWithinPeriod(e.selectedPeriod)
            }, e.fetchServiceFee()
        };
        e.$inject = ["$scope", "$http", "appConfig", "$filter", "$rootScope", "$timeout", "CommonAPIInterfaceService", "AdminProfileInterfaceService", "$state", "uiCalendarConfig", "$compile", "$stateParams"], angular.module("Coachco").controller("adminSessionsController", e)
    }(),
    function() {
        var e = function(e, t, a, o, n, s, i, r) {
            e.title = i.title, e.message = a.trustAsHtml(i.message), e.setSchedule = !1, e.commissionPercentage = r.commission, e.close = function() {
                t.closeAlert(o)
            }, e.done = function(a) {
                e.settingCommission = !0;
                var s = {
                    commission: parseFloat(e.commissionPercentage) / 100
                };
                n.updateCommission(r.coachId, s, function(a) {
                    a.$resolved && 200 === a.status && (e.settingCommission = !1, t.doneAlert(o, e.commissionPercentage))
                })
            }
        };
        e.$inject = ["$scope", "AlertService", "$sce", "$uibModalInstance", "CoachProfileInterfaceService", "$timeout", "errorModel", "modalData"], angular.module("Coachco").controller("SetCommissionController", e)
    }(), angular.module("Coachco").factory("AuthFactory", ["$http", "AuthTokenFactory", "$rootScope", function(e, t, a) {
    function o(o, n) {
        var s = {
            method: "POST",
            url: "/api/login",
            data: {
                email: o,
                password: n
            }
        };
        return e(s).then(function(e) {
            return 401 === e.status ? (t.removeTokens(), {
                errorMessage: "Invalid credentials"
            }) : 200 === e.status ? (t.setJwtToken(e.data.token), a.profileCompletionStatus = _(), e.data.token) : (t.removeTokens(), {
                errorMessage: e.errors[0]
            })
        })
    }

    function n(a) {
        var o = {
            method: "POST",
            url: "/api/registration",
            data: a
        };
        return e(o).then(function(e) {
            return 200 === e.status ? (t.setRegistration(), e) : e.errorMessage
        })
    }

    function s(t, a) {
        var o = {
            method: "POST",
            url: "/api/changePassword",
            data: {
                newPassword: a,
                currentPassword: t
            }
        };
        return e(o).then(function(e) {
            return e
        })
    }

    function i(t) {
        var a = {
            method: "POST",
            url: "/api/resetPassword",
            data: {
                email: t
            }
        };
        return e(a).then(function(e) {
            return e
        })
    }

    function r() {
        var e = t.getUserId();
        return e
    }

    function c() {
        var e = t.getUserEmail();
        return e
    }

    function l() {
        var e = t.getStatus();
        return e
    }

    function d() {
        var e = t.getRoles();
        return e
    }

    function u() {
        var e = t.getExp();
        if (e) {
            var a = Math.round((new Date).getTime());
            return a <= e
        }
        return !1
    }

    function m() {
        return t.isClient()
    }

    function h() {
        return t.isCoach()
    }

    function p() {
        return t.isAdmin()
    }

    function g() {
        return t.getFirstName()
    }

    function f() {
        return t.getLastName()
    }

    function v() {
        return t.getParentId()
    }

    function S() {
        return t.getAdminId()
    }

    function C() {
        return t.getCoachId()
    }

    function y() {
        return t.getProfileImage()
    }

    function _() {
        return t.getCompletionStatus()
    }

    function b() {
        return a.userChannel && a.pusher && a.pusher.unsubscribe(a.userChannel), a.checkedOut = !1, t.removeTokens()
    }

    function w() {
        return t.isRegistered()
    }
    return {
        signIn: o,
        getUserId: r,
        getUserEmail: c,
        getStatus: l,
        getRoles: d,
        isLoggedIn: u,
        isClient: m,
        isCoach: h,
        isAdmin: p,
        getFirstName: g,
        getLastName: f,
        getParentId: v,
        getAdminId: S,
        getProfileImage: y,
        getCompletionStatus: _,
        getCoachId: C,
        register: n,
        changePassword: s,
        forgotPassword: i,
        logout: b,
        isRegistered: w
    }
}]), angular.module("Coachco").factory("AuthTokenFactory", ["$window", "$cookies", function(e, t) {
    function a() {
        return t.get(E)
    }

    function o() {
        var e = C();
        e && (e.indexOf("client") !== -1 && (L = !0), e.indexOf("coach") !== -1 && (R = !0));
        var t = c();
        t && (I = t.user_id)
    }

    function n(e) {
        var a = new Date;
        a.setDate(a.getDate() + 30), t.put(E, e, {
            expires: a
        }), o()
    }

    function s() {
        t.put(x, "true")
    }

    function i() {
        return t.get(x) ? t.get(x) : "false"
    }

    function r() {
        t.remove(E)
    }

    function c() {
        if (a()) {
            var t = a().split(".")[1],
                o = t.replace("-", "+").replace("_", "/"),
                n = JSON.parse(e.atob(o));
            return n
        }
    }

    function l() {
        var e = c();
        return e && (I = e.user_id), I
    }

    function d() {
        var e = c();
        return e && (M = e.email), M
    }

    function u() {
        var e = c();
        return e && (T = e.status), T
    }

    function m() {
        var e = c();
        return e && (I = e.firstname), I
    }

    function h() {
        var e = c();
        return e && (I = e.lastname), I
    }

    function p() {
        var e = c();
        return e && (P = e.parent_id), P
    }

    function g() {
        var e = c();
        return e && (A = e.admin_id), A
    }

    function f() {
        var e = c();
        return e && (D = e.profile_image), D
    }

    function v() {
        var e = c();
        return e && (k = e.profile_completion_stage), k
    }

    function S() {
        var e = c();
        return e && ($ = e.coach_id), $
    }

    function C() {
        var e = c();
        return e ? e.roles : null
    }

    function y() {
        var e = c();
        return e ? e.exp : 0
    }

    function _() {
        var e = C();
        return !!e && e.indexOf("client") !== -1
    }

    function b() {
        var e = C();
        return !!e && e.indexOf("superuser") !== -1
    }

    function w() {
        var e = C();
        return !!e && e.indexOf("coach") !== -1
    }
    var I, P, $, A, D, T, M, k, E = "token",
        L = !1,
        R = !1,
        x = "registered";
    return {
        getJwtToken: a,
        setJwtToken: n,
        removeTokens: r,
        getUserId: l,
        getUserEmail: d,
        getStatus: u,
        getRoles: C,
        getExp: y,
        isClient: _,
        isCoach: w,
        isAdmin: b,
        getFirstName: m,
        getLastName: h,
        getParentId: p,
        getAdminId: g,
        getProfileImage: f,
        getCompletionStatus: v,
        getCoachId: S,
        setRegistration: s,
        isRegistered: i
    }
}]),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d, u, m, h, p, g, f, v, S) {
            function C(t) {
                var a = t.date,
                    o = t.mode;
                if ("day" === o)
                    for (var n = new Date(a).setHours(0, 0, 0, 0), s = 0; s < e.dateEvents.length; s++) {
                        var i = new Date(e.dateEvents[s].date).setHours(0, 0, 0, 0);
                        if (n === i) return e.dateEvents[s].status
                    }
                return ""
            }
            e.apiService = l, e.athleteArray = [], e.credentials = {}, e.cart = "", e.self = !1, e.inputType = "password", e.validCart = [], e.errorMessage = "", e.genders = t.genders, e.month = t.month, e.submitted = !1, e.formNotFilled = !1, e.showAtheleteList = !1, e.showLoader = !1, e.initializeAuth = function() {
                e.firstName = m.getFirstName(), e.lastName = m.getLastName(), e.userId = m.getUserId(), e.loggedIn = m.isLoggedIn(), e.isClient = m.isClient(), e.isCoach = m.isCoach(), e.isRegistered = m.isRegistered()
            }, e.hideShowPassword = function() {
                "password" === e.inputType ? e.inputType = "text" : e.inputType = "password"
            }, e.setasAthlete = function(t) {
                e.athleteSelected && e.data.registration.parent.firstname && e.data.registration.parent.lastname ? (e.athFirstName = e.data.registration.parent.firstname, e.athLastName = e.data.registration.parent.lastname) : e.athFirstName = e.athLastName = ""
            }, e.addNewAthlete = function() {
                if (e.added = !0, e.athFirstName && e.athLastName && e.birthYear && e.gender) {
                    e.added = !1;
                    var t = e.athleteArray.length,
                        t = angular.element(".athlet-list-add").eq(0).children().length;
                    e.athlete = "<li><span>" + e.athFirstName + " " + e.athLastName + "</span><span>" + e.birthYear + "</span><span>" + e.gender.charAt(0) + '</span><span><button ng-click="removeAthlete($event)" id=' + t + ">Remove</button></span></li>", e.temp = r(e.athlete)(e), angular.element(".athlet-list-add").append(e.temp);
                    var a = {
                        first_name: e.athFirstName,
                        last_name: e.athLastName,
                        profile: {
                            dob: e.birthYear,
                            gender: e.gender.charAt(0)
                        },
                        idd: t
                    };
                    e.athleteSelected && (a.relation = "self"), e.athleteSelected && (e.self = "self", e.selfId = t, e.athleteSelected = !1), e.athleteArray.push(a), e.showAtheleteList = !0, e.athFirstName = e.athLastName = e.birthYear = e.gender = void 0, e.regForm.$setPristine(), e.regForm.$setUntouched()
                } else e.added = !0
            }, e.removeAthlete = function(t) {
                $.each(e.athleteArray, function(a) {
                    return e.athleteArray[a].idd == t.currentTarget.id ? (t.currentTarget.id == e.selfId && (e.self = !1), e.athleteArray.splice(a, 1), t.currentTarget.parentElement.parentElement.remove(), !1) : void(0 == e.athleteArray.length && (e.showAtheleteList = !1))
                })
            }, e.formatPhone = function(t) {
                t.currentTarget.value = e.phoneFormat(t.currentTarget.value)
            }, e.phoneFormat = function(e) {
                e = e.replace(/\D/g, ""), e = e.substring(0, 10);
                var t = e.length;
                return e = 0 == t ? e : t < 4 ? "(" + e : t < 7 ? "(" + e.substring(0, 3) + ") " + e.substring(3, 6) : "(" + e.substring(0, 3) + ") " + e.substring(3, 6) + " - " + e.substring(6, 10)
            }, e.formatDob = function(t) {
                t.currentTarget.value = e.dobFormat(t.currentTarget.value)
            }, e.dobFormat = function(e) {
                e = e.replace(/\D/g, ""), e = e.substring(0, 8);
                var t = e.length;
                return e = 0 == t ? e : 2 == t ? e : 4 == t ? e.substring(0, 2) + "/" + e.substring(2, 4) : e.substring(0, 2) + "/" + e.substring(2, 4) + "/" + e.substring(4, 8)
            }, e.resetEmail = function() {
                var e = "Reset Password!",
                    t = "Please enter the email address associated with your account, and we will email you a link to reset your password.";
                v.resetEmail(e, t, function(e) {})
            };
            var y, _ = angular.element(".accordion");
            for (y = 0; y < _.length; y++) _[y].onclick = function() {
                this.classList.toggle("active"), this.nextElementSibling.classList.toggle("show")
            };
            e.openAthlete = function() {
                angular.element(".add-athlete-account").toggleClass("open"), angular.element("html, body").animate({
                    scrollTop: angular.element(".booking-form-top").offset().top + 500
                }, 1200)
            };
            e.creditCard = {
                number: "",
                expirationDate: ""
            }, e.initialize = function() {
                e.data = {
                    registration: {
                        parent: {
                            athletes: {}
                        }
                    }
                }
            }, e.register = function() {
                e.showLoader = !0, e.regDisabled = !0, e.loggedIn ? s.go("coachSearch.coaches") : (e.submitted = !0, e.regForm.$valid ? (e.errorMessage = "", e.formNotFilled = !1, e.athleteArray.length > 0 && (e.data.registration.parent.athletes = e.athleteArray), m.register(e.data).then(function(t) {
                    e.errorMessage = "", e.successMessage = "", e.showLoader = !0, e.signIn(e.data.registration.parent.email, e.data.registration.parent.password)
                }, function(t) {
                    e.showLoader = !1, t.data ? "email_is_taken" == t.data.message && (e.errorMessage = "Email already taken") : e.errorMessage = "Unexpected Error", e.regDisabled = !1
                })) : (e.showLoader = !1, e.regDisabled = !1, e.errorMessage = "Please complete all of the fields to create your account.", e.formNotFilled = !0))
            }, e.getCartItemCount = function() {
                var t = p.get("SF.cartId");
                t ? l.getCartItemCount(t).success(function(t) {
                    if (e.cartItemCount = t.cartItemsCount, e.validCart = e.cart, angular.isDefined(e.validCart) && angular.isDefined(e.validCart.cart_items)) {
                        for (var o = e.validCart.cart_items.length - 1; o >= 0; o--) "expired" !== e.validCart.cart_items[o].status && "unavailable" !== e.validCart.cart_items[o].status || e.validCart.cart_items.splice(o, 1);
                        a.acceptInvite ? s.go(a.stateName, a.stateParams, {
                            location: "replace"
                        }) : a.previousState && "home" !== a.previousState ? "coachSearch.coaches" === a.previousState ? e.validCart.cart_items.length > 0 && Boolean(localStorage.getItem("cartCheckOut")) ? s.go("booking.selectYourAthlete") : s.go("coachSearch.coaches", {
                            name: a.name,
                            zip: a.zip,
                            sport: a.sport,
                            searchParam: a.zip
                        }) : "booking.login" === a.previousState && (e.validCart.cart_items.length > 0 && Boolean(localStorage.getItem("cartCheckOut")) ? s.go("booking.selectYourAthlete") : s.go("coachSearch.coaches", {
                            name: a.name,
                            zip: a.zip,
                            sport: a.sport,
                            searchParam: hyphenSeparated(a.name)
                        })) : s.go("home")
                    } else s.go("home")
                }) : s.go("home")
            }, e.removeExpiredSession = function() {
                n.setSessionTimer("stop"), a.sessionStatus = "", localStorage.removeItem("cartCheckOut"), localStorage.removeItem("sessionTimer"), localStorage.removeItem("cartTimer"), (angular.isUndefined(localStorage.getItem("sessionTimer")) || null === localStorage.getItem("sessionTimer") || angular.isUndefined(localStorage.getItem("cartTimer")) || null === localStorage.getItem("cartTimer")) && a.$emit("refreshContinueLink")
            }, e.getCartCount = function() {
                var t = p.get("SF.cartId");
                t ? l.getCartItemCount(t).success(function(o) {
                    e.cartItemCount = o.cartItemsCount, e.cartItemCount > 0 && l.clearCart(t).success(function() {
                        a.$emit("refreshContinueLink");
                        var e = "Oops!",
                            t = "You cannot purchase a session as a coach. Please login as a client to book sessions.";
                        v.showAlert(e, t)
                    })
                }) : e.cartItemCount = 0
            }, e.clearCart = function() {
                var t = p.get("SF.cartId");
                e.removeExpiredSession(), t ? e.getCartCount() : e.removeExpiredSession()
            }, e.signIn = function(t, o) {
                if (e.submitted = !0, e.showLoader = !0, m.isLoggedIn()) {
                    e.errorMessage = "";
                    var n, i = m.getParentId();
                    l.getParentCartId(i).then(function(t) {
                        e.cart = t.data.cart, e.validCart = t.data.cart, t.data.cart && (n = t.data.cart._id.$oid, p.put("SF.cartId", n + ""), l.getCart(n).success(function(t) {
                            e.cart = t.cart, e.validCart = t.cart, e.getCartItemCount()
                        }))
                    }, function(e) {}), a.acceptInvite ? s.go(a.stateName, a.stateParams, {
                        location: "replace"
                    }) : a.previousState ? "home" == a.previousState && s.go("home") : s.go("home")
                } else e.errorMessage = "", e.successMessage = "", e.initializeAuth(), m.signIn(t, o).then(function(t) {
                    if (t.errorMessage) e.errorMessage = t.errorMessage, h.removeTokens();
                    else if (a.acceptInvite) s.go(a.stateName, a.stateParams, {
                        location: "replace"
                    });
                    else if (m.isCoach()) a.$emit("refreshContinueLink"), e.clearCart(), 0 === m.getCompletionStatus() ? 1 === m.getStatus() ? s.go("coachProfile.dashboard.sessions", {
                        coachId: m.getCoachId()
                    }) : s.go("errorPage", {
                        message: "Thank you for your application. Once your application is approved, you will be able to access your dashboard through this link. We look forward to working with you!"
                    }) : s.go("home");
                    else {
                        e.errorMessage = "";
                        var o, n = p.get("SF.cartId");
                        if (n) {
                            var i = m.getParentId(),
                                r = {
                                    parent_id: i
                                };
                            l.getParentCartId(i).then(function(t) {
                                e.cart = t.data.cart, e.validCart = t.data.cart, t.data.cart ? (o = t.data.cart._id.$oid, n !== o ? l.setCartParentId(n, r).then(function(t) {
                                    p.put("SF.cartId", o + ""), l.getCart(o).then(function(t) {
                                        e.cart = t.data.cart, e.validCart = t.data.cart, e.getCartItemCount()
                                    })
                                }, function(e) {}) : l.getCart(o).then(function(t) {
                                    e.cart = t.data.cart, e.validCart = t.data.cart, e.getCartItemCount()
                                }, function(e) {})) : l.setCartParentId(n, r).then(function(t) {
                                    p.put("SF.cartId", n + ""), l.getCart(n).then(function(t) {
                                        e.cart = t.data.cart, e.validCart = t.data.cart, e.getCartItemCount()
                                    })
                                }, function(e) {})
                            }, function(e) {
                                console.log("error %o", e)
                            })
                        } else {
                            var o, i = m.getParentId(),
                                r = {
                                    parent_id: i
                                };
                            l.getParentCartId(i).then(function(t) {
                                e.cart = t.data.cart, e.validCart = t.data.cart, t.data.cart ? (o = t.data.cart._id.$oid, p.put("SF.cartId", o + ""), l.getCart(o).then(function(t) {
                                    e.cart = t.data.cart, e.validCart = t.data.cart, e.getCartItemCount()
                                }, function(e) {})) : a.acceptInvite ? s.go(a.stateName, a.stateParams, {
                                    location: "replace"
                                }) : a.previousState && "home" !== a.previousState ? s.go("coachSearch.coaches", {
                                    name: a.name,
                                    zip: a.zip,
                                    sport: a.sport,
                                    searchParam: a.zip
                                }) : s.go("home")
                            }, function(e) {})
                        }
                    }
                }, function(t) {
                    if (t.data ? e.errorMessage = t.data.message : e.errorMessage = "Unexpected Error", 406 === t.status) {
                        var a = "Oops!",
                            o = "The account you are trying to login is invalid. Please contact strivefar for further help.";
                        v.showAlert(a, o)
                    }
                    e.showLoader = !1
                })
            }, e.today = function() {
                e.dt = new Date
            }, e.today(), e.clear = function() {
                e.dt = null
            }, e.inlineOptions = {
                customClass: C,
                minDate: new Date,
                showWeeks: !0
            }, e.dateOptions = {
                formatYear: "yy",
                maxDate: new Date(2020, 5, 22),
                minDate: new Date,
                startingDay: 1,
                showWeeks: !1
            }, e.toggleMin = function() {
                e.inlineOptions.minDate = e.inlineOptions.minDate ? null : new Date, e.dateOptions.minDate = e.inlineOptions.minDate
            }, e.toggleMin(), e.open1 = function() {
                e.popup1.opened = !0
            }, e.open2 = function() {
                e.popup2.opened = !0
            }, e.open3 = function() {
                e.popup2.opened = !0
            }, e.setDate = function(t, a, o) {
                e.dt = new Date(t, a, o)
            }, e.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "dd.MM.yyyy", "shortDate"], e.format = e.formats[0], e.altInputFormats = ["M!/d!/yyyy"], e.popup1 = {
                opened: !1
            }, e.popup2 = {
                opened: !1
            };
            var b = new Date;
            b.setDate(b.getDate() + 1);
            var w = new Date;
            w.setDate(b.getDate() + 1), e.dateEvents = [{
                date: b,
                status: "full"
            }, {
                date: w,
                status: "partially"
            }], e.close = function() {
                n.modalClose($uibModalInstance)
            }, e.resetPassword = function() {
                var t, a;
                if (e.resetPasswordForm.$valid) {
                    var o = {
                        reset_password_token: c.reset_password_token,
                        password: e.new_password,
                        password_confirmation: e.confirmpassword
                    };
                    S.resetEmail(o, function() {
                        t = "Success!", a = "Your password has been successfully updated. Please login with the new password.", v.showAlert(t, a, function(e) {
                            "ok" === e.$$state.value && s.go("booking.login")
                        })
                    }, function() {
                        t = "Oops!", a = "You cannot update your password.", v.showAlert(t, a)
                    })
                } else t = "Incomplete Information!", a = "Please enter all the required fields", v.showAlert(t, a), e.submitted = !0
            }, e.isPasswordRequired = function() {
                return !!(angular.isDefined(e.new_password) && e.new_password.length > 0 && null !== e.new_password)
            }
        };
        e.$inject = ["$scope", "appConfig", "$rootScope", "$timeout", "Coachco_CommonService", "$state", "uiCalendarConfig", "$compile", "$stateParams", "BookingService", "$http", "$braintree", "AuthFactory", "AuthTokenFactory", "$cookies", "StoreService", "ClientProfileInterfaceService", "AlertService", "CommonAPIInterfaceService"], angular.module("Coachco").controller("bookingController", e)
    }(),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d, u, m, h, p, g, f, v, S, C) {
            e.clientId = g.getParentId(), e.goToMyAccount = function() {
                r.go("clientProfile.dashboard.sessions", {
                    clientId: e.clientId
                })
            }, e.findCoach = function() {
                r.go("home")
            }, e.getDate = function(e) {
                var a = new Date(e);
                return t.days[a.getDay()] + ", " + t.month[a.getMonth()] + " " + a.getDate()
            }, e.getFormattedDate = function(e) {
                var a = new Date(e);
                return t.days[a.getDay()] + " (" + t.month[a.getMonth()] + " " + a.getDate() + ")"
            }, e.getPlace = function(e) {
                return e.split(",")[0]
            }, e.getAddress = function(e) {
                return e.substr(e.split(",")[0].length + 1)
            }, e.getAddressString = function(e) {
                var t = (angular.isDefined(e.street) && null !== e.street && "" !== e.street ? e.street : "") + (angular.isDefined(e.city) && null !== e.city && "" !== e.city ? ", " + e.city : "") + (angular.isDefined(e.state) && null !== e.state && "" !== e.state ? ", " + e.state : "") + (angular.isDefined(e.zip) && null !== e.zip && "" !== e.zip ? ", " + e.zip : "");
                return t
            }, e.getTime = function(e) {
                var t = new Date(e),
                    a = t.getHours(),
                    o = t.getMinutes(),
                    n = a >= 12 ? "PM" : "AM";
                return a %= 12, a = a ? a : 12, o = o < 10 ? "0" + o : o, a + ":" + o + " " + n
            }, e.showLoaderImage = function() {
                e.loader = !0
            }, e.hideLoaderImage = function() {
                e.loader = !1
            }, e.getSessionData = function(t, a) {
                s.getSessionDetails(t.bookedSessionId, function(o) {
                    "female" === o.data.booked_session.group_gender || "Female" === o.data.booked_session.group_gender ? t.groupGender = "Girls Only" : "male" === o.data.booked_session.group_gender || "Male" === o.data.booked_session.group_gender ? t.groupGender = "Boys Only" : t.groupGender = "Boys and Girls", t.ageFrom = o.data.booked_session.age_from, t.ageTo = o.data.booked_session.age_to;
                    var n = {
                        firstAthlete: t.athletes[0].first_name,
                        ageFrom: t.ageFrom,
                        ageTo: t.ageTo,
                        groupGender: t.groupGender,
                        coachName: t.coachName,
                        startTime: t.startTime,
                        groupSize: t.groupSize,
                        athletes: t.athletes,
                        groupName: t.groupName,
                        bookedSlots: o.data.booked_session.booked_slots,
                        where: t.where,
                        bookedSessionId: t.bookedSessionId,
                        groupType: o.data.booked_session.groupType,
                        friends: [{
                            first_name: "",
                            last_name: "",
                            email: ""
                        }]
                    };
                    parseInt(n.groupSize) > parseInt(n.bookedSlots) && e.friendsList.groups.push(n), a === e.bookedSessions.cart_items.length - 1 && (e.loopCompleted = !0)
                })
            }, e.setView = function() {
                setTimeout(function() {
                    e.$apply(function() {
                        0 === e.friendsList.groups.length ? e.bookedSessions.session_type = "individual" : 1 === e.friendsList.groups.length ? e.bookedSessions.session_type = "group" : e.friendsList.groups.length > 1 && (e.bookedSessions.session_type = "groups")
                    })
                }, 1e4, this)
            }, e.getRecurringSessionData = function(t) {
                C.getInvitedRecurringSessionData(e.clientId, t, function(t) {
                    t.$resolved && 200 === t.status && (e.sessionData = t.data.recurring_session, angular.forEach(e.sessionData.dates, function(t, a) {
                        t.openSlots = e.sessionData.group_size - t.bookedSlots, t.rescheduled && (e.rescheduled = !0), t.location_change && (e.locationChange = !0), t.openSlots <= 0 && e.sessionData.dates.splice(a, 1)
                    }), e.createFriendsData(e.sessionData)), e.hideLoaderImage()
                })
            }, e.createFriendsData = function(t) {
                "individual" !== t.type && "Individual" !== t.type && (e.friendsList.session_type = "group"), "female" === t.groupGender || "Female" === t.groupGender ? t.groupGender = "Girls Only" : "male" === t.groupGender || "Male" === t.groupGender ? t.groupGender = "Boys Only" : t.groupGender = "Boys and Girls";
                var a = {
                    ageFrom: t.ageFrom,
                    ageTo: t.ageTo,
                    groupGender: t.groupGender,
                    coachName: t.coach_first_name + " " + t.coach_last_name,
                    groupSize: t.group_size,
                    groupName: t.groupName,
                    athletes: t.athletes,
                    where: t.where,
                    recurringSessionId: t.recurringSessionId,
                    coachTrainingSessionId: t.coachTrainingSessionId,
                    groupType: t.group_type,
                    type: t.type,
                    friends: [{
                        first_name: "",
                        last_name: "",
                        email: ""
                    }],
                    dates: t.dates
                };
                a.where = t.where.name + ", " + (angular.isDefined(t.where.street) && null !== t.where.street && "" !== t.where.street ? t.where.street : "") + (angular.isDefined(t.city) && null !== t.where.city && "" !== t.where.city ? ", " + t.where.city : "") + (angular.isDefined(t.where.state) && null !== t.where.state && "" !== t.where.state ? ", " + t.where.state : "") + (angular.isDefined(t.where.zip) && null !== t.where.zip && "" !== t.where.zip ? ", " + t.where.zip : ""), e.friendsList.groups.push(a), console.log(e.friendsList)
            }, e.initializeFriendsArray = function() {
                e.showLoaderImage(), e.firstName = g.getFirstName(), e.bookingData = JSON.parse(localStorage.getItem("BookedSessions")), e.friendsList = {}, e.friendsList.friends = [], e.friendsList.groups = [], e.friendsList.session_type = "individual", e.rescheduled = !1, e.locationChange = !1, e.bookingData.recurringSession && e.bookingData.recurring_session ? (e.sessionData = e.bookingData.recurring_session, angular.forEach(e.sessionData.dates, function(t) {
                    t.rescheduled && (e.rescheduled = !0), t.location_change && (e.locationChange = !0)
                }), console.log(e.locationChange), e.createFriendsData(e.sessionData)) : e.bookingData.booked_sessions.forEach(function(t) {
                    "female" === t.groupGender || "Female" === t.groupGender ? t.groupGender = "Girls Only" : "male" === t.groupGender || "Male" === t.groupGender ? t.groupGender = "Boys Only" : t.groupGender = "Boys and Girls";
                    var a = {
                        firstAthlete: t.athletes[0].first_name,
                        ageFrom: t.ageFrom,
                        ageTo: t.ageTo,
                        groupGender: t.groupGender,
                        coachName: t.coachName,
                        startTime: t.startTime,
                        groupSize: t.groupSize,
                        groupName: t.groupName,
                        date_time: t.date_time,
                        athletes: t.athletes,
                        bookedSlots: t.bookedSlots,
                        where: t.location,
                        bookedSessionId: t.bookedSessionId,
                        coachTrainingSessionId: t.coachTrainingSessionId,
                        groupType: t.groupType,
                        type: t.type,
                        friends: [{
                            first_name: "",
                            last_name: "",
                            email: ""
                        }]
                    };
                    a.where = t.location.name + ", " + (angular.isDefined(t.location.address.street) && null !== t.location.address.street && "" !== t.location.address.street ? t.location.address.street : "") + (angular.isDefined(t.location.address.city) && null !== t.location.address.city && "" !== t.location.address.city ? ", " + t.location.address.city : "") + (angular.isDefined(t.location.address.state) && null !== t.location.address.state && "" !== t.location.address.state ? ", " + t.location.address.state : "") + (angular.isDefined(t.location.address.zip) && null !== t.location.address.zip && "" !== t.location.address.zip ? ", " + t.location.address.zip : ""), parseInt(a.groupSize) > parseInt(a.bookedSlots) && e.friendsList.groups.push(a), "individual" !== t.type && "Individual" !== t.type && (e.friendsList.session_type = "group")
                }), "groups" === e.friendsList.session_type || "group" === e.friendsList.session_type || "Group" === e.friendsList.session_type ? (0 === e.friendsList.groups.length ? e.friendsList.session_type = "individual" : 1 === e.friendsList.groups.length ? e.friendsList.session_type = "group" : e.friendsList.groups.length > 1 && (e.friendsList.session_type = "groups"), e.hideLoaderImage()) : e.hideLoaderImage()
            }, e.addAnotherFriend = function(t) {
                if ("groups" === e.friendsList.session_type || "group" === e.friendsList.session_type || "Group" === e.friendsList.session_type) {
                    var a = {
                            first_name: "",
                            last_name: "",
                            email: "",
                            booked_session_id: ""
                        },
                        o = e.friendsList.groups[t].friends.length;
                    e.friendsList.groups[t].friends.push(a), e.scrollTo(t, o)
                }
            }, e.scrollTo = function(e, t) {
                i(function() {
                    var a = angular.element("#friends-list" + e + " #friend-group" + t);
                    angular.element("html, body").animate({
                        scrollTop: a.offset().top - 250
                    }, 50)
                }, 800)
            }, e.invitePotentialClient = function(t) {
                n.invitePotentialClient(t, function() {
                    e.submitting = !1, localStorage.removeItem("BookedSessions");
                    var t = "Success!",
                        a = "An invite has been successfully sent to the entered email(s).";
                    c.showAlert(t, a, function() {
                        r.go("clientProfile.dashboard.sessions", {
                            clientId: e.clientId
                        })
                    })
                }, function() {
                    e.submitting = !1
                })
            }, e.inviteExistingClient = function(t, a) {
                n.inviteClient(t, a, function() {
                    e.submitting = !1, localStorage.removeItem("BookedSessions");
                    var t = "Success!",
                        a = "An invite has been successfully sent to the entered email(s).";
                    c.showAlert(t, a, function() {
                        r.go("clientProfile.dashboard.sessions", {
                            clientId: e.clientId
                        })
                    })
                }, function() {
                    e.submitting = !1
                })
            }, e.inviteFriends = function() {
                var t = {};
                "individual" === e.friendsList.session_type ? (t = {
                    emails: e.emailList,
                    message: " I joined StriveFar to find coaches and book private training sessions for my kids. Itâ€™s easy to use and very helpful for me. I thought it may be helpful to you also. Give it a try!",
                    client_id: e.clientId
                }, e.invitePotentialClient(t)) : "group" !== e.friendsList.session_type && "groups" !== e.friendsList.session_type || (t = {
                    groups: []
                }, e.friendsList.groups.forEach(function(a) {
                    var o = {
                        groupName: a.groupName,
                        booked_session_id: a.bookedSessionId,
                        friends: []
                    };
                    e.bookingData.recurringSession && (o.recurring_session_id = a.recurringSessionId);
                    var n = [];
                    a.friends.forEach(function(e) {
                        angular.isDefined(e.email) && null !== e.email && "" !== e.email && n.push(e)
                    }), n.length > 0 && (o.friends = n, t.groups.push(o))
                }), t.groups.length > 0 && e.sendInvite(t))
            }, e.sendInvite = function(t) {
                C.sendInvite(e.clientId, t, function(t) {
                    if (t.$resolved && 200 === t.status) {
                        localStorage.removeItem("BookedSessions");
                        var a = "Success!",
                            o = "An invite has been successfully sent to the entered email(s).";
                        c.showAlert(a, o, function() {
                            r.go("clientProfile.dashboard.sessions", {
                                clientId: e.clientId
                            })
                        })
                    }
                })
            }
        };
        e.$inject = ["$scope", "appConfig", "$rootScope", "$q", "CommonAPIInterfaceService", "CoachProfileInterfaceService", "$timeout", "$state", "AlertService", "uiCalendarConfig", "$compile", "$stateParams", "BookingService", "$http", "$braintree", "AuthFactory", "AuthTokenFactory", "$cookies", "StoreService", "ClientProfileInterfaceService"], angular.module("Coachco").controller("inviteFriendController", e)
    }(),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d, u, m) {
            e.submitted = !1, e.extraCard = !1, e.errorMessage = "", e.submitted = !1, e.showLoader = !1, e.clientId = l.getParentId(), e.creditCard = {
                number: "",
                expirationDate: "",
                last4: "",
                type: "",
                token: ""
            }, e.getCardType = function() {
                var t = e.creditCard.number + "",
                    a = new RegExp("^4");
                return null != t.match(a) ? "Visa" : (a = new RegExp("^5[1-5]"), null != t.match(a) ? "Mastercard" : (a = new RegExp("^3[47]"), null != t.match(a) ? "AMEX" : (a = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)"), null != t.match(a) ? "Discover" : (a = new RegExp("^36"), null != t.match(a) ? "Diners" : (a = new RegExp("^30[0-5]"), null != t.match(a) ? "Diners - Carte Blanche" : (a = new RegExp("^35(2[89]|[3-8][0-9])"), null != t.match(a) ? "JCB" : (a = new RegExp("^(4026|417500|4508|4844|491(3|7))"), null != t.match(a) ? "Visa Electron" : "")))))))
            }, e.getCart = function() {
                var a = t.get("SF.cartId");
                a && i.getCart(a).success(function(t) {
                    e.cart = t.cart;
                    for (var a = e.cart.cart_items.length - 1; a >= 0; a--) e.cart.cart_items[a].where = e.cart.cart_items[a].location.name + ", " + (angular.isDefined(e.cart.cart_items[a].location.address.street) && null !== e.cart.cart_items[a].location.address.street && "" !== e.cart.cart_items[a].location.address.street ? e.cart.cart_items[a].location.address.street : "") + (angular.isDefined(e.cart.cart_items[a].location.address.city) && null !== e.cart.cart_items[a].location.address.city && "" !== e.cart.cart_items[a].location.address.city ? ", " + e.cart.cart_items[a].location.address.city : "") + (angular.isDefined(e.cart.cart_items[a].location.address.state) && null !== e.cart.cart_items[a].location.address.state && "" !== e.cart.cart_items[a].location.address.state ? ", " + e.cart.cart_items[a].location.address.state : "") + (angular.isDefined(e.cart.cart_items[a].location.address.zip) && null !== e.cart.cart_items[a].location.address.zip && "" !== e.cart.cart_items[a].location.address.zip ? ", " + e.cart.cart_items[a].location.address.zip : ""), e.$$phase || e.$apply()
                }).error(function(e) {})
            }, e.getStoredPayment = function() {
                i.getStoredPayment(l.getParentId()).success(function(t) {
                    t.last_4 && (e.creditCard = {
                        expirationDate: t.expiration_date,
                        last4: t.last_4,
                        type: t.card_type,
                        token: !0
                    })
                }).error(function(e) {})
            }, e.removeStoredPayment = function() {
                u.deleteCreditCard(e.clientId, function(t) {
                    t.$resolved && 200 === t.status && (e.creditCard = {})
                }, function(e) {})
            };
            var h;
            e.paymentAPI = function(a, o) {
                r.payNow(a, function(a) {
                    a.$resolved && 200 === a.status && (e.showLoader = !0, t.remove("SF.cartId"), localStorage.setItem("BookedSessions", JSON.stringify(a.data)), m.setSessionTimer("stop"), localStorage.removeItem("cartCheckOut"), localStorage.removeItem("sessionTimer"), n.go("booking.inviteFriends"))
                }, function(t) {
                    m.setSessionTimer("start"), e.showLoader = !1, $(o).removeClass("greyed-disabled"), e.errorMessage = t.message, 422 === t.status && t.data.data && t.data.data.message && "Invalid credit card. Please use a different card." === t.data.data.message && e.paymentForm.number.$setValidity("pattern", !1)
                })
            }, e.returnSearchPage = function() {
                "coachSearch.coaches" === a.previousState || "booking.login" === a.previousState || "booking.selectYourAthlete" === a.previousState || "booking.bookingPayment" === a.previousState ? angular.isDefined(a.params) && null !== a.params && a.params.hasOwnProperty("coachId") && null !== a.params.coachId ? n.go("coachSearch.coaches", {
                    coachId: a.params.coachId,
                    name: a.params.name,
                    sport: a.params.sport,
                    searchParam: hyphenSeparated(a.params.name)
                }) : angular.isDefined(a.params) && null !== a.params && a.params.hasOwnProperty("name") && null !== a.params.name ? n.go("coachSearch.coaches", {
                    name: a.params.name,
                    sport: a.params.sport,
                    searchParam: hyphenSeparated(a.params.name)
                }) : angular.isDefined(a.params) && null !== a.params && a.params.hasOwnProperty("zip") && null !== a.params.zip ? n.go("coachSearch.coaches", {
                    zip: a.params.zip,
                    sport: a.params.sport,
                    searchParam: a.params.zip
                }) : angular.isDefined(a.params) && null !== a.params && a.params.hasOwnProperty("club") && null !== a.params.club ? n.go("coachSearch.coaches", {
                    club: a.params.club,
                    sport: a.params.sport,
                    searchParam: hyphenSeparated(a.params.club)
                }) : n.go("coachSearch.coaches") : n.go("home")
            }, e.payNow = function(a) {
                m.setSessionTimer("pause"), $(a.currentTarget).addClass("greyed-disabled");
                var o = t.get("SF.cartId");
                i.getCart(o).success(function(t) {
                    e.cart = t.cart;
                    for (var n = e.cart.cart_items.length - 1; n >= 0; n--) e.cart.cart_items[n].where = e.cart.cart_items[n].location.name + ", " + (angular.isDefined(e.cart.cart_items[n].location.address.street) && null !== e.cart.cart_items[n].location.address.street && "" !== e.cart.cart_items[n].location.address.street ? e.cart.cart_items[n].location.address.street : "") + (angular.isDefined(e.cart.cart_items[n].location.address.city) && null !== e.cart.cart_items[n].location.address.city && "" !== e.cart.cart_items[n].location.address.city ? ", " + e.cart.cart_items[n].location.address.city : "") + (angular.isDefined(e.cart.cart_items[n].location.address.state) && null !== e.cart.cart_items[n].location.address.state && "" !== e.cart.cart_items[n].location.address.state ? ", " + e.cart.cart_items[n].location.address.state : "") + (angular.isDefined(e.cart.cart_items[n].location.address.zip) && null !== e.cart.cart_items[n].location.address.zip && "" !== e.cart.cart_items[n].location.address.zip ? ", " + e.cart.cart_items[n].location.address.zip : ""), e.$$phase || e.$apply();
                    r.validatePayment(o, function(t) {
                        t.$resolved && 200 === t.status && c.getClientToken().success(function(t) {
                            h = new c.api.Client({
                                clientToken: t.client_token
                            }), h.tokenizeCard({
                                number: e.creditCard.number,
                                expirationDate: e.creditCard.expirationDate,
                                cvv: e.creditCard.securityCode,
                                postal_code: e.creditCard.postalCode
                            }, function(t, n) {
                                var s = {
                                    parent_id: l.getParentId(),
                                    amount: e.cart.grandTotal + "",
                                    payment_method_nonce: n,
                                    cart_id: o,
                                    payment_method_token: e.creditCard.token
                                };
                                e.paymentAPI(s, a.currentTarget)
                            })
                        })
                    }, function(t) {
                        if (409 === t.status) {
                            e.showLoader = !1;
                            var a = "Oops!",
                                o = "This slot is already booked. Please check the coachâ€™s calendar to book another session at a time that is convenient for you.";
                            d.showAlert(a, o, function(t) {
                                e.returnSearchPage()
                            })
                        }
                    })
                }).error(function(t) {
                    e.showLoader = !1, e.errorMessage = t
                })
            }, e.payNowUsingToken = function(a) {
                m.setSessionTimer("pause"), $(a.currentTarget).addClass("greyed-disabled");
                var o = t.get("SF.cartId");
                i.getCart(o).success(function(t) {
                    e.cart = t.cart;
                    for (var n = e.cart.cart_items.length - 1; n >= 0; n--) e.cart.cart_items[n].where = e.cart.cart_items[n].location.name + ", " + (angular.isDefined(e.cart.cart_items[n].location.address.street) && null !== e.cart.cart_items[n].location.address.street && "" !== e.cart.cart_items[n].location.address.street ? e.cart.cart_items[n].location.address.street : "") + (angular.isDefined(e.cart.cart_items[n].location.address.city) && null !== e.cart.cart_items[n].location.address.city && "" !== e.cart.cart_items[n].location.address.city ? ", " + e.cart.cart_items[n].location.address.city : "") + (angular.isDefined(e.cart.cart_items[n].location.address.state) && null !== e.cart.cart_items[n].location.address.state && "" !== e.cart.cart_items[n].location.address.state ? ", " + e.cart.cart_items[n].location.address.state : "") + (angular.isDefined(e.cart.cart_items[n].location.address.zip) && null !== e.cart.cart_items[n].location.address.zip && "" !== e.cart.cart_items[n].location.address.zip ? ", " + e.cart.cart_items[n].location.address.zip : ""), e.$$phase || e.$apply();
                    r.validatePayment(o, function(t) {
                        if (t.$resolved && 200 === t.status) {
                            var n = {
                                parent_id: l.getParentId(),
                                amount: e.cart.grandTotal + "",
                                cart_id: o,
                                payment_method_token: e.creditCard.token
                            };
                            e.paymentAPI(n, a.currentTarget)
                        }
                    }, function(t) {
                        if (e.showLoader = !1, 409 === t.status) {
                            e.showLoader = !1;
                            var a = "Oops!",
                                o = "This slot is already booked. Please check the coachâ€™s calendar to book another session at a time that is convenient for you.";
                            d.showAlert(a, o, function(t) {
                                e.returnSearchPage()
                            })
                        }
                    })
                }).error(function(t) {
                    e.showLoader = !1
                })
            }, e.toggleAccordion = function(e) {
                if (angular.isDefined(e)) {
                    var t = document.querySelector(".accordion.active");
                    t && t != e.currentTarget && t.classList.remove("active"), e.currentTarget.classList.toggle("active"), e.currentTarget.nextElementSibling.classList.toggle("show")
                } else o(function() {
                    $(".reg-book-session").find("h3:nth-child(2)").triggerHandler("click"), $(".reg-book-session").find("h3:last").triggerHandler("click")
                }, 400)
            }, e.inviteFiends = function() {
                u.sendInvite(e.clientId, e.friendsList, function(e) {}, function(e) {})
            }, e.getSessions = function(t) {
                var a;
                for (e.cart = angular.copy(e.cart), a = e.cart.cart_items.length - 1; a >= 0; a--) e.cart.cart_items[a].where = e.cart.cart_items[a].location.name + ", " + (angular.isDefined(e.cart.cart_items[a].location.address.street) && null !== e.cart.cart_items[a].location.address.street && "" !== e.cart.cart_items[a].location.address.street ? e.cart.cart_items[a].location.address.street : "") + (angular.isDefined(e.cart.cart_items[a].location.address.city) && null !== e.cart.cart_items[a].location.address.city && "" !== e.cart.cart_items[a].location.address.city ? ", " + e.cart.cart_items[a].location.address.city : "") + (angular.isDefined(e.cart.cart_items[a].location.address.state) && null !== e.cart.cart_items[a].location.address.state && "" !== e.cart.cart_items[a].location.address.state ? ", " + e.cart.cart_items[a].location.address.state : "") + (angular.isDefined(e.cart.cart_items[a].location.address.zip) && null !== e.cart.cart_items[a].location.address.zip && "" !== e.cart.cart_items[a].location.address.zip ? ", " + e.cart.cart_items[a].location.address.zip : ""), e.$$phase || e.$apply();
                for (a = e.cart.cart_items.length - 1; a >= 0; a--) "expired" !== e.cart.cart_items[a].status && "unavailable" !== e.cart.cart_items[a].status || e.cart.cart_items.splice(a, 1);
                t.session_type = "individual", t.cart_items = [];
                var o = 0;
                return angular.forEach(e.cart.cart_items, function(e, a) {
                    var n = e;
                    n.bookedSessionId = t.booked_sessions[a].bookedSessionId, "individual" !== e.typeOfSession && (t.session_type = e.typeOfSession, t.cart_items.push(n), o++)
                }), "individual" !== t.session_type && (o > 1 ? t.session_type = "groups" : 1 === o && (t.session_type = "group")), JSON.stringify(t)
            }
        };
        e.$inject = ["$scope", "$cookies", "$rootScope", "$timeout", "$state", "$compile", "BookingService", "BookingInterfaceService", "$braintree", "AuthFactory", "AlertService", "ClientProfileInterfaceService", "Coachco_CommonService"], angular.module("Coachco").controller("bookingPaymentController", e)
    }(),
    function() {
        var e = function(e, t, a, o, n, s) {
            e.title = s.title, e.message = s.message, e.clicked = !1, e.close = function() {
                t.closeAlert(o)
            }, e.done = function(n) {
                if (e.clicked = !0, e.myForm.$valid) {
                    var s = {
                        email: e.resetEmail
                    };
                    a.sendResetEmail(s, function(a) {
                        t.doneAlert(o, n);
                        var s = "Success!",
                            i = 'An email has been sent to "' + e.resetEmail + '" to reset your email. Please check your junk mail as well.';
                        t.showAlert(s, i)
                    }, function(e) {
                        var a;
                        a = 406 === e.status ? "The e-mail you entered does not match the e-mail you have on file with us for this account" : "This service is temporarily unavailable. Please try again later!", t.doneAlert(o, "error");
                        var n = "Oops!";
                        t.showAlert(n, a)
                    })
                }
            }
        };
        e.$inject = ["$scope", "AlertService", "CommonAPIInterfaceService", "$uibModalInstance", "$timeout", "errorModel"], angular.module("Coachco").controller("resetEmailController", e)
    }(),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d, u, m, h) {
            e.submitted = !1, e.data = {}, e.gName = "Group size", e.showLoader = !0, e.self = !1, e.athleteSelected = !1, e.eachSessionSelection = !0, e.addAthletesToContinue = !1, e.hasGroupItem = !1, e.newGender = "", e.join = [], e.groupsize = [], e.ageList = [], e.athlete = [], e.ageError = [], e.noElement = [], e.gpSize = [], e.gpType = ["Set Group Type"], e.multiAthlete = [], e.validCart = [], e.athleteArray = [], e.gender = [], e.minAge = [], e.maxAge = [], e.disabledList = [], e.eachSession = {}, e.genders = t.genders, o.checkOutSessionTimeOut = t.checkOutSessionTimeOut, e.tempCartItemPrice = [], e.tempCartTotalPrice = 0, e.init = function() {
                n(function() {
                    angular.element(".select-multi").multiselect({
                        numberDisplayed: 3,
                        nonSelectedText: "Select your Athlete(s)"
                    }), angular.element(".select-multi").addClass("show-select"), angular.element(".dropdown-menu-age input").click(function(e) {
                        e.stopPropagation(), e.preventDefault()
                    })
                }, 500)
            }, angular.element("body").on("click", function(t) {
                if (e.currentAgeList >= 0 && $("#age-" + e.currentAgeList).hasClass("open")) {
                    var a = parseInt($("#age-" + e.currentAgeList).attr("id").split("-")[1]);
                    0 === $("#group-age-" + a).has(t.target).length && (e.ageError[a] || ($("#age-" + a).removeClass("open"), e.ageList[a] = !e.ageList[a]))
                }
            }), e.openAgeList = function(t) {
                e.currentAgeList = t, e.ageError[t] || (e.ageList[t] = !e.ageList[t])
            }, e.setParentAsAthlete = function(t) {
                e.athleteSelected ? (e.firstname = h.getFirstName(), e.lastname = h.getLastName()) : e.firstname = e.lastname = ""
            }, e.getGroupSize = function(t, a) {
                e.groupSize = [], e.groupSize.push("Set Group Size"), a < t && (t = 1);
                for (var o = t; o <= a; o++) e.groupSize.push(o)
            }, e.constructLocation = function() {
                angular.forEach(e.validCart.cart_items, function(t, a) {
                    t.where = t.location.name + ", " + (angular.isDefined(t.location.address.street) && null !== t.location.address.street && "" !== t.location.address.street ? t.location.address.street : "") + (angular.isDefined(t.location.address.city) && null !== t.location.address.city && "" !== t.location.address.city ? ", " + t.location.address.city : "") + (angular.isDefined(t.location.address.state) && null !== t.location.address.state && "" !== t.location.address.state ? ", " + t.location.address.state : "") + (angular.isDefined(t.location.address.zip) && null !== t.location.address.zip && "" !== t.location.address.zip ? ", " + t.location.address.zip : ""), e.$$phase || e.$apply()
                })
            }, e.getCart = function() {
                if (h.isLoggedIn()) {
                    var t, o = h.getParentId();
                    m.getParentCartId(o).success(function(o) {
                        o.cart && (t = o.cart._id.$oid, a.put("SF.cartId", t + ""), m.getCart(t).success(function(t) {
                            e.cart = t.cart, e.validCart = angular.copy(e.cart);
                            for (var a = e.validCart.cart_items.length - 1; a >= 0; a--) {
                                if (e.validCart.cart_items[a].athletes)
                                    if ("creategroup" === e.validCart.cart_items[a].typeOfSession) e.validCart.cart_items[a].athletes.length === e.validCart.cart_items[a].groupSize && e.disableAthletes(a);
                                    else {
                                        var o = e.validCart.cart_items[a].groupSize - e.validCart.cart_items[a].bookedSlots;
                                        e.validCart.cart_items[a].athletes.length === parseInt(o) && e.disableAthletes(a)
                                    }
                                "expired" !== e.validCart.cart_items[a].status && "unavailable" !== e.validCart.cart_items[a].status || e.validCart.cart_items.splice(a, 1)
                            }
                            e.constructLocation(e.validCart), angular.forEach(e.validCart.cart_items, function(t, a) {
                                "creategroup" === t.typeOfSession && (e.hasGroupItem = !0)
                            }), n(function() {
                                e.showLoader = !1
                            }, 500)
                        }).error(function(t) {
                            e.showLoader = !1
                        }))
                    }).error(function(t) {
                        e.showLoader = !1
                    })
                }
            }, e.disableAthletes = function(e) {
                n(function() {
                    angular.element("#multi-list-container-" + e).find(".multiselect-container li:not(.active)").addClass("disabled"), angular.element("#multi-mlist-container-" + e).find(".multiselect-container li:not(.active)").addClass("disabled")
                }, 1800)
            }, e.getCartItemCount = function() {
                var t = a.get("SF.cartId");
                t && m.getCartItemCount(t).success(function(t) {
                    e.cartItemCount = t.cartItemsCount
                }).error(function(e) {})
            }, e.getAthlete = function(t) {
                var a = h.getParentId();
                m.getAthleteList(a).success(function(a) {
                    e.athleteList = a.athletes, e.joinAthleteList = e.athleteList, angular.forEach(e.athleteList, function(t, a) {
                        "self" === t.relation && (e.self = !0)
                    }), "newAthlete" === t && (n(function() {
                        angular.element(".select-multi").multiselect("rebuild")
                    }, 700), n(function() {
                        e.disabledList.length > 0 && angular.forEach(e.disabledList, function(e, t) {
                            angular.element("#multi-list-container-" + e).find(".multiselect-container li:not(.active)").addClass("disabled"), angular.element("#multi-mlist-container-" + e).find(".multiselect-container li:not(.active)").addClass("disabled")
                        }), e.allItemsDisabled.length > 0 && angular.forEach(e.allItemsDisabled, function(e, t) {
                            angular.element("#multi-list-container-" + e).find(".multiselect-container li:not(.active)").addClass("disabled"), angular.element("#multi-mlist-container-" + e).find(".multiselect-container li:not(.active)").addClass("disabled")
                        })
                    }, 700))
                }).error(function(e) {})
            }, e.filterAthletes = function(e) {
                return function(t) {
                    var a = !0;
                    if (e && t) return e.forEach(function(e) {
                        e === t.id && (a = !1)
                    }), a
                }
            }, e.addNewAthlete = function() {
                if (e.added = !0, e.firstname && e.lastname && e.birthYear && e.newGender) {
                    e.added = !1, e.addAthletesToContinue = !1;
                    var t = angular.element(".athlet-list-add").eq(0).children().length;
                    e.athleteSelected && (e.self = "self", e.selfId = t, e.athleteSelected = !1), e.newAthlete = "<li><span>" + e.firstname + " " + e.lastname + "</span><span>" + e.birthYear + "</span><span>" + e.newGender.charAt(0) + '</span><span><button ng-click="removeAthlete($event)" id=' + t + ">Remove</button></span></li>", e.temp = l(e.newAthlete)(e), angular.element(".athlet-list-add").append(e.temp);
                    var a = h.getParentId(),
                        o = {
                            athlete: {
                                profile: {}
                            }
                        };
                    e.athleteSelected && (e.self = "self", o.athlete.relation = "self"), e.athleteArray.push(t), o.athlete.first_name = e.firstname, o.athlete.last_name = e.lastname, o.athlete.profile.dob = e.birthYear, o.athlete.profile.gender = e.newGender.charAt(0), m.addAthleteToParent(a, o).success(function(t) {
                        e.getAthlete("newAthlete")
                    }).error(function(e) {}), e.showAtheleteList = !0, e.firstname = e.lastname = e.birthYear = e.newGender = "", e.athleteSelected = !1, e.athleteForm.$setPristine(), e.athleteForm.$setUntouched(), e.disabledList = [], e.allItemsDisabled = [];
                    for (var n = 0; n <= e.validCart.cart_items.length; n++) angular.element("#multi-list-container-" + n).find(".multiselect-container li:not(.active)").hasClass("disabled") && e.disabledList.push(n), angular.element("#multi-mlist-container-" + n).find(".multiselect-container li:not(.active)").hasClass("disabled") ? e.disabledList.push(n) : e.multiAthlete[n] && e.multiAthlete[n].length == e.athleteList.length && e.allItemsDisabled.push(n)
                }
            }, e.removeAthlete = function(t) {
                $.each(e.athleteArray, function(a) {
                    if (e.athleteArray[a] === parseInt(t.currentTarget.id)) return parseInt(t.currentTarget.id) === e.selfId && (e.self = !1), e.athleteArray.splice(a, 1), t.currentTarget.parentElement.parentElement.remove(), 0 === e.athleteArray.length && (e.showAtheleteList = !1), !1
                })
            }, e.goPayment = function() {
                window.location.href = "/bookingPayment"
            }, e.goBack = function() {
                window.location.href = "/bookingPayment"
            }, e.updateGroupTypeToCartItem = function(e, t, a) {}, e.updateAthleteToCartItem = function(t, a, o, n) {
                var s = {};
                s.athletes = [], o && (s.athletes.push(o), e.eachSession[n] = {
                    data: o
                }, e.gotoPayment("")), m.updateCartItems(t, a, s).success(function(t) {
                    e.athlete[n] = t.cart_item.athletes[0];
                    var o = t.cart_item.athletes.length,
                        s = t.cart_item.price;
                    e.tempPriceCalculator(a, s, o)
                }).error(function(e) {})
            }, e.updateGroupAthleteToCartItem = function(t, a, o, s, i, r, c) {
                var l = {};
                if (l.athletes = [], i.tempAthelets = o, o && (angular.forEach(o, function(t) {
                        l.athletes.push(t), e.eachSession[s] = {
                            data: t
                        }
                    }), e.gotoPayment("")), "creategroup" === r) {
                    if ("d" === c) var d = angular.element("#multi-mbtn-" + s).text();
                    else var d = angular.element("#multi-btn-" + s).text();
                    d > 0 && e.setMultiSelectData(t, a, o, s, d, r)
                } else {
                    var d = e.validCart.cart_items[s].groupSize - e.validCart.cart_items[s].bookedSlots;
                    d > 0 && e.setMultiSelectData(t, a, o, s, d, r)
                }
                if ("d" === c) var u = angular.element("#multi-mlist-container-" + s).find(".multiselect-container");
                else var u = angular.element("#multi-list-container-" + s).find(".multiselect-container");
                angular.forEach(o, function(e, t) {
                    $(u).find("li").each(function() {
                        if ($(this).removeClass("active"), $(this).find("input").prop("checked", !1), $(this).find("input").attr("value") === e) {
                            var t = $(this);
                            n(function() {
                                $(t).addClass("active"), $(t).find("input").prop("checked", !0)
                            }, 200)
                        }
                    })
                }), n(function() {
                    "d" === c ? angular.element("#multi-mlist-container-" + s).find(".multiselect-selected-text").text(angular.element("#multi-list-container-" + s).find(".multiselect-selected-text").text()) : "m" === c && angular.element("#multi-list-container-" + s).find(".multiselect-selected-text").text(angular.element("#multi-mlist-container-" + s).find(".multiselect-selected-text").text())
                }, 200), m.updateCartItems(t, a, l).success(function(t) {
                    var o = t.cart_item.athletes.length,
                        n = t.cart_item.price / t.cart_item.athletes.length;
                    e.tempPriceCalculator(a, n, o)
                }).error(function(e) {}), 0 === o.length && delete e.eachSession[s], e.gotoPayment(""), $(".no-multi-athletes").remove()
            }, e.getTotalCost = function() {
                for (var t = 0, a = 0; a < e.validCart.cart_items.length; a++) t += parseInt(angular.element("#price-" + a).text().replace("$", ""));
                e.totalPrice = t
            }, e.setMultiSelectData = function(t, a, o, n, s, i) {
                o.length === parseInt(s) ? (angular.element("#multi-list-container-" + n).find(".multiselect-container li:not(.active)").addClass("disabled"), angular.element("#multi-mlist-container-" + n).find(".multiselect-container li:not(.active)").addClass("disabled")) : o.length < s && (angular.element("#multi-list-container-" + n).find(".multiselect-container li").removeClass("disabled"), angular.element("#multi-mlist-container-" + n).find(".multiselect-container li").removeClass("disabled")), "creategroup" === i ? e.eachSession[n] = {
                    data: o
                } : e.eachSession[n] = {
                    data: o
                }, e.gotoPayment(), e.getTotalCost()
            }, e.initializeGenderAndAge = function(t, a, o) {
                a.groupGender && ("male" === a.groupGender ? e.gender[o] = "male" : "female" === a.groupGender ? e.gender[o] = "female" : e.gender[o] = "both"), a.ageFrom && (e.minAge[o] = a.ageFrom), a.ageTo && (e.maxAge[o] = a.ageTo)
            }, e.setGroupType = function(e, t) {
                var a;
                a = "public" === e.groupType ? "Public (Anyone Can Join)" : "private" === e.groupType ? "Private (Invitation Only)" : "Set Group Type", n(function() {
                    angular.element("#type-btn-" + t).html(a), angular.element("#type-mbtn-" + t).html(a)
                }, 100)
            }, e.initializeAthleteDropdown = function(t, a, o, n, s, i) {
                if (o && "reserved" === i.status && o.length > 0) {
                    if ("individual" === t) e.athlete[a] = o[0], e.eachSession[a] = o[0];
                    else if ("creategroup" === t) {
                        var r = [];
                        angular.forEach(o, function(e) {
                            r.push(e.id)
                        }), e.multiAthlete[a] = r, e.eachSession[a] = r
                    } else if ("joingroup" === t) {
                        var r = [];
                        angular.forEach(o, function(e) {
                            r.push(e.id)
                        }), e.join[a] = r, e.eachSession[a] = r
                    }
                    var c = 0;
                    i.athletes.length > 0 && (s /= i.athletes.length), c = o.length, e.tempPriceCalculator(n, s, c)
                }
                e.init(), e.gotoPayment("")
            }, e.tempPriceCalculator = function(t, a, o) {
                e.tempCartItemPrice[t] = a * o, e.tempCartTotalPrice = 0, angular.forEach(e.cart.cart_items, function(t) {
                    "reserved" === t.status && e.tempCartItemPrice[t.cartItemId] && (e.tempCartTotalPrice = e.tempCartTotalPrice + e.tempCartItemPrice[t.cartItemId])
                })
            }, e.toggleAccordion = function(e) {
                angular.isDefined(e) ? ($(e)[0].currentTarget.parentNode.children[0].classList.toggle("active"), $(e)[0].currentTarget.parentNode.children[0].nextElementSibling.classList.toggle("show")) : n(function() {
                    $(".session-accordion div:first").find("h2").triggerHandler("click")
                }, 1700)
            }, e.openAthlete = function() {
                angular.element(".add-athlete-account").toggleClass("open")
            }, e.changeSize = function(t, a, o, s) {
                var i = t.currentTarget,
                    r = {};
                e.id = parseInt(angular.element(i).parents(".select-type-group").find("button").attr("id").split("-")[2]), e.gpSize[e.id] = s, angular.element("#multi-btn-" + e.id).html(s), angular.element("#multi-mbtn-" + e.id).html(s), e.minAge[e.id] && e.maxAge[e.id] && e.gender[e.id] ? parseInt(e.minAge[e.id]) <= parseInt(e.maxAge[e.id]) && parseInt(e.minAge[e.id]) > 0 && parseInt(e.maxAge[e.id]) < 100 && (r.group_size = s, m.updateCartItems(a, o, r).success(function(e) {}).error(function(e) {}), e.enableMultiSelect()) : "Set Group Size" !== s ? (r.group_size = s, m.updateCartItems(a, o, r).success(function(e) {}).error(function(e) {})) : n(function() {
                    element.addClass("disabled")
                }, 100), e.minAge[e.id] && e.maxAge[e.id] && e.gender[e.id] && e.gpSize[e.id] >= 1 && "P" == e.gpType[e.id].charAt(0) && parseInt(e.minAge[e.id]) <= parseInt(e.maxAge[e.id]) && parseInt(e.minAge[e.id]) > 0 && parseInt(e.maxAge[e.id]) < 100 && (angular.element("#multi-list-container-" + e.id).removeClass("disabled txt-change"), angular.element("#multi-mlist-container-" + e.id).removeClass("disabled txt-change"))
            }, e.enableMultiSelect = function() {
                angular.element("#multi-list-container-" + e.id).find(".multiselect-container li").each(function() {
                    angular.element(this).find("input").prop("checked", !1), angular.element(this).removeClass("disabled active"), "Set Group Size" == e.gpSize[e.id] || "Set Group Type" == e.gpType[e.id] ? (angular.element(this).addClass("disabled"), angular.element(this).find("#error-" + e.id).show()) : angular.element(this).removeClass("disabled")
                }), angular.element("#multi-list-container-" + e.id).find(".multiselect-selected-text").text("Select Athletes"), angular.element("#multi-mlist-container-" + e.id).find(".multiselect-container li").each(function() {
                    angular.element(this).find("input").prop("checked", !1), angular.element(this).removeClass("disabled active"), "Set Group Size" == e.gpSize[e.id] || "Set Group Type" == e.gpType[e.id] ? (angular.element(this).addClass("disabled"), angular.element(this).find("#error-" + e.id).show()) : angular.element(this).removeClass("disabled")
                }), angular.element("#multi-mlist-container-" + e.id).find(".multiselect-selected-text").text("Select Athletes"), angular.element("#price-" + e.id).text("$" + e.validCart.cart_items[e.id].pricePerAthlete), e.multiAthlete = [], e.eachSession[e.id] && delete e.eachSession[e.id]
            }, e.gType = "Public", e.types = ["Set Group Type", "Public (Anyone Can Join)", "Private (Invitation Only)"], e.setAge = function(t, a, o, s) {
                var i = {};
                if (e.id = t, e.minAge[e.id] && e.maxAge[e.id]) {
                    if (parseInt(e.minAge[e.id]) && parseInt(e.maxAge[e.id]) && angular.element("#btn-select-age-" + e.id).text("Age " + e.minAge[e.id] + " to " + e.maxAge[e.id]), (parseInt(e.minAge[e.id]) > parseInt(e.maxAge[e.id]) || parseInt(e.minAge[e.id]) < 0 || parseInt(e.maxAge[e.id]) > 100) && (e.minAge[e.id] = e.maxAge[e.id] = [], e.ageError[e.id] = !0, angular.element("#btn-select-age-" + e.id).text("Invalid age selection"), angular.element("#multi-list-container-" + e.id).addClass("disabled"), angular.element("#multi-mlist-container-" + e.id).addClass("disabled")), parseInt(e.minAge[e.id]) <= parseInt(e.maxAge[e.id]) && parseInt(e.minAge[e.id]) > 0 && parseInt(e.maxAge[e.id]) < 100) {
                        e.ageError[e.id] = !1, angular.element("#btn-select-age-" + e.id).text("Age " + e.minAge[e.id] + " to " + e.maxAge[e.id]), i.age_from = e.minAge[e.id], i.age_to = e.maxAge[e.id], m.updateCartItems(a, o, i).success(function(t) {
                            n(function() {
                                angular.element("#multi-list-container-" + e.id).find(".select-multi").multiselect("rebuild"), angular.element("#multi-mlist-container-" + e.id).find(".select-multi").multiselect("rebuild")
                            }, 250)
                        }).error(function(e) {});
                        var r = parseInt(angular.element("#multi-btn-" + e.id).text());
                        e.minAge[e.id] && e.maxAge[e.id] && e.gender[e.id] && r >= 1 && e.enableMultiSelect(), e.minAge[e.id] && e.maxAge[e.id] && e.gender[e.id] && e.gpSize[e.id] >= 1 && "P" == e.gpType[e.id].charAt(0) && parseInt(e.minAge[e.id]) <= parseInt(e.maxAge[e.id]) && parseInt(e.minAge[e.id]) > 0 && parseInt(e.maxAge[e.id]) < 100 && (angular.element("#multi-list-container-" + e.id).removeClass("disabled txt-change"), angular.element("#multi-mlist-container-" + e.id).removeClass("disabled txt-change"))
                    }
                } else e.enableMultiSelect(),
                    angular.element("#btn-select-age-" + e.id).text("Age"), angular.element("#multi-list-container-" + e.id).addClass("disabled"), angular.element("#multi-mlist-container-" + e.id).addClass("disabled")
            }, e.setGender = function(t, a, o, s, i) {
                var r = {};
                r.group_gender = t, e.minAge[s] && e.maxAge[s] && t && e.gpSize[s] >= 1 && "P" == e.gpType[e.id].charAt(0) && parseInt(e.minAge[s]) <= parseInt(e.maxAge[s]) && parseInt(e.minAge[s]) > 0 && parseInt(e.maxAge[s]) < 100 && (angular.element("#multi-list-container-" + s).removeClass("disabled txt-change"), angular.element("#multi-mlist-container-" + s).removeClass("disabled txt-change")), m.updateCartItems(a, o, r).success(function(e) {
                    n(function() {
                        angular.element("#multi-list-container-" + s).find(".select-multi").multiselect("rebuild"), angular.element("#multi-mlist-container-" + s).find(".select-multi").multiselect("rebuild")
                    }, 250)
                }).error(function(e) {})
            }, e.changeType = function(t, a, o, s, i) {
                var r = a.currentTarget;
                e.id = o, angular.element("#type-btn-" + o).html(t), angular.element("#type-mbtn-" + o).html(t), e.typeId = parseInt(angular.element(r).parents(".select-type").find("button").attr("id").split("-")[2]), e.gpType[o] = t;
                var c = {};
                angular.element("#type-btn-" + e.id).html(t), angular.element("#type-mbtn-" + e.id).html(t), e.minAge[e.id] && e.maxAge[e.id] && e.gender[e.id] ? parseInt(e.minAge[e.id]) <= parseInt(e.maxAge[e.id]) && parseInt(e.minAge[e.id]) > 0 && parseInt(e.maxAge[e.id]) < 100 && (c.group_type = t, m.updateCartItems(s, i, c).success(function(e) {}).error(function(e) {}), e.enableMultiSelect()) : "Set Group Type" != t ? (c.group_type = t, m.updateCartItems(s, i, c).success(function(e) {}).error(function(e) {})) : n(function() {
                    element.addClass("disabled")
                }, 100), e.minAge[e.id] && e.maxAge[e.id] && e.gender[e.id] && e.gpSize[e.id] >= 1 && "P" == e.gpType[e.id].charAt(0) && parseInt(e.minAge[e.id]) <= parseInt(e.maxAge[e.id]) && parseInt(e.minAge[e.id]) > 0 && parseInt(e.maxAge[e.id]) < 100 && (angular.element("#multi-list-container-" + e.id).removeClass("disabled txt-change"), angular.element("#multi-mlist-container-" + e.id).removeClass("disabled txt-change"))
            }, e.gotoPayment = function(t) {
                Object.keys(e.eachSession).length == e.validCart.cart_items.length ? (e.eachSessionSelection = !0, $("#go-to-payment").removeClass("greyed"), t && (r.go("booking.bookingPayment"), localStorage.setItem("selectedAthletes", JSON.stringify(e.eachSession)))) : ($("#go-to-payment").addClass("greyed"), e.eachSessionSelection = !1)
            }
        };
        e.$inject = ["$scope", "appConfig", "$cookies", "$rootScope", "$timeout", "$interval", "AlertService", "$state", "uiCalendarConfig", "$compile", "$stateParams", "$window", "BookingService", "AuthFactory"], angular.module("Coachco").controller("bookingSelectAthleteController", e)
    }(),
    function() {
        var e = function() {
            var e = function(e, t, a, o) {
                o.$parsers.push(function() {
                    var a = t.val(),
                        n = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                    if (n.test(a)) return e.apiService.postEmailandValidate(a).success(function() {
                        o.$setValidity("uniqueEmail", !0)
                    }).error(function() {
                        o.$setValidity("uniqueEmail", !1)
                    }), a
                })
            };
            return {
                require: "ngModel",
                link: e,
                restrict: "A"
            }
        };
        angular.module("Coachco").directive("uniqueEmail", e)
    }(),
    function() {
        var e = function(e, t, a) {
            var o = e(t.ccUrl + "carts/:id/validate", {
                id: "@id"
            }, {
                validatePayment: {
                    method: "GET",
                    transformResponse: a.transformResponse
                }
            }, {
                stripTrailingSlashes: !1
            });
            return o
        };
        e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("BookingAPIService", e)
    }(),
    function() {
        var e = function(e, t, a) {
            var o = e(t.ccUrl + "payment", {}, {
                payNow: {
                    method: "POST",
                    transformResponse: a.transformResponse
                }
            }, {
                stripTrailingSlashes: !1
            });
            return o
        };
        e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("PaymentAPIService", e)
    }(),
    function() {
        var e = function(e, t, a) {
            return {
                validatePayment: function(t, o, n) {
                    e.validatePayment({
                        id: t
                    }).$promise.then(function(e) {
                        o(a.success(e))
                    }, function(e) {
                        n(a.error(e))
                    }).catch(function(e) {
                        n(a.exception(e))
                    })
                },
                payNow: function(e, o, n) {
                    t.payNow(e).$promise.then(function(e) {
                        o(a.success(e))
                    }, function(e) {
                        n(a.error(e))
                    }).catch(function(e) {
                        n(a.exception(e))
                    })
                }
            }
        };
        e.$inject = ["BookingAPIService", "PaymentAPIService", "ResponseHandlerService"], angular.module("Coachco").service("BookingInterfaceService", e)
    }(),
    function(e) {
        var t = function(t, a, o, n, s, i, r, c, l, d, u, m) {
            t.selectedAthletes = [], t.athleteIds = [], t.athletesSelected = [], t.noAthletes = !0, t.errorMessage = "", t.paymentLoader = !1, t.multiAthlete = [], t.firstName = m.getFirstName(), t.lastName = m.getLastName(), t.clientId = m.getParentId(), t.currentState = a.current.name, t.totalSelectedDates = 0, t.showLoaderImage = function() {
                t.loader = !0
            }, t.hideLoaderImage = function() {
                t.loader = !1
            }, t.isMobile = function() {
                return isMobile()
            }, t.getSessionData = function() {
                t.showLoaderImage(), "acceptInvite" === a.current.name ? (n.getInvitedSessionData(t.clientId, o.booked_session_id, function(e) {
                    if (e.$resolved && 200 === e.status)
                        if (t.sessionData = e.data.invited_session, t.sessionData.openSlots = t.sessionData.group_size - t.sessionData.bookedSlots, t.sessionData.openSlots > 0) t.fetchAthletes();
                        else {
                            var o = {
                                title: "Oops!",
                                message: "No slots are available for this session. Do you want to book another session?",
                                positiveBtn: "Book Another Session",
                                negativeBtn: "No, Thanks"
                            };
                            i.showDialog(o, function(e) {
                                "yes" === e.$$state.value ? a.go("coachSearch.coaches", {
                                    coachId: t.sessionData.coach_id,
                                    name: t.sessionData.coach_first_name + " " + t.sessionData.coach_last_name,
                                    sport: t.sessionData.sport,
                                    searchParam: t.sessionData.coach_first_name.toLowerCase() + "-" + t.sessionData.coach_last_name.toLowerCase()
                                }) : "no" === e.$$state.value && a.go("home")
                            })
                        }
                    t.hideLoaderImage()
                }, function(e) {
                    if (409 === e.status) {
                        a.go("coachSearch.coaches", {
                            coachId: e.data.data.coach_id,
                            name: e.data.data.coach_name,
                            sport: e.data.data.sport,
                            searchParam: hyphenSeparated(e.data.data.coach_name)
                        });
                        var o = "Oops!",
                            n = "The coach has cancelled this session. Please check the coachâ€™s calendar to book another session at a time that is convenient for you.";
                        l.showAlert(o, n, function(e) {
                            t.hideLoaderImage()
                        })
                    }
                }), t.totalSelectedDates = 1) : "acceptRecurringInvite" === a.current.name ? n.getInvitedRecurringSessionData(t.clientId, o.booked_session_id, function(e) {
                    var o = !1;
                    if (t.rescheduled = !1, t.locationChange = !1, e.$resolved && 200 === e.status)
                        if (t.sessionData = e.data.recurring_session, "All" === t.sessionData.client_options ? t.sessionData.dates.forEach(function(e) {
                                e.openSlots = t.sessionData.group_size - e.bookedSlots, e.rescheduled && (t.rescheduled = !0), e.location_change && (t.locationChange = !0), t.updateDatesCount(e.selected), e.openSlots > 0 && (o = !0)
                            }) : t.sessionData.dates.forEach(function(e) {
                                e.rescheduled && (t.rescheduled = !0), e.location_change && (t.locationChange = !0), e.openSlots = t.sessionData.group_size - e.bookedSlots, e.openSlots > 0 && (o = !0)
                            }), t.sessionData.openSlots = t.sessionData.group_size - t.sessionData.bookedSlots, o > 0) t.fetchAthletes();
                        else {
                            var n = {
                                title: "Oops!",
                                message: "No slots are available for this session. Do you want to book another session?",
                                positiveBtn: "Book Another Session",
                                negativeBtn: "No, Thanks"
                            };
                            i.showDialog(n, function(e) {
                                "yes" === e.$$state.value ? a.go("coachSearch.coaches", {
                                    coachId: t.sessionData.coach_id,
                                    name: t.sessionData.coach_first_name + " " + t.sessionData.coach_last_name,
                                    sport: t.sessionData.sport,
                                    searchParam: t.sessionData.coach_first_name.toLowerCase() + "-" + t.sessionData.coach_last_name.toLowerCase()
                                }) : "no" === e.$$state.value && a.go("home")
                            })
                        }
                    t.hideLoaderImage()
                }, function(e) {
                    if (409 === e.status) {
                        a.go("coachSearch.coaches", {
                            coachId: e.data.data.coach_id,
                            name: e.data.data.coach_name,
                            sport: e.data.data.sport,
                            searchParam: hyphenSeparated(e.data.data.coach_name)
                        });
                        var o = "Oops!",
                            n = "The coach has cancelled this session. Please check the coachâ€™s calendar to book another session at a time that is convenient for you.";
                        l.showAlert(o, n, function(e) {
                            t.hideLoaderImage()
                        })
                    }
                }) : (n.getInvitedSessionInfo(t.clientId, o.booked_session_id, function(e) {
                    if (e.$resolved && 200 === e.status)
                        if (t.sessionData = e.data.invited_session, t.sessionData.openSlots = t.sessionData.group_size - t.sessionData.bookedSlots, t.sessionData.openSlots > 0) t.fetchAthletes();
                        else {
                            var o = {
                                title: "Oops!",
                                message: "No slots are available for this session. Do you want to book another session?",
                                positiveBtn: "Book Another Session",
                                negativeBtn: "No, Thanks"
                            };
                            i.showDialog(o, function(e) {
                                "yes" === e.$$state.value ? a.go("coachSearch.coaches", {
                                    coachId: t.sessionData.coach_id,
                                    name: t.sessionData.coach_first_name + " " + t.sessionData.coach_last_name,
                                    sport: t.sessionData.sport,
                                    searchParam: t.sessionData.coach_first_name.toLowerCase() + "-" + t.sessionData.coach_last_name.toLowerCase()
                                }) : "no" === e.$$state.value && a.go("home")
                            })
                        }
                    t.hideLoaderImage()
                }, function(e) {
                    if (console.log(e), 409 === e.status) {
                        a.go("coachSearch.coaches", {
                            coachId: e.data.data.coach_id,
                            name: e.data.data.coach_name,
                            sport: e.data.data.sport,
                            searchParam: hyphenSeparated(e.data.data.coach_name)
                        });
                        var o = "Oops!",
                            n = "The coach has cancelled this session. Please check the coachâ€™s calendar to book another session at a time that is convenient for you.";
                        l.showAlert(o, n, function(e) {
                            t.hideLoaderImage()
                        })
                    }
                }), t.totalSelectedDates = 1)
            }, t.getSessionData(), t.athlete = {}, t.genders = r.genders, t.showAlert = function(t) {
                var a = "";
                e.forEach(t, function(e, t) {
                    0 === t ? a += e.name : a = a + ", " + e.name
                });
                var o = "athletes ",
                    n = "do";
                1 === t.length && (o = "athlete ", n = "does");
                var s = "Oops",
                    i = "Sorry, the coach changed the group criteria and your " + o + "(" + a + ") " + n + " not meet the new criteria.";
                l.showAlert(s, i)
            }, t.updateDatesCount = function(a) {
                a ? t.totalSelectedDates++ : t.totalSelectedDates--, t.checkForValidAthletes(), t.maxSelectableCount = 0, t.sessionData.dates && t.sessionData.dates.forEach(function(a) {
                    (0 === t.maxSelectableCount && a.selected || 0 !== t.maxSelectableCount && a.selected && t.maxSelectableCount > a.openSlots) && (t.maxSelectableCount = e.copy(a.openSlots))
                }), t.maxSelectableCount < t.selectedAthletes.length && (t.selectedAthletes = [], t.athleteIds = [], t.multiAthlete = [], t.selectedAthlete = null, d(function() {
                    e.element(".select-multi").multiselect("rebuild")
                }, 500))
            }, t.checkIfAthletePresent = function() {
                t.list = [], t.validAthletes.length ? e.forEach(t.notBookedList, function(a, o) {
                    var n = !1;
                    e.forEach(t.validAthletes, function(e, o) {
                        a.id === e.id && (n = !0), t.validAthletes.length - 1 != o || n || t.list.push(a)
                    }), t.notBookedList.length - 1 === o && t.list.length && t.showAlert(t.list)
                }) : t.showAlert(t.notBookedList)
            }, t.checkIfSessionModified = function() {
                if (t.sessionData.originalSessionInfo) {
                    var a = 0;
                    !t.sessionData.dates && t.sessionData.already_booked_athlete_ids ? (t.notBookedList = [], t.sessionData.athletes && e.forEach(t.sessionData.athletes, function(o, n) {
                        var s = !1;
                        e.forEach(t.sessionData.already_booked_athlete_ids, function(e, n) {
                            o.id === e && (a++, s = !0), n === t.sessionData.already_booked_athlete_ids.length - 1 && (s || t.notBookedList.push(o))
                        }), n === t.sessionData.athletes.length - 1 && a !== t.sessionData.athletes.length && t.checkIfAthletePresent()
                    })) : t.sessionData.dates && (t.notBookedList = [], t.sessionData.athletes && e.forEach(t.sessionData.athletes, function(e, o) {
                        var n = !1;
                        t.sessionData.dates.forEach(function(o) {
                            o.selected && o.already_booked_athlete_ids && o.already_booked_athlete_ids.forEach(function(o, s) {
                                e.id === o && (a++, n = !0), s === t.sessionData.already_booked_athlete_ids.length - 1 && (n || t.notBookedList.push(e))
                            })
                        }), o === t.sessionData.athletes.length - 1 && a !== t.sessionData.athletes.length && t.checkIfAthletePresent()
                    }))
                }
            }, t.checkForValidAthletes = function() {
                t.validAthletes = [], t.athletes && t.athletes.forEach(function(a, o) {
                    a.profile.age = calculateAge(new Date(a.profile.dob)), a.profile.age >= t.sessionData.ageFrom && a.profile.age <= t.sessionData.ageTo && (a.profile.gender === t.sessionData.groupGender.toUpperCase().charAt(0) || "both" === t.sessionData.groupGender) && null !== a.name && t.filterAthletes(a) && (t.validAthletes.push(a), e.element(".multi-list-container").removeClass("disabled txt-change"), t.noAthletes = !1), t.athletes.length - 1 === o && t.checkIfSessionModified()
                }), d(function() {
                    e.element(".select-multi").multiselect("rebuild")
                }, 500)
            }, t.filterAthletes = function(e) {
                var a = !0;
                return t.sessionData.dates ? t.sessionData.dates.forEach(function(t) {
                    t.selected && t.already_booked_athlete_ids && t.already_booked_athlete_ids.forEach(function(t) {
                        e.id === t && (a = !1)
                    })
                }) : t.sessionData.already_booked_athlete_ids.forEach(function(t) {
                    e.id === t && (a = !1)
                }), a
            }, t.disableAthletes = function(t) {
                d(function() {
                    e.element("#multi-list-container-" + t).find(".multiselect-container li:not(.active)").addClass("disabled")
                }, 1800)
            }, t.fetchAthletes = function() {
                t.athletesBooked = !1, n.getClientAthletes(t.clientId, function(a) {
                    a.$resolved && 200 === a.status && d(function() {
                        t.athletes = a.data.athletes, t.checkForValidAthletes(), e.element(".multi-list-container").find(".multiselect-selected-text").text("Select your Athlete(s)"), t.athletes.forEach(function(e) {
                            t.sessionData.already_booked_athlete_ids.forEach(function(a) {
                                e.id === a && (t.athletesSelected.push(e.name), t.athletesBooked = !0)
                            })
                        }), t.sessionData.dates && t.sessionData.dates.forEach(function(e) {
                            e.athletesSelected = [], t.athletes.forEach(function(a) {
                                e.already_booked_athlete_ids && e.already_booked_athlete_ids.forEach(function(o) {
                                    a.id === o && (t.athletesBooked = !0, e.athletesSelected.push(a.name))
                                })
                            })
                        }), t.isAmAthleteOption()
                    }, 500)
                }, function(e) {
                    if (422 === e.status) {
                        var t = "Error!",
                            a = e.statusText;
                        e.data.data.hasOwnProperty("email") ? a = "Email " + e.data.data.email[0] : e.data.data.hasOwnProperty("phone") && (a = "Phone " + e.data.data.phone[0]), l.showAlert(t, a)
                    }
                })
            }, t.addAthelete = function() {
                var e, a;
                if (t.athleteForm.$valid) {
                    var o = {
                        athlete: {
                            first_name: t.athlete.first_name,
                            last_name: t.athlete.last_name,
                            profile: {
                                dob: t.athlete.profile.dob,
                                gender: t.athlete.profile.gender
                            },
                            profile_image: null
                        }
                    };
                    t.athlete.iAmAthlete && (t.iamathleteSelected = !0, o.athlete.relation = "self");
                    var n = calculateAge(new Date(t.athlete.profile.dob));
                    "individual" === t.sessionData.typeOfSession || n >= t.sessionData.ageFrom && n <= t.sessionData.ageTo && (o.athlete.profile.gender.toUpperCase().charAt(0) === t.sessionData.groupGender.toUpperCase().charAt(0) || "both" === t.sessionData.groupGender) && null !== o.athlete.name ? t.createAthleteAccount(o) : (e = "Oops, Mistake", a = "This athlete doesn't match the age and gender criteria of the invite.", l.showAlert(e, a))
                } else t.atheleteSubmitted = !0, e = "Incomplete Information!", a = "Please enter all the required fields to add this athlete", l.showAlert(e, a)
            }, t.isAmAthleteOption = function() {
                t.iamathleteSelected = !1, t.athletes.forEach(function(e) {
                    e.hasOwnProperty("relation") && "self" === e.relation && (t.iamathleteSelected = !0)
                })
            }, t.setAsAthlete = function() {
                t.athlete.iAmAthlete ? (t.athlete.first_name = t.firstName, t.athlete.last_name = t.lastName) : t.athlete.first_name = t.athlete.last_name = ""
            }, t.createAthleteAccount = function(a) {
                n.createAthlete(t.clientId, a, function(a) {
                    a.$resolved && 200 === a.status && (t.selectedAthletes = t.selectedAthletes.concat(a.data.athletes), t.athletes = t.athletes.concat(a.data.athletes), t.athleteIds.push(a.data.athletes.id), t.checkForValidAthletes(), d(function() {
                        e.element(".select-multi").multiselect("rebuild")
                    }, 500), t.multiAthlete.push(JSON.stringify(a.data.athletes)), e.element(".multi-list-container").find(".multiselect-container li:last-child").addClass("active"), d(function() {
                        e.element(".select-multi").multiselect("rebuild")
                    }, 500), t.atheleteSubmitted = !1, t.athlete = {}, t.isAmAthleteOption())
                }, function(e) {
                    if (t.atheleteSubmitted = !0, 422 === e.status) {
                        var a = "Error!",
                            o = e.statusText;
                        e.data.data.hasOwnProperty("email") ? o = "Email " + e.data.data.email[0] : e.data.data.hasOwnProperty("phone") && (o = "Phone " + e.data.data.phone[0]), l.showAlert(a, o)
                    }
                })
            }, t.updateList = function() {
                t.selectedAthletes.length === parseInt(t.sessionData.group_size) ? e.element(".multi-list-container").find(".multiselect-container li:not(.active)").addClass("disabled") : t.selectedAthletes.length < parseInt(t.sessionData.group_size) && (e.element(".multi-list-container").find(".multiselect-container li").removeClass("disabled"), t.selectedAthletes = [], t.athleteIds = [], t.multiAthlete.forEach(function(e) {
                    t.selectedAthletes.push(JSON.parse(e)), t.athleteIds.push(JSON.parse(e).id)
                }), t.sessionData.dates ? t.sessionData.dates.forEach(function(a) {
                    a.selected && parseInt(a.openSlots) - t.selectedAthletes.length === 0 && e.element(".multi-list-container").find(".multiselect-container li:not(.active)").addClass("disabled")
                }) : parseInt(t.sessionData.openSlots) - t.selectedAthletes.length === 0 && e.element(".multi-list-container").find(".multiselect-container li:not(.active)").addClass("disabled")), d(function() {
                    e.element(".select-multi").multiselect("rebuild")
                }, 500)
            }, t.addAthlete = function() {
                e.isDefined(t.selectedAthlete) && null !== t.selectedAthlete && (t.selectedAthletes.push(JSON.parse(t.selectedAthlete)), t.athletesSelected.push(JSON.parse(t.selectedAthlete).name), t.athleteIds.push(JSON.parse(t.selectedAthlete).id))
            }, t.init = function() {
                d(function() {
                    e.element(".select-multi").multiselect(), e.element(".select-multi").addClass("show-select"), t.showLoader = !1, e.element(".dropdown-menu-age input").click(function(e) {
                        e.stopPropagation(), e.preventDefault()
                    }), e.element(".multi-list-container").find(".multiselect-selected-text").text("Select your Athlete(s)")
                }, 500)
            }, t.loadCreditCardInfo = function() {
                t.creditCard = {}, s.getStoredPayment(t.clientId).success(function(e) {
                    e.last_4 && (t.creditCard = {
                        expiry: e.expiration_date,
                        ending_digits: e.last_4,
                        type: e.card_type,
                        token: !0
                    })
                }).error(function(e) {
                    console.log(e)
                })
            }, t.removeCreditCard = function() {
                n.deleteCreditCard(t.clientId, function(e) {
                    e.$resolved && 200 === e.status && (t.creditCard = {})
                }, function(e) {
                    console.log(e)
                })
            }, t.deleteCreditcard = function() {
                var e = {
                    title: "Confirm",
                    message: "Are you sure you want to delete this credit card from your account?",
                    positiveBtn: "Yes",
                    negativeBtn: "No"
                };
                i.showDialog(e, function(e) {
                    "yes" === e.$$state.value && t.removeCreditCard()
                })
            }, t.addCreditCardAPI = function(e) {
                var a = {
                    email: t.client.email,
                    nonce: e
                };
                n.addCreditCard(a, function(e) {
                    e.$resolved && 200 === e.status && t.loadCreditCardInfo()
                }, function(e) {
                    422 === e.status && (t.errorMessage = e.data.message)
                })
            }, t.addCreditCard = function(e) {
                if (t.creditCardSubmit = !1, e.$valid) {
                    var a;
                    u.getClientToken().success(function(e) {
                        a = new u.api.Client({
                            clientToken: e.client_token
                        }), a.tokenizeCard({
                            number: t.creditCard.number,
                            expirationDate: t.creditCard.expirationDate,
                            cvv: t.creditCard.securityCode,
                            postal_code: t.creditCard.postalCode
                        }, function(e, a) {
                            t.addCreditCardAPI(a)
                        }), t.creditCardSubmit = !1
                    })
                } else t.creditCardSubmit = !0
            }, t.getCardType = function() {
                var e = t.creditCard.number + "",
                    a = new RegExp("^4");
                return null != e.match(a) ? "Visa" : (a = new RegExp("^5[1-5][0-9]{14}$"), null != e.match(a) ? "Mastercard" : (a = new RegExp("^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$"), null != e.match(a) ? "Maestro" : (a = new RegExp("^3[47][0-9]{13}$"), null != e.match(a) ? "AMEX" : (a = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)"), null != e.match(a) ? "Discover" : (a = new RegExp("^36"), null != e.match(a) ? "Diners" : (a = new RegExp("^30[0-5]"), null != e.match(a) ? "Diners - Carte Blanche" : (a = new RegExp("^35(2[89]|[3-8][0-9])"), null != e.match(a) ? "JCB" : (a = new RegExp("^(4026|417500|4508|4844|491(3|7))"), null != e.match(a) ? "Visa Electron" : ""))))))))
            }, t.showPaymentLoader = function() {
                t.paymentLoader = !0
            }, t.hidePaymentLoader = function() {
                t.paymentLoader = !1
            }, t.getAllSelectedSessionIds = function() {
                var e = [];
                return t.sessionData.dates && t.sessionData.dates.forEach(function(t) {
                    t.selected && e.push(t.coachBookedSessionId)
                }), e
            }, t.getRecurringSessionData = function(o, s) {
                n.getInvitedRecurringSessionData(t.clientId, s, function(n) {
                    n.$resolved && 200 === n.status && (o.recurring_session = n.data.recurring_session, e.forEach(o.recurring_session.dates, function(e, t) {
                        e.openSlots = o.recurring_session.group_size - e.bookedSlots, e.openSlots <= 0 && o.recurring_session.dates.splice(t, 1)
                    }), t.hidePaymentLoader(), localStorage.setItem("BookedSessions", JSON.stringify(o)), a.go("booking.inviteFriends"))
                })
            }, t.paymentAPI = function(e, s) {
                n.payBookSession(e, function(n) {
                    n.$resolved && 200 === n.status && ("group" === t.sessionData.typeOfSession && e.coach_booked_session_ids ? (n.data.recurringSession = !0, t.getRecurringSessionData(n.data, o.booked_session_id)) : (t.hidePaymentLoader(), localStorage.setItem("BookedSessions", JSON.stringify(n.data)), a.go("booking.inviteFriends"))), t.submitting = !1
                }, function(e) {
                    t.submitting = !1, t.hidePaymentLoader();
                    var o;
                    406 === e.status ? (t.sessionData.openSlots = e.data.data.available_slots, o = {
                        title: "Oops!",
                        message: "Only " + t.sessionData.openSlots + " slot(s) are available for this session. Do you want to book another session?",
                        positiveBtn: "Book Another Session",
                        negativeBtn: "No, Thanks"
                    }) : 409 === e.status && (o = {
                        title: "Oops!",
                        message: "No slots are available for this session. Do you want to book another session?",
                        positiveBtn: "Book Another Session",
                        negativeBtn: "No, Thanks"
                    }), 406 !== e.status && 409 !== e.status || i.showDialog(o, function(e) {
                        "yes" === e.$$state.value && a.go("coachSearch.coaches", {
                            coachId: t.sessionData.coach_id,
                            name: t.sessionData.coach_first_name + " " + t.sessionData.coach_last_name,
                            sport: t.sessionData.sport,
                            searchParam: t.sessionData.coach_first_name.toLowerCase() + "-" + t.sessionData.coach_last_name.toLowerCase()
                        })
                    }), 422 === e.status && e.data.data && e.data.data.message && "Invalid credit card. Please use a different card." === e.data.data.message && s.number.$setValidity("pattern", !1)
                })
            }, t.payNow = function(e) {
                if (t.athleteIds.length > 0) {
                    t.showPaymentLoader();
                    var o = {
                        client_id: m.getParentId(),
                        amount: parseInt(t.sessionData.price) * parseInt(t.selectedAthletes.length) * t.totalSelectedDates,
                        athlete_ids: t.athleteIds,
                        email: m.getUserEmail()
                    };
                    "acceptInvite" === a.current.name ? o.coach_booked_session_id = t.sessionData.coachTrainingSessionId : "acceptRecurringInvite" === a.current.name ? o.coach_booked_session_ids = t.getAllSelectedSessionIds() : o.coach_training_session_id = t.sessionData.coachTrainingSessionId, t.creditCard.token ? (o.payment_method_token = t.creditCard.token, t.paymentAPI(o, e)) : u.getClientToken().success(function(a) {
                        var n = new u.api.Client({
                            clientToken: a.client_token
                        });
                        n.tokenizeCard({
                            number: t.creditCard.number,
                            expirationDate: t.creditCard.expirationDate,
                            cvv: t.creditCard.securityCode,
                            postal_code: t.creditCard.postalCode
                        }, function(a, n) {
                            o.payment_method_nonce = n, o.payment_method_token = t.creditCard.token, t.paymentAPI(o, e)
                        })
                    })
                } else {
                    var n = "Error!",
                        s = "Select your athletes first before proceed to payment.";
                    l.showAlert(n, s)
                }
            }, t.validateSession = function(e) {
                if (t.submitting = !0, t.athleteIds.length > 0) {
                    var o = {
                        athlete_ids: t.athleteIds
                    };
                    "acceptInvite" === a.current.name ? o.coach_booked_session_id = t.sessionData.coachTrainingSessionId : "acceptRecurringInvite" === a.current.name ? o.coach_booked_session_ids = t.getAllSelectedSessionIds() : o.coach_training_session_id = t.sessionData.coachTrainingSessionId, n.bookSession(t.clientId, o, function(a) {
                        a.$resolved && 200 === a.status && t.payNow(e)
                    }, function(e) {
                        t.submitting = !1;
                        var o;
                        406 === e.status ? (t.sessionData.openSlots = e.data.data.available_slots, o = {
                            title: "Oops!",
                            message: "Only " + t.sessionData.openSlots + " slot(s) are available for this session. Do you want to book another session?",
                            positiveBtn: "Book Another Session",
                            negativeBtn: "No, Thanks"
                        }) : 409 === e.status && (o = {
                            title: "Oops!",
                            message: "No slots are available for this session. Do you want to book another session?",
                            positiveBtn: "Book Another Session",
                            negativeBtn: "No, Thanks"
                        }), 406 !== e.status && 409 !== e.status || i.showDialog(o, function(e) {
                            "yes" === e.$$state.value && (a.go("coachSearch.coaches", {
                                coachId: t.sessionData.coach_id,
                                name: t.sessionData.coach_first_name + " " + t.sessionData.coach_last_name,
                                sport: t.sessionData.sport,
                                searchParam: t.sessionData.coach_first_name.toLowerCase() + "-" + t.sessionData.coach_last_name.toLowerCase()
                            }), t.setCoachViewHeader())
                        })
                    })
                }
            }, t.setCoachViewHeader = function() {
                d(function() {
                    e.element("#home-header").addClass("coach-search-header-loggedin")
                }, 100)
            }, t.getSessionData = function(a) {
                if ("individual" === t.sessionData.typeOfSession) a.session_type = "individual", a.cart_items = [];
                else {
                    a.cart_items = [], a.session_type = "group";
                    var o = {};
                    o.coachName = t.sessionData.coach_first_name + " " + t.sessionData.coach_last_name, o.startTime = t.sessionData.date_time, o.groupSize = t.sessionData.group_size, o.athletes = t.selectedAthletes, o.ageFrom = t.sessionData.ageFrom, o.ageTo = t.sessionData.ageTo, o.bookedSlots = t.sessionData.bookedSlots + t.selectedAthletes.length;
                    var n = t.sessionData.where.name + ", " + (e.isDefined(t.sessionData.where.street) && null !== t.sessionData.where.street && "" !== t.sessionData.where.street ? t.sessionData.where.street : "") + (e.isDefined(t.sessionData.where.city) && null !== t.sessionData.where.city && "" !== t.sessionData.where.city ? ", " + t.sessionData.where.city : "") + (e.isDefined(t.sessionData.where.state) && null !== t.sessionData.where.state && "" !== t.sessionData.where.state ? ", " + t.sessionData.where.state : "") + (e.isDefined(t.sessionData.where.zip) && null !== t.sessionData.where.zip && "" !== t.sessionData.where.zip ? ", " + t.sessionData.where.zip : "");
                    o.where = n, o.bookedSessionId = a.booked_sessions[0].bookedSessionId, a.cart_items.push(o)
                }
                return JSON.stringify(a)
            }, t.deleteAthlete = function(a) {
                t.selectedAthletes.length > 1 ? (t.selectedAthletes.splice(a, 1), t.athleteIds.splice(a, 1), t.multiAthlete.splice(a, 1)) : 1 === t.selectedAthletes.length && (t.selectedAthletes = [], t.athleteIds = [], t.multiAthlete = [], t.selectedAthlete = null, e.element(".multi-list-container").find(".multiselect-selected-text").text("Select your Athlete(s)")), d(function() {
                    e.element(".select-multi").multiselect("rebuild")
                }, 500)
            }, t.cancelInvite = function() {
                a.go("home")
            }, t.setCoachViewHeader = function() {
                d(function() {
                    e.element("#home-header").addClass("coach-search-header-loggedin")
                }, 100)
            }
        };
        t.$inject = ["$scope", "$state", "$stateParams", "ClientProfileInterfaceService", "BookingService", "ConfirmDialogService", "appConfig", "CoachProfileInterfaceService", "AlertService", "$timeout", "$braintree", "AuthFactory"], e.module("Coachco").controller("ClientAcceptInviteController", t)
    }(angular),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d, u, m, h, p, g, f, v) {
            a.profile = "client", e.$parent.currentState = n.current.name, e.clientIdd = s.clientId, e.photo = {}, e.photo.imageArray = [], e.expanded = !1, e.setList = function() {
                for (var e = $("div.flexslider-container div.flexslider"), t = e.find(".item"), a = 0; a < t.length; a += 3) t.slice(a, a + 3).wrapAll('<div class="items"></div>');
                $("li.list-wrap").each(function() {
                    "" !== $(this).html().trim() && "undefined" != typeof $(this).html().trim() || $(this).remove()
                }), $("ul li:empty").remove()
            }, window.onbeforeunload = function() {
                localStorage.setItem("currentStateName", "accounts"), angular.isDefined(s.clientId) && localStorage.setItem("clientId", s.clientId)
            }, e.updateFlexSlider = function() {
                $("flexslider").remove(), e.addAthletesSlider()
            }, e.loadCreditCardInfo = function() {
                e.creditCard = {}, f.getStoredPayment(e.clientIdd).success(function(t) {
                    t.last_4 && (e.creditCard = {
                        expiry: t.expiration_date,
                        ending_digits: t.last_4,
                        type: t.card_type,
                        token: !0
                    })
                }).error(function(e) {
                    console.log("getStoredPayment : get stored payment details failed with error %o", e)
                })
            }, e.athlete = {}, e.genders = t.genders, e.inputType = "password", e.hideShowPassword = function() {
                "password" === e.inputType ? e.inputType = "text" : e.inputType = "password"
            }, e.isPasswordRequired = function() {
                return !!(angular.isDefined(e.clientProfile.client.new_password) && e.clientProfile.client.new_password.length > 0 && null !== e.clientProfile.client.new_password)
            }, e.isEmailRequired = function() {
                return !!(angular.isDefined(e.clientProfile.client.new_email) && e.clientProfile.client.new_email.length > 0 && null !== e.clientProfile.client.new_email)
            }, e.addAthelete = function(t) {
                if (t) {
                    var a = {
                        athlete: {
                            first_name: e.athlete.first_name,
                            last_name: e.athlete.last_name,
                            profile: {
                                dob: e.athlete.profile.dob,
                                gender: e.athlete.profile.gender
                            },
                            profile_image: null
                        }
                    };
                    e.athlete.iAmAthlete && (e.iamathleteSelected = !0, a.athlete.relation = "self"), e.createAthleteAccount(a)
                } else {
                    e.atheleteSubmitted = !0;
                    var n = "Incomplete Information!",
                        s = "Please enter all the required fields to add this athlete";
                    o.showAlert(n, s)
                }
            }, e.isAmAthleteOption = function() {
                e.iamathleteSelected = !1, e.athletes.forEach(function(t) {
                    t.hasOwnProperty("relation") && "self" === t.relation && (e.iamathleteSelected = !0)
                })
            }, e.setAsAthlete = function() {
                e.athlete.iAmAthlete ? (e.athlete.first_name = e.clientProfile.client.first_name, e.athlete.last_name = e.clientProfile.client.last_name) : e.athlete.first_name = e.athlete.last_name = ""
            }, e.showLoaderImage = function() {
                e.loader = !0
            }, e.hideLoaderImage = function() {
                e.loader = !1
            }, e.setClientProfile = function(t) {
                delete t.athletes, "yes" === e.profileData.strivefar_message_read ? a.isStriveFarMsgRead = !0 : a.isStriveFarMsgRead = !1, e.clientProfile.client = angular.copy(t), e.clientTempProfile.client = angular.copy(t)
            }, e.setAthletes = function(t) {
                e.editMode = [], angular.isUndefined(e.athletes) || t ? e.$parent.fetchAthletes() : (e.athletes.forEach(function(t, a) {
                    g.isImage(t.profile_image).then(function(e) {
                        e || (t.profile_image = null)
                    }), e.editMode[a] = !1
                }), e.isAmAthleteOption())
            }, a.$on("athletesCallCompleted", function() {
                e.setAthletes()
            }), e.setAthletes(), e.toggleAccordion = function(e) {
                angular.isDefined(e) && (e.currentTarget.classList.toggle("active"), e.currentTarget.nextElementSibling.classList.toggle("show"))
            }, e.createAthleteAccount = function(t) {
                l.createAthlete(e.clientIdd, t, function(t) {
                    t.$resolved && 200 === t.status && (e.setAthletes(!0), e.athlete = {}, e.atheleteSubmitted = !1)
                }, function(t) {
                    if (e.atheleteSubmitted = !0, 422 === t.status) {
                        var a = "Error!",
                            n = t.statusText;
                        t.data.data.hasOwnProperty("email") ? n = "Email " + t.data.data.email[0] : t.data.data.hasOwnProperty("phone") && (n = "Phone " + t.data.data.phone[0]), o.showAlert(a, n)
                    }
                })
            }, e.loadClientProfile = function() {
                angular.isDefined(e.$parent.profileData) && (e.setClientProfile(e.$parent.profileData), e.client.email = e.$parent.profileData.email, e.clientProfile.client.email = null)
            }, e.loadClientProfile(), a.$on("clientAccountCallCompleted", function() {
                e.loadClientProfile()
            }), e.splitAthleteName = function() {
                e.athletes.forEach(function(e) {
                    var t = e.name.split(" ");
                    e.first_name = t[0], e.last_name = t[1]
                })
            }, e.clientForm = {}, e.clientForm.account, e.updateProfile = function(t) {
                if (!angular.isDefined(e.clientProfile.client.new_password) || "" !== e.clientProfile.client.new_password && 0 !== e.clientProfile.client.new_password.length || delete e.clientProfile.client.new_password, !angular.isDefined(e.clientProfile.client.new_email) || "" !== e.clientProfile.client.new_email && 0 !== e.clientProfile.client.new_email.length || delete e.clientProfile.client.new_email, t.$valid)
                    if (e.atheleteSubmitted = !1, e.setUpdateValues(), (angular.isUndefined(e.clientProfile.client.new_password) || 0 === e.clientProfile.client.new_password.length || angular.isDefined(e.clientProfile.client.new_password) && e.clientProfile.client.new_password === e.client.new_password) && (angular.isUndefined(e.clientProfile.client.new_email) || 0 === e.clientProfile.client.new_email.length || angular.isDefined(e.clientProfile.client.new_email) && e.clientProfile.client.new_email === e.client.new_email)) e.showLoaderImage(), e.updateProfileAPI(e.clientProfile);
                    else {
                        e.submitted = !0;
                        var a = "Warning!",
                            n = "Please enter all the required fields";
                        o.showAlert(a, n)
                    } else {
                    var a = "Warning!",
                        n = "Please enter all the required fields";
                    o.showAlert(a, n), e.atheleteSubmitted = !0, e.clientProfile && e.clientProfile.client && !e.clientProfile.client.zip_code && (t.zipcode.$touched = !0)
                }
            }, e.updateProfileAPI = function(t) {
                l.updateProfile(t, e.clientIdd, function(t) {
                    if (t.$resolved && 200 === t.status) {
                        var n = "Success!",
                            s = "Profile has been updated successfully!";
                        o.showAlert(n, s, function(o) {
                            "ok" === o.$$state.value && (e.client = {}, e.clientIdd = t.data.id.$oid, e.setClientProfile(t.data), e.$parent.profileData = t.data, e.client.email = t.data.email, e.clientProfile.client.email = null, e.setAthletes(!0), v.removeTokens(), v.setJwtToken(t.data.jwt.token), a.$emit("refreshHeader"), e.$parent.loadClientCoaches("update"), e.$parent.clientName = e.clientProfile.client.first_name + " " + e.clientProfile.client.last_name)
                        })
                    }
                    e.hideLoaderImage()
                }, function(t) {
                    var a, n;
                    422 === t.status ? (a = "Error!", n = t.statusText, t.data.data.hasOwnProperty("email") ? n = "Email " + t.data.data.email[0] : t.data.data.hasOwnProperty("phone") && (n = "Phone " + t.data.data.phone[0])) : 409 === t.status ? (a = "Error!", n = "This email has already taken") : (a = "Error!", n = "Unexpected error"), o.showAlert(a, n), delete e.clientProfile.client.new_password, e.client = {}, e.hideLoaderImage()
                })
            }, e.uploadImage = function(t) {
                var a = "partials/shared/views/modals/shared.uploadPhoto.html",
                    o = "model-createmessage",
                    n = "uploadPhotoController";
                e.photo.postURL = c.ccUrl + "clients/" + e.clientIdd + "/athletes/" + t.id, e.photo.athlete = t, e.photo.isClient = !0, r.modalOpen(e.photo, a, o, n, function(a) {
                    e.photo.croppedImage = a.$$state.value.croppedImage, e.photo.imageArray = a.$$state.value.imageArray, e.photo.duplicate = a.$$state.value.duplicate, e.photo.uploadStatus = a.$$state.value.uploadStatus, e.photo.picFile = a.$$state.value.picFile,
                    e.photo.uploadStatus && (t.profile_image = a.$$state.value.profile_image, t.profile_image_id = a.$$state.value.imageArray[0].id, e.$parent.coaches.forEach(function(e) {
                        e.athletes.forEach(function(e) {
                            e.athlete_id === t.id && (e.athlete_profile_image = a.$$state.value.profile_image)
                        })
                    }))
                })
            }, e.deleteProfPic = function(t) {
                l.deleteAthleteImage(e.clientIdd, t.id, t.profile_image_id, function(a) {
                    a.$resolved && 204 === a.status && (t.profile_image = null, t.profile_image_id = null, e.$parent.coaches.forEach(function(e) {
                        e.athletes.forEach(function(e) {
                            e.athlete_id === t.id && (e.athlete_profile_image = null)
                        })
                    }))
                }, function(e) {
                    var t, a;
                    422 === e.status ? (t = "Error!", a = e.statusText) : 404 === e.status && (t = "Error!", a = "The image is not found"), o.showAlert(t, a)
                })
            }, e.editAccount = function(t, a) {
                e.athletes.forEach(function(t, a) {
                    e.editMode[a] = !1
                }), e.editMode[a] = !0, e.athleteProfile = {}, e.athleteProfile.athlete = {
                    first_name: t.first_name,
                    last_name: t.last_name,
                    profile: {
                        gender: t.profile.gender,
                        dob: t.profile.dob
                    }
                }
            }, e.doneEdit = function(t, a, o) {
                o ? (e.showLoaderImage(), l.updateAthlete(e.clientIdd, t.id, e.athleteProfile, function(o) {
                    e.hideLoaderImage(), o.$resolved && 200 === o.status && (t.first_name = e.athleteProfile.athlete.first_name, t.last_name = e.athleteProfile.athlete.last_name, t.profile = {
                        gender: e.athleteProfile.athlete.profile.gender,
                        dob: e.athleteProfile.athlete.profile.dob
                    }, e.$parent.loadClientCoaches("update"), e.editMode[a] = !1)
                }, function(t) {
                    e.hideLoader(), console.log(t)
                })) : e.atheleteEditSubmitted = !0
            }, e.deleteAthlete = function(t, a) {
                l.deleteAthlete(e.clientIdd, t, function(t) {
                    t.$resolved && 204 === t.status && (e.athletes.length > 1 ? e.athletes.splice(a, 1) : 1 === e.athletes.length && (e.athletes = []), e.isAmAthleteOption())
                })
            }, e.deleteAccount = function(t, a) {
                if (t.remove) {
                    var n = {
                        title: "Confirm",
                        message: "Are you sure you want to remove this athlete from your account?",
                        positiveBtn: "Yes",
                        negativeBtn: "No"
                    };
                    d.showDialog(n, function(o) {
                        "yes" === o.$$state.value && e.deleteAthlete(t.id, a)
                    })
                } else {
                    var s = "Canâ€™t Delete This Athlete!",
                        i = "You can not delete this athlete from your profile since sessions have been conducted or are scheduled with this athlete.";
                    o.showAlert(s, i)
                }
            }, e.removeCreditCard = function() {
                l.deleteCreditCard(e.clientIdd, function(t) {
                    t.$resolved && 200 === t.status && (e.creditCard = {})
                }, function(e) {
                    console.log(e)
                })
            }, e.deleteCreditcard = function() {
                var t = {
                    title: "Confirm",
                    message: "Are you sure you want to delete this credit card from your account?",
                    positiveBtn: "Yes",
                    negativeBtn: "No"
                };
                d.showDialog(t, function(t) {
                    "yes" === t.$$state.value && e.removeCreditCard()
                })
            }, e.addCreditCardAPI = function(t, a) {
                var o = {
                    email: e.client.email,
                    nonce: t
                };
                l.addCreditCard(o, function(t) {
                    t.$resolved && 200 === t.status && e.loadCreditCardInfo()
                }, function(t) {
                    422 === t.status && t.data.data && t.data.data.message && "Credit card type is not accepted by this merchant account." === t.data.data.message ? a.number.$setValidity("pattern", !1) : 422 === t.status && (e.errorMessage = t.data.data.message)
                })
            }, e.addCreditCard = function(t) {
                if (e.creditCardSubmit = !1, t.$valid) {
                    var a;
                    h.getClientToken().success(function(o) {
                        a = new h.api.Client({
                            clientToken: o.client_token
                        }), a.tokenizeCard({
                            number: e.creditCard.number,
                            expirationDate: e.creditCard.expirationDate,
                            cvv: e.creditCard.securityCode,
                            postal_code: e.creditCard.postalCode
                        }, function(a, o) {
                            e.addCreditCardAPI(o, t)
                        }), e.creditCardSubmit = !1
                    })
                } else e.creditCardSubmit = !0
            }, e.getCardType = function() {
                var t = e.creditCard.number + "",
                    a = new RegExp("^4");
                return null != t.match(a) ? "Visa" : (a = new RegExp("^5[1-5][0-9]{14}$"), null != t.match(a) ? "Mastercard" : (a = new RegExp("^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$"), null != t.match(a) ? "Maestro" : (a = new RegExp("^3[47][0-9]{13}$"), null != t.match(a) ? "AMEX" : (a = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)"), null != t.match(a) ? "Discover" : (a = new RegExp("^36"), null != t.match(a) ? "Diners" : (a = new RegExp("^30[0-5]"), null != t.match(a) ? "Diners - Carte Blanche" : (a = new RegExp("^35(2[89]|[3-8][0-9])"), null != t.match(a) ? "JCB" : (a = new RegExp("^(4026|417500|4508|4844|491(3|7))"), null != t.match(a) ? "Visa Electron" : ""))))))))
            }, e.showTooltip = function(t) {
                e.toolTipElement = angular.element("#reschedule-tooltip-" + t), e.toolTipElement.addClass("show-tooltip")
            }, e.hideTooltip = function() {
                e.toolTipElement.removeClass("show-tooltip")
            }, e.closeButtonMobile = function() {
                angular.element(".coach-info").removeClass("hide-elements"), angular.element("#profile-menu").removeClass("hide-elements"), n.go(e.baseState + ".sessions")
            }, e.showMobileCoaches = function() {
                angular.element(".main-container").addClass("calendar-view")
            }, e.closeButtonCoachesMobile = function() {
                angular.element(".main-container").removeClass("calendar-view")
            }
        };
        e.$inject = ["$scope", "appConfig", "$rootScope", "AlertService", "$state", "$stateParams", "Coachco_CommonService", "UploadPhotoService", "urlConfig", "ClientProfileInterfaceService", "ConfirmDialogService", "$window", "$compile", "$braintree", "CommonAPIInterfaceService", "Utils", "BookingService", "AuthTokenFactory"], angular.module("Coachco").controller("ClientProfileController", e)
    }(),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d, u, m, h, p, g, f, v, S, C, y) {
            a.commonHeader = !1, a.profile = "client", e.query = {}, e.skillrating = 8, e.dashboardReview = s.current.name.indexOf("clientProfile.dashboardView") > -1, e.baseState = e.dashboardReview ? "clientProfile.dashboardView" : "clientProfile.dashboard", e.clientIdd = c.clientId, e.clientName = m.getFirstName() + " " + m.getLastName(), console.log("controller initailazed"), e.client = {}, e.clientProfile = {}, e.clientProfile.client = {}, e.clientTempProfile = {}, e.clientTempProfile.client = {}, angular.element(".athlete-slider").flexslider({
                animation: "slide",
                animationLoop: !1,
                itemWidth: 150,
                itemMargin: 5,
                minItems: 3,
                maxItems: 3,
                useCSS: !1,
                pauseOnAction: !1,
                pauseOnHover: !1,
                controlNav: !1,
                touch: !0,
                nextText: "",
                prevText: ""
            }), e.initScrollbarConfig = function() {
                e.upcomingSessionsConfig = {
                    autoHideScrollbar: !1,
                    theme: "light",
                    advanced: {
                        updateOnContentResize: !0
                    },
                    setHeight: 308,
                    scrollInertia: 0
                }
            }, e.initCoachesScrollbarConfig = function() {
                e.coachesScrollbarConfig = {
                    autoHideScrollbar: !1,
                    theme: "light",
                    advanced: {
                        updateOnContentResize: !0
                    },
                    setHeight: 308,
                    scrollInertia: 0
                }
            }, e.getGetOrdinal = function(e) {
                var t = ["th", "st", "nd", "rd"],
                    a = e % 100;
                return e + (t[(a - 20) % 10] || t[a] || t[0])
            }, isMobile() ? e.hideSessionLoader = !0 : (e.sessionsLoader = !0, e.hideSessionLoader = !1), e.loadCalendar = function() {
                loadAddToCalendarScript()
            }, e.setSessionsTab = function() {
                s.go(c.stateName)
            }, e.showLoader = function() {
                e.loader = !0
            }, e.hideLoader = function() {
                e.loader = !1
            }, e.inputType = "password", e.hideShowPassword = function() {
                "password" === e.inputType ? e.inputType = "text" : e.inputType = "password"
            }, e.updateAccount = function(t) {
                if (t.$valid);
                else {
                    var a = "Warning!",
                        o = "Please enter all the required fields";
                    n.showAlert(a, o), e.atheleteSubmitted = !0
                }
            }, e.detailsSec = !1, e.showDetails = function(t) {
                e.detailsSec = !0, angular.forEach(e.athletes, function(e) {
                    angular.forEach(t.athletes, function(t) {
                        t.athlete_id === e.id && (t.profile = e.profile)
                    })
                }), e.selectedCoach = t
            }, e.detailsBack = function() {
                e.detailsSec = !1
            }, e.activities = [], e.fetchActivityDetails = function() {
                y.getCoachActivities(function(t) {
                    t.$resolved && 200 === t.status && t.data.length > 0 && (e.activities = t.data, e.loadSessionDetails(function() {}), e.loadClientCoaches())
                }, function(t) {
                    e.loadSessionDetails(function() {}), e.loadClientCoaches();
                    var a = "Error!",
                        o = "Email " + t.statusText;
                    n.showAlert(a, o)
                })
            }, e.fetchActivityDetails(), e.openInviteFriendPopup = function() {
                var t = "/partials/coachProfile/views/modal/coachProfile.inviteClient.html",
                    a = "model-sessioncreate model-sessionreschedule model-coachInvite",
                    o = "InviteClientController",
                    n = {
                        title: "Invite a Friend",
                        infoText: "Enter Friendâ€™s email address",
                        clientId: e.clientIdd,
                        sessionInfo: null,
                        context: "inviteFriend",
                        placeHolder: "Enter Clientâ€™s email Address(es) (separated by,)",
                        messagePlaceHolder: "Type message to the Potential Client.",
                        message: "I joined StriveFar to find coaches and book private training sessions for my kids. Itâ€™s easy to use and very helpful for me. I thought it may be helpful to you also. Give it a try!",
                        buttonTxt: "Send Invite"
                    };
                d.modalOpen(t, a, o, n)
            }, e.getRecurringSessionData = function(t) {
                g.getInvitedRecurringSessionData(e.clientIdd, t, function(t) {
                    t.$resolved && 200 === t.status && (e.sessionData = t.data.recurring_session, angular.forEach(e.sessionData.dates, function(t, a) {
                        t.openSlots = e.sessionData.group_size - t.bookedSlots, t.openSlots <= 0 && e.sessionData.dates.splice(a, 1)
                    }), e.bookingData.recurring_session = e.sessionData, localStorage.setItem("BookedSessions", JSON.stringify(e.bookingData)), s.go("booking.inviteFriends"))
                })
            }, e.openInviteFriend = function(t) {
                var a = [];
                a.push(t), e.bookingData = {}, t.recurringSessionsId ? (e.bookingData.recurringSession = !0, e.getRecurringSessionData(t.recurringSessionsId)) : (e.bookingData.recurringSession = !1, e.bookingData.booked_sessions = a, localStorage.setItem("BookedSessions", JSON.stringify(e.bookingData)), s.go("booking.inviteFriends"))
            }, e.clientCoachesloaded = !0, e.loadClientCoaches = function(t) {
                e.showLoader(), g.getClientCoachDetails(e.clientIdd, function(a) {
                    a.$resolved && 200 === a.status && (t && e.hideLoader(), e.clientCoachesloaded = !1, e.coaches = [], e.coaches = a.data, e.coaches.forEach(function(t) {
                        t.selectedActivity = findActivityByName(e.activities, t.sports), f.isImage(t.profile_image).then(function(e) {
                            e || (t.profile_image = null)
                        }), t.athletes.forEach(function(e) {
                            f.isImage(e.athlete_profile_image).then(function(t) {
                                t || (e.athlete_profile_image = null)
                            })
                        })
                    }), t || e.hideLoader(), e.sessionsLoader && (e.showSessionLoader = !0))
                }, function(t) {
                    if (422 === t.status) {
                        var a = "Error!",
                            o = t.statusText;
                        t.data.data.hasOwnProperty("email") ? o = "Email " + t.data.data.email[0] : t.data.data.hasOwnProperty("phone") && (o = "Phone " + t.data.data.phone[0]), n.showAlert(a, o)
                    }
                    e.hideLoader()
                })
            }, e.sessionsLoader = !0, e.allSessions = [], e.todos = [], e.recentActivities = [], e.loadSessionDetails = function(t) {
                g.getClientSessions(e.clientIdd, function(o) {
                    o.$resolved && 200 === o.status && (o.data && (e.clientSessions = o.data), e.sessionsLoader = !1, e.showSessionLoader = !1, e.allSessions = o.data.sessions, e.todos = o.data.upcoming_sessions, e.todos.forEach(function(t) {
                        e.setLocationAddress(t)
                    }), e.recentActivities = o.data.completed_sessions, e.actionNeeded = o.data.action_needed, e.completed = o.data.completed_sessions, "clientProfile.dashboard" !== s.current.name && "clientProfile.dashboardView" !== s.current.name || e.setSessionsTab(), a.$emit("sessionCallCompleted"), e.hideLoader(), t && t("success"))
                }, function(a) {
                    if (t("error"), 422 === a.status) {
                        var o = "Error!",
                            s = a.statusText;
                        a.data.data.hasOwnProperty("email") ? s = "Email " + a.data.data.email[0] : a.data.data.hasOwnProperty("phone") && (s = "Phone " + a.data.data.phone[0]), n.showAlert(o, s)
                    }
                    e.hideLoader()
                })
            }, e.setLocationAddress = function(e) {
                var t = angular.isDefined(e.location.address.street) && null !== e.location.address.street && "" !== e.location.address.street,
                    a = angular.isDefined(e.location.address.state) && null !== e.location.address.state && "" !== e.location.address.state,
                    o = angular.isDefined(e.location.address.city) && null !== e.location.address.city && "" !== e.location.address.city,
                    n = angular.isDefined(e.location.address.zip) && null !== e.location.address.zip && "" !== e.location.address.zip;
                e.locationAddress = (t ? e.location.address.street : "") + (t && o ? " " : "") + (o ? e.location.address.city : "") + (o && a ? ", " : "") + (a ? e.location.address.state : "") + (a && n ? " " : "") + (n ? e.location.address.zip : "")
            }, e.isProfileLoaded = !1, e.loadClientProfileSummary = function() {
                e.isProfileLoaded = !0, g.getClientDetails(e.clientIdd, function(t) {
                    t.$resolved && 200 === t.status && (e.profileData = t.data, "yes" === e.profileData.strivefar_message_read ? a.isStriveFarMsgRead = !0 : a.isStriveFarMsgRead = !1, e.openWelcomePopup(), "clientProfile.dashboard.messages" !== s.current.name && "clientProfile.dashboardView.messages" !== s.current.name || a.$emit("clientProfileCallCompleted"), "clientProfile.dashboard.accounts" !== s.current.name && "clientProfile.dashboardView.accounts" !== s.current.name || a.$emit("clientAccountCallCompleted"))
                }, function(e) {
                    if (422 === e.status) {
                        var t = "Error!",
                            a = e.statusText;
                        e.data.data.hasOwnProperty("email") ? a = "Email " + e.data.data.email[0] : e.data.data.hasOwnProperty("phone") && (a = "Phone " + e.data.data.phone[0]), n.showAlert(t, a)
                    }
                })
            }, e.loadClientProfileSummary(), e.openWelcomePopup = function() {
                var t = e.profileData.welcome_msg;
                if (angular.isDefined(t) && "yes" === t) {
                    var a = "/partials/clientProfile/views/modal/clientProfile.welcomePopup.html",
                        o = "model-sessioncreate model-sessionreschedule model-welcome",
                        n = "ModalController";
                    d.modalOpen(a, o, n, null, function(t) {
                        if ("ok" === t.$$state.value) {
                            var a = {
                                client: {
                                    welcome_msg: "no"
                                }
                            };
                            g.updateProfile(a, e.clientIdd, function(e) {})
                        }
                    })
                }
            }, e.uploadImage = function() {
                var t = "partials/shared/views/modals/shared.uploadPhoto.html",
                    a = "model-createmessage",
                    o = "uploadPhotoController";
                e.photo.postURL = p.ccUrl + "coaches/" + e.userId, h.modalOpen(e.photo, t, a, o, function(t) {
                    e.photo.croppedImage = t.$$state.value.croppedImage, e.photo.imageArray = t.$$state.value.imageArray, e.photo.duplicate = t.$$state.value.duplicate, e.photo.uploadStatus = t.$$state.value.uploadStatus, e.photo.picFile = t.$$state.value.picFile, e.photo.uploadStatus && (e.photo.profile_image = t.$$state.value.profile_image, e.coachProfile.coach.profile.image = t.$$state.value.imageArray)
                })
            }, e.deleteProfPic = function(t, a) {
                e.photo.imageArray.splice(a, 1), e.photo.imageArray.length < 3 && (e.setImageLimit = !1)
            }, e.goBack = function() {
                angular.element(".dashbroad-wrapper").removeClass("open")
            }, e.openMessageBox = function(t) {
                "Pending" === t.status ? e.createMessage(t.coachName, t.coach_id) : "Cancelled" === t.status && t.reason_for_cancellation && n.showAlert("Reason for Cancellation", t.reason_for_cancellation)
            }, e.createMessage = function(t, a) {
                var o = {
                    toId: a,
                    toRole: "coach",
                    fromId: e.clientIdd,
                    role: "client",
                    message: null,
                    recepientName: "Coach " + t
                };
                v.composeDialog(o, function(e) {
                    if ("send" === e.$$state.value) {
                        var a = "Success!",
                            o = "Your message to Coach " + t + " has been successfully sent!";
                        n.showAlert(a, o)
                    }
                })
            }, e.getFeedback = function(t) {
                g.getClientFeedback(e.clientIdd, t.bookedSessionId, function(t) {
                    t.$resolved && 200 === t.status && e.sessionFeedback(t.data)
                })
            }, e.sessionFeedback = function(e) {
                var t = "partials/clientProfile/views/modal/clientProfile.sessionFeedback.html",
                    a = "model-sessionfeedback",
                    o = "clientFeedbackModalController";
                d.modalOpen(t, a, o, e)
            }, e.seeHow = function(e) {
                var t = {
                    bookedSessionId: e.bookedSessionId,
                    date: e.date,
                    dayOfWeek: e.dayOfWeek,
                    startTime: e.time,
                    endTime: e.endTime,
                    date_time: e.date_time,
                    duration: e.duration,
                    start_time: e.start_time,
                    end_time: e.end_time,
                    client: e.clientName,
                    badge: 1,
                    location: e.locationName,
                    price: e.sessionPrice,
                    parentId: {
                        $oid: e.coachId
                    },
                    athletes: e.athletes
                };
                "Individual" === e.type ? t.typeOfSession = "individual" : "Group" === e.type && (t.typeOfSession = "group");
                var o = "partials/clientProfile/views/modal/clientProfile.seeHow.html",
                    n = "model-messagecoach model-seehow",
                    i = "clientProfileModalController";
                d.modalOpen(o, n, i, null, function(o) {
                    "ok" === o.$$state.value && (a.fromCalender = !1, a.fromProfileDetail = !1, a.fromCalendarView = !1, a.rescheduleSession = !0, localStorage.setItem("currentSchedule", JSON.stringify(t)), localStorage.setItem("pageSchedule", JSON.stringify("session")), localStorage.setItem("rescheduleSession", !0), s.go("coachSearch.coaches", {
                        coachId: e.coachId,
                        name: e.coachName,
                        sport: e.sports,
                        searchParam: hyphenSeparated(e.coachName)
                    }))
                })
            }, e.deleteAccount = function() {
                var e = "partials/clientProfile/views/modal/clientProfile.deleteAccount.html",
                    t = "model-messagecoach model-seehow model-delete-account",
                    a = "clientProfileModalController";
                d.modalOpen(e, t, a)
            }, e.deleteCreditcard = function() {
                var e = "partials/clientProfile/views/modal/clientProfile.deleteCreditcard.html",
                    t = "model-messagecoach model-seehow model-delete-account",
                    a = "clientProfileModalController";
                d.modalOpen(e, t, a)
            }, e.skillLevel = function() {
                e.skillrating >= 1 && e.skillrating <= 3 && (e.skillLevelRating = "Beginner"), e.skillrating >= 4 && e.skillrating <= 7 && (e.skillLevelRating = "Intermediate"), e.skillrating >= 8 && e.skillrating <= 10 && (e.skillLevelRating = "Advanced")
            }, e.skillLevel(), e.showTooltip = function(t) {
                e.toolTipElement = angular.element("#reschedule-tooltip-" + t), e.toolTipElement.addClass("show-tooltip")
            }, e.hideTooltip = function() {
                e.toolTipElement.removeClass("show-tooltip")
            }, e.showHideWrapper = function(e) {
                "open" === e && angular.element(".main-container").addClass(e).removeClass("close"), "close" === e && angular.element(".main-container").addClass(e).removeClass("open")
            }, e.closeButtonMobile = function() {
                angular.element(".main-container").removeClass("open")
            }, e.showMobileCoaches = function() {
                angular.element(".main-container").addClass("calendar-view");
                var e = angular.element(".client-dashboard");
                angular.element("html, body").animate({
                    scrollTop: angular.element(e).offset().top - 20
                }, 1200)
            }, e.closeButtonCoachesMobile = function() {
                angular.element(".main-container").removeClass("calendar-view")
            }, e.selectTab = function(t) {
                t === e.baseState + ".sessions" && (e.tabSwitch = !0, e.loadSessionDetails(function() {})), s.current.name === e.baseState + ".accounts" ? e.checkforUpdates(t) : s.go(t)
            }, e.selectTabMob = function(t) {
                t === e.baseState + ".sessions", angular.element(".coach-info").addClass("hide-elements"), angular.element("#profile-menu").addClass("hide-elements"), t === e.baseState + ".sessions" ? (e.infoTab = !1, e.messageTab = !1, e.sessionsTab = !0) : t === e.baseState + ".messages" ? (e.sessionsTab = !1, e.infoTab = !1, e.messageTab = !0) : (e.sessionsTab = !1, e.messageTab = !1, e.infoTab = !0), s.go(t);
                var a = angular.element(".client-dashboard");
                angular.element("html, body").animate({
                    scrollTop: angular.element(a).offset().top - 20
                }, 1200)
            }, e.resetValues = function(e) {
                e.client.email = null
            }, e.setUpdateValues = function() {
                null !== e.clientProfile.client.email && "" !== e.clientProfile.client.email || (e.clientProfile.client.email = e.client.email)
            }, e.checkforUpdates = function(t) {
                if (e.setUpdateValues(), angular.equals(e.clientProfile, e.clientTempProfile)) e.resetValues(e.clientProfile), s.go(t);
                else {
                    var a = {
                        title: "Discard your changes?",
                        message: "You have unsaved changes which will be lost if you continue.",
                        note: 'To save your changes, please â€œCancelâ€ and then click "Updateâ€ at the bottom of the page.',
                        positiveBtn: "Continue",
                        negativeBtn: "Cancel"
                    };
                    S.showDialog(a, function(a) {
                        "yes" === a.$$state.value && (e.resetValues(e.clientTempProfile), e.clientProfile = angular.copy(e.clientTempProfile), s.go(t))
                    })
                }
            }, e.isReschedulable = function(e) {
                var t = new Date,
                    a = new Date(e.date_time),
                    o = (a - t) / 36e5;
                return o >= 72 && ("individual" === e.type || "Individual" === e.type)
            }, e.athletesFetch = !0, e.fetchAthletes = function() {
                g.getClientAthletes(e.clientIdd, function(t) {
                    t.$resolved && 200 === t.status && (e.athletesFetch = !1, t.data.athletes && angular.forEach(t.data.athletes, function(e, t) {
                        "F" === e.profile.gender ? e.profile.gender = "Female" : "M" === e.profile.gender && (e.profile.gender = "Male")
                    }), e.athletes = t.data.athletes, a.$emit("athletesCallCompleted"))
                }, function(t) {
                    if (e.athletesFetch = !1, 422 === t.status) {
                        var a = "Error!",
                            o = t.statusText;
                        t.data.data.hasOwnProperty("email") ? o = "Email " + t.data.data.email[0] : t.data.data.hasOwnProperty("phone") && (o = "Phone " + t.data.data.phone[0]), n.showAlert(a, o)
                    }
                })
            }, e.fetchAthletes(function() {}), e.setCoachViewHeader = function() {
                o(function() {
                    angular.element("#home-header").addClass("coach-search-header-loggedin")
                }, 100), localStorage.setItem("BookCoach", JSON.stringify(C.absUrl()))
            }, e.searchForCoach = function() {
                e.searched = !0;
                var t = JSON.parse(localStorage.getItem("coachSearchResults"));
                angular.isDefined(t) && null !== t && t.zip ? s.go("coachSearch.coaches", {
                    zip: t.zip,
                    sport: t.sport.replace(/\s/g, ""),
                    searchParam: t.zip
                }) : angular.isDefined(t) && null !== t && t.name ? s.go("coachSearch.coaches", {
                    name: t.name,
                    sport: t.sport.replace(/\s/g, ""),
                    searchParam: hyphenSeparated(t.name)
                }) : angular.isDefined(t) && null !== t && t.coachId && s.go("coachSearch.coaches", {
                    coachId: t.coachId,
                    name: t.name,
                    sport: t.sport.replace(/\s/g, ""),
                    searchParam: hyphenSeparated(t.name)
                })
            }, e.continueShopping = function() {
                angular.isDefined(localStorage.getItem("coachSearchResults")) && e.searchForCoach()
            }, e.hyphenSeparated = function(e) {
                return e ? hyphenSeparated(e) : void 0
            }
        };
        e.$inject = ["$scope", "appConfig", "$rootScope", "$timeout", "AlertService", "$state", "uiCalendarConfig", "$compile", "$stateParams", "$window", "Coachco_CommonService", "SessionService", "AuthFactory", "UploadPhotoService", "urlConfig", "ClientProfileInterfaceService", "Utils", "CreateMessageService", "ConfirmDialogService", "$location", "ActivitiesService"], angular.module("Coachco").controller("ClientProfileDashboardController", e)
    }(),
    function(e) {
        var t = function(e, t, a, o, n) {
            switch (e.submitted = !1, e.sessionFeedback = n, e.sessionFeedback.feedback.skillRating) {
                case 1:
                case 2:
                case 3:
                    e.skillLevel = "Beginner";
                    break;
                case 4:
                case 5:
                case 6:
                case 7:
                    e.skillLevel = "Intermediate";
                    break;
                case 8:
                case 9:
                case 10:
                    e.skillLevel = "Advanced";
                    break;
                default:
                    e.skillLevel = "None"
            }
            e.close = function() {
                a.modalClose(t)
            }
        };
        t.$inject = ["$scope", "$uibModalInstance", "Coachco_CommonService", "HomeApiService", "sessionFeedBack"], e.module("Coachco").controller("clientFeedbackModalController", t)
    }(angular),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d, u, m, h, p, g, f, v, S, C, y) {
            function _(t) {
                var a, o, n = t.toLowerCase().trim(),
                    s = [];
                for (a = 0; a < e.coaches.length; a++) o = e.coaches[a], e.coaches[a].role = "coach", o.athleteList = "", o.id && (o.athletes && o.athletes.forEach(function(e, t) {
                    0 === t ? o.athleteList = o.athleteList + e.athlete_name : o.athleteList = o.athleteList + ", " + e.athlete_name
                }), o.name.toLowerCase().indexOf(n) === -1 && o.email.toLowerCase().indexOf(n) === -1 && o.athleteList.toLowerCase().indexOf(n) === -1 || (null === o.profile_image ? s.push({
                    value: o.name,
                    obj: o,
                    label: S.trustAsHtml('<div class="row-holder">  <img class="avatar-thumb-nail" src="/images/default-msg-avatar.png"></img> <div class="col-left">  <strong>' + o.name + '</strong>  </div> <div class="col-right text-right text-muted">  <small>' + o.email + '</small> </div> <br><small class="text-ellipsise">' + o.athleteList + "</small>  <div> </div></div>")
                }) : s.push({
                    value: o.name,
                    obj: o,
                    label: S.trustAsHtml('<div class="row-holder"> <img class="avatar-thumb-nail" src="' + o.profile_image + '"></img> <div class="col-left">  <strong>' + o.name + '</strong> </div> <div class="col-right text-right text-muted">  <small>' + o.email + '</small> </div> <br><small class="text-ellipsise">' + o.athleteList + "</small>  <div> </div></div>")
                })));
                for (a = 0; a < e.associatedClients.length; a++) o = e.associatedClients[a], e.associatedClients[a].role = "client", o.athleteNames = "", o.id && (o.athletes && o.athletes.forEach(function(e, t) {
                    0 === t ? o.athleteNames = o.athleteNames + e : o.athleteNames = o.athleteNames + ", " + e
                }), o.name.toLowerCase().indexOf(n) === -1 && o.email.toLowerCase().indexOf(n) === -1 && o.athleteNames.toLowerCase().indexOf(n) === -1 || s.push({
                    value: o.name,
                    obj: o,
                    label: S.trustAsHtml('<div class="row-holder">  <img class="avatar-thumb-nail" src="/images/default-msg-avatar.png"></img> <div class="col-left">  <strong>' + o.name + '</strong>  </div> <div class="col-right text-right text-muted">  <small>' + o.email + '</small> </div> <br><small class="text-ellipsise">' + o.athleteNames + "</small>  <div> </div></div>")
                }));
                return s
            }

            function b(e, t) {
                var a = !1;
                return angular.isDefined(e) && e.length > 0 && e.forEach(function(e) {
                    e.id.$oid === t && (a = !0)
                }), a
            }
            e.isInboxAppended = !1, e.$parent.currentState = s.current.name, e.recepients = [], e.toIds = [], e.glued = !0, e.updateMessage = !1, e.messageTypes = t.messageTypes, e.selectedMessageType = "All Messages", e.clientName = C.getFirstName() + "" + C.getLastName(), e.clientId = c.clientId, e.firstTime = !Boolean(localStorage.getItem("FirstTime")), e.config = {
                autoHideScrollbar: !1,
                theme: "light",
                advanced: {
                    updateOnContentResize: !0
                },
                setHeight: 308,
                setWidth: 290,
                scrollInertia: 0
            };
            var w = angular.element("#dashbroad-wrapper-main");
            e.setMessageConfig = function() {
                e.messageConfig = {
                    autoHideScrollbar: !1,
                    theme: "light",
                    advanced: {
                        updateOnContentResize: !0
                    },
                    setHeight: 732,
                    scrollInertia: 0
                }
            }, e.setMessageConfig(), e.gotoBottom = function(e) {
                y.hash("bottom"), ScrollService.scrollTo(e)
            }, e.scrollToBottom = function() {
                e.selectedMessage && "new" !== e.selectedMessage.id.$oid && o(function() {
                    var t, a, o;
                    t = $(window).width() > 1024 && !isMobile() ? "#dashbroad-wrapper-main #messagesDiv-" + e.selectedMessage.id.$oid : "#dashbroad-wrapper-mob #messagesDiv-" + e.selectedMessage.id.$oid, e.updateMessage ? (e.updateMessage = !1, o = "#day-" + (e.selectedMessage.conversations.length - 1) + "-conversation-" + (e.selectedMessage.conversations[e.selectedMessage.conversations.length - 1].conversations.length - 1), a = document.querySelector(t).scrollHeight + document.querySelector(o).scrollHeight) : document.querySelector(t) && (a = document.querySelector(t).scrollHeight), angular.element(t).animate({
                        scrollTop: a
                    }, 600)
                }, 50)
            }, e.newMessageView = !1, e.setInboxData = function(t, n) {
                var s = angular.copy(t.new_messages_count);
                e.newMessageView = !1, e.newMessageTemp = "", e.continueSettingData = !1, e.selectedMessage && t && t.id.$oid === e.selectedMessage.id.$oid && (e.newMessageTemp = angular.copy(e.selectedMessage.replyMessage)), e.selectedMessage = t, e.newMessageTemp ? e.selectedMessage.replyMessage = e.newMessageTemp : e.selectedMessage.replyMessage = "", w.addClass("open"), e.setMessageConfig(), e.selectedMessage.new_messages_count > 0 && o(function() {
                    var t = {
                        message: {
                            sender_id: e.clientId
                        }
                    };
                    if (f.resetMessageCount(e.selectedMessage.id.$oid, t, function() {
                            n ? o(function() {
                                e.selectedMessage.new_messages_count = 0, a.$emit("refreshHeader", s)
                            }, 1e3) : (e.selectedMessage.new_messages_count = 0, a.$emit("refreshHeader", s))
                        }, function(e) {
                            console.log(e)
                        }), "welcomemsg" === e.selectedMessage.id.$oid) {
                        var i = {
                            client: {
                                strivefar_message_read: "yes"
                            }
                        };
                        g.updateProfile(i, e.clientIdd, function(t) {
                            e.profileData.strivefar_message_read = t.data.strivefar_message_read, "yes" === t.data.strivefar_message_read ? a.isStriveFarMsgRead = !0 : a.isStriveFarMsgRead = !1, a.unreadMessages = a.unreadMessages > 0 ? a.unreadMessages - 1 : 0, e.selectedMessage.new_messages_count = 0, a.$emit("refreshHeader", s)
                        })
                    }
                }, 50), (e.openChat && isMobile() || !isMobile()) && e.scrollToBottom(), angular.forEach(e.selectedMessage.conversations, function(e, t) {
                    e.date && (e.date = new Date(e.date))
                }), e.newMsgSend = !1
            }, e.goToLink = function(e) {
                l.open("https://" + e, "_blank")
            }, e.addDefaultMessage = function() {
                var t = {
                    subscribers: "Welcome to StriveFar",
                    id: {
                        $oid: "welcomemsg"
                    },
                    new_messages_count: a.isStriveFarMsgRead ? 0 : 1,
                    from: "strivefar",
                    creator: "StriveFar",
                    conversations: [{
                        date: null,
                        conversations: [{
                            text: "Welcome to your message center, where you can communicate with your coaches and keep all of your training related communication in one place.",
                            sender_email: "DoNotReply@strivefar.com",
                            sender_id: "welcomemsg",
                            sender_profile_image: null,
                            sender_name: "StriveFar",
                            role: "client"
                        }, {
                            text: "Do you have more than one child? No problem, manage all of your athletes under one account. Add your athletes to StriveFar on the â€œMy Infoâ€ page. Make  sure to upload a photo of each athlete so you can easily identify sessions and coaches by your kids.",
                            sender_email: "DoNotReply@strivefar.com",
                            sender_id: "welcomemsg",
                            sender_profile_image: null,
                            sender_name: "StriveFar",
                            role: "client"
                        }, {
                            text: "Do you have questions on how to use StriveFar effectively? Go to <a https://strivefar.zendesk.com/hc/en-u for help documents, tips, and tricks.",
                            sender_email: "DoNotReply@strivefar.com",
                            sender_id: "welcomemsg",
                            sender_profile_image: null,
                            sender_name: "StriveFar",
                            role: "client"
                        }, {
                            text: "Set your email spam filter to accept emails from <span class='txt-blue'>@strivefar.com</span>",
                            sender_email: "DoNotReply@strivefar.com",
                            sender_id: "welcomemsg",
                            sender_profile_image: null,
                            sender_name: "StriveFar",
                            role: "client"
                        }, {
                            text: "Check out how easy it is to create a public or private group session. Itâ€™s a cost effective way to for your athlete(s) to train with their friends or meet new friends. ",
                            sender_email: "DoNotReply@strivefar.com",
                            sender_id: "welcomemsg",
                            sender_profile_image: null,
                            sender_name: "StriveFar",
                            role: "client"
                        }]
                    }]
                };
                b(e.messages, t.id.$oid) || e.messages.push(t)
            }, e.getMessages = function() {
                g.getClientMessages(c.clientId, function(t) {
                    t.$resolved && 200 === t.status && (e.messages = t.data, e.addDefaultMessage(), e.messages.length > 0 && e.setInboxData(e.messages[0]), 0 === e.messages.length && e.createMessage())
                }, function(e) {
                    console.log(e)
                })
            }, e.messageEmitted = !1, a.$on("clientProfileCallCompleted", function() {
                e.messageEmitted = !0, e.getMessages()
            }), e.isProfileLoaded && e.profileData && !e.messageEmitted && e.getMessages(), e.getAssociatedClients = function() {
                g.getAssociatedClients(c.clientId, function(t) {
                    t.$resolved && 200 === t.status && (e.associatedClients = t.data)
                }, function(e) {
                    console.log(e)
                })
            }, e.getAssociatedClients(), window.onbeforeunload = function() {
                localStorage.setItem("currentStateName", "messages"), angular.isDefined(c.clientId) && localStorage.setItem("clientId", c.clientId)
            }, e.newMsgSend = !1, e.sendMessage = function(t, a) {
                if (e.newMsgSend = !1, angular.isDefined(e.selectedMessage.replyMessage) && "" !== e.selectedMessage.replyMessage && null !== e.selectedMessage.replyMessage)
                    if (e.submitting = !0, "create" === a) {
                        e.newMsgSend = !0;
                        var o = {
                            message: {
                                sender_id: c.clientId,
                                role: "client",
                                to: e.toIds,
                                text: angular.isDefined(e.selectedMessage.replyMessage) ? e.selectedMessage.replyMessage.replace(/\r?\n/g, "<br />") : ""
                            }
                        };
                        f.postMessage(o, function() {
                            e.selectedMessage.replyMessage = null, e.setMessageConfig(), e.submitting = !1
                        }, function(t) {
                            console.log(t), e.submitting = !1
                        })
                    } else {
                        var n = {
                            message: {
                                sender_id: c.clientId,
                                role: "client",
                                text: angular.isDefined(e.selectedMessage.replyMessage) ? e.selectedMessage.replyMessage.replace(/\r?\n/g, "<br />") : ""
                            }
                        };
                        f.updateMessage(t.id.$oid, n, function(t) {
                            t.$resolved && 200 === t.status && (e.updateMessage = !0, e.selectedMessage.replyMessage = null, e.setMessageConfig()), e.submitting = !1
                        }, function(t) {
                            console.log(t), e.submitting = !1
                        })
                    }
            }, e.openChat = !1, e.ac_options_users = {
                suggest: _,
                on_select: function(t) {
                    isItemSelected(e.toIds, t.obj.id) || e.addToRecepients(t.obj), e.selectedRecepient = null, angular.element(".matrix-cell").val(null)
                }
            }, e.createMessage = function(t) {
                "new" === t && (e.newMessageView = !0), e.openChat = !0;
                var a = {
                    subscribers: "New Message",
                    id: {
                        $oid: "new"
                    }
                };
                b(e.messages, a.id.$oid) || e.messages.splice(0, 0, a), e.setInboxData(e.messages[0]), e.setMessageConfig(), e.recepients = [], e.toIds = []
            }, e.stopCreateMessage = function(t) {
                angular.forEach(e.messages, function(t, a) {
                    "new" === t.id.$oid && e.messages.splice(a, 1)
                }), t || e.setInboxData(e.messages[0]), "All Messages" === e.selectedMessageType ? e.setInboxData(e.messages[0]) : e.filterdMessages.length ? e.setInboxData(e.filterdMessages[0]) : e.selectedMessage = "", e.newMsgSend = !1
            }, e.closeInfoMessage = function() {
                angular.element(".dashboard-message-info").hide();
                var t = {
                    client: {
                        message_banner: "no"
                    }
                };
                g.updateProfile(t, e.clientIdd, function() {
                    e.loadClientProfileSummary()
                })
            }, e.addToRecepients = function(t) {
                e.recepients.push(t);
                var a = {
                    receiver_id: t.id,
                    role: t.role
                };
                e.toIds.push(a), e.$$phase || e.$apply()
            }, e.deleteRecepient = function(t) {
                e.recepients.splice(t, 1), e.toIds.splice(t, 1), e.$$phase || e.$apply()
            }, e.openMobMessage = function() {
                e.openChat = !0, angular.element(".dashboard-left").addClass("hide-elements"), angular.element("#dashbroad-wrapper-mob").addClass("open")
            }, e.closeButtonMobile = function() {
                angular.element(".coach-info").removeClass("hide-elements"), angular.element("#profile-menu").removeClass("hide-elements"), s.go(e.baseState + ".sessions")
            }, e.closeButtonMessageMobile = function() {
                e.openChat = !1, angular.element("#dashbroad-wrapper-mob").removeClass("open"), angular.element(".dashboard-left").removeClass("hide-elements")
            }, e.filterMessages = function() {
                e.messages && e.messages.length && e.messages[0].id && "new" === e.messages[0].id.$oid && e.messages.splice(0, 1), e.filterdMessages = [], e.messages.forEach(function(t, a) {
                    "Groups" === e.selectedMessageType && t.group_mailer && e.filterdMessages.push(t), "Individuals" !== e.selectedMessageType || t.group_mailer || e.filterdMessages.push(t), e.messages.length - 1 === a && (e.filterdMessages.length && "All Messages" != e.selectedMessageType && e.setInboxData(e.filterdMessages[0]), "All Messages" === e.selectedMessageType || e.filterdMessages.length || (e.selectedMessage = ""))
                }), "All Messages" === e.selectedMessageType && e.messages.length && e.setInboxData(e.messages[0]), e.$$phase || e.$apply()
            }, e.alignTxtBox = function(e) {
                o(function(t) {
                    "focus" === e ? angular.element("html, body").animate({
                        scrollTop: angular.element(".reply").offset().top - 100
                    }, 1200) : angular.element("html, body").animate({
                        scrollTop: angular.element(".client-dashboard").offset().top - 20
                    }, 1200)
                }, 100)
            }, e.swapMessagesOrder = function() {
                var t = angular.copy(e.messages[0]);
                e.messages[0] = angular.copy(e.messages[1]), e.messages[1] = t
            }, e.createNewMsgObject = function(e) {
                var t = e;
                t.id = {
                    $oid: e.message_id
                };
                var a = {
                    date: new Date(e.conversation.date),
                    conversations: [e.conversation]
                };
                return t.conversations = [a], t
            }, e.scrollToLatest = function() {
                var e;
                e = isMobile() ? "#new-msg-list" : "#desktop-custom-scroll-main",
                    angular.element(e).animate({
                        scrollTop: 0
                    }, 200)
            }, a.pusher && (a.subscribedchannel || a.$emit("subscribeToChannel"), a.subscribedchannel.bind("new_message", function(t) {
                e.pusherMsgAdded = !1, e.newChatOpen = !1;
                var o = 0;
                if (e.messages) e.isMsgExisted = !1, e.messageTemp = "", angular.forEach(e.messages, function(n, s) {
                    if (e.pusherMsgAdded || n.id.$oid !== t.message_id || angular.forEach(n.conversations, function(a, o) {
                            if (!e.pusherMsgAdded && new Date(a.date).getTime() === new Date(t.conversation.date).getTime()) {
                                a.conversations.push(t.conversation), n.new_messages_count = t.new_messages_count, e.pusherMsgAdded = !0, e.isMsgExisted = !0, e.selectedMessage && e.selectedMessage.id.$oid === t.message_id && (e.messageTemp = n);
                                var i = n;
                                e.messages.splice(s, 1), e.messages.unshift(i), e.selectedMessage && "new" === e.selectedMessage.id.$oid && e.swapMessagesOrder()
                            }
                            if (!e.pusherMsgAdded && n.conversations.length - 1 === o) {
                                var r = {
                                    date: new Date(t.conversation.date),
                                    conversations: [t.conversation]
                                };
                                n.conversations.push(r), e.pusherMsgAdded = !0
                            }
                        }), o += n.new_messages_count, e.messages.length - 1 === s) {
                        if (!e.pusherMsgAdded) {
                            var i = e.createNewMsgObject(t);
                            e.messages.unshift(i), e.selectedMessage && "new" === e.selectedMessage.id.$oid && e.swapMessagesOrder(), o += t.new_messages_count, e.pusherMsgAdded = !0, e.newChatOpen = !0
                        }
                        e.isMsgExisted && e.messageTemp ? e.setInboxData(e.messageTemp, !0) : e.newMsgSend && e.stopCreateMessage(t.new_messages_count), e.newChatOpen && "All Messages" !== e.selectedMessageType && e.filterMessages(), a.unreadMessages = a.isStriveFarMsgRead ? o : o + 1, 0 === t.new_messages_count && e.scrollToLatest()
                    }
                });
                else {
                    var n = e.createNewMsgObject(t);
                    e.messages.push(n), a.unreadMessages = a.isStriveFarMsgRead ? t.new_messages_count : t.new_messages_count + 1, e.pusherMsgAdded = !0, e.newMsgSend && e.stopCreateMessage(t.new_messages_count), "All Messages" !== e.selectedMessageType && e.filterMessages()
                }
            })), e.$on("$destroy", function() {
                a.subscribedchannel && a.subscribedchannel.unbind("new_message")
            })
        };
        e.$inject = ["$scope", "appConfig", "$rootScope", "$timeout", "AlertService", "$state", "uiCalendarConfig", "$compile", "$stateParams", "$window", "Coachco_CommonService", "SessionService", "UploadPhotoService", "urlConfig", "CreateMessageService", "ClientProfileInterfaceService", "CommonAPIInterfaceService", "Utils", "$sce", "AuthFactory", "$location"], angular.module("Coachco").controller("ClientProfileMessagesController", e)
    }(),
    function(e) {
        var t = function(e, t, a, o, n) {
            e.clientData = n, e.close = function() {
                o.modalClose(t)
            }, e.writeNotes = function() {
                var n = {
                    client: {
                        notes: e.clientData.notes
                    }
                };
                a.updateProfile(n, e.clientData.id, function(a) {
                    if (a.$resolved && 200 === a.status) {
                        var n = {
                            status: "success",
                            notes: e.clientData.notes
                        };
                        o.modalDone(t, n)
                    }
                }, function(e) {
                    console.log(e), o.modalDone(t, "error")
                })
            }
        };
        t.$inject = ["$scope", "$uibModalInstance", "ClientProfileInterfaceService", "Coachco_CommonService", "clientData"], e.module("Coachco").controller("clientNotesController", t)
    }(angular),
    function(e) {
        var t = function(t, a, o, n) {
            t.payments = n, t.submitted = !1, t.close = function() {
                o.modalClose(a)
            }, t.removeclass = function() {
                e.element("body").removeClass("loader")
            }, t.done = function(e) {
                o.modalDone(a, e)
            }
        };
        t.$inject = ["$scope", "$uibModalInstance", "Coachco_CommonService", "payments"], e.module("Coachco").controller("clientPaymentsController", t)
    }(angular),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d, u, m, h, p, g, f) {
            e.$parent.currentState = s.current.name, e.sessionTypes = t.sessionTypes, e.currentTZ = jstz().timezone_name, e.baseUrl = h.baseUrl, angular.isDefined(localStorage.getItem("sessionsTypeFilter")) && null !== localStorage.getItem("sessionsTypeFilter") ? e.selectedSessionType = localStorage.getItem("sessionsTypeFilter") : e.selectedSessionType = "All Sessions", angular.isDefined(localStorage.getItem("sessionsAthleteFilter")) && null !== localStorage.getItem("sessionsAthleteFilter") ? e.selectedAthlete = localStorage.getItem("sessionsAthleteFilter") : e.selectedAthlete = "All Athletes", e.initValues = function() {
                e.sessionIndex = 0, e.upcomingIndex = 0, e.completedIndex = 0, e.cancelledIndex = 0, e.sessionsCount = 0, e.completedCount = 0, e.upcomingCount = 0, e.cancelledCount = 0, e.filteredSessions = [], e.upcomingSessions = [], e.completedSessions = [], e.cancelledSessions = []
            }, e.initValues(), e.tempFilteredSessions = [], e.tempUpcomingSessions = [], e.tempCompletedSessions = [], e.tempCancelledSessions = [], e.tempfilteredUpcomingSessions = [], e.tempfilteredCompletedSessions = [], e.tempfilteredCancelledSessions = [], e.closeButtonMobile = function() {
                e.$parent.sessionsTab = !1, angular.element(".coach-info").removeClass("hide-elements"), angular.element("#profile-menu").removeClass("hide-elements"), s.go(e.baseState + ".sessions")
            }, e.createSessionsArray = function() {
                e.activeAthlete = "All Athletes" !== e.selectedAthlete ? e.selectedAthlete : "", e.activeType = "All Sessions" !== e.selectedSessionType ? e.selectedSessionType : "", e.tempFilteredSessions = angular.copy(g("filter")(e.clientSessions.action_needed, e.activeAthlete)), "" === e.activeType && "" === e.activeAthlete ? (e.tempfilteredUpcomingSessions = angular.copy(e.tempUpcomingSessions), e.tempfilteredCompletedSessions = angular.copy(e.tempCompletedSessions), e.tempfilteredCancelledSessions = angular.copy(e.tempCancelledSessions)) : (e.tempfilteredUpcomingSessions = angular.copy(g("filter")(e.tempUpcomingSessions, e.activeAthlete)), e.tempfilteredCompletedSessions = angular.copy(g("filter")(e.tempCompletedSessions, e.activeAthlete)), e.tempfilteredCancelledSessions = angular.copy(g("filter")(e.tempCancelledSessions, e.activeAthlete)))
            }, e.setCategoriseSessions = function(t) {
                t && (t.appendedSession = !1), e.clientSessions && e.clientSessions.sessions.length && (e.clientSessions.sessions = g("orderBy")(e.clientSessions.sessions, "date_time", !1), angular.forEach(e.clientSessions.sessions, function(t, a) {
                    "Upcoming" === t.status ? e.tempUpcomingSessions.push(t) : "Completed" === t.status ? e.tempCompletedSessions.push(t) : "Cancelled" === t.status && e.tempCancelledSessions.push(t), e.clientSessions.sessions.length - 1 === a && e.createSessionsArray()
                }))
            }, e.getSessions = function(t) {
                e.clientSessions && e.clientSessions.action_needed.length && (e.activeAthlete = "All Athletes" !== e.selectedAthlete ? e.selectedAthlete : "", e.tempFilteredSessions = angular.copy(g("filter")(e.clientSessions.action_needed, e.activeAthlete))), e.setCategoriseSessions(t), e.loadSessions(), e.loadCalendar()
            }, e.filterChange = function() {
                e.initValues(), e.createSessionsArray(), e.loadSessions()
            }, a.$on("sessionCallCompleted", function(t, a) {
                e.initValues(), e.tempFilteredSessions = [], e.tempUpcomingSessions = [], e.tempCompletedSessions = [], e.tempCancelledSessions = [], e.getSessions(a)
            }), e.setSessionTypeFilter = function(t) {
                e.selectedSessionType = t, localStorage.setItem("sessionsTypeFilter", e.selectedSessionType), e.filterChange()
            }, e.setAthleteFilter = function(t) {
                e.selectedAthlete = t, localStorage.setItem("sessionsAthleteFilter", e.selectedAthlete), e.filterChange()
            }, e.openPaymentInfo = function(e) {
                var t = "/partials/clientProfile/views/modal/clientProfile.paymentsInfo.modal.html",
                    a = "model-createmessage",
                    o = "clientPaymentsController";
                e.payments.status = e.status, d.modalOpen(t, a, o, e.payments)
            }, e.showTooltipPayment = function(e, t) {
                var a;
                a = "Upcoming" === e.status || "Completed" === e.status || "Cancelled" === e.status ? "#payment-tooltip-" + e.status + "-" + t : "#payment-tooltip-" + t, angular.element(a).addClass("show-tooltip")
            }, e.hideTooltipPayment = function(e, t) {
                var a;
                a = "Upcoming" === e.status || "Completed" === e.status || "Cancelled" === e.status ? "#payment-tooltip-" + e.status + "-" + t : "#payment-tooltip-" + t, angular.element(a).removeClass("show-tooltip")
            }, e.showTooltipAthletes = function(e, t) {
                var a;
                "group" !== e.type && "creategroup" !== e.type && "joingroup" !== e.type && "Group" !== e.type || (a = "Upcoming" === e.status || "Completed" === e.status || "Cancelled" === e.status ? "#athlete-tooltip-" + e.status + "-" + t : "#athlete-tooltip-" + t, angular.element(a).addClass("show-tooltip"))
            }, e.hideTooltipAthletes = function(e, t) {
                var a;
                "group" !== e.type && "creategroup" !== e.type && "joingroup" !== e.type && "Group" !== e.type || (a = "Upcoming" === e.status || "Completed" === e.status || "Cancelled" === e.status ? "#athlete-tooltip-" + e.status + "-" + t : "#athlete-tooltip-" + t, angular.element(a).removeClass("show-tooltip"))
            }, window.onbeforeunload = function() {
                localStorage.setItem("currentStateName", "sessions"), angular.isDefined(c.clientId) && localStorage.setItem("clientId", c.clientId)
            }, e.loadPaymentInfo = function(t) {
                p.getPaymentInfo(t.bookingId, t.paymentId, function(t) {
                    t.$resolved && 200 === t.status && (e.paymentInfo = t.data)
                })
            }, e.setAthletes = function() {
                angular.isDefined(e.athletes) || e.fetchAthletes()
            }, a.$on("athletesCallCompleted", function() {
                e.setAthletes()
            }), e.getSessionFeeTotal = function(t) {
                var a = 0;
                return angular.isDefined(e.paymentInfo) && e.paymentInfo.sessionPrices.forEach(function(e) {
                    t.bookedSessionId === e.bookedSessionId && (a += e.sessionPrice)
                }), a
            }, e.openChangeLocation = function(e) {
                window.open("http://maps.google.com?q=" + e, "_blank")
            }, e.loadActionRequiredSession = function() {
                e.sessionIndex ? (e.remainingSessions = e.tempFilteredSessions.length - e.sessionsCount, 0 !== e.remainingSessions && (e.remainingSessions / 10 >= 1 ? e.sessionIndex = 10 : e.sessionIndex = e.remainingSessions % 10)) : (e.intialLoad = !0, e.sessionIndex = e.tempFilteredSessions.length <= 10 ? e.tempFilteredSessions.length : 10);
                for (var t = e.sessionsCount; t < e.sessionsCount + e.sessionIndex; t++) e.setLocationAddress(e.tempFilteredSessions[t], t), e.tempFilteredSessions[t].selectedActivity = findActivityByName(e.activities, e.tempFilteredSessions[t].sports), e.filteredSessions.push(e.tempFilteredSessions[t]), e.sessionsCount + e.sessionIndex - 1 === t && e.filteredSessions.length < 10 && ("Upcoming" === e.activeType || "" === e.activeType && e.tempfilteredUpcomingSessions.length ? e.loadUpcomingSession() : "Completed" === e.activeType || "" === e.activeType && e.tempfilteredCompletedSessions.length ? e.loadCompletedSession() : "Cancelled" === e.activeType && e.loadCancelledSession());
                e.sessionsCount = e.sessionsCount + e.sessionIndex
            }, e.loadUpcomingSession = function() {
                e.upcomingIndex ? (e.remainingUpSessions = e.tempfilteredUpcomingSessions.length - e.upcomingCount, 0 !== e.remainingUpSessions && (e.remainingUpSessions / 10 >= 1 ? e.upcomingIndex = 10 : e.upcomingIndex = e.remainingUpSessions % 10)) : e.upcomingIndex = e.tempfilteredUpcomingSessions.length <= 10 ? e.tempfilteredUpcomingSessions.length : 10;
                for (var t = e.upcomingCount; t < e.upcomingCount + e.upcomingIndex; t++) e.setLocationAddress(e.tempfilteredUpcomingSessions[t], t), e.tempfilteredUpcomingSessions[t].selectedActivity = findActivityByName(e.activities, e.tempfilteredUpcomingSessions[t].sports), e.upcomingSessions.push(e.tempfilteredUpcomingSessions[t]), ("" === e.activeType || "Completed" === e.activeType) && e.upcomingCount + e.upcomingIndex - 1 === t && e.upcomingSessions.length + e.filteredSessions.length < 10 && e.tempfilteredCompletedSessions.length && e.loadCompletedSession();
                e.upcomingCount = e.upcomingCount + e.upcomingIndex
            }, e.loadCompletedSession = function() {
                e.completedIndex ? (e.remainingCoSessions = e.tempfilteredCompletedSessions.length - e.completedCount, 0 !== e.remainingCoSessions && (e.remainingCoSessions / 10 >= 1 ? e.completedIndex = 10 : e.completedIndex = e.remainingCoSessions % 10)) : e.completedIndex = e.tempfilteredCompletedSessions.length <= 10 ? e.tempfilteredCompletedSessions.length : 10;
                for (var t = e.completedCount; t < e.completedCount + e.completedIndex; t++) e.setLocationAddress(e.tempfilteredCompletedSessions[t], t), e.tempfilteredCompletedSessions[t].selectedActivity = findActivityByName(e.activities, e.tempfilteredCompletedSessions[t].sports), e.completedSessions.push(e.tempfilteredCompletedSessions[t]), "Cancelled" === e.activeType && e.completedCount + e.completedIndex - 1 === t && e.upcomingSessions.length + e.completedSessions.length + e.filteredSessions.length < 10 && e.loadCancelledSession();
                e.completedCount = e.completedCount + e.completedIndex
            }, e.loadCancelledSession = function() {
                e.cancelledIndex ? (e.remainingCaSessions = e.tempfilteredCancelledSessions.length - e.cancelledCount, 0 !== e.remainingCaSessions && (e.remainingCaSessions / 10 >= 1 ? e.cancelledIndex = 10 : e.cancelledIndex = e.remainingCaSessions % 10)) : e.cancelledIndex = e.tempfilteredCancelledSessions.length <= 10 ? e.tempfilteredCancelledSessions.length : 10;
                for (var t = e.cancelledCount; t < e.cancelledCount + e.cancelledIndex; t++) e.setLocationAddress(e.tempfilteredCancelledSessions[t], t), e.tempfilteredCancelledSessions[t].selectedActivity = findActivityByName(e.activities, e.tempfilteredCancelledSessions[t].sports), e.cancelledSessions.push(e.tempfilteredCancelledSessions[t]);
                e.cancelledCount = e.cancelledCount + e.cancelledIndex
            }, e.loadSessions = function() {
                e.hideSessionLoader && !e.sessionsTab || (e.tabSwitch && (e.setCategoriseSessions(), e.tabSwitch = !1), e.clientSessions && (e.clientSessions.action_needed.length || e.clientSessions.sessions.length) && (e.sessionsCount < e.tempFilteredSessions.length ? e.loadActionRequiredSession() : (e.intialLoad = !1, e.tempfilteredUpcomingSessions.length && e.upcomingCount < e.tempfilteredUpcomingSessions.length && ("" === e.activeType || "Upcoming" === e.activeType) ? e.loadUpcomingSession() : e.tempfilteredCompletedSessions.length && e.completedCount < e.tempfilteredCompletedSessions.length && ("" === e.activeType || "Completed" === e.activeType) ? e.loadCompletedSession() : e.tempfilteredCancelledSessions.length && e.cancelledCount < e.tempfilteredCancelledSessions.length && "Cancelled" === e.activeType && e.loadCancelledSession()), "" === e.activeType && !e.tempFilteredSessions.length && !e.tempfilteredUpcomingSessions.length && !e.tempfilteredCompletedSessions.length && e.cancelledCount < e.tempfilteredCancelledSessions.length && e.loadCancelledSession()))
            }, a.pusher && a.subscribedchannel && a.subscribedchannel.bind("new-training-session", function(t) {
                if (e.athleteFound = !1, !e.athletesFetch)
                    if (e.athletes.length) {
                        var o = 0;
                        angular.forEach(t.athletes, function(a, n) {
                            angular.forEach(e.athletes, function(e, t) {
                                a.name === e.name && o++
                            }), n === t.athletes.length - 1 && o !== t.athletes.length && e.fetchAthletes()
                        })
                    } else e.fetchAthletes();
                e.addedSession = !1, e.sessionsLoader || (e.clientSessions && e.clientSessions.sessions.length ? angular.forEach(e.clientSessions.sessions, function(o, n) {
                    o.coachTrainingSessionId == t.coachTrainingSessionId && (angular.forEach(t, function(e, a) {
                        o[a] = t[a]
                    }), e.addedSession = !0, a.$emit("sessionCallCompleted", t)), e.clientSessions.sessions.length - 1 !== n || e.addedSession || (t.duration = (new Date(t.end_time) - new Date(t.start_time)) / 36e5, e.clientSessions.sessions.push(t), a.$emit("sessionCallCompleted", t))
                }) : e.clientSessions && (t.duration = (new Date(t.end_time) - new Date(t.start_time)) / 36e5, e.clientSessions.sessions[0] = t, a.$emit("sessionCallCompleted")), console.log(t))
            }), e.$on("$destroy", function() {
                a.subscribedchannel && a.subscribedchannel.unbind("new-training-session")
            })
        };
        e.$inject = ["$scope", "appConfig", "$rootScope", "$timeout", "AlertService", "$state", "uiCalendarConfig", "$compile", "$stateParams", "$window", "Coachco_CommonService", "SessionService", "UploadPhotoService", "urlConfig", "ClientProfileInterfaceService", "$filter", "AuthFactory"], angular.module("Coachco").controller("ClientProfileSessionsController", e)
    }(),
    function(e) {
        var t = function(t, a, o) {
            t.submitted = !1, t.close = function() {
                o.modalClose(a)
            }, t.removeclass = function() {
                e.element("body").removeClass("loader")
            }, t.done = function(e) {
                o.modalDone(a, e)
            }
        };
        t.$inject = ["$scope", "$uibModalInstance", "Coachco_CommonService"], e.module("Coachco").controller("clientProfileModalController", t)
    }(angular),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d, u, m, h, p, g, f, v, S, C, y, _, b, w, I, P, A, D, T) {
            e.currentCoach = [];
            var M = JSON.parse(sessionStorage.getItem("stateParams"));
            angular.isDefined(M) && null !== M && (("coach" === M.searchType && M.searchParam === c.searchParam || "club" === M.searchType && M.searchParam === c.searchParam || "zip" === M.searchType && M.zip === c.zip) && "" !== M.sport && null !== M.sport && M.sport === c.sport && (c = JSON.parse(sessionStorage.getItem("stateParams")), sessionStorage.removeItem("stateParams")), M.coachId && (c = JSON.parse(sessionStorage.getItem("stateParams")), sessionStorage.removeItem("stateParams")), r.params = {}), null === c.searchType && null === c.zip && null === c.name && null === c.club && (parseInt(c.searchParam) ? c.zip = c.searchParam : c.searchParam && (c.name = separateHyphenedString(c.searchParam))), r.params = c, c.sport = separateHyphenedString(c.sport), e.changeTo = "Hungarian", e.individualEvents = {}, e.individualCalEvents = {}, e.individualEventSources = {}, e.modelView = !0, e.bookCoachSession = !1, e.groupEvents = {}, e.groupCalEvents = {}, e.groupEventSources = {}, e.events = {}, e.calEvents = {}, e.eventSources = {}, e.imagePath = s.imagePath, e.cartItemSessionTimeOut = s.cartItemSessionTimeOut, e.checkOutSessionTimeOut = s.checkOutSessionTimeOut, e.maxCartItemCount = s.maxCartItemCount, e.nameArray = [], e.upperArray = [], e.lowerArray = [], e.calArray = [], e.trainingLocations = [], e.calendarLoader = [], e.cartTimerArray = [], e.topCount = 0, e.bottomCount = 0, e.stopCheckOut = 0, e.switchCalendars = !1, e.viewCoachProfile = !1, e.searchVal = "", e.gender = "", e.sortMob = "Distance", e.sortSelected = "Distance", r.activeMenu = "Individual", e.isClient = b.isClient(), e.isCoach = b.isCoach(), e.userId = b.isClient() ? b.getParentId() : b.getCoachId(), r.coachFromPage && !r.navigatedBack || (c.fromPage = ""), localStorage.setItem("coachSearchResults", JSON.stringify(c)), e.coachSearchList = [], e.searchType = c.searchType, angular.isDefined(c.zip) && null !== c.zip && (e.currentZip = c.zip, r.zip = c.zip, e.searchVal = c.zip, angular.element("#zip-static").text(c.zip)), angular.isDefined(c.name) && null !== c.name && (e.currentName = c.name, r.name = c.name, e.searchVal = c.name, angular.element("#name-static").text(c.name)), angular.isDefined(c.club) && null !== c.club && (e.currentName = c.club, r.name = c.club, e.searchVal = c.club, angular.element("#name-static").text(c.club)), Boolean(localStorage.getItem("BookCoach")) && (e.bookCoachSession = !0, e.currentPage = "bookingSession"), e.sorting = s.sortParams, e.days = s.days, e.month = s.monthLongl, e.sortingMob = s.sortParamsMob, e.href = "coachSearch", e.month = s.month, e.cartItemExpiryTime = [], e.sortValue = "", e.cartItemCount = 0, e.coachSet = 0, e.coachCount = 0, e.pushCount = 0, r.checkedOut = !1, e.isMobile = isMobile(), e.currentTime = new Date, e.rescheduleSession = Boolean(localStorage.getItem("rescheduleSession")), e.rescheduleSession && (r.activeMenu = "Setavailavility"), e.hyphenSeparated = function(e) {
                return e ? hyphenSeparated(e) : void 0
            }, e.openWelcomePopup = function() {
                var e = "/partials/coach/views/modal/coach.welcomePopup.html",
                    t = "model-sessioncreate model-sessionreschedule",
                    a = "ModalController";
                C.modalOpen(e, t, a, null, function(e) {
                    "ok" === e.$$state.value && localStorage.setItem("welcome", JSON.stringify(!0))
                })
            };
            var k = angular.element(".main-filter"),
                E = angular.element(".search-welcome-popup-background");
            e.setWelcomePopupShown = function() {
                e.welcomeMessage = !0, localStorage.setItem("welcome", JSON.stringify(!0)), E.css("padding-top", 0), E.css("padding-bottom", 0), k.css("z-index", 3)
            }, e.welcomeMessage = Boolean(localStorage.getItem("welcome")), $(document).ready(function() {
                if (e.messageCoachAutoPopUp = JSON.parse(localStorage.getItem("messageCoach")), e.messageCoachAutoPopUp ? (d(function() {
                        e.messageCoach(e.messageCoachAutoPopUp)
                    }, 100), localStorage.removeItem("messageCoach")) : localStorage.getItem("requestSession") && d(function() {
                        e.requestCoachSession(JSON.parse(localStorage.getItem("requestSession")))
                    }, 100), !e.welcomeMessage && !isMobile()) {
                    var t = (screen.height - 635) / 2;
                    E.css("padding-top", t), E.css("padding-bottom", t), k.css("z-index", -1)
                }
            }), window.onbeforeunload = function() {
                sessionStorage.setItem("stateParams", JSON.stringify(c))
            }, e.isLoggedIn = function() {
                return b.isLoggedIn()
            }, e.getGetOrdinal = function(e) {
                var t = ["th", "st", "nd", "rd"],
                    a = e % 100;
                return e + (t[(a - 20) % 10] || t[a] || t[0])
            }, e.logout = function() {
                b.logout(), m.go("home")
            }, e.changeClub = function() {
                e.changeSorting(e.sortSelected)
            }, e.loadCoachProfileSummary = function(t) {
                I.getAccountDetails(t, function(t) {
                    t.$resolved && 200 === t.status ? (null !== t.data && angular.isDefined(t.data) && t.data !== {} && (t.data.width = t.data.rating / 5 * 100 + "%", e.coachSearchList.push(t.data), e.pushCount = e.coachSearchList.length, t.data.selectedActivity = findActivityByName(e.activities, t.data.activity), t.data.selectedClub = findClubByID(e.clubs, t.data.club_id), e.selectedActivity = findActivityByName(e.activities, t.data.activity), e.setCoachProfileInfo(e.coachSearchList[0]), e.loadMore(), addRichSnippetScript(t.data.coach_name, t.data.rating, t.data.reviews.length)), window.prerenderReady = !0, e.showLoader = !1) : (window.prerenderReady = !0, e.showLoader = !1)
                })
            }, e.closeButton = function(e) {
                e ? e.showModal = !1 : angular.element(".right-popup").removeClass("in")
            }, e.changeSorting = function(t) {
                if (e.tempSourceArray = [], e.sortSelected = t, e.closeButton(), document.querySelector(".fc-scroller")) var a = document.querySelector(".fc-scroller").scrollTop;
                switch (e.sortSelected) {
                    case "Price":
                        e.sortValue = "pricing.individual_with_service_fee", e.gender = "";
                        break;
                    case "Distance":
                        e.sortValue = "distance", e.gender = "";
                        break;
                    case "Experience":
                        e.sortValue = "-credentials[0].years_coaching", e.gender = "";
                        break;
                    case "Male":
                        e.filterValue = "male", e.sortValue = null, e.gender = "Male";
                        break;
                    case "Female":
                        e.filterValue = "female", e.sortValue = null, e.gender = "Female";
                        break;
                    case "Goalie":
                        e.sortValue = null, e.filterValue = "Goalie", e.gender = "";
                    case "Shooting":
                        e.sortValue = null, e.filterValue = "Shooting", e.gender = ""
                }
                e.nameArray = [], e.filterArray = [], e.coachSearchList = [], angular.forEach(e.sortedByRatingList, function(t) {
                    e.filterByGender(t) && e.coachSearchList.push(t)
                }), e.pushCount = e.coachSearchList.length, e.coachCount = 0, e.events = [], e.calEvents = [], e.eventSources = [], "Rating" === e.sortSelected ? (e.sortValue = null, e.loadMore("initial")) : "Male" === e.sortSelected || "Female" === e.sortSelected || "Goalie" === e.sortSelected || "Shooting" === e.sortSelected ? (e.coachPosition = 0, angular.forEach(e.coachSearchList, function(t, a) {
                    if (e.filterByGender(t)) {
                        e.filterArray.push(t);
                        var o = angular.copy(e.coachSearchList[a]);
                        e.coachSearchList[a] = angular.copy(e.coachSearchList[e.coachPosition]), e.coachSearchList[e.coachPosition] = angular.copy(o), e.loadSession(r.activeMenu), e.coachPosition += 1
                    }
                    e.coachSearchList.length - 1 === a && (e.pushCount = e.coachSearchList.length, e.coachCount = 0, e.loadMore("initial"))
                })) : (e.coachSearchList = T("orderBy")(e.coachSearchList, e.sortValue), e.loadMore("initial")), d(function() {
                    var e = document.querySelectorAll(".fc-scroller");
                    if (e.length > 0)
                        for (var t = 0; t < e.length; t++) e[t].scrollTop = a
                }, 100)
            }, e.updateMeta = function() {
                var e = separateHyphenedString(c.sport);
                angular.isDefined(c.zip) && null !== c.zip ? (r.ngTitle = e.capitalize() + " Coaches " + c.zip + " | StriveFar", r.ngDescription = "Book top private " + e + " coaches for personal training and one on lessons in " + c.zip + " club. Professional " + e + " coaches for one on one lessons.", r.ngKeywords = e + " lessons, best " + e + " lessons, " + e + " lessons in " + c.zip + ", " + e + " classes, " + e + " lessons") : angular.isDefined(c.name) && null !== c.name ? (r.ngTitle = c.name.capitalize() + ", Private " + e + " Coach | StriveFar", r.ngDescription = c.name.capitalize() + " is a private " + e.capitalize() + " coach. Book " + c.name.capitalize() + " online for personal one on one lessons and trainings.", r.ngKeywords = e + " lessons, best " + e + " lessons, " + e + " lessons with " + c.name + ", " + e + " classes, " + e + " lessons") : angular.isDefined(c.club) && null !== c.club && (r.ngTitle = "Private " + e.capitalize() + " Coaches, " + c.club.capitalize() + " | StriveFar", r.ngDescription = "Book top private " + e.capitalize() + " coaches for personal training and one on lessons in " + c.club + " club. Professional " + e.capitalize() + " coaches for one on one lessons.", r.ngKeywords = e + " lessons, best " + e + " lessons, " + e + " lessons with " + c.club + ", " + e + " classes, " + e + " lessons")
            }, e.init = function(t) {
                e.showLoader = !0, e.stars = [];
                for (var a = 0; a < 5; a++) e.stars.push({});
                angular.isUndefined(c.coachId) || null === c.coachId ? (e.singleCoach = !1, angular.element("#sports-static").text(c.sport), r.sport = c.sport, i.getCoachSearchList(e.searchVal, c.sport, c.searchType).success(function(t) {
                    t.length > 0 ? (1 === t.length && (e.singleCoach = !0, e.setCoachProfileInfo(t[0]), addRichSnippetScript(t[0].coach_name, t[0].rating, t[0].reviews.length)), t.forEach(function(t) {
                        t.width = t.rating / 5 * 100 + "%", t.selectedActivity = findActivityByName(e.activities, t.activity), t.selectedClub = findClubByID(e.clubs, t.club_id)
                    }), e.sortedByRatingList = angular.copy(t), e.coachSearchList = T("orderBy")(t, "distance"), e.coachSearchList.length > 0 ? (e.pushCount = e.coachSearchList.length, e.loadMore("initial")) : (window.prerenderReady = !0, e.showLoader = !1), r.$emit("refreshHeader"), e.updateMeta()) : (window.prerenderReady = !0, e.showLoader = !1, parseInt(e.searchVal) || null !== c.searchType || null !== c.club || (c.searchParam && (e.searchVal = separateHyphenedString(c.searchParam)), c.searchType = "club", c.club = e.searchVal, c.name = null, e.currentName = c.club, r.name = c.club, e.searchVal = c.club, angular.element("#name-static").text(c.club), e.init()))
                })) : (e.singleCoach = !0, e.coachSearchList = [], e.loadCoachProfileSummary(c.coachId), r.$emit("refreshHeader"))
            }, e.isMobile = function() {
                return isMobile()
            }, e.filterByGender = function(t) {
                return angular.isDefined(e.selectedClub) && null !== e.selectedClub ? "Male" === e.sortSelected || "Female" === e.sortSelected ? angular.isDefined(e.gender) && null !== e.gender ? t.profile.gender === e.gender && e.selectedClub._id.$oid === t.club_id : e.selectedClub._id.$oid === t.club_id : "Goalie" === e.sortSelected ? t.credentials[0].position.indexOf(e.sortSelected) > -1 && e.selectedClub._id.$oid === t.club_id : e.selectedClub._id.$oid === t.club_id : "Male" === e.sortSelected || "Female" === e.sortSelected ? !angular.isDefined(e.gender) || null === e.gender || t.profile.gender === e.gender : "Goalie" !== e.sortSelected || t.credentials[0].position.indexOf(e.sortSelected) > -1
            }, e.initial = !0, e.loadMore = function(t) {
                if (e.coachSearchList) {
                    var a, o;
                    if (e.coachSearchList.length >= 1 && e.pushCount > 0) {
                        e.filterLength, "Male" === e.sortSelected || "Female" === e.sortSelected || "Goalie" === e.sortSelected || "Shooting" === e.sortSelected ? e.filterLength = e.filterArray.length : e.filterLength = e.coachSearchList.length, o = "initial" === t ? 1 === e.filterLength ? 1 : 4 === e.filterLength ? e.filterLength - 1 : e.filterLength < 4 ? e.filterLength : 3 : 1;
                        for (var n = e.coachCount; n < e.coachCount + o; n++) a = e.coachSearchList[n], e.nameArray.push(a), "Rating" !== e.sortSelected && (e.nameArray = T("orderBy")(e.nameArray, e.sortValue)), e.calArray.push(n), e.loadSession(r.activeMenu);
                        "initial" === t ? (e.coachCount = e.coachCount + o, e.pushCount = e.pushCount - o) : (e.coachCount += 1, e.pushCount -= 1)
                    }
                    e.switchCalendars = !1, e.initial = !1
                }
            }, e.fetchActivityDetails = function() {
                e.activities = [], a.getCoachActivities(function(t) {
                    t.$resolved && 200 === t.status && t.data.length > 0 && (e.activities = t.data, e.selectedActivity = findActivityByName(e.activities, c.sport))
                }, function(e) {
                    var a = "Error!",
                        o = "Email " + e.statusText;
                    t.showAlert(a, o)
                })
            }, e.fetchActivityDetails(), e.fetchClubs = function() {
                e.clubs = [], o.getCoachClubs(c.sport, !1, function(t) {
                    t.$resolved && 200 === t.status && t.data.length > 0 && (e.clubs = t.data, "club" === c.searchType && angular.isDefined(c.club) && null !== c.club && (e.selectedClub = findClubByName(e.clubs, c.club)))
                }, function(e) {
                    var a = "Error!",
                        o = "Email " + e.statusText;
                    t.showAlert(a, o)
                })
            }, e.fetchClubs(), e.showGroupInfoTooltip = function(e) {
                angular.element("#how-grop-wrk-block-group-size-" + e).removeClass("hide")
            }, e.hideGroupInfoTooltip = function(e) {
                angular.element("#how-grop-wrk-block-group-size-" + e).addClass("hide")
            }, e.setRequestReviewOverlay = function(t, a) {
                if (isMobile()) {
                    parseInt(t) ? e.setMobileCalendarTitle(t) : e.setMobileCalendarTitle(0);
                    var o = T("date")(new Date(a), "MM/dd/yyyy"),
                        n = T("filter")(e.eventSources[e.currentCoach[0].id.$oid][0].events, {
                            date: o
                        });
                    n.length ? e.currentCoach[0].requestSession = !1 : e.currentCoach[0].requestSession = !0
                } else {
                    var s = e.eventSources[e.nameArray[t].id.$oid][0].events,
                        i = T("dateRange")(s, a);
                    i.length ? e.nameArray[t].requestSession = !1 : e.nameArray[t].requestSession = !0
                }
                e.$$phase || e.$apply()
            }, e.removePrivateGroups = function(e, t, a) {
                "Join a Group" === r.activeMenu && t.group_type && "Private (Invitation Only)" === t.group_type && b.isLoggedIn() ? (t.emails && "" !== t.emails || e.splice(a, 1), t.emails && t.emails.split(",").indexOf(b.getUserEmail()) === -1 && e.splice(a, 1)) : "Join a Group" === r.activeMenu && t.group_type && "Private (Invitation Only)" === t.group_type && !b.isLoggedIn() && e.splice(a, 1)
            }, e.realtimeUpdateEvents = function(t, a, o) {
                var n = findObjectByKeyValue(t, "$id", o.key);
                if ("child_changed" === o.event) {
                    var s = getItemIndex(e.nameArray, a);
                    n && ("reserved" !== n.filter && "pending" !== n.status && "Join a Group" !== r.activeMenu && "booked" !== n.status || "join-group" === n.filter && n.joinGroupStatus && "Join a Group" === r.activeMenu && ("pending" === n.status || "booked" === n.status)) && $("#cal-" + s).fullCalendar("updateEvent", n), !n || n.price_type && "custom" === n.price_type || (e.nameArray[s].pricing.group_with_service_fee = n.groupPrice, e.nameArray[s].pricing.individual_with_service_fee = n.individualPrice, e.nameArray[s].coach_name = n.coachName)
                } else "child_added" === o.event && n && (n.stick = !0, e.removePrivateGroups(t, n, getItemIndexInList(t, "$id", o.key)))
            }, e.loadSession = function() {
                if ($(window).width() > 768 && !isMobile() && angular.forEach(e.nameArray, function(t) {
                        "Individual" === r.activeMenu || "Create a Group" === r.activeMenu ? v.getIndividualCoachSessions(t, function(a, o) {
                            o.forEach(function(e) {
                                e.stick = !0
                            }), e.removePastSessions(o, t.booking_threshold), d(function() {
                                e.events[t.id.$oid] = o, e.calEvents[t.id.$oid] = {
                                    events: e.events[t.id.$oid]
                                }, e.eventSources[t.id.$oid] = [e.calEvents[t.id.$oid]], e.eventSources[t.id.$oid][0].events.$watch(function(a) {
                                    e.realtimeUpdateEvents(e.eventSources[t.id.$oid][0].events, t.id.$oid, a)
                                })
                            })
                        }) : "Join a Group" === r.activeMenu && v.getGroupCoachSessions(t, function(a, o) {
                            e.removePastSessions(o, t.booking_threshold), o.forEach(function(e) {
                                e.stick = !0
                            });
                            for (var n = o.length; n--;) void 0 === o[n].group_type && null == o[n].group_type || e.removePrivateGroups(o, o[n], n);
                            d(function() {
                                e.events[t.id.$oid] = o, e.calEvents[t.id.$oid] = {
                                    events: e.events[t.id.$oid]
                                }, e.eventSources[t.id.$oid] = [e.calEvents[t.id.$oid]], e.eventSources[t.id.$oid][0].events.$watch(function(a) {
                                    e.realtimeUpdateEvents(e.eventSources[t.id.$oid][0].events, t.id.$oid, a)
                                })
                            })
                        })
                    }), document.querySelector(".fc-scroller")) var t = document.querySelector(".fc-scroller").scrollTop;
                d(function() {
                    var e = document.querySelectorAll(".fc-scroller");
                    if (e.length > 0)
                        for (var a = 0; a < e.length; a++) e[a].scrollTop = t
                });
                var a = JSON.parse(localStorage.getItem("coachSearchResults"));
                if (($(window).width() <= 1024 || isMobile()) && (a && "dashboard" === a.fromPage || r.fromCalendarView && (r.fromCalender || r.fromProfileDetail))) {
                    e.currentCoach[0] = e.nameArray[0];
                    var o;
                    o = a && "dashboard" === a.fromPage || r.fromCalender ? "calenderview" : "detailsview", e.viewProfiles(e.nameArray[0], o)
                } else window.prerenderReady = !0, e.showLoader = !1
            }, e.timeClock = function() {
                setTimeout(e.timeClock, 1e3);
                var t = new Date;
                return e.cart && e.isValidUntil(t), Date.parse(t)
            };
            var L = e.timeClock();
            e.removePastSessions = function(t, a) {
                var o = e.timeClock();
                if (angular.isDefined(t) && angular.isDefined(o) && angular.isDefined(a)) {
                    for (var n = t.length - 1; n >= 0; n--) t[n].date = T("date")(new Date(t[n].start), "MM/dd/yyyy"), t[n].weekNo = +T("date")(new Date(t[n].start), "w", "UTC"), "individual:create-group" === t[n].filter && "available" === t[n].status ? new Date(t[n].start) < new Date(o) && t.splice(n, 1) : "join-group" !== t[n].filter && "reserved" !== t[n].filter || "available" !== t[n].joinGroupStatus || new Date(t[n].end) < new Date(o) && t.splice(n, 1);
                    a = null == a ? new moment(L).add(24, "h").toDate() : new moment(L).add(a, "h").toDate(), e.setNoticePeriod(t, a)
                }
            }, e.setNoticePeriod = function(e, t) {
                for (var a = e.length - 1; a >= 0; a--) "individual:create-group" === e[a].filter && "available" === e[a].status ? e[a].start < Date.parse(t) && e.splice(a, 1) : "reserved" === e[a].filter && "available" === e[a].joinGroupStatus && e[a].end < Date.parse(t) && e.splice(a, 1)
            }, e.clearSources = function(t) {
                e.tempSourceArray = [], r.activeMenu = t, window.innerWidth < 1024 || isMobile() ? (e.calEvents[e.currentCoach[0].id.$oid] = {}, e.events[e.currentCoach[0].id.$oid] = {}, e.eventSources[e.currentCoach[0].id.$oid] = {}, e.loadCurrentCoachSession(), d(function() {
                    $(".fc-day-header:first").click()
                }, 200)) : (e.switchCalendars = !0, e.topCount = 0, e.bottomCount = 0, e.calEvents = {}, e.events = {}, e.eventSources = {}, e.calCount = 0, e.calArray = [], e.upperArray = [], e.lowerArray = [], e.loadSessionsOnebyOne(e.calCount))
            }, e.setMobileCalendarTitle = function(e) {
                var t = $("#col-" + parseInt(e)).find(".month").text() + " " + $("#col-" + parseInt(e)).find(".lbl-date").text() + ", " + $("#col-" + parseInt(e)).find(".year").text() + " (" + $("#col-" + parseInt(e)).find(".label-date").text() + ")";
                d(function() {
                    $(".fc-row-mobile-date").text(t)
                })
            }, e.loadCurrentCoachSession = function() {
                "Individual" === r.activeMenu || "Create a Group" === r.activeMenu ? v.getIndividualCoachSessions(e.currentCoach[0], function(t, a) {
                    e.removePastSessions(a, e.currentCoach[0].booking_threshold), a.forEach(function(e) {
                        e.stick = !0
                    }), d(function() {
                        e.events[e.currentCoach[0].id.$oid] = a, e.calEvents[e.currentCoach[0].id.$oid] = {
                            events: e.events[e.currentCoach[0].id.$oid]
                        }, e.eventSources[e.currentCoach[0].id.$oid] = [e.calEvents[e.currentCoach[0].id.$oid]], e.setRequestReviewOverlay(0, new Date), e.eventSources[e.currentCoach[0].id.$oid][0].events.$watch(function(t) {
                            if ("child_changed" === t.event && e.currentCoach.length) {
                                var a = findObjectByKeyValue(e.eventSources[e.currentCoach[0].id.$oid][0].events, "$id", t.key);
                                a && "reserved" !== a.filter && "pending" !== a.status && "Join a Group" !== r.activeMenu && "booked" !== a.status || "join-group" === a.filter && a.joinGroupStatus && "Join a Group" === r.activeMenu && ("pending" === a.status || "booked" === a.status) ? ($("#mob-calendar").fullCalendar("updateEvent", a), e.currentCoach[0].pricing.group_with_service_fee = a.groupPrice, e.currentCoach[0].pricing.individual_with_service_fee = a.individualPrice, e.currentCoach[0].coach_name = a.coachName) : "child_added" === t.event && (a = findObjectByKeyValue(e.eventSources[e.currentCoach[0].id.$oid][0].events, "$id", t.key), a.stick = !0)
                            }
                        })
                    })
                }) : "Join a Group" === r.activeMenu && v.getGroupCoachSessions(e.currentCoach[0], function(t, a) {
                    e.removePastSessions(a, e.currentCoach[0].booking_threshold), a.forEach(function(e) {
                        e.stick = !0
                    });
                    for (var o = a.length; o--;) void 0 === a[o].group_type && null == a[o].group_type || e.removePrivateGroups(a, a[o], o);
                    d(function() {
                        e.events[e.currentCoach[0].id.$oid] = a, e.calEvents[e.currentCoach[0].id.$oid] = {
                            events: e.events[e.currentCoach[0].id.$oid]
                        }, e.eventSources[e.currentCoach[0].id.$oid] = [e.calEvents[e.currentCoach[0].id.$oid]], e.setRequestReviewOverlay(0, new Date), e.eventSources[e.currentCoach[0].id.$oid][0].events.$watch(function(t) {
                            if ("child_changed" === t.event && e.currentCoach.length) {
                                var a = findObjectByKeyValue(e.eventSources[e.currentCoach[0].id.$oid][0].events, "$id", t.key);
                                (a && "reserved" !== a.filter && "Join a Group" === r.activeMenu && ("pending" === a.status || "booked" === a.status) || "Join a Group" !== r.activeMenu && "pending" !== a.status) && ($("#mob-calendar").fullCalendar("updateEvent", a), e.currentCoach[0].pricing.group_with_service_fee = a.groupPrice, e.currentCoach[0].pricing.individual_with_service_fee = a.individualPrice, e.currentCoach[0].coach_name = a.coachName)
                            } else "child_added" === t.event && (a = findObjectByKeyValue(e.eventSources[e.currentCoach[0].id.$oid][0].events, "$id", t.key), a.stick = !0)
                        })
                    })
                })
            }, e.loadSessionsOnebyOne = function() {
                var t, a = e.nameArray.length;
                t = a >= 1 ? Math.floor(a / 2) : 1, e.upperArray = e.nameArray.slice(0, t), e.lowerArray = e.nameArray.slice(t, a);
                for (var o = 0; o < e.upperArray.length; o++) e.loadTopList();
                for (var o = 0; o < e.lowerArray.length; o++) e.loadbottomList()
            }, e.loadTopList = function() {
                var t = e.upperArray.slice(e.topCount, e.topCount + 1)[0];
                e.topCount++, "Individual" === r.activeMenu || "Create a Group" === r.activeMenu ? v.getIndividualCoachSessions(t, function(a, o) {
                    e.removePastSessions(o, t.booking_threshold), d(function() {
                        e.events[t.id.$oid] = o, e.calEvents[t.id.$oid] = {
                            events: e.events[t.id.$oid]
                        }, e.eventSources[t.id.$oid] = [e.calEvents[t.id.$oid]], e.eventSources[t.id.$oid][0].events.$watch(function(a) {
                            e.realtimeUpdateEvents(e.eventSources[t.id.$oid][0].events, t.id.$oid, a)
                        }), e.loadNextCoach()
                    }, 200)
                }) : v.getGroupCoachSessions(t, function(a, o) {
                    e.removePastSessions(o, t.booking_threshold);
                    for (var n = o.length; n--;) void 0 === o[n].group_type && null == o[n].group_type || e.removePrivateGroups(o, o[n], n);
                    d(function() {
                        e.events[t.id.$oid] = o, e.calEvents[t.id.$oid] = {
                            events: e.events[t.id.$oid]
                        }, e.eventSources[t.id.$oid] = [e.calEvents[t.id.$oid]], e.eventSources[t.id.$oid][0].events.$watch(function(a) {
                            e.realtimeUpdateEvents(e.eventSources[t.id.$oid][0].events, t.id.$oid, a)
                        }), e.loadNextCoach()
                    }, 200)
                })
            }, e.loadbottomList = function() {
                var t = e.lowerArray.slice(e.bottomCount, e.bottomCount + 1)[0];
                angular.isDefined(t) && (e.bottomCount++, e.bottomCount <= e.lowerArray.length && ("Individual" === r.activeMenu || "Create a Group" === r.activeMenu ? v.getIndividualCoachSessions(t, function(a, o) {
                    e.removePastSessions(o, t.booking_threshold), d(function() {
                        e.events[t.id.$oid] = o, e.calEvents[t.id.$oid] = {
                            events: e.events[t.id.$oid]
                        }, e.eventSources[t.id.$oid] = [e.calEvents[t.id.$oid]], e.eventSources[t.id.$oid][0].events.$watch(function(a) {
                            e.realtimeUpdateEvents(e.eventSources[t.id.$oid][0].events, t.id.$oid, a)
                        }), e.loadNextCoach()
                    }, 200)
                }) : v.getGroupCoachSessions(t, function(a, o) {
                    e.removePastSessions(o, t.booking_threshold);
                    for (var n = o.length; n--;) void 0 === o[n].group_type && null == o[n].group_type || e.removePrivateGroups(o, o[n], n);
                    d(function() {
                        e.events[t.id.$oid] = o, e.calEvents[t.id.$oid] = {
                            events: e.events[t.id.$oid]
                        }, e.eventSources[t.id.$oid] = [e.calEvents[t.id.$oid]], e.eventSources[t.id.$oid][0].events.$watch(function(a) {
                            e.realtimeUpdateEvents(e.eventSources[t.id.$oid][0].events, t.id.$oid, a)
                        }), e.loadNextCoach()
                    }, 200)
                })))
            }, e.loadNextCoach = function() {
                e.switchCalendars && (e.topCount < e.upperArray.length && e.loadTopList(), e.bottomCount <= e.lowerArray.length && e.loadbottomList())
            }, e.messageCoach = function(e) {
                if (b.isLoggedIn()) {
                    var a = {
                        toId: e.id.$oid,
                        toRole: "coach",
                        fromId: b.isClient() ? b.getParentId() : b.getCoachId(),
                        role: b.isClient() ? "client" : "coach",
                        message: null,
                        recepientName: e.coach_name
                    };
                    P.composeDialog(a, function(a) {
                        if ("send" === a.$$state.value) {
                            var o = "Success!",
                                n = "Your message to Coach " + e.coach_name + " has been successfully sent!";
                            t.showAlert(o, n)
                        }
                    })
                } else {
                    var o = "partials/coach/views/modal/coach.sendMessageCreateAccount",
                        n = "model-sendmessagecreateaccount",
                        s = "coachProfileModalController";
                    C.modalOpen(o, n, s, e), localStorage.setItem("messageCoach", JSON.stringify(e))
                }
            }, e.initSettings = function(t) {
                d(function() {
                    if (angular.element(".fc-widget-header:visible th").removeClass("active"), t) {
                        var a = t.attr("id");
                        angular.element(".fc-widget-header:visible th[id=" + a + "]").addClass("active"), e.openElement = parseInt(a.split("-")[1]), angular.element(".fc-widget-header:visible th[id=" + a + "]").trigger("click")
                    } else angular.element(".fc-widget-header:visible th[id='col-0']").addClass("active"), e.openElement = 1;
                    e.showCoachTypeDetails()
                }, 100)
            }, e.searchText = function(t) {
                e.query = t, e.setRating()
            }, e.showMobCart = function(e) {
                e.stopPropagation();
                var t = $(window).height() - $("header").height();
                d(function() {
                    angular.element(".session-accordion div:first").find("h2").addClass("active"), angular.element(".session-accordion div:first").find("ul").addClass("show"), angular.element(".coach-search-mob-cart").css("height", t)
                }, 200), $("body").toggleClass("cart-list-open"), angular.element(".coach-search-mob-cart").toggleClass("show"), angular.element("header").toggleClass("header-cart")
            }, e.toggleAccordion = function(e) {
                $(e)[0].currentTarget.parentNode.children[0].classList.toggle("active"), $(e)[0].currentTarget.parentNode.children[0].nextElementSibling.classList.toggle("show")
            }, e.eventRender = function(t, a) {
                a.attr({
                    "uib-tooltip-template": "'event.tooltip.html'",
                    "tooltip-placement": "auto left-bottom"
                }), p(a)(e)
            }, e.eventAfterRendered = function(e) {
                "available" === e.status && ($(".reschedule-calendar").find("#event-" + e._id + " span").text("Pick Me"), $(".reschedule-calendar").find("#event-" + e._id + " span").addClass("fc-event-blue"))
            }, e.tempSourceArray = [], e.eventAfterAllRendered = function(t, a, o) {
                var n = angular.element(t.el).parents(":eq(1)").attr("id");
                e.currentIndex = n ? n.split("-") : [], e.currentIndex && e.currentIndex.length > 1 ? e.setRequestReviewOverlay(e.currentIndex[1], t.title) : e.setRequestReviewOverlay(0, t.title), e.initSettings(e.currentActive), scroll > -1 && ("agendaDay" === o.name || "agendaWeek" === o.name) && (scroll = document.querySelector(".fc-agenda-slots").parentNode.parentNode.scrollTop)
            }, e.eventHover = function(t) {
                var a;
                e.rescheduleSession ? (e.event = t, e.day = e.days[new Date(t.start._d).getDay()], e.date = new Date(t.start._d).getDate(), e.hours = new Date(t.start._d).getHours(), e.minutes = new Date(t.start._d).getMinutes(), 0 === e.minutes && (e.minutes = e.minutes + "0"), e.months = e.month[new Date(t.start._d).getMonth()], a = e.hours >= 12 ? " PM" : " AM", e.hours = (e.hours + 11) % 12 + 1 + ":" + e.minutes + a, e.endHours = new Date(t.end._d).getHours(), e.endMinutes = new Date(t.end._d).getMinutes(), 0 === e.endMinutes && (e.endMinutes = e.endMinutes + "0"), a = e.endHours >= 12 ? " PM" : " AM", e.endHours = (e.endHours + 11) % 12 + 1 + ":" + e.endMinutes + a, e.openSlots = parseInt(t.group_size - t.bookedSlots), "individual" === t.filter ? e.activeMenu = "Individual" : "join-group" === t.filter ? e.activeMenu = "Join a Group" : e.activeMenu = "Create a Group") : (e.event = t, e.coachName = t.coachName, e.coachId = t.coachId, e.scheduleId = t.$id, e.day = e.days[new Date(t.start._d).getDay()], e.date = new Date(t.start._d).getDate(), e.months = e.month[new Date(t.start._d).getMonth()], e.minutes = new Date(t.start._d).getMinutes(), 0 === e.minutes && (e.minutes = e.minutes + "0"), e.hours = new Date(t.start._d).getHours(), a = e.hours >= 12 ? " PM" : " AM", e.hours = (e.hours + 11) % 12 + 1 + ":" + e.minutes + a, e.endHours = new Date(t.end._d).getHours(), e.endMinutes = new Date(t.end._d).getMinutes(), 0 === e.endMinutes && (e.endMinutes = e.endMinutes + "0"), a = e.endHours >= 12 ? " PM" : " AM", e.endHours = (e.endHours + 11) % 12 + 1 + ":" + e.endMinutes + a, e.openSlots = parseInt(t.group_size - t.bookedSlots))
            }, e.eventClick = function(a) {
                var o;
                if (e.rescheduleSession) "available" === a.status && (e.toastDay = e.days[new Date(a.start._d).getDay()], e.toastDate = new Date(a.start._d).getDate(), e.toastHours = new Date(a.start._d).getHours(), o = e.toastHours >= 12 ? "PM" : "AM", e.toastHours = (e.toastHours + 11) % 12 + 1 + o, e.showToast($(this), a));
                else if (b.isCoach()) {
                    var n = "Oops!",
                        s = "You cannot purchase a session as a coach. Please login as a client to book sessions.";
                    t.showAlert(n, s)
                } else if ($(this).mouseout(), e.cartItemCount >= e.maxCartItemCount) e.alertMessage($(this));
                else {
                    e.toastDay = e.days[new Date(a.start._d).getDay()], e.toastDate = new Date(a.start._d).getDate(), e.toastHours = new Date(a.start._d).getHours(), e.toastMonth = e.month[new Date(a.start._d).getMonth()], o = e.toastHours >= 12 ? " PM" : " AM", e.toastHours = (e.toastHours + 11) % 12 + 1 + o;
                    var i = {};
                    i.cart_items = {}, i.cart_items.coach_id = a.coachId, i.cart_items.schedule_id = a.$id, "Individual" === r.activeMenu && (i.cart_items.type_of_session = "individual"), "Join a Group" === r.activeMenu && (i.cart_items.type_of_session = "joingroup"), "Create a Group" === r.activeMenu && (i.cart_items.type_of_session = "creategroup"), e.addToCart(i)
                }
            }, e.showToast = function(t, a) {
                e.rescheduleSession && (a.clientRescheduleSession = e.rescheduleSession, e.editSession = JSON.parse(localStorage.getItem("currentSchedule")), e.editSession ? e.openSessionReschedule(a) : e.openSessionCreate(a))
            }, e.alertMessage = function(t) {
                e.toastEvent = event, t.closest(".fc-content-skeleton").addClass("cart-overlay"), angular.element("#toastEvent-alert").show(), d(function() {
                    angular.element("#toastEvent-alert").fadeOut(), t.closest(".fc-content-skeleton").removeClass("cart-overlay")
                }, 1200)
            }, e.calendarHeight = 401, e.calendarHeightConfig = function() {
                if (isMobile()) {
                    var t;
                    t = /iPad/i.test(navigator.userAgent) ? 111 : 100;
                    var a = $(window).height() - $("#home-header").height() - $(".profile-header.coach-booking-header").height() - t;
                    a > 0 ? e.calendarHeight = a : e.calendarHeight = 500, e.calendarHeight < 397 && (e.calendarHeight = 397)
                } else e.calendarHeight = 401
            }, d(function() {
                e.calendarHeightConfig(), e.uiConfig = {
                    calendar: {
                        height: e.calendarHeight,
                        editable: !1,
                        lazyFetching: !0,
                        header: {
                            left: "title",
                            center: "",
                            right: "prev today, next"
                        },
                        eventClick: e.eventClick,
                        eventDrop: e.alertOnDrop,
                        eventResize: e.alertOnResize,
                        eventRender: e.eventRender,
                        eventMouseover: e.eventHover,
                        eventAfterRender: e.eventAfterRendered,
                        eventAfterAllRender: e.eventAfterAllRendered
                    }
                }
            }), e.config = {
                autoHideScrollbar: !1,
                theme: "light",
                advanced: {
                    updateOnContentResize: !0
                },
                setHeight: 308,
                scrollInertia: 0
            }, e.profileConfig = {
                autoHideScrollbar: !1,
                theme: "light",
                advanced: {
                    updateOnContentResize: !0
                },
                setHeight: 400,
                scrollInertia: 0
            }, e.hideMore = !1, e.viewMore = function() {
                angular.element(".coach-info-bottom").show(), e.hideMore = !0
            }, e.slideMenu = function() {
                angular.element(".navlinks").toggleClass("in")
            }, e.openCartMobile = function() {
                angular.element("#mobile-cart-header").toggleClass("green"), angular.element(".mobile-cart").toggleClass("open")
            }, e.setCoachProfileInfo = function(t) {
                e.currentProfile = t.credentials, b.isLoggedIn() || (e.userId = "99"), e.setReviews(e.userId, t, !0), e.currentTrainingLocations = t.training_locations
            }, e.showReview = !1, e.showProfile = !1, e.openViewprofileModal = function(t, a) {
                a.showModal = !0, d(function() {
                    "showProfile" === t ? (a.showProfile = !0, a.showReview = !1, a.showLocation = !1, "current" !== a ? e.currentProfile = a.credentials : e.currentProfile = e.currentCoach.credentials) : "showReview" === t ? (b.isLoggedIn() || (e.userId = "99"), a.showProfile = !1, a.showReview = !0, a.showLocation = !1, e.setReviews(e.userId, a, !0)) : "showLocations" === t && (b.isLoggedIn() || (e.userId = "99"), a.showProfile = !1, a.showReview = !1, a.showLocation = !0, e.currentTrainingLocations = a.training_locations), e.$$phase || e.$apply()
                })
            }, e.setReviews = function(e, t) {
                D.getReviews(e, t.id.$oid, function(e) {
                    t.reviews = e.data.reviews
                })
            }, e.showMobileProfle = !1, e.hideListView = !1, e.viewProfiles = function(t, a) {
                e.currentCoach[0] = t, e.openViewprofileModal("showProfile", e.currentCoach[0]), e.hideListView = !0, e.currentPage = "coachProfileListing", ($(window).width() <= 1024 || isMobile()) && ("mobile" === a && (r.fromProfileDetail = !0), angular.element(".main-filter").css("display", "none")), angular.element("html, body").animate({
                    scrollTop: 0
                }, 200), d(function() {
                    e.showMobileProfle = !0
                }), window.prerenderReady = !0, e.showLoader = !1, "calenderview" === a && d(function() {
                    e.bookCoach(a)
                })
            }, angular.element(".cart-ico").hover(function() {
                angular.element(".overlay").addClass("active")
            }, function() {
                angular.element(".overlay").removeClass("active")
            }), e.showCoachCalendarMob = !1, e.bookCoach = function(t) {
                r.fromProfileDetail = !1, e.showTapMessage = !0, e.currentPage = "coachDetailView", angular.element(".select-training-list").removeClass("coach-search-hide"), angular.element(".coach-info-mobile").removeClass("coach-profile-view-mobile-show"), angular.element("#calendar-mobile").show(), angular.element("#calendar-mobile").addClass("book-coach-mobile"), e.clearSources(e.activeMenu), t ? r.fromCalendarView = r.fromCalender = !1 : r.fromCalender = !0
            }, angular.element("body").delegate(".fc-day-header", "click", function(t) {
                var a = $(this).attr("id").split("-");
                e.setMobileCalendarTitle(parseInt(a[1]));
                var o = parseInt(a[1]),
                    n = $("#col-" + o).find(".month").text() + " " + $("#col-" + o).find(".lbl-date").text() + ", " + $("#col-" + o).find(".year").text() + " (" + $("#col-" + o).find(".label-date").text() + ")";
                a = o + 1, angular.element(".fc-widget-header:visible th").removeClass("active"), angular.element(".fc-content-skeleton td").hide(), angular.element(".fc-axis").show(), e.openElement = a, angular.element(".column-" + a).show(), angular.element(this).addClass("active"), e.currentActive = angular.element(this), e.showCoachTypeDetails(), e.setRequestReviewOverlay(o, n)
            }), e.showCoachTypeDetails = function() {
                switch (r.activeMenu) {
                    case "Individual":
                        $(".column-" + e.openElement + " .fc-content-txt").addClass("individual");
                        break;
                    case "Join a Group":
                        $(".column-" + e.openElement + " .fc-content-txt").removeClass("individual create").addClass("join");
                        break;
                    case "Create a Group":
                        $(".column-" + e.openElement + " .fc-content-txt").removeClass("individual join").addClass("individual")
                }
            }, e.goBack = function() {
                r.fromCalender = !1, r.fromProfileDetail = !1, c.fromPage = "";
                var t = JSON.parse(localStorage.getItem("coachSearchResults"));
                switch (t && "dashboard" === t.fromPage ? r.navigatedBack = !0 : r.navigatedBack = !1, localStorage.setItem("coachSearchResults", JSON.stringify(c)), e.currentPage) {
                    case "coachProfileListing":
                        e.showMobileProfle = !1, e.hideListView = !1, e.currentCoach = [], e.showTapMessage = !1, e.currentPage = "bookingSession", angular.element(".main-filter").css("display", "block");
                        break;
                    case "coachDetailView":
                        r.fromProfileDetail = !0, angular.element(".select-training-list").addClass("coach-search-hide"), angular.element("#calendar-mobile").hide(), angular.element("#calendar-mobile").hide(), angular.element("#calendar-mobile").removeClass("book-coach-mobile"), angular.element(".coach-info-mobile").addClass("coach-profile-view-mobile-show"), e.currentPage = "coachProfileListing", e.showTapMessage = !1;
                        break;
                    case "bookingSession":
                        var a = JSON.parse(localStorage.getItem("BookCoach"));
                        f.location.href = a
                }
                angular.element("html, body").animate({
                    scrollTop: -100
                }, 500)
            }, e.swipeLeft = function() {
                "col-6" === angular.element(".fc-day-header.active:visible").attr("id") ? (angular.element(".fc-widget-header th").removeClass("active"), angular.element(".fc-next-button").trigger("click"), d(function() {
                    angular.element(".fc-day-header:visible").first().trigger("click")
                }, 100)) : angular.element(".fc-day-header.active:visible").next().trigger("click")
            }, e.swipeRight = function() {
                "col-0" === angular.element(".fc-day-header.active:visible").attr("id") ? (angular.element(".fc-widget-header th").removeClass("active"), angular.element(".fc-prev-button").trigger("click"), d(function() {
                    angular.element(".fc-day-header:visible").last().trigger("click")
                }, 100)) : angular.element(".fc-day-header.active:visible").prev().trigger("click")
            }, e.constructLocation = function(t) {
                t.where = t.location.name + ", " + (angular.isDefined(t.location.address.street) && null !== t.location.address.street && "" !== t.location.address.street ? t.location.address.street : "") + (angular.isDefined(t.location.address.city) && null !== t.location.address.city && "" !== t.location.address.city ? ", " + t.location.address.city : "") + (angular.isDefined(t.location.address.state) && null !== t.location.address.state && "" !== t.location.address.state ? ", " + t.location.address.state : "") + (angular.isDefined(t.location.address.zip) && null !== t.location.address.zip && "" !== t.location.address.zip ? ", " + t.location.address.zip : ""), e.$$phase || e.$apply()
            }, e.addToCart = function(t) {
                localStorage.removeItem("selectedAthletes");
                var a = _.get("SF.cartId");
                if (b.isLoggedIn()) {
                    var o, n = b.getParentId(),
                        s = {
                            parent_id: n
                        };
                    y.getParentCartId(n).then(function(n) {
                        n.data.cart ? (o = n.data.cart._id.$oid, _.put("SF.cartId", o + ""), y.addToCart(o, t).success(function() {
                            e.getCart(), e.fadeInCart()
                        })) : y.createCart().success(function(o) {
                            _.put("SF.cartId", o.cart.id + ""), e.cart = o.cart, angular.isDefined(e.cart) && null !== e.cart && (e.cart.cart_items.forEach(function(t) {
                                e.constructLocation(t), t.selectedActivity = findActivityByName(e.activities, t.activity)
                            }), a = o.cart.id, y.setCartParentId(a, s).success(function() {
                                y.addToCart(a, t).success(function() {
                                    e.getCart(), e.fadeInCart()
                                })
                            }))
                        })
                    })
                } else {
                    var a = _.get("SF.cartId");
                    a ? y.addToCart(a, t).success(function() {
                        e.getCart(), e.fadeInCart()
                    }) : y.createCart().success(function(o) {
                        _.put("SF.cartId", o.cart.id + ""), e.cart = o.cart, angular.isDefined(e.cart) && null !== e.cart && (e.cart.cart_items.forEach(function(t) {
                            e.constructLocation(t), t.selectedActivity = findActivityByName(e.activities, t.activity)
                        }), a = o.cart.id, y.addToCart(a, t).success(function(t) {
                            e.getCart(), e.fadeInCart()
                        }))
                    })
                }
            }, e.initiateCartTimer = function() {
                var t = _.get("SF.cartId");
                !angular.isDefined(t) || Boolean(localStorage.getItem("cartCheckOut")) || angular.isDefined(e.cartIntervalTimer) || (r.sessionStatus = "", localStorage.setItem("cartTimer", !0), e.cartIntervalTimer = u(function() {
                    e.checkCartItemExpiry(t)
                }, 1e3))
            }, e.checkCartItemExpiry = function(t) {
                if (e.cart) {
                    var a = new Date;
                    e.cart.cart_items.forEach(function(o, n) {
                        var s = new Date(o.createdAt),
                            i = new Date(new Date(o.createdAt).setMinutes(new Date(o.createdAt).getMinutes() + e.cartItemSessionTimeOut)),
                            r = moment(a).diff(moment(s), "minutes"),
                            c = 60 - moment(moment(a).diff(moment(i))).format("ss");
                        if (60 === c ? c = 59 : c >= 0 && c < 10 && (c = "0" + c), e.cartItemExpiryTime[o.cartItemId] = e.cartItemSessionTimeOut - 1 - r + ":" + c + " Min", new Date(i).getTime() <= new Date(a).getTime()) {
                            var l = o.scheduleId,
                                d = {};
                            d.cartId = t, d.cartItemId = o.cartItemId, y.setCartItemAsExpired(d).success(function() {
                                e.removeExpiredSession(l), e.cart.cart_items.splice(n, 1)
                            }).error(function() {
                                e.removeExpiredSession(l), e.cart.cart_items.splice(n, 1)
                            })
                        }
                    })
                }
            }, e.removeExpiredSession = function(t) {
                if (t) {
                    var a = e.cartTimerArray.map(function(e) {
                        return e.id
                    }).indexOf(t);
                    e.cartTimerArray.splice(a, 1), e.cartTimerArray.length < 1 && (C.setSessionTimer("stop"), r.sessionStatus = "", localStorage.removeItem("cartCheckOut"), localStorage.removeItem("sessionTimer"), localStorage.removeItem("cartTimer"), u.cancel(e.cartIntervalTimer), e.cartIntervalTimer = void 0)
                } else C.setSessionTimer("stop"), e.cartTimerArray = [], e.cart && (e.cart.cart_items = []), r.sessionStatus = "", localStorage.removeItem("cartCheckOut"), localStorage.removeItem("sessionTimer"), localStorage.removeItem("cartTimer"), u.cancel(e.cartIntervalTimer), e.cartIntervalTimer = void 0;
                (angular.isUndefined(localStorage.getItem("sessionTimer")) || null === localStorage.getItem("sessionTimer") || angular.isUndefined(localStorage.getItem("cartTimer")) || null === localStorage.getItem("cartTimer")) && r.$emit("refreshContinueLink")
            }, e.getCart = function() {
                if (b.isLoggedIn()) {
                    var t, a = b.getParentId();
                    e.cartTimerArray = [], y.getParentCartId(a).then(function(a) {
                        if (a.data.cart) t = a.data.cart._id.$oid, _.put("SF.cartId", t + ""), y.getCart(t).then(function(t) {
                            e.cart = t.data.cart, angular.isDefined(e.cart) && null !== e.cart && (e.cart.cart_items.forEach(function(t) {
                                e.constructLocation(t), t.selectedActivity = findActivityByName(e.activities, t.activity), e.cartTimerArray.push({
                                    id: t.scheduleId,
                                    time: new Date(t.createdAt)
                                })
                            }), e.cartTimerArray.length > 0 ? e.initiateCartTimer() : (localStorage.removeItem("cartCheckOut"), localStorage.removeItem("sessionTimer")), e.getCartItemCount())
                        });
                        else {
                            var o = _.get("SF.cartId");
                            e.cartTimerArray = [], y.getCart(o).then(function(t) {
                                e.cart = t.data.cart, angular.isDefined(e.cart) && null !== e.cart && (e.cart.cart_items.forEach(function(t) {
                                    e.constructLocation(t), t.selectedActivity = findActivityByName(e.activities, t.activity), e.cartTimerArray.push({
                                        id: t.scheduleId,
                                        time: new Date(t.createdAt)
                                    })
                                }), e.cartTimerArray.length > 0 ? e.initiateCartTimer() : (localStorage.removeItem("cartCheckOut"), localStorage.removeItem("sessionTimer")), e.getCartItemCount())
                            })
                        }
                    })
                } else {
                    var o = _.get("SF.cartId");
                    e.cartTimerArray = [], o && y.getCart(o).then(function(t) {
                        e.cart = t.data.cart, angular.isDefined(e.cart) && null !== e.cart && e.cart.cart_items.forEach(function(t) {
                            e.constructLocation(t), t.selectedActivity = findActivityByName(e.activities, t.activity), e.cartTimerArray.push({
                                id: t.scheduleId,
                                time: new Date(t.createdAt)
                            })
                        }), e.cartTimerArray.length > 0 ? e.initiateCartTimer() : (localStorage.removeItem("cartCheckOut"), localStorage.removeItem("sessionTimer")), e.getCartItemCount()
                    })
                }
            }, e.isValidUntil = function(t) {
                e.cart && e.cart.cart_items.forEach(function(a, o) {
                    a.selectedActivity = findActivityByName(e.activities, a.activity), new Date(a.validUntil) < new Date(t) && e.cart.cart_items.splice(o, 0)
                })
            }, e.getCartItemCount = function() {
                var t = _.get("SF.cartId");
                t && y.getCartItemCount(t).success(function(t) {
                    e.cartItemCount = t.cartItemsCount
                })
            }, e.deleteCartItem = function(t, a, o) {
                angular.forEach(e.cart.cart_items, function(t, o) {
                    t.cartItemId === a && (e.cart.total_price = e.cart.total_price - t.price, e.cart.cart_items.splice(o, 1))
                });
                var n = {};
                n.cartId = t, n.cartItemId = a, y.deleteCartItem(n).success(function() {
                    var t = o.scheduleId;
                    e.removeExpiredSession(t)
                })
            }, e.clearCart = function(t, a) {
                var o = _.get("SF.cartId");
                e.removeExpiredSession(), o ? y.clearCart(o).success(function() {
                    "logout" === a && _.remove("SF.cartId")
                }) : e.removeExpiredSession()
            }, e.sessionExpired = r.$on("sessionExpired", function(t, a) {
                e.clearCart(t, a), "timerExpired" === a && (C.setSessionTimer("stop"), r.$on("$destroy", e.sessionExpired))
            }), e.checkout = function() {
                var t = _.get("SF.cartId");
                localStorage.removeItem("cartTimer");
                y.checkOutCart(t), u.cancel(e.cartIntervalTimer), e.cartIntervalTimer = void 0, Boolean(localStorage.getItem("cartCheckOut")) || (C.setSessionTimer("start"), localStorage.setItem("cartCheckOut", !0)), b.isRegistered() && b.isLoggedIn() ? m.go("booking.selectYourAthlete") : b.isRegistered() && !b.isLoggedIn() ? m.go("booking.login") : b.isRegistered() ? m.go("booking.login") : m.go("booking.createNewAccount"), $("body").removeClass("cart-list-open")
            }, e.fadeInCart = function() {
                var e = angular.element(".main-filter #cart-list.fade-in-cart-with-data"),
                    t = $(".arrow-up");
                isMobile() || (t.fadeIn("slow", function() {
                    $(".main-filter #cart-list.fade-in-cart-with-data").fadeIn("slow", function() {
                        t.css("display", "block"), e.css("display", "block")
                    })
                }), d(function() {
                    t.fadeOut("slow", function() {
                        $(".main-filter #cart-list.fade-in-cart-with-data").fadeOut("slow", function() {
                            e.css("display", "none"), t.css("display", "none")
                        })
                    })
                }, 8e3))
            }, e.removeConflictedSlots = function(t, a, o) {
                o.start_millis = o.start, 1 !== a.duration ? o.end_millis = o.start + 60 * a.duration * 60 * 1e3 : o.end_millis = o.end;
                var n = [];
                v.getCoachSessionsByStart(e.coachIdd, o.start_millis, o.end_millis, function(e, t) {
                    t.forEach(function(e, t) {
                        "available" !== e.status && e.start < o.end_millis && n.push(e)
                    })
                }), v.getCoachSessionsByEnd(e.coachIdd, o.start_millis, o.end_millis, function(e, t) {
                    t.forEach(function(e, t) {
                        "available" !== e.status && e.end > o.end_millis && n.push(e)
                    })
                }), setTimeout(function() {
                    n.length > 0 && t.splice(getItemIndexInList(t, "$id", o.$id), 1)
                }, 1e3)
            }, e.getCoachSessions = function() {
                e.coachIdd = c.coachId, angular.forEach(e.nameArray, function(t, a) {
                    v.getCoachOpenSessions(e.coachIdd, function(a, o) {
                        e.removePastSessions(o, t.booking_threshold), o.forEach(function(e, t) {
                            e.stick = !0
                        }), e.events[e.coachIdd] = o, e.calEvents[e.coachIdd] = {
                            events: e.events[e.coachIdd]
                        }, e.eventSources[e.coachIdd] = [e.calEvents[e.coachIdd]], e.rescheduleSession && e.eventSources[e.coachIdd][0].events.forEach(function(t) {
                            e.removeConflictedSlots(e.eventSources[e.coachIdd][0].events, JSON.parse(localStorage.getItem("currentSchedule")), t)
                        }), e.eventSources[e.coachIdd][0].events.$watch(function(t) {
                            var a;
                            if ("child_changed" === t.event) {
                                if (a = findObjectByKeyValue(e.eventSources[e.coachIdd][0].events, "$id", t.key), a && "reserved" !== a.filter && "pending" !== a.status) {
                                    var o = getItemIndex(e.nameArray, e.coachIdd);
                                    $("#cal-" + o).fullCalendar("updateEvent", a), e.nameArray[o].pricing.group_with_service_fee = a.groupPrice, e.nameArray[o].pricing.individual_with_service_fee = a.individualPrice, e.nameArray[o].coach_name = a.coachName
                                }
                            } else "child_added" === t.event && (a = findObjectByKeyValue(e.eventSources[e.coachIdd][0].events, "$id", t.key), a.stick = !0)
                        })
                    })
                })
            }, r.$on("refreshProfileCalendar", function(t, a) {
                e.events = {}, e.calEvents = {}, e.eventSources = {}
            }), e.openSessionCreate = function(e) {
                var t = "/partials/coachProfile/views/modal/coachProfile.sessionCreate.html",
                    a = "model-sessioncreate",
                    o = "sessionCreateController";
                C.modalOpen(t, a, o, e)
            }, e.checkConflicts = function(a, o, n) {
                e.conflictText = "";
                var s = [];
                o.start_millis = o.start._i, 1 !== a.duration ? o.end_millis = o.start._i + 60 * a.duration * 60 * 1e3 : o.end_millis = o.end._i, v.getCoachSessionsByStart(e.coachIdd, o.start_millis, o.end_millis, function(e, t) {
                    t.forEach(function(e) {
                        "available" !== e.status && e.start < o.end_millis && s.push(e)
                    })
                }), v.getCoachSessionsByEnd(e.coachIdd, o.start_millis, o.end_millis, function(e, t) {
                    t.forEach(function(e) {
                        "available" !== e.status && e.end > o.end_millis && s.push(e)
                    })
                }), setTimeout(function() {
                    if (s.length > 0) {
                        s.forEach(function(t) {
                            e.conflictText ? e.conflictText = e.conflictText + ", " + T("date")(new Date(t.start), "MM/dd/yyyy hh:mm a") + " - " + T("date")(new Date(t.end), "hh:mm a") : e.conflictText = e.conflictText + T("date")(new Date(t.start), "MM/dd/yyyy hh:mm a") + " - " + T("date")(new Date(t.end), "hh:mm a")
                        });
                        var a = "Conflict!",
                            o = "There are reserved slots on " + e.conflictText + ". Please choose another slot for rescheduling.";
                        t.showAlert(a, o), n("conflict")
                    } else n("success")
                }, 500)
            }, e.openSessionReschedule = function(t) {
                e.checkConflicts(JSON.parse(localStorage.getItem("currentSchedule")), t, function(e) {
                    if ("success" === e) {
                        var a = "/partials/coachProfile/views/modal/coachProfile.rescheduleGroupSession.html",
                            o = "model-sessioncreate model-sessionreschedule",
                            n = "sessionRescheduleController";
                        C.modalOpen(a, o, n, t, function(e) {
                            "success" === e.$$state.value && (f.history.back(), localStorage.removeItem("rescheduleSession"))
                        })
                    }
                })
            }, e.requestCoachSession = function(e) {
                var a, o, n;
                if (b.isLoggedIn() ? b.isClient() && (a = "partials/coach/views/modal/coach.requestSession", o = "model-request-session", n = "coachRequestSessionController") : (a = "partials/coach/views/modal/coach.sendMessageCreateAccount", o = "model-sendmessagecreateaccount", n = "coachProfileModalController", localStorage.setItem("requestSession", JSON.stringify(e))), b.isCoach()) {
                    var s = "Oops!",
                        i = "You cannot request a session as a coach. Please login as a client to request sessions.";
                    t.showAlert(s, i)
                } else C.modalOpen(a, o, n, e, function(a) {
                    if ("success" === a.$$state.value) {
                        var o = "Success!",
                            n = "A request for session has been successfully sent to the coach " + e.coach_name;
                        t.showAlert(o, n)
                    }
                })
            }, e.$on("$destroy", function() {
                localStorage.removeItem("messageCoach")
            })
        };
        e.$inject = ["$scope", "AlertService", "ActivitiesService", "CommonAPIInterfaceService", "CoachProfileInterfaceService", "appConfig", "CoachApiService", "$rootScope", "$stateParams", "$sce", "$timeout", "$interval", "$state", "uiCalendarConfig", "$compile", "coachSearchParams", "$window", "SessionService", "$location", "Coachco_CommonService", "BookingService", "$cookies", "AuthFactory", "AuthTokenFactory", "CoachEnrollmentInterfaceService", "CreateMessageService", "ConfirmDialogService", "ClientProfileInterfaceService", "$filter"], angular.module("Coachco").controller("coachBookingController", e)
    }(),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d) {
            e.submitted = !1, e.coach = c, e.coachName = "To: " + c.coach_name, e.inputType = "password", e.cart = [], e.validCart = [], e.formNotFilled = !1, e.showLoader = !1, e.passwordCheckbox = !1, e.showError = function(t) {
                "checked" == t && (e.pwd.focus = !0), "" != t && l(function() {
                    e.passwordCheckbox || (e.pwd.focus = !1)
                }, 300)
            }, e.hideShowPassword = function() {
                "password" === e.inputType ? e.inputType = "text" : e.inputType = "password"
            }, e.close = function() {
                i.modalClose(o)
            }, e.removeclass = function() {
                angular.element("body").removeClass("loader")
            }, e.sendMessageLogin = function() {
                i.modalClose(o);
                var e = "partials/coach/views/modal/coach.sendMessageLogin.html",
                    t = "model-sendmessagelogin",
                    a = "coachProfileModalController";
                i.modalOpen(e, t, a, c)
            }, e.sendMessageCreateAccount = function() {
                i.modalClose(o);
                var e = "partials/coach/views/modal/coach.sendMessageCreateAccount.html",
                    t = "model-sendmessagecreateaccount",
                    a = "coachProfileModalController";
                i.modalOpen(e, t, a, c)
            }, e.resetEmail = function() {
                var e = "Reset Password!",
                    t = "Please enter the email address associated with your account, and we will email you a link to reset your password.";
                d.resetEmail(e, t, function(e) {})
            }, e.initializeAuth = function() {
                e.first = r.getFirstName(), e.last = r.getLastName(), e.userId = r.getUserId(), e.loggedIn = r.isLoggedIn(), e.isClient = r.isClient(), e.isCoach = r.isCoach(), e.isRegistered = r.isRegistered()
            }, e.initialize = function() {
                e.data = {
                    registration: {
                        parent: {
                            athletes: {}
                        }
                    }
                }
            }, e.register = function() {
                e.regDisabled = !0, e.loggedIn ? a.go("coachSearch.coaches") : (e.submitted = !0, e.regForm.$valid ? (e.errorMessage = "", e.formNotFilled = !1, r.register(e.data).then(function(t) {
                    e.errorMessage = "", e.successMessage = "", e.showLoader = !0, e.signIn(e.data.registration.parent.email, e.data.registration.parent.password)
                }, function(t) {
                    t.data ? "email_is_taken" == t.data.message && (e.errorMessage = "Email already taken") : e.errorMessage = "Unexpected Error", e.regDisabled = !1
                })) : (e.regDisabled = !1, e.errorMessage = "Please complete all of the fields to create your account.", e.formNotFilled = !0))
            }, e.getCartItemCount = function() {
                var t = n.get("SF.cartId");
                t && s.getCartItemCount(t).success(function(t) {
                    e.cartItemCount = t.cartItemsCount, e.validCart = e.cart;
                    for (var o = e.validCart.cart_items.length - 1; o >= 0; o--) "expired" != e.validCart.cart_items[o].status && "unavailable" != e.validCart.cart_items[o].status || e.validCart.cart_items.splice(o, 1);
                    e.close(), a.reload()
                })
            }, e.signIn = function(o, i) {
                if (e.submitted = !0, r.isLoggedIn()) {
                    e.errorMessage = "";
                    var c, l = r.getParentId();
                    s.getParentCartId(l).then(function(t) {
                        e.cart = t.data.cart, e.validCart = t.data.cart, t.data.cart && (c = t.data.cart._id.$oid, n.put("SF.cartId", c + ""), s.getCart(c).success(function(t) {
                            e.cart = t.data.cart, e.validCart = t.data.cart, e.getCartItemCount()
                        }))
                    }, function(e) {}), t.previousState ? "home" == t.previousState && a.go("home") : a.go("home")
                } else e.errorMessage = "", e.successMessage = "", e.initializeAuth(), r.signIn(o, i).then(function(t) {
                    if (t.errorMessage) e.errorMessage = t.errorMessage, AuthTokenFactory.removeTokens();
                    else if (r.isCoach()) a.go("coachProfile.dashboard.sessions", {
                        coachId: r.getCoachId()
                    }), e.close(), e.removeclass(), localStorage.removeItem("messageCoach"), localStorage.removeItem("requestSession");
                    else {
                        e.errorMessage = "";
                        var o, i = n.get("SF.cartId");
                        if (i) {
                            var c = r.getParentId(),
                                l = {
                                    parent_id: c
                                };
                            s.getParentCartId(c).then(function(t) {
                                e.cart = t.data.cart, e.validCart = t.data.cart, t.data.cart ? (o = t.data.cart._id.$oid, i != o ? s.setCartParentId(i, l).then(function(t) {
                                    n.put("SF.cartId", o + ""), s.getCart(o).then(function(t) {
                                        e.cart = t.data.cart, e.validCart = t.data.cart, e.getCartItemCount()
                                    })
                                }, function(e) {}) : s.getCart(o).then(function(t) {
                                    e.cart = t.data.cart, e.validCart = t.data.cart, e.getCartItemCount()
                                }, function(e) {})) : s.setCartParentId(i, l).then(function(t) {
                                    n.put("SF.cartId", i + ""), s.getCart(i).then(function(t) {
                                        e.cart = t.data.cart, e.validCart = t.data.cart, e.getCartItemCount()
                                    })
                                }, function(e) {})
                            }, function(e) {
                                console.log("error %o", e)
                            })
                        } else {
                            var o, c = r.getParentId(),
                                l = {
                                    parent_id: c
                                };
                            s.getParentCartId(c).then(function(t) {
                                e.cart = t.data.cart, e.validCart = t.data.cart, t.data.cart ? (o = t.data.cart._id.$oid, n.put("SF.cartId", o + ""), s.getCart(o).then(function(t) {
                                    e.cart = t.data.cart, e.validCart = t.data.cart, e.getCartItemCount()
                                }, function(e) {})) : (e.close(), a.reload())
                            }, function(e) {})
                        }
                    }
                }, function(t) {
                    t.data ? e.errorMessage = t.data.message : e.errorMessage = "Unexpected Error"
                })
            }, e.clearSources = function() {
                localStorage.removeItem("messageCoach"), localStorage.removeItem("requestSession")
            }
        };
        e.$inject = ["$scope", "$rootScope", "$state", "$uibModalInstance", "$cookies", "BookingService", "Coachco_CommonService", "AuthFactory", "messageCoach", "$timeout", "AlertService"], angular.module("Coachco").controller("coachProfileModalController", e)
    }(),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d) {
            e.coachData = d, e.request_session = {}, e.dateOptions = {
                dateFormat: "M d, yy",
                numberOfMonths: 2,
                dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
                minDate: new Date,
                beforeShow: function(e, t) {
                    $("#requestedDate").after($("#requestedDate").datepicker("widget"))
                }
            }, isMobile() && (e.dateOptions.numberOfMonths = 1), e.timeRange = [];
            for (var u = 1; u <= 12; u++) e.timeRange.push(u);
            e.minuteRange = ["00", "30"], e.timeFormatList = ["AM", "PM"], e.sendingRequest = !1, e.training_locations = angular.copy(e.coachData.training_locations);
            var m = {
                name: "Request a Park",
                address: ""
            };
            e.training_locations.push(m), e.close = function() {
                n.modalClose(i)
            }, e.removeclass = function() {
                angular.element("body").removeClass("loader")
            }, e.clearSources = function() {
                localStorage.removeItem("messageCoach"), localStorage.removeItem("requestSession")
            }, e.checkValidity = function() {
                e.request_session.location && "Request a Park" === e.request_session.location.name && !e.request_session.new_location ? e.requestForm.newLocation.$setValidity("empty", !1) : e.request_session.new_location && e.requestForm.newLocation.$setValidity("empty", !0)
            }, e.requestSession = function() {
                if (e.sendingRequest = !1, e.checkValidity(), e.requestForm.$valid) {
                    e.sendingRequest = !0, e.sessionNote = "Hi Coach " + e.coachData.first_name + ",<br />Are you available for", "Group" === e.request_session.session ? e.sessionNote = e.sessionNote + " a" : e.sessionNote = e.sessionNote + " an", e.sessionNote = e.sessionNote + " " + a("lowercase")(e.request_session.session) + " session at " + e.request_session.hours + ":" + e.request_session.minutes + " " + e.request_session.timeformat + " on " + a("date")(e.request_session.requestedDate, "EEEE, MMMM d, yyyy") + "?";
                    var t = e.request_session.hours + ":" + e.request_session.minutes + " " + e.request_session.timeformat;
                    e.data = {
                        request_session: {
                            client_id: l.getParentId(),
                            coach_id: e.coachData.id.$oid,
                            type_of_session: e.request_session.session,
                            date: a("date")(e.request_session.requestedDate, "MM/dd/yyyy"),
                            question: e.sessionNote,
                            time: t
                        }
                    }, e.request_session.message && (e.data.request_session.notes = e.request_session.message.replace(/\r?\n/g, "<br />")), e.request_session.new_location ? e.data.request_session.new_location = e.request_session.new_location.name + ", " + e.request_session.new_location.addressForm : angular.isString(e.request_session.location.address) ? e.data.request_session.location = e.request_session.location.name + ", " + e.request_session.location.address : e.data.request_session.location = e.request_session.location.name + ", " + e.request_session.location.address.street + ", " + e.request_session.location.address.city + ", " + e.request_session.location.address.state + ", " + e.request_session.location.address.zip, s.requestSession(e.data).then(function() {
                        e.sendingRequest = !1, e.clearSources(), n.modalDone(i, "success")
                    }, function() {
                        e.sendingRequest = !1
                    })
                } else e.submitted = !0, e.sendingRequest = !1
            }, e.resetPlaceAutocomplete = function() {
                $("#location-new").val(""), e.request_session.newlocation = "", e.request_session.new_location = ""
            }, e.selectLocation = function() {
                e.request_session.location = angular.copy(e.request_session.loc), e.request_session.location ? (e.request_session.location = JSON.parse(e.request_session.location), "Request a Park" === e.request_session.location.name ? e.setAutocomplete() : e.resetPlaceAutocomplete()) : e.resetPlaceAutocomplete()
            }, e.isDuplicates = function(t) {
                var a = !1;
                return e.coachData.training_locations.forEach(function(e, o) {
                    e.name === t.name && e.address === t.addressForm && (a = !0)
                }), a
            }, e.isInvalid = function(e) {
                var t = !0;
                return e.name && e.address.street && e.address.zip && (t = !1), t
            }, e.fillInAddress = function() {
                var t = e.autocomplete.getPlace();
                e.request_session.new_location = "";
                for (var a = {
                    street_number: "long_name",
                    locality: "long_name",
                    route: "long_name",
                    administrative_area_level_1: "short_name",
                    postal_code: "short_name"
                }, n = {
                    locality: "city",
                    street_number: "street_number",
                    route: "route",
                    administrative_area_level_1: "state",
                    postal_code: "zip"
                }, s = {
                    name: null,
                    address: {},
                    google_id: null
                }, i = 0; i < t.address_components.length; i++) {
                    var r = t.address_components[i].types[0];
                    if (a[r]) {
                        var c = t.address_components[i][a[r]];
                        s.address[n[r]] = c
                    }
                }
                s.google_id = t.place_id, s.name = t.name, s.address.street = (angular.isDefined(s.address.street_number) ? s.address.street_number : "") + (angular.isDefined(s.address.route) && s.address.route !== s.name ? " " + s.address.route : ""), s.formattedAddress = t.name + ", " + t.formatted_address, delete s.address.street_number, delete s.address.route;
                var l, d;
                e.isInvalid(s) ? (e.resetPlaceAutocomplete(), s = {
                    name: null,
                    address: {},
                    google_id: null
                }, l = "Error!", d = "This location is not a valid location. Please select another location which have valid zip code and street address", o.showAlert(l, d)) : (s.addressForm = s.address.street + ", " + s.address.city + ", " + s.address.state + ", " + s.address.zip, e.isDuplicates(s) ? (e.resetPlaceAutocomplete(), l = "Error!", d = "This location has already been selected. Please select a different location.", o.showAlert(l, d)) : (e.request_session.new_location = s, e.requestForm.newLocation.$setValidity("empty", !0))), e.$$phase || e.$apply()
            }, loadGoogleAPI(), e.setAutocomplete = function() {
                t(function() {
                    var t = document.getElementById("location-new"),
                        a = {
                            types: [],
                            componentRestrictions: {
                                country: "us"
                            },
                            enableHighAccuracy: !0,
                            timeout: 3e4,
                            panControl: !0,
                            mapTypeControl: !1,
                            panControlOptions: {
                                position: google.maps.ControlPosition.RIGHT_CENTER
                            },
                            zoomControl: !0,
                            zoomControlOptions: {
                                style: google.maps.ZoomControlStyle.LARGE,
                                position: google.maps.ControlPosition.RIGHT_CENTER
                            },
                            scaleControl: !1,
                            streetViewControl: !1,
                            streetViewControlOptions: {
                                position: google.maps.ControlPosition.RIGHT_CENTER
                            }
                        };
                    e.autocomplete = new google.maps.places.Autocomplete(t, a), e.autocomplete.addListener("place_changed", e.fillInAddress)
                })
            }
        };
        e.$inject = ["$scope", "$timeout", "$filter", "AlertService", "Coachco_CommonService", "CoachApiService", "$uibModalInstance", "$rootScope", "$state", "AuthFactory", "coachData"], angular.module("Coachco").controller("coachRequestSessionController", e)
    }(),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c) {
            e.rating = a.rating, e.openItems = !1, e.reviewId = null, e.showLoaderImage = function() {
                e.loader = !0
            }, e.hideLoaderImage = function() {
                e.loader = !1
            }, e.reviewModel = {
                review: {
                    rating: a.rating,
                    message: "",
                    role: s.isClient() ? "client" : "coach",
                    reviewed_session_id: a.booked_session_id,
                    review_by: s.isClient() ? s.getParentId() : a.coach_id
                }
            }, e.loadCoachProfileSummary = function() {
                r.getAccountDetails(e.recepient_coach_id, function(t) {
                    t.$resolved && 200 === t.status && (e.coachData = t.data)
                })
            }, e.getSessionData = function() {
                e.showLoaderImage(), "reviewCoach" === o.current.name ? i.getSessionDetails(a.booked_session_id, function(t) {
                    e.recepient_coach_id = t.data.booked_session.coach_id.$oid, e.athletesNames = t.data.booked_session.athletes.join(), t.data.booked_session.athlete_info.length > 0 && (e.reviewModel.review.athlete_id = t.data.booked_session.athlete_info[0].id), e.loadCoachProfileSummary(), e.getReviewStatus()
                }) : "reviewRequestedCoach" === o.current.name && (e.recepient_coach_id = a.coach_id, e.athletesNames = null, e.loadCoachProfileSummary(), e.hideLoaderImage())
            }, e.getSessionData(), e.getReviewStatus = function() {
                c.getReviewStatus(s.getParentId(), e.recepient_coach_id, a.booked_session_id, function() {
                    e.hideLoaderImage()
                }, function(t) {
                    if (409 === t.status) {
                        o.go("home"), e.hideLoaderImage();
                        var a = "Error!",
                            s = "You have already provided a review for this session. Thank you for helping our community evaluate and find the best coaches for them.";
                        n.showAlert(a, s)
                    }
                })
            }, e.postReview = function() {
                if (s.isClient() && (a.client_id = s.getParentId(), c.postReview(a.client_id, e.recepient_coach_id, e.reviewModel, function(e) {
                        if (e.$resolved && 200 === e.status) {
                            var t = "Success!",
                                s = "Your review has been submitted successfully";
                            n.showAlert(t, s, function(e) {
                                "ok" === e.$$state.value && o.go("clientProfile.dashboard.sessions", {
                                    clientId: a.client_id
                                }, {
                                    location: "replace"
                                })
                            })
                        }
                    })), s.isCoach())
                    if (a.coach_id === e.recepient_coach_id) i.postReview(a.coach_id, e.recepient_coach_id, e.reviewModel, function(e) {
                        if (e.$resolved && 200 === e.status) {
                            var t = "Success!",
                                s = "Your review has been submitted successfully";
                            n.showAlert(t, s, function(e) {
                                "ok" === e.$$state.value && o.go("coachProfile.dashboard.sessions", {
                                    coachId: a.coach_id
                                }, {
                                    location: "replace"
                                })
                            })
                        }
                    });
                    else {
                        var t = "Warning!",
                            r = "You can't submit review for yourself";
                        n.showAlert(t, r)
                    }
            }, e.rateOnTimeRating = function(t) {
                e.reviewModel.review.onTimeRating = angular.isDefined(t) ? t : 0
            }, e.rateOrganizedRating = function(t) {
                e.reviewModel.review.organizedRating = angular.isDefined(t) ? t : 0
            }, e.rateKnowledgeableRating = function(t) {
                e.reviewModel.review.knowledgeableRating = angular.isDefined(t) ? t : 0
            }, e.rateFriendlyRating = function(t) {
                e.reviewModel.review.friendlyRating = angular.isDefined(t) ? t : 0
            }, e.rateBehaviorRating = function(t) {
                e.reviewModel.review.behaviorRating = angular.isDefined(t) ? t : 0
            }, e.rateRecommendRating = function(t) {
                e.reviewModel.review.recommendRating = angular.isDefined(t) ? t : 0
            }, e.ratePassionateRating = function(t) {
                e.reviewModel.review.passionateRating = angular.isDefined(t) ? t : 0
            }, e.rateCoach = function(t) {
                e.reviewModel.review.rating = angular.isDefined(t) ? t : 0
            }, e.updateReview = function() {
                c.updateReview(a.coach_id, e.reviewId, e.reviewModel)
            }
        };
        e.$inject = ["$scope", "$rootScope", "$stateParams", "$state", "AlertService", "AuthFactory", "CoachProfileInterfaceService", "CoachEnrollmentInterfaceService", "ClientProfileInterfaceService"], angular.module("Coachco").controller("coachReviewController", e)
    }(),
    function() {
        var e = function(e, t) {
            return {
                getCoachSearchList: function(a, o, n) {
                    var s;
                    return s = isNaN(parseInt(a)) ? "club" === n ? t.ccUrl + "coaches?club=" + a + "&sport=" + o : "coach" === n ? t.ccUrl + "coaches?name=" + a + "&sport=" + o : t.ccUrl + "coaches?name=" + a + "&sport=" + o : t.ccUrl + "coaches?zip=" + a + "&sport=" + o, e.get(s)
                },
                requestSession: function(a) {
                    var o = t.ccUrl + "session_request";
                    return e.post(o, a)
                }
            }
        };
        e.$inject = ["httprequestService", "urlConfig"], angular.module("Coachco").factory("CoachApiService", e)
    }(),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d, u, m, h, p, g, f, v) {
            e.trainingLocations = [], e.mapLoaded = !1, e.weekDays = angular.copy(c.weekDays), e.rating = 4.5, e.locationSubmit = !1, e.genders = c.genders, e.level_coached = {}, e.position_played = {}, e.positionRequiredInvalid = !1, e.levelCoachedRequiredInvalid = !1, e.positionDisabledError = !1;
            var S = null;
            angular.isDefined(h.coachId) && (e.userId = h.coachId), e.showLoader = function() {
                e.loader = !0
            }, e.hideLoader = function() {
                e.loader = !1
            }, e.showMapLoader = function() {
                e.mapLoader = !0
            }, e.hideMapLoader = function() {
                e.mapLoader = !1
            }, e.config = {
                autoHideScrollbar: !1,
                theme: "light",
                advanced: {
                    updateOnContentResize: !0
                },
                setHeight: 308,
                scrollInertia: 0
            }, e.inputType = "password", e.hideShowPassword = function() {
                "password" === e.inputType ? e.inputType = "text" : e.inputType = "password"
            }, e.initializeAuth = function() {
                e.firstName = d.getFirstName(), e.lastName = d.getLastName(), e.userId = d.getCoachId(), e.loggedIn = d.isLoggedIn(), e.isClient = d.isClient(), e.isCoach = d.isCoach(), e.isRegistered = d.isRegistered()
            }, window.onbeforeunload = function() {
                localStorage.setItem("currentStateName", JSON.stringify("coachEnrollment")), angular.isDefined(e.userId) && localStorage.setItem("coachId", e.userId), localStorage.setItem("CoachTrainingLocations", e.trainingLocations), localStorage.setItem("CoachProfileCurrentState", a.current.name), localStorage.setItem("FormStep", e.formStep)
            }, e.fetchSportsClubs = function(t) {
                e.clubs = [], p.getCoachClubs(e.selectedActivity.activity, !0, function(a) {
                    if (a.$resolved && 200 === a.status && a.data.length > 0) {
                        e.setStatusOfClubs(a.data), e.clubs = a.data;
                        var o = {
                            _id: {
                                $oid: null
                            },
                            name: "None"
                        };
                        e.clubs.splice(0, 0, o), t && t("success")
                    }
                }, function(e) {
                    var t = "Error!",
                        a = e.statusText;
                    i.showAlert(t, a)
                })
            }, e.setCoachProfile = function(t) {
                e.coachProfile = {
                    coach: {
                        first_name: t.data.first_name,
                        last_name: t.data.last_name,
                        email: t.data.email,
                        phone: t.data.phone,
                        coach_name: t.data.coach_name,
                        activity: t.data.activity,
                        club_id: t.data.club_id,
                        address: t.data.address,
                        profile: {
                            gender: t.data.profile.gender,
                            bio: t.data.profile.bio,
                            image: t.data.profile.image,
                            nickname: t.data.profile.nickname,
                            dob: t.data.profile.dob
                        },
                        profile_image: angular.isDefined(t.data.image_paths[0]) ? t.data.image_paths[0].url : null,
                        credentials: [{
                            coaching_philosophy: angular.isDefined(t.data.credentials[0]) ? t.data.credentials[0].coaching_philosophy : null,
                            favorite_player: angular.isDefined(t.data.credentials[0]) ? t.data.credentials[0].favorite_player : null,
                            favorite_team: angular.isDefined(t.data.credentials[0]) ? t.data.credentials[0].favorite_team : null,
                            highest_level_played: angular.isDefined(t.data.credentials[0]) ? t.data.credentials[0].highest_level_played : null,
                            level_coached: angular.isDefined(t.data.credentials[0]) && angular.isDefined(t.data.credentials[0].level_coached) && null !== t.data.credentials[0].level_coached ? t.data.credentials[0].level_coached : [],
                            position: angular.isDefined(t.data.credentials[0]) && angular.isDefined(t.data.credentials[0].position) && null !== t.data.credentials[0].position ? t.data.credentials[0].position : [],
                            ntrp_rating: angular.isDefined(t.data.credentials[0]) && angular.isDefined(t.data.credentials[0].ntrp_rating) && 0 !== parseFloat(t.data.credentials[0].ntrp_rating) ? parseFloat(t.data.credentials[0].ntrp_rating) : null,
                            years_coaching: angular.isDefined(t.data.credentials[0]) ? t.data.credentials[0].years_coaching : null,
                            your_coaching_experience: angular.isDefined(t.data.credentials[0]) ? t.data.credentials[0].your_coaching_experience : null,
                            your_playing_career: angular.isDefined(t.data.credentials[0]) ? t.data.credentials[0].your_playing_career : null
                        }],
                        pricing: {
                            individual: 0 !== parseInt(t.data.pricing.individual) ? parseInt(t.data.pricing.individual) : null,
                            individual_with_service_fee: 0 !== parseInt(t.data.pricing.individual_with_service_fee) ? parseInt(t.data.pricing.individual_with_service_fee) : null,
                            group: 0 !== parseInt(t.data.pricing.group) ? parseInt(t.data.pricing.group) : null,
                            min_group_size: 0 !== parseInt(t.data.pricing.min_group_size) ? parseInt(t.data.pricing.min_group_size) : null,
                            group_with_service_fee: 0 !== parseInt(t.data.pricing.individual_with_service_fee) ? parseInt(t.data.pricing.individual_with_service_fee) : null,
                            max_group_size: 0 !== parseInt(t.data.pricing.max_group_size) ? parseInt(t.data.pricing.max_group_size) : null
                        },
                        notification: t.data.notification
                    }
                }, e.coachProfile.coach.activity && (e.selectedActivity = findActivityByName(e.activities, e.coachProfile.coach.activity)), isNonEmptyObject(e.selectedActivity) && e.fetchSportsClubs(function(t) {
                    "success" === t && (e.selectedClub = findClubByID(e.clubs, e.coachProfile.coach.club_id))
                }), e.setLocations(t.data), e.photo = {}, e.photo.imageArray = t.data.image_paths
            }, e.validatingAccount = function() {
                angular.isDefined(e.regForm.$valid) && e.regForm.$valid && !e.ageInvalid && !e.ageExceed ? e.validAccount = !0 : e.validAccount = !1, e.$$phase || e.$apply()
            }, e.createAccount = function() {
                if (!e.regForm.$valid || e.ageInvalid || e.ageExceed) {
                    var t = "Incomplete Information!",
                        o = "Please enter all the required fields";
                    i.showAlert(t, o), e.submitted = !0
                } else {
                    e.showLoader();
                    var s = {
                        registration: e.coachProfile
                    };
                    n.registerCoach(s, function(t) {
                        if (t.$resolved && 200 === t.status) {
                            u.setRegistration();
                            var o = "Success!",
                                n = "Account has been created successfully!";
                            i.showAlert(o, n, function(t) {
                                "ok" === t.$$state.value && e.signIn(e.coachProfile.coach.email, e.coachProfile.coach.password, function() {
                                    e.hideLoader(), e.userId = d.getCoachId(), r.setData("CoachProfile", JSON.stringify(e.coachProfile.coach)), r.setData("CoachProfileId", e.userId), a.go("coachEnrollment.supportAndExperience", {
                                        coachId: e.userId
                                    }, {
                                        location: "replace"
                                    })
                                }, function() {
                                    e.hideLoader();
                                    var t = "Error!",
                                        a = "Unable to Login!";
                                    i.showAlert(t, a)
                                })
                            })
                        }
                        e.hideLoader()
                    }, function(t) {
                        var a, o;
                        422 === t.status ? (a = "Error!", o = t.statusText, t.data.data.hasOwnProperty("email") ? o = "Email " + t.data.data.email[0] : t.data.data.hasOwnProperty("phone") && (o = "Phone " + t.data.data.phone[0])) : 409 === t.status ? (a = "Error!", o = "This email has already taken") : (a = "Error!", o = "Unexpected error"), i.showAlert(a, o), e.hideLoader()
                    })
                }
            }, e.signIn = function(t, a, o, n) {
                e.initializeAuth(), d.signIn(t, a).then(function(e) {
                    o(e)
                }, function(e) {
                    n(e)
                })
            }, e.initializeCoachArray = function() {
                e.coachProfile = {
                    coach: {
                        first_name: null,
                        last_name: null,
                        email: null,
                        phone: null,
                        activity: null,
                        club_id: null,
                        profile: {
                            gender: null,
                            bio: null,
                            image: null,
                            nickname: null,
                            dob: null
                        },
                        credentials: [{
                            coaching_philosophy: null,
                            favorite_player: null,
                            favorite_team: null,
                            highest_level_played: null,
                            level_coached: [],
                            position: [],
                            years_coaching: null,
                            ntrp_rating: null,
                            your_coaching_experience: null,
                            your_playing_career: null
                        }],
                        pricing: {
                            individual: null,
                            individual_with_service_fee: null,
                            group: null,
                            group_with_service_fee: null,
                            min_group_size: null,
                            max_group_size: null
                        },
                        locations: []
                    }
                }, r.setData("CoachProfile", null), r.setData("CoachProfileId", null), r.setData("CoachProfilePhoto", null), r.setData("CoachTrainingLocations", null)
            }, e.compareMaxMin = function() {
                e.minInvalid = !1, e.maxInvalid = !1, parseInt(e.coachProfile.coach.pricing.min_group_size) > parseInt(e.coachProfile.coach.pricing.max_group_size) && (e.minInvalid = !0), e.validatingForm(e.regStep2Form)
            }, e.compareMinMax = function() {
                e.minInvalid = !1, e.maxInvalid = !1, parseInt(e.coachProfile.coach.pricing.min_group_size) > parseInt(e.coachProfile.coach.pricing.max_group_size) && (e.maxInvalid = !0), e.validatingForm(e.regStep2Form)
            }, e.initializeSportsAndExperience = function() {
                e.coachProfile = {}, e.loadCoachProfileSummary(function(t) {
                    e.userId = t.data.id.$oid, e.setCoachProfile(t), angular.isDefined(e.coachProfile.coach.credentials) && angular.isDefined(e.coachProfile.coach.credentials[0]) && null !== e.coachProfile.coach.credentials[0].level_coached && e.coachProfile.coach.credentials[0].level_coached.length > 0 && (e.level_coached = e.setCheckBoxes(e.coachProfile.coach.credentials[0].level_coached)), !angular.isUndefined(e.coachProfile.coach.credentials) && angular.isDefined(e.coachProfile.coach.credentials[0]) && null !== e.coachProfile.coach.credentials[0].position && e.coachProfile.coach.credentials[0].position.length > 0 && (e.position_played = e.setCheckBoxes(e.coachProfile.coach.credentials[0].position)), e.photo = {}, t.data.image_paths.length > 0 ? (e.photo.imageArray = t.data.image_paths, e.photo.imageArray.length > 0 && (e.setImageLimit = !0)) : angular.isUndefined(r.getData("CoachProfilePhoto")) || null === r.getData("CoachProfilePhoto") ? (e.photo.imageArray = [], e.photo.croppedImage = "") : (e.photo.imageArray = JSON.parse(r.getData("CoachProfilePhoto")), e.photo.croppedImage = ""), e.$$phase || e.$apply(), e.validatingSportsForm(e.regStep1Form)
                })
            }, e.loadCoachProfileSummary = function(t) {
                e.showLoader(), e.userId = d.getCoachId(), n.getAccountDetails(e.userId, function(a) {
                    a.$resolved && 200 === a.status && (e.coachProfile.coach = a.data, t(a)), e.hideLoader()
                })
            }, e.initializeSummary = function() {
                e.coachProfile = {}, e.loadCoachProfileSummary(function(t) {
                    e.userId = t.data.id.$oid, e.setCoachProfile(t), e.setLocations(t.data), angular.isDefined(r.getData("CoachTrainingLocations")) && null !== r.getData("CoachTrainingLocations") && (e.trainingLocations = JSON.parse(r.getData("CoachTrainingLocations"))), angular.isDefined(e.regStep2Form) ? e.validatingForm(e.regStep2Form) : angular.isDefined(e.regStep3Form) && e.validatingForm(e.regStep3Form)
                })
            }, e.goBack = function() {
                r.setData("CoachProfile", JSON.stringify(e.coachProfile.coach)), r.setData("CoachProfileId", e.userId), r.setData("CoachProfilePhoto", JSON.stringify(e.photo.imageArray)), angular.isDefined(e.trainingLocations) && null !== e.trainingLocations && (e.trainingLocations.forEach(function(t) {
                    var a = e.getListofSelected(t.selecteddays);
                    t.name && t.google_id ? t.days = a : t.selecteddays = e.setDaysCheckBoxes(t.days)
                }), r.setData("CoachTrainingLocations", JSON.stringify(e.trainingLocations)));
                var t = a.current.name;
                angular.isUndefined(t) || null === t ? o.history.back() : "coachEnrollment.profileSummary" === a.current.name ? e.updateCoachAccount(null, "coachEnrollment.supportAndExperience", {
                    coachId: e.userId
                }, {
                    location: "replace"
                }) : "coachEnrollment.coachingInfo" === a.current.name ? e.updateCoachAccount(null, "coachEnrollment.trainingLocation", {
                    coachId: e.userId
                }, {
                    location: "replace"
                }) : "coachEnrollment.trainingLocation" === a.current.name && e.updateCoachAccount(null, "coachEnrollment.profileSummary", {
                    coachId: e.userId
                }, {
                    location: "replace"
                })
            }, e.saveInSession = function() {
                r.setData("CoachProfile", JSON.stringify(e.coachProfile.coach)), r.setData("CoachProfileId", e.userId), r.setData("CoachProfilePhoto", JSON.stringify(e.photo.imageArray)), angular.isDefined(e.trainingLocations) && null !== e.trainingLocations && (e.trainingLocations.forEach(function(t) {
                    var a = e.getListofSelected(t.selecteddays);
                    t.name && t.google_id ? t.days = a : t.selecteddays = e.setDaysCheckBoxes(t.days)
                }), r.setData("CoachTrainingLocations", JSON.stringify(e.trainingLocations))), localStorage.setItem("CoachProfileCurrentState", a.current.name), r.setData("CoachProfileCurrentState", a.current.name)
            }, e.saveExit = function() {
                e.saveInSession(), e.updateCoachAccount(null, "home"), g.$emit("refreshHeader")
            }, e.saveExitStep2 = function() {
                e.coachProfile.coach.profile_completion_stage = 2, e.saveExit(), e.photo.imageArray.length > 0 && e.setProfileImage(e.photo.imageArray[0])
            }, e.saveExitStep3 = function() {
                e.coachProfile.coach.profile_completion_stage = 4, e.saveExit(), e.photo.imageArray.length > 0 && e.setProfileImage(e.photo.imageArray[0])
            }, e.saveExitStep4 = function() {
                e.coachProfile.coach.locations = [], e.coachProfile.coach.profile_completion_stage = 3, e.trainingLocations.forEach(function(t) {
                    if (e.isDaySelectedForLocation(t)) {
                        var a = e.getListofSelected(t.selecteddays);
                        if (null !== t.name && null !== t.address && "" !== t.name && t.address !== {}) {
                            var o = {
                                id: t.id,
                                name: t.name,
                                google_id: t.google_id,
                                address: t.address,
                                days: a
                            };
                            e.coachProfile.coach.locations.push(o)
                        } else t.selecteddays = e.setDaysCheckBoxes(t.days)
                    }
                }), e.photo.imageArray.length > 0 && e.setProfileImage(e.photo.imageArray[0]), e.saveExit()
            }, e.saveExitStep1 = function() {
                e.coachProfile.coach.credentials[0].position = e.getList(e.position_played), e.coachProfile.coach.credentials[0].level_coached = e.getList(e.level_coached), isNonEmptyObject(e.selectedActivity) && (e.coachProfile.coach.activity = e.selectedActivity.activity), isNonEmptyObject(e.selectedClub) && isNonEmptyObject(e.selectedClub._id) && (e.coachProfile.coach.club_id = e.selectedClub._id.$oid), isNonEmptyObject(e.selectedClub) && "" !== e.selectedClub.name && (e.coachProfile.coach.new_club_name = e.selectedClub.name), e.coachProfile.coach.profile_completion_stage = 1, e.photo.imageArray.length > 0 && e.setProfileImage(e.photo.imageArray[0]), e.saveExit()
            }, e.setFullName = function() {
                e.fullName = e.coachProfile.coach.first_name + " " + e.coachProfile.coach.last_name
            }, e.uploadPhoto = function() {
                var t = "partials/shared/views/modals/shared.uploadPhoto.html",
                    a = "model-createmessage",
                    o = "uploadPhotoController";
                e.photo.postURL = m.ccUrl + "coaches/" + e.userId, e.photo.isCoach = !0, l.modalOpen(e.photo, t, a, o, function(t) {
                    e.photo.croppedImage = t.$$state.value.croppedImage, e.photo.imageArray = t.$$state.value.imageArray, e.photo.duplicate = t.$$state.value.duplicate, e.photo.uploadStatus = t.$$state.value.uploadStatus, e.photo.picFile = t.$$state.value.picFile, e.photo.uploadStatus && (e.photo.profile_image = t.$$state.value.profile_image, e.coachProfile.coach.profile.image = t.$$state.value.imageArray, e.coachProfile.coach.profile_image = t.$$state.value.imageArray[0].url, e.photo.imageArray.length > 0 && (e.setImageLimit = !0)), e.validatingSportsForm(e.regStep1Form)
                })
            }, e.getTypedChars = function(e) {
                var t = angular.isDefined(e) && null !== e && "" !== e ? e.length : 0;
                return t
            }, e.uploadImage = function() {
                e.photo.imageArray.length > 0 ? e.setImageLimit = !0 : angular.isUndefined(e.photo.picFile) || null === e.photo.picFile || e.uploadPhoto()
            }, e.deleteProfPic = function(t, a) {
                n.deleteCoachImage(e.userId, t.id, function(t) {
                    t.$resolved && 204 === t.status && (e.photo.imageArray.splice(a, 1), e.photo.imageArray.length < 1 && (e.setImageLimit = !1, e.coachProfile.coach.profile_image = null))
                }, function(e) {
                    var t, a;
                    422 === e.status ? (t = "Error!", a = e.statusText) : 404 === e.status ? (t = "Error!", a = "The image is not found") : 409 === e.status ? (t = "Error!", a = "You may not delete this image because it is set as your profile photo.") : (t = "Error!", a = "Unexpected Error"), i.showAlert(t, a)
                })
            }, e.setProfileImage = function(t) {
                n.setCoachProfileImage(e.userId, t.id, function(a) {
                    a.$resolved && 200 === a.status && (e.coachProfile.coach.profile_image = t.url)
                }, function(e) {
                    var t, a;
                    422 === e.status ? (t = "Error!", a = e.statusText) : 404 === e.status && (t = "Error!", a = "The image is not found"), i.showAlert(t, a)
                })
            }, e.levelCoachedValidation = function() {
                var t = 0;
                angular.forEach(e.level_coached, function(e) {
                    e && t++
                }), t > 0 ? e.levelCoachedRequiredInvalid = !1 : e.levelCoachedRequiredInvalid = !0, e.coachProfile.coach.credentials[0].level_coached = e.getList(e.level_coached), e.validatingSportsForm(e.regStep1Form)
            }, e.positionDisabled = !1, e.positionValidation = function() {
                var t = 0;
                angular.forEach(e.position_played, function(e) {
                    e && t++
                }), t > 0 ? e.positionRequiredInvalid = !1 : e.positionRequiredInvalid = !0, e.coachProfile.coach.credentials[0].position = e.getList(e.position_played), "Speed And Agility" !== e.selectedActivity.activity && "Strength and Conditioning" !== e.selectedActivity.activity || (t >= 4 ? e.positionDisabled = !0 : e.positionDisabled = !1), e.$$phase || e.$apply(), e.validatingSportsForm(e.regStep1Form)
            }, e.checkPositionError = function(t) {
                t ? e.positionDisabledError = !0 : e.positionDisabledError = !1
            }, e.getList = function(e) {
                var t = [];
                return angular.forEach(e, function(e, a) {
                    e && t.push(a)
                }), t
            }, e.getListofSelected = function(e) {
                var t = [];
                return angular.forEach(e, function(e, a) {
                    e && t.push(a)
                }), t
            }, e.setCheckBoxes = function(e) {
                var t = {};
                return e.forEach(function(e) {
                    t[e] = !0
                }), t
            }, e.setDaysCheckBoxes = function(e) {
                var t = {};
                return e.forEach(function(e) {
                    t[e] = !0
                }), t
            }, e.resetActivitySettings = function() {
                e.positionDisabled = !1, e.positionDisabledError = !1, e.coachProfile.coach.credentials = [{
                    coaching_philosophy: null,
                    favorite_player: null,
                    favorite_team: null,
                    highest_level_played: null,
                    level_coached: [],
                    position: [],
                    years_coaching: null,
                    ntrp_rating: null,
                    your_coaching_experience: null,
                    your_playing_career: null
                }], e.position_played = [], e.level_coached = [], e.level_coached = e.setCheckBoxes(e.coachProfile.coach.credentials[0].level_coached), e.position_played = e.setCheckBoxes(e.coachProfile.coach.credentials[0].position), e.selectedClub = {}, e.fetchSportsClubs()
            }, e.afterSelect = function() {
                e.selectedClub = e.selectedClub.name
            }, e.validatingSportsForm = function(a) {
                t(function() {
                    angular.isDefined(a) && a.$valid && isSelected(e.level_coached) && isSelected(e.position_played) && e.photo.imageArray.length > 0 ? e.validSportsForm = !0 : e.validSportsForm = !1, e.$$phase || e.$apply(), e.activateSportsElements(a)
                }, 50)
            }, e.activateSportsElements = function(a) {
                t(function() {
                    angular.isDefined(localStorage.getItem("FormStep")) && null !== localStorage.getItem("FormStep") ? (e.formStep = parseInt(localStorage.getItem("FormStep")), localStorage.removeItem("FormStep")) : (e.step2Valid = !1, e.step4Valid = !1, e.step3Valid = !1, angular.isDefined(a) && angular.isDefined(a.highest_level) && a.highest_level.$valid && isSelected(e.position_played) && !e.step3Valid && (e.formStep = 2, e.step2Valid = !0), angular.isDefined(a) && angular.isDefined(a.coachingyears) && a.coachingyears.$valid && isSelected(e.level_coached) && (e.formStep = 3, e.step3Valid = !0), e.step2Valid && (e.formStep = 2), e.step3Valid && (e.formStep = 3), e.photo.imageArray.length > 0 && (e.formStep = 3, e.step4Valid = !0))
                }, 50)
            }, e.submitSportsExperience = function() {
                if (e.regStep1Form.$valid && isSelected(e.level_coached) && isSelected(e.position_played) && e.photo.imageArray.length > 0) e.coachProfile.coach.credentials[0].position = e.getList(e.position_played), e.coachProfile.coach.credentials[0].level_coached = e.getList(e.level_coached), e.coachProfile.coach.activity = e.selectedActivity.activity, isNonEmptyObject(e.selectedClub) && isNonEmptyObject(e.selectedClub._id) && (e.coachProfile.coach.club_id = e.selectedClub._id.$oid), isNonEmptyObject(e.selectedClub) && "" !== e.selectedClub.name && (e.coachProfile.coach.new_club_name = e.selectedClub.name), e.updateCoachAccount(null, "coachEnrollment.profileSummary", {
                    coachId: e.userId
                }, {
                    location: "replace"
                });
                else {
                    var t = "Incomplete Information!",
                        a = "Please enter all the required fields, including your photo.";
                    i.showAlert(t, a), e.submitted = !0, isSelected(e.level_coached) || (e.levelCoachedRequiredInvalid = !0), isSelected(e.position_played) || (e.positionRequiredInvalid = !0)
                }
            }, e.validatingForm = function(a) {
                t(function() {
                    angular.isDefined(a) && a.$valid ? e.validForm = !0 : e.validForm = !1, e.$$phase || e.$apply(), "regStep2Form" === a.$name ? e.activateSummaryElements(a) : "regStep3Form" === a.$name && e.activatePhilosophy(a), e.coachProfile.coach.pricing.individual_with_service_fee = calculateFee(e.coachProfile.coach.pricing.individual, e.serviceFee), angular.isDefined(e.coachProfile.coach.pricing.individual) && null !== e.coachProfile.coach.pricing.individual ? (e.individual_processing_fee = Math.round(parseInt(e.coachProfile.coach.pricing.individual) * parseFloat(e.serviceFee)), 0 === e.individual_processing_fee && (e.individual_processing_fee = 1)) : e.individual_processing_fee = 0, e.coachProfile.coach.pricing.group_with_service_fee = calculateFee(e.coachProfile.coach.pricing.group, e.serviceFee), angular.isDefined(e.coachProfile.coach.pricing.group) && null !== e.coachProfile.coach.pricing.group ? (e.group_processing_fee = Math.round(parseInt(e.coachProfile.coach.pricing.group) * parseFloat(e.serviceFee)), 0 === e.group_processing_fee && (e.group_processing_fee = 1)) : e.group_processing_fee = 0
                }, 50)
            }, e.activateSummaryElements = function(a) {
                t(function() {
                    angular.isDefined(localStorage.getItem("FormStep")) && null !== localStorage.getItem("FormStep") ? (e.formStep = parseInt(localStorage.getItem("FormStep")), localStorage.removeItem("FormStep")) : (e.step2Valid = !1, e.step4Valid = !1, e.step3Valid = !1, angular.isDefined(a.summary) && null !== e.coachProfile.coach.profile.bio && a.summary.$valid && !e.step3Valid && (e.formStep = 2, e.step2Valid = !0), null === e.coachProfile.coach.profile.bio && (e.formStep = 1), angular.isDefined(a.individual_price) && a.individual_price.$valid && angular.isDefined(a.group_price) && a.group_price.$valid && (e.formStep = 3, e.step3Valid = !0), e.step2Valid && (e.formStep = 2), e.step3Valid && (e.formStep = 3), (angular.isDefined(a.min_group_size) && a.min_group_size.$valid || angular.isDefined(a.max_group_size) && a.max_group_size.$valid) && (e.formStep = 3, e.step4Valid = !0))
                }, 50)
            }, e.activatePhilosophy = function(a) {
                t(function() {
                    angular.isDefined(localStorage.getItem("FormStep")) && null !== localStorage.getItem("FormStep") ? (e.formStep = parseInt(localStorage.getItem("FormStep")), localStorage.removeItem("FormStep")) : (e.step2Valid = !1, e.step4Valid = !1, e.step3Valid = !1, angular.isDefined(a.philosophy) && a.philosophy.$valid && !e.step3Valid && (e.formStep = 2, e.step2Valid = !0), angular.isDefined(a.playing_career) && a.playing_career.$valid && (e.formStep = 3, e.step3Valid = !0), e.step2Valid && (e.formStep = 2), e.step3Valid && (e.formStep = 3), angular.isDefined(a.coaching_experience) && a.coaching_experience.$valid && (e.formStep = 3, e.step4Valid = !0))
                }, 50)
            }, e.openLocationPopup = function(e, t, o) {
                var n = "/partials/coachEnrollment/views/modals/coachEnrollment.locationInstrnPopup.html",
                    s = "model-sessioncreate model-sessionreschedule modal-gray-bg modal-location-wrap",
                    i = "ModalController";
                v.modalOpen(n, s, i, null, function(n) {
                    "ok" === n.$$state.value && a.go(e, t, o)
                })
            }, e.updateCoachAccount = function(t, o, s, c) {
                if (null == t || null !== t && t.$valid) e.showLoader(), e.coachProfile.coach.pricing = {
                    individual: 0 !== parseInt(e.coachProfile.coach.pricing.individual) ? parseInt(e.coachProfile.coach.pricing.individual) : null,
                    individual_with_service_fee: calculateFee(e.coachProfile.coach.pricing.individual, e.serviceFee),
                    group: 0 !== parseInt(e.coachProfile.coach.pricing.group) ? parseInt(e.coachProfile.coach.pricing.group) : null,
                    group_with_service_fee: calculateFee(e.coachProfile.coach.pricing.group, e.serviceFee),
                    min_group_size: 0 !== parseInt(e.coachProfile.coach.pricing.min_group_size) ? parseInt(e.coachProfile.coach.pricing.min_group_size) : null,
                    max_group_size: 0 !== parseInt(e.coachProfile.coach.pricing.max_group_size) ? parseInt(e.coachProfile.coach.pricing.max_group_size) : null
                }, n.updateAccount(e.coachProfile, e.userId, function(t) {
                    t.$resolved && 200 === t.status && (e.userId = t.data.id.$oid, e.setCoachProfile(t), r.setData("CoachProfile", JSON.stringify(e.coachProfile.coach)), r.setData("CoachProfileId", e.userId), r.setData("CoachProfilePhoto", JSON.stringify(e.photo.imageArray)), u.removeTokens(), u.setJwtToken(t.data.jwt.token), g.$emit("refreshHeader"), "coachEnrollment.trainingLocation" === o && e.$parent.locationServiceOff ? e.openLocationPopup(o, s, c) : a.go(o, s, c), g.$viewHistory = {
                        histories: {
                            root: {
                                historyId: "root",
                                parentHistoryId: null,
                                stack: [],
                                cursor: -1
                            }
                        },
                        backView: null,
                        forwardView: null,
                        currentView: null,
                        disabledRegistrableTagNames: []
                    }), e.hideLoader()
                }, function(t) {
                    if (422 === t.status) {
                        var a = "Error!",
                            o = t.statusText;
                        t.data.data.hasOwnProperty("email") ? o = "Email " + t.data.data.email[0] : t.data.data.hasOwnProperty("phone") && (o = "Phone " + t.data.data.phone[0]), i.showAlert(a, o)
                    }
                    e.hideLoader()
                });
                else {
                    var l = "Incomplete Information!",
                        d = "Please enter all the required fields";
                    i.showAlert(l, d), e.submitted = !0
                }
            }, e.$on("ngRepeatFinished", function() {
                e.mapLoaded || e.loadMap(), resetMap(S)
            }), e.$on("$destroy", function() {
                null !== S && (S = null, e.mapLoaded = !1)
            }), e.checkAgeInvalid = function() {
                var t = calculateAge(new Date(e.coachProfile.coach.profile.dob));
                parseInt(t) >= 18 ? e.ageInvalid = !1 : e.ageInvalid = !0, parseInt(t) <= 99 ? e.ageExceed = !1 : e.ageExceed = !0, e.validatingAccount()
            }, e.boundInputBox = function(a, o) {
                var n = {
                    types: [],
                    componentRestrictions: {
                        country: "us"
                    },
                    enableHighAccuracy: !0,
                    timeout: 3e4,
                    panControl: !0,
                    mapTypeControl: !1,
                    panControlOptions: {
                        position: google.maps.ControlPosition.RIGHT_CENTER
                    },
                    zoomControl: !0,
                    zoomControlOptions: {
                        style: google.maps.ZoomControlStyle.LARGE,
                        position: google.maps.ControlPosition.RIGHT_CENTER
                    },
                    scaleControl: !1,
                    streetViewControl: !1,
                    streetViewControlOptions: {
                        position: google.maps.ControlPosition.RIGHT_CENTER
                    }
                };
                t(function() {
                    var t = document.getElementById("location-" + o),
                        s = new google.maps.places.Autocomplete(t, n);
                    s.bindTo("bounds", S), s.addListener("place_changed", function() {
                        var t = s.getPlace(),
                            n = document.getElementById("nearbypark" + o);
                        e.createMarkerAutocomplete(t, n, "#location-" + o, o), e.setLocation(t, a, o), null !== S && S.setZoom(13)
                    })
                })
            }, e.showError = function(t) {
                switch (t.code) {
                    case t.PERMISSION_DENIED:
                        e.$parent.locationServiceOff = !0, e.mapErrorMessage = "Your location services are turned off. Please go to Settings or Preferences and enable your location services so you can see your training locations.";
                        break;
                    case t.POSITION_UNAVAILABLE:
                        e.mapErrorMessage = "Location information is unavailable.";
                        break;
                    case t.TIMEOUT:
                        e.mapErrorMessage = "The request to get user location timed out.";
                        break;
                    case t.UNKNOWN_ERROR:
                        e.mapErrorMessage = "An unknown error occurred."
                }
                e.mapUnavailable = !0, e.hideMapLoader(), null !== S && (S = null, e.mapLoaded = !1)
            }, e.loadMap = function() {
                t(function() {
                    try {
                        e.showMapLoader(), loadGoogleAPI();
                        var a, o = {
                                enableHighAccuracy: !0,
                                timeout: 3e4,
                                maximumAge: 0
                            },
                            n = {},
                            s = [];
                        navigator.geolocation.getCurrentPosition(function(r) {
                            function c(t, o, n, s) {
                                var i = new google.maps.places.PlacesService(S);
                                i.getDetails({
                                    placeId: t.place_id
                                }, function(t) {
                                    t.address_components && (a = [t.address_components[0] && t.address_components[0].short_name || "", t.address_components[1] && t.address_components[1].short_name || "", t.address_components[2] && t.address_components[2].short_name || ""].join(" ")), window[s].close(), window[s] = new google.maps.InfoWindow, window[s].setContent("<div><strong>" + t.name + "</strong><br>" + a), window[s].open(S, o), e.setLocation(t, e.trainingLocations[n], n)
                                })
                            }
                            e.$parent.locationServiceOff = !1, r ? (n.lat = r.coords.latitude, n.lng = r.coords.longitude) : (n.lat = 39.113014, n.lng = -105.358887);
                            var l = new google.maps.LatLng(n.lat, n.lng);
                            S = new google.maps.Map(document.getElementById("map"), {
                                center: l,
                                mapTypeId: google.maps.MapTypeId.ROADMAP,
                                zoom: 13,
                                panControl: !0,
                                mapTypeControl: !1,
                                panControlOptions: {
                                    position: google.maps.ControlPosition.RIGHT_CENTER
                                },
                                zoomControl: !0,
                                zoomControlOptions: {
                                    style: google.maps.ZoomControlStyle.LARGE,
                                    position: google.maps.ControlPosition.RIGHT_CENTER
                                },
                                scaleControl: !1,
                                streetViewControl: !1,
                                streetViewControlOptions: {
                                    position: google.maps.ControlPosition.RIGHT_CENTER
                                }
                            }), resetMap(S), o = {
                                types: [],
                                componentRestrictions: {
                                    country: "us"
                                },
                                enableHighAccuracy: !0,
                                timeout: 3e4,
                                panControl: !0,
                                mapTypeControl: !1,
                                panControlOptions: {
                                    position: google.maps.ControlPosition.RIGHT_CENTER
                                },
                                zoomControl: !0,
                                zoomControlOptions: {
                                    style: google.maps.ZoomControlStyle.LARGE,
                                    position: google.maps.ControlPosition.RIGHT_CENTER
                                },
                                scaleControl: !1,
                                streetViewControl: !1,
                                streetViewControlOptions: {
                                    position: google.maps.ControlPosition.RIGHT_CENTER
                                }
                            }, e.$$phase || e.$apply(), e.boundInputBoxes = function() {
                                o = {
                                    types: [],
                                    componentRestrictions: {
                                        country: "us"
                                    },
                                    enableHighAccuracy: !0,
                                    timeout: 3e4,
                                    panControl: !0,
                                    mapTypeControl: !1,
                                    panControlOptions: {
                                        position: google.maps.ControlPosition.RIGHT_CENTER
                                    },
                                    zoomControl: !0,
                                    zoomControlOptions: {
                                        style: google.maps.ZoomControlStyle.LARGE,
                                        position: google.maps.ControlPosition.RIGHT_CENTER
                                    },
                                    scaleControl: !1,
                                    streetViewControl: !1,
                                    streetViewControlOptions: {
                                        position: google.maps.ControlPosition.RIGHT_CENTER
                                    }
                                }, e.trainingLocations.forEach(function(a, n) {
                                    t(function() {
                                        var t = document.getElementById("location-" + n),
                                            s = new google.maps.places.Autocomplete(t, o);
                                        s.bindTo("bounds", S), resetMap(S), s.addListener("place_changed", function() {
                                            var t = s.getPlace(),
                                                o = document.getElementById("nearbypark" + n);
                                            e.createMarkerAutocomplete(t, o, "#location-" + n, n), e.setLocation(t, a, n), null !== S && S.setZoom(13)
                                        })
                                    })
                                })
                            }, e.boundInputBoxes(), e.hideMapLoader(), resetMap(S), e.mapLoaded || null === e.trainingLocations[0].google_id ? (null === e.trainingLocations[0].google_id && (e.mapLoaded = !0, resetMap(S)), e.hideMapLoader()) : e.trainingLocations.forEach(function(t, a) {
                                if (angular.isDefined(t.google_id) && null !== t.google_id) {
                                    var o = document.getElementById("nearbypark" + a),
                                        n = new google.maps.places.PlacesService(S);
                                    n.getDetails({
                                        placeId: t.google_id
                                    }, function(t, n) {
                                        if (n === google.maps.places.PlacesServiceStatus.OK && (e.createMarkerAutocomplete(t, o, "#location-" + a, a), s.push(t.geometry.location), s.length === e.trainingLocations.length)) {
                                            for (var i = new google.maps.LatLngBounds, r = 0; r < s.length; r++) i.extend(s[r]);
                                            e.mapLoaded = !0
                                        }
                                    })
                                } else e.mapLoaded = !0, resetMap(S), e.hideMapLoader()
                            }), resetMap(S), e.setLocation = function(t, a, o) {
                                for (var n = {
                                    street_number: "long_name",
                                    locality: "long_name",
                                    route: "long_name",
                                    administrative_area_level_1: "short_name",
                                    postal_code: "short_name"
                                }, s = {
                                    locality: "city",
                                    street_number: "street_number",
                                    route: "route",
                                    administrative_area_level_1: "state",
                                    postal_code: "zip"
                                }, r = {
                                    name: null,
                                    address: {},
                                    google_id: null
                                }, c = 0; c < t.address_components.length; c++) {
                                    var l = t.address_components[c].types[0];
                                    if (n[l]) {
                                        var d = t.address_components[c][n[l]];
                                        r.address[s[l]] = d
                                    }
                                }
                                r.google_id = t.place_id, r.name = t.name, r.address.street = (angular.isDefined(r.address.street_number) ? r.address.street_number : "") + (angular.isDefined(r.address.route) && r.address.route !== r.name ? " " + r.address.route : ""), r.formattedAddress = t.name + ", " + t.formatted_address, delete r.address.street_number, delete r.address.route;
                                var u, m;
                                e.isDuplicates(r, o) ? (u = "Error!", m = "This location has already been selected. Please select a different location.", i.showAlert(u, m), a.name = null, a.address = {}, a.formattedAddress = null) : e.isInvalid(r) ? (u = "Error!", m = "This location is not valid. Please select another location which have zip code and street address", i.showAlert(u, m), a.name = null, a.address = {}, a.formattedAddress = null) : (a.name = r.name, a.address = r.address, a.google_id = r.google_id, a.formattedAddress = r.formattedAddress, e.$apply()), e.validatingData()
                            }, e.isDuplicates = function(t, a) {
                                var o = !1;
                                return e.trainingLocations.forEach(function(e, n) {
                                    e.name === t.name && angular.equals(e.address, t.address) && a !== n && (o = !0)
                                }), o
                            }, e.isInvalid = function(e) {
                                var t = !0;
                                return e.name && e.address.street && e.address.zip && (t = !1), t
                            }, e.createMarkerAutocomplete = function(a, o, n, s) {
                                t(function() {
                                    var t = [],
                                        n = new google.maps.Marker({
                                            map: S,
                                            position: a.geometry.location
                                        }),
                                        i = "infowindow" + s;
                                    if (window[i] = new google.maps.InfoWindow, n.setVisible(!1), !a.geometry) return void window.alert("Autocomplete's returned place contains no geometry");
                                    if (a.address_components) var r = [a.address_components[0] && a.address_components[0].short_name || "", a.address_components[1] && a.address_components[1].short_name || "", a.address_components[2] && a.address_components[2].short_name || ""].join(" ");
                                    window[i].close(), window[i] = new google.maps.InfoWindow, window[i].setContent("<div><strong>" + a.name + "</strong><br>" + r), window[i].open(S, n), n.setVisible(!0), google.maps.event.addListener(n, "click", function() {
                                        c(a, n, s, i)
                                    }), e.createMarker = function(e, a) {
                                        for (var o = new google.maps.Marker({
                                            map: S,
                                            position: e.geometry.location
                                        }), n = new google.maps.LatLngBounds, s = 0; s < t.length; s++) n.extend(t[s]);
                                        S.fitBounds(n), google.maps.event.addDomListener(window, "load", resetMap(S)), google.maps.event.addListener(o, "click", function() {
                                            c(e, o, a, i)
                                        })
                                    }, r = "", null !== o && o.addEventListener("click", function() {
                                        var a = new google.maps.places.PlacesService(S);
                                        a.getDetails({
                                            placeId: e.trainingLocations[s].google_id
                                        }, function(a, o) {
                                            if (o === google.maps.places.PlacesServiceStatus.OK) {
                                                n = new google.maps.Marker({
                                                    map: S,
                                                    position: a.geometry.location
                                                }), google.maps.event.addListener(n, "click", function() {
                                                    c(a, n, s, i)
                                                });
                                                var r = n.getPosition().lat(),
                                                    l = n.getPosition().lng(),
                                                    d = {
                                                        lat: r,
                                                        lng: l
                                                    },
                                                    u = new google.maps.places.PlacesService(S);
                                                u.nearbySearch({
                                                    location: d,
                                                    radius: 4830,
                                                    type: ["park"]
                                                }, function(o, n) {
                                                    if (n === google.maps.places.PlacesServiceStatus.OK)
                                                        for (var i = 0; i < o.length; i++) e.createMarker(o[i], s), t.push(o[i].geometry.location);
                                                    else e.createMarker(a, s)
                                                })
                                            }
                                        })
                                    })
                                })
                            }
                        }, e.showError, o)
                    } catch (t) {
                        null !== S && (S = null, e.mapLoaded = !1)
                    }
                })
            }, e.setLocations = function(t) {
                t.training_locations.forEach(function(t, a) {
                    if (angular.isUndefined(e.trainingLocations[a]) || null === e.trainingLocations[a]) {
                        var o = {
                            title: "Other Location",
                            id: t.id.$oid,
                            name: null,
                            address: {},
                            google_id: null,
                            formattedAddress: null,
                            days: []
                        };
                        e.trainingLocations.push(o)
                    }
                    e.trainingLocations[a].google_id = t.google_id, e.trainingLocations[a].id = t.id.$oid, e.trainingLocations[a].formattedAddress = (angular.isDefined(t.name) && null !== t.name && "" !== t.name ? t.name + ", " : "") + (angular.isDefined(t.address.street) && null !== t.address.street && "" !== t.address.street ? t.address.street + ", " : "") + (angular.isDefined(t.address.city) && null !== t.address.city && "" !== t.address.city ? t.address.city + ", " : "") + (angular.isDefined(t.address.state) && null !== t.address.state && "" !== t.address.state ? t.address.state + ", " : "") + (angular.isDefined(t.address.zip) && null !== t.address.zip && "" !== t.address.zip ? t.address.zip : ""), angular.isUndefined(t.address) ? e.trainingLocations[a].address = null : e.trainingLocations[a].address = t.address, angular.isUndefined(t.days) ? e.trainingLocations[a].days = [] : e.trainingLocations[a].days = t.days, angular.isUndefined(t.name) ? e.trainingLocations[a].name = null : e.trainingLocations[a].name = t.name, t.days && (e.trainingLocations[a].selecteddays = e.setDaysCheckBoxes(t.days), e.setSelectedWeekDays(e.trainingLocations[a]))
                }), e.validatingData()
            }, e.initializeLocations = function() {
                var t = r.getData("CoachTrainingLocations");
                angular.isUndefined(t) || null === t || 0 === JSON.parse(t).length ? e.trainingLocations = [{
                    title: "Preferred Training Location",
                    name: null,
                    address: {},
                    google_id: null,
                    formattedAddress: null,
                    days: []
                }, {
                    title: "Other Location",
                    name: null,
                    address: {},
                    google_id: null,
                    formattedAddress: null,
                    days: []
                }] : e.trainingLocations = JSON.parse(t), e.trainingLocations.forEach(function(t) {
                    t.selecteddays = e.setDaysCheckBoxes(t.days), e.setSelectedWeekDays(t)
                })
            }, e.addAnotherLoc = function() {
                var t = {
                    title: "Other Location",
                    name: null,
                    address: {},
                    google_id: null,
                    formattedAddress: null,
                    days: []
                };
                e.boundInputBox(t, e.trainingLocations.length), e.trainingLocations.push(t)
            }, e.isWeekDaySelectedByOther = function(t, a) {
                var o = !1;
                return e.trainingLocations.forEach(function(e, n) {
                    n !== t && !angular.isUndefined(e.selecteddays) && e.selecteddays[a.name] && (o = !0)
                }), o
            }, e.setDayStatus = function(e, t) {
                !angular.isUndefined(e.selecteddays) && e.selecteddays[t.name] ? t.selected = !0 : t.selected = !1
            }, e.setSelectedWeekDays = function(t) {
                e.weekDays.forEach(function(e) {
                    angular.isDefined(t.selecteddays) && t.selecteddays[e.name] && (e.selected = !0)
                })
            }, e.isWeekDayAvailable = function() {
                var t = !1;
                return e.weekDays.forEach(function(e) {
                    e.selected || (t = !0)
                }), t
            }, e.isDaySelectedForLocation = function(e) {
                var t = !1;
                return angular.forEach(e.selecteddays, function(e) {
                    e && (t = !0)
                }), t
            }, e.checkifCleared = function(e) {
                "" !== e.name && null !== e.name || (e.address = {})
            }, e.validatingData = function() {
                t(function() {
                    angular.isDefined(e.regFormStep4) && e.regFormStep4.$valid && !e.isWeekDayAvailable() ? (e.locationSubmit = !0, e.coachProfile.coach.locations = [], e.trainingLocations.forEach(function(t) {
                        if (e.isDaySelectedForLocation(t)) {
                            var a = e.getListofSelected(t.selecteddays);
                            if (null !== t.name && null !== t.address && "" !== t.name && t.address !== {}) {
                                var o = {
                                    id: t.id,
                                    name: t.name,
                                    google_id: t.google_id,
                                    address: t.address,
                                    days: a
                                };
                                e.coachProfile.coach.locations.push(o)
                            } else e.locationSubmit = !1
                        }
                    })) : e.locationSubmit = !1, e.$$phase || e.$apply()
                }, 3)
            }, e.submitTrainingLocations = function() {
                var t, a;
                e.locationSubmit = !0, e.regFormStep4.$valid && !e.isWeekDayAvailable() ? (e.validatingData(), e.locationSubmit ? (e.setProfileImage(e.photo.imageArray[0]), g.$emit("refreshHeader"), e.updateCoachAccount(null, "coachEnrollment.coachingInfo", {
                    coachId: e.userId
                })) : (t = "Incomplete Information!", a = "Please select your training location(s).", i.showAlert(t, a))) : (e.isWeekDayAvailable() ? (t = "Incomplete Information!", a = "Please select a training location for each day, even if you do not currently plan to coach every day.") : (t = "Incomplete Information!", a = "Please enter all the required fields"), i.showAlert(t, a), e.submitted = !0)
            }, e.cancelEnrollment = function() {
                var t = {
                    title: "Confirm",
                    message: "Are you sure you want to cancel your application to become a coach on StriveFar?",
                    positiveBtn: "Cancel",
                    negativeBtn: "Don't Cancel"
                };
                f.showDialog(t, function(t) {
                    if ("yes" === t.$$state.value) {
                        var o = {
                            coach: {
                                status: 4
                            }
                        };
                        n.updateAccount(o, e.userId, function() {
                            a.go("home"), g.$emit("logout")
                        })
                    }
                })
            }, e.submitCoachProfile = function() {
                e.successForm.$valid && (e.setProfileImage(e.photo.imageArray[0]), e.coachProfile.coach.profile_completion_stage = 0, e.updateCoachAccount(null, "home"), g.$emit("refreshHeader"))
            }, e.validatingFinalData = function() {
                t(function() {
                    angular.isDefined(e.successForm) && e.successForm.$valid ? e.validForm = !0 : e.validForm = !1, e.$$phase || e.$apply()
                })
            }, e.acceptTerms = function() {
                e.infoAccurate = !0, e.acceptTerms = !0
            }, e.initGoogleLocations = function() {
                function t() {
                    for (var t = {
                        street_number: "long_name",
                        locality: "long_name",
                        route: "long_name",
                        administrative_area_level_1: "short_name",
                        postal_code: "short_name"
                    }, o = {
                        locality: "city",
                        street_number: "street_number",
                        route: "route",
                        administrative_area_level_1: "state",
                        postal_code: "zip"
                    }, n = a.getPlace(), s = {
                        name: null,
                        address: {},
                        google_id: null
                    }, i = 0; i < n.address_components.length; i++) {
                        var r = n.address_components[i].types[0];
                        if (t[r]) {
                            var c = n.address_components[i][t[r]];
                            s.address[o[r]] = c
                        }
                    }
                    s.address.street = (angular.isDefined(s.address.street_number) ? s.address.street_number : "") + (angular.isDefined(s.address.route) && s.address.route !== s.name ? " " + s.address.route : ""), e.coachProfile.coach.address = {}, e.coachProfile.coach.address.street = s.address.street, e.coachProfile.coach.address.city = s.address.city, e.coachProfile.coach.address.state = s.address.state, e.coachProfile.coach.address.zip = s.address.zip, e.$$phase || e.$apply(), e.validatingFinalData()
                }
                var a = new google.maps.places.Autocomplete(document.getElementById("autocomplete"), {
                    types: [],
                    componentRestrictions: {
                        country: "us"
                    }
                });
                e.$$phase || e.$apply(), a.addListener("place_changed", t)
            }
        };
        e.$inject = ["$scope", "$timeout", "$state", "$window", "CoachEnrollmentInterfaceService", "ActivitiesService", "AlertService", "StoreService", "appConfig", "UploadPhotoService", "AuthFactory", "AuthTokenFactory", "urlConfig", "$stateParams", "CommonAPIInterfaceService", "$rootScope", "ConfirmDialogService", "Coachco_CommonService"], angular.module("Coachco").controller("CoachEnrollmentController", e)
    }(),
    function() {
        var e = function(e, t, a, o) {
            e.locationServiceOff = !0, e.fetchServiceFee = function() {
                a.getServiceFee(function(t) {
                    t.$resolved && 200 === t.status && (e.serviceFee = t.data.service_fee)
                })
            }, e.fetchServiceFee(), e.setStatusOfActivities = function(e) {
                e.forEach(function(e, t) {
                    0 === t ? e.active = "true" : e.active = "false"
                })
            }, e.setStatusOfClubs = function(e) {
                e.forEach(function(e, t) {
                    0 === t ? e.active = "true" : e.active = "false"
                })
            }, e.fetchActivityDetails = function() {
                e.activities = [], o.getCoachActivities(function(t) {
                    t.$resolved && 200 === t.status && t.data.length > 0 && (e.setStatusOfActivities(t.data), e.activities = t.data)
                }, function(e) {
                    var a = "Error!",
                        o = e.statusText;
                    t.showAlert(a, o)
                })
            }, e.fetchActivityDetails()
        };
        e.$inject = ["$scope", "AlertService", "CommonAPIInterfaceService", "ActivitiesService"], angular.module("Coachco").controller("CoachEnrollmentParentController", e)
    }(),
    function(e) {
        var t = function(e, t, a, o, n, s, i, r, c, l, d, u, m) {
            e.message = "", e.clientRescheduleSession = c.clientRescheduleSession, e.ifAdminReview = c.ifAdminReview, e.submitting = !1, e.close = function() {
                localStorage.removeItem("currentSchedule"), localStorage.removeItem("pageSchedule"), i.modalClose(o)
            }, e.sessionData = c, e.athletes = e.sessionData.athletes;
            var h = {};
            e.cancelSession = function() {
                if (e.submitting = !0, h = {
                        coach_id: u.getCoachId(),
                        reason_for_cancellation: e.message
                    }, u.isCoach() && !e.ifAdminReview) l.deleteSession(u.getCoachId(), e.sessionData.coachTrainingSessionId, h).success(function(t, a) {
                    200 === a ? (e.submitting = !1, i.modalDone(o, "success"), localStorage.removeItem("rescheduleSession"), localStorage.removeItem("currentSchedule"), localStorage.removeItem("pageSchedule")) : (e.submitting = !1, i.modalDone(o, "error"))
                }).error(function(t) {
                    if (i.modalDone(o, "error"), e.submitting = !1, 409 === t.status) {
                        var a = "Error!",
                            n = "This session is already cancelled";
                        d.showAlert(a, n)
                    }
                });
                else if (u.isAdmin() && e.ifAdminReview) {
                    var t = "Error!",
                        a = "You are not permitted to reschedule or change location.";
                    d.showAlert(t, a)
                }
            }
        };
        t.$inject = ["$scope", "$rootScope", "$stateParams", "$uibModalInstance", "$compile", "$timeout", "Coachco_CommonService", "SessionService", "sessionData", "CoachProfileService", "AlertService", "AuthFactory", "CoachProfileInterfaceService"], e.module("Coachco").controller("sessionCancelController", t)
    }(angular),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d, u, m) {
            e.$parent.currentState = o.current.name, e.showLoader = !1, e.isInboxAppended = !1, e.profile.bgCheck = !1, e.profile.trainingNotify = !1, e.profile.messageNotify = !1, e.profile.reviewNotify = !1, e.setMobileView = !1, e.childView = !1, e.listClients = !1, a.showClientList = !1, e.pageSize = 20, e.currentPage = 0;
            var h = angular.element(".dashbroad-wrapper"),
                p = angular.element("#dashboard-clients"),
                g = n.coachId;
            a.activeMenu = "Setavailavility", e.loadChildSessionData = function(t, a) {
                t.age = calculateAge(new Date(t.profile.dob)), e.selectedAthlete = t, e.selectedAthlete.index = a, e.$parent.athleteProfile = {
                    athlete_profile: {
                        level: e.selectedAthlete.level,
                        position: e.selectedAthlete.position,
                        club: e.selectedAthlete.club,
                        favorite_player: e.selectedAthlete.favorite_player,
                        favorite_team: e.selectedAthlete.favorite_team,
                        objectives: e.selectedAthlete.objectives,
                        notes: e.selectedAthlete.notes,
                        personality: e.selectedAthlete.personality
                    }
                }, e.$parent.athleteProfileTemp = angular.copy(e.$parent.athleteProfile), e.setMobileView === !0 && (h.addClass("child-view"), p.addClass("btn-class"));
                var o = {
                    athlete: t,
                    athleteIndex: a
                };
                e.dummyClient || localStorage.setItem("clientsTabAthleteSelected", angular.toJson(o)), e.fetchAthleteSessions()
            }, e.fetchAthleteSessions = function() {
                s.getAthleteSessions(g, e.selectedClient.client_id, e.selectedAthlete.athlete_id, function(t) {
                    t.$resolved && 200 === t.status && (e.selectedAthlete.sessions = t.data, e.selectedAthlete.sessions.forEach(function(e) {
                        var t = angular.isDefined(e.location.address.street) && null !== e.location.address.street && "" !== e.location.address.street,
                            a = angular.isDefined(e.location.address.state) && null !== e.location.address.state && "" !== e.location.address.state,
                            o = angular.isDefined(e.location.address.city) && null !== e.location.address.city && "" !== e.location.address.city,
                            n = angular.isDefined(e.location.address.zip) && null !== e.location.address.zip && "" !== e.location.address.zip;
                        e.locationAddress = (t ? e.location.address.street : "") + (t && o ? ", " : "") + (o ? e.location.address.city : "") + (o && a ? ", " : "") + (a ? e.location.address.state : "") + (a && n ? " " : "") + (n ? e.location.address.zip : "")
                    }))
                }, function(t) {
                    var a = "Success!",
                        o = "Error!";
                    i.showAlert(a, o, function(t) {
                        "ok" === t.$$state.value && e.setClientData(e.selectedClient.client_id, e.selectedAthlete.index)
                    })
                })
            }, e.sendSessionPlanner = function() {
                var t = {
                        toId: e.selectedClient.client_id,
                        email: e.selectedClient.client_email,
                        toRole: "client",
                        fromId: n.coachId,
                        role: "coach",
                        message: null,
                        recepientName: e.selectedClient.client_name
                    },
                    a = "/partials/coachProfile/views/modal/coachProfile.emailSessionPlanner.html",
                    o = "model-createmessage",
                    s = "EmailSessionPlannerController";
                l.modalOpen(a, o, s, t, function(t) {
                    if ("success" === t.$$state.value) {
                        var a = "Success!",
                            o = "The session planner has been sent to the client " + e.selectedClient.client_name + "'s registered email";
                        i.showAlert(a, o)
                    }
                })
            }, e.setClientData = function(t, a, n) {
                "123456" === t ? (e.dummyClient = !0, u.getClientDetails("123456", function(t) {
                    if (t.$resolved && 200 === t.status) {
                        if (e.selectedClient = t.data, n && angular.isDefined(localStorage.getItem("clientsTabAthleteSelected")) && null !== localStorage.getItem("clientsTabAthleteSelected")) {
                            var s = JSON.parse(localStorage.getItem("clientsTabAthleteSelected"));
                            e.loadChildSessionData(s.athlete, parseInt(s.index))
                        } else e.loadChildSessionData(t.data.athletes[a], a);
                        h.addClass("open"), e.selectedClient.athletes.forEach(function(e) {
                            d.isImage(e.athlete_profile_image).then(function(t) {
                                t || (e.athlete_profile_image = null)
                            })
                        }), o.go(e.baseState + ".clients.athlete")
                    }
                }, function(e) {
                    console.log(e)
                })) : (e.dummyClient = !1, s.getClientDetails(g, t, function(t) {
                    if (t.$resolved && 200 === t.status) {
                        if (e.selectedClient = t.data, n && angular.isDefined(localStorage.getItem("clientsTabAthleteSelected")) && null !== localStorage.getItem("clientsTabAthleteSelected")) {
                            var s = JSON.parse(localStorage.getItem("clientsTabAthleteSelected"));
                            e.loadChildSessionData(s.athlete, parseInt(s.index))
                        } else e.loadChildSessionData(t.data.athletes[a], a);
                        h.addClass("open"), e.selectedClient.athletes.forEach(function(e) {
                            d.isImage(e.athlete_profile_image).then(function(t) {
                                t || (e.athlete_profile_image = null)
                            })
                        }), isMobile() && angular.element(".coach-clients-detailed-view").removeClass("hide-elements").addClass("show-elements"), o.go(e.baseState + ".clients.athlete")
                    }
                }, function(e) {
                    console.log(e)
                }));
                var i = {
                    id: t,
                    clientIndex: a
                };
                e.dummyClient || localStorage.setItem("clientTabClientSelected", angular.toJson(i))
            }, e.checkforUpdates = function(t, o) {
                if (angular.equals(e.athleteProfile, e.athleteProfileTemp)) e.setClientData(t, o);
                else {
                    var n = {
                        title: "Discard your changes?",
                        message: "You have unsaved changes which will be lost if you continue.",
                        note: 'To save your changes, please â€œCancelâ€ and then click "Updateâ€ at the bottom of the page.',
                        positiveBtn: "Continue",
                        negativeBtn: "Cancel"
                    };
                    c.showDialog(n, function(a) {
                        "yes" === a.$$state.value && (e.athleteProfile = angular.copy(e.athleteProfileTemp), e.setClientData(t, o))
                    })
                }
                isMobile() ? (e.listClients = !0, a.showClientList = !0, angular.element("#dashbroad-wrapper-client").find(".dashboard-left").addClass("hide-elements")) : a.showClientList = !1
            }, e.checkforAthleteUpdates = function(t, o) {
                if (angular.equals(e.athleteProfile, e.athleteProfileTemp)) e.loadChildSessionData(t, o), isMobile() && (a.showClientList = !1, e.childView = !0, angular.element(".dashboard-session-info").addClass("hide-elements"), angular.element("#dashboard-session-btm-mob").addClass("show-mobile"));
                else {
                    var n = {
                        title: "Discard your changes?",
                        message: "You have unsaved changes which will be lost if you continue.",
                        note: 'To save your changes, please â€œCancelâ€ and then click "Updateâ€ at the bottom of the page.',
                        positiveBtn: "Continue",
                        negativeBtn: "Cancel"
                    };
                    c.showDialog(n, function(a) {
                        "yes" === a.$$state.value && (e.athleteProfile = angular.copy(e.athleteProfileTemp), e.loadChildSessionData(t, o))
                    })
                }
            }, e.getDummyClients = function() {
                u.getClientsList(function(t) {
                    if (t.$resolved && 200 === t.status && (e.clients = t.data, e.clients.forEach(function(e) {
                            d.isImage(e.profile_image).then(function(t) {
                                t || (e.profile_image = null)
                            })
                        }), e.clients.length > 0)) {
                        if (angular.isDefined(localStorage.getItem("clientTabClientSelected")) && null !== localStorage.getItem("clientTabClientSelected")) {
                            var a = JSON.parse(localStorage.getItem("clientTabClientSelected"));
                            e.setClientData(a.id, a.clientIndex, !0)
                        } else e.setClientData(e.clients[0].client_id, 0);
                        e.fetchingClients = !1
                    }
                }, function(t) {
                    e.fetchingClients = !1, console.log(t)
                })
            }, e.getClients = function() {
                e.fetchingClients = !0, e.clients = [];
                var t = !1;
                s.getClientsList(g, function(a) {
                    if (a.$resolved && 200 === a.status)
                        if (a.data.length > 0)
                            if (e.clients = a.data, e.clients.forEach(function(e) {
                                    d.isImage(e.profile_image).then(function(t) {
                                        t || (e.profile_image = null)
                                    }), e.has_sessions && (t = !0)
                                }), t) {
                                if (angular.isDefined(localStorage.getItem("clientTabClientSelected")) && null !== localStorage.getItem("clientTabClientSelected")) {
                                    var o = JSON.parse(localStorage.getItem("clientTabClientSelected"));
                                    e.setClientData(o.id, o.clientIndex, !0)
                                } else e.setClientData(e.clients[0].client_id, 0);
                                e.fetchingClients = !0
                            } else e.getDummyClients();
                        else e.getDummyClients()
                }, function(t) {
                    e.fetchingClients = !1, console.log(t)
                })
            }, e.getClients(), window.onbeforeunload = function() {
                localStorage.setItem("currentStateName", "clients"), angular.isDefined(n.coachId) && localStorage.setItem("coachId", n.coachId)
            }, e.createMessage = function() {
                var t = {
                    toId: e.selectedClient.client_id,
                    toRole: "client",
                    fromId: n.coachId,
                    role: "coach",
                    message: null,
                    recepientName: e.selectedClient.client_name
                };
                r.composeDialog(t, function(t) {
                    if ("send" === t.$$state.value) {
                        var a = "Success!",
                            o = "A message has been successfully sent to " + e.selectedClient.client_name + "s account and an email to his/her registered email.";
                        i.showAlert(a, o)
                    }
                })
            }, e.updateClientAccount = function() {
                s.updateAthleteAccount(g, e.selectedClient.client_id, e.selectedAthlete.athlete_id, e.$parent.athleteProfile, function(t) {
                    if (t.$resolved && 204 === t.status) {
                        var a = "Success!",
                            o = "Profile has been updated successfully!";
                        i.showAlert(a, o, function(t) {
                            "ok" === t.$$state.value && (e.setClientData(e.selectedClient.client_id, e.selectedAthlete.index), e.$parent.athleteProfileTemp = angular.copy(e.$parent.athleteProfile))
                        })
                    }
                })
            }, e.openSessionFeedback = function(t, a) {
                t.viewOnlyMode = null !== a && void 0 !== a && a;
                var o = "/partials/coachProfile/views/modal/coachProfile.sessionFeedback.html",
                    n = "model-sessionfeedback",
                    s = "sessionFeedbackController";
                l.modalOpen(o, n, s, t, function(t) {
                    "success" === t.$$state.value && e.fetchAthleteSessions()
                })
            }, e.openChangeLocation = function(t) {
                t.coachId = n.coachId;
                var a = "/partials/coachProfile/views/modal/coachProfile.changeLocation.html",
                    o = "model-sessioncreate model-sessionreschedule",
                    s = "sessionChangeLocationController";
                l.modalOpen(a, o, s, t, function(t) {
                    "success" === t.$$state.value && (e.$parent.loadSessionData(), e.$parent.getTodos(), e.fetchAthleteSessions(), e.$parent.events = {}, e.$parent.calEvents = {}, e.$parent.eventSources = {}, m(function() {
                        e.getCoachProfileSessions()
                    }), e.$parent.setConfig())
                })
            }, a.$on("rescheduleSuccess", function() {
                e.fetchAthleteSessions()
            }), e.changeLocation = function(t) {
                var a = {
                    booked_session_id: t.sessionId,
                    parent_id: e.selectedClient.client_id,
                    client_name: e.selectedClient.name,
                    date: t.date,
                    location: t.location,
                    type: t.type,
                    price: t.payment
                };
                e.openChangeLocation(a)
            }, e.closeButtonMobile = function() {
                e.$parent.clientsTab = !1, angular.element(".coach-info").removeClass("hide-elements"), angular.element("#profile-menu").removeClass("hide-elements"), o.go(e.baseState + ".clients")
            }, e.closeButtonMobileParent = function() {
                e.listClients = !1, a.showClientList = !1, angular.element("#dashbroad-wrapper-client").find(".dashboard-left").removeClass("hide-elements"), angular.element(".coach-clients-detailed-view").removeClass("show-elements").addClass("hide-elements")
            }, e.closeButtonMobileChild = function() {
                e.childView = !1, angular.element(".dashboard-session-info").removeClass("hide-elements"), isMobile() ? a.showClientList = !0 : a.showClientList = !1
            }, e.getAge = function(e) {
                return calculateAge(new Date(e))
            }, e.isMobile = function() {
                return isMobile()
            }
        };
        e.$inject = ["$scope", "appConfig", "$rootScope", "$state", "$stateParams", "CoachProfileInterfaceService", "AlertService", "CreateMessageService", "ConfirmDialogService", "Coachco_CommonService", "Utils", "CommonAPIInterfaceService", "$timeout"], angular.module("Coachco").controller("CoachClientsController", e)
    }(),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d, u, m, h, p, g, f, v, S, C, y, _, b, w) {
            w(), e.initializeAuth = function() {
                e.firstName = u.getFirstName(), e.lastName = u.getLastName(), e.userId = u.getUserId(), e.isLoggedIn = u.isLoggedIn(), e.accountActive = 1 === u.getStatus(), e.accountActive || s.go("errorPage", {
                    message: "Thank you for your application. Once your application is approved, you will be able to access your dashboard through this link. We look forward to working with you!"
                })
            }, e.initializeAuth(), e.idValue = 0, e.coachStatus = a.coachStatus, e.selectedActivity = {}, e.upcomingIndexCount = 0, e.completedIndexCount = 0, e.filteredSessionsCount = 0, e.sessionData, o.showClientList = !1, e.ifAdminReview = !(s.current.name.indexOf("coachProfile.dashboard") > -1 || s.current.name.indexOf("coachProfile.dashboardView") > -1), s.current.name.indexOf("coachProfile.dashboardView") > -1 ? e.baseState = "coachProfile.dashboardView" : s.current.name.indexOf("reviewCoachProfile.dashboard") > -1 ? e.baseState = "reviewCoachProfile.dashboard" : s.current.name.indexOf("coachProfile.dashboard") > -1 && (e.baseState = "coachProfile.dashboard"), localStorage.removeItem("currentSchedule"), localStorage.removeItem("pageSchedule"), e.events = {}, e.calEvents = {}, e.eventSources = {}, e.profile = {}, e.returnData = {}, e.changeTo = "Hungarian", o.profile = "coach", e.trainingLocations = [], e.activityList = [], e.checkerArray = [], e.customEvents = [], e.showLoader = !1, e.isInboxAppended = !1, e.profile.bgCheck = !1, e.profile.trainingNotify = !1, e.profile.messageNotify = !1, e.profile.reviewNotify = !1, e.setMobileView = !1, e.threshold = 24, e.setAvailabitlityBtn = "Set Availability", e.settingAvailabilities = !1, e.sortValue = "", e.coachReview = "", e.currentDate = "", e.picPath = a.imagePath, e.days = a.days, e.month = a.month, e.searchCoach = r.currentState, o.activeMenu = "Setavailavility";
            var I = angular.element(".main-container"),
                P = angular.element(".dashbroad-wrapper"),
                A = angular.element("#dashboard-clients"),
                D = angular.element(".rating input"),
                T = new Date;
            e.athleteProfile = e.athleteProfileTemp = {}, e.loadCalendar = function() {
                loadAddToCalendarScript()
            }, e.init = function() {
                ($(window).width() < 1024 || isMobile()) && n(function() {
                    $("#footer").addClass("hide")
                })
            }, e.showLoaderImage = function() {
                e.loader = !0
            }, e.hideLoaderImage = function() {
                e.loader = !1
            }, e.openWelcomePopup = function() {
                var t = e.profileData.welcome_msg;
                if (angular.isDefined(t) && "yes" === t && $(window).width() > 1024 && !isMobile()) {
                    var a = "/partials/coachProfile/views/modal/coachProfile.welcomePopup.html",
                        o = "model-sessioncreate model-sessionreschedule",
                        n = "ModalController";
                    l.modalOpen(a, o, n, null, function(t) {
                        if ("ok" === t.$$state.value) {
                            var a = {
                                coach: {
                                    welcome_msg: "no"
                                }
                            };
                            h.updateAccount(a, e.coachIdd, function(e) {})
                        }
                    })
                }
            }, e.checkforAthleteProfileUpdates = function(t) {
                if (angular.equals(e.athleteProfile, e.athleteProfileTemp)) s.go(t);
                else {
                    var a = {
                        title: "Discard your changes?",
                        message: "You have unsaved changes which will be lost if you continue.",
                        note: 'To save your changes, please â€œCancelâ€ and then click "Updateâ€ at the bottom of the page.',
                        positiveBtn: "Continue",
                        negativeBtn: "Cancel"
                    };
                    y.showDialog(a, function(a) {
                        "yes" === a.$$state.value && (e.athleteProfile = angular.copy(e.athleteProfileTemp), s.go(t))
                    })
                }
            }, e.selectTab = function(t) {
                s.current.name.indexOf("coachProfile.dashboard.clients") > -1 || s.current.name.indexOf("reviewCoachProfile.dashboard.clients") > -1 || s.current.name.indexOf("coachProfile.dashboardView.clients") > -1 ? e.checkforAthleteProfileUpdates(t) : (t.indexOf(".sessions") > -1 && (e.tabSwitch = !0, o.$emit("sessionList")), s.go(t))
            }, e.isProfileLoaded = !1, e.loadCoachProfileSummary = function(t) {
                e.isProfileLoaded = !0;
                var a = r.coachId;
                e.showLoaderImage(), h.getAccountDetails(a, function(a) {
                    a.$resolved && 200 === a.status && (e.profileData = a.data, "yes" === e.profileData.strivefar_message_read ? o.isStriveFarMsgRead = !0 : o.isStriveFarMsgRead = !1,
                    a.data.booking_threshold && (e.threshold = a.data.booking_threshold ? a.data.booking_threshold : 24), e.openWelcomePopup(), e.fetchActivityDetails(), e.fetchClubs(), e.ifAdminReview && (e.profileData.currentStatus = findElement(e.coachStatus, "value", e.profileData.status), e.profileData.selectedStatus = e.profileData.currentStatus, null === e.profileData.status && (e.profileData.currentStatus = findElement(e.coachStatus, "value", "2"), e.profileData.selectedStatus = e.profileData.currentStatus)), "coachProfile.dashboard.messages" !== s.current.name && "coachProfile.dashboardView.messages" !== s.current.name || o.$emit("messagesCount"), t("success")), e.hideLoaderImage()
                })
            }, e.config = {
                autoHideScrollbar: !1,
                theme: "light",
                advanced: {
                    updateOnContentResize: !0
                },
                setHeight: 308,
                scrollInertia: 0
            }, e.setSessionsTab = function() {
                s.go(r.stateName)
            }, "coachProfile.dashboard" !== s.current.name && "coachProfile.dashboardView" !== s.current.name || e.setSessionsTab(), e.notesOnCoach = function(e) {
                var t = "/partials/coachProfile/views/modal/coachProfile.notesOnCoach.html",
                    a = "model-createmessage",
                    o = "coachNotesController";
                l.modalOpen(t, a, o, e)
            }, e.getGetOrdinal = function(e) {
                var t = ["th", "st", "nd", "rd"],
                    a = e % 100;
                return e + (t[(a - 20) % 10] || t[a] || t[0])
            }, e.scrollToThis = function(e) {
                angular.element("html, body").animate({
                    scrollTop: angular.element(e).offset().top - 200
                }, 1500)
            }, $(window).width() <= 1024 || isMobile() ? e.isMobileView = !0 : e.isMobileView = !1, e.toggleprofileTabs = function() {
                angular.element(".coach-info").addClass("hide-elements"), angular.element("#profile-menu").addClass("hide-elements");
                var e = angular.element(".coach-dashboard");
                angular.element("html, body").animate({
                    scrollTop: angular.element(e).offset().top - 20
                }, 600)
            }, o.$on("getMyStats", function(t, a) {
                e.sessionsTab = e.messageTab = e.clientsTab = !1;
                var o = r.coachId;
                e.dialogName = "myStats", p.getCoachStats(o, function(t) {
                    e.sessionStats = t.data.stats
                }), a === !0 && e.toggleprofileTabs()
            }), e.myStats = function(e) {
                o.$emit("getMyStats", e)
            }, e.myStats(!1), e.closeBtnTodoMobile = function() {
                I.removeClass("hide-box")
            }, o.$on("getMyReviews", function(t, a) {
                e.sessionsTab = e.messageTab = e.clientsTab = !1, e.dialogName = "myReviews", p.getSelfReviews(r.coachId, function(t) {
                    e.reviews = t.data.reviews
                }), n(function() {
                    D.each(function() {
                        angular.element(this).prop("checked", !0)
                    })
                }, 100), a === !0 && e.toggleprofileTabs()
            }), e.myReviews = function(e) {
                o.$emit("getMyReviews", e)
            }, o.$on("getMyProfile", function(t, a) {
                e.sessionsTab = e.messageTab = e.clientsTab = !1, e.dialogName = "myProfile", n(function() {
                    D.each(function() {
                        angular.element(this).prop("checked", !0)
                    })
                }, 100), a === !0 && e.toggleprofileTabs()
            }), o.$on("loadCoachSessions", function() {
                var t = r.coachId;
                c.getUpcomingTrainingSessions(t).success(function(t) {
                    e.sessionData = t, o.$emit("sessionList")
                })
            }), isMobile() ? e.hideLoader = !0 : (e.sessionsLoader = !0, e.hideLoader = !1), e.loadSessionData = function(t) {
                var a = r.coachId;
                c.getUpcomingTrainingSessions(a).success(function(a) {
                    t && (e.sessionsLoader = !1), e.tabSwitch = !1, e.sessionData = a, o.$emit("sessionList")
                })
            }, e.myProfile = function(e) {
                o.$emit("getMyProfile", e)
            }, e.closeBtnReviweMobile = function() {
                I.removeClass("hide-box"), I.removeClass("open-box")
            }, e.closeButton = function() {
                e.dialogName = "dashboard"
            }, e.showMobileCalendar = function() {
                I.addClass("calendar-view")
            }, e.closeButtonMobileCalendar = function(t) {
                I.removeClass("calendar-view"), t && (angular.element("#calendar-mobile").removeClass("book-coach-mobile"), angular.element(".coach-info-mobile").addClass("coach-profile-view-mobile-show"), u.isClient() && (e.Id = u.getParentId(), s.go('clientProfile.dashboard, {"clientId": $scope.Id})')))
            }, e.closeButtonMobile = function() {
                I.removeClass("open")
            }, e.closeButtonMobileChild = function() {
                P.removeClass("child-view"), A.removeClass("btn-class")
            }, e.closeButtonMobileParent = function() {
                P.removeClass("open")
            }, e.getProfile = function() {
                e.dialogName = "dashboard"
            }, e.getTodos = function() {
                var t = r.coachId;
                c.getTodos(t).success(function(t) {
                    e.todos = t.todos
                }).error(function() {})
            }, e.setStatusFlag = function() {
                e.sessionData.session.forEach(function(t) {
                    t.sessions.forEach(function(t) {
                        "Upcoming" === t.status && 0 === e.upcomingIndexCount && (t.upcomingHeadingStatus = !0, e.upcomingIndexCount++), "Completed" === t.status && 0 === e.completedIndexCount && (t.completedHeadingStatus = !0, e.completedIndexCount++)
                    })
                })
            }, e.setSelectedActivity = function(t) {
                t && e.activities.forEach(function(a) {
                    a.activity.toLowerCase() === t.toLowerCase() && (e.profileData.selectedActivity = angular.copy(a))
                })
            }, e.setSelectedClub = function(t) {
                e.clubs.forEach(function(a) {
                    a._id.$oid === t && (e.profileData.selectedClub = a)
                })
            }, e.fetchActivityDetails = function() {
                e.showLoaderImage(), e.activities = [], S.getCoachActivities(function(t) {
                    t.$resolved && 200 === t.status && t.data.length > 0 && (e.activities = t.data, e.setSelectedActivity(e.profileData.activity)), e.hideLoaderImage()
                }, function(t) {
                    var a = "Error!",
                        o = "Email " + t.statusText;
                    _.showAlert(a, o), e.hideLoaderImage()
                })
            }, e.fetchClubs = function() {
                e.showLoaderImage(), e.clubs = [], e.profileData.activity && v.getCoachClubs(e.profileData.activity.capitalize(), !0, function(t) {
                    if (t.$resolved && 200 === t.status && t.data.length > 0) {
                        e.clubs = t.data;
                        var a = {
                            _id: {
                                $oid: null
                            },
                            name: "None"
                        };
                        e.clubs.splice(0, 0, a), e.setSelectedClub(e.profileData.club_id)
                    }
                    e.hideLoaderImage()
                }, function(t) {
                    var a = "Error!",
                        o = "Email " + t.statusText;
                    _.showAlert(a, o), e.hideLoaderImage()
                })
            }, e.getAddressString = function(e) {
                var t = (angular.isDefined(e.street) && null !== e.street && "" !== e.street ? e.street : "") + (angular.isDefined(e.city) && null !== e.city && "" !== e.city ? ", " + e.city : "") + (angular.isDefined(e.state) && null !== e.state && "" !== e.state ? ", " + e.state : "") + (angular.isDefined(e.zip) && null !== e.zip && "" !== e.zip ? ", " + e.zip : "");
                return t
            }, e.setLocationAddress = function(e, t) {
                var a = 0;
                e.tooltipId = a + t;
                var o = angular.isDefined(e.location.address.street) && null !== e.location.address.street && "" !== e.location.address.street,
                    n = angular.isDefined(e.location.address.state) && null !== e.location.address.state && "" !== e.location.address.state,
                    s = angular.isDefined(e.location.address.city) && null !== e.location.address.city && "" !== e.location.address.city,
                    i = angular.isDefined(e.location.address.zip) && null !== e.location.address.zip && "" !== e.location.address.zip;
                e.locationAddress = (o ? e.location.address.street : "") + (o && s ? ", " : "") + (s ? e.location.address.city : "") + (s && n ? ", " : "") + (n ? e.location.address.state : "") + (n && i ? " " : "") + (i ? e.location.address.zip : "")
            }, e.getThreshold = function() {
                e.coachIdd = r.coachId, c.getCoachProfile(e.coachIdd).success(function(t) {
                    t.booking_threshold && (e.threshold = t.booking_threshold ? t.booking_threshold : 24)
                })
            }, e.getCoachProfileSessions = function() {
                e.coachIdd = r.coachId, e.events[e.coachIdd] = [], d.getCoachSessions(e.coachIdd, function(t, a) {
                    a.forEach(function(e) {
                        e.stick = !0
                    }), e.removePastSessions(a, T), n(function() {
                        e.events[e.coachIdd] = a, e.calEvents[e.coachIdd] = {
                            events: e.events[e.coachIdd]
                        }, e.eventSources[e.coachIdd] = [e.calEvents[e.coachIdd]], e.eventSources[e.coachIdd][0].events.$watch(function(t) {
                            var a;
                            "child_changed" === t.event ? (a = findObjectByKeyValue(e.eventSources[e.coachIdd][0].events, "$id", t.key), a && $("#coach-calendar").fullCalendar("updateEvent", a)) : "child_added" === t.event && (a = findObjectByKeyValue(e.eventSources[e.coachIdd][0].events, "$id", t.key), a.stick = !0)
                        }), e.loadCalendar()
                    })
                })
            }, e.loadCoachProfileSummary(function() {}), e.removePastSessions = function(e, t) {
                for (var a = e.length - 1; a >= 0; a--) e[a].start < Date.parse(t) && "available" === e[a].status && e.splice(a, 1)
            }, e.openHelp = function() {
                var e = {
                        title: "Help",
                        siteUrl: "https://strivefar.zendesk.com/hc/en-us/articles/227051048"
                    },
                    t = "partials/shared/views/modals/shared.externalPage.html",
                    a = "ExternalPageController",
                    o = "model-createmessage";
                l.modalOpen(t, o, a, e)
            }, e.openSessionFeedback = function(t, a) {
                t.viewOnlyMode = null !== a && void 0 !== a && a;
                var o = "/partials/coachProfile/views/modal/coachProfile.sessionFeedback.html",
                    n = "model-sessionfeedback",
                    s = "sessionFeedbackController";
                l.modalOpen(o, n, s, t, function(t) {
                    "success" === t.$$state.value && (e.loadSessionData(), e.getTodos())
                })
            }, e.fetchServiceFee = function() {
                v.getServiceFee(function(t) {
                    t.$resolved && 200 === t.status && (e.serviceFee = t.data.service_fee)
                })
            }, e.fetchServiceFee(), e.openSetAvailability = function() {
                var t = {};
                t.profDate = e.currentDate, t.saDate = e.saDate;
                var a = "/partials/coachProfile/views/modal/coachProfile.setAvailability.html",
                    o = "model-setavailability",
                    n = "setAvailabilityController";
                l.modalOpen(a, o, n, t, function(t) {
                    "setting" === t.$$state.value && (e.settingAvailabilities = !0, e.setAvailabitlityBtn = "Setting Availabilities.....")
                })
            }, o.$on("availabitySet", function() {
                e.settingAvailabilities = !1, e.setAvailabitlityBtn = "Set Availability"
            }), e.openSessionCreate = function(t) {
                "recurr" === t && (e.idValue = e.idValue + 1, t = {}, t.events = e.eventSources[e.coachIdd][0].events, t.profile = e.profileData, t.isRecurr = !0, t.idValue = e.idValue), t.min_group_size = e.profileData.pricing.min_group_size, t.max_group_size = e.profileData.pricing.max_group_size;
                var a = "/partials/coachProfile/views/modal/coachProfile.sessionCreate.html",
                    o = "model-sessioncreate",
                    n = "sessionCreateController";
                l.modalOpen(a, o, n, t, function(t) {
                    "success" === t.$$state.value && (e.loadSessionData(), e.getTodos())
                })
            }, e.checkConflicts = function(t, a, o) {
                e.conflictText = "";
                var n = $(".dash-calendar"),
                    s = [];
                a.start_millis = a.start._i, 1 !== t.duration ? a.end_millis = a.start._i + 60 * t.duration * 60 * 1e3 : a.end_millis = a.end._i, d.getCoachSessionsByStart(e.coachIdd, a.start_millis, a.end_millis, function(e, t) {
                    t.forEach(function(e) {
                        "available" !== e.status && e.start < a.end_millis && s.push(e)
                    })
                }), d.getCoachSessionsByEnd(e.coachIdd, a.start_millis, a.end_millis, function(e, t) {
                    t.forEach(function(e) {
                        "available" !== e.status && e.end > a.end_millis && s.push(e)
                    })
                }), setTimeout(function() {
                    if (s.length > 0) {
                        s.forEach(function(t) {
                            e.conflictText ? e.conflictText = e.conflictText + ", " + m("date")(new Date(t.start), "MM/dd/yyyy hh:mm a") + " - " + m("date")(new Date(t.end), "hh:mm a") : e.conflictText = e.conflictText + m("date")(new Date(t.start), "MM/dd/yyyy hh:mm a") + " - " + m("date")(new Date(t.end), "hh:mm a");
                            var a = findObjectByKeyValue(e.eventSources[e.coachIdd][0].events, "$id", t.$id),
                                o = n.find("#event-" + a._id + " span");
                            o.addClass("fc-event-red-blink"), setTimeout(function() {
                                o.removeClass("fc-event-red-blink")
                            }, 3e3)
                        });
                        var t = "Conflict!",
                            a = "There is conflicts on " + e.conflictText + ". Choose another slot for rescheduling.";
                        _.showAlert(t, a), o("conflict")
                    } else o("success")
                }, 500)
            }, e.openSessionReschedule = function(t) {
                e.checkConflicts(JSON.parse(localStorage.getItem("currentSchedule")), t, function(a) {
                    if ("success" === a) {
                        var n = "/partials/coachProfile/views/modal/coachProfile.rescheduleGroupSession.html",
                            s = "model-sessioncreate model-sessionreschedule",
                            i = "sessionRescheduleController";
                        l.modalOpen(n, s, i, t, function(t) {
                            "success" === t.$$state.value && (e.loadSessionData(), e.getTodos(), o.$emit("rescheduleSuccess"))
                        })
                    }
                })
            }, e.gotoReschedule = function(t, a) {
                localStorage.setItem("currentSchedule", JSON.stringify(t)), localStorage.setItem("pageSchedule", JSON.stringify(a));
                var o = "/partials/coachProfile/views/modal/coachProfile.gotoReschedule.html",
                    n = "model-createmessage model-seehow",
                    s = "gotoRescheduleController";
                l.modalOpen(o, n, s, null, function(t) {
                    "ok" === t.$$state.value && e.scrollToThis(angular.element(".right-panel"))
                })
            }, e.cancelSession = function(t) {
                var a = "/partials/coachProfile/views/modal/coachProfile.cancelSession.html",
                    n = "model-sessioncreate model-sessionreschedule",
                    s = "sessionCancelController";
                l.modalOpen(a, n, s, t, function(t) {
                    "success" === t.$$state.value && (e.loadSessionData(), e.getTodos(), o.$emit("rescheduleSuccess"))
                })
            }, e.openSeeHow = function() {
                var t = "/partials/coachProfile/views/modal/coachProfile.seeHow.html",
                    a = "model-createmessage model-seehow",
                    o = "sessionSeeHowController";
                l.modalOpen(t, a, o, null, function(t) {
                    "ok" === t.$$state.value && e.scrollToThis(angular.element(".right-panel"))
                })
            }, e.openSessionComplete = function(t) {
                var a = "/partials/coachProfile/views/modal/coachProfile.sessionComplete.html",
                    o = "model-createmessage model-seehow model-marksession",
                    n = "sessionCompleteController";
                l.modalOpen(a, o, n, t, function(a) {
                    "ok" === a.$$state.value && e.markCompleteSession(t.coachTrainingSessionId)
                })
            }, e.getRecurringSessions = function(t, a) {
                var o = {
                    recurringSessions: [],
                    status: "error"
                };
                e.sessionData.session.forEach(function(a) {
                    a.sessions.forEach(function(a) {
                        if (a.recurringSessionsId && t.recurringSessionsId === a.recurringSessionsId) {
                            var n = {
                                bookedSlots: a.bookedSlots,
                                date_time: a.date_time,
                                startTime: a.startTime,
                                end_time: a.end_time,
                                endTime: a.endTime,
                                duration: a.duration,
                                rescheduled: a.rescheduled,
                                location_change: a.location_change,
                                location: a.location,
                                locationAddress: e.getAddressString(a.location.address)
                            };
                            o.recurringSessions.push(n)
                        }
                    })
                }), o.recurringSessions.length > 0 && (o.status = "success"), a(o)
            }, e.openInviteClient = function(t) {
                var a = "/partials/coachProfile/views/modal/coachProfile.inviteClient.html",
                    o = "model-sessioncreate model-sessionreschedule",
                    n = "InviteClientController",
                    s = {
                        title: "Send Invite to Current or Potential Client(s)",
                        infoText: "Enter Clientâ€™s email address",
                        context: "inviteClient",
                        sessionInfo: t,
                        coachId: e.coachIdd,
                        placeHolder: "Enter Clientâ€™s email Address(es) (separated by,)",
                        messagePlaceHolder: "Type message to the Potential Client.",
                        buttonTxt: "Send Invite"
                    };
                null !== t && "null" !== t ? s.message = "I am conducting a training sessions, the details of which are shown above. I hope your athlete is able to join us!" : s.message = "I am a coach on StriveFar, a place that connects athletes with coaches for individual and group training. Please join StriveFar and look me up. I would love an opportunity to train your athletes.", s.sessionInfo && s.sessionInfo.recurringSessionsId ? (s.recurringSession = !0, e.getRecurringSessions(s.sessionInfo, function(e) {
                    "success" === e.status && (s.sessionInfo.dates = e.recurringSessions, console.log(s.sessionInfo.dates), l.modalOpen(a, o, n, s, function(e) {
                        if ("success" === e.$$state.value) {
                            var t = "Success!",
                                a = "The invite has been successfully sent to the entered email(s)";
                            _.showAlert(t, a)
                        }
                    }))
                })) : (s.recurringSession = !1, l.modalOpen(a, o, n, s, function(e) {
                    if ("success" === e.$$state.value) {
                        var t = "Success!",
                            a = "The invite has been successfully sent to the entered email(s)";
                        _.showAlert(t, a)
                    }
                }))
            }, e.openRequestReview = function() {
                var t = "/partials/coachProfile/views/modal/coachProfile.inviteClient.html",
                    a = "model-sessioncreate model-sessionreschedule",
                    o = "InviteClientController",
                    n = {
                        title: "Request Review from a Client",
                        infoText: "Enter Clientâ€™s email address",
                        context: "requestReview",
                        sessionInfo: null,
                        coachId: e.coachIdd,
                        messagePlaceHolder: "Type message to the Potential Client.",
                        placeHolder: "Enter Clientâ€™s email Address(es) (separated by,)",
                        message: "I am a coach on StriveFar, a place that connects athletes with coaches for individual and group training. I would appreciate it if you could write a review for me. This would help me and also help other parents in selecting the right coach for their kids. ",
                        buttonTxt: "Send Review Request"
                    };
                l.modalOpen(t, a, o, n, function(e) {
                    if ("success" === e.$$state.value) {
                        var t = "Success!",
                            a = "A request for review has been successfully sent to the entered email(s)";
                        _.showAlert(t, a)
                    }
                })
            }, e.markCompleteSession = function(t) {
                p.markCompleteSession(e.coachIdd, t, function(t) {
                    t.$resolved && 200 === t.status && (e.loadSessionData(), e.getTodos(), n(function() {}), o.$emit("rescheduleSuccess"))
                })
            }, e.updateStatus = function() {
                var t;
                e.profileData.selectedStatus && (t = {
                    coach: {
                        status: e.profileData.selectedStatus.value
                    }
                }), g.updateStatus(r.coachId, t, function(t) {
                    t.$resolved && 200 === t.status && angular.isDefined(e.profileData.selectedStatus) && null !== e.profileData.selectedStatus && (e.profileData.currentStatus = findElement(e.coachStatus, "value", e.profileData.selectedStatus.value))
                }, function() {
                    e.profileData.selectedStatus = null
                })
            }, e.eventRender = function(t, a) {
                a.attr({
                    "uib-tooltip-template": "'tooltip.html'",
                    "tooltip-placement": "auto right-top"
                }), i(a)(e)
            }, e.eventAfterRendered = function(e) {
                var t = $(".dash-calendar"),
                    a = t.find("#event-" + e._id + " span");
                "booked" === e.status && (a.removeClass("fc-event-blue fc-event-gray").addClass("fc-event-green"), "individual" === e.typeOfSession ? a[0].innerHTML = '<a class="event-inner-text">' + e.athletes + "</a>" : (a[0].innerHTML = '<a class="event-inner-text">Group</a>', n(function() {
                    var t = '<span class="mee">' + e.bookedSlots + "</span>";
                    a.append(t)
                }))), "pending" === e.status && (a[0].innerHTML = '<a class="event-inner-text">Pending</a>', a.removeClass("fc-event-green fc-event-gray").addClass("fc-event-blue")), "available" === e.status && (a[0].innerHTML = '<a class="event-inner-text">Open</a>', a.addClass("fc-event-gray"))
            }, e.eventAfterAllRendered = function() {
                n(function() {
                    var t = f.calendars.dashboardCalendar.fullCalendar("getCalendar");
                    e.currentDate = moment(t.getDate()._d).add(1, "day").format(), e.currentDate = new Date(e.currentDate).toISOString().slice(0, 10)
                }, 200)
            }, e.eventHover = function(t) {
                e.event = t, e.day = e.days[new Date(t.start._d).getDay()], e.date = new Date(t.start._d).getDate(), e.hours = new Date(t.start._d).getHours(), e.minutes = new Date(t.start._d).getMinutes(), e.months = e.month[new Date(t.start._d).getMonth()], 0 === e.minutes && (e.minutes = e.minutes + "0");
                var a = e.hours >= 12 ? " PM" : " AM";
                e.hours = (e.hours + 11) % 12 + 1 + ":" + e.minutes + a, e.endHours = new Date(t.end._d).getHours(), e.endMinutes = new Date(t.end._d).getMinutes(), 0 === e.endMinutes && (e.endMinutes = e.endMinutes + "0"), a = e.endHours >= 12 ? " PM" : " AM", e.endHours = (e.endHours + 11) % 12 + 1 + ":" + e.endMinutes + a, e.openSlots = parseInt(t.teamSize - t.bookedSlots), "individual:create-group" === t.filter ? o.activeMenu = "Individual" : "join-group" === t.filter ? o.activeMenu = "Join a Group" : o.activeMenu = "Create a Group"
            }, e.alertOnResize = function() {}, e.eventClick = function(t) {
                var a;
                if ("available" === t.status && (e.toastDay = e.days[new Date(t.start._d).getDay()], e.toastDate = new Date(t.start._d).getDate(), e.toastHours = new Date(t.start._d).getHours(), a = e.toastHours >= 12 ? "PM" : "AM", e.toastHours = (e.toastHours + 11) % 12 + 1 + a, e.showToast($(this), t)), "pending" === t.status && t.coachInitiatedSession === !0) {
                    var o = new Date(t.start._d).toDateString(),
                        n = new Date(t.start._d).getHours(),
                        s = new Date(t.start._d).getMinutes();
                    o = o.split(" ")[1] + " " + o.split(" ")[2] + ", " + o.split(" ")[3] + " (" + o.split(" ")[0] + ")", a = n >= 12 ? " PM" : " AM", n = (n + 11) % 12 + 1, s = 0 === s ? "00" : "30";
                    var i = "Are You Sure?",
                        r = "<p>You are about to cancel a pending session (to which you invited clients) that is currently scheduled for " + n + ":" + s + a + " on " + o + ".</p><p>Are you sure you want to cancel this pending session?</p>";
                    _.pendingAlert(i, r, function(e) {
                        "ok" === e.$$state.value && c.cancelPendingSession(t.coachBookedSessionId).success(function() {})
                    })
                }
            }, e.showToast = function(t, a) {
                a.clientRescheduleSession = !1, a.ifAdminReview = e.ifAdminReview, e.editSession = JSON.parse(localStorage.getItem("currentSchedule")), e.editSession ? e.openSessionReschedule(a) : e.openSessionCreate(a)
            }, e.setConfig = function() {
                if ("" === e.currentDate) {
                    var t = new Date;
                    e.currentDate = t
                }
                e.uiConfig = {
                    calendar: {
                        height: 401,
                        editable: !1,
                        defaultDate: e.currentDate,
                        ignoreTimezone: !0,
                        header: {
                            left: "title",
                            center: "",
                            right: "prev today, next"
                        },
                        eventClick: e.eventClick,
                        eventDrop: e.alertOnDrop,
                        eventResize: e.alertOnResize,
                        eventRender: e.eventRender,
                        eventMouseover: e.eventHover,
                        eventAfterRender: e.eventAfterRendered,
                        eventAfterAllRender: e.eventAfterAllRendered
                    }
                }
            }, e.setConfig(), e.scheduleTabActive = !1, o.$on("switchTabs", function(t, a) {
                e.dialogName = "dashboard";
                var o = a.toState;
                o === e.baseState + ".sessions", angular.element(".coach-info").addClass("hide-elements"), angular.element("#profile-menu").addClass("hide-elements"), o === e.baseState + ".sessions" ? (e.infoTab = !1, e.messageTab = !1, e.clientsTab = !1, e.sessionsTab = !0) : o === e.baseState + ".messages" ? (e.sessionsTab = !1, e.infoTab = !1, e.clientsTab = !1, e.messageTab = !0) : o === e.baseState + ".clients" ? (e.infoTab = !1, e.messageTab = !1, e.sessionsTab = !1, e.clientsTab = !0) : (e.sessionsTab = !1, e.messageTab = !1, e.clientsTab = !1, e.infoTab = !0), s.go(o);
                var n = angular.element(".coach-dashboard");
                angular.element("html, body").animate({
                    scrollTop: angular.element(n).offset().top - 20
                }, 1200)
            }), e.selectMobTab = function(e) {
                o.$emit("switchTabs", {
                    toState: e
                })
            }, e.closeModalMobile = function() {
                e.dialogName = "dashboard", angular.element(".coach-info").removeClass("hide-elements"), angular.element("#profile-menu").removeClass("hide-elements")
            }, e.getCoachPreferences = function() {
                c.getCoachPreferences(e.coachIdd).success(function(t) {
                    "open" === t.preferences.todos.quick_tips ? e.viewMoreTips = !0 : e.viewMoreTips = !1, "open" === t.preferences.todos.how_to ? e.viewMoreClients = !0 : e.viewMoreClients = !1, "open" === t.preferences.todos.sessions ? e.viewMoreSessions = !0 : e.viewMoreSessions = !1
                }).error(function() {})
            }, e.updateCoachPreferences = function(t, a, o) {
                var n = {
                    todos: {}
                };
                t = t === !0 ? "open" : "closed", a = a === !0 ? "open" : "closed", o = o === !0 ? "open" : "closed", n.todos.quick_tips = t, n.todos.sessions = a, n.todos.how_to = o, c.updateCoachPreferences(e.coachIdd, n)
            }, e.openSetRecurrence = function() {
                var t = {};
                t.events = e.eventSources[e.coachIdd][0].events, t.profile = e.profileData;
                var a = "/partials/coachProfile/views/modal/coachProfile.setRecurrance.html",
                    o = "model-request-session model-recurrance",
                    n = "setRecurranceController";
                l.modalOpen(a, o, n, t)
            }
        };
        e.$inject = ["$scope", "redirect", "appConfig", "$rootScope", "$timeout", "$state", "$compile", "$stateParams", "CoachProfileService", "Coachco_CommonService", "SessionService", "AuthFactory", "$filter", "CoachEnrollmentInterfaceService", "CoachProfileInterfaceService", "AdminProfileInterfaceService", "uiCalendarConfig", "CommonAPIInterfaceService", "ActivitiesService", "ClientProfileInterfaceService", "ConfirmDialogService", "AlertService", "$window", "$anchorScroll"], angular.module("Coachco").controller("CoachProfileDashboardController", e)
    }(),
    function() {
        var e = function(e, t, a, o, n, s, i, r) {
            e.recepientName = r.recepientName, e.message = r.message, e.close = function() {
                a.modalClose(o)
            }, e.sendMessage = function() {
                var t = {
                    client: {
                        email: r.email,
                        message: angular.isDefined(e.message) && null !== e.message ? e.message.replace(/\r?\n/g, "<br />") : "",
                        id: r.toId
                    },
                    coach_id: r.fromId
                };
                i.sendSessionPlanner(t, function() {
                    a.modalDone(o, "success")
                }, function(e) {
                    console.log(e), a.modalDone(o, "error")
                })
            }, e.cancel = function(e) {
                a.modalDone(o, e)
            }
        };
        e.$inject = ["$scope", "$rootScope", "Coachco_CommonService", "$uibModalInstance", "AlertService", "$timeout", "CommonAPIInterfaceService", "emailModel"], angular.module("Coachco").controller("EmailSessionPlannerController", e)
    }(angular),
    function(e) {
        var t = function(e, t, a) {
            e.close = function() {
                a.modalClose(t)
            }, e.okGotIt = function() {
                a.modalDone(t, "ok")
            }
        };
        t.$inject = ["$scope", "$uibModalInstance", "Coachco_CommonService"], e.module("Coachco").controller("gotoRescheduleController", t)
    }(angular),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d, u, m, h) {
            function p(t) {
                for (var a = t.toLowerCase().trim(), o = [], n = 0; n < e.clients.length; n++) {
                    var s = e.clients[n];
                    e.clients[n].role = "client", s.athleteList = "", s.client_id && (s.athletes && s.athletes.forEach(function(e, t) {
                        0 === t ? s.athleteList = s.athleteList + e : s.athleteList = s.athleteList + ", " + e
                    }), s.name.toLowerCase().indexOf(a) === -1 && s.email.toLowerCase().indexOf(a) === -1 && s.athleteList.toLowerCase().indexOf(a) === -1 || (null === s.profile_image ? o.push({
                        value: s.name,
                        obj: s,
                        label: d.trustAsHtml('<div class="row-holder">  <img class="avatar-thumb-nail" src="images/default-msg-avatar.png" alt="default avatar"></img> <div class="col-left">  <strong>' + s.name + '</strong> </div> <div class="col-right text-right text-muted">  <small>' + s.email + '</small> </div> <br><small class="text-ellipsise">' + s.athleteList + "</small>  <div> </div></div>")
                    }) : o.push({
                        value: s.name,
                        obj: s,
                        label: d.trustAsHtml('<div class="row-holder"> <img class="avatar-thumb-nail" src="' + s.profile_image + '" alt="' + s.name + ' profile image"></img> <div class="col-left">  <strong>' + s.name + '</strong> </div> <div class="col-right text-right text-muted">  <small>' + s.email + '</small> </div> <br><small class="text-ellipsise">' + s.athleteList + "</small>  <div> </div></div>")
                    })))
                }
                return o
            }

            function g(e, t) {
                var a = !1;
                return angular.isDefined(e) && e.length > 0 && e.forEach(function(e) {
                    e.id === t && (a = !0)
                }), a
            }
            e.$parent.currentState = o.current.name, e.recepients = [], e.toIds = [], e.showLoader = !1, e.isInboxAppended = !1, e.updateMessage = !1, e.messageTypes = t.messageTypes, e.selectedMessageType = "All Messages", e.coachName = u.getFirstName() + "" + u.getLastName(), e.coachId = n.coachId, e.selectedRecepient, e.openChat = !1, e.firstTime = !Boolean(localStorage.getItem("FirstTime"));
            var f = angular.element(".dashbroad-wrapper");
            e.scrollToBottom = function() {
                e.selectedMessage && "new" !== e.selectedMessage.id.$oid && m(function() {
                    var t, a, o;
                    t = $(window).width() > 1024 && !isMobile() ? "#dashboard-wrapper-desktop-msg #messagesDiv-" + e.selectedMessage.id.$oid : "#dashboard-wrapper-mob-msg #messagesDiv-" + e.selectedMessage.id.$oid, !e.updateMessage && document.querySelector(t) ? a = document.querySelector(t).scrollHeight : (e.updateMessage = !1, o = "#day-" + (e.selectedMessage.conversations.length - 1) + "-conversation-" + (e.selectedMessage.conversations[e.selectedMessage.conversations.length - 1].conversations.length - 1), a = document.querySelector(t).scrollHeight + document.querySelector(o).scrollHeight), angular.element(t).animate({
                        scrollTop: a
                    }, 600)
                }, 50)
            }, e.setInboxData = function(t, o) {
                e.newMessageTemp = "";
                var n = angular.copy(t.new_messages_count);
                e.newMessageView = !1, e.selectedMessage && t && t.id.$oid === e.selectedMessage.id.$oid && (e.newMessageTemp = angular.copy(e.selectedMessage.replyMessage)), e.selectedMessage = t, e.newMessageTemp ? e.selectedMessage.replyMessage = e.newMessageTemp : e.selectedMessage.replyMessage = "", f.addClass("open"), e.setMessageConfig(), e.selectedMessage.new_messages_count > 0 && m(function() {
                    var t = {
                        message: {
                            sender_id: e.coachId
                        }
                    };
                    if (c.resetMessageCount(e.selectedMessage.id.$oid, t, function() {
                            o ? m(function() {
                                e.selectedMessage.new_messages_count = 0, a.$emit("refreshHeader", n)
                            }, 1e3) : (e.selectedMessage.new_messages_count = 0, a.$emit("refreshHeader", n))
                        }, function(e) {
                            console.log(e)
                        }), "welcomemsg" === e.selectedMessage.id.$oid) {
                        var s = {
                            coach: {
                                strivefar_message_read: "yes"
                            }
                        };
                        r.updateAccount(s, e.coachId, function(t) {
                            e.profileData.strivefar_message_read = t.data.strivefar_message_read, "yes" === t.data.strivefar_message_read ? a.isStriveFarMsgRead = !0 : a.isStriveFarMsgRead = !1, a.unreadMessages = a.unreadMessages - 1, e.selectedMessage.new_messages_count = 0, a.$emit("refreshHeader", n)
                        })
                    }
                }, 50), e.scrollToBottom(), angular.forEach(e.selectedMessage.conversations, function(e, t) {
                    e.date && (e.date = new Date(e.date))
                }), e.newMsgSend = !1
            }, e.setMessageConfig = function() {
                e.messageConfig = {
                    autoHideScrollbar: !1,
                    theme: "light",
                    advanced: {
                        updateOnContentResize: !0
                    },
                    setHeight: 590,
                    scrollInertia: 0
                }, e.messageListConfig = {
                    autoHideScrollbar: !1,
                    theme: "light",
                    advanced: {
                        updateOnContentResize: !0
                    },
                    setHeight: 448,
                    scrollInertia: 0
                }
            }, e.setMessageConfig(), e.goToLink = function(e) {
                $window.open("https://" + e, "_blank")
            }, e.addDefaultMessage = function() {
                var t = {
                    subscribers: "Welcome to StriveFar",
                    id: {
                        $oid: "welcomemsg"
                    },
                    new_messages_count: a.isStriveFarMsgRead ? 0 : 1,
                    from: "strivefar",
                    creator: "StriveFar",
                    conversations: [{
                        date: null,
                        conversations: [{
                            text: "Welcome to your message center, where you can communicate with all of your current and potential clients and keep all of your coaching related communication in one place.",
                            sender_email: "DoNotReply@strivefar.com",
                            sender_id: "welcomemsg",
                            sender_profile_image: null,
                            sender_name: "StriveFar",
                            role: "client"
                        }, {
                            text: "Remember to check your â€œTo Doâ€ list daily (left side, in your â€œMy Dashboardâ€).",
                            sender_email: "DoNotReply@strivefar.com",
                            sender_id: "welcomemsg",
                            sender_profile_image: null,
                            sender_name: "StriveFar",
                            role: "client"
                        }, {
                            text: "Do you have questions on how to use StriveFar effectively? Go to https://strivefar.zendesk.com/hc/en-u for help documents, tips, and tricks.",
                            sender_email: "DoNotReply@strivefar.com",
                            sender_id: "welcomemsg",
                            sender_profile_image: null,
                            sender_name: "StriveFar",
                            role: "client"
                        }, {
                            text: "Set your email spam filter to accept emails from <span class='txt-blue'>@strivefar.com</span>",
                            sender_email: "DoNotReply@strivefar.com",
                            sender_id: "welcomemsg",
                            sender_profile_image: null,
                            sender_name: "StriveFar",
                            role: "client"
                        }, {
                            text: "You can update your coaching information, pricing, and training location(s) on the Profile tab.",
                            sender_email: "DoNotReply@strivefar.com",
                            sender_id: "welcomemsg",
                            sender_profile_image: null,
                            sender_name: "StriveFar",
                            role: "client"
                        }, {
                            text: "Manage all of your athletes on the Client tab. Itâ€™s a quick way to refresh your memory on the athlete and their objectives.",
                            sender_email: "DoNotReply@strivefar.com",
                            sender_id: "welcomemsg",
                            sender_profile_image: null,
                            sender_name: "StriveFar",
                            role: "client"
                        }]
                    }]
                };
                g(e.messages, t.id.$oid) || e.messages.push(t)
            }, e.getMessages = function() {
                i.getCoachMessages(n.coachId, function(t) {
                    t.$resolved && 200 === t.status && (e.messages = t.data, e.addDefaultMessage(), e.messages.length > 0 && e.setInboxData(e.messages[0]), 0 === e.messages.length && e.createMessage())
                }, function(e) {
                    console.log(e)
                })
            }, e.messageEmitted = !1, a.$on("messagesCount", function() {
                e.messageEmitted = !0, e.getMessages()
            }), e.isProfileLoaded && e.profileData && !e.messageEmitted && e.getMessages(), e.newMsgSend = !1, e.sendMessage = function(t, a) {
                if (e.newMsgSend = !1, angular.isDefined(e.selectedMessage.replyMessage) && "" !== e.selectedMessage.replyMessage && null !== e.selectedMessage.replyMessage)
                    if (e.submitting = !0, "create" === a) {
                        e.newMsgSend = !0;
                        var o = {
                            message: {
                                sender_id: n.coachId,
                                role: "coach",
                                to: e.toIds,
                                text: angular.isDefined(e.selectedMessage.replyMessage) ? e.selectedMessage.replyMessage.replace(/\r?\n/g, "<br />") : ""
                            }
                        };
                        c.postMessage(o, function() {
                            e.newMsgSend = !0, e.selectedMessage.replyMessage = null, e.setMessageConfig(), e.submitting = !1, e.recepients = [], e.toIds = []
                        }, function(t) {
                            console.log(t), e.submitting = !1
                        })
                    } else {
                        var s = {
                            message: {
                                sender_id: n.coachId,
                                role: "coach",
                                text: angular.isDefined(e.selectedMessage.replyMessage) ? e.selectedMessage.replyMessage.replace(/\r?\n/g, "<br />") : ""
                            }
                        };
                        c.updateMessage(t.id.$oid, s, function(t) {
                            t.$resolved && 200 === t.status && (e.selectedMessage.replyMessage = null, e.setMessageConfig(), e.updateMessage = !0), e.submitting = !1
                        }, function(t) {
                            console.log(t), e.submitting = !1
                        })
                    }
            }, e.getClients = function() {
                e.clients = [], i.getClientsList(n.coachId, function(t) {
                    t.$resolved && 200 === t.status && (e.clients = t.data, e.clients.forEach(function(e) {
                        l.isImage(e.profile_image).then(function(t) {
                            t || (e.profile_image = null)
                        })
                    }))
                }, function(e) {
                    console.log(e)
                })
            }, e.getClients(), e.ac_options_users = {
                suggest: p,
                on_select: function(t) {
                    isItemSelected(e.toIds, t.obj.client_id) || e.addToRecepients(t.obj), e.selectedRecepient = null, angular.element(".matrix-cell").val(null)
                }
            }, e.newMessageView = !1, e.createMessage = function(t) {
                "new" === t && (e.newMessageView = !0), e.openChat = !0;
                var a = {
                    subscribers: "New Message",
                    id: {
                        $oid: "new"
                    },
                    conversations: [],
                    replyMessage: null
                };
                g(e.messages, a.id.$oid) || e.messages.splice(0, 0, a), e.setInboxData(e.messages[0]), e.setMessageConfig(), e.recepients = [], e.toIds = []
            }, e.stopCreateMessage = function(t) {
                angular.forEach(e.messages, function(t, a) {
                    "new" === t.id.$oid && e.messages.splice(a, 1)
                }), t || e.setInboxData(e.messages[0]), "All Messages" === e.selectedMessageType ? e.setInboxData(e.messages[0]) : e.filterdMessages.length ? e.setInboxData(e.filterdMessages[0]) : e.selectedMessage = "", e.newMsgSend = !1
            }, e.closeInfoMessage = function() {
                angular.element(".dashboard-message-info").hide();
                var t = {
                    coach: {
                        message_banner: "no"
                    }
                };
                r.updateAccount(t, e.coachIdd, function() {
                    e.loadCoachProfileSummary(function() {})
                }, function(e) {
                    console.log(e)
                })
            }, e.addToRecepients = function(t) {
                e.recepients.push(t);
                var a = {
                    receiver_id: t.client_id,
                    role: t.role
                };
                e.toIds.push(a)
            }, e.deleteRecepient = function(t) {
                e.recepients.splice(t, 1), e.toIds.splice(t, 1)
            }, window.onbeforeunload = function() {
                localStorage.setItem("currentStateName", "messages"), angular.isDefined(n.coachId) && localStorage.setItem("coachId", n.coachId)
            }, e.filterMessages = function() {
                e.messages && e.messages.length && e.messages[0].id && "new" === e.messages[0].id.$oid && e.messages.splice(0, 1), e.filterdMessages = [], e.messages.forEach(function(t, a) {
                    "Groups" === e.selectedMessageType && t.group_mailer && e.filterdMessages.push(t), "Individuals" !== e.selectedMessageType || t.group_mailer || e.filterdMessages.push(t), e.messages.length - 1 === a && (e.filterdMessages.length && "All Messages" != e.selectedMessageType && e.setInboxData(e.filterdMessages[0]), "All Messages" === e.selectedMessageType || e.filterdMessages.length || (e.selectedMessage = ""))
                }), "All Messages" === e.selectedMessageType && e.messages.length && e.setInboxData(e.messages[0]), e.$$phase || e.$apply()
            }, e.openMobMessage = function() {
                e.openChat = !0, angular.element(".dashboard-left").addClass("hide-elements"), angular.element("#dashboard-wrapper-mob-msg").addClass("open")
            }, e.closeButtonMessageMobile = function() {
                e.selectedRecepient = void 0, e.openChat = !1, angular.element("#dashboard-wrapper-mob-msg").removeClass("open"),
                    angular.element(".dashboard-left").removeClass("hide-elements")
            }, e.closeButtonMobile = function() {
                angular.element(".coach-info").removeClass("hide-elements"), angular.element("#profile-menu").removeClass("hide-elements"), o.go(e.baseState + ".sessions")
            }, e.swapMessagesOrder = function() {
                var t = angular.copy(e.messages[0]);
                e.messages[0] = angular.copy(e.messages[1]), e.messages[1] = t
            }, e.createNewMsgObject = function(e) {
                var t = e;
                t.id = {
                    $oid: e.message_id
                };
                var a = {
                    date: new Date(e.conversation.date),
                    conversations: [e.conversation]
                };
                return t.conversations = [a], t
            }, e.moveArrayPosition = function(t, a) {
                if (a >= e.messages.length)
                    for (var o = a - e.messages.length; o-- + 1;) e.messages.push(void 0);
                e.messages.splice(a, 0, e.messages.splice(t, 1)[0])
            }, e.scrollToLatest = function() {
                var e;
                e = isMobile() ? "#mobile-custom-scroll-main" : "#desktop-custom-scroll-main", angular.element(e).animate({
                    scrollTop: 0
                }, 200)
            }, a.pusher && (a.subscribedchannel || a.$emit("subscribeToChannel"), a.subscribedchannel.bind("new_message", function(t) {
                e.pusherMsgAdded = !1, e.newChatOpen = !1;
                var o = 0;
                if (e.messages) e.isMsgExisted = !1, e.messageTemp = "", angular.forEach(e.messages, function(n, s) {
                    if (e.pusherMsgAdded || n.id.$oid !== t.message_id || angular.forEach(n.conversations, function(a, o) {
                            if (!e.pusherMsgAdded && new Date(a.date).getTime() === new Date(t.conversation.date).getTime()) {
                                a.conversations.push(t.conversation), n.new_messages_count = t.new_messages_count, e.pusherMsgAdded = !0, e.isMsgExisted = !0, e.selectedMessage && e.selectedMessage.id.$oid === t.message_id && (e.messageTemp = n);
                                var i = n;
                                e.messages.splice(s, 1), e.messages.unshift(i), e.selectedMessage && "new" === e.selectedMessage.id.$oid && e.swapMessagesOrder()
                            }
                            if (!e.pusherMsgAdded && n.conversations.length - 1 === o) {
                                var r = {
                                    date: new Date(t.conversation.date),
                                    conversations: [t.conversation]
                                };
                                n.conversations.push(r), e.pusherMsgAdded = !0
                            }
                        }), o += n.new_messages_count, e.messages.length - 1 === s) {
                        if (!e.pusherMsgAdded) {
                            var i = e.createNewMsgObject(t);
                            e.messages.unshift(i), e.selectedMessage && "new" === e.selectedMessage.id.$oid && e.swapMessagesOrder(), o += t.new_messages_count, e.pusherMsgAdded = !0, e.newChatOpen = !0
                        }
                        e.isMsgExisted && e.messageTemp ? e.setInboxData(e.messageTemp, !0) : e.newMsgSend && e.stopCreateMessage(t.new_messages_count), e.newChatOpen && "All Messages" !== e.selectedMessageType && e.filterMessages(), a.unreadMessages = a.isStriveFarMsgRead ? o : o + 1, 0 === t.new_messages_count && e.scrollToLatest()
                    }
                });
                else {
                    var n = e.createNewMsgObject(t);
                    e.messages.push(n), a.unreadMessages = a.isStriveFarMsgRead ? t.new_messages_count : t.new_messages_count + 1, e.pusherMsgAdded = !0, e.newMsgSend && e.stopCreateMessage(t.new_messages_count), "All Messages" !== e.selectedMessageType && e.filterMessages()
                }
            })), e.$on("$destroy", function() {
                a.subscribedchannel && a.subscribedchannel.unbind("new_message")
            })
        };
        e.$inject = ["$scope", "appConfig", "$rootScope", "$state", "$stateParams", "Coachco_CommonService", "CoachProfileInterfaceService", "CoachEnrollmentInterfaceService", "CommonAPIInterfaceService", "Utils", "$sce", "AuthFactory", "$timeout", "$filter"], angular.module("Coachco").controller("CoachMessagesController", e)
    }(),
    function(e) {
        var t = function(e, t, a, o, n) {
            e.coachData = n, e.close = function() {
                o.modalClose(t)
            }, e.writeNotes = function() {
                var n = {
                    coach: {
                        admin_notes: e.notes
                    }
                };
                a.updateStatus(e.coachData, n, function(a) {
                    if (a.$resolved && 200 === a.status) {
                        var n = {
                            status: "success",
                            notes: e.notes
                        };
                        o.modalDone(t, n)
                    }
                }, function(e) {
                    console.log(e), o.modalDone(t, "error")
                })
            }, e.getNotes = function() {
                a.getNotesOnCoach(e.coachData, function(t) {
                    t.$resolved && 200 === t.status && (e.notes = t.data.notes)
                }, function(e) {
                    console.log(e)
                })
            }, e.getNotes()
        };
        t.$inject = ["$scope", "$uibModalInstance", "AdminProfileInterfaceService", "Coachco_CommonService", "coachData"], e.module("Coachco").controller("coachNotesController", t)
    }(angular),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c) {
            e.$parent.currentState = o.current.name, e.loadPayments = function(t) {
                c.getPayments(s.coachId, t, function(t) {
                    e.paymentArray = t.data
                }, function(t) {
                    console.log(t), e.paymentArray = i.getPayments()
                })
            }, e.selectTab = function(t) {
                e.selectedTab = t, "Week" === t ? (localStorage.setItem("coachPaymentFilter", "Week"), e.loadPayments("weekly")) : "Month" === t ? (localStorage.setItem("coachPaymentFilter", "Month"), e.loadPayments("monthly")) : "Year" === t && (localStorage.setItem("coachPaymentFilter", "Year"), e.loadPayments("yearly"))
            }, angular.isDefined(localStorage.getItem("coachPaymentFilter")) && null !== localStorage.getItem("coachPaymentFilter") ? e.selectTab(localStorage.getItem("coachPaymentFilter")) : e.selectTab("Week"), e.fetchPaymentDetails = function(e, t, a, o) {
                c.getPaymentDetails(s.coachId, t, a, "y", o, function(t) {
                    e.details = t.data, e.commission_percentage = e.commission_percentage;
                    var a = "/partials/coachProfile/views/modal/coachProfile.payments.detail.html",
                        o = "model-createmessage",
                        n = "coachPaymentsModalController";
                    r.modalOpen(a, o, n, e)
                }, function(e) {
                    console.log(e)
                })
            }, e.openPaymentDetails = function(t) {
                t.selectedTab = e.selectedTab, "Week" === e.selectedTab ? e.fetchPaymentDetails(t, "w", t.week, moment(t.start_date).year()) : "Month" === e.selectedTab && e.fetchPaymentDetails(t, "m", t.month, moment(t.start_date).year())
            }, window.onbeforeunload = function() {
                localStorage.setItem("currentStateName", "payments"), angular.isDefined(s.coachId) && localStorage.setItem("coachId", s.coachId)
            }, a.$on("newPayment", function() {
                e.loadPayments()
            }), e.resetPaymentsCount = function() {
                if (a.unreadPayments > 0) {
                    var e = {
                        payment: {
                            notify: "done"
                        }
                    };
                    c.updatePayment(s.coachId, e, function() {
                        a.$emit("refreshHeader")
                    }, function(e) {
                        console.log(e)
                    })
                }
            }, e.resetPaymentsCount()
        };
        e.$inject = ["$scope", "appConfig", "$rootScope", "$state", "AdminProfileInterfaceService", "$stateParams", "CoachProfileService", "Coachco_CommonService", "CoachProfileInterfaceService"], angular.module("Coachco").controller("CoachPaymentsController", e)
    }(),
    function(e) {
        var t = function(e, t, a, o, n) {
            e.paymentData = n, e.close = function() {
                o.modalClose(t)
            }
        };
        t.$inject = ["$scope", "$uibModalInstance", "CoachProfileService", "Coachco_CommonService", "paymentModel"], e.module("Coachco").controller("coachPaymentsModalController", t)
    }(angular),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d, u, m, h, p, g, f) {
            e.$parent.currentState = n.current.name, e.activityList = [], e.profileSummary = {}, e.profilePhilosophy = {}, e.trainingLocation = {}, e.trainingLocations = [], e.positionRequiredInvalid = !1, e.levelCoachedRequiredInvalid = !1, e.editMode = Array(4).fill(!1), e.photo = {}, e.coach = {}, e.mapLoaded = !1;
            var v = null;
            e.weekDays = t.weekDays, e.coachProfile, e.genders = t.genders, e.level_coached = {}, e.position_played = {}, e.showMapLoader = function() {
                e.mapLoader = !0
            }, e.hideMapLoader = function() {
                e.mapLoader = !1
            }, window.onbeforeunload = function() {
                localStorage.setItem("currentStateName", "profile"), angular.isDefined(s.coachId) && localStorage.setItem("coachId", s.coachId)
            }, e.initializeCoachArray = function() {
                e.coachProfile = {
                    coach: {
                        first_name: null,
                        last_name: null,
                        email: null,
                        phone: null,
                        activity: null,
                        profile: {
                            gender: null,
                            bio: null,
                            image: null,
                            nickname: null,
                            dob: null
                        },
                        credentials: [{
                            coaching_philosophy: null,
                            favorite_player: null,
                            favorite_team: null,
                            highest_level_played: null,
                            level_coached: [],
                            position: [],
                            years_coaching: null,
                            ntrp_rating: null,
                            your_coaching_experience: null,
                            your_playing_career: null
                        }],
                        pricing: {
                            individual: null,
                            group: null,
                            min_group_size: null,
                            max_group_size: null
                        },
                        locations: []
                    }
                }
            }, e.validatingForm = function() {
                e.coachProfile.coach.pricing.individual_with_service_fee = calculateFee(e.coachProfile.coach.pricing.individual, e.serviceFee), angular.isDefined(e.coachProfile.coach.pricing.individual) && null !== e.coachProfile.coach.pricing.individual ? (e.individual_processing_fee = Math.round(parseInt(e.coachProfile.coach.pricing.individual) * parseFloat(e.serviceFee)), 0 === e.individual_processing_fee && (e.individual_processing_fee = 1)) : e.individual_processing_fee = 0, e.coachProfile.coach.pricing.group_with_service_fee = calculateFee(e.coachProfile.coach.pricing.group, e.serviceFee), angular.isDefined(e.coachProfile.coach.pricing.group) && null !== e.coachProfile.coach.pricing.group ? (e.group_processing_fee = Math.round(parseInt(e.coachProfile.coach.pricing.group) * parseFloat(e.serviceFee)), 0 === e.group_processing_fee && (e.group_processing_fee = 1)) : e.group_processing_fee = 0
            }, e.setCheckBoxes = function(e) {
                var t = {};
                return e.forEach(function(e) {
                    t[e] = !0
                }), t
            }, e.setDaysCheckBoxes = function(e) {
                var t = {};
                return e.forEach(function(e) {
                    t[e] = !0
                }), t
            }, e.isWeekDaySelectedByOther = function(t, a) {
                var o = !1;
                return e.trainingLocations.forEach(function(e, n) {
                    n !== t && !angular.isUndefined(e.selecteddays) && e.selecteddays[a.name] && (o = !0)
                }), o
            }, e.setDayStatus = function(e, t) {
                !angular.isUndefined(e.selecteddays) && e.selecteddays[t.name] ? t.selected = !0 : t.selected = !1
            }, e.setSelectedWeekDays = function(t) {
                e.weekDays.forEach(function(e) {
                    !angular.isUndefined(t.selecteddays) && t.selecteddays[e.name] && (e.selected = !0)
                })
            }, e.isWeekDayAvailable = function() {
                var t = !1;
                return e.weekDays.forEach(function(e) {
                    e.selected || (t = !0)
                }), t
            }, e.isDaySelectedForLocation = function(e) {
                var t = !1;
                return angular.forEach(e.selecteddays, function(e) {
                    e && (t = !0)
                }), t
            }, e.unSelectWeekDay = function(t) {
                e.weekDays.forEach(function(e) {
                    e.name === t && (e.selected = !1)
                })
            }, e.initializeLocations = function() {
                e.trainingLocations = [{
                    title: "Preferred Training Location",
                    name: null,
                    address: {},
                    formattedAddress: null,
                    days: []
                }, {
                    title: "Other Location",
                    name: null,
                    address: {},
                    formattedAddress: null,
                    days: []
                }], e.trainingLocations.forEach(function(t) {
                    t.selecteddays = e.setDaysCheckBoxes(t.days), e.setSelectedWeekDays(t)
                })
            }, e.resetValues = function(e) {
                e.coach.email = null, e.coach.profile.bio = null, e.coach.credentials[0].coaching_philosophy = null, e.coach.credentials[0].your_coaching_experience = null, e.coach.credentials[0].your_playing_career = null
            }, e.loadSportsHistory = function() {
                !angular.isUndefined(e.coachProfile.coach.credentials) && null !== e.coachProfile.coach.credentials[0].level_coached && e.coachProfile.coach.credentials[0].level_coached.length > 0 && (e.level_coached = e.setCheckBoxes(e.coachProfile.coach.credentials[0].level_coached)), !angular.isUndefined(e.coachProfile.coach.credentials) && null !== e.coachProfile.coach.credentials[0].position && e.coachProfile.coach.credentials[0].position.length > 0 && (e.position_played = e.setCheckBoxes(e.coachProfile.coach.credentials[0].position))
            }, e.positionValidation = function() {
                var t = 0;
                e.$$phase || e.$apply(), angular.forEach(e.position_played, function(e) {
                    e && t++
                }), t > 0 ? e.positionRequiredInvalid = !1 : e.positionRequiredInvalid = !0, !e.$parent.profileData.activity || "Speed And Agility" !== e.$parent.profileData.activity.capitalize() && "Strength and Conditioning" !== e.$parent.profileData.activity.capitalize() || (t >= 4 ? e.positionDisabled = !0 : e.positionDisabled = !1), e.$$phase || e.$apply()
            }, e.setCoachProfile = function(t) {
                e.coachProfile = {
                    coach: {
                        first_name: t.first_name,
                        last_name: t.last_name,
                        email: null,
                        phone: t.phone,
                        coach_name: t.coach_name,
                        business_name: t.business_name,
                        activity: t.activity,
                        club_id: t.club_id,
                        address: t.address,
                        background_check: t.background_check,
                        profile: {
                            gender: t.profile.gender,
                            bio: null,
                            image: t.profile.image,
                            nickname: t.profile.nickname,
                            dob: t.profile.dob
                        },
                        profile_image: t.profile_image,
                        credentials: [{
                            coaching_philosophy: null,
                            favorite_player: angular.isDefined(t.credentials[0]) ? t.credentials[0].favorite_player : null,
                            favorite_team: angular.isDefined(t.credentials[0]) ? t.credentials[0].favorite_team : null,
                            highest_level_played: angular.isDefined(t.credentials[0]) ? t.credentials[0].highest_level_played : null,
                            level_coached: angular.isDefined(t.credentials[0]) && angular.isDefined(t.credentials[0].level_coached) && null !== t.credentials[0].level_coached ? t.credentials[0].level_coached : [],
                            position: angular.isDefined(t.credentials[0]) && angular.isDefined(t.credentials[0].position) && null !== t.credentials[0].position ? t.credentials[0].position : [],
                            ntrp_rating: angular.isDefined(t.credentials[0]) && angular.isDefined(t.credentials[0].ntrp_rating) && 0 !== parseFloat(t.credentials[0].ntrp_rating) ? parseFloat(t.credentials[0].ntrp_rating) : null,
                            years_coaching: angular.isDefined(t.credentials[0]) ? t.credentials[0].years_coaching : null,
                            your_coaching_experience: null,
                            your_playing_career: null
                        }],
                        pricing: {
                            individual: 0 !== parseInt(t.pricing.individual) ? parseInt(t.pricing.individual) : null,
                            individual_with_service_fee: 0 !== parseInt(t.pricing.individual_with_service_fee) ? parseInt(t.pricing.individual_with_service_fee) : null,
                            group: 0 !== parseInt(t.pricing.group) ? parseInt(t.pricing.group) : null,
                            group_with_service_fee: 0 !== parseInt(t.pricing.group_with_service_fee) ? parseInt(t.pricing.group_with_service_fee) : null,
                            min_group_size: 0 !== parseInt(t.pricing.min_group_size) ? parseInt(t.pricing.min_group_size) : null,
                            max_group_size: 0 !== parseInt(t.pricing.max_group_size) ? parseInt(t.pricing.max_group_size) : null
                        },
                        locations: [],
                        notification: t.notification
                    }
                }, e.initializeLocations();
                var a = 0;
                t.training_locations.forEach(function(t) {
                    if (t.days.length > 0) {
                        if (angular.isUndefined(e.trainingLocations[a]) || null === e.trainingLocations[a]) {
                            var o = {
                                title: "Other Location",
                                id: t.id.$oid,
                                name: null,
                                address: {},
                                formattedAddress: null,
                                days: []
                            };
                            e.trainingLocations.push(o)
                        }
                        e.trainingLocations[a].id = t.id.$oid, e.trainingLocations[a].google_id = t.google_id, e.trainingLocations[a].formattedAddress = (angular.isDefined(t.name) && null !== t.name && "" !== t.name ? t.name + ", " : "") + (angular.isDefined(t.address.street) && null !== t.address.street && "" !== t.address.street ? t.address.street + ", " : "") + (angular.isDefined(t.address.city) && null !== t.address.city && "" !== t.address.city ? t.address.city + ", " : "") + (angular.isDefined(t.address.state) && null !== t.address.state && "" !== t.address.state ? t.address.state + ", " : "") + (angular.isDefined(t.address.zip) && null !== t.address.zip && "" !== t.address.zip ? t.address.zip : ""), angular.isUndefined(t.address) ? e.trainingLocations[a].address = null : e.trainingLocations[a].address = t.address, angular.isUndefined(t.days) ? e.trainingLocations[a].days = [] : e.trainingLocations[a].days = t.days, angular.isUndefined(t.name) ? e.trainingLocations[a].name = null : e.trainingLocations[a].name = t.name, t.days && (e.trainingLocations[a].selecteddays = e.setDaysCheckBoxes(t.days), e.setSelectedWeekDays(e.trainingLocations[a]));
                        var n = {
                            id: t.id.$oid,
                            name: t.name,
                            address: t.address,
                            google_id: t.google_id,
                            days: t.days
                        };
                        e.coachProfile.coach.locations.push(n), a++
                    }
                }), e.loadSportsHistory(), e.positionValidation(), e.coachTempProfile = angular.copy(e.coachProfile), e.validatingForm()
            }, e.resetTrainingLocationsArray = function() {
                e.initializeLocations();
                var t = 0;
                e.coachProfile.coach.locations.forEach(function(a, o) {
                    if (a.days.length > 0) {
                        if (angular.isUndefined(e.trainingLocations[t]) || null === e.trainingLocations[t]) {
                            var n = {
                                title: "Other Location",
                                id: a.id,
                                name: null,
                                address: {},
                                formattedAddress: null,
                                days: []
                            };
                            e.trainingLocations.push(n)
                        }
                        e.trainingLocations[t].id = a.id, e.trainingLocations[t].google_id = a.google_id, e.trainingLocations[t].formattedAddress = (angular.isDefined(a.name) && null !== a.name && "" !== a.name ? a.name + ", " : "") + (angular.isDefined(a.address.street) && null !== a.address.street && "" !== a.address.street ? a.address.street + ", " : "") + (angular.isDefined(a.address.city) && null !== a.address.city && "" !== a.address.city ? a.address.city + ", " : "") + (angular.isDefined(a.address.state) && null !== a.address.state && "" !== a.address.state ? a.address.state + ", " : "") + (angular.isDefined(a.address.zip) && null !== a.address.zip && "" !== a.address.zip ? a.address.zip : ""), angular.isUndefined(a.address) ? e.trainingLocations[t].address = null : e.trainingLocations[t].address = a.address, angular.isUndefined(a.days) ? e.trainingLocations[t].days = [] : e.trainingLocations[t].days = a.days, angular.isUndefined(a.name) ? e.trainingLocations[t].name = null : e.trainingLocations[t].name = a.name, a.days && (e.trainingLocations[t].selecteddays = e.setDaysCheckBoxes(a.days), e.setSelectedWeekDays(e.trainingLocations[t])), t++
                    }
                })
            }, e.setTabIndex = function(t) {
                e.selectedIndex = t
            }, e.preventDeselect = function(e) {
                angular.isDefined(e) && e.preventDefault()
            }, e.undoLocationSelection = function() {}, e.checkforUpdates = function(t) {
                if (e.setUpdateValues(), e.setLocationsArray(), console.log(JSON.stringify(e.coachProfile), JSON.stringify(e.coachTempProfile)), angular.equals(e.coachProfile, e.coachTempProfile)) e.resetValues(e.coachProfile), e.loadSportsHistory(), e.resetTrainingLocationsArray(), e.selectProfileTab(t);
                else {
                    var a = {
                        title: "Discard your changes?",
                        message: "You have unsaved changes which will be lost if you continue.",
                        note: 'To save your changes, please â€œCancelâ€ and then click "Updateâ€ at the bottom of the page.',
                        positiveBtn: "Continue",
                        negativeBtn: "Cancel"
                    };
                    m.showDialog(a, function(a) {
                        "yes" === a.$$state.value && (e.resetValues(e.coachTempProfile), e.coachProfile = angular.copy(e.coachTempProfile), e.loadSportsHistory(), e.resetTrainingLocationsArray(), e.selectProfileTab(t))
                    })
                }
            }, e.selectProfileTab = function(t) {
                e.active = t, e.selectedIndex = t, e.$$phase || e.$apply(), localStorage.setItem("profileTabSelected", t), 4 === t && null !== v && (v = null, e.mapLoaded = !1, e.loadMap())
            }, angular.isDefined(localStorage.getItem("profileTabSelected")) && null !== localStorage.getItem("profileTabSelected") ? e.selectProfileTab(parseInt(localStorage.getItem("profileTabSelected"))) : e.selectProfileTab(0), e.setCoachFromParent = function() {
                e.setCoachProfile(e.$parent.profileData), e.photo.imageArray = e.$parent.profileData.image_paths, e.photo.imageArray.length > 2 && (e.setImageLimit = !0)
            }, e.loadCoachProfile = function() {
                e.initializeCoachArray(), angular.isDefined(e.$parent.profileData) ? e.setCoachFromParent() : e.$parent.loadCoachProfileSummary(function(t) {
                    t && e.setCoachFromParent()
                })
            }, e.loadCoachProfile(), e.setUpdateValues = function() {
                angular.isDefined(e.coachProfile.coach.credentials[0]) && angular.isDefined(e.$parent.profileData.credentials[0]) && (null === e.coachProfile.coach.credentials[0].your_coaching_experience || "" === e.coachProfile.coach.credentials[0].your_coaching_experience) && (e.coachProfile.coach.credentials[0].your_coaching_experience = e.$parent.profileData.credentials[0].your_coaching_experience), angular.isDefined(e.coachProfile.coach.credentials[0]) && angular.isDefined(e.$parent.profileData.credentials[0]) && (null === e.coachProfile.coach.credentials[0].highest_level_played || "" === e.coachProfile.coach.credentials[0].highest_level_played) && (e.coachProfile.coach.credentials[0].highest_level_played = e.$parent.profileData.credentials[0].highest_level_played), angular.isDefined(e.coachProfile.coach.credentials[0]) && angular.isDefined(e.$parent.profileData.credentials[0]) && (null === e.coachProfile.coach.credentials[0].coaching_philosophy || "" === e.coachProfile.coach.credentials[0].coaching_philosophy) && (e.coachProfile.coach.credentials[0].coaching_philosophy = e.$parent.profileData.credentials[0].coaching_philosophy), null !== e.coachProfile.coach.profile.bio && "" !== e.coachProfile.coach.profile.bio || (e.coachProfile.coach.profile.bio = e.$parent.profileData.profile.bio), angular.isDefined(e.coachProfile.coach.credentials[0]) && angular.isDefined(e.$parent.profileData.credentials[0]) && (null === e.coachProfile.coach.credentials[0].your_playing_career || "" === e.coachProfile.coach.credentials[0].your_playing_career) && (e.coachProfile.coach.credentials[0].your_playing_career = e.$parent.profileData.credentials[0].your_playing_career), null !== e.coachProfile.coach.email && "" !== e.coachProfile.coach.email || (e.coachProfile.coach.email = e.$parent.profileData.email), angular.isDefined(e.$parent.profileData.selectedActivity) && (e.coachProfile.coach.credentials[0].position = e.getList(e.position_played, e.$parent.profileData.selectedActivity.questions.position_played), e.coachProfile.coach.credentials[0].level_coached = e.getList(e.level_coached, e.$parent.profileData.selectedActivity.questions.level_coached), e.coachProfile.coach.activity = e.$parent.profileData.selectedActivity.activity, e.coachTempProfile.coach.activity = angular.copy(e.$parent.profileData.selectedActivity.activity)), isNonEmptyObject(e.$parent.profileData.selectedClub) && isNonEmptyObject(e.$parent.profileData.selectedClub._id) && (e.coachProfile.coach.club_id = e.$parent.profileData.selectedClub._id.$oid, e.coachTempProfile.coach.club_id = angular.copy(e.$parent.profileData.selectedClub._id.$oid)), e.coachTempProfile.coach.email = angular.copy(e.$parent.profileData.email), e.coachTempProfile.coach.profile.bio = angular.copy(e.$parent.profileData.profile.bio), e.coachTempProfile.coach.credentials.length > 0 && e.$parent.profileData.credentials.length > 0 && (e.coachTempProfile.coach.credentials[0].highest_level_played = angular.copy(e.$parent.profileData.credentials[0].highest_level_played), e.coachTempProfile.coach.credentials[0].your_playing_career = angular.copy(e.$parent.profileData.credentials[0].your_playing_career), e.coachTempProfile.coach.credentials[0].your_coaching_experience = angular.copy(e.$parent.profileData.credentials[0].your_coaching_experience), e.coachTempProfile.coach.credentials[0].coaching_philosophy = angular.copy(e.$parent.profileData.credentials[0].coaching_philosophy))
            }, e.uploadPhoto = function() {
                var t = "partials/shared/views/modals/shared.uploadPhoto.html",
                    a = "model-createmessage",
                    o = "uploadPhotoController";
                e.photo.postURL = d.ccUrl + "coaches/" + e.coachIdd, e.photo.isCoach = !0, u.modalOpen(e.photo, t, a, o, function(t) {
                    e.photo.croppedImage = t.$$state.value.croppedImage, e.photo.imageArray = t.$$state.value.imageArray, e.photo.duplicate = t.$$state.value.duplicate, e.photo.uploadStatus = t.$$state.value.uploadStatus, e.photo.picFile = t.$$state.value.picFile, e.photo.uploadStatus && (e.photo.profile_image = t.$$state.value.profile_image, e.coachProfile.coach.profile.image = t.$$state.value.imageArray, e.coachProfile.coach.profile_image = t.$$state.value.imageArray[0].url), e.photo.imageArray.length > 2 && (e.setImageLimit = !0)
                }), e.coachTempProfile = angular.copy(e.coachProfile)
            }, e.setProfileImage = function(t) {
                c.setCoachProfileImage(e.coachIdd, t.id, function(a) {
                    a.$resolved && 200 === a.status && (e.coachProfile.coach.profile_image = t.url)
                }, function(e) {
                    var t, a;
                    422 === e.status ? (t = "Error!", a = e.statusText) : 404 === e.status && (t = "Error!", a = "The image is not found"), o.showAlert(t, a)
                })
            }, e.levelCoachedValidation = function() {
                var t = 0;
                angular.forEach(e.level_coached, function(e) {
                    e && t++
                }), t > 0 ? e.levelCoachedRequiredInvalid = !1 : e.levelCoachedRequiredInvalid = !0
            }, e.checkPositionError = function(t) {
                t ? e.positionDisabledError = !0 : e.positionDisabledError = !1
            }, e.uploadImage = function() {
                e.photo.imageArray.length > 2 ? e.setImageLimit = !0 : angular.isUndefined(e.photo.picFile) || null === e.photo.picFile || e.uploadPhoto()
            }, e.deleteProfPic = function(t, a) {
                c.deleteCoachImage(e.coachIdd, t.id, function(t) {
                    t.$resolved && 204 === t.status && (e.photo.imageArray.splice(a, 1), e.photo.imageArray.length < 3 && (e.setImageLimit = !1))
                }, function(e) {
                    var t, a;
                    422 === e.status ? (t = "Error!", a = e.statusText) : 404 === e.status ? (t = "Error!", a = "The image is not found") : 409 === e.status ? (t = "Error!", a = "You may not delete this image because it is set as your profile photo.") : (t = "Error!", a = "Unexpected Error"), o.showAlert(t, a)
                })
            }, e.getList = function(e) {
                var t = [];
                return angular.forEach(e, function(e, a) {
                    e && t.push(a)
                }), t
            }, e.getListofSelected = function(e) {
                var t = [];
                return angular.forEach(e, function(e, a) {
                    e && t.push(a)
                }), t
            }, e.submitSportsExperience = function() {
                if (e.regStep1Form.$valid && isSelected(e.level_coached) && isSelected(e.position_played) && e.photo.imageArray.length > 0) e.coachProfile.coach.credentials[0].position = e.getList(e.position_played), e.coachProfile.coach.credentials[0].level_coached = e.getList(e.level_coached), angular.isDefined(e.$parent.profileData.selectedActivity) && (e.coachProfile.coach.activity = e.$parent.profileData.selectedActivity.activity), isNonEmptyObject(e.$parent.profileData.selectedClub) && isNonEmptyObject(e.$parent.profileData.selectedClub._id) ? e.coachProfile.coach.club_id = e.$parent.profileData.selectedClub._id.$oid : isNonEmptyObject(e.$parent.profileData.selectedClub) && "" !== e.$parent.profileData.selectedClub.name ? e.coachProfile.coach.new_club_name = e.profileData.selectedClub.name : e.coachProfile.coach.club_id = null, e.updateCoachAccount("coachEnrollment.profileSummary");
                else {
                    var t = "Incomplete Information!",
                        a = "Please enter all the required fields, including your photo.";
                    o.showAlert(t, a), e.submitted = !0, isSelected(e.level_coached) || (e.levelCoachedRequiredInvalid = !0), isSelected(e.position_played) || (e.positionRequiredInvalid = !0)
                }
            }, e.$watch("coachProfile.coach.profile.dob", function(t) {
                e.coachProfile.coach.profile.dob = r("date")(t, "mm/dd/yyyy")
            }), e.activityChanged = function(t) {
                $.each(e.activityList, function(a) {
                    e.activityList[a].activity === t && (e.profile.highestLevelPlayed = e.activityList[a].questions.highest_level_played, e.profile.highestLevel = e.activityList[a].questions.highest_level_played[0], e.profile.positionPlayed = e.activityList[a].questions.position_played, e.profile.levelCoached = e.activityList[a].questions.level_coached)
                })
            }, e.updatephilosophyCareer = function() {
                e.profilePhilosophy.coachingPhilosophy && (e.currentPhilosophy.coachingPhilosophy = e.profilePhilosophy.coachingPhilosophy), e.profilePhilosophy.playingCareer && (e.currentPhilosophy.playingCareer = e.profilePhilosophy.playingCareer), e.profilePhilosophy.coachingCareer && (e.currentPhilosophy.coachingCareer = e.profilePhilosophy.coachingCareer), e.profilePhilosophy = {}
            }, e.inputType = "password", e.hideShowPassword = function() {
                "password" === e.inputType ? e.inputType = "text" : e.inputType = "password"
            }, e.editSummary = function() {
                e.editMode ? (e.updateProfile(), e.editMode = !1) : e.editMode = !0
            }, e.setEditMode = function(t) {
                switch (t) {
                    case 0:
                        "" !== e.coachProfile.coach.profile.bio || null !== e.coachProfile.coach.profile.bio ? e.editMode[t] = !0 : e.editMode[t] = !1;
                        break;
                    case 1:
                        "" !== e.coachProfile.coach.credentials[0].coaching_philosophy || null !== e.coachProfile.coach.credentials[0].coaching_philosophy ? e.editMode[t] = !0 : e.editMode[t] = !1;
                        break;
                    case 2:
                        "" !== e.coachProfile.coach.credentials[0].your_playing_career || null !== e.coachProfile.coach.credentials[0].your_playing_career ? e.editMode[t] = !0 : e.editMode[t] = !1;
                        break;
                    case 3:
                        "" !== e.coachProfile.coach.credentials[0].your_coaching_experience || null !== e.coachProfile.coach.credentials[0].your_coaching_experience ? e.editMode[t] = !0 : e.editMode[t] = !1
                }
            }, e.getTypedChars = function(e) {
                var t = angular.isDefined(e) && null !== e && "" !== e ? e.length : 0;
                return t
            }, e.updateBasicDetails = function(t) {
                if (e.coachProfile.coach.email = e.profileData.email, !angular.isDefined(e.coachProfile.coach.new_password) || "" !== e.coachProfile.coach.new_password && 0 !== e.coachProfile.coach.new_password.length || delete e.coachProfile.coach.new_password, !angular.isDefined(e.coachProfile.coach.new_email) || "" !== e.coachProfile.coach.new_email && 0 !== e.coachProfile.coach.new_email.length || delete e.coachProfile.coach.new_email, !t.$valid || e.ageInvalid || e.ageExceed) {
                    var a = "Incomplete Information!",
                        n = "Please enter all the required fields";
                    o.showAlert(a, n), e.submitted = !0
                } else(angular.isUndefined(e.coachProfile.coach.new_password) || 0 === e.coachProfile.coach.new_password.length || angular.isDefined(e.coachProfile.coach.new_password) && e.coachProfile.coach.new_password === e.coach.new_password) && (angular.isUndefined(e.coachProfile.coach.new_email) || 0 === e.coachProfile.coach.new_email.length || angular.isDefined(e.coachProfile.coach.new_email) && e.coachProfile.coach.new_email === e.coach.new_email) ? (e.setLocationsArray(), e.updateProfile()) : e.submitted = !0
            }, e.updateSportExperienceDetails = function(t) {
                if (e.coachProfile.coach.email = e.profileData.email, angular.isDefined(e.$parent.profileData.selectedActivity) && (e.coachProfile.coach.activity = angular.copy(e.$parent.profileData.selectedActivity.activity)), isNonEmptyObject(e.$parent.profileData.selectedClub) && isNonEmptyObject(e.$parent.profileData.selectedClub._id) ? e.coachProfile.coach.club_id = e.$parent.profileData.selectedClub._id.$oid : isNonEmptyObject(e.$parent.profileData.selectedClub) && "" !== e.$parent.profileData.selectedClub.name ? e.coachProfile.coach.new_club_name = e.$parent.profileData.selectedClub.name : e.coachProfile.coach.club_id = null, t.$valid && isSelected(e.level_coached) && isSelected(e.position_played) && e.photo.imageArray.length > 0) e.setLocationsArray(), e.updateProfile();
                else {
                    var a = "Incomplete Information!",
                        n = "Please enter all the required fields, including your photo.";
                    o.showAlert(a, n), e.submitted = !0, isSelected(e.level_coached) || (e.levelCoachedRequiredInvalid = !0), isSelected(e.position_played) || (e.positionRequiredInvalid = !0)
                }
            }, e.afterSelect = function() {
                e.$parent.profileData.selectedClub = e.$parent.profileData.selectedClub.name
            }, e.compareMaxMin = function() {
                e.minInvalid = !1, e.maxInvalid = !1, parseInt(e.coachProfile.coach.pricing.min_group_size) > parseInt(e.coachProfile.coach.pricing.max_group_size) && (e.minInvalid = !0)
            }, e.compareMinMax = function() {
                e.maxInvalid = !1, e.minInvalid = !1, parseInt(e.coachProfile.coach.pricing.min_group_size) > parseInt(e.coachProfile.coach.pricing.max_group_size) && (e.maxInvalid = !0)
            }, e.updateProfileSummary = function(t) {
                if (e.coachProfile.coach.email = e.profileData.email, t.$valid) e.setLocationsArray(), e.coachProfile.coach.pricing = {
                    individual: 0 !== parseInt(e.coachProfile.coach.pricing.individual) ? parseInt(e.coachProfile.coach.pricing.individual) : null,
                    individual_with_service_fee: calculateFee(e.coachProfile.coach.pricing.individual, e.serviceFee),
                    group: 0 !== parseInt(e.coachProfile.coach.pricing.group) ? parseInt(e.coachProfile.coach.pricing.group) : null,
                    group_with_service_fee: calculateFee(e.coachProfile.coach.pricing.group, e.serviceFee),
                    min_group_size: 0 !== parseInt(e.coachProfile.coach.pricing.min_group_size) ? parseInt(e.coachProfile.coach.pricing.min_group_size) : null,
                    max_group_size: 0 !== parseInt(e.coachProfile.coach.pricing.max_group_size) ? parseInt(e.coachProfile.coach.pricing.max_group_size) : null
                }, e.updateProfile();
                else {
                    var a = "Incomplete Information!",
                        n = "Please enter all the required fields";
                    o.showAlert(a, n), e.submitted = !0
                }
            }, e.updateCoachingInfo = function(t) {
                if (e.coachProfile.coach.email = e.profileData.email, t.$valid) e.setLocationsArray(), e.updateProfile();
                else {
                    var a = "Incomplete Information!",
                        n = "Please enter all the required fields";
                    o.showAlert(a, n), e.submitted = !0
                }
            }, e.updateProfile = function() {
                e.showLoaderImage(), e.setUpdateValues(), angular.isDefined(e.$parent.profileData.selectedActivity) && (e.coachProfile.coach.activity = e.$parent.profileData.selectedActivity.activity), isNonEmptyObject(e.$parent.profileData.selectedClub) && isNonEmptyObject(e.$parent.profileData.selectedClub._id) ? e.coachProfile.coach.club_id = e.$parent.profileData.selectedClub._id.$oid : isNonEmptyObject(e.$parent.profileData.selectedClub) && "" !== e.$parent.profileData.selectedClub.name ? e.coachProfile.coach.new_club_name = e.$parent.profileData.selectedClub.name : e.coachProfile.coach.club_id = null, c.updateAccount(e.coachProfile, e.coachIdd, function(t) {
                    if (t.$resolved && 200 === t.status) {
                        e.coachIdd = t.data.id.$oid, e.setCoachProfile(t.data), e.$parent.profileData = t.data, e.$parent.setSelectedClub(t.data.club_id), e.$parent.setSelectedActivity(t.data.activity);
                        var n, s;
                        t.data.priceUpdated ? (n = "Success!", s = "Profile has been updated successfully!", o.showAlert(n, s), e.coachIdd = t.data.id.$oid, f.removeTokens(), f.setJwtToken(t.data.jwt.token), a.$emit("refreshHeader"), e.coach = {}, e.editMode = Array(4).fill(!1), e.$parent.loadSessionData(), e.$parent.getTodos()) : (n = "Oops!", s = "There are clients who currently have your session(s) in their shopping cart. You may change your price and/or group size once they complete their transactions. Please try again later.", o.showAlert(n, s))
                    }
                    e.hideLoaderImage()
                }, function(t) {
                    var a, n;
                    422 === t.status ? (a = "Error!", n = t.statusText, t.data.data.hasOwnProperty("email") ? n = "Email " + t.data.data.email[0] : t.data.data.hasOwnProperty("phone") && (n = "Phone " + t.data.data.phone[0])) : 409 === t.status ? (a = "Error!", n = "This email has already taken") : (a = "Error!", n = "Unexpected error"), o.showAlert(a, n), delete e.coachProfile.coach.new_password, e.coach = {}, e.hideLoaderImage()
                })
            }, e.checkAgeInvalid = function() {
                var t = calculateAge(new Date(e.coachProfile.coach.profile.dob));
                parseInt(t) >= 18 ? e.ageInvalid = !1 : e.ageInvalid = !0, parseInt(t) <= 99 ? e.ageExceed = !1 : e.ageExceed = !0
            }, e.$on("ngRepeatFinished", function() {
                e.mapLoaded || e.loadMap(), resetMap(v)
            }), e.$on("$destroy", function() {
                null !== v && (v = null, e.mapLoaded = !1)
            }), e.isPasswordRequired = function() {
                return !!(angular.isDefined(e.coachProfile.coach.new_password) && e.coachProfile.coach.new_password.length > 0 && null !== e.coachProfile.coach.new_password)
            }, e.isEmailRequired = function() {
                return !!(angular.isDefined(e.coachProfile.coach.new_email) && e.coachProfile.coach.new_email.length > 0 && null !== e.coachProfile.coach.new_email)
            }, e.boundInputBox = function(t, a) {
                var o = {
                    types: [],
                    componentRestrictions: {
                        country: "us"
                    },
                    enableHighAccuracy: !0,
                    timeout: 3e4,
                    panControl: !0,
                    mapTypeControl: !1,
                    panControlOptions: {
                        position: google.maps.ControlPosition.RIGHT_CENTER
                    },
                    zoomControl: !0,
                    zoomControlOptions: {
                        style: google.maps.ZoomControlStyle.LARGE,
                        position: google.maps.ControlPosition.RIGHT_CENTER
                    },
                    scaleControl: !1,
                    streetViewControl: !1,
                    streetViewControlOptions: {
                        position: google.maps.ControlPosition.RIGHT_CENTER
                    }
                };
                g(function() {
                    var n = document.getElementById("location-" + a),
                        s = new google.maps.places.Autocomplete(n, o);
                    s.bindTo("bounds", v), s.addListener("place_changed", function() {
                        var o = s.getPlace(),
                            n = document.getElementById("nearbypark" + a);
                        e.createMarkerAutocomplete(o, n, "#location-" + a, a), e.setLocation(o, t, a), null !== v && v.setZoom(13)
                    })
                })
            }, e.loadMap = function() {
                g(function() {
                    try {
                        e.showMapLoader(), loadGoogleAPI();
                        var t, a = {
                                enableHighAccuracy: !0,
                                timeout: 3e4,
                                maximumAge: 0
                            },
                            n = {},
                            s = [];
                        navigator.geolocation.getCurrentPosition(function(i) {
                            function r(a, o, n, s) {
                                var i = new google.maps.places.PlacesService(v);
                                i.getDetails({
                                    placeId: a.place_id
                                }, function(a) {
                                    a.address_components && (t = [a.address_components[0] && a.address_components[0].short_name || "", a.address_components[1] && a.address_components[1].short_name || "", a.address_components[2] && a.address_components[2].short_name || ""].join(" ")), window[s].close(), window[s] = new google.maps.InfoWindow, window[s].setContent("<div><strong>" + a.name + "</strong><br>" + t), window[s].open(v, o), e.setLocation(a, e.trainingLocations[n], n)
                                })
                            }
                            i ? (n.lat = i.coords.latitude, n.lng = i.coords.longitude) : (n.lat = 39.113014, n.lng = -105.358887);
                            var c = new google.maps.LatLng(n.lat, n.lng);
                            v = new google.maps.Map(document.getElementById("map"), {
                                center: c,
                                mapTypeId: google.maps.MapTypeId.ROADMAP,
                                zoom: 13,
                                panControl: !0,
                                mapTypeControl: !1,
                                panControlOptions: {
                                    position: google.maps.ControlPosition.RIGHT_CENTER
                                },
                                zoomControl: !0,
                                zoomControlOptions: {
                                    style: google.maps.ZoomControlStyle.LARGE,
                                    position: google.maps.ControlPosition.RIGHT_CENTER
                                },
                                scaleControl: !1,
                                streetViewControl: !1,
                                streetViewControlOptions: {
                                    position: google.maps.ControlPosition.RIGHT_CENTER
                                }
                            }), a = {
                                types: [],
                                componentRestrictions: {
                                    country: "us"
                                },
                                enableHighAccuracy: !0,
                                timeout: 3e4,
                                panControl: !0,
                                mapTypeControl: !1,
                                panControlOptions: {
                                    position: google.maps.ControlPosition.RIGHT_CENTER
                                },
                                zoomControl: !0,
                                zoomControlOptions: {
                                    style: google.maps.ZoomControlStyle.LARGE,
                                    position: google.maps.ControlPosition.RIGHT_CENTER
                                },
                                scaleControl: !1,
                                streetViewControl: !1,
                                streetViewControlOptions: {
                                    position: google.maps.ControlPosition.RIGHT_CENTER
                                }
                            }, e.$$phase || e.$apply(), e.boundInputBoxes = function() {
                                a = {
                                    types: [],
                                    componentRestrictions: {
                                        country: "us"
                                    },
                                    enableHighAccuracy: !0,
                                    timeout: 3e4,
                                    panControl: !0,
                                    mapTypeControl: !1,
                                    panControlOptions: {
                                        position: google.maps.ControlPosition.RIGHT_CENTER
                                    },
                                    zoomControl: !0,
                                    zoomControlOptions: {
                                        style: google.maps.ZoomControlStyle.LARGE,
                                        position: google.maps.ControlPosition.RIGHT_CENTER
                                    },
                                    scaleControl: !1,
                                    streetViewControl: !1,
                                    streetViewControlOptions: {
                                        position: google.maps.ControlPosition.RIGHT_CENTER
                                    }
                                }, e.trainingLocations.forEach(function(t, o) {
                                    g(function() {
                                        var n = document.getElementById("location-" + o),
                                            s = new google.maps.places.Autocomplete(n, a);
                                        s.bindTo("bounds", v), resetMap(v), s.addListener("place_changed", function() {
                                            var a = s.getPlace(),
                                                n = document.getElementById("nearbypark" + o);
                                            e.createMarkerAutocomplete(a, n, "#location-" + o, o), e.setLocation(a, t, o), null !== v && v.setZoom(13)
                                        })
                                    })
                                })
                            }, resetMap(v), e.boundInputBoxes(), e.hideMapLoader(), e.mapLoaded || null === e.trainingLocations[0].google_id ? (null === e.trainingLocations[0].google_id && (e.mapLoaded = !0, resetMap(v)), e.hideMapLoader()) : e.trainingLocations.forEach(function(t, a) {
                                if (angular.isDefined(t.google_id) && null !== t.google_id) {
                                    var o = document.getElementById("nearbypark" + a),
                                        n = new google.maps.places.PlacesService(v);
                                    n.getDetails({
                                        placeId: t.google_id
                                    }, function(t, n) {
                                        if (n === google.maps.places.PlacesServiceStatus.OK && (e.createMarkerAutocomplete(t, o, "#location-" + a, a), s.push(t.geometry.location), s.length === e.trainingLocations.length)) {
                                            for (var i = new google.maps.LatLngBounds, r = 0; r < s.length; r++) i.extend(s[r]);
                                            null !== v && resetMap(v), e.mapLoaded = !0
                                        }
                                    })
                                } else e.mapLoaded = !0, resetMap(v), e.hideMapLoader()
                            }), resetMap(v), e.setLocation = function(t, a, n) {
                                for (var s = {
                                    street_number: "long_name",
                                    locality: "long_name",
                                    route: "long_name",
                                    administrative_area_level_1: "short_name",
                                    postal_code: "short_name"
                                }, i = {
                                    locality: "city",
                                    street_number: "street_number",
                                    route: "route",
                                    administrative_area_level_1: "state",
                                    postal_code: "zip"
                                }, r = {
                                    name: null,
                                    address: {},
                                    google_id: null
                                }, c = 0; c < t.address_components.length; c++) {
                                    var l = t.address_components[c].types[0];
                                    if (s[l]) {
                                        var d = t.address_components[c][s[l]];
                                        r.address[i[l]] = d
                                    }
                                }
                                r.google_id = t.place_id, r.name = t.name, r.address.street = (angular.isDefined(r.address.street_number) ? r.address.street_number : "") + (angular.isDefined(r.address.route) && r.address.route !== r.name ? " " + r.address.route : ""), r.formattedAddress = t.name + ", " + t.formatted_address, delete r.address.street_number, delete r.address.route;
                                var u, m;
                                e.isDuplicates(r, n) ? (u = "Error!", m = "This location has already been selected. Please select a different location.", o.showAlert(u, m), a.name = null, a.address = {}, a.formattedAddress = null) : e.isInvalid(r) ? (r = {
                                    name: null,
                                    address: {},
                                    google_id: null
                                }, u = "Error!", m = "This location is not a valid location. Please select another location which have valid zip code and street address", o.showAlert(u, m), a.name = null, a.address = {}, a.formattedAddress = null) : (a.name = r.name, a.address = r.address, a.google_id = r.google_id, a.formattedAddress = r.formattedAddress, e.$apply())
                            }, e.isDuplicates = function(t, a) {
                                var o = !1;
                                return e.trainingLocations.forEach(function(e, n) {
                                    e.name === t.name && angular.equals(e.address, t.address) && a !== n && (o = !0)
                                }), o
                            }, e.isInvalid = function(e) {
                                var t = !0;
                                return e.name && e.address.street && e.address.zip && (t = !1), t
                            }, e.createMarkerAutocomplete = function(t, a, o, n) {
                                g(function() {
                                    var o, s = [],
                                        i = new google.maps.Marker({
                                            map: v,
                                            position: t.geometry.location
                                        }),
                                        c = "infowindow" + n;
                                    return window[c] = new google.maps.InfoWindow, i.setVisible(!1), t.geometry ? (t.address_components && (o = [t.address_components[0] && t.address_components[0].short_name || "", t.address_components[1] && t.address_components[1].short_name || "", t.address_components[2] && t.address_components[2].short_name || ""].join(" ")), window[c].close(), window[c] = new google.maps.InfoWindow, window[c].setContent("<div><strong>" + t.name + "</strong><br>" + o), window[c].open(v, i), i.setVisible(!0), google.maps.event.addListener(i, "click", function() {
                                        r(t, i, n, c)
                                    }), o = "", void(null !== a && a.addEventListener("click", function() {
                                        var t = new google.maps.places.PlacesService(v);
                                        t.getDetails({
                                            placeId: e.trainingLocations[n].google_id
                                        }, function(t, a) {
                                            if (a === google.maps.places.PlacesServiceStatus.OK) {
                                                i = new google.maps.Marker({
                                                    map: v,
                                                    position: t.geometry.location
                                                }), google.maps.event.addListener(i, "click", function() {
                                                    r(t, i, n, c)
                                                });
                                                var o = i.getPosition().lat(),
                                                    l = i.getPosition().lng(),
                                                    d = {
                                                        lat: o,
                                                        lng: l
                                                    },
                                                    u = new google.maps.places.PlacesService(v);
                                                u.nearbySearch({
                                                    location: d,
                                                    radius: 4830,
                                                    type: ["park"]
                                                }, function(a, o) {
                                                    if (o === google.maps.places.PlacesServiceStatus.OK)
                                                        for (var i = 0; i < a.length; i++) e.createMarker(a[i], n), s.push(a[i].geometry.location);
                                                    else e.createMarker(t, n)
                                                }), e.createMarker = function(e, t) {
                                                    for (var a = new google.maps.Marker({
                                                        map: v,
                                                        position: e.geometry.location
                                                    }), o = new google.maps.LatLngBounds, n = 0; n < s.length; n++) o.extend(s[n]);
                                                    v.fitBounds(o), google.maps.event.addDomListener(window, "load", resetMap(v)), google.maps.event.addListener(a, "click", function() {
                                                        r(e, a, t, c)
                                                    })
                                                }
                                            }
                                        })
                                    }))) : void window.alert("Autocomplete's returned place contains no geometry")
                                })
                            }
                        }, function t(a) {
                            switch (console.warn("ERROR(" + a.code + "): " + a.message), t.code) {
                                case t.PERMISSION_DENIED:
                                    e.locationServiceOff = !0, e.mapErrorMessage = "Your location services are turned off. Please go to Settings or Preferences and enable your location services so you can see your training locations.";
                                    break;
                                case t.POSITION_UNAVAILABLE:
                                    e.mapErrorMessage = "Location information is unavailable.";
                                    break;
                                case t.TIMEOUT:
                                    e.mapErrorMessage = "The request to get user location timed out.";
                                    break;
                                case t.UNKNOWN_ERROR:
                                    e.mapErrorMessage = "An unknown error occurred."
                            }
                            e.mapUnavailable = !0, e.hideMapLoader(), null !== v && (v = null, e.mapLoaded = !1)
                        }, a)
                    } catch (t) {
                        null !== v && (v = null, e.mapLoaded = !1)
                    }
                })
            }, e.addAnotherLoc = function() {
                var t = {
                    title: "Other Location",
                    name: null,
                    address: {},
                    google_id: null,
                    days: []
                };
                e.boundInputBox(t, e.trainingLocations.length), e.trainingLocations.push(t)
            }, e.checkifCleared = function(e) {
                "" !== e.address.street && null !== e.address.street || (e.address = {}, e.name = null)
            }, e.setLocationsArray = function() {
                e.coachProfile.coach.locations = [], e.trainingLocations.forEach(function(t) {
                    if (e.isDaySelectedForLocation(t)) {
                        var a = e.getListofSelected(t.selecteddays);
                        if (null !== t.name && null !== t.address && "" !== t.name && t.address !== {}) {
                            var o = {
                                id: t.id,
                                name: t.name,
                                address: t.address,
                                google_id: t.google_id,
                                days: a
                            };
                            e.coachProfile.coach.locations.push(o)
                        } else e.locationsComplete = !1
                    }
                })
            }, e.updateTrainingLocations = function(t) {
                e.coachProfile.coach.email = e.profileData.email, e.locationsComplete = !0;
                var a, n;
                null === t || angular.isUndefined(t) || null !== t && !angular.isUndefined(t) && t.$valid && !e.isWeekDayAvailable() ? (e.setLocationsArray(), e.locationsComplete ? e.updateProfile() : (a = "Incomplete Information!", n = "Please select your training location(s).", o.showAlert(a, n))) : (e.isWeekDayAvailable() ? (a = "Incomplete Information!", n = "Please select a training location for each day, even if you do not currently plan to coach every day.") : (a = "Incomplete Information!", n = "Please enter all the required fields"), o.showAlert(a, n), e.submitted = !0)
            }
        };
        e.$inject = ["$scope", "appConfig", "$rootScope", "AlertService", "$state", "$stateParams", "SessionService", "$filter", "CoachEnrollmentInterfaceService", "ActivitiesService", "urlConfig", "UploadPhotoService", "ConfirmDialogService", "CommonAPIInterfaceService", "$q", "$timeout", "AuthTokenFactory"], angular.module("Coachco").controller("CoachProfileController", e)
    }(),
    function(e) {
        var t = function(t, a, o, n, s, i, r, c, l, d, u, m) {
            t.message = "", t.clientRescheduleSession = l.clientRescheduleSession, t.ifAdminReview = l.ifAdminReview, t.close = function() {
                localStorage.removeItem("currentSchedule"), localStorage.removeItem("pageSchedule"), r.modalClose(n)
            }, t.todo = JSON.parse(localStorage.getItem("currentSchedule")), t.page = JSON.parse(localStorage.getItem("pageSchedule")), l.start_date = new Date(l.start._i), 1 !== t.todo.duration ? l.end_date = new Date(l.start._i + 60 * t.todo.duration * 60 * 1e3) : l.end_date = new Date(l.end._i), t.rescheduleSessionClient = Boolean(localStorage.getItem("rescheduleSession")), t.rescheduleSessionClient ? t.placeHolder = "Type message to the coach and athletes (if a group)" : t.placeHolder = "Type message to the Client.", t.event = l, t.formattedAddress = (e.isDefined(t.event.where.street) && null !== t.event.where.street && "" !== t.event.where.street ? t.event.where.street : "") + (e.isDefined(t.event.where.city) && null !== t.event.where.city && "" !== t.event.where.city ? ", " + t.event.where.city : "") + (e.isDefined(t.event.where.state) && null !== t.event.where.state && "" !== t.event.where.state ? ", " + t.event.where.state : "") + (e.isDefined(t.event.where.zip) && null !== t.event.where.zip && "" !== t.event.where.zip ? " " + t.event.where.zip : ""), t.currentLocation = t.event.where.name + ", " + t.formattedAddress, t.athletes = t.todo.athletes;
            var h = {};
            t.submitting = !1, t.submitReschedule = function() {
                if (t.submitting = !0, h.new_schedule_id = t.event.$id, e.isDefined(t.newLocation) && null !== t.newLocation && "" !== t.newLocation && (h.new_location_name = t.newLocation), h.message = e.isDefined(t.message) ? t.message.replace(/\r?\n/g, "\n") : "", u.isClient() && t.clientRescheduleSession) h.booked_session_id = t.todo.bookedSessionId, m.rescheduleSession(h.booked_session_id, h, function(e) {
                    e.$resolved && 200 === e.status ? (e.data.value = "success", r.modalDone(n, "success"), localStorage.removeItem("rescheduleSession"), localStorage.removeItem("currentSchedule"), localStorage.removeItem("pageSchedule")) : r.modalDone(n, "error"), t.submitting = !1
                }, function(e) {
                    console.log(e), r.modalDone(n, "error"), t.submitting = !1
                });
                else if (u.isCoach() && !t.ifAdminReview) h.coach_training_session_id = t.todo.coachTrainingSessionId, m.rescheduleCoachSession(h.coach_training_session_id, t.event.coachId, h, function(e) {
                    e.$resolved && 200 === e.status ? (r.modalDone(n, "success"), localStorage.removeItem("rescheduleSession"), localStorage.removeItem("currentSchedule"), localStorage.removeItem("pageSchedule")) : r.modalDone(n, "error"), t.submitting = !1
                }, function(e) {
                    console.log(e), r.modalDone(n, "error"), t.submitting = !1
                });
                else if (u.isAdmin() && t.ifAdminReview) {
                    var a = "Error!",
                        o = "You are not permitted to reschedule or change location.";
                    d.showAlert(a, o)
                }
            }, loadGoogleAPI(), t.initGoogleLocations = function() {
                function a() {
                    for (var a = {
                        street_number: "long_name",
                        locality: "long_name",
                        route: "long_name",
                        administrative_area_level_1: "short_name",
                        postal_code: "short_name"
                    }, n = {
                        locality: "city",
                        street_number: "street_number",
                        route: "route",
                        administrative_area_level_1: "state",
                        postal_code: "zip"
                    }, s = o.getPlace(), i = {
                        name: null,
                        address: {}
                    }, r = 0; r < s.address_components.length; r++) {
                        var c = s.address_components[r].types[0];
                        if (a[c]) {
                            var u = s.address_components[r][a[c]];
                            i.address[n[c]] = u
                        }
                    }
                    if (e.isDefined(i.address.zip) && null !== i.address.zip && "" !== i.address.zip) {
                        if (i.address.street = (e.isDefined(i.address.street_number) ? i.address.street_number : "") + (e.isDefined(i.address.route) && i.address.route !== s.name ? " " + i.address.route : ""), i.formattedAddress = (e.isDefined(i.address.street) && null !== i.address.street && "" !== i.address.street ? i.address.street : "") + (e.isDefined(i.address.city) && null !== i.address.city && "" !== i.address.city ? ", " + i.address.city : "") + (e.isDefined(i.address.state) && null !== i.address.state && "" !== i.address.state ? ", " + i.address.state : "") + (e.isDefined(i.address.zip) && null !== i.address.zip && "" !== i.address.zip ? " " + i.address.zip : ""), t.newLocation = s.name + ", " + i.formattedAddress, s.name === l.where.name) {
                            t.newLocation = null;
                            var m = "Error!",
                                h = "This location has already been selected. Please select a different location.";
                            d.showAlert(m, h)
                        }
                    } else {
                        t.newLocation = "", i = {
                            name: null,
                            address: {}
                        };
                        var p = "Error!",
                            g = "You can't select this location as it has zip code missing. Please select another location";
                        d.showAlert(p, g)
                    }
                }
                t.newLocation = "";
                var o = new google.maps.places.Autocomplete(document.getElementById("autocomplete"), {
                    types: [],
                    componentRestrictions: {
                        country: "us"
                    }
                });
                o.addListener("place_changed", a)
            }
        };
        t.$inject = ["$scope", "$rootScope", "$stateParams", "$uibModalInstance", "$compile", "$timeout", "Coachco_CommonService", "SessionService", "event", "AlertService", "AuthFactory", "CoachProfileInterfaceService"], e.module("Coachco").controller("sessionRescheduleController", t)
    }(angular),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d, u, m, h, p, g, f, v) {
            e.$parent.currentState = s.current.name, e.sessionTypes = t.sessionTypes, e.currentTZ = jstz().timezone_name, e.baseUrl = g.baseUrl, angular.isDefined(localStorage.getItem("sessionsTypeFilter")) && null !== localStorage.getItem("sessionsTypeFilter") ? e.selectedSessionType = localStorage.getItem("sessionsTypeFilter") : e.selectedSessionType = "Upcoming", angular.isDefined(localStorage.getItem("sessionsAthleteFilter")) && null !== localStorage.getItem("sessionsAthleteFilter") ? e.selectedAthlete = localStorage.getItem("sessionsAthleteFilter") : e.selectedAthlete = "All Athletes", e.filterList = {
                filterdCompletedSessions: [],
                filterdUpcomingSessions: []
            }, e.openChangeLocation = function(t) {
                t.coachId = r.coachId;
                var a = "/partials/coachProfile/views/modal/coachProfile.changeLocation.html",
                    o = "model-sessioncreate model-sessionreschedule",
                    n = "sessionChangeLocationController";
                l.modalOpen(a, o, n, t, function(t) {
                    "success" === t.$$state.value && (e.$parent.loadSessionData(), e.$parent.getTodos())
                })
            }, e.changeLocation = function(t) {
                e.openChangeLocation(sessionDetails, function(e) {
                    t.location = e
                })
            }, e.athletesFetch = !0, e.fetchAthletes = function() {
                v.getCoachAthletes(r.coachId, function(t) {
                    t.$resolved && 200 === t.status && (e.athletesFetch = !1, e.athletes = t.data.athletes)
                }, function(t) {
                    if (e.athletesFetch = !1, 422 === t.status) {
                        var a = "Error!",
                            o = t.statusText;
                        t.data.data.hasOwnProperty("email") ? o = "Email " + t.data.data.email[0] : t.data.data.hasOwnProperty("phone") && (o = "Phone " + t.data.data.phone[0]), n.showAlert(a, o)
                    }
                })
            }, e.fetchAthletes(), window.onbeforeunload = function() {
                localStorage.setItem("currentStateName", "sessions"), angular.isDefined(r.coachId) && localStorage.setItem("coachId", r.coachId)
            }, e.setSessionTypeFilter = function(t) {
                e.selectedSessionType = t, localStorage.setItem("sessionsTypeFilter", e.selectedSessionType), e.filterChange()
            }, e.setAthleteFilter = function(t) {
                e.selectedAthlete = t, localStorage.setItem("sessionsAthleteFilter", e.selectedAthlete), e.filterChange()
            }, e.showTooltipAthletes = function(e, t) {
                var a;
                "group" !== e.typeOfSession && "creategroup" !== e.typeOfSession && "joingroup" !== e.typeOfSession && "Group" !== e.typeOfSession || (a = "Upcoming" === e.status || "Completed" === e.status || "Cancelled" === e.status ? "#athlete-tooltip-" + e.status + "-" + t : "#athlete-tooltip-" + t, angular.element(a).addClass("show-tooltip"))
            }, e.hideTooltipAthletes = function(e, t) {
                var a;
                "group" !== e.typeOfSession && "creategroup" !== e.typeOfSession && "joingroup" !== e.typeOfSession && "Group" !== e.typeOfSession || (a = "Upcoming" === e.status || "Completed" === e.status || "Cancelled" === e.status ? "#athlete-tooltip-" + e.status + "-" + t : "#athlete-tooltip-" + t, angular.element(a).removeClass("show-tooltip"))
            }, e.filterByAthlete = function() {
                e.filterdSessionsByQuery = [], e.sessionData.session.forEach(function(t) {
                    t.sessions.forEach(function(t) {
                        isSubstring(t.athletes, e.query) && e.filterdSessionsByQuery.push(t)
                    })
                }), e.$$phase || e.$apply()
            }, e.setStatusFlagForFiltered = function(t) {
                t.forEach(function(e) {
                    e.upcomingHeadingStatus = !1, e.completedHeadingStatus = !1
                }), t.forEach(function(t) {
                    "Upcoming" === t.status && 0 === e.upcomingIndexCount && (t.upcomingHeadingStatus = !0, e.upcomingIndexCount++), "Completed" === t.status && 0 === e.completedIndexCount && (t.completedHeadingStatus = !0, e.completedIndexCount++)
                })
            }, e.changeFilter = function(t) {
                (angular.isUndefined(e.$parent.filterdSessionsMob) || 0 === e.$parent.filterdSessionsMob.length) && (e.filteredSessionsCount = 0)
            }, e.closeButtonMobile = function() {
                e.$parent.sessionsTab = !1, angular.element(".coach-info").removeClass("hide-elements"), angular.element("#profile-menu").removeClass("hide-elements"), s.go(e.baseState + ".sessions")
            }, e.initValues = function() {
                e.sessionIndex = 0, e.upcomingIndex = 0, e.completedIndex = 0, e.cancelledIndex = 0, e.sessionsCount = 0, e.completedCount = 0, e.upcomingCount = 0, e.cancelledCount = 0, e.filteredSessions = [], e.upcomingSessions = [], e.completedSessions = [], e.cancelledSessions = []
            }, e.initValues(), e.tempFilteredSessions = [], e.tempUpcomingSessions = [], e.tempCompletedSessions = [], e.tempCancelledSessions = [], e.tempfilteredUpcomingSessions = [], e.tempfilteredCompletedSessions = [], e.tempfilteredCancelledSessions = [], e.createSessionsArray = function() {
                e.activeAthlete = "All Athletes" !== e.selectedAthlete ? e.selectedAthlete : "", e.activeType = "All Sessions" !== e.selectedSessionType ? e.selectedSessionType : "", e.tempFilteredSessions = angular.copy(m("filter")(e.sessionData.action_required_sesisons, e.activeAthlete)), "" === e.activeType && "" === e.activeAthlete ? (e.tempfilteredUpcomingSessions = angular.copy(e.tempUpcomingSessions), e.tempfilteredCompletedSessions = angular.copy(e.tempCompletedSessions), e.tempfilteredCancelledSessions = angular.copy(e.tempCancelledSessions)) : (e.tempfilteredUpcomingSessions = angular.copy(m("filter")(e.tempUpcomingSessions, e.activeAthlete)), e.tempfilteredCompletedSessions = angular.copy(m("filter")(e.tempCompletedSessions, e.activeAthlete)), e.tempfilteredCancelledSessions = angular.copy(m("filter")(e.tempCancelledSessions, e.activeAthlete)))
            }, e.setSessions = function(t, a, o, n) {
                var s = [];
                angular.forEach(t.sessions, function(a, o) {
                    if (n && !n.newlyCreatedSession && (a.coachTrainingSessionId === n.coachTrainingSessionId.$oid || a.coachTrainingSessionId.$oid && a.coachTrainingSessionId.$oid === n.coachTrainingSessionId.$oid) && (t.totals = t.totals + angular.copy(n.price - a.price), angular.forEach(n, function(e, t) {
                            a[t] = n[t]
                        })), a.month = t.month, a.showMonth = !1, "Cancelled" !== a.status && "Action Required" !== a.status && s.push(a), t.totals < 0 ? a.totals = "0" : a.totals = t.totals, "Upcoming" === a.status ? e.tempUpcomingSessions.push(a) : "Completed" === a.status ? e.tempCompletedSessions.push(a) : "Cancelled" === a.status && e.tempCancelledSessions.push(a), o === t.sessions.length - 1 && s.length) {
                        s = m("orderBy")(s, "date_time", !0);
                        var i = s[s.length - 1];
                        e.tempUpcomingSessions.length && e.tempUpcomingSessions.indexOf(i) > -1 ? e.tempUpcomingSessions[e.tempUpcomingSessions.indexOf(i)].showMonth = !0 : e.tempCompletedSessions.length && e.tempCompletedSessions.indexOf(i) > -1 && (e.tempCompletedSessions[e.tempCompletedSessions.indexOf(i)].showMonth = !0)
                    }
                }), "last" === o && (e.tempUpcomingSessions = m("orderBy")(e.tempUpcomingSessions, "date_time", !0), e.createSessionsArray())
            }, e.setCategoriseSessions = function(t) {
                t && (t.appendedSession = !1), e.sessionData && e.sessionData.session.length && angular.forEach(e.sessionData.session, function(a, o) {
                    t && a.month === t.newSessionMonth && t.newlyCreatedSession && (a.totals = a.totals + t.newSessionTotals, a.sessions.unshift(t), e.addedSession = !0), e.setSessions(a, o, "initial", t), t && t.newlyCreatedSession && o === e.sessionData.session.length - 1 && !e.addedSession && (t.appendedSession = !0, e.sessionData.session.push(e.sessionObject), e.setSessions(e.sessionData.session[e.sessionData.session.length - 1], e.sessionData.session.length - 1, "last", t)), e.sessionData.session.length - 1 !== o || (!t || t.appendedSession) && t || (e.tempUpcomingSessions = m("orderBy")(e.tempUpcomingSessions, "date_time", !0), e.createSessionsArray())
                })
            }, e.filterChange = function() {
                e.initValues(), e.createSessionsArray(), e.loadSessions()
            }, a.$on("sessionList", function(t, a) {
                e.initValues(), e.tempFilteredSessions = [], e.tempUpcomingSessions = [], e.tempCompletedSessions = [], e.tempCancelledSessions = [], e.sessionsLoading = !1, e.sessionData && e.sessionData.action_required_sesisons && e.sessionData.action_required_sesisons.length && (e.activeAthlete = "All Athletes" !== e.selectedAthlete ? e.selectedAthlete : "", e.tempFilteredSessions = angular.copy(m("filter")(e.sessionData.action_required_sesisons, e.activeAthlete))), e.setCategoriseSessions(a), e.loadSessions("initial")
            }), e.loadActionRequiredSession = function() {
                e.sessionIndex ? (e.remainingSessions = e.tempFilteredSessions.length - e.sessionsCount, 0 !== e.remainingSessions && (e.remainingSessions / 10 >= 1 ? e.sessionIndex = 10 : e.sessionIndex = e.remainingSessions % 10)) : (e.intialLoad = !0, e.sessionIndex = e.tempFilteredSessions.length <= 10 ? e.tempFilteredSessions.length : 10);
                for (var t = e.sessionsCount; t < e.sessionsCount + e.sessionIndex; t++) e.setLocationAddress(e.tempFilteredSessions[t], t), e.filteredSessions.push(e.tempFilteredSessions[t]), e.sessionsCount + e.sessionIndex - 1 === t && e.filteredSessions.length < 10 && ("Upcoming" === e.activeType || "" === e.activeType && e.tempfilteredUpcomingSessions.length ? e.loadUpcomingSession() : "Completed" === e.activeType || "" === e.activeType && e.tempfilteredCompletedSessions.length ? e.loadCompletedSession() : "Cancelled" === e.activeType && e.loadCancelledSession());
                e.sessionsCount = e.sessionsCount + e.sessionIndex
            }, e.loadUpcomingSession = function() {
                e.upcomingIndex ? (e.remainingUpSessions = e.tempfilteredUpcomingSessions.length - e.upcomingCount, 0 !== e.remainingUpSessions && (e.remainingUpSessions / 10 >= 1 ? e.upcomingIndex = 10 : e.upcomingIndex = e.remainingUpSessions % 10)) : e.upcomingIndex = e.tempfilteredUpcomingSessions.length <= 10 ? e.tempfilteredUpcomingSessions.length : 10;
                for (var t = e.upcomingCount; t < e.upcomingCount + e.upcomingIndex; t++) e.setLocationAddress(e.tempfilteredUpcomingSessions[t], t), e.upcomingSessions.push(e.tempfilteredUpcomingSessions[t]), ("" === e.activeType || "Completed" === e.activeType) && e.upcomingCount + e.upcomingIndex - 1 === t && e.upcomingSessions.length + e.filteredSessions.length < 10 && e.tempfilteredCompletedSessions.length && e.loadCompletedSession();
                e.upcomingCount = e.upcomingCount + e.upcomingIndex
            }, e.loadCompletedSession = function() {
                e.completedIndex ? (e.remainingCoSessions = e.tempfilteredCompletedSessions.length - e.completedCount, 0 !== e.remainingCoSessions && (e.remainingCoSessions / 10 >= 1 ? e.completedIndex = 10 : e.completedIndex = e.remainingCoSessions % 10)) : e.completedIndex = e.tempfilteredCompletedSessions.length <= 10 ? e.tempfilteredCompletedSessions.length : 10;
                for (var t = e.completedCount; t < e.completedCount + e.completedIndex; t++) e.setLocationAddress(e.tempfilteredCompletedSessions[t], t), e.completedSessions.push(e.tempfilteredCompletedSessions[t]), "Cancelled" === e.activeType && e.completedCount + e.completedIndex - 1 === t && e.upcomingSessions.length + e.completedSessions.length + e.filteredSessions.length < 10 && e.loadCancelledSession();
                e.completedCount = e.completedCount + e.completedIndex
            }, e.loadCancelledSession = function() {
                e.cancelledIndex ? (e.remainingCaSessions = e.tempfilteredCancelledSessions.length - e.cancelledCount, 0 !== e.remainingCaSessions && (e.remainingCaSessions / 10 >= 1 ? e.cancelledIndex = 10 : e.cancelledIndex = e.remainingCaSessions % 10)) : e.cancelledIndex = e.tempfilteredCancelledSessions.length <= 10 ? e.tempfilteredCancelledSessions.length : 10;
                for (var t = e.cancelledCount; t < e.cancelledCount + e.cancelledIndex; t++) e.setLocationAddress(e.tempfilteredCancelledSessions[t], t), e.cancelledSessions.push(e.tempfilteredCancelledSessions[t]);
                e.cancelledCount = e.cancelledCount + e.cancelledIndex
            };
            var S = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            e.loadSessions = function() {
                e.hideLoader && !e.sessionsTab || (e.sessionsQuery, e.tabSwitch && (e.setCategoriseSessions(), e.tabSwitch = !1), e.sessionData && (e.sessionData.action_required_sesisons.length || e.sessionData.session.length) && (e.sessionsCount < e.tempFilteredSessions.length ? e.loadActionRequiredSession() : (e.intialLoad = !1, e.tempfilteredUpcomingSessions.length && e.upcomingCount < e.tempfilteredUpcomingSessions.length && ("" === e.activeType || "Upcoming" === e.activeType) ? e.loadUpcomingSession() : e.tempfilteredCompletedSessions.length && e.completedCount < e.tempfilteredCompletedSessions.length && ("" === e.activeType || "Completed" === e.activeType) ? e.loadCompletedSession() : e.tempfilteredCancelledSessions.length && e.cancelledCount < e.tempfilteredCancelledSessions.length && "Cancelled" === e.activeType && e.loadCancelledSession()), "" === e.activeType && !e.tempFilteredSessions.length && !e.tempfilteredUpcomingSessions.length && !e.tempfilteredCompletedSessions.length && e.cancelledCount < e.tempfilteredCancelledSessions.length && e.loadCancelledSession()))
            }, a.pusher && (a.subscribedchannel || a.$emit("subscribeToChannel"), a.subscribedchannel.bind("new-training-session", function(t) {
                if (e.athleteFound = !1, !e.athletesFetch)
                    if (e.athletes.length) {
                        var o = 0;
                        angular.forEach(t.athletes, function(a, n) {
                            angular.forEach(e.athletes, function(e, t) {
                                a.name === e.name && o++
                            }), n === t.athletes.length - 1 && o !== t.athletes.length && e.fetchAthletes()
                        })
                    } else e.fetchAthletes();
                console.log(t);
                var n = new Date(t.date_time);
                t.newSessionMonth = S[n.getMonth()], t.newSessionTotals = angular.copy(t.price), t.duration = (new Date(t.end_time) - new Date(t.start_time)) / 36e5, e.sessionObject = {
                    month: t.newSessionMonth,
                    sessions: [t],
                    totals: t.newSessionTotals
                }, e.addedSession = !1, e.sessionsLoader || (e.sessionData && e.sessionData.session.length ? a.$emit("sessionList", t) : e.sessionData && (e.sessionData.session[0] = e.sessionObject, a.$emit("sessionList")))
            })), e.editSession = function(t) {
                t.coachId = r.coachId, t.min_group_size = e.profileData.pricing.min_group_size, t.max_group_size = e.profileData.pricing.max_group_size;
                var a = "/partials/coachProfile/views/modal/coachProfile.sessionEdit.html",
                    o = "model-sessioncreate model-sessionedit",
                    n = "sessionEditController";
                l.modalOpen(a, o, n, t, function(t) {
                    "success" === t.$$state.value && (e.$parent.loadSessionData(), e.$parent.getTodos())
                })
            }, e.$on("$destroy", function() {
                a.subscribedchannel && a.subscribedchannel.unbind("new-training-session")
            })
        };
        e.$inject = ["$scope", "appConfig", "$rootScope", "$timeout", "AlertService", "$state", "$compile", "$stateParams", "$window", "Coachco_CommonService", "SessionService", "AuthFactory", "$filter", "CoachEnrollmentInterfaceService", "ActivitiesService", "urlConfig", "UploadPhotoService", "CoachProfileInterfaceService"], angular.module("Coachco").controller("CoachSessionController", e)
    }(),
    function(e) {
        var t = function(t, a, o, n, s, i, r, c, l, d, u, m, h) {
            t.sessionCopy = e.copy(r), t.close = function() {
                s.modalClose(a)
            }, t.groupSizeError = !1, t.sessionData = r, t.individualValue = !0, t.groupValue = !1, t.standardPrice = !0, t.customPrice = !1, t.ageGenderSelection = !1, t.buttonText = "Select Age and Gender", t.groupTypes = d.groupTypes, t.noAthletes = !0, t.validAgeGenderSize = !1, t.athleteList = [], t.toIds = [], t.groupRecepients = [], t.individualRecepients = [], t.inputReadonly = !1, t.groupSize, t.maleAthlete = !1, t.femaleAthlete = !1, t.ageList = [], t.checkAthelets = function() {
                e.forEach(t.sessionData.athletes, function(e, a) {
                    t.ageList.push(calculateAge(new Date(e.dob))), "Male" === e.gender || "M" === e.gender ? t.maleAthlete = !0 : "Female" !== e.gender && "F" !== e.gender || (t.femaleAthlete = !0), t.sessionData.athletes.length - 1 === a && (t.minAgeRequired = Math.min.apply(Math, t.ageList), t.maxAgeRequired = Math.max.apply(Math, t.ageList))
                })
            }, t.groupsizes = [], t.sessionData.bookedSlots ? t.minSize = e.copy(t.sessionData.bookedSlots) : t.minSize = e.copy(t.sessionData.min_group_size);
            for (var p = t.minSize; p <= t.sessionData.max_group_size; p++) t.groupsizes.push(p);
            t.groupSize = t.sessionData.groupSize, t.init = function() {
                n(function() {
                    e.element(".select-age-list input").click(function(e) {
                        e.stopPropagation()
                    }), e.element(".select-age-list label").click(function(e) {
                        e.stopPropagation()
                    }), e.element(".select-age-list").click(function(e) {
                        e.stopPropagation()
                    }), e.element(".select-age-list li").click(function(e) {
                        e.stopPropagation()
                    })
                }, 1700)
            }, $(window).click(function() {
                $(".select-age-list").hasClass("open") && (t.ageGenderSelection = !t.ageGenderSelection, t.$$phase || t.$apply())
            }), t.toggleDropdown = function() {
                t.ageError || (t.ageGenderSelection = !t.ageGenderSelection), t.$$phase || t.$apply()
            }, t.setChanges = function() {
                t.noChanges = !1, t.$$phase || t.$apply()
            }, t.validatingAgeGender = function(e, a, o) {
                t.noChanges = !1, t.minError = !1;
                var n, s = parseInt(e),
                    i = parseInt(a);
                s && i ? (s <= i && ("female" === o ? n = "Girls" : "male" === o ? n = "Boys" : "both" === o && (n = "Boys and Girls"), t.buttonText = n + " (Age " + s + " to " + i + ")", t.$$phase || t.$apply()), (s > i || s < 0 || i > 100) && (t.ageError = !0, t.validAgeGenderSize = !1), s <= i && s > 0 && i < 100 && (t.ageError = !1, t.validAgeGenderSize = !0, t.buttonText = n + " (Age " + s + " to " + i + ")"), t.invalidAgeSelection || t.ageError || (s && s > t.minAgeRequired ? (t.minError = !0, t.sessionEditForm.minAge.$setValidity("minValue", !1)) : (t.minError = !1, t.sessionEditForm && t.sessionEditForm.minAge.$setValidity("minValue", !0)), i && i < t.maxAgeRequired ? (t.maxError = !0, t.sessionEditForm.maxAge.$setValidity("maxValue", !1)) : (t.maxError = !1, t.sessionEditForm && t.sessionEditForm.maxAge.$setValidity("maxValue", !0)))) : t.buttonText = "Select Age and Gender", t.$$phase || t.$apply()
            }, t.setSessionDetails = function() {
                var a;
                a = "(Male)" === t.sessionData.groupGender ? "male" : "(Female)" === t.sessionData.groupGender ? "female" : "both", t.currentGenderValue = e.copy(a), t.sessionData.newgroupGender = a, t.sessionData.newAgeFrom = e.copy(t.sessionData.ageFrom), t.sessionData.newAgeTo = e.copy(t.sessionData.ageTo), t.validatingAgeGender(t.sessionData.ageFrom, t.sessionData.ageTo, a), t.checkAthelets()
            }, t.setSessionDetails(), t.setGroupsize = function() {
                t.noChanges = !1, t.groupSize < t.minSize ? t.groupSizeError = !0 : t.groupSizeError = !1
            }, t.noChanges = !1, t.editSession = function() {
                if (t.noChanges = !1, t.sessionEditForm.$valid)
                    if (t.sessionCopy.groupSize === t.groupSize && t.sessionData.groupName === t.sessionCopy.groupName && t.sessionCopy.ageFrom === t.sessionData.newAgeFrom && t.sessionCopy.ageTo === t.sessionData.newAgeTo && t.sessionData.newgroupGender === t.currentGenderValue) t.noChanges = !0;
                    else {
                        t.noChanges = !1, t.submitting = !0;
                        var e = {
                            edit: !0
                        };
                        t.sessionData.groupName && t.sessionData.groupName !== t.sessionCopy.groupName && (e.new_session_name = t.sessionData.groupName), t.sessionData.newgroupGender && t.sessionData.newgroupGender !== t.currentGenderValue && (e.new_group_gender = t.sessionData.newgroupGender), t.groupSize && t.groupSize !== t.sessionCopy.groupSize && (e.new_group_size = t.groupSize), t.sessionData.newAgeFrom && t.sessionData.newAgeFrom !== t.sessionCopy.ageFrom && (e.new_age_from = t.sessionData.newAgeFrom), t.sessionData.newAgeTo && t.sessionData.newAgeTo !== t.sessionCopy.ageTo && (e.new_age_to = t.sessionData.newAgeTo);
                        var o;
                        o = "object" == typeof t.sessionData.coachTrainingSessionId ? t.sessionData.coachTrainingSessionId.$oid : t.sessionData.coachTrainingSessionId, l.rescheduleCoachSession(o, t.sessionData.coachId, e, function(e) {
                            e.$resolved && 200 === e.status ? s.modalDone(a, "success") : s.modalDone(a, "error"), t.submitting = !1
                        }, function(e) {
                            if (console.log(e), 409 === e.status) {
                                var o = "Oops!",
                                    n = e.data.data.error + ". Please try again with possible group criteria.";
                                m.showAlert(o, n)
                            }
                            s.modalDone(a, "error"), t.submitting = !1
                        })
                    }
            }
        };
        t.$inject = ["$scope", "$uibModalInstance", "$compile", "$timeout", "Coachco_CommonService", "SessionService", "createSession", "CommonAPIInterfaceService", "CoachProfileInterfaceService", "appConfig", "$sce", "AlertService", "AuthFactory"], e.module("Coachco").controller("sessionEditController", t)
    }(angular),
    function(e) {
        var t = function(t, a, o, n, s, i, r, c, l, d, u, m, h) {
            function p(e) {
                t.individualValue ? t.athleteEmail = e : t.athleteEmails = e;
                for (var a = e.toLowerCase().trim(), o = [], n = 0; n < t.clients.length; n++) {
                    var s = t.clients[n];
                    s.athleteList = "", s.client_id ? (s.athletes && s.athletes.forEach(function(e, t) {
                        0 === t ? s.athleteList = s.athleteList + e : s.athleteList = s.athleteList + ", " + e
                    }), s.name.toLowerCase().indexOf(a) === -1 && s.email.toLowerCase().indexOf(a) === -1 && s.athleteList.toLowerCase().indexOf(a) === -1 || o.push({
                        value: s.name,
                        obj: s,
                        label: m.trustAsHtml('<div class="row-holder">  <img class="avatar-thumb-nail" src="images/default-msg-avatar.png" alt="Default avatar"></img> <div class="col-left">  <strong>' + s.name + '</strong> </div> <div class="col-right text-right text-muted">  <small>' + s.email + '</small> </div> <br><small class="text-ellipsise">' + s.athleteList + "</small>  <div> </div></div>")
                    })) : s.email.toLowerCase().indexOf(a) !== -1 && o.push({
                        value: s.email,
                        obj: s,
                        label: m.trustAsHtml('<div class="row-holder">  <img class="avatar-thumb-nail" src="images/default-msg-avatar.png" alt="default avatar"></img> <div class="col-left" style="width: calc(100% - 80px) !important;">  <strong>' + s.email + "</strong> </div></div>")
                    })
                }
                return o
            }
            t.close = function() {
                t.sessionData.isRecurr && $(document).off("click", ".ui-datepicker-close"), s.modalClose(a)
            }, t.sessionData = r, t.initRecurringSession = function() {
                var a = "#sessionDate-" + t.sessionData.idValue;
                t.dates = [], t.datesArray = [], t.filteredEvents = [], t.training_locations = [], t.sessionData.profile.training_locations.forEach(function(e) {
                    e.days.length > 0 && t.training_locations.push(e)
                }), t.filterEvents(), t.scrollbarConfig = {
                    autoHideScrollbar: !1,
                    theme: "light",
                    advanced: {
                        updateOnContentResize: !0
                    },
                    setHeight: 71,
                    scrollInertia: 0,
                    scrollButtons: !1
                }, t.dateOptions = {
                    minDate: new Date,
                    showOn: "both",
                    buttonText: "Choose Date(s)",
                    showButtonPanel: !0,
                    closeText: "Apply",
                    beforeShow: function(e, t) {
                        t.isMulti = !0, $(a).after($(a).datepicker("widget"))
                    },
                    onClose: function(a, o) {
                        t.dates = e.copy(t.datesArray), t.$$phase || t.$apply()
                    }
                }, t.sessionData.coachId = t.sessionData.profile.id.$oid, t.sessionData.individualPriceWithoutFee = t.sessionData.profile.pricing.individual, t.sessionData.groupPriceWithoutFee = t.sessionData.profile.pricing.group, t.sessionData.coachName = t.sessionData.profile.coach_name, e.forEach(t.training_locations, function(e, a) {
                    e.currentLocation = e.name + ", " + t.formatAddress(e)
                });
                var o = {
                    currentLocation: "Set another location",
                    address: ""
                };
                t.training_locations.push(o), t.timeRange = [];
                for (var n = 1; n <= 12; n++) t.timeRange.push(n);
                t.sessionHours = t.timeRange[0], t.sessionDuration = [];
                for (var n = 0; n <= 8; n++) {
                    var s;
                    1 === n ? s = n + " Hour" : n > 0 && (s = n + " Hours"), s && t.sessionDuration.push(s);
                    var i;
                    n > 0 && 8 !== n ? (i = n + ".5 Hours", t.sessionDuration.push(i)) : 0 === n && 8 !== n && (i = "30 Mins", t.sessionDuration.push(i))
                }
                t.minuteRange = ["00", "15", "30", "45"], t.sessionMinutes = t.minuteRange[0], t.timeFormatList = ["AM", "PM"], t.sessionTimeformat = t.timeFormatList[0], t.requirementList = ["Client Must Attend All Sessions", "Client May Pick Sessions They Want"], $(document).on("click", ".ui-datepicker-close", function() {
                    t.datesArray = e.copy(t.dates), t.datesArray.length ? $(".ui-datepicker-trigger").text("Edit Date(s)") : $(".ui-datepicker-trigger").text("Choose Date"), t.$$phase || t.$apply(), t.createDatesRange(), t.calculateTotalPrice(), $(a).datepicker("hide")
                })
            }, t.individualValue = !0, t.groupValue = !1, t.standardPrice = !0, t.customPrice = !1, t.ageGenderSelection = !1, t.buttonText = "Select Age and Gender", t.groupTypes = u.groupTypes, t.noAthletes = !0, t.validAgeGenderSize = !1, t.athleteList = [], t.toIds = [], t.groupRecepients = [], t.individualRecepients = [], t.inputReadonly = !1, t.toClientEmailIds = [], t.newLocationValue = !1;
            var g = e.element("#multi-list-container");
            t.filterEvents = function() {
                e.forEach(t.sessionData.events, function(e, a) {
                    moment(e.start).startOf("day") >= moment().startOf("day") && t.filteredEvents.push(e)
                })
            }, t.checkForConflicts = function() {
                if (t.conflicts = [], t.conflictText = "", e.forEach(t.datesRange, function(a, o) {
                        t.datesArray[o].conflict ? t.datesArray[o].conflict = !1 : Object.defineProperty(t.datesArray[o], "conflict", {
                            enumerable: !1,
                            writable: !0,
                            value: !1
                        }), e.forEach(t.filteredEvents, function(e, n) {
                            "available" !== e.status && Math.round(new Date(e.start)) / 1e3 < Math.round(new Date(a.toDate)) / 1e3 && Math.round(new Date(e.end)) > Math.round(new Date(a.fromDate)) ? (t.conflicts.push(a), t.datesArray[o].conflict = !0, t.conflictText ? t.conflictText = t.conflictText + ", " + l("date")(new Date(a.fromDate), "MM/dd/yyyy hh:mm a") + " - " + l("date")(new Date(a.toDate), "hh:mm a") : t.conflictText = t.conflictText + l("date")(new Date(a.fromDate), "MM/dd/yyyy hh:mm a") + " - " + l("date")(new Date(a.toDate), "hh:mm a")) : "available" === e.status && (Math.round(new Date(e.start)) / 1e3 === Math.round(new Date(a.fromDate)) / 1e3 || Math.round(new Date(e.start)) / 1e3 === Math.round(new Date(a.fromDate)) / 1e3 && Math.round(new Date(e.end)) / 1e3 === Math.round(new Date(a.toDate)) / 1e3 || Math.round(new Date(a.fromDate)) / 1e3 < Math.round(new Date(e.start)) / 1e3 && Math.round(new Date(a.toDate)) / 1e3 >= Math.round(new Date(e.end)) / 1e3 || Math.round(new Date(e.start)) / 1e3 < Math.round(new Date(a.toDate)) / 1e3 && Math.round(new Date(e.end)) > Math.round(new Date(a.fromDate)) && (t.conflicts.push(a), t.datesArray[o].conflict = !0, t.conflictText ? t.conflictText = t.conflictText + ", " + l("date")(new Date(a.fromDate), "MM/dd/yyyy hh:mm a") + " - " + l("date")(new Date(a.toDate), "hh:mm a") : t.conflictText = t.conflictText + l("date")(new Date(a.fromDate), "MM/dd/yyyy hh:mm a") + " - " + l("date")(new Date(a.toDate), "hh:mm a")))
                        })
                    }), t.$$phase || t.$apply(), t.conflicts.length) {
                    var a = "Conflict!",
                        o = "There is conflicts on " + t.conflictText;
                    return h.showAlert(a, o), !0
                }
                return !1
            }, t.createDatesRange = function() {
                t.datesArray.length && (t.tempArray = e.copy(t.datesArray), t.datesRange = [], e.forEach(t.tempArray, function(a, o) {
                    t.datesRange[o] = {}, t.datesRange[o].sesDate = e.copy(a);
                    var n;
                    n = "PM" === t.sessionTimeformat ? parseInt(t.sessionHours) + 12 : 12 === parseInt(t.sessionHours) ? 0 : parseInt(t.sessionHours), t.datesRange[o].fromDate = a.setHours(n), t.timeUTC = formatUTCAMPM(new Date(t.datesRange[o].fromDate)), t.datesRange[o].fromDate = new Date(new Date(t.datesRange[o].fromDate).setMinutes(t.sessionMinutes));
                    var s = t.sessDuration.split(" ");
                    "30" === s[0] && (s[0] = "0.5");
                    var i = s[0].split(".");
                    t.datesRange[o].toDate = e.copy(t.datesRange[o].fromDate), t.datesRange[o].toDate.setHours(t.datesRange[o].toDate.getHours() + parseInt(i[0])), 5 === parseInt(i[1]) ? i[1] = 30 : i[1] = 0;
                    var r = t.datesRange[o].toDate.getMinutes() + parseInt(i[1]);
                    t.datesRange[o].toDate = new Date(new Date(t.datesRange[o].toDate).setMinutes(r))
                }), t.checkForConflicts())
            }, t.setRecurrLocation = function(a) {
                var o = a ? e.copy(JSON.parse(a)) : "";
                o && "Set another location" === o.currentLocation ? (t.newLocationValue = !0, t.autoCompleteIntiated || t.initGoogleLocations()) : (t.newLocationValue = !1, t.createSessionObj.session.new_location = "", o && (t.createSessionObj.session.location = o.currentLocation))
            }, t.checkRequirement = function() {
                "Client Must Attend All Sessions" === t.selectedRequirement ? (t.selectedGroupType = "private", t.createSessionObj.session.group_type = "private") : (t.selectedGroupType = "", t.createSessionObj.session.group_type = "")
            }, t.formatAddress = function(t) {
                var a = (e.isDefined(t.address.street) && null !== t.address.street && "" !== t.address.street ? t.address.street : "") + (e.isDefined(t.address.city) && null !== t.address.city && "" !== t.address.city ? ", " + t.address.city : "") + (e.isDefined(t.address.state) && null !== t.address.state && "" !== t.address.state ? ", " + t.address.state : "") + (e.isDefined(t.address.zip) && null !== t.address.zip && "" !== t.address.zip ? " " + t.address.zip : "");
                return a
            }, t.sessionData.isRecurr ? t.initRecurringSession() : (t.formattedAddress = (e.isDefined(t.sessionData.where.street) && null !== t.sessionData.where.street && "" !== t.sessionData.where.street ? t.sessionData.where.street : "") + (e.isDefined(t.sessionData.where.city) && null !== t.sessionData.where.city && "" !== t.sessionData.where.city ? ", " + t.sessionData.where.city : "") + (e.isDefined(t.sessionData.where.state) && null !== t.sessionData.where.state && "" !== t.sessionData.where.state ? ", " + t.sessionData.where.state : "") + (e.isDefined(t.sessionData.where.zip) && null !== t.sessionData.where.zip && "" !== t.sessionData.where.zip ? " " + t.sessionData.where.zip : ""), t.currentLocation = t.sessionData.where.name + ", " + t.formattedAddress), t.groupsizes = [];
            for (var f = t.sessionData.min_group_size; f <= t.sessionData.max_group_size; f++) t.groupsizes.push(f);
            t.groupSize = null, t.createSessionObj = {
                session: {
                    coach_id: r.coachId,
                    schedule_id: r.$id,
                    type_of_session: "individual",
                    group_type: "public",
                    groupGender: null,
                    ageFrom: null,
                    ageTo: null,
                    athletes: [],
                    athlete_emails: [],
                    total_price: null,
                    price_type: null,
                    group_size: 1,
                    message: null,
                    new_location: null,
                    notes: null
                }
            }, t.setNewLocation = function(e) {
                e && !t.autoCompleteIntiated && t.initGoogleLocations(), e || (t.createSessionObj.session.new_location = "")
            }, t.init = function() {
                t.modalTitle = t.sessionData.isRecurr ? "Create Recurring Session or Multi-Day Clinic" : "Create a Session", n(function() {
                    e.element("#select-athletes").multiselect({
                        numberDisplayed: 3,
                        nonSelectedText: "Select your Athlete(s)",
                        nSelectedText: "selected",
                        includeSelectAllOption: !0,
                        selectAllText: "Select All Athletes"
                    }), e.element("#select-clients").multiselect({
                        numberDisplayed: 3,
                        nonSelectedText: "Select from invited email(s)",
                        nSelectedText: "selected",
                        includeSelectAllOption: !0,
                        selectAllText: "Select All"
                    }), e.element(".select-multi").addClass("show-select"), t.showLoader = !1, e.element(".select-age-list input").click(function(e) {
                        e.stopPropagation()
                    }), e.element(".select-age-list label").click(function(e) {
                        e.stopPropagation()
                    }), e.element(".select-age-list").click(function(e) {
                        e.stopPropagation()
                    }), e.element(".select-age-list li").click(function(e) {
                        e.stopPropagation()
                    })
                }, 1700)
            }, $(window).click(function() {
                $(".select-age-list").hasClass("open") && (t.ageGenderSelection = !t.ageGenderSelection, t.$$phase || t.$apply())
            }), t.addAthlete = function() {
                if (e.isDefined(t.selectedAthlete) && null !== t.selectedAthlete)
                    if (t.individualValue) t.createSessionObj.session.athletes = [], t.createSessionObj.session.athletes.push(t.selectedAthlete);
                    else if (isAthleteSelected(t.createSessionObj.session.athletes, t.selectedAthlete.id)) {
                        var a = "Error!",
                            o = "Athlete is already selected. Please enter another email or select another athlete from the dropdown";
                        h.showAlert(a, o)
                    } else t.createSessionObj.session.athletes.push(t.selectedAthlete)
            }, t.deleteAthlete = function(a) {
                t.createSessionObj.session.athletes.splice(a, 1), e.isDefined(t.multiAthlete) && t.multiAthlete.splice(a, 1), t.selectedAthlete = null, n(function() {
                    e.element(".select-multi").multiselect("rebuild")
                }, 500)
            }, t.fetchAthletes = function() {
                d.getCoachAthletes(t.sessionData.coachId, function(e) {
                    e.$resolved && 200 === e.status && (t.athleteList = e.data.athletes, t.athleteList.forEach(function(e) {
                        e.profile.age = calculateAge(new Date(e.profile.dob))
                    }), t.disableAthletes())
                }, function(e) {
                    if (422 === e.status) {
                        var t = "Error!",
                            a = e.statusText;
                        e.data.data.hasOwnProperty("email") ? a = "Email " + e.data.data.email[0] : e.data.data.hasOwnProperty("phone") && (a = "Phone " + e.data.data.phone[0]), h.showAlert(t, a)
                    }
                })
            }, t.fetchServiceFee = function() {
                c.getServiceFee(function(e) {
                    e.$resolved && 200 === e.status && (t.serviceFee = e.data.service_fee, t.standardPriceValue(), t.fetchAthletes())
                })
            }, t.fetchServiceFee(), t.toggleDropdown = function() {
                t.ageGenderSelection = !t.ageGenderSelection, t.$$phase || t.$apply()
            }, t.disableAthletes = function(t) {
                n(function() {
                    e.element("#multi-list-container-" + t).find(".multiselect-container li:not(.active)").addClass("disabled")
                }, 1200)
            }, t.enableMultiSelect = function() {
                g.find(".multiselect-container li").each(function() {
                    e.element(this).find("input").prop("checked", !1), e.element(this).removeClass("disabled active"), "Set Group Size" === t.groupSize ? (g.addClass("disabled"), e.element(this).find("#error").show()) : g.removeClass("disabled")
                }), g.find(".multiselect-selected-text").text("Select Athletes")
            }, t.updateList = function() {
                t.createSessionObj.session.athletes = [], t.individualValue ? e.isDefined(t.selectedAthlete) && null !== t.selectedAthlete && t.createSessionObj.session.athletes.push(t.selectedAthlete) : (e.isDefined(t.multiAthlete) && t.multiAthlete.length > 0 && t.multiAthlete.forEach(function(e) {
                    t.createSessionObj.session.athletes.push(JSON.parse(e))
                }), t.validatingAgeGender("none"))
            }, t.validatingAgeGender = function(a) {
                var o;
                t.createSessionObj.session.ageFrom = parseInt(t.createSessionObj.session.ageFrom), t.createSessionObj.session.ageTo = parseInt(t.createSessionObj.session.ageTo), t.createSessionObj.session.ageFrom < 10 || t.createSessionObj.session.ageTo > 100 ? t.ageError = !0 : t.ageError = !1, t.createSessionObj.session.ageFrom && t.createSessionObj.session.ageTo ? (t.createSessionObj.session.ageFrom <= t.createSessionObj.session.ageTo && ("female" === t.createSessionObj.session.groupGender ? o = "Girls" : "male" === t.createSessionObj.session.groupGender ? o = "Boys" : "both" === t.createSessionObj.session.groupGender && (o = "Boys and Girls"), o && (t.buttonText = o + " (Age " + t.createSessionObj.session.ageFrom + " to " + t.createSessionObj.session.ageTo + ")"), t.$$phase || t.$apply()), (t.createSessionObj.session.ageFrom > t.createSessionObj.session.ageTo || t.createSessionObj.session.ageFrom < 0 || t.createSessionObj.session.ageTo > 100 || t.createSessionObj.session.ageFrom < 10) && (t.ageError = !0, t.validAgeGenderSize = !1), t.createSessionObj.session.ageFrom <= t.createSessionObj.session.ageTo && t.createSessionObj.session.ageFrom > 0 && t.createSessionObj.session.ageTo < 100 && t.createSessionObj.session.ageFrom > 10 && (t.ageError = !1, t.validAgeGenderSize = !0, o && (t.buttonText = o + " (Age " + t.createSessionObj.session.ageFrom + " to " + t.createSessionObj.session.ageTo + ")"), t.createSessionObj.session.ageFrom && t.createSessionObj.session.ageTo && t.gender && parseInt(t.groupSize) >= 1 && t.enableMultiSelect(), t.createSessionObj.session.ageFrom && t.createSessionObj.session.ageTo && t.gender && parseInt(t.groupSize) >= 1 && t.createSessionObj.session.ageFrom <= t.createSessionObj.session.ageTo && t.createSessionObj.session.ageFrom > 0 && t.createSessionObj.session.ageTo < 100 && g.removeClass("disabled txt-change"))) : (t.enableMultiSelect(), t.buttonText = "Select Age and Gender", g.addClass("disabled")), t.athleteList.forEach(function(o) {
                    o.profile.age >= t.createSessionObj.session.ageFrom && o.profile.age <= t.createSessionObj.session.ageTo && (t.createSessionObj.session.groupGender && o.profile.gender === t.createSessionObj.session.groupGender.toUpperCase().charAt(0) || "both" === t.createSessionObj.session.groupGender) && null != o.name && (t.noAthletes = !1, a || n(function() {
                        e.element(".select-multi").multiselect("rebuild")
                    }, 500))
                });
                var s = [];
                t.createSessionObj.session.athletes.forEach(function(e, a) {
                    (e.profile.age < t.createSessionObj.session.ageFrom || e.profile.age > t.createSessionObj.session.ageTo || "both" !== t.createSessionObj.session.groupGender && e.profile.gender.toUpperCase().charAt(0) !== t.createSessionObj.session.groupGender.toUpperCase().charAt(0) || null === e.name) && s.push(a)
                });
                for (var i = s.length - 1; i >= 0; i--) t.deleteAthlete(s[i]);
                if (t.createSessionObj.session.athletes = [], e.isDefined(t.multiAthlete) && t.multiAthlete.length > 0 && t.multiAthlete.forEach(function(e) {
                        t.createSessionObj.session.athletes.push(JSON.parse(e))
                    }), !a && t.groupSize && t.createSessionObj.session.groupGender && t.createSessionObj.session.ageFrom && t.createSessionObj.session.ageTo) {
                    var r = [];
                    e.forEach(t.athleteList, function(e, a) {
                        e.profile.age >= t.createSessionObj.session.ageFrom && e.profile.age <= t.createSessionObj.session.ageTo && (e.profile.gender.toUpperCase().charAt(0) === t.createSessionObj.session.groupGender.toUpperCase().charAt(0) || "both" === t.createSessionObj.session.groupGender) && null !== e.name && r.push(e), a === t.athleteList.length - 1 && (t.validAthletes = r)
                    }), t.validInvites = [], e.forEach(t.clients, function(e) {
                        e.has_sessions || t.validInvites.push(e)
                    })
                }
                a || n(function() {
                    e.element(".select-multi").multiselect("rebuild")
                }, 500), t.$$phase || t.$apply()
            }, t.calculateTotalPrice = function() {
                t.sessionPrice && (t.sessionPrice = parseInt(t.sessionPrice)), t.individualValue ? (t.standardPrice && !t.sessionData.isRecurr && (t.sessionPrice = parseInt(t.sessionData.individualPriceWithoutFee)), t.individual_with_service_fee = calculateFee(t.sessionPrice, t.serviceFee), t.sessionPrice ? (t.individual_processing_fee = parseInt(Math.round(parseInt(t.sessionPrice) * parseFloat(t.serviceFee))), 0 === t.individual_processing_fee && (t.individual_processing_fee = 1)) : t.individual_processing_fee = 0, t.createSessionObj.session.total_price = parseInt(t.sessionPrice) + parseInt(t.individual_processing_fee), t.sessionData.isRecurr && t.datesArray.length > 0 && (t.createSessionObj.session.total_price = t.createSessionObj.session.total_price * t.datesArray.length)) : (t.standardPrice && !t.sessionData.isRecurr && (t.sessionPrice = parseInt(t.sessionData.groupPriceWithoutFee)), t.group_with_service_fee = calculateFee(t.sessionPrice, t.serviceFee), t.sessionPrice ? (t.group_processing_fee = parseInt(Math.round(parseInt(t.sessionPrice) * parseFloat(t.serviceFee))), 0 === t.group_processing_fee && (t.group_processing_fee = 1)) : t.group_processing_fee = 0, t.createSessionObj.session.total_price = (parseInt(t.sessionPrice) + parseInt(t.group_processing_fee)) * parseInt(t.groupSize), t.sessionData.isRecurr && t.datesArray.length > 0 && (t.createSessionObj.session.total_price = t.createSessionObj.session.total_price * t.datesArray.length))
            }, t.standardPriceValue = function() {
                t.standardPrice ? t.customPrice = !1 : t.customPrice = !0, t.calculateTotalPrice()
            }, t.customPriceValue = function() {
                t.customPrice ? t.standardPrice = !1 : t.standardPrice = !0, t.createSessionObj.session.total_price = null, t.sessionPrice = null, t.calculateTotalPrice()
            }, t.sessionData.isRecurr && (t.customPriceValue(), t.customPrice = !0), t.individualValuecheck = function() {
                t.individualValue ? t.groupValue = !1 : t.groupValue = !0, t.calculateTotalPrice(), t.createSessionObj.session.athletes = [], t.updateList()
            }, t.groupValuecheck = function() {
                t.groupValue ? t.individualValue = !1 : t.individualValue = !0, t.calculateTotalPrice(), t.createSessionObj.session.athletes = [], t.updateList()
            }, t.getTypedChars = function(t) {
                var a = e.isDefined(t) && null !== t && "" !== t ? t.length : 0;
                return a
            }, t.splitValidateEmail = function() {
                if (e.isDefined(t.athleteEmail) && null !== t.athleteEmail) {
                    var a = t.athleteEmail.split(",");
                    return !(a.length > 1)
                }
            }, t.getUpdatedEvents = function() {
                t.checkForConflicts() || (t.submitting = !0, d.createRecurringSession(r.coachId, t.recurringSessionObj, function() {
                    t.submitting = !1, s.modalDone(a, "success")
                }, function(e) {
                    console.log(e), t.submitting = !1, s.modalDone(a, "error")
                }))
            }, t.$watch("selectedGroupType", function(e, a) {
                e !== a && "private" === e && (t.noClientInvite = !1)
            }), t.createSession = function() {
                if (t.createSessionObj.session.type_of_session = t.groupValue ? "group" : "individual", t.createSessionObj.session.group_type = null !== t.selectedGroupType && e.isDefined(t.selectedGroupType) ? t.selectedGroupType : null, t.sessionData.isRecurr && (t.customPrice = !0), t.createSessionObj.session.price_type = t.customPrice ? "custom" : "standard", t.createSessionObj.session.group_size = t.groupValue ? parseInt(t.groupSize) : 1, t.createSessionObj.session.new_location ? t.sessionData.isRecurr && delete t.createSessionObj.session.location : t.sessionData.isRecurr ? delete t.createSessionObj.session.new_location : t.createSessionObj.session.new_location = t.currentLocation, t.sessionData.isRecurr) {
                    t.selectedRequirement === t.requirementList[0] && (t.createSessionObj.session.group_type = "private"), t.createSessionObj.session.timeOfSession = t.timeUTC;
                    var o = t.sessDuration.split(" ");
                    "30" === o[0] ? t.createSessionObj.session.duration = "0.5" : t.createSessionObj.session.duration = o[0], t.createSessionObj.session.dates = [], t.createSessionObj.session.client_options = "Client Must Attend All Sessions" === t.selectedRequirement ? "All" : "Any", e.forEach(t.datesArray, function(e, a) {
                        var o = l("date")(e, "yyyy/MM/dd") + " " + t.sessionHours + ":" + t.sessionMinutes + " " + t.sessionTimeformat;
                        t.createSessionObj.session.dates.push(new Date(o).toUTCString())
                    })
                }
                var n = /^[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/i;
                t.individualValue ? e.isDefined(t.toId) && null !== t.toId ? t.createSessionObj.session.athlete_emails.push(t.toId) : n.test(t.athleteEmail) && t.createSessionObj.session.athlete_emails.push(t.athleteEmail) : t.groupValue && (e.isDefined(t.toIds) && null !== t.toIds && (t.createSessionObj.session.athlete_emails = t.toIds), n.test(t.athleteEmails) && t.createSessionObj.session.athlete_emails.push(t.athleteEmails), t.toClientEmailIds && t.toClientEmailIds.length > 0 && (t.createSessionObj.session.athlete_emails = t.createSessionObj.session.athlete_emails.concat(t.toClientEmailIds))), t.groupValue ? (t.createSessionObj.session.group_price = parseInt(t.sessionPrice) + parseInt(t.group_processing_fee), t.sessionData.isRecurr && (t.createSessionObj.session.group_price_without_fee = parseInt(t.sessionPrice))) : (t.createSessionObj.session.price = parseInt(t.sessionPrice) + parseInt(t.individual_processing_fee), t.sessionData.isRecurr && (t.createSessionObj.session.price_without_fee = parseInt(t.sessionPrice))), t.createSessionObj.session.message = e.isDefined(t.createSessionObj.session.message) && null !== t.createSessionObj.session.message ? t.createSessionObj.session.message.replace(/\r?\n/g, "<br />") : "", t.recurringSessionObj = {
                    recurring_sessions: t.createSessionObj.session
                }, t.sessionData.isRecurr ? t.getUpdatedEvents() : (t.submitting = !0, d.createSession(r.coachId, t.createSessionObj, function() {
                    t.submitting = !1, s.modalDone(a, "success")
                }, function(e) {
                    console.log(e), t.submitting = !1, s.modalDone(a, "error")
                }))
            }, t.getClients = function() {
                t.clients = [], d.getClientsList(r.coachId, function(e) {
                    e.$resolved && 200 === e.status && (t.clients = e.data, t.invitedClients = !1, t.clients.forEach(function(e) {
                        e.has_sessions || (t.invitedClients = !0)
                    }))
                }, function(e) {
                    console.log(e)
                })
            }, t.getClients(), t.listenforComma = function() {
                if (t.$$phase || t.$apply(), t.groupValue ? t.selectedRecepient = e.element(".athlete-box-group").val() : t.selectedRecepient = e.element(".athlete-box-individual").val(), e.isDefined(t.selectedRecepient) && null !== t.selectedRecepient) {
                    var a = /^[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/i;
                    if (t.selectedRecepient.indexOf(",") > -1) {
                        var o = t.selectedRecepient.split(",");
                        if (a.test(o[0])) {
                            var n = {
                                id: t.toIds.length,
                                first_name: "",
                                last_name: "",
                                name: o[0],
                                email: o[0],
                                status: 2,
                                notes: ""
                            };
                            t.groupValue ? (t.toIds.push(o[0]), t.athleteEmails = "", e.element(".athlete-box-group").val(""), t.groupRecepients.push(n)) : (t.toId = n.email, t.inputReadonly = !0, t.athleteEmail = "", e.element(".athlete-box-individual").val(""), t.individualRecepients.push(n)), t.selectedRecepient = null
                        }
                    }
                }
            }, t.updateClientEmailList = function() {
                t.toClientEmailIds = [], e.isDefined(t.multiClients) && t.multiClients.length > 0 && t.multiClients.forEach(function(e) {
                    t.toClientEmailIds.push(JSON.parse(e).email)
                })
            }, t.checkKeyPressed = function(a) {
                var o = a.which || a.keyCode,
                    n = /^[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/i;
                switch (t.groupValue ? t.selectedRecepient = e.element(".athlete-box-group").val() : t.selectedRecepient = e.element(".athlete-box-individual").val(), t.top = parseInt($(".ac-container").css("top")), $(".ac-container").css("top", t.top - 95), t.$$phase || t.$apply(), o) {
                    case 188:
                    case 32:
                    case 39:
                    case 9:
                    case 13:
                        if (a.preventDefault(), n.test(t.selectedRecepient)) {
                            var s = {
                                id: t.toIds.length,
                                first_name: "",
                                last_name: "",
                                name: t.selectedRecepient,
                                email: t.selectedRecepient,
                                status: 2,
                                notes: ""
                            };
                            t.groupValue ? (t.toIds.push(t.selectedRecepient), t.athleteEmails = "", e.element(".athlete-box-group").val(""), t.groupRecepients.push(s)) : (t.toId = s.email, t.inputReadonly = !0, t.athleteEmail = "", e.element(".athlete-box-individual").val(""), t.individualRecepients.push(s)), t.selectedRecepient = null
                        }
                }
            }, t.checkKeyUp = function() {
                t.groupValue ? t.selectedRecepient = e.element(".athlete-box-group").val() : t.selectedRecepient = e.element(".athlete-box-individual").val()
            }, t.addInvitedClient = function() {
                t.toId = JSON.parse(t.selectedClient).email
            }, t.addToRecepients = function(a) {
                t.groupValue ? (t.groupRecepients.push(a), t.toIds.push(a.email), t.athleteEmails = "", e.element(".athlete-box-group").val("")) : (t.toId = a.email, t.athleteEmail = "", t.inputReadonly = !0, e.element(".athlete-box-individual").val(""), t.individualRecepients.push(a))
            }, t.deleteRecepient = function(e) {
                t.groupValue ? (t.groupRecepients.splice(e, 1), t.toIds.splice(e, 1), t.athleteEmails = "") : (t.individualRecepients.splice(e, 1), t.athleteEmail = "", t.toId = null, t.inputReadonly = !1)
            }, t.ac_options_users = {
                suggest: p,
                on_select: function(a) {
                    t.groupValue ? isEmailSelected(t.toIds, a.obj.email) || t.addToRecepients(a.obj) : t.toId !== a.obj.email && t.addToRecepients(a.obj), t.selectedRecepient = null, e.element(".matrix-cell").val(null)
                }
            }, loadGoogleAPI(), t.autoCompleteIntiated = !1, t.initGoogleLocations = function() {
                function a() {
                    for (var a = {
                        street_number: "long_name",
                        locality: "long_name",
                        route: "long_name",
                        administrative_area_level_1: "short_name",
                        postal_code: "short_name"
                    }, i = {
                        locality: "city",
                        street_number: "street_number",
                        route: "route",
                        administrative_area_level_1: "state",
                        postal_code: "zip"
                    }, r = s.getPlace(), c = {
                        name: null,
                        address: {}
                    }, l = 0; l < r.address_components.length; l++) {
                        var d = r.address_components[l].types[0];
                        if (a[d]) {
                            var u = r.address_components[l][a[d]];
                            c.address[i[d]] = u
                        }
                    }
                    e.isDefined(c.address.zip) && null !== c.address.zip && "" !== c.address.zip ? (c.address.street = (e.isDefined(c.address.street_number) ? c.address.street_number : "") + (e.isDefined(c.address.route) && c.address.route !== r.name ? " " + c.address.route : ""), c.formattedAddress = (e.isDefined(c.address.street) && null !== c.address.street && "" !== c.address.street ? c.address.street : "") + (e.isDefined(c.address.city) && null !== c.address.city && "" !== c.address.city ? ", " + c.address.city : "") + (e.isDefined(c.address.state) && null !== c.address.state && "" !== c.address.state ? ", " + c.address.state : "") + (e.isDefined(c.address.zip) && null !== c.address.zip && "" !== c.address.zip ? " " + c.address.zip : ""), t.createSessionObj.session.new_location = r.name + ", " + c.formattedAddress, t.$$phase || t.$apply(), t.sessionData.isRecurr ? e.forEach(t.training_locations, function(e, a) {
                        r.name === e.name && c.address.zip === e.zip && (t.createSessionObj.session.new_location = null, o = "Error!", n = "This location has already been selected. Please select a different location.", h.showAlert(o, n))
                    }) : r.name === t.sessionData.where.name && (t.createSessionObj.session.new_location = null, o = "Error!", n = "This location has already been selected. Please select a different location.", h.showAlert(o, n))) : (t.createSessionObj.session.new_location = "", c = {
                        name: null,
                        address: {}
                    }, o = "Error!", n = "You can't select this location as it has zip code missing. Please select another location", h.showAlert(o, n))
                }
                t.autoCompleteIntiated = !0, t.locationId = "", t.sessionData.isRecurr ? t.locationId = "recurr-autocomplete" : t.locationId = "autocomplete", t.createSessionObj.session.new_location = "";
                var o, n, s = new google.maps.places.Autocomplete(document.getElementById(t.locationId), {
                    types: [],
                    componentRestrictions: {
                        country: "us"
                    }
                });
                s.addListener("place_changed", a)
            }, t.showTooltipInfo = function(t) {
                t = "#" + t, e.element(t).addClass("show-tooltip")
            }, t.hideTooltipInfo = function(t) {
                t = "#" + t, e.element(t).removeClass("show-tooltip")
            }
        };
        t.$inject = ["$scope", "$uibModalInstance", "$compile", "$timeout", "Coachco_CommonService", "SessionService", "createSession", "CommonAPIInterfaceService", "$filter", "CoachProfileInterfaceService", "appConfig", "$sce", "AlertService"], e.module("Coachco").controller("sessionCreateController", t)
    }(angular),
    function(e) {
        var t = function(t, a, o, n, s, i, r, c, l, d, u) {
            t.athlete = {}, t.athleteData = {}, t.viewOnlyMode = d.viewOnlyMode, t.athleteData = d.athletes[0], t.athleteData.age = calculateAge(new Date(d.athletes[0].dob)), t.athleteData.coachName = d.coachName, t.athleteData.sessionDate = new Date(d.date_time), t.motivationrating = -1, t.listenrating = -1, t.skillrating = -1, t.init = {
                motivationRating: 0,
                willingnessRating: 0,
                skillRating: 0
            }, t.APICallCompleted = !1, t.getFeedback = function() {
                var a = o.coachId;
                l.getFeedBack(a, d.coachTrainingSessionId).success(function(a) {
                    a.feedback && (t.feedBack = a.feedback, t.athlete.strength = t.feedBack.strength, t.athlete.improve = t.feedBack.improveOn, t.athleteData.age = t.feedBack.athleteAge, t.athlete.practice = t.feedBack.practiceOn, t.athlete.comments = t.feedBack.comments, t.motivationrating = e.copy(t.feedBack.motivationRating), t.listenrating = e.copy(t.feedBack.willingnessRating), t.skillrating = e.copy(t.feedBack.skillRating), t.init = {
                        motivationRating: e.copy(t.feedBack.motivationRating),
                        willingnessRating: e.copy(t.feedBack.willingnessRating),
                        skillRating: e.copy(t.feedBack.skillRating)
                    }, t.APICallCompleted = !0), isEmpty(a) && (t.init = {
                        motivationRating: 0,
                        willingnessRating: 0,
                        skillRating: 0
                    }, t.APICallCompleted = !0), t.$$phase || t.$apply()
                }).error(function() {
                    t.feedBack = {
                        motivationRating: 0,
                        willingnessRating: 0,
                        skillRating: 0
                    }, t.APICallCompleted = !0
                })
            }, t.close = function() {
                r.modalClose(n)
            }, t.rateMotivation = function(a) {
                t.motivationrating = e.isDefined(a) ? a : 0
            }, t.rateListining = function(a) {
                t.listenrating = e.isDefined(a) ? a : 0
            }, t.rateSkill = function(a) {
                t.skillrating = e.isDefined(a) ? a : 0
            }, t.saveFeedback = function() {
                var a = {
                    save: !0,
                    coach_id: o.coachId,
                    parent_id: d.parentId,
                    session_id: d.sessionId,
                    coach_name: d.coachName,
                    athlete_firstname: t.athleteData.firstname,
                    athlete_lastname: t.athleteData.lastname,
                    athlete_age: t.athleteData.age,
                    strength: t.athlete.strength,
                    improve_on: t.athlete.improve,
                    practice_on: t.athlete.practice,
                    comments: t.athlete.comments,
                    booked_session_id: d.coachTrainingSessionId,
                    start: d.date_time,
                    ratings: {
                        motivation: e.isDefined(t.motivationrating) ? t.motivationrating : 0,
                        willingness: e.isDefined(t.listenrating) ? t.listenrating : 0,
                        skill: e.isDefined(t.skillrating) ? t.skillrating : 0
                    }
                };
                t.submitting = !0, l.saveFeedBack(o.coachId, a).success(function(e) {
                    e && t.close(), t.submitting = !1
                }).error(function() {
                    t.submitting = !1
                }), t.close()
            }, t.submitFeedback = function() {
                var a = {
                    coach_id: o.coachId,
                    client_id: d.parentId.$oid,
                    session_id: d.sessionId,
                    coach_name: d.coachName,
                    athlete_firstname: t.athleteData.firstname,
                    athlete_lastname: t.athleteData.lastname,
                    athlete_age: t.athleteData.age,
                    strength: t.athlete.strength,
                    improve_on: t.athlete.improve,
                    practice_on: t.athlete.practice,
                    comments: t.athlete.comments,
                    booked_session_id: d.coachTrainingSessionId,
                    start: d.date_time,
                    ratings: {
                        motivation: e.isDefined(t.motivationrating) ? t.motivationrating : 0,
                        willingness: e.isDefined(t.listenrating) ? t.listenrating : 0,
                        skill: e.isDefined(t.skillrating) ? t.skillrating : 0
                    }
                };
                t.submitting = !0, l.submitFeedBack(o.coachId, a).success(function(e) {
                    e && r.modalDone(n, "success"), t.submitting = !1
                }).error(function() {
                    t.submitting = !1
                })
            }, t.focusTxt = function(e) {
                if (!t.viewOnlyMode) {
                    var a = document.querySelector("#" + e.currentTarget.id).value;
                    a.length < 1 && (document.querySelector("#" + e.currentTarget.id).value += "â€¢ ")
                }
            }, t.keyUpTxt = function(e) {
                if (!t.viewOnlyMode) {
                    var a = e.keyCode ? e.keyCode : e.which;
                    13 === a && (e.preventDefault(), document.querySelector("#" + e.currentTarget.id).value += "\n", document.querySelector("#" + e.currentTarget.id).value += "â€¢ ");
                    var o = document.querySelector("#" + e.currentTarget.id).value;
                    "\n" === o.substr(o.length - 1) && (document.querySelector("#" + e.currentTarget.id).value = o.substring(0, o.length - 1))
                }
            }, i(function() {
                e.element(".accordion");
                ($(window).width() <= 1024 || isMobile()) && e.element(".sessionFeedBackForm").find(".select-sessions").addClass("show")
            }, 50)
        };
        t.$inject = ["$scope", "$rootScope", "$stateParams", "$uibModalInstance", "$compile", "$timeout", "Coachco_CommonService", "SessionService", "CoachProfileService", "todo", "$window"], e.module("Coachco").controller("sessionFeedbackController", t)
    }(angular),
    function() {
        var e = function(e, t, a, o, n, s, i, r) {
            e.title = s.title, e.message = a.trustAsHtml(s.message), e.setSchedule = !1, e.close = function() {
                t.closeAlert(o)
            }, e.done = function(a) {
                e.setSchedule = !0, r.setReccThreshold(i.data, i.coachId).success(function() {
                    e.setSchedule = !1, t.doneAlert(o, a)
                })
            }
        };
        e.$inject = ["$scope", "AlertService", "$sce", "$uibModalInstance", "$timeout", "errorModel", "modalData", "CoachProfileService"], angular.module("Coachco").controller("setScheduleController", e)
    }(angular),
    function(e) {
        var t = function(t, a, o, n, s, i, r, c, l, d, u, m, h) {
            t.close = function() {
                r.modalClose(n)
            }, t.sessionData = l, t.newLocationValid = !1;
            var p = {},
                g = new Date(t.sessionData.date);
            t.submitReschedule = function() {
                t.submitting = !0, p.parent_id = t.sessionData.parent_id, p.changeLocation = !0, t.newLocationValue === !0 ? (p.new_location_name = t.newLocation, t.showError = !1) : (t.showError = !0, p.new_location_name = "", delete p.new_location_name);
                var a = g.getTime();
                if (p.start = a, p.message = e.isDefined(t.message) ? t.message.replace(/\r?\n/g, "\n") : "", h.isAdmin() && t.ifAdminReview) {
                    var o = "Error!",
                        s = "You are not permitted to reschedule or change location.";
                    m.showAlert(o, s)
                } else t.showError || u.rescheduleCoachSession(t.sessionData.coachTrainingSessionId, t.sessionData.coachId, p, function(e) {
                    e.$resolved && 200 === e.status ? r.modalDone(n, "success") : r.modalDone(n, "error"), t.submitting = !1
                }, function(e) {
                    console.log(e), t.submitting = !1, r.modalDone(n, "error")
                })
            }, loadGoogleAPI(), t.initGoogleLocations = function() {
                function a() {
                    for (var a = {
                        street_number: "long_name",
                        locality: "long_name",
                        route: "long_name",
                        administrative_area_level_1: "short_name",
                        postal_code: "short_name"
                    }, i = {
                        locality: "city",
                        street_number: "street_number",
                        route: "route",
                        administrative_area_level_1: "state",
                        postal_code: "zip"
                    }, r = s.getPlace(), c = {
                        name: null,
                        address: {}
                    }, l = 0; l < r.address_components.length; l++) {
                        var d = r.address_components[l].types[0];
                        if (a[d]) {
                            var u = r.address_components[l][a[d]];
                            c.address[i[d]] = u
                        }
                    }
                    e.isDefined(c.address.zip) && null !== c.address.zip && "" !== c.address.zip ? (c.address.street = (e.isDefined(c.address.street_number) ? c.address.street_number : "") + (e.isDefined(c.address.route) && c.address.route !== r.name ? " " + c.address.route : ""), c.formattedAddress = (e.isDefined(c.address.street) && null !== c.address.street && "" !== c.address.street ? c.address.street : "") + (e.isDefined(c.address.city) && null !== c.address.city && "" !== c.address.city ? ", " + c.address.city : "") + (e.isDefined(c.address.state) && null !== c.address.state && "" !== c.address.state ? ", " + c.address.state : "") + (e.isDefined(c.address.zip) && null !== c.address.zip && "" !== c.address.zip ? " " + c.address.zip : ""), t.newLocation = r.name + ", " + c.formattedAddress, r.name === t.sessionData.location.name ? (t.newLocation = null, o = "Error!", n = "This location has already been selected. Please select a different location.", m.showAlert(o, n)) : t.newLocation && (t.newLocationValid = !0, t.$$phase || t.$apply())) : (t.newLocation = "", c = {
                        name: null,
                        address: {}
                    }, o = "Error!", n = "You can't select this location as it has zip code missing. Please select another location", m.showAlert(o, n))
                }
                t.newLocation = "";
                var o, n, s = new google.maps.places.Autocomplete(document.getElementById("autocomplete"), {
                    types: [],
                    componentRestrictions: {
                        country: "us"
                    }
                });
                s.addListener("place_changed", a)
            }
        };
        t.$inject = ["$scope", "$rootScope", "$stateParams", "$uibModalInstance", "$compile", "$timeout", "Coachco_CommonService", "SessionService", "sessionTodo", "ScheduleService", "CoachProfileInterfaceService", "AlertService", "AuthFactory"], e.module("Coachco").controller("sessionChangeLocationController", t)
    }(angular),
    function(e) {
        var t = function(e, t, a, o, n) {
            e.close = function() {
                n.modalClose(t)
            }
        };
        t.$inject = ["$scope", "$uibModalInstance", "$compile", "$timeout", "Coachco_CommonService"], e.module("Coachco").controller("sessionSeeHowController", t)
    }(angular),
    function(e) {
        var t = function(e, t, a, o, n, s, i) {
            e.close = function() {
                n.modalClose(t)
            };
            var r = i;
            e.sessionDetails = i, e.athlete = i.athletes[0], e.markComplete = function(e) {
                n.modalDone(t, e)
            }, e.openSessionFeedback = function() {
                var t = "/partials/coachProfile/views/modal/coachProfile.sessionFeedback.html",
                    a = "model-sessionfeedback",
                    o = "sessionFeedbackController";
                n.modalOpen(t, a, o, r), e.close()
            }
        };
        t.$inject = ["$scope", "$uibModalInstance", "$compile", "$timeout", "Coachco_CommonService", "SessionService", "todos"], e.module("Coachco").controller("sessionCompleteController", t)
    }(angular),
    function(e) {
        var t = function(t, a, o, n, s, i, r, c, l, d, u, m) {
            function h(a) {
                var o = new Date(a._d),
                    s = e.copy(o);
                s.setHours(s.getHours() + 1);
                var i = n.calendars.scheduleCalendar.fullCalendar("clientEvents", function(e) {
                    var t = new Date(e.start),
                        a = new Date(e.end);
                    return Math.round(t) / 1e3 < Math.round(s) / 1e3 && Math.round(a) > Math.round(o)
                });
                if (!i.length) {
                    var r = new Date(a._d),
                        c = r.getMonth(),
                        l = r.getFullYear(),
                        d = r.getDate(),
                        u = r.getHours(),
                        m = r.getMinutes();
                    t.eventSetter = [{
                        timezone: "UTC",
                        title: "Event",
                        start: new Date(l, c, d, u, m),
                        end: new Date(l, c, d, u + 1, m),
                        allDay: !1
                    }];
                    var h = 1;
                    console.log(h), t.setTitle(t.eventSetter[0], t.eventSetter[0].start.getHours(), t.eventSetter[0].start.getMinutes(), t.eventSetter[0].end.getHours(), t.eventSetter[0].end.getMinutes(), "new", h)
                }
            }
            t.events = {}, t.calEvents = {}, t.eventSources = {}, t.customEvents = [], t.eventSetter = [], t.coachEvents = [], t.allEvents = [], t.eventsArray = [], t.newArray = [], t.updateArray = [], t.destroyArray = [], t.sessionsArray = [], t.start = "", t.end = "", t.recurrence = "", a.activeMenu = "Setavailavility", t.scheduleApplied = !1, void 0 !== m.saDate ? t.currentDate = m.saDate : t.currentDate = "", t.saveCalendar = function() {
                e.forEach(t.sessionsArray, function(e, a) {
                    e.frequency = parseInt(t.recurrence)
                });
                var n = {
                    sessions: t.sessionsArray
                };
                t.sessionsArray.length ? (r.modalDone(o, "setting"), t.allEvents = [], d.setCoachCalendar(n, u.coachId).success(function() {
                    a.$emit("availabitySet")
                })) : (r.modalDone(o), a.$emit("availabitySet"))
            }, t.closeCalendar = function() {
                r.modalClose(o)
            }, t.setTitle = function(a, o, s, r, c, l, d) {
                t.start = o, t.end = r, 0 === s && (s += "0"), 0 === c && (c += "0");
                var u = t.start >= 12 ? (t.start + 11) % 12 + 1 + ":" + s + " PM" : t.start + ":" + s + " AM",
                    m = t.end >= 12 ? (t.end + 11) % 12 + 1 + ":" + c + " PM" : t.end + ":" + c + " AM";
                if (a.title = u + " - " + m, "new" === l) {
                    e.element(".set-repeat").find("input").addClass("highlight-orange"), t.currentEvent = "new";
                    var h = n.calendars.scheduleCalendar.fullCalendar("renderEvent", a, !0),
                        p = {};
                    p.id = h[0]._id, p.start_time = h[0].start._d, p.end_time = h[0].end._d, p.frequency = t.recurrence, p.action = "new", t.deleteEvent(t.sessionsArray, h[0]._id);
                    var g = e.copy(h[0]);
                    if (g.start = Date.parse(g.start._d), g.end = Date.parse(g.end._d), i(function() {
                            t.sessionsArray.push(new Object(p))
                        }), t.recurrence || (t.recurrence = 1), t.allEvents) var f = t.deleteDuplicate(t.allEvents, h[0]._id);
                    f || t.allEvents.push(g)
                } else if ("update" === l) {
                    e.element(".set-repeat").find("input").addClass("highlight-orange"), t.currentEvent = "update";
                    var p = {};
                    p.id = a.$id, p.start_time = a.start._d, p.end_time = a.end._d, p.action = "update", t.recurrence || (t.recurrence = 1), p.frequency = t.recurrence, t.deleteEvent(t.sessionsArray, a.$id), i(function() {
                        t.sessionsArray.push(new Object(p))
                    })
                }
            }, t.getCoachAvailabilitySessions = function() {
                t.coachIdd = u.coachId, l.getCoachSessions(t.coachIdd, function(a, o) {
                    t.events[t.coachIdd] = o, t.calEvents[t.coachIdd] = {
                        events: t.events[t.coachIdd]
                    }, t.eventSources[t.coachIdd] = [t.calEvents[t.coachIdd]], e.forEach(o, function(e, a) {
                        t.allEvents.push(e), t.setTitle(e, new Date(e.start).getHours(), new Date(e.start).getMinutes(), new Date(e.end).getHours(), new Date(e.end).getMinutes(), "load")
                    })
                }), d.getCoachProfile(t.coachIdd).success(function(e) {
                    t.profileData = e, t.profileData.booking_threshold ? t.bookingThreshold = t.profileData.booking_threshold : t.bookingThreshold = 24
                })
            }, t.eventClick = function(e) {
                if (e.$id) {
                    t.eventType = "preloaded";
                    var a = {};
                    a.id = e.$id, a.action = "delete", t.sessionsArray.push(new Object(a)), t.deleteDuplicate(t.allEvents, e.$id)
                }
                console.log("hdgfh")
            }, e.element("body").delegate(".fc-content .btn-delete", "click", function(e) {
                t.eventType = "new";
                var a = $(this).prev().prev().attr("id").split("-")[1];
                t.deleteEvent(t.sessionsArray, a), t.deleteDuplicate(t.allEvents, a), $(e.currentTarget).parent().parent().fadeOut("fast", function() {
                    n.calendars.scheduleCalendar.fullCalendar("removeEvents", a)
                })
            }), t.deleteEvent = function(a, o) {
                t.recurrence || (t.recurrence = 1), e.element(".set-repeat").find("input").addClass("highlight-orange");
                for (var n = a.length; n >= 0; n--) a[n] && (a[n].id === o ? a.splice(n, 1) : a[n].action && "new" === a[n].action && 0 === a.length && (t.recurrence = "", e.element(".set-repeat").find("input").prop("readonly", !1), e.element(".set-repeat").find("input").removeClass("highlight-orange")))
            }, t.deleteDuplicate = function(e, a) {
                for (var o = e.length; o--;) "preloaded" === t.eventType ? e[o].$id === a && e.splice(o, 1) : e[o]._id === a && e.splice(o, 1)
            }, t.eventAfterAllRendered = function(a) {
                var o = t.eventSources[t.coachIdd];
                e.forEach(o[0].events, function(e, a) {
                    var o = $("#set-avail-calendar").find("#event-" + e._id + " span");
                    "booked" === e.status && (o.text("Booked"), o.addClass("fc-event-blue"), o.parents("a").addClass("booked-box")), "pending" === e.status && (o.text("Pending"), o.addClass("fc-event-blue"), o.parents("a").addClass("booked-box")), /^\d+$/.test(e.title) && t.setTitle(e, new Date(e.start).getHours(), new Date(e.start).getMinutes(), new Date(e.end).getHours(), new Date(e.end).getMinutes(), "load"), o.length > 0 && (o[0].innerHTML = '<a class="event-inner-text">' + o[0].innerText + "</a>")
                }), i(function() {
                    var e = n.calendars.scheduleCalendar.fullCalendar("getCalendar");
                    t.currentDate = moment(e.getDate()._d).add(1, "day").format(), t.currentDate = new Date(t.currentDate).toISOString().slice(0, 10)
                }, 200)
            }, t.alertOnDrop = function(e, a, o) {
                if (e.end - e.start === 18e5) o();
                else {
                    var n = (e.end - e.start) / 36e5 % 24;
                    console.log(n), e.$id ? t.setTitle(e, e.start._d.getHours(), e.start._d.getMinutes(), e.end._d.getHours(), e.end._d.getMinutes(), "update", n) : t.setTitle(e, e.start._d.getHours(), e.start._d.getMinutes(), e.end._d.getHours(), e.end._d.getMinutes(), "new", n)
                }
            }, t.alertOnResize = function(a, o, s) {
                var i = a.end - a.start;
                if (console.log(i), 18e5 === i) s();
                else {
                    if (i / 18e5 % 2 !== 0) {
                        var r, c = new Date(a.end._d),
                            l = c.getMonth(),
                            d = c.getFullYear(),
                            u = c.getDate(),
                            m = c.getHours(),
                            h = c.getMinutes(),
                            p = new Date(a.start._d);
                        r = 30 === new Date(a.start._d).getMinutes() ? new Date(d, l, u, m, h + 30) : new Date(d, l, u, m + 1, 0);
                        var g = n.calendars.scheduleCalendar.fullCalendar("clientEvents", function(e) {
                            if (e === a) return !1;
                            var t = new Date(e.start),
                                o = new Date(e.end);
                            return Math.round(t) / 1e3 < Math.round(r) / 1e3 && Math.round(o) > Math.round(p)
                        });
                        g.length ? s() : a.end._d = r
                    }
                    var f = i / 36e5 % 24;
                    console.log(f), a.$id ? t.setTitle(a, a.start._d.getHours(), a.start._d.getMinutes(), a.end._d.getHours(), a.end._d.getMinutes(), "update", f) : t.setTitle(a, a.start._d.getHours(), a.start._d.getMinutes(), a.end._d.getHours(), a.end._d.getMinutes(), "new", f), e.element(".set-repeat").find("input").addClass("highlight-orange")
                }
            }, t.setConfig = function() {
                if ("" === t.currentDate) {
                    var e = new Date;
                    t.currentDate = e
                }
                t.uiConfig = {
                    calendar: {
                        height: 401,
                        editable: !0,
                        slotEventOverlap: !1,
                        defaultDate: t.currentDate,
                        ignoreTimezone: !0,
                        header: {
                            left: "title",
                            center: "",
                            right: "prev today, next"
                        },
                        eventOverlap: function(e, t) {
                            return e.allDay && t.allDay
                        },
                        dayClick: h,
                        eventClick: t.eventClick,
                        eventDrop: t.alertOnDrop,
                        eventResize: t.alertOnResize,
                        eventAfterAllRender: t.eventAfterAllRendered
                    }
                }, t.config = {
                    autoHideScrollbar: !1,
                    theme: "light",
                    advanced: {
                        updateOnContentResize: !0
                    },
                    setHeight: 308,
                    scrollInertia: 0
                }
            }, t.setConfig(), t.setReccurence = function(a) {
                t.scheduleApplied = !0, t.recurrence = a;
                var o = "Success!",
                    n = '<p>Thank you for applying your recurring schedule. It will be set when you click &nbsp  &nbsp <a class="btn-white disabled">Done</a> &nbsp &nbsp(top right).</p><p>Don\'t forget to also set your notice period under <span class="txt-orange">"Availability"</span> on the left</p><p class="indent-left">Clients can book a session with  &nbsp &nbsp<input type="text" disabled readonly /> &nbsp &nbsp hours notice &nbsp &nbsp<a class="btn-blue disabled">Apply</a>&nbsp &nbsp</p>';
                c.showAlert(o, n), e.element(".set-repeat").find("input").prop("readonly", !0)
            }, t.changeRecurrence = function() {}, t.setThreshold = function() {
                if (t.bookingThreshold) {
                    var e = "Success!",
                        a = '<p>Thank you for applying your notice period. It will be set when you click  &nbsp &nbsp<a class="btn-white disabled">Done</a>&nbsp  &nbsp(top right).</p><p>Don\'t forget to also set your recurring schedule (below the calendar).</p><p class="indent-left">Repeat this schedule for next   &nbsp &nbsp <input type="text" disabled readonly /> &nbsp  &nbsp weeks.  &nbsp &nbsp<a class="btn-blue disabled">Apply</a>&nbsp &nbsp</p>',
                        o = "setScheduleController",
                        n = "partials/shared/views/modals/shared.modal.alert.html",
                        s = {
                            data: {
                                coach: {
                                    booking_threshold: t.bookingThreshold
                                }
                            },
                            coachId: u.coachId
                        };
                    c.openModal(e, a, n, o, s)
                }
            }
        };
        t.$inject = ["$scope", "$rootScope", "$uibModalInstance", "uiCalendarConfig", "$compile", "$timeout", "Coachco_CommonService", "AlertService", "SessionService", "CoachProfileService", "$stateParams", "calendarDates"], e.module("Coachco").controller("setAvailabilityController", t)
    }(angular),
    function() {
        var e = function(e, t, a) {
            return {
                getTodos: function(a) {
                    var o = t.ccUrl + "coaches/" + a + "/todos";
                    return e.get(o)
                },
                getUpcomingTrainingSessions: function(a) {
                    var o = t.ccUrl + "coaches/" + a + "/training_sessions";
                    return e.get(o)
                },
                getPaymentDetails: function(a) {
                    var o = t.ccUrl + "coaches/" + a + "/payments";
                    return e.get(o)
                },
                getCoachProfile: function(a) {
                    var o = t.ccUrl + "coaches/" + a;
                    return e.get(o)
                },
                getCoachActivities: function() {
                    var t = "js/json/activities.json";
                    return e.get(t)
                },
                getCitiesList: function() {
                    var t = "js/json/cities.json";
                    return e.get(t)
                },
                getCitiesCoachesList: function() {
                    var a = t.ccUrl + "cities";
                    return e.get(a)
                },
                updateProfile: function(a, o) {
                    var n = t.ccUrl + "coaches/" + a;
                    return e.put(n, o)
                },
                getFeedBack: function(a, o) {
                    var n = t.ccUrl + "coaches/" + a + "/feedbacks?coach_training_session_id=" + o;
                    return e.get(n)
                },
                saveFeedBack: function(e, o) {
                    var n = t.ccUrl + "coaches/" + e + "/feedbacks";
                    return a.post(n, {
                        feedback: o
                    })
                },
                submitFeedBack: function(e, o) {
                    var n = t.ccUrl + "coaches/" + e + "/feedbacks";
                    return a.post(n, {
                        feedback: o
                    })
                },
                rescheduleSession: function(e) {
                    var o = t.ccUrl + "booked_sessions/" + e.booked_session_id;
                    return a.put(o, e)
                },
                setCoachCalendar: function(e, o) {
                    var n = t.ccUrl + "coaches/" + o + "/availabilities";
                    return a.post(n, e)
                },
                setReccThreshold: function(e, o) {
                    var n = t.ccUrl + "coaches/" + o;
                    return a.put(n, e)
                },
                cancelPendingSession: function(e) {
                    var o = t.ccUrl + "coach_booked_sessions/" + e;
                    return a.delete(o, e)
                },
                getCoachPreferences: function(e) {
                    var o = t.ccUrl + "coaches/" + e + "/preferences";
                    return a.get(o)
                },
                updateCoachPreferences: function(e, o) {
                    var n = t.ccUrl + "coaches/" + e + "/preferences/" + e;
                    return a.put(n, o)
                },
                deleteSession: function(e, o, n) {
                    var s = t.ccUrl + "coaches/" + e + "/training_sessions/" + o;
                    return a.delete(s, {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        data: n
                    })
                }
            }
        };
        e.$inject = ["httprequestService", "urlConfig", "$http"], angular.module("Coachco").factory("CoachProfileService", e)
    }(angular),
    function() {
        var e = function(e, t, a) {
            e.isBannerLoaded = !1, $(window).resize(function() {
                $(window).width() >= 1024 && !isMobile() && angular.element(".navlinks").removeClass("in")
            }), $(".flexslider").flexslider({
                animation: "slide",
                controlsContainer: $(".custom-controls-container"),
                customDirectionNav: $(".custom-navigation a"),
                pauseOnAction: !1,
                touch: !0
            }), $(window).scroll(function() {
                e.$$phase || e.$apply(), e.isBannerLoaded || e.addMoreContent()
            }), e.goToTrustSafety = function(e) {
                a.go("Athletes", {
                    scrollPage: e
                })
            }, e.addMoreContent = function() {
                if ("home" === a.current.name) {
                    var t = '<div class="section-bar">        <h3 class="section-bar-heading">The next step to<span class="break-here"></span> developing your potential</h3>        <h4>With StriveFar, soccer and basketball athletes find a private coach for individual and group lessons.</h4>    </div>    <section class="home-desc-boxes extd-desc-boxes">        <div id="home-coaches">            <div class="container-fluid">                <div class="col-lg-14 col-md-14 col-xs-28 coach-cnt-left-bg" title="Coach teaching basketball" style="background: url(../images/our-coaches.jpg) top center no-repeat;background-size:cover;">                </div>                <div class="col-lg-14 col-md-14 col-xs-28 coach-cnt-home">                    <h2>Our Coaches</h2>                    <p><strong>Love for the sport and passion for coaching</strong></p>                    <p>What makes the StriveFar experience truly great are the coaches and trainers. Each coach possesses unique skills, expertise and passion for their sport. Many coaches on StriveFar are also team coaches for clubs and high schools. They understand that private coaching, both individual and small group lessons, are critical for the development of the athlete\'s technique and athleticism. This desire to teach and help each athlete master their sport is what drives and motivates our coaches.</p>                    <a ui-sref="Athletes" href="/athletes_info">                        <button class="learnmore-btn home-learn-more">How it Works</button>                    </a>                    <span class="wrapper-shield" ng-click="goToTrustSafety(\'atheletes-sec5\')"><span class="show-shield-img">                    <img src="/images/shield.png" alt="shield" title="shield"></img></span><span class="shield-txt">Checked & Approved</span></span>                </div>            </div>        </div>        <div class="full-width">            <div id="connected-wrapper">                <div class="handset-img hide-mob" ng-if="!isMobile()"><img src="../images/iphone-schedule.png" alt="Access StriveFar on your smartphone" /></div>                <div class="connected-cnt">                    <h2>Stay Connected</h2>                    <h5 class="bold-h5"><strong>Access StriveFar anywhere, anytime, from any device</strong></h5>                    <p class="desc-detail hide-mob" ng-if="!isMobile()">Using Strivefar\'s mobile website you can <strong>find</strong> a coach,<br> <strong>book</strong> your next soccer or basketball lesson, <strong>review </strong>coach feedback, <br><strong>message</strong> your coach and more.</p>                    <p class="desc-detail hide-web">Using Strivefar\'s mobile website you can <strong>find</strong> a coach, <strong>book</strong> your next soccer or basketball lesson, <strong>review </strong>coach feedback, <strong>message</strong> your coach and more.</p>                </div>                <div class="handset-img hide-web"><img src="../images/iphone-schedule.png" alt="Access StriveFar on your smartphone" /></div>            </div>        </div>        <div class="btm-banner-home">            <div class="main-container">                <div class="txt-on-banner">                    <h2>Are You A Coach or Trainer?</h2>                    <h4 class="sub-title">We are looking for qualified soccer, basketball and coaches in other sports who want to provide lessons, either part-time or full-time.</h4>                    <p>StriveFar helps you find clients, schedule sessions, and get paid</p>                    <a ui-sref="Coaches" href="/becomeacoach">                        <button class="learnmore-btn-white">Learn More</button>                    </a>                </div>            </div>        </div>        <div id="home-blog-sec" class="two-column place-center">            <h2>StriveFar Blog</h2>            <p>A place for training tips, perspective on <strong>Youth Sports</strong>, and company news.</p>            <img src="../images/blogIMG-whistle.png" alt="Follow the StriveFar blog" />            <a href="http://blog.strivefar.com" target="_blank">                <button class="learnmore-btn-blog">Read Our Blog</button>            </a>        </div>    </section>',
                        o = document.createElement("div");
                    o.innerHTML = t, document.getElementById("new-home-cnt").appendChild(o), e.isBannerLoaded = !0
                }
            }
        };
        e.$inject = ["$scope", "$window", "$state"], angular.module("Coachco").controller("mainController", e)
    }(),
    function(e) {
        var t = function(e) {
            var t = function(e, t, a, o, n) {
                t.bind("keyup", function(t) {
                    var a = event.which || event.keyCode;
                    32 === a && e.checkIfEnterKeyWasPressed(t)
                })
            };
            return {
                require: "ngModel",
                link: t,
                restrict: "A"
            }
        };
        t.$inject = ["$q"], e.module("Coachco").directive("onKeypress", t)
    }(angular),
    function() {
        var e = function(e, t, a, o, n, s) {
            return {
                getSportsList: function() {
                    var a = t.ccUrl + "sports";
                    return e.get(a)
                },
                getzipCodeList: function() {
                    var a = t.ccUrl + "zipcodes?search=8&address=8&sensor=false";
                    return e.get(a)
                },
                postInvalidZipcode: function(e, o) {
                    var n = t.ccUrl + "invalid_zipcodes";
                    return a.post(n, {
                        zipcode: e,
                        email: o
                    })
                },
                postNewSportReq: function(e, o) {
                    var n = t.ccUrl + "request_sports";
                    return a.post(n, {
                        sport: e,
                        email: o
                    })
                },
                getCoachList: function(a) {
                    var o = t.ccUrl + "coach_list?search=" + a;
                    return e.get(o)
                }
            }
        };
        e.$inject = ["httprequestService", "urlConfig", "$http", "$rootScope", "$cookies", "$location"], angular.module("Coachco").factory("HomeApiService", e)
    }(angular),
    function(e) {
        function t() {
            return function(e, t) {
                var a = t ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
                return e ? e.replace(a, function(e) {
                    return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
                }) : ""
            }
        }
        e.module("Coachco").filter("capitalize", t)
    }(angular),
    function(e) {
        function t(e) {
            return function(t, a) {
                var o, n, s, i, r = a.split(", ");
                if (2 === r.length) {
                    s = r[0];
                    var c = r[1];
                    if (i = s.split(" â€” "), parseInt(i[1])) {
                        o = new Date(i[0] + ", " + c);
                        var l = i[0].split(" ")[0];
                        n = new Date(l + " " + i[1] + ", " + c)
                    } else o = new Date(i[0] + ", " + c), n = new Date(i[1] + ", " + c)
                } else 3 === r.length && (s = r[0], i = s.split(" â€” "), o = new Date(i[0]), n = new Date(i[1]));
                for (var d = [], u = 0; u < t.length; u++) {
                    var m = new Date(e("date")(new Date(t[u].start), "MM/dd/yyyy"));
                    m >= o && m <= n && d.push(t[u])
                }
                return d
            }
        }
        t.$inject = ["$filter"], e.module("Coachco").filter("dateRange", t)
    }(angular),
    function(e) {
        function t() {
            return function(e, t) {
                if (isNaN(e)) return e;
                var a = "1" + Array(+(t > 0 && t + 1)).join("0");
                return Math.round(e * a) / a
            }
        }
        e.module("Coachco").filter("setDecimal", t)
    }(angular),
    function(e) {
        function t() {
            return function(e) {
                var t = e.split("<br />");
                return t.length > 0 ? t[0].length < e.length - 6 ? t[0] + "..." : t[0] : e
            }
        }
        e.module("Coachco").filter("ellipsis", t)
    }(angular),
    function(e) {
        function t(e) {
            return function(t) {
                var a;
                if (t) {
                    var o = e("linky")(t, "_blank");
                    a = o.replace(/\&gt;/g, ">").replace(/\&lt;/g, "<")
                } else a = "";
                return a
            }
        }
        t.$inject = ["$filter"], e.module("Coachco").filter("linkyWithHtml", t)
    }(angular),
    function(e) {
        function t() {
            return function(e, t) {
                return t = +t, e.slice(t)
            }
        }
        e.module("Coachco").filter("startFrom", t)
    }(angular),
    function(e) {
        function t(e) {
            var t = /(\b(https?|ftp):\/\/[A-Z0-9+&@#\/%?=~_|!:,.;-]*[-A-Z0-9+&@#\/%=~_|])/gim,
                a = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim;
            return function(e) {
                return e.match(t) && (e = e.replace(t, '<a href="$1" target="_blank">$1</a>')), e.match(a) && (e = e.replace(a, '<a href="mailto:$1">$1</a>')), e
            }
        }
        t.$inject = ["$filter"], e.module("Coachco").filter("parseUrl", t)
    }(angular),
    function(e) {
        function t() {
            return function(e, t, a) {
                return e.split(t)[a]
            }
        }
        e.module("Coachco").filter("split", t)
    }(angular),
    function(e) {
        function t() {
            return function(e) {
                if (!e) return "";
                var t = e.toString().trim().replace(/[\. ,:-]+/g, "");
                if (t.match(/[^0-9]/)) return e;
                var a, o;
                switch (t.length) {
                    case 1:
                    case 2:
                    case 3:
                        a = t;
                        break;
                    default:
                        a = t.slice(0, 3), o = t.slice(3)
                }
                return o ? (o = o.length > 3 ? o.slice(0, 3) + "-" + o.slice(3, 7) : o, ("(" + a + ") " + o).trim()) : "(" + a
            }
        }
        e.module("Coachco").filter("tel", t)
    }(angular),
    function() {
        var e = function(e, t, a, o, n, s, i, r) {
            var c;
            s.isClient() ? e.clientId = s.getParentId() : s.isCoach() && (e.coachId = s.getCoachId()), e.showLoaderImage = function() {
                e.loader = !0
            }, e.hideLoaderImage = function() {
                e.loader = !1
            }, e.setSelectedActivity = function(t) {
                e.activities.forEach(function(a) {
                    a.activity.toLowerCase() === t.toLowerCase() && (e.selectedActivity = angular.copy(a))
                })
            }, e.fetchActivityDetails = function() {
                e.showLoaderImage(), e.activities = [], n.getCoachActivities(function(t) {
                    if (t.$resolved && 200 === t.status && t.data.length > 0) {
                        e.activities = t.data, e.setSelectedActivity(e.sessionData.sport), e.currentTZ = jstz().timezone_name;
                        var a;
                        "individual" === e.sessionData.typeOfSession.toLowerCase() ? (s.isClient() ? c = "This is an " + e.sessionData.typeOfSession.capitalize() + " Session with Coach " + e.sessionData.coach_first_name + " " + e.sessionData.coach_last_name : s.isCoach() && (c = "This is an " + e.sessionData.typeOfSession.capitalize() + " Session with the athlete " + e.sessionData.athletes[0].name), a = "?utz=" + jstz().utc_offset + "&uln=en-GB&vjs=1.5&e[0][date_start]=" + e.sessionData.start_time + "&e[0][date_end]=" + e.sessionData.end_time + "& e[0][timezone]=" + e.currentTZ + "& e[0][title]=" + e.selectedActivity.activity + " Lesson: " + e.sessionData.athletes[0].name + "&e[0][description]=" + c + ".&e[0][location]=" + e.sessionData.where.name + ", " + e.sessionData.where.street + ", " + e.sessionData.where.city + ", " + e.sessionData.where.state + " " + e.sessionData.where.zip + "&e[0][organizer]=Coach " + e.sessionData.coach_first_name + " " + e.sessionData.coach_last_name + "&e[0][organizer_email]=" + e.sessionData.coach_email) : (s.isClient() ? c = "This is a " + e.sessionData.group_type + " " + e.sessionData.typeOfSession.capitalize() + " Session with Coach " + e.sessionData.coach_first_name + " " + e.sessionData.coach_last_name : s.isCoach() && (c = "This is a " + e.sessionData.group_type + " " + e.sessionData.typeOfSession.capitalize() + " Session with the group " + e.sessionData.groupName), a = "?utz=" + jstz().utc_offset + "&uln=en-GB&vjs=1.5&e[0][date_start]=" + e.sessionData.start_time + "&e[0][date_end]=" + e.sessionData.end_time + "& e[0][timezone]=" + e.currentTZ + "& e[0][title]=" + e.selectedActivity.activity + " Lesson: " + e.sessionData.groupName + "&e[0][description]=" + c + ".&e[0][location]=" + e.sessionData.where.name + ", " + e.sessionData.where.street + ", " + e.sessionData.where.city + ", " + e.sessionData.where.state + " " + e.sessionData.where.zip + "&e[0][organizer]=Coach " + e.sessionData.coach_first_name + " " + e.sessionData.coach_last_name + "&e[0][organizer_email]=" + e.sessionData.coach_email), e.google_url = "http://addtocalendar.com/atc/google" + a, e.ical_url = "http://addtocalendar.com/atc/ical" + a, e.outlook_url = "http://addtocalendar.com/atc/outlook" + a
                    }
                    e.hideLoaderImage()
                }, function(t) {
                    var a = "Error!",
                        o = "Email " + t.statusText;
                    i.showAlert(a, o), e.hideLoaderImage()
                })
            }, e.getSessionInfo = function() {
                e.showLoaderImage(), s.isClient() ? r.getInvitedSessionInfo(e.clientId, a.booked_session_id, function(t) {
                    t.$resolved && 200 === t.status ? (e.sessionData = t.data.invited_session, e.fetchActivityDetails(), e.hideLoaderImage()) : e.hideLoaderImage()
                }, function(a) {
                    if (console.log(a), 409 === a.status) {
                        t.go("coachSearch.coaches", {
                            coachId: a.data.data.coach_id,
                            name: e.sessionData.coach_first_name + " " + e.sessionData.coach_last_name,
                            sport: e.sessionData.sport,
                            searchParam: e.sessionData.coach_first_name.toLowerCase() + " - " + e.sessionData.coach_last_name.toLowerCase()
                        });
                        var o = "Oops!",
                            n = "The coach has cancelled this session. Please check the coachâ€™s calendar to book another session at a time that is convenient for you.";
                        i.showAlert(o, n), e.hideLoaderImage()
                    }
                }) : s.isCoach() && o.getSessionData(e.coachId, a.booked_session_id, function(t) {
                    t.$resolved && 200 === t.status ? (e.sessionData = t.data.invited_session, e.fetchActivityDetails(), e.hideLoaderImage()) : e.hideLoaderImage()
                }, function(a) {
                    if (409 === a.status) {
                        t.go("coachSearch.coaches", {
                            coachId: a.data.data.coach_id,
                            name: e.sessionData.coach_first_name + " " + e.sessionData.coach_last_name,
                            sport: e.sessionData.sport,
                            searchParam: e.sessionData.coach_first_name.toLowerCase() + "-" + e.sessionData.coach_last_name.toLowerCase()
                        });
                        var o = "Oops!",
                            n = "The coach has cancelled this session. Please check the coachâ€™s calendar to book another session at a time that is convenient for you.";
                        i.showAlert(o, n)
                    }
                    e.hideLoaderImage()
                })
            }, e.getSessionInfo(), e.goToMyAccount = function() {
                s.isClient() && t.go("clientProfile.dashboard.sessions", {
                    clientId: e.clientId
                })
            }
        };
        e.$inject = ["$scope", "$state", "$stateParams", "CoachProfileInterfaceService", "ActivitiesService", "AuthFactory", "AlertService", "ClientProfileInterfaceService"], angular.module("Coachco").controller("AddToCalendarController", e)
    }(),
    function() {
        var e = function(e, t, a, o, n, s) {
            e.title = s.title, e.message = a.trustAsHtml(s.message), e.close = function() {
                t.closeAlert(o)
            }, e.done = function(e) {
                t.doneAlert(o, e)
            }
        };
        e.$inject = ["$scope", "AlertService", "$sce", "$uibModalInstance", "$timeout", "errorModel"], angular.module("Coachco").controller("AlertController", e)
    }(angular),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d, u, m, h, p, g) {
            e.isLoaded = !1, e.bannerLoader = !0, e.user = {}, e.firstLoad = !0, $(document).ready(function() {
                $("body").on("click touchstart", function(e) {
                    $(e.target).hasClass("navbar-toggle") || 0 !== $("#drop-down").has(e.target).length || $("#drop-down").removeClass("in"), !$(e.target).hasClass("dropdown-toggle") && $(".select-box").hasClass("open") && $(".select-box").removeClass("open"), $(e.target).hasClass("atcb-link") || $(e.target).hasClass("atc-style-icon") || $(e.target).hasClass("atcb-link-img") || $(e.target).hasClass("atcb-item") || $(e.target).hasClass("atcb-item-link") || $(e.target).hasClass("atcb-list") || $(e.target).hasClass("mobile-addtoCalendar-wrap") || $(".atcb-link").blur()
                })
            }), c.isMobile = function() {
                return isMobile()
            }, e.loadCSS = function() {
                u.load([{
                    insertBefore: "#vendorLib",
                    files: ["angular-libs"]
                }, {
                    insertBefore: "#mainCSS",
                    files: ["/css/vendor.min.css"]
                }])
            }, e.initValues = function() {
                e.searched = !1, e.zipcode = "", e.isNumber = "", e.isZipInList = !1, "Athletes" === d.current.name ? (e.sportsElement = angular.element("#simple-btn-keyboard-nav-athlete"), e.zipElement = angular.element("#zip-athlete")) : (e.sportsElement = angular.element("#simple-btn-keyboard-nav"), e.zipElement = angular.element("#zip")), c.coachFromPage = c.fromCalendarView = c.fromCalender = c.fromProfileDetail = !1
            }, e.setCarouselHeight = function(e) {
                var t, a = angular.element("#marketing-home .flex-viewport"),
                    o = angular.element(".home-carousel");
                "initial" === e ? (t = .73 * window.screen.height, a.height(t), o.height(t), o.css("min-height", t)) : l(function() {
                    var e = angular.element("#slider0");
                    sessionStorage.getItem("carouselHeight") && parseInt(sessionStorage.getItem("carouselHeight")) ? t = parseInt(sessionStorage.getItem("carouselHeight")) : e && (t = e.height()), t > 21 && (a.height(t), o.height(t), o.css("min-height", t + 18)), $(".flexslider").flexslider({
                        animation: "slide",
                        pauseOnAction: !1,
                        touch: !1,
                        controlsContainer: $(".custom-controls-container"),
                        customDirectionNav: $(".custom-navigation a"),
                        start: function() {
                            $("#marketing-home .flexslider img").fadeIn(1e3)
                        }
                    })
                }, 1e3)
            }, e.initCarousel = function() {
                sessionStorage.getItem("ImageCache") ? (e.firstLoad = !1, e.isLoaded = !0, e.homeSlides = ["images/home-carousel-soccer.png", "images/home-carousel-basketball.png"]) : e.homeSlides = ["images/imgonline-com-ua-blur-soccer.png", "images/imgonline-com-ua-blur-basketball.png"], e.setCarouselHeight("initial")
            }, c.$watch("page", function(t, a) {
                if (e.initValues(), t !== a) {
                    e.asyncSelected = {}, e.searchValueSelected = null, e.sportsElement.text("Select Sport"), e.sportsElement.removeClass("ng-touched"), angular.element("#zip-desktop, #zip-mob").removeClass("ng-touched"), e.validNameQuery = !1, e.validZipQuery = !1, e.selectedSport = null, e.setCarouselHeight();
                    var o = $("#marketing-home .flexslider").data("flexslider");
                    o && o.setup()
                }
            }), window.onresize = function() {
                e.setCarouselHeight()
            }, e.initValues(), e.getAllLists = function() {
                i.getSportsList().success(function(t) {
                    e.sportsList = t, "coachSearch.coaches" !== d.current.name && (window.prerenderReady = !0)
                }).error(function() {})
            }, localStorage.removeItem("currentStateName"), window.onbeforeunload = function() {
                localStorage.removeItem("currentStateName"), sessionStorage.setItem("carouselHeight", imageHeight)
            }, e.getAllLists(), e.setSelectedActivity = function(t) {
                e.activities.forEach(function(e) {
                    angular.isDefined(t.sport) ? e.activity.toLowerCase() === t.sport.toLowerCase() && (t.image = angular.copy(e.questions.sport_image)) : delete t.image
                })
            }, e.setSelectedClub = function(t) {
                e.clubs.forEach(function(e) {
                    e.name === t.name && (t.image = e.image_path)
                })
            }, e.prefetchZipCodes = function() {
                e.prefetchZipCodeList = JSON.parse(localStorage.getItem("ZipCodeList")), (angular.isUndefined(e.prefetchZipCodeList) || null === e.prefetchZipCodeList || 0 === e.prefetchZipCodeList.length) && i.getzipCodeList().success(function(t) {
                    e.prefetchZipCodeList = t, e.zipcodeList = e.prefetchZipCodeList, localStorage.setItem("ZipCodeList", JSON.stringify(e.prefetchZipCodeList))
                }), e.zipcodeList = e.prefetchZipCodeList
            }, e.prefetchZipCodes(), e.filterByCoachSport = function(t) {
                return !e.asyncSelected || (!e.asyncSelected.sport || t.toLowerCase() === e.asyncSelected.sport.toLowerCase())
            }, e.searchCoach = function(o) {
                var n = "";
                if (isNaN(parseInt(o))) n = t.ccUrl + "coach_list?search=" + o, e.isNumber = !1;
                else {
                    if ("8" === o.charAt(0)) return e.isNumber = !0, e.tempArray = [], e.zipCount = 0, e.prefetchZipCodeList.map(function(t) {
                        t === o && (e.asyncSelected = o, e.searchValueSelected = e.asyncSelected, e.validZipQuery = !0, e.validNameQuery = !0), t.indexOf(o) > -1 && e.zipCount < 5 && (e.zipCount++, e.tempArray.push(t))
                    }), e.zipcodeList = h("limitTo")(e.tempArray, 5), e.zipcodeList;
                    n = t.ccUrl + "zipcodes?search=" + o, e.isNumber = !0
                }
                return a.get(n, {
                    params: {
                        address: o,
                        sensor: !1
                    }
                }).then(function(t) {
                    return e.isNumber ? (e.zipcodeList = t.data, e.tempArray = [], e.zipCount = 0, t.data.map(function(t) {
                        t === o && (e.asyncSelected = o, e.searchValueSelected = e.asyncSelected, e.validZipQuery = !0, e.validNameQuery = !0), t.indexOf(o) > -1 && e.zipCount < 5 && (e.zipCount++,
                            e.tempArray.push(t))
                    }), e.zipcodeList = h("limitTo")(e.tempArray, 5), e.zipcodeList) : (e.tempArray = [], e.zipCount = 0, t.data.map(function(t) {
                        t.name.toLowerCase() === o.toLowerCase() && (e.asyncSelected = t, e.searchValueSelected = e.asyncSelected.name, e.validZipQuery = !0, e.validNameQuery = !0), t.name.toLowerCase().indexOf(o.toLowerCase()) > -1 && e.zipCount < 5 && (e.zipCount++, e.setSelectedActivity(t), "club" === t.type && e.setSelectedClub(t), e.tempArray.push(t))
                    }), e.coachesClubsList = h("limitTo")(e.tempArray, 5), e.coachesClubsList)
                })
            }, e.fetchActivityDetails = function() {
                e.activities = [], s.getCoachActivities(function(t) {
                    t.$resolved && 200 === t.status && t.data.length > 0 && (e.activities = t.data)
                }, function(e) {
                    var t = "Error!",
                        a = "Email " + e.statusText;
                    g.showAlert(t, a)
                })
            }, e.fetchActivityDetails(), e.fetchClubs = function() {
                e.clubs = [], p.getAllClubs(function(t) {
                    t.$resolved && 200 === t.status && t.data.length > 0 && (e.clubs = t.data)
                }, function(e) {
                    var t = "Error!",
                        a = "Email " + e.statusText;
                    g.showAlert(t, a)
                })
            }, e.fetchClubs(), e.validateQuery = function() {
                e.mainForm.zipcode.$valid && e.zipcodeList.length > 0 ? e.validZipQuery = !0 : (e.validZipQuery = !1, e.validNameQuery = !1), e.mainForm.zipcode.$valid && e.coachesClubsList.length > 0 ? (e.validNameQuery = !0, e.coachesClubsList.forEach(function(t) {
                    e.setSelectedActivity(t)
                })) : (e.validNameQuery = !1, e.validZipQuery = !1)
            }, e.afterSelect = function(t) {
                e.validZipQuery = !0, e.validNameQuery = !0, e.asyncSelected = t, e.isNumber ? e.searchValueSelected = e.asyncSelected : e.searchValueSelected = e.asyncSelected.name, e.shiftFocusToDropdown()
            }, e.checkIfEnterKeyWasPressed = function(t) {
                var a = t.which || t.keyCode;
                switch (a) {
                    case 9:
                        if (t.preventDefault(), "zipcode" === t.currentTarget.name) {
                            var o = /^(\d{5}(-\d{4})?|[A-Z]\d[A-Z] *\d[A-Z]\d)$/;
                            o.test(e.zipcode) ? (e.isZipInList = e.searchZipList(), e.isZipInList ? (t.target.value = angular.element(".typeahead").find('li[class="active"]').text(), e.shiftFocusToDropdown()) : e.zipElement.trigger("blur")) : (e.zipElement.trigger("click"), t.target.value = angular.element(".typeahead").find('li[class="active"]').text(), e.shiftFocusToDropdown())
                        } else "Request a Sport" !== t.target.innerText ? (e.sportsElement.text(t.target.innerText), e.mainForm.$valid = !0, e.sportsElement.trigger("click"), e.changeFocusDropdown()) : e.requestASportModal();
                        break;
                    case 13:
                        t.preventDefault(), angular.element("#zip").trigger("blur")
                }
            }, e.searchZipList = function() {
                if (e.zipcodeList.indexOf(e.zipcode) !== -1) return !0
            }, e.shiftFocusToDropdown = function() {
                l(function() {
                    e.sportsElement.focus(), e.showDropdown()
                })
            }, e.showDropdown = function() {
                e.sportsElement.trigger("click")
            }, e.changeFocusDropdown = function(t) {
                "Request a Sport" !== t ? (e.sportsElement.text(t), e.sportsElement.trigger("focusout"), angular.element(".find-coach-btn").focus(), e.selectedSport = t) : e.requestASportModal()
            }, e.openZipModal = function() {
                var t = "partials/home/views/modal/home.zipcode.modal.html",
                    a = "model-zipcode",
                    o = "zipModalController";
                m.modalOpen(t, a, o, e.zipcode)
            }, e.requestASportModal = function() {
                var e = "partials/home/views/modal/home.reqasport.modal.html",
                    t = "model-new-sports",
                    a = "newSportsModalController";
                m.modalOpen(e, t, a)
            }, e.searchForCoach = function() {
                e.searched = !0, angular.element(".mainForm").hasClass("ng-valid") && (e.mainForm.$setUntouched(), l(function() {
                    e.isNumber ? d.go("coachSearch.coaches", {
                        zip: e.searchValueSelected,
                        sport: hyphenSeparated(e.selectedSport),
                        searchType: "zip",
                        searchParam: e.searchValueSelected
                    }, {
                        inherit: !1,
                        reload: !0
                    }) : angular.isDefined(e.asyncSelected) && "coach" === e.asyncSelected.type ? d.go("coachSearch.coaches", {
                        name: e.asyncSelected.name,
                        sport: hyphenSeparated(e.selectedSport),
                        searchType: e.asyncSelected.type,
                        searchParam: hyphenSeparated(e.asyncSelected.name)
                    }, {
                        inherit: !1,
                        reload: !0
                    }) : angular.isDefined(e.asyncSelected) && "club" === e.asyncSelected.type ? d.go("coachSearch.coaches", {
                        club: e.asyncSelected.name,
                        sport: hyphenSeparated(e.selectedSport),
                        searchType: e.asyncSelected.type,
                        searchParam: hyphenSeparated(e.asyncSelected.name)
                    }, {
                        inherit: !1,
                        reload: !0
                    }) : d.go("coachSearch.coaches", {
                        name: e.searchValueSelected,
                        sport: hyphenSeparated(e.selectedSport),
                        searchType: null,
                        searchParam: hyphenSeparated(e.searchValueSelected)
                    }, {
                        inherit: !1,
                        reload: !0
                    })
                }, 100))
            }, e.initiateBanner = function() {
                e.isLoaded = !0, e.bannerLoader = !1, "coachSearch.coaches" !== d.current.name && (window.prerenderReady = !0), $(".flexslider").flexslider({
                    animation: "slide",
                    controlsContainer: $(".custom-controls-container"),
                    customDirectionNav: $(".custom-navigation a"),
                    pauseOnAction: !1,
                    touch: !1,
                    start: function() {
                        $("img").fadeIn(500)
                    }
                }), angular.element(".banner-content").removeClass("hide"), l(function() {
                    angular.element(".banner-content").addClass("move-down")
                }, 500)
            }, e.loadStuff = function() {
                if (e.firstLoad) {
                    var t = new Array;
                    if (!("addEventListener" in window)) return;
                    var a = 0,
                        o = ["images/home-carousel-soccer.png", "images/home-carousel-basketball.png"];
                    o.forEach(function(n, s) {
                        n && (t[s] = new Image, t[s].src = n, t[s].onload = function() {
                            a++, 2 === a && l(function() {
                                e.homeSlides = o, sessionStorage.setItem("ImageCache", !0), e.initiateBanner()
                            }, 500)
                        })
                    })
                } else e.initiateBanner()
            }
        };
        e.$inject = ["$scope", "urlConfig", "$http", "$window", "appConfig", "ActivitiesService", "HomeApiService", "StoreService", "$rootScope", "$timeout", "$state", "$ocLazyLoad", "Coachco_CommonService", "$filter", "CommonAPIInterfaceService", "AlertService"], angular.module("Coachco").controller("bannerController", e)
    }(),
    function() {
        var e = function(e, t, a, o, n) {
            e.title = n.title, e.message = n.message, e.note = n.note, e.positiveButtonText = n.positiveButtonText, e.negativeButtonText = n.negativeButtonText, e.close = function() {
                t.closeDialog(a)
            }, e.confirm = function(e) {
                t.doneDialog(a, e)
            }, e.cancel = function(e) {
                t.doneDialog(a, e)
            }
        };
        e.$inject = ["$scope", "ConfirmDialogService", "$uibModalInstance", "$timeout", "errorModel"], angular.module("Coachco").controller("ConfirmController", e)
    }(angular),
    function() {
        var e = function(e, t) {
            e.errorMessage = t.message
        };
        e.$inject = ["$scope", "$stateParams"], angular.module("Coachco").controller("errorController", e)
    }(),
    function() {
        var e = function(e, t, a, o, n) {
            e.title = n.title, e.siteUrl = n.siteUrl, e.close = function() {
                a.modalClose(t)
            }
        };
        e.$inject = ["$scope", "$uibModalInstance", "Coachco_CommonService", "$timeout", "pageModel"], angular.module("Coachco").controller("ExternalPageController", e)
    }(angular),
    function(e) {
        var t = function(e, t, a, o, n, s) {
            ("coachSearch.coaches" === o.current.name || o.current.name.indexOf("coachProfile.dashboardView") > -1 || o.current.name.indexOf("coachProfile.dashboard") > -1 || o.current.name.indexOf("clientProfile.dashboard") > -1 || o.current.name.indexOf("clientProfile.dashboardView") > -1) && isMobile() ? e.isMobileView = !0 : e.isMobileView = !1, o.current.name.indexOf("clientProfile.dashboard") >= 0 ? (e.showSignupSec = !1, $("#footer-top .main-container").css("padding-top", "15px")) : (e.showSignupSec = !0, $("#footer-top .main-container ").css("padding-top", "15px")), e.gotoCompany = function(e) {
                "company" === o.current.name ? t.$emit("scrollMarketingContents", e) : o.go("company", {
                    scrollPage: e
                })
            }, e.subscribeEmail = function() {
                n.subscribeEmail(e.email, function(t) {
                    if (t.$resolved && 200 === t.status) {
                        e.email = null;
                        var a = "Success!",
                            o = "Thank you for subscribing to our newsletter. Enjoy our site and have a great day.";
                        s.showAlert(a, o)
                    }
                })
            }
        };
        t.$inject = ["$scope", "$rootScope", "$timeout", "$state", "CommonAPIInterfaceService", "AlertService"], e.module("Coachco").controller("footerController", t)
    }(angular),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d, u, m, h, p, g, f, v, S) {
            e.profPic = !1, e.page = r.current.name, e.parentPage = r.current.parent, s.unreadMessages = 0, e.initializeAuth = function() {
                e.firstName = d.getFirstName(), e.lastName = d.getLastName(), e.userId = d.getUserId(), e.loggedIn = d.isLoggedIn(), e.accountActive = 1 === d.getStatus(), e.isClient = d.isClient(), e.isCoach = d.isCoach(), e.isAdmin = d.isAdmin(), e.adminId = d.getAdminId(), e.isRegistered = d.isRegistered(), e.isCoach && null !== d.getProfileImage() && (e.profPic = !0, e.profileImage = d.getProfileImage()), s.profileCompletionStatus = d.getCompletionStatus(), e.getUserType();
                var t = getBrowserVersion();
                if (navigator.userAgent.indexOf("MSIE") > -1 && t <= 9) {
                    var a = "Oops!",
                        o = 'Your browser is not supported by our site. Please use the Chrome (<img src="images/google-chrome.png" width="20px" alt="Google Chrome"/>) or Firefox (<img src="images/firefox.png" width="20px" alt="Firefox"/>) browser for the best experience, or upgrade to Edge or IE 10 or higher. Thank You.';
                    f.showAlert(a, o)
                }
            }, s.$on("refreshHeader", function(t, a) {
                e.initializeAuth(), e.setHeaderViews(), a && s.unreadMessages >= a && (s.unreadMessages = s.unreadMessages - a), e.pollForPayments()
            }), e.getCartItemCount = function() {
                var e = h.get("SF.cartId");
                e ? (d.isCoach() && (s.cartItemCount = 0), p.getCartItemCount(e).success(function(e) {
                    s.cartItemCount = e.cartItemsCount
                }).error(function() {})) : s.cartItemCount = 0
            }, e.getCartItemCount(), s.$on("refreshContinueLink", function() {
                e.getCartItemCount()
            }), e.refreshToken = function() {
                e.loggedIn && g.getToken(d.getUserId(), function(t) {
                    t.$resolved && 200 === t.status && (u.removeTokens(), u.setJwtToken(t.data.jwt.token), e.initializeAuth(), e.setHeaderViews(), e.loadUserProfileSummary(function() {}), e.pollForPayments())
                })
            }, d.isCoach() && e.refreshToken(), e.setStateNameGo = function(e, t, a) {
                var o;
                d.isAdmin() && (r.current.name.indexOf("adminProfile.dashboard") > -1 || r.current.name.indexOf("reviewCoachProfile.dashboard") > -1) ? (t = {
                    adminId: d.getAdminId()
                }, o = "adminProfile.dashboard." + a) : "coach" === e ? o = "coachProfile.dashboard." + a : "client" === e && (o = "clientProfile.dashboard." + a), localStorage.setItem("currentStateName", a), console.log(o, t), r.go(o, t), i(function() {
                    var e = angular.element("#profile-menu");
                    e && angular.element("html, body").animate({
                        scrollTop: e.offset().top - 125
                    }, 600)
                }, 500)
            }, e.getUserType = function() {
                e.isClient ? (e.loggedInUserType = "client", e.Id = d.getParentId()) : e.isCoach && (e.loggedInUserType = "coach", e.Id = d.getCoachId()), e.isAdmin && (e.adminId = d.getAdminId()), e.setHeaderViews()
            }, e.goToCoachEnrollment = function() {
                r.go("coachEnrollment.createAccount")
            }, e.redirectToEnrollmentStep = function() {
                switch (s.profileCompletionStatus) {
                    case 1:
                        r.go("coachEnrollment.supportAndExperience", {
                            coachId: e.Id
                        });
                        break;
                    case 2:
                        r.go("coachEnrollment.profileSummary", {
                            coachId: e.Id
                        });
                        break;
                    case 4:
                        r.go("coachEnrollment.coachingInfo", {
                            coachId: e.Id
                        });
                        break;
                    case 3:
                        r.go("coachEnrollment.trainingLocation", {
                            coachId: e.Id
                        });
                        break;
                    default:
                        r.go("coachEnrollment.supportAndExperience", {
                            coachId: e.Id
                        })
                }
            }, e.redirectToCoachProfile = function() {
                e.accountActive ? r.go("coachProfile.dashboard.sessions", {
                    coachId: e.Id
                }) : r.go("errorPage", {
                    message: "Thank you for your application. Once your application is approved, you will be able to access your dashboard through this link. We look forward to working with you!"
                })
            }, e.setHeaderViews = function() {
                if (e.loggedIn) switch (e.profIconTxt = e.firstName.charAt(0), e.loggedInUserType) {
                    case "coach":
                        "home" === r.current.name && (e.commonHeader = !0), "coachSearch.coaches" === r.current.name && (e.commonHeader = !1, e.page = "coachSearch", angular.element("#home-header").addClass("coach-search-header-loggedin")), "coachProfile" === r.current.name && (e.commonHeader = !1, e.page = "coachProfileDashboard"), "booking.selectYourAthlete" !== r.current.name && "booking.bookingPayment" !== r.current.name || (angular.element("#home-header").addClass("booking-header"), e.page = "booking");
                        break;
                    case "client":
                        "home" === r.current.name && (e.commonHeader = !0), "coachSearch.coaches" === r.current.name && (e.commonHeader = !1, e.page = "coachSearch", angular.element("#home-header").addClass("coach-search-header-loggedin")), "booking.selectYourAthlete" !== r.current.name && "booking.bookingPayment" !== r.current.name || (e.commonHeader = !1, angular.element("#home-header").addClass("booking-header"), e.page = "booking"), "booking.inviteFriends" === r.current.name && (e.commonHeader = !1, angular.element("#home-header").addClass("booking-header"), e.page = "inviteFriends"), r.current.name.includes("clientProfile.dashboard") && angular.element("#home-header").addClass("coach-search-header-loggedin")
                } else "home" === r.current.name || "company" === r.current.name || "Coaches" === r.current.name || "Athletes" === r.current.name ? e.commonHeader = !0 : (e.commonHeader = !1, "booking.createNewAccount" === r.current.name || "booking.login" === r.current.name || "booking.resetPassword" === r.current.name ? (e.page = "registration", angular.element("#home-header").addClass("booking-header"), "booking.login" !== r.current.name && "booking.resetPassword" !== r.current.name || angular.element("#home-header").addClass("booking-header-login")) : "coachSearch.coaches" === r.current.name ? (e.page = "coachSearch", angular.element("#home-header").addClass("coach-search-header-not-loggedin")) : angular.element("#home-header").addClass("coach-search-header-not-loggedin"))
            }, e.logout = function() {
                Boolean(localStorage.getItem("cartTimer")) || Boolean(localStorage.getItem("sessionTimer")) ? c.logoutPrompt() : e.userLogoutProcess()
            }, e.userLogoutProcess = function() {
                d.logout(), e.loggedIn = !1, s.loggedIn = !1, r.go("home"), angular.element("#home-header").removeClass("coach-search-header-loggedin").addClass("coach-search-header-not-loggedin"), localStorage.removeItem("ProfileVisitedStatus"), localStorage.removeItem("paymentFilter"), localStorage.removeItem("coachPaymentFilter"), localStorage.removeItem("sessionsAthleteFilter"), localStorage.removeItem("sessionsTypeFilter"), localStorage.removeItem("selectedSessionsMonthFilterPeriod"), localStorage.removeItem("selectedPaymentsMonthFilterPeriod"), localStorage.removeItem("selectedSessionsYearFilterPeriod"), localStorage.removeItem("selectedPaymentsWeekFilterPeriod"), localStorage.removeItem("selectedSessionsWeekFilterPeriod"), localStorage.removeItem("selectedPaymentsYearFilterPeriod"), localStorage.removeItem("adminSessionFilter"), localStorage.removeItem("profileTabSelected"), localStorage.removeItem("clientTabClientSelected"), localStorage.removeItem("clientsTabAthleteSelected")
            }, e.userLogout = s.$on("userLogout", function() {
                e.userLogoutProcess()
            }), e.$on("$destroy", e.userLogout), e.getInitialMesageCount = function() {
                e.adminView = !1;
                var t;
                d.isClient() ? t = d.getParentId() : d.isCoach() && 0 === d.getCompletionStatus() && (t = d.getCoachId()), d.isAdmin() && (r.current.name.indexOf("adminProfile.dashboard") > -1 || r.current.name.indexOf("reviewCoachProfile.dashboard") > -1) ? (e.adminView = !0, t = d.getAdminId()) : e.adminView = !1, null !== t && angular.isDefined(t) && g.pollForMessages(t, function(t) {
                    e.adminView ? s.unreadMessages = t.data.total_message_count : s.unreadMessages = s.isStriveFarMsgRead ? t.data.total_message_count : t.data.total_message_count + 1, e.pollmessagesCount()
                }, function() {})
            }, e.loadUserProfileSummary = function(t) {
                e.profileData ? t("success") : d.isClient() ? v.getClientDetails(d.getParentId(), function(a) {
                    a.$resolved && 200 === a.status && (e.profileData = a.data, "yes" === e.profileData.strivefar_message_read ? s.isStriveFarMsgRead = !0 : s.isStriveFarMsgRead = !1, s.unreadMessages = "no" === e.profileData.strivefar_message_read ? s.unreadMessages + 1 : s.unreadMessages, s.$emit("subscribeToChannel"), t("success"))
                }) : d.isCoach() && S.getAccountDetails(d.getCoachId(), function(a) {
                    a.$resolved && 200 === a.status && (e.profileData = a.data, "yes" === e.profileData.strivefar_message_read ? s.isStriveFarMsgRead = !0 : s.isStriveFarMsgRead = !1, s.unreadMessages = "no" === e.profileData.strivefar_message_read ? s.unreadMessages + 1 : s.unreadMessages, s.$emit("subscribeToChannel"), t("success"))
                })
            }, e.loadUserProfileSummary(function(t) {
                "success" === t && e.getInitialMesageCount()
            }), e.pollForPayments = function() {
                var e;
                d.isCoach() && 0 === d.getCompletionStatus() && (e = d.getCoachId(), null !== e && angular.isDefined(e) && g.pollForPaymentNotifcations(e, function(e) {
                    s.unreadPayments = e.data.recent_payments, e.data.recent_payments > 0 && s.$emit("newPayment")
                }, function() {}))
            }, e.pollForPayments(), e.returnHome = function() {
                "coachSearch.coaches" === s.previousState || "booking.login" === s.previousState || "booking.selectYourAthlete" === s.previousState || "booking.bookingPayment" === s.previousState ? angular.isDefined(s.params) && null !== s.params && s.params.hasOwnProperty("coachId") && null !== s.params.coachId ? r.go("coachSearch.coaches", {
                    coachId: s.params.coachId,
                    name: s.params.name,
                    sport: s.params.sport,
                    searchParam: hyphenSeparated(s.params.name),
                    searchType: s.params.searchType
                }) : angular.isDefined(s.params) && null !== s.params && s.params.hasOwnProperty("name") && null !== s.params.name ? r.go("coachSearch.coaches", {
                    name: s.params.name,
                    sport: s.params.sport,
                    searchParam: hyphenSeparated(s.params.name),
                    searchType: s.params.searchType
                }) : angular.isDefined(s.params) && null !== s.params && s.params.hasOwnProperty("zip") && null !== s.params.zip ? r.go("coachSearch.coaches", {
                    zip: s.params.zip,
                    sport: s.params.sport,
                    searchParam: s.params.zip,
                    searchType: s.params.searchType
                }) : angular.isDefined(s.params) && null !== s.params && s.params.hasOwnProperty("club") && null !== s.params.club ? r.go("coachSearch.coaches", {
                    club: s.params.club,
                    sport: s.params.sport,
                    searchParam: hyphenSeparated(s.params.club),
                    searchType: s.params.searchType
                }) : r.go("coachSearch.coaches") : r.go("home")
            }, e.searchForCoach = function() {
                e.searched = !0;
                var t = JSON.parse(localStorage.getItem("coachSearchResults"));
                angular.isDefined(t) && null !== t && t.zip ? r.go("coachSearch.coaches", {
                    zip: t.zip,
                    sport: t.sport.replace(/\s/g, ""),
                    searchParam: t.zip,
                    searchType: t.searchType
                }) : angular.isDefined(t) && null !== t && t.name ? r.go("coachSearch.coaches", {
                    name: t.name,
                    sport: t.sport.replace(/\s/g, ""),
                    searchParam: hyphenSeparated(t.name),
                    searchType: t.searchType
                }) : angular.isDefined(t) && null !== t && t.coachId ? r.go("coachSearch.coaches", {
                    coachId: t.coachId,
                    name: t.name,
                    sport: t.sport.replace(/\s/g, ""),
                    searchParam: hyphenSeparated(t.name),
                    searchType: t.searchType
                }) : angular.isDefined(s.params) && null !== s.params && s.params.hasOwnProperty("club") && r.go("coachSearch.coaches", {
                    club: t.club,
                    sport: t.sport,
                    searchParam: hyphenSeparated(t.club),
                    searchType: t.searchType
                })
            }, e.continueShopping = function() {
                angular.isDefined(localStorage.getItem("coachSearchResults")) && e.searchForCoach()
            }, e.slideMenu = function(e) {
                e.stopPropagation(), angular.element(".navlinks").toggleClass("in")
            }, e.hideCartMenu = function() {
                angular.element(".coach-search-mob-cart").hasClass("show") && ($("body").removeClass("cart-list-open"), angular.element(".coach-search-mob-cart").removeClass("show"), angular.element("header").removeClass("header-cart"))
            }, e.openSessions = function(t) {
                r.current.name.indexOf("coachProfile.dashboardView") > -1 ? e.baseState = "coachProfile.dashboardView" : r.current.name.indexOf("reviewCoachProfile.dashboard") > -1 ? e.baseState = "reviewCoachProfile.dashboard" : r.current.name.indexOf("coachProfile.dashboard") > -1 && (e.baseState = "coachProfile.dashboard"), s.$emit("switchTabs", {
                    toState: e.baseState + t
                }), angular.element(".navlinks").toggleClass("in")
            }, e.coachStats = function() {
                s.$emit("getMyStats", !0), angular.element(".navlinks").toggleClass("in")
            }, e.coachReviews = function() {
                s.$emit("getMyReviews", !0), angular.element(".navlinks").toggleClass("in")
            }, e.coachProfile = function() {
                s.$emit("getMyProfile", !0), angular.element(".navlinks").toggleClass("in")
            }, s.userChannel, s.$on("subscribeToChannel", function() {
                d.isClient() ? s.userChannel = "client-channel-" + d.getParentId() : d.isCoach() ? s.userChannel = "coach-channel-" + d.getCoachId() : d.isAdmin() && (s.userChannel = "superuser-channel-" + d.getAdminId()), d.isAdmin() && (r.current.name.indexOf("adminProfile.dashboard") > -1 || r.current.name.indexOf("reviewCoachProfile.dashboard") > -1) && (s.userChannel = "superuser-channel-" + d.getAdminId()), e.userChannel && s.pusher && (s.subscribedchannel = s.pusher.subscribe(s.userChannel))
            }), e.pollmessagesCount = function() {
                s.subscribedchannel.bind("message_count", function(e) {
                    e > 0 && r.current.name.indexOf(".messages") <= -1 && (s.unreadMessages = s.isStriveFarMsgRead ? e : e + 1)
                })
            }
        };
        e.$inject = ["$scope", "$window", "appConfig", "HomeApiService", "StoreService", "$rootScope", "$timeout", "$state", "Coachco_CommonService", "$log", "AuthFactory", "AuthTokenFactory", "$stateParams", "$cookies", "BookingService", "CommonAPIInterfaceService", "AlertService", "ClientProfileInterfaceService", "CoachEnrollmentInterfaceService"], angular.module("Coachco").controller("headerController", e)
    }(),
    function(e) {
        var t = function(t, a, o, n, s, i, r, c, l, d, u) {
            function m(e) {
                for (var a = e.toLowerCase().trim(), n = [], s = 0; s < t.clients.length; s++) {
                    var i = t.clients[s];
                    t.clients[s].role = "client", i.athleteList = "", i.client_id || i.id ? (i.athletes && i.athletes.forEach(function(e, t) {
                        0 === t ? i.athleteList = i.athleteList + e : i.athleteList = i.athleteList + ", " + e
                    }), i.name.toLowerCase().indexOf(a) === -1 && i.email.toLowerCase().indexOf(a) === -1 && i.athleteList.toLowerCase().indexOf(a) === -1 || n.push({
                        value: i.name,
                        obj: i,
                        label: o.trustAsHtml('<div class="row-holder">  <img class="avatar-thumb-nail" src="images/default-msg-avatar.png" alt="default avatar"></img> <div class="col-left">  <strong>' + i.name + '</strong> </div> <div class="col-right text-right text-muted">  <small>' + i.email + '</small> </div> <br><small class="text-ellipsise">' + i.athleteList + "</small>  <div> </div></div>")
                    })) : i.email.toLowerCase().indexOf(a) !== -1 && n.push({
                        value: i.email,
                        obj: i,
                        label: o.trustAsHtml('<div class="row-holder">  <img class="avatar-thumb-nail" src="images/default-msg-avatar.png" alt="default avatar"></img> <div class="col-left" style="width: 75% !important;">  <strong>' + i.email + "</strong> </div></div>")
                    })
                }
                return n
            }
            t.inviteModel = l, console.log(t.inviteModel), t.validemail = !1, t.toIds = [], t.recepients = [], t.getDate = function(e) {
                var t = new Date(e);
                return n.days[t.getDay()] + ", " + n.month[t.getMonth()] + " " + t.getDate()
            }, t.getPlace = function(e) {
                return e.split(",")[0]
            }, t.getAddress = function(e) {
                return e.substr(e.split(",")[0].length + 1)
            }, t.checkRescheduledChangeLocation = function() {
                t.rescheduled = !1, t.locationChange = !1, t.inviteModel.sessionInfo && t.inviteModel.sessionInfo.dates && t.inviteModel.sessionInfo.dates.forEach(function(e) {
                    e.rescheduled && (t.rescheduled = !0), e.location_change && (t.locationChange = !0)
                })
            }, t.checkRescheduledChangeLocation(), t.getTime = function(e) {
                var t = new Date(e),
                    a = t.getHours(),
                    o = t.getMinutes(),
                    n = a >= 12 ? "PM" : "AM";
                return a %= 12, a = a ? a : 12, o = o < 10 ? "0" + o : o, a + ":" + o + " " + n
            }, t.close = function() {
                c.modalClose(a)
            }, t.invitePotentialClient = function(e) {
                r.invitePotentialClient(e, function() {
                    t.submitting = !1, c.modalDone(a, "success")
                }, function() {
                    t.submitting = !1, c.modalDone(a, "error")
                })
            }, t.getClients = function() {
                t.clients = [], d.isClient() ? i.getAssociatedClients(t.inviteModel.clientId, function(e) {
                    e.$resolved && 200 === e.status && (t.clients = e.data)
                }, function(e) {
                    console.log(e)
                }) : d.isCoach() && u.getClientsList(t.inviteModel.coachId, function(e) {
                    e.$resolved && 200 === e.status && (t.clients = e.data)
                }, function(e) {
                    console.log(e)
                })
            }, t.getClients(), t.setEmailSelected = function(a) {
                var o = {
                    id: t.toIds.length,
                    first_name: "",
                    last_name: "",
                    name: a,
                    email: a,
                    status: 2,
                    notes: ""
                };
                t.recepients.push(o), t.toIds.push(a), t.selectedRecepient = null, e.element(".matrix-cell").val(null)
            }, t.checkKeyPressed = function(a) {
                var o = a.which || a.keyCode,
                    n = /^[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/i;
                switch (t.selectedRecepient = e.element(".matrix-cell").val(), t.top = parseInt($(".ac-container").css("top")), $(".ac-container").css("top", t.top - 95), t.$$phase || t.$apply(), o) {
                    case 188:
                    case 32:
                    case 39:
                    case 9:
                    case 13:
                        a.preventDefault(), n.test(t.selectedRecepient) && t.setEmailSelected(t.selectedRecepient)
                }
            }, t.checkKeyUp = function() {
                t.selectedRecepient = e.element(".matrix-cell").val()
            }, t.addToRecepients = function(e) {
                t.recepients.push(e), t.toIds.push(e.email)
            }, t.deleteRecepient = function(e) {
                t.recepients.splice(e, 1), t.toIds.splice(e, 1)
            }, t.ac_options_users = {
                suggest: m,
                on_select: function(a) {
                    isEmailSelected(t.toIds, a.obj.email) || t.addToRecepients(a.obj), t.selectedRecepient = null, e.element(".matrix-cell").val(null)
                }
            }, t.sendInvite = function() {
                var o = /^[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/i,
                    n = {
                        emails: t.toIds.join(),
                        message: e.isDefined(t.inviteModel.message) ? t.inviteModel.message.replace(/\r?\n/g, "\n") : ""
                    };
                t.$$phase || t.$apply(), null !== t.selectedRecepient && o.test(t.selectedRecepient) && (0 === t.toIds.length ? n.emails = t.selectedRecepient : (t.toIds.push(t.selectedRecepient), n.emails = t.toIds.join())), t.submitting = !0, "inviteClient" === t.inviteModel.context ? (n.coach_id = t.inviteModel.coachId, e.isDefined(t.inviteModel.sessionInfo) && null !== t.inviteModel.sessionInfo ? r.inviteClient(t.inviteModel.sessionInfo.coachTrainingSessionId, n, function() {
                    t.submitting = !1, c.modalDone(a, "success")
                }, function() {
                    t.submitting = !1, c.modalDone(a, "error")
                }) : t.invitePotentialClient(n)) : "requestReview" === t.inviteModel.context ? (n.coach_id = t.inviteModel.coachId, u.requestReview(t.inviteModel.coachId, n, function() {
                    t.submitting = !1, c.modalDone(a, "success")
                }, function() {
                    t.submitting = !1, c.modalDone(a, "error")
                })) : "inviteFriend" === t.inviteModel.context && (n.client_id = t.inviteModel.clientId, t.invitePotentialClient(n))
            }
        };
        t.$inject = ["$scope", "$uibModalInstance", "$sce", "appConfig", "AlertService", "ClientProfileInterfaceService", "CommonAPIInterfaceService", "Coachco_CommonService", "inviteModel", "AuthFactory", "CoachProfileInterfaceService"], e.module("Coachco").controller("InviteClientController", t)
    }(angular),
    function() {
        var e = function(e, t, a, o, n, s, i) {
            e.recepientName = i.recepientName, e.message = i.message, e.sendingMessage = !1, e.close = function() {
                a.closeDialog(o)
            }, e.sendMessage = function(t) {
                if (e.sendingMessage = !1, angular.isDefined(e.message) && null !== e.message && "" !== e.message) {
                    e.sendingMessage = !0;
                    var n = {
                        message: {
                            sender_id: i.fromId,
                            role: i.role,
                            to: [{
                                receiver_id: i.toId,
                                role: i.toRole
                            }],
                            text: angular.isDefined(e.message) ? e.message.replace(/\r?\n/g, "<br />") : ""
                        }
                    };
                    s.postMessage(n, function() {
                        e.sendingMessage = !1, a.doneDialog(o, t)
                    }, function(t) {
                        e.sendingMessage = !1, console.log(t)
                    })
                } else e.sendingMessage = !1, e.errorMsg = "Please enter the message to send."
            }, e.cancel = function(e) {
                a.doneDialog(o, e)
            }
        };
        e.$inject = ["$scope", "$rootScope", "CreateMessageService", "$uibModalInstance", "$timeout", "CommonAPIInterfaceService", "messageModel"], angular.module("Coachco").controller("MessageController", e)
    }(angular),
    function() {
        var e = function(e, t, a) {
            e.close = function() {
                a.modalClose(t)
            }, e.done = function(e) {
                a.modalDone(t, e)
            }
        };
        e.$inject = ["$scope", "$uibModalInstance", "Coachco_CommonService"], angular.module("Coachco").controller("ModalController", e)
    }(angular),
    function(e) {
        var t = function(t, a, o, n, s, i, r) {
            t.baseURL = a.baseUrl, t.dynamicUrls = [], t.getCitiesCoachesList = function() {
                n.getCitiesCoachesList().success(function(e) {
                    t.cities = e, t.createCityBasedCoachesURLs()
                })
            }, t.fetchActivityDetails = function() {
                t.activities = [], s.getCoachActivities(function(e) {
                    e.$resolved && 200 === e.status && e.data.length > 0 && (t.activities = e.data, t.getCitiesCoachesList())
                }, function(e) {
                    var t = "Error!",
                        a = e.statusText;
                    AlertService.showAlert(t, a)
                })
            }, t.fetchActivityDetails(), t.dynamicPlaceUrls = [], t.createCityBasedCoachesURLs = function() {
                t.activities.forEach(function(e) {
                    var a = {
                        name: e.activity + " Coaches in Colorado | Strivefar",
                        url: "coaches/co/" + hyphenSeparated(e.activity) + "-lessons"
                    };
                    t.dynamicPlaceUrls.push(a)
                }), t.cities.forEach(function(e) {
                    var a = {
                        name: e.sport + " Coaches in " + e.city + ", Colorado | Strivefar",
                        url: "coaches/co/" + e.city_url + "/" + e.sport_url + "-lessons"
                    };
                    t.dynamicPlaceUrls.push(a)
                })
            }, t.createLinksFromZip = function() {
                t.prefetchZipCodeList.forEach(function(e) {
                    var a = {
                            name: "View Recommended Soccer Coaches, " + e + " | Strivefar",
                            url: "coaches-search/" + e + "/Soccer",
                            stateParams: {
                                zip: e,
                                sport: "Soccer",
                                searchParam: e,
                                searchType: null
                            }
                        },
                        o = {
                            name: "View Recommended Basketball Coaches, " + e + " | Strivefar",
                            url: "coaches-search/" + e + "/Basketball",
                            stateParams: {
                                zip: e,
                                sport: "Basketball",
                                searchParam: e,
                                searchType: null
                            }
                        };
                    t.dynamicUrls.push(a), t.dynamicUrls.push(o)
                })
            }, t.createLinksFromCoaches = function() {
                t.prefetchCoachesList.forEach(function(e) {
                    if (e.activity) {
                        var a = {
                            name: e.coach_name + ", Private " + e.activity.capitalize() + " Coach | Strivefar",
                            url: "coaches-search/" + hyphenSeparated(e.coach_name) + "/" + hyphenSeparated(e.activity),
                            stateParams: {
                                name: e.coach_name,
                                sport: hyphenSeparated(e.activity),
                                searchParam: hyphenSeparated(e.coach_name),
                                searchType: "coach"
                            }
                        };
                        t.dynamicUrls.push(a)
                    }
                })
            }, t.createLinksFromClubs = function() {
                t.prefetchClubList.forEach(function(e) {
                    if (e.sport) {
                        var a = {
                            name: e.sport.capitalize() + " Coaches, " + e.name + " | Strivefar",
                            url: "coaches-search/" + hyphenSeparated(e.name) + "/" + hyphenSeparated(e.sport),
                            stateParams: {
                                club: e.name,
                                sport: hyphenSeparated(e.sport),
                                searchParam: hyphenSeparated(e.name),
                                searchType: "club"
                            }
                        };
                        t.dynamicUrls.push(a)
                    }
                })
            }, t.prefetchZipCodes = function() {
                t.prefetchZipCodeList = JSON.parse(localStorage.getItem("ZipCodeList")), e.isUndefined(t.prefetchZipCodeList) || null === t.prefetchZipCodeList || 0 === t.prefetchZipCodeList.length ? o.getzipCodeList().success(function(e) {
                    t.prefetchZipCodeList = e, t.createLinksFromZip(), localStorage.setItem("ZipCodeList", JSON.stringify(t.prefetchZipCodeList))
                }) : t.createLinksFromZip()
            }, t.prefetchCoachesList = function() {
                i.getCoachesList(function(e) {
                    t.prefetchCoachesList = e.data, t.createLinksFromCoaches()
                })
            }, t.prefetchCoachesList(), t.prefetchClubList = function() {
                r.getAllCoachClubs(!0, function(e) {
                    e.$resolved && 200 === e.status && e.data.length > 0 && (t.prefetchClubList = e.data, t.createLinksFromClubs())
                })
            }, t.prefetchClubList()
        };
        t.$inject = ["$scope", "urlConfig", "HomeApiService", "CoachProfileService", "ActivitiesService", "CoachEnrollmentInterfaceService", "CommonAPIInterfaceService"], e.module("Coachco").controller("sitemapController", t)
    }(angular),
    function(e) {
        var t = function(t, a, o, n, s, i, r, c) {
            t.loader = !1, t.croppedDataUrl = "", t.photoModel = s, t.picFile = t.photoModel.picFile, t.close = function() {
                a.modalClose(o, t.photoModel)
            }, t.cropImage = function(e, s) {
                if ("" !== s && null !== s) t.loader = !0, t.isDuplicate(t.photoModel.imageArray, e) ? (t.photoModel.duplicate = !0, t.photoModel.uploadStatus = !1, a.modalDone(o, t.photoModel)) : (t.photoModel.croppedImage = t.photoModel.imageArray[t.photoModel.imageArray.length - 1], t.photoModel.duplicate = !1, t.uploadImage(e, s.name, t.photoModel.postURL, function(e) {
                    if (200 === e.status) t.loader = !1, t.photoModel.profile_image = e.data.profile_image, t.photoModel.uploadStatus = !0, t.photoModel.imageArray = e.data.image_paths, t.photoModel.picFile = t.picFile, a.modalDone(o, t.photoModel);
                    else {
                        t.loader = !1;
                        var s = "Error!",
                            i = "There is some error with uploading the image";
                        n.showAlert(s, i)
                    }
                }, function() {
                    t.photoModel.profile_image = null, t.photoModel.uploadStatus = !1, a.modalDone(o, t.photoModel)
                }));
                else {
                    var i = "Warning!",
                        r = "Please select a photo to upload";
                    n.showAlert(i, r)
                }
            }, t.isDuplicate = function(e, t) {
                var a;
                for (a = 0; a < e.length; a++)
                    if (e[a] === t) return !0;
                return !1
            }, t.uploadImage = function(a, o, s, i, l) {
                if (null === o || "" === o || e.isUndefined(o)) {
                    var d = "Warning!",
                        u = "Please select a photo to upload";
                    n.showAlert(d, u)
                } else {
                    var m, h = r.dataUrltoBlob(a, o);
                    t.photoModel.isClient ? m = {
                        athlete: {
                            pictures_attributes: [{
                                image: h
                            }]
                        }
                    } : t.photoModel.isCoach && (m = {
                        coach: {
                            pictures_attributes: [{
                                image: h
                            }]
                        }
                    }), r.upload({
                        url: s,
                        method: "PUT",
                        data: m
                    }).then(function(e) {
                        c(function() {
                            t.result = e.data, i(e)
                        })
                    }, function(e) {
                        e.status > 0 && (t.errorMsg = e.status + ": " + e.data), l(e)
                    }, function(e) {
                        t.progress = parseInt(100 * e.loaded / e.total)
                    }).catch(function(e) {
                        if (500 !== e.status) l(e);
                        else {
                            var t = "Error!",
                                a = "Some error with the communication. Try again!";
                            n.showAlert(t, a), l(e)
                        }
                    })
                }
            }
        };
        t.$inject = ["$scope", "UploadPhotoService", "$uibModalInstance", "AlertService", "photoModel", "urlConfig", "Upload", "$timeout"], e.module("Coachco").controller("uploadPhotoController", t)
    }(angular),
    function(e) {
        function t() {
            return function(e, t, a) {
                t.autocomplete({
                    source: e[a.uiItems],
                    select: function() {
                        $timeout(function() {
                            t.trigger("input")
                        }, 0)
                    }
                })
            }
        }
        e.module("Coachco").directive("autoComplete", t)
    }(angular), angular.module("Coachco").directive("averageStarRating", function() {
    return {
        restrict: "EA",
        template: "<div class='average-rating-container'>  <ul class='rating background' class='readonly'>    <li ng-repeat='star in stars' class='star'>      <span class=\"glyphicon glyphicon-star\"></span>    </li>  </ul>  <ul class='rating foreground' class='readonly' ng-attr-style='width:{{filledInStarsContainerWidth}}%'>    <li ng-repeat='star in stars' class='star filled'>      <span class=\"glyphicon glyphicon-star\"></span>    </li>  </ul></div>",
        scope: {
            averageRatingValue: "=ngModel",
            max: "=?"
        },
        link: function(e) {
            function t() {
                e.stars = [];
                for (var t = 0; t < e.max; t++) e.stars.push({});
                var a = 100;
                e.filledInStarsContainerWidth = e.averageRatingValue / e.max * a
            }
            void 0 === e.max && (e.max = 5), t(), e.$watch("averageRatingValue", function(e, a) {
                a && t()
            })
        }
    }
}),
    function(e) {
        function t() {
            function t(t, o, n, s) {
                s.$parsers.push(function(e) {
                    function t(e) {
                        return e = e.trim(), e.substring(0, 1).toUpperCase() + e.substring(1);
                    }
                    if (void 0 === e) return "";
                    var o = e.replace(/\D/g, "");
                    if ("type" === a) {
                        if (e.indexOf(".") !== -1) {
                            var n, i;
                            for (n = e.split("."), i = 0; i < n.length; i++) n[i] = t(n[i]);
                            for (o = n[0], i = 1; i < n.length; i++) o = isNaN(o.charAt(o.length - 1)) && isNaN(n[i].charAt(0)) ? o + ". " + n[i] : o + "." + n[i]
                        } else o = t(e);
                        o !== e && (s.$setViewValue(o), s.$render())
                    }
                    return o
                }), e.element(o).on("keydown", function(e) {
                    a = 8 === e.keyCode ? "delete" : 46 === e.keyCode ? "delete" : 32 === e.keyCode ? "delete" : "type"
                })
            }
            var a = "type",
                o = {
                    require: "ngModel",
                    link: t,
                    restrict: "A"
                };
            return o
        }
        e.module("Coachco").directive("capitalize", t)
    }(angular),
    function(e) {
        function t() {
            return {
                restrict: "A",
                require: "ngModel",
                link: function(t, a, o, n) {
                    n.$validators.zipcode = function(t) {
                        var a = /^\d{5}(?:[-\s]\d{4})?$/,
                            o = /^[a-zA-Z- ']*$/;
                        return !e.isDefined(t) || null === t || (isNaN(parseInt(t.charAt(0))) ? !isNaN(parseInt(t.charAt(0))) || o.test(t) : a.test(t))
                    }
                }
            }
        }
        e.module("Coachco").directive("validateCoachSearch", t)
    }(angular),
    function(e) {
        function t() {
            function t(t, o, n, s) {
                s.$parsers.push(function(e) {
                    if (void 0 === e) return "";
                    var t = e.replace(/\D/g, "");
                    if (t = t.substring(0, 8), "type" === a) {
                        var o = t.length;
                        t = 0 === o ? t : o < 2 ? t : o < 4 ? t.substring(0, 2) + "/" + t.substring(2, 4) : t.substring(0, 2) + "/" + t.substring(2, 4) + "/" + t.substring(4, 8), t !== e && (s.$setViewValue(t), s.$render())
                    }
                    return t
                }), e.element(o).on("keydown", function(e) {
                    a = 8 === e.keyCode ? "delete" : 46 === e.keyCode ? "delete" : "type"
                })
            }
            var o = {
                require: "ngModel",
                link: t,
                restrict: "A"
            };
            return o
        }
        var a = "type";
        e.module("Coachco").directive("dateFormat", t)
    }(angular), angular.module("Coachco").directive("disableEnterKey", function() {
    return function(e, t) {
        t.bind("keydown keypress", function(e) {
            var t = e.which || e.keyCode;
            13 === t && e.preventDefault()
        })
    }
}),
    function(e) {
        var t = function(e, t) {
            var a = function(e, a, o, n) {
                n.$parsers.push(function() {
                    var e = a.val(),
                        o = /^[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/i;
                    if (o.test(e)) {
                        n.$setValidity("pattern", !0);
                        var s = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                        if (s.test(e)) return t.validateEmail({
                            email: e
                        }, function(e) {
                            e.$resolved && 200 === e.status ? n.$setValidity("duplication", !0) : n.$setValidity("duplication", !1)
                        }, function(e) {
                            409 === e.status ? n.$setValidity("duplication", !1) : n.$setValidity("duplication", !0)
                        }), e
                    } else n.$setValidity("pattern", !1)
                })
            };
            return {
                require: "ngModel",
                link: a,
                restrict: "A"
            }
        };
        t.$inject = ["$q", "CommonAPIInterfaceService"], e.module("Coachco").directive("uniqueEmailValidate", t)
    }(angular),
    function(e) {
        var t = function() {
            var e = function(e, t, a, o) {
                function n(e) {
                    var t = /^[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/i;
                    return !!t.test(e)
                }
                o.$parsers.push(function() {
                    var e = t.val(),
                        a = !0;
                    if ("" !== e && null !== e && "" !== e) {
                        for (var s = e.split(","), i = 0; i < s.length; i++) "" !== s[i] && "" !== s[i] && (n(s[i].trim()) || (a = !1));
                        o.$setValidity("pattern", a)
                    } else o.$setValidity("pattern", a);
                    return e
                })
            };
            return {
                require: "ngModel",
                link: e,
                restrict: "A"
            }
        };
        e.module("Coachco").directive("emailsSeparatedByCommaValidate", t)
    }(angular),
    function(e) {
        function t() {
            return {
                restrict: "A",
                link: function(e, t, a) {
                    t.addClass("ng-hide-remove"), t.on("load", function() {
                        t.addClass("ng-hide-add")
                    })
                }
            }
        }
        e.module("Coachco").directive("fadeIn", t)
    }(angular),
function(e) {
    function t(e) {
        return {
            link: function(t, a, o) {
                e(function() {
                    a.flexslider({
                        animation: "slide",
                        useCSS: !1,
                        easing: "swing"
                    })
                })
            }
        }
    }
    t.$inject = ["$timeout"], e.module("Coachco").directive("flexslider1", t)
}(angular),
function(e) {
    function t(e, t) {
        var a = e("currency");
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(e, o, n, s) {
                function i(e) {
                    if (s.$modelValue) {
                        var t = e ? s.$modelValue : a(s.$modelValue);
                        r.value = t
                    }
                }
                o.bind("blur", function() {
                    i(!1)
                }), o.bind("focus", function() {
                    i(!0)
                });
                var r = o[0];
                s && r.hasOwnProperty("value") && i(r === t.document.activeElement)
            }
        }
    }
    t.$inject = ["$filter", "$window"], e.module("Coachco").directive("formatOnBlur", t)
}(angular),
function(e) {
    function t() {
        return {
            required: "ngBindHtml",
            restrict: "A",
            priority: 100,
            link: function(e, t) {
                e.hasEllipsis = !1, e.$watch(t.html(), function() {
                    e.hasEllipsis || (e.hasEllipsis = !0, t.ellipsis())
                })
            }
        }
    }
    e.module("Coachco").directive("htmlEllipsis", t)
}(angular),
function(e) {
    var t = function(e, t) {
        var a = function(e, a) {
            a.bind("change", function(t) {
                var a = (t.currentTarget.files[0], new FileReader);
                a.onload = function(t) {
                    var a = new Image;
                    a.onload = function() {
                        canvas.width = a.width, canvas.height = a.height, ctx.drawImage(a, 0, 0)
                    }, e.$apply(function(e) {
                        e.uploadPhoto(t.target.files[0])
                    })
                }, a.readAsDataURL(t.target.files[0])
            }), e.uploadPhoto = function(a) {
                e.myImage = a;
                var o = "partials/shared/views/modals/shared.uploadPhoto.html",
                    n = "model-createmessage",
                    s = "uploadPhotoController";
                t.modalOpen(e.photo, o, n, s, function(t) {
                    e.photo.croppedImage = t.$$state.value.croppedImage, e.photo.imageArray = t.$$state.value.imageArray, e.photo.duplicate = t.$$state.value.duplicate
                })
            }
        };
        return {
            link: a,
            restrict: "A",
            scope: {
                photo: "="
            }
        }
    };
    t.$inject = ["$timeout", "UploadPhotoService"], e.module("Coachco").directive("fileUploadNew", t)
}(angular), angular.module("Coachco").directive("ngEnterKey", function() {
    return function(e, t, a) {
        t.bind("keydown keypress", function(t) {
            var o = t.which || t.keyCode;
            13 === o && (e.$apply(function() {
                e.$eval(a.ngEnterKey)
            }), t.preventDefault())
        })
    }
}),
function(e) {
    function t() {
        function e(e, t, a, o) {
            o.$parsers.push(function(e) {
                if (void 0 === e) return "";
                var t = e.replace(/[^0-9]/g, "");
                return t !== e && (o.$setViewValue(t), o.$render()), t
            })
        }
        var t = {
            require: "ngModel",
            link: e,
            restrict: "A"
        };
        return t
    }
    e.module("Coachco").directive("numbersOnly", t)
}(angular),
function(e) {
    function t() {
        function e(e, t, a, o) {
            o && o.$parsers.push(function(e) {
                var t = e.replace(/[^0-9]+/g, "");
                return parseInt(t) > parseInt(a.rangeMax) && (t = a.rangeMax), parseInt(t) < parseInt(a.rangeMin) && (t = a.rangeMin), e !== t && (o.$setViewValue(t), o.$render()), t
            })
        }
        var t = {
            require: "ngModel",
            link: e,
            restrict: "A"
        };
        return t
    }
    e.module("Coachco").directive("range", t)
}(angular),
function(e) {
    var t = function(e) {
        var t = function(t, a, o, n) {
            t.$last === !0 && e(function() {
                t.$emit(o.onFinishRender)
            }, 500)
        };
        return {
            link: t,
            restrict: "A"
        }
    };
    t.$inject = ["$timeout"], e.module("Coachco").directive("onFinishRender", t)
}(angular),
function(e) {
    function t() {
        return {
            restrict: "A",
            link: function(e, t, a) {
                t.bind("load", function() {
                    e.$apply(a.imageOnload)
                })
            }
        }
    }
    e.module("Coachco").directive("imageOnload", t)
}(angular),
function(e) {
    function t() {
        function t(t, o, n, s) {
            s.$parsers.push(function(e) {
                if (void 0 === e) return "";
                var t = e.replace(/\D/g, "");
                if (t = t.substring(0, 10), "type" === a) {
                    var o = t.length;
                    0 === o ? t = t : o >= 10 && (t = "(" + t.substring(0, 3) + ") " + t.substring(3, 6) + " - " + t.substring(6, 10), t !== e && (s.$setViewValue(t), s.$render()))
                }
                return t
            }), e.element(o).on("keydown", function(e) {
                a = 8 === e.keyCode ? "delete" : 46 === e.keyCode ? "delete" : "type"
            })
        }
        var o = {
            require: "ngModel",
            link: t,
            restrict: "A"
        };
        return o
    }
    var a = "type";
    e.module("Coachco").directive("phoneNumbersFormat", t)
}(angular),
function(e) {
    function t() {
        return {
            restrict: "A",
            link: function(e, t) {
                t.on("click", function() {
                    $("body").animate({
                        scrollTop: t.offset().top
                    }, "slow")
                })
            }
        }
    }
    e.module("Coachco").directive("scrollToElement", t)
}(angular),
function(e) {
    function t() {
        return {
            restrict: "A",
            link: function(e, t, a) {
                e.$watch(a.scrollToTop, function() {
                    t[0].scrollTop = t[0].scrollHeight
                })
            }
        }
    }
    e.module("Coachco").directive("scrollToBottom", t)
}(angular), angular.module("Coachco").directive("starRating", function() {
    return {
        restrict: "EA",
        template: '<ul class="rating" ng-class="{readonly: readonly}">   <li ng-repeat="star in stars" ng-class="{filled: star.filled}" ng-click="toggle($index)"><span class="glyphicon glyphicon-star"></span></li></ul>',
        scope: {
            ratingValue: "=",
            max: "=",
            initValue: "=",
            readOnly: "=",
            onRatingSelected: "&"
        },
        link: function(e) {
            var t = function() {
                e.stars = [];
                for (var t = 0; t < e.max; t++) e.stars.push({
                    filled: t < e.ratingValue
                })
            };
            e.toggle = function(t) {
                e.readOnly || (e.ratingValue = t + 1, e.onRatingSelected({
                    rating: t + 1
                }))
            }, t(), e.$watch("ratingValue", function() {
                t()
            })
        }
    }
}),
function() {
    var e = function(e, t, a) {
        var o = new Firebase("https://uxalpha-strivefar.firebaseio.com/coaches");
        return {
            getIndividualCoachSessions: function(t, a) {
                var n = e(o.child(t.id.$oid).orderByChild("display").equalTo("show"));
                n.$loaded().then(function(e) {
                    a(null, e)
                }).catch(function(e) {
                    a(e)
                })
            },
            getGroupCoachSessions: function(t, a) {
                var n = e(o.child(t.id.$oid).orderByChild("joinGroupStatus").equalTo("available"));
                n.$loaded().then(function(e) {
                    a(null, e)
                }).catch(function(e) {
                    a(e)
                })
            },
            getCoachOpenSessions: function(t, a) {
                var n = e(o.child(t).orderByChild("status").equalTo("available"));
                n.$loaded().then(function(e) {
                    a(null, e)
                }).catch(function(e) {
                    a(e)
                })
            },
            getCoachSessions: function(t, a) {
                var n = e(o.child(t));
                n.$loaded().then(function(e) {
                    a(null, e)
                }).catch(function(e) {
                    a(e)
                })
            },
            getCoachSessionsByStart: function(t, a, n, s) {
                var i = e(o.child(t).orderByChild("start").startAt(a).endAt(n));
                i.$loaded().then(function(e) {
                    s(null, e)
                }).catch(function(e) {
                    s(e)
                })
            },
            getCoachSessionsByEnd: function(t, a, n, s) {
                var i = e(o.child(t).orderByChild("end").startAt(a).endAt(n));
                i.$loaded().then(function(e) {
                    s(null, e)
                }).catch(function(e) {
                    s(e)
                })
            }
        }
    };
    e.$inject = ["$firebaseArray", "$timeout", "$firebaseObject"], angular.module("Coachco").factory("SessionService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        return e(t.ccUrl + "messages/:message_id", {
            message_id: "@message_id"
        }, {
            postMessage: {
                method: "POST",
                transformResponse: a.transformResponse
            },
            updateMessage: {
                method: "PUT",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        })
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("MessageService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        return e(t.ccUrl + "messages/:message_id/reset", {
            message_id: "@message_id"
        }, {
            resetMessageCount: {
                method: "PUT",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        })
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("MessageResetService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        return e(t.ccUrl + "messages/:user_id/count", {
            user_id: "@user_id"
        }, {
            pollForNewMessages: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        })
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("MessagePollingService", e)
}(angular),
function() {
    var e = function(e, t) {
        var a = e(t.getData("ImageURL"), {
            id: "@id",
            image_id: "@image_id"
        }, {
            deleteImage: {
                method: "DELETE",
                transformResponse: ResponseHandlerService.transformResponse
            },
            uploadImage: {
                method: "PUT",
                transformResponse: ResponseHandlerService.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return a
    };
    e.$inject = ["$resource", "StoreService"], angular.module("Coachco").factory("UploadImageService", e)
}(angular),
function() {
    var e = function(e, t, a, o) {
        return e(a.ccUrl + "validations/email", {}, {
            validateEmail: {
                method: "POST",
                transformResponse: o.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        })
    };
    e.$inject = ["$resource", "StoreService", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("EmailService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        return e(t.ccUrl + "service_fee", {}, {
            getServiceFee: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        })
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("ServcieFeeService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        return e(t.ccUrl + "initialize/:user_id", {
            user_id: "@user_id"
        }, {
            getToken: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        })
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("TokenService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "dummy/clients/:client_id", {
            client_id: "@client_id"
        }, {
            updateAccount: {
                method: "PUT",
                transformResponse: a.transformResponse
            },
            deleteAccount: {
                method: "DELETE"
            },
            getClientsList: {
                method: "GET",
                transformResponse: a.transformResponse
            },
            getClientDetails: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("DummyClientService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "activities", {}, {
            getCoachActivities: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("SportsService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "dashboard/coaches/:coachId/payments", {
            coachId: "@coachId"
        }, {
            getPaymentsNotification: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("CoachPaymentsNotificationService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "session_invite/:coach_training_session_id", {
            coach_training_session_id: "@coach_training_session_id"
        }, {
            inviteClient: {
                method: "POST",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("InviteClientService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "invites", {}, {
            inviteClient: {
                method: "POST",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("InvitePotentialClientService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "password_reset", {}, {
            sendResetEmail: {
                method: "POST",
                transformResponse: a.transformResponse
            },
            resetEmail: {
                method: "PUT",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("ResetPWDService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "coaches?city=:city&state=:state&sport=:sport", {
            city: "@city",
            state: "@state",
            sport: "@sport"
        }, {
            getCoachesList: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("SearchCoachesWithCityNSportService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "coaches?state=:state&sport=:sport", {
            state: "@state",
            sport: "@sport"
        }, {
            getCoachesList: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("SearchCoachesWithStateSportService", e)
}(angular),
function() {
    var e = function(e, t, a, o) {
        return e(a.ccUrl + "subscribe?email=:email", {
            email: "@email"
        }, {
            subscribeEmail: {
                method: "POST",
                transformResponse: o.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        })
    };
    e.$inject = ["$resource", "StoreService", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("SubscribeEmailService", e)
}(angular),
function() {
    var e = function(e, t, a, o) {
        return e(a.ccUrl + "session_planner", {}, {
            sendSessionPlanner: {
                method: "POST",
                transformResponse: o.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        })
    };
    e.$inject = ["$resource", "StoreService", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("SessionPlannerService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "clubs?sport=:sport&all=:all", {
            sport: "@sport",
            all: "@all"
        }, {
            getCoachClubs: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("ClubService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "clubs?all=true", {}, {
            getAllClubs: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("AllClubsService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "clubs?approved=true", {}, {
            getApprovedClubs: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("ApprovedClubsService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "clubs?coaches=:coaches", {
            coaches: "@coaches"
        }, {
            getCoachClubs: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("CoachClubsService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "coaches/:id", {
            id: "@id"
        }, {
            createAccount: {
                method: "POST",
                transformResponse: a.transformResponse
            },
            updateAccount: {
                method: "PUT",
                transformResponse: a.transformResponse
            },
            deleteAccount: {
                method: "DELETE"
            },
            getAccountDetails: {
                method: "GET",
                transformResponse: a.transformResponse
            },
            getCoachesList: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("CoachEnrollmentService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "coaches/:id/image/:image_id", {
            id: "@id",
            image_id: "@image_id"
        }, {
            uploadImage: {
                method: "DELETE",
                transformResponse: a.transformResponse
            },
            deleteImage: {
                method: "DELETE",
                transformResponse: a.transformResponse
            },
            setProfileImage: {
                method: "PUT",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("ImageService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "activities", {}, {
            getCoachActivities: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("ActivitiesService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        return e(t.ccUrl + "registration", {}, {
            registerCoach: {
                method: "POST",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        })
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("RegistrationService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "coaches/:id/clients/:client_id", {
            id: "@id",
            client_id: "@client_id"
        }, {
            updateAccount: {
                method: "PUT",
                transformResponse: a.transformResponse
            },
            deleteAccount: {
                method: "DELETE"
            },
            getClientsList: {
                method: "GET",
                transformResponse: a.transformResponse
            },
            getClientDetails: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("CoachProfileAPIService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "coaches/:coach_id/clients/:client_id/athletes/:athlete_id", {
            coach_id: "@coach_id",
            client_id: "@client_id",
            athlete_id: "@athlete_id"
        }, {
            updateAthlete: {
                method: "PUT",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("CoachClientAthleteService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "coaches/:coach_id/clients/:client_id/athletes/:athlete_id/schedule", {
            coach_id: "@coach_id",
            client_id: "@client_id",
            athlete_id: "@athlete_id"
        }, {
            getAthleteSessions: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("CoachClientAthleteSessionService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "coaches/:coach_id/athletes", {
            coach_id: "@coach_id"
        }, {
            getCoachAthletes: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("CoachAthletesService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "coaches/:coach_id/stats", {
            coach_id: "@coach_id"
        }, {
            getCoachStats: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("CoachStatsService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "coaches/:coach_id/messages", {
            coach_id: "@coach_id"
        }, {
            getCoachMessages: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("CoachMessageService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "coaches/:coach_id/coach_sessions/:id", {
            coach_id: "@coach_id",
            id: "@id"
        }, {
            createSession: {
                method: "POST",
                transformResponse: a.transformResponse
            },
            getSessionData: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("SessionCreateService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "coaches/:coach_id/recurring_sessions", {
            coach_id: "@coach_id"
        }, {
            createRecurringSession: {
                method: "POST",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("createRecurringService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "booked_sessions/:booked_session_id", {
            booked_session_id: "@booked_session_id",
            coach_id: "@coach_id",
            reason_for_cancellation: "@reason_for_cancellation"
        }, {
            rescheduleSession: {
                method: "PUT",
                transformResponse: a.transformResponse
            },
            getSessionDetails: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("ScheduleService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "coaches/:coach_id/training_sessions/:coach_training_session_id", {
            coach_training_session_id: "@coach_training_session_id",
            coach_id: "@coach_id"
        }, {
            rescheduleSession: {
                method: "PUT",
                transformResponse: a.transformResponse
            },
            getSessionDetails: {
                method: "GET",
                transformResponse: a.transformResponse
            },
            cancelSession: {
                method: "DELETE",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("BookedSessionsService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "coaches/:coach_id/session_complete", {
            coach_id: "@coach_id"
        }, {
            completeSession: {
                method: "POST",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("SessionUpdateService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "coaches/:coach_id/commission", {
            coach_id: "@coach_id"
        }, {
            updateCommission: {
                method: "PUT",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("CommissionUpdateService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        return e(t.ccUrl + "coaches/:user_id/review_coach/:coach_id/reviews:review_id", {
            coach_id: "@coach_id",
            user_id: "@user_id",
            review_id: "@review_id"
        }, {
            postReview: {
                method: "POST",
                transformResponse: a.transformResponse
            },
            getReviews: {
                method: "GET",
                transformResponse: a.transformResponse
            },
            getReview: {
                method: "GET",
                transformResponse: a.transformResponse
            },
            updateReview: {
                method: "PUT",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        })
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("CoachReviewService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        return e(t.ccUrl + "coaches/:coach_id/reviews:review_id", {
            coach_id: "@coach_id",
            review_id: "@review_id"
        }, {
            postReview: {
                method: "POST",
                transformResponse: a.transformResponse
            },
            getReviews: {
                method: "GET",
                transformResponse: a.transformResponse
            },
            getReview: {
                method: "GET",
                transformResponse: a.transformResponse
            },
            updateReview: {
                method: "PUT",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        })
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("CoachSelfReviewService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "coach_payments/:coach_id?view=:display_property", {
            coach_id: "@coach_id",
            display_property: "@display_property"
        }, {
            getPayments: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("CoachPaymentsService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "booked_sessions?coach_id=:coach_id&:display_property=:display_property_value&:display_property2=:display_property_value2", {
            coach_id: "@coach_id",
            display_property: "@display_property",
            display_property_value: "@display_property_value"
        }, {
            getPaymentDetails: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("CoachPaymentDetailsService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "coach_payments/:coach_id/notify", {
            coach_id: "@coach_id"
        }, {
            updatePayment: {
                method: "PUT",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("CoachPaymentsUpdateService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "coaches/:coach_id/request_reviews", {
            coach_id: "@coach_id"
        }, {
            sendReviewRequest: {
                method: "POST",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("RequestReviewService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "clients/:id", {
            id: "@id"
        }, {
            getAllClients: {
                method: "GET",
                transformResponse: a.transformResponse
            },
            getClientDetails: {
                method: "GET",
                transformResponse: a.transformResponse
            },
            updateProfile: {
                method: "PUT",
                transformResponse: a.transformResponse
            },
            deleteAccount: {
                method: "DELETE"
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("ClientProfileService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "clients/:id/coaches", {
            id: "@id"
        }, {
            getClientCoachDetails: {
                method: "GET",
                transformResponse: a.transformResponse
            },
            updateProfile: {
                method: "PUT",
                transformResponse: a.transformResponse
            },
            deleteAccount: {
                method: "DELETE"
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("ClientCoachService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "clients/:client_id/athletes/:athlete_id/image/:image_id", {
            client_id: "@client_id",
            athlete_id: "@athlete_id",
            image_id: "@image_id"
        }, {
            uploadImage: {
                method: "DELETE",
                transformResponse: a.transformResponse
            },
            deleteImage: {
                method: "DELETE",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("AthleteImageService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "clients/:id/athletes/:athlete_id", {
            id: "@id",
            athlete_id: "@athlete_id"
        }, {
            getClientAthletes: {
                method: "GET",
                transformResponse: a.transformResponse
            },
            addAthlete: {
                method: "POST",
                transformResponse: a.transformResponse
            },
            updateAthlete: {
                method: "PUT",
                transformResponse: a.transformResponse
            },
            deleteAthlete: {
                method: "DELETE",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("ClientAthletesService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "clients/:id/schedule", {
            id: "@id"
        }, {
            getSessions: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("ClientSessionsService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "clients/:client_id/friends", {
            client_id: "@client_id"
        }, {
            sendInvite: {
                method: "POST",
                transformResponse: a.transformResponse
            },
            getFriends: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("ClientFriendsService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "clients/:client_id/associated_clients", {
            client_id: "@client_id"
        }, {
            getAssociatedClients: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("ClientClientsService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        return e(t.ccUrl + "clients/:client_id/feedbacks?booked_session_id=:booked_session_id", {
            client_id: "@client_id",
            booked_session_id: "@booked_session_id"
        }, {
            getFeedBack: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        })
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("FeedbackService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        return e(t.ccUrl + "bookings/:booking_id/client_payments/:payment_id", {
            booking_id: "@booking_id",
            payment_id: "@payment_id"
        }, {
            getPaymentInfo: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        })
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("PaymentService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        return e(t.ccUrl + "payment_method?client_id=:client_id", {
            client_id: "@client_id"
        }, {
            deleteCreditCard: {
                method: "DELETE",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        })
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("CreditCardService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        return e(t.ccUrl + "payment_method", {}, {
            addCreditCard: {
                method: "POST",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        })
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("AddCreditCardService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "clients/:client_id/messages", {
            client_id: "@client_id"
        }, {
            getClientMessages: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("ClientMessageService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "clients/:client_id/invited_sessions/:session_id", {
            client_id: "@client_id",
            session_id: "@session_id"
        }, {
            getInvitedSessionData: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("SessionInvitesService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "clients/:client_id/invited_recurring_sessions/:session_id", {
            client_id: "@client_id",
            session_id: "@session_id"
        }, {
            getInvitedSessionData: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("RecurringSessionInvitesService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "clients/:client_id/session_invite/:session_id", {
            client_id: "@client_id",
            session_id: "@session_id"
        }, {
            getInvitedSessionData: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("SessionInfoInviteService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        return e(t.ccUrl + "payment", {}, {
            payBookSession: {
                method: "POST",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        })
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("BookPaymentService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        return e(t.ccUrl + "clients/:client_id/book_invited_session", {
            client_id: "@client_id"
        }, {
            bookSession: {
                method: "POST",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        })
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("BookInvitedSessionService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        return e(t.ccUrl + "clients/:client_id/review_coach/:coach_id/reviews/:review_id", {
            client_id: "@client_id",
            coach_id: "@coach_id",
            review_id: "@review_id"
        }, {
            postReview: {
                method: "POST",
                transformResponse: a.transformResponse
            },
            getReviews: {
                method: "GET",
                transformResponse: a.transformResponse
            },
            getReview: {
                method: "GET",
                transformResponse: a.transformResponse
            },
            updateReview: {
                method: "PUT",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        })
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("ReviewService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "clients/:client_id/coaches/:coach_id/already_reviewed/:booked_session_id", {
            coach_id: "@coach_id",
            client_id: "@client_id",
            booked_session_id: "@booked_session_id"
        }, {
            getReviewStatus: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("ReviewStatusService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "dashboard/contacts", {}, {
            getContacts: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("ContactsService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "admin/:admin_id/messages", {
            admin_id: "@admin_id"
        }, {
            getAdminMessages: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("AdminMessageService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "dashboard/coaches/:coach_id", {
            coach_id: "@coach_id"
        }, {
            getCoachesList: {
                method: "GET",
                transformResponse: a.transformResponse
            },
            getNotes: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("GETAllCoachesService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "dashboard/coaches?zip=:zip", {
            zip: "@zip"
        }, {
            getCoachesList: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("SearchCoachesWithZipService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "dashboard/coaches?zip=:zip&sport=:sport", {
            zip: "@zip",
            sport: "@sport"
        }, {
            getCoachesList: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("SearchCoachesWithZipNSportService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "dashboard/coaches?sport=:sport", {
            sport: "@sport"
        }, {
            getCoachesList: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("SearchCoachesWithSportService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "dashboard/coaches?club=:club", {
            club: "@club"
        }, {
            getCoachesList: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("SearchCoachesWithClubService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "dashboard/coaches?name=:name", {
            zip: "@zip"
        }, {
            getCoachesList: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("SearchCoachesWithNameService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "dashboard/coaches/:coachId", {
            coachId: "@coachId"
        }, {
            updateCoachStatus: {
                method: "PUT",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("CoacheUpdateService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "dashboard/sessions?w=:week_no&y=:year_no", {
            week_no: "@week_no"
        }, {
            getSessions: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("AdminWeeklySessionsService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "dashboard/sessions?y=:year_no", {
            year_no: "@year_no"
        }, {
            getSessions: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("AdminYearlySessionsService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "dashboard/sessions?m=:month_no&y=:year_no", {
            month_no: "@month_no"
        }, {
            getSessions: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("AdminMonthlySessionsService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "coach_payments?w=:week_no&y=:year_no", {
            week_no: "@week_no"
        }, {
            getPayments: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("AdminWeeklyPaymentsService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "coach_payments?m=:month_no&y=:year_no", {
            month_no: "@month_no"
        }, {
            getPayments: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("AdminMonthlyPaymentsService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "coach_payments?y=:year_no", {
            year_no: "@year_no"
        }, {
            getPayments: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("AdminYearlyPaymentsService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "dashboard/sessions.csv?w=:week_no&y=:year_no", {
            week_no: "@week_no"
        }, {
            getSessionsCSV: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("AdminWeeklySessionsCSVService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "dashboard/sessions.csv?y=:year_no", {
            year_no: "@year_no"
        }, {
            getSessionsCSV: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("AdminYearlySessionsCSVService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "dashboard/sessions.csv?m=:month_no&y=:year_no", {
            month_no: "@month_no"
        }, {
            getSessionsCSV: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("AdminMonthlySessionsCSVService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "coach_payments.csv?w=:week_no&y=:year_no", {
            week_no: "@week_no"
        }, {
            getPaymentsCSV: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("AdminWeeklyPaymentsCSVService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "coach_payments.csv?m=:month_no&y=:year_no", {
            month_no: "@month_no"
        }, {
            getPaymentsCSV: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("AdminMonthlyPaymentsCSVService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "coach_payments.csv?y=:year_no&y=:year_no", {
            year_no: "@year_no"
        }, {
            getPaymentsCSV: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("AdminYearlyPaymentsCSVService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "coach_payments/:payment_id", {
            payment_id: "@payment_id"
        }, {
            updatePayment: {
                method: "PUT",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("PaymentsUpdateService", e)
}(angular),
function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "clients", {}, {
            getAllClients: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !1
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("GETAllClients", e)
}(angular);
! function() {
    var e = function(e, t, a) {
        var o = e(t.ccUrl + "clients?search=:name", {}, {
            getClientsList: {
                method: "GET",
                transformResponse: a.transformResponse
            }
        }, {
            stripTrailingSlashes: !0
        });
        return o
    };
    e.$inject = ["$resource", "urlConfig", "ResponseHandlerService"], angular.module("Coachco").factory("SearchClientsWithNameService", e)
}(angular);
! function() {
    var e = function(e) {
        return {
            showAlert: function(t, a, o) {
                var n = e.open({
                    animation: !0,
                    templateUrl: "partials/shared/views/modals/shared.modal.alert.html",
                    controller: "AlertController",
                    windowClass: "model-alert",
                    backdrop: "static",
                    keyboard: !1,
                    resolve: {
                        errorModel: function() {
                            var e = {
                                title: t,
                                message: a
                            };
                            return e
                        }
                    }
                });
                n.result.then(function() {
                    localStorage.removeItem("requestSession"), o && o(n.result)
                }, function() {
                    o && o(n.result)
                })
            },
            openModal: function(t, a, o, n, s, i) {
                var r = e.open({
                    animation: !0,
                    templateUrl: o,
                    controller: n,
                    windowClass: "model-alert",
                    backdrop: "static",
                    keyboard: !1,
                    resolve: {
                        modalData: function() {
                            return s
                        },
                        errorModel: function() {
                            var e = {
                                title: t,
                                message: a
                            };
                            return e
                        }
                    }
                });
                r.result.then(function() {
                    i && i(r.result)
                }, function() {
                    i && i(r.result)
                })
            },
            resetEmail: function(t, a, o) {
                var n = e.open({
                    animation: !0,
                    templateUrl: "partials/shared/views/modals/shared.modal.resetEmail.html",
                    controller: "resetEmailController",
                    windowClass: "model-alert",
                    backdrop: "static",
                    keyboard: !1,
                    resolve: {
                        errorModel: function() {
                            var e = {
                                title: t,
                                message: a
                            };
                            return e
                        }
                    }
                });
                n.result.then(function() {
                    o && o(n.result)
                }, function() {
                    o && o(n.result)
                })
            },
            showLogoutAlert: function(t, a, o) {
                var n = e.open({
                    animation: !0,
                    templateUrl: "partials/shared/views/modals/shared.modal.logout.html",
                    controller: "AlertController",
                    windowClass: "model-alert",
                    backdrop: "static",
                    keyboard: !1,
                    resolve: {
                        errorModel: function() {
                            var e = {
                                title: t,
                                message: a
                            };
                            return e
                        }
                    }
                });
                n.result.then(function() {
                    o && o(n.result)
                }, function() {
                    o && o(n.result)
                })
            },
            pendingAlert: function(t, a, o) {
                var n = e.open({
                    animation: !0,
                    templateUrl: "partials/shared/views/modals/shared.modal.pendingAlert.html",
                    controller: "AlertController",
                    windowClass: "model-alert",
                    backdrop: "static",
                    keyboard: !1,
                    resolve: {
                        errorModel: function() {
                            var e = {
                                title: t,
                                message: a
                            };
                            return e
                        }
                    }
                });
                n.result.then(function() {
                    o && o(n.result)
                }, function() {
                    o && o(n.result)
                })
            },
            closeAlert: function(e) {
                e.dismiss("cancel")
            },
            doneAlert: function(e, t) {
                e.close(t)
            },
            showCoachAlert: function(t, a, o) {
                var n = e.open({
                    animation: !0,
                    templateUrl: "partials/shared/views/modals/shared.modal.coachAlert.html",
                    controller: "AlertController",
                    windowClass: "model-alert model-coach-alert",
                    backdrop: "static",
                    keyboard: !1,
                    resolve: {
                        errorModel: function() {
                            var e = {
                                title: t,
                                message: a
                            };
                            return e
                        }
                    }
                });
                n.result.then(function() {
                    o && o(n.result)
                }, function() {
                    o && o(n.result)
                })
            }
        }
    };
    e.$inject = ["$uibModal"], angular.module("Coachco").factory("AlertService", e)
}(angular),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d, u, m, h, p, g, f, v, S, C, y, _, b, w, I, P) {
            return {
                uploadPhoto: function(e, t, a, n, r) {
                    s.setData("ImageURL", a), o.uploadImage({
                        id: t
                    }, e).$promise.then(function(e) {
                        n(i.success(e))
                    }, function(e) {
                        r(i.error(e))
                    }).catch(function(e) {
                        r(i.exception(e))
                    })
                },
                validateEmail: function(e, t, a) {
                    r.validateEmail(e).$promise.then(function(e) {
                        t(i.success(e))
                    }, function(e) {
                        a(i.error(e))
                    }).catch(function(e) {
                        a(i.exception(e))
                    })
                },
                subscribeEmail: function(e, t, a) {
                    w.subscribeEmail({
                        email: e
                    }).$promise.then(function(e) {
                        t(i.success(e))
                    }, function(e) {
                        a(i.error(e))
                    }).catch(function(e) {
                        a(i.exception(e))
                    })
                },
                sendSessionPlanner: function(e, t, a) {
                    b.sendSessionPlanner(e).$promise.then(function(e) {
                        t(i.success(e))
                    }, function(e) {
                        a(i.error(e))
                    }).catch(function(e) {
                        a(i.exception(e))
                    })
                },
                getServiceFee: function(e, t) {
                    c.getServiceFee().$promise.then(function(t) {
                        e(i.success(t))
                    }, function(e) {
                        t(i.error(e))
                    }).catch(function(e) {
                        t(i.exception(e))
                    })
                },
                getCoachActivities: function(e, t) {
                    p.getCoachActivities().$promise.then(function(t) {
                        e(i.success(t))
                    }, function(e) {
                        t(i.error(e))
                    }).catch(function(e) {
                        t(i.exception(e))
                    })
                },
                getCoachClubs: function(e, t, a, o) {
                    g.getCoachClubs({
                        sport: e,
                        all: t
                    }).$promise.then(function(e) {
                        a(i.success(e))
                    }, function(e) {
                        o(i.error(e))
                    }).catch(function(e) {
                        o(i.exception(e))
                    })
                },
                getAllCoachClubs: function(e, t, a) {
                    u.getCoachClubs({
                        coaches: e
                    }).$promise.then(function(e) {
                        t(i.success(e))
                    }, function(e) {
                        a(i.error(e))
                    }).catch(function(e) {
                        a(i.exception(e))
                    })
                },
                getAllClubs: function(e, t) {
                    f.getAllClubs().$promise.then(function(t) {
                        e(i.success(t))
                    }, function(e) {
                        t(i.error(e))
                    }).catch(function(e) {
                        t(i.exception(e))
                    })
                },
                getApprovedClubs: function(e, t) {
                    n.getApprovedClubs().$promise.then(function(t) {
                        e(i.success(t))
                    }, function(e) {
                        t(i.error(e))
                    }).catch(function(e) {
                        t(i.exception(e))
                    })
                },
                postMessage: function(e, t, a) {
                    m.postMessage(e).$promise.then(function(e) {
                        t(i.success(e))
                    }, function(e) {
                        a(i.error(e))
                    }).catch(function(e) {
                        a(i.exception(e))
                    })
                },
                updateMessage: function(e, t, a, o) {
                    m.updateMessage({
                        message_id: e
                    }, t).$promise.then(function(e) {
                        a(i.success(e))
                    }, function(e) {
                        o(i.error(e))
                    }).catch(function(e) {
                        o(i.exception(e))
                    })
                },
                pollForMessages: function(e, t, a) {
                    d.pollForNewMessages({
                        user_id: e
                    }).$promise.then(function(e) {
                        t(i.success(e))
                    }, function(e) {
                        a(i.error(e))
                    }).catch(function(e) {
                        a(i.exception(e))
                    })
                },
                resetMessageCount: function(e, t, a, o) {
                    l.resetMessageCount({
                        message_id: e
                    }, t).$promise.then(function(e) {
                        a(i.success(e))
                    }, function(e) {
                        o(i.error(e))
                    }).catch(function(e) {
                        o(i.exception(e))
                    })
                },
                getClientsList: function(e, t) {
                    h.getClientsList().$promise.then(function(t) {
                        e(i.success(t))
                    }, function(e) {
                        t(i.error(e))
                    }).catch(function(e) {
                        t(i.exception(e))
                    })
                },
                getClientDetails: function(e, t, a) {
                    h.getClientsList({
                        client_id: e
                    }).$promise.then(function(e) {
                        t(i.success(e))
                    }, function(e) {
                        a(i.error(e))
                    }).catch(function(e) {
                        a(i.exception(e))
                    })
                },
                getToken: function(e, t, a) {
                    v.getToken({
                        user_id: e
                    }).$promise.then(function(e) {
                        t(i.success(e))
                    }, function(e) {
                        a(i.error(e))
                    }).catch(function(e) {
                        a(i.exception(e))
                    })
                },
                pollForPaymentNotifcations: function(e, t, a) {
                    y.getPaymentsNotification({
                        coachId: e
                    }).$promise.then(function(e) {
                        t(i.success(e))
                    }, function(e) {
                        a(i.error(e))
                    }).catch(function(e) {
                        a(i.exception(e))
                    })
                },
                inviteClient: function(e, t, a, o) {
                    C.inviteClient({
                        coach_training_session_id: e
                    }, t).$promise.then(function(e) {
                        a(i.success(e))
                    }, function(e) {
                        o(i.error(e))
                    }).catch(function(e) {
                        o(i.exception(e))
                    })
                },
                invitePotentialClient: function(e, t, a) {
                    S.inviteClient(e).$promise.then(function(e) {
                        t(i.success(e))
                    }, function(e) {
                        a(i.error(e))
                    }).catch(function(e) {
                        a(i.exception(e))
                    })
                },
                sendResetEmail: function(e, t, a) {
                    _.sendResetEmail(e).$promise.then(function(e) {
                        t(i.success(e))
                    }, function(e) {
                        a(i.error(e))
                    }).catch(function(e) {
                        a(i.exception(e))
                    })
                },
                resetEmail: function(e, t, a) {
                    _.resetEmail(e).$promise.then(function(e) {
                        t(i.success(e))
                    }, function(e) {
                        a(i.error(e))
                    }).catch(function(e) {
                        a(i.exception(e))
                    })
                },
                getCoachesWithCityStateSports: function(e, t, a, o, n) {
                    I.getCoachesList({
                        city: e,
                        state: t,
                        sport: a
                    }).$promise.then(function(e) {
                        o(i.success(e))
                    }, function(e) {
                        n(i.error(e))
                    }).catch(function(e) {
                        n(i.exception(e))
                    })
                },
                getCoachesWithStateSports: function(e, t, a, o) {
                    P.getCoachesList({
                        state: e,
                        sport: t
                    }).$promise.then(function(e) {
                        a(i.success(e))
                    }, function(e) {
                        o(i.error(e))
                    }).catch(function(e) {
                        o(i.exception(e))
                    })
                }
            }
        };
        e.$inject = ["ClientProfileService", "AlertService", "ClientCoachService", "ImageService", "ApprovedClubsService", "StoreService", "ResponseHandlerService", "EmailService", "ServcieFeeService", "MessageResetService", "MessagePollingService", "CoachClubsService", "MessageService", "DummyClientService", "SportsService", "ClubService", "AllClubsService", "TokenService", "InvitePotentialClientService", "InviteClientService", "CoachPaymentsNotificationService", "ResetPWDService", "SessionPlannerService", "SubscribeEmailService", "SearchCoachesWithCityNSportService", "SearchCoachesWithStateSportService"], angular.module("Coachco").service("CommonAPIInterfaceService", e)
    }(angular),
    function() {
        var e = function(e, t, a, o, n) {
            return {
                registerCoach: function(e, t, a) {
                    o.registerCoach(e).$promise.then(function(e) {
                        t(n.success(e))
                    }, function(e) {
                        a(n.error(e))
                    }).catch(function(e) {
                        a(n.exception(e))
                    })
                },
                createAccount: function(t, a, o) {
                    e.createAccount(t).$promise.then(function(e) {
                        a(n.success(e))
                    }, function(e) {
                        o(n.error(e))
                    }).catch(function(e) {
                        o(n.exception(e))
                    })
                },
                updateAccount: function(t, a, o, s) {
                    e.updateAccount({
                        id: a
                    }, t).$promise.then(function(e) {
                        o(n.success(e))
                    }, function(e) {
                        s(n.error(e))
                    }).catch(function(e) {
                        s(n.exception(e))
                    })
                },
                getAccountDetails: function(t, a, o) {
                    e.getAccountDetails({
                        id: t
                    }).$promise.then(function(e) {
                        a(n.success(e))
                    }, function(e) {
                        o(n.error(e))
                    }).catch(function(e) {
                        o(n.exception(e))
                    })
                },
                getCoachesList: function(t, a) {
                    e.getCoachesList().$promise.then(function(e) {
                        t(n.success(e))
                    }, function(e) {
                        a(n.error(e))
                    }).catch(function(e) {
                        a(n.exception(e))
                    })
                },
                deleteCoachImage: function(e, t, o, s) {
                    a.deleteImage({
                        id: e,
                        image_id: t
                    }).$promise.then(function(e) {
                        o(n.success(e))
                    }, function(e) {
                        s(n.error(e))
                    }).catch(function(e) {
                        s(n.exception(e))
                    })
                },
                setCoachProfileImage: function(e, t, o, s) {
                    a.setProfileImage({
                        id: e,
                        image_id: t
                    }).$promise.then(function(e) {
                        o(n.success(e))
                    }, function(e) {
                        s(n.error(e))
                    }).catch(function(e) {
                        s(n.exception(e))
                    })
                }
            }
        };
        e.$inject = ["CoachEnrollmentService", "AlertService", "ImageService", "RegistrationService", "ResponseHandlerService"], angular.module("Coachco").service("CoachEnrollmentInterfaceService", e)
    }(angular),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d, u, m, h, p, g, f, v, S, C, y) {
            return {
                createAccount: function(t, a, o) {
                    e.createAccount(t).$promise.then(function(e) {
                        a(i.success(e))
                    }, function(e) {
                        o(i.error(e))
                    }).catch(function(e) {
                        o(i.exception(e))
                    })
                },
                updateAccount: function(t, a, o, n) {
                    e.updateAccount({
                        id: a
                    }, t).$promise.then(function(e) {
                        o(i.success(e))
                    }, function(e) {
                        n(i.error(e))
                    }).catch(function(e) {
                        n(i.exception(e))
                    })
                },
                getClientsList: function(t, a, o) {
                    e.getClientsList({
                        id: t
                    }).$promise.then(function(e) {
                        a(i.success(e))
                    }, function(e) {
                        o(i.error(e))
                    }).catch(function(e) {
                        o(i.exception(e))
                    })
                },
                getClientDetails: function(t, a, o, n) {
                    e.getClientsList({
                        id: t,
                        client_id: a
                    }).$promise.then(function(e) {
                        o(i.success(e))
                    }, function(e) {
                        n(i.error(e))
                    }).catch(function(e) {
                        n(i.exception(e))
                    })
                },
                rescheduleSession: function(e, t, a, n) {
                    o.rescheduleSession({
                        booked_session_id: e
                    }, t).$promise.then(function(e) {
                        a(i.success(e))
                    }, function(e) {
                        n(i.error(e))
                    }).catch(function(e) {
                        n(i.exception(e))
                    })
                },
                rescheduleCoachSession: function(e, t, a, o, n) {
                    h.rescheduleSession({
                        coach_training_session_id: e,
                        coach_id: t
                    }, a).$promise.then(function(e) {
                        o(i.success(e))
                    }, function(e) {
                        n(i.error(e))
                    }).catch(function(e) {
                        n(i.exception(e))
                    })
                },
                getSessionDetails: function(e, t, a) {
                    o.getSessionDetails({
                        booked_session_id: e
                    }).$promise.then(function(e) {
                        t(i.success(e))
                    }, function(e) {
                        a(i.error(e))
                    }).catch(function(e) {
                        a(i.exception(e))
                    })
                },
                getCoachSessionDetails: function(e, t, a) {
                    h.getSessionDetails({
                        coach_training_session_id: e,
                        coach_id: coach_id
                    }).$promise.then(function(e) {
                        t(i.success(e))
                    }, function(e) {
                        a(i.error(e))
                    }).catch(function(e) {
                        a(i.exception(e))
                    })
                },
                cancelSession: function(e, t, a, o) {
                    h.cancelSession({
                        coach_training_session_id: e,
                        coach_id: t.coach_id
                    }, t).$promise.then(function(e) {
                        a(i.success(e))
                    }, function(e) {
                        o(i.error(e))
                    }).catch(function(e) {
                        o(i.exception(e))
                    })
                },
                markCompleteSession: function(e, t, a, o) {
                    s.completeSession({
                        coach_id: e
                    }, {
                        coach_training_session_id: t
                    }).$promise.then(function(e) {
                        a(i.success(e))
                    }, function(e) {
                        o(i.error(e))
                    }).catch(function(e) {
                        o(i.exception(e))
                    })
                },
                updateAthleteAccount: function(e, t, a, o, s, r) {
                    n.updateAthlete({
                        coach_id: e,
                        client_id: t,
                        athlete_id: a
                    }, o).$promise.then(function(e) {
                        s(i.success(e))
                    }, function(e) {
                        r(i.error(e))
                    }).catch(function(e) {
                        r(i.exception(e))
                    })
                },
                getAthleteSessions: function(e, t, a, o, n) {
                    r.getAthleteSessions({
                        coach_id: e,
                        client_id: t,
                        athlete_id: a
                    }).$promise.then(function(e) {
                        o(i.success(e))
                    }, function(e) {
                        n(i.error(e))
                    }).catch(function(e) {
                        n(i.exception(e))
                    })
                },
                getCoachAthletes: function(e, t, a) {
                    c.getCoachAthletes({
                        coach_id: e
                    }).$promise.then(function(e) {
                        t(i.success(e))
                    }, function(e) {
                        a(i.error(e))
                    }).catch(function(e) {
                        a(i.exception(e))
                    })
                },
                getCoachStats: function(e, t, a) {
                    l.getCoachStats({
                        coach_id: e
                    }).$promise.then(function(e) {
                        t(i.success(e))
                    }, function(e) {
                        a(i.error(e))
                    }).catch(function(e) {
                        a(i.exception(e))
                    })
                },
                getCoachMessages: function(e, t, a) {
                    m.getCoachMessages({
                        coach_id: e
                    }).$promise.then(function(e) {
                        t(i.success(e))
                    }, function(e) {
                        a(i.error(e))
                    }).catch(function(e) {
                        a(i.exception(e))
                    })
                },
                createSession: function(e, t, a, o) {
                    f.createSession({
                        coach_id: e
                    }, t).$promise.then(function(e) {
                        a(i.success(e))
                    }, function(e) {
                        o(i.error(e))
                    }).catch(function(e) {
                        o(i.exception(e))
                    })
                },
                createRecurringSession: function(e, t, a, o) {
                    y.createRecurringSession({
                        coach_id: e
                    }, t).$promise.then(function(e) {
                        a(i.success(e))
                    }, function(e) {
                        o(i.error(e))
                    }).catch(function(e) {
                        o(i.exception(e))
                    })
                },
                getSessionData: function(e, t, a, o) {
                    f.getSessionData({
                        coach_id: e,
                        id: t
                    }).$promise.then(function(e) {
                        a(i.success(e))
                    }, function(e) {
                        o(i.error(e))
                    }).catch(function(e) {
                        o(i.exception(e))
                    })
                },
                postReview: function(e, t, a, o, n) {
                    u.postReview({
                        user_id: e,
                        coach_id: t
                    }, a).$promise.then(function(e) {
                        o(i.success(e))
                    }, function(e) {
                        n(i.error(e))
                    }).catch(function(e) {
                        n(i.exception(e))
                    })
                },
                getReviews: function(e, t, a, o) {
                    u.getReviews({
                        user_id: userId,
                        coach_id: t
                    }).$promise.then(function(e) {
                        a(i.success(e))
                    }, function(e) {
                        o(i.error(e))
                    }).catch(function(e) {
                        o(i.exception(e))
                    })
                },
                getReview: function(e, t, a, o, n) {
                    u.getReview({
                        user_id: userId,
                        coach_id: t,
                        review_id: a
                    }).$promise.then(function(e) {
                        o(i.success(e))
                    }, function(e) {
                        n(i.error(e))
                    }).catch(function(e) {
                        n(i.exception(e))
                    })
                },
                updateReview: function(e, t, a, o, n, s) {
                    u.postReview({
                        user_id: userId,
                        coach_id: t,
                        review_id: a
                    }, o).$promise.then(function(e) {
                        n(i.success(e))
                    }, function(e) {
                        s(i.error(e))
                    }).catch(function(e) {
                        s(i.exception(e))
                    })
                },
                getSelfReviews: function(e, t, a) {
                    d.getReviews({
                        coach_id: e
                    }).$promise.then(function(e) {
                        t(i.success(e))
                    }, function(e) {
                        a(i.error(e))
                    }).catch(function(e) {
                        a(i.exception(e))
                    })
                },
                getPayments: function(e, t, a, o) {
                    p.getPayments({
                        coach_id: e,
                        display_property: t
                    }).$promise.then(function(e) {
                        a(i.success(e))
                    }, function(e) {
                        o(i.error(e))
                    }).catch(function(e) {
                        o(i.exception(e))
                    })
                },
                getPaymentDetails: function(e, t, a, o, n, s, r) {
                    g.getPaymentDetails({
                        coach_id: e,
                        display_property: t,
                        display_property_value: a,
                        display_property2: o,
                        display_property_value2: n
                    }).$promise.then(function(e) {
                        s(i.success(e))
                    }, function(e) {
                        r(i.error(e))
                    }).catch(function(e) {
                        r(i.exception(e))
                    })
                },
                updatePayment: function(e, t, a, o) {
                    v.updatePayment({
                        coach_id: e
                    }, t).$promise.then(function(e) {
                        a(i.success(e))
                    }, function(e) {
                        o(i.error(e))
                    }).catch(function(e) {
                        o(i.exception(e))
                    })
                },
                updateCommission: function(e, t, a, o) {
                    S.updateCommission({
                        coach_id: e
                    }, t).$promise.then(function(e) {
                        a(i.success(e))
                    }, function(e) {
                        o(i.error(e))
                    }).catch(function(e) {
                        o(i.exception(e))
                    })
                },
                requestReview: function(e, t, a, o) {
                    C.sendReviewRequest({
                        coach_id: e
                    }, t).$promise.then(function(e) {
                        a(i.success(e))
                    }, function(e) {
                        o(i.error(e))
                    }).catch(function(e) {
                        o(i.exception(e))
                    })
                }
            }
        };
        e.$inject = ["CoachProfileAPIService", "AlertService", "ImageService", "ScheduleService", "CoachClientAthleteService", "SessionUpdateService", "ResponseHandlerService", "CoachClientAthleteSessionService", "CoachAthletesService", "CoachStatsService", "CoachSelfReviewService", "CoachReviewService", "CoachMessageService", "BookedSessionsService", "CoachPaymentsService", "CoachPaymentDetailsService", "SessionCreateService", "CoachPaymentsUpdateService", "CommissionUpdateService", "RequestReviewService", "createRecurringService"], angular.module("Coachco").service("CoachProfileInterfaceService", e)
    }(angular),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d, u, m, h, p, g, f, v, S, C, y, _) {
            return {
                getAllClients: function(t, a) {
                    e.getAllClients().$promise.then(function(e) {
                        t(d.success(e))
                    }, function(e) {
                        a(d.error(e))
                    }).catch(function(e) {
                        a(d.exception(e))
                    })
                },
                getClientDetails: function(t, a, o) {
                    e.getClientDetails({
                        id: t
                    }).$promise.then(function(e) {
                        a(d.success(e))
                    }, function(e) {
                        o(d.error(e))
                    }).catch(function(e) {
                        o(d.exception(e))
                    })
                },
                getClientCoachDetails: function(e, t, o) {
                    a.getClientCoachDetails({
                        id: e
                    }).$promise.then(function(e) {
                        t(d.success(e))
                    }, function(e) {
                        o(d.error(e))
                    }).catch(function(e) {
                        o(d.exception(e))
                    })
                },
                getClientAthletes: function(e, t, a) {
                    n.getClientAthletes({
                        id: e
                    }).$promise.then(function(e) {
                        t(d.success(e))
                    }, function(e) {
                        a(d.error(e))
                    }).catch(function(e) {
                        a(d.exception(e))
                    })
                },
                getClientSessions: function(e, t, a) {
                    s.getSessions({
                        id: e
                    }).$promise.then(function(e) {
                        t(d.success(e))
                    }, function(e) {
                        a(d.error(e))
                    }).catch(function(e) {
                        a(d.exception(e))
                    })
                },
                getClientFeedback: function(e, t, a, o) {
                    c.getFeedBack({
                        client_id: e,
                        booked_session_id: t
                    }).$promise.then(function(e) {
                        a(d.success(e))
                    }, function(e) {
                        o(d.error(e))
                    }).catch(function(e) {
                        o(d.exception(e))
                    })
                },
                getPaymentInfo: function(e, t, a, o) {
                    l.getPaymentInfo({
                        booking_id: e,
                        payment_id: t
                    }).$promise.then(function(e) {
                        a(d.success(e))
                    }, function(e) {
                        o(d.error(e))
                    }).catch(function(e) {
                        o(d.exception(e))
                    })
                },
                createAthlete: function(e, t, a, o) {
                    n.addAthlete({
                        id: e
                    }, t).$promise.then(function(e) {
                        a(d.success(e))
                    }, function(e) {
                        o(d.error(e))
                    }).catch(function(e) {
                        o(d.exception(e))
                    })
                },
                deleteAthlete: function(e, t, a, o) {
                    n.deleteAthlete({
                        id: e,
                        athlete_id: t
                    }).$promise.then(function(e) {
                        a(d.success(e))
                    }, function(e) {
                        o(d.error(e))
                    }).catch(function(e) {
                        o(d.exception(e))
                    })
                },
                updateAthlete: function(e, t, a, o, s) {
                    n.updateAthlete({
                        id: e,
                        athlete_id: t
                    }, a).$promise.then(function(e) {
                        o(d.success(e))
                    }, function(e) {
                        s(d.error(e))
                    }).catch(function(e) {
                        s(d.exception(e))
                    })
                },
                getClientMessages: function(e, t, a) {
                    h.getClientMessages({
                        client_id: e
                    }).$promise.then(function(e) {
                        t(d.success(e))
                    }, function(e) {
                        a(d.error(e))
                    }).catch(function(e) {
                        a(d.exception(e))
                    })
                },
                deleteAthleteImage: function(e, t, a, o, n) {
                    r.deleteImage({
                        client_id: e,
                        athlete_id: t,
                        image_id: a
                    }).$promise.then(function(e) {
                        o(d.success(e))
                    }, function(e) {
                        n(d.error(e))
                    }).catch(function(e) {
                        n(d.exception(e))
                    })
                },
                updateProfile: function(t, a, o, n) {
                    e.updateProfile({
                        id: a
                    }, t).$promise.then(function(e) {
                        o && o(d.success(e))
                    }, function(e) {
                        n && n(d.error(e))
                    }).catch(function(e) {
                        n && n(d.exception(e))
                    })
                },
                uploadPhoto: function(e, t, a, n) {
                    o.uploadImage({
                        id: t
                    }, e).$promise.then(function(e) {
                        a(d.success(e))
                    }, function(e) {
                        n(d.error(e))
                    }).catch(function(e) {
                        n(d.exception(e))
                    })
                },
                sendInvite: function(e, t, a, o) {
                    i.sendInvite({
                        client_id: e
                    }, t).$promise.then(function(e) {
                        a(d.success(e))
                    }, function(e) {
                        o(d.error(e))
                    }).catch(function(e) {
                        o(d.exception(e))
                    })
                },
                getFriends: function(e, t, a) {
                    i.getFriends({
                        client_id: e
                    }).$promise.then(function(e) {
                        t(d.success(e))
                    }, function(e) {
                        a(d.error(e))
                    }).catch(function(e) {
                        a(d.exception(e))
                    })
                },
                getAssociatedClients: function(e, t, a) {
                    p.getAssociatedClients({
                        client_id: e
                    }).$promise.then(function(e) {
                        t(d.success(e))
                    }, function(e) {
                        a(d.error(e))
                    }).catch(function(e) {
                        a(d.exception(e))
                    })
                },
                deleteCreditCard: function(e, t, a) {
                    u.deleteCreditCard({
                        client_id: e
                    }).$promise.then(function(e) {
                        t(d.success(e))
                    }, function(e) {
                        a(d.error(e))
                    }).catch(function(e) {
                        a(d.exception(e))
                    })
                },
                addCreditCard: function(e, t, a) {
                    m.addCreditCard(e).$promise.then(function(e) {
                        t(d.success(e))
                    }, function(e) {
                        a(d.error(e))
                    }).catch(function(e) {
                        a(d.exception(e))
                    })
                },
                getInvitedRecurringSessionData: function(e, t, a, o) {
                    _.getInvitedSessionData({
                        client_id: e,
                        session_id: t
                    }).$promise.then(function(e) {
                        a(d.success(e))
                    }, function(e) {
                        o(d.error(e))
                    }).catch(function(e) {
                        o(d.exception(e))
                    })
                },
                getInvitedSessionData: function(e, t, a, o) {
                    g.getInvitedSessionData({
                        client_id: e,
                        session_id: t
                    }).$promise.then(function(e) {
                        a(d.success(e))
                    }, function(e) {
                        o(d.error(e))
                    }).catch(function(e) {
                        o(d.exception(e))
                    })
                },
                getInvitedSessionInfo: function(e, t, a, o) {
                    y.getInvitedSessionData({
                        client_id: e,
                        session_id: t
                    }).$promise.then(function(e) {
                        a(d.success(e))
                    }, function(e) {
                        o(d.error(e))
                    }).catch(function(e) {
                        o(d.exception(e))
                    })
                },
                payBookSession: function(e, t, a) {
                    S.payBookSession(e).$promise.then(function(e) {
                        t(d.success(e))
                    }, function(e) {
                        a(d.error(e))
                    }).catch(function(e) {
                        a(d.exception(e))
                    })
                },
                bookSession: function(e, t, a, o) {
                    C.bookSession({
                        client_id: e
                    }, t).$promise.then(function(e) {
                        a(d.success(e))
                    }, function(e) {
                        o(d.error(e))
                    }).catch(function(e) {
                        o(d.exception(e))
                    })
                },
                postReview: function(e, t, a, o, n) {
                    f.postReview({
                        client_id: e,
                        coach_id: t
                    }, a).$promise.then(function(e) {
                        o(d.success(e))
                    }, function(e) {
                        n(d.error(e))
                    }).catch(function(e) {
                        n(d.exception(e))
                    })
                },
                getReviews: function(e, t, a, o) {
                    f.getReviews({
                        client_id: e,
                        coach_id: t
                    }).$promise.then(function(e) {
                        a(d.success(e))
                    }, function(e) {
                        o(d.error(e))
                    }).catch(function(e) {
                        o(d.exception(e))
                    })
                },
                getReview: function(e, t, a, o, n) {
                    f.getReview({
                        client_id: e,
                        coach_id: t,
                        review_id: a
                    }).$promise.then(function(e) {
                        o(d.success(e))
                    }, function(e) {
                        n(d.error(e))
                    }).catch(function(e) {
                        n(d.exception(e))
                    })
                },
                getReviewStatus: function(e, t, a, o, n) {
                    v.getReviewStatus({
                        client_id: e,
                        coach_id: t,
                        booked_session_id: a
                    }).$promise.then(function(e) {
                        o(d.success(e))
                    }, function(e) {
                        n(d.error(e))
                    }).catch(function(e) {
                        n(d.exception(e))
                    })
                },
                updateReview: function(e, t, a, o, n, s) {
                    f.postReview({
                        client_id: e,
                        coach_id: t,
                        review_id: a
                    }, o).$promise.then(function(e) {
                        n(d.success(e))
                    }, function(e) {
                        s(d.error(e))
                    }).catch(function(e) {
                        s(d.exception(e))
                    })
                }
            }
        };
        e.$inject = ["ClientProfileService", "AlertService", "ClientCoachService", "ImageService", "ClientAthletesService", "ClientSessionsService", "ClientFriendsService", "AthleteImageService", "FeedbackService", "PaymentService", "ResponseHandlerService", "CreditCardService", "AddCreditCardService", "ClientMessageService", "ClientClientsService", "SessionInvitesService", "ReviewService", "ReviewStatusService", "BookPaymentService", "BookInvitedSessionService", "SessionInfoInviteService", "RecurringSessionInvitesService"], angular.module("Coachco").service("ClientProfileInterfaceService", e)
    }(angular),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d, u, m, h, p, g, f, v, S, C, y, _, b, w, I) {
            return {
                getContactList: function(t, a) {
                    e.getContacts().$promise.then(function(e) {
                        t(h.success(e))
                    }, function(e) {
                        a(h.error(e))
                    }).catch(function(e) {
                        a(h.exception(e))
                    })
                },
                getWeeklySessions: function(e, t, a, o) {
                    i.getSessions({
                        week_no: e,
                        year_no: t
                    }).$promise.then(function(e) {
                        a(h.success(e))
                    }, function(e) {
                        o(h.error(e))
                    }).catch(function(e) {
                        o(h.exception(e))
                    })
                },
                getMonthlySessions: function(e, t, a, o) {
                    r.getSessions({
                        month_no: e,
                        year_no: t
                    }).$promise.then(function(e) {
                        a(h.success(e))
                    }, function(e) {
                        o(h.error(e))
                    }).catch(function(e) {
                        o(h.exception(e))
                    })
                },
                getYearlySessions: function(e, t, o) {
                    a.getSessions({
                        year_no: e
                    }).$promise.then(function(e) {
                        t(h.success(e))
                    }, function(e) {
                        o(h.error(e))
                    }).catch(function(e) {
                        o(h.exception(e))
                    })
                },
                getWeeklyPayments: function(e, t, a, o) {
                    n.getPayments({
                        week_no: e,
                        year_no: t
                    }).$promise.then(function(e) {
                        a(h.success(e))
                    }, function(e) {
                        o(h.error(e))
                    }).catch(function(e) {
                        o(h.exception(e))
                    })
                },
                getMonthlyPayments: function(e, t, a, o) {
                    s.getPayments({
                        month_no: e,
                        year_no: t
                    }).$promise.then(function(e) {
                        a(h.success(e))
                    }, function(e) {
                        o(h.error(e))
                    }).catch(function(e) {
                        o(h.exception(e))
                    })
                },
                getWeeklySessionsCSV: function(e, t, a, o) {
                    I.getSessionsCSV({
                        week_no: e,
                        year_no: t
                    }).$promise.then(function(e) {
                        a(h.success(e))
                    }, function(e) {
                        o(h.error(e))
                    }).catch(function(e) {
                        o(h.exception(e))
                    })
                },
                getMonthlySessionsCSV: function(e, t, a, o) {
                    b.getSessionsCSV({
                        month_no: e,
                        year_no: t
                    }).$promise.then(function(e) {
                        a(h.success(e))
                    }, function(e) {
                        o(h.error(e))
                    }).catch(function(e) {
                        o(h.exception(e))
                    })
                },
                getYearlySessionsCSV: function(e, t, a) {
                    w.getSessionsCSV({
                        year_no: e
                    }).$promise.then(function(e) {
                        t(h.success(e))
                    }, function(e) {
                        a(h.error(e))
                    }).catch(function(e) {
                        a(h.exception(e))
                    })
                },
                getWeeklyPaymentsCSV: function(e, t, a, o) {
                    _.getPaymentsCSV({
                        week_no: e,
                        year_no: t
                    }).$promise.then(function(e) {
                        a(h.success(e))
                    }, function(e) {
                        o(h.error(e))
                    }).catch(function(e) {
                        o(h.exception(e))
                    })
                },
                getMonthlyPaymentsCSV: function(e, t, a, o) {
                    f.getPaymentsCSV({
                        month_no: e,
                        year_no: t
                    }).$promise.then(function(e) {
                        a(h.success(e))
                    }, function(e) {
                        o(h.error(e))
                    }).catch(function(e) {
                        o(h.exception(e))
                    })
                },
                getYearlyPayments: function(e, t, a) {
                    v.getPaymentsCSV({
                        year_no: e
                    }).$promise.then(function(e) {
                        t(h.success(e))
                    }, function(e) {
                        a(h.error(e))
                    }).catch(function(e) {
                        a(h.exception(e))
                    })
                },
                getAdminMessages: function(e, a, o) {
                    t.getAdminMessages({
                        admin_id: e
                    }).$promise.then(function(e) {
                        a(h.success(e))
                    }, function(e) {
                        o(h.error(e))
                    }).catch(function(e) {
                        o(h.exception(e))
                    })
                },
                getAllCoachesList: function(e, t) {
                    u.getCoachesList().$promise.then(function(t) {
                        e(h.success(t))
                    }, function(e) {
                        t(h.error(e))
                    }).catch(function(e) {
                        t(h.exception(e))
                    })
                },
                getAllClients: function(e, t) {
                    g.getAllClients().$promise.then(function(t) {
                        e(h.success(t))
                    }, function(e) {
                        t(h.error(e))
                    }).catch(function(e) {
                        t(h.exception(e))
                    })
                },
                getNotesOnCoach: function(e, t, a) {
                    u.getNotes({
                        coach_id: e
                    }).$promise.then(function(e) {
                        t(h.success(e))
                    }, function(e) {
                        a(h.error(e))
                    }).catch(function(e) {
                        a(h.exception(e))
                    })
                },
                getCoachesWithZip: function(e, t, a) {
                    c.getCoachesList({
                        zip: e
                    }).$promise.then(function(e) {
                        t(h.success(e))
                    }, function(e) {
                        a(h.error(e))
                    }).catch(function(e) {
                        a(h.exception(e))
                    })
                },
                getCoachesWithZipNSport: function(e, t, a, o) {
                    l.getCoachesList({
                        zip: e,
                        sport: t
                    }).$promise.then(function(e) {
                        a(h.success(e))
                    }, function(e) {
                        o(h.error(e))
                    }).catch(function(e) {
                        o(h.exception(e))
                    })
                },
                getCoachesWithSport: function(e, t, a) {
                    y.getCoachesList({
                        sport: e
                    }).$promise.then(function(e) {
                        t(h.success(e))
                    }, function(e) {
                        a(h.error(e))
                    }).catch(function(e) {
                        a(h.exception(e))
                    })
                },
                getCoachesWithClub: function(e, t, a) {
                    C.getCoachesList({
                        club: e
                    }).$promise.then(function(e) {
                        t(h.success(e))
                    }, function(e) {
                        a(h.error(e))
                    }).catch(function(e) {
                        a(h.exception(e))
                    })
                },
                getCoachesWithName: function(e, t, a) {
                    d.getCoachesList({
                        name: e
                    }).$promise.then(function(e) {
                        t(h.success(e))
                    }, function(e) {
                        a(h.error(e))
                    }).catch(function(e) {
                        a(h.exception(e))
                    })
                },
                getClientsWithName: function(e, t, a) {
                    S.getClientsList({
                        name: e
                    }).$promise.then(function(e) {
                        t(h.success(e))
                    }, function(e) {
                        a(h.error(e))
                    }).catch(function(e) {
                        a(h.exception(e))
                    })
                },
                updateStatus: function(e, t, a, o) {
                    m.updateCoachStatus({
                        coachId: e
                    }, t).$promise.then(function(e) {
                        a(h.success(e))
                    }, function(e) {
                        o(h.error(e))
                    }).catch(function(e) {
                        o(h.exception(e))
                    })
                },
                updatePayment: function(e, t, a, o) {
                    p.updatePayment({
                        payment_id: e
                    }, t).$promise.then(function(e) {
                        a(h.success(e))
                    }, function(e) {
                        o(h.error(e))
                    }).catch(function(e) {
                        o(h.exception(e))
                    })
                }
            }
        };
        e.$inject = ["ContactsService", "AdminMessageService", "AdminYearlySessionsService", "AdminYearlyPaymentsService", "AdminWeeklyPaymentsService", "AdminMonthlyPaymentsService", "AdminWeeklySessionsService", "AdminMonthlySessionsService", "SearchCoachesWithZipService", "SearchCoachesWithZipNSportService", "SearchCoachesWithNameService", "GETAllCoachesService", "CoacheUpdateService", "ResponseHandlerService", "PaymentsUpdateService", "GETAllClients", "AdminMonthlyPaymentsCSVService", "AdminYearlyPaymentsCSVService", "SearchClientsWithNameService", "SearchCoachesWithClubService", "SearchCoachesWithSportService", "AdminWeeklyPaymentsCSVService", "AdminMonthlySessionsCSVService", "AdminYearlySessionsCSVService", "AdminWeeklySessionsCSVService"], angular.module("Coachco").service("AdminProfileInterfaceService", e)
    }(angular),
    function() {
        var e = function(e, t) {
            var a;
            return {
                createCart: function() {
                    var o = {};
                    return o.cart = {}, a = t.ccUrl + "carts", e.post(a, o)
                },
                getCart: function(o) {
                    return a = t.ccUrl + "carts/" + o, e.get(a)
                },
                postEmailandValidate: function(o) {
                    return a = t.ccUrl + "validations/email", e.post(a, {
                        email: o
                    })
                },
                getCartItemCount: function(o) {
                    return a = t.ccUrl + "carts/" + o + "/count", e.get(a)
                },
                addToCart: function(o, n) {
                    return a = t.ccUrl + "carts/" + o + "/cart_items", e.post(a, n)
                },
                deleteCartItem: function(o) {
                    if (angular.isDefined(o.cartId) && angular.isDefined(o.cartItemId)) return a = t.ccUrl + "carts/" + o.cartId + "/cart_items/" + o.cartItemId, e.delete(a, o)
                },
                clearCart: function(o) {
                    if (angular.isDefined(o)) return a = t.ccUrl + "carts/" + o + "/clear", e.put(a)
                },
                setCartItemAsExpired: function(o) {
                    if (angular.isDefined(o.cartId) && angular.isDefined(o.cartItemId)) return a = t.ccUrl + "carts/" + o.cartId + "/cart_items/" + o.cartItemId + "/expired", e.put(a)
                },
                setCartAsExpired: function(o) {
                    if (angular.isDefined(o.cartId)) return a = t.ccUrl + "carts/" + o.cartId + "/expired", e.put(a)
                },
                reAddCartItem: function(o) {
                    return a = t.ccUrl + "carts/" + o.cartId + "/cart_items/" + o.cartItemId + "/readd", e.put(a)
                },
                updateCartItems: function(o, n, s) {
                    return a = t.ccUrl + "carts/" + o + "/cart_items/" + n, e.put(a, s)
                },
                setCartParentId: function(o, n) {
                    return a = t.ccUrl + "carts/" + o, e.put(a, n)
                },
                getParentCartId: function(o) {
                    return angular.isDefined(o) && (a = t.ccUrl + "parents/" + o + "/carts"), e.get(a)
                },
                addAthleteToParent: function(o, n) {
                    return a = t.ccUrl + "clients/" + o + "/athletes", e.post(a, n)
                },
                getAthleteList: function(o) {
                    return a = t.ccUrl + "clients/" + o + "/athletes", e.get(a)
                },
                getStoredPayment: function(o) {
                    return a = t.ccUrl + "clients/" + o + "/card_details", e.get(a)
                },
                checkOutCart: function(o) {
                    return a = t.ccUrl + "carts/" + o + "/touch", e.post(a)
                }
            }
        };
        e.$inject = ["httprequestService", "urlConfig"], angular.module("Coachco").factory("BookingService", e)
    }(angular),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l) {
            return {
                modalOpen: function(e, a, o, n, s) {
                    var i = t.open({
                        animation: !0,
                        templateUrl: e,
                        controller: o,
                        windowClass: a,
                        backdrop: "static",
                        keyboard: !1,
                        resolve: {
                            zipCode: function() {
                                if ("zipModalController" === o) return n
                            },
                            inviteModel: function() {
                                if ("InviteClientController" === o) return n
                            },
                            payments: function() {
                                if ("clientPaymentsController" === o) return n
                            },
                            emailModel: function() {
                                if ("EmailSessionPlannerController" === o) return n
                            },
                            pageModel: function() {
                                if ("ExternalPageController" === o) return n
                            },
                            paymentModel: function() {
                                if ("coachPaymentsModalController" === o) return n
                            },
                            coachData: function() {
                                if ("coachNotesController" === o || "coachRequestSessionController" === o || "setRecurranceController" === o) return n
                            },
                            clientData: function() {
                                if ("clientNotesController" === o) return n
                            },
                            todo: function() {
                                if ("sessionFeedbackController" === o) return n
                            },
                            sessionData: function() {
                                if ("sessionCancelController" === o) return n
                            },
                            event: function() {
                                if ("sessionRescheduleController" === o) return n
                            },
                            todos: function() {
                                if ("sessionCompleteController" === o) return n
                            },
                            createSession: function() {
                                if ("sessionCreateController" === o || "sessionEditController" === o) return n
                            },
                            sessionTodo: function() {
                                if ("sessionChangeLocationController" === o) return n
                            },
                            messageCoach: function() {
                                if ("coachProfileModalController" === o) return n
                            },
                            sessionFeedBack: function() {
                                if ("clientFeedbackModalController" === o) return n
                            },
                            calendarDates: function() {
                                if ("setAvailabilityController" === o) return n
                            }
                        }
                    });
                    return i.result.then(function() {
                        s && s(i.result)
                    }, function() {
                        s && s(i.result)
                    }), i
                },
                modalClose: function(e) {
                    e.dismiss("cancel")
                },
                modalDone: function(e, t) {
                    e.close(t)
                },
                setSessionTimer: function(e) {
                    var t;
                    t = localStorage.getItem("sessionTimer") ? localStorage.getItem("sessionTimer") : 60 * r.checkOutSessionTimeOut;
                    var o = parseInt(t / 60),
                        n = parseInt(t % 60);
                    "start" === e ? a.sessionTimer = i(function() {
                        if (n < 10 && (n = "00" + n), o < 10 && (o = "00" + o), o <= 0 && t <= 0) {
                            var e = JSON.parse(localStorage.getItem("coachSearchResults"));
                            if (a.$emit("sessionExpired", "timerExpired"), "booking.selectYourAthlete" === s.current.name || "booking.bookingPayment" === s.current.name) {
                                var i = "Session Timeout",
                                    r = "Time allocated to complete your transaction has expired. Please click OK below to see the coachâ€™s schedule (it may have changed) and continue shopping.";
                                c.showAlert(i, r, function(t) {
                                    "ok" === t.$$state.value && (localStorage.removeItem("sessionTimer"), e.zip ? s.go("coachSearch.coaches", {
                                        zip: e.zip,
                                        sport: e.sport,
                                        searchParam: hyphenSeparated(e.zip)
                                    }) : e.coachId ? s.go("coachSearch.coaches", {
                                        coachId: e.coachId,
                                        name: e.name,
                                        sport: e.sport,
                                        searchParam: hyphenSeparated(e.name)
                                    }) : s.go("coachSearch.coaches", {
                                        name: e.name,
                                        sport: e.sport,
                                        searchParam: hyphenSeparated(e.name)
                                    }))
                                })
                            } else localStorage.removeItem("sessionTimer")
                        } else t -= 1, o = parseInt(t / 60), n = parseInt(t % 60), localStorage.setItem("sessionTimer", t), n >= 0 && n < 10 && (n = "0" + n), a.sessionStatus = o + ":" + n + " Min", a.sessionHeld = "Session(s) held for " + o + " : " + n + " Min"
                    }, 1e3) : "stop" === e ? (i.cancel(a.sessionTimer), a.sessionTimer = void 0, localStorage.removeItem("sessionTimer")) : "pause" === e && (i.cancel(a.sessionTimer), localStorage.setItem("sessionTimer", t))
                },
                logoutPrompt: function() {
                    var e = "Logout",
                        t = "If you log out, you will lose the sessions that are currently in your cart.";
                    c.showLogoutAlert(e, t, function(e) {
                        "ok" === e.$$state.value && (a.$emit("sessionExpired", "logout"), a.$emit("userLogout", ""))
                    })
                }
            }
        };
        e.$inject = ["$http", "$uibModal", "$rootScope", "$filter", "$cookies", "$state", "$interval", "appConfig", "AlertService", "BookingService"], angular.module("Coachco").service("Coachco_CommonService", e)
    }(angular),
    function() {
        var e = function(e) {
            return {
                showDialog: function(t, a) {
                    var o = e.open({
                        animation: !0,
                        templateUrl: "partials/shared/views/modals/shared.modal.confirm.html",
                        controller: "ConfirmController",
                        windowClass: "model-confirm-dialog model-delete-account",
                        backdrop: "static",
                        keyboard: !1,
                        resolve: {
                            errorModel: function() {
                                var e = {
                                    title: t.title,
                                    message: t.message,
                                    note: t.note,
                                    positiveButtonText: t.positiveBtn,
                                    negativeButtonText: t.negativeBtn
                                };
                                return e
                            }
                        }
                    });
                    o.result.then(function() {
                        a && a(o.result)
                    }, function() {
                        a && a(o.result)
                    })
                },
                closeDialog: function(e) {
                    e.dismiss("cancel")
                },
                doneDialog: function(e, t) {
                    e.close(t)
                }
            }
        };
        e.$inject = ["$uibModal"], angular.module("Coachco").factory("ConfirmDialogService", e)
    }(angular),
    function() {
        angular.module("Coachco").constant("appConfig", {
            pusherKey: "c38c0b0eb52dbc7ce4e3",
            imagePath: "https://www.strivefar.com/",
            liveUrl: "https://www.strivefar.com/",
            productionUrl: "https://www.strivefar.com/",
            commonTitle: "Book a Private Coach for Personal Training | Strivefar",
            commonDesc: "Book Top private coaches for personal sports training. Professional coaching with one on one lessons. Find your perfect coach today!",
            commonKeywords: "Sports Training, Coaching, Book a Private Coach for Personal Training",
            clientRegistrationTitle: "Find a Private Sports Coach | StriveFar",
            coachRegistrationTitle: "Become a Coach Today | StriveFar",
            createAccountTitle: "Begin Training Today | Create A Free StriveFar Coaching Account | StriveFar",
            loginTitle: "Sports Coaching, Individual & Group Lessons | StriveFar",
            searchTitle: "Search For A Soccer Coach For Private Individual & Group Training Lessons | Strivefar",
            athletesTitle: "Find a Private Sports Coach | StriveFar",
            coachesTitle: "Private Sports Coaching Jobs | StriveFar",
            aboutTitle: "About Our Company | StriveFar",
            homeDesc: "StriveFar makes it easy to find sport coaches for affordable individual and group lessons. Find your perfect coach today!",
            companyDesc: "StriveFar is on an online marketplace connecting coaches with athletes for affordable individual and small group lessons.",
            coachesDesc: "Become a coach on StriveFar and get paid doing what you love and sharing what you know. We are looking for qualified coaches in different sports disciplines.",
            athleteDesc: "Find a coach on StriveFar for affordable individual and group training. Improve your technique and attain your goals.",
            clientRegistrationDesc: "StriveFar makes it easy to find sport coaches for affordable individual and group lessons. Find your perfect coach today!",
            coachRegistrationDesc: "StriveFar makes it easy to find sport coaches for affordable individual and group lessons. Find your perfect coach today!",
            loginDesc: "StriveFar makes it easy to find sport coaches for affordable individual and group lessons. Find your perfect coach today!",
            cartItemSessionTimeOut: 15,
            checkOutSessionTimeOut: 15,
            maxCartItemCount: 25,
            welcomePopupDelay: 10,
            gender: "Male",
            genders: ["Male", "Female"],
            gaURL: "https://www.strivefar.com",
            sessionTypes: ["Upcoming", "Completed", "Cancelled"],
            messageTypes: ["Individuals", "Groups"],
            coachStatus: [{
                name: "All",
                value: 0,
                common: !1
            }, {
                name: "Active",
                value: 1,
                common: !0
            }, {
                name: "Pending",
                value: 2,
                common: !0
            }, {
                name: "Declined",
                value: 3,
                common: !0
            }, {
                name: "Inactive",
                value: 4,
                common: !0
            }],
            clubStatus: [{
                name: "All",
                value: 0,
                common: !1
            }, {
                name: "Yes",
                value: 1,
                common: !0
            }, {
                name: "No",
                value: 2,
                common: !0
            }, {
                name: "Pending",
                value: 3,
                common: !0
            }],
            clientStatus: [{
                name: "All",
                value: 0,
                common: !1
            }, {
                name: "Active",
                value: 1,
                common: !0
            }, {
                name: "Cancelled",
                value: 2,
                common: !0
            }, {
                name: "Suspended",
                value: 3,
                common: !0
            }],
            backgroundCheck: [{
                name: "All",
                value: 0,
                common: !1
            }, {
                name: "Pending",
                value: 1,
                common: !0
            }, {
                name: "Not Applied",
                value: 2,
                common: !0
            }, {
                name: "Passed",
                value: 3,
                common: !0
            }],
            sessionStatus: [{
                name: "All",
                value: 0,
                common: !1
            }, {
                name: "Completed",
                value: 1,
                common: !0
            }, {
                name: "Pending",
                value: 2,
                common: !0
            }, {
                name: "Cancelled",
                value: 3,
                common: !0
            }],
            weekDays: [{
                name: "Mon",
                selected: !1
            }, {
                name: "Tue",
                selected: !1
            }, {
                name: "Wed",
                selected: !1
            }, {
                name: "Thu",
                selected: !1
            }, {
                name: "Fri",
                selected: !1
            }, {
                name: "Sat",
                selected: !1
            }, {
                name: "Sun",
                selected: !1
            }],
            commissions: ["Standard", "Custom"],
            paymentStatus: ["Owed", "Paid"],
            groupTypes: [{
                name: "Public (Anyone Can Join)",
                value: "public"
            }, {
                name: "Private (Invitation Only)",
                value: "private"
            }],
            coachSessionTypes: ["Upcoming", "Completed", "Action Required"],
            sortParams: ["Sort by:", "Price", "Distance", "Rating", "Experience", "Male", "Female", "Goalie"],
            sortParamsMob: ["Price", "Distance", "Rating", "Experience", "Male", "Female"],
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            month: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
            monthLong: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        }).constant("Views", {
            HEADER: {
                templateUrl: "partials/shared/views/header.html",
                controller: "headerController"
            },
            FOOTER: {
                templateUrl: "partials/shared/views/footer.html",
                controller: "footerController"
            },
            BANNER: {
                templateUrl: "partials/shared/views/banner.html",
                controller: "bannerController"
            }
        })
    }(),
    function() {
        angular.module("Coachco").factory("httprequestService", ["$http", function(e) {
            return {
                get: function(t) {
                    return e({
                        method: "GET",
                        url: t
                    }).success(function() {}).error(function() {})
                },
                post: function(t, a) {
                    return e({
                        method: "POST",
                        url: t,
                        data: a
                    }).success(function() {}).error(function() {})
                },
                put: function(t, a) {
                    return e({
                        method: "PUT",
                        url: t,
                        data: a
                    }).success(function() {}).error(function() {})
                },
                delete: function(t, a) {
                    return e({
                        method: "DELETE",
                        url: t,
                        data: a
                    }).success(function() {}).error(function() {})
                }
            }
        }])
    }(),
    function() {
        var e = function(e) {
            return {
                composeDialog: function(t, a) {
                    var o = e.open({
                        animation: !0,
                        templateUrl: "partials/shared/views/modals/shared.createMessage.html",
                        controller: "MessageController",
                        windowClass: "model-createmessage",
                        backdrop: "static",
                        keyboard: !1,
                        resolve: {
                            messageModel: function() {
                                return t
                            }
                        }
                    });
                    o.result.then(function() {
                        a && a(o.result)
                    }, function() {
                        a && a(o.result)
                    })
                },
                closeDialog: function(e) {
                    e.dismiss("cancel")
                },
                doneDialog: function(e, t) {
                    e.close(t)
                }
            }
        };
        e.$inject = ["$uibModal"], angular.module("Coachco").factory("CreateMessageService", e)
    }(angular),
    function() {
        var e = function(e, t, a, o) {
            return {
                success: function(e) {
                    return e
                },
                error: function(n) {
                    var s, i;
                    return 500 === n.status ? (s = "Error!", i = "Some error with the communication. Try again!", e.showAlert(s, i)) : 404 === n.status ? (s = "Error!", i = "This service does not exists. Please check the service URL", e.showAlert(s, i)) : 401 === n.status ? (t.authorized = !1, a.go("errorPage", {
                        message: "You are unauthorized to view this page! Please check your Login."
                    })) : 410 === n.status ? (o.removeTokens(), a.go("booking.login")) : 422 === n.status && (s = "Oops!", i = "Cannot process the request.", e.showAlert(s, i)), n
                },
                exception: function(t) {
                    if (500 === t.status) {
                        var a = "Error!",
                            o = "Some error with the communication. Try again!";
                        e.showAlert(a, o)
                    }
                    return t
                },
                transformResponse: function(e, t, a) {
                    var o = {};
                    return isJson(e) ? o.data = JSON.parse(e) : o.data = {}, o.status = a, o.headers = t(), o
                }
            }
        };
        e.$inject = ["AlertService", "$rootScope", "$state", "AuthTokenFactory"], angular.module("Coachco").service("ResponseHandlerService", e)
    }(angular),
    function() {
        var e = function() {
            var e = [];
            return {
                setData: function(t, a) {
                    e[t] = a
                },
                getData: function(t) {
                    return e[t]
                }
            }
        };
        angular.module("Coachco").factory("StoreService", e)
    }(angular),
    function() {
        var e = function(e) {
            return {
                modalOpen: function(t, a, o, n, s) {
                    var i = e.open({
                        animation: !0,
                        templateUrl: a,
                        controller: n,
                        windowClass: o,
                        backdrop: "static",
                        keyboard: !1,
                        resolve: {
                            photoModel: function() {
                                var e = {
                                    imageArray: t.imageArray,
                                    croppedImage: t.croppedImage,
                                    postURL: t.postURL,
                                    picFile: t.picFile,
                                    isClient: t.isClient,
                                    isCoach: t.isCoach,
                                    athlete: t.athlete
                                };
                                return e
                            }
                        }
                    });
                    i.result.then(function() {
                        s && s(i.result)
                    }, function() {
                        s && s(i.result)
                    })
                },
                modalClose: function(e, t) {
                    e.dismiss(t)
                },
                modalDone: function(e, t) {
                    e.close(t)
                }
            }
        };
        e.$inject = ["$uibModal"], angular.module("Coachco").factory("UploadPhotoService", e)
    }(angular),
    function() {
        angular.module("Coachco").constant("urlConfig", {
            ccUrl: "https://www.strivefar.com/api/",
            baseUrl: "https://www.strivefar.com/"
        })
    }(),
    function() {
        var e = function(e) {
            return {
                isImage: function(t) {
                    var a = e.defer(),
                        o = new Image;
                    return o.onerror = function() {
                        a.resolve(!1)
                    }, o.onload = function() {
                        a.resolve(!0)
                    }, o.src = t, a.promise
                }
            }
        };
        e.$inject = ["$q"], angular.module("Coachco").factory("Utils", e)
    }(angular),
    function() {
        var e = function(e, t, a, o, n, s, i, r, c, l, d, u, m, h) {
            e.sport = removeLastWord(separateHyphenedString(a.sport)), e.state = a.state, e.city = a.city, e.zip = a.zip, e.user = {}, e.searched = !1, e.zipcode = "", e.isNumber = "", e.isZipInList = !1, e.sportsElement = angular.element("#simple-btn-keyboard-nav-seo"), e.zipElement = angular.element("#zip");
            var p = new Date;
            e.currentYear = p.getFullYear(), u.coachFromPage = u.fromCalendarView = u.fromCalender = u.fromProfileDetail = !1, e.setSelectedActivity = function(t) {
                e.activities.forEach(function(e) {
                    angular.isDefined(t.sport) ? e.activity.toLowerCase() === t.sport.toLowerCase() && (t.image = angular.copy(e.questions.sport_image)) : delete t.image
                })
            }, e.setSelectedClub = function(t) {
                e.clubs.forEach(function(e) {
                    e.name === t.name && (t.image = e.image_path)
                })
            }, e.setSearchedCoachActivity = function(t) {
                e.activities.forEach(function(e) {
                    angular.isDefined(t.sport) ? e.activity.toLowerCase() === t.activity.toLowerCase() && (t.selectedActivity = angular.copy(e)) : delete t.selectedActivity
                })
            }, e.setSearchedSport = function(t) {
                e.activities.forEach(function(a) {
                    a.activity.toLowerCase() === t.toLowerCase() && (e.selectedActivity = angular.copy(a))
                })
            }, e.fetchActivityDetails = function() {
                e.activities = [], m.getCoachActivities(function(t) {
                    t.$resolved && 200 === t.status && t.data.length > 0 && (e.activities = t.data, e.setSearchedSport(e.sport))
                }, function(e) {
                    var t = "Error!",
                        a = "Email " + e.statusText;
                    AlertService.showAlert(t, a)
                })
            }, e.fetchActivityDetails(), e.fetchClubs = function() {
                e.clubs = [], h.getAllClubs(function(t) {
                    t.$resolved && 200 === t.status && t.data.length > 0 && (e.clubs = t.data)
                }, function(e) {
                    var t = "Error!",
                        a = "Email " + e.statusText;
                    AlertService.showAlert(t, a)
                })
            }, e.fetchClubs(), e.showLoader = !1, e.showLoaderImage = function() {
                e.showLoader = !0
            }, e.hideLoaderImage = function() {
                e.showLoader = !1
            }, e.getCoachesList = function() {
                e.showLoaderImage(), angular.isDefined(e.city) && angular.isDefined(e.state) ? h.getCoachesWithCityStateSports(e.city, e.state, e.sport, function(t) {
                    e.coaches = t.data, e.coaches.length > 0 && (e.coaches.forEach(function(t) {
                        e.setSelectedActivity(t)
                    }), window.prerenderReady = !0), e.hideLoaderImage()
                }) : angular.isDefined(a.state) && !parseInt(angular.isDefined(a.state)) ? h.getCoachesWithStateSports(e.state, e.sport, function(t) {
                    e.coaches = t.data, e.coaches.length > 0 && (e.coaches.forEach(function(t) {
                        e.setSelectedActivity(t)
                    }), window.prerenderReady = !0), e.hideLoaderImage()
                }) : parseInt(angular.isDefined(a.state)) && i.getCoachSearchList(a.zip, e.sport).success(function(t) {
                    e.coaches = t, e.coaches.length > 0 && (e.coaches.forEach(function(t) {
                        e.setSelectedActivity(t)
                    }), window.prerenderReady = !0), e.hideLoaderImage()
                })
            }, e.getCoachesList(), e.getAllLists = function() {
                l.getSportsList().success(function(t) {
                    e.sportsList = t, u.showLoader = !1
                }).error(function() {})
            }, localStorage.removeItem("currentStateName"), window.onbeforeunload = function() {
                localStorage.removeItem("currentStateName")
            }, e.goToCoachEnrollment = function() {
                t.go("coachEnrollment.createAccount")
            }, e.checkQueryValid = function() {}, e.initializeAuth = function() {
                e.firstName = AuthFactory.getFirstName(), e.lastName = AuthFactory.getLastName(), e.userId = AuthFactory.getUserId(), e.loggedIn = AuthFactory.isLoggedIn(), e.isClient = AuthFactory.isClient(), e.isCoach = AuthFactory.isCoach(), e.isRegistered = AuthFactory.isRegistered(), u.profileCompletionStatus = AuthFactory.getCompletionStatus(), e.getUserType()
            }, e.getAllLists(), e.prefetchZipCodes = function() {
                e.prefetchZipCodeList = JSON.parse(localStorage.getItem("ZipCodeList")), (angular.isUndefined(e.prefetchZipCodeList) || null === e.prefetchZipCodeList || 0 === e.prefetchZipCodeList.length) && l.getzipCodeList().success(function(t) {
                    e.prefetchZipCodeList = t, localStorage.setItem("ZipCodeList", JSON.stringify(e.prefetchZipCodeList))
                })
            }, e.prefetchZipCodes(), e.filterByCoachSport = function(t) {
                return !e.asyncSelected || (!e.asyncSelected.sport || t.toLowerCase() === e.asyncSelected.sport.toLowerCase())
            }, e.searchCoach = function(t) {
                var a = "";
                if (isNaN(parseInt(t))) a = d.ccUrl + "coach_list?search=" + t, e.isNumber = !1;
                else {
                    if ("8" === t.charAt(0)) return e.isNumber = !0, e.tempArray = [], e.zipCount = 0, e.prefetchZipCodeList.map(function(a) {
                        a === t && (e.asyncSelected = t, e.searchValueSelected = e.asyncSelected, e.validZipQuery = !0, e.validNameQuery = !0), a.indexOf(t) > -1 && e.zipCount < 5 && (e.zipCount++, e.tempArray.push(a))
                    }), e.zipcodeList = o("limitTo")(e.tempArray, 5), e.zipcodeList;
                    a = d.ccUrl + "zipcodes?search=" + t, e.isNumber = !0
                }
                return n.get(a, {
                    params: {
                        address: t,
                        sensor: !1
                    }
                }).then(function(a) {
                    return e.isNumber ? (e.zipcodeList = a.data, e.tempArray = [], e.zipCount = 0, a.data.map(function(a) {
                        a === t && (e.asyncSelected = t, e.searchValueSelected = e.asyncSelected, e.validZipQuery = !0, e.validNameQuery = !0), a.indexOf(t) > -1 && e.zipCount < 5 && (e.zipCount++, e.tempArray.push(a))
                    }), e.zipcodeList = o("limitTo")(e.tempArray, 5), e.zipcodeList) : (e.tempArray = [], e.zipCount = 0, a.data.map(function(a) {
                        a.name.toLowerCase() === t.toLowerCase() && (e.asyncSelected = a, e.searchValueSelected = e.asyncSelected.name, e.validZipQuery = !0, e.validNameQuery = !0), a.name.toLowerCase().indexOf(t.toLowerCase()) > -1 && e.zipCount < 5 && (e.zipCount++, e.setSelectedActivity(a), "club" === a.type && e.setSelectedClub(a), e.tempArray.push(a))
                    }), e.coachesClubsList = o("limitTo")(e.tempArray, 5), e.coachesClubsList)
                })
            }, e.validateQuery = function() {
                e.mainForm.zipcode.$valid && e.zipcodeList.length > 0 ? e.validZipQuery = !0 : (e.validZipQuery = !1, e.validNameQuery = !1), e.mainForm.zipcode.$valid && e.coachesClubsList.length > 0 ? (e.validNameQuery = !0, e.coachesClubsList.forEach(function(t) {
                    e.setSelectedActivity(t)
                })) : (e.validNameQuery = !1, e.validZipQuery = !1)
            }, e.afterSelect = function(t, a, o, n) {
                n.which || n.keyCode;
                e.validZipQuery = !0, e.validNameQuery = !0, e.asyncSelected = t, e.isNumber ? e.searchValueSelected = e.asyncSelected : e.searchValueSelected = e.asyncSelected.name, e.shiftFocusToDropdown()
            }, e.checkIfEnterKeyWasPressed = function(t) {
                var a = t.which || t.keyCode;
                switch (a) {
                    case 9:
                        if (t.preventDefault(), "zipcode" === t.currentTarget.name) {
                            var o = /^(\d{5}(-\d{4})?|[A-Z]\d[A-Z] *\d[A-Z]\d)$/;
                            o.test(e.zipcode) ? (e.isZipInList = e.searchZipList(), e.isZipInList ? (t.target.value = angular.element(".typeahead").find('li[class="active"]').text(), e.shiftFocusToDropdown()) : e.zipElement.trigger("blur")) : (e.zipElement.trigger("click"), t.target.value = angular.element(".typeahead").find('li[class="active"]').text(), e.shiftFocusToDropdown())
                        } else "Request a Sport" !== t.target.innerText ? (e.sportsElement.text(t.target.innerText), e.mainForm.$valid = !0, e.sportsElement.trigger("click"), e.changeFocusDropdown()) : e.requestASportModal();
                        break;
                    case 13:
                        t.preventDefault(), angular.element("#zip").trigger("blur")
                }
            }, e.searchZipList = function() {
                if (e.zipcodeList.indexOf(e.zipcode) !== -1) return !0
            }, e.shiftFocusToDropdown = function() {
                r(function() {
                    e.sportsElement.focus(), e.showDropdown()
                })
            }, e.showDropdown = function() {
                e.sportsElement.trigger("click")
            }, e.changeFocusDropdown = function(t) {
                "Request a Sport" !== t ? (e.sportsElement.text(t), e.sportsElement.trigger("focusout"), angular.element(".find-coach-btn").focus(), e.selectedSport = t) : e.requestASportModal()
            }, e.openZipModal = function() {
                var t = "partials/home/views/modal/home.zipcode.modal.html",
                    a = "model-zipcode",
                    o = "zipModalController";
                c.modalOpen(t, a, o, e.zipcode)
            }, e.requestASportModal = function() {
                var e = "partials/home/views/modal/home.reqasport.modal.html",
                    t = "model-new-sports",
                    a = "newSportsModalController";
                c.modalOpen(e, t, a)
            }, e.searchForCoach = function() {
                e.searched = !0, angular.element(".mainForm").hasClass("ng-valid") && r(function() {
                    e.isNumber ? t.go("coachSearch.coaches", {
                        zip: e.searchValueSelected,
                        sport: hyphenSeparated(e.sportsElement.text()),
                        searchType: "zip",
                        searchParam: e.searchValueSelected
                    }) : angular.isDefined(e.asyncSelected) && "coach" === e.asyncSelected.type ? t.go("coachSearch.coaches", {
                        name: e.asyncSelected.name,
                        sport: hyphenSeparated(e.sportsElement.text()),
                        searchType: e.asyncSelected.type,
                        searchParam: hyphenSeparated(e.asyncSelected.name)
                    }) : angular.isDefined(e.asyncSelected) && "club" === e.asyncSelected.type ? t.go("coachSearch.coaches", {
                        club: e.asyncSelected.name,
                        sport: hyphenSeparated(e.sportsElement.text()),
                        searchType: e.asyncSelected.type,
                        searchParam: hyphenSeparated(e.asyncSelected.name)
                    }) : t.go("coachSearch.coaches", {
                        name: e.searchValueSelected,
                        sport: hyphenSeparated(e.sportsElement.text()),
                        searchType: null,
                        searchParam: hyphenSeparated(e.searchValueSelected)
                    })
                }, 100)
            }, e.slideMenu = function() {
                angular.element(".navlinks").toggleClass("in")
            }, $(window).resize(function() {
                $(window).width() >= 1024 && !isMobile() && angular.element(".navlinks").removeClass("in")
            }), $(".flexslider").flexslider({
                animation: "slide",
                controlsContainer: $(".custom-controls-container"),
                customDirectionNav: $(".custom-navigation a"),
                touch: !0
            }), e.initializeAuth = function() {
                e.firstName = AuthFactory.getFirstName(), e.lastName = AuthFactory.getLastName(), e.userId = AuthFactory.getUserId(), e.loggedIn = AuthFactory.isLoggedIn(), e.isClient = AuthFactory.isClient(), e.isCoach = AuthFactory.isCoach(), e.isRegistered = AuthFactory.isRegistered(), u.profileCompletionStatus = AuthFactory.getCompletionStatus(), e.getUserType()
            }, e.goToTrustSafety = function(e) {
                t.go("Athletes", {
                    scrollPage: e
                })
            }, e.scrollToPage = function() {
                var e = window.matchMedia("(min-width: 768px)");
                angular.isDefined(a.scrollPage) && null !== a.scrollPage && r(function() {
                    var t = angular.element("#atheletes-sec5"),
                        a = angular.element(".banner-content");
                    e.matches ? angular.element("html, body").animate({
                        scrollTop: t.offset().top + a.height()
                    }, 1200) : angular.element("html, body").animate({
                        scrollTop: t.offset().top + a.height()
                    }, 1200)
                })
            }, e.hyphenSeparated = function(e) {
                return e ? hyphenSeparated(e) : void 0
            }
        };
        e.$inject = ["$scope", "$state", "$stateParams", "$filter", "$http", "lazyLoad", "CoachApiService", "$timeout", "Coachco_CommonService", "HomeApiService", "urlConfig", "$rootScope", "ActivitiesService", "CommonAPIInterfaceService"], angular.module("Coachco").controller("marketingSEOController", e)
    }();
var findElement = function(e, t, a) {
    for (var o = 0; o < e.length; o++)
        if (e[o][t] === a) return e[o];
    return e[0]
};
String.prototype.capitalize = function() {
    return this.toLowerCase().replace(/\b\w/g, function(e) {
        return e.toUpperCase()
    })
};