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
    "url": "app/frontend/django.html",
    "revision": "b3d644be09cccd556eca80f36043a5cc"
  },
  {
    "url": "app/frontend/echartsjs.html",
    "revision": "7d0d5ee67c369c94b8b1cca7052554a2"
  },
  {
    "url": "app/frontend/index.html",
    "revision": "07749fe82a93be45d0c000ba48429549"
  },
  {
    "url": "app/frontend/start.html",
    "revision": "fb6b8bfb8b0b3017a69e33e934ef7753"
  },
  {
    "url": "app/frontend/vuejs.html",
    "revision": "c013097281a4c21d7dd5e25b6a1f3021"
  },
  {
    "url": "app/index.html",
    "revision": "f31d8eef5f3e1edf4a821c9b9deabb5a"
  },
  {
    "url": "assets/css/0.styles.05a90642.css",
    "revision": "6a499b9478cc1b95433b9bbf876a9d38"
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
    "url": "assets/js/10.7affccf7.js",
    "revision": "6db9c9828f22cb78752cde18c2fc2486"
  },
  {
    "url": "assets/js/11.fd0d3907.js",
    "revision": "77d0d21620bbf4f74694128312e7334b"
  },
  {
    "url": "assets/js/12.043095c4.js",
    "revision": "2659674ee76334b9b898829267d2d38e"
  },
  {
    "url": "assets/js/13.d5f7fb3a.js",
    "revision": "b56ad0292a1fd30ffd62a78eb1465cee"
  },
  {
    "url": "assets/js/14.cfbb6c17.js",
    "revision": "0af84c45441dce2858cc8487ed205212"
  },
  {
    "url": "assets/js/15.9fa09bdd.js",
    "revision": "a388289f0641ca11fe5e6b9fbd85143f"
  },
  {
    "url": "assets/js/16.14f386b8.js",
    "revision": "a4951a6441b8238de8af888c8a289c87"
  },
  {
    "url": "assets/js/17.121c0266.js",
    "revision": "a85bbb60c812c439ac428538f6b0fd17"
  },
  {
    "url": "assets/js/18.7af5f0aa.js",
    "revision": "58dcc39e9b2ffb702e45991ec994ce33"
  },
  {
    "url": "assets/js/19.8de12bb1.js",
    "revision": "f334d98f2e84277d043d1eb08b076926"
  },
  {
    "url": "assets/js/2.e98efec8.js",
    "revision": "4eceb3e2a4536c79713f1a4a6f0bb90f"
  },
  {
    "url": "assets/js/20.27968f98.js",
    "revision": "73c7bfacbb4d911aa78c707c7094e7bf"
  },
  {
    "url": "assets/js/21.76f62978.js",
    "revision": "f089123b6d44155bf21d00373b59695f"
  },
  {
    "url": "assets/js/22.f594eb41.js",
    "revision": "09328a7da116b688711a5addb3bba95b"
  },
  {
    "url": "assets/js/23.588331a9.js",
    "revision": "9143ae28a22eb66773425a22abc03a80"
  },
  {
    "url": "assets/js/24.cb5c6c37.js",
    "revision": "3458ec4957c835174c07b5b288c5f1d9"
  },
  {
    "url": "assets/js/25.4f40b14c.js",
    "revision": "0d528d0ae74149facf61b4e9593d7f81"
  },
  {
    "url": "assets/js/26.137d2a32.js",
    "revision": "ddacb6c1c7157141c5a33214eac88894"
  },
  {
    "url": "assets/js/27.8b43782f.js",
    "revision": "c60e9ea38501d0c707053b191e9a3683"
  },
  {
    "url": "assets/js/28.51453ac2.js",
    "revision": "16bc2a9d502e9a1f3c9eaf6bdca1ac1e"
  },
  {
    "url": "assets/js/29.896aafe7.js",
    "revision": "1c3ef3f00c37c366f07a834d41714c90"
  },
  {
    "url": "assets/js/3.1d9923f5.js",
    "revision": "ddeeebf013bf3dd7c3734709b1b2efed"
  },
  {
    "url": "assets/js/30.d66fba15.js",
    "revision": "60d759c3aa4416b426734ca53a48eddb"
  },
  {
    "url": "assets/js/31.7c57c586.js",
    "revision": "ebabd2378960fc47ee100e92db388af6"
  },
  {
    "url": "assets/js/32.81fbe907.js",
    "revision": "d0a21e7aa3cfacd8ff978e11b6de8e78"
  },
  {
    "url": "assets/js/33.409bd55b.js",
    "revision": "8339fe80b3ba5fe4e1eafddd848577e2"
  },
  {
    "url": "assets/js/34.f8d1d6f5.js",
    "revision": "a263ff63a8a297ccd03228895a1a90be"
  },
  {
    "url": "assets/js/35.275be1e3.js",
    "revision": "b5dea34ea668e37adabb7544fcb976d0"
  },
  {
    "url": "assets/js/36.2f51aeff.js",
    "revision": "21c0d160055e759e1a04cc6974be1ada"
  },
  {
    "url": "assets/js/37.31a05a3a.js",
    "revision": "c56c743e686c90d6782dda2d7317c6ae"
  },
  {
    "url": "assets/js/38.1c879c92.js",
    "revision": "524c150e96ee4d8acaad9b1498ac56ca"
  },
  {
    "url": "assets/js/39.6d4dc053.js",
    "revision": "908d4aa8ccfb7c0f032baf1199bf1229"
  },
  {
    "url": "assets/js/4.2e337e8b.js",
    "revision": "3266a0281cfa46615d83e4998baf0760"
  },
  {
    "url": "assets/js/40.6c5ee4ad.js",
    "revision": "e8b108c96689fe040d21a25c2203be72"
  },
  {
    "url": "assets/js/41.fde245aa.js",
    "revision": "82b2f0e744f89b40b569957b02eb7ff4"
  },
  {
    "url": "assets/js/42.2d2aa1ba.js",
    "revision": "a2f169ee2312169fec5710224490d088"
  },
  {
    "url": "assets/js/43.aebb49e0.js",
    "revision": "f500addab9b43c384ca0cbe6d7c96d6f"
  },
  {
    "url": "assets/js/44.6293ca3d.js",
    "revision": "0eac1f3f76c623f6a7e3f3a14441f1f5"
  },
  {
    "url": "assets/js/45.f2481626.js",
    "revision": "9555bf2ba64f3349e12fe9db935272e0"
  },
  {
    "url": "assets/js/46.c549dd5d.js",
    "revision": "f34c940a2f9cb687dbbfc3456bac0fc0"
  },
  {
    "url": "assets/js/47.2dcdb502.js",
    "revision": "a0c63b121e8d20ef20977c051aa92a5f"
  },
  {
    "url": "assets/js/48.d8d37d06.js",
    "revision": "07fda7537c49c1b723e25e677656070e"
  },
  {
    "url": "assets/js/49.9a13ecae.js",
    "revision": "da27ee1423018100cb7e860488150bf0"
  },
  {
    "url": "assets/js/5.4a866f07.js",
    "revision": "4e90d7ef8ca462c0cb30c323625dd2ce"
  },
  {
    "url": "assets/js/50.45265c33.js",
    "revision": "52f8e140ca8ad67f772bd24458012d40"
  },
  {
    "url": "assets/js/51.4da5176c.js",
    "revision": "f8172c8841de607fc590fe06cf515e82"
  },
  {
    "url": "assets/js/52.92e7e34f.js",
    "revision": "52b176290a5943c2660f137ba21eadbe"
  },
  {
    "url": "assets/js/53.8408d846.js",
    "revision": "b265f0edcc8055445001c8b1238927fb"
  },
  {
    "url": "assets/js/54.06f6b93e.js",
    "revision": "459899a95a51c436214a0a191f5c781d"
  },
  {
    "url": "assets/js/55.dd1ef5a1.js",
    "revision": "ac34de193724660a7817537359f98cde"
  },
  {
    "url": "assets/js/56.dbdd9f8b.js",
    "revision": "26b642594ade39b6963254a09d4ad3f0"
  },
  {
    "url": "assets/js/57.349c8a6a.js",
    "revision": "b54d34fe17c539b16baa79612aca5eb1"
  },
  {
    "url": "assets/js/58.6e944272.js",
    "revision": "b6b4599f01c4e1e54bfe2cd5e0477c11"
  },
  {
    "url": "assets/js/59.0db99ad2.js",
    "revision": "5ecd6ea8578c258f66a4a1fb36519c1d"
  },
  {
    "url": "assets/js/6.0fd4d3df.js",
    "revision": "a0334b7826ea03523a232e49d59e0c14"
  },
  {
    "url": "assets/js/60.49352219.js",
    "revision": "64ef9defb4eb655a2d5964f6d65692e3"
  },
  {
    "url": "assets/js/61.b2738bb3.js",
    "revision": "f07b786eff50c21df8c535531dcbf737"
  },
  {
    "url": "assets/js/62.f8a4abe5.js",
    "revision": "27f58d3d587f2bf802bcf9e5ec93becd"
  },
  {
    "url": "assets/js/63.4c2069b2.js",
    "revision": "c04d4e1961ead99294887e8b2cb016d0"
  },
  {
    "url": "assets/js/7.a4faedc0.js",
    "revision": "ce00068859bf126edff7f0b2214778ff"
  },
  {
    "url": "assets/js/8.2151452e.js",
    "revision": "1580a0eb5a00733bee6a720bbc2de819"
  },
  {
    "url": "assets/js/9.42fe7c1d.js",
    "revision": "787e22caea3326cd1f30f28c28c6b283"
  },
  {
    "url": "assets/js/app.9635bc00.js",
    "revision": "2b725cf45997cd7ceb0ba7dc416beba1"
  },
  {
    "url": "code/nodejs.html",
    "revision": "704cbbc427459dec2638a3d5a9367512"
  },
  {
    "url": "datascience/data_safe&regulation.html",
    "revision": "4dfba6b36e391b9feafe71a43950e07e"
  },
  {
    "url": "datascience/hadoop.html",
    "revision": "9f0d18e556e8d7ba234b4f82520d1af2"
  },
  {
    "url": "datascience/hash.html",
    "revision": "011655224cbed11d9a878cdd84e20090"
  },
  {
    "url": "datascience/index.html",
    "revision": "5325a94fb156d1171c62da3bf4f4f618"
  },
  {
    "url": "datascience/kafka.html",
    "revision": "7625ef0509925b0538896caa0163bc84"
  },
  {
    "url": "datascience/kaggle.html",
    "revision": "41240148e0bf19d5732c06921ecde900"
  },
  {
    "url": "datascience/matplotlib.html",
    "revision": "e73588c46764713425c3acc868738842"
  },
  {
    "url": "datascience/ml-des.html",
    "revision": "7c72a4ef958ed534af173c3a8ec4c1fb"
  },
  {
    "url": "datascience/numpy.html",
    "revision": "a98ad759395de09131e1a226d1f6c6db"
  },
  {
    "url": "datascience/pandas.html",
    "revision": "8a03ad7a91e7782cdb1d7e71cb3ed833"
  },
  {
    "url": "datascience/pyecharts.html",
    "revision": "09d9c81fdd1c99689da44b106c328413"
  },
  {
    "url": "datascience/seaborn.html",
    "revision": "e0372727d7527ba8d9f34f7028182bf8"
  },
  {
    "url": "datascience/sklearn.html",
    "revision": "db7007b8d023de55f238651480fcc833"
  },
  {
    "url": "datascience/spark.html",
    "revision": "68aaca604419bb71d78664d93c8349cc"
  },
  {
    "url": "datascience/tushare2mysql.html",
    "revision": "99a7f8ef2ca417edf0e3422cbd0beca5"
  },
  {
    "url": "datascience/vscode.html",
    "revision": "b8ec44434554cf3309da2a0f2af1749f"
  },
  {
    "url": "deploy/index.html",
    "revision": "dd0e421540e1f2c0ddfc2f9911d48546"
  },
  {
    "url": "deploy/linux.html",
    "revision": "96fc55e6fcd6d0aa733ba9aaab3f7050"
  },
  {
    "url": "deploy/mysql.html",
    "revision": "4bd45aa855bef7aa443bc53477219c53"
  },
  {
    "url": "deploy/nginx.html",
    "revision": "a4954259aadd3a7e920194e9d2639a78"
  },
  {
    "url": "finance/financial_engineering.html",
    "revision": "28bb9b05f5825f57d05a6a9fea8ded66"
  },
  {
    "url": "finance/fintech.html",
    "revision": "84d363274e5ca95d84553740c7aa3509"
  },
  {
    "url": "finance/history/index.html",
    "revision": "737f1f3455c3d1f0407440e2ff744e1b"
  },
  {
    "url": "finance/index.html",
    "revision": "4afbf1d514b20aaa13b3d0110ddff748"
  },
  {
    "url": "finance/invest.html",
    "revision": "6697e60e7419fa66eaf3d1dce7d6b031"
  },
  {
    "url": "finance/market.html",
    "revision": "fc3687985406d471fff4658b814d0eda"
  },
  {
    "url": "finance/quant.html",
    "revision": "2dc5036b4b6cef5d49f6737efb4f0e94"
  },
  {
    "url": "finance/spend.html",
    "revision": "07b47634085b2adbd9d5cea380500fe0"
  },
  {
    "url": "finance/互联网金融.html",
    "revision": "6869174273d77f8c233482b73f6fa78f"
  },
  {
    "url": "fintech/aiinvest/index.html",
    "revision": "296f92dd1c1fa173ed9cf62630cd62dc"
  },
  {
    "url": "fintech/blockchain/dapp.html",
    "revision": "eb3cb151c11dbf6f043730b2377547c5"
  },
  {
    "url": "fintech/blockchain/index.html",
    "revision": "7b4a2fdac495788bade0f8081b54fa45"
  },
  {
    "url": "fintech/blockchain/overall.html",
    "revision": "812b479c46857aa4ddd67a003b354bbe"
  },
  {
    "url": "fintech/blockchain/smartcontracts.html",
    "revision": "61e702cb9d7f7ca2f2ea6186ab569fe2"
  },
  {
    "url": "fintech/index.html",
    "revision": "bece0ce5c712103f0ae60fea526bce63"
  },
  {
    "url": "guide/index.html",
    "revision": "8b28411438f310c4bec29360092c1dbb"
  },
  {
    "url": "index.html",
    "revision": "314263b7fe0212cceabbfe7260685a1f"
  },
  {
    "url": "jedi.jpg",
    "revision": "3e1e5446a3ef67eaeca6f892f644c42a"
  },
  {
    "url": "other/wine.html",
    "revision": "668b4a6d260663c7e9c843fe327801c1"
  },
  {
    "url": "python/aotuaction.html",
    "revision": "5403a0c8e0c23654a024c4ef4e83fe88"
  },
  {
    "url": "python/django_orm.html",
    "revision": "5c3ad0e0e322eefd54358db14e3a750c"
  },
  {
    "url": "python/django.html",
    "revision": "e0136c303b29a5635e65e0d41d6752c7"
  },
  {
    "url": "python/index.html",
    "revision": "ddb2fbc2fd4697cf18603f132b564c31"
  },
  {
    "url": "python/pandas.html",
    "revision": "1971039fa7b51a60fef3d05349627dab"
  },
  {
    "url": "python/pandas+sqlalchemy.html",
    "revision": "1c07aa953a2bdefdc48a7ae22d05fa6e"
  },
  {
    "url": "python/pyecharts.html",
    "revision": "d9b554409b5a063a293ec67927567180"
  },
  {
    "url": "python/python_data.html",
    "revision": "cbc6b4dad43e2ec69a5b45ca292064f3"
  },
  {
    "url": "python/python_def.html",
    "revision": "4b3755726912cf342216548ac450e08e"
  },
  {
    "url": "python/python_package.html",
    "revision": "38200d4c9603d340e3b840a0d700f913"
  },
  {
    "url": "python/spider.html",
    "revision": "9f9b97cc4bf144b8c6c461d677a300e1"
  },
  {
    "url": "python/time.html",
    "revision": "15a6990a94402dd59162ff12b1edb258"
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
