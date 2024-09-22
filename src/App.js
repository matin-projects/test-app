import React from "react";
import "./App.css";
import menuItems from "./Menu-Items";
import Tab from "./components/tab/Tab";

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <header className="App-header w-full bg-[#203732] text-white py-6 flex flex-col items-center">
        {/* <img src="/logo.png" className="App-logo w-32 h-auto mb-4" alt="logo" /> */}
        <h1 className="text-4xl font-extrabold mb-2">Merci Cafe</h1>
        <p className="text-lg font-medium">
          Freshly Brewed Coffee & Delightful Pastries
        </p>
      </header>
      <main className="flex-grow w-full max-w-6xl p-4">
        <Tab categories={menuItems} />
      </main>
    </div>
  );
}

export default App;
