import { ModuleWithProviders, NgModule } from '@angular/core';

import { MyLibService } from './my-lib.service';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
})
export class MyLibModule {
  static forRoot(apiKey: string): ModuleWithProviders<MyLibModule> {
    return {
      ngModule: MyLibModule,
      providers: [MyLibService, { provide: 'API_KEY', useValue: apiKey }],
    };
  }
}
