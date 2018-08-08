import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { Level } from '../types/level.enum';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: Skill[] = [
    {
      id: 0,
      name:'Photography',
      level: Level.Expert},
      {
        id: 1,
        name: 'Webpage developement',
        level: Level.Advanced},
        {id: 2,
         name: 'Riding an unicycle',
       level: Level.Beginner}];

getSkills = (): Observable<Skill[]> => {
  return of(this.skills);
};
}
