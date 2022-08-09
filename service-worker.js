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
    "revision": "45593eec20e92a60b55fcba422b58e3f"
  },
  {
    "url": "404/index.html",
    "revision": "45593eec20e92a60b55fcba422b58e3f"
  },
  {
    "url": "about/index.html",
    "revision": "d7657ea9c5d716d8741b46adbf76db4c"
  },
  {
    "url": "assets/css/0.styles.f12fd186.css",
    "revision": "a287265959aaec4a7b68560cbebea4b5"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "33654f66ecbebe416ec85ea24ac47f4b"
  },
  {
    "url": "assets/data/about/index.json",
    "revision": "e6c850e2e88e6a98302b7d1097d2032b"
  },
  {
    "url": "assets/data/blog/2/index.json",
    "revision": "101176a3b62e142876854226fc0c58d8"
  },
  {
    "url": "assets/data/blog/3/index.json",
    "revision": "aef159e538e7e97ec6f33d5e460ae367"
  },
  {
    "url": "assets/data/blog/index.json",
    "revision": "08e86e6ff3cf8d72ef0d081e33d01f0a"
  },
  {
    "url": "assets/data/contact/index.json",
    "revision": "e6c850e2e88e6a98302b7d1097d2032b"
  },
  {
    "url": "assets/data/index.json",
    "revision": "e6c850e2e88e6a98302b7d1097d2032b"
  },
  {
    "url": "assets/data/portfolio/2/index.json",
    "revision": "22508d0bbe1a90dc102104edfce18a87"
  },
  {
    "url": "assets/data/portfolio/index.json",
    "revision": "2d978702306820349190ff224e4b6dd2"
  },
  {
    "url": "assets/data/post/5-vue-ui-frameworks-for-rapid-ui-development/index.json",
    "revision": "242089934a6ce5e1f2e12e737bffdd4a"
  },
  {
    "url": "assets/data/post/add-another-version-of-php-in-laragon/index.json",
    "revision": "ba8ff1effc94088e2dacdec284dca819"
  },
  {
    "url": "assets/data/post/awesome-list-of-vue-js-libraries/index.json",
    "revision": "04eafc154e7859a32016a87a81eda2b4"
  },
  {
    "url": "assets/data/post/create-a-custom-loading-animation-component-in-nuxt-js-with-lottie/index.json",
    "revision": "fba21ec62c0d4d200f555326bf590e1e"
  },
  {
    "url": "assets/data/post/create-a-jamstack-site-in-under-5-minutes/index.json",
    "revision": "a5965c5d84027d40339d3cffe9882466"
  },
  {
    "url": "assets/data/post/deploy-plenti-site-on-netlify/index.json",
    "revision": "ca2f36460b8df89912404ec8b0728b42"
  },
  {
    "url": "assets/data/post/fix-vue-package-mismatch-error-on-vercel/index.json",
    "revision": "961b8e554ffbc6361d2499a485becdfb"
  },
  {
    "url": "assets/data/post/how-to-use-vue-plugins-with-no-ssr-support-on-a-gridsome-project/index.json",
    "revision": "31b02e6a78e9040c118a8ffc621a4462"
  },
  {
    "url": "assets/data/post/integrating-netlify-cms-to-your-gridsome-site/index.json",
    "revision": "170d6cc3b69b05481c13b3ef393e610f"
  },
  {
    "url": "assets/data/post/let-s-create-ui-components-in-svelte/index.json",
    "revision": "edda3c09f7b5afdee11215d38d6cef4c"
  },
  {
    "url": "assets/data/post/my-tech-stack-2020/index.json",
    "revision": "1470fb61876c03ff402f1fd0235fe531"
  },
  {
    "url": "assets/data/post/people-you-should-follow-if-you-re-a-vue-developer/index.json",
    "revision": "9af33419c73cb9d15298451757f401e7"
  },
  {
    "url": "assets/data/post/reviewing-javascript-fundamentals/index.json",
    "revision": "9a34a1b6af4b48cee57a5a54944317af"
  },
  {
    "url": "assets/data/post/sharing-my-go-to-podcasts/index.json",
    "revision": "2f15869af0bf10bead40926e25f8bd14"
  },
  {
    "url": "assets/data/post/top-nuxt-js-modules/index.json",
    "revision": "602fa105995747d73154a7d47ab0c560"
  },
  {
    "url": "assets/data/post/track-your-website-with-umami/index.json",
    "revision": "5937f190b5aa13716986b4f488e2f437"
  },
  {
    "url": "assets/data/post/where-i-learn-vue-js/index.json",
    "revision": "4322563ee5d00c7805957039308d2677"
  },
  {
    "url": "assets/data/post/woo-commerce-site-to-single-page-app-in-no-time/index.json",
    "revision": "47943299a4b92eedc6832a2086c9f67d"
  },
  {
    "url": "assets/data/projects/apeldeskel/index.json",
    "revision": "f5e7bcba6e75a10601714a8fe645e698"
  },
  {
    "url": "assets/data/projects/bumi-glagah-arum/index.json",
    "revision": "b2a8e546496e9c933b55d6893b629dd2"
  },
  {
    "url": "assets/data/projects/doctor-appointment-app/index.json",
    "revision": "a611e8376a0aacc10f2189f56ff6f37c"
  },
  {
    "url": "assets/data/projects/e-tani-blitar/index.json",
    "revision": "6ac5e13a0ff1200c890a55f1550f43ec"
  },
  {
    "url": "assets/data/projects/flutter-sleep-app/index.json",
    "revision": "2fe2fe47decf45b475a516569ccd7810"
  },
  {
    "url": "assets/data/projects/jdih-kab-malang/index.json",
    "revision": "60b3359073ac38c393e6fcdc843d4875"
  },
  {
    "url": "assets/data/projects/koin-nu-kota-blitar/index.json",
    "revision": "790ac60a33e66aac7efcebc565f5da81"
  },
  {
    "url": "assets/data/projects/nusantaramartid/index.json",
    "revision": "d93f5555a4f931d6716f823bdfda1be0"
  },
  {
    "url": "assets/data/projects/silpusitron/index.json",
    "revision": "63a328b5716844a1f88371705f94a547"
  },
  {
    "url": "assets/data/projects/smart-soil-selector/index.json",
    "revision": "fb0e702567d7b9e75a48c8d5f1fc4123"
  },
  {
    "url": "assets/data/resources/2/index.json",
    "revision": "e5a9a3f028478ca039c6a9fa501d1685"
  },
  {
    "url": "assets/data/resources/3/index.json",
    "revision": "59dbe8c27f6f6b4f1c6961603d953c66"
  },
  {
    "url": "assets/data/resources/4/index.json",
    "revision": "9ddae735b8eb622fbed45c5debb37adc"
  },
  {
    "url": "assets/data/resources/index.json",
    "revision": "e5b471c8f6ebe19e5796cf71a3b16186"
  },
  {
    "url": "assets/data/search/index.json",
    "revision": "e6c850e2e88e6a98302b7d1097d2032b"
  },
  {
    "url": "assets/data/success/index.json",
    "revision": "e6c850e2e88e6a98302b7d1097d2032b"
  },
  {
    "url": "assets/data/tag/analytics/index.json",
    "revision": "df2ce0be8207571d43159e0ab6f9c984"
  },
  {
    "url": "assets/data/tag/Basics/index.json",
    "revision": "04848e2557305373164f43b8749c357a"
  },
  {
    "url": "assets/data/tag/Developers/index.json",
    "revision": "2f198f5935b69b01d5d03ce601694459"
  },
  {
    "url": "assets/data/tag/ECommerce/index.json",
    "revision": "a882d23a46de4aaa9dec902b4a864e98"
  },
  {
    "url": "assets/data/tag/gridsome/index.json",
    "revision": "85d1ac27d265ebbcd019f5fb36a677d7"
  },
  {
    "url": "assets/data/tag/Jamstack/index.json",
    "revision": "a97785a2824191bcc54cf9c1904df0cc"
  },
  {
    "url": "assets/data/tag/Javascript/index.json",
    "revision": "e11452d7e212a30dd6670c54c9d4e96e"
  },
  {
    "url": "assets/data/tag/Laravel/index.json",
    "revision": "a8e03accd0545c7b4983ad3e9adb705e"
  },
  {
    "url": "assets/data/tag/Learning/index.json",
    "revision": "5aed6f998d84234b99b199d91235ca56"
  },
  {
    "url": "assets/data/tag/Netlify CMS/index.json",
    "revision": "d169db6a74b4922c4da4955fa9855b88"
  },
  {
    "url": "assets/data/tag/Netlify/index.json",
    "revision": "ad0939f43ab96f82f1fc49225f657601"
  },
  {
    "url": "assets/data/tag/Nuxt/index.json",
    "revision": "8f228b8365f09a30fda1b6550e7b6eed"
  },
  {
    "url": "assets/data/tag/nuxtjs/index.json",
    "revision": "f6e33c3c262bc4b528ca157fe1fe9e09"
  },
  {
    "url": "assets/data/tag/OSS Libraries/index.json",
    "revision": "735c97b71c01212f476b2ab499cd84c9"
  },
  {
    "url": "assets/data/tag/Plenti/index.json",
    "revision": "7f0ab44477f018777a32f13159fee01b"
  },
  {
    "url": "assets/data/tag/PWA/index.json",
    "revision": "5dca50ca5128d050ed8e07a6e90731a6"
  },
  {
    "url": "assets/data/tag/Resources/index.json",
    "revision": "01e8e43301d97db27fe9cac541c0485b"
  },
  {
    "url": "assets/data/tag/SPA/index.json",
    "revision": "14a16c2c62f08bdd0a30810893db657e"
  },
  {
    "url": "assets/data/tag/Stackbit/index.json",
    "revision": "644af47eaa21320d65038e6763fadcfa"
  },
  {
    "url": "assets/data/tag/Svelte/index.json",
    "revision": "15779da63a4dd7bc365cedade0d0c61e"
  },
  {
    "url": "assets/data/tag/Tech Stack/index.json",
    "revision": "78648cf5323120b3873ddc9421bc7543"
  },
  {
    "url": "assets/data/tag/UI Component/index.json",
    "revision": "63d50ae115213d2d4f19d72e34e2220b"
  },
  {
    "url": "assets/data/tag/UI Libraries/index.json",
    "revision": "c3fc33d5064ebccd05c6756e7dec9518"
  },
  {
    "url": "assets/data/tag/vercel/index.json",
    "revision": "e50dcd31348dfe3d9d6160c27437ac91"
  },
  {
    "url": "assets/data/tag/Vue.js/index.json",
    "revision": "8b7be10dde05a53a78290238f1280954"
  },
  {
    "url": "assets/data/tag/Vue/index.json",
    "revision": "f8e601cc9e3ed0c99a497129c00da6d5"
  },
  {
    "url": "assets/js/app.e4569b8f.js",
    "revision": "efadf7b02874704b95f24c3ff9c46730"
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
    "url": "assets/js/page--src-pages-search-vue.4fcc5131.js",
    "revision": "bf7104bf60930aa07c5dc7dbbf93e8cb"
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
    "url": "assets/js/page--src-templates-project-vue.05892558.js",
    "revision": "3224ff53a5c90483e91d2a479ccd85ac"
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
    "revision": "1f4479644baee9c41b568d8d33fdc364"
  },
  {
    "url": "blog/3/index.html",
    "revision": "11924f2a02d64d95b6b5f239d6b4cfa9"
  },
  {
    "url": "blog/index.html",
    "revision": "077cf1a9f0382a32963a2ea364c70c32"
  },
  {
    "url": "contact/index.html",
    "revision": "6ea1d7bc4e2eee2479c2283c1dbbc9c2"
  },
  {
    "url": "flexsearch.json",
    "revision": "02376422ceab9d0e9417876fa736a391"
  },
  {
    "url": "icon.png",
    "revision": "e5dc09c24a1a97179d8649afd354b965"
  },
  {
    "url": "index.html",
    "revision": "4ecc67213885e2f92955e88b6b66ecc5"
  },
  {
    "url": "manifest.json",
    "revision": "6715d0751d8f81d52c86d2f35f9a1f89"
  },
  {
    "url": "portfolio/2/index.html",
    "revision": "641bb10478fbc43a574a9c3796d7f2c1"
  },
  {
    "url": "portfolio/index.html",
    "revision": "144e885f6b7c2d82e4c7cef1325f6cbd"
  },
  {
    "url": "post/5-vue-ui-frameworks-for-rapid-ui-development/index.html",
    "revision": "402927818919d95890711fe4819b1318"
  },
  {
    "url": "post/add-another-version-of-php-in-laragon/index.html",
    "revision": "db2c0a7a3c803f5d238495923c37274d"
  },
  {
    "url": "post/awesome-list-of-vue-js-libraries/index.html",
    "revision": "d3566dac06f72d215ff3438dc9dd4591"
  },
  {
    "url": "post/create-a-custom-loading-animation-component-in-nuxt-js-with-lottie/index.html",
    "revision": "4ad9b723e6026affe1f9d8809d407abb"
  },
  {
    "url": "post/create-a-jamstack-site-in-under-5-minutes/index.html",
    "revision": "f0428b33ad4868cec5fbc8181ef24d2b"
  },
  {
    "url": "post/deploy-plenti-site-on-netlify/index.html",
    "revision": "f4dcd715c952f3070c56df6dc9ed719f"
  },
  {
    "url": "post/fix-vue-package-mismatch-error-on-vercel/index.html",
    "revision": "7ba48281fb9806f20860d9557de77975"
  },
  {
    "url": "post/how-to-use-vue-plugins-with-no-ssr-support-on-a-gridsome-project/index.html",
    "revision": "4d5c6318f347bbf63654e74fc8eef4e0"
  },
  {
    "url": "post/integrating-netlify-cms-to-your-gridsome-site/index.html",
    "revision": "1f1b051b862394b7323477b86951dd63"
  },
  {
    "url": "post/let-s-create-ui-components-in-svelte/index.html",
    "revision": "ddfe732042e35b6188e1185ada797394"
  },
  {
    "url": "post/my-tech-stack-2020/index.html",
    "revision": "81005303f7395f95f2105f085f3ef83b"
  },
  {
    "url": "post/people-you-should-follow-if-you-re-a-vue-developer/index.html",
    "revision": "36b79e8e144d102bb82f630aad27d939"
  },
  {
    "url": "post/reviewing-javascript-fundamentals/index.html",
    "revision": "967971dc977bdf30b70ff612bd9e71e5"
  },
  {
    "url": "post/sharing-my-go-to-podcasts/index.html",
    "revision": "97ee07aca4116b5c441ecc75ac3bb83d"
  },
  {
    "url": "post/top-nuxt-js-modules/index.html",
    "revision": "10b32548698471627146e433142bd8de"
  },
  {
    "url": "post/track-your-website-with-umami/index.html",
    "revision": "934e8fae6eed41b5bf817a933eceba11"
  },
  {
    "url": "post/where-i-learn-vue-js/index.html",
    "revision": "4d565971bc49ae1a0c24b5a2f1cc4ab1"
  },
  {
    "url": "post/woo-commerce-site-to-single-page-app-in-no-time/index.html",
    "revision": "4cd0104dbcd6af62bba906a82f007517"
  },
  {
    "url": "projects/apeldeskel/index.html",
    "revision": "0b5fda801f75f3715bf9b3c7b9e15c3e"
  },
  {
    "url": "projects/bumi-glagah-arum/index.html",
    "revision": "5949a9448564efd37bff367cb8ce329a"
  },
  {
    "url": "projects/doctor-appointment-app/index.html",
    "revision": "7e53f735111b4dbd061eb9e2f7d718ed"
  },
  {
    "url": "projects/e-tani-blitar/index.html",
    "revision": "0d25adcc150be2cb7bc2eac419f9f284"
  },
  {
    "url": "projects/flutter-sleep-app/index.html",
    "revision": "936a24880c30adb5508472fff9d639cc"
  },
  {
    "url": "projects/jdih-kab-malang/index.html",
    "revision": "8de89338af0a6115baf4e9f63ad318a2"
  },
  {
    "url": "projects/koin-nu-kota-blitar/index.html",
    "revision": "3c094aa151292cfbecaa9cc85994327b"
  },
  {
    "url": "projects/nusantaramartid/index.html",
    "revision": "c09c59e3ccf85de6b9ca175b6b9af4f3"
  },
  {
    "url": "projects/silpusitron/index.html",
    "revision": "3b9fa2a13ec344886a125fdef6d94844"
  },
  {
    "url": "projects/smart-soil-selector/index.html",
    "revision": "5725379ff3570e4e075b4455ffb8c5ec"
  },
  {
    "url": "resources/2/index.html",
    "revision": "1b2d194278f5dcb21e696a2b6eddda46"
  },
  {
    "url": "resources/3/index.html",
    "revision": "5a3c20dff32cc588dfb88af17e88fea6"
  },
  {
    "url": "resources/4/index.html",
    "revision": "7fe15702de5645454e465d297bd4d1c6"
  },
  {
    "url": "resources/index.html",
    "revision": "4f225a242459b9d8e102e8aa5a54f191"
  },
  {
    "url": "search/index.html",
    "revision": "e9ce569829ec9eff93126ce70ca917e8"
  },
  {
    "url": "success/index.html",
    "revision": "7f4e22ae2b48f038bcd1ac835ba48a2f"
  },
  {
    "url": "tag/analytics/index.html",
    "revision": "67dde6d0aba2fb92cffcf0749819de40"
  },
  {
    "url": "tag/Basics/index.html",
    "revision": "e1bbd871b49f2a359fbc07034875dad8"
  },
  {
    "url": "tag/Developers/index.html",
    "revision": "948b11406df099f13e2dbf70a59529b5"
  },
  {
    "url": "tag/ECommerce/index.html",
    "revision": "50342f78fa788646d8a2d0c7923c9237"
  },
  {
    "url": "tag/gridsome/index.html",
    "revision": "a083c9abdbbb7631ebeb306359721710"
  },
  {
    "url": "tag/Jamstack/index.html",
    "revision": "70f6a2783790d04e9024a5e957b55666"
  },
  {
    "url": "tag/Javascript/index.html",
    "revision": "90deacee6e4853cc9f6d09f3de6b83e4"
  },
  {
    "url": "tag/Laravel/index.html",
    "revision": "e23f69e99a803712888dcca22b2f89dd"
  },
  {
    "url": "tag/Learning/index.html",
    "revision": "46af0bea143ec6cf9b9c66c743b28732"
  },
  {
    "url": "tag/Netlify CMS/index.html",
    "revision": "77a1c566950b3a0d497c7373f75c7186"
  },
  {
    "url": "tag/Netlify/index.html",
    "revision": "4781017daddc40ee0dc76733f8159aa2"
  },
  {
    "url": "tag/Nuxt/index.html",
    "revision": "b8fcc275c2aa3c4d9f28ff2375a743a0"
  },
  {
    "url": "tag/nuxtjs/index.html",
    "revision": "d34f7c01a75c7728b88b6bd9a31746f7"
  },
  {
    "url": "tag/OSS Libraries/index.html",
    "revision": "9fa6c5d93f450a1b56fd3693715f1038"
  },
  {
    "url": "tag/Plenti/index.html",
    "revision": "8913407a55160b6d75a9713690cbbeda"
  },
  {
    "url": "tag/PWA/index.html",
    "revision": "80243579a078164b1e629203a5b46f4a"
  },
  {
    "url": "tag/Resources/index.html",
    "revision": "089f2e4da86e85642a32d4cf28831b33"
  },
  {
    "url": "tag/SPA/index.html",
    "revision": "dcb6d7666219368a4b6007994d5d187c"
  },
  {
    "url": "tag/Stackbit/index.html",
    "revision": "3562191eb27d52d0ea94b67fda49e8b8"
  },
  {
    "url": "tag/Svelte/index.html",
    "revision": "ad60af395a58368fa0b3a4a995902df2"
  },
  {
    "url": "tag/Tech Stack/index.html",
    "revision": "cabeb1c5dabd0cc7871d0e6ae3748844"
  },
  {
    "url": "tag/UI Component/index.html",
    "revision": "c5d39727b43ca5c1923719864a0dbb1f"
  },
  {
    "url": "tag/UI Libraries/index.html",
    "revision": "6729e308f2abc70d4e36692486e837a6"
  },
  {
    "url": "tag/vercel/index.html",
    "revision": "9036b179645f245fba1720ea710ecc0b"
  },
  {
    "url": "tag/Vue.js/index.html",
    "revision": "e8fac7103b3311428fc72b6631b172e4"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "430da316d912cbd8aabf031501493ff2"
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
    "url": "tag/Developers",
    "revision": "135abfd97c10037832544566d0b517f0"
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
    "url": "tag/Svelte",
    "revision": "7e8c89f71f8bb1d4247c692afed7b129"
  },
  {
    "url": "tag/UI%20Component",
    "revision": "affc8558c90684511d4c9ab67c75785a"
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
    "url": "tag/Tech%20Stack",
    "revision": "7beff8659e13c9fbe3230b460c980f03"
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
    "url": "tag/Nuxt",
    "revision": "63d506352dc7709667a28f14533e3064"
  },
  {
    "url": "tag/Plenti",
    "revision": "557a5d6669c3c31d51a63a22f3d2726f"
  },
  {
    "url": "tag/Laravel",
    "revision": "10dde33828c0103569a017395d3519c8"
  },
  {
    "url": "tag/Learning",
    "revision": "ee100aa725afaba093da8bb2e2165a2c"
  },
  {
    "url": "tag/gridsome",
    "revision": "fc3cd70cca245b01a63441dcda4c57ba"
  },
  {
    "url": "tag/analytics",
    "revision": "6b6c0de02ea89214daa3f07312a293f8"
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
    "url": "projects/e-tani-blitar",
    "revision": "df3ff98239861021e9a5408f8d130491"
  },
  {
    "url": "projects/silpusitron",
    "revision": "1c7b2d97d8593da60a3e60d1ae54ffec"
  },
  {
    "url": "projects/nusantaramartid",
    "revision": "5c10dcca7aa4979d957512242b619fa6"
  },
  {
    "url": "projects/koin-nu-kota-blitar",
    "revision": "cb1b2e0c5a94c00108dbeee1b3ee5e48"
  },
  {
    "url": "projects/bumi-glagah-arum",
    "revision": "f103cfb0699ad275848616816204751a"
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