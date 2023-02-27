import { Injectable } from '@angular/core';
import { News } from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private news:News[]=[
    new News("Munich Security Conference: Allies call for military aid to Ukraine to be stepped up","https://static.euronews.com/articles/stories/07/41/21/00/773x435_cmsv2_2192ab77-937f-5c50-ae8d-e3773580160d-7412100.jpg","World leaders meeting in Bavaria have called for Western allies to increase military aid to Kyiv. The Munich Security Conference comes ahead of the one-year anniversary of the Russian invasion of Ukraine. President of the European Commission, Ursula von der Leyen, appealed for an increase in military support in areas such as ammunition supplies.", new Date(2002,5,10)),
      new News("Rachel Khoo's Tokyo","https://static.euronews.com/articles/stories/07/39/67/18/773x435_cmsv2_13962b9a-4d1d-5a80-a63c-9212a9d6738e-7396718.jpg","Rachel’s culinary career has taken her all over the planet, to the likes of Paris, Milan, Sydney and Buenos Aires. But the culture-rich Japanese capital had long been a personal, ‘bucket list’ destination. Most of the countries I previously travelled to were with Western roots or in Southeast Asia where even if I don't speak the language or know the culture, I have some kind of orientation,” she explains. “Japan was a complete unknown for me and felt like a true adventure.", new Date()),
  ]
  
  getAllNews():News[]{
  return this.news;
  }
  
  addnews(news:News){
    this.news.push(new News(news.title,news.image,news.body,news.publishDate));
  }
  constructor() { }
}
