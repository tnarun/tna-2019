import css from './Steps.scss'

const Steps = (props) => (
  <div className={ css.steps }>{ props.children }</div>
)

const Step = (props) => (
  <div className={ css.step }>
    <label>{ props.num }</label>
    <div className={ css.text }>{ props.children }</div>
  </div>
)

const StepMini = (props) => (
  <div className={ css.stepmini }>
    <label>{ props.num }</label>
    <div className={ css.text }>{ props.children }</div>
  </div>
)

const Warning = (props) => (
  <div className={ css.warning }>
    <label>!</label>
    <div className={ css.text }>{ props.children }</div>
  </div>
)

export { Steps, Step, Warning, StepMini }