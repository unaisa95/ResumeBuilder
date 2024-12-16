//listing element
 document.getElementById('resumeFORM')?.addEventListener('submit' , function(event){
    event.preventDefault();

//type assertion
     const nameElement = document.getElementById('name') as HTMLInputElement;
     const emailElement = document.getElementById('email') as HTMLInputElement;
     const phoneElement = document.getElementById('phone') as HTMLInputElement;
     const educatiponElement = document.getElementById('education') as HTMLInputElement;
     const experienceElement = document.getElementById('experience') as HTMLInputElement;
     const skillsElement = document.getElementById('skills') as HTMLInputElement;


if(nameElement && emailElement && phoneElement && educatiponElement && experienceElement &&skillsElement){
    const name =nameElement.value;
    const email =emailElement.value;
    const phone =phoneElement.value;
    const education =educatiponElement.value;
    const experience =experienceElement.value;
    const skills =skillsElement.value;



    //creat resumwOutput
    const resumeOutput =` 
    <h2>Resume</h2>
    <p><strong>Name:</strong>${name}</p>
    <p><strong>Email:</strong>${email}</p>
    <p><strong>Phone:</strong>${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experienc</h3>
    <p>${experience}</p>

    <h3>>Skills</h3>
    <p>${skills}</p>
     `;


     const resumeOutputElement =document.getElementById('resumeOutput')
     if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
     }else{
        console.error('the resume output elements are missig ')
     }

     

}else{
    console.error('omne or more output elements are missig')
}

 });