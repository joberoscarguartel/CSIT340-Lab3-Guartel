# Jober Oscar Guartel's Portfolio

A React portfolio for CSIT340, reproduced from the provided `portfolio.html` using the 15 components required by `lab2-instructions.md`. The section order, HTML structure, and Tailwind classes match the reference. The content is personalized for Jober Oscar Guartel, a third year BS Information Technology student at Cebu Institute of Technology – University.

## Run locally

Use Node.js 22.12+ or a newer supported LTS release.

```powershell
cd "C:\Users\HP430 G1\Desktop\CSIT340Port\CSIT340-Lab3-Guartel"
npm install
npm run dev
```

Open the local address printed by Vite.

```powershell
npm run lint
npm run build
npm run preview
```

## Components

`src/components/` contains exactly these 15 files, each with a default export:

- `Navbar.jsx`
- `NavLink.jsx`
- `Hero.jsx`
- `SectionHeading.jsx`
- `AboutSection.jsx`
- `Fact.jsx`
- `SkillsSection.jsx`
- `SkillTag.jsx`
- `ProjectsSection.jsx`
- `ProjectCard.jsx`
- `ExperienceSection.jsx`
- `TimelineItem.jsx`
- `ContactSection.jsx`
- `ContactLink.jsx`
- `Footer.jsx`

Components that accept props destructure them in their function parameters. `App.jsx` only imports and arranges the navigation, hero, five sections, and footer. There are no images or extra generated styles.

The page has five section navigation links, four facts, 4 + 3 + 4 skills, four project cards, three timeline items, and three contact links.

## Portfolio content

The supplied Wrytz and PAMCAS projects appear first. Two existing public projects fill the remaining cards required by the lab:

- [Attendance Management System](https://github.com/joberoscarguartel/CSIT228-Capstone), whose README lists Jober Oscar Guartel as a group member.
- [About Me in React](https://github.com/joberoscarguartel/CSIT340-LAB1-GUARTEL), the earlier CSIT340 portfolio.

The Attendance Management System group project also fills the third required timeline entry. These entries can be edited in `ProjectsSection.jsx` and `ExperienceSection.jsx`.

[Wrytz](https://wrytz.vercel.app) has no public repository listed in the supplied GitHub profile, so its project card links to that profile as the lab requires. Its live address is included in the card description. The template's skills are unchanged. The third contact link uses the supplied phone number.

## Dependency audit

Tailwind 3 is used to match the reference's CDN styling. `npm audit` currently reports five high-severity findings in its development dependency chain, all from an [unpatched `braces` issue](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm). `npm audit --omit=dev` reports zero findings. These build dependencies are not included in the portfolio's browser bundle.

## Push to GitHub yourself

The lab specifies the repository name `CSIT340-Lab3-Guartel`. Create an empty repository with that name on GitHub, then run these commands from this project folder:

```powershell
git init -b main
git add .
git commit -m "Complete component-based CSIT340 portfolio"
git remote add origin https://github.com/joberoscarguartel/CSIT340-Lab3-Guartel.git
git push -u origin main
```

Submit the repository link in MS Teams. No repository creation, commit, or push was performed automatically.
