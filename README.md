# ThemeBuilder

A comprehensive React application for creating, managing, and previewing themes with real-time iPhone mockup preview.

🚀 **Live Demo**: [themebuilderapp.netlify.app](https://themebuilderapp.netlify.app)

## 🚀 Features Implemented

### Theme Creation & Editing
- **Banner Theme Creation**: Currently supports title and subtitle banner themes only
- **Title Editor**: Create and customize title text with font, size, color, and alignment options
- **Subtitle Editor**: Create and customize subtitle text with independent styling controls
- **Real-time Preview**: iPhone mockup showing live preview of theme changes
- **Color Picker**: Stylish dropdown with 8 predefined colors including primary theme color
- **Font Selection**: Choose from 5 popular fonts (Arial, Helvetica, Times New Roman, Georgia, Verdana)
- **Text Alignment**: Left, center, and right alignment options with visual icons
- **Font Size Control**: Increment/decrement arrows or direct input (8-30px for titles, 8-20px for subtitles)
- **Character Limits**: 50 characters for titles, 100 characters for subtitles

### Theme Management
- **Save Themes**: Save created themes with automatic navigation and toast notifications
- **Local Storage**: Themes are automatically saved to browser's localStorage for persistence
- **Themes List**: Comprehensive table view of all saved themes
- **Search Functionality**: Search themes by name with real-time filtering
- **Bulk Operations**: Select multiple themes for batch deletion
- **Individual Actions**: Three-dot dropdown menu with Duplicate, Delete, and Edit options
- **Edit Themes**: Click Edit to navigate to theme editor with pre-filled data from localStorage
- **Update Existing Themes**: Edit mode updates existing themes instead of creating new ones
- **Smart Navigation**: Back button navigates to themes list when themes exist
- **Theme Details**: Display theme name, creation date, and usage information

### Navigation & User Experience
- **Smart Navigation**: 
  - No themes saved → "Create Your First Theme" welcome screen
  - Themes exist → Themes list table view
  - Create/Edit mode → Theme editor with sidebar navigation
- **Toast Notifications**: Success messages for save/delete operations
- **Responsive Design**: Clean, modern interface with consistent styling
- **Back Navigation**: Easy navigation between screens with back button

### Header Management
- **Dynamic Headers**: Different headers for different screens
- **Editable Theme Names**: Click pencil icon to edit theme names
- **Context-Aware Actions**: Save button only appears in create/edit mode

## 🛠 Tech Stack

- **Frontend**: React 18 with Hooks
- **Build Tool**: Vite
- **State Management**: Redux Toolkit
- **Styling**: CSS Modules with CSS Variables
- **Icons**: Custom SVG icons
- **Linting**: ESLint

## 📁 Project Structure

```
src/
├── components/
│   ├── BaseTextEditor.jsx      # Reusable text editor component
│   ├── CreateTheme.jsx          # Main theme creation screen
│   ├── CreateThemeSidebar.jsx   # Navigation sidebar for theme editing
│   ├── Dashboard.jsx            # Main dashboard with navigation logic
│   ├── DashboardHeader.jsx      # Dynamic header component
│   ├── IPhonePreview.jsx        # iPhone mockup with live preview
│   ├── Sidebar.jsx              # Main application sidebar
│   ├── SubtitleEditor.jsx       # Subtitle-specific editor wrapper
│   ├── ThemesList.jsx           # Themes management table
│   ├── TitleEditor.jsx          # Title-specific editor wrapper
│   └── Toast.jsx                # Notification component
├── hooks/
│   └── useLocalStorage.js       # Custom hook for localStorage sync
├── store/
│   ├── store.js                 # Redux store configuration
│   └── themeSlice.js           # Theme state management
├── styles/
│   └── colors.css              # CSS variables and theme colors
├── utils/
│   └── localStorage.js          # localStorage utility functions
└── main.jsx                    # Application entry point
```

## 🔄 Redux State Structure

```javascript
{
  theme: {
    themeName: string,           // Current theme name
    titleStyles: {
      color: string,             // Title text color
      fontFamily: string,        // Title font family
      fontSize: number,          // Title font size
      alignment: string,         // Title alignment (left/center/right)
      text: string              // Title text content
    },
    subtitleStyles: {
      color: string,             // Subtitle text color
      fontFamily: string,        // Subtitle font family
      fontSize: number,          // Subtitle font size
      alignment: string,         // Subtitle alignment
      text: string              // Subtitle text content
    },
    savedThemes: [],            // Array of saved theme objects
    showThemesList: boolean,    // Navigation state flag
    toast: object              // Toast notification state
  }
}
```

## 🧭 Navigation Flow

1. **Initial State** (No themes saved):
   - Shows welcome screen with "Create Your First Theme" button
   - Displays feature cards and description

2. **Theme Creation**:
   - Click "Create New Theme" → Theme editor with sidebar
   - Select "Title" or "Subtitle" from sidebar
   - Edit properties in real-time with iPhone preview
   - Click "Save Theme" → Toast notification + Navigate to themes list

3. **Themes Management** (After saving themes):
   - Shows themes table with search and delete functionality
   - Click "Create Theme +" → New theme editor with default values
   - Use three-dot menu for individual theme actions (Edit loads existing theme data)
   - Select multiple themes for bulk operations

4. **Auto-Navigation**:
   - Delete all themes → Automatically returns to welcome screen
   - Save theme → Automatically navigates to themes list
   - Back button → Navigates to themes list if themes exist, otherwise welcome screen
   - Edit theme → Loads existing theme data in editor with "Update Theme" button

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🎨 Design Features

- **Consistent Color Scheme**: Orange primary theme (#FD5F03) with complementary colors
- **Modern UI**: Clean, minimalist design with rounded corners and shadows
- **Interactive Elements**: Hover effects, transitions, and visual feedback
- **Responsive Layout**: Flexible grid system and component sizing
- **Typography**: Poppins for headings, SF Pro for body text

## 🔧 Key Components

- **BaseTextEditor**: Reusable component for both title and subtitle editing
- **IPhonePreview**: Realistic iPhone mockup with live style updates
- **ThemesList**: Full-featured data table with search, select, and actions
- **Toast**: Non-intrusive notification system
- **Dynamic Headers**: Context-aware header content and actions

## 🎯 Current Limitations

- Theme duplication functionality (Duplicate option in dropdown)
- Advanced color picker (currently 9 preset colors only)
- Export/Import theme functionality
- Theme categories and tagging
- Additional theme elements beyond title/subtitle banners

## 🚧 Future Enhancements

- Additional theme elements (buttons, cards, etc.)
- Custom color picker with hex input
- Theme templates and presets
- Export themes as CSS/JSON
- Theme sharing and collaboration features