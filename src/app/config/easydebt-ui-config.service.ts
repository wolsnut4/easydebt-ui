import { EasydebtUIConfig } from './easydebt-ui-config';

function easydebtUIConfigFactory(): EasydebtUIConfig {
  let answer = window['EasydebtUIEnv'] || {};
  // lets filter out any values of "undefined" in case an env var is missing in the template expression
  for (let key in answer) {
    let value = answer[key];
    if (value === 'undefined') {
      answer[key] = '';
    }
  }
  return answer as EasydebtUIConfig;
}

export let easydebtUIConfigProvider = {
  provide: EasydebtUIConfig,
  useFactory: easydebtUIConfigFactory,
  deps: []
};
