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
              <tr>
                  <th>Company</th>
                  <th>Role</th>
                  <th>Year</th>
                  <th>Achievement</th>
              </tr>
              <tr>
                  <td>TealBook</td>
                  <td>Data Engineer</td>
                  <td>2022-2023</td>
                  <td>Developed microservices and created data pipelines for data enhancement processes, resulting in a more than 90% increase in data processing speed.</td>
              </tr>
              <tr>
                  <td>Black Square</td>
                  <td>Data Engineer</td>
                  <td>2020-2021</td>
                  <td>Created innovative end-to-end machine learning models, including Product Recommendation Engines, Demand Forecasting, and Credit Card Fraud Detection.</td>
              </tr>
              <tr>
                  <td>Integra Data and Analytic Solutions</td>
                  <td>Data Scientist</td>
                  <td>2019-2020</td>
                  <td>Provided data-to-insights and technical expertise for Oil & Gas projects, enabling the creation of cost-effective solutions through advanced data analytics and process improvement recommendations.</td>
              </tr>
          </tbody>
      </table>,
    },
    {
      title: 'Personal Projects',
      content: 
      <table>
      <tbody>
      <tr>
      <th>Project</th>
      <th>Details</th>
      </tr>
      <tr>
          <td>Travel Booking Platform with .NET and C#</td>
          <td>Created a custom platform with features like user authentication, role management, new trip booking, and admin search. This project involved building both the front-end user interface, the back-end server infrastructure, as well as database connection and management.</td>
      </tr>
      <tr>
          <td>Database Management App with Windows Forms and C#</td>
          <td>Developed a Windows Forms application that allows users to manage and interact with multiple tables in a database using SQL Server Management Studio (SSMS). Users can add, edit, and delete data entries with auto populated data through event handling.</td>
      </tr>
      <tr>
          <td>Online Marketplace</td>
          <td>Built an online marketplace platform where users can order groceries. Summaries of ordered items and calculated prices are displayed after order submissions.</td>
      </tr>
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

