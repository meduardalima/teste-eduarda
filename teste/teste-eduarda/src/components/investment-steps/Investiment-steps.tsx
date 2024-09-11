import { Card } from "@nextui-org/react";

interface StepsInvestmentProps {
  stepNumber: number;
  title: string;
  description: string;
  imageSrc: string;
}

export function InvestimentSteps() {
  const steps: StepsInvestmentProps[] = [
    {
      stepNumber: 1,
      title: "Defina sua estratégia",
      description:
        "Defina a melhor abordagem para a sua busca: quer comprar, investir ou revender? Cada estratégia otimiza os resultados para seu objetivo.",
      imageSrc: "/assets/laptop-data-analytics-illustration.png",
    },
    {
      stepNumber: 2,
      title: "Escolha o Mercado",
      description:
        "Selecione a cidade onde deseja buscar imóveis. Você pode navegar no mapa ou digitar o nome da cidade na barra de pesquisa.",
      imageSrc: "/assets/location-search.png",
    },
    {
      stepNumber: 3,
      title: "Defina a Faixa de Preço",
      description:
        "Ajuste o intervalo de preços para visualizar imóveis que cabem no seu orçamento. Use o slider para definir os valores.",
      imageSrc: "/assets/business-growth-illustration.png",
    },
  ];

  return (
    <div className="flex space-x-4 justify-center  h-[500px]">
      {steps.map((step) => (
        <div key={step.stepNumber} className="relative w-[400px]">
          <img
            src={step.imageSrc}
            alt={`Step ${step.stepNumber}`}
            className="w-52 h-52  mt-20 mb-4 absolute top-[-30px] left-1/2 transform -translate-x-1/2"
          />

          <Card className="w-[400px] h-[278px] mt-52 shadow-md p-6 rounded-lg relative">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-color2 mb-2 font-bold text-2xl mt-6">{`Passo ${step.stepNumber}`}</h1>
              <h2 className="text-color4 text-2xl font-bold mb-2">
                {step.title}
              </h2>
              <p className="text-color5 text-base text-center  mb-0">
                {step.description}
              </p>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
