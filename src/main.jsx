import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Apresentação from './pages/Home/apresentação';
import Leftbar from './components/leftbar';
import Navbar from './components/navbar';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="w-full h-[100vh] bg-gradient-to-tr from-black to-gray-900 lg:grid grid-cols-[2fr_8fr_1fr]  overflow-hidden">

        <Leftbar />

      <main className='w-full h-full flex items-center justify-center'>
        <h1 className="text-3xl font-bold text-white">Conteúdo principal</h1>
      </main>

      <Navbar />
    </div>
  </StrictMode>
);