# daily-pfp

todo

- DONE study page
- DONE next game countdown clock
- DONE top score number
- DONE colors of buttons
- STARTED statistics page
- load words

Statistics

- key: "gender-game-statistics"
- value:
  {
  topScore: number,
  pastGames: [{
  date: string,
  score: number,
  }]
  }

Architecture

Game Data (any json format)
Game Question (fixed format)
Game Study (fixed format)

1. Create array of Game Questions by loading n entries of Game Data into Game Question format
2. Create Game by providing Game Question aray and current state
3. Create Game Study array by loading all Game Data into Game Study format

---
