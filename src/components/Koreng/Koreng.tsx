import { useState } from "react";
import { engToKor, korToEng } from "./KorToEng";

const Koreng: React.FunctionComponent = () => {
  const [input, setInput] = useState("ㅋㅋ");
  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-center font-pretendard">
      <p className="text-[2em] font-bold mb-4">텍스트를 입력하세요.</p>
      <input
        className="border p-2 w-[70%] outline-none"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p className="text-[2em] font-bold my-4">결과</p>
      <p className="">{korToEng(input)}</p>
      <p>{engToKor(input)}</p>
    </main>
  );
};
export default Koreng;
