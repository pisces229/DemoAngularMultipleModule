import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppSecondModule } from './app-second/app-second.module';
import { environment } from './environments/environment.second.dev';

console.log('second', environment);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppSecondModule)
.catch(err => console.error(err));

