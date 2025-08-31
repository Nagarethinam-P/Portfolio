
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
    'index.csr.html': {size: 1165, hash: '280e9a8e30e4f49bdfbd3161d5302ec89c0839d24bf96b41b5b673210d264a4f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1678, hash: '41db1ac0d8b9ab1340aa1e1067423e9e51f0be13709f7a59444316cd6a6aa36d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12516, hash: 'd016ce964a0e617d07a2e037eef74ce3e82b28265d70dcad3255ddd8b713500b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 14133, hash: '16129fb2b5bb4203d2df3ee80abc3b99f0f016c7e5bcb73f1a5876d2b9a14738', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'internship/index.html': {size: 19401, hash: '33e3b521908708d386faf4acb3523b53ec6ec5f32f982557c6af30278ba4f24e', text: () => import('./assets-chunks/internship_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 11676, hash: 'ce60f6e3b611935519cb7c0623f0831a6a8a8f03411be89918e8f294044f6dd4', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'project/index.html': {size: 22348, hash: '726a87428803083856730fd65f6f6f8bfdf5f65da277e982f8199e2cd4c6caff', text: () => import('./assets-chunks/project_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 20931, hash: '00f5ea88ceb2294d2e71f4ed0623408569bf4c9e1c8340830ce2fc1e0a9ad349', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'certification/index.html': {size: 16784, hash: '454324c33e42f6cd94100a67901abbaaab4d309c0862205209ab2443cf6a7d90', text: () => import('./assets-chunks/certification_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
