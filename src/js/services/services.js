import {
    CountUp
} from 'countup.js';

const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};


const getZero = (number) => {
    if (number >= 0 && number < 10) {
        return `0${number}`;
    }
    return number;
};

export {
    postData,
    getResource,
    getZero
};