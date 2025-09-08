
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
    'index.csr.html': {size: 1267, hash: '038d3f6eef91d735a0e6a11e409507f5e487e90bff94a9aac9be59f4603d3bc5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1780, hash: '38a7070dd1e35c3d1595b3d136d3e8460dd2067c06f1a1293638e27fc7bd82d8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12951, hash: '136aefab800ac9bd2d8d6a15c21153ef9fbb3f80ebc68406defd25fdea7ad155', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 14235, hash: '50d71f8b86e56187696a1191614c323dd8520acf7916cc06b1e1fbe0e0b4aeb7', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'internship/index.html': {size: 19549, hash: 'd2c8571499aadce2098d253b877f6bc705830fb8c92731645504d5110c1db790', text: () => import('./assets-chunks/internship_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 11650, hash: 'ec5ae4ad7e8afec3991d2715446cc2cfe103b5ae7dd04aaaf6ad954a371a66a2', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'project/index.html': {size: 24487, hash: 'b55c1815879dd35752cf691432d7eec33dabb27ece9b0a85c327211033f73aa9', text: () => import('./assets-chunks/project_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 21029, hash: 'ad1fa575e3a02bcf71cf206d7a98f03a216a544459643cee9c6cd85b85ea9209', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'certification/index.html': {size: 17368, hash: '57819b85d1494c8bb79f6d5643dfc944b06f7cb3085cafaea13b57ddc9aefb5a', text: () => import('./assets-chunks/certification_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
