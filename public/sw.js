if(!self.define){let e,a={};const i=(i,c)=>(i=new URL(i+".js",c).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,t)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(a[s])return;let n={};const d=e=>i(e,s),r={module:{uri:s},exports:n,require:d};a[s]=Promise.all(c.map((e=>r[e]||d(e)))).then((e=>(t(...e),n)))}}define(["./workbox-d50ca814"],(function(e){"use strict";importScripts("fallback-Jlb5aF-dmpvbD_oS_JLek.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"5e92fea61445814920aa622d8e3b251e"},{url:"/_next/static/Jlb5aF-dmpvbD_oS_JLek/_buildManifest.js",revision:"de757235a218aa20e4bbe41ecee06163"},{url:"/_next/static/Jlb5aF-dmpvbD_oS_JLek/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/117-c4cae0e78aa73d17.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/461-cc56c93c0a58660d.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/471-7a8eae5abc58c90e.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/554-8eb39a0f1595f598.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/583-bf08235c8ffd19f2.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/604-c57559e6cf5d5c16.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/807-a96ee681499ccbcc.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/832-3a6719b3d6a9efba.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/878-dffbd351610c2626.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/882-2bd4455429e97c9e.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/972-8c2d567cc0cc9012.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/app/_not-found/page-c1bbe1b4bc8170a6.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/app/about/page-e4ed76bc4f3573f7.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/app/authenticate/page-d48e1030da6efb9a.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/app/bug-bounty/page-babdc03a466da652.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/app/calculate/page-23ecc018a043085c.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/app/coins/%5Bname%5D/page-750127c5a996b701.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/app/coins/page-1a0a1cf835822aac.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/app/contact-us/page-af12a8496efe8ce7.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/app/download/page-eb24f6f2884e1e6c.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/app/faq/page-dc80db02163671de.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/app/fee/page-82afc353bdd63245.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/app/job/%5Btitle%5D/page-681ea39ce22ad32f.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/app/job/page-e9f5b07019884393.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/app/layout-552531b584d98d8a.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/app/not-found-5a1b6a92500ccfd9.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/app/page-a79fb272085421c5.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/app/rules/page-8e581a089597ae4f.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/app/security/page-030aec7d242f5dcf.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/app/wheel-luck/page-874a0681275168ff.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/fd9d1056-dec309e751652f31.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/main-2791e546862f67a3.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/main-app-f2961d0cbf3171ca.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/pages/_app-72b849fbd24ac258.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/pages/_error-7ba65e1336b92748.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-38f7fd6a4ecd1421.js",revision:"Jlb5aF-dmpvbD_oS_JLek"},{url:"/_next/static/css/134311cf2c652910.css",revision:"134311cf2c652910"},{url:"/_next/static/css/1b5d19eeadf69a6f.css",revision:"1b5d19eeadf69a6f"},{url:"/_next/static/css/2cd5d845e5c65062.css",revision:"2cd5d845e5c65062"},{url:"/_next/static/css/3a24c022f69a36a9.css",revision:"3a24c022f69a36a9"},{url:"/_next/static/media/Asset 1@300x 2.22528774.png",revision:"169af6dadf567dd6333344f314625d32"},{url:"/_next/static/media/Asset.54df029b.png",revision:"67134cad614e28babe2cdd780b6d5021"},{url:"/_next/static/media/Bronze.fe34f526.png",revision:"ff8d93c99cfc772ffa8b9b48ee4206d8"},{url:"/_next/static/media/Crystal.e1966f04.png",revision:"6911398cf85c927b8baf40d86da2d6e4"},{url:"/_next/static/media/Flag of Iran.dad66489.png",revision:"d78a85fa2fc2688ed13fdbda1ba2c035"},{url:"/_next/static/media/Gold.e53eb9f3.png",revision:"810683311285c3446947fc984dfe27aa"},{url:"/_next/static/media/Image404.74f4b8ff.png",revision:"0bcf850e040f15a4115198355ab3a481"},{url:"/_next/static/media/ImageEight.c8422b12.png",revision:"921c244b21e1690277cbdddf7cc820a4"},{url:"/_next/static/media/ImageFive.ebfeab07.png",revision:"5a6fdb9784c7b36946eacc5365f8e51c"},{url:"/_next/static/media/ImageFour.31b521d7.png",revision:"421fdf2381ce4524caa3d921306219fb"},{url:"/_next/static/media/ImageNine.b51a9f5e.png",revision:"b80fc8afb0fd73bed38c68c074d323e1"},{url:"/_next/static/media/ImageOne.e8a68627.png",revision:"0f7efb80e99b3497ab62df51df93c196"},{url:"/_next/static/media/ImageSeven.5e74a536.png",revision:"60924932d6d7d5ab371dd28c89fc8863"},{url:"/_next/static/media/ImageSix.dc6fa2e2.png",revision:"53bbff40dce2a0fa28d99861322b900b"},{url:"/_next/static/media/ImageThree.5cc0c77c.png",revision:"1a69550df91d952aa1adc827c6013658"},{url:"/_next/static/media/ImageTwo.7f256198.png",revision:"ab8ea25104d5c9c2ec1da97aea5ea097"},{url:"/_next/static/media/Silver.279b3953.png",revision:"d6379e1f79c39f4a1b71829a7bac5d71"},{url:"/_next/static/media/YekanBakh-Bold.5f4b06bb.woff",revision:"5f4b06bb"},{url:"/_next/static/media/YekanBakh-Bold.becc77dc.woff2",revision:"becc77dc"},{url:"/_next/static/media/YekanBakh-ExtraBlack.5711d043.woff2",revision:"5711d043"},{url:"/_next/static/media/YekanBakh-ExtraBlack.d6c8a1bc.woff",revision:"d6c8a1bc"},{url:"/_next/static/media/YekanBakh-ExtraBold.cef75be7.woff2",revision:"cef75be7"},{url:"/_next/static/media/YekanBakh-ExtraBold.fdfbc566.woff",revision:"fdfbc566"},{url:"/_next/static/media/YekanBakh-Light.4e4c44d2.woff2",revision:"4e4c44d2"},{url:"/_next/static/media/YekanBakh-Light.528d2b9b.woff",revision:"528d2b9b"},{url:"/_next/static/media/YekanBakh-Regular.1383b649.woff",revision:"1383b649"},{url:"/_next/static/media/YekanBakh-Regular.9091e0bb.woff2",revision:"9091e0bb"},{url:"/_next/static/media/YekanBakh-SemiBold.a229195f.woff",revision:"a229195f"},{url:"/_next/static/media/YekanBakh-SemiBold.e034de8a.woff2",revision:"e034de8a"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/bazar.805329e5.png",revision:"a2e8c4a4d6c93d95706be0dd7b21d12a"},{url:"/_next/static/media/bg.01368f7c.png",revision:"cc0dfd64c22abf6dbcce46fbf444ba1b"},{url:"/_next/static/media/bgBugDark.38811426.png",revision:"e20f99d52ec2c1b5cac7c35201845a9f"},{url:"/_next/static/media/bgBugLight.f291c9ee.png",revision:"8e2fbe08816323502b1dcc4f33fc3165"},{url:"/_next/static/media/bot.d289aebc.png",revision:"fee462d066423cac7719e9925a210928"},{url:"/_next/static/media/btcMining.642c94f4.png",revision:"62f3d5eb23983da1922365749ce66d6a"},{url:"/_next/static/media/cash.f7f263e5.png",revision:"a2c9231de57143757ed2b273023348b5"},{url:"/_next/static/media/chartup.2672ef1c.png",revision:"a9b138c03cdce5a288260cf37e3aa282"},{url:"/_next/static/media/cryptofont.2a77db46.eot",revision:"2a77db46"},{url:"/_next/static/media/cryptofont.7b767786.woff",revision:"7b767786"},{url:"/_next/static/media/cryptofont.f303d94f.ttf",revision:"f303d94f"},{url:"/_next/static/media/directDownload.d4d38d25.png",revision:"e52ba52b950baf28ddfd75cf224de1b0"},{url:"/_next/static/media/ghar.60d5e18e.png",revision:"6ff9b901283b98b3ac58aa85277e3133"},{url:"/_next/static/media/image-1-1.5188f6b6.png",revision:"aa91edb1c9cfd4e51ecef903841af998"},{url:"/_next/static/media/image-1-2.4b8cf5a7.png",revision:"bdeb3cb0252794e02d523230e10093ce"},{url:"/_next/static/media/image-2-1.0fd6aa8d.png",revision:"06a6d3eb330ae7ba73512b688e8de930"},{url:"/_next/static/media/image-3-1.5b9ea432.png",revision:"e2836049797bb8b6e57fb27dba7988c2"},{url:"/_next/static/media/image-3-2.5eb8a1a3.png",revision:"dfe42ef70bf6f5d6b83ad815a18d0d93"},{url:"/_next/static/media/image-4-1.164d362e.png",revision:"ce61a0d57587b56436890e03f5e27f84"},{url:"/_next/static/media/image-4-2.517a85b8.png",revision:"e033bfda5c7aa7a663be8663a457d483"},{url:"/_next/static/media/laptop.4fe6c918.png",revision:"228385cd3293930073ec2d5f2de8202e"},{url:"/_next/static/media/logo.218b919c.png",revision:"e2bd5c551888efcc22f006530926b543"},{url:"/_next/static/media/myket.42c13b1a.png",revision:"81ef51b4573beb2cc9f25cc806d7a6ad"},{url:"/_next/static/media/opportunity.7d254fa6.png",revision:"a4a6de1590806c440902e2eddcdd2670"},{url:"/_next/static/media/phone.e35ab8cc.png",revision:"00591b9430da79383f0e19afa140713c"},{url:"/_next/static/media/qrCodeImage.16542779.png",revision:"5d9b7e9d9b057896cadc2271239bfd09"},{url:"/_next/static/media/qrcodedark.1ef4fc3d.png",revision:"657024fa3c7ecc66cf61b3fd953cceb2"},{url:"/_next/static/media/qrcodelight.0e01ee1d.png",revision:"3b344a59ae119c3b1b930bd5d2d1de66"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"},{url:"/_next/static/media/user.e9207f70.png",revision:"78487c3f9aec3fb68341cccfcd39e808"},{url:"/_next/static/media/webapp.606aedde.png",revision:"d74d313a92424a0a96243ca1d012417f"},{url:"/_next/static/media/wheeel.a2c4e28e.png",revision:"de26185f7e6488f810db72fe72ed5652"},{url:"/_next/static/media/wheell.2b181662.png",revision:"6e3a3b3b56e30f819e090c6363940d88"},{url:"/icons/120.png",revision:"aa17b95a1ed532d4f01fd377152069de"},{url:"/icons/144.png",revision:"8550233ad5c0a596a2575266b760d741"},{url:"/icons/152.png",revision:"d6d48baff8625e36b374b17de91999b1"},{url:"/icons/192.png",revision:"0abee73a7d2d3f5508e8d498dc34afc2"},{url:"/icons/384.png",revision:"495d81fded33822c0a611b5dae76cf2b"},{url:"/icons/512.png",revision:"f55a7e4ef52d2d3186c8a65745d27fba"},{url:"/icons/64.png",revision:"23190b6aaef4a7b9450a724a09c1be75"},{url:"/logo.png",revision:"e2bd5c551888efcc22f006530926b543"},{url:"/manifest.json",revision:"02fd786ec57414a332c468ca9fce5a46"},{url:"/offline",revision:"Jlb5aF-dmpvbD_oS_JLek"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:c})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https?.*/,new e.StaleWhileRevalidate({cacheName:"https-calls",plugins:[new e.ExpirationPlugin({maxEntries:150,maxAgeSeconds:2592e3}),new e.CacheableResponsePlugin({statuses:[0,200]}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(png|jpg|jpeg|svg|gif|ico|webp)$/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(js|css)$/,new e.CacheFirst({cacheName:"static-resources",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/.*/,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:86400}),new e.CacheableResponsePlugin({statuses:[0,200]}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
