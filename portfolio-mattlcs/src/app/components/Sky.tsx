"use client";

const Sky = ({numberOfStars}: {numberOfStars: number}) => {
    const stars = Array.from({length:numberOfStars}).map((_, index) => {
        const top = Math.random()*100;
        const left = Math.random()*100;
        return (
        <div key={index} 
        className="size-px bg-white rounded-full absolute top-1/2 left-1/2"
        style={{
            top: `${top}%`,
            left: `${left}%`,
        }}
        />
        );
    });
    return <div className="relative h-full w-full">{stars}</div>;
};

export default Sky;