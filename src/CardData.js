import React from 'react';
import Card from './Card'; // Import the Card component


const CardData = () => {
  const cardDataList = [
    {
      title: 'Technical Skills',
      content:         
      <table>
      <tbody>
      <tr><td>HTML, CSS, JavaScript</td>
      <td>Front-end Frameworks</td>
      <td>API Development</td></tr>
      <tr><td>Back-end Programming</td>
      <td>Databases and SQL</td>
      <td>Version Control</td></tr>
      <tr><td>Testing and Debugging</td>
      <td>Security Best Practices</td>
      <td>Problem-Solving</td></tr>
      </tbody>
      </table>,
    },
    {
      title: 'Career Goals',
      content: 
      <ul>
      <li>Become a well-rounded professional with expertise in both front-end and back-end development</li>
      <li>Continuously expand my skill set and stay updated with the latest technologies and programming languages to remain competitive in the ever-evolving tech industry</li>
      <li>Specialize in emerging technologies such as machine learning or cloud computing</li>
      <li>Take on leadership roles and develop strong project management skills</li>
      <li>Committed to building a diverse portfolio that showcases my expertise across various domains and industries</li>
      </ul>,
    },
    {
      title: 'Work Experience',
      content:
      <table>
      <tbody>
      <tr><th>Company</th>
      <th>Role</th><th>Year</th>
      <th>Achievement</th></tr>
      <tr><td>Calgary Mental Health Center</td>
      <td>Business Analyst</td><td>2022</td>
      <td>Created 50 dashboards for data insights with data of the whole calgary community</td></tr>
      <tr><td>ATCO</td>
      <td>Project Manager</td><td>2021</td>
      <td>Managed over 20 gas facilities upgrade projects concurrently</td></tr>
      <tr><td>Worley Parsons</td><td>Mechanical Engineer</td>
      <td>2020</td>
      <td>Developed pipeline stress and hydraulic simulation models for more than pipelines</td></tr>
      </tbody>
      </table>,
    },
    {
      title: 'Personal Projects',
      content: 
      <table>
      <tbody>
      <tr><th>Project</th><th>Details</th></tr>
      <tr><td>Blogging Platform</td>
      <td>Create a custom blogging platform with features like user authentication, content management, comments, and social sharing. This project would involve building both the front-end user interface and the back-end server infrastructure.</td></tr>
      <tr><td>Fitness Tracking App</td>
      <td>Develop a web or mobile application that allows users to track their fitness goals, log workouts, monitor progress, and provide personalized recommendations. This project could involve integrating APIs for data tracking and implementing data visualization features.</td></tr>
      <tr><td>Online Marketplace</td>
      <td> Build an online marketplace platform where users can buy and sell goods or services. This project would involve implementing features like user profiles, product listings, search functionality, secure transactions, and ratings/reviews.</td></tr>
      </tbody>
      </table>,
    },
    {
      title: 'Education',
      content: 
      <ul>
      <li>Sait - Full Stack developement Program, Certificate</li>
      <li>University of Alberta - Chemical Engineering, BSc.</li>
      </ul>,
    },
    {
      title: 'Hobbies',
      content: 
      <ul>
      <li>Photography - it offers endless opportunities to explore the world around me and share my unique perspective</li>
      <li>Playing piano - music is a source of joy and relaxation</li>
      <li>Hiking and Nature Explorationv - enjoying the serenity of nature can be rejuvenating and offer a break from the daily routine</li>
      </ul>,
    },
  ];

  return (
    <div className="card-container">
      {cardDataList.map((cardData, index) => (
        <Card key={index} title={cardData.title} content={cardData.content} />
      ))}
    </div>
  );
};

export default CardData;

