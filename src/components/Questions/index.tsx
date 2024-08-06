import style from './style.module.css'

export const Question = ({ children, title, description, image }: {
  children: React.ReactNode
  title?: string
  description?: string
  image?: string
}) => {
  return (
    <div className={style.container}>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <div className={style.content}>
        <div>
          {children}
        </div>
        <div>
          <img src={image} alt="placeholder" />
        </div>
      </div>
    </div>
  )
}