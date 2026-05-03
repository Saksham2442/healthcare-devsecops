const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Healthcare API - Secure DevOps Demo', status: 'healthy' });
});

app.get('/patients', (req, res) => {
  res.json([
    { id: 1, name: 'Patient A', status: 'stable' },
    { id: 2, name: 'Patient B', status: 'critical' }
  ]);
});

app.listen(3000, () => console.log('Healthcare API running on port 3000'));
