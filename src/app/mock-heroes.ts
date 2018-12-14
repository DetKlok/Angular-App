import { Hero } from './hero';

export const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice', logName(): void {console.log(this.name)}},
  { id: 12, name: 'Narco', logName(): void {console.log(this.name)}},
  { id: 13, name: 'Bombasto', logName(): void {console.log(this.name)}},
  { id: 14, name: 'Celeritas', logName(): void {console.log(this.name)}},
  { id: 15, name: 'Magneta', logName(): void {console.log(this.name)}},
  { id: 16, name: 'RubberMan', logName(): void {console.log(this.name)}},
  { id: 17, name: 'Dynama', logName(): void {console.log(this.name)}},
  { id: 18, name: 'Dr IQ', logName(): void {console.log(this.name)}},
  { id: 19, name: 'Magma', logName(): void {console.log(this.name)}},
  { id: 20, name: 'Tornado', logName(): void {console.log(this.name)} }
]