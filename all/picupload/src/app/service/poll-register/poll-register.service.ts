import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PollRegisterService {

  imageURL = 'http://rctestbe.webdunia.info/api/media-communities-service/upload-chunk'

  constructor( private http: HttpClient) { }

  uploadImage(image, hdx){
    return this.http.post<any>( this.imageURL,
                                image)
  }
}

  
