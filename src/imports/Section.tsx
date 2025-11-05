import svgPaths from "./svg-lxz2ki7z27";
import imgRomuloSalirosasAlta1 from "figma:asset/f43c909a5ef0ff91b2f076a48066f358433a44d8.png";
import imgJuanLiraAlta1 from "figma:asset/c039570774e6f9b8edf14e33c798addf8f507f25.png";

function Heading() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[1216px]" data-name="Heading 2">
      <p className="absolute font-['Saira_SemiCondensed:Regular',_sans-serif] leading-[48px] left-[608.13px] not-italic text-[48px] text-center text-nowrap text-white top-0 translate-x-[-50%] whitespace-pre">Nuestro Equipo</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute font-['Montserrat:Regular',_sans-serif] h-[56px] leading-[28px] left-[272px] not-italic text-[18px] text-[rgba(255,255,255,0.7)] text-center text-nowrap top-[64px] w-[672px] whitespace-pre" data-name="Paragraph">
      <p className="absolute left-[336.55px] top-0 translate-x-[-50%]">Consultores principales con décadas de experiencia</p>
      <p className="absolute left-[336.02px] top-[28px] translate-x-[-50%]">en operaciones mineras de clase mundial</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Container1() {
  return <div className="bg-gradient-to-r from-[rgba(199,72,44,0.2)] h-[758px] opacity-[0.57] shrink-0 to-[rgba(199,72,44,0.2)] via-50% via-[rgba(0,0,0,0)] w-full" data-name="Container" />;
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[758px] items-start left-px opacity-0 top-px w-[582px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-gradient-to-b from-[#252525] h-[384px] left-0 opacity-80 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0)] w-[582px]" data-name="Container">
      <div className="absolute h-[523px] left-[82px] top-[-34.39px] w-[396px]" data-name="romulo_salirosas_alta 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRomuloSalirosasAlta1} />
      </div>
    </div>
  );
}

function Container4() {
  return <div className="bg-gradient-to-r from-[rgba(0,0,0,0)] h-[384px] shrink-0 to-[rgba(0,0,0,0)] via-50% via-[rgba(255,255,255,0.05)] w-full" data-name="Container" />;
}

function Container5() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[384px] items-start left-0 opacity-0 pr-[1123.19px] py-0 top-0 w-[582px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-gradient-to-b from-[#2a2a2a] h-[384px] left-px overflow-clip to-[#1c1c1c] top-px w-[582px]" data-name="Container">
      <Container3 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return <div className="absolute left-[486px] opacity-0 rounded-bl-[3.35544e+07px] size-[96px] top-0" data-name="Container" />;
}

function Heading1() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[518px]" data-name="Heading 3">
      <p className="absolute font-['Montserrat:SemiBold',_sans-serif] leading-[36px] left-0 not-italic text-[30px] text-nowrap text-white top-[-1px] whitespace-pre">Rómulo Salirrosas</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24px] left-0 top-[44px] w-[518px]" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#c7482c] text-[16px] text-nowrap top-0 tracking-[0.8px] uppercase whitespace-pre">Consultor Principal</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[285.531px]" data-name="Text">
      <p className="absolute font-['Montserrat:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.6)] text-nowrap top-0 whitespace-pre">rsalirrosas@geoperuviangroup.com</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[293.53px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon" opacity="0">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[24px] left-0 top-[84px] w-[309.531px]" data-name="Link">
      <Text />
      <Icon />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[104px] left-0 top-[132px] w-[518px]" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',_sans-serif] leading-[26px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.7)] top-0 w-[518px]">Ingeniero Geólogo y Master PM de formación, especialista en estimación de recursos mineros e implementación de sistemas y procesos Ore Control. Experiencia en minería de tajo abierto en yacimientos de Oro, Pórfidos de Cu y Skarn Polimetálicos.</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[13px] w-[119.797px]" data-name="Text">
      <p className="absolute font-['Montserrat:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-0 whitespace-pre">Seguir leyendo</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[152.8px] size-[18px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M3.75 9H14.25" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9 3.75L14.25 9L9 14.25" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[rgba(199,72,44,0.1)] h-[50px] left-0 rounded-[8px] top-[260px] w-[195.797px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(199,72,44,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Text1 />
      <Icon1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[310px] left-[32px] top-[32px] w-[518px]" data-name="Container">
      <Heading1 />
      <Paragraph1 />
      <Link />
      <Paragraph2 />
      <Button />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[374px] left-px top-[385px] w-[582px]" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="[grid-area:1_/_1] bg-gradient-to-b from-[#252525] relative rounded-[16px] shrink-0 to-[#1c1c1c]" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container2 />
        <Container6 />
        <Container9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container11() {
  return <div className="bg-gradient-to-r from-[rgba(199,72,44,0.2)] h-[758px] opacity-[0.57] shrink-0 to-[rgba(199,72,44,0.2)] via-50% via-[rgba(0,0,0,0)] w-full" data-name="Container" />;
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[758px] items-start left-px opacity-0 top-px w-[582px]" data-name="Container">
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-gradient-to-b from-[#252525] h-[384px] left-0 opacity-80 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0)] w-[582px]" data-name="Container">
      <div className="absolute h-[489px] left-[125px] top-[-53.39px] w-[370px]" data-name="juan_-lira_-alta 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgJuanLiraAlta1} />
      </div>
    </div>
  );
}

function Container14() {
  return <div className="bg-gradient-to-r from-[rgba(0,0,0,0)] h-[384px] shrink-0 to-[rgba(0,0,0,0)] via-50% via-[rgba(255,255,255,0.05)] w-full" data-name="Container" />;
}

function Container15() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[384px] items-start left-0 opacity-0 pr-[1123.19px] py-0 top-0 w-[582px]" data-name="Container">
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-gradient-to-b from-[#2a2a2a] h-[384px] left-px overflow-clip to-[#1c1c1c] top-px w-[582px]" data-name="Container">
      <Container13 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return <div className="absolute left-[486px] opacity-0 rounded-bl-[3.35544e+07px] size-[96px] top-0" data-name="Container" />;
}

function Heading2() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[518px]" data-name="Heading 3">
      <p className="absolute font-['Montserrat:SemiBold',_sans-serif] leading-[36px] left-0 not-italic text-[30px] text-nowrap text-white top-[-1px] whitespace-pre">Juan Lira Cacho</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[24px] left-0 top-[44px] w-[518px]" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#c7482c] text-[16px] text-nowrap top-0 tracking-[0.8px] uppercase whitespace-pre">Consultor Principal</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[233.891px]" data-name="Text">
      <p className="absolute font-['Montserrat:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.6)] text-nowrap top-0 whitespace-pre">jlira@geoperuviangroup.com</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[241.89px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon" opacity="0">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[24px] left-0 top-[84px] w-[257.891px]" data-name="Link">
      <Text2 />
      <Icon2 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[104px] left-0 top-[132px] w-[518px]" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',_sans-serif] leading-[26px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.7)] top-0 w-[483px]">Ingeniero Químico especializado en Procesamiento de Minerales, con más de 30 años de experiencia en la industria minera, destacando una trayectoria de más de 20 años en la Compañía Minera Antamina.</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[13px] w-[119.797px]" data-name="Text">
      <p className="absolute font-['Montserrat:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-0 whitespace-pre">Seguir leyendo</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[152.8px] size-[18px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M3.75 9H14.25" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9 3.75L14.25 9L9 14.25" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[rgba(199,72,44,0.1)] h-[50px] left-0 rounded-[8px] top-[260px] w-[195.797px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(199,72,44,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Text3 />
      <Icon3 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[310px] left-[32px] top-[32px] w-[518px]" data-name="Container">
      <Heading2 />
      <Paragraph3 />
      <Link1 />
      <Paragraph4 />
      <Button1 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[374px] left-px top-[385px] w-[582px]" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="[grid-area:1_/_2] bg-gradient-to-b from-[#252525] relative rounded-[16px] shrink-0 to-[#1c1c1c]" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container12 />
        <Container16 />
        <Container19 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="gap-[48px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[760px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container20 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#1c1c1c] relative size-full" data-name="Section">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[64px] items-start pb-0 pt-[80px] px-[159px] relative size-full">
          <Container />
          <Container21 />
        </div>
      </div>
    </div>
  );
}