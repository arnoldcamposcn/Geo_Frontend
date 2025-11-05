import svgPaths from "./svg-u0hbrudix2";
import imgBanderaNacionalDeTelaDePeru1 from "figma:asset/25e3aff8ab419057f59e21a5361bcead60a3eba3.png";
import imgBanderaDeChileEnColoresOficialesYProporcionCorrecta2 from "figma:asset/6d61751136786de8c26ce6c0b0bd7c62bddcdb9a.png";
import imgBanderaNacionalDeTelaArgentinaFondoTextilSimboloDelPaisInternacionalDeAmericaDelSur1 from "figma:asset/87af45450c28bc13efc59b16beea5cee4dbd4177.png";

function Partners() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Partners">
      <p className="absolute font-['Saira_SemiCondensed:Regular',sans-serif] leading-[48px] left-[384.23px] not-italic text-[48px] text-center text-nowrap text-white top-0 translate-x-[-50%] whitespace-pre">Socios Aliados</p>
    </div>
  );
}

function Partners1() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Partners">
      <p className="absolute font-['Montserrat:Regular',sans-serif] leading-[28px] left-[384.03px] not-italic text-[18px] text-[rgba(255,255,255,0.7)] text-center top-0 translate-x-[-50%] w-[730px]">Establecemos alianzas estratégicas con compañías líderes a nivel mundial para fomentar la innovación a través del intercambio de experiencias y conocimientos.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[128px] items-start left-[383px] top-[96px] w-[768px]" data-name="Container">
      <Partners />
      <Partners1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[32px] relative shrink-0 w-[57.172px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[57.172px]">
        <div className="absolute h-[259px] left-[calc(50%+140.414px)] top-[-113.5px] translate-x-[-50%] w-[388px]" data-name="bandera-nacional-de-tela-de-peru 1">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-50%-50% object-cover opacity-20 size-full" src={imgBanderaNacionalDeTelaDePeru1} />
            <div className="absolute bg-[rgba(199,72,44,0.2)] inset-0" />
          </div>
        </div>
        <p className="absolute font-['Montserrat:Regular',sans-serif] leading-[32px] left-0 not-italic text-[24px] text-nowrap text-white top-[-1px] whitespace-pre">Perú</p>
      </div>
    </div>
  );
}

function Partners2() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[80px] items-center left-[24px] top-[24px] w-[334px]" data-name="Partners">
      <Heading />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[137px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[137px] overflow-clip relative rounded-[inherit] w-full">
        <Partners2 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[20px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M8.33333 10H11.6667" id="Vector" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 6.66667H11.6667" id="Vector_2" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p16bb4600} id="Vector_3" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b103700} id="Vector_4" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p24196980} id="Vector_5" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[28px] left-[28px] top-0 w-[128.734px]" data-name="Heading 4">
      <p className="absolute font-['Montserrat:Bold',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-0 whitespace-pre">Geoperuvian</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[334px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[334px]">
        <Icon />
        <Heading1 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[18px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p625a980} id="Vector" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p18c84c80} id="Vector_2" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[20px] left-[30px] top-0 w-[177.156px]" data-name="Text">
      <p className="absolute font-['Montserrat:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap top-0 whitespace-pre">Santiago de Surco – Lima</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <Text />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[18px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_24_2472)" id="Icon">
          <path d={svgPaths.p3302df00} id="Vector" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_24_2472">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[27.188px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',sans-serif] leading-[27.2px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap top-px whitespace-pre">(+51-01) 4891892</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[27.188px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',sans-serif] leading-[27.2px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.6)] text-nowrap top-px whitespace-pre">(+51) 943049976</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[54.375px] items-start left-[30px] top-0 w-[127.125px]" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[54.375px] relative shrink-0 w-full" data-name="Container">
      <Icon2 />
      <Container4 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[18px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p97bb7c0} id="Vector" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1b122e80} id="Vector_2" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[20px] left-[30px] top-0 w-[277.547px]" data-name="Link">
      <p className="absolute font-['Montserrat:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap top-0 whitespace-pre">contacto.peru@geoperuviangroup.com</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Icon3 />
      <Link />
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[334px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-full items-start relative w-[334px]">
        <Container3 />
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[201.86px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="bg-[#1c1c1c] h-[36px] relative rounded-[6px] shrink-0 w-[334px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[334px]">
        <p className="absolute font-['Montserrat:Medium',sans-serif] leading-[20px] left-[116.14px] not-italic text-[14px] text-nowrap text-white top-[8px] whitespace-pre">Contactar</p>
        <Icon4 />
      </div>
    </div>
  );
}

function Partners3() {
  return (
    <div className="h-[447.375px] relative shrink-0 w-full" data-name="Partners">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[447.375px] items-start pl-[24px] pr-0 py-[24px] relative w-full">
          <Container2 />
          <Container7 />
          <SlotClone />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="[grid-area:1_/_1] bg-[#1c1c1c] relative rounded-[8px] shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-px relative size-full">
          <Container1 />
          <Partners3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[32px] relative shrink-0 w-[60.656px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] w-[60.656px]" />
    </div>
  );
}

