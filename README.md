# ErasmusPlus - Fil-for-Fil Analyse

## **1. main.tsx**

**Funktion:** Starter React-applikationen og wrapper den med nødvendige providers for UI komponenter og routing. Dette er entry point for hele applikationen.

**Metoder & Koncepter:**

• **createRoot** - React 18's moderne mounting API  
 _Hvorfor:_ Bedre performance end legacy ReactDOM.render

• **StrictMode** - Development mode til at fange fejl  
 _Hvorfor:_ Hjælper med at identificere problemer under udvikling

• **Provider Pattern** - ChakraProvider og BrowserRouter wrapper app  
 _Hvorfor:_ Giver global funktionalitet (UI komponenter og routing)

• **Conditional Rendering** - `if (rootElement)` tjekker DOM element eksisterer  
 _Hvorfor:_ Forhindrer crashes hvis root element mangler

• **Error Throwing** - `throw new Error()` hvis root ikke findes  
 _Hvorfor:_ Explicit fejlhåndtering ved setup problemer

---

## **2. App.tsx**

**Funktion:** Definerer routing struktur for applikationen med React Router. Sætter op nested routes med layout wrapper omkring specifikke sider.

**Metoder & Koncepter:**

• **React Router** - `Routes` og `Route` komponenter  
 _Hvorfor:_ Client-side navigation uden page refreshes

• **Nested Routing** - Route med children routes  
 _Hvorfor:_ Deler layout mellem sider

• **Element Prop** - `element={<Component />}` syntax  
 _Hvorfor:_ Modern React Router v6 approach

• **Index Route** - Route uden path der matcher parent  
 _Hvorfor:_ Default content når man besøger root URL

---

# Layout

## **3. MainLayout.tsx**

**Funktion:** Wrapper layout der omgiver alle sider i applikationen. Giver konsistent styling og struktur. Indeholder Outlet for rendering af child routes.

**Metoder & Koncepter:**

• **React Router Outlet** - Placeholder for child routes  
 _Hvorfor:_ Renders matched route content inside layout

• **Chakra UI Box** - Styled container komponent  
 _Hvorfor:_ Consistent styling med theme system

• **Layout Shell Pattern** - Minimal wrapper structure  
 _Hvorfor:_ Fremtidssikret for flere sider og navigation

• **Viewport Units** - `minH="100vh"` fuld skærm højde  
 _Hvorfor:_ Sikrer layout fylder hele viewporten

---

# Pages

## **4. Home.tsx**

**Funktion:** Hovedsiden der kombinerer nyheder og kort i responsive layout. Viser forskellige layouts for desktop og mobile med flexbox structure.

**Metoder & Koncepter:**

• **Responsive Display** - `display={{ base: "none", lg: "flex" }}`  
 _Hvorfor:_ Forskellige layouts for mobile vs desktop

• **Flexbox Layout** - HStack (horizontal) og VStack (vertical)  
 _Hvorfor:_ Moderne CSS layout system

• **Viewport Units** - `h="100vh"` og `w="100vw"`  
 _Hvorfor:_ Fuld browser window coverage

• **Flex Properties** - `flex="1"` for expandable komponenter  
 _Hvorfor:_ Automatisk space distribution

• **Conditional Layout** - Mutually exclusive desktop/mobile layouts  
 _Hvorfor:_ Optimeret brugeroplevelse på forskellige enheder

---

# Types

## **5. types/index.ts**

**Funktion:** Centraliseret TypeScript type definitions for hele applikationen. Definerer data strukturer for activities, news, props og API responses.

**Metoder & Koncepter:**

• **Type Definitions** - `type ActivityProps = {...}`  
 _Hvorfor:_ Type safety og IntelliSense support

• **Interface Definitions** - `interface ModalProps {...}`  
 _Hvorfor:_ Contract definitions for komponenter

• **Union Types** - `string | null`  
 _Hvorfor:_ Håndterer multiple mulige typer

• **Optional Properties** - `property?: string`  
 _Hvorfor:_ Flexible props der ikke er required

• **Export Pattern** - Alle types exporteres  
 _Hvorfor:_ Single source of truth for type definitions

---

# Client

## **6. contentful.ts**

**Funktion:** Opret Contentful client og generic hook til at hente data fra CMS. Håndterer API kald, error states og environment variables.

**Metoder & Koncepter:**

• **Environment Variables** - `import.meta.env.VITE_CONTENTFUL_SPACE`  
 _Hvorfor:_ Sikker håndtering af API nøgler

