import { PrimaryButton } from "./components/atom/button/PrimaryButton";
import { SecondaryButton } from "./components/atom/button/SecondaryButton";
import { SerchInput } from "./components/molecules/SerchInput";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SerchInput />
    </div>
  );
}