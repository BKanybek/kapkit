const HeroSection = () => {
    return (
        <div className='relative w-full h-screen flex justify-center items-center'>
            <div className='absolute inset-0 w-full h-full bg-cover bg-center bg-hero-pattern'></div>
            <div className='absolute inset-0 w-full h-full bg-black opacity-70'></div>
            <div className='relative z-10 text-white'>
                <div className="max-w-6xl mx-auto px-6 flex flex-col gap-10">
                    <h1 className="text-6xl md:text-7xl text-center tracking-wide font-semibold">Кыргызская ассоциация
                        предприятий компьютерных и информативных технологий</h1>
                    <p className="text-lg md:text-xl">Мы - некоммерческая организация, объединяющая юридические лица,
                        работающие в области компьютерных и информационных технологий.</p>
                    <p className="text-lg md:text-xl">Цель КАПКИТ - поддержка развития и создание благоприятных условий
                        для ИКТ-компаний.</p>
                    <div className="flex justify-center mt-10">
                        <button className="bg-orange-500 text-white font-semibold py-5 px-10 rounded mr-4 uppercase ">Подробнее</button>
                        <button className="bg-gray-200 text-black font-semibold py-5 px-10 rounded uppercase">Связаться</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;