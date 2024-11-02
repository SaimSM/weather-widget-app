import WeatherWidget from './component/WeatherWidget';

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-900">
      <WeatherWidget />
    </main>
  );
}
