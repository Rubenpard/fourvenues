import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  ...appConfig, // Mantiene la configuración existente
  providers: [
    provideAnimations(), // Habilita las animaciones
    ...(appConfig.providers || []) // Incluye otros proveedores ya configurados
  ]
}).catch((err) => console.error(err));
