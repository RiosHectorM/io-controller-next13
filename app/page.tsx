import Image from 'next/image';
import { Navbar } from './components/navbar/Navbar';
import { Sidebar } from './components/sideBar/Sidebar';
import { Footer } from './components/footer/Footer';
import { Body } from './components/body/Body';

export default function Home() {
  return (
    <main className="flex h-screen flex-col">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </main>
  );
}
