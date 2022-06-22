import { Routes, RouterModule } from "@angular/router";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { PostPageComponent } from "./pages/post-page/post-page.component";

const routes: Routes = [
  //home
  {
    path: '',
    component: HomePageComponent,
  },
  //Blog Post
  {
    path: ':slug/id',
    component: PostPageComponent,
  },
  // HandLing 404 - Error Page
  {
    path: '**',
    component: ErrorPageComponent
  }
];

export const RoutingModule = RouterModule.forRoot(routes);
