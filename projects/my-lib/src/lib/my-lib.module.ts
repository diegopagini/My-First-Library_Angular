import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
})
export class MyLibModule {
  static forRoot(apiKey: string): ModuleWithProviders<MyLibModule> {
    return {
      ngModule: MyLibModule,
      providers: [],
    };
  }
}
