## Web Application for Organizing and Promoting Art Workshops

The web application is designed for organizing and promoting art workshops. There are three types of users: participant, organizer, and administrator.
## Login and Registration

All users can log into the system using their credentials (username and password). Upon correctly entering their credentials, the user can continue using the system. If the credentials are incorrect, an appropriate error message is displayed. Once logged in, users can also change their password.

If a user does not have an account (is not registered in the system), there is an option to create a new account. The administrator can log in through a separate form that is not publicly visible.

Participant registration requires the following information:

- First name,
- Last name,
- Username (unique across all users in the system),
- Password and password confirmation,
- Contact phone number,
- Email address (unique, only one account per email address),
- Organization name,
- Organization headquarters address (country, city, postal code, street and number),
- Organization registration number.

If the data is entered correctly, a new registration request is created. During registration, users can also upload a profile picture (min. size 100x100 px, max. size 300x300 px, in JPG/PNG format).

Password validity is checked using a regular expression (minimum of 8 characters, maximum of 16, including at least one uppercase letter, one number, and one special character, and it must start with a letter).

The administrator is responsible for reviewing incoming registration requests, which can be either approved or rejected (if approved, the status is "active"; if rejected, the status is "inactive"). Administrators can directly add new organizers to the system.

When changing the password, users must enter their current password, along with the new password twice. If the current password is incorrect or the new password does not meet the required format, an appropriate error message is displayed. 
## Unregistered User
An unregistered user can view all current workshops available in the system. Basic information is displayed for each workshop (main image, title, workshop date, location, and a brief description), without access to detailed workshop information. There is an option to search for workshops by title and/or location. Once the results meeting the search criteria are displayed, the user can sort them by workshop title or workshop date.
## Participant
After successfully logging into the system, the participant sees the main menu, which consists of the options described below.

The first option in the main menu is "Profile". Within the profile, the participant can:

- view and update their basic information
- view a tabular list of all workshops they have attended (with sorting enabled for each column in the table)

The second option in the main menu is "Workshops". Here, the participant sees a section for workshops they are currently registered for, as well as all current workshops in the system. Unlike unregistered users, the participant can navigate to a dedicated workshop details page, where they can view a longer description and a gallery of images. If there are available spots in a workshop, the participant will see a "Register Me" button. They also have the option to initiate a chat with the workshop organizer for any clarifications.

The third option in the menu is "Become an Organizer". Here, the participant has the opportunity to propose their own workshop by providing a main image (as a file), workshop title, location, date, a short description, a detailed description, and an optional gallery of up to five images. This request will be reviewed by an administrator, and if approved, the participant will become an organizer.

## Organizer

The organizer is responsible for managing workshops. On the "Profile" page, the organizer first sees a list of workshops and can then access messages sent by participants of each workshop by selecting a specific workshop.

While viewing all workshops, the organizer has the ability to edit workshops they have created. They can modify workshop details, approve participant registrations, cancel a workshop, or save a workshop as a template. When saving a workshop as a template, all workshop data, including image paths on the server, is saved to a JSON file. This file can later be used to create new workshops.

The organizer can also add new workshops. When adding a workshop, they may choose a previously created workshop as a template (by importing a JSON file). This pre-fills all fields with the values from the chosen workshop, which can then be modified as needed. This includes the option to remove some or all images (without deleting them from the system, as the original event should retain all visible information, including images). New workshops require approval from an administrator before they are published.

## Administrator

The administrator is a user with special privileges, allowing them to manage participants, organizers, and workshops.

The administrator has access to view all users in the system (both participants and organizers), and can update, delete, or add new participants or organizers. They can also review registration requests. If a registration request is denied (status marked as "inactive"), the user is prevented from attempting to re-register with the same username.

In addition to user management, the administrator can view all workshops and has the ability to update, delete, or add new workshops. They also have access to all workshop proposals submitted by participants or organizers. If the administrator decides to approve a participant’s proposal, the participant must not have any current registrations for an active workshop. Once this condition is met, the administrator can promote the participant to organizer status.

## Technologies Used

The application uses the Angular 14 framework for the frontend, with Express and Node.js for the server-side processing, and MongoDB as the non-relational database.