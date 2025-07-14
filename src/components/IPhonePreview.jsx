import './IPhonePreview.css'
import { useSelector } from 'react-redux'

const IPhonePreview = () => {
  const titleStyles = useSelector((state) => state.theme.titleStyles)
  const subtitleStyles = useSelector((state) => state.theme.subtitleStyles)

  const getTitleStyle = () => ({
    color: titleStyles.color,
    fontFamily: titleStyles.fontFamily,
    fontSize: `${titleStyles.fontSize}px`,
    textAlign: titleStyles.alignment
  })

  const getSubtitleStyle = () => ({
    color: subtitleStyles.color,
    fontFamily: subtitleStyles.fontFamily,
    fontSize: `${subtitleStyles.fontSize}px`,
    textAlign: subtitleStyles.alignment
  })

  return (
    <div className="iphone-preview">
      <div className="iphone-frame">
        <div className="iphone-screen">
          <div className="status-bar">
            <span className="time">9:41</span>
            <div className="status-icons">
              <span className="signal">●●●</span>
              <span className="battery">100%</span>
            </div>
          </div>
          
          <div className="app-content">
            <div className="banner">
              <h2 className="banner-title" style={getTitleStyle()}>
                {titleStyles.text}
              </h2>
              <p className="banner-subtitle" style={getSubtitleStyle()}>
                {subtitleStyles.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IPhonePreview