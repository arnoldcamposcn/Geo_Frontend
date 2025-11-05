import imgImageGeoPeruvian from "figma:asset/cd7e8ccc5519c90a28a3b425ab5725674c36aa5a.png";

function ImageGeoPeruvian() {
  return (
    <div className="basis-0 grow h-[96px] min-h-px min-w-px relative shrink-0" data-name="Image (GeoPeruvian)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageGeoPeruvian} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[96px] w-full" />
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 size-[212px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center relative size-[212px]">
        <ImageGeoPeruvian />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[43.188px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[43.188px]">
        <p className="absolute font-['Montserrat:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#c7482c] text-[16px] text-nowrap top-0 whitespace-pre">Inicio</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[71.438px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[71.438px]">
        <p className="absolute font-['Montserrat:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.8)] text-nowrap top-0 whitespace-pre">Nosotros</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[70.172px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[70.172px]">
        <p className="absolute font-['Montserrat:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.8)] text-nowrap top-0 whitespace-pre">Servicios</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[113px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[113px]">
        <p className="absolute font-['Montserrat:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.8)] text-nowrap top-0 whitespace-pre">Socios Aliados</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[72.781px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[72.781px]">
        <p className="absolute font-['Montserrat:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.8)] text-nowrap top-0 whitespace-pre">Contacto</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#c7482c] h-[36px] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative">
        <p className="font-['Montserrat:Medium',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Contactar ahora</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[36px] relative shrink-0" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[72px] h-[36px] items-center relative">
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[80px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Button />
      <Navigation />
    </div>
  );
}

export default function Header() {
  return (
    <div className="relative size-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-px pt-0 px-[159px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}