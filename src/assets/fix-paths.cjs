const fs = require('fs');
const path = require('path');

const filesJsonPath = path.join(__dirname, 'files.json');
let filesContent = fs.readFileSync(filesJsonPath, 'utf8');
filesContent = filesContent.replace(/^\uFEFF/, '');
const filesData = JSON.parse(filesContent);

const assetsMap = {};
filesData.forEach(f => {
    assetsMap[f.Name.toLowerCase()] = f.FullName;
});

const baseDir = path.join(__dirname, '..', '..');

const filesToUpdate = [
    'src/routes/products.$category.$product.tsx',
    'src/lib/catalog.ts'
];

function getRelativeAssetPath(absoluteAssetPath) {
    const srcIndex = absoluteAssetPath.indexOf('src\\assets\\');
    if (srcIndex !== -1) {
        return '@/' + absoluteAssetPath.substring(srcIndex + 4).replace(/\\/g, '/');
    }
    return absoluteAssetPath;
}

const fallbacks = {
    'home b2 with brand-pricelsit.png': 'B2 WITH BRAND - PRICELSIT.png',
    'home b2 with brand.png': 'B2 WITH BRAND.png',
    'home fingerprint lock.png': 'FINGERPRINT LOCK.png',
    'home nfc cabinets lock.png': 'NFC CABINETS LOCK.png',
    'home series - 3 pro - wifi - brand.png': 'SERIES - 3 PRO - WIFI - BRAND.png',
    'home series - 4.png': 'SERIES - 4.png',
    
    // Unused catalog.ts missing ones just in case
    's1-pro-g.png': 'Home NEW S1 PRO.png',
    'series-2-pro.png': 'B2 WITH BRAND.png',
    'series-3.png': 'SERIES - 3 PRO - WIFI - BRAND.png',
    'series-3-pro-ai.png': 'SERIES - 3 PRO - WIFI - BRAND.png',
    'series-3-pro-slim.png': 'SERIES - 3 PRO - WIFI - BRAND.png',
    'series-4-pro-ai.png': 'SERIES - 4.png',
    'series-v1.png': 'S - VL.JPG',
    'series-al-1.png': 'NEW S1 PRO.png',
    'series-r1.png': 'NEW S1 PRO.png',
    'series-h1.png': 'NEW S1 PRO.png',
    'series-g0.png': 'HOME GLASS DOOR LOCK.png',
    'video-doorbell-features.jpg': 'app_video_doorbell_entrance.jpg',
    'smart-door-lock-face-recognition.jpg': 'Hotels_LOCK.png'
};

filesToUpdate.forEach(relPath => {
    const fullPath = path.join(baseDir, relPath);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        
        const importRegex = /import\s+([A-Za-z0-9_]+)\s+from\s+["'](@\/assets\/[^"']+)["']/g;
        
        content = content.replace(importRegex, (match, varName, oldPath) => {
            const fileName = path.basename(oldPath);
            const lowerFileName = fileName.toLowerCase();
            
            let targetFileName = lowerFileName;
            if (fallbacks[lowerFileName]) {
                targetFileName = fallbacks[lowerFileName].toLowerCase();
            }
            
            let matchedAbsolutePath = assetsMap[targetFileName];
            
            if (!matchedAbsolutePath) {
                const keys = Object.keys(assetsMap);
                for(let k of keys) {
                    if (k.includes(targetFileName.replace('.png', '').replace('.jpg', ''))) {
                        matchedAbsolutePath = assetsMap[k];
                        break;
                    }
                }
            }

            if (matchedAbsolutePath) {
                const newRelative = getRelativeAssetPath(matchedAbsolutePath);
                return `import ${varName} from "${newRelative}"`;
            } else {
                return match;
            }
        });
        
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${relPath}`);
    }
});
