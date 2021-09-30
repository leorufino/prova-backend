import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Filme } from "src/app/models/filme";
import { FilmeService } from "src/app/services/filme.service";

@Component({
    selector: "app-cadastrar-filme",
    templateUrl: "./cadastrar-filme.component.html",
    styleUrls: ["./cadastrar-filme.component.css"],
})
export class CadastrarFilmeComponent implements OnInit {
    nome!: string;
    sinopse!: string;
    nota!: number;

    constructor(private service: FilmeService, private router: Router) {}

    ngOnInit(): void {}

    cadastrar(): void {
        let filme: Filme = {
            nome: this.nome,
            sinopse: this.sinopse,
            nota: this.nota
        };
        this.service.create(filme).subscribe((filme) => {
            console.log(filme);
            this.router.navigate(["filme/listar"]);
        });
    }
}
