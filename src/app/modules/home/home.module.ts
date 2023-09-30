import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { GitService } from 'src/app/core/services/git/git.service';
import { LoadingComponent } from 'src/app/components/loading/loading.component';
import { PostComponent } from 'src/app/components/post/post.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    LoadingComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [GitService]
})
export class HomeModule { }
