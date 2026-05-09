# Renobac Admin Panel - Documentation

## Overview
The Renobac Admin Panel is a complete management system for viewing and managing all client and worker data in the system. It includes protected access, comprehensive data management, and professional print functionality.

---

## Quick Start

### Accessing the Admin Panel
1. Click the **"Admin"** link in the navigation bar (highlighted in gold)
2. You will be redirected to the admin login page
3. Enter the password: **`abdnourlepatron`**
4. Click "Se Connecter" to access the dashboard

### The Dashboard
Once logged in, you'll see the main dashboard with four tabs:

#### 1. **Aperçu (Overview)**
- Summary statistics of all clients and workers
- Total count of active records
- Recent activity feed showing latest additions
- Last system update timestamp
- Quick overview cards for easy reference

#### 2. **Clients**
- Complete list of all clients
- Columns: Name, Email, Phone, Project, Registration Date
- **Search Feature**: Type in the search box to filter clients by any field
- **View Details**: Click "Voir" button to see full client information
- Professional table layout with hover effects

#### 3. **Ouvriers (Workers)**
- Complete list of all workers and experts
- Columns: Name, Specialty, Email, Phone, Experience
- **Search Feature**: Find workers by name, specialty, or any field
- **View CV**: Click "Voir CV" to see detailed CV information
- Shows expertise levels and years of experience

#### 4. **Imprimer (Print)**
Three comprehensive print options:

##### **Liste Clients**
- Prints a formatted list of all clients
- Includes company header with contact information
- Professional formatting suitable for physical records or PDF export
- Timestamp of generation date/time

##### **Liste Ouvriers**
- Prints detailed worker and expert list
- Includes full CV details for each worker
- Professional headers and structured format
- Separate CV section for each team member
- Suitable for HR records or presentations

##### **Rapport Complet (Full Report)**
- Comprehensive document with:
  - General statistics overview
  - Complete client list
  - Complete worker/expert list with CVs
  - Professional formatting across multiple sections
  - Company branding and footer
- Ideal for periodic audits and documentation

---

## Features

### 🔐 Security
- **Password Protected**: Access controlled with authentication
- **Session Management**: Stays logged in during your session
- **Logout**: Safely disconnect when done

### 📊 Data Management
- **Overview Statistics**: Quick metrics dashboard
- **Search Functionality**: Find any client or worker instantly
- **Detailed Views**: Click to see full information
- **Data Organization**: Clean, professional table layouts

### 🖨️ Print Functionality
- **Professional Templates**: Pre-formatted for printing
- **Multiple Formats**: Different views for different needs
- **Timestamp Support**: Documents show generation date/time
- **Company Branding**: All documents include Renobac header
- **PDF Ready**: Can be printed to PDF from browser

---

## Data Structure

### Clients Database
Each client record contains:
- **Name**: Full name of the client
- **Email**: Contact email address
- **Phone**: Contact phone number
- **Project**: Current project name
- **Registration Date**: Date client joined
- **Status**: Active status

### Workers Database
Each worker record contains:
- **Name**: Full name of the worker/expert
- **Specialty**: Area of expertise (e.g., Architect, Engineer, Project Manager)
- **Email**: Work email address
- **Phone**: Contact phone number
- **Experience**: Years and level of experience
- **CV**: Detailed curriculum vitae/professional summary

---

## Sample Data

### Current Clients (8 total)
- Ahmed Boudjema - Les Palmiers Project
- Samira Hadj - Villa Séhawla
- Karim Ziani - Hôtel Safir Alger
- Fatima Bennour - Appartements El Mohamadia
- Mohamed Seghir - Bureau Commercial
- Leila Kerrouche - Rénovation Dar Atika
- Hassan Berrouk - Villa 4 Étages
- Noor Al-Mansouri - Complexe Résidentiel

