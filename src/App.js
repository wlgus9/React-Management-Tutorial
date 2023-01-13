import logo from './logo.svg';
import './App.css';

// 웹사이트 화면에 대한 내용 출력을 담당
function App() {
  return (
    // react는 기본적으로 jsx 문법을 따름
    <div className="gray-background">
      <img src={logo} lat="logo" />
      <h2>Let's develop management system!</h2>
    </div>
  );
}

export default App;
