import React from 'react';
import './WorkTerms.css'

const WorkTerms = () => {
  return (
    <div className='pt0'>
      <p className='f2 ma1'>Work Terms</p>
      <div className='wtCard'>
        <div className='mb4'>
          <p className='f4 i'>Fall '19 - ComPeters Inc.</p>
          <p className='ml4 mr4 lh-copy f5'>ComPeters inc was established in 1998 and continues to create, program, and support software systems for the Utility and Mapping Industry. With less than 10 employees in the office on any given day, they are an established company with the feel of a startup. They work directly with their customers to offer support and provide custom solutions.
            <br /><br />My work at Competers was extensive and meaningful.
            <br /><br />At the beginning of my work term with ComPeters, I discussed my learning goals with the CTO Greg and my co-workers. We would all be working close together and I was going to be working on many of the same projects as these other developers, so we had a conversation about the things they could teach me, and what I felt was important or interesting for me to learn and strive for.
            <br /><br />In the end, I decided on three main areas I wanted to work on throughout my placement with ComPeters: independent problem solving, technological literacy with current and relevant tools and languages, and communication with peers and customers.
            <br /><br />Independent problem solving was important to me because I often found myself looking to others for assistance just to realize how close I was to the answer already. At ComPeters, the work environment was beneficial to my development of this skill. I worked in a small office with the CTO and two other developers who all had their own work. I was given tasks that they believed I could handle or at least would be challenging in an educational way. I would work on my own for a while and if I got stuck, it was so easy to quickly ask a question that I was rarely stuck for long, and I started to see what they saw more and more. Being trusted to work independently while still having support so readily available was very effective in allowing me to take my time and try everything I could think of without feeling lost for extended periods of time. Getting help so quick in person helped me understand solutions more effectively so that I could get to them on my own more and more over time. 
            <br /><br />ComPeters is a modern company currently developing software for real world use, and so they use tools and technologies that are also modern and relevant in the development world today. I was directly working on current projects and working with real information. I gained real experience with MySQL, JavaScript, Visual Basic, Visual Studio, Visual Studio Code, AWS products, and more. Every morning I performed a daily integrity check, which involved running queries in MySQL Workbench and correcting issues or verifying information. I made changes to and tested a VB.NET application in Visual Studio. I wrote AWS Lambda functions in JavaScript using VSCode. Every day I worked with a broad spectrum of development tools that provided me experience I will take with me throughout my career.
            <br /><br />The last main project I worked on was recreating and improving an auto email system. I added functionality to the VB.NET application to execute an AWS step function. That step function then triggers a lambda I wrote that uses IDs to gather information about emails to be sent from a MySQL database, and then sends a message to an AWS Simple Queue Service queue. The queue then triggers another lambda function I wrote that gathers any necessary files from the database, creates and sends a formatted email to the required email addresses.
            <br /><br />Working with such a small team and at a company that interacts directly with customers often was very influential in improving my communication skills. I was working with a lot of new technology and tools that I was not very familiar with, so I naturally had questions. Luckily, I had three people in the room with me including the CTO. We had a meeting every morning where we would discuss everyone’s work for the day, and they treated me as an equal in this. It didn’t matter that I was a co-op still learning, I had my own work and I had to talk about it. This was also a time to ask questions that I had, as well as give my input on others’ work if they wanted it. I also had a few chances to interact with customers, helping with support issues once in a while and performing remote installs. This job required strong communication and helped me develop my skills so that I can communicate effectively in any workplace in the future. 
            <br /><br />ComPeters was a fantastic co-op placement for me this past semester. They provided a work environment that helped me strive to be my best and made me feel comfortable asking questions and having my own ideas. I gained experience working with numerous tools and technologies that will benefit me throughout my career as a student and beyond. I truly felt like I was learning valuable information and doing work that was actually meaningful. 
          </p>
        </div>
      </div>
      <div className='mt4 wtCard'>
        <div className='mb2'>
          <p className='f4 i'>Summer '19 - Silence</p>
          <p className='ml4 mr4 lh-copy f5'>Silence is a non-profit arts organization located in Guelph that provides an accessible space for artists and spectators, specializing in experimental work and improvisation.
            <br /><br /><b>Learning Goals / Job Description</b>
            <br /><br />Throughout this work term, I wanted to develop various skills. One of my main goals was to gain experience working with web design technology like WordPress and the technologies associated with it, as well as graphic design. I also wanted to improve my ability to work independently and manage my time effectively.  Finally, I aimed to enhance my critical thinking and analysis skills.
            <br /><br />I developed these goals along with my supervisor to ensure they were a good match with the tasks I would be working on, but were still something to strive for while completing said tasks.
            <br /><br />These skills can all be transferred to my future career, especially time management and critical thinking/analysis. Experience with WordPress and web design practices will also help me in most future circumstances, even just for the experience of learning new technology.
            <br /><br />Most of my days were spent working on one over-arching project: the Silence website. The silence website had been the same for years. It was an old WordPress log with 32 pages, redundant content, and a difficult system for adding new event information. I was provided the tools to experiment and do my best to make it more attractive and user friendly. The final result is something I am proud to say I created. It is still being used currently as their live site.
            <br /><br />The Silence team was small, with my only coworkers being my boss and an administrative assistant. I was able to work individually on my project and experiment with my own ideas, but also able to gather input from my coworkers sharing the space. 
            <br /><br />I also designed a new logo and menu for the Dead Dog Cafe, the cafe inside Silence, as well as a few posters for events being held at the venue. I also worked during a few events, helping with set up and selling tickets at the door. 
            <br /><br /><b>Conclusions</b>
            <br /><br />Silence was a wonderful work environment that combined my interest in computer science and web design with my love of the arts. I developed very valuable skills with technology, individuality and time management, and critical thinking and analysis that will prove useful to me throughout my future career as a student and afterward.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkTerms;