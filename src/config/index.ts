export interface ConfigTypes {
   discord: {
      id: string;
      globalName: string;
   };
   github: {
      username: string;
   };
   projects: {
      name: string;
      description: string;
      url: string;
      image: string;
      date: string;
   }[];
   apiUrl: string;
}


export const config: ConfigTypes = {
   discord: {
      id: '996488031932514394',
      globalName: 'No.1',
   },
   github: {
      username: 'harbiyelidev',
   },
   projects: [
      {
         name: '0Resmon Chat V3',
         description: '',
         date: '2024-01-01',
         url: 'https://0resmon.tebex.io/package/6897227',
         image: 'https://r2.fivemanage.com/PRMGg8LOew8Wiszjkbwm3/781905ace8c8e80c6307b3c5a6af98746740c936.png',
      },
      {
         name: '0Resmon GPS V2',
         description: '',
         date: '2024-01-01',
         url: 'https://0resmon.tebex.io/package/0r-gps-escrow-gps-tracker-electronic-cuff-panic-button',
         image: 'https://r2.fivemanage.com/PRMGg8LOew8Wiszjkbwm3/7f22d699082e7afc6b63968078f415ef083f255b.png',
      },
      {
         name: '0Resmon Multiplayer House Robbery',
         description: '',
         date: '2024-01-01',
         url: 'https://0resmon.tebex.io/package/6860619',
         image: 'https://r2.fivemanage.com/PRMGg8LOew8Wiszjkbwm3/f63c0df28fb3de993554af0745084df766fe1fe3.png',
      },
      {
         name: '0Resmon Manageable Casino',
         description: '',
         date: '2024-01-01',
         url: 'https://0resmon.tebex.io/package/manageable-casino-6-games-all-in-one-escrow',
         image: 'https://r2.fivemanage.com/PRMGg8LOew8Wiszjkbwm3/2fc2458f561b4ab162ce4baea0df3546cb017b28.png',
      },
      {
         name: '0Resmon Customizable Multiplayer',
         description: '',
         date: '2024-01-01',
         url: 'https://0resmon.tebex.io/package/0r-ingame-customizable-multicharacter-all-in-one-escrow',
         image: 'https://r2.fivemanage.com/PRMGg8LOew8Wiszjkbwm3/29279d3c65b9c8e061b544ab1f09fb97e67e355c.png',
      },
      {
         name: '0Resmon RC Car',
         description: '',
         date: '2024-01-01',
         url: 'https://0resmon.tebex.io/package/0r-rccar-remote-control-car-escrow',
         image: 'https://r2.fivemanage.com/PRMGg8LOew8Wiszjkbwm3/1594c88b9962942fb08bd3c022592dcea69ae447.png',
      },
      {
         name: '0Resmon Daily Rewards',
         description: '',
         date: '2024-01-01',
         url: 'https://0resmon.tebex.io/package/0r-dailyrewards-escrow',
         image: 'https://r2.fivemanage.com/PRMGg8LOew8Wiszjkbwm3/e93b2c3eeee8a52801e70836fcc91189fa525d9c.png',
      },
   ],
   apiUrl: 'https://api.vezironi.com/v1',
}