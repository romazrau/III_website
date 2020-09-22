const randomColorString = () => {
    const random255 = () => {
        return Math.floor(Math.random()*100+155);
    }

    return `rgb(${random255()},${random255()},${random255()})`;
}

export {randomColorString};