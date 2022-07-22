import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DeskComponent } from './desk/desk.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HighlightCardComponent } from './highlight-card/highlight-card.component';
import { CardComponent } from './card/card.component';
import { CardSmallComponent } from './card-small/card-small.component';
import { FooterComponent } from './footer/footer.component';
import { LinkButtonComponent } from './link-button/link-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DeskComponent,
    ToolbarComponent,
    HighlightCardComponent,
    CardComponent,
    CardSmallComponent,
    FooterComponent,
    LinkButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
