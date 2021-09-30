import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Filme } from "../models/filme";

@Injectable({
    providedIn: "root",
})
export class FilmeService {
    private baseURL = "http://localhost:5000/api/filme";

    constructor(private http: HttpClient) {}

    list(): Observable<Filme[]> {
        return this.http.get<Filme[]>(`${this.baseURL}/list`);
    }

    create(filme: Filme): Observable<Filme> {
        return this.http.post<Filme>(`${this.baseURL}/create`, filme);
    }
}
