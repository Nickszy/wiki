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
    "url": "1024.png",
    "revision": "2dc217252a5f22abf36b15650bc44eb4"
  },
  {
    "url": "404.html",
    "revision": "3f61f428a89d25d80862705ea6d92ce5"
  },
  {
    "url": "app/frontend/django.html",
    "revision": "e02a1a66dfc06f40919929f6d2980e82"
  },
  {
    "url": "app/frontend/echartsjs.html",
    "revision": "180df89bf4e8a6883b60a7c27496e66f"
  },
  {
    "url": "app/frontend/index.html",
    "revision": "27d8bc3462f20b30ff9b84df3f417f56"
  },
  {
    "url": "app/frontend/start.html",
    "revision": "60b2ef74d259f57d36bf35b8b186fc98"
  },
  {
    "url": "app/frontend/vuejs.html",
    "revision": "f1ae509ac9b9182ff56b01071570e65e"
  },
  {
    "url": "app/index.html",
    "revision": "1494a5c159836a1df4e1e6b8a951a17c"
  },
  {
    "url": "assets/css/0.styles.d314dc1e.css",
    "revision": "295903306918fa0133a8581e4d946747"
  },
  {
    "url": "assets/img/seaborn_tutorial.5a8bf18f.png",
    "revision": "5a8bf18f25beaf6810c5ee3afa836be7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d88fc581.js",
    "revision": "b73f0db3f65d18718b12c179a305b184"
  },
  {
    "url": "assets/js/11.30a81460.js",
    "revision": "f9f0d0c23aec363a1f14c2d3d4d9cc07"
  },
  {
    "url": "assets/js/12.71b9f37a.js",
    "revision": "f7749a9ae7847d8047deab11dc7244d7"
  },
  {
    "url": "assets/js/13.6a48e348.js",
    "revision": "934ecacb2795a2ddc54bd114821369d7"
  },
  {
    "url": "assets/js/14.cbc19f26.js",
    "revision": "ed9be4087228df1cc4fede7095e4f5ae"
  },
  {
    "url": "assets/js/15.f786099c.js",
    "revision": "7e574f75ea037137c84b7c0b3b889704"
  },
  {
    "url": "assets/js/16.7560cca1.js",
    "revision": "5628ee14235d857bec43b86d84cc5644"
  },
  {
    "url": "assets/js/17.b2e4109f.js",
    "revision": "cd8de2b2328a9986d4b3b15aaf722180"
  },
  {
    "url": "assets/js/18.e3729362.js",
    "revision": "8c4b51a182e1412ab332e5ad9a725e4a"
  },
  {
    "url": "assets/js/19.3833cc2c.js",
    "revision": "386cba9c1d087107460d0ccce523540d"
  },
  {
    "url": "assets/js/2.70c9b889.js",
    "revision": "8c91e7a858f32dc2ed342a5182cdbe71"
  },
  {
    "url": "assets/js/20.3c2246cb.js",
    "revision": "ef542f15f57526bd7387879eabd18ba3"
  },
  {
    "url": "assets/js/21.d5c49d90.js",
    "revision": "ec0df6f68cdc19bfd03a3df1f2e9d8f4"
  },
  {
    "url": "assets/js/22.45a23643.js",
    "revision": "aaea5ae120a7d4bd18d3c4e52876d915"
  },
  {
    "url": "assets/js/23.a32e8661.js",
    "revision": "20d65437216e68098bba3a8cf0461456"
  },
  {
    "url": "assets/js/24.7b2eb917.js",
    "revision": "3af668f7a179f2ba0b709b79e9010e6d"
  },
  {
    "url": "assets/js/25.ae736de2.js",
    "revision": "a4f60bf927a5d562575389a74cbd3cc1"
  },
  {
    "url": "assets/js/26.68a434df.js",
    "revision": "aa983bfb2d55fd6adbc3498f85846697"
  },
  {
    "url": "assets/js/27.1e497748.js",
    "revision": "c4e9d1a7c89ff11869966bc2283f469d"
  },
  {
    "url": "assets/js/28.eb380047.js",
    "revision": "b8f44a67b687b0b202e2015b1c61d83e"
  },
  {
    "url": "assets/js/29.8ae0e744.js",
    "revision": "dd47b1ceaf6b4742c5f3965569c3944a"
  },
  {
    "url": "assets/js/3.673ca8d1.js",
    "revision": "e78fe63d3c05b348d2d51eeb3cb11aa0"
  },
  {
    "url": "assets/js/30.45e71669.js",
    "revision": "98fbdacb8f844cf8ed2a61062005aa77"
  },
  {
    "url": "assets/js/31.a0b60088.js",
    "revision": "f6ab461cd449134293819e23e98cddc9"
  },
  {
    "url": "assets/js/32.a36719fe.js",
    "revision": "a2e574eaa13109479b2f55826a7110be"
  },
  {
    "url": "assets/js/33.2c17c794.js",
    "revision": "c0422e4cc686b104ab70f1db5ea29601"
  },
  {
    "url": "assets/js/34.12d94a78.js",
    "revision": "fee819fc965e4760c2138f9691be8295"
  },
  {
    "url": "assets/js/35.8bb11e12.js",
    "revision": "eba82c85c9a0d4a4b6b69284b7a8b61f"
  },
  {
    "url": "assets/js/36.c5311cf2.js",
    "revision": "24321e26e6ac70ec02328fd1ba74aeb0"
  },
  {
    "url": "assets/js/37.eaf6a494.js",
    "revision": "e271759bb821566a4e8fda9636eaa37b"
  },
  {
    "url": "assets/js/38.78557e6d.js",
    "revision": "79f8fc8650df9be2c195e77b3e0908a2"
  },
  {
    "url": "assets/js/39.a8fe5386.js",
    "revision": "946ea871812b253640ac13e5bd9951e3"
  },
  {
    "url": "assets/js/4.1b07185d.js",
    "revision": "7aad72f6f9f343c9c65876328ffb6ff7"
  },
  {
    "url": "assets/js/40.19ade7c8.js",
    "revision": "0274a4b4416b05c08b7012c0cbe71d5c"
  },
  {
    "url": "assets/js/41.9f4b0637.js",
    "revision": "df09a5410071bac36522074bb99aab9c"
  },
  {
    "url": "assets/js/42.b07ee8b2.js",
    "revision": "15a2df7a7dda0c3dd173b8162f9e0ea7"
  },
  {
    "url": "assets/js/43.4a9bf1ac.js",
    "revision": "7cc218c7eee0699046673d29172d2995"
  },
  {
    "url": "assets/js/44.628a1f28.js",
    "revision": "98b9c0c98dc10b55a3a7d032fd063d13"
  },
  {
    "url": "assets/js/45.79c1a0aa.js",
    "revision": "2f0ed7518e4165bbe6eeaaa67c294acf"
  },
  {
    "url": "assets/js/46.fc7de21a.js",
    "revision": "faa81b8ee3697a280a92c96764b3425f"
  },
  {
    "url": "assets/js/47.e01d81fe.js",
    "revision": "a94b550aeda6bdf7f2321a9b1a07c5a7"
  },
  {
    "url": "assets/js/48.753413df.js",
    "revision": "cb4ff096d50f1387d8acf1fd5ce2ae7a"
  },
  {
    "url": "assets/js/49.dde454e9.js",
    "revision": "bb500d210bce83f8af254e50aa1fb48c"
  },
  {
    "url": "assets/js/5.e2841355.js",
    "revision": "67db238163808d8a69aff4b973f42599"
  },
  {
    "url": "assets/js/50.81bd31fe.js",
    "revision": "8db00627510c1ea87e7f9997cfa40119"
  },
  {
    "url": "assets/js/51.da3c55e3.js",
    "revision": "9ca47e75eedf467449fe7c1b330c6326"
  },
  {
    "url": "assets/js/52.a76ad29d.js",
    "revision": "92d14e75a8556cf62559db42624fd01d"
  },
  {
    "url": "assets/js/53.57ad607c.js",
    "revision": "54061e9e6ea3ff887f3f249dfec65555"
  },
  {
    "url": "assets/js/54.715c0aef.js",
    "revision": "bd27c4c90d718a6dfea69ef581c3a42a"
  },
  {
    "url": "assets/js/55.b1b1197c.js",
    "revision": "f4b23479093def53753e852348805f66"
  },
  {
    "url": "assets/js/56.cbfd48cb.js",
    "revision": "361ef18d244032cd6683f94591a255f8"
  },
  {
    "url": "assets/js/57.73f70629.js",
    "revision": "27db4bc5cf1340658d1d6fbcf45fb1c9"
  },
  {
    "url": "assets/js/58.1dcc5a78.js",
    "revision": "c1f0b983c0e20232817fe0f4d960394b"
  },
  {
    "url": "assets/js/59.2482bfaf.js",
    "revision": "fbc2875e0a475e2b36966ee1a432a5b9"
  },
  {
    "url": "assets/js/6.d06a3710.js",
    "revision": "a44c442f68f81e006a429c646262d0aa"
  },
  {
    "url": "assets/js/7.242b74d5.js",
    "revision": "e299887d37da06a8d5a9aaaef3ba1678"
  },
  {
    "url": "assets/js/8.57a6f789.js",
    "revision": "b1a692e24b61f7d720453b27714fa126"
  },
  {
    "url": "assets/js/9.e1a3961e.js",
    "revision": "f0b683dd8681cda1b8609cc01ac82109"
  },
  {
    "url": "assets/js/app.391b5de8.js",
    "revision": "208c0a116f961d11d9e7b92c8b311c08"
  },
  {
    "url": "code/nodejs.html",
    "revision": "9b222ac1c04f19a8474f06ab48c198d3"
  },
  {
    "url": "datascience/data_safe&regulation.html",
    "revision": "b5a4758ca3a117bbe1d734881ac2f0b6"
  },
  {
    "url": "datascience/hadoop.html",
    "revision": "bfcf94cb517d88af6e7cf957f9a42483"
  },
  {
    "url": "datascience/hash.html",
    "revision": "3d2bcb598c90e582d537866688a9001c"
  },
  {
    "url": "datascience/index.html",
    "revision": "bcc48f5d96de65ba89248ec3ad3e8d57"
  },
  {
    "url": "datascience/kafka.html",
    "revision": "5016fcf6f623d97e8545a143d9820d59"
  },
  {
    "url": "datascience/kaggle.html",
    "revision": "9547cb3396dd2ccd8b5c00b4673d6115"
  },
  {
    "url": "datascience/matplotlib.html",
    "revision": "90a45e47e427bfa52695e59fbf44e728"
  },
  {
    "url": "datascience/numpy.html",
    "revision": "82122eb8a1b160ee964fef5846ff4491"
  },
  {
    "url": "datascience/pandas.html",
    "revision": "84f2075fa8b9bf1ae38cf9aae8445ece"
  },
  {
    "url": "datascience/pyecharts.html",
    "revision": "5036c5274038640689b9ce43807776f4"
  },
  {
    "url": "datascience/seaborn.html",
    "revision": "3342f3194f582a234048bba1029262c3"
  },
  {
    "url": "datascience/sklearn.html",
    "revision": "f8cc0eb4e0293278fc5af3ec9999437d"
  },
  {
    "url": "datascience/spark.html",
    "revision": "b1651f0694d1be7b90aac35f4bb16a94"
  },
  {
    "url": "datascience/tushare2mysql.html",
    "revision": "1d52712b62249de8867c252c2ab9c39f"
  },
  {
    "url": "datascience/vscode.html",
    "revision": "aedcdd136eddadd157f24dc7956b3a5e"
  },
  {
    "url": "deploy/index.html",
    "revision": "6429e92e1ec67e0a20e4ab6f442bec98"
  },
  {
    "url": "deploy/linux.html",
    "revision": "f9a72af3616a73a15a2279af32bdae9c"
  },
  {
    "url": "deploy/mysql.html",
    "revision": "8757ae469d4c06a4d5732a1f128ec428"
  },
  {
    "url": "deploy/nginx.html",
    "revision": "58f340df1116d0edebf70e71ad9083ea"
  },
  {
    "url": "finance/financial_engineering.html",
    "revision": "1b62c78df398c2eb0e4c74d8ffc694db"
  },
  {
    "url": "finance/fintech.html",
    "revision": "456e3f491d021eb35ad0e856bb12240e"
  },
  {
    "url": "finance/history/index.html",
    "revision": "4cae663c2ea3b92ba97f2250aee9b8bc"
  },
  {
    "url": "finance/index.html",
    "revision": "f586b87dad92f117b4868ea508f292c8"
  },
  {
    "url": "finance/invest.html",
    "revision": "9458959c67c0b1e3bf116d6727c18fd5"
  },
  {
    "url": "finance/market.html",
    "revision": "703fb9f369276d202d61090c2ac4b0fd"
  },
  {
    "url": "finance/quant.html",
    "revision": "1ee050603c0cafaa1a5006314669a0bb"
  },
  {
    "url": "finance/spend.html",
    "revision": "e4a020cfbecd6c8d28571ee291f2f788"
  },
  {
    "url": "finance/互联网金融.html",
    "revision": "ef71b27bb87d80f2a7728d1646b8bd80"
  },
  {
    "url": "fintech/aiinvest/index.html",
    "revision": "7ce056a3ec4287af3bee70fec21f6e64"
  },
  {
    "url": "fintech/blockchain/dapp.html",
    "revision": "649153c41ffcf107323c5d32315436d6"
  },
  {
    "url": "fintech/blockchain/index.html",
    "revision": "5c2cc04461c2323ed0a6c4c3bb7f56a5"
  },
  {
    "url": "fintech/blockchain/overall.html",
    "revision": "58f5d2ae64962b46dabb3ebf7f7cd34f"
  },
  {
    "url": "fintech/blockchain/smartcontracts.html",
    "revision": "acc06e06a98b66e0753c5c559b77a6ae"
  },
  {
    "url": "fintech/index.html",
    "revision": "c2f049e8254cf7c7bd1901e77449607a"
  },
  {
    "url": "guide/index.html",
    "revision": "0584f1abe938bc32471f2383d5ef87dd"
  },
  {
    "url": "index.html",
    "revision": "af0aca5532a199e5df4628af39f6e0c7"
  },
  {
    "url": "jedi.jpg",
    "revision": "3e1e5446a3ef67eaeca6f892f644c42a"
  },
  {
    "url": "python/aotuaction.html",
    "revision": "f61ae8e1fbb685f8c8d0c94b202ecdb3"
  },
  {
    "url": "python/django.html",
    "revision": "af337131f869499cf5715ba9fccae770"
  },
  {
    "url": "python/index.html",
    "revision": "6a3c7c80e6130b5cc2b664c9a4010e0b"
  },
  {
    "url": "python/pandas.html",
    "revision": "a41cd71300cae9a5469ca06040b00318"
  },
  {
    "url": "python/pandas+sqlalchemy.html",
    "revision": "f8b1a14d59127e364aa9e35989933fe8"
  },
  {
    "url": "python/pyecharts.html",
    "revision": "f1317e8fbe05863ab4e2123320d7b410"
  },
  {
    "url": "python/python_data.html",
    "revision": "6a8c6baca4d2d3772c914fa86c8aa0cd"
  },
  {
    "url": "python/python_package.html",
    "revision": "545c320604fd120b835a3ab30cb55876"
  },
  {
    "url": "python/spider.html",
    "revision": "47d3410f889275bd3a562c3426d38e25"
  },
  {
    "url": "python/time.html",
    "revision": "85cd5d9dfa68643121e00a1b03112eac"
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