• **Logical NOT Operator** - `!SPACE_ID` for validation check  
 _Hvorfor:_ Tjekker om environment variable er falsy/missing

• **Logical OR Operator** - `!SPACE_ID || !ACCESS_TOKEN` for combined check  
 _Hvorfor:_ True hvis nogen af environment variables mangler

• **Logical OR Assignment** - `SPACE_ID || ''` fallback for missing values  
 _Hvorfor:_ Brug empty string hvis environment variable er undefined

• **Client Configuration** - `contentful.createClient()`  
 _Hvorfor:_ Setup connection til Contentful CMS

• **Generic Hook** - `useContentful<T>(contentType: string)`  
 _Hvorfor:_ Reusable data fetching med type safety

• **useState Hook** - State for data, loading og error  
 _Hvorfor:_ Reaktiv UI baseret på API status

• **Union Types** - `useState<string | null>(null)`  
 _Hvorfor:_ Error state kan være string eller null

• **useCallback** - Memoized fetch function  
 _Hvorfor:_ Stable function reference for useEffect

• **Early Return Pattern** - Return early hvis Contentful ikke konfigureret  
 _Hvorfor:_ Undgå unødvendige API kald

• **Optional Chaining** - `item.fields.image?.fields?.file?.url`  
 _Hvorfor:_ Sikker navigation gennem nested objects

• **Ternary Operator** - `condition ? value1 : value2` for image URL  
 _Hvorfor:_ Conditional value assignment baseret på URL existence

• **Template Literal** - `https:${item.fields.image.fields.file.url}`  
 _Hvorfor:_ String interpolation for at bygge complete URL

• **Error Handling** - Try-catch omkring API kald  
 _Hvorfor:_ Graceful degradation ved API fejl

• **Spread Operator** - `...item.fields` for property spreading  
 _Hvorfor:_ Flatten object properties ind i nyt object

---

# Hooks

## **7. useActivityArticles.ts**

**Funktion:** Specifik hook der wrapper useContentful for activity data. Giver clean API til komponenter der skal hente aktiviteter.

**Metoder & Koncepter:**

• **Custom Hook Pattern** - `useActivity()` wrapper  
 _Hvorfor:_ Specific hook for activity data

• **Generic Type Application** - `useContentful<ActivityProps>`  
 _Hvorfor:_ Type safety for activity data structure

• **Single Responsibility** - Kun activity data fetching  
 _Hvorfor:_ Clear separation of concerns

---

## **8. useNewsArticles.ts**

**Funktion:** Specifik hook der wrapper useContentful for news data. Giver clean API til komponenter der skal hente nyheder.

**Metoder & Koncepter:**

• **Custom Hook Pattern** - `useNews()` wrapper  
 _Hvorfor:_ Specific hook for news data

• **Generic Type Application** - `useContentful<NewsProps>`  
 _Hvorfor:_ Type safety for news data structure

• **Single Responsibility** - Kun news data fetching  
 _Hvorfor:_ Clear separation of concerns

---

## **9. useActivityModal.ts**

**Funktion:** Håndterer al state for activity modals - hvilken aktivitet er valgt, om modal er åben, osv. Centraliseret modal state management.

**Metoder & Koncepter:**

• **useState Hook** - State for selected activity og modal open status  
 _Hvorfor:_ Reaktiv modal state management

• **Union Types** - `ActivityProps | null` for selected activity  
 _Hvorfor:_ Håndterer både valgt og ikke-valgt states

• **Coordinated State Updates** - Multiple setState calls i samme function  
 _Hvorfor:_ Synkroniseret modal og data state

• **Cleanup Pattern** - Reset state ved modal close  
 _Hvorfor:_ Prevents memory leaks og stale data

• **Object Return Pattern** - Return både state og handler functions  
 _Hvorfor:_ Clean API for modal consumers

---

## **10. useFullscreen.ts**

**Funktion:** Hook til at håndtere fullscreen funktionalitet. Wrapper browser's Fullscreen API med React state management.

**Metoder & Koncepter:**

• **useState Hook** - Track fullscreen status  
 _Hvorfor:_ Reaktiv UI baseret på fullscreen state

• **useCallback Hook** - Memoized functions for stability  
 _Hvorfor:_ Stable function references for useEffect dependencies

• **Double NOT Operator** - `!!()` for boolean conversion  
 _Hvorfor:_ Konverter truthy/falsy expression til true/false boolean

• **Logical OR Operator** - `||` for browser compatibility checks  
 _Hvorfor:_ Support different fullscreen APIs across browsers

