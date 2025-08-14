import { NewsArticle } from "../../components/NewsArticle/News";
import { MapView } from "../../components/MapView/Map";
import { Language } from "../../components/Language/language";
import { useTranslation } from "react-i18next";
import { useNews } from "../../hooks/useNewsArticles"; // Import hook


export const Home = () => {
  const { t } = useTranslation();
  useNews(); // Call hook without destructuring unused elements

  return (
        <div className="max-h-screen flex flex-col px-4 mt-[30px]">

      
                {/* Page header with title */}
                <div className="flex float-left">
                    <h1 className="uppercase text-6xl font-bold pb-3 m-0">
                        { t('headline') }
                    </h1>
                </div>

                <div className="absolute w-[330px] right-[10px] top-[10px] pb-1 text-left">
                    {/* Language selector */}
                    <div className="relative left-[20px] mb-2">
                        <Language />
                    </div>

                    {/* Author information */}
                    <div className="relative m-0">
                        <p>{ t('author') }</p>
                    </div>
                </div>
       

            <span className="w-full border-b-2 border-black"></span>


            {/* Main content grid - news and map side by side */}
            <div className="home-page flex h-screen w-full pt-5">

                {/* Left side - News section */}
                <section className="news-section h-[100%] w-[800px] min-w-[350px]">
                    <div className="flex items-center mb-3 pl-5">
                      <h2 className="text-2xl font-bold uppercase">{ t('news') }</h2>
                      <button
                        className="ml-4 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                        onClick={() => window.location.reload()}
                        title="Refresh page"
                      >
                        Refresh
                      </button>
                    </div>
                    <NewsArticle />
                </section>

                {/* Right side - World map section */}
                <section className="map-section w-full h-screen flex justify-center">
                    <div style={{ height:'100%', width: '100%' }}>
                        <MapView />
                    </div>
                </section>
                
            </div>
        </div>
    )
}