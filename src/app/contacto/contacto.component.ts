import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class ContactoComponent {
  public title: string = 'Página de contacto';
  public parameter: string = '';

  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.parameter = params['page'];
    });
  }

  redirect = () => {
    this._router.navigate(['/contacto', 'danilopgon']);
  };

  redirectHome = () => {
    this._router.navigate(['/']);
  };
}
