export function Option({text, isSelected, index}: OptionProps){
    const optionLetter = (index: number) => {
        switch(index) {
          case 0:
            return 'a)';
          case 1:
            return 'b)';
          case 2:
            return 'c)';
          case 3:
            return 'd)';
        }
      }
    
    return (
      <button className={`p-4 ${isSelected ? 'bg-purple-400/50' : 'bg-zinc-700/50'} hover:bg-purple-400/50 rounded-lg border border-purple-400 text-zinc-100 transition-colors text-left `}>
        {`${optionLetter(index)} ${text}`}
      </button>
    );
  }
  
  type OptionProps = {
    text: string;
    isSelected: boolean;
    index: number;
  }