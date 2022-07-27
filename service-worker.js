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
    "revision": "0a11aaac2e4e240e231294b81c76c569"
  },
  {
    "url": "404/index.html",
    "revision": "0a11aaac2e4e240e231294b81c76c569"
  },
  {
    "url": "about/index.html",
    "revision": "e03f76bcb5c4cee2d9115cd66fc0dd08"
  },
  {
    "url": "assets/css/0.styles.342cd5fe.css",
    "revision": "c3503a35aaea7d267e3c8a345b341c2a"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "5ef233fc859a9fa51d168daa74a6e24e"
  },
  {
    "url": "assets/data/about/index.json",
    "revision": "018a355e0f853edfc9b44a9982f6dd52"
  },
  {
    "url": "assets/data/blog/2/index.json",
    "revision": "d0dc14a6ec36bed3e857938c7eaa7ad9"
  },
  {
    "url": "assets/data/blog/3/index.json",
    "revision": "01b49b61557e6c1ddfd94ac2d0078e13"
  },
  {
    "url": "assets/data/blog/index.json",
    "revision": "6e424b6f1d75d5a8b5dd9d5226332195"
  },
  {
    "url": "assets/data/contact/index.json",
    "revision": "018a355e0f853edfc9b44a9982f6dd52"
  },
  {
    "url": "assets/data/index.json",
    "revision": "018a355e0f853edfc9b44a9982f6dd52"
  },
  {
    "url": "assets/data/portfolio/index.json",
    "revision": "2413a3ae45799d39cf4d36d4f6b2c854"
  },
  {
    "url": "assets/data/post/5-vue-ui-frameworks-for-rapid-ui-development/index.json",
    "revision": "7d4b5e29dc63a586fe33b697ddf462c6"
  },
  {
    "url": "assets/data/post/add-another-version-of-php-in-laragon/index.json",
    "revision": "84ff1910506caa02297cb36f12c03bb9"
  },
  {
    "url": "assets/data/post/awesome-list-of-vue-js-libraries/index.json",
    "revision": "23c4228efebcb3b1b4928216e9fddd53"
  },
  {
    "url": "assets/data/post/create-a-custom-loading-animation-component-in-nuxt-js-with-lottie/index.json",
    "revision": "2e9cff3f24ecf68dd8f69e417394a1d7"
  },
  {
    "url": "assets/data/post/create-a-jamstack-site-in-under-5-minutes/index.json",
    "revision": "7a504885804e02fde3e05f58b997ab07"
  },
  {
    "url": "assets/data/post/deploy-plenti-site-on-netlify/index.json",
    "revision": "a204ae5d883c2a96c95856374f4d44a8"
  },
  {
    "url": "assets/data/post/fix-vue-package-mismatch-error-on-vercel/index.json",
    "revision": "fdebbff8355ada3450e17c7621f6e42c"
  },
  {
    "url": "assets/data/post/how-to-use-vue-plugins-with-no-ssr-support-on-a-gridsome-project/index.json",
    "revision": "ac79b4f768e58f4107f1d49aff8c6a99"
  },
  {
    "url": "assets/data/post/integrating-netlify-cms-to-your-gridsome-site/index.json",
    "revision": "fb877db8dcc58c6e6181d52c5a115b39"
  },
  {
    "url": "assets/data/post/let-s-create-ui-components-in-svelte/index.json",
    "revision": "8282409c2ab6ecfa96ac7357e4c04339"
  },
  {
    "url": "assets/data/post/my-tech-stack-2020/index.json",
    "revision": "41141d7202b6e48218c23d3a2aef987f"
  },
  {
    "url": "assets/data/post/people-you-should-follow-if-you-re-a-vue-developer/index.json",
    "revision": "fa9210f69c1334de6084621119a406d0"
  },
  {
    "url": "assets/data/post/reviewing-javascript-fundamentals/index.json",
    "revision": "685138135653b99a5f531c82407c7aff"
  },
  {
    "url": "assets/data/post/sharing-my-go-to-podcasts/index.json",
    "revision": "f256f33ceb232287a898077ccdcad0ba"
  },
  {
    "url": "assets/data/post/top-nuxt-js-modules/index.json",
    "revision": "55da07c45f8b8123ffe2339b0265c7a4"
  },
  {
    "url": "assets/data/post/track-your-website-with-umami/index.json",
    "revision": "8f63d4dc408d6056888175a805229ad3"
  },
  {
    "url": "assets/data/post/where-i-learn-vue-js/index.json",
    "revision": "b26db18457fca0582e98f854256bffcd"
  },
  {
    "url": "assets/data/post/woo-commerce-site-to-single-page-app-in-no-time/index.json",
    "revision": "eca53ecb53bec52601e98607ce4d5bcf"
  },
  {
    "url": "assets/data/projects/doctor-appointment-app/index.json",
    "revision": "50d5d87da4170d75034b493ea7943785"
  },
  {
    "url": "assets/data/projects/nusantara-mart/index.json",
    "revision": "50744be1c85bae3a72affcb09feb50a5"
  },
  {
    "url": "assets/data/projects/smart-soil-selector/index.json",
    "revision": "eaf5af39460bb439046b2e42ea171422"
  },
  {
    "url": "assets/data/resources/2/index.json",
    "revision": "58d85fb2dcadf1c79f4f3ffb1d479ca5"
  },
  {
    "url": "assets/data/resources/3/index.json",
    "revision": "ef3fe5e8691e3f9e87d6359a4f6eaff9"
  },
  {
    "url": "assets/data/resources/4/index.json",
    "revision": "3b6508661a79743521fc577ea8e98ae7"
  },
  {
    "url": "assets/data/resources/index.json",
    "revision": "6061d82744c09a598fc8c4be620b2e3e"
  },
  {
    "url": "assets/data/search/index.json",
    "revision": "018a355e0f853edfc9b44a9982f6dd52"
  },
  {
    "url": "assets/data/success/index.json",
    "revision": "018a355e0f853edfc9b44a9982f6dd52"
  },
  {
    "url": "assets/data/tag/analytics/index.json",
    "revision": "d5748296847ee914b71349829542be84"
  },
  {
    "url": "assets/data/tag/Basics/index.json",
    "revision": "fea8993f94f898cd9e97c5e436fc990e"
  },
  {
    "url": "assets/data/tag/Developers/index.json",
    "revision": "2ee960530ac418b1b3d2abff1a819f63"
  },
  {
    "url": "assets/data/tag/ECommerce/index.json",
    "revision": "d3829ccb6b2ba5425e17a59255106fce"
  },
  {
    "url": "assets/data/tag/gridsome/index.json",
    "revision": "54a0fe087f1ee01a91d53406efd8ceca"
  },
  {
    "url": "assets/data/tag/Jamstack/index.json",
    "revision": "8e5541808ddff5a1733bc4f96cc66bfc"
  },
  {
    "url": "assets/data/tag/Javascript/index.json",
    "revision": "9221e391d8f6a248ece8481cf46cf2a4"
  },
  {
    "url": "assets/data/tag/Laravel/index.json",
    "revision": "20a9f6bd3db45dae8a50e335d1ea277b"
  },
  {
    "url": "assets/data/tag/Learning/index.json",
    "revision": "fd0a00a1ef5f607ae81c8ae63dffc6ff"
  },
  {
    "url": "assets/data/tag/Netlify CMS/index.json",
    "revision": "3105fb7d1dba2e2a0949c9ebd79b3d3d"
  },
  {
    "url": "assets/data/tag/Netlify/index.json",
    "revision": "4cb331bc5a1e0c874068dec09f09dad0"
  },
  {
    "url": "assets/data/tag/Nuxt/index.json",
    "revision": "ec5b768336078efba7e907c347a7145a"
  },
  {
    "url": "assets/data/tag/nuxtjs/index.json",
    "revision": "5ab8160c6cb8dab01b18023c6fa0f7e9"
  },
  {
    "url": "assets/data/tag/OSS Libraries/index.json",
    "revision": "2dca07140fb75a25154d683075a0575b"
  },
  {
    "url": "assets/data/tag/Plenti/index.json",
    "revision": "5b85a191a4eb4518a6466e7071549624"
  },
  {
    "url": "assets/data/tag/PWA/index.json",
    "revision": "9c5cf54dc8c38028f6b8debe1d1f719b"
  },
  {
    "url": "assets/data/tag/Resources/index.json",
    "revision": "aa1307cd907bed96237f1c9648c523c1"
  },
  {
    "url": "assets/data/tag/SPA/index.json",
    "revision": "1e5e500a0a150b2ab3816bbd3180cb2b"
  },
  {
    "url": "assets/data/tag/Stackbit/index.json",
    "revision": "c761833bf4682027ec66bbe459803b9b"
  },
  {
    "url": "assets/data/tag/Svelte/index.json",
    "revision": "caf9170ace2f3373e5d8f5e0b8c03b34"
  },
  {
    "url": "assets/data/tag/Tech Stack/index.json",
    "revision": "d048958255c517618259d52b6a2c501f"
  },
  {
    "url": "assets/data/tag/UI Component/index.json",
    "revision": "ceba849f8c1d14498c7d2ef8ae9c4b7e"
  },
  {
    "url": "assets/data/tag/UI Libraries/index.json",
    "revision": "28038ac7444ef59cfe5706df48bf02dd"
  },
  {
    "url": "assets/data/tag/vercel/index.json",
    "revision": "524b4d5415a3a34e71fa410cb7b2db2c"
  },
  {
    "url": "assets/data/tag/Vue.js/index.json",
    "revision": "415ffc55736e3afd48eeb2cedb164ec1"
  },
  {
    "url": "assets/data/tag/Vue/index.json",
    "revision": "c7591f92d41c0d972a15d58f3b0a0b63"
  },
  {
    "url": "assets/js/app.0e6e44ea.js",
    "revision": "6e7aea53dceec5edf037e54ee4b8c9cf"
  },
  {
    "url": "assets/js/page--src-pages-404-vue.7f98ad09.js",
    "revision": "012648ce9efff4ad23dfe845e2c9045b"
  },
  {
    "url": "assets/js/page--src-pages-about-vue.2c36dcf2.js",
    "revision": "cb9df89e6ec2791604eaf58c06d1a872"
  },
  {
    "url": "assets/js/page--src-pages-blog-vue.64939c35.js",
    "revision": "ecfabe87dbc6e60396b7a59e6183725f"
  },
  {
    "url": "assets/js/page--src-pages-contact-vue.37b57863.js",
    "revision": "6e789ef2551a357e5980351c3ec1b21b"
  },
  {
    "url": "assets/js/page--src-pages-index-vue.1a86c197.js",
    "revision": "7ab29747466bdb08775ec141522b1f31"
  },
  {
    "url": "assets/js/page--src-pages-portfolio-vue.000b2b19.js",
    "revision": "a3635a46f7db41443955fb0d2eba00e8"
  },
  {
    "url": "assets/js/page--src-pages-resources-vue.998077fe.js",
    "revision": "df40804a7f489de28f76cb43a3c145f1"
  },
  {
    "url": "assets/js/page--src-pages-search-vue.e2310427.js",
    "revision": "2e0a766a21899d63830efdd4bc374454"
  },
  {
    "url": "assets/js/page--src-pages-success-vue.73350a29.js",
    "revision": "3087988ae26a4891d69839c90f1f6cb7"
  },
  {
    "url": "assets/js/page--src-templates-blog-post-vue.2b70387a.js",
    "revision": "68567c62e1c75a32561e59af45617cd5"
  },
  {
    "url": "assets/js/page--src-templates-project-vue.d552dab8.js",
    "revision": "4fded4ae69dcbbe765ae51209c3c9f5e"
  },
  {
    "url": "assets/js/page--src-templates-tag-vue.40368275.js",
    "revision": "d762e0f3b2e1b93b79b427ceea757c21"
  },
  {
    "url": "assets/js/vendors~page--src-pages-index-vue.10c03d15.js",
    "revision": "20207dbf6f0c5c49231121662e8131d1"
  },
  {
    "url": "assets/static/analytics-cover.07cc2b7.055ea50a59c0f0e47c5e078c2ff8436f.jpg",
    "revision": "a1c156720e93d583dbbbb278f0043662"
  },
  {
    "url": "assets/static/analytics-cover.a67b0b2.055ea50a59c0f0e47c5e078c2ff8436f.jpg",
    "revision": "128977afff287f7d3b8fc8a900848ed1"
  },
  {
    "url": "assets/static/analytics-logo.f33a511.553d0deecffb6cdd80cbd1a9d7183365.png",
    "revision": "a395b8594215c4c9e481a0165b4bbca8"
  },
  {
    "url": "assets/static/doctor_appointment_cover.07cc2b7.d945d30999269ee6b084ba777177313c.jpg",
    "revision": "9faffe5cc950aef562dcd009a3df5183"
  },
  {
    "url": "assets/static/doctor_appointment_cover.81b85c1.d945d30999269ee6b084ba777177313c.jpg",
    "revision": "cfe25c8e8fd7b1278354a1c6db6e47d2"
  },
  {
    "url": "assets/static/doctor_appointment_cover.a67b0b2.d945d30999269ee6b084ba777177313c.jpg",
    "revision": "2323cd7509b47f01a07fa59207053a17"
  },
  {
    "url": "assets/static/ecommerce.a67b0b2.4ee141d53f1d55f23146af4e9d1145bf.png",
    "revision": "29d099bdfa9cc5440b8e9c43311bc34c"
  },
  {
    "url": "assets/static/ecommerce.fddeb7c.4ee141d53f1d55f23146af4e9d1145bf.png",
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
    "url": "assets/static/gridsome-cover.07cc2b7.8784cb962b0593b5efb51100b12ec2ed.jpg",
    "revision": "431c1ca43fc422bf807c0a575a27a2c8"
  },
  {
    "url": "assets/static/gridsome-cover.a67b0b2.8784cb962b0593b5efb51100b12ec2ed.jpg",
    "revision": "01d16527a0666eac2cd8d87e6de9c59f"
  },
  {
    "url": "assets/static/gridsome-logo.494945c.4559d52abf36b75511f5a297ef22970e.svg",
    "revision": "4559d52abf36b75511f5a297ef22970e"
  },
  {
    "url": "assets/static/javascript.a67b0b2.6103483bc4971923c839db3690c245e6.png",
    "revision": "680239c62eef089a0ec897adb8a4e479"
  },
  {
    "url": "assets/static/javascript.fddeb7c.6103483bc4971923c839db3690c245e6.png",
    "revision": "3cc02d7b426b341d4b127924ac459a3d"
  },
  {
    "url": "assets/static/js-logo.494945c.55aaecf3649c9218242801e11623d81c.png",
    "revision": "5e08617057ff4006d7c46874cd9ae3da"
  },
  {
    "url": "assets/static/laragon-new-php.07cc2b7.49d2ee62cff5176ba67aa1fdac7617d1.png",
    "revision": "49d2ee62cff5176ba67aa1fdac7617d1"
  },
  {
    "url": "assets/static/laragon-new-php.a67b0b2.49d2ee62cff5176ba67aa1fdac7617d1.png",
    "revision": "905df8a5faf71b28ddfbd54a681f9baa"
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
    "url": "assets/static/loading-cover.07cc2b7.7d90372728100968aa7ce7c7c1fcebaa.jpg",
    "revision": "4fb7a78763927ff7f2328e74d8e84dc9"
  },
  {
    "url": "assets/static/loading-cover.a67b0b2.7d90372728100968aa7ce7c7c1fcebaa.jpg",
    "revision": "6e0ffc7ec378a201dadc0276016198c6"
  },
  {
    "url": "assets/static/lottie.f62e88f.d92b46774a29c31dd0c13dd7bd5d8f8e.png",
    "revision": "901df2687f3a1f72a7f29251cffdcac4"
  },
  {
    "url": "assets/static/netlify-cms.a67b0b2.d545fc341053d24f9e41282a9871b83a.png",
    "revision": "137967aba8581820fdaa592fa9b49652"
  },
  {
    "url": "assets/static/netlify-cms.fddeb7c.d545fc341053d24f9e41282a9871b83a.png",
    "revision": "82cbb4338bafa39a53f27df458bd4344"
  },
  {
    "url": "assets/static/netlify-logo.0d7bb5f.95e178f5b1dc1a2327595784442a866c.png",
    "revision": "08928bb6053b5d1da836bae5574593e1"
  },
  {
    "url": "assets/static/numart_coverimage.07cc2b7.eba9cb13701f9fb4ec07b86d483b48e1.jpg",
    "revision": "5eff6bf80a5aec19b98abbcc640227d0"
  },
  {
    "url": "assets/static/numart_coverimage.81b85c1.eba9cb13701f9fb4ec07b86d483b48e1.jpg",
    "revision": "8b57da78a88c05577168fd55e492e3f3"
  },
  {
    "url": "assets/static/numart_coverimage.a67b0b2.eba9cb13701f9fb4ec07b86d483b48e1.jpg",
    "revision": "d3a9af3d55ec6fbb487b8fdba3d7f8e6"
  },
  {
    "url": "assets/static/nuxt-logo.fac0014.741df494635b2705d43d4504ebc9818f.svg",
    "revision": "741df494635b2705d43d4504ebc9818f"
  },
  {
    "url": "assets/static/nuxtmodules.07cc2b7.32cf15f7cdc421b8200538cb33ccbab7.png",
    "revision": "c82b54c72aa73f99946c07b14327afd4"
  },
  {
    "url": "assets/static/nuxtmodules.a67b0b2.32cf15f7cdc421b8200538cb33ccbab7.png",
    "revision": "f252579f940840779641aabf8509fbee"
  },
  {
    "url": "assets/static/plenti-cover.07cc2b7.ccc47dac19389768a10bb06afa7bb087.jpg",
    "revision": "e9b522a667736fe872fdd673a4f4d4e7"
  },
  {
    "url": "assets/static/plenti-cover.a67b0b2.ccc47dac19389768a10bb06afa7bb087.jpg",
    "revision": "9e1dc98dc08091e1503f90053a180b11"
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
    "url": "assets/static/podcast-cover.a8ea3c5.d524e8562533a0f35b9eb108b1479bf4.jpeg",
    "revision": "b876f5d607378f39d8eac065d87d145f"
  },
  {
    "url": "assets/static/podcast.f33a511.8716d45c1a16b1e2fa3f76789345c6ef.png",
    "revision": "9743d38dd1e5be8f1ffa4f370f608e60"
  },
  {
    "url": "assets/static/smile_coverimage.07cc2b7.cf88935a8ebd40148517e18d81f8d600.jpg",
    "revision": "b9c9550d2588ae88655dbeaf8bdcf610"
  },
  {
    "url": "assets/static/smile_coverimage.81b85c1.cf88935a8ebd40148517e18d81f8d600.jpg",
    "revision": "580f352481c2349407c26dbac0bc4023"
  },
  {
    "url": "assets/static/smile_coverimage.a67b0b2.cf88935a8ebd40148517e18d81f8d600.jpg",
    "revision": "146967f60b677bb98b5a789bb3737003"
  },
  {
    "url": "assets/static/stackbit-logo.19505e6.ae4a4c399334363d2c975b070551a9be.png",
    "revision": "2c80efc56e285147670c1232fc2f58df"
  },
  {
    "url": "assets/static/stackbit.a67b0b2.f4c0d04cbb20dedd6aa4f861b60af1fd.png",
    "revision": "faf9ffba283e24d9564fb77b2bea0694"
  },
  {
    "url": "assets/static/stackbit.fddeb7c.f4c0d04cbb20dedd6aa4f861b60af1fd.png",
    "revision": "e95ef198a32c9b7a2db09e9280228c09"
  },
  {
    "url": "assets/static/svelte.a67b0b2.5ddc1132dcfd1d52d744dbffb4bd3150.png",
    "revision": "ccfbf37a893c32a5980dacf4f2e80910"
  },
  {
    "url": "assets/static/svelte.fddeb7c.5ddc1132dcfd1d52d744dbffb4bd3150.png",
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
    "url": "assets/static/tech-stack.07cc2b7.61576ef215b9ca287540ef9a0e763cbe.png",
    "revision": "de975e16657177675fe30c9227cd373a"
  },
  {
    "url": "assets/static/tech-stack.a67b0b2.61576ef215b9ca287540ef9a0e763cbe.png",
    "revision": "cc14ba15f6fa03140955c02813a0eff4"
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
    "url": "assets/static/vue-developers.a67b0b2.1414f61fb939009dd386eca69ba1f19e.png",
    "revision": "18e0a683c8bd35d7949fba3557092c87"
  },
  {
    "url": "assets/static/vue-developers.fddeb7c.1414f61fb939009dd386eca69ba1f19e.png",
    "revision": "47c2558bdbad373b4f1827ed52d2ed2e"
  },
  {
    "url": "assets/static/vue-logo.f33a511.c6020a6ae2a050876b3b6ba913508292.png",
    "revision": "08e44191eebe6520b9bdc73be03401b9"
  },
  {
    "url": "assets/static/vue-packages-cover.07cc2b7.79c661c978735a6a75bfbd730936adce.jpg",
    "revision": "9b2476efeb25ba120cd9b27df1681434"
  },
  {
    "url": "assets/static/vue-packages-cover.a67b0b2.79c661c978735a6a75bfbd730936adce.jpg",
    "revision": "ec747dfafa8505e6c866519763df5ea3"
  },
  {
    "url": "assets/static/vue-resources.a67b0b2.920558c5b62fa56e7c795f9189e2c361.png",
    "revision": "f38719a80c440dfd0f56a2a8d0074101"
  },
  {
    "url": "assets/static/vue-resources.fddeb7c.920558c5b62fa56e7c795f9189e2c361.png",
    "revision": "1a2c209d2c9b3a951134e701bf1979b4"
  },
  {
    "url": "assets/static/vue-tools.a67b0b2.72f2e209b46dfbcae6594fdf400a9bab.png",
    "revision": "41b97158569e783be26321e7a536041d"
  },
  {
    "url": "assets/static/vue-tools.fddeb7c.72f2e209b46dfbcae6594fdf400a9bab.png",
    "revision": "c47a39ee32d4728ca1561d6a59a6c510"
  },
  {
    "url": "assets/static/vue-ui-frameworks.a67b0b2.07b83c486c8f65e3c69643cd42f0e089.png",
    "revision": "71de19bbb722e9ab6beee39282b20273"
  },
  {
    "url": "assets/static/vue-ui-frameworks.fddeb7c.07b83c486c8f65e3c69643cd42f0e089.png",
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
    "revision": "a3164d1fcd16915c2deb65cf7e0ec997"
  },
  {
    "url": "blog/3/index.html",
    "revision": "e51f50f7a4477f06aff4e8338a62fba3"
  },
  {
    "url": "blog/index.html",
    "revision": "2f09464a8e69ace9a16abec0e0fa9e82"
  },
  {
    "url": "contact/index.html",
    "revision": "4897194d8342d72d45e720aeeca01f92"
  },
  {
    "url": "flexsearch.json",
    "revision": "fb45933b51abb1bd131e75493c66f4cb"
  },
  {
    "url": "icon.png",
    "revision": "e5dc09c24a1a97179d8649afd354b965"
  },
  {
    "url": "index.html",
    "revision": "d57e7db5772dd9ffcf832280f720c3de"
  },
  {
    "url": "manifest.json",
    "revision": "6715d0751d8f81d52c86d2f35f9a1f89"
  },
  {
    "url": "portfolio/index.html",
    "revision": "1dcab28072a7c7f4e6d25c19e7afd83e"
  },
  {
    "url": "post/5-vue-ui-frameworks-for-rapid-ui-development/index.html",
    "revision": "9affb289070d02cc9f60a060476afe9b"
  },
  {
    "url": "post/add-another-version-of-php-in-laragon/index.html",
    "revision": "fdf5fde23281a274126963a517dcc748"
  },
  {
    "url": "post/awesome-list-of-vue-js-libraries/index.html",
    "revision": "fe979da68b90e252ce5bc51b16810d61"
  },
  {
    "url": "post/create-a-custom-loading-animation-component-in-nuxt-js-with-lottie/index.html",
    "revision": "86318ed3580a7799adc3c247a255b68c"
  },
  {
    "url": "post/create-a-jamstack-site-in-under-5-minutes/index.html",
    "revision": "58243f2a27c0deba4d3edc209d91c6bf"
  },
  {
    "url": "post/deploy-plenti-site-on-netlify/index.html",
    "revision": "74bbb0c7f57313041303a6ebcb7177bf"
  },
  {
    "url": "post/fix-vue-package-mismatch-error-on-vercel/index.html",
    "revision": "0b063873f743865f18beed770cf18de0"
  },
  {
    "url": "post/how-to-use-vue-plugins-with-no-ssr-support-on-a-gridsome-project/index.html",
    "revision": "b43d2497044280a9535cede533b877d5"
  },
  {
    "url": "post/integrating-netlify-cms-to-your-gridsome-site/index.html",
    "revision": "d4dbefb6763d602f5fb82ef123b0d06c"
  },
  {
    "url": "post/let-s-create-ui-components-in-svelte/index.html",
    "revision": "49d829d1e8e99813d974612de978163e"
  },
  {
    "url": "post/my-tech-stack-2020/index.html",
    "revision": "6eb1b554093541dc7679b43cffd48ca7"
  },
  {
    "url": "post/people-you-should-follow-if-you-re-a-vue-developer/index.html",
    "revision": "6aaaf2518797f2692a4369a47ef33a97"
  },
  {
    "url": "post/reviewing-javascript-fundamentals/index.html",
    "revision": "eeb2d62c6a2e6b321e9a8b8260cfd340"
  },
  {
    "url": "post/sharing-my-go-to-podcasts/index.html",
    "revision": "7daed02c03f2375c2760005bf85e2098"
  },
  {
    "url": "post/top-nuxt-js-modules/index.html",
    "revision": "ac9d8151e863d995be5bb8584c917625"
  },
  {
    "url": "post/track-your-website-with-umami/index.html",
    "revision": "2c316360a4f3afe6ab95df39cbb37d0f"
  },
  {
    "url": "post/where-i-learn-vue-js/index.html",
    "revision": "b61cbc01f850415904ae0f564bdd49ab"
  },
  {
    "url": "post/woo-commerce-site-to-single-page-app-in-no-time/index.html",
    "revision": "1d98dd6c076c8750c936e67d4ad42c8a"
  },
  {
    "url": "projects/doctor-appointment-app/index.html",
    "revision": "7be75085c8198170c4bb0c6ab4e1727b"
  },
  {
    "url": "projects/nusantara-mart/index.html",
    "revision": "a48b1714e6dc98705fb2c52d4251f476"
  },
  {
    "url": "projects/smart-soil-selector/index.html",
    "revision": "95db7bd07293271f7dcfb185ad110033"
  },
  {
    "url": "resources/2/index.html",
    "revision": "8e01339eb18256ab3c5849ea64f044d1"
  },
  {
    "url": "resources/3/index.html",
    "revision": "0483ddb0974bd69fb669ffea7f5e0257"
  },
  {
    "url": "resources/4/index.html",
    "revision": "7abf2c084f20ae4f3b19acffee672ba6"
  },
  {
    "url": "resources/index.html",
    "revision": "30d52836d41ed4d9b179513170444ec5"
  },
  {
    "url": "search/index.html",
    "revision": "9c46cdf92993f181e609c0933667b4b8"
  },
  {
    "url": "success/index.html",
    "revision": "82be27c478b27cde08fef734770796a0"
  },
  {
    "url": "tag/analytics/index.html",
    "revision": "72e853e5591fb20b28fb847e5c12d400"
  },
  {
    "url": "tag/Basics/index.html",
    "revision": "99f330e82d3fcc1c55282049c325bc3c"
  },
  {
    "url": "tag/Developers/index.html",
    "revision": "b03537e914ec73e9b3285db8c22cd5c6"
  },
  {
    "url": "tag/ECommerce/index.html",
    "revision": "9092146d17f3b0066b31e9f8ab323e94"
  },
  {
    "url": "tag/gridsome/index.html",
    "revision": "6ecb79885ded4e7d1812e159bf03ad7b"
  },
  {
    "url": "tag/Jamstack/index.html",
    "revision": "058f3bb60ff31b852c036fc0cda2baf6"
  },
  {
    "url": "tag/Javascript/index.html",
    "revision": "5fb3808dc96f54b2b70becec47159a53"
  },
  {
    "url": "tag/Laravel/index.html",
    "revision": "6cac864ab84af2291ad0c5aff287324a"
  },
  {
    "url": "tag/Learning/index.html",
    "revision": "16b6a5aa6dda95c29d74e2af8ad6c4dc"
  },
  {
    "url": "tag/Netlify CMS/index.html",
    "revision": "0663f18c894d44958239d2a4ee9b3197"
  },
  {
    "url": "tag/Netlify/index.html",
    "revision": "4f75cb62d242ae5b72a76d8193673f2f"
  },
  {
    "url": "tag/Nuxt/index.html",
    "revision": "f2c0f18239a202e5b3f7173b0ae61b33"
  },
  {
    "url": "tag/nuxtjs/index.html",
    "revision": "4f016f135167712fb964169f277584f9"
  },
  {
    "url": "tag/OSS Libraries/index.html",
    "revision": "e390892000ebaa919442b45c80656bf7"
  },
  {
    "url": "tag/Plenti/index.html",
    "revision": "4d5ad876e7a334284155befff54142f7"
  },
  {
    "url": "tag/PWA/index.html",
    "revision": "d1844195aaec0ba4bf1a16dfb2ce59d2"
  },
  {
    "url": "tag/Resources/index.html",
    "revision": "76c013e91a02b5ac8d2ff733ad308073"
  },
  {
    "url": "tag/SPA/index.html",
    "revision": "7122c43067b164070eeb497b7f5777f2"
  },
  {
    "url": "tag/Stackbit/index.html",
    "revision": "1c177a1936d2b956991483c4ccb44cae"
  },
  {
    "url": "tag/Svelte/index.html",
    "revision": "4c3e2e6890bfe4352c099f683edad874"
  },
  {
    "url": "tag/Tech Stack/index.html",
    "revision": "60ac6fa6fb582b7ac373918784739f10"
  },
  {
    "url": "tag/UI Component/index.html",
    "revision": "166db0dbbfda5c2b42385ea6a157c50c"
  },
  {
    "url": "tag/UI Libraries/index.html",
    "revision": "76a5176f80d1a149ecf9037fd3c50150"
  },
  {
    "url": "tag/vercel/index.html",
    "revision": "1b71221f29cb72c3020da65b15753982"
  },
  {
    "url": "tag/Vue.js/index.html",
    "revision": "948e2ba5f88617cf048d7bd9332594ec"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "954f0eb1c3de83477616316b8d3bf69f"
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
    "url": "tag/Developers",
    "revision": "135abfd97c10037832544566d0b517f0"
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
    "url": "tag/Javascript",
    "revision": "96cea1ea30121add557b6ee7095cff7a"
  },
  {
    "url": "tag/Basics",
    "revision": "6c5507aae38487e5d8622a680b6ad9d2"
  },
  {
    "url": "tag/Resources",
    "revision": "800b7b2ce85c0b4e2ec11fb1da209b9d"
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
    "url": "tag/Tech%20Stack",
    "revision": "7beff8659e13c9fbe3230b460c980f03"
  },
  {
    "url": "tag/Nuxt",
    "revision": "63d506352dc7709667a28f14533e3064"
  },
  {
    "url": "tag/Laravel",
    "revision": "10dde33828c0103569a017395d3519c8"
  },
  {
    "url": "tag/Plenti",
    "revision": "557a5d6669c3c31d51a63a22f3d2726f"
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
    "url": "tag/Learning",
    "revision": "ee100aa725afaba093da8bb2e2165a2c"
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
    "url": "projects/nusantara-mart",
    "revision": "b8fb389ff865be94548b11ebef540c12"
  },
  {
    "url": "projects/smart-soil-selector",
    "revision": "9c5c56c9371e7d953421feb4202dfa50"
  },
  {
    "url": "projects/doctor-appointment-app",
    "revision": "580bb7b9038658b2f11fe60a00ec971c"
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