function Partners4() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[80px] items-center left-[24px] top-[24px] w-[334px]" data-name="Partners">
      <Heading2 />
      <div className="absolute h-[199px] left-[-27px] top-[-26px] w-[376px]" data-name="bandera-de-chile-en-colores-oficiales-y-proporcion-correcta 2">
        <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 pointer-events-none">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border max-w-none object-50%-50% object-cover opacity-20 size-full" src={imgBanderaDeChileEnColoresOficialesYProporcionCorrecta2} />
          <div className="absolute bg-[rgba(21,93,252,0.2)] bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0" />
        </div>
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[199px] w-[376px]" />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[137px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[137px] overflow-clip relative rounded-[inherit] w-full">
        <Partners4 />
        <p className="absolute font-['Montserrat:Regular',sans-serif] leading-[32px] left-[24px] not-italic text-[24px] text-nowrap text-white top-[48px] whitespace-pre">Chile</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-0 size-[20px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M8.33333 10H11.6667" id="Vector" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 6.66667H11.6667" id="Vector_2" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p16bb4600} id="Vector_3" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b103700} id="Vector_4" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p24196980} id="Vector_5" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[28px] left-[28px] top-0 w-[181.906px]" data-name="Heading 4">
      <p className="absolute font-['Montserrat:Bold',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-0 whitespace-pre">Grupo GB | CINCO</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[28px] relative shrink-0 w-[334px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[334px]">
        <Icon5 />
        <Heading3 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-0 size-[18px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p625a980} id="Vector" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p18c84c80} id="Vector_2" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[20px] left-[30px] top-0 w-[129.297px]" data-name="Text">
      <p className="absolute font-['Montserrat:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap top-0 whitespace-pre">La Reina, Santiago</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Icon6 />
      <Text1 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-0 size-[18px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_24_2472)" id="Icon">
          <path d={svgPaths.p3302df00} id="Vector" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_24_2472">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[27.188px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',sans-serif] leading-[27.2px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap top-px whitespace-pre">(+56-2) 2 209 33 19</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[27.188px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',sans-serif] leading-[27.2px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.6)] text-nowrap top-px whitespace-pre">(+56-9) 9 329 35 78</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[54.375px] items-start left-[30px] top-0 w-[146.016px]" data-name="Container">
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[54.375px] relative shrink-0 w-full" data-name="Container">
      <Icon7 />
      <Container12 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-0 size-[18px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p97bb7c0} id="Vector" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1b122e80} id="Vector_2" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[20px] left-[30px] top-0 w-[277.594px]" data-name="Link">
      <p className="absolute font-['Montserrat:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap top-0 whitespace-pre">contacto.chile@geoperuviangroup.com</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Icon8 />
      <Link1 />
    </div>
  );
}

