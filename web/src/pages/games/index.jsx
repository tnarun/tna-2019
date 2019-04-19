const games = [
  're2remake',
  'Celeste',
  'sm64',
  'smo',
  'supermetroid',
  'alttp',
  'sekiro',
  'mhw',
  'oot',
  'ror2',
  'mk8dx',
  'goiwbf',
  'sms',
  'bfbb',
  'smb1',
  'The_Messenger',
  'Portal',
  'smw',
  'gtavc',
  'Outlast'
]

export default () => (
  <div style={{ backgroundColor: 'rgba(0,0,0,0.4)', padding: '1rem' }}>
    {
      games.map(g => <div key={ g }><a href={ `/games/${g}` }>{g}</a></div>)
    }
  </div>
)