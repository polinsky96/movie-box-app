import * as Vibrant from 'node-vibrant'

const getPallete = async (src) => {
    const vibrant = new Vibrant(src);
    const palette = await vibrant.getPalette();

    console.log(palette);

    return palette;
}

export default getPallete;