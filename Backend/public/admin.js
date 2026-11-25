// public/admin.js

// Lead ke field ko safely nikalta hai (chhota naam, nahi to rawPayload ka lamba naam)
function getField(lead, shortName, longName) {
  return (
    lead[shortName] ||
    (lead.rawPayload && lead.rawPayload[longName]) ||
    (lead.rawPayload && lead.rawPayload[shortName]) ||
    '-'
  );
}

// Text ko hamesha textContent se daalte hain, taaki koi bhi script/HTML run na ho
function makeCell(text) {
  const td = document.createElement('td');
  td.textContent = text;
  return td;
}

function makeMessageRow(message) {
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  td.colSpan = 9;
  td.className = 'text-center text-muted py-4';
  td.textContent = message;
  tr.appendChild(td);
  return tr;
}

const STATUS_BADGE = {
  new: 'bg-primary',
  contacted: 'bg-warning text-dark',
  paid: 'bg-info text-dark',
  completed: 'bg-success'
};

function viewDetails(lead) {
  alert(JSON.stringify(lead.rawPayload || lead, null, 2));
}

async function loadLeads() {
  const tbody = document.querySelector('#leadsTable tbody');
  tbody.innerHTML = '';
  tbody.appendChild(makeMessageRow('Loading leads...'));

  try {
    const res = await fetch('/api/leads');

    if (res.status === 401) {
      tbody.innerHTML = '';
      tbody.appendChild(makeMessageRow('Unauthorized. Page reload karke username/password dobara daalo.'));
      return;
    }

    if (!res.ok) {
      throw new Error(`Server Error: ${res.status}`);
    }

    const leads = await res.json();
    tbody.innerHTML = '';

    if (!Array.isArray(leads) || leads.length === 0) {
      tbody.appendChild(makeMessageRow('No leads found.'));
      return;
    }

    leads.forEach((lead) => {
      const tr = document.createElement('tr');

      tr.appendChild(makeCell(new Date(lead.submittedAt || lead.createdAt).toLocaleString()));
      tr.appendChild(makeCell(getField(lead, 'applicant_name', 'ctl00$ContentPlaceHolder1$txtName')));
      tr.appendChild(makeCell(getField(lead, 'company_type', 'ctl00$ContentPlaceHolder1$ddlApplicationType')));
      tr.appendChild(makeCell(getField(lead, 'mobile', 'ctl00$ContentPlaceHolder1$txtPhone1')));
      tr.appendChild(makeCell(getField(lead, 'email', 'ctl00$ContentPlaceHolder1$txtEmail')));
      tr.appendChild(makeCell(getField(lead, 'nature_of_business', 'ctl00$ContentPlaceHolder1$ddlNatureBusiness')));
      tr.appendChild(makeCell(getField(lead, 'state', 'ctl00$ContentPlaceHolder1$ddlState')));

      // Status badge
      const statusTd = document.createElement('td');
      const badge = document.createElement('span');
      const status = lead.status || 'new';
      badge.className = `badge ${STATUS_BADGE[status] || 'bg-secondary'}`;
      badge.textContent = status;
      statusTd.appendChild(badge);
      tr.appendChild(statusTd);

      // View button
      const actionTd = document.createElement('td');
      const btn = document.createElement('button');
      btn.className = 'btn btn-sm btn-info';
      btn.textContent = 'View';
      btn.addEventListener('click', () => viewDetails(lead));
      actionTd.appendChild(btn);
      tr.appendChild(actionTd);

      tbody.appendChild(tr);
    });
  } catch (err) {
    console.error('Load leads error:', err);
    tbody.innerHTML = '';
    tbody.appendChild(makeMessageRow('Leads load nahi ho paaye. Backend / database check karo.'));
  }
}

window.onload = loadLeads;