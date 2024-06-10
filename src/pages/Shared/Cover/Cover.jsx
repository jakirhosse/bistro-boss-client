import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="cover background"
            strength={-200}
        >
            <div className="hero h-[400px]">
                <div className="hero-overlay bg-opacity-20 "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit magni itaque quod excepturi expedita facilis aperiam aut sunt deleniti! Quae.</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;
