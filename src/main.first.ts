import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppFirstModule } from './app-first/app-first.module';
import { environment } from './environments/environment.first.dev';

console.log('first', environment);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppFirstModule)
.catch(err => console.error(err));

