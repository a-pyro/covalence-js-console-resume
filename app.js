const user = {
  firstName: 'Ardi',
  lastName: 'Germenji',
  field: 'Software Engineer Apprentice',
  description: `I'm trying to learn how to code! :D`,
  instrests: ['Coding', 'Techno Music', 'My Cat', 'Binge Netflix'],
  pastPositions: [
    {
      companyName: 'Apple',
      title: 'CEO',
      description: 'i used to run the world',
    },
    {
      companyName: 'Amazon',
      title: 'CFO',
      description: 'i used to run the world',
    },
    {
      companyName: 'Google',
      title: 'CTO',
      description: 'i used to run the world',
    },
  ],
  skills: [
    'Html',
    'Css',
    'Js',
    'flying',
    'running faster than light',
    'Beeing a superhero!',
  ],
};

for (let propriety in user) {
  console.log(propriety, user[propriety]);
}
