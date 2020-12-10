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
    "revision": "eb4836425217d83c441a89ba438c264b"
  },
  {
    "url": "app/frontend/django.html",
    "revision": "b93defb99999e13542bc7d251c6a622c"
  },
  {
    "url": "app/frontend/echartsjs.html",
    "revision": "d96d151fec24f8eedf988b3996467bab"
  },
  {
    "url": "app/frontend/index.html",
    "revision": "1195c2cac5e55b99985ca731ccb08616"
  },
  {
    "url": "app/frontend/start.html",
    "revision": "8f0e8a682f89cf3d0c08a2a90a1cba5e"
  },
  {
    "url": "app/frontend/vuejs.html",
    "revision": "88058ee0669fa99e05ea8f669b1d6acd"
  },
  {
    "url": "app/index.html",
    "revision": "66b282859c14ea8c8198ddc21645a48e"
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
    "url": "assets/js/10.8f7dd392.js",
    "revision": "d69be218af9f31e9e00946cd9a0ca638"
  },
  {
    "url": "assets/js/100.c434a901.js",
    "revision": "f32a424a09f3aa8d44294b013d591bde"
  },
  {
    "url": "assets/js/101.d2b04348.js",
    "revision": "4ff1e3af3bae82d37d3a7cc914c50102"
  },
  {
    "url": "assets/js/102.d9973103.js",
    "revision": "8fb057573412d09288d25970f973f2c1"
  },
  {
    "url": "assets/js/11.5bcc6456.js",
    "revision": "548b92cba1e9b58a51d25e72fae4519d"
  },
  {
    "url": "assets/js/12.3bd99830.js",
    "revision": "8f8942a7d98d4bbc5b1d3e1b877eed04"
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
    "url": "assets/js/19.0fb93c6a.js",
    "revision": "6a43eda4262e592b00eacb404efbaa0a"
  },
  {
    "url": "assets/js/2.92dfa6ab.js",
    "revision": "05b7650e83adcf7407f90cda3de651f3"
  },
  {
    "url": "assets/js/20.17915df6.js",
    "revision": "f647f4dc620d9dce4766d0fe0994253a"
  },
  {
    "url": "assets/js/21.e894d29e.js",
    "revision": "a5f89919765167a806a12bcbb84260e0"
  },
  {
    "url": "assets/js/22.a0398f77.js",
    "revision": "dc34b786bd7e71a317c4752fb080a238"
  },
  {
    "url": "assets/js/23.83ef1c42.js",
    "revision": "4c4cbff62529b1cbf92830cffecbe393"
  },
  {
    "url": "assets/js/24.a48916b1.js",
    "revision": "06c59b2a60fda70b7e5b8571b5118662"
  },
  {
    "url": "assets/js/25.0fd4797d.js",
    "revision": "47424607ca9231acbe1fbf98a80d8bfa"
  },
  {
    "url": "assets/js/26.0a702d47.js",
    "revision": "f6172809a82611141b0f2215d45d3b90"
  },
  {
    "url": "assets/js/27.8dbda8f3.js",
    "revision": "aec4b25204f7d737834f46314e3326d5"
  },
  {
    "url": "assets/js/28.28be4d7f.js",
    "revision": "a748f37d2709116691b23e47acf00576"
  },
  {
    "url": "assets/js/29.2306de88.js",
    "revision": "a92f3d41afc0c56d7727cafbb5eada17"
  },
  {
    "url": "assets/js/3.739af569.js",
    "revision": "2efafb6fbb5f3c5549c3229e894682b8"
  },
  {
    "url": "assets/js/30.3cf60e90.js",
    "revision": "7b1930ceec6e16c425d8183398708e21"
  },
  {
    "url": "assets/js/31.42b7e572.js",
    "revision": "955363232eeb0fe59bcca1c8349f32d5"
  },
  {
    "url": "assets/js/32.839566a7.js",
    "revision": "264252cf07d0ba82ebae7bd707bbee07"
  },
  {
    "url": "assets/js/33.2d6c753c.js",
    "revision": "fc516344ba35fb164707900ea15b1638"
  },
  {
    "url": "assets/js/34.5a213df0.js",
    "revision": "365791152439aedd4217f9705621ed90"
  },
  {
    "url": "assets/js/35.71f6d20d.js",
    "revision": "776c30fe187f678baf8673c35ca0dd0a"
  },
  {
    "url": "assets/js/36.9fe3b906.js",
    "revision": "40ba7c1de953989ead4df60ad4d7bd2f"
  },
  {
    "url": "assets/js/37.f73b271f.js",
    "revision": "3a7d4b659e6f6b55c354b8d96dc9d90f"
  },
  {
    "url": "assets/js/38.8cbd44b9.js",
    "revision": "86f83701dbf57eda0d21850dbf4d49fb"
  },
  {
    "url": "assets/js/39.8c9d20ab.js",
    "revision": "ede5cfa8822ee43f7c6dcc554cbd97ac"
  },
  {
    "url": "assets/js/4.4bbb4cc7.js",
    "revision": "b7b4d732a6143214d7e86de4051ab8f4"
  },
  {
    "url": "assets/js/40.3005039a.js",
    "revision": "26811a708efb5dd9c87530ffa53c017f"
  },
  {
    "url": "assets/js/41.6d4dd97f.js",
    "revision": "9ab97fe5ee370ca7e92199452bce54dd"
  },
  {
    "url": "assets/js/42.9179eee6.js",
    "revision": "30c5838031ed7d415901da591da66dea"
  },
  {
    "url": "assets/js/43.ef076dac.js",
    "revision": "07c00a13a35dcdcfe737d9efaa693a60"
  },
  {
    "url": "assets/js/44.fc8fcd67.js",
    "revision": "709d821e84d9ef11c80722d0e76a344e"
  },
  {
    "url": "assets/js/45.b2bdde68.js",
    "revision": "1a078c1f48888db7e3a87abfd2a725be"
  },
  {
    "url": "assets/js/46.a9403448.js",
    "revision": "51fe4d830746af3512343b8a59a6a8f2"
  },
  {
    "url": "assets/js/47.0772d1ec.js",
    "revision": "5540159b7d9c60217ebe84b7aef0b42b"
  },
  {
    "url": "assets/js/48.e8e07c2b.js",
    "revision": "861ea20053dcb4c46d8887eb8209accb"
  },
  {
    "url": "assets/js/49.da978f8b.js",
    "revision": "f8cab2b0b3be66dbe1553264181f9c12"
  },
  {
    "url": "assets/js/5.5387353d.js",
    "revision": "dcd6e4b400c9ce540a5d14d1bed68eaf"
  },
  {
    "url": "assets/js/50.e022e2ff.js",
    "revision": "96a15e1b447d7db598e2c7f2b7455559"
  },
  {
    "url": "assets/js/51.3cf89c3d.js",
    "revision": "037436a7c711691218b265381c670763"
  },
  {
    "url": "assets/js/52.7d149ca8.js",
    "revision": "10fef5c23b24264407d12090d4e8a8b7"
  },
  {
    "url": "assets/js/53.99f382b1.js",
    "revision": "d09ddee1ead4ceb0245f177f930ab4e5"
  },
  {
    "url": "assets/js/54.e7a2aaac.js",
    "revision": "594af19b0c648db57b72c0d48755d0b3"
  },
  {
    "url": "assets/js/55.e41dd528.js",
    "revision": "ec9f9dd348b30a8a5721b6c74ad13718"
  },
  {
    "url": "assets/js/56.05873fbe.js",
    "revision": "b3017941912ce1eb98ddcf4648d2d31c"
  },
  {
    "url": "assets/js/57.4782f474.js",
    "revision": "9079fb475e60461c6242155e91faa9ae"
  },
  {
    "url": "assets/js/58.9362f151.js",
    "revision": "204bc29d22f244d516ca97872b9de8de"
  },
  {
    "url": "assets/js/59.be7576d9.js",
    "revision": "81fa48cbcff637fae03b88126a941562"
  },
  {
    "url": "assets/js/6.1f43dd38.js",
    "revision": "340084be7dca90b6ab487171890a24e1"
  },
  {
    "url": "assets/js/60.882d916b.js",
    "revision": "6bb3a5107e2a8f55a22423b8fc8d1f58"
  },
  {
    "url": "assets/js/61.75274ed3.js",
    "revision": "17d18c313e3a70aab0fa23b0dca5aef3"
  },
  {
    "url": "assets/js/62.4496db13.js",
    "revision": "c4282fbc675737b3eae8b266f687249f"
  },
  {
    "url": "assets/js/63.3e4dab1d.js",
    "revision": "eca2702c3c1a12f9df9c2c06e6a1dd52"
  },
  {
    "url": "assets/js/64.5f06b026.js",
    "revision": "94d0e2f89cb3ab99e293a0a4a05a0c25"
  },
  {
    "url": "assets/js/65.422a8dfc.js",
    "revision": "0e7a746876b2ea67afea27f51b06c80c"
  },
  {
    "url": "assets/js/66.181b4791.js",
    "revision": "9e41d7ce1f8b353dfafab6eb17a12223"
  },
  {
    "url": "assets/js/67.aaa95a3a.js",
    "revision": "b97fe31b525b57435813b799b7985509"
  },
  {
    "url": "assets/js/68.49e332b7.js",
    "revision": "643948cbcde7fb1605f672161ecf72e8"
  },
  {
    "url": "assets/js/69.1da7d5ef.js",
    "revision": "17227da4f16919e090973f3c6cb0a263"
  },
  {
    "url": "assets/js/7.53752804.js",
    "revision": "2be75165094321d2470f06fe9a967382"
  },
  {
    "url": "assets/js/70.90df50f6.js",
    "revision": "ed5b96eab85c6e784273247814eb173f"
  },
  {
    "url": "assets/js/71.2a45086e.js",
    "revision": "17cefbd65517d9ee05215fc2ee59c4c0"
  },
  {
    "url": "assets/js/72.b7098fa0.js",
    "revision": "0a15752e6d869a3de18578e59123fcd1"
  },
  {
    "url": "assets/js/73.387f00a5.js",
    "revision": "789835dc431b0c2b3e447fae37afb007"
  },
  {
    "url": "assets/js/74.2d9fd60c.js",
    "revision": "c9fd5fa76f9917fe28f6b48309e7110c"
  },
  {
    "url": "assets/js/75.4e5d957b.js",
    "revision": "0af9f0ac964c6d63c4457a96f28a56ef"
  },
  {
    "url": "assets/js/76.8344996d.js",
    "revision": "88471b3beeb34dd7e8a38e84124deaa4"
  },
  {
    "url": "assets/js/77.3085e2e4.js",
    "revision": "15f1633eb186da6a33ce718fa50f0437"
  },
  {
    "url": "assets/js/78.7167b367.js",
    "revision": "fd1c03f070b80557dfb1cad8f353617f"
  },
  {
    "url": "assets/js/79.38197eaa.js",
    "revision": "9fd0d96fa82910898416d251f5a3bf8f"
  },
  {
    "url": "assets/js/8.0d1ab4cc.js",
    "revision": "4cdf4c2b481a687e6913d31bee20c7e5"
  },
  {
    "url": "assets/js/80.4346e477.js",
    "revision": "f497de8abb677192e4883e420b85ea95"
  },
  {
    "url": "assets/js/81.69e0fb22.js",
    "revision": "b3d67f3203690b14f744431b7f172ff8"
  },
  {
    "url": "assets/js/82.a5560ac3.js",
    "revision": "c15bcb77e45d1bfba4d2f28cf76a9e7d"
  },
  {
    "url": "assets/js/83.be33ef95.js",
    "revision": "1facc0bc07d00774c34b3d2284c02c6d"
  },
  {
    "url": "assets/js/84.14d416fc.js",
    "revision": "5083d4d74fc386670dede3631dfc9371"
  },
  {
    "url": "assets/js/85.c9e0ab28.js",
    "revision": "dd6f62d004cc82fb5f2451da3e1d5f0a"
  },
  {
    "url": "assets/js/86.4b174219.js",
    "revision": "f07b6afedd7fbfb78a0d33fd5ebcaa27"
  },
  {
    "url": "assets/js/87.b98ab0de.js",
    "revision": "dc2905ea05682a8f36381302fdd36e16"
  },
  {
    "url": "assets/js/88.9324d65b.js",
    "revision": "dd9848397a6c193c5ba064efe4a961b9"
  },
  {
    "url": "assets/js/89.f47f8d5c.js",
    "revision": "df706d2fd10f91603f4cb3901a2ce541"
  },
  {
    "url": "assets/js/9.44d076d1.js",
    "revision": "87c6abf8fc7416272f3a0380a08c9f7b"
  },
  {
    "url": "assets/js/90.be168f94.js",
    "revision": "bc0817b772c86de98c2fcd6021cbf700"
  },
  {
    "url": "assets/js/91.7eaffaae.js",
    "revision": "d95be88d3b23244bb7f7f3ca31476fc0"
  },
  {
    "url": "assets/js/92.b7bdf37f.js",
    "revision": "12cb7def1f92ecc5a94e61e8a71d8802"
  },
  {
    "url": "assets/js/93.22efead7.js",
    "revision": "c05e1165dc4dde7dd72e0447d6809446"
  },
  {
    "url": "assets/js/94.f76304e0.js",
    "revision": "c2a7b7edba4b9a7fdd23bf374713a706"
  },
  {
    "url": "assets/js/95.699dc8f7.js",
    "revision": "a105b1e811cea99c4d6de9d4b5becd7e"
  },
  {
    "url": "assets/js/96.ea43f041.js",
    "revision": "17c45e3ffcdb00876b6569c0b9d6568a"
  },
  {
    "url": "assets/js/97.5b43d7dc.js",
    "revision": "bf0ff512a1ba94adfa6f28ef992f5826"
  },
  {
    "url": "assets/js/98.9387dc6f.js",
    "revision": "6749d1830e0c88ed76a9ad30c56845c9"
  },
  {
    "url": "assets/js/99.5571a002.js",
    "revision": "c3bc2c026cf64337eb7a0547ebe5d32d"
  },
  {
    "url": "assets/js/app.7dab8284.js",
    "revision": "6e357bd4f7b543685852fe872107ec7f"
  },
  {
    "url": "bigdata/index.html",
    "revision": "7cd509d3daa57cb20f3b8e7cda134940"
  },
  {
    "url": "code/github.html",
    "revision": "6112763947fbe8351bcd4f3001772ff0"
  },
  {
    "url": "code/map.html",
    "revision": "e3c6a701b1cb881fae50ef00c96c3cfa"
  },
  {
    "url": "code/nodejs.html",
    "revision": "7b149dd4548e498106fb15e36eec97c3"
  },
  {
    "url": "code/vue.html",
    "revision": "4c4e0018da0aaf2212d052980e1a47f5"
  },
  {
    "url": "datascience/data_safe&regulation-mac的MacBook Pro.html",
    "revision": "102f363ad249b54ff0fd54061905aa6e"
  },
  {
    "url": "datascience/data_safe&regulation.html",
    "revision": "3a56f35d9e771e78a18e7d11c20530ef"
  },
  {
    "url": "datascience/eda.html",
    "revision": "8e4bc84f9aef3bcbd4bd0eb1b77af3f6"
  },
  {
    "url": "datascience/elk.html",
    "revision": "4b62060d76da374e9a8fb9f98fa13ed7"
  },
  {
    "url": "datascience/hadoop.html",
    "revision": "b26234bde35dc65e79b05099834778d9"
  },
  {
    "url": "datascience/hash.html",
    "revision": "466a6d97e54e024937ba9f1d45ff4f63"
  },
  {
    "url": "datascience/index.html",
    "revision": "d86928644c39f87767ec084dfaa46edd"
  },
  {
    "url": "datascience/kafka.html",
    "revision": "11d1f1d501c9ad9fe68a7242c3739598"
  },
  {
    "url": "datascience/kaggle.html",
    "revision": "ee3462187f478312eec13a6c1abb5fd8"
  },
  {
    "url": "datascience/linear_regression.html",
    "revision": "961eb95c28077faafc3a8d898b532272"
  },
  {
    "url": "datascience/matplotlib.html",
    "revision": "90d0ce5015639bbf17db0917d2aaf591"
  },
  {
    "url": "datascience/ml_datapre.html",
    "revision": "da43781d869eeb04f145a13f436b8909"
  },
  {
    "url": "datascience/ml_e.html",
    "revision": "c239542c2718f25a0439577e76690e94"
  },
  {
    "url": "datascience/ml_math.html",
    "revision": "5f1c77344a2d7b462d96840a5e91df36"
  },
  {
    "url": "datascience/ml_t.html",
    "revision": "d90dd39cd8a66a98f056969294c512e9"
  },
  {
    "url": "datascience/ml_traditional.html",
    "revision": "0c8542df3457f5db53ba773077bb27ec"
  },
  {
    "url": "datascience/numpy.html",
    "revision": "bece6a8fee267a6bb304bffbf8108dba"
  },
  {
    "url": "datascience/pandas.html",
    "revision": "a80f02ab678dbbd9963663017f13c27b"
  },
  {
    "url": "datascience/plotly.html",
    "revision": "f337834ed9c23874ca5125d5d422225d"
  },
  {
    "url": "datascience/pyecharts.html",
    "revision": "db9c533b85f37165c893af0b56096ad5"
  },
  {
    "url": "datascience/seaborn.html",
    "revision": "19cd7db3543075afa5cbac94982c376c"
  },
  {
    "url": "datascience/spark.html",
    "revision": "a95c24eda943b97c3de2c718064c317c"
  },
  {
    "url": "datascience/timeseries.html",
    "revision": "06a31a24eff782d707cebdeab0650628"
  },
  {
    "url": "datascience/tushare2mysql.html",
    "revision": "43d500d56826c133aac574b464299137"
  },
  {
    "url": "datascience/vscode.html",
    "revision": "b6e29387054fa765c195990b5eb8418b"
  },
  {
    "url": "datascience/大数据.html",
    "revision": "1cec0ca466a19a4f209d813fc95d7fe9"
  },
  {
    "url": "datascience/特征工程.html",
    "revision": "2ac5d43e0206cea1402a892818da2329"
  },
  {
    "url": "datascience/神经网络.html",
    "revision": "85e56c0d9a56875b644f50478b46ab9e"
  },
  {
    "url": "deploy/ab.html",
    "revision": "4411b63a527ed16857fd1838f3d37320"
  },
  {
    "url": "deploy/git.html",
    "revision": "6812675111362bc17217d27adaa3afad"
  },
  {
    "url": "deploy/https.html",
    "revision": "6311c1d3a93156c19143892188c9b823"
  },
  {
    "url": "deploy/index.html",
    "revision": "8614d8100d1ff8cbda68e42604ff0241"
  },
  {
    "url": "deploy/k8s.html",
    "revision": "0615fac783094ca19f9905f7c42a0dbf"
  },
  {
    "url": "deploy/linux.html",
    "revision": "f9878de30ad593f66bd7b01642bd659f"
  },
  {
    "url": "deploy/mysql.html",
    "revision": "99e3b88c40e0e035779cdcf157cf01fd"
  },
  {
    "url": "deploy/nginx.html",
    "revision": "82944591b45bf490488952b43d41f290"
  },
  {
    "url": "deploy/redis.html",
    "revision": "e7447f0c6321c98a887b227fd50b0b0b"
  },
  {
    "url": "finance/financial_engineering.html",
    "revision": "ee3d6ec203d79247beb4e87f13961c7c"
  },
  {
    "url": "finance/fintech.html",
    "revision": "d2f149cf8421aa64fe2df824f6d03d6a"
  },
  {
    "url": "finance/history/index.html",
    "revision": "8745f2a3e0c0da8e6131aa85bd5d962f"
  },
  {
    "url": "finance/index.html",
    "revision": "e2909a10cb88da41c3c4371fdd82cbbe"
  },
  {
    "url": "finance/invest.html",
    "revision": "42471e75ce981c5ae3d68f6eb77d7317"
  },
  {
    "url": "finance/macroeconomy.html",
    "revision": "15282ab26a0c32e6c60e4d20d2b1ed90"
  },
  {
    "url": "finance/market.html",
    "revision": "ef6b0a555e7b9e47c037e0628c5e9dfd"
  },
  {
    "url": "finance/quant.html",
    "revision": "8ef71e05b4564f56c81673309318cc79"
  },
  {
    "url": "finance/spend.html",
    "revision": "55008adf5f87e930ecf8a10c6f873334"
  },
  {
    "url": "finance/互联网金融.html",
    "revision": "969e81d39e968ad007d7c11b4d8f9518"
  },
  {
    "url": "finance/供应链.html",
    "revision": "47c4d471d491d2a01186b45c0b87b9d7"
  },
  {
    "url": "finance/如何激励金融科技人才.html",
    "revision": "6610e2fd9eb8ed8c8c8235b1a3ad6418"
  },
  {
    "url": "fintech/aiinvest/index.html",
    "revision": "821bdb22a8057d33f35863f90717baf6"
  },
  {
    "url": "fintech/blockchain.html",
    "revision": "7b505b24c43403068fdb046dd820a61c"
  },
  {
    "url": "fintech/blockchain/dapp.html",
    "revision": "1f564107a7f9ce46d6b57a6cfc016041"
  },
  {
    "url": "fintech/blockchain/index.html",
    "revision": "59a544c27028cb6a95d60bf547f17716"
  },
  {
    "url": "fintech/blockchain/overall.html",
    "revision": "8ecc7588bc46b7ca2c4f39b90e3af7c7"
  },
  {
    "url": "fintech/blockchain/smartcontracts.html",
    "revision": "568e3812b32e715d88047d20d08e2563"
  },
  {
    "url": "fintech/index.html",
    "revision": "7661ec22434ae2b40a98239011034db6"
  },
  {
    "url": "fintech/internet_finance.html",
    "revision": "7bf41941a0eece7b6ea728f1fc309086"
  },
  {
    "url": "fintech/p2p.html",
    "revision": "7e92beab6b4fd4bac47199292de9cec8"
  },
  {
    "url": "guide/index.html",
    "revision": "7852ffde4601a56558741bd02a009835"
  },
  {
    "url": "index.html",
    "revision": "f6cb12529436b875ca97164337d5406d"
  },
  {
    "url": "jedi.jpg",
    "revision": "3e1e5446a3ef67eaeca6f892f644c42a"
  },
  {
    "url": "other/wine.html",
    "revision": "3005315f51bf7e27b45f0a20675b6a2a"
  },
  {
    "url": "other/英语作文.html",
    "revision": "0c9627930325863fd409e6b373f9cded"
  },
  {
    "url": "python/aotoaction.html",
    "revision": "c78ac5d88164800158bc8a29217fbe0b"
  },
  {
    "url": "python/Charles.html",
    "revision": "c5cd56a33edcafb6352525e63722634a"
  },
  {
    "url": "python/crawler.html",
    "revision": "32c4cdb93fce1fd8628506d5ed38a69f"
  },
  {
    "url": "python/django_orm.html",
    "revision": "79b238d30ae4b85087f814cf3825f98e"
  },
  {
    "url": "python/django_restful.html",
    "revision": "2956b7f6836099b19eaa18495b267be1"
  },
  {
    "url": "python/django.html",
    "revision": "39211d3b90bbecea02b5d1b60a63b594"
  },
  {
    "url": "python/fastapi.html",
    "revision": "a4451126fedcb3dd9ec1974d072ce8c4"
  },
  {
    "url": "python/flask.html",
    "revision": "f0938a12ec285fd1893af66cbe7bc148"
  },
  {
    "url": "python/index.html",
    "revision": "4ae548499652b9edf8c860327ee6a825"
  },
  {
    "url": "python/magic_methods.html",
    "revision": "d50b3f108c11f90dd660098e718de36c"
  },
  {
    "url": "python/pandas+sqlalchemy.html",
    "revision": "4af355ef94f765826c276f0268be10e6"
  },
  {
    "url": "python/python_data.html",
    "revision": "e823549dd6d21baefc06f1e236864094"
  },
  {
    "url": "python/python_def.html",
    "revision": "337b6fb243cc6be16351b20433ed7043"
  },
  {
    "url": "python/python_package.html",
    "revision": "866af50f29c0e9fb296682240513f499"
  },
  {
    "url": "python/spider_fdmt.html",
    "revision": "f1406b05a7d8f389f3378e3f6caf2e45"
  },
  {
    "url": "python/spider_readme.html",
    "revision": "2ce75e43d9fe37e9dccccb1e357fa2e3"
  },
  {
    "url": "python/spider.html",
    "revision": "45bda9753a487ac65a4a9327a1e308df"
  },
  {
    "url": "python/sqlalchemy.html",
    "revision": "7d505d049d396626c49df35f402a3977"
  },
  {
    "url": "python/time.html",
    "revision": "17f964276b579ab0a11fa03d78ee8ba0"
  },
  {
    "url": "python/usual.html",
    "revision": "9aa86e183bdea0a2b7945902308e1600"
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