function Container15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[334px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-full items-start relative w-[334px]">
        <Container11 />
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[201.86px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SlotClone1() {
  return (
    <div className="bg-[#1c1c1c] h-[36px] relative rounded-[6px] shrink-0 w-[334px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[334px]">
        <p className="absolute font-['Montserrat:Medium',sans-serif] leading-[20px] left-[116.14px] not-italic text-[14px] text-nowrap text-white top-[8px] whitespace-pre">Contactar</p>
        <Icon9 />
      </div>
    </div>
  );
}

function Partners5() {
  return (
    <div className="h-[447.375px] relative shrink-0 w-full" data-name="Partners">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[447.375px] items-start pl-[24px] pr-0 py-[24px] relative w-full">
          <Container10 />
          <Container15 />
          <SlotClone1 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="[grid-area:1_/_2] bg-[#1c1c1c] relative rounded-[8px] shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-px relative size-full">
          <Container9 />
          <Partners5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Partners6() {
  return <div className="absolute h-[80px] left-[24px] top-[24px] w-[334px]" data-name="Partners" />;
}

function Heading4() {
  return (
    <div className="absolute h-[32px] left-[24px] top-[48px] w-[120.281px]" data-name="Heading 3">
      <p className="absolute font-['Montserrat:Regular',sans-serif] leading-[32px] left-0 not-italic text-[24px] text-nowrap text-white top-[-1px] whitespace-pre">Argentina</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[137px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[137px] overflow-clip relative rounded-[inherit] w-full">
        <div className="absolute h-[176px] left-0 top-[-19px] w-[382px]" data-name="bandera-nacional-de-tela-argentina-fondo-textil-simbolo-del-pais-internacional-de-america-del-sur 1">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-50%-50% object-cover opacity-20 size-full" src={imgBanderaNacionalDeTelaArgentinaFondoTextilSimboloDelPaisInternacionalDeAmericaDelSur1} />
            <div className="absolute bg-[rgba(0,188,255,0.2)] inset-0" />
          </div>
        </div>
        <Partners6 />
        <Heading4 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-0 size-[20px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M8.33333 10H11.6667" id="Vector" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 6.66667H11.6667" id="Vector_2" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p16bb4600} id="Vector_3" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b103700} id="Vector_4" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p24196980} id="Vector_5" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Montserrat:Bold',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-0 whitespace-pre">Newensa S.A.</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-nowrap top-0 whitespace-pre">Consultoría Especializada</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col h-[48px] items-start left-[28px] top-0 w-[177.672px]" data-name="Container">
      <Heading5 />
      <Paragraph4 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[48px] relative shrink-0 w-[334px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[334px]">
        <Icon10 />
        <Container18 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-0 size-[18px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p625a980} id="Vector" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p18c84c80} id="Vector_2" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[20px] left-[30px] top-0 w-[138.469px]" data-name="Text">
      <p className="absolute font-['Montserrat:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap top-0 whitespace-pre">Las Heras, Mendoza</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Icon11 />
      <Text2 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-0 size-[18px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_24_2472)" id="Icon">
          <path d={svgPaths.p3302df00} id="Vector" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_24_2472">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[27.188px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',sans-serif] leading-[27.2px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap top-px whitespace-pre">(+54-0261) 4236300</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[27.188px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',sans-serif] leading-[27.2px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.6)] text-nowrap top-px whitespace-pre">(+54-9) 2615 51 5666</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col h-[54.375px] items-start left-[30px] top-0 w-[154.703px]" data-name="Container">
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[54.375px] relative shrink-0 w-full" data-name="Container">
      <Icon12 />
      <Container21 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-0 size-[18px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p97bb7c0} id="Vector" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1b122e80} id="Vector_2" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[40px] left-[30px] top-0 w-[304px]" data-name="Link">
      <p className="absolute font-['Montserrat:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] top-0 w-[299px]">contacto.argentina@geoperuviangroup.com</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <Icon13 />
      <Link2 />
    </div>
  );
}

function Container24() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[334px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-full items-start relative w-[334px]">
        <Container20 />
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[201.86px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SlotClone2() {
  return (
    <div className="bg-[#1c1c1c] h-[36px] relative rounded-[6px] shrink-0 w-[334px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[334px]">
        <p className="absolute font-['Montserrat:Medium',sans-serif] leading-[20px] left-[116.14px] not-italic text-[14px] text-nowrap text-white top-[8px] whitespace-pre">Contactar</p>
        <Icon14 />
      </div>
    </div>
  );
}

function Partners7() {
  return (
    <div className="h-[447.375px] relative shrink-0 w-full" data-name="Partners">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[447.375px] items-start pl-[24px] pr-0 py-[24px] relative w-full">
          <Container19 />
          <Container24 />
          <SlotClone2 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="[grid-area:1_/_3] bg-[#1c1c1c] relative rounded-[8px] shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start p-px relative size-full">
          <Container17 />
          <Partners7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute gap-[32px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[449.375px] left-[159px] top-[288px] w-[1216px]" data-name="Container">
      <Container8 />
      <Container16 />
      <Container25 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[24.698px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.333%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
            <path d={svgPaths.p2b16a580} id="Vector" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.05819" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-5%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 23">
            <path d={svgPaths.p2036bcc0} id="Vector" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.05819" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[8.33%] right-[8.33%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-1.03px_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 3">
            <path d="M1.02909 1.02909H21.611" id="Vector" stroke="var(--stroke-0, #C7482C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.05819" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 size-[24.698px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[24.698px]">
        <Icon15 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[32px] relative shrink-0 w-[229.812px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[229.812px]">
        <p className="absolute font-['Montserrat:Regular',sans-serif] leading-[32px] left-[115px] not-italic text-[24px] text-center text-nowrap text-white top-[-1px] translate-x-[-50%] whitespace-pre">Presencia Regional</p>
      </div>
    </div>
  );
}

function Partners8() {
  return (
    <div className="absolute box-border content-stretch flex gap-[7.651px] h-[32px] items-center justify-center left-[33px] pl-0 pr-[0.349px] py-0 top-[33px] w-[1150px]" data-name="Partners">
      <Container27 />
      <Heading6 />
    </div>
  );
}

function Partners9() {
  return (
    <div className="absolute h-[48px] left-[272px] top-[81px] w-[672px]" data-name="Partners">
      <p className="absolute font-['Montserrat:Regular',sans-serif] leading-[24px] left-[336.02px] not-italic text-[16px] text-[rgba(255,255,255,0.7)] text-center top-0 translate-x-[-50%] w-[653px]">Operamos en 3 países de Latinoamérica con expertise local y estándares globales, brindando soluciones innovadoras para la industria minera.</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-[#1c1c1c] h-[162px] left-[159px] rounded-[8px] top-[785.38px] w-[1216px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Partners8 />
      <Partners9 />
    </div>
  );
}

export default function Partners10() {
  return (
    <div className="bg-[#252525] relative size-full" data-name="Partners">
      <Container />
      <Container26 />
      <Container28 />
    </div>
  );
}