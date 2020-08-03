/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1bfc9850-d4585f5b9f0efc615aad.js"
  },
  {
    "url": "1bfc9850-d4585f5b9f0efc615aad.js.map",
    "revision": "784a26a52df9530cbdad92ff2837b271"
  },
  {
    "url": "252f366e-473853b9d5eee932bed6.js"
  },
  {
    "url": "252f366e-473853b9d5eee932bed6.js.map",
    "revision": "f0ba70267702a310cb389d028f8d1f35"
  },
  {
    "url": "404.html",
    "revision": "412cb574315f37340e63c7aad1901a13"
  },
  {
    "url": "404/index.html",
    "revision": "235206af8cddd3367ea5ac9c16b8c7cd"
  },
  {
    "url": "95b64a6e-583f7a8194765f502252.js"
  },
  {
    "url": "95b64a6e-583f7a8194765f502252.js.map",
    "revision": "3d21cdccdb3bf5f0638f2475ab1dacd2"
  },
  {
    "url": "app-0dee0f36cf231d14481c.js"
  },
  {
    "url": "app-0dee0f36cf231d14481c.js.map",
    "revision": "11626950fa593b737e45fbd5b81bad79"
  },
  {
    "url": "chunk-map.json",
    "revision": "aec6ad89539d8fd2ed2cbe4664099e1e"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-1af2b3b136460c4ee92c.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-1af2b3b136460c4ee92c.js.map",
    "revision": "1f9694425cdafffcbee111ebbfefdc61"
  },
  {
    "url": "component---src-pages-404-js-ecb8928078486b8a7e43.js"
  },
  {
    "url": "component---src-pages-404-js-ecb8928078486b8a7e43.js.map",
    "revision": "a10f407e7e8af8106b31ae70044f7bae"
  },
  {
    "url": "component---src-pages-index-js-df2ad46dc195f259f9c9.js"
  },
  {
    "url": "component---src-pages-index-js-df2ad46dc195f259f9c9.js.map",
    "revision": "070e537b0b970ed3105f7e59210f6b4a"
  },
  {
    "url": "d7eeaac4-9df777bc4a17974a1e2e.js"
  },
  {
    "url": "d7eeaac4-9df777bc4a17974a1e2e.js.map",
    "revision": "6b9cb74cea3951215c3748b737faf2fc"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "6615d99be237c1affd991f2f60562042"
  },
  {
    "url": "framework-a7bb16c5c6afeed647b2.js"
  },
  {
    "url": "framework-a7bb16c5c6afeed647b2.js.map",
    "revision": "cedebc8e93c59efaa2af4d4c61652d0b"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "843f1398f5e6bb223eae32a59327ca91"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "54469e8d786813518f7f572904406aa7"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "9151d6f26c285a3966dc0bb514fb0e40"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "272beedd5f27c4740ac278e5dc9e2029"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "7ed7d1046d4dee834f8b3125c9cd7efe"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "ba6002f99778d565d8be8a00c73a8858"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "6b2926acb004771b93e02a36eff0034c"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "2398e80a281ad1a5c88754a56692b649"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "24939b7f611f8afa3fe5f1ec12e44350"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "005257cd50f15eb9e62f4650e3479ee0"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "cac854fcc4c8f6ff139c6fdd8a8836f8"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "d2d3612af1df181302e193fa8c922dd4"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "885296f794bc4c06d05f9cb1f0a23695"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "7d549c286385353a6c4958093590c920"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "7ccb1677a3924eb7498e27ccb409e361"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "polyfill-1623e8dfae5ff58e9a52.js"
  },
  {
    "url": "polyfill-1623e8dfae5ff58e9a52.js.map",
    "revision": "44f667e0a396ea338d0d1735b21ca31a"
  },
  {
    "url": "robots.txt",
    "revision": "a7ebf794586c3c03946a02a9c46368f5"
  },
  {
    "url": "sitemap.xml",
    "revision": "548180775e564adabe5cff4bba970e94"
  },
  {
    "url": "static/0ae19800753980c5ce212371f138f227/0aa94/sketch.webp"
  },
  {
    "url": "static/0ae19800753980c5ce212371f138f227/4c427/sketch.png"
  },
  {
    "url": "static/0ae19800753980c5ce212371f138f227/91664/sketch.png"
  },
  {
    "url": "static/0ae19800753980c5ce212371f138f227/c05ea/sketch.webp"
  },
  {
    "url": "static/0ae19800753980c5ce212371f138f227/e711a/sketch.webp"
  },
  {
    "url": "static/0ae19800753980c5ce212371f138f227/ff4be/sketch.png"
  },
  {
    "url": "static/0cfdd8aabddfbc9c1a5c20a644eea6e3/0aa94/fcpx.webp"
  },
  {
    "url": "static/0cfdd8aabddfbc9c1a5c20a644eea6e3/4c427/fcpx.png"
  },
  {
    "url": "static/0cfdd8aabddfbc9c1a5c20a644eea6e3/91664/fcpx.png"
  },
  {
    "url": "static/0cfdd8aabddfbc9c1a5c20a644eea6e3/c05ea/fcpx.webp"
  },
  {
    "url": "static/0cfdd8aabddfbc9c1a5c20a644eea6e3/e711a/fcpx.webp"
  },
  {
    "url": "static/0cfdd8aabddfbc9c1a5c20a644eea6e3/ff4be/fcpx.png"
  },
  {
    "url": "static/1267163138072343230eeacccbe14fa6/10d63/64890050_111085460021948_5412002401289017378_n.jpg"
  },
  {
    "url": "static/1267163138072343230eeacccbe14fa6/4e333/64890050_111085460021948_5412002401289017378_n.jpg"
  },
  {
    "url": "static/1267163138072343230eeacccbe14fa6/54d25/64890050_111085460021948_5412002401289017378_n.webp"
  },
  {
    "url": "static/1267163138072343230eeacccbe14fa6/578e8/64890050_111085460021948_5412002401289017378_n.webp"
  },
  {
    "url": "static/1267163138072343230eeacccbe14fa6/61be4/64890050_111085460021948_5412002401289017378_n.webp"
  },
  {
    "url": "static/1267163138072343230eeacccbe14fa6/8dbf3/64890050_111085460021948_5412002401289017378_n.webp"
  },
  {
    "url": "static/1267163138072343230eeacccbe14fa6/9104c/64890050_111085460021948_5412002401289017378_n.jpg"
  },
  {
    "url": "static/1267163138072343230eeacccbe14fa6/991d2/64890050_111085460021948_5412002401289017378_n.webp"
  },
  {
    "url": "static/1267163138072343230eeacccbe14fa6/c01e2/64890050_111085460021948_5412002401289017378_n.jpg"
  },
  {
    "url": "static/1267163138072343230eeacccbe14fa6/e75b5/64890050_111085460021948_5412002401289017378_n.jpg"
  },
  {
    "url": "static/1267163138072343230eeacccbe14fa6/e90a5/64890050_111085460021948_5412002401289017378_n.webp"
  },
  {
    "url": "static/1267163138072343230eeacccbe14fa6/f422e/64890050_111085460021948_5412002401289017378_n.jpg"
  },
  {
    "url": "static/1a119e727468be6f79f0223bc63a0b7b/0756a/pratyushPhoto2.png"
  },
  {
    "url": "static/1a119e727468be6f79f0223bc63a0b7b/34b62/pratyushPhoto2.webp"
  },
  {
    "url": "static/1a119e727468be6f79f0223bc63a0b7b/42c55/pratyushPhoto2.png"
  },
  {
    "url": "static/1a119e727468be6f79f0223bc63a0b7b/61fd6/pratyushPhoto2.png"
  },
  {
    "url": "static/1a119e727468be6f79f0223bc63a0b7b/62915/pratyushPhoto2.png"
  },
  {
    "url": "static/1a119e727468be6f79f0223bc63a0b7b/7f8e9/pratyushPhoto2.webp"
  },
  {
    "url": "static/1a119e727468be6f79f0223bc63a0b7b/a3e81/pratyushPhoto2.webp"
  },
  {
    "url": "static/1a119e727468be6f79f0223bc63a0b7b/bc59e/pratyushPhoto2.png"
  },
  {
    "url": "static/1a119e727468be6f79f0223bc63a0b7b/cde37/pratyushPhoto2.webp"
  },
  {
    "url": "static/1a119e727468be6f79f0223bc63a0b7b/fccb4/pratyushPhoto2.webp"
  },
  {
    "url": "static/2463f854d1e76b0c0cddfff44a0d5338/14b42/a8c0lu2xpeqls75acief.jpg"
  },
  {
    "url": "static/2463f854d1e76b0c0cddfff44a0d5338/1f5c5/a8c0lu2xpeqls75acief.webp"
  },
  {
    "url": "static/2463f854d1e76b0c0cddfff44a0d5338/2244e/a8c0lu2xpeqls75acief.jpg"
  },
  {
    "url": "static/2463f854d1e76b0c0cddfff44a0d5338/4fe8c/a8c0lu2xpeqls75acief.jpg"
  },
  {
    "url": "static/2463f854d1e76b0c0cddfff44a0d5338/58556/a8c0lu2xpeqls75acief.webp"
  },
  {
    "url": "static/2463f854d1e76b0c0cddfff44a0d5338/61e93/a8c0lu2xpeqls75acief.webp"
  },
  {
    "url": "static/2463f854d1e76b0c0cddfff44a0d5338/86e11/a8c0lu2xpeqls75acief.jpg"
  },
  {
    "url": "static/2463f854d1e76b0c0cddfff44a0d5338/a7715/a8c0lu2xpeqls75acief.jpg"
  },
  {
    "url": "static/2463f854d1e76b0c0cddfff44a0d5338/ad85c/a8c0lu2xpeqls75acief.webp"
  },
  {
    "url": "static/2463f854d1e76b0c0cddfff44a0d5338/d1f52/a8c0lu2xpeqls75acief.webp"
  },
  {
    "url": "static/2463f854d1e76b0c0cddfff44a0d5338/e30b5/a8c0lu2xpeqls75acief.webp"
  },
  {
    "url": "static/2463f854d1e76b0c0cddfff44a0d5338/f836f/a8c0lu2xpeqls75acief.jpg"
  },
  {
    "url": "static/2aa59663e58354bec49e51d2c6bd10d6/2a4de/preview.png"
  },
  {
    "url": "static/2aa59663e58354bec49e51d2c6bd10d6/403a4/preview.webp"
  },
  {
    "url": "static/2aa59663e58354bec49e51d2c6bd10d6/58556/preview.webp"
  },
  {
    "url": "static/2aa59663e58354bec49e51d2c6bd10d6/630fb/preview.png"
  },
  {
    "url": "static/2aa59663e58354bec49e51d2c6bd10d6/6d161/preview.png"
  },
  {
    "url": "static/2aa59663e58354bec49e51d2c6bd10d6/ad85c/preview.webp"
  },
  {
    "url": "static/2aa59663e58354bec49e51d2c6bd10d6/e7487/preview.webp"
  },
  {
    "url": "static/2aa59663e58354bec49e51d2c6bd10d6/ee604/preview.png"
  },
  {
    "url": "static/2cb1230b601a9f4c34eb90be300e9a54/aff39/sams.png"
  },
  {
    "url": "static/2cb1230b601a9f4c34eb90be300e9a54/c1598/sams.png"
  },
  {
    "url": "static/2ed6525940a535066abe1591a5881f68/0aa94/angular.webp"
  },
  {
    "url": "static/2ed6525940a535066abe1591a5881f68/4c427/angular.png"
  },
  {
    "url": "static/2ed6525940a535066abe1591a5881f68/91664/angular.png"
  },
  {
    "url": "static/2ed6525940a535066abe1591a5881f68/c05ea/angular.webp"
  },
  {
    "url": "static/2ed6525940a535066abe1591a5881f68/e711a/angular.webp"
  },
  {
    "url": "static/2ed6525940a535066abe1591a5881f68/ff4be/angular.png"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/1f5c5/mutual-fund-calculator.webp"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/2a4de/mutual-fund-calculator.png"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/497c6/mutual-fund-calculator.png"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/58556/mutual-fund-calculator.webp"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/61e93/mutual-fund-calculator.webp"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/65e33/mutual-fund-calculator.png"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/685a2/mutual-fund-calculator.webp"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/69585/mutual-fund-calculator.png"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/ad85c/mutual-fund-calculator.webp"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/bbee5/mutual-fund-calculator.png"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/d1f52/mutual-fund-calculator.webp"
  },
  {
    "url": "static/30cc58e96d71f5208c9d112b172a3174/ee604/mutual-fund-calculator.png"
  },
  {
    "url": "static/3152f7a19b4253f60ee433f88c95fd02/10d63/64791837_371471170393695_3228412790267314385_n.jpg"
  },
  {
    "url": "static/3152f7a19b4253f60ee433f88c95fd02/4e333/64791837_371471170393695_3228412790267314385_n.jpg"
  },
  {
    "url": "static/3152f7a19b4253f60ee433f88c95fd02/54d25/64791837_371471170393695_3228412790267314385_n.webp"
  },
  {
    "url": "static/3152f7a19b4253f60ee433f88c95fd02/578e8/64791837_371471170393695_3228412790267314385_n.webp"
  },
  {
    "url": "static/3152f7a19b4253f60ee433f88c95fd02/61be4/64791837_371471170393695_3228412790267314385_n.webp"
  },
  {
    "url": "static/3152f7a19b4253f60ee433f88c95fd02/8dbf3/64791837_371471170393695_3228412790267314385_n.webp"
  },
  {
    "url": "static/3152f7a19b4253f60ee433f88c95fd02/9104c/64791837_371471170393695_3228412790267314385_n.jpg"
  },
  {
    "url": "static/3152f7a19b4253f60ee433f88c95fd02/991d2/64791837_371471170393695_3228412790267314385_n.webp"
  },
  {
    "url": "static/3152f7a19b4253f60ee433f88c95fd02/c01e2/64791837_371471170393695_3228412790267314385_n.jpg"
  },
  {
    "url": "static/3152f7a19b4253f60ee433f88c95fd02/e75b5/64791837_371471170393695_3228412790267314385_n.jpg"
  },
  {
    "url": "static/3152f7a19b4253f60ee433f88c95fd02/e90a5/64791837_371471170393695_3228412790267314385_n.webp"
  },
  {
    "url": "static/3152f7a19b4253f60ee433f88c95fd02/f422e/64791837_371471170393695_3228412790267314385_n.jpg"
  },
  {
    "url": "static/3500eb903f7a9c057b45b789cfc5da63/0aa94/web.webp"
  },
  {
    "url": "static/3500eb903f7a9c057b45b789cfc5da63/4c427/web.png"
  },
  {
    "url": "static/3500eb903f7a9c057b45b789cfc5da63/91664/web.png"
  },
  {
    "url": "static/3500eb903f7a9c057b45b789cfc5da63/c05ea/web.webp"
  },
  {
    "url": "static/3500eb903f7a9c057b45b789cfc5da63/e711a/web.webp"
  },
  {
    "url": "static/3500eb903f7a9c057b45b789cfc5da63/ff4be/web.png"
  },
  {
    "url": "static/35261891568ab6bb0697b2ee03e45d98/0aa94/seo.webp"
  },
  {
    "url": "static/35261891568ab6bb0697b2ee03e45d98/4c427/seo.png"
  },
  {
    "url": "static/35261891568ab6bb0697b2ee03e45d98/91664/seo.png"
  },
  {
    "url": "static/35261891568ab6bb0697b2ee03e45d98/c05ea/seo.webp"
  },
  {
    "url": "static/35261891568ab6bb0697b2ee03e45d98/e711a/seo.webp"
  },
  {
    "url": "static/35261891568ab6bb0697b2ee03e45d98/ff4be/seo.png"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/0aa94/nodejs.webp"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/4c427/nodejs.png"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/91664/nodejs.png"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/c05ea/nodejs.webp"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/e711a/nodejs.webp"
  },
  {
    "url": "static/394d4a6d64b33c86aa71e6ec7896c283/ff4be/nodejs.png"
  },
  {
    "url": "static/4b44af359362fcf3f410f92f473fd840/10d63/73401813_753153461834224_5367806878822576310_n.jpg"
  },
  {
    "url": "static/4b44af359362fcf3f410f92f473fd840/4e333/73401813_753153461834224_5367806878822576310_n.jpg"
  },
  {
    "url": "static/4b44af359362fcf3f410f92f473fd840/54d25/73401813_753153461834224_5367806878822576310_n.webp"
  },
  {
    "url": "static/4b44af359362fcf3f410f92f473fd840/578e8/73401813_753153461834224_5367806878822576310_n.webp"
  },
  {
    "url": "static/4b44af359362fcf3f410f92f473fd840/61be4/73401813_753153461834224_5367806878822576310_n.webp"
  },
  {
    "url": "static/4b44af359362fcf3f410f92f473fd840/8dbf3/73401813_753153461834224_5367806878822576310_n.webp"
  },
  {
    "url": "static/4b44af359362fcf3f410f92f473fd840/9104c/73401813_753153461834224_5367806878822576310_n.jpg"
  },
  {
    "url": "static/4b44af359362fcf3f410f92f473fd840/991d2/73401813_753153461834224_5367806878822576310_n.webp"
  },
  {
    "url": "static/4b44af359362fcf3f410f92f473fd840/c01e2/73401813_753153461834224_5367806878822576310_n.jpg"
  },
  {
    "url": "static/4b44af359362fcf3f410f92f473fd840/e75b5/73401813_753153461834224_5367806878822576310_n.jpg"
  },
  {
    "url": "static/4b44af359362fcf3f410f92f473fd840/e90a5/73401813_753153461834224_5367806878822576310_n.webp"
  },
  {
    "url": "static/4b44af359362fcf3f410f92f473fd840/f422e/73401813_753153461834224_5367806878822576310_n.jpg"
  },
  {
    "url": "static/557611a13ab6dfc07b7c78e198db3f42/0756a/selfie-boy.png"
  },
  {
    "url": "static/557611a13ab6dfc07b7c78e198db3f42/2cd0c/selfie-boy.png"
  },
  {
    "url": "static/557611a13ab6dfc07b7c78e198db3f42/34b62/selfie-boy.webp"
  },
  {
    "url": "static/557611a13ab6dfc07b7c78e198db3f42/61fd6/selfie-boy.png"
  },
  {
    "url": "static/557611a13ab6dfc07b7c78e198db3f42/62915/selfie-boy.png"
  },
  {
    "url": "static/557611a13ab6dfc07b7c78e198db3f42/7f8e9/selfie-boy.webp"
  },
  {
    "url": "static/557611a13ab6dfc07b7c78e198db3f42/a3e81/selfie-boy.webp"
  },
  {
    "url": "static/557611a13ab6dfc07b7c78e198db3f42/bc59e/selfie-boy.png"
  },
  {
    "url": "static/557611a13ab6dfc07b7c78e198db3f42/cbc07/selfie-boy.webp"
  },
  {
    "url": "static/557611a13ab6dfc07b7c78e198db3f42/cde37/selfie-boy.webp"
  },
  {
    "url": "static/5d99a5d8a699975c6cf365d48022605d/4e333/50824163_382522659216214_6331536078716303863_n.jpg"
  },
  {
    "url": "static/5d99a5d8a699975c6cf365d48022605d/578e8/50824163_382522659216214_6331536078716303863_n.webp"
  },
  {
    "url": "static/5d99a5d8a699975c6cf365d48022605d/61be4/50824163_382522659216214_6331536078716303863_n.webp"
  },
  {
    "url": "static/5d99a5d8a699975c6cf365d48022605d/8dbf3/50824163_382522659216214_6331536078716303863_n.webp"
  },
  {
    "url": "static/5d99a5d8a699975c6cf365d48022605d/8f688/50824163_382522659216214_6331536078716303863_n.jpg"
  },
  {
    "url": "static/5d99a5d8a699975c6cf365d48022605d/9104c/50824163_382522659216214_6331536078716303863_n.jpg"
  },
  {
    "url": "static/5d99a5d8a699975c6cf365d48022605d/991d2/50824163_382522659216214_6331536078716303863_n.webp"
  },
  {
    "url": "static/5d99a5d8a699975c6cf365d48022605d/9b7fa/50824163_382522659216214_6331536078716303863_n.webp"
  },
  {
    "url": "static/5d99a5d8a699975c6cf365d48022605d/c01e2/50824163_382522659216214_6331536078716303863_n.jpg"
  },
  {
    "url": "static/5d99a5d8a699975c6cf365d48022605d/e75b5/50824163_382522659216214_6331536078716303863_n.jpg"
  },
  {
    "url": "static/5d99a5d8a699975c6cf365d48022605d/e90a5/50824163_382522659216214_6331536078716303863_n.webp"
  },
  {
    "url": "static/5d99a5d8a699975c6cf365d48022605d/f422e/50824163_382522659216214_6331536078716303863_n.jpg"
  },
  {
    "url": "static/61ec7683884d7433bf51795832c8ecbb/10d63/65764596_115012736450702_3690422556348346422_n.jpg"
  },
  {
    "url": "static/61ec7683884d7433bf51795832c8ecbb/4e333/65764596_115012736450702_3690422556348346422_n.jpg"
  },
  {
    "url": "static/61ec7683884d7433bf51795832c8ecbb/54d25/65764596_115012736450702_3690422556348346422_n.webp"
  },
  {
    "url": "static/61ec7683884d7433bf51795832c8ecbb/578e8/65764596_115012736450702_3690422556348346422_n.webp"
  },
  {
    "url": "static/61ec7683884d7433bf51795832c8ecbb/61be4/65764596_115012736450702_3690422556348346422_n.webp"
  },
  {
    "url": "static/61ec7683884d7433bf51795832c8ecbb/8dbf3/65764596_115012736450702_3690422556348346422_n.webp"
  },
  {
    "url": "static/61ec7683884d7433bf51795832c8ecbb/9104c/65764596_115012736450702_3690422556348346422_n.jpg"
  },
  {
    "url": "static/61ec7683884d7433bf51795832c8ecbb/991d2/65764596_115012736450702_3690422556348346422_n.webp"
  },
  {
    "url": "static/61ec7683884d7433bf51795832c8ecbb/c01e2/65764596_115012736450702_3690422556348346422_n.jpg"
  },
  {
    "url": "static/61ec7683884d7433bf51795832c8ecbb/e75b5/65764596_115012736450702_3690422556348346422_n.jpg"
  },
  {
    "url": "static/61ec7683884d7433bf51795832c8ecbb/e90a5/65764596_115012736450702_3690422556348346422_n.webp"
  },
  {
    "url": "static/61ec7683884d7433bf51795832c8ecbb/f422e/65764596_115012736450702_3690422556348346422_n.jpg"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/1f5c5/reactive-resume.webp"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/2a4de/reactive-resume.png"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/497c6/reactive-resume.png"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/58556/reactive-resume.webp"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/61e93/reactive-resume.webp"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/65e33/reactive-resume.png"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/69585/reactive-resume.png"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/9cf1d/reactive-resume.png"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/ad85c/reactive-resume.webp"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/d1f52/reactive-resume.webp"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/d8298/reactive-resume.webp"
  },
  {
    "url": "static/6930451eeae675efb0d796b40cf6e708/ee604/reactive-resume.png"
  },
  {
    "url": "static/6eaa387ce1711bb840564468b4d83d98/share.png"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/0aa94/database.webp"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/4c427/database.png"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/91664/database.png"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/c05ea/database.webp"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/e711a/database.webp"
  },
  {
    "url": "static/7268e8ad3f7ebbc25b2736ba14e2a666/ff4be/database.png"
  },
  {
    "url": "static/819e14216ca166ee64e69b916eb9a57c/aff39/jvvp.png"
  },
  {
    "url": "static/819e14216ca166ee64e69b916eb9a57c/c1598/jvvp.png"
  },
  {
    "url": "static/843f9b5558b90f7e317c826b318ad5ea/0b7e8/pratyushLogo.webp"
  },
  {
    "url": "static/843f9b5558b90f7e317c826b318ad5ea/62cc5/pratyushLogo.webp"
  },
  {
    "url": "static/843f9b5558b90f7e317c826b318ad5ea/adbdf/pratyushLogo.webp"
  },
  {
    "url": "static/843f9b5558b90f7e317c826b318ad5ea/aff39/pratyushLogo.png"
  },
  {
    "url": "static/843f9b5558b90f7e317c826b318ad5ea/c1598/pratyushLogo.png"
  },
  {
    "url": "static/843f9b5558b90f7e317c826b318ad5ea/ea22a/pratyushLogo.png"
  },
  {
    "url": "static/8a68c66d2a4bc06d2a30fd20ab6da926/aff39/ptu.png"
  },
  {
    "url": "static/8a68c66d2a4bc06d2a30fd20ab6da926/c1598/ptu.png"
  },
  {
    "url": "static/8a68c66d2a4bc06d2a30fd20ab6da926/ea22a/ptu.png"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/09af0/be-thrifty-today.webp"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/1f5c5/be-thrifty-today.webp"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/2a4de/be-thrifty-today.png"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/497c6/be-thrifty-today.png"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/58556/be-thrifty-today.webp"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/61e93/be-thrifty-today.webp"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/65e33/be-thrifty-today.png"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/69585/be-thrifty-today.png"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/ad85c/be-thrifty-today.webp"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/bbdb3/be-thrifty-today.png"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/d1f52/be-thrifty-today.webp"
  },
  {
    "url": "static/8c7deb9ba674edaa709989df495db2d2/ee604/be-thrifty-today.png"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/1f5c5/madrasi-bride.webp"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/2a4de/madrasi-bride.png"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/497c6/madrasi-bride.png"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/58556/madrasi-bride.webp"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/61e93/madrasi-bride.webp"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/65e33/madrasi-bride.png"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/69585/madrasi-bride.png"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/ad85c/madrasi-bride.webp"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/d1f52/madrasi-bride.webp"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/e0dbb/madrasi-bride.webp"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/e1b47/madrasi-bride.png"
  },
  {
    "url": "static/94ab8e67a3d814e0f12658b59a0ae162/ee604/madrasi-bride.png"
  },
  {
    "url": "static/9c441f34ec47c9100fa442880a08b99c/0aa94/photography.webp"
  },
  {
    "url": "static/9c441f34ec47c9100fa442880a08b99c/4c427/photography.png"
  },
  {
    "url": "static/9c441f34ec47c9100fa442880a08b99c/91664/photography.png"
  },
  {
    "url": "static/9c441f34ec47c9100fa442880a08b99c/c05ea/photography.webp"
  },
  {
    "url": "static/9c441f34ec47c9100fa442880a08b99c/e711a/photography.webp"
  },
  {
    "url": "static/9c441f34ec47c9100fa442880a08b99c/ff4be/photography.png"
  },
  {
    "url": "static/a8aa42b6608f91e164eae75b7d8586dc/1f5c5/ir75p4wuli7pw4is1snj.webp"
  },
  {
    "url": "static/a8aa42b6608f91e164eae75b7d8586dc/2a4de/ir75p4wuli7pw4is1snj.png"
  },
  {
    "url": "static/a8aa42b6608f91e164eae75b7d8586dc/31987/ir75p4wuli7pw4is1snj.png"
  },
  {
    "url": "static/a8aa42b6608f91e164eae75b7d8586dc/497c6/ir75p4wuli7pw4is1snj.png"
  },
  {
    "url": "static/a8aa42b6608f91e164eae75b7d8586dc/58556/ir75p4wuli7pw4is1snj.webp"
  },
  {
    "url": "static/a8aa42b6608f91e164eae75b7d8586dc/61e93/ir75p4wuli7pw4is1snj.webp"
  },
  {
    "url": "static/a8aa42b6608f91e164eae75b7d8586dc/65e33/ir75p4wuli7pw4is1snj.png"
  },
  {
    "url": "static/a8aa42b6608f91e164eae75b7d8586dc/69585/ir75p4wuli7pw4is1snj.png"
  },
  {
    "url": "static/a8aa42b6608f91e164eae75b7d8586dc/ad85c/ir75p4wuli7pw4is1snj.webp"
  },
  {
    "url": "static/a8aa42b6608f91e164eae75b7d8586dc/d1f52/ir75p4wuli7pw4is1snj.webp"
  },
  {
    "url": "static/a8aa42b6608f91e164eae75b7d8586dc/e30b5/ir75p4wuli7pw4is1snj.webp"
  },
  {
    "url": "static/a8aa42b6608f91e164eae75b7d8586dc/ee604/ir75p4wuli7pw4is1snj.png"
  },
  {
    "url": "static/c4a1c1787ac5c82aef25e682e4ecd9bb/aff39/deogharCollege.png"
  },
  {
    "url": "static/c4a1c1787ac5c82aef25e682e4ecd9bb/c1598/deogharCollege.png"
  },
  {
    "url": "static/c4a1c1787ac5c82aef25e682e4ecd9bb/ea22a/deogharCollege.png"
  },
  {
    "url": "static/cb6787b9a7be49e1e0f5b52bea4d710a/4e333/64585472_183860599273708_4662201415349948231_n.jpg"
  },
  {
    "url": "static/cb6787b9a7be49e1e0f5b52bea4d710a/578e8/64585472_183860599273708_4662201415349948231_n.webp"
  },
  {
    "url": "static/cb6787b9a7be49e1e0f5b52bea4d710a/61be4/64585472_183860599273708_4662201415349948231_n.webp"
  },
  {
    "url": "static/cb6787b9a7be49e1e0f5b52bea4d710a/8dbf3/64585472_183860599273708_4662201415349948231_n.webp"
  },
  {
    "url": "static/cb6787b9a7be49e1e0f5b52bea4d710a/9104c/64585472_183860599273708_4662201415349948231_n.jpg"
  },
  {
    "url": "static/cb6787b9a7be49e1e0f5b52bea4d710a/991d2/64585472_183860599273708_4662201415349948231_n.webp"
  },
  {
    "url": "static/cb6787b9a7be49e1e0f5b52bea4d710a/c01e2/64585472_183860599273708_4662201415349948231_n.jpg"
  },
  {
    "url": "static/cb6787b9a7be49e1e0f5b52bea4d710a/e75b5/64585472_183860599273708_4662201415349948231_n.jpg"
  },
  {
    "url": "static/cb6787b9a7be49e1e0f5b52bea4d710a/e90a5/64585472_183860599273708_4662201415349948231_n.webp"
  },
  {
    "url": "static/cb6787b9a7be49e1e0f5b52bea4d710a/f422e/64585472_183860599273708_4662201415349948231_n.jpg"
  },
  {
    "url": "static/d/1092668639.json"
  },
  {
    "url": "static/d/1200720306.json"
  },
  {
    "url": "static/d/1231508858.json"
  },
  {
    "url": "static/d/1709894009.json"
  },
  {
    "url": "static/d/2255141545.json"
  },
  {
    "url": "static/d/2289247758.json"
  },
  {
    "url": "static/d/2395386505.json"
  },
  {
    "url": "static/d/2396307195.json"
  },
  {
    "url": "static/d/2864300244.json"
  },
  {
    "url": "static/d/3313315525.json"
  },
  {
    "url": "static/d/3506755355.json"
  },
  {
    "url": "static/d/3839990767.json"
  },
  {
    "url": "static/d/3961674297.json"
  },
  {
    "url": "static/d/4056429656.json"
  },
  {
    "url": "static/d/695964893.json"
  },
  {
    "url": "static/d/752792606.json"
  },
  {
    "url": "static/d/883961150.json"
  },
  {
    "url": "static/d132bde3d72f5d47b282bcdf2bda927d/1f5c5/9zxv6enrpdhdcjnle7bw.webp"
  },
  {
    "url": "static/d132bde3d72f5d47b282bcdf2bda927d/2a4de/9zxv6enrpdhdcjnle7bw.png"
  },
  {
    "url": "static/d132bde3d72f5d47b282bcdf2bda927d/31987/9zxv6enrpdhdcjnle7bw.png"
  },
  {
    "url": "static/d132bde3d72f5d47b282bcdf2bda927d/497c6/9zxv6enrpdhdcjnle7bw.png"
  },
  {
    "url": "static/d132bde3d72f5d47b282bcdf2bda927d/58556/9zxv6enrpdhdcjnle7bw.webp"
  },
  {
    "url": "static/d132bde3d72f5d47b282bcdf2bda927d/61e93/9zxv6enrpdhdcjnle7bw.webp"
  },
  {
    "url": "static/d132bde3d72f5d47b282bcdf2bda927d/65e33/9zxv6enrpdhdcjnle7bw.png"
  },
  {
    "url": "static/d132bde3d72f5d47b282bcdf2bda927d/69585/9zxv6enrpdhdcjnle7bw.png"
  },
  {
    "url": "static/d132bde3d72f5d47b282bcdf2bda927d/ad85c/9zxv6enrpdhdcjnle7bw.webp"
  },
  {
    "url": "static/d132bde3d72f5d47b282bcdf2bda927d/d1f52/9zxv6enrpdhdcjnle7bw.webp"
  },
  {
    "url": "static/d132bde3d72f5d47b282bcdf2bda927d/e30b5/9zxv6enrpdhdcjnle7bw.webp"
  },
  {
    "url": "static/d132bde3d72f5d47b282bcdf2bda927d/ee604/9zxv6enrpdhdcjnle7bw.png"
  },
  {
    "url": "static/d441c2daf41a0d199efc5657eb5b0a7a/4e333/64330484_154308658958533_5158697529307873188_n.jpg"
  },
  {
    "url": "static/d441c2daf41a0d199efc5657eb5b0a7a/578e8/64330484_154308658958533_5158697529307873188_n.webp"
  },
  {
    "url": "static/d441c2daf41a0d199efc5657eb5b0a7a/61be4/64330484_154308658958533_5158697529307873188_n.webp"
  },
  {
    "url": "static/d441c2daf41a0d199efc5657eb5b0a7a/8dbf3/64330484_154308658958533_5158697529307873188_n.webp"
  },
  {
    "url": "static/d441c2daf41a0d199efc5657eb5b0a7a/9104c/64330484_154308658958533_5158697529307873188_n.jpg"
  },
  {
    "url": "static/d441c2daf41a0d199efc5657eb5b0a7a/c01e2/64330484_154308658958533_5158697529307873188_n.jpg"
  },
  {
    "url": "static/d441c2daf41a0d199efc5657eb5b0a7a/e75b5/64330484_154308658958533_5158697529307873188_n.jpg"
  },
  {
    "url": "static/d441c2daf41a0d199efc5657eb5b0a7a/e90a5/64330484_154308658958533_5158697529307873188_n.webp"
  },
  {
    "url": "static/dc949d1a6896a5d7752e8730cecf097b/130c1/pratyushTitle.png"
  },
  {
    "url": "static/dc949d1a6896a5d7752e8730cecf097b/20ef8/pratyushTitle.png"
  },
  {
    "url": "static/dc949d1a6896a5d7752e8730cecf097b/26717/pratyushTitle.png"
  },
  {
    "url": "static/dc949d1a6896a5d7752e8730cecf097b/2b430/pratyushTitle.webp"
  },
  {
    "url": "static/dc949d1a6896a5d7752e8730cecf097b/2b4de/pratyushTitle.webp"
  },
  {
    "url": "static/dc949d1a6896a5d7752e8730cecf097b/2cb41/pratyushTitle.png"
  },
  {
    "url": "static/dc949d1a6896a5d7752e8730cecf097b/307ba/pratyushTitle.png"
  },
  {
    "url": "static/dc949d1a6896a5d7752e8730cecf097b/a5ab3/pratyushTitle.webp"
  },
  {
    "url": "static/dc949d1a6896a5d7752e8730cecf097b/bda67/pratyushTitle.webp"
  },
  {
    "url": "static/dc949d1a6896a5d7752e8730cecf097b/be3cd/pratyushTitle.png"
  },
  {
    "url": "static/dc949d1a6896a5d7752e8730cecf097b/d0fb6/pratyushTitle.webp"
  },
  {
    "url": "static/dc949d1a6896a5d7752e8730cecf097b/d3cb6/pratyushTitle.webp"
  },
  {
    "url": "static/e3bc0f34213d14d60656fa67ecfdfe3b/559c9/github.png"
  },
  {
    "url": "static/e3bc0f34213d14d60656fa67ecfdfe3b/767bb/github.png"
  },
  {
    "url": "static/e3bc0f34213d14d60656fa67ecfdfe3b/804d1/github.webp"
  },
  {
    "url": "static/e3bc0f34213d14d60656fa67ecfdfe3b/8a409/github.png"
  },
  {
    "url": "static/e3bc0f34213d14d60656fa67ecfdfe3b/e8cf1/github.webp"
  },
  {
    "url": "static/e3bc0f34213d14d60656fa67ecfdfe3b/fa51b/github.webp"
  },
  {
    "url": "static/e3d4cb89bfbb7b9c2174d532d8658054/4e333/101037667_872967146521965_8283677766832359161_n.jpg"
  },
  {
    "url": "static/e3d4cb89bfbb7b9c2174d532d8658054/578e8/101037667_872967146521965_8283677766832359161_n.webp"
  },
  {
    "url": "static/e3d4cb89bfbb7b9c2174d532d8658054/61be4/101037667_872967146521965_8283677766832359161_n.webp"
  },
  {
    "url": "static/e3d4cb89bfbb7b9c2174d532d8658054/8dbf3/101037667_872967146521965_8283677766832359161_n.webp"
  },
  {
    "url": "static/e3d4cb89bfbb7b9c2174d532d8658054/9104c/101037667_872967146521965_8283677766832359161_n.jpg"
  },
  {
    "url": "static/e3d4cb89bfbb7b9c2174d532d8658054/c01e2/101037667_872967146521965_8283677766832359161_n.jpg"
  },
  {
    "url": "static/e3d4cb89bfbb7b9c2174d532d8658054/e75b5/101037667_872967146521965_8283677766832359161_n.jpg"
  },
  {
    "url": "static/e3d4cb89bfbb7b9c2174d532d8658054/e90a5/101037667_872967146521965_8283677766832359161_n.webp"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/1f5c5/words-i-know.webp"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/2a4de/words-i-know.png"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/497c6/words-i-know.png"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/58556/words-i-know.webp"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/605f8/words-i-know.png"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/61e93/words-i-know.webp"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/65e33/words-i-know.png"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/69585/words-i-know.png"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/81149/words-i-know.webp"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/ad85c/words-i-know.webp"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/d1f52/words-i-know.webp"
  },
  {
    "url": "static/e78f506412dacd623f1bac8127e40443/ee604/words-i-know.png"
  },
  {
    "url": "static/f3e6eec6d123006c5a7dc9410b4d5c7f/10d63/69903166_474150943135514_1636113427434213052_n.jpg"
  },
  {
    "url": "static/f3e6eec6d123006c5a7dc9410b4d5c7f/4e333/69903166_474150943135514_1636113427434213052_n.jpg"
  },
  {
    "url": "static/f3e6eec6d123006c5a7dc9410b4d5c7f/54d25/69903166_474150943135514_1636113427434213052_n.webp"
  },
  {
    "url": "static/f3e6eec6d123006c5a7dc9410b4d5c7f/578e8/69903166_474150943135514_1636113427434213052_n.webp"
  },
  {
    "url": "static/f3e6eec6d123006c5a7dc9410b4d5c7f/61be4/69903166_474150943135514_1636113427434213052_n.webp"
  },
  {
    "url": "static/f3e6eec6d123006c5a7dc9410b4d5c7f/8dbf3/69903166_474150943135514_1636113427434213052_n.webp"
  },
  {
    "url": "static/f3e6eec6d123006c5a7dc9410b4d5c7f/9104c/69903166_474150943135514_1636113427434213052_n.jpg"
  },
  {
    "url": "static/f3e6eec6d123006c5a7dc9410b4d5c7f/991d2/69903166_474150943135514_1636113427434213052_n.webp"
  },
  {
    "url": "static/f3e6eec6d123006c5a7dc9410b4d5c7f/c01e2/69903166_474150943135514_1636113427434213052_n.jpg"
  },
  {
    "url": "static/f3e6eec6d123006c5a7dc9410b4d5c7f/e75b5/69903166_474150943135514_1636113427434213052_n.jpg"
  },
  {
    "url": "static/f3e6eec6d123006c5a7dc9410b4d5c7f/e90a5/69903166_474150943135514_1636113427434213052_n.webp"
  },
  {
    "url": "static/f3e6eec6d123006c5a7dc9410b4d5c7f/f422e/69903166_474150943135514_1636113427434213052_n.jpg"
  },
  {
    "url": "static/f4ed12af39b4b1aaafe5a3e09902b174/4e333/82140990_688277775050774_1683912893706577796_n.jpg"
  },
  {
    "url": "static/f4ed12af39b4b1aaafe5a3e09902b174/578e8/82140990_688277775050774_1683912893706577796_n.webp"
  },
  {
    "url": "static/f4ed12af39b4b1aaafe5a3e09902b174/61be4/82140990_688277775050774_1683912893706577796_n.webp"
  },
  {
    "url": "static/f4ed12af39b4b1aaafe5a3e09902b174/8dbf3/82140990_688277775050774_1683912893706577796_n.webp"
  },
  {
    "url": "static/f4ed12af39b4b1aaafe5a3e09902b174/9104c/82140990_688277775050774_1683912893706577796_n.jpg"
  },
  {
    "url": "static/f4ed12af39b4b1aaafe5a3e09902b174/991d2/82140990_688277775050774_1683912893706577796_n.webp"
  },
  {
    "url": "static/f4ed12af39b4b1aaafe5a3e09902b174/c01e2/82140990_688277775050774_1683912893706577796_n.jpg"
  },
  {
    "url": "static/f4ed12af39b4b1aaafe5a3e09902b174/e75b5/82140990_688277775050774_1683912893706577796_n.jpg"
  },
  {
    "url": "static/f4ed12af39b4b1aaafe5a3e09902b174/e90a5/82140990_688277775050774_1683912893706577796_n.webp"
  },
  {
    "url": "static/f4ed12af39b4b1aaafe5a3e09902b174/f422e/82140990_688277775050774_1683912893706577796_n.jpg"
  },
  {
    "url": "styles-89fd2ae28bdf06750a71.js"
  },
  {
    "url": "styles-89fd2ae28bdf06750a71.js.map",
    "revision": "50a943b8a40210b91a33534f76345165"
  },
  {
    "url": "styles.820ba0eb8f166e9e9d9b.css"
  },
  {
    "url": "webpack-runtime-bafbc280b61c8b90cc1e.js"
  },
  {
    "url": "webpack-runtime-bafbc280b61c8b90cc1e.js.map",
    "revision": "efb9f43b0f5766f902be1f60dff5600b"
  },
  {
    "url": "webpack.stats.json",
    "revision": "bdcd92b5b983487f2352fb59dbba25ee"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/app-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-0dee0f36cf231d14481c.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
