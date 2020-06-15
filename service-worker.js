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
    "revision": "1c88cbd794adfcf3517c9bf8995ce74f"
  },
  {
    "url": "app/frontend/django.html",
    "revision": "4cac15169c539782ba16b7ae21be3d06"
  },
  {
    "url": "app/frontend/echartsjs.html",
    "revision": "1c46b7769b571e2dea5d78a3f172bf2e"
  },
  {
    "url": "app/frontend/index.html",
    "revision": "9fda953dd2ec7af2a3b71c0d5831e9f5"
  },
  {
    "url": "app/frontend/start.html",
    "revision": "d5aa6d6e685beec0786f08469efd5329"
  },
  {
    "url": "app/frontend/vuejs.html",
    "revision": "a5e89a445a42643d2593dc079f8ee1fa"
  },
  {
    "url": "app/index.html",
    "revision": "ecc6778a6e22ef5c6d3d83c51e30c0d1"
  },
  {
    "url": "assets/css/0.styles.602f9854.css",
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
    "url": "assets/js/10.66bb5bf6.js",
    "revision": "d69be218af9f31e9e00946cd9a0ca638"
  },
  {
    "url": "assets/js/11.f0f8b819.js",
    "revision": "548b92cba1e9b58a51d25e72fae4519d"
  },
  {
    "url": "assets/js/12.f48123ec.js",
    "revision": "8f8942a7d98d4bbc5b1d3e1b877eed04"
  },
  {
    "url": "assets/js/13.50ba86ad.js",
    "revision": "2466b0685fe4bdeb346c8d87e49071ce"
  },
  {
    "url": "assets/js/14.67b3b26b.js",
    "revision": "7c71da7dd8bb1eaedb61fe9f72fa1a00"
  },
  {
    "url": "assets/js/15.e0975f52.js",
    "revision": "4f677672c07093f4a430d853322a3175"
  },
  {
    "url": "assets/js/16.8f1d612a.js",
    "revision": "9c9cd5f7c434c0d1d45f2445167d3bc4"
  },
  {
    "url": "assets/js/17.1ff7bc23.js",
    "revision": "05515adff3a132a6b14243e2b199cf92"
  },
  {
    "url": "assets/js/18.6b4eb92a.js",
    "revision": "354d2dd22326c2b88bfa062e8ea00f27"
  },
  {
    "url": "assets/js/19.3a3e4001.js",
    "revision": "4deb8c438f278e27aefd0f5b94ca6d6c"
  },
  {
    "url": "assets/js/2.41a638fe.js",
    "revision": "05b7650e83adcf7407f90cda3de651f3"
  },
  {
    "url": "assets/js/20.f151ce51.js",
    "revision": "561b51d572c1372a6dba6e6c5b0adff1"
  },
  {
    "url": "assets/js/21.33e39366.js",
    "revision": "eb57ce7af5ac38f26e492279f43fe40c"
  },
  {
    "url": "assets/js/22.690311a5.js",
    "revision": "c7600005ca248bfc62320ce4f5674a1c"
  },
  {
    "url": "assets/js/23.fd9ffcc8.js",
    "revision": "3eeb2537ef7cd8cdefbaea73c38ce184"
  },
  {
    "url": "assets/js/24.438c200f.js",
    "revision": "11971495532cfa77d47501465b3ad542"
  },
  {
    "url": "assets/js/25.c539b0f2.js",
    "revision": "a7f3f15b33361dd9a55eca3412c2f659"
  },
  {
    "url": "assets/js/26.b0eabc0d.js",
    "revision": "db03848d2012ef18a2ac73621ff92fae"
  },
  {
    "url": "assets/js/27.3cafc922.js",
    "revision": "21eeae2c89ec323c0acc39199077a331"
  },
  {
    "url": "assets/js/28.343ee867.js",
    "revision": "4adaac7dd739bf4cee4717c647ffb202"
  },
  {
    "url": "assets/js/29.bf721044.js",
    "revision": "b786f059dcf99be4ad66899b7adacdfb"
  },
  {
    "url": "assets/js/3.ab52000e.js",
    "revision": "2efafb6fbb5f3c5549c3229e894682b8"
  },
  {
    "url": "assets/js/30.e65402f7.js",
    "revision": "b8bd95e53e230d00d4d20f5951f178cf"
  },
  {
    "url": "assets/js/31.cbccf23d.js",
    "revision": "cdb634b32ecf654445a51faea5ed3d89"
  },
  {
    "url": "assets/js/32.7671b3f9.js",
    "revision": "210389eba8cdcbab3b87e52a401a7197"
  },
  {
    "url": "assets/js/33.be04904d.js",
    "revision": "e3d803dd76a8ba94cc10dcb7c208ef7b"
  },
  {
    "url": "assets/js/34.0fa569a3.js",
    "revision": "1417ca55aeb6fe5ab5561a78a0b217ae"
  },
  {
    "url": "assets/js/35.b6e829c8.js",
    "revision": "96d56630e219f65b7b8db13ec725e3d4"
  },
  {
    "url": "assets/js/36.3365360a.js",
    "revision": "55d33bb1f04fa47d55b6db6c02a77e9e"
  },
  {
    "url": "assets/js/37.162e1e9b.js",
    "revision": "1dc8437fb754397ebcc8e0dbce7f94fb"
  },
  {
    "url": "assets/js/38.6d3dcbe2.js",
    "revision": "45b641268abd8eb4abda11e174f3e9f7"
  },
  {
    "url": "assets/js/39.9cd0bdf5.js",
    "revision": "3b8d7d29896e377ea186beca5b71dcfc"
  },
  {
    "url": "assets/js/4.214ecfff.js",
    "revision": "060a7b0ae0400cfd20757032670afd5e"
  },
  {
    "url": "assets/js/40.db1b6ec4.js",
    "revision": "276a07ae57310528b8d60db7c83aa420"
  },
  {
    "url": "assets/js/41.d6ddad4b.js",
    "revision": "d017a193806a47ccd68dbbf16eb1877c"
  },
  {
    "url": "assets/js/42.eaa7bdcf.js",
    "revision": "4f9336acafeb77234fcc8296995203ba"
  },
  {
    "url": "assets/js/43.b1817bfe.js",
    "revision": "890eb86ae68a11c5d18879f51bb77e17"
  },
  {
    "url": "assets/js/44.ddb50588.js",
    "revision": "b7f1a446382026a67b02b81fe3e8e9a4"
  },
  {
    "url": "assets/js/45.4590b0c7.js",
    "revision": "02c5021e5c9a848df8804f8f12cd5921"
  },
  {
    "url": "assets/js/46.5ca57e0c.js",
    "revision": "e5a972504129b975f36868723605da12"
  },
  {
    "url": "assets/js/47.2309f7a8.js",
    "revision": "37801fef49012ae2bcd6e20a27ecc3ff"
  },
  {
    "url": "assets/js/48.b315925b.js",
    "revision": "827a6a8808a01ffe1a6e16a2fae94fc3"
  },
  {
    "url": "assets/js/49.68aa53bc.js",
    "revision": "c1074490e306cd8f1b76edaf59e71d89"
  },
  {
    "url": "assets/js/5.346bddc2.js",
    "revision": "9efede8dace4001c05b971066bfe40fa"
  },
  {
    "url": "assets/js/50.b62c6f7c.js",
    "revision": "8b1c59628cbc5272b6c13578d9eae44f"
  },
  {
    "url": "assets/js/51.e4936580.js",
    "revision": "9401777cc1c03d477b696897cb67262b"
  },
  {
    "url": "assets/js/52.d9b33474.js",
    "revision": "ea80cb6c3a5aaba17adcf3a70702068a"
  },
  {
    "url": "assets/js/53.48ab7a01.js",
    "revision": "8037bc21aa10bbf8a56c59da4c459b83"
  },
  {
    "url": "assets/js/54.aef2bd83.js",
    "revision": "65993353f67c75bf3f446b706835b284"
  },
  {
    "url": "assets/js/55.39b3dc40.js",
    "revision": "443aaf44548dcfabe228b616e0fec5e5"
  },
  {
    "url": "assets/js/56.49715f33.js",
    "revision": "2132ecf6d3d2286184c27793019243b8"
  },
  {
    "url": "assets/js/57.74eca464.js",
    "revision": "c243c07ef68d79bee3385b825c3c1735"
  },
  {
    "url": "assets/js/58.b1ed09a1.js",
    "revision": "78e30d6c11dd9b21a7c5869de290734d"
  },
  {
    "url": "assets/js/59.9ffb6d33.js",
    "revision": "5be1514bca2076a6ed28cd03e2749d04"
  },
  {
    "url": "assets/js/6.2236992b.js",
    "revision": "6bd849eea8539d4a533e923f72927a4d"
  },
  {
    "url": "assets/js/60.52a389b6.js",
    "revision": "e89c5b02a2cf0675d0b661b54706a7ae"
  },
  {
    "url": "assets/js/61.7a95ce9c.js",
    "revision": "efd73d4528a75363a7d5751c079a0e74"
  },
  {
    "url": "assets/js/62.1faf76c5.js",
    "revision": "0a2d14786112b7230f8319320859af9d"
  },
  {
    "url": "assets/js/63.d871fc66.js",
    "revision": "aff4f614634cfaf27052a01973f121b1"
  },
  {
    "url": "assets/js/64.b5abf176.js",
    "revision": "3b95f65d52bb48481e3d9dffe780f4e8"
  },
  {
    "url": "assets/js/65.48537fc8.js",
    "revision": "20323a9d80a9475f66a4c74e70c23c34"
  },
  {
    "url": "assets/js/66.0de7ccb2.js",
    "revision": "b705117f312b0f524a6da6417eee119c"
  },
  {
    "url": "assets/js/67.75957b3e.js",
    "revision": "8f3252272183e5944e2b03ec62da2142"
  },
  {
    "url": "assets/js/68.a3733587.js",
    "revision": "5fb69ab03f06b0f6cc88528da8a79df6"
  },
  {
    "url": "assets/js/69.342e9563.js",
    "revision": "198d7e01b295d879195c8dad5c5bb5de"
  },
  {
    "url": "assets/js/7.bbcb5423.js",
    "revision": "2be75165094321d2470f06fe9a967382"
  },
  {
    "url": "assets/js/70.09cd683b.js",
    "revision": "8067f4198753e4ce07561b985e4779a5"
  },
  {
    "url": "assets/js/71.7f1deac6.js",
    "revision": "31e946adb585bfdf2d46f2470e69920d"
  },
  {
    "url": "assets/js/72.b3024e0d.js",
    "revision": "353fc083a5f4a554f68770d6d8febae8"
  },
  {
    "url": "assets/js/73.0a6b45a8.js",
    "revision": "81ac7b7cc651aaf8eef77711428253ca"
  },
  {
    "url": "assets/js/74.9a3d5d1f.js",
    "revision": "07165f2b349d91fed891a3db2210d5a0"
  },
  {
    "url": "assets/js/75.ebd398cf.js",
    "revision": "bbc728264524bb48481a916933f8537a"
  },
  {
    "url": "assets/js/76.e311cc7f.js",
    "revision": "2c1139395daa2009fad7d8e37261eebd"
  },
  {
    "url": "assets/js/77.8385da78.js",
    "revision": "5d93cb53856d1e3ab4252fd78d638701"
  },
  {
    "url": "assets/js/78.c3ed1a3d.js",
    "revision": "f66dd116756e9a761e1ea47732ea7db5"
  },
  {
    "url": "assets/js/79.68da371a.js",
    "revision": "6e57a75638a0475b98d69ef6b82cdd25"
  },
  {
    "url": "assets/js/8.d1304d06.js",
    "revision": "4cdf4c2b481a687e6913d31bee20c7e5"
  },
  {
    "url": "assets/js/80.2de335e2.js",
    "revision": "1edc8b163a57f67845d4dfaf44ff826b"
  },
  {
    "url": "assets/js/81.1d90b25b.js",
    "revision": "7d8ab4c582b377376670bb1c4d74174a"
  },
  {
    "url": "assets/js/82.aca3d1d1.js",
    "revision": "db559fef3e03e4664721f881f421c5d5"
  },
  {
    "url": "assets/js/83.6c798a0c.js",
    "revision": "9876584affb6bc85f887e01fad1af4c3"
  },
  {
    "url": "assets/js/84.6d9cae67.js",
    "revision": "8760d6e8d55cbb5af116322932f76a35"
  },
  {
    "url": "assets/js/85.aaab3fec.js",
    "revision": "5c0fa1d5b5a0481c70e819816863fb83"
  },
  {
    "url": "assets/js/86.4b7646e7.js",
    "revision": "3677afe62060590957ec2a56670c4f29"
  },
  {
    "url": "assets/js/87.3242d63e.js",
    "revision": "7286c7c092f22a5c94ea4e54e8f71e6b"
  },
  {
    "url": "assets/js/88.9cbd050c.js",
    "revision": "f0d9e033f00420bdc14d6d588562fbab"
  },
  {
    "url": "assets/js/89.5342db54.js",
    "revision": "980d7e8da5ad6539eb9340871ff02028"
  },
  {
    "url": "assets/js/9.5539a154.js",
    "revision": "87c6abf8fc7416272f3a0380a08c9f7b"
  },
  {
    "url": "assets/js/90.956600ee.js",
    "revision": "c812f044cbd37d4bd4a1ca19eba2b3c9"
  },
  {
    "url": "assets/js/91.5753d5a7.js",
    "revision": "9f53cb59720af193e4b478ee39ea555b"
  },
  {
    "url": "assets/js/92.cdcef0b3.js",
    "revision": "88c2577abf3a2203328441f72e2ca7e8"
  },
  {
    "url": "assets/js/93.cf8430d2.js",
    "revision": "ca789064453e2306d703191394aeb7a6"
  },
  {
    "url": "assets/js/94.86dfca67.js",
    "revision": "68fc937a6d3a08b2e686b843fa25d4af"
  },
  {
    "url": "assets/js/app.e1b255f0.js",
    "revision": "eed273515d420c7db58652898f6c0a3b"
  },
  {
    "url": "bigdata/index.html",
    "revision": "28926843faaf77b443dd5624c64fd6b5"
  },
  {
    "url": "code/github.html",
    "revision": "999d6667f149d679808d1988ec22e0ff"
  },
  {
    "url": "code/map.html",
    "revision": "374b417ef72f32b7df4c657cc0f09cce"
  },
  {
    "url": "code/nodejs.html",
    "revision": "4cd4b13d8f8b44bba453c0e94f52c1d2"
  },
  {
    "url": "datascience/data_safe&regulation.html",
    "revision": "a9dd8af9154fff2050ea85ffe9972ca6"
  },
  {
    "url": "datascience/elk.html",
    "revision": "9e378ec3cba99fb4af6789ccc525da44"
  },
  {
    "url": "datascience/hadoop.html",
    "revision": "f4e2caf7fff7e78ff444ac076cc455dc"
  },
  {
    "url": "datascience/hash.html",
    "revision": "a4fd216fe3aba20fa946dc918a44e473"
  },
  {
    "url": "datascience/index.html",
    "revision": "5d761c294dd4ef7f9c03993674b119a6"
  },
  {
    "url": "datascience/kafka.html",
    "revision": "487903caf7d69fc4974fb239322594e3"
  },
  {
    "url": "datascience/kaggle.html",
    "revision": "7dda4c9333eab5f8a6feb5983a659933"
  },
  {
    "url": "datascience/linear_regression.html",
    "revision": "b207d7e286ab4cd57437965e215e1577"
  },
  {
    "url": "datascience/matplotlib.html",
    "revision": "6678c397c6230e7307cd12c57a75be2a"
  },
  {
    "url": "datascience/ml_datapre.html",
    "revision": "ec51c281608d69b21aa79b4a20c2753c"
  },
  {
    "url": "datascience/ml_e.html",
    "revision": "c17bb2bb7ab3cd731aa0a00b56104921"
  },
  {
    "url": "datascience/ml_math.html",
    "revision": "37af1d7b6078405f42b597af712f3adb"
  },
  {
    "url": "datascience/ml_t.html",
    "revision": "e4a8abdff7b52b5435c7534884ba6a02"
  },
  {
    "url": "datascience/ml_traditional.html",
    "revision": "f94d18ed748ac1bb7589a9f6c0d3fa51"
  },
  {
    "url": "datascience/numpy.html",
    "revision": "1deca218e5a40779323b4f9c3f6ea531"
  },
  {
    "url": "datascience/pandas.html",
    "revision": "f104399db1e648d829edea388ca6d8a9"
  },
  {
    "url": "datascience/pyecharts.html",
    "revision": "615bc9a649d9838522aa8afd954393ac"
  },
  {
    "url": "datascience/seaborn.html",
    "revision": "7a8c46ef42c78c08e3ccff9338326db2"
  },
  {
    "url": "datascience/spark.html",
    "revision": "47e281ad322ebe395e822472ed6e8832"
  },
  {
    "url": "datascience/tushare2mysql.html",
    "revision": "209a57b87246b29663bf67045af4fc15"
  },
  {
    "url": "datascience/vscode.html",
    "revision": "689a0383cf4d803885978418f30889f3"
  },
  {
    "url": "datascience/大数据.html",
    "revision": "d1e7f35890dbdbb1964af5a4bfb211ca"
  },
  {
    "url": "datascience/特征工程.html",
    "revision": "5d61ad8ae7c93ac211d88306980a6ade"
  },
  {
    "url": "datascience/神经网络.html",
    "revision": "db2cb36c581fbc02d04dcae93bea49ed"
  },
  {
    "url": "deploy/git.html",
    "revision": "f0b9090e2a45a13ec2723c93686dbd91"
  },
  {
    "url": "deploy/index.html",
    "revision": "1d061b6f5a91d40218df1fc5746fc615"
  },
  {
    "url": "deploy/linux.html",
    "revision": "6630e047b5afdeb777689e97aba2110a"
  },
  {
    "url": "deploy/mysql.html",
    "revision": "f8800ebfe0a3193f3b7ef145689ac639"
  },
  {
    "url": "deploy/nginx.html",
    "revision": "ea00923939e42676daa1bcc53ef74890"
  },
  {
    "url": "deploy/redis.html",
    "revision": "44f370a3af0e40f93703e7159000df06"
  },
  {
    "url": "finance/financial_engineering.html",
    "revision": "aa7c0a5499494f427ecbb01aeb57641f"
  },
  {
    "url": "finance/fintech.html",
    "revision": "1e62555fa785c3ab8a8af62008691abf"
  },
  {
    "url": "finance/history/index.html",
    "revision": "6b1b955c39f6f2f07c874179d7ddf900"
  },
  {
    "url": "finance/index.html",
    "revision": "41405b6a5dc48f09b95e66b5c763c2b7"
  },
  {
    "url": "finance/invest.html",
    "revision": "c3d54b43bf11e01fb8e31a37fbe87459"
  },
  {
    "url": "finance/market.html",
    "revision": "33f6cb625a9067fd319c50761e47755b"
  },
  {
    "url": "finance/quant.html",
    "revision": "c0159e5d000ea36b4253f0c0909f9474"
  },
  {
    "url": "finance/spend.html",
    "revision": "36db72d3102b1783ce0e45034d139e2a"
  },
  {
    "url": "finance/互联网金融.html",
    "revision": "1ecfcc5967e541b177f432c9265451a2"
  },
  {
    "url": "finance/供应链.html",
    "revision": "f905bb8f5ec2cc8854c271f13df6b6aa"
  },
  {
    "url": "finance/如何激励金融科技人才.html",
    "revision": "ff9d1c86c60063c6eecd35289d864a6f"
  },
  {
    "url": "fintech/aiinvest/index.html",
    "revision": "9525cd59369db6104ebf83f90ff7bb51"
  },
  {
    "url": "fintech/blockchain.html",
    "revision": "d9164cf90874577685554733d9939390"
  },
  {
    "url": "fintech/blockchain/dapp.html",
    "revision": "77997d75c26f57bbf89e9f5a7415d021"
  },
  {
    "url": "fintech/blockchain/index.html",
    "revision": "e661667b20e1d84ef3354f4d3b1c79be"
  },
  {
    "url": "fintech/blockchain/overall.html",
    "revision": "a46453196fe4425e6d84f3cef82445b0"
  },
  {
    "url": "fintech/blockchain/smartcontracts.html",
    "revision": "e8aff24b5b5a1ea18b1035faad7261ae"
  },
  {
    "url": "fintech/index.html",
    "revision": "78cef3c38f7037efb1a77a7a9fc070fe"
  },
  {
    "url": "fintech/internet_finance.html",
    "revision": "cf4622e9add4877ee3b711ef5284d84a"
  },
  {
    "url": "fintech/p2p.html",
    "revision": "8af03a7c76e5b86e944b681d8862cadc"
  },
  {
    "url": "guide/index.html",
    "revision": "334e3772c2d061dcd9ae738e82ceff81"
  },
  {
    "url": "index.html",
    "revision": "5874448c39d399649f1ce4be6afb11f1"
  },
  {
    "url": "jedi.jpg",
    "revision": "3e1e5446a3ef67eaeca6f892f644c42a"
  },
  {
    "url": "other/wine.html",
    "revision": "98e1917392a80386ab6d560f734f015e"
  },
  {
    "url": "other/英语作文.html",
    "revision": "d6a8fd1e8c1ed3bdaadd52ec2b315cdb"
  },
  {
    "url": "python/aotoaction.html",
    "revision": "b8dc5851d4d370f5fb61fb5558ab7bbf"
  },
  {
    "url": "python/Charles.html",
    "revision": "78e07f5a518b5224fa03675af95db986"
  },
  {
    "url": "python/crawler.html",
    "revision": "08e7ce6a6ca42ccd0dd496cdacb2ad7c"
  },
  {
    "url": "python/django_orm.html",
    "revision": "71e5c5c2ab98450882b76a8a8fdef13e"
  },
  {
    "url": "python/django_restful.html",
    "revision": "f8e801df2b056e9a57001933cbcdf389"
  },
  {
    "url": "python/django.html",
    "revision": "1da777997851de521319af0281daaf54"
  },
  {
    "url": "python/fastapi.html",
    "revision": "b17287b7d6deaa36275c669f9692af64"
  },
  {
    "url": "python/flask.html",
    "revision": "e0c00b407301d54a1c0bfffc84c8339f"
  },
  {
    "url": "python/index.html",
    "revision": "53b25344930f7d515a37c6d52f9960c4"
  },
  {
    "url": "python/magic_methods.html",
    "revision": "f8bda32d4682fe4a6f054038d5211d2d"
  },
  {
    "url": "python/pandas+sqlalchemy.html",
    "revision": "6b6cb8e6add1dcd8c156092e2a4e60dc"
  },
  {
    "url": "python/pyecharts.html",
    "revision": "44fc9a604e6e2e4455b3127ad7ba74dd"
  },
  {
    "url": "python/python_data.html",
    "revision": "447a9647cba65df985fbccfcd807d67d"
  },
  {
    "url": "python/python_def.html",
    "revision": "9fc1cf05552e116840a202ecba4d81bf"
  },
  {
    "url": "python/python_package.html",
    "revision": "ee9a958eb0a65383eaa2ff49029de7dd"
  },
  {
    "url": "python/redis.html",
    "revision": "a995784c7ec91f7512b9e58fa23c96e3"
  },
  {
    "url": "python/spider_fdmt.html",
    "revision": "5cfce2344266b08d605bee422100f613"
  },
  {
    "url": "python/spider_readme.html",
    "revision": "269805d49ebdec43ec012ca20418de8e"
  },
  {
    "url": "python/spider.html",
    "revision": "55414f0229c37a03b2fd7cc164d96a18"
  },
  {
    "url": "python/sqlalchemy.html",
    "revision": "3d95acda647a7f295f03c5ce99977b1f"
  },
  {
    "url": "python/time.html",
    "revision": "d3de44232fb1c62d356e5501c21281ba"
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
