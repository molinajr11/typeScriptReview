export {};

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
}

const strinder: Character = {
  name: 'Strinder',
  hp: 100,
  skills: ['Bash', 'Counter'],
};

strinder.hometown = 'frozen forest';

console.log(strinder);
