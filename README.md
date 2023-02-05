# My First Library

## Angular Doc

[Angular](https://angular.io/guide/creating-libraries).

### How to use an api key:

### my-lib.module.ts

```typescript
@NgModule({
  declarations: [],
  imports: [],
  exports: [],
})
export class MyLibModule {
  static forRoot(apiKey: string): ModuleWithProviders<MyLibModule> {
    return {
      ngModule: MyLibModule,
      providers: [MyLibService, { provide: "API_KEY", useValue: apiKey }],
    };
  }
}
```

### my-lib.service.ts

```typescript
@Injectable({
  providedIn: "root",
})
export class MyLibService {
  constructor(@Inject("API_KEY") private apiKey: string) {}

  sayHello(): void {
    console.log(`Hi! your api Key is ${this.apiKey}`);
  }
}
```

---

## Steps to create a lib:
1- ng new my-workspace --no-create-application
2- cd my-workspace
3- ng generate library my-lib
4- ng build my-lib
5- cd dist/my-lib
6- npm publish

