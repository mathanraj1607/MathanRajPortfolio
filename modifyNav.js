const fs = require('fs');
const path = 'C:\\Users\\matha\\OneDrive\\Desktop\\Portfolio\\src\\components\\layout\\Nav.jsx';
let content = fs.readFileSync(path, 'utf8');
// Replace the inner content of the div with className mx-auto flex max-w-6xl items-center justify-between px-6 py-4
const opening = '<div className=\"mx-auto flex max-w-6xl items-center justify-between px-6 py-4\">';
const closing = '</div>';
// Find the opening tag
const openIdx = content.indexOf(opening);
if (openIdx === -1) { console.log('Opening not found'); process.exit(1); }
const afterOpen = openIdx + opening.length;
// Find the closing tag after the opening
const closeIdx = content.indexOf(closing, afterOpen);
if (closeIdx === -1) { console.log('Closing not found'); process.exit(1); }
// Content between
const innerBefore = content.substring(afterOpen, closeIdx);
// New inner content
const newInner = `
         <div className=\"flex-1\"></div>
         <nav className=\"flex-1 flex justify-center items-center hidden md-flex\" aria-label=\"Primary\">
           {NAV_LINKS.map((link) => (
             <UnderlineLink key={link.href} href={link.href}>
               {link.label}
             </UnderlineLink>
           ))}
         </nav>
         
         <div className=\"hidden md:block flex-shrink-0\">
           <Button href={links.resumeUrl} target=\"_blank\" rel=\"noreferrer\" variant=\"secondary\">
             Resume
           </Button>
         </div>
         `;
// Note: need to preserve indentation? We'll keep as is and hope it matches.
// Replace
const newContent = content.substring(0, afterOpen) + newInner + content.substring(closeIdx);
fs.writeFileSync(path, newContent, 'utf8');
console.log('Done');