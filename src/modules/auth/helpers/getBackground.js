
const background = "background/bg-img"

const seed = () => {
    const seed = Math.floor(Math.random() * (7 - 1) + 1)
    return seed
}

const setBackground = () => {
    return `${background}-${seed()}.jpg`
}

export default setBackground