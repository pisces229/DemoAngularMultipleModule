import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-second-root',
  templateUrl: './app-second.component.html',
  styleUrls: ['./app-second.component.scss']
})
export class AppSecondComponent {
  title = `AngularMultipleModule(Second) Environment(${environment.name})`;
}
