interface StepProps {
  stepNumber: number;
  title: string;
  description: string;
}

function InvestmentStep({ stepNumber, title, description }: StepProps) {
  return (
    <aside className="text-left mr-11 ml-6">
      <h1 className="text-color2 font-sans text-xs font-normal">
        Passo {stepNumber}
      </h1>
      <h2 className="text-color4 font-semibold text-sm">{title}</h2>
      <h3 className="text-color5 font-medium text-sm">{description}</h3>
    </aside>
  );
}

export function Intro() {
  return (
    <section className="grid grid-cols-2 grid-rows-2 bg-gradient-to-b from-blue-50 to-blue-200 h-[500px] p-14">
      <IntroHeader />
      <IntroImage />
      <InvestmentSteps />
    </section>
  );
}
function IntroHeader() {
  return (
    <h1 className="font-bold text-7xl w-[792px] mt-12">
      Encontre as melhores <br />
      <span className="text-color2">oportunidades</span> de <br />
      investimento hoje!
    </h1>
  );
}

function IntroImage() {
  return (
    <img
      src="/assets/house-searching.png"
      alt="Ilustração de busca de casa"
      className="ml-72 mt-6 mb-44 h-[400px]"
    />
  );
}

function InvestmentSteps() {
  return (
    <div className="w-[800px] bg-color1 rounded-lg justify-evenly mt-28 h-20">
      <div className="flex ml-6 pt-3">
        <InvestmentStep
          stepNumber={1}
          title="Estratégia"
          description="Escolha uma estratégia"
        />
        <StepDivider />
        <InvestmentStep
          stepNumber={2}
          title="Mercado"
          description="Escolha um mercado"
        />
        <StepDivider />
        <InvestmentStep
          stepNumber={3}
          title="Preço"
          description="Selecione um preço"
        />
        <SearchButton />
      </div>
    </div>
  );
}

function StepDivider() {
  return <img src="/assets/icon-line.svg" alt="Ícone de linha vertical" />;
}

function SearchButton() {
  return (
    <div className="relative flex items-center justify-center bg-color2 w-14 h-14 rounded-full ml-24">
      <img
        src="/assets/icon-search.svg"
        alt="Ícone de busca"
        className="w-4 h-4"
      />
    </div>
  );
}
