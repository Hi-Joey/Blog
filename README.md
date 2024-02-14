# BlogMe

## 1. Business Requirement

### 1.1 Description

BlogMe is a dynamic and user-centric blog system designed to facilitate seamless content creation, sharing, and interaction among individuals with diverse interests and passions. Tailored to meet the needs of bloggers, content creators, and avid readers alike, BlogMe offers a comprehensive platform where users can explore, engage, and connect through the power of written word and visual storytelling.

### 1.2 Key Features

<p>
  User-Friendly Interface: BlogMe boasts a sleek and intuitive interface, making
  it easy for users to <span style="color: green"> navigate </span>, create, and
  manage their own blogs with minimal effort. <br /><br />
  Rich Text Editor: Our integrated
  <span style="color: orange"> rich text editor </span> empowers
  <span style="color: orange"> users </span> to craft compelling blog
  <span style="color: orange"> posts</span> with ease. From formatting text to
  embedding <span style="color: orange"> images </span>, videos, and multimedia
  <span style="color: orange"> content </span>, the editor offers a seamless
  content creation experience. <br /><br />
  Image Insertion: Users can <span style="color: green"> enhance </span> their
  <span style="color: orange"> blog </span> posts by seamlessly
  <span style="color: green"> inserting </span> images and multimedia elements,
  enriching their storytelling and engaging
  <span style="color: orange"> readers </span>on a visual level. <br /><br />
  User Authentication: To ensure a secure and personalized experience, BlogMe
  features robust user authentication mechanisms, allowing inspaniduals to
  <span style="color: green"> register, log in, and manage</span>, their
  <span style="color: orange"> accounts </span> securely. <br /><br />
  Customization and Personalization: Users have the flexibility to
  <span style="color: green"> customize </span> their blog layouts,
  <span style="color: orange"> categories </span>, and
  <span style="color: orange"> settings </span> to reflect their unique style
  and personality, ensuring a
  <span style="color: green"> personalized </span> blogging experience.
  <br /><br />
  Content Moderation: With built-in content moderation tools,
  <span style="color: orange"> administrators </span> can oversee user-generated
  content, ensuring compliance with
  <span style="color: orange"> community </span> guidelines and fostering a safe
  and inclusive environment for all users. <br /><br />
  The proposed blog application aims to provide users with a platform to
  <span style="color: green"> create </span>, share, and interact with content
  in a user-friendly and engaging manner. By incorporating a rich text editor
  and image insertion capabilities, the application seeks to enhance the
  blogging experience for both <span style="color: orange"> creators </span> and
  readers.
</p>

### 1.3 Target Audience

The target audience includes bloggers, content creators, and readers who are interested in sharing and consuming written and visual content on various topics.

### 1.4 Nouns and Verbs

#### **Nouns**

- Rich Text Editor

- Image

- User

- Account

- Community

- Content

- Setting

- Administrator

- Blog

- Writer

- Reader

- Creator

- Domain

- Categories

- Post

#### Verbs

- Navigate

- Enhance

- Insert

- Register

- Log In

- Manage

- Customize

- Personalize

- Moderate

- Connect

- Create

- Edit

- Delete

### 1.5 Aggregation

#### **User**

**Properties**

- Username
- Email
- Password
- Image

**Methods**

- register()

- logIn()

- manageAccount()

#### **Post**

**Properties**

- title

- content

- author

- date

**Methods**

- createPost()

- editPost()

- deletePost()

- insertImage()

#### **Image**

**Properties**

- URL

- caption

#### **Administrator**

**Properties**

- Username

- Email

- Password

- Image

**Methods**

- moderateContent()

#### **Category**

**Properties**

- CategoryName

**Methods**

- createCategory()

- addCategoryToPost()

### 1.6 Rules

- Users must register and log in to create and manage their blog posts.

- Users should adhere to community guidelines and refrain from posting inappropriate or offensive content.
- Administrators have the authority to manage user accounts and moderate content to ensure a safe and positive user experience.

#### Challenge Questions

- How can we ensure user authentication and data security?
- What features can enhance user engagement and interaction within the blog community?
- How can we optimize the rich text editor for seamless content creation and image insertion?

### 1.7 User Stories

#### Dimension

- Age: Categorizing users based on their age range.

- Gender: Classifying users based on their gender identity.

- Occupation: Grouping users based on their profession or occupation.

- Interests: Segmenting users based on their hobbies, interests, and preferences.

- Location: Classifying users based on their geographic location or region.

- Income Level: Categorizing user based on their income bracket.

- Education Level: Grouping users based on their educational attainment.

- Technological Proficiency: Segmenting users based on their familiarity and proficiency with technology.

- Social Activity: Categorizing users based on their level of social engagement and activity.

##### Two most important dimension

Age and Education Level

##### Dimension Table

![image-20240213155752900](README.assets/image-20240213155752900.png)

#### User Persona and User Story

1. ##### User Persona: Emily

   **Background**

   Emily is a 25-year-old marketing professional with a Bachelor's degree. She enjoys traveling, photography, and exploring new cultures.

   **User Story**

   As Emily, a 25-year-old marketing professional with a Bachelor's degree, I want to share my travel experiences and photos with others on the blog platform because I believe that by sharing my adventures and capturing memorable moments, I can inspire and connect with fellow travelers, and also preserve memories for myself and others to cherish in the future.

2. ##### User Persona: John

   **Background**

   John is a 40-year-old finance professional with a Master's degree. He is passionate about investments, financial planning, and wealth management.

   **User Story**

   As John, a 40-year-old finance professional with a Master's degree, I want to share insights and analysis on financial markets and investment strategies through blog posts because I believe that by sharing my knowledge and expertise, I can help others make informed financial decisions, engage in meaningful discussions, and contribute to the financial literacy of the community.

3. ##### User Persona: Sarah

   **Background**

   Sarah is a 55-year-old retiree with a high school diploma. She enjoys gardening, cooking, and spending time with her family.

   **User Story**

   As Sarah, a 55-year-old retiree with a high school diploma, I want to share my gardening tips and recipes for home-cooked meals with like-minded individuals on the blog platform because I find joy in nurturing plants, creating delicious meals, and sharing my knowledge and experiences with others who share similar interests, fostering a sense of camaraderie and connection within the gardening and cooking community.

4. ##### User Persona: Alex

   **Background**

   Alex is an 18-year-old high school student in his senior year. He is passionate about gaming, technology, and programming.

   **User Story**

   As Alex, an 18-year-old high school student in his senior year, I want to share my gaming experiences, reviews, and insights on the latest video game releases with fellow gamers because gaming is my passion and I believe that by sharing my thoughts and opinions, I can contribute to the gaming community, engage in lively discussions, and stay connected with others who share my enthusiasm for gaming and technology.

## 2 Low level mockups

### 2.1 Login

![image-20240213145838352](README.assets/image-20240213145838352.png)

### 2.2 Register

![image-20240213145907418](README.assets/image-20240213145907418.png)

### 2.3 Create Post

![image-20240213152344190](README.assets/image-20240213152344190.png)

### 2.4 Read Post

![image-20240213154656136](README.assets/image-20240213154656136.png)

## 3 UML Class Diagram

![img](https://documents.lucid.app/documents/c66fcbee-7589-469d-9e78-b4997c442288/pages/0_0?a=918&x=-1774&y=336&w=2047&h=1389&store=1&accept=image%2F*&auth=LCA%2033df6cf0c94e59951f2e00afe279fd56026ea0972f55c9db1ecebcae15e9991d-ts%3D1707868740)
