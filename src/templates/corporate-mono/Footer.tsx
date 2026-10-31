export const Footer = ({ n }: { n: number }) => (
  <div className="footer">
    <span>Zoho → ERPNext · Propuesta de migración</span>
    <span>Slide {String(n).padStart(2, '0')}</span>
  </div>
);