• **Type Assertions** - `(document as any).webkitFullscreenEnabled`  
 _Hvorfor:_ Access browser-specific properties ikke i TypeScript

• **Browser API Integration** - `document.documentElement.requestFullscreen()`  
 _Hvorfor:_ Native fullscreen support

• **Logical NOT Operator** - `!document.fullscreenElement` check  
 _Hvorfor:_ Determine hvis vi skal enter eller exit fullscreen

• **Async/Await Pattern** - `async/await` for fullscreen API calls  
 _Hvorfor:_ Proper handling af asynchronous browser APIs

• **Try-Catch Error Handling** - Error boundaries for API calls  
 _Hvorfor:_ Graceful fallback hvis browser ikke supporterer

• **useEffect Hook** - Event listeners for fullscreen changes  
 _Hvorfor:_ Sync state med browser fullscreen events

• **Double NOT Operator** - `!!document.fullscreenElement` for state update  
 _Hvorfor:_ Convert DOM element reference til boolean value

• **Cleanup Function** - Remove event listeners  
 _Hvorfor:_ Prevent memory leaks ved component unmount

• **Cross-Browser Event Handling** - Multiple event listeners  
 _Hvorfor:_ Compatibility med forskellige browser implementations

---

# Components - Shared

## **11. LoadingErrorHandling.tsx**

**Funktion:** Centraliseret komponent til loading states, error handling og empty data. Giver konsistent user feedback gennem hele applikationen.

**Metoder & Koncepter:**

• **Default Parameters** - `loadingText = "Indlæser..."`  
 _Hvorfor:_ Sensible defaults reduce boilerplate

• **Props Destructuring** - `{ loading, error, isEmpty, loadingText, children }`  
 _Hvorfor:_ Clean udtrækning af props med readable names

• **Union Type Props** - `error: string | null`  
 _Hvorfor:_ Type safety for error handling

• **Guard Clauses** - Early returns for forskellige states  
 _Hvorfor:_ Clean logic flow uden nested conditions

• **Logical AND Operator** - `loading &&` for conditional rendering  
 _Hvorfor:_ Vis loading UI kun hvis loading state er true

• **React Fragment** - `<>...</>` wrapper  
 _Hvorfor:_ Group elements uden extra DOM node

• **Conditional Component Rendering** - Forskellige UI for loading/error/empty  
 _Hvorfor:_ Appropriate feedback for hver state

• **Chakra UI Components** - Spinner, Alert, Text  
 _Hvorfor:_ Consistent styling og accessibility

• **Children Prop Pattern** - `{children}` render when all checks pass  
 _Hvorfor:_ Flexible content composition

---

## **12. FullscreenButton.tsx**

**Funktion:** Button komponent der toggle fullscreen mode. Bruger useFullscreen hook og viser appropriate icon baseret på current state.

**Metoder & Koncepter:**

• **Custom Hook Usage** - `useFullscreen()` integration  
 _Hvorfor:_ Separation of business logic fra UI

• **Props Destructuring** - `{ isFullscreen, toggleFullscreen, isSupported }`  
 _Hvorfor:_ Clean udtrækning af hook return values

• **Early Return with Logical NOT** - `!isSupported` check  
 _Hvorfor:_ Render nothing hvis browser ikke supporterer fullscreen

• **Ternary Operator** - `isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'`  
 _Hvorfor:_ Conditional text baseret på current state

• **Conditional Icon Rendering** - `isFullscreen ? <ExitIcon /> : <EnterIcon />`  
 _Hvorfor:_ Different icons for enter/exit fullscreen states

• **Event Handlers** - onClick handler for toggle functionality  
 _Hvorfor:_ User interaction handling

• **Chakra UI Button** - Styled button med accessibility  
 _Hvorfor:_ Consistent styling og keyboard support

• **React Icons Integration** - FontAwesome icons via react-icons  
 _Hvorfor:_ Semantic icons der matcher functionality

---

# Components - MapView

## **13. mapConfig.ts**

**Funktion:** Konfigurerer alt det tekniske ved kortet - udseende, begrænsninger, og custom markers. Centraliseret map configuration.

**Metoder & Koncepter:**

• **Module Imports** - Asset imports for marker icons  
 _Hvorfor:_ Bundler includes files i build

• **TypeScript Compiler Directives** - `@ts-ignore` for Leaflet fix  
 _Hvorfor:_ Workaround for third-party library issues

• **Object Configuration Pattern** - Config objects for map og markers  
 _Hvorfor:_ Maintainable configuration management

• **Type Assertions** - `as [number, number]` for coordinate tuples  
 _Hvorfor:_ TypeScript tuple type enforcement

• **Geographic Coordinate System** - Lat/lon for map positioning  
 _Hvorfor:_ Standard geographic positioning

---

## **14. MapMarkers.tsx**

**Funktion:** Grupperer aktiviteter smart efter lokation og viser dem som markers. Løser problemet med overlappende aktiviteter på samme koordinater.

**Metoder & Koncepter:**

• **Props Destructuring** - `{ activityArticles, onMarkerClick }: MapMarkersProps`  
 _Hvorfor:_ Clean udtrækning af props med type annotation

• **useMemo Hook** - Performance optimization for marker processing  
 _Hvorfor:_ Undgå expensive recalculations på every render

• **Negation + Optional Chaining** - `!activityArticles?.length` for early return  
 _Hvorfor:_ Tjek om array er tom eller undefined

• **Array.filter()** - Filter activities med valid coordinates  
 _Hvorfor:_ Data validation før processing

• **Logical AND** - `activity.location?.lat && activity.location?.lon` i filter  
 _Hvorfor:_ Kun activities med begge koordinater

• **Optional Chaining** - `activity.location?.lat` sikker property access  
 _Hvorfor:_ Undgå crashes hvis location er null/undefined

• **Array.reduce()** - Group activities by coordinate string  
 _Hvorfor:_ Aggregate activities på samme location

• **Template Literals** - `${activity.location.lat},${activity.location.lon}` for keys  
 _Hvorfor:_ Unique string identifier for locations

• **Logical OR Assignment** - `acc[key] = acc[key] || []`  
 _Hvorfor:_ Initialize array hvis key ikke eksisterer

• **Type Assertion** - `{} as Record<string, ActivityProps[]>`  
 _Hvorfor:_ Fortæl TypeScript den præcise type

• **Object.entries()** - Convert grouped object til array  
 _Hvorfor:_ Transform data for rendering

• **Array Destructuring** - `[coords, activities]` fra entries  
 _Hvorfor:_ Udtræk key og value fra entry tuple

• **String.split() + map()** - `coords.split(',').map(Number)`  
 _Hvorfor:_ Konverter coordinate string tilbage til numbers

• **Type Assertion** - `[lat, lon] as [number, number]`  
 _Hvorfor:_ TypeScript tuple type for position

• **Array.map() Rendering** - Transform markers til JSX  
 _Hvorfor:_ Standard React list rendering pattern

• **Template Literal Keys** - `${marker.position[0]}-${marker.position[1]}`  
 _Hvorfor:_ Unique React keys for list items

• **Object Literal** - `eventHandlers={{ click: () => ... }}`  
 _Hvorfor:_ Event handler configuration object

• **Arrow Function + Closure** - `() => onMarkerClick(marker.activities)`  
 _Hvorfor:_ Inline function der har adgang til marker data

• **React Fragment** - `<>...</>` wrapper  
 _Hvorfor:_ Group elements uden extra DOM node

---

## **15. Map.tsx**

**Funktion:** Kortes "hjernecentral" - koordinerer data loading, user interactions, og styrer hvilke modals der vises. Main map controller component.

**Metoder & Koncepter:**

• **Destructuring Assignment** - `{ data: activityArticles, loading, error, refetch } = useActivity()`  
 _Hvorfor:_ Clean udtrækning af properties fra hook return object

• **Array Destructuring** - `[selectedActivities, setSelectedActivities] = useState()`  
 _Hvorfor:_ Udtræk state value og setter function fra useState

• **Union Type State** - `useState<ActivityProps[] | null>(null)`  
 _Hvorfor:_ State kan være array af activities eller null

• **useEffect + setInterval** - Auto-refresh data hver 5 minut  
 _Hvorfor:_ Holder map data frisk uden manual refresh

• **Cleanup Function** - `return () => clearInterval(fetchActivityInterval)`  
 _Hvorfor:_ Forhindrer memory leaks når component unmounts

• **Conditional Logic** - `if (activities.length === 1)` i handleMultipleActivities  
 _Hvorfor:_ Forskellige handlinger baseret på antal activities

• **Array Index Access** - `activities[0]` for første element  
 _Hvorfor:_ Hent specifik activity fra array

• **Logical OR Operator** - `if (loading || error)` for early return  
 _Hvorfor:_ Vis loading/error hvis nogen af conditions er true

• **Spread Operator** - `{...mapOptions}` spread props til MapContainer  
 _Hvorfor:_ Udvid alle properties fra mapOptions object som props

• **Object Literal** - `style={{ height: "100%", width: "100%" }}`  
 _Hvorfor:_ Inline CSS styling object

• **Double NOT Operator** - `!!selectedActivities` for boolean conversion  
 _Hvorfor:_ Konverter truthy/falsy værdi til true/false boolean

• **Logical OR for Fallback** - `selectedActivities || []` i activities prop  
 _Hvorfor:_ Brug tom array hvis selectedActivities er null

• **Arrow Function** - `() => setSelectedActivities(null)` i onClose  
 _Hvorfor:_ Inline function til modal close handling

• **Conditional Rendering** - `{selectedActivity && <ActivityArticles />}`  
 _Hvorfor:_ Vis kun component hvis selectedActivity eksisterer

• **React Fragment** - `<>...</>` wrapper uden extra DOM element  
 _Hvorfor:_ Group multiple elements uden ekstra div

• **Template Literal** - Template strings i TileLayer URL med `{z}/{y}/{x}` placeholders  
 _Hvorfor:_ Dynamic URL construction for map tiles

---

## **16. MultiActivityModal.tsx**

**Funktion:** Når flere aktiviteter har samme koordinater, viser denne modal en oversigt så brugeren kan vælge hvilken de vil se. Intelligent activity selection modal.

**Metoder & Koncepter:**

• **Strict Equality Comparison** - `activities.length === 1` for exact check  
 _Hvorfor:_ Precise check for single activity (strict equality)

• **Strict Equality Comparison** - `activities.length === 2` for dual activity check  
 _Hvorfor:_ Exact comparison for two activities layout

• **Dynamic Styling Functions** - `getGridCols()` baseret på antal activities  
 _Hvorfor:_ Content-aware responsive design

• **Responsive Object Values** - `{ base: "400px", md: "800px" }`  
 _Hvorfor:_ Chakra UI responsive value system

• **Color Mode Integration** - `useColorModeValue()` for theme support  
 _Hvorfor:_ Dark/light mode compatibility

• **Array.map() Rendering** - Transform activities til UI components  
 _Hvorfor:_ Standard React list rendering pattern

• **Logical AND for Conditional Rendering** - `activity.image &&` for billeder  
 _Hvorfor:_ Vis kun billede hvis det eksisterer

• **Event Handler Inline Functions** - `onClick={() => onActivitySelect(activity)}`  
 _Hvorfor:_ Pass specific activity data via closure

• **Arrow Function + Closure** - Inline function med captured activity  
 _Hvorfor:_ Event handler med adgang til loop variable

• **Chakra UI State Props** - `_hover` for interactive feedback  
 _Hvorfor:_ Visual feedback for user interactions

• **Responsive Grid Classes** - `grid-cols-1 md:grid-cols-2` patterns  
 _Hvorfor:_ Mobile-first responsive design

---

# Components - Content

## **17. News.tsx**

**Funktion:** Henter og viser nyheder fra Contentful i en scrollbar liste med billeder og formateret tekst. Komponenten håndterer loading states, error handling og tom data gracefully. Sorterer artikler efter dato og opdaterer automatisk hver 5. minut.

**Metoder & Koncepter:**

• **useNews()** - Custom hook til at hente news data  
 _Hvorfor:_ Specific hook for news der wrapper useContentful

• **Destructuring** - `{ data: newsArticles, loading, error, refetch }`  
 _Hvorfor:_ Clean udtrækning af properties fra hook return object

• **useEffect + setInterval** - Automatisk opdatering hver 5 minut  
 _Hvorfor:_ Holder nyheder friske uden manuel refresh

• **Cleanup Function** - `return () => clearInterval()`  
 _Hvorfor:_ Forhindrer memory leaks når component unmounts

• **Logical NOT Operator** - `!loading` for condition checks  
 _Hvorfor:_ Check om loading er false

• **Logical AND Operator** - `!loading && !error && newsArticles.length === 0`  
 _Hvorfor:_ Alle conditions skal være true for isEmpty

• **Strict Equality** - `=== 0` for exact comparison  
 _Hvorfor:_ Precise check for array length

• **Logical OR Operator** - `loading || error || isEmpty` for early return  
 _Hvorfor:_ Show loading component hvis nogen condition er true

• **Date Constructor + Intl API** - `new Date().toLocaleDateString('da-DK')`  
 _Hvorfor:_ Dansk formatering med weekday, dag, måned og år

• **Spread Operator** - `[...newsArticles].sort()`  
 _Hvorfor:_ Kopierer array før sortering for at undgå mutation

• **Array.sort() + getTime()** - Sorterer efter dato (nyeste første)  
 _Hvorfor:_ Viser mest relevante nyheder øverst

• **Logical AND for Conditional Rendering** - `article.image &&` for billeder  
 _Hvorfor:_ Vis kun billede hvis det eksisterer

• **typeof Operator** - `typeof article.location === 'string'` for type check  
 _Hvorfor:_ Determine hvordan location skal displays

• **Ternary Operator** - `condition ? stringValue : templateLiteral`  
 _Hvorfor:_ Conditional formatting for location display

• **Optional Chaining** - `article.location?.lat` for safe property access  
 _Hvorfor:_ Undgå crashes hvis location object er null/undefined

• **Template Literals** - `Lat: ${lat}, Lon: ${lon}` for coordinate display  
 _Hvorfor:_ String interpolation for dynamic content

• **CSS Direction** - `direction: 'rtl'` og `direction: 'ltr'`  
 _Hvorfor:_ Custom scrollbar styling ved at manipulere text direction

---

## **18. Activity.tsx**

**Funktion:** Viser detaljeret information om en praktikplads med billede, lokation, datoer og beskrivelse. Rich activity display component med error handling.

**Metoder & Koncepter:**

• **Interface Definition** - `ActivityArticlesProps` for component props  
 _Hvorfor:_ Type contract for component input

• **Props Destructuring** - `{ activity }: ActivityArticlesProps`  
 _Hvorfor:_ Clean udtrækning af activity object

• **Logical AND for Conditional Rendering** - `activity.image &&` for billede  
 _Hvorfor:_ Vis kun billede hvis det eksisterer

• **Logical OR Fallback** - `activity.who || 'Ikke angivet'`  
 _Hvorfor:_ Fallback text hvis who property er falsy

• **Logical OR Fallback** - `activity.city || 'Ikke angivet'`  
 _Hvorfor:_ Default value hvis city property mangler

• **Logical AND Operator** - `activity.startDate && activity.endDate` for date check  
 _Hvorfor:_ Kun vis date range hvis begge datoer eksisterer

• **Ternary Operator** - `condition ? 'date range' : 'Ikke angivet'`  
 _Hvorfor:_ Conditional date display baseret på data availability

• **Template Literals** - `${activity.startDate} til ${activity.endDate}`  
 _Hvorfor:_ String interpolation for date range formatting

• **Logical OR Fallback** - `activity.description || 'Ingen beskrivelse...'`  
 _Hvorfor:_ Fallback description hvis original er missing

• **Try-Catch Error Handling** - Error boundaries for date parsing  
 _Hvorfor:_ Graceful degradation ved invalid dates

• **React Icons Integration** - FontAwesome icons via react-icons  
 _Hvorfor:_ Semantic icons der matcher content meaning

• **Complex Conditional Rendering** - Nested conditions for date display  
 _Hvorfor:_ Show appropriate content baseret på available data

• **String Concatenation med Conditionals** - Dynamic date range building  
 _Hvorfor:_ Flexible date display logic

• **CSS White Space Handling** - `whiteSpace="pre-wrap"` for descriptions  
 _Hvorfor:_ Preserve formatting fra CMS content

• **Responsive Spacing System** - Consistent spacing mellem sections  
 _Hvorfor:_ Visual hierarchy og readability

---

# Components - Modal

## **19. Modal.tsx**

**Funktion:** Reusable modal wrapper omkring Chakra UI's modal. Giver konsistent styling og behavior for alle modals i applikationen.

**Metoder & Koncepter:**

• **ReactNode Type** - `children: ReactNode` for flexible content  
 _Hvorfor:_ Most flexible type for React children

• **Optional Props** - `title?: string` for conditional header  
 _Hvorfor:_ Flexible usage med eller uden title

• **Color Mode Responsive Design** - Automatic theme switching  
 _Hvorfor:_ Respects user theme preferences

• **Conditional Rendering** - Optional title header  
 _Hvorfor:_ Clean API for different modal types

• **CSS Backdrop Filter** - `backdropFilter="blur(10px)"`  
 _Hvorfor:_ Modern visual effect for focus

• **Responsive Modal Sizing** - Viewport units og mobile considerations  
 _Hvorfor:_ Works well på alle device sizes

• **Props Destructuring Pattern** - Clean component interface  
 _Hvorfor:_ Self-documenting component signature
