import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
import swal from 'sweetalert';



@Component({
  selector: 'app-list-dragons',
  templateUrl: './list-dragons.component.html',
  styleUrls: ['./list-dragons.component.css']
})
export class ListDragonsComponent implements OnInit {

  public dragons = []
  order: string = 'name';
  constructor(
    private http: HttpService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getDragons()
  }

  getDragons() {
    this.http.get(`${environment.api}api/v1/dragon`).then((res) => {
      this.dragons = res
    })
  }

  deleteDragonsConfirmation(dragon) {
    swal({
      title: `Tem certeza que deseja deletar o dragão ${dragon.name}?`,
      text: "Se você confirmar excluira permanentemente o Dragão",
      icon: "warning",
      buttons: ["Não", "Sim"],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.deletDragons(dragon.id)
      } 
    });
  }

  deletDragons(id) {
    this.http.delete(`${environment.api}api/v1/dragon/${id}`).then((res) => {
      if(res){
        swal({
          title: `Deu certo`,
          text: `O dragão ${res.name} de id ${res.id} foi removido`,
          icon: "success",
        })
        this.getDragons()
      }
      
    })
  }

  redirectEdit(id){
    this.router.navigate([`/dragon/${id}`]);
  }

}
