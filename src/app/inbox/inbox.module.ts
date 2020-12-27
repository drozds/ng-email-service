import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { HomeComponent } from './home/home.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { EmailIndexComponent } from './email-index/email-index.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { EmailCreateComponent } from './email-create/email-create.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, EmailShowComponent, PlaceholderComponent, EmailIndexComponent, EmailReplyComponent, EmailCreateComponent, NotFoundComponent, EmailFormComponent],
  imports: [
    CommonModule,
    InboxRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class InboxModule { }
