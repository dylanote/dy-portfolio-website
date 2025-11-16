import React from 'react';
import FloatingLines from './components/FloatingLines';
import Footer from './components/Footer';
import TextPressure from './components/TextPressure';

const App: React.FC = () => {
  return (
    <div className="w-screen h-screen relative bg-black text-white">
      <FloatingLines
        enabledWaves={['top', 'middle', 'bottom']}
        lineCount={[10]}
        lineDistance={[2]}
        bendRadius={30}
        bendStrength={-0.5}
        interactive={true}
        parallax={true}
        linesGradient={['#001fff', '#4d70ff']}
      />
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col">
        <main className="flex-grow flex justify-center items-center pointer-events-auto">
          <TextPressure text="DISEÑADOR CREATIVO" />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;