import './style.module.css';

interface ProgressBarProps {
  value: number;
  max: number;
}

export const ProgressBar = ({ value, max }: ProgressBarProps) => {
  return (
    <progress value={value} max={max}>70 %</progress>
  );
}