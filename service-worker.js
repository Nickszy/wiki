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
    "revision": "1f800b0e0636064cdc4056bd0e00b4d0"
  },
  {
    "url": "app/aiinvest/index.html",
    "revision": "cbafa10a2827578d352b576c7b14919c"
  },
  {
    "url": "app/frontend/django.html",
    "revision": "ac49c484c30913ffb08f345d1fcab0a7"
  },
  {
    "url": "app/frontend/echartsjs.html",
    "revision": "6bd8bed3e841e146e01e948a35913c4a"
  },
  {
    "url": "app/frontend/index.html",
    "revision": "f6f5b26b31fe33da5ac8ccaf3ea7b63c"
  },
  {
    "url": "app/frontend/start.html",
    "revision": "79e34af95dce2ca99dafb8c04e964c88"
  },
  {
    "url": "app/frontend/vuejs.html",
    "revision": "3cb621c7accd6557a89e33cd65787b49"
  },
  {
    "url": "app/index.html",
    "revision": "3acc3de9a14ee3151e79549e0758d626"
  },
  {
    "url": "assets/css/0.styles.ce751d18.css",
    "revision": "3523e0bad7ead3605b5ed016af08c6cc"
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
    "url": "assets/js/10.268a8004.js",
    "revision": "fff597a11f633367db83ae76bea00a87"
  },
  {
    "url": "assets/js/11.e93fc18b.js",
    "revision": "26196ccd494fdb754777afd756107fd1"
  },
  {
    "url": "assets/js/12.750239a7.js",
    "revision": "a6fb8c0fce34a440121372c758033ec8"
  },
  {
    "url": "assets/js/13.af526ffd.js",
    "revision": "1b87a6496b0cb8070912b04b666fc596"
  },
  {
    "url": "assets/js/14.ca932c36.js",
    "revision": "6e72ec7f7289e1985596db9f4c814c85"
  },
  {
    "url": "assets/js/15.534016b5.js",
    "revision": "702fa82456003d101254610b8d17c792"
  },
  {
    "url": "assets/js/16.f96cb5f7.js",
    "revision": "ef74a1adc75165c80b60b0fe11f8c0f0"
  },
  {
    "url": "assets/js/17.7cca6bcd.js",
    "revision": "68203c70824418b79e7a118f803ffc9f"
  },
  {
    "url": "assets/js/18.bc144134.js",
    "revision": "c941afba8bbfb65935105beed5c69ea3"
  },
  {
    "url": "assets/js/19.03a2e20a.js",
    "revision": "abc79fbbffbda0d0409c4e0afbaf9a4b"
  },
  {
    "url": "assets/js/2.ee1eb7b7.js",
    "revision": "339db3cca34ae6e581d2864d1504558d"
  },
  {
    "url": "assets/js/20.27571449.js",
    "revision": "b208358de0b36758c938a0fbfe08a04b"
  },
  {
    "url": "assets/js/21.334c6682.js",
    "revision": "9cfca3f47b97be8ab12fd4ef6ec57648"
  },
  {
    "url": "assets/js/22.af775b8b.js",
    "revision": "2ad15d2bff504ce8c74e1792f0b10dc6"
  },
  {
    "url": "assets/js/23.4500022d.js",
    "revision": "255cc2bc5758d73c6c1274b45d1c91e3"
  },
  {
    "url": "assets/js/24.da9dd2fc.js",
    "revision": "5b6c2e29f02e886a6422470f10559c20"
  },
  {
    "url": "assets/js/25.4b91898e.js",
    "revision": "14f9b788e4bbc9bdf8bc9b95394a6456"
  },
  {
    "url": "assets/js/26.a852b5e9.js",
    "revision": "18b11a627e76aeaccbf5b49890db1178"
  },
  {
    "url": "assets/js/27.a50a879f.js",
    "revision": "73eaac8d77b19437363faa5d711fbf65"
  },
  {
    "url": "assets/js/28.41574dc8.js",
    "revision": "e6ec057e0a37c1b48554136e6744b26a"
  },
  {
    "url": "assets/js/29.f4d7750a.js",
    "revision": "783eee1472f6ca1a110541280755ad4d"
  },
  {
    "url": "assets/js/3.0483fc2a.js",
    "revision": "e51a34f2a1e88f3a33124b037a43aa3a"
  },
  {
    "url": "assets/js/30.594cb49b.js",
    "revision": "6459153f943105e3822e28bbbea9d5de"
  },
  {
    "url": "assets/js/31.b03c52f2.js",
    "revision": "9e8ad4115f394fa9f8ab5b121dddff22"
  },
  {
    "url": "assets/js/32.f742671b.js",
    "revision": "10ac0d17ec451b2dcac53418220c3be2"
  },
  {
    "url": "assets/js/33.115473a1.js",
    "revision": "2af5b825c505c2c7014b5f3bbbf0c2d9"
  },
  {
    "url": "assets/js/34.aacbb8cb.js",
    "revision": "d557debe3889170a297db5cfcc1944a3"
  },
  {
    "url": "assets/js/35.f7f51ef9.js",
    "revision": "fc61353a28e148f0384a5dd85eb3b3f7"
  },
  {
    "url": "assets/js/36.18874b44.js",
    "revision": "853478685cd60f3ac7901fab7c609906"
  },
  {
    "url": "assets/js/37.762a6673.js",
    "revision": "976a8e1fc371b5e872df2b84201ddb30"
  },
  {
    "url": "assets/js/38.9e96d181.js",
    "revision": "73ea7156cea31d6f50e6d46560f8c515"
  },
  {
    "url": "assets/js/39.c1aa2e27.js",
    "revision": "6b0a906662224efc7147ac816069e6fa"
  },
  {
    "url": "assets/js/4.1223fd7f.js",
    "revision": "b077bed309d806e86d9058ee4cff8dfc"
  },
  {
    "url": "assets/js/40.13eac695.js",
    "revision": "a56f83a6c750510c44afe1effa8c5a90"
  },
  {
    "url": "assets/js/41.9c2e4f4d.js",
    "revision": "7cebe73293b89864020d807d94d66f85"
  },
  {
    "url": "assets/js/42.678eae72.js",
    "revision": "ed28394b8f58ccaf38bbd00706bc993e"
  },
  {
    "url": "assets/js/43.a8b36b1a.js",
    "revision": "83e69f731db20ae6d8cc2ad5a2e1a43e"
  },
  {
    "url": "assets/js/44.c242664d.js",
    "revision": "36d3413bbc45635255d0ac514c0432db"
  },
  {
    "url": "assets/js/45.a2f2425f.js",
    "revision": "836e9a7a15de5c8de3be000159894ed9"
  },
  {
    "url": "assets/js/46.f56f4d77.js",
    "revision": "033307b9e18280da1e6a86a50c3d45c1"
  },
  {
    "url": "assets/js/47.abdffaa9.js",
    "revision": "c760bf02206d025fe69b7898e31f048d"
  },
  {
    "url": "assets/js/48.385cb0c6.js",
    "revision": "4ba4a94168173d5aef4f759a7e3d17b8"
  },
  {
    "url": "assets/js/49.0e11aced.js",
    "revision": "3abd23a10606f791717185ebe9257f1e"
  },
  {
    "url": "assets/js/5.21355555.js",
    "revision": "525870fc0b0eef17f16b5b66aa3dd44d"
  },
  {
    "url": "assets/js/6.fd734a8d.js",
    "revision": "b8cd27eaae036341f96c49e983efdbfc"
  },
  {
    "url": "assets/js/7.3142f693.js",
    "revision": "addf372c70b30999dc13e17d35d82ac8"
  },
  {
    "url": "assets/js/8.16d85736.js",
    "revision": "f0c707cc56a9929bddfb9b5d22664bbb"
  },
  {
    "url": "assets/js/9.5a50e5bc.js",
    "revision": "f3d54a574283339ce288c8628f09183f"
  },
  {
    "url": "assets/js/app.cc2b8914.js",
    "revision": "5a2fbbb2b6e3705cd1c0c632eee4f625"
  },
  {
    "url": "blockchain/dapp.html",
    "revision": "fb5b941e59ec9a6dca64353cb29323d7"
  },
  {
    "url": "blockchain/index.html",
    "revision": "934e67b5fb5aa9b3d64a883e682ec94a"
  },
  {
    "url": "blockchain/overall.html",
    "revision": "027d4ebd7fe97e3af91502c141536891"
  },
  {
    "url": "blockchain/smartcontracts.html",
    "revision": "76344be56a970e7b5676a32384a47e26"
  },
  {
    "url": "code/django.html",
    "revision": "58eafc1fa787952ea00109546e47f80b"
  },
  {
    "url": "code/index.html",
    "revision": "03b8935d515391750d26b6ecf81e6be9"
  },
  {
    "url": "code/mysql.html",
    "revision": "23b4c6701a02f11529d53d2f92f515db"
  },
  {
    "url": "code/nodejs.html",
    "revision": "5efe34b9f65bd680c24b00b418258cdf"
  },
  {
    "url": "code/pyecharts.html",
    "revision": "0ed717eca409b3fdd38e43847749a3c0"
  },
  {
    "url": "code/python.html",
    "revision": "734a7352bc30f6195ffdf55b19840ab0"
  },
  {
    "url": "code/爬虫.html",
    "revision": "548be7cad012764e278047962da5dcbb"
  },
  {
    "url": "datascience/hadoop.html",
    "revision": "70f2281bdfc84535728746c868c13b2c"
  },
  {
    "url": "datascience/hash.html",
    "revision": "78fa6932237d626255e52de3a3fdf825"
  },
  {
    "url": "datascience/index.html",
    "revision": "74bdf781a167815f532682715ce5bb42"
  },
  {
    "url": "datascience/kafka.html",
    "revision": "dff1d7c0f5386d654fa2434bca04e5c2"
  },
  {
    "url": "datascience/kaggle.html",
    "revision": "a23c39cd62040434a98e8e58b2361bac"
  },
  {
    "url": "datascience/matplotlib.html",
    "revision": "165af35eb6222197f144b64fc224d8d3"
  },
  {
    "url": "datascience/numpy.html",
    "revision": "2629052d3653100520b65336229313ba"
  },
  {
    "url": "datascience/pandas.html",
    "revision": "217e7fb02dc5264a2e7477dd58676ed1"
  },
  {
    "url": "datascience/pyecharts.html",
    "revision": "66e2fb6c6718efea68427a7766cbfa45"
  },
  {
    "url": "datascience/seaborn.html",
    "revision": "12ba6a03b7523c542dba2f738e9660ea"
  },
  {
    "url": "datascience/sklearn.html",
    "revision": "6b59e7cc5ba917020d96d4f810a0905b"
  },
  {
    "url": "datascience/spark.html",
    "revision": "9e70445a326a8c915ee700f044051bba"
  },
  {
    "url": "datascience/数据安全.html",
    "revision": "7fe75ea63987d8f722d80b456658f378"
  },
  {
    "url": "finance/financial_engineering.html",
    "revision": "c9595d18244add6058160261ec4a73af"
  },
  {
    "url": "finance/fintech.html",
    "revision": "87c922339840b82400989628a095ee36"
  },
  {
    "url": "finance/index.html",
    "revision": "55875dd2b008f0c3d7e0648c4ef0dc7a"
  },
  {
    "url": "finance/invest.html",
    "revision": "5622c36127ae1375160986291bbd1f0c"
  },
  {
    "url": "finance/market.html",
    "revision": "029d3956554ea9899820540ce8344f7a"
  },
  {
    "url": "finance/quant.html",
    "revision": "1b1241adb77537a9148d27afa13271e5"
  },
  {
    "url": "finance/spend.html",
    "revision": "eb5d56643d03cde74f5e0f5d47b9fce8"
  },
  {
    "url": "finance/互联网金融.html",
    "revision": "afecdf04f493b5366549a78479c8eac5"
  },
  {
    "url": "fintech/index.html",
    "revision": "ded0e140fa17b213c591caa625306c07"
  },
  {
    "url": "guide/index.html",
    "revision": "813bf3d0365a9b27af85433c74b5f3c3"
  },
  {
    "url": "history/index.html",
    "revision": "fb66166a9d0b2993ffc8f89062f997e5"
  },
  {
    "url": "index.html",
    "revision": "637c21140b57b552a6643d27d0a976ad"
  },
  {
    "url": "jedi.jpg",
    "revision": "3e1e5446a3ef67eaeca6f892f644c42a"
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