### Current Workers (10 total)
- Abdnour Merdas - CEO/PDG
- Issam Merdas - Directeur Technique
- Khidarlamine Hamdi - Chef Programmeur
- Amina Kaci - Architecte Senior
- Rachid Belkacem - Architecte Senior
- Nadia Terki - Chef de Projet
- Mohamed Salah - Chef de Projet
- Youcef Maache - Ingénieur Génie Civil
- Leila Zerrouki - Responsable Commercial
- Zaki Merdas - Chauffeur/Logistique

---

## How to Use Each Feature

### Viewing Overview
1. Open the Admin Panel
2. Login with password
3. The **Aperçu** tab is selected by default
4. See statistics and recent activity

### Searching Clients
1. Go to the **Clients** tab
2. Use the search box at the top right
3. Type any part of name, email, project, or phone
4. Table updates automatically
5. Click **Voir** to see complete details

### Searching Workers
1. Go to the **Ouvriers** tab
2. Use the search box at the top right
3. Find by name, specialty, email, or phone
4. Click **Voir CV** to read their detailed curriculum vitae

### Printing Clients List
1. Go to the **Imprimer** tab
2. Click **Imprimer les Clients**
3. A print preview window opens
4. Use browser Print function (Ctrl+P or Cmd+P)
5. Save as PDF or print to paper

### Printing Workers with CVs
1. Go to the **Imprimer** tab
2. Click **Imprimer les Ouvriers**
3. Window opens with detailed CV information
4. Use browser Print function
5. Print or save as PDF

### Printing Full Report
1. Go to the **Imprimer** tab
2. Click **Imprimer le Rapport Complet**
3. Comprehensive document opens
4. Includes all data and statistics
5. Use browser Print function to finalize

---

## Logging Out

1. Click the **"Se Déconnecter"** button in the top right
2. You'll return to the login screen
3. Your session will be cleared
4. Password will be required to access again

---

## Browser Compatibility

The Admin Panel works best on:
- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

**Responsive Design**: Works on desktop and tablet sizes
**Mobile**: Can be accessed but optimized for larger screens

---

## Data Privacy & Security Notes

### Current Implementation
- Password stored in client-side data (data.js)
- Session data in browser localStorage
- No backend encryption
- Good for internal use only

### For Production Use
Consider implementing:
- Server-side authentication
- Encrypted password storage (bcrypt/hashing)
- Database backend integration
- HTTPS encryption
- User role management
- Audit logging

---

## Troubleshooting

### Forgot the Password?
The default admin password is: **`admin2024`**

### Search Not Working?
- Clear the search box and try again
- Make sure you've switched to the correct tab
- Try searching for a simpler term

### Print Shows Blank?
- Ensure pop-ups are enabled in your browser
- Try using incognito/private mode
- Check your printer settings

### Data Not Showing?
- Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache
- Ensure data.js file is loaded

---

## Contact & Support

For issues or questions about the Admin Panel:
- Email: renobac1998@gmail.com
- Phone: 0560 32 62 77
- Address: Rue Shaboot Boualam, Alger, Algérie

---

## Updates & Maintenance

### Adding New Clients
Edit the `adminClients` array in `data.js`:
```javascript
{
  id: [next_number],
  name: "Name",
  email: "email@example.com",
  phone: "0xxx xxx xxx",
  project: "Project Name",
  registrationDate: "YYYY-MM-DD",
  status: "Actif"
}
```

### Adding New Workers
Edit the `adminWorkers` array in `data.js`:
```javascript
{
  id: [next_number],
  name: "Name",
  specialty: "Specialty",
  email: "email@renobac.dz",
  phone: "0560 32 62 77",
  experience: "X+ ans",
  cv: "CV description"
}
```

### Changing Admin Password
In `data.js`, update:
```javascript
const adminCredentials = {
  password: "newPassword"
};
```

---

## Version Information
- **Created**: May 2024
- **Admin System Version**: 1.0
- **Last Updated**: May 9, 2024
- **Compatible With**: All modern browsers

---

© 2024 Renobac Construction & Rénovlement Bâtiment. All rights reserved.
