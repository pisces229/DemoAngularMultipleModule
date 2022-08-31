import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-first-root',
  templateUrl: './app-first.component.html',
  styleUrls: ['./app-first.component.scss']
})
export class AppFirstComponent {
  title = `AngularMultipleModule(First) Environment(${environment.name})`;
}
