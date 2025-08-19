# Hunter-Net Forum - Render Deployment

A private forum for Hunter: The Reckoning gaming groups, deployed on Render with persistent browser storage.

## 🚀 Live Site

Once deployed on Render, your site will be available at: `https://your-app-name.onrender.com`

## 🎮 Getting Started

### Default Test Accounts
- **witness1** / **firstsight** (Admin)
  - Security Question: "What year did the Network go live?" 
  - Answer: "1999"
- **shadow7** / **huntress** (User)
  - Security Question: "What hunts the hunters?"
  - Answer: "fear" 
- **digitalghost** / **vanish** (Moderator)
  - Security Question: "What is the first rule of hunter operations?"
  - Answer: "never hunt alone"

### Creating New Accounts
Users can register their own hunter accounts with custom security questions. All answers are case-insensitive.

## 📱 Features

- ✅ **Persistent user accounts** (stored in browser localStorage)
- ✅ **Create threads and reply to posts** 
- ✅ **User statistics and role system** (Admin/Moderator badges)
- ✅ **Signal types** for different post categories (Sighting/Intel/Caution)
- ✅ **Mobile responsive design** - works on phones and tablets
- ✅ **Session management** - users stay logged in
- ✅ **Real-time post counts** and view tracking
- ✅ **Quote system** for replying to specific posts
- ✅ **Matrix-style animated background** for atmosphere

## 🔧 Technical Details

- **Frontend**: Pure HTML/CSS/JavaScript (no frameworks)
- **Backend**: Node.js + Express (serves static files only)
- **Storage**: Browser localStorage (like Owlbear Legacy)
- **Hosting**: Optimized for Render free tier
- **Dependencies**: Express + compression for performance

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start local server
npm start

# Visit http://localhost:3000
```

## 📂 Project Structure

```
hunter-net-render/
├── package.json          # Node.js configuration
├── server.js            # Express server
├── render.yaml          # Render deployment config
├── public/
│   ├── index.html       # Main Hunter-Net application
│   └── robots.txt       # Prevents search engine indexing
├── README.md            # This file
└── .gitignore          # Git ignore rules
```

## 🔐 Privacy & Data

- **No server-side database** - all user data stored locally in each user's browser
- **No user tracking or analytics** 
- **Each user's data is completely private** to them
- **Works offline** once initially loaded
- **Search engines blocked** via robots.txt

## 🎯 Deployment to Render

1. **Push to GitHub**: Create repo with all files
2. **Connect to Render**: New Web Service → Connect GitHub repo
3. **Auto-configuration**: Render will use the included `render.yaml`
4. **Settings**:
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Plan: Free

## 🎲 For Gaming Groups

Perfect for Hunter: The Reckoning campaigns:
- **Share the live URL** with your gaming group
- **Everyone can register** their hunter persona
- **Post sighting reports** and coordinate hunts
- **Share intelligence** on supernatural threats
- **All data stays private** to each user

## 📞 Support

The site includes:
- Built-in help text and tooltips
- Test accounts for immediate use
- Responsive design for all devices
- Error handling and user feedback

Share your Render URL with your gaming group and start hunting! 🏹