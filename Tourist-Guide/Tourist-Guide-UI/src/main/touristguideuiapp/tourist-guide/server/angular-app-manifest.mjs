
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/register"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 501, hash: 'c0965fe05c2207aa9debb3ddaa49e40e39a990a21867bc7aa8e9bb335532ed36', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1014, hash: '6de940d18d4cbe2ae1d73d310771264f54d1a6ddb0a4fa44d28fe2fade78c89e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2722, hash: '0ec7cfe4f37f32c8ecd4811e93d71ea8bdba7f4c521208d41cd8cb4e1c209bf5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 2722, hash: '0ec7cfe4f37f32c8ecd4811e93d71ea8bdba7f4c521208d41cd8cb4e1c209bf5', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 6083, hash: '652f1def3bd87fe23460b9c0644fa0f65bf74d33c60bd3aa48b31b30065810af', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
