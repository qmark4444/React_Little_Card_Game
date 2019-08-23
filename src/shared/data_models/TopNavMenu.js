let TopNavMenu = [
    {
      name: 'Home',
      location: '/',
      isExternal: false,
      subMenus: []
    }, 
    {
      name: 'About',
      location: null,
      isExternal: false,
      subMenus: [
        {
          name: 'Me',
          location: '/',
          isExternal: false,
          subMenus: []
        },
        {
          name: 'Team',
          location: '/',
          isExternal: false,
          subMenus: []
        }
      ]
    }, 
    {
      name: 'Games',
      location: null,
      isExternal: false,
      subMenus: [
        {
          name: 'Card Game',
          location: '/',
          isExternal: false,
          subMenus: []
        },
        {
          name: 'TicTacToe',
          location: '/',
          isExternal: false,
          subMenus: []
        }
      ]
    },
    {
      name: 'Contact',
      location: 'https://github.com/qmark4444/React_Little_Card_Game',
      isExternal: true,
      subMenus: []
    }
];

export {TopNavMenu};