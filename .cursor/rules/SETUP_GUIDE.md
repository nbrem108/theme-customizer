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

->

# Complete Project Setup Guide

## **Quick Reference - What You Need**

### 1. **Add to `app/data/sources.json`**
```json
{
  "id": "your-project-id",
  "metaUrl": "https://www.nicbrem.com/your-project-name/meta.json"
}
```

### 2. **Create `meta.json` in your project**
```json
{
  "title": "Your Project Name",
  "category": "Tools",
  "description": "Brief description of your project",
  "image": "https://www.nicbrem.com/your-project-name/preview.png",
  "technologies": ["Next.js", "React", "TypeScript"],
  "status": "live",
  "year": "2025",
  "impact": "What impact does this project have?",
  "url": "https://nicbrem.com/your-project-name",
  "company": "Personal Project",
  "role": "Full Stack Developer",
  "duration": "2025",
  "outcomes": ["Outcome 1", "Outcome 2", "Outcome 3"],
  "techStack": ["Next.js", "React", "TypeScript"],
  "modalContent": {
    "overview": "Detailed project overview...",
    "challenges": ["Challenge 1", "Challenge 2"],
    "solutions": ["Solution 1", "Solution 2"],
    "results": ["Result 1", "Result 2"],
    "keyTechnologies": ["Next.js", "React", "TypeScript"]
  }
}
```

## **Detailed Steps**

### Step 1: Add Project Source
Add to `app/data/sources.json`:
```json
{
  "id": "your-project-id",
  "metaUrl": "https://www.nicbrem.com/your-project-name/meta.json"
}
```

### Step 2: Create Project Structure
In your project directory:
```
your-project-name/
├── public/
│   ├── meta.json
│   └── preview.png
├── next.config.mjs
└── vercel.json
```

### Step 3: Create `meta.json`
**⚠️ CRITICAL: Use exact field names and types**

```json
{
  "title": "Your Project Name",
  "category": "Tools",
  "description": "Brief description of your project",
  "image": "https://www.nicbrem.com/your-project-name/preview.png",
  "technologies": ["Next.js", "React", "TypeScript"],
  "status": "live",
  "year": "2025",
  "impact": "What impact does this project have?",
  "url": "https://nicbrem.com/your-project-name",
  "company": "Personal Project",
  "role": "Full Stack Developer",
  "duration": "2025",
  "outcomes": ["Outcome 1", "Outcome 2", "Outcome 3"],
  "techStack": ["Next.js", "React", "TypeScript"],
  "modalContent": {
    "overview": "Detailed project overview...",
    "challenges": ["Challenge 1", "Challenge 2"],
    "solutions": ["Solution 1", "Solution 2"],
    "results": ["Result 1", "Result 2"],
    "keyTechnologies": ["Next.js", "React", "TypeScript"]
  }
}
```

### Step 4: Configure Next.js
Create `next.config.mjs`:
```javascript
const nextConfig = {
  basePath: '/your-project-name',
  async headers() {
    return [
      {
        source: '/meta.json',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Content-Type', value: 'application/json' }
        ]
      }
    ]
  }
}

export default nextConfig
```

### Step 5: Configure Vercel
Create `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/your-project-name/meta.json",
      "headers": [
        { "key": "Access-Control-Allow-Origin", "value": "*" },
        { "key": "Content-Type", "value": "application/json" }
      ]
    }
  ]
}
```

## **Supported Categories**
- `AI/ML`
- `E-commerce`
- `Creative`
- `Wellness`
- `Tools`
- `Experimental`
- `Security`
- `Data`
- `Business`

## **Common Issues & Solutions**

### ❌ Project Not Appearing
1. **Check category format**: Must be string, not array
2. **Verify required fields**: `title`, `category`, `description`
3. **Test meta.json URL**: Should return valid JSON
4. **Check CORS headers**: Ensure Access-Control-Allow-Origin is set

### ❌ Invalid Data Structure
```json
// ❌ WRONG - category as array
"category": ["Web Development", "UI/UX"]

// ✅ CORRECT - category as string
"category": "Tools"
```

### ❌ Missing Fields
Ensure these fields exist:
- `title` (required)
- `category` (required) 
- `description` (required)
- `image` (optional, will use fallback)
- `technologies` (required)
- `status` (required: "live", "development", or "concept")
- `year` (required)
- `impact` (required)
- `url` (required)

## **Testing Checklist**

- [ ] `meta.json` is accessible at the correct URL
- [ ] JSON is valid (no syntax errors)
- [ ] All required fields are present
- [ ] Category is a string, not an array
- [ ] CORS headers are set correctly
- [ ] Image URL is accessible (or will use fallback)
- [ ] Project appears in portfolio after deployment

## **Quick Debug Commands**

```bash
# Test meta.json locally
curl http://localhost:3000/your-project-name/meta.json

# Test meta.json on production
curl https://nicbrem.com/your-project-name/meta.json

# Validate JSON syntax
node -e "JSON.parse(require('fs').readFileSync('public/meta.json'))"
```

## **Fallback Projects**
If external projects fail, the system uses fallback projects from `lib/fetchProjects.ts`. Add new fallbacks there for development.

This guide ensures your projects will appear correctly in the portfolio!