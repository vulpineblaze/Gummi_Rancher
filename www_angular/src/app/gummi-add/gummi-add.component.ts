import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GummisService } from '../gummis.service';

@Component({
  selector: 'app-gummi-add',
  templateUrl: './gummi-add.component.html',
  styleUrls: ['./gummi-add.component.css']
})
export class GummiAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, 
  				private route: ActivatedRoute, 
  				private router: Router, 
  				private ps: GummisService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      GummiName: ['', Validators.required ],
      GummiDescription: ['', Validators.required ]
    });
  }

  addGummi(GummiName, GummiDescription) {
    this.ps.addGummi(GummiName, GummiDescription);
    this.router.navigate(['gummis']);
  }

  ngOnInit() {
  }

}
