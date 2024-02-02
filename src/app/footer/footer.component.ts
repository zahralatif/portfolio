import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  currentYear!: number;

  ngOnInit(): void {
    // Get the current year
    this.currentYear = new Date().getFullYear();
  }
}
