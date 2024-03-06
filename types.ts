let isOpen: boolean
isOpen = true

let message: string
message = `foo ${isOpen}`

let total: number
total = 43.23

let items: number[]
items = [1, 2, 3]

let title: [number, string]
title = [1, 'foo'] 

enum Colors {
    white = "#fff",
    black = "#000"
}

function logger(): void{ 
    console.log('foo');
}

type Bla = string | undefined

let cart: object;

cart = {
    'key': '1',
}

// Type Inference
let msg2 = "Hello World";