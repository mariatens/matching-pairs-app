import GameBoard from "./components/GameBoard";
import "./styles.css"
type Emoji = string;

export interface Card{
  emoji: Emoji;
  life: "faceUp" | "faceDown" | "removed";
  id:number;
}
function App() {
  return (
    <>
      <GameBoard />
    </>
  );
}

export default App;