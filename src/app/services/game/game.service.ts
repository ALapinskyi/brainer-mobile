import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {GameListItem} from '../../models/simpleGameItem';
import {map} from 'rxjs/operators';
import {Game} from '../../models/game/game';
import {HttpClient} from '@angular/common/http';
import {RestProvider} from '../rest/rest';


const gameListUrl = 'assets/data/gameList.json';
const game1Url = 'assets/data/game1.json';
const game2Url = 'assets/data/game2.json';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(public http: HttpClient, private restService: RestProvider) {
    // var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // this.token = currentUser && currentUser.token;
  }

  getGamesList(): Observable<any> {
    return this.http.get(gameListUrl).pipe(map(this.restService.extractData));
  }

  getGameById(gameId: string): Observable<any> {
    console.log(gameId);
    if (gameId[0] === '625') {
      return this.http.get(game2Url).pipe(map(this.restService.extractData));
    } else {
      return this.http.get(game1Url).pipe(map(this.restService.extractData));
    }


  }

  /*
getActiveGames(): Observable<ActiveGame[]>{
  let headers = new Headers(
    {
      'Authorization': 'Bearer '+ this.token
    });

  return this.http.get(baseURL + 'api/game/all', {headers: headers})
  .map(res => { return this.restService.extractData(res); })
  .catch(error => { return this.restService.handleError(error);})
}

getRequestedGames(): Observable<ActiveGame[]>{
  let headers = new Headers(
    {
      'Authorization': 'Bearer '+ this.token
    });

  return this.http.get(baseURL + 'api/game/all', {headers: headers})
  .map(res => { return this.restService.extractData(res); })
  .catch(error => { return this.restService.handleError(error);})
}

getGameById(gameId: string): Observable<ActiveGame>{
  let headers = new Headers(
    {
      'Authorization': 'Bearer '+ this.token
    });

  return this.http.get(baseURL + 'api/game?gameId=' + gameId, {headers: headers})
  .map(res => { return this.restService.extractData(res); })
  .catch(error => { return this.restService.handleError(error);})

}

requestNewGame(mode : string): Observable<ActiveGame>{
  let headers = new Headers(
    {
      'Authorization': 'Bearer '+ this.token
    });

  return this.http.get(baseURL + 'api/game/new?mode=' + mode, {headers: headers})
  .map(res => { return this.restService.extractData(res); })
  .catch(error => { return this.restService.handleError(error);})
}

persistRound(game : ActiveGame): void{
  let headers = new Headers(
    {
      'Authorization': 'Bearer '+ this.token
    });

  this.http.post(baseURL + 'api/game/persistRound', game, {headers: headers}).subscribe();
}
*/
}
