import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GummisService } from '../gummis.service';

@Component({
  selector: 'app-gummi-grind',
  templateUrl: './gummi-grind.component.html',
  styleUrls: ['./gummi-grind.component.css']
})
export class GummiGrindComponent implements OnInit {

	gummi: any = {};
	
  constructor(private route: ActivatedRoute, 
                private router: Router, 
                private ps: GummisService, 
                private fb: FormBuilder) {
      // this.createAngForm();
      // this.createCorrForm();
      // this.createAclForm();
 }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ps.editGummi(params['id']).subscribe(res => {
        this.gummi = res;
      });
      
    });

    
  }

  deleteGummi(id) {
    this.ps.deleteGummi(id).subscribe(res => {
      // this.gummis.splice(id, 1);
      this.router.navigate(['gummis']);
    });
  }

}
