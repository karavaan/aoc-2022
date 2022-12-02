const SCORE_FOR_WINNING = 6;
const SCORE_FOR_DRAW = 3;

export const map = {
    rock: {
        score: 1,
        chars: ['A', 'X'],
        beats: 'scissors'
    },
    paper: {
        score: 2,
        chars: ['B', 'Y'],
        beats: 'rock'
    },
    scissors: {
        score: 3,
        chars: ['C', 'Z'],
        beats: 'paper'
    }
}

export const getItem = char => Object.entries(map).find(([, {chars}]) => chars.includes(char))[0]

export const calculateScore = rounds => {
    let score = 0
    for (const round of rounds) {
        let [opponentPlay, myPlay] = round

        opponentPlay = getItem(opponentPlay);
        myPlay = getItem(myPlay);
        const myPlayInfo = map[myPlay]

        if (myPlayInfo.beats.includes(opponentPlay)) {
            score += SCORE_FOR_WINNING
        }

        if (myPlay === opponentPlay) {
            score += SCORE_FOR_DRAW
        }

        score += myPlayInfo.score
    }
    return score;
}
