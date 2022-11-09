import Image from 'next/image';

export default function BrandLogo() {
  return (
    <Image
      src="https://esalab.es/wp-content/uploads/2019/07/logo_horizontal.svg"
      className="mr-3 h-9"
      alt="ESALab Logo"
      width={200}
      height={200}
    />
  );
}
