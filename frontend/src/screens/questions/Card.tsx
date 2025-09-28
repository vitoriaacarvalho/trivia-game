import { Header } from "@trivia/components/layout/Header";
import { Option } from "@trivia/components/questions/Option";

export function Card() {
  const options = [
    {text: "Card", isSelected: false, index: 0},
    {text: "Card", isSelected: true, index: 1},
    {text: "Card", isSelected: false, index: 2},
    {text: "Card", isSelected: false, index: 3},
  ]
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex items-center justify-center p-4">
        <div
          className="flex flex-row flex-wrap justify-center items-center
                w-[90vw] max-w-[35rem] lg:max-w-[45rem] min-h-[60vh] max-h-[70vh] p-6
               bg-zinc-800/30 backdrop-blur-sm
               rounded-lg border border-purple-600 shadow-lg"
        >
          <h1 className="text-xl md:text-2xl font-bold text-zinc-100 text-center whitespace-break-spaces leading-relaxed mb-6">
            What are the key differences between TypeScript and JavaScript?
          </h1>
          <div className="flex flex-col gap-4 w-full mb-10">
            {options.map(option => {
              return (<Option text={option.text} isSelected={option.isSelected} index={option.index} />)
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
