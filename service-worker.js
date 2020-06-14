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
    "revision": "31afcef6c6f605fa1582151efd2bb800"
  },
  {
    "url": "app/frontend/django.html",
    "revision": "1a60447766b7fc27969093e0dde77f1b"
  },
  {
    "url": "app/frontend/echartsjs.html",
    "revision": "9eb602e0b5685c3b892cacdad089ef9c"
  },
  {
    "url": "app/frontend/index.html",
    "revision": "a9da7094160240b54782c06bc9985e1b"
  },
  {
    "url": "app/frontend/start.html",
    "revision": "235c4f5496f342db17b0848f98140e2c"
  },
  {
    "url": "app/frontend/vuejs.html",
    "revision": "f90894127bc45fbdcaa69a19709b3885"
  },
  {
    "url": "app/index.html",
    "revision": "f92b0ba6adc34a5bbaf3bf9529b14ba5"
  },
  {
    "url": "assets/css/0.styles.e9e86af9.css",
    "revision": "e0dfc60def3306af6f48940bd1a8d618"
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
    "url": "assets/js/10.a74a9e79.js",
    "revision": "9bf6876d789031868e1b0570fa8fcff0"
  },
  {
    "url": "assets/js/11.0a79391b.js",
    "revision": "d65c69d28601620c1d30dc6bb76f90d2"
  },
  {
    "url": "assets/js/12.cb07fb34.js",
    "revision": "cb861087ca414475e45e0d00bd968b90"
  },
  {
    "url": "assets/js/13.58e4d28b.js",
    "revision": "2715285fb70b646a49f0e3a49b8d7e65"
  },
  {
    "url": "assets/js/14.818d3e0c.js",
    "revision": "49b48801a094db505f76b777b3a9747d"
  },
  {
    "url": "assets/js/15.5367eaca.js",
    "revision": "0be4dd1138429d0c2df3e1746297f64d"
  },
  {
    "url": "assets/js/16.73613752.js",
    "revision": "91fac707746a633800e26764e3c0f73c"
  },
  {
    "url": "assets/js/17.18c76785.js",
    "revision": "b674805a6de35613ab2d48acb4fec977"
  },
  {
    "url": "assets/js/18.c89ff26e.js",
    "revision": "932d4767064f1e2431eeb3cdcbdcc59e"
  },
  {
    "url": "assets/js/19.cab9a41c.js",
    "revision": "d92f68954e5c2edd06027c5780979da4"
  },
  {
    "url": "assets/js/2.a1dd1ade.js",
    "revision": "0539ce82f5a57972647612cd3db20785"
  },
  {
    "url": "assets/js/20.ce0dfc35.js",
    "revision": "4fd50ef284425c576c6ae248a725dc72"
  },
  {
    "url": "assets/js/21.96890e25.js",
    "revision": "b47c6e439090a2c7355620905ee6d932"
  },
  {
    "url": "assets/js/22.ff6b93b6.js",
    "revision": "b911c455bdab16277bcb57709d9b5e69"
  },
  {
    "url": "assets/js/23.7f770397.js",
    "revision": "ca1646bf6fd2f3bec7aa50e5d478b6a6"
  },
  {
    "url": "assets/js/24.5a421da0.js",
    "revision": "2c06e3ea6b2bbe8943c1636aa5407b2b"
  },
  {
    "url": "assets/js/25.fe935cb1.js",
    "revision": "94c8476afa0b32ea20615c26bd127a8c"
  },
  {
    "url": "assets/js/26.3165d2ad.js",
    "revision": "bb79dfc5e28412193b85013cc91c90c9"
  },
  {
    "url": "assets/js/27.daf28aea.js",
    "revision": "190a0ba5511b36061e7d03df729c7475"
  },
  {
    "url": "assets/js/28.f51f3c99.js",
    "revision": "4b5f7fd3dbcb7dbfe104a16ce191dc45"
  },
  {
    "url": "assets/js/29.80541473.js",
    "revision": "16ea28de6fff8f4724ea2236e54ea79b"
  },
  {
    "url": "assets/js/3.c8b56d2b.js",
    "revision": "4b15d6565f864d5693f9712bdbadfdb1"
  },
  {
    "url": "assets/js/30.524427aa.js",
    "revision": "b4e01a4ccedd9796236f23c00afdb363"
  },
  {
    "url": "assets/js/31.1430d59a.js",
    "revision": "9d0e49510a3d454ac4cf13eb44d6f6ea"
  },
  {
    "url": "assets/js/32.e8efbe7d.js",
    "revision": "e026bb527b4a26d3849287275b789005"
  },
  {
    "url": "assets/js/33.597c4085.js",
    "revision": "8eda022dacc13824319a9bfddbc28aee"
  },
  {
    "url": "assets/js/34.142467b1.js",
    "revision": "fa4c6ee8671e6325986ea8a5a374fe3a"
  },
  {
    "url": "assets/js/35.af4196fc.js",
    "revision": "8fa595ace17f462689ab6f2d2b87b85c"
  },
  {
    "url": "assets/js/36.12d82cfd.js",
    "revision": "0b4ea05d424a340c840d362412820de7"
  },
  {
    "url": "assets/js/37.d92cf3bd.js",
    "revision": "4ca236b736cd66611fa64216bf5e4912"
  },
  {
    "url": "assets/js/38.45577809.js",
    "revision": "f264ac10ab37182f5cff12c4f022d852"
  },
  {
    "url": "assets/js/39.7cb20bed.js",
    "revision": "155565b4b1b31b1f56ad9411942ec240"
  },
  {
    "url": "assets/js/4.b2716bd7.js",
    "revision": "3b4c01d07a72fdd038f88f378e32fee4"
  },
  {
    "url": "assets/js/40.6359234e.js",
    "revision": "274e79bade74472435384f667d74be74"
  },
  {
    "url": "assets/js/41.6151e3db.js",
    "revision": "8f0a5303d318f9e8bab1102ea4025c9e"
  },
  {
    "url": "assets/js/42.d85e716e.js",
    "revision": "e93ca96fe231589efef8b9a8b39bf308"
  },
  {
    "url": "assets/js/43.1f32b959.js",
    "revision": "c4d4c304201e78abe1b4bb526f0e1f02"
  },
  {
    "url": "assets/js/44.d1520d5b.js",
    "revision": "98680626f4babadb1eec0d36cfb795cf"
  },
  {
    "url": "assets/js/45.1abaa5a8.js",
    "revision": "e04b777856f9c48f42983abd85531cf7"
  },
  {
    "url": "assets/js/46.4659fdf8.js",
    "revision": "ac27a789b29384900a6e6e38227acf63"
  },
  {
    "url": "assets/js/47.240e32cb.js",
    "revision": "4b12ab04f301c163e1adf5ee26bbf44d"
  },
  {
    "url": "assets/js/48.47d5fc20.js",
    "revision": "b5fa731818d4bce208e86ef5fb7a5736"
  },
  {
    "url": "assets/js/49.dbcc1221.js",
    "revision": "60c5d1f9638374a5020bb27cf208f39b"
  },
  {
    "url": "assets/js/5.527f495f.js",
    "revision": "8f686aba37909e99bb27455a4cde7ecd"
  },
  {
    "url": "assets/js/50.4623b9f8.js",
    "revision": "8940f70b8bac8c7654db8dd9a27140d6"
  },
  {
    "url": "assets/js/51.ad50d18f.js",
    "revision": "e150f6e91e2526df3243433383d4bccf"
  },
  {
    "url": "assets/js/52.81d9a56a.js",
    "revision": "c0fc9791d70adf292654b0bbfb4c1d19"
  },
  {
    "url": "assets/js/53.ecf536dd.js",
    "revision": "6e58f74c5050de54c11f6c9d4e716a29"
  },
  {
    "url": "assets/js/54.6c5f3fb9.js",
    "revision": "5e64e15f2cb434975494612a6792aafd"
  },
  {
    "url": "assets/js/55.b5f37315.js",
    "revision": "03d43206b2559874f4c643d9257734f8"
  },
  {
    "url": "assets/js/56.ed499643.js",
    "revision": "2a3e764e68ff9d313d29d5c3cc120973"
  },
  {
    "url": "assets/js/57.9d621680.js",
    "revision": "0f3fa88456a54b5ad50e2ffd368af8f3"
  },
  {
    "url": "assets/js/58.a4ad2b5e.js",
    "revision": "9fbd7e4fada7abc3f72877cab4a869e5"
  },
  {
    "url": "assets/js/59.8ad18081.js",
    "revision": "ba8f7bfd50c56b2adb66992fe8760c85"
  },
  {
    "url": "assets/js/6.f8ed3f28.js",
    "revision": "7ed6b62b0a51241c9c0d1b9db6a8cfdb"
  },
  {
    "url": "assets/js/60.35fabdae.js",
    "revision": "dbc244069703f1f7cad96040ce2cee0f"
  },
  {
    "url": "assets/js/61.228825d4.js",
    "revision": "2522a845e50665bccd61939f5d44ef44"
  },
  {
    "url": "assets/js/62.17a36e64.js",
    "revision": "2814e0db10d1d9cb127594cbd4bdab2b"
  },
  {
    "url": "assets/js/63.e06e846b.js",
    "revision": "deafc6559deea759087dc42f69e0d09c"
  },
  {
    "url": "assets/js/64.c4fb6327.js",
    "revision": "3cd97d56b91fe9573da6333bb7268616"
  },
  {
    "url": "assets/js/65.b8801279.js",
    "revision": "1ed7a740fb199f42e0cf02cc9005b3d9"
  },
  {
    "url": "assets/js/66.603d80a4.js",
    "revision": "7f8cb5aa9045343ec4056b7c53608851"
  },
  {
    "url": "assets/js/67.7785c728.js",
    "revision": "933c8f18935c3b559c94dfb5edab3499"
  },
  {
    "url": "assets/js/68.f90e71e6.js",
    "revision": "eb9ed53b1b6fc456c4e45ff1cbb48bf7"
  },
  {
    "url": "assets/js/69.dd7f4f1e.js",
    "revision": "0973a84907ad8c9b5dbb3ed33685ed62"
  },
  {
    "url": "assets/js/7.f8726a07.js",
    "revision": "65dc75faeea0595035abba5ddc9b7292"
  },
  {
    "url": "assets/js/70.6c32392a.js",
    "revision": "1854309fdd4d689ee2df2045923ad315"
  },
  {
    "url": "assets/js/71.2c42755b.js",
    "revision": "9b222020914293049cfe9dee2050ae36"
  },
  {
    "url": "assets/js/72.519125c8.js",
    "revision": "998e69127035a450b00043844e63af2f"
  },
  {
    "url": "assets/js/73.9aa8b9ff.js",
    "revision": "eb37d4a8921d279a70fe5deb1656224c"
  },
  {
    "url": "assets/js/74.00a8e36b.js",
    "revision": "5ab92687cf76b01deb109e89cbe96332"
  },
  {
    "url": "assets/js/75.03d2549e.js",
    "revision": "3e37920ca84735f3d86f3cd45831bce6"
  },
  {
    "url": "assets/js/76.0fcccd9a.js",
    "revision": "b07339483c83a279112865f800e4ff37"
  },
  {
    "url": "assets/js/77.5efd66d9.js",
    "revision": "3f4f5b9a7117d6d8393e9780a5a3e16e"
  },
  {
    "url": "assets/js/78.56e8f544.js",
    "revision": "64c3cff546baa5dc01092860c63a5b97"
  },
  {
    "url": "assets/js/79.afc8ce5b.js",
    "revision": "f5a27dc47a86359647462f7cdb135640"
  },
  {
    "url": "assets/js/8.fe792fea.js",
    "revision": "409ef27c085b3fb93e101476247350d2"
  },
  {
    "url": "assets/js/80.cac90301.js",
    "revision": "34e44fab06580d074e79deff3738cf3d"
  },
  {
    "url": "assets/js/81.e1544d3e.js",
    "revision": "bc672fb4b21ab33ff18c5318f155f05b"
  },
  {
    "url": "assets/js/82.fd79178a.js",
    "revision": "e7ec854645e0c087516d7236780e8213"
  },
  {
    "url": "assets/js/83.85296eb4.js",
    "revision": "d3a29a8fd47e83fc060c3a41105635d7"
  },
  {
    "url": "assets/js/84.5d915da3.js",
    "revision": "c49320ab6f9308804b45368f9be65601"
  },
  {
    "url": "assets/js/85.79240ee5.js",
    "revision": "325de93a79ddebd59bca55c10cca385a"
  },
  {
    "url": "assets/js/86.91a57f1b.js",
    "revision": "f4d5d6a7141fe0f2110af1288a9d38ef"
  },
  {
    "url": "assets/js/87.1aa700ed.js",
    "revision": "4ad288e2aa8b1d4d8da90032c5c2573e"
  },
  {
    "url": "assets/js/88.3dae552c.js",
    "revision": "4d92bf3a50c82eb10b86449f44421924"
  },
  {
    "url": "assets/js/89.559b0785.js",
    "revision": "800bcbe6d894b8a2045f6043a17712e8"
  },
  {
    "url": "assets/js/9.9bf52f76.js",
    "revision": "439923a4ba8f836cab7271eff1e52757"
  },
  {
    "url": "assets/js/90.50d9ea39.js",
    "revision": "6ee022bc044ee2795af9062a9dc4b21c"
  },
  {
    "url": "assets/js/91.379ac0e7.js",
    "revision": "54ef8cc9deaa8d36323a0e669268147d"
  },
  {
    "url": "assets/js/app.1a7a745c.js",
    "revision": "ce7a19b8cf0ff50807c0362c800b5422"
  },
  {
    "url": "bigdata/index.html",
    "revision": "683d305af7d83e9f40ddff5b3ca1a4d0"
  },
  {
    "url": "code/github.html",
    "revision": "2846b1e914fb8321cbcec12185845614"
  },
  {
    "url": "code/map.html",
    "revision": "a3d2618ecff822b2a3691b08f23ef274"
  },
  {
    "url": "code/nodejs.html",
    "revision": "e30fde5512db27b6a2ba34ece975cf60"
  },
  {
    "url": "datascience/data_safe&regulation.html",
    "revision": "d77f4d72c4d54af20403c151d93bc519"
  },
  {
    "url": "datascience/elk.html",
    "revision": "fed3325414ae31262dcf6fdb0178d256"
  },
  {
    "url": "datascience/hadoop.html",
    "revision": "2e426fb4fc911a9ad890f01a22f738dc"
  },
  {
    "url": "datascience/hash.html",
    "revision": "f7f3261ba3b0300cda881a253647e4c5"
  },
  {
    "url": "datascience/index.html",
    "revision": "1f9a831861b07628ae36b7c84c3d8f48"
  },
  {
    "url": "datascience/kafka.html",
    "revision": "66e3977f6a31dbc478c9abf06d63368e"
  },
  {
    "url": "datascience/kaggle.html",
    "revision": "c59d7986e8491e886704ecfd8ef326b9"
  },
  {
    "url": "datascience/linear_regression.html",
    "revision": "3749c4ca60d8eb9fc501eb6181c5a665"
  },
  {
    "url": "datascience/matplotlib.html",
    "revision": "32733f2831df733acc318a46f93234b8"
  },
  {
    "url": "datascience/ml_datapre.html",
    "revision": "e7e540c65f8fc5a2adb1d420599d400f"
  },
  {
    "url": "datascience/ml_e.html",
    "revision": "7d708390b69c37f0694cffa89443c96e"
  },
  {
    "url": "datascience/ml_math.html",
    "revision": "385709b8360ba978a52658add1bcf207"
  },
  {
    "url": "datascience/ml_t.html",
    "revision": "80ce7db503535f2b6fc7921b1abe6bf8"
  },
  {
    "url": "datascience/ml_traditional.html",
    "revision": "1f0b306ad80c4c74d76984734d6ec418"
  },
  {
    "url": "datascience/numpy.html",
    "revision": "89105ec488f4b2398f24d0efd8509d90"
  },
  {
    "url": "datascience/pandas.html",
    "revision": "cae34524aff72c44476862227745c119"
  },
  {
    "url": "datascience/pyecharts.html",
    "revision": "660455a7e72fcf3d635f60df7da651de"
  },
  {
    "url": "datascience/seaborn.html",
    "revision": "442147b9fff34088f41ca68cbbc0651d"
  },
  {
    "url": "datascience/spark.html",
    "revision": "af759abbb4316544cada6962200dbc99"
  },
  {
    "url": "datascience/tushare2mysql.html",
    "revision": "7d79676eb94c3fd461d593b5e4088823"
  },
  {
    "url": "datascience/vscode.html",
    "revision": "d75b8f7dbd38d12c668c183a90fe5241"
  },
  {
    "url": "datascience/大数据.html",
    "revision": "bf047e963f599f12056498f043632895"
  },
  {
    "url": "datascience/特征工程.html",
    "revision": "59f476b1f3a7afcc0cd8769c61bcca5f"
  },
  {
    "url": "datascience/神经网络.html",
    "revision": "9e01ba2fad1547e9c4c31be85e961b86"
  },
  {
    "url": "deploy/git.html",
    "revision": "1ddb6fb31e58eab940c0cf8df2f012d5"
  },
  {
    "url": "deploy/index.html",
    "revision": "f3daf31229e8f43b8dc397782f66dda7"
  },
  {
    "url": "deploy/linux.html",
    "revision": "9fdf928d58153b0e751ba9a439566ed7"
  },
  {
    "url": "deploy/mysql.html",
    "revision": "8f0a3b7ac544324c2c6340e49816ddc4"
  },
  {
    "url": "deploy/nginx.html",
    "revision": "7b7fc943d986af71def7c9e2ac14e391"
  },
  {
    "url": "deploy/redis.html",
    "revision": "a8dbe3cb23f1b6a9f1964da2df35444e"
  },
  {
    "url": "finance/financial_engineering.html",
    "revision": "2c9bee1c449b53719a26611eb50b8e98"
  },
  {
    "url": "finance/fintech.html",
    "revision": "f60ed28d8e85006f37e67ca96c044557"
  },
  {
    "url": "finance/history/index.html",
    "revision": "5ca5c3b66ab4a0920f180d97eb2e6e30"
  },
  {
    "url": "finance/index.html",
    "revision": "6df28055da3f839c701336e075d07b2e"
  },
  {
    "url": "finance/invest.html",
    "revision": "63b2cb2161a5722334897999e31550c9"
  },
  {
    "url": "finance/market.html",
    "revision": "c72bbe90e88b705034a19bc1b2ec7ed2"
  },
  {
    "url": "finance/quant.html",
    "revision": "251fc2ce75b08163e77b45223fca50e5"
  },
  {
    "url": "finance/spend.html",
    "revision": "24e62600a6f6526c116c321886976fa4"
  },
  {
    "url": "finance/互联网金融.html",
    "revision": "40eb1ce6340d600a7d2797bfb20c6213"
  },
  {
    "url": "finance/供应链.html",
    "revision": "f3c0e4ce8275dbbdd0d44c59f4d0aba1"
  },
  {
    "url": "finance/如何激励金融科技人才.html",
    "revision": "3225bf0c32bb88582e9769a00100cbe2"
  },
  {
    "url": "fintech/aiinvest/index.html",
    "revision": "e0c12ed191441d2b6850d804511a0064"
  },
  {
    "url": "fintech/blockchain.html",
    "revision": "9c9340ba2d151de8110204354b40b512"
  },
  {
    "url": "fintech/blockchain/dapp.html",
    "revision": "1fb919847b5f09501c6c109c557a4657"
  },
  {
    "url": "fintech/blockchain/index.html",
    "revision": "64c9facbd876f4854220e95f883c70f1"
  },
  {
    "url": "fintech/blockchain/overall.html",
    "revision": "dead5475f9cc4c902d4e7b76c98c8970"
  },
  {
    "url": "fintech/blockchain/smartcontracts.html",
    "revision": "3eb889355abc4921ddb3432839d5c5db"
  },
  {
    "url": "fintech/index.html",
    "revision": "80f9b22d21bab246adb0c8a0b5fa4569"
  },
  {
    "url": "fintech/internet_finance.html",
    "revision": "774ead7155e97918e7ae76fc19f941fd"
  },
  {
    "url": "fintech/p2p.html",
    "revision": "17ad4487e4912845f99d51552a28331b"
  },
  {
    "url": "guide/index.html",
    "revision": "73107fdf1453311e86b653b746f60bf0"
  },
  {
    "url": "index.html",
    "revision": "d46d21c418fc5a637e6a02e67567212b"
  },
  {
    "url": "jedi.jpg",
    "revision": "3e1e5446a3ef67eaeca6f892f644c42a"
  },
  {
    "url": "other/wine.html",
    "revision": "0084c0254d782cd4a76a1d689acda158"
  },
  {
    "url": "other/英语作文.html",
    "revision": "7f8fd768d23ed906b1def2c96f0c12f2"
  },
  {
    "url": "python/aotoaction.html",
    "revision": "2ed93018c71add1216475116ec040a08"
  },
  {
    "url": "python/Charles.html",
    "revision": "b589af145dfe2f977f9710d44c3bd807"
  },
  {
    "url": "python/crawler.html",
    "revision": "24d265691dc598c0b82e2da47b1e41ca"
  },
  {
    "url": "python/django_orm.html",
    "revision": "477df81ded9d13a4e52079514248878c"
  },
  {
    "url": "python/django_restful.html",
    "revision": "024dbd94a6414b34d97f20af2022503d"
  },
  {
    "url": "python/django.html",
    "revision": "50ce9cf3c97a4b28276dc8708705c703"
  },
  {
    "url": "python/fastapi.html",
    "revision": "9536566763e789a960287f7e59446039"
  },
  {
    "url": "python/flask.html",
    "revision": "e81966938e0d480969a0d86d7fa2c6e1"
  },
  {
    "url": "python/index.html",
    "revision": "268481a8291560cece9dd161aa232b6d"
  },
  {
    "url": "python/magic_methods.html",
    "revision": "f6ab3670b4cee25002091dcbbbad2116"
  },
  {
    "url": "python/pandas+sqlalchemy.html",
    "revision": "56fd5f82c5f993a2b6287a262a550855"
  },
  {
    "url": "python/pyecharts.html",
    "revision": "2701cc64219d7d7b87e09cf3026eb4ba"
  },
  {
    "url": "python/python_data.html",
    "revision": "f27c73c6c50d21248c1fc7a05ef15cef"
  },
  {
    "url": "python/python_def.html",
    "revision": "54b43f2558cc1eab95744f17759e8b56"
  },
  {
    "url": "python/python_package.html",
    "revision": "d08bb792d3b6115278ce553d3d2cc76b"
  },
  {
    "url": "python/redis.html",
    "revision": "621c44787fc764d3dab050fac71a9ea3"
  },
  {
    "url": "python/spider_fdmt.html",
    "revision": "04dca24e9a750e14878c1742c31cede7"
  },
  {
    "url": "python/spider_readme.html",
    "revision": "f6253844616830179f9f1333f731e59b"
  },
  {
    "url": "python/spider.html",
    "revision": "b4cee5f3da9ec9a53f6d7b41c1f99211"
  },
  {
    "url": "python/sqlalchemy.html",
    "revision": "6b017c569d5cbc38c35c653b9dc65cd7"
  },
  {
    "url": "python/time.html",
    "revision": "2a26505bfc5934385cde5523669e6738"
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
