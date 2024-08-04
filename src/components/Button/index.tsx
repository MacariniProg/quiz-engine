import './style.css'

interface ButtonProps {
  children: React.ReactNode;
  outline?: boolean;
  size?: 'small' | 'medium' | 'large';
}


export const Button = ({ children, outline, size = 'medium' }: ButtonProps) => {
  return (
    <div className={`button btn-${size} ${outline ? 'btn-outline' : 'btn'}`}>
      {children}
    </div>
  );
} 