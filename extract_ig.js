import fs from 'fs';

function extract() {
  try {
    const html = fs.readFileSync('ig_out.html', 'utf8');
    
    // Unescape unicode sequences to make them readable URLs
    const unescaped = html
      .replace(/\\u0026/g, '&')
      .replace(/\\/g, '')
      .replace(/&amp;/g, '&');
      
    // Find all potential video URLs
    const mp4Regex = /https:\/\/[^"'\s<>]*?\.mp4[^"'\s<>]*?/gi;
    const matches = unescaped.match(mp4Regex) || [];
    
    console.log(`Found ${matches.length} potential .mp4 URLs:`);
    const uniqueMatches = Array.from(new Set(matches));
    
    uniqueMatches.forEach((url, index) => {
      console.log(`\n--- Video URL ${index + 1} ---`);
      console.log(url);
    });
    
  } catch (error) {
    console.error('Error processing file:', error);
  }
}

extract();
