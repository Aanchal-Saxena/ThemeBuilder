import { setTitleColor, setTitleFont, setTitleSize, setTitleAlignment, setTitleText } from '../store/themeSlice'
import BaseTextEditor from './BaseTextEditor'

const TitleEditor = () => {
  const actions = {
    setColor: setTitleColor,
    setFont: setTitleFont,
    setSize: setTitleSize,
    setAlignment: setTitleAlignment,
    setText: setTitleText
  }

  return (
    <BaseTextEditor 
      type="title"
      title="Title"
      maxLength={50}
      actions={actions}
    />
  )
}

export default TitleEditor