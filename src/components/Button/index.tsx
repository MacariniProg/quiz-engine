import './style.css'

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  outline?: boolean;
  size?: 'small' | 'medium' | 'large';
}


export const Button = ({ children, outline, size = 'medium', ...props }: ButtonProps) => {
  return (
    <div {...props} className={`button btn-${size} ${outline ? 'btn-outline' : 'btn'}`}>
      {children}
    </div>
  );
} 