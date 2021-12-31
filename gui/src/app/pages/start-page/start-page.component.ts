import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent implements OnInit {
  url: string = 'http://localhost:1323';
  message: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(`${this.url}/hello`).subscribe((response) => {
      this.message = String(response);
    });
  }
}
