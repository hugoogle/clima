# clima

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Adiconar dependências

- [] yarn add vuex-module-decorators
- [] yarn add axios
- [] yarn add vue-moment
- [] yarn add bootstrap-vue bootstrap

### configurações

- Alterar o arquivo vue.config para

transpileDependencies: ["vuex-module-decorators"],

- Adicionar no arquivo main.ts as dependÊncias do bootstrap

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

- Remove import store do arquivo main.ts
- No arquivo index adicionar const stores n

export const store = new Vuex.Store({});
