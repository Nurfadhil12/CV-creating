import Experience from './Pages/Experience';
import Profile from './Pages/Profile';

const App = () => {

  return (
    <div className="font-sans bg-eggWhite h-full box-border">
      <div className="container mx-auto">
        <div className="text-center text-4xl pt-5 font-bold">Curriculum Vitae</div>
        <div
          className="bg-gradient-to-r from-lightningYellow via-treePoppy
       to-goldenTainoi h-full shadow-lg mt-8 rounded-lg pt-12 p-12"
        >
          <Profile />
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default App;
