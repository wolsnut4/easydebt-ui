import { Injectable } from '@angular/core';
import { EasydebtUIConfig } from '../config/easydebt-ui-config';

const DEFAULT_API_ENV_VAR_NAMES = new Map<string, string>(
  [
    ['easydebt', 'EASYDEBT_API_URL'],
    ['sso', 'EASYDEBT_SSO_API_URL'],
    ['realm', 'EASYDEBT_REALM']
  ]
);

const DEFAULT_API_PREFIXES = new Map<string, string>([
  ['easydebt', 'api'],
  ['easydebt', 'sso'],
  ['auth', 'auth']
]);

const DEFAULT_API_PATHS = new Map<string, string>([
  ['easydebt', 'api/'],
  ['auth', 'api/']
]);

export class BaseApiLocatorService {

  private envVars = new Map<string, string>();

  constructor(private config: EasydebtUIConfig, private apiPrefixes: Map<String, String>, private apiPaths: Map<String, String>) {
  }

  get realm(): string {
    return this.envVars.get('realm') || 'clarksnut';
  }

  get easydebtApiUrl(): string {
    return this.config.easydebtApiUrl || this.buildApiUrl('easydebt');
  }

  get ssoApiUrl(): string {
    return this.config.ssoApiUrl || this.buildApiUrl('sso');
  }

  protected loadEnvVar(key: string): void {
    //this.envVars.set(key, process.env[DEFAULT_API_ENV_VAR_NAMES.get(key)]);
  }

  protected buildApiUrl(key: string): string {
    // Return any environment specified URLs for this API
    if (this.envVars.get(key)) {
      return this.envVars.get(key);
    }
    // Simple check to trim www
    let domainname = window.location.hostname;
    if (domainname.startsWith('www')) {
      domainname = window.location.hostname.slice(4);
    }
    let url = domainname;
    if (window.location.port) {
      url += ':' + window.location.port;
    }
    url += '/';
    if (this.apiPrefixes.has(key)) {
      url = this.apiPrefixes.get(key) + '.' + url;
    }
    if (this.apiPaths.has(key)) {
      url += this.apiPaths.get(key);
    }
    url = window.location.protocol + '//' + url;
    return url;
  }

}

@Injectable()
export class ApiLocatorService extends BaseApiLocatorService {

  constructor(config: EasydebtUIConfig) {
    super(config, DEFAULT_API_PREFIXES, DEFAULT_API_PATHS);
    DEFAULT_API_ENV_VAR_NAMES.forEach((value, key) => {
      this.loadEnvVar(key);
    });
  }

}
