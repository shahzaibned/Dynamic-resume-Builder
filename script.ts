document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    
    form.addEventListener('submit', (event: Event) => {
      event.preventDefault();
      
     
      const nameInput = document.getElementById('name') as HTMLInputElement;
      const emailInput = document.getElementById('email') as HTMLInputElement;
      const educationInput = document.getElementById('education') as HTMLTextAreaElement;
      const workExperienceInput = document.getElementById('work-experience') as HTMLTextAreaElement;
      const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;
      
     
      const name = nameInput.value;
      const email = emailInput.value;
      const education = educationInput.value;
      const workExperience = workExperienceInput.value;
      const skills = skillsInput.value;
      
     
      document.getElementById('resume-name')!.textContent = name;
      document.getElementById('resume-email')!.textContent = email;
      document.getElementById('resume-education')!.textContent = education;
      document.getElementById('resume-work-experience')!.textContent = workExperience;
      document.getElementById('resume-skills')!.textContent = skills;
    });
    
    
    document.getElementById('name')?.addEventListener('input', (event: Event) => {
      const name = (event.target as HTMLInputElement).value;
      document.getElementById('resume-name')!.textContent = name;
    });
    
    document.getElementById('email')?.addEventListener('input', (event: Event) => {
      const email = (event.target as HTMLInputElement).value;
      document.getElementById('resume-email')!.textContent = email;
    });
    
    document.getElementById('education')?.addEventListener('input', (event: Event) => {
      const education = (event.target as HTMLTextAreaElement).value;
      document.getElementById('resume-education')!.textContent = education;
    });
    
    document.getElementById('work-experience')?.addEventListener('input', (event: Event) => {
      const workExperience = (event.target as HTMLTextAreaElement).value;
      document.getElementById('resume-work-experience')!.textContent = workExperience;
    });
    
    document.getElementById('skills')?.addEventListener('input', (event: Event) => {
      const skills = (event.target as HTMLTextAreaElement).value;
      document.getElementById('resume-skills')!.textContent = skills;
    });
  });

document.getElementById('share-link')!.style.display = 'block';
const username = 'exampleUser';
const resumeUrl = `https://${username}.vercel.app/resume`;
(document.getElementById('resume-url') as HTMLAnchorElement).href = resumeUrl;
(document.getElementById('resume-url') as HTMLAnchorElement).textContent = resumeUrl;

document.getElementById('copy-link')?.addEventListener('click', () => {
  navigator.clipboard.writeText(resumeUrl).then(() => {
    alert('Link copied to clipboard!');
  });
});


  


  
        