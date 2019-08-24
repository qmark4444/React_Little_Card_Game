let TopNavMenu = [
    {
      name: 'Home',
      location: '/',
      isExternal: false,
      level: 1,
      subMenus: []
    }, 
    {
      name: 'Games',
      location: null,
      isExternal: false,
      level: 1,
      subMenus: [
        {
          name: 'Card Game',
          location: '/',
          isExternal: false,
          level: 2,
          subMenus: []
        }
        ,
        {
          name: 'MoreToCome...',
          location: '/',
          isExternal: false,
          level: 2,
          subMenus: []
        }
      ]
    },
    {
      name: 'Contact',
      location: 'https://github.com/qmark4444/React_Little_Card_Game',
      isExternal: true,
      level: 1,
      subMenus: []
    }
];

export {TopNavMenu};