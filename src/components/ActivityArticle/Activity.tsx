import type { ActivityProps } from "../../types";

// Popup component for map markers
export function ActivityArticles({ activity }: { activity: ActivityProps }) {
    return (
        <div className="w-full">

            {/* Header med billede som baggrund */}
            <div className="relative h-[280px] bg-gradient-to-r from-blue-500 to-purple-600 mb-6 overflow-hidden">
                {activity.image && (
                    <img 
                        src={activity.image} 
                        alt={activity.title}
                        className="w-full h-full object-cover absolute inset-0"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>

            {/* Indhold */}
            <div className="px-6">
                {/* Titel */}
                <h2 className="text-3xl font-bold text-gray-800 mb-4 leading-tight">
                    {activity.title}
                </h2>

                {/* Info cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                        <h4 className="font-semibold text-blue-800 text-sm uppercase tracking-wide mb-1">
                            Hvem
                        </h4>
                        <p className="text-gray-700 font-medium">
                            {activity.who || 'Ikke angivet'}
                        </p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                        <h4 className="font-semibold text-green-800 text-sm uppercase tracking-wide mb-1">
                            Lokation
                        </h4>
                        <p className="text-gray-700 font-medium">
                            {activity.city || 'Ikke angivet'}
                        </p>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                        <h4 className="font-semibold text-purple-800 text-sm uppercase tracking-wide mb-1">
                            Periode
                        </h4>
                        <p className="text-gray-700 font-medium text-sm">
                            {activity.startDate && activity.endDate 
                                ? `${activity.startDate} til ${activity.endDate}`
                                : 'Ikke angivet'
                            }
                        </p>
                    </div>
                </div>

                {/* Beskrivelse */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-sm border border-gray-200 mb-3 overflow-y-auto">
                    <div className="text-gray-600 leading-7 break-words px-6 pb-5 text-base font-light activity-description-scroll overflow-y-auto" 
                    style={{ maxHeight: '300px' }}
                    >
                    <h4 className="font-semibold text-gray-800 px-6 mb-4 text-xl tracking-wide pl-0 pt-5">
                        Om aktiviteten
                    </h4>
                    {activity.description || 'Ingen beskrivelse tilgængelig for denne aktivitet.'}
                    </div>
                </div>

            </div>
        </div>
    );
}