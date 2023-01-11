module.exports = {
  mySidebar: [
    'index',
    'release-notes',
    'implementation',
    {
      type: 'category', 
      label: 'Installation',
      collapsed: true,
      items: [
        'installation/overview',
        'installation/installation',
        'installation/sap-gp-configuration',
        'installation/sapds-subtype',
      ], 
    },
    'configuration',
    {
      type: 'category', 
      label: 'Reference Information',
      collapsed: true,
      items: [
        'reference_information/defining-a-job',
        'reference_information/logging-job-output',
      ], 
    },
  ],
};
