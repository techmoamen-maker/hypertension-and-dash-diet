
import React, { useState, useEffect, useRef } from 'react';
import slidesData from './constants';
import { SlideData, ContentBlock, ContentType } from './types';
import AnimatedBackground from './components/AnimatedBackground';
import { BrainIcon, EyeIcon, HeartIcon, BloodIcon, KidneyIcon } from './components/Icons';

const keywords = [
    'Hypertension', 'ضغط الدم المرتفع', 'Systolic', 'Diastolic', 'DASH',
    'Sodium', 'صوديوم', 'Potassium', 'بوتاسيوم', 'Blood Pressure', 'ضغط الدم',
    'SILENT KILLER', 'القاتل الصامت', 'BMI', 'Heart attack', 'Stroke', 'Heart failure'
];

const HighlightedText: React.FC<{ text: string }> = ({ text }) => {
    if (!text) return null;
    const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
    const parts = text.split(regex);

    return (
        <>
            {parts.map((part, i) =>
                keywords.some(kw => new RegExp(`^${kw}$`, 'i').test(part)) ? (
                    <span key={i} className="text-cyan-400 font-bold tracking-wider px-1 rounded bg-cyan-900/50 glow-text">
                        {part}
                    </span>
                ) : (
                    part
                )
            )}
        </>
    );
};

const SlideCard: React.FC<{ slide: SlideData, index: number }> = ({ slide, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, []);
    
    const organIcons: { [key: string]: React.ReactNode } = {
        "BRAIN": <BrainIcon />,
        "RETINA OF EYE": <EyeIcon />,
        "HEART": <HeartIcon />,
        "BLOOD": <BloodIcon />,
        "KIDNEYS": <KidneyIcon />
    };

    const renderContent = (contentBlock: ContentBlock) => {
        const { type, data } = contentBlock;
        switch (type) {
            case ContentType.PARAGRAPH:
            case ContentType.IMAGE_CAPTION:
                return <p className={`text-gray-300 leading-relaxed whitespace-pre-line ${type === ContentType.IMAGE_CAPTION ? 'text-center italic text-cyan-200/80' : ''}`}><HighlightedText text={data} /></p>;
            case ContentType.SUBTITLE:
                return <h4 className="text-xl font-bold text-cyan-400 mt-6 mb-3 glow-text"><HighlightedText text={data} /></h4>;
            case ContentType.LIST:
                return (
                    <ul className="list-none space-y-3 pr-4">
                        {data.map((item: string, i: number) => (
                            <li key={i} className="relative before:content-['▹'] before:absolute before:right-full before:top-1 before:mr-2 before:text-cyan-400 before:font-bold">
                               <HighlightedText text={item} />
                            </li>
                        ))}
                    </ul>
                );
            case ContentType.KEY_VALUE_LIST:
                 return (
                    <div className="space-y-4">
                        {Object.entries(data).map(([key, value]) => (
                            <div key={key}>
                                <h5 className="font-bold text-lg text-fuchsia-400 flex items-center gap-3">
                                   {organIcons[key] || null}
                                   <HighlightedText text={key} />
                                </h5>
                                {Array.isArray(value) ? (
                                     <ul className="list-disc pr-8 mt-2 space-y-1 text-gray-300">
                                        {value.map((item: string, i: number) => <li key={i}><HighlightedText text={item} /></li>)}
                                     </ul>
                                ) : (
                                   <p className="text-gray-300 leading-relaxed mt-1 pr-4 whitespace-pre-line"><HighlightedText text={value as string} /></p>
                                )}
                            </div>
                        ))}
                    </div>
                );
            case ContentType.TABLE:
                return (
                    <div className="overflow-x-auto">
                        <table className="w-full text-right border-collapse">
                            <thead>
                                <tr>
                                    {data.headers.map((header: string, i: number) => <th key={i} className="p-3 font-bold uppercase bg-gray-900/50 text-cyan-400 border border-gray-700"><HighlightedText text={header} /></th>)}
                                </tr>
                            </thead>
                            <tbody>
                                {data.rows.map((row: string[], i: number) => (
                                    <tr key={i} className="bg-gray-800/30 hover:bg-gray-800/60 transition-colors duration-200">
                                        {row.map((cell: string, j: number) => (
                                            <td key={j} className="p-3 border border-gray-700 text-gray-300">
                                                {cell.split('<br>').map((line, k) => <div key={k} className="font-spacemono text-sm md:text-base"><HighlightedText text={line} /></div>)}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            case ContentType.FOOD_CHART:
                return (
                     <div className="grid md:grid-cols-2 gap-6 mt-4">
                        <div className="bg-green-900/30 p-4 border-l-4 border-green-400 table-clip">
                            <h5 className="font-bold text-lg text-green-400 glow-text">{data.enjoy.category}</h5>
                            <div className="mt-2 space-y-2">
                                {data.enjoy.items.map((item:string, i:number) => <div key={i} dangerouslySetInnerHTML={{__html: item.replace('<br>', '<br/><span class="text-gray-300 font-normal">') + '</span>'}} className="text-green-200 font-semibold" />)}
                            </div>
                        </div>
                        <div className="bg-red-900/30 p-4 border-l-4 border-red-400 table-clip">
                            <h5 className="font-bold text-lg text-red-400 glow-text">{data.avoid.category}</h5>
                             <div className="mt-2 space-y-2">
                                {data.avoid.items.map((item:string, i:number) => <div key={i} dangerouslySetInnerHTML={{__html: item.replace('<br>', '<br/><span class="text-gray-300 font-normal">') + '</span>'}} className="text-red-200 font-semibold" />)}
                            </div>
                        </div>
                    </div>
                );
            case ContentType.MEAL_PLAN:
                return (
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                        {data.meals.map((meal: { name: string; items: string[] }, i: number) => (
                            <div key={i} className="bg-gray-900/50 p-4 border-t-2 border-fuchsia-500">
                                <h5 className="font-bold text-fuchsia-400">{meal.name}</h5>
                                <ul className="list-disc pr-5 mt-2 space-y-1 text-sm text-gray-300">
                                    {meal.items.map((item, j) => <li key={j}><HighlightedText text={item}/></li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                );
            case ContentType.SHOPPING_LIST:
                 return (
                    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 mt-4">
                        {Object.entries(data).map(([category, items]) => (
                             <div key={category} className="mb-4 break-inside-avoid bg-gray-900/30 p-3">
                                <h5 className="font-bold text-cyan-400 border-b border-cyan-700 pb-1 mb-2">{category}</h5>
                                <p className="text-sm text-gray-300 leading-relaxed"><HighlightedText text={items as string} /></p>
                             </div>
                        ))}
                    </div>
                );
            case ContentType.MINERAL_INFO:
                return (
                    <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-yellow-500/30 p-6 text-center card-clip">
                        <h4 className="text-2xl font-bold text-yellow-400 glow-text">{data.title}</h4>
                        <p className="mt-4 text-gray-300"><HighlightedText text={data.description} /></p>
                        <div className="my-6">
                            <div className="text-5xl font-spacemono font-bold text-white glow-text">{data.dailyGoal}</div>
                            <div className="text-yellow-400/80 text-sm">Daily Goal</div>
                        </div>
                        <p className="mt-2 text-sm italic text-gray-400"><HighlightedText text={data.challenge} /></p>
                        <p className="mt-4 font-semibold text-green-400 bg-green-900/30 py-2 px-4 rounded"><HighlightedText text={data.solution} /></p>
                    </div>
                );
            case ContentType.NUTRIENT_GOALS:
                 return (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                        {data.map((goal: { name: string; value: string; footnote?: string }, i: number) => (
                            <div key={i} className="bg-gray-900/40 p-4 text-center border-b-2 border-cyan-600">
                                <div className="text-2xl font-spacemono font-bold text-white"><HighlightedText text={goal.value} /></div>
                                <div className="text-cyan-300 text-sm mt-1"><HighlightedText text={goal.name} /></div>
                                {goal.footnote && <p className="text-xs text-gray-400 mt-2 italic">{goal.footnote}</p>}
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div ref={ref} className={`fade-in-section ${isVisible ? 'is-visible' : ''} mb-12`}>
            <div className="relative bg-black/30 backdrop-blur-sm border border-cyan-500/20 p-6 md:p-8 card-clip card-glow transition-shadow duration-300">
                <div className="absolute -top-3 -right-3 font-spacemono text-5xl font-bold text-cyan-800/50 -z-10">
                    {String(slide.id).padStart(2, '0')}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-300 glow-text font-spacemono" dir="ltr">
                    <span className="text-cyan-700 mr-2">#{String(index + 1).padStart(2, '0')}</span>{slide.title}
                </h3>
                <div className="space-y-4">
                    {slide.content.map((block, i) => (
                        <div key={i}>{renderContent(block)}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};


const App: React.FC = () => {
  return (
    <>
      <AnimatedBackground />
      <main className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <header className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white glow-text">
                <span className="text-cyan-400">Hypertension</span> AI Deep Dive
            </h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                An interactive journey into understanding High Blood Pressure, its risks, and the DASH diet, presented by Dr. Eman Kamal.
            </p>
        </header>

        <div>
            {slidesData.map((slide, index) => (
               <SlideCard key={slide.id} slide={slide} index={index}/>
            ))}
        </div>
        
      </main>
    </>
  );
}

export default App;
