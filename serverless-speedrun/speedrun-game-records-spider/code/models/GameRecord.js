const mongoose = require('mongoose')

// https://github.com/Automattic/mongoose/issues/6890
mongoose.set('useCreateIndex', true)

const GameRecord = new mongoose.Schema({
  // 以这个作为唯一标识
  speedrunWeblink: { type: String, unique: true, required: true },

  // speedrun Game, Category, Level ID
  gameId: { type: String, index: true, required: true },
  categoryId: { type: String, index: true },
  levelId: { type: String, index: true },

  // speedrun 游戏元数据
  // https://www.speedrun.com/api/v1/games/o1y9zk26/records res.data[0]
  speedrunData: { type: Object, required: true },

  // 数据更新时间
  updatedAt: { type: Date, required: true }
})

module.exports = mongoose.model('GameRecord', GameRecord)

/*
https://www.speedrun.com/api/v1/games/o1y9zk26/records?embed=game,category,level,players,regions,platforms,variables

speedrunData: {
  "weblink": "https://www.speedrun.com/sekiro#Shura_Ending",
  "game": {
    "data": {
      "id": "o1y9zk26",
      "names": {
        "international": "Sekiro: Shadows Die Twice",
        "japanese": null,
        "twitch": "Sekiro: Shadows Die Twice"
      },
      "abbreviation": "sekiro",
      "weblink": "https://www.speedrun.com/sekiro",
      "released": 2019,
      "release-date": "2019-03-22",
      "ruleset": {
        "show-milliseconds": false,
        "require-verification": true,
        "require-video": true,
        "run-times": [
          "realtime"
        ],
        "default-time": "realtime",
        "emulators-allowed": true
      },
      "romhack": false,
      "gametypes": [],
      "platforms": [
        "nzelkr6q",
        "o7e2mx6w",
        "8gej2n93"
      ],
      "regions": [
        "pr184lqn",
        "e6lxy1dz",
        "o316x197"
      ],
      "genres": [
        "jp23x26k"
      ],
      "engines": [
        "y572793l"
      ],
      "developers": [
        "rzj0p76l"
      ],
      "publishers": [
        "qkr2jne4"
      ],
      "moderators": {
        "zxz7mn0j": "super-moderator",
        "98r7vo6j": "super-moderator",
        "7j42mzdx": "super-moderator",
        "1xyl5pwj": "moderator",
        "v81kwmrj": "super-moderator",
        "v8l6lgv8": "moderator",
        "1xy1remx": "moderator",
        "98r4v0dj": "super-moderator",
        "kj9mo9wx": "super-moderator",
        "o86l59p8": "super-moderator",
        "v8llwor8": "super-moderator"
      },
      "created": "2019-02-08T18:50:33Z",
      "assets": {
        "logo": {
          "uri": "https://www.speedrun.com/themes/sekiro/logo.png",
          "width": 720,
          "height": 128
        },
        "cover-tiny": {
          "uri": "https://www.speedrun.com/themes/sekiro/cover-32.png",
          "width": 32,
          "height": 45
        },
        "cover-small": {
          "uri": "https://www.speedrun.com/themes/sekiro/cover-64.png",
          "width": 64,
          "height": 90
        },
        "cover-medium": {
          "uri": "https://www.speedrun.com/themes/sekiro/cover-128.png",
          "width": 128,
          "height": 180
        },
        "cover-large": {
          "uri": "https://www.speedrun.com/themes/sekiro/cover-256.png",
          "width": 256,
          "height": 360
        },
        "icon": {
          "uri": "https://www.speedrun.com/themes/Default/favicon.png",
          "width": 64,
          "height": 64
        },
        "trophy-1st": {
          "uri": "https://www.speedrun.com/themes/Default/1st.png",
          "width": 64,
          "height": 64
        },
        "trophy-2nd": {
          "uri": "https://www.speedrun.com/themes/Default/2nd.png",
          "width": 64,
          "height": 64
        },
        "trophy-3rd": {
          "uri": "https://www.speedrun.com/themes/Default/3rd.png",
          "width": 64,
          "height": 64
        },
        "trophy-4th": null,
        "background": {
          "uri": "https://www.speedrun.com/themes/sekiro/background.png",
          "width": 3840,
          "height": 2160
        },
        "foreground": null
      },
      "links": [
        {
          "rel": "self",
          "uri": "https://www.speedrun.com/api/v1/games/o1y9zk26"
        },
        {
          "rel": "runs",
          "uri": "https://www.speedrun.com/api/v1/runs?game=o1y9zk26"
        },
        {
          "rel": "levels",
          "uri": "https://www.speedrun.com/api/v1/games/o1y9zk26/levels"
        },
        {
          "rel": "categories",
          "uri": "https://www.speedrun.com/api/v1/games/o1y9zk26/categories"
        },
        {
          "rel": "variables",
          "uri": "https://www.speedrun.com/api/v1/games/o1y9zk26/variables"
        },
        {
          "rel": "records",
          "uri": "https://www.speedrun.com/api/v1/games/o1y9zk26/records"
        },
        {
          "rel": "series",
          "uri": "https://www.speedrun.com/api/v1/series/yr4gon12"
        },
        {
          "rel": "derived-games",
          "uri": "https://www.speedrun.com/api/v1/games/o1y9zk26/derived-games"
        },
        {
          "rel": "romhacks",
          "uri": "https://www.speedrun.com/api/v1/games/o1y9zk26/derived-games"
        },
        {
          "rel": "leaderboard",
          "uri": "https://www.speedrun.com/api/v1/leaderboards/o1y9zk26/category/w20vw6zk"
        }
      ]
    }
  },
  "category": {
    "data": {
      "id": "w20vw6zk",
      "name": "Shura Ending",
      "weblink": "https://www.speedrun.com/sekiro#Shura_Ending",
      "type": "per-game",
      "rules": "",
      "players": {
        "type": "exactly",
        "value": 1
      },
      "miscellaneous": false,
      "links": [
        {
          "rel": "self",
          "uri": "https://www.speedrun.com/api/v1/categories/w20vw6zk"
        },
        {
          "rel": "game",
          "uri": "https://www.speedrun.com/api/v1/games/o1y9zk26"
        },
        {
          "rel": "variables",
          "uri": "https://www.speedrun.com/api/v1/categories/w20vw6zk/variables"
        },
        {
          "rel": "records",
          "uri": "https://www.speedrun.com/api/v1/categories/w20vw6zk/records"
        },
        {
          "rel": "runs",
          "uri": "https://www.speedrun.com/api/v1/runs?category=w20vw6zk"
        },
        {
          "rel": "leaderboard",
          "uri": "https://www.speedrun.com/api/v1/leaderboards/o1y9zk26/category/w20vw6zk"
        }
      ]
    }
  },
  "level": {
    "data": []
  },
  "platform": null,
  "region": null,
  "emulators": null,
  "video-only": false,
  "timing": null,
  "values": {},
  "runs": [
    {
      "place": 1,
      "run": {
        "id": "y811ok5z",
        "weblink": "https://www.speedrun.com/sekiro/run/y811ok5z",
        "game": "o1y9zk26",
        "level": null,
        "category": "w20vw6zk",
        "videos": {
          "links": [
            {
              "uri": "https://www.twitch.tv/lilaggy"
            },
            {
              "uri": "https://www.youtube.com/watch?v=6JlQ-0pp0Ws"
            }
          ]
        },
        "comment": "Sub 22 :)\r\n\r\nhttps://www.twitch.tv/lilaggy",
        "status": {
          "status": "verified",
          "examiner": "v8llwor8",
          "verify-date": "2019-07-04T15:37:58Z"
        },
        "players": [
          {
            "rel": "user",
            "id": "qjngdow8",
            "uri": "https://www.speedrun.com/api/v1/users/qjngdow8"
          }
        ],
        "date": "2019-07-02",
        "submitted": "2019-07-03T21:58:26Z",
        "times": {
          "primary": "PT21M57S",
          "primary_t": 1317,
          "realtime": "PT21M57S",
          "realtime_t": 1317,
          "realtime_noloads": null,
          "realtime_noloads_t": 0,
          "ingame": null,
          "ingame_t": 0
        },
        "system": {
          "platform": "8gej2n93",
          "emulated": false,
          "region": "pr184lqn"
        },
        "splits": null,
        "values": {
          "gnxrw1jn": "21g48jm1",
          "68kd70ql": "gq74pkvq",
          "ylqkog7l": "jq6xpvvq"
        }
      }
    },
    {
      "place": 2,
      "run": {
        "id": "y9558nnz",
        "weblink": "https://www.speedrun.com/sekiro/run/y9558nnz",
        "game": "o1y9zk26",
        "level": null,
        "category": "w20vw6zk",
        "videos": {
          "links": [
            {
              "uri": "https://youtu.be/o7c3b1XP5YY"
            }
          ]
        },
        "comment": null,
        "status": {
          "status": "verified",
          "examiner": "1xyl5pwj",
          "verify-date": "2019-07-02T15:56:38Z"
        },
        "players": [
          {
            "rel": "user",
            "id": "18vqw95j",
            "uri": "https://www.speedrun.com/api/v1/users/18vqw95j"
          }
        ],
        "date": "2019-07-01",
        "submitted": "2019-07-01T12:46:26Z",
        "times": {
          "primary": "PT22M8S",
          "primary_t": 1328,
          "realtime": "PT22M8S",
          "realtime_t": 1328,
          "realtime_noloads": null,
          "realtime_noloads_t": 0,
          "ingame": null,
          "ingame_t": 0
        },
        "system": {
          "platform": "8gej2n93",
          "emulated": false,
          "region": null
        },
        "splits": null,
        "values": {
          "gnxrw1jn": "21g48jm1",
          "68kd70ql": "gq74pkvq",
          "ylqkog7l": "jq6xpvvq"
        }
      }
    },
    {
      "place": 3,
      "run": {
        "id": "y813pk5z",
        "weblink": "https://www.speedrun.com/sekiro/run/y813pk5z",
        "game": "o1y9zk26",
        "level": null,
        "category": "w20vw6zk",
        "videos": {
          "links": [
            {
              "uri": "https://www.youtube.com/watch?v=8xh_ZGRgEls"
            }
          ]
        },
        "comment": null,
        "status": {
          "status": "verified",
          "examiner": "1xyl5pwj",
          "verify-date": "2019-05-25T18:38:06Z"
        },
        "players": [
          {
            "rel": "user",
            "id": "18qqo08n",
            "uri": "https://www.speedrun.com/api/v1/users/18qqo08n"
          }
        ],
        "date": "2019-05-25",
        "submitted": "2019-05-25T16:21:49Z",
        "times": {
          "primary": "PT22M22S",
          "primary_t": 1342,
          "realtime": "PT22M22S",
          "realtime_t": 1342,
          "realtime_noloads": null,
          "realtime_noloads_t": 0,
          "ingame": null,
          "ingame_t": 0
        },
        "system": {
          "platform": "8gej2n93",
          "emulated": false,
          "region": "pr184lqn"
        },
        "splits": null,
        "values": {
          "gnxrw1jn": "21g48jm1",
          "68kd70ql": "gq74pkvq",
          "ylqkog7l": "jq6xpvvq"
        }
      }
    }
  ],
  "links": [
    {
      "rel": "game",
      "uri": "https://www.speedrun.com/api/v1/games/o1y9zk26"
    },
    {
      "rel": "category",
      "uri": "https://www.speedrun.com/api/v1/categories/w20vw6zk"
    }
  ],
  "players": {
    "data": [
      {
        "rel": "user",
        "id": "qjngdow8",
        "names": {
          "international": "LilAggy",
          "japanese": null
        },
        "weblink": "https://www.speedrun.com/user/LilAggy",
        "name-style": {
          "style": "gradient",
          "color-from": {
            "light": "#249BCE",
            "dark": "#44BBEE"
          },
          "color-to": {
            "light": "#249BCE",
            "dark": "#44BBEE"
          }
        },
        "role": "user",
        "signup": "2017-05-31T07:14:14Z",
        "location": {
          "country": {
            "code": "us",
            "names": {
              "international": "United States",
              "japanese": null
            }
          }
        },
        "twitch": {
          "uri": "https://www.twitch.tv/lilaggy"
        },
        "hitbox": null,
        "youtube": {
          "uri": "https://www.youtube.com/channel/UCx_Qyb3447P9bBaT4o8QSjQ"
        },
        "twitter": {
          "uri": "https://www.twitter.com/lilaggyTV"
        },
        "speedrunslive": null,
        "links": [
          {
            "rel": "self",
            "uri": "https://www.speedrun.com/api/v1/users/qjngdow8"
          },
          {
            "rel": "runs",
            "uri": "https://www.speedrun.com/api/v1/runs?user=qjngdow8"
          },
          {
            "rel": "games",
            "uri": "https://www.speedrun.com/api/v1/games?moderator=qjngdow8"
          },
          {
            "rel": "personal-bests",
            "uri": "https://www.speedrun.com/api/v1/users/qjngdow8/personal-bests"
          }
        ]
      },
      {
        "rel": "user",
        "id": "18vqw95j",
        "names": {
          "international": "Amorphis",
          "japanese": null
        },
        "weblink": "https://www.speedrun.com/user/Amorphis",
        "name-style": {
          "style": "gradient",
          "color-from": {
            "light": "#808080",
            "dark": "#B8B8B8"
          },
          "color-to": {
            "light": "#808080",
            "dark": "#B8B8B8"
          }
        },
        "role": "user",
        "signup": "2019-04-19T12:51:30Z",
        "location": {
          "country": {
            "code": "cn",
            "names": {
              "international": "China",
              "japanese": null
            }
          }
        },
        "twitch": null,
        "hitbox": null,
        "youtube": null,
        "twitter": null,
        "speedrunslive": null,
        "links": [
          {
            "rel": "self",
            "uri": "https://www.speedrun.com/api/v1/users/18vqw95j"
          },
          {
            "rel": "runs",
            "uri": "https://www.speedrun.com/api/v1/runs?user=18vqw95j"
          },
          {
            "rel": "games",
            "uri": "https://www.speedrun.com/api/v1/games?moderator=18vqw95j"
          },
          {
            "rel": "personal-bests",
            "uri": "https://www.speedrun.com/api/v1/users/18vqw95j/personal-bests"
          }
        ]
      },
      {
        "rel": "user",
        "id": "18qqo08n",
        "names": {
          "international": "Distortion2",
          "japanese": null
        },
        "weblink": "https://www.speedrun.com/user/Distortion2",
        "name-style": {
          "style": "gradient",
          "color-from": {
            "light": "#DAA520",
            "dark": "#F0C03E"
          },
          "color-to": {
            "light": "#DAA520",
            "dark": "#F0C03E"
          }
        },
        "role": "user",
        "signup": "2015-03-11T06:22:52Z",
        "location": {
          "country": {
            "code": "us",
            "names": {
              "international": "United States",
              "japanese": null
            }
          },
          "region": {
            "code": "us/il/c",
            "names": {
              "international": "Chicago, IL, USA",
              "japanese": null
            }
          }
        },
        "twitch": null,
        "hitbox": null,
        "youtube": null,
        "twitter": null,
        "speedrunslive": null,
        "links": [
          {
            "rel": "self",
            "uri": "https://www.speedrun.com/api/v1/users/18qqo08n"
          },
          {
            "rel": "runs",
            "uri": "https://www.speedrun.com/api/v1/runs?user=18qqo08n"
          },
          {
            "rel": "games",
            "uri": "https://www.speedrun.com/api/v1/games?moderator=18qqo08n"
          },
          {
            "rel": "personal-bests",
            "uri": "https://www.speedrun.com/api/v1/users/18qqo08n/personal-bests"
          }
        ]
      }
    ]
  },
  "regions": {
    "data": [
      {
        "id": "pr184lqn",
        "name": "USA / NTSC",
        "links": [
          {
            "rel": "self",
            "uri": "https://www.speedrun.com/api/v1/regions/pr184lqn"
          },
          {
            "rel": "games",
            "uri": "https://www.speedrun.com/api/v1/games?region=pr184lqn"
          },
          {
            "rel": "runs",
            "uri": "https://www.speedrun.com/api/v1/runs?region=pr184lqn"
          }
        ]
      }
    ]
  },
  "platforms": {
    "data": [
      {
        "id": "8gej2n93",
        "name": "PC",
        "released": 1970,
        "links": [
          {
            "rel": "self",
            "uri": "https://www.speedrun.com/api/v1/platforms/8gej2n93"
          },
          {
            "rel": "games",
            "uri": "https://www.speedrun.com/api/v1/games?platform=8gej2n93"
          },
          {
            "rel": "runs",
            "uri": "https://www.speedrun.com/api/v1/runs?platform=8gej2n93"
          }
        ]
      }
    ]
  },
  "variables": {
    "data": [
      {
        "id": "gnxrw1jn",
        "name": "PC / Console",
        "category": null,
        "scope": {
          "type": "global"
        },
        "mandatory": true,
        "user-defined": false,
        "obsoletes": true,
        "values": {
          "_note": "`choices` is deprecated, please use `values` instead",
          "choices": {
            "21g48jm1": "PC",
            "jqz5p6mq": "Console"
          },
          "values": {
            "21g48jm1": {
              "label": "PC",
              "rules": null,
              "flags": {
                "miscellaneous": null
              }
            },
            "jqz5p6mq": {
              "label": "Console",
              "rules": null,
              "flags": {
                "miscellaneous": null
              }
            }
          },
          "default": "21g48jm1"
        },
        "is-subcategory": true,
        "links": [
          {
            "rel": "self",
            "uri": "https://www.speedrun.com/api/v1/variables/gnxrw1jn"
          },
          {
            "rel": "game",
            "uri": "https://www.speedrun.com/api/v1/games/o1y9zk26"
          }
        ]
      },
      {
        "id": "68kd70ql",
        "name": "Patch",
        "category": null,
        "scope": {
          "type": "global"
        },
        "mandatory": true,
        "user-defined": false,
        "obsoletes": true,
        "values": {
          "_note": "`choices` is deprecated, please use `values` instead",
          "choices": {
            "gq74pkvq": "1.02",
            "21g45yn1": "1.03",
            "xqk45p4l": "1.04"
          },
          "values": {
            "gq74pkvq": {
              "label": "1.02"
            },
            "21g45yn1": {
              "label": "1.03"
            },
            "xqk45p4l": {
              "label": "1.04"
            }
          },
          "default": null
        },
        "is-subcategory": false,
        "links": [
          {
            "rel": "self",
            "uri": "https://www.speedrun.com/api/v1/variables/68kd70ql"
          },
          {
            "rel": "game",
            "uri": "https://www.speedrun.com/api/v1/games/o1y9zk26"
          }
        ]
      },
      {
        "id": "ylqkog7l",
        "name": "Shura Ending Subcategories",
        "category": "w20vw6zk",
        "scope": {
          "type": "global"
        },
        "mandatory": true,
        "user-defined": false,
        "obsoletes": true,
        "values": {
          "_note": "`choices` is deprecated, please use `values` instead",
          "choices": {
            "jq6xpvvq": "Unrestricted",
            "mln098oq": "No Airswim",
            "810mp6ol": "Glitchless"
          },
          "values": {
            "jq6xpvvq": {
              "label": "Unrestricted",
              "rules": "Beat the game by triggering the **Shura** ending on New Game only as fast as possible using any means necessary.\r\n\r\n## Timing \r\nPerforming the run on PC requires the integrated game timer available in LiveSplit to be used and showing in your submission. \r\n\r\nConsole runners are required to show the final IGT in their submission. Runners are required to select staying in the same New Game after the credits, immediately quitting out after spawning back in and checking the In-game time of the save file. The final IGT of that save file must be shown in the runner's submission! \r\n\r\nThe timer starts automatically after starting New Game and stops directly after reaching the credits.\r\n\r\n## Rules \r\n- All game modifications are currently banned except the mods which are listed below.\r\n- Pausing on the Main Menu is NOT allowed and gameplay should be resumed immediately right after a quitouts if this were to be used as a mechanic in a player's run.\r\n- Using ALT+F4 to forcefully close your game during your run is currently banned.\r\n- A crash invalidates the run.\r\n- Submissions must include either the intergrated timer in LiveSplit or provide IGT for console as explained above.\r\n- Submissions must include in-game audio at all times.\r\n- The following gameplay elements / UI should be visible at all times during your submission: \r\nSekiro's health bar, Sekiro's amount of revives / restorations, Equipped items in the bottom right, spirit emblems and items dropped from enemies, Boss health and the amount of phases in the top left and the pause menu / inventory.\r\n\r\n## Currently allowed mods:\r\n- Modified IGT plugin (Integrated in LiveSplit)\r\n- No Logo Mod Gets rid of the splash screens at the start when starting the game (Integrated in LiveSplit)\r\n- No Tips/Tutorials Mod Gets rid of the tips/tutorials that are shown in NG every time (Integrated in LiveSplit)\r\n- No Kuro's Charm Mod Gets rid of Kuro's Charm in save files that have progressed to NG+ https://github.com/Jiiks/Sekiro-Stuff/releases/download/0.0.2/SkipKuroCharm.dll",
              "flags": {
                "miscellaneous": false
              }
            },
            "mln098oq": {
              "label": "No Airswim",
              "rules": "Beat the game by triggering the **Shura** ending on New Game only as fast as possible. The use of **[Airswimming](https://sekiroruns.com/wiki/Airswimming)** is prohibited in this category\r\n\r\n## Timing \r\nPerforming the run on PC requires the integrated game timer available in LiveSplit to be used and showing in your submission. \r\n\r\nConsole runners are required to show the final IGT in their submission. Runners are required to select staying in the same New Game after the credits, immediately quitting out after spawning back in and checking the In-game time of the save file. The final IGT of that save file must be shown in the runner's submission! \r\n\r\nThe timer starts automatically after starting New Game and stops directly after reaching the credits.\r\n\r\n## Rules \r\n- All game modifications are currently banned except the mods which are listed below.\r\n- Pausing on the Main Menu is NOT allowed and gameplay should be resumed immediately right after a quitouts if this were to be used as a mechanic in a player's run.\r\n- Using ALT+F4 to forcefully close your game during your run is currently banned.\r\n- A crash invalidates the run.\r\n- Submissions must include either the intergrated timer in LiveSplit or provide IGT for console as explained above.\r\n- Submissions must include in-game audio at all times.\r\n- The following gameplay elements / UI should be visible at all times during your submission: \r\nSekiro's health bar, Sekiro's amount of revives / restorations, Equipped items in the bottom right, spirit emblems and items dropped from enemies, Boss health and the amount of phases in the top left and the pause menu / inventory.\r\n\r\n## Currently allowed mods:\r\n- Modified IGT plugin (Integrated in LiveSplit)\r\n- No Logo Mod Gets rid of the splash screens at the start when starting the game (Integrated in LiveSplit)\r\n- No Tips/Tutorials Mod Gets rid of the tips/tutorials that are shown in NG every time (Integrated in LiveSplit)\r\n- No Kuro's Charm Mod Gets rid of Kuro's Charm in save files that have progressed to NG+ https://github.com/Jiiks/Sekiro-Stuff/releases/download/0.0.2/SkipKuroCharm.dll",
              "flags": {
                "miscellaneous": false
              }
            },
            "810mp6ol": {
              "label": "Glitchless",
              "rules": "Beat the game by triggering the **Shura** ending on New Game only as fast as possible without the use of glitches and skips. Be aware about exceptions. Please consult the **[Glitchless guidelines](https://docs.google.com/document/d/1R-gRFdw_iUsZ2UJopPxp-swX0uAyN0tkPyd1_f1VhAo/edit?usp=sharing)** for more information and view the ban and allowance list.\r\n\r\n## Timing \r\nPerforming the run on PC requires the integrated game timer available in LiveSplit to be used and showing in your submission. \r\n\r\nConsole runners are required to show the final IGT in their submission. Runners are required to select staying in the same New Game after the credits, immediately quitting out after spawning back in and checking the In-game time of the save file. The final IGT of that save file must be shown in the runner's submission! \r\n\r\nThe timer starts automatically after starting New Game and stops directly after reaching the credits.\r\n\r\n## Rules \r\n- All game modifications are currently banned except the mods which are listed below.\r\n- Pausing on the Main Menu is NOT allowed and gameplay should be resumed immediately right after a quitouts if this were to be used as a mechanic in a player's run.\r\n- Using ALT+F4 to forcefully close your game during your run is currently banned.\r\n- A crash invalidates the run.\r\n- Submissions must include either the intergrated timer in LiveSplit or provide IGT for console as explained above.\r\n- Submissions must include in-game audio at all times.\r\n- The following gameplay elements / UI should be visible at all times during your submission: \r\nSekiro's health bar, Sekiro's amount of revives / restorations, Equipped items in the bottom right, spirit emblems and items dropped from enemies, Boss health and the amount of phases in the top left and the pause menu / inventory.\r\n\r\n## Currently allowed mods:\r\n- Modified IGT plugin (Integrated in LiveSplit)\r\n- No Logo Mod Gets rid of the splash screens at the start when starting the game (Integrated in LiveSplit)\r\n- No Tips/Tutorials Mod Gets rid of the tips/tutorials that are shown in NG every time (Integrated in LiveSplit)\r\n- No Kuro's Charm Mod Gets rid of Kuro's Charm in save files that have progressed to NG+ https://github.com/Jiiks/Sekiro-Stuff/releases/download/0.0.2/SkipKuroCharm.dll",
              "flags": {
                "miscellaneous": false
              }
            }
          },
          "default": "jq6xpvvq"
        },
        "is-subcategory": true,
        "links": [
          {
            "rel": "self",
            "uri": "https://www.speedrun.com/api/v1/variables/ylqkog7l"
          },
          {
            "rel": "game",
            "uri": "https://www.speedrun.com/api/v1/games/o1y9zk26"
          },
          {
            "rel": "category",
            "uri": "https://www.speedrun.com/api/v1/categories/w20vw6zk"
          }
        ]
      }
    ]
  }
}
*/