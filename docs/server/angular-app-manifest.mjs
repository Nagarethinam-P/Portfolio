
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
    'index.csr.html': {size: 1165, hash: '3c05676dfa648cf045b32451b93eee4c4eb619d46f1d341173a23f100b09ed83', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1678, hash: 'aeecbe55a45c668a3e07c94e738149f039f9da93e965ebab16f2f8a90d0cd0b0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12849, hash: '067abc9f60696797bd58cd422e5b87e8824fa50436a3baae24b631fc8510daad', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 14133, hash: '245d21f801338a640407e797ad25d468c431551085bdf0f6b485e8490b25128b', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'internship/index.html': {size: 19447, hash: 'fb9065f3eb9d143874b44af417bb2881f21d0f2a3f2359435bd01d6ec6b17234', text: () => import('./assets-chunks/internship_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 11645, hash: '12bb53ff7e08d3ccc60cc4ede87caf6018f58f6a100e57af442ca79514c55e80', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'project/index.html': {size: 24385, hash: 'addd03c92e235c3dce79217101c197bb387746cb957e6c9bf373331fe21fa7dc', text: () => import('./assets-chunks/project_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 20927, hash: 'dd55a17526a1eca216acb5e06a0ec68d08d9c8af2f93a8fe086918e0d237af10', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'certification/index.html': {size: 17266, hash: '8c9a1eda04d87194510836bea40b79c510c7a04df8e3dcdf351b13f4af410a7f', text: () => import('./assets-chunks/certification_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
