import { NewsArticle } from "../../components/NewsArticle/News";
import { MapView } from "../../components/MapView/Map";
import { Language } from "../../components/Language/language";
import { useTranslation } from "react-i18next";


export const Home = () => {
  const { t } = useTranslation();

  return (
        <div className="p-5">
            {/* Page header with title */}
            <div className="border-b-2 border-black">
              <h1 className="uppercase text-6xl font-bold pb-3">
                { t('headline') }
              </h1>
            </div>

            {/* Language selector - top right */}
            <div className="flex absolute right-[200px] top-5 w-[130px] text-left">
                <Language />
            </div>

            {/* Author information - below language selector */}
            <div className="inline-block absolute right-0 top-[60px] w-[330px] text-left">
                <p>{ t('author') }</p>
            </div>


            {/* Main content grid - news and map side by side */}
            <div className="home-page flex h-screen w-full">

                {/* Left side - News section */}
                <section className="news-section h-[85%] w-[800px] min-w-[350px]">
                    <h2 className="text-2xl font-bold mb-3 pl-5 uppercase"
                    >
                    { t('news') }
                    </h2>
                    <NewsArticle />
                </section>

                {/* Right side - World map section */}
                <section className="map-section w-full h-screen flex justify-center">
                    <div style={{ height:'89%', width: '100%' }}>
                        <MapView />
                    </div>
                </section>
                
            </div>
        </div>
    )
}