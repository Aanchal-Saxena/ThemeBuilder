import { setSubtitleColor, setSubtitleFont, setSubtitleSize, setSubtitleAlignment, setSubtitleText } from '../store/themeSlice'
import BaseTextEditor from './BaseTextEditor'

const SubtitleEditor = () => {
  const actions = {
    setColor: setSubtitleColor,
    setFont: setSubtitleFont,
    setSize: setSubtitleSize,
    setAlignment: setSubtitleAlignment,
    setText: setSubtitleText
  }

  return (
    <BaseTextEditor 
      type="subtitle"
      title="Subtitle"
      maxLength={100}
      actions={actions}
    />
  )
}

export default SubtitleEditor