# Complete Project Setup Guide

## **⚠️ IMPORTANT: Which Guide to Use**

### **Main Portfolio App** (this project - nicbrem-create)
- Use this guide to add new projects to your portfolio
- Updates `app/data/sources.json` and `vercel.json`
- Handles routing and CORS configuration

### **Individual Project Apps** (theme-customizer, api-dash, etc.)
- Use the **Project App Setup Guide** (see below)
- Creates `meta.json` and project configuration
- Handles individual project deployment

---

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
  "category": ["AI/ML", "Tools"],
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
  "metaUrl": "https://your-project-name-xyz.vercel.app/meta.json"
}
```

**Note**: Use the actual Vercel URL where your project is deployed (e.g., `https://theme-customizer-sooty.vercel.app/meta.json`)

### Step 2: Add Vercel Routing
Add to `vercel.json` in the main portfolio app:

```json
{
  "rewrites": [
    {
      "source": "/your-project-name",
      "destination": "https://your-project-name-xyz.vercel.app/"
    },
    {
      "source": "/your-project-name/:path*",
      "destination": "https://your-project-name-xyz.vercel.app/:path*"
    }
  ],
  "headers": [
    {
      "source": "/your-project-name/:path*",
      "headers": [
        { "key": "Access-Control-Allow-Origin", "value": "*" }
      ]
    }
  ]
}
```

**Note**: Projects are typically deployed at the root of their Vercel domain, so the destination points to the root URL.

### Step 3: Project App Setup
In your individual project app, create this structure:
```
your-project-name/
├── public/
│   ├── meta.json
│   └── preview.png
├── next.config.mjs
└── vercel.json
```

### Step 4: Create `meta.json`
**⚠️ CRITICAL: Use exact field names and types**

```json
{
  "title": "Your Project Name",
  "category": ["AI/ML", "Tools"],
  "description": "Brief description of your project",
  "image": "/preview.png",
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

**Important Notes:**
- **Image URL**: Use relative path `/preview.png` (system will construct full URL)
- **Project URL**: Use `https://nicbrem.com/your-project-name` (the public-facing URL)
- **Include all fields**: Add company, role, outcomes, techStack, and modalContent for full portfolio display

### Step 5: Configure Next.js (Project App)
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

### Step 6: Configure Vercel (Project App)
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
1. **Check category format**: Can be string or array (both supported)
2. **Verify required fields**: `title`, `category`, `description`
3. **Test meta.json URL**: Should return valid JSON
4. **Check CORS headers**: Ensure Access-Control-Allow-Origin is set

### ❌ Invalid Data Structure
```json
// ✅ CORRECT - category as array (preferred)
"category": ["AI/ML", "Tools"]

// ✅ CORRECT - category as string (also supported)
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
- [ ] Category is a string or array (both supported)
- [ ] CORS headers are set correctly
- [ ] Image URL is accessible (or will use fallback)
- [ ] Project appears in portfolio after deployment
- [ ] Routing works: `https://nicbrem.com/your-project-name` shows your project
- [ ] All optional fields (company, role, outcomes, modalContent) are included

## **Quick Debug Commands**

```bash
# Test meta.json on production
curl https://your-project-name-xyz.vercel.app/meta.json

# Test routing
curl -I https://nicbrem.com/your-project-name

# Validate JSON syntax
node -e "JSON.parse(require('fs').readFileSync('public/meta.json'))"

# Check CORS headers
curl -H "Origin: https://nicbrem.com" -H "Access-Control-Request-Method: GET" -H "Access-Control-Request-Headers: X-Requested-With" -X OPTIONS https://your-project-name-xyz.vercel.app/meta.json
```

## **Fallback Projects**
If external projects fail, the system uses fallback projects from `lib/fetchProjects.ts`. Add new fallbacks there for development.

---

## **Project App Setup Guide**

### **For Individual Project Apps** (theme-customizer, api-dash, etc.)

When creating a new project app, follow these steps:

#### 1. **Create `public/meta.json`**
```json
{
  "title": "Your Project Name",
  "category": ["AI/ML", "Tools"],
  "description": "Brief description of your project",
  "image": "/preview.png",
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

**Important Notes:**
- **Image URL**: Use relative path `/preview.png` (system will construct full URL)
- **Project URL**: Use `https://nicbrem.com/your-project-name` (the public-facing URL)
- **Include all fields**: Add company, role, outcomes, techStack, and modalContent for full portfolio display

#### 2. **Create `next.config.mjs`**
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

#### 3. **Create `vercel.json`**
```json
{
  "headers": [
    {
      "source": "/meta.json",
      "headers": [
        { "key": "Access-Control-Allow-Origin", "value": "*" },
        { "key": "Content-Type", "value": "application/json" }
      ]
    }
  ]
}
```

#### 4. **Deploy and Test**
- Deploy to Vercel
- Test: `https://your-project-name-xyz.vercel.app/meta.json`
- Should return valid JSON with CORS headers
- Verify routing: `https://nicbrem.com/your-project-name` should show your project

### **Then Update Main Portfolio App**
After your project app is deployed, come back to this guide and follow the **Main Portfolio App** steps above.

---

This guide ensures your projects will appear correctly in the portfolio! 