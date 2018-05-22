(function(window){var svgSprite='<svg><symbol id="icon-eurooo-diqiu" viewBox="0 0 1024 1024"><path d="M1023.968793 512.0972c0-282.258242-228.984556-511.073966-511.452563-511.073966-282.473122 0-511.462795 228.815722-511.462795 511.073966 0 260.737573 195.390741 475.854231 447.837044 507.156 14.231147 2.999101 31.564741 4.746785 52.209522 4.746785 5.795601 0 11.384509-0.304924 16.78207-0.857471C797.877943 1020.265179 1023.968793 792.575015 1023.968793 512.0972zM950.836169 519.328399c-1.471411-25.500029-4.8399-50.460814-9.969375-74.718637 0.455339-8.661681 0.579151-16.868022 0.346877-24.49726 6.343032 29.660502 9.687986 60.432236 9.687986 91.984698C950.902679 514.513057 950.875051 516.921751 950.836169 519.328399zM74.120572 512.0972c0-30.977405 3.225236-61.200685 9.345202-90.360825 18.931886 20.247766 63.554125 19.769915 74.436224-10.483039 19.471131 11.604504 45.637286 13.717484 45.637286 36.912165 0 76.550227 2.725897 158.618759 72.279247 159.886547 1.958471 0.025581 38.788778 13.957944 56.316786 59.416164 6.060619 15.711767 30.032959 0 56.321902 0 13.124008 0 0 22.110053 0 69.921714 0 47.626454 102.680569 120.959633 102.680569 120.959633-0.475804 31.525858 0.818588 57.017702 3.442161 77.38314-23.177287-0.426689-42.709813 2.645062-58.055262 7.868674C230.627375 907.644909 74.120572 728.142955 74.120572 512.0972zM620.440877 936.783561c-2.272604-11.126653-12.215375-17.220015-30.356301-12.451742 14.474677-61.640676 21.511461-96.169728 51.728602-122.387045 43.719746-37.898564 5.206218-80.04355-28.063232-75.076769-26.222433 3.958895-9.651149-32.467234-33.055594-34.481983-23.404445-1.958471-53.969486-48.511552-87.653346-64.530291-17.855443-8.479545-35.402894-31.203539-62.940184-32.221658-24.407215-0.946492-60.07615 20.637618-60.07615 3.999824 0-53.590889-5.426213-91.832236-6.541539-107.104012-0.900446-12.269607-8.020113-4.132845 24.974087-3.339838 17.956744 0.48092 9.185577-36.067997 26.959162-37.495409 17.456382-1.381367 59.052916 16.341056 69.650557 9.277668 9.845564-6.577352 72.371338 164.12683 72.371338 28.216717 0-16.126177-8.351641-44.163828 0-59.436629 33.030013-60.352424 63.952163-109.539311 61.175104-116.734697-1.575781-4.050986-33.792323-7.39594-59.569649 1.253462-8.699541 2.904963 2.766826 16.530355-9.727892 19.440434-46.814006 10.807404-88.175196-12.622623-73.691309-34.645701 14.831785-22.570509 68.571044-9.845564 73.282016-55.124718 2.710549-25.935927 4.956549-55.974003 6.45968-78.298935 63.004648 9.852726 56.069163-81.7677-37.613081-91.574381 189.525561 2.217349 350.128371 124.61565 409.062591 294.48692-2.980683-2.718734-6.448425-4.371258-10.453365-4.774413-28.324157-70.749511-97.074267-19.547874-73.752703 42.855112-124.959457 96.057172-92.973143 163.052434-51.9179 201.416569 21.603552 20.166931 42.200242 50.496628 55.610754 72.279247-14.596442 42.561444 53.781211 25.518448 87.503954-46.709636C890.911457 782.384621 771.249286 898.633281 620.440877 936.783561z"  ></path></symbol><symbol id="icon-eurooo-bars" viewBox="0 0 1024 1024"><path d="M950.857143 768v73.142857c0 20.004571-16.566857 36.571429-36.571429 36.571429H109.714286c-20.004571 0-36.571429-16.566857-36.571429-36.571429v-73.142857c0-20.004571 16.566857-36.571429 36.571429-36.571429h804.571428c20.004571 0 36.571429 16.566857 36.571429 36.571429z m0-292.571429v73.142858c0 20.004571-16.566857 36.571429-36.571429 36.571428H109.714286c-20.004571 0-36.571429-16.566857-36.571429-36.571428v-73.142858c0-20.004571 16.566857-36.571429 36.571429-36.571428h804.571428c20.004571 0 36.571429 16.566857 36.571429 36.571428z m0-292.571428v73.142857c0 20.004571-16.566857 36.571429-36.571429 36.571429H109.714286c-20.004571 0-36.571429-16.566857-36.571429-36.571429V182.857143c0-20.004571 16.566857-36.571429 36.571429-36.571429h804.571428c20.004571 0 36.571429 16.566857 36.571429 36.571429z" fill="" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)