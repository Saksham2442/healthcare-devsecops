const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Healthcare DevSecOps</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f4f6f9; color: #1a1a2e; }
  .topbar { background: #0f3460; padding: 16px 32px; display: flex; align-items: center; justify-content: space-between; }
  .topbar h1 { color: #fff; font-size: 18px; font-weight: 500; }
  .status-pill { background: #16db65; color: #0a3d1f; font-size: 12px; font-weight: 600; padding: 4px 14px; border-radius: 20px; }
  .main { padding: 28px 32px; }
  .metrics { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px; }
  .metric { background: #fff; border-radius: 10px; padding: 20px; border: 1px solid #e2e8f0; }
  .metric-label { font-size: 12px; color: #64748b; margin-bottom: 8px; }
  .metric-value { font-size: 26px; font-weight: 600; }
  .metric-value.green { color: #16a34a; }
  .metric-value.red { color: #dc2626; }
  .metric-value.amber { color: #d97706; }
  .metric-value.blue { color: #2563eb; }
  .metric-sub { font-size: 11px; color: #94a3b8; margin-top: 4px; }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .card { background: #fff; border-radius: 10px; padding: 20px; border: 1px solid #e2e8f0; }
  .card h3 { font-size: 14px; font-weight: 600; margin-bottom: 14px; color: #1e293b; }
  .patient { display: flex; align-items: center; gap: 12px; padding: 10px; border-radius: 8px; background: #f8fafc; margin-bottom: 8px; }
  .avatar { width: 36px; height: 36px; border-radius: 50%; background: #dbeafe; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; color: #1d4ed8; flex-shrink: 0; }
  .patient-name { font-size: 13px; font-weight: 500; }
  .patient-id { font-size: 11px; color: #94a3b8; }
  .badge { font-size: 11px; padding: 3px 10px; border-radius: 20px; font-weight: 600; margin-left: auto; }
  .badge.stable { background: #dcfce7; color: #166534; }
  .badge.critical { background: #fee2e2; color: #991b1b; }
  .badge.obs { background: #fef9c3; color: #854d0e; }
  .stage { display: flex; align-items: center; gap: 10px; padding: 9px 12px; border-radius: 8px; background: #f8fafc; margin-bottom: 6px; }
  .stage-dot { width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; flex-shrink: 0; }
  .stage-dot.pass { background: #dcfce7; color: #166534; }
  .stage-dot.warn { background: #fef9c3; color: #854d0e; }
  .stage-name { font-size: 13px; flex: 1; }
  .stage-badge { font-size: 11px; padding: 2px 8px; border-radius: 10px; font-weight: 600; }
  .sb-pass { background: #dcfce7; color: #166534; }
  .sb-warn { background: #fef9c3; color: #854d0e; }
  .sec-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; }
  .sec-item { background: #f8fafc; border-radius: 8px; padding: 14px; text-align: center; }
  .sec-item .icon { font-size: 22px; margin-bottom: 6px; }
  .sec-item .slabel { font-size: 11px; color: #64748b; margin-bottom: 4px; }
  .sec-item .sval { font-size: 13px; font-weight: 600; }
  .sval.ok { color: #16a34a; }
  .sval.warn { color: #d97706; }
  .footer { text-align: center; padding: 20px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; margin-top: 24px; }
</style>
</head>
<body>

<div class="topbar">
  <h1>Healthcare DevSecOps Dashboard</h1>
  <span class="status-pill">System Operational</span>
</div>

<div class="main">
  <div class="metrics">
    <div class="metric">
      <div class="metric-label">Pods Running</div>
      <div class="metric-value green">8 / 8</div>
      <div class="metric-sub">All healthy</div>
    </div>
    <div class="metric">
      <div class="metric-label">Vulnerabilities</div>
      <div class="metric-value amber">30</div>
      <div class="metric-sub">4 critical · 26 high</div>
    </div>
    <div class="metric">
      <div class="metric-label">SAST Findings</div>
      <div class="metric-value green">0</div>
      <div class="metric-sub">Clean code scan</div>
    </div>
    <div class="metric">
      <div class="metric-label">API Status</div>
      <div class="metric-value blue">Healthy</div>
      <div class="metric-sub">Healthcare API v1</div>
    </div>
  </div>

  <div class="grid2">
    <div class="card">
      <h3>Active Patients</h3>
      <div class="patient">
        <div class="avatar">PA</div>
        <div><div class="patient-name">Patient A</div><div class="patient-id">ID: HC-001</div></div>
        <span class="badge stable">Stable</span>
      </div>
      <div class="patient">
        <div class="avatar">PB</div>
        <div><div class="patient-name">Patient B</div><div class="patient-id">ID: HC-002</div></div>
        <span class="badge critical">Critical</span>
      </div>
      <div class="patient">
        <div class="avatar">PC</div>
        <div><div class="patient-name">Patient C</div><div class="patient-id">ID: HC-003</div></div>
        <span class="badge obs">Observation</span>
      </div>
      <div class="patient">
        <div class="avatar">PD</div>
        <div><div class="patient-name">Patient D</div><div class="patient-id">ID: HC-004</div></div>
        <span class="badge stable">Stable</span>
      </div>
    </div>

    <div class="card">
      <h3>Jenkins Pipeline — Build #4</h3>
      <div class="stage"><div class="stage-dot pass">✓</div><span class="stage-name">Checkout</span><span class="stage-badge sb-pass">passed</span></div>
      <div class="stage"><div class="stage-dot pass">✓</div><span class="stage-name">SAST Scan</span><span class="stage-badge sb-pass">0 findings</span></div>
      <div class="stage"><div class="stage-dot pass">✓</div><span class="stage-name">Dependency Check</span><span class="stage-badge sb-pass">passed</span></div>
      <div class="stage"><div class="stage-dot pass">✓</div><span class="stage-name">Docker Build</span><span class="stage-badge sb-pass">built</span></div>
      <div class="stage"><div class="stage-dot warn">!</div><span class="stage-name">Trivy Image Scan</span><span class="stage-badge sb-warn">30 vulns</span></div>
      <div class="stage"><div class="stage-dot pass">✓</div><span class="stage-name">Push to Docker Hub</span><span class="stage-badge sb-pass">pushed</span></div>
      <div class="stage"><div class="stage-dot pass">✓</div><span class="stage-name">Deploy to Kubernetes</span><span class="stage-badge sb-pass">deployed</span></div>
    </div>

    <div class="card">
      <h3>Security Posture</h3>
      <div class="sec-grid">
        <div class="sec-item"><div class="icon">🔍</div><div class="slabel">SAST</div><div class="sval ok">Clean</div></div>
        <div class="sec-item"><div class="icon">📦</div><div class="slabel">OWASP</div><div class="sval ok">Passed</div></div>
        <div class="sec-item"><div class="icon">🐳</div><div class="slabel">Image Scan</div><div class="sval warn">30 vulns</div></div>
        <div class="sec-item"><div class="icon">🔒</div><div class="slabel">Non-root</div><div class="sval ok">Enabled</div></div>
        <div class="sec-item"><div class="icon">☸️</div><div class="slabel">Replicas</div><div class="sval ok">2 / 2</div></div>
        <div class="sec-item"><div class="icon">🏥</div><div class="slabel">API Health</div><div class="sval ok">Healthy</div></div>
      </div>
    </div>

    <div class="card">
      <h3>API Endpoints</h3>
      <div class="patient">
        <div class="avatar" style="background:#ede9fe;color:#5b21b6">GET</div>
        <div><div class="patient-name">/</div><div class="patient-id">Dashboard home</div></div>
        <span class="badge stable">200 OK</span>
      </div>
      <div class="patient">
        <div class="avatar" style="background:#ede9fe;color:#5b21b6">GET</div>
        <div><div class="patient-name">/patients</div><div class="patient-id">Patient list</div></div>
        <span class="badge stable">200 OK</span>
      </div>
      <div class="patient">
        <div class="avatar" style="background:#ede9fe;color:#5b21b6">GET</div>
        <div><div class="patient-name">/health</div><div class="patient-id">Health check</div></div>
        <span class="badge stable">200 OK</span>
      </div>
    </div>
  </div>
</div>

<div class="footer">
  Healthcare DevSecOps · Saksham · SRMIST · Jenkins + Docker + Kubernetes
</div>

</body>
</html>`);
});

app.get('/patients', (req, res) => {
  res.json([
    { id: 1, name: 'Patient A', status: 'stable' },
    { id: 2, name: 'Patient B', status: 'critical' },
    { id: 3, name: 'Patient C', status: 'observation' },
    { id: 4, name: 'Patient D', status: 'stable' }
  ]);
});

app.get('/health', (req, res) => {
  res.json({ message: 'Healthcare API - Secure DevOps Demo', status: 'healthy' });
});

app.listen(3000, () => console.log('Healthcare API running on port 3000'));
