import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.css']
})
export class DragonsComponent implements OnInit {

  public dragon = {
    name: undefined,
    type: undefined,
    createdAt: undefined,
    histories: []
  }

  public historie = ''

  public id = undefined

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if(this.id){
        this.getDragon();
      }
    });
  }

  getDragon() {
    this.http.get(`${environment.api}api/v1/dragon/${this.id}`).then((res) => {
      this.dragon = res
    })
  }

  addHistorie() {
    this.dragon.histories.push(this.historie)
    this.historie = ''
  }

  save() {
    if (this.id) {
      this.http.put(`${environment.api}/api/v1/dragon/${this.id}`, this.dragon).then((res) => {
        if(res){
          swal({
            title: `Tudo certo`,
            text: "Dragão atualizado com sucesso!",
            icon: "success",
          })
          this.router.navigate([``]);
        }else{
          swal({
            title: `Ops`,
            text: "Erro ao atualizar o Dragão",
            icon: "error",
          })
        }
      })
    } else {
      this.http.post(`${environment.api}/api/v1/dragon/`, this.dragon).then((res) => {
        if(res){
          swal({
            title: `Tudo certo`,
            text: "Dragão salvo com sucesso!",
            icon: "success",
          })
          this.router.navigate([``]);
        }else{
          swal({
            title: `Ops`,
            text: "Erro ao atualizar o Dragão",
            icon: "error",
          })
        }
      })
    }
  }

}
