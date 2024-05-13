const AboutUsSection = () => {
    return (
        <div className="flex h-[500px]">
            <div className="w-1/2  flex items-center justify-center">
                <div className="text-lg m-20">
                    <h2 className="text-3xl font-bold mb-4">О нас</h2>
                    <p>
                        Членство в КАПКИТ дает возможность активного участия в формировании и реализации стратегий
                        развития отрасли, обмена опытом и знаниями, а также защиты интересов своего бизнеса на
                        государственном и международном уровнях. Мы стремимся к содействию созданию инновационной среды
                        для ИКТ-предприятий, способствуя их конкурентоспособности и устойчивому развитию в цифровую
                        эпоху.
                    </p>
                </div>
            </div>
            <div className="w-1/2 bg-about-texture bg-cover bg-center"></div>

        </div>
    );
}

export default AboutUsSection;
