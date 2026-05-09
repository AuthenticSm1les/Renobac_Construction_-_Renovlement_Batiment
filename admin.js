// ADMIN PANEL - Complete Admin Management System

const adminPanel = {
  AUTH_KEY: 'admin_logged_in',
  isAuthenticated: false,
  currentPassword: null,

  // Initialize admin panel
  init: function() {
    this.setupEventListeners();
    this.checkAuthStatus();
  },

  // Setup all event listeners
  setupEventListeners: function() {
    const loginForm = document.getElementById('adminLoginForm');
    const logoutBtn = document.getElementById('adminLogout');
    const tabButtons = document.querySelectorAll('.admin-tab-btn');
    const clientSearch = document.getElementById('clientSearch');
    const workerSearch = document.getElementById('workerSearch');

    if (loginForm) {
      loginForm.addEventListener('submit', (e) => this.handleLogin(e));
    }

    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => this.logout());
    }

    // Tab switching
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => this.switchTab(btn.getAttribute('data-tab')));
    });

    // Search functionality
    if (clientSearch) {
      clientSearch.addEventListener('input', () => this.filterClients());
    }
    if (workerSearch) {
      workerSearch.addEventListener('input', () => this.filterWorkers());
    }

    // Print buttons
    const printClientsBtn = document.getElementById('printClientsBtn');
    const printWorkersBtn = document.getElementById('printWorkersBtn');
    const printFullBtn = document.getElementById('printFullBtn');

    if (printClientsBtn) {
      printClientsBtn.addEventListener('click', () => this.printClients());
    }
    if (printWorkersBtn) {
      printWorkersBtn.addEventListener('click', () => this.printWorkers());
    }
    if (printFullBtn) {
      printFullBtn.addEventListener('click', () => this.printFullReport());
    }
  },

  // Handle login
  handleLogin: function(e) {
    e.preventDefault();
    const passwordInput = document.getElementById('adminPassword');
    const password = passwordInput.value;
    const loginError = document.getElementById('loginError');

    if (password === adminCredentials.password) {
      this.isAuthenticated = true;
      this.currentPassword = password;
      sessionStorage.setItem(this.AUTH_KEY, 'true');
      this.showDashboard();
      this.loadDashboardData();
      passwordInput.value = '';
      loginError.hidden = true;
    } else {
      loginError.hidden = false;
      passwordInput.value = '';
      passwordInput.focus();
    }
  },

  // Check if user is already authenticated
  checkAuthStatus: function() {
    if (sessionStorage.getItem(this.AUTH_KEY) === 'true') {
      this.isAuthenticated = true;
      this.showDashboard();
      this.loadDashboardData();
    } else {
      this.showLogin();
    }
  },

  // Show dashboard and hide login
  showDashboard: function() {
    const loginScreen = document.getElementById('adminLoginScreen');
    const dashboard = document.getElementById('adminDashboard');
    if (loginScreen) loginScreen.style.display = 'none';
    if (dashboard) dashboard.style.display = 'block';
  },

  // Hide dashboard and show login
  showLogin: function() {
    const loginScreen = document.getElementById('adminLoginScreen');
    const dashboard = document.getElementById('adminDashboard');
    if (loginScreen) loginScreen.style.display = 'block';
    if (dashboard) dashboard.style.display = 'none';
  },

  // Logout
  logout: function() {
    this.isAuthenticated = false;
    this.currentPassword = null;
    sessionStorage.removeItem(this.AUTH_KEY);
    this.showLogin();
    document.getElementById('adminPassword').value = '';
  },

  // Switch between tabs
  switchTab: function(tabName) {
    const tabs = document.querySelectorAll('.admin-tab-content');
    const buttons = document.querySelectorAll('.admin-tab-btn');

    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
  },

  // Load all dashboard data
  loadDashboardData: function() {
    this.updateOverview();
    this.populateClientsTable();
    this.populateWorkersTable();
  },

  // Update overview statistics
  updateOverview: function() {
    const totalClients = adminClients.length;
    const totalWorkers = adminWorkers.length;
    const totalActive = totalClients + totalWorkers;
    const lastUpdate = new Date().toLocaleDateString('fr-FR');

    document.getElementById('totalClients').textContent = totalClients;
    document.getElementById('totalWorkers').textContent = totalWorkers;
    document.getElementById('totalActive').textContent = totalActive;
    document.getElementById('lastUpdate').textContent = lastUpdate;

    this.populateRecentList();
  },

  // Populate recent items list
  populateRecentList: function() {
    const recentList = document.getElementById('recentList');
    if (!recentList) return;

    const recent = [
      ...adminClients.slice(-3).map(c => ({
        type: 'client',
        name: c.name,
        text: `Nouveau client: ${c.name} - ${c.project}`,
        date: c.registrationDate
      })),
      ...adminWorkers.slice(0, 3).map(w => ({
        type: 'worker',
        name: w.name,
        text: `Expert: ${w.name} - ${w.specialty}`,
        date: 'Depuis 2024'
      }))
    ].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);

    recentList.innerHTML = recent.map(item => `
      <div class="recent-item" style="padding: 12px; border-left: 3px solid ${item.type === 'client' ? '#C8862A' : '#1B2A4A'}; background: #f5f5f5; margin-bottom: 10px; border-radius: 4px;">
        <p style="margin: 0; font-weight: 500; color: #2D2D2D;">${item.text}</p>
        <p style="margin: 5px 0 0 0; font-size: 0.85rem; color: #6B6B6B;">${item.date}</p>
      </div>
    `).join('');
  },

  // Populate clients table
  populateClientsTable: function() {
    const tbody = document.getElementById('clientsTableBody');
    if (!tbody) return;

    tbody.innerHTML = adminClients.map(client => `
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">${client.name}</td>
        <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">${client.email}</td>
        <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">${client.phone}</td>
        <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">${client.project}</td>
        <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">${client.registrationDate}</td>
        <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">
          <button class="btn-action" onclick="adminPanel.viewClientDetails(${client.id})" style="background: #C8862A; color: white; padding: 6px 12px; border: none; border-radius: 4px; cursor: pointer; font-size: 0.85rem;">Voir</button>
        </td>
      </tr>
    `).join('');
  },

  // Populate workers table
  populateWorkersTable: function() {
    const tbody = document.getElementById('workersTableBody');
    if (!tbody) return;

    tbody.innerHTML = adminWorkers.map(worker => `
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">${worker.name}</td>
        <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">${worker.specialty}</td>
        <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">${worker.email}</td>
        <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">${worker.phone}</td>
        <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">${worker.experience}</td>
        <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">
          <button class="btn-action" onclick="adminPanel.viewWorkerDetails(${worker.id})" style="background: #1B2A4A; color: white; padding: 6px 12px; border: none; border-radius: 4px; cursor: pointer; font-size: 0.85rem;">Voir CV</button>
        </td>
      </tr>
    `).join('');
  },

  // Filter clients by search
  filterClients: function() {
    const searchValue = document.getElementById('clientSearch').value.toLowerCase();
    const tbody = document.getElementById('clientsTableBody');
    const rows = tbody.querySelectorAll('tr');

    rows.forEach(row => {
      const text = row.innerText.toLowerCase();
      row.style.display = text.includes(searchValue) ? '' : 'none';
    });
  },

  // Filter workers by search
  filterWorkers: function() {
    const searchValue = document.getElementById('workerSearch').value.toLowerCase();
    const tbody = document.getElementById('workersTableBody');
    const rows = tbody.querySelectorAll('tr');

    rows.forEach(row => {
      const text = row.innerText.toLowerCase();
      row.style.display = text.includes(searchValue) ? '' : 'none';
    });
  },

  // View client details
  viewClientDetails: function(clientId) {
    const client = adminClients.find(c => c.id === clientId);
    if (client) {
      alert(`Client: ${client.name}\nEmail: ${client.email}\nTéléphone: ${client.phone}\nProjet: ${client.project}\nDate: ${client.registrationDate}`);
    }
  },

  // View worker CV details
  viewWorkerDetails: function(workerId) {
    const worker = adminWorkers.find(w => w.id === workerId);
    if (worker) {
      alert(`${worker.name}\n\nSpécialité: ${worker.specialty}\nEmail: ${worker.email}\nTéléphone: ${worker.phone}\nExpérience: ${worker.experience}\n\nCV: ${worker.cv}`);
    }
  },

  // Print clients list
  printClients: function() {
    const printWindow = window.open('', '', 'width=800,height=600');
    const clientsHTML = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <title>Liste des Clients - Renobac</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; background: white; }
          h1 { text-align: center; color: #1B2A4A; border-bottom: 3px solid #C8862A; padding-bottom: 10px; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th { background: #C8862A; color: white; padding: 12px; text-align: left; font-weight: bold; }
          td { padding: 10px; border-bottom: 1px solid #ddd; }
          tr:nth-child(even) { background: #f9f9f9; }
          .summary { text-align: right; margin-top: 20px; font-size: 0.9rem; color: #666; }
          .print-date { text-align: right; margin-bottom: 20px; font-style: italic; color: #999; font-size: 0.9rem; }
        </style>
      </head>
      <body>
        <h1>📋 Liste Complète des Clients</h1>
        <p class="print-date">Généré le: ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}</p>
        <p><strong>Société:</strong> Renobac Construction & Rénovlement Bâtiment</p>
        <p><strong>Contact:</strong> renobac1998@gmail.com | 0560 32 62 77</p>
        
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th>Téléphone</th>
              <th>Projet</th>
              <th>Date d'Inscription</th>
            </tr>
          </thead>
          <tbody>
            ${adminClients.map(client => `
              <tr>
                <td>${client.name}</td>
                <td>${client.email}</td>
                <td>${client.phone}</td>
                <td>${client.project}</td>
                <td>${client.registrationDate}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        
        <div class="summary">
          <p><strong>Total de Clients:</strong> ${adminClients.length}</p>
        </div>
      </body>
      </html>
    `;

    printWindow.document.write(clientsHTML);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 250);
  },

  // Print workers list
  printWorkers: function() {
    const printWindow = window.open('', '', 'width=800,height=600');
    const workersHTML = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <title>Liste des Ouvriers - Renobac</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; background: white; }
          h1 { text-align: center; color: #1B2A4A; border-bottom: 3px solid #1B2A4A; padding-bottom: 10px; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th { background: #1B2A4A; color: white; padding: 12px; text-align: left; font-weight: bold; }
          td { padding: 10px; border-bottom: 1px solid #ddd; }
          tr:nth-child(even) { background: #f9f9f9; }
          .cv-section { margin-top: 30px; page-break-before: auto; }
          .cv-header { background: #1B2A4A; color: white; padding: 15px; margin-top: 20px; border-radius: 4px; }
          .cv-header h3 { margin: 0; font-size: 1.2rem; }
          .cv-content { background: #f9f9f9; padding: 15px; margin-top: 10px; border-left: 4px solid #C8862A; }
          .summary { text-align: right; margin-top: 20px; font-size: 0.9rem; color: #666; }
          .print-date { text-align: right; margin-bottom: 20px; font-style: italic; color: #999; font-size: 0.9rem; }
        </style>
      </head>
      <body>
        <h1>👷 Liste Complète des Ouvriers & Experts</h1>
        <p class="print-date">Généré le: ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}</p>
        <p><strong>Société:</strong> Renobac Construction & Rénovlement Bâtiment</p>
        <p><strong>Contact:</strong> renobac1998@gmail.com | 0560 32 62 77</p>
        
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Spécialité</th>
              <th>Email</th>
              <th>Téléphone</th>
              <th>Expérience</th>
            </tr>
          </thead>
          <tbody>
            ${adminWorkers.map(worker => `
              <tr>
                <td>${worker.name}</td>
                <td>${worker.specialty}</td>
                <td>${worker.email}</td>
                <td>${worker.phone}</td>
                <td>${worker.experience}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div class="cv-section">
          <h2 style="color: #1B2A4A;">Curriculum Vitae Détaillés</h2>
          ${adminWorkers.map(worker => `
            <div class="cv-header">
              <h3>${worker.name}</h3>
              <p style="margin: 5px 0 0 0; font-size: 0.95rem;">${worker.specialty} | ${worker.experience} d'expérience</p>
            </div>
            <div class="cv-content">
              <p><strong>Email:</strong> ${worker.email}</p>
              <p><strong>Téléphone:</strong> ${worker.phone}</p>
              <p><strong>Profil:</strong> ${worker.cv}</p>
            </div>
          `).join('')}
        </div>
        
        <div class="summary">
          <p><strong>Total d'Experts:</strong> ${adminWorkers.length}</p>
        </div>
      </body>
      </html>
    `;

    printWindow.document.write(workersHTML);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 250);
  },

  // Print full report
  printFullReport: function() {
    const printWindow = window.open('', '', 'width=900,height=700');
    const fullHTML = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <title>Rapport Complet - Renobac</title>
        <style>
          body { font-family: 'Arial', sans-serif; padding: 30px; background: white; line-height: 1.6; }
          .header { text-align: center; border-bottom: 4px solid #C8862A; padding-bottom: 20px; margin-bottom: 30px; }
          .header h1 { color: #1B2A4A; margin: 0; font-size: 2rem; }
          .header p { color: #666; margin: 10px 0 0 0; }
          .section { margin-bottom: 40px; page-break-inside: avoid; }
          .section-title { background: #C8862A; color: white; padding: 12px 15px; margin-bottom: 15px; font-size: 1.1rem; font-weight: bold; border-radius: 4px; }
          .stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 20px; }
          .stat-box { background: #f5f5f5; padding: 15px; border-left: 4px solid #C8862A; }
          .stat-number { font-size: 2rem; font-weight: bold; color: #1B2A4A; }
          .stat-label { color: #666; font-size: 0.9rem; margin-top: 5px; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; }
          th { background: #1B2A4A; color: white; padding: 10px; text-align: left; font-weight: bold; }
          td { padding: 8px; border-bottom: 1px solid #ddd; }
          tr:nth-child(even) { background: #f9f9f9; }
          .print-date { text-align: right; font-style: italic; color: #999; font-size: 0.85rem; margin-top: 30px; }
          .footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 0.85rem; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>RAPPORT COMPLET D'ADMINISTRATION</h1>
          <h2 style="color: #C8862A; margin: 0; font-size: 1.1rem;">Renobac Construction & Rénovlement Bâtiment</h2>
          <p>Adresse: Rue Shaboot Boualam, Alger, Algérie</p>
          <p>Email: renobac1998@gmail.com | Téléphone: 0560 32 62 77</p>
        </div>

        <div class="section">
          <div class="section-title">📊 STATISTIQUES GÉNÉRALES</div>
          <div class="stats">
            <div class="stat-box">
              <div class="stat-number">${adminClients.length}</div>
              <div class="stat-label">Clients Actifs</div>
            </div>
            <div class="stat-box">
              <div class="stat-number">${adminWorkers.length}</div>
              <div class="stat-label">Experts & Ouvriers</div>
            </div>
            <div class="stat-box">
              <div class="stat-number">${adminClients.length + adminWorkers.length}</div>
              <div class="stat-label">Enregistrements Totaux</div>
            </div>
            <div class="stat-box">
              <div class="stat-number">${new Date().getFullYear()}</div>
              <div class="stat-label">Année en Cours</div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">👥 LISTE DES CLIENTS</div>
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Email</th>
                <th>Téléphone</th>
                <th>Projet</th>
                <th>Date d'Inscription</th>
              </tr>
            </thead>
            <tbody>
              ${adminClients.map(client => `
                <tr>
                  <td>${client.name}</td>
                  <td style="font-size: 0.85rem;">${client.email}</td>
                  <td>${client.phone}</td>
                  <td>${client.project}</td>
                  <td>${client.registrationDate}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div class="section">
          <div class="section-title">👷 LISTE DES EXPERTS ET OUVRIERS</div>
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Spécialité</th>
                <th>Email</th>
                <th>Téléphone</th>
                <th>Expérience</th>
              </tr>
            </thead>
            <tbody>
              ${adminWorkers.map(worker => `
                <tr>
                  <td>${worker.name}</td>
                  <td>${worker.specialty}</td>
                  <td style="font-size: 0.85rem;">${worker.email}</td>
                  <td>${worker.phone}</td>
                  <td>${worker.experience}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div class="footer">
          <p>Document généré le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}</p>
          <p>© 2024 Renobac Construction. Tous droits réservés.</p>
        </div>
      </body>
      </html>
    `;

    printWindow.document.write(fullHTML);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 250);
  }
};

// Initialize admin panel when page loads
document.addEventListener('DOMContentLoaded', () => {
  adminPanel.init();
});
