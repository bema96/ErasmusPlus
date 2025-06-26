import { NewsArticle } from "../../components/NewsArticle/News";
import { MapView } from "../../components/MapView/Map";

export const Home = () => {
    
    return (
        <>
        <div>

            {/* Header */}
            <div className="border-b-2 border-black">
              <h1 className="uppercase text-6xl font-bold pb-3">
                Praktik i Udlandet
              </h1>
            </div>


            {/* Grid */}
            <div className="home-page flex h-screen w-full pt-5">

                {/* Nyheder */}
                <section className="news-section h-[82%] w-[800px] min-w-[350px]">
                    <h2 className="text-2xl font-bold mb-3 uppercase"
                    >
                      Nyheder
                    </h2>
                    <NewsArticle />
                </section>

                {/* Verdenskort */}
                <section className="map-section w-full h-screen flex justify-center">
                    <div style={{ height:'85%', width: '100%' }}>
                        <MapView />
                    </div>
                </section>
                
            </div>
        </div>
        </>
    )
}