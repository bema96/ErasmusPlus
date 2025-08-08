import { NewsArticle } from "../../components/NewsArticle/News";
import { MapView } from "../../components/MapView/Map";
import { Language } from "../../components/Language/language";
import { useTranslation } from "react-i18next";


export const Home = () => {
  const { t } = useTranslation();

  return (
        <div className="relative flex flex-col justify-center items-center min-h-screen px-4 mt-8">

            <div className="w-full flex justify-between items-center">
                {/* Page header with title */}
                <div className="">
                <h1 className="uppercase text-6xl font-bold pb-3">
                    { t('headline') }
                </h1>
                </div>

                <div className="absolute right-[200px]">
                    {/* Language selector */}
                    <div className="relative">
                        <Language />
                    </div>

                    {/* Author information */}
                    <div className="relative">
                        <p>{ t('author') }</p>
                    </div>
                </div>
            </div>

            <span className="w-full border-b-2 border-black"></span>


            {/* Main content grid - news and map side by side */}
            <div className="home-page flex h-screen w-full pt-5">

                {/* Left side - News section */}
                <section className="news-section h-[82%] w-[800px] min-w-[350px]">
                    <h2 className="text-2xl font-bold mb-3 pl-5 uppercase"
                    >
                    { t('news') }
                    </h2>
                    <NewsArticle />
                </section>

                {/* Right side - World map section */}
                <section className="map-section w-full h-screen flex justify-center">
                    <div style={{ height:'85%', width: '100%' }}>
                        <MapView />
                    </div>
                </section>
                
            </div>
        </div>
    )
}