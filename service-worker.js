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
    "revision": "9c7ac61d7d6d90a4f26127ed7b143410"
  },
  {
    "url": "app/frontend/django.html",
    "revision": "8077bab95f6979c30f9bffec48814610"
  },
  {
    "url": "app/frontend/echartsjs.html",
    "revision": "a9d83906aa226992d5c79d49d03cdeaf"
  },
  {
    "url": "app/frontend/index.html",
    "revision": "58c1497de0e68f2c87cbe63f740bbd76"
  },
  {
    "url": "app/frontend/start.html",
    "revision": "807107dec34220ce4fcf8056fd418cd3"
  },
  {
    "url": "app/frontend/vuejs.html",
    "revision": "a867566acb01f22f7ef9ae9dbce8f711"
  },
  {
    "url": "app/index.html",
    "revision": "539e104a662e43ac2a82812319d956b3"
  },
  {
    "url": "assets/css/0.styles.2c90d21e.css",
    "revision": "684953487e12b35af1e56f94ecbf5b1f"
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
    "url": "assets/img/time.28f3b5a3.png",
    "revision": "28f3b5a3d76554fa73492253994adc65"
  },
  {
    "url": "assets/js/10.02d8c72b.js",
    "revision": "f646804f211f75a0a7410f7705c91656"
  },
  {
    "url": "assets/js/11.a1bab5dc.js",
    "revision": "c09f55e87805657482f347fe421fb372"
  },
  {
    "url": "assets/js/12.653f168b.js",
    "revision": "6d4b6f9ae3271753c940a5c41fbc968a"
  },
  {
    "url": "assets/js/13.99f31733.js",
    "revision": "2466b0685fe4bdeb346c8d87e49071ce"
  },
  {
    "url": "assets/js/14.214a949e.js",
    "revision": "7c71da7dd8bb1eaedb61fe9f72fa1a00"
  },
  {
    "url": "assets/js/15.e1050f64.js",
    "revision": "4f677672c07093f4a430d853322a3175"
  },
  {
    "url": "assets/js/16.a8fbbc8d.js",
    "revision": "9c9cd5f7c434c0d1d45f2445167d3bc4"
  },
  {
    "url": "assets/js/17.ebebd9c5.js",
    "revision": "05515adff3a132a6b14243e2b199cf92"
  },
  {
    "url": "assets/js/18.ef425c1e.js",
    "revision": "354d2dd22326c2b88bfa062e8ea00f27"
  },
  {
    "url": "assets/js/19.89212087.js",
    "revision": "4deb8c438f278e27aefd0f5b94ca6d6c"
  },
  {
    "url": "assets/js/2.92dfa6ab.js",
    "revision": "05b7650e83adcf7407f90cda3de651f3"
  },
  {
    "url": "assets/js/20.48a9bee5.js",
    "revision": "561b51d572c1372a6dba6e6c5b0adff1"
  },
  {
    "url": "assets/js/21.5aefc46e.js",
    "revision": "eb57ce7af5ac38f26e492279f43fe40c"
  },
  {
    "url": "assets/js/22.093cfb23.js",
    "revision": "c7600005ca248bfc62320ce4f5674a1c"
  },
  {
    "url": "assets/js/23.25bd3720.js",
    "revision": "3eeb2537ef7cd8cdefbaea73c38ce184"
  },
  {
    "url": "assets/js/24.40e8c549.js",
    "revision": "11971495532cfa77d47501465b3ad542"
  },
  {
    "url": "assets/js/25.dc8f090d.js",
    "revision": "a7f3f15b33361dd9a55eca3412c2f659"
  },
  {
    "url": "assets/js/26.8857e6ad.js",
    "revision": "db03848d2012ef18a2ac73621ff92fae"
  },
  {
    "url": "assets/js/27.f7c82db3.js",
    "revision": "21eeae2c89ec323c0acc39199077a331"
  },
  {
    "url": "assets/js/28.980a5f99.js",
    "revision": "4adaac7dd739bf4cee4717c647ffb202"
  },
  {
    "url": "assets/js/29.17a5a3b3.js",
    "revision": "b786f059dcf99be4ad66899b7adacdfb"
  },
  {
    "url": "assets/js/3.739af569.js",
    "revision": "2efafb6fbb5f3c5549c3229e894682b8"
  },
  {
    "url": "assets/js/30.c92abe98.js",
    "revision": "b8bd95e53e230d00d4d20f5951f178cf"
  },
  {
    "url": "assets/js/31.1e8c5f1a.js",
    "revision": "cdb634b32ecf654445a51faea5ed3d89"
  },
  {
    "url": "assets/js/32.9ca6aa00.js",
    "revision": "210389eba8cdcbab3b87e52a401a7197"
  },
  {
    "url": "assets/js/33.b2427f56.js",
    "revision": "e3d803dd76a8ba94cc10dcb7c208ef7b"
  },
  {
    "url": "assets/js/34.be296fcd.js",
    "revision": "1417ca55aeb6fe5ab5561a78a0b217ae"
  },
  {
    "url": "assets/js/35.0991e94e.js",
    "revision": "96d56630e219f65b7b8db13ec725e3d4"
  },
  {
    "url": "assets/js/36.5ed4909c.js",
    "revision": "55d33bb1f04fa47d55b6db6c02a77e9e"
  },
  {
    "url": "assets/js/37.446db082.js",
    "revision": "1dc8437fb754397ebcc8e0dbce7f94fb"
  },
  {
    "url": "assets/js/38.78df3065.js",
    "revision": "45b641268abd8eb4abda11e174f3e9f7"
  },
  {
    "url": "assets/js/39.3fa85030.js",
    "revision": "3b8d7d29896e377ea186beca5b71dcfc"
  },
  {
    "url": "assets/js/4.443b76b7.js",
    "revision": "060a7b0ae0400cfd20757032670afd5e"
  },
  {
    "url": "assets/js/40.9780a0c7.js",
    "revision": "276a07ae57310528b8d60db7c83aa420"
  },
  {
    "url": "assets/js/41.2d8f4b5e.js",
    "revision": "d017a193806a47ccd68dbbf16eb1877c"
  },
  {
    "url": "assets/js/42.234bfd9b.js",
    "revision": "4f9336acafeb77234fcc8296995203ba"
  },
  {
    "url": "assets/js/43.0b369cb9.js",
    "revision": "890eb86ae68a11c5d18879f51bb77e17"
  },
  {
    "url": "assets/js/44.a128f5ed.js",
    "revision": "b7f1a446382026a67b02b81fe3e8e9a4"
  },
  {
    "url": "assets/js/45.70f1dd9c.js",
    "revision": "02c5021e5c9a848df8804f8f12cd5921"
  },
  {
    "url": "assets/js/46.a584505e.js",
    "revision": "e5a972504129b975f36868723605da12"
  },
  {
    "url": "assets/js/47.9c656b14.js",
    "revision": "cfc2d771ba900abde3660623f6434aa9"
  },
  {
    "url": "assets/js/48.a3b5cde5.js",
    "revision": "321d89bf0da2e9ced7b230fbe1efdcad"
  },
  {
    "url": "assets/js/49.2900b5eb.js",
    "revision": "c1074490e306cd8f1b76edaf59e71d89"
  },
  {
    "url": "assets/js/5.52383738.js",
    "revision": "9efede8dace4001c05b971066bfe40fa"
  },
  {
    "url": "assets/js/50.0fe40c2f.js",
    "revision": "8b1c59628cbc5272b6c13578d9eae44f"
  },
  {
    "url": "assets/js/51.79f2e606.js",
    "revision": "9401777cc1c03d477b696897cb67262b"
  },
  {
    "url": "assets/js/52.c89d0b4c.js",
    "revision": "ea80cb6c3a5aaba17adcf3a70702068a"
  },
  {
    "url": "assets/js/53.ca708385.js",
    "revision": "8037bc21aa10bbf8a56c59da4c459b83"
  },
  {
    "url": "assets/js/54.f236864c.js",
    "revision": "65993353f67c75bf3f446b706835b284"
  },
  {
    "url": "assets/js/55.1a8797ae.js",
    "revision": "443aaf44548dcfabe228b616e0fec5e5"
  },
  {
    "url": "assets/js/56.37449537.js",
    "revision": "2132ecf6d3d2286184c27793019243b8"
  },
  {
    "url": "assets/js/57.9698c611.js",
    "revision": "c243c07ef68d79bee3385b825c3c1735"
  },
  {
    "url": "assets/js/58.0d01bf73.js",
    "revision": "78e30d6c11dd9b21a7c5869de290734d"
  },
  {
    "url": "assets/js/59.1f968b04.js",
    "revision": "5be1514bca2076a6ed28cd03e2749d04"
  },
  {
    "url": "assets/js/6.11a4bf49.js",
    "revision": "6bd849eea8539d4a533e923f72927a4d"
  },
  {
    "url": "assets/js/60.19eccca0.js",
    "revision": "e89c5b02a2cf0675d0b661b54706a7ae"
  },
  {
    "url": "assets/js/61.b51a573c.js",
    "revision": "efd73d4528a75363a7d5751c079a0e74"
  },
  {
    "url": "assets/js/62.e291a5fe.js",
    "revision": "0a2d14786112b7230f8319320859af9d"
  },
  {
    "url": "assets/js/63.1dad6e55.js",
    "revision": "aff4f614634cfaf27052a01973f121b1"
  },
  {
    "url": "assets/js/64.00fcfebc.js",
    "revision": "3b95f65d52bb48481e3d9dffe780f4e8"
  },
  {
    "url": "assets/js/65.ea1a1dbb.js",
    "revision": "20323a9d80a9475f66a4c74e70c23c34"
  },
  {
    "url": "assets/js/66.9a20442b.js",
    "revision": "b705117f312b0f524a6da6417eee119c"
  },
  {
    "url": "assets/js/67.512fe516.js",
    "revision": "8f3252272183e5944e2b03ec62da2142"
  },
  {
    "url": "assets/js/68.aefa6c4b.js",
    "revision": "5fb69ab03f06b0f6cc88528da8a79df6"
  },
  {
    "url": "assets/js/69.e7efe460.js",
    "revision": "198d7e01b295d879195c8dad5c5bb5de"
  },
  {
    "url": "assets/js/7.53752804.js",
    "revision": "2be75165094321d2470f06fe9a967382"
  },
  {
    "url": "assets/js/70.72437d35.js",
    "revision": "8067f4198753e4ce07561b985e4779a5"
  },
  {
    "url": "assets/js/71.4d3b16c8.js",
    "revision": "31e946adb585bfdf2d46f2470e69920d"
  },
  {
    "url": "assets/js/72.60a1a3ad.js",
    "revision": "353fc083a5f4a554f68770d6d8febae8"
  },
  {
    "url": "assets/js/73.5a1054ac.js",
    "revision": "81ac7b7cc651aaf8eef77711428253ca"
  },
  {
    "url": "assets/js/74.60f22621.js",
    "revision": "07165f2b349d91fed891a3db2210d5a0"
  },
  {
    "url": "assets/js/75.486c21ec.js",
    "revision": "bbc728264524bb48481a916933f8537a"
  },
  {
    "url": "assets/js/76.b3cdde3b.js",
    "revision": "2c1139395daa2009fad7d8e37261eebd"
  },
  {
    "url": "assets/js/77.e47cacd2.js",
    "revision": "5d93cb53856d1e3ab4252fd78d638701"
  },
  {
    "url": "assets/js/78.22655510.js",
    "revision": "f66dd116756e9a761e1ea47732ea7db5"
  },
  {
    "url": "assets/js/79.af5007c3.js",
    "revision": "6e57a75638a0475b98d69ef6b82cdd25"
  },
  {
    "url": "assets/js/8.0d1ab4cc.js",
    "revision": "4cdf4c2b481a687e6913d31bee20c7e5"
  },
  {
    "url": "assets/js/80.aded5dc6.js",
    "revision": "1edc8b163a57f67845d4dfaf44ff826b"
  },
  {
    "url": "assets/js/81.78c98e2f.js",
    "revision": "7d8ab4c582b377376670bb1c4d74174a"
  },
  {
    "url": "assets/js/82.48e191ed.js",
    "revision": "db559fef3e03e4664721f881f421c5d5"
  },
  {
    "url": "assets/js/83.61f751c9.js",
    "revision": "9876584affb6bc85f887e01fad1af4c3"
  },
  {
    "url": "assets/js/84.0bcd1810.js",
    "revision": "8760d6e8d55cbb5af116322932f76a35"
  },
  {
    "url": "assets/js/85.5ba6c3ce.js",
    "revision": "5c0fa1d5b5a0481c70e819816863fb83"
  },
  {
    "url": "assets/js/86.8bfb3fc3.js",
    "revision": "3677afe62060590957ec2a56670c4f29"
  },
  {
    "url": "assets/js/87.2e4eff9c.js",
    "revision": "7286c7c092f22a5c94ea4e54e8f71e6b"
  },
  {
    "url": "assets/js/88.939d3393.js",
    "revision": "f0d9e033f00420bdc14d6d588562fbab"
  },
  {
    "url": "assets/js/89.38ecd4ce.js",
    "revision": "980d7e8da5ad6539eb9340871ff02028"
  },
  {
    "url": "assets/js/9.e744dbf1.js",
    "revision": "b2342c09848a76d84960277328bbc54f"
  },
  {
    "url": "assets/js/90.59fcec96.js",
    "revision": "c812f044cbd37d4bd4a1ca19eba2b3c9"
  },
  {
    "url": "assets/js/91.c2814645.js",
    "revision": "9f53cb59720af193e4b478ee39ea555b"
  },
  {
    "url": "assets/js/92.0e42aa13.js",
    "revision": "88c2577abf3a2203328441f72e2ca7e8"
  },
  {
    "url": "assets/js/93.9ef14d45.js",
    "revision": "ca789064453e2306d703191394aeb7a6"
  },
  {
    "url": "assets/js/94.26ff50bf.js",
    "revision": "68fc937a6d3a08b2e686b843fa25d4af"
  },
  {
    "url": "assets/js/app.a2f25288.js",
    "revision": "d4e25542a2c26b5172ebb543d75c4a98"
  },
  {
    "url": "bigdata/index.html",
    "revision": "a5b52e850058c0af904d62ad77072bfa"
  },
  {
    "url": "code/github.html",
    "revision": "9d7350f44b9f6f56fb79b483916b6c25"
  },
  {
    "url": "code/map.html",
    "revision": "c57a3dbf58fe8314a5ae8c1cd88f0a7d"
  },
  {
    "url": "code/nodejs.html",
    "revision": "c06c3b2c1925979652ae9d09eb3f3dcb"
  },
  {
    "url": "datascience/data_safe&regulation.html",
    "revision": "50bddedd5eeca53d42598672bfe03753"
  },
  {
    "url": "datascience/elk.html",
    "revision": "4bdd417e36dcc5994d97e869b48ba997"
  },
  {
    "url": "datascience/hadoop.html",
    "revision": "2b14bc86f8fa89e6f436553f38b75ba6"
  },
  {
    "url": "datascience/hash.html",
    "revision": "f48ad10d4bca775734f9bf2347ddeb28"
  },
  {
    "url": "datascience/index.html",
    "revision": "af996b093a4d33e303873b29fb5e6f8f"
  },
  {
    "url": "datascience/kafka.html",
    "revision": "98debed32792de09148dedfc69043547"
  },
  {
    "url": "datascience/kaggle.html",
    "revision": "2c1f1713fe1eccd17bbf479738c99646"
  },
  {
    "url": "datascience/linear_regression.html",
    "revision": "704426fd026cafe545d16d1709a97d47"
  },
  {
    "url": "datascience/matplotlib.html",
    "revision": "8d0a875a51a4595686b8ab1cdc4db196"
  },
  {
    "url": "datascience/ml_datapre.html",
    "revision": "76df28c10b5dcdd9f48c3709369ce4e1"
  },
  {
    "url": "datascience/ml_e.html",
    "revision": "3600df405e16a0a7519ae64133019cd1"
  },
  {
    "url": "datascience/ml_math.html",
    "revision": "9cf15f337054629ce5d388a794353df8"
  },
  {
    "url": "datascience/ml_t.html",
    "revision": "fafd01fa8b964af95a74a9d7591cda97"
  },
  {
    "url": "datascience/ml_traditional.html",
    "revision": "ebdf9a03bc4a6a33b828f70e9012280d"
  },
  {
    "url": "datascience/numpy.html",
    "revision": "38b3b48d767038031edb3b7f3e7e3e63"
  },
  {
    "url": "datascience/pandas.html",
    "revision": "0bc7f3876f92000f75384b3222a2da17"
  },
  {
    "url": "datascience/pyecharts.html",
    "revision": "54047c1ce9a4b77f21a5d90ab22914e0"
  },
  {
    "url": "datascience/seaborn.html",
    "revision": "18a2325cde4aa234eebfdc5ad3f0e7d4"
  },
  {
    "url": "datascience/spark.html",
    "revision": "f8fabc5d1f7f6d3990ff6b8b60f86ce2"
  },
  {
    "url": "datascience/tushare2mysql.html",
    "revision": "08300630cbb09bb58ba658c0ca115968"
  },
  {
    "url": "datascience/vscode.html",
    "revision": "36717a59c64968eaabd3d88184f1fe45"
  },
  {
    "url": "datascience/大数据.html",
    "revision": "2ac0856a3d37a6e0a277a24c2306333d"
  },
  {
    "url": "datascience/特征工程.html",
    "revision": "e6913384051b62153e1ac5b0abf220f8"
  },
  {
    "url": "datascience/神经网络.html",
    "revision": "38b941b9ffbdedc907f1939d10ffd065"
  },
  {
    "url": "deploy/git.html",
    "revision": "5b918b4e5b1d605df465fa45c53c7d8d"
  },
  {
    "url": "deploy/index.html",
    "revision": "440fa0c0551e0f71ad73d99495b3b6a7"
  },
  {
    "url": "deploy/linux.html",
    "revision": "98faa18a0fed74ef9d532bbfd643ed31"
  },
  {
    "url": "deploy/mysql.html",
    "revision": "d00d61a140de7443b712e4083ba4c0f6"
  },
  {
    "url": "deploy/nginx.html",
    "revision": "f33e739a8e1662db87457a76d12e01df"
  },
  {
    "url": "deploy/redis.html",
    "revision": "a667ebb17571f60ca12762d8964a5bc8"
  },
  {
    "url": "finance/financial_engineering.html",
    "revision": "890d1b465c05a82ce040a422d8f60762"
  },
  {
    "url": "finance/fintech.html",
    "revision": "f9fa8a0a63b01644f5465aec50c4d4cb"
  },
  {
    "url": "finance/history/index.html",
    "revision": "5397b7b204c59fce394a8b9e73b098aa"
  },
  {
    "url": "finance/index.html",
    "revision": "5149e8cd703e80e3e0b4f8589c954347"
  },
  {
    "url": "finance/invest.html",
    "revision": "1c55ccc47633c33c155add25df919f96"
  },
  {
    "url": "finance/market.html",
    "revision": "1001ff5e493edd08e5a7a6b62d6ffd12"
  },
  {
    "url": "finance/quant.html",
    "revision": "815c6bd5abab6381be916c6fb8f3e635"
  },
  {
    "url": "finance/spend.html",
    "revision": "42aee7f70b8a43c1c9aad01e1587a545"
  },
  {
    "url": "finance/互联网金融.html",
    "revision": "6455bcd6819d3424bab2b098fe2f0ffa"
  },
  {
    "url": "finance/供应链.html",
    "revision": "51d6e6a0782c874ee25407c169d8b880"
  },
  {
    "url": "finance/如何激励金融科技人才.html",
    "revision": "7b3d827e66fae48d140238c2fc3b5882"
  },
  {
    "url": "fintech/aiinvest/index.html",
    "revision": "16678fedeb7d487776fad7101ec94ddd"
  },
  {
    "url": "fintech/blockchain.html",
    "revision": "edcebf64f4635cc2190d9a94a8dfcdfd"
  },
  {
    "url": "fintech/blockchain/dapp.html",
    "revision": "fb7dfd0002136e00b7c7842f60c8cf76"
  },
  {
    "url": "fintech/blockchain/index.html",
    "revision": "2ea5eaf6e46535e59de0245085c6a076"
  },
  {
    "url": "fintech/blockchain/overall.html",
    "revision": "6e8fb04b99509a5bf6a8289acab3a6f1"
  },
  {
    "url": "fintech/blockchain/smartcontracts.html",
    "revision": "396c42db9b693e7b5187c6d334037669"
  },
  {
    "url": "fintech/index.html",
    "revision": "f43ae230a1cd994a3623d7c89521f4d2"
  },
  {
    "url": "fintech/internet_finance.html",
    "revision": "397c3e604dd9cd90b40dfa729bf19641"
  },
  {
    "url": "fintech/p2p.html",
    "revision": "0223bf437ed336f92773d7348d6063ad"
  },
  {
    "url": "guide/index.html",
    "revision": "6722a3f19dc2971ee3d4b0983906d526"
  },
  {
    "url": "index.html",
    "revision": "274f96db90ea5f33ffce9876d2f607b3"
  },
  {
    "url": "jedi.jpg",
    "revision": "3e1e5446a3ef67eaeca6f892f644c42a"
  },
  {
    "url": "other/wine.html",
    "revision": "cb20497731c7c2552bcf7e7d23d09327"
  },
  {
    "url": "other/英语作文.html",
    "revision": "403a34036f7d551417efea4617aedf23"
  },
  {
    "url": "python/aotoaction.html",
    "revision": "697c593f5663ff68f7a02bac6f487ce9"
  },
  {
    "url": "python/Charles.html",
    "revision": "9f2e98f7c935f800b3b48ed7ca740a39"
  },
  {
    "url": "python/crawler.html",
    "revision": "b8142f40c9c84e54430cd9ed979f4298"
  },
  {
    "url": "python/django_orm.html",
    "revision": "c33eb979fe34cadedcc290b4d4c1a32f"
  },
  {
    "url": "python/django_restful.html",
    "revision": "fbb90b02039afdb39a7438fd7db57d85"
  },
  {
    "url": "python/django.html",
    "revision": "4f69da3fcc3f242d8d4553b5ed8b07eb"
  },
  {
    "url": "python/fastapi.html",
    "revision": "472f7b1c90acda8a15c19489f3dc033c"
  },
  {
    "url": "python/flask.html",
    "revision": "50d5cbf0b4069437ec8ea93ad9d709f5"
  },
  {
    "url": "python/index.html",
    "revision": "64a3bcac4183ead6844b40f039cd4788"
  },
  {
    "url": "python/magic_methods.html",
    "revision": "0018bfb8f5d1edd16f0267f1c0971729"
  },
  {
    "url": "python/pandas+sqlalchemy.html",
    "revision": "97809919ab212b61d44f9484ce481bdc"
  },
  {
    "url": "python/pyecharts.html",
    "revision": "95bed9038a7fed238f90acc895a6d838"
  },
  {
    "url": "python/python_data.html",
    "revision": "06ca3f2854d3072efa8570cae995a0c9"
  },
  {
    "url": "python/python_def.html",
    "revision": "4adcc965f66933ad71f225a316e5b210"
  },
  {
    "url": "python/python_package.html",
    "revision": "7fd84081e59eab68644ac2fa749219aa"
  },
  {
    "url": "python/redis.html",
    "revision": "269abe1de7bd10410af929d14bfd92e5"
  },
  {
    "url": "python/spider_fdmt.html",
    "revision": "258a5ef428fbb6977231ad64d68c7f7f"
  },
  {
    "url": "python/spider_readme.html",
    "revision": "c47f2afa2b04ad06b829474b86853cf8"
  },
  {
    "url": "python/spider.html",
    "revision": "3b289c69c33b6399af2a129329a4c14a"
  },
  {
    "url": "python/sqlalchemy.html",
    "revision": "a21ce0b7906c006edcd5bba6d97b09c5"
  },
  {
    "url": "python/time.html",
    "revision": "88643e71ec25e34c2645084180feab2b"
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
