import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { SendDataViaServiceComponent } from './send-data-via-service/send-data-via-service.component';
import { ModuleWithProviders } from "@angular/core";

const appRoutes: Routes = [
  {path: "parent", component: ParentComponent},
  {path: "share-data", component: SendDataViaServiceComponent},
  {path: "", redirectTo: '/parent', pathMatch: 'full'}
]

export const routingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes)
