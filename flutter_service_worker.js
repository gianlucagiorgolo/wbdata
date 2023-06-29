'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "addd2e66f43e0ed4cee1db16a54ff275",
"index.html": "1a7a3faa5a728b7448af14e44648ed0f",
"/": "1a7a3faa5a728b7448af14e44648ed0f",
"main.dart.js": "dddb987cb50de844a647dbd579a9bb91",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6ed919cfd7ea9ef75a086b8a06ae62a3",
"assets/AssetManifest.json": "54517181c59cafe7960b3337f54cdb26",
"assets/NOTICES": "509f25d360b1d1317696c42f09d929f1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/wonderboost/assets/images/data_collection_icon.png": "fe8c13e5d1a304830c6bd78754017ec7",
"assets/packages/wonderboost/assets/images/2.0x/data_collection_icon.png": "89e08725011560c253d7e26bbfd05a0e",
"assets/packages/wonderboost/assets/images/2.0x/settings_icon.png": "efe6a8e30fe4ef9686ab5a083e208901",
"assets/packages/wonderboost/assets/images/2.0x/stats_icon.png": "da76bb06bcdf7c3f5c92bf1d96498d28",
"assets/packages/wonderboost/assets/images/2.0x/logo.png": "60618517680712e3074eb0dd51b5e665",
"assets/packages/wonderboost/assets/images/2.0x/location_icon.png": "88fbfd18f5d52c9e184d95575fc154ef",
"assets/packages/wonderboost/assets/images/2.0x/history_icon.png": "a98b21c8e6669cd3d49f80b68056709a",
"assets/packages/wonderboost/assets/images/settings_icon.png": "c1d07a27b2060f77e3ea0011e0ce3e3f",
"assets/packages/wonderboost/assets/images/4.0x/data_collection_icon.png": "920628732fa9ab2139a2db230b64402e",
"assets/packages/wonderboost/assets/images/4.0x/settings_icon.png": "64867c33ee3558090313ef00cb2b26bd",
"assets/packages/wonderboost/assets/images/4.0x/stats_icon.png": "2ef1ceff5df8eef398f3c73d3b06487f",
"assets/packages/wonderboost/assets/images/4.0x/logo.png": "998552e9e4e4c5754997f4e38d60a1c4",
"assets/packages/wonderboost/assets/images/4.0x/location_icon.png": "462f90ad6eaa4a54ace5642ff3defd17",
"assets/packages/wonderboost/assets/images/4.0x/history_icon.png": "e4547f9e4bfa37361dd4a924251f3e56",
"assets/packages/wonderboost/assets/images/splash.png": "c147b8645d78c200b5f484c871f935be",
"assets/packages/wonderboost/assets/images/stats_icon.png": "d5eda71646484652dba1f1fb1034fad9",
"assets/packages/wonderboost/assets/images/logo.png": "61629b27d5f34346bb59c7562efdb726",
"assets/packages/wonderboost/assets/images/wonder_icon.png": "29579c076417d30e31e68ff2de2217e0",
"assets/packages/wonderboost/assets/images/location_icon.png": "18f51bdad4b51555f0603e04d99825da",
"assets/packages/wonderboost/assets/images/history_icon.png": "bed418727201c1f094ca6c4963f012da",
"assets/packages/wonderboost/assets/images/launcher_icon.png": "5d0ece0c530217ee1987a540c413d943",
"assets/packages/wonderboost/assets/images/wonder_logo_icon.png": "ff74fe722b3c3ec62f06bb74b00294ff",
"assets/packages/wonderboost/assets/fonts/Inconsolata-SemiBold.ttf": "c29bac056cd688682b892443d623d7d6",
"assets/packages/wonderboost/assets/fonts/Inconsolata-Medium.ttf": "7bdf2036ca9c6d9ae25b7469d1b8a85a",
"assets/packages/wonderboost/assets/fonts/Inconsolata-Black.ttf": "f03611532ac8ecf5beaffb5b45f87dfa",
"assets/packages/wonderboost/assets/fonts/Inconsolata-ExtraLight.ttf": "256901528f6547aba09e1049dce2904b",
"assets/packages/wonderboost/assets/fonts/Inconsolata-Bold.ttf": "aa0f2ec17a4ba3e47bbc7ce533a93f50",
"assets/packages/wonderboost/assets/fonts/Inconsolata-ExtraBold.ttf": "cf22e1ea59b650018f0645b8b231de1a",
"assets/packages/wonderboost/assets/fonts/Inconsolata-Light.ttf": "aff8f4d4930b9e50eae584d911c309a4",
"assets/packages/wonderboost/assets/fonts/Inconsolata-Regular.ttf": "e264f34eef25b5af18c240ecfca2d67b",
"assets/packages/wonderboost/assets/localization/privacy/it/terms_and_conditions.md": "90e6305c06d8f86924b45c775ac57fe3",
"assets/packages/wonderboost/assets/localization/privacy/it/privacy_policy.md": "48c8365c2b44fd9c38cf56a6f00ba7d7",
"assets/packages/wonderboost/assets/localization/privacy/en/terms_and_conditions.md": "ae6b3a758009c99fe578a6bde6e2cce5",
"assets/packages/wonderboost/assets/localization/privacy/en/privacy_policy.md": "1de1f76f37999a27b328237072f36f72",
"assets/packages/wonderboost/assets/localization/labels/en.json": "441b03420ad92ff125d23b513e1c5d15",
"assets/packages/wonderboost/assets/localization/labels/it.json": "de1bd9ffa66de52c220f4fda272046a6",
"assets/packages/wonderboost/assets/localization/intro_slides/it/slide05.md": "4a4b041cdff6b644fe0d606ae4d0e04d",
"assets/packages/wonderboost/assets/localization/intro_slides/it/slide01.md": "8ad2862d5d43b93222843e921165003c",
"assets/packages/wonderboost/assets/localization/intro_slides/it/slide04.md": "2c29d5675b000614382dd96f8938c275",
"assets/packages/wonderboost/assets/localization/intro_slides/it/slide03.md": "e306c322b70d9424d904e577e5cb99eb",
"assets/packages/wonderboost/assets/localization/intro_slides/it/slide02.md": "b685a9d7c033c01a471f96159ab26005",
"assets/packages/wonderboost/assets/localization/intro_slides/en/slide05.md": "aab0fa45b3c8e0ecd41f87258dabbe83",
"assets/packages/wonderboost/assets/localization/intro_slides/en/slide01.md": "34b4a791baaec1950aaa6feadca9fb21",
"assets/packages/wonderboost/assets/localization/intro_slides/en/slide04.md": "5fe6436f3e5605dd7e13579b39d3f094",
"assets/packages/wonderboost/assets/localization/intro_slides/en/slide03.md": "6265b17afc9efa378618b96736949502",
"assets/packages/wonderboost/assets/localization/intro_slides/en/slide02.md": "7fda3832b177ef9bff6f25385b48fd6a",
"assets/packages/wonderboost/assets/localization/md_texts/it/bluetooth_unauthorized_instructions.md": "a4df498ee822bb83072fa1eb478e2aeb",
"assets/packages/wonderboost/assets/localization/md_texts/it/missing_permissions.md": "2497f7eb8a01f4fca2c58daf07ecdfde",
"assets/packages/wonderboost/assets/localization/md_texts/it/bluetooth_powered_off_instructions.md": "9afbd81a95900ca3e2b0e0ed4f73758d",
"assets/packages/wonderboost/assets/localization/md_texts/it/location_services_disabled_instructions.md": "3535c6901a4ba57425965463eebb168d",
"assets/packages/wonderboost/assets/localization/md_texts/en/bluetooth_unauthorized_instructions.md": "f7275e884363838ddd78e39481ebd30b",
"assets/packages/wonderboost/assets/localization/md_texts/en/missing_permissions.md": "97e44c23f895e059431caf5e37e1b37a",
"assets/packages/wonderboost/assets/localization/md_texts/en/bluetooth_powered_off_instructions.md": "5a9a40a2b8e7febd054978d998ecd069",
"assets/packages/wonderboost/assets/localization/md_texts/en/location_services_disabled_instructions.md": "712c9bbb97327b0d8e0c601665aa656c",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "460138ef6cb46f1b5fab6f0c3302c494",
"assets/fonts/MaterialIcons-Regular.otf": "b7feb26f3a968e1ec44f963d9110ed1b",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
