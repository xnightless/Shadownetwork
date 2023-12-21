document.addEventListener('DOMContentLoaded', () => {
  const appsList = [
    {
      name: "! Request A Game [UPDATED]",
      link: "https://forms.gle/PL8e4kKaDJJ2CFQE9",
      image: "/assets/media/icons/request.webp",
      categories: ['all'],
      error: false
    
    },
    {
     
    
      name: "Stickman Hook",
      link: "/edu/stickman-hook/index.html",
      image: "/assets/media/icons/stickmanhook.jpg",
      categories: ['all', 'local'],
      local: "true"
    },
    {
      name: "Tunnel Rush",
      link: "https://5dd2e8e4-015f-11ea-ad56-9cb6d0d995f7.poki-gdn.com/5627efae-e960-407d-82a5-3da708eb4e68/index.html",
      image: "/assets/media/icons/tunnelrush.png",
      categories: ['all', '2P'],
      error: false
    },
    {
      name: "Tunnel Rush 2",
      link: "https://a7e6d137-c3c1-46e6-a3db-04c2d33c98a8.poki-gdn.com/71e6bddd-9b0e-4621-a11a-9503086f69d5/index.html",
      image: "/assets/media/icons/tunnelrush2.png",
      categories: ['all'],
      error: false
    },
    {
 
      name: "Minecraft Classic",
      link: "https://classic.minecraft.net",
      image: "/assets/media/icons/mc.webp",
      categories: ['all', '2P'],
      error: false
    },
    {
  
    
      name: "Time Shooter 2",
      link: "https://html5.gamedistribution.com/62a72f2da7cb4b609579a47653546e6a/",
      image: "/assets/media/icons/timeshooter2.jpeg",
      categories: ['all'],
      error: false
  
    },
    {
      name: "Rocket Bot Royale",
      link: "https://rocketbotroyale2.winterpixel.io/",
      image: "/assets/media/icons/rocketbotroyale.jpg",
      categories: ['all'],
      error: false
    },
    {
      name: "Happy Wheels",
      link: "https://files.crazygames.com/ruffle/happywheels.html",
      image: "/assets/media/icons/happywheels.jpg",
      categories: ['all'],
      error: false
    },
    {
      name: "Eaglercraft 1.5.2",
      link: "https://interstellar-assets.pages.dev/minecraft-15/",
      image: "/assets/media/icons/mc.webp",
      categories: ['all', '2P'],
      error: false
    
    },
    {
      name: "Duck Life 1",
      link: "https://www.hoodamath.com/mobile/games/duck-life/game.html",
      image: "/assets/media/icons/ducklife.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Duck Life 2",
      link: "https://www.hoodamath.com/mobile/games/duck-life-2-world-champion/game.html",
      image: "/assets/media/icons/ducklife.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Duck Life 3",
      link: "https://www.hoodamath.com/mobile/games/duck-life-3-evolution/game.html",
      image: "/assets/media/icons/ducklife.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Duck Life 4",
      link: "https://www.hoodamath.com/mobile/games/duck-life-4/game.html",
      image: "/assets/media/icons/ducklife.webp",
      categories: ['all'],
      error: false
    },
    {
  
      name: "Evades",
      link: "https://evades.io",
      image: "/assets/media/icons/evadesio.webp",
      categories: ['all,', '2P'],
      error: false
    },
    {
      name: "Bullet Force Multiplayer",
      link: "https://www.crazygames.com/game/bullet-force-multiplayer",
      image: "/assets/media/icons/BFM.png",
      categories: ['all,', '2P'],
      error: false
    },
    {
      name: "Crazy Games",
      link: "https://www.crazygames.com/",
      image: "/assets/media/icons/crazy.png",
      categories: ['all,', 'emu,', '2P,', 'sports,', 'flash' ],
      error: false
    },
    {
 
      name: "Subway Surfers: San Francisco ",
      link: "https://raw.githack.com/3kh0/3kh0-assets/main/subway-surfers/index.html",
      image: "/assets/media/icons/SF.webp",
      categories: ['all,', 'emu'],
      error: false
    },
                  {
      name: "Super Mario Bros",
      link: "http://topoi.pooq.com/hendrik/notmine/FullScreenMario/mario.html",
      image: "/assets/media/icons/SMB.jpg",
      categories: ['all,', 'emu'],
      error: false
    },
    {
      name: "Survivor.io",
      link: "https://html5.gamedistribution.com/rvvASMiM/f1c451e586c04b4c8cba01b0c50d9090/index.html",
      image: "/assets/media/icons/SVI.png",
      categories: ['all,', 'emu'],
      error: false
    },
          {
      name: "Web Retro",
      link: "https://binbashbanana.github.io/webretro/",
      image: "/assets/media/icons/webretro.png",
      categories: ['all,', 'emu'],
      error: false
    },
    {
      name: "Slope",
      link: "https://watchdocumentaries.com/wp-content/uploads/games/slope/",
      image: "/assets/media/icons/slope.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Fortnite",
      link: "https://play.geforcenow.com/mall/#/deeplink?game-id=46bfab06-d864-465d-9e56-2d9e45cdee0a",
      image: "/assets/media/icons/fortnite.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Bomb Party",
      link: "https://jklm.fun",
      image: "/assets/media/icons/BP.png",
      categories: ['all,', '2P'],
      error: false
    },
  {
    name: "1",
    link: "https://hgentry.github.io/1/",
    image: "/assets/media/icons/1.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "1v1.LOL",
    link: "https://1v1.lol",
    image: "/assets/media/icons/1v1-lol.webp",
    categories: ['all,', '2P'],
    error: false
  },
  {
    name: "2D Rocket League",
    link: "https://v6p9d9t4.ssl.hwcdn.net/html/3325334/index.html",
    image: "/assets/media/icons/2D-Rocket-League.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "3D Dino Game",
    link: "https://lagged.com/api/play2/t-rex-3d2/",
    image: "/assets/media/icons/trex-run-3D.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "60 Sec. Burger Run",
    link: "https://www.coolmathgames.com/0-60-second-burger-run/play",
    image: "/assets/media/icons/60-second-burger-run.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "8 Ball Pool",
    link: "https://8ball-pool.io",
    image: "/assets/media/icons/8ball.webp",
    categories: ['all'],
    error: false
 
  },
  {
    name: "Among Us (Scratch)",
    link: "https://turbowarp.org/523967150/fullscreen",
    image: "/assets/media/icons/scratch-among-us.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Apex Legends",
    link: "https://play.geforcenow.com/games?game-id=cb2b1b5f-54ba-45fd-9839-96bbfe1376cd&lang=en_US&asset-id=01_c6efce00-e91e-402a-8b72-f4971f89c528",
    image: "/assets/media/icons/apex.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Basketball Stars",
    link: "https://html5.gamedistribution.com/69d78d071f704fa183d75b4114ae40ec/",
    image: "/assets/media/icons/basketball-stars.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Basketball Bros",
    link: "https://www.basketbros.io/",
    image: "/assets/media/icons/basket-bros.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Basketball Legends",
    link: "https://www.basketballlegends.fun/gamedata/basketball-legends-2020",
    image: "/assets/media/icons/basketball-legends.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Biggie Cheese Fight",
    link: "https://scratch.mit.edu/projects/163771748/fullscreen",
    image: "/assets/media/icons/biggiecheese.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Bitlife",
    link: "https://xlegends.github.io/bitlife/",
    image: "/assets/media/icons/bitlife.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "BTD 4",
    link: "https://en.gameslol.net/data/bloons-td-4/index.html",
    image: "/assets/media/icons/btd4.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "BuildNow.GG",
    link: "https://games.crazygames.com/en_US/buildnow-gg/index.html",
    image: "/assets/media/icons/build-now.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Cat Ninja",
    link: "https://4iapq88o5f3gc1dij3it0mp5jojnm3jr-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%252Fcat-ninja.xml",
    image: "/assets/media/icons/cat-ninja.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Candy Box",
    link: "https://candybox2.net",
    image: "/assets/media/icons/candybox.webp",
    categories: ["all"],
    error: false
  },
    {
      name: "Celeste PICO-8",
      link: "https://exok.com/minigames/celeste.html",
      image: "/assets/media/icons/celeste.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Clicker Heros",
      link: "https://www.clickerheroes.com/play.html",
      image: "/assets/media/icons/clickerheros.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Chess.com",
      link: "https://chess.com",
      image: "/assets/media/icons/chess.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Cluster Rush",
      link: "/edu/Cluster-Rush/index.html",
      image: "/assets/media/icons/cluster-rush.webp",
      categories: ["all", 'local'],
      local: "true"
    },
    {
      name: "Cookie Clicker",
      link: "https://orteil.dashnet.org/cookieclicker/",
      image: "/assets/media/icons/cookieclicker.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Crossy Road",
      link: "https://5dd2e1e3-015f-11ea-ad56-9cb6d0d995f7.poki-gdn.com/169dc11d-e718-4b36-9e60-d5ed5bc07a31/index.html",
      image: "/assets/media/icons/cr.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Deepest Sword",
      link: "https://v6p9d9t4.ssl.hwcdn.net/html/4017918/index.html",
      image: "/assets/media/icons/deepest-sword.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Diep.io",
      link: "https://diep.io/",
      image: "/assets/media/icons/diep.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Doge Miner 1",
      link: "https://dogeminer.se/",
      image: "/assets/media/icons/doge-miner-1.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Doom 1",
      link: "https://browncha023.github.io/GBA/launcher.html#dm",
      image: "/assets/media/icons/doom1.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Doom 2",
      link: "https://browncha023.github.io/GBA/launcher.html#dm2",
      image: "/assets/media/icons/doom2.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Dreader",
      link: "https://donitz.itch.io/dreader",
      image: "/assets/media/icons/dreader.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Drift Boss",
      link: "https://watchdocumentaries.com/wp-content/uploads/games/drift-boss/",
      image: "/assets/media/icons/db.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Drift Hunters",
      link: "https://webglmath.github.io/drift-hunters/",
      image: "/assets/media/icons/drift-hunters.webp",
      categories: ["all"],
      say: "This game may take a while to load, but it is working."
    },
    {
      name: "Drive Mad",
      link: "https://raw.githack.com/3kh0/3kh0-assets/main/drive-mad/index.html",
      image: "/assets/media/icons/dm.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Eaglercraft 1.8",
      link: "http://raw.githack.com/3kh0/3kh0-assets/main/minecraft-18/index.html",
      image: "/assets/media/icons/mc.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Fallout 2",
      link: "https://jonasz-o.itch.io/fallout2remake3d",
      image: "/assets/media/icons/fallout2.gif",
      categories: ["all"],
      error: false
    },
    {
      name: "FNAF 2 (Scratch)",
      link: "https://scratch.mit.edu/projects/469219637/embed/",
      image: "/assets/media/icons/fnaf2.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Friday Night Funkin'",
      link: "https://w8.snokido.com/games/html5/friday-night-funkin/0281/index.html",
      image: "/assets/media/icons/fnf.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "FNF - Lofi Mod",
      link: "https://fnf.kdata1.com/lofi-funkin/2/",
      image: "/assets/media/icons/lofi.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "FNF VS. Snorlax",
      link: "https://fnf.kdata1.com/snorlax/1/",
      image: "/assets/media/icons/snorlax.webp",
      categories: ["all"],
      error: false
    },
      {
        name: "JustFall.LOL",
        link: "https://justfall.lol",
        image: "/assets/media/icons/just-fall-lol.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Kirby Mirror (GBA)",
        link: "https://www.retrogames.onl/gba/kirby-mirror-gba.html",
        image: "/assets/media/icons/kirby.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Krunker",
        link: "https://krunker.io",
        image: "/assets/media/icons/krunker.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "G-Switch",
        link: "https://5dd24442-015f-11ea-ad56-9cb6d0d995f7.poki-gdn.com/4f2c69b4-3edc-4cd7-a078-efd3d1ea9fb5/index.html",
        image: "/assets/media/icons/gswitch.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "G-Switch 2",
        link: "https://5dd27095-015f-11ea-ad56-9cb6d0d995f7.poki-gdn.com/e0e70ee4-fdd4-4de8-931d-fde7d1cb408b/index.html",
        image: "/assets/media/icons/gswitch2.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "G-Switch 3",
        link: "https://5dd2b395-015f-11ea-ad56-9cb6d0d995f7.poki-gdn.com/120fdec6-7eeb-470f-a43c-9bcdace0dacb/index.html",
        image: "/assets/media/icons/gswitch3.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Golden Eye 007",
        link: "https://f.kbhgames.com/r/n64/game.php?file=007-golden-eye.zip",
        image: "/assets/media/icons/golden-eye-007.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "GBA Games 2",
        link: "https://cattn.github.io/gba/",
        image: "/assets/media/icons/gba.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Geforce NOW",
        link: "https://play.geforcenow.com",
        image: "/assets/media/icons/apps/geforce-now.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Mario Kart 64",
        link: "https://static.arcadespot.com/retroemulator.php?system=n64&game=2017/06/mario-kart-64.zip",
        image: "/assets/media/icons/mario-kart-64.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Mortal Kombat 4",
        link: "https://f.kbhgames.com/r/n64/game.php?file=Mortal-Kombat-4-U.zip",
        image: "/assets/media/icons/na.webp",
        categories: ['all'],
        error: false
      },
      {
     
    name: "Paper.io",
    link: "https://paper-io.com/",
    image: "/assets/media/icons/paperio.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Pixel Shooter",
    link: "https://94bfktj403i6m18as4vkvtreqd0ohci4-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://274019683-173520394482650759.preview.editmysite.com/uploads/b/139890129-131715539788281629/files/ps.xml",
    image: "/assets/media/icons/pixel-shooter.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Pizza Tower",
    link: "https://gamaverse.com/c/f/g/pizza-tower-1678640389/index.html",
    image: "/assets/media/icons/pizza-tower.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Pokemon Heart Gold",
    link: "https://static.arcadespot.com/retroemulator.php?system=nds&game=2017/10/pokemon-heartgold-version1.zip",
    image: "/assets/media/icons/heartgold.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Pokemon Showdown",
    link: "https://play.pokemonshowdown.com",
    image: "/assets/media/icons/showdown.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "PM: Light Platinum",
    link: "https://browncha023.github.io/GBA/launcher.html#pokemonlp",
    image: "/assets/media/icons/lp.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Precision Client",
    link: "http://raw.githack.com/3kh0/3kh0-assets/main/precision-client/index.html",
    image: "/assets/media/icons/precision.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Rainbow Six Siege",
    link: "https://play.geforcenow.com/games?game-id=1dd07d47-6601-42f7-80e9-e4d8db08ea1b&lang=en_US&asset-id=01_44417-48c3d8e642e2",
    image: "/assets/media/icons/r6.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Rooftop Snipers",
    link: "https://html5.gamedistribution.com/rvvASMiM/c3a70ae98547407a92ebedca8b79fdfa/index.html",
    image: "/assets/media/icons/rooftop.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Shell Shockers",
    link: "https://shellshock.io/",
    image: "/assets/media/icons/shell-shockers.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Slither Io",
    link: "http://slither.io/",
    image: "/assets/media/icons/slither.webp",
    categories: ['all'],
    error: false
  },
    {
      name: "Smash Bros 64",
      link: "https://emulatorgames.online/games/n64/super-smash-bros",
      image: "/assets/media/icons/super-smash-bros-64.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Smash Karts",
      link: "https://smashkarts.io/",
      image: "/assets/media/icons/smashkarts.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Snowball.io",
      link: "https://games.crazygames.com/en_US/snowball-io/index.html",
      image: "/assets/media/icons/snowball.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Space Plan",
      link: "http://jhollands.co.uk/spaceplan/",
      image: "/assets/media/icons/spaceplan.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Stumble Guys",
      link: "https://www.stumbleguys.com/play",
      image: "/assets/media/icons/stumble-guys.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Stumble Guys Clone",
      link: "https://stumble-guys.io/stumble-guys.embed",
      image: "/assets/media/icons/stumble-guys.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Sugar Sugar HTML5",
      link: "https://66564262-37c6-4095-a731-535342e4bbe4.poki-gdn.com/5bd6e8c6-381d-4de5-9823-96662d29afaf/index.html",
      image: "/assets/media/icons/sugarsugar.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Super Mario 63",
      link: "https://www.numuki.com/gameframe/super-mario-63",
      image: "/assets/media/icons/sm63.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Super Mario 64",
      link: "https://f.kbhgames.com/r/n64/game.php?file=32112_super-mario-64-usa.zip",
      image: "/assets/media/icons/sm64.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Super Smash Flash",
      link: "https://f.kbhgames.com/RS/game.php?r=//f.kbhgames.com/2018/swf/smashflash.swf&w=1521&h=753",
      image: "/assets/media/icons/ssf1.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Supply Chain Idle",
      link: "http://chat.kongregate.com/gamez/0027/1653/live/index.html?kongregate_game_version=1554392772",
      image: "/assets/media/icons/na.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Taming.io",
      link: "https://taming.io/",
      image: "/assets/media/icons/tamingio.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Tanuki Sunset",
      link: "https://watchdocumentaries.com/wp-content/uploads/games/tanuki-sunset",
      image: "/assets/media/icons/tanuki.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "The Simpsons",
      link: "https://static.arcadespot.com/retroemulator.php?system=nds&game=2017/11/the-simpsons-game.zip",
      image: "/assets/media/icons/the-simpsons-game.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Temple Run 2",
      link: "https://watchdocumentaries.com/wp-content/uploads/games/temple-run-2/",
      image: "/assets/media/icons/temple-run-2.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Twitch Tetris",
      link: "https://www.rossipotti.de/ausgabe28/tetris/controls.html",
      image: "/assets/media/icons/na.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Vex 5",
      link: "https://raw.githack.com/3kh0/3kh0-assets/main/vex5/index.html",
      image: "/assets/media/icons/vex5.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Vex 7",
      link: "https://vex7.io",
      image: "/assets/media/icons/vex7.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Voxiom.io",
      link: "https://voxiom.io/",
      image: "/assets/media/icons/voxiom.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Zombs.io",
      link: "https://zombs.io/",
      image: "/assets/media/icons/zombs-io.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Zombs Royale",
      link: "https://zombsroyale.io",
      image: "/assets/media/icons/zombs-royale.webp",
      categories: ['all,', '2P'],
      error: false
    },
    {
    name: "GBA Games",
    link: "https://real-sgs.vercel.app/Tools/GBA-Emulator",
    image: "/assets/media/icons/gba.webp",
    categories: ["all"],
    error: false
    },
    {
      name: "Retro Bowl",
      link: "/edu/retro/index.html",
      image: "/assets/media/icons/retro.webp",
      categories: ["all,", 'sports', 'local'],
      local: "true",

      },
      {
        name: "Now.GG 
        link: "https://nowgg.nl",
        image: "/assets/media/icons/now-gg.png",
        categories: ['all', 'emu']
      },
      {

  ];
  
  function saveToLocal(path) {
    localStorage.setItem("savedPaths", path);
  }
  
  appsList.sort((a, b) => a.name.localeCompare(b.name));
  
  const nonPinnedApps = document.querySelector('.container-apps');
  const pinnedApps = document.querySelector('.pinned-apps');
  var pinList = localStorage.getItem("pinnedGames");
  try{
    pinList=pinList.split(",").map(Number)
    } catch {}
  var appInd = 0;
  appsList.forEach(app => {
    let pinNum = appInd
    const columnDiv = document.createElement('div');
    columnDiv.classList.add('column');
    columnDiv.setAttribute('data-category', app.categories.join(' '));

    const pinIcon = document.createElement('i');
    pinIcon.classList.add("fa");
    pinIcon.classList.add("fa-map-pin");
    pinIcon.ariaHidden = true;

    const btn = document.createElement('button');
    btn.appendChild(pinIcon);
    btn.style.float = "right";
    btn.style.backgroundColor="rgb(45,45,45)";
    btn.style.borderRadius="50%";
    btn.style.borderColor="transparent";
    btn.style.color="white";
    btn.style.top="-200px";
    btn.style.position="relative";
    btn.onclick = function () {
      setPin(pinNum);
    };
    btn.title="Pin";

    const link = document.createElement('a');

    if (app.local) {
      link.onclick = function() {
        if (typeof app.say !== 'undefined') {
          alert(app.say);
        }
        saveToLocal(app.link);
        window.location.href = '/edu.html';
        return false;
      };
    } else if (app.blank) {
      link.onclick = function() {
        if (typeof app.say !== 'undefined') {
          alert(app.say);
        }
        blank(app.link);
        return false;
      };
    } else {
      link.onclick = function() {
        if (typeof app.say !== 'undefined') {
          alert(app.say);
        }
        images(app.link);
        return false;
      };
    }

    const image = document.createElement('img');
    image.width = 145;
    image.height = 145;
    image.src = app.image;
    image.loading = "lazy";


    const paragraph = document.createElement('p');
    paragraph.textContent = app.name;
    if (app.error) {
      paragraph.style.color = 'red';
    }

    link.appendChild(image);
    link.appendChild(paragraph);
    columnDiv.appendChild(link);
    if(appInd != 0) {
      columnDiv.appendChild(btn);
    }

    if(pinList!=null && appInd != 0) {
      if(pinContains(appInd,pinList)) {
        pinnedApps.appendChild(columnDiv);
      }
      else {
        nonPinnedApps.appendChild(columnDiv);
      }
    }
    else {
      nonPinnedApps.appendChild(columnDiv);
    }
    appInd++;
  });
  appsContainer.appendChild(pinnedApps);
  appsContainer.appendChild(nonPinnedApps);
});
function setPin(index) {
  pins = localStorage.getItem("pinnedGames");
  if(pins == null) {
    pins = [];
  }
  if(pins == "") {
    pins = [];
  }
  else {
    pins = pins.split(",").map(Number);
  }
  if(pinContains(index,pins)) {
    let remove = pins.indexOf(index);

    pins.splice(remove, 1);

  }
  else {
    pins.push(index);
  }
  localStorage.setItem("pinnedGames", pins);
  location.reload();
}
function pinContains(i,p) {
  if(p=="") {return false;}
  for(var x = 0; x < p.length; x++) {if(p[x]===i) {
    return true;
  }}
  return false;
}

function showImages() {
  var selectedCategories = Array.from(document.querySelectorAll("#category option:checked")).map(option => option.value);
  var games = document.getElementsByClassName("column");

  for (var i = 0; i < games.length; i++) {
    var game = games[i];
    var categories = game.getAttribute("data-category").split(" ");

    if (selectedCategories.length === 0 || selectedCategories.some(category => categories.includes(category))) {
      game.style.display = "block";
    } else {
      game.style.display = "none";
    }
  }
}

function search_game() {
  var input = document.getElementById("searchbarbottom");
  var filter = input.value.toLowerCase();
  var games = document.getElementsByClassName("column");

  for (var i = 0; i < games.length; i++) {
    var game = games[i];
    var name = game.getElementsByTagName("p")[0].textContent.toLowerCase();

    if (name.includes(filter)) {
      game.style.display = "block";
    } else {
      game.style.display = "none";
    }
  }
}
