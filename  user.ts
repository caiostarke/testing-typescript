// accountInfo
// charInfo

type AccountInfo = {
    id: number,
    name: string,
    email?: string,
}

const account: AccountInfo = {
    id: 123,
    name: 'joe',
    email: 'joe@me.com'
} 

type CharInfo = {
    nickname: string,
    level: number,
}

const char: CharInfo = {
    nickname: 'kaer',
    level : 1200
}

// Intersection
type PlayInfo = AccountInfo & CharInfo 

const player: PlayInfo = {
    id: 123,
    name: 'joe',
    email: 'joe@me.com',
    nickname: 'kaer',
    level: 1200
}