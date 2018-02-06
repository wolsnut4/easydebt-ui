import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Keycloak
import { KeycloakService } from './keycloak-service/keycloak.service';
import { KEYCLOAK_HTTP_PROVIDER } from './keycloak-service/keycloak.http';

// Config
import { easydebtUIConfigProvider } from './config/easydebt-ui-config.service';
import { ApiLocatorService } from './config/api-locator.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BsDropdownModule.forRoot()
  ],
  providers: [
    // Keycloak
    KeycloakService,
    KEYCLOAK_HTTP_PROVIDER,

    // Config
    easydebtUIConfigProvider,
    ApiLocatorService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
