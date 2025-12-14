# Profile Image Setup

## How to Add Your Profile Image

### Option 1: Local Image (Recommended)

1. Place your profile image in this folder (`frontend/public/`)
2. Name it `profile.jpg` (or `.png`, `.webp`)
3. Recommended size: 400x400px or larger (square format works best)
4. The image will automatically be used

### Option 2: Custom Path/URL

Edit `frontend/src/components/Hero.jsx` and change:

```jsx
const PROFILE_IMAGE = "/profile.jpg"; // Change this to your image path
```

You can use:

- Local path: `/your-image.jpg`
- External URL: `https://example.com/your-image.jpg`
- GitHub avatar: Will automatically fallback if image not found

### Option 3: Use GitHub Avatar

The component automatically falls back to your GitHub avatar if the custom image is not found.

## Image Requirements

- Format: JPG, PNG, or WebP
- Size: 400x400px minimum (square recommended)
- File size: Keep under 500KB for best performance
