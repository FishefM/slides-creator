// Foto decorativa. La forma y la posición las define la clase `photo--<shape>` (ver style.css).
export const Photo = ({
  src,
  shape,
  position = 'center',
}: {
  src: string;
  shape: 'strip' | 'circle' | 'circle-lg' | 'card';
  position?: string;
}) => (
  <div className={`photo photo--${shape}`}>
    <img src={src} alt="" style={{ objectPosition: position }} />
  </div>
);
