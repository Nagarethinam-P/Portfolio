
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/project"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/internship"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/certification"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/resume"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1165, hash: 'ed880c50554c183ceb0c1fe6374c5dc71f126f126c91782536e74c0ba65d6ba9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1678, hash: '05926bdded105ce27c5b09d355fb4beacbcea18b999dc04b3b3a2c20a9303eab', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12516, hash: 'bf2806e83de7ff7b1aae238a1b9085ca091e5cc87c29e61d879766da67abd86d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 14133, hash: 'e0effa0a625af82db3b8f40e9c341503b993aea452fab853115b0d4cbede042b', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'internship/index.html': {size: 19401, hash: '82fbf326627e5bc0d2c89ec2bd6e1c88b9f1560c22a93817f6fba41744ae4315', text: () => import('./assets-chunks/internship_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 11676, hash: '9527d5654ed66d8e0e54733d27a115b57d5a091880c15be076825b9df8158bdf', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'project/index.html': {size: 24385, hash: 'e957b2237d5524ac540830cc231de75aceef949231e887e12f172ddb12b0db75', text: () => import('./assets-chunks/project_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 20931, hash: '0966b661ec6584518a8914d6acec4dc091826bf5882f75bdb37219e4f8b7e33d', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'certification/index.html': {size: 16784, hash: 'e48e92d4406bb5e18345eaf19dfca48b02f86b4a152fafa82dd01ea40252e3aa', text: () => import('./assets-chunks/certification_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
