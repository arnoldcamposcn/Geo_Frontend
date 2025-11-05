import svgPaths from "./svg-n4q3es7c41";
import imgBanderaNacionalDeTelaDePeru1 from "figma:asset/25e3aff8ab419057f59e21a5361bcead60a3eba3.png";

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
        <p className="absolute font-['Montserrat:Regular',_sans-serif] leading-[32px] left-0 not-italic text-[24px] text-nowrap text-white top-[-1px] whitespace-pre">Perú</p>
      </div>
    </div>
  );
}

function Partners() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[80px] items-center left-[24px] top-[24px] w-[334px]" data-name="Partners">
      <Heading />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[137px] relative shrink-0 w-full" data-name="Container">
      <div className="h-[137px] overflow-clip relative rounded-[inherit] w-full">
        <Partners />
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
      <p className="absolute font-['Montserrat:Bold',_sans-serif] leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-0 whitespace-pre">Geoperuvian</p>
    </div>
  );
}

function Container1() {
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
      <p className="absolute font-['Montserrat:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap top-0 whitespace-pre">Santiago de Surco – Lima</p>
    </div>
  );
}

function Container2() {
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
      <p className="absolute font-['Montserrat:Regular',_sans-serif] leading-[27.2px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap top-px whitespace-pre">(+51-01) 4891892</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[27.188px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',_sans-serif] leading-[27.2px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.6)] text-nowrap top-px whitespace-pre">(+51) 943049976</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[54.375px] items-start left-[30px] top-0 w-[127.125px]" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[54.375px] relative shrink-0 w-full" data-name="Container">
      <Icon2 />
      <Container3 />
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
      <p className="absolute font-['Montserrat:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap top-0 whitespace-pre">contacto.peru@geoperuviangroup.com</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Icon3 />
      <Link />
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[334px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-full items-start relative w-[334px]">
        <Container2 />
        <Container4 />
        <Container5 />
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
        <p className="absolute font-['Montserrat:Medium',_sans-serif] leading-[20px] left-[116.14px] not-italic text-[14px] text-nowrap text-white top-[8px] whitespace-pre">Contactar</p>
        <Icon4 />
      </div>
    </div>
  );
}

function Partners1() {
  return (
    <div className="h-[447.375px] relative shrink-0 w-full" data-name="Partners">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[447.375px] items-start pl-[24px] pr-0 py-[24px] relative w-full">
          <Container1 />
          <Container6 />
          <SlotClone />
        </div>
      </div>
    </div>
  );
}

export default function Container7() {
  return (
    <div className="bg-[#1c1c1c] relative rounded-[8px] size-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start overflow-clip p-px relative size-full">
          <Container />
          <Partners1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}