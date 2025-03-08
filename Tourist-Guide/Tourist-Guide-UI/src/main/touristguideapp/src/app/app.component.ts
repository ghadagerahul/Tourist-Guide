import { Component, Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { RegisterationPageComponent } from "./components/registeration-page/registeration-page.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, RegisterationPageComponent , HttpClientModule ],
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tourist-Guide-UI';
  
  constructor(private appService: AppService) {}
  
}           
