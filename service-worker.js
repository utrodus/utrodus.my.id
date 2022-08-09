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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ed3c63fae7b44a4b697723f2900cf71a"
  },
  {
    "url": "404/index.html",
    "revision": "ed3c63fae7b44a4b697723f2900cf71a"
  },
  {
    "url": "about/index.html",
    "revision": "f6ee23aed50719eb6b4f4d206a66ad8a"
  },
  {
    "url": "assets/css/0.styles.6891a3e5.css",
    "revision": "257e1070256d752450154b93b257ff1a"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "bec51bfdee5c80d65a733d355eb7ffdd"
  },
  {
    "url": "assets/data/about/index.json",
    "revision": "b45604c188dd78ca63de3c82134fe058"
  },
  {
    "url": "assets/data/blog/2/index.json",
    "revision": "fbefe9fc880a0433ac14500fac9332ba"
  },
  {
    "url": "assets/data/blog/3/index.json",
    "revision": "27afb1f7e1de46d36665e437b458c10d"
  },
  {
    "url": "assets/data/blog/index.json",
    "revision": "cc36146d36f35507e17f6690bb188f5e"
  },
  {
    "url": "assets/data/contact/index.json",
    "revision": "b45604c188dd78ca63de3c82134fe058"
  },
  {
    "url": "assets/data/index.json",
    "revision": "b45604c188dd78ca63de3c82134fe058"
  },
  {
    "url": "assets/data/portfolio/2/index.json",
    "revision": "beac46f58e1fdd90a0dbd8d6ab6b5dc3"
  },
  {
    "url": "assets/data/portfolio/index.json",
    "revision": "248644fe0a0fd1518f14069b24612c0c"
  },
  {
    "url": "assets/data/post/5-vue-ui-frameworks-for-rapid-ui-development/index.json",
    "revision": "2bf4e64b7f4fcbfe097380544405b62d"
  },
  {
    "url": "assets/data/post/add-another-version-of-php-in-laragon/index.json",
    "revision": "a4df0e13e03f839a12dcbbf8f67c1f03"
  },
  {
    "url": "assets/data/post/awesome-list-of-vue-js-libraries/index.json",
    "revision": "c2593a7395b9fc8961c2365f5649c296"
  },
  {
    "url": "assets/data/post/create-a-custom-loading-animation-component-in-nuxt-js-with-lottie/index.json",
    "revision": "ea81e5f16648da37ed850212a712b30a"
  },
  {
    "url": "assets/data/post/create-a-jamstack-site-in-under-5-minutes/index.json",
    "revision": "27e634eb92df947e501c3a870f8215b9"
  },
  {
    "url": "assets/data/post/deploy-plenti-site-on-netlify/index.json",
    "revision": "7ee0812068acc23692f78d70bc632e2e"
  },
  {
    "url": "assets/data/post/fix-vue-package-mismatch-error-on-vercel/index.json",
    "revision": "7c84994b47dfa13be0bf37c4aa5811f6"
  },
  {
    "url": "assets/data/post/how-to-use-vue-plugins-with-no-ssr-support-on-a-gridsome-project/index.json",
    "revision": "e06b89331c919b7e13a7db97c94b1c1b"
  },
  {
    "url": "assets/data/post/integrating-netlify-cms-to-your-gridsome-site/index.json",
    "revision": "4f33c2ceac36b1c62d15c7523d077f78"
  },
  {
    "url": "assets/data/post/let-s-create-ui-components-in-svelte/index.json",
    "revision": "07dcfbc3f1237fef184dc5b1417788e9"
  },
  {
    "url": "assets/data/post/my-tech-stack-2020/index.json",
    "revision": "d031de1b13943c838fd4dde0608cebdb"
  },
  {
    "url": "assets/data/post/people-you-should-follow-if-you-re-a-vue-developer/index.json",
    "revision": "ba3d6352185269b550156ae1f5f4bcdf"
  },
  {
    "url": "assets/data/post/reviewing-javascript-fundamentals/index.json",
    "revision": "d0fac86bb24365c965fbc4e5d6fe79ca"
  },
  {
    "url": "assets/data/post/sharing-my-go-to-podcasts/index.json",
    "revision": "66fc4f4d1817b6923515569d9b6d696c"
  },
  {
    "url": "assets/data/post/top-nuxt-js-modules/index.json",
    "revision": "3c38d495908c512cf064b75fd1e5eac2"
  },
  {
    "url": "assets/data/post/track-your-website-with-umami/index.json",
    "revision": "03e5eeeff4b9d5057af10fd3753b0fc8"
  },
  {
    "url": "assets/data/post/where-i-learn-vue-js/index.json",
    "revision": "c3996213c7c378a5bc29d8971b768f2c"
  },
  {
    "url": "assets/data/post/woo-commerce-site-to-single-page-app-in-no-time/index.json",
    "revision": "bafd293f0354896c602959bdf47d91c0"
  },
  {
    "url": "assets/data/projects/apeldeskel/index.json",
    "revision": "de57ffa2f7376e0cfb94e70641b325fb"
  },
  {
    "url": "assets/data/projects/bumi-glagah-arum/index.json",
    "revision": "3e7deeab00e5cb2e396931538dec2b7d"
  },
  {
    "url": "assets/data/projects/doctor-appointment-app/index.json",
    "revision": "64d911c30f48f48f18d7715971549a5d"
  },
  {
    "url": "assets/data/projects/e-tani-blitar/index.json",
    "revision": "130f71b931a9b9e93a2f50ffa322bad9"
  },
  {
    "url": "assets/data/projects/flutter-sleep-app/index.json",
    "revision": "b19f64770fce33ce8d0c18ba5bb563ec"
  },
  {
    "url": "assets/data/projects/jdih-kab-malang/index.json",
    "revision": "41b5d681a73c52745c9f31f69d65862b"
  },
  {
    "url": "assets/data/projects/koin-nu-kota-blitar/index.json",
    "revision": "e21b752f7ef38846da405baf33c95464"
  },
  {
    "url": "assets/data/projects/nusantaramartid/index.json",
    "revision": "e0889b7a638ef6b1d6a2e0811b176dcb"
  },
  {
    "url": "assets/data/projects/silpusitron/index.json",
    "revision": "693e1e82c1f9975a39442d1a7b19cb7b"
  },
  {
    "url": "assets/data/projects/smart-soil-selector/index.json",
    "revision": "915abd1695750ef4d6aa2788a59bd2e2"
  },
  {
    "url": "assets/data/resources/2/index.json",
    "revision": "2e02b4548806877f38c69a93ffc8eb88"
  },
  {
    "url": "assets/data/resources/3/index.json",
    "revision": "a0c70412e5aa506bdbbb138b3623d6b9"
  },
  {
    "url": "assets/data/resources/4/index.json",
    "revision": "1cbb9851d19b6515a247b2cb811e59d2"
  },
  {
    "url": "assets/data/resources/index.json",
    "revision": "23d943f5f74e5bcdabbfa0d17d654f4d"
  },
  {
    "url": "assets/data/search/index.json",
    "revision": "b45604c188dd78ca63de3c82134fe058"
  },
  {
    "url": "assets/data/success/index.json",
    "revision": "b45604c188dd78ca63de3c82134fe058"
  },
  {
    "url": "assets/data/tag/analytics/index.json",
    "revision": "e81264c125df3666a9376a130d5931ed"
  },
  {
    "url": "assets/data/tag/Basics/index.json",
    "revision": "13d0d969adde2fdbbc3c8b22686b80bc"
  },
  {
    "url": "assets/data/tag/Developers/index.json",
    "revision": "8e6851d6d0361e422ac26a892659685a"
  },
  {
    "url": "assets/data/tag/ECommerce/index.json",
    "revision": "8ce602d65bd96c62ab25928f4fb2bf8f"
  },
  {
    "url": "assets/data/tag/gridsome/index.json",
    "revision": "5cfbc174e55499cefef6e2aa6a098e92"
  },
  {
    "url": "assets/data/tag/Jamstack/index.json",
    "revision": "6be284e5476b123f3e6b960125ccb1ff"
  },
  {
    "url": "assets/data/tag/Javascript/index.json",
    "revision": "83ff38403d5267ad9835c58b89c630af"
  },
  {
    "url": "assets/data/tag/Laravel/index.json",
    "revision": "feb808c8e3d553be523f3e0d80cd9289"
  },
  {
    "url": "assets/data/tag/Learning/index.json",
    "revision": "35cc167c90ead14ae52e4f9478d2281b"
  },
  {
    "url": "assets/data/tag/Netlify CMS/index.json",
    "revision": "f9a0624635ecc6d81615cdc8c0592aa8"
  },
  {
    "url": "assets/data/tag/Netlify/index.json",
    "revision": "01197cb7ed510f7453cdcab07e76953c"
  },
  {
    "url": "assets/data/tag/Nuxt/index.json",
    "revision": "67b160f54cf85db2fed003e24cbc5fcc"
  },
  {
    "url": "assets/data/tag/nuxtjs/index.json",
    "revision": "592365f6ea566dc8ff54ecab55fd3dcd"
  },
  {
    "url": "assets/data/tag/OSS Libraries/index.json",
    "revision": "88bdd76575c4fe89ef051db58f76dedf"
  },
  {
    "url": "assets/data/tag/Plenti/index.json",
    "revision": "4421a349f84dd417029b2f46a3c0e421"
  },
  {
    "url": "assets/data/tag/PWA/index.json",
    "revision": "70c78ec0ed9a8fa4e2d55d78ff3bf7a0"
  },
  {
    "url": "assets/data/tag/Resources/index.json",
    "revision": "f862e12a335a5b6c03772d9194119221"
  },
  {
    "url": "assets/data/tag/SPA/index.json",
    "revision": "1ff5cd0e7d48d59aa78278eb3d2915e5"
  },
  {
    "url": "assets/data/tag/Stackbit/index.json",
    "revision": "5c330a84b1fc4c51147158afcd895572"
  },
  {
    "url": "assets/data/tag/Svelte/index.json",
    "revision": "94628a75461da278ba2b248227257875"
  },
  {
    "url": "assets/data/tag/Tech Stack/index.json",
    "revision": "1dedd5ad8b4bdcbe96efba14a852a6f9"
  },
  {
    "url": "assets/data/tag/UI Component/index.json",
    "revision": "8a72031fc9d41ff2bdeefe2bf3d92f1e"
  },
  {
    "url": "assets/data/tag/UI Libraries/index.json",
    "revision": "39d256e0e0ba91d94a9e97b35ed78140"
  },
  {
    "url": "assets/data/tag/vercel/index.json",
    "revision": "7627a5a40f4ff91ae842cee086287da4"
  },
  {
    "url": "assets/data/tag/Vue.js/index.json",
    "revision": "afc00e0818d797f01a0b4df1445625de"
  },
  {
    "url": "assets/data/tag/Vue/index.json",
    "revision": "7c839c2b1781e6e69443e4d3c8cf3301"
  },
  {
    "url": "assets/js/app.36c11c3c.js",
    "revision": "5e1840d4b2ad5f55f8def33663fae846"
  },
  {
    "url": "assets/js/page--src-pages-404-vue.53e387d0.js",
    "revision": "012648ce9efff4ad23dfe845e2c9045b"
  },
  {
    "url": "assets/js/page--src-pages-about-vue.15c7ca46.js",
    "revision": "cb9df89e6ec2791604eaf58c06d1a872"
  },
  {
    "url": "assets/js/page--src-pages-blog-vue.9aa529db.js",
    "revision": "196617b9c1ecd0f38539223c45083b14"
  },
  {
    "url": "assets/js/page--src-pages-contact-vue.12d695b0.js",
    "revision": "6e789ef2551a357e5980351c3ec1b21b"
  },
  {
    "url": "assets/js/page--src-pages-index-vue.84fb094d.js",
    "revision": "fc931ec8655e00d3ffc6e96cf0b4d94d"
  },
  {
    "url": "assets/js/page--src-pages-portfolio-vue.4acdc927.js",
    "revision": "bc26d1045e793cc8e0a3f89ff2cfa562"
  },
  {
    "url": "assets/js/page--src-pages-resources-vue.59ab5462.js",
    "revision": "d3f1d8829fb01f3c726e0cfd9b75be37"
  },
  {
    "url": "assets/js/page--src-pages-search-vue.0d3dd020.js",
    "revision": "37b7ce7132919cebcdc1d9d25256179f"
  },
  {
    "url": "assets/js/page--src-pages-success-vue.40656d1b.js",
    "revision": "3087988ae26a4891d69839c90f1f6cb7"
  },
  {
    "url": "assets/js/page--src-templates-blog-post-vue.889906e9.js",
    "revision": "19b9637f5087c13f62d0e1955be212d4"
  },
  {
    "url": "assets/js/page--src-templates-project-vue.477685f0.js",
    "revision": "e334c5fbeca9ab3aa62bbcef12bb632b"
  },
  {
    "url": "assets/js/page--src-templates-tag-vue.52fdd545.js",
    "revision": "d762e0f3b2e1b93b79b427ceea757c21"
  },
  {
    "url": "assets/js/vendors~page--src-pages-index-vue.0e2dd1b3.js",
    "revision": "ce33c3fefcfc6e8f406d2d7248bc1926"
  },
  {
    "url": "assets/static/analytics-cover.09b17d9.055ea50a59c0f0e47c5e078c2ff8436f.jpg",
    "revision": "15517ad6841133373172cadc683b37d9"
  },
  {
    "url": "assets/static/analytics-cover.0b85c65.055ea50a59c0f0e47c5e078c2ff8436f.jpg",
    "revision": "0ff9e3606b2568cbba0a250e8d64e256"
  },
  {
    "url": "assets/static/analytics-cover.1b91758.055ea50a59c0f0e47c5e078c2ff8436f.jpg",
    "revision": "128977afff287f7d3b8fc8a900848ed1"
  },
  {
    "url": "assets/static/analytics-cover.3df3210.055ea50a59c0f0e47c5e078c2ff8436f.jpg",
    "revision": "1efdebb53f6b16a177db44eec9908963"
  },
  {
    "url": "assets/static/analytics-logo.f33a511.553d0deecffb6cdd80cbd1a9d7183365.png",
    "revision": "a395b8594215c4c9e481a0165b4bbca8"
  },
  {
    "url": "assets/static/badge-android.0a1763c.1e91d02cf5a902f38f2923c006d79281.png",
    "revision": "8845f82a80b2bbb2241782952ceef221"
  },
  {
    "url": "assets/static/badge-apple.9dd3765.d0558d91063038236b60e3ef71fdc1fd.svg",
    "revision": "d0558d91063038236b60e3ef71fdc1fd"
  },
  {
    "url": "assets/static/ecommerce.1b91758.4ee141d53f1d55f23146af4e9d1145bf.png",
    "revision": "29d099bdfa9cc5440b8e9c43311bc34c"
  },
  {
    "url": "assets/static/ecommerce.39ccf44.4ee141d53f1d55f23146af4e9d1145bf.png",
    "revision": "4ee141d53f1d55f23146af4e9d1145bf"
  },
  {
    "url": "assets/static/favicon.ac8d93a.e78bf1ea9da5b40160648d0624e1378f.png",
    "revision": "168ba349b1673cc424d3cfcdfdb7f6dd"
  },
  {
    "url": "assets/static/favicon.ce0531f.e78bf1ea9da5b40160648d0624e1378f.png",
    "revision": "a0048aaa33dd7323158bd65282f6e85a"
  },
  {
    "url": "assets/static/favicon.png",
    "revision": "e78bf1ea9da5b40160648d0624e1378f"
  },
  {
    "url": "assets/static/gridsome-cover.09b17d9.8784cb962b0593b5efb51100b12ec2ed.jpg",
    "revision": "2a5a291e275e2e0a340324ef09928744"
  },
  {
    "url": "assets/static/gridsome-cover.0b85c65.8784cb962b0593b5efb51100b12ec2ed.jpg",
    "revision": "0950807355a057e17733a9a259506008"
  },
  {
    "url": "assets/static/gridsome-cover.1b91758.8784cb962b0593b5efb51100b12ec2ed.jpg",
    "revision": "01d16527a0666eac2cd8d87e6de9c59f"
  },
  {
    "url": "assets/static/gridsome-cover.3df3210.8784cb962b0593b5efb51100b12ec2ed.jpg",
    "revision": "0ca388b217f1982eb071aa0140c0c36b"
  },
  {
    "url": "assets/static/gridsome-logo.494945c.4559d52abf36b75511f5a297ef22970e.svg",
    "revision": "4559d52abf36b75511f5a297ef22970e"
  },
  {
    "url": "assets/static/javascript.1b91758.6103483bc4971923c839db3690c245e6.png",
    "revision": "680239c62eef089a0ec897adb8a4e479"
  },
  {
    "url": "assets/static/javascript.39ccf44.6103483bc4971923c839db3690c245e6.png",
    "revision": "3cc02d7b426b341d4b127924ac459a3d"
  },
  {
    "url": "assets/static/js-logo.494945c.55aaecf3649c9218242801e11623d81c.png",
    "revision": "5e08617057ff4006d7c46874cd9ae3da"
  },
  {
    "url": "assets/static/laragon-new-php.1b91758.49d2ee62cff5176ba67aa1fdac7617d1.png",
    "revision": "905df8a5faf71b28ddfbd54a681f9baa"
  },
  {
    "url": "assets/static/laragon-new-php.1c20d4c.49d2ee62cff5176ba67aa1fdac7617d1.png",
    "revision": "ed85761cc48e73c5e1b0898f015482d6"
  },
  {
    "url": "assets/static/laragon-php.679a5b3.81d27166be8ed08de7f6573ed6c3ef2b.png",
    "revision": "551081c46c6d7b6dc9f808a643e4386b"
  },
  {
    "url": "assets/static/laravel.0b85c65.9621b746c159a9a1e14c465e4ce71617.png",
    "revision": "fac97f50c2803d8e846a2bbecbac1666"
  },
  {
    "url": "assets/static/laravel.1b91758.9621b746c159a9a1e14c465e4ce71617.png",
    "revision": "65e6db0ef6fddf847f7771a423e20f05"
  },
  {
    "url": "assets/static/laravel.3df3210.9621b746c159a9a1e14c465e4ce71617.png",
    "revision": "e2275fe0748ddcbff3695c860f3a788b"
  },
  {
    "url": "assets/static/laravel.7d979f5.9621b746c159a9a1e14c465e4ce71617.png",
    "revision": "f4a374e9341348c0e61135cb1c01dac0"
  },
  {
    "url": "assets/static/loading-cover.09b17d9.7d90372728100968aa7ce7c7c1fcebaa.jpg",
    "revision": "3fbe8413522ad19a3f2ea798f11174eb"
  },
  {
    "url": "assets/static/loading-cover.0b85c65.7d90372728100968aa7ce7c7c1fcebaa.jpg",
    "revision": "7a448f123da8386557b18095b77515b4"
  },
  {
    "url": "assets/static/loading-cover.1b91758.7d90372728100968aa7ce7c7c1fcebaa.jpg",
    "revision": "6e0ffc7ec378a201dadc0276016198c6"
  },
  {
    "url": "assets/static/loading-cover.3df3210.7d90372728100968aa7ce7c7c1fcebaa.jpg",
    "revision": "1c3db4dc46cfd46db54eba22fb7ab33b"
  },
  {
    "url": "assets/static/lottie.f62e88f.d92b46774a29c31dd0c13dd7bd5d8f8e.png",
    "revision": "901df2687f3a1f72a7f29251cffdcac4"
  },
  {
    "url": "assets/static/netlify-cms.1b91758.d545fc341053d24f9e41282a9871b83a.png",
    "revision": "137967aba8581820fdaa592fa9b49652"
  },
  {
    "url": "assets/static/netlify-cms.39ccf44.d545fc341053d24f9e41282a9871b83a.png",
    "revision": "82cbb4338bafa39a53f27df458bd4344"
  },
  {
    "url": "assets/static/netlify-logo.0d7bb5f.95e178f5b1dc1a2327595784442a866c.png",
    "revision": "08928bb6053b5d1da836bae5574593e1"
  },
  {
    "url": "assets/static/nuxt-logo.fac0014.741df494635b2705d43d4504ebc9818f.svg",
    "revision": "741df494635b2705d43d4504ebc9818f"
  },
  {
    "url": "assets/static/nuxtmodules.1b91758.32cf15f7cdc421b8200538cb33ccbab7.png",
    "revision": "f252579f940840779641aabf8509fbee"
  },
  {
    "url": "assets/static/nuxtmodules.1c20d4c.32cf15f7cdc421b8200538cb33ccbab7.png",
    "revision": "c522cb4c023310355bae23f3c8312c48"
  },
  {
    "url": "assets/static/plenti-cover.09b17d9.ccc47dac19389768a10bb06afa7bb087.jpg",
    "revision": "639e16c8c30cceb09c977eef78044222"
  },
  {
    "url": "assets/static/plenti-cover.0b85c65.ccc47dac19389768a10bb06afa7bb087.jpg",
    "revision": "04b0a423fb545af1c67b10dbb73c2a04"
  },
  {
    "url": "assets/static/plenti-cover.1b91758.ccc47dac19389768a10bb06afa7bb087.jpg",
    "revision": "9e1dc98dc08091e1503f90053a180b11"
  },
  {
    "url": "assets/static/plenti-cover.3df3210.ccc47dac19389768a10bb06afa7bb087.jpg",
    "revision": "e43b510734ca50883b55cf7a40bfef49"
  },
  {
    "url": "assets/static/plenti-website.4833fd8.b152808a72f3dc52e1a54d603e8d8779.png",
    "revision": "8a3705d697f8567247ec3df9eb388a58"
  },
  {
    "url": "assets/static/plenti-website.82a2fbd.b152808a72f3dc52e1a54d603e8d8779.png",
    "revision": "1b9ef0570f42f3e03104a9db89916437"
  },
  {
    "url": "assets/static/plenti-website.cbab2cf.b152808a72f3dc52e1a54d603e8d8779.png",
    "revision": "b9a89550a549f3caa784666a72341fba"
  },
  {
    "url": "assets/static/plentico.bee7bc6.194297d413411ed30547dfe46b7a3419.svg",
    "revision": "194297d413411ed30547dfe46b7a3419"
  },
  {
    "url": "assets/static/podcast-cover.0952095.d524e8562533a0f35b9eb108b1479bf4.jpeg",
    "revision": "b876f5d607378f39d8eac065d87d145f"
  },
  {
    "url": "assets/static/podcast.f33a511.8716d45c1a16b1e2fa3f76789345c6ef.png",
    "revision": "9743d38dd1e5be8f1ffa4f370f608e60"
  },
  {
    "url": "assets/static/stackbit-logo.19505e6.ae4a4c399334363d2c975b070551a9be.png",
    "revision": "2c80efc56e285147670c1232fc2f58df"
  },
  {
    "url": "assets/static/stackbit.1b91758.f4c0d04cbb20dedd6aa4f861b60af1fd.png",
    "revision": "faf9ffba283e24d9564fb77b2bea0694"
  },
  {
    "url": "assets/static/stackbit.39ccf44.f4c0d04cbb20dedd6aa4f861b60af1fd.png",
    "revision": "e95ef198a32c9b7a2db09e9280228c09"
  },
  {
    "url": "assets/static/svelte.1b91758.5ddc1132dcfd1d52d744dbffb4bd3150.png",
    "revision": "ccfbf37a893c32a5980dacf4f2e80910"
  },
  {
    "url": "assets/static/svelte.39ccf44.5ddc1132dcfd1d52d744dbffb4bd3150.png",
    "revision": "7f801c31393dad449ad9fdc73fb7ce31"
  },
  {
    "url": "assets/static/sveltelogo.1b91758.9c81aac2f3cd5982d090ec8afba36c41.png",
    "revision": "1acd9c4860ccdb7541271834ab366023"
  },
  {
    "url": "assets/static/sveltelogo.523210b.9c81aac2f3cd5982d090ec8afba36c41.png",
    "revision": "a053779722c47fc97424023ed184d4e5"
  },
  {
    "url": "assets/static/tech-stack.0b85c65.61576ef215b9ca287540ef9a0e763cbe.png",
    "revision": "44862172ec96ddd3710a8835679bfb8d"
  },
  {
    "url": "assets/static/tech-stack.1b91758.61576ef215b9ca287540ef9a0e763cbe.png",
    "revision": "cc14ba15f6fa03140955c02813a0eff4"
  },
  {
    "url": "assets/static/tech-stack.3df3210.61576ef215b9ca287540ef9a0e763cbe.png",
    "revision": "fc4b9dcc81f01ecfb099e86221743566"
  },
  {
    "url": "assets/static/vercel-icon-dark.1b91758.5d70841e09695ca9ae2159c05ebedc51.svg",
    "revision": "5d70841e09695ca9ae2159c05ebedc51"
  },
  {
    "url": "assets/static/vercel-icon-dark.d73fee8.5d70841e09695ca9ae2159c05ebedc51.svg",
    "revision": "5d70841e09695ca9ae2159c05ebedc51"
  },
  {
    "url": "assets/static/vue-developers.1b91758.1414f61fb939009dd386eca69ba1f19e.png",
    "revision": "18e0a683c8bd35d7949fba3557092c87"
  },
  {
    "url": "assets/static/vue-developers.39ccf44.1414f61fb939009dd386eca69ba1f19e.png",
    "revision": "47c2558bdbad373b4f1827ed52d2ed2e"
  },
  {
    "url": "assets/static/vue-logo.f33a511.c6020a6ae2a050876b3b6ba913508292.png",
    "revision": "08e44191eebe6520b9bdc73be03401b9"
  },
  {
    "url": "assets/static/vue-packages-cover.09b17d9.79c661c978735a6a75bfbd730936adce.jpg",
    "revision": "2c55095f8e2f7e81fb11dffc129fe4eb"
  },
  {
    "url": "assets/static/vue-packages-cover.0b85c65.79c661c978735a6a75bfbd730936adce.jpg",
    "revision": "c9ddaf706d69f0a5f37a23c183ae18d1"
  },
  {
    "url": "assets/static/vue-packages-cover.1b91758.79c661c978735a6a75bfbd730936adce.jpg",
    "revision": "ec747dfafa8505e6c866519763df5ea3"
  },
  {
    "url": "assets/static/vue-packages-cover.3df3210.79c661c978735a6a75bfbd730936adce.jpg",
    "revision": "489b72debc025b884b4403e734a41f9d"
  },
  {
    "url": "assets/static/vue-resources.1b91758.920558c5b62fa56e7c795f9189e2c361.png",
    "revision": "f38719a80c440dfd0f56a2a8d0074101"
  },
  {
    "url": "assets/static/vue-resources.39ccf44.920558c5b62fa56e7c795f9189e2c361.png",
    "revision": "1a2c209d2c9b3a951134e701bf1979b4"
  },
  {
    "url": "assets/static/vue-tools.1b91758.72f2e209b46dfbcae6594fdf400a9bab.png",
    "revision": "41b97158569e783be26321e7a536041d"
  },
  {
    "url": "assets/static/vue-tools.39ccf44.72f2e209b46dfbcae6594fdf400a9bab.png",
    "revision": "c47a39ee32d4728ca1561d6a59a6c510"
  },
  {
    "url": "assets/static/vue-ui-frameworks.1b91758.07b83c486c8f65e3c69643cd42f0e089.png",
    "revision": "71de19bbb722e9ab6beee39282b20273"
  },
  {
    "url": "assets/static/vue-ui-frameworks.39ccf44.07b83c486c8f65e3c69643cd42f0e089.png",
    "revision": "dad542bf5ee5d4b8eadf908f8ef112c9"
  },
  {
    "url": "assets/static/web-logo.f33a511.7e53604eda0e29e2741d4fc6a5595261.svg",
    "revision": "7e53604eda0e29e2741d4fc6a5595261"
  },
  {
    "url": "assets/static/woo-logo.1b91758.0176745c8210d2200d4139c390901b91.png",
    "revision": "ba11b3568310e7e4df990cabb7311396"
  },
  {
    "url": "assets/static/woo-logo.24a76c4.0176745c8210d2200d4139c390901b91.png",
    "revision": "f00a34ffe4df58bc0c846c7f4f300a07"
  },
  {
    "url": "blog/2/index.html",
    "revision": "413e0f2792fd71def6f1e207f7b4084e"
  },
  {
    "url": "blog/3/index.html",
    "revision": "9bccd73802f9c37cf650ce37f82e06e9"
  },
  {
    "url": "blog/index.html",
    "revision": "83dc9e05e5b6e7a55d86a97af81ea983"
  },
  {
    "url": "contact/index.html",
    "revision": "24dc1f04fb4f965a84f04698efb6b568"
  },
  {
    "url": "flexsearch.json",
    "revision": "9a6fb7c4d6fb51258f21d4a6e88acae6"
  },
  {
    "url": "icon.png",
    "revision": "e5dc09c24a1a97179d8649afd354b965"
  },
  {
    "url": "index.html",
    "revision": "32a805fcbe0c538f6aabcbd5dcb7dfda"
  },
  {
    "url": "manifest.json",
    "revision": "6715d0751d8f81d52c86d2f35f9a1f89"
  },
  {
    "url": "portfolio/2/index.html",
    "revision": "f4b7b8f04e629308870ea4b17ecb76e1"
  },
  {
    "url": "portfolio/index.html",
    "revision": "b4bae6800259bce22b4e2542478474bf"
  },
  {
    "url": "post/5-vue-ui-frameworks-for-rapid-ui-development/index.html",
    "revision": "90a591926f2fe45c4da170c2e010bd53"
  },
  {
    "url": "post/add-another-version-of-php-in-laragon/index.html",
    "revision": "897c5543ee5c11a612dd67371ece170f"
  },
  {
    "url": "post/awesome-list-of-vue-js-libraries/index.html",
    "revision": "cec0c79de9f516c58d9ed95b0bdb5182"
  },
  {
    "url": "post/create-a-custom-loading-animation-component-in-nuxt-js-with-lottie/index.html",
    "revision": "91efff03eba83607f310fd6e85836af0"
  },
  {
    "url": "post/create-a-jamstack-site-in-under-5-minutes/index.html",
    "revision": "5ccc0d05855aa3d6f9dc103872a5ae0f"
  },
  {
    "url": "post/deploy-plenti-site-on-netlify/index.html",
    "revision": "616c1873de39021b77893acc64634079"
  },
  {
    "url": "post/fix-vue-package-mismatch-error-on-vercel/index.html",
    "revision": "aebdf0fb5ec37feadc27548e70e23da3"
  },
  {
    "url": "post/how-to-use-vue-plugins-with-no-ssr-support-on-a-gridsome-project/index.html",
    "revision": "758e932a48cdebdc48fb2d20efb38000"
  },
  {
    "url": "post/integrating-netlify-cms-to-your-gridsome-site/index.html",
    "revision": "3002661b68a62d3de97c52e15e845891"
  },
  {
    "url": "post/let-s-create-ui-components-in-svelte/index.html",
    "revision": "37b7e529caf5cd20a1d2767a59111896"
  },
  {
    "url": "post/my-tech-stack-2020/index.html",
    "revision": "61594044d19e9e446caeeeda8adbb23e"
  },
  {
    "url": "post/people-you-should-follow-if-you-re-a-vue-developer/index.html",
    "revision": "a6c94fda298faa22c1206fcbe9b44049"
  },
  {
    "url": "post/reviewing-javascript-fundamentals/index.html",
    "revision": "4439b1798e5b917157342bcaad64099f"
  },
  {
    "url": "post/sharing-my-go-to-podcasts/index.html",
    "revision": "8e4490e7dda4ca6da20b7afd20a4c3a3"
  },
  {
    "url": "post/top-nuxt-js-modules/index.html",
    "revision": "4585fdbc32ceb2c20f3b6e4338b9c10c"
  },
  {
    "url": "post/track-your-website-with-umami/index.html",
    "revision": "ed1693a5315044d34fa19d08983bf99c"
  },
  {
    "url": "post/where-i-learn-vue-js/index.html",
    "revision": "6174f947a83b572fe4e176e25d5cde08"
  },
  {
    "url": "post/woo-commerce-site-to-single-page-app-in-no-time/index.html",
    "revision": "b22e6d32f0716306aeaeea84f7ccc519"
  },
  {
    "url": "projects/apeldeskel/index.html",
    "revision": "7b31b0f5375ffabd883a1a1599715400"
  },
  {
    "url": "projects/bumi-glagah-arum/index.html",
    "revision": "4dda201489866ac988c15d27152e8553"
  },
  {
    "url": "projects/doctor-appointment-app/index.html",
    "revision": "10f4573cb4b18a03bd3ba255c6acdab2"
  },
  {
    "url": "projects/e-tani-blitar/index.html",
    "revision": "fb247fa85053443d5a866a3bd8deb8c2"
  },
  {
    "url": "projects/flutter-sleep-app/index.html",
    "revision": "5cf1d80515c1e36bc30b7f66120f5370"
  },
  {
    "url": "projects/jdih-kab-malang/index.html",
    "revision": "6c87c8964012daed5c6bfcd0d8b34f54"
  },
  {
    "url": "projects/koin-nu-kota-blitar/index.html",
    "revision": "d4c87f7bfe2d35ec242a0d80a3cb13f9"
  },
  {
    "url": "projects/nusantaramartid/index.html",
    "revision": "1fbfed995b076a92dd3028ec017a5f8a"
  },
  {
    "url": "projects/silpusitron/index.html",
    "revision": "beb6a348715610a54e423327dcfb9589"
  },
  {
    "url": "projects/smart-soil-selector/index.html",
    "revision": "f3a9775ca89ad986fae415610178fb2a"
  },
  {
    "url": "resources/2/index.html",
    "revision": "7d514302a22bff6839c67f95404f8fca"
  },
  {
    "url": "resources/3/index.html",
    "revision": "78b781bf9f92ce288c72bfe951f6ebfa"
  },
  {
    "url": "resources/4/index.html",
    "revision": "11e08e5ccc6a3f47fd798b57a1e3e31f"
  },
  {
    "url": "resources/index.html",
    "revision": "7d992584497133b63a1137e827237547"
  },
  {
    "url": "search/index.html",
    "revision": "290eed5a12181bbdf3b53f5af1339a35"
  },
  {
    "url": "success/index.html",
    "revision": "e2e1e29cf324568ae08b5b947fa4b4c3"
  },
  {
    "url": "tag/analytics/index.html",
    "revision": "f8a3ed5113e1dda52820ec3d4d760e43"
  },
  {
    "url": "tag/Basics/index.html",
    "revision": "51598454c0e5b391472e4db8c3310a84"
  },
  {
    "url": "tag/Developers/index.html",
    "revision": "07c3712ee161edb399ad83d2d15f836c"
  },
  {
    "url": "tag/ECommerce/index.html",
    "revision": "30278c05d1d5087ee335bf121809d93b"
  },
  {
    "url": "tag/gridsome/index.html",
    "revision": "821f33182f95140d6e2e055b2286a7b6"
  },
  {
    "url": "tag/Jamstack/index.html",
    "revision": "9d3aa27b1cfe42336d2c46d5a581c9c6"
  },
  {
    "url": "tag/Javascript/index.html",
    "revision": "0d62e176a4904d829751ab6c083991a1"
  },
  {
    "url": "tag/Laravel/index.html",
    "revision": "9e8753a3d6240d4f92bf404cb7c7eac8"
  },
  {
    "url": "tag/Learning/index.html",
    "revision": "dbdd6ea7890680881b432e726d23a299"
  },
  {
    "url": "tag/Netlify CMS/index.html",
    "revision": "d65f88bc0a3380033264f2b81b9bfa1c"
  },
  {
    "url": "tag/Netlify/index.html",
    "revision": "41dc7ab156ed13c510a8048db767c100"
  },
  {
    "url": "tag/Nuxt/index.html",
    "revision": "52f83172614e665154d78394128c2359"
  },
  {
    "url": "tag/nuxtjs/index.html",
    "revision": "cc49b27f3aafebc843a9cd7f2c77c6c5"
  },
  {
    "url": "tag/OSS Libraries/index.html",
    "revision": "0b784cf080b3afa42c6e8f2c0312fd26"
  },
  {
    "url": "tag/Plenti/index.html",
    "revision": "f13694c48318185e46bb69df5a9ed05d"
  },
  {
    "url": "tag/PWA/index.html",
    "revision": "88e1e58bb234b47fdc2f40e1066e893e"
  },
  {
    "url": "tag/Resources/index.html",
    "revision": "7f5bcc7e774cd58ea55d2b3bf9c7d88d"
  },
  {
    "url": "tag/SPA/index.html",
    "revision": "9b548bda069f46c91c691c302f589a43"
  },
  {
    "url": "tag/Stackbit/index.html",
    "revision": "ca5af676960ceb8b062dd49a3ce7639a"
  },
  {
    "url": "tag/Svelte/index.html",
    "revision": "b88455fed856470b1a5f833bee2ba7aa"
  },
  {
    "url": "tag/Tech Stack/index.html",
    "revision": "c03f5a55abb1cb57943acc314fbbd8b2"
  },
  {
    "url": "tag/UI Component/index.html",
    "revision": "2fa8f02c5e012e6f948b03da0e7adacc"
  },
  {
    "url": "tag/UI Libraries/index.html",
    "revision": "f6c6be1f41804f064a19de07b865b24d"
  },
  {
    "url": "tag/vercel/index.html",
    "revision": "df18edb377b023ab136bbbf906d76616"
  },
  {
    "url": "tag/Vue.js/index.html",
    "revision": "097ad904b04e4b9b72efd852ac2562b3"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "b1f0af95490911812f798f60a8c805c5"
  },
  {
    "url": "404",
    "revision": "58562ccce683f1fa20f0b08d84a700bb"
  },
  {
    "url": "post/woo-commerce-site-to-single-page-app-in-no-time",
    "revision": "d9bcf92e70c033bb282b68be9af5a242"
  },
  {
    "url": "post/where-i-learn-vue-js",
    "revision": "018919bd5d6b93796b0079b2a949fec6"
  },
  {
    "url": "post/people-you-should-follow-if-you-re-a-vue-developer",
    "revision": "06c94136888f14be85d80f19700f1287"
  },
  {
    "url": "post/track-your-website-with-umami",
    "revision": "ca475cfd7a8cfcfb5c73fcc81e7e8bd0"
  },
  {
    "url": "post/sharing-my-go-to-podcasts",
    "revision": "0a9fe790a2a1c4b3d6daf5476117167f"
  },
  {
    "url": "post/top-nuxt-js-modules",
    "revision": "351cb0b09dba20c389cae3ae06f48ac0"
  },
  {
    "url": "post/how-to-use-vue-plugins-with-no-ssr-support-on-a-gridsome-project",
    "revision": "19a08e475fe5928022d4a490714e0ab3"
  },
  {
    "url": "post/reviewing-javascript-fundamentals",
    "revision": "87da0d3ee0e9c5d33f04014307b0adf0"
  },
  {
    "url": "post/let-s-create-ui-components-in-svelte",
    "revision": "451e3f1e6a593c5c599c05d1dd2d3290"
  },
  {
    "url": "post/my-tech-stack-2020",
    "revision": "7a2a39b83dc2deb2c28a54c7f8030a0d"
  },
  {
    "url": "post/integrating-netlify-cms-to-your-gridsome-site",
    "revision": "0c46b85e8661a5dd67689b0f178a0f85"
  },
  {
    "url": "post/create-a-custom-loading-animation-component-in-nuxt-js-with-lottie",
    "revision": "2ca4eda8f1b64045428550193238a3d7"
  },
  {
    "url": "post/fix-vue-package-mismatch-error-on-vercel",
    "revision": "5aaaa631ae8a8caa478ecfa11d526ba9"
  },
  {
    "url": "post/create-a-jamstack-site-in-under-5-minutes",
    "revision": "d553ae88d4598944a95c4d14a1e36df5"
  },
  {
    "url": "post/deploy-plenti-site-on-netlify",
    "revision": "a6c3c1301ae141663d7fc29af5975d03"
  },
  {
    "url": "post/add-another-version-of-php-in-laragon",
    "revision": "5f90fb4bba6ccb5c1928dd45184be3aa"
  },
  {
    "url": "post/awesome-list-of-vue-js-libraries",
    "revision": "cc0c86256c65eddf70a3de7e949756a8"
  },
  {
    "url": "post/5-vue-ui-frameworks-for-rapid-ui-development",
    "revision": "64198d95ed46e8d7770031fc938b01e0"
  },
  {
    "url": "resources",
    "revision": "6de4cd216bbac311fe566453789d014d"
  },
  {
    "url": "resources/2",
    "revision": "0e00c098379366de2d613f4c5bfea2fb"
  },
  {
    "url": "resources/3",
    "revision": "df535c49f4fc14f7e502e04fc48e8245"
  },
  {
    "url": "resources/4",
    "revision": "f711f99b6e04ed2b79ce434b7522f4c1"
  },
  {
    "url": "tag/Vue.js",
    "revision": "93ea409cb38391e23f38a5dc581be47d"
  },
  {
    "url": "tag/OSS%20Libraries",
    "revision": "c602751404f7e3809e521c39c987fdc0"
  },
  {
    "url": "tag/Developers",
    "revision": "135abfd97c10037832544566d0b517f0"
  },
  {
    "url": "tag/ECommerce",
    "revision": "a32b02b040effd9478567b6e542a3dc2"
  },
  {
    "url": "tag/SPA",
    "revision": "55cec258a0a737d79f83b003dbe21f49"
  },
  {
    "url": "tag/PWA",
    "revision": "0e3a3d4040ffdd8bd737ede2b107e7ef"
  },
  {
    "url": "tag/Resources",
    "revision": "800b7b2ce85c0b4e2ec11fb1da209b9d"
  },
  {
    "url": "tag/Netlify%20CMS",
    "revision": "bd506f8c236037d976b93d888b24870e"
  },
  {
    "url": "tag/Netlify",
    "revision": "b52db37e92c2460fba0f91bb71a75b18"
  },
  {
    "url": "tag/Svelte",
    "revision": "7e8c89f71f8bb1d4247c692afed7b129"
  },
  {
    "url": "tag/UI%20Component",
    "revision": "affc8558c90684511d4c9ab67c75785a"
  },
  {
    "url": "tag/Javascript",
    "revision": "96cea1ea30121add557b6ee7095cff7a"
  },
  {
    "url": "tag/Basics",
    "revision": "6c5507aae38487e5d8622a680b6ad9d2"
  },
  {
    "url": "tag/Jamstack",
    "revision": "eb24e0758c13919a6003ceed57a8832e"
  },
  {
    "url": "tag/Stackbit",
    "revision": "7097dad86d4760bb0a57edc8c58191ea"
  },
  {
    "url": "tag/Vue",
    "revision": "ec77c05e13bb0d41dde2864b4381c3ff"
  },
  {
    "url": "tag/UI%20Libraries",
    "revision": "965973184f39c2e2dde92235f19c7f71"
  },
  {
    "url": "tag/Laravel",
    "revision": "10dde33828c0103569a017395d3519c8"
  },
  {
    "url": "tag/Tech%20Stack",
    "revision": "7beff8659e13c9fbe3230b460c980f03"
  },
  {
    "url": "tag/Nuxt",
    "revision": "63d506352dc7709667a28f14533e3064"
  },
  {
    "url": "tag/Plenti",
    "revision": "557a5d6669c3c31d51a63a22f3d2726f"
  },
  {
    "url": "tag/Learning",
    "revision": "ee100aa725afaba093da8bb2e2165a2c"
  },
  {
    "url": "tag/analytics",
    "revision": "6b6c0de02ea89214daa3f07312a293f8"
  },
  {
    "url": "tag/gridsome",
    "revision": "fc3cd70cca245b01a63441dcda4c57ba"
  },
  {
    "url": "tag/nuxtjs",
    "revision": "7b52cbcc16c1fa0279c014a78f422ede"
  },
  {
    "url": "tag/vercel",
    "revision": "53623e68b38bcd59518a999a55346fa5"
  },
  {
    "url": "portfolio",
    "revision": "21fee60577c28b4c99a503114f09c6c0"
  },
  {
    "url": "portfolio/2",
    "revision": "41f6afe8958005240ab2dcb9a2bedec3"
  },
  {
    "url": "projects/apeldeskel",
    "revision": "858058c1adfb5a67ad576599a4dc0e08"
  },
  {
    "url": "projects/bumi-glagah-arum",
    "revision": "f103cfb0699ad275848616816204751a"
  },
  {
    "url": "projects/koin-nu-kota-blitar",
    "revision": "cb1b2e0c5a94c00108dbeee1b3ee5e48"
  },
  {
    "url": "projects/e-tani-blitar",
    "revision": "df3ff98239861021e9a5408f8d130491"
  },
  {
    "url": "projects/nusantaramartid",
    "revision": "5c10dcca7aa4979d957512242b619fa6"
  },
  {
    "url": "projects/jdih-kab-malang",
    "revision": "1c1ea2ecde5cb12da33472f206e2c09c"
  },
  {
    "url": "projects/flutter-sleep-app",
    "revision": "38ea9e2fe510334f8be768e8f117c236"
  },
  {
    "url": "projects/doctor-appointment-app",
    "revision": "580bb7b9038658b2f11fe60a00ec971c"
  },
  {
    "url": "projects/smart-soil-selector",
    "revision": "9c5c56c9371e7d953421feb4202dfa50"
  },
  {
    "url": "projects/silpusitron",
    "revision": "1c7b2d97d8593da60a3e60d1ae54ffec"
  },
  {
    "url": "blog",
    "revision": "dd587c9295247ac17907f2a69e32ff93"
  },
  {
    "url": "blog/2",
    "revision": "5b26fe5e84a160090727e484b5cd8b6d"
  },
  {
    "url": "blog/3",
    "revision": "bbbc307e50789ec8650af117e8f33630"
  },
  {
    "url": "search",
    "revision": "414914cf1826735ecb2aef3a5c3af31b"
  },
  {
    "url": "success",
    "revision": "be03d3b63045fed18ede6b9e839b98b0"
  },
  {
    "url": "contact",
    "revision": "c169ae72704e998675892234277690e3"
  },
  {
    "url": "about",
    "revision": "d5ed40a85efa7fda2465f2d9ecd19e61"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})