import NmxHeader from '@/app/components/NmxHeader';
import Topbar from '@/app/components/Topbar';
import Hero from '@/app/partials/Hero';
import FilaquinDetails from '@/app/components/FilaquinDetails';
import FilaquinSteps from '@/app/components/FilaquinSteps';
import NmxUnmatched from '@/app/components/NmxUnmatched';
import Footer from '@/app/partials/Footer';

export default function Home() {
  return (
    <>
      <NmxHeader />
      <Topbar />
      <main>
        <Hero />
        <FilaquinDetails />
        <FilaquinSteps />
        <NmxUnmatched />
      </main>
      <Footer />
    </>
  );
}
