# Quick Steps for `meta.json` Setup

## **Essential Steps for Linking Projects**

### 1. **Create `public/meta.json`**
```json
{
  "title": "Your Project Name",
  "category": ["Category1", "Category2"],
  "description": "Brief description of your project",
  "image": "https://www.nicbrem.com/your-project-name/your-image.png",
  "technologies": ["Next.js", "React", "TypeScript"],
  "status": "live",
  "year": "2025",
  "impact": "What impact does this project have?",
  "url": "https://nicbrem.com/your-project-name"
}
```

### 2. **Add `basePath` to `next.config.mjs`**
```javascript
const nextConfig = {
  basePath: '/your-project-name',
  // ... other config
}
```

### 3. **Create `vercel.json` for CORS**
```json
{
  "headers": [
    {
      "source": "/your-project-name/meta.json",
      "headers": [
        { "key": "Access-Control-Allow-Origin", "value": "*" }
      ]
    }
  ]
}
```

### 4. **Test Locally**
- Run: `npm run dev`
- Visit: `http://localhost:3000/your-project-name/meta.json`

### 5. **Deploy & Test**
- Deploy to Vercel
- Test: `https://nicbrem.com/your-project-name/meta.json`

That's it! Your main project can now fetch the metadata from this URL. 