const professions = [
    // Tech
    { name: "IT Security Specialist", insurance: "Tech" },
    { name: "Data Analyst", insurance: "Tech" },
    { name: "Network Administrator", insurance: "Tech" },
    { name: "System Administrator", insurance: "Tech" },
    { name: "Web Developer", insurance: "Tech" },
    { name: "Cybersecurity Consultant", insurance: "Tech" },
    { name: "Information Security Officer", insurance: "Tech" },
    { name: "Ethical Hacker", insurance: "Tech" },
    { name: "Data Privacy Officer", insurance: "Tech" },
    { name: "IT Auditor", insurance: "Tech" },
    { name: "Software Engineer", insurance: "Tech" },
    { name: "Data Scientist", insurance: "Tech" },
    { name: "AI Developer", insurance: "Tech" },
    { name: "Hardware Engineer", insurance: "Tech" },
    { name: "Tech Support Specialist", insurance: "Tech" },
    { name: "Systems Analyst", insurance: "Tech" },
    { name: "Network Architect", insurance: "Tech" },
    { name: "Database Administrator", insurance: "Tech" },
    { name: "Cloud Solutions Architect", insurance: "Tech" },
    { name: "DevOps Engineer", insurance: "Tech" },

    // Financial Institutions
    { name: "Banker", insurance: "Financial Institutions" },
    { name: "Investment Advisor", insurance: "Financial Institutions" },
    { name: "Loan Officer", insurance: "Financial Institutions" },
    { name: "Credit Analyst", insurance: "Financial Institutions" },
    { name: "Financial Planner", insurance: "Financial Institutions" },
    { name: "Mortgage Broker", insurance: "Financial Institutions" },
    { name: "Risk Analyst", insurance: "Financial Institutions" },
    { name: "Compliance Officer", insurance: "Financial Institutions" },
    { name: "Asset Manager", insurance: "Financial Institutions" },
    { name: "Wealth Manager", insurance: "Financial Institutions" },

    // FinTech
    { name: "Blockchain Developer", insurance: "FinTech" },
    { name: "Financial Analyst", insurance: "FinTech" },
    { name: "FinTech Product Manager", insurance: "FinTech" },
    { name: "Mobile Payment Developer", insurance: "FinTech" },
    { name: "Robo-Advisor Developer", insurance: "FinTech" },
    { name: "Cryptocurrency Trader", insurance: "FinTech" },
    { name: "InsurTech Specialist", insurance: "FinTech" },
    { name: "Payment Processor", insurance: "FinTech" },
    { name: "FinTech Compliance Specialist", insurance: "FinTech" },
    { name: "Digital Currency Analyst", insurance: "FinTech" },

    // Life Sciences
    { name: "Biotech Researcher", insurance: "Life Sciences" },
    { name: "Pharmaceutical Scientist", insurance: "Life Sciences" },
    { name: "Clinical Trial Manager", insurance: "Life Sciences" },
    { name: "Biomedical Engineer", insurance: "Life Sciences" },
    { name: "Medical Device Developer", insurance: "Life Sciences" },
    { name: "Genetic Engineer", insurance: "Life Sciences" },
    { name: "Bioinformatics Specialist", insurance: "Life Sciences" },
    { name: "Toxicologist", insurance: "Life Sciences" },
    { name: "Clinical Research Associate", insurance: "Life Sciences" },
    { name: "Regulatory Affairs Specialist", insurance: "Life Sciences" },

    // Management Liability
    { name: "CEO", insurance: "Management Liability" },
    { name: "CFO", insurance: "Management Liability" },
    { name: "Board Member", insurance: "Management Liability" },
    { name: "Director", insurance: "Management Liability" },
    { name: "Corporate Secretary", insurance: "Management Liability" },
    { name: "COO", insurance: "Management Liability" },
    { name: "President", insurance: "Management Liability" },
    { name: "Vice President", insurance: "Management Liability" },
    { name: "Chief Legal Officer", insurance: "Management Liability" },
    { name: "Chief Compliance Officer", insurance: "Management Liability" },

    // Media
    { name: "Journalist", insurance: "Media" },
    { name: "TV Producer", insurance: "Media" },
    { name: "Radio Host", insurance: "Media" },
    { name: "Public Relations Specialist", insurance: "Media" },
    { name: "Digital Content Creator", insurance: "Media" },
    { name: "Social Media Manager", insurance: "Media" },
    { name: "Broadcast Engineer", insurance: "Media" },
    { name: "News Anchor", insurance: "Media" },
    { name: "Film Director", insurance: "Media" },
    { name: "Video Editor", insurance: "Media" },

    // Product Recall
    { name: "Product Safety Engineer", insurance: "Product Recall" },
    { name: "Quality Control Specialist", insurance: "Product Recall" },
    { name: "Recall Coordinator", insurance: "Product Recall" },
    { name: "Compliance Officer", insurance: "Product Recall" },
    { name: "Manufacturing Engineer", insurance: "Product Recall" },
    { name: "Consumer Safety Officer", insurance: "Product Recall" },
    { name: "Quality Assurance Manager", insurance: "Product Recall" },
    { name: "Production Supervisor", insurance: "Product Recall" },
    { name: "Product Development Scientist", insurance: "Product Recall" },
    { name: "Food Safety Inspector", insurance: "Product Recall" },

    // Professions
    { name: "Lawyer", insurance: "Professions" },
    { name: "Accountant", insurance: "Professions" },
    { name: "Consultant", insurance: "Professions" },
    { name: "Real Estate Agent", insurance: "Professions" },
    { name: "Graphic Designer", insurance: "Professions" },
    { name: "Marketing Consultant", insurance: "Professions" },
    { name: "Business Analyst", insurance: "Professions" },
    { name: "Management Consultant", insurance: "Professions" },
    { name: "Architect", insurance: "Professions" },
    { name: "Engineer", insurance: "Professions" },
    { name: "Interior Designer", insurance: "Professions" },
    { name: "Project Manager", insurance: "Professions" },
    { name: "Surveyor", insurance: "Professions" },
    { name: "Drafting Engineer", insurance: "Professions" },
    { name: "Health and Safety Consultant", insurance: "Professions" },
    { name: "Policy and regulatory Consultancy", insurance: "Professions" },
    { name: "Fire Consultant", insurance: "Professions" },
    { name: "Energy Consultant", insurance: "Professions" },
    { name: "Environmental Consultant", insurance: "Professions" },
    { name: "Agricultural Consultant", insurance: "Professions" },
    { name: "Education Consultant", insurance: "Professions" },
    { name: "Marketing Consultant", insurance: "Professions" },
    { name: "Claims Adjuster", insurance: "Professions" },
    { name: "Property Manager", insurance: "Professions" },
    { name: "Building Inspector", insurance: "Professions" },

    // Property and Casualty
    { name: "Construction Manager", insurance: "Property and Casualty" },
    { name: "Underwriter", insurance: "Property and Casualty" },
    { name: "Risk Manager", insurance: "Property and Casualty" },
    { name: "Insurance Broker", insurance: "Property and Casualty" },
    { name: "Loss Control Specialist", insurance: "Property and Casualty" },
    { name: "Fleet Manager", insurance: "Property and Casualty" },
    { name: "Safety Coordinator", insurance: "Property and Casualty" },
    { name: "Hotel Manager", insurance: "Property and Casualty" },
    { name: "Restaurant Owner", insurance: "Property and Casualty" },
    { name: "Event Organiser", insurance: "Property and Casualty" },
    { name: "Leisure Centre Manager", insurance: "Property and Casualty" },

    // Healthcare
    { name: "Healthcare Administrator", insurance: "Healthcare" },
    { name: "Nurse", insurance: "Healthcare" },
    { name: "Doctor", insurance: "Healthcare" },
    { name: "Medical Researcher", insurance: "Healthcare" },
    { name: "Public Health Specialist", insurance: "Healthcare" },
    { name: "Pharmacist", insurance: "Healthcare" },
    { name: "Surgeon", insurance: "Healthcare" },
    { name: "Dentist", insurance: "Healthcare" },
    { name: "Physical Therapist", insurance: "Healthcare" },
    { name: "Occupational Therapist", insurance: "Healthcare" },
    { name: "Veterinarian", insurance: "Healthcare" },
    { name: "Speech-Language Pathologist", insurance: "Healthcare" },
    { name: "Psychiatrist", insurance: "Healthcare" },
    { name: "Psychologist", insurance: "Healthcare" },
    { name: "Radiologist", insurance: "Healthcare" },
    { name: "Anesthesiologist", insurance: "Healthcare" },
    { name: "Emergency Medical Technician", insurance: "Healthcare" },
    { name: "Paramedic", insurance: "Healthcare" },
    { name: "Respiratory Therapist", insurance: "Healthcare" },
    { name: "Optometrist", insurance: "Healthcare" },
    { name: "Audiologist", insurance: "Healthcare" },
    { name: "Dietitian", insurance: "Healthcare" },
    { name: "Social Worker", insurance: "Healthcare" },
    { name: "Chiropractor", insurance: "Healthcare" },
    { name: "Midwife", insurance: "Healthcare" },
    { name: "Medical Laboratory Scientist", insurance: "Healthcare" },
    { name: "Genetic Counselor", insurance: "Healthcare" },
    { name: "Clinical Pharmacist", insurance: "Healthcare" },
    { name: "Biostatistician", insurance: "Healthcare" },
    { name: "Medical Illustrator", insurance: "Healthcare" },
    { name: "Epidemiologist", insurance: "Healthcare" },
    { name: "Health Information Technician", insurance: "Healthcare" },

    // Adding all remaining items from the text document and categorizing them appropriately
    { name: "Central Bank", insurance: "Financial Institutions" },
    { name: "Retail / Commercial Bank", insurance: "Financial Institutions" },
    { name: "Community Bank", insurance: "Financial Institutions" },
    { name: "Credit Union", insurance: "Financial Institutions" },
    { name: "Mortgage Bank", insurance: "Financial Institutions" },
    { name: "Building Society", insurance: "Financial Institutions" },
    { name: "Savings & Loan Association", insurance: "Financial Institutions" },
    { name: "Insurance Company", insurance: "Financial Institutions" },
    { name: "Personal Lines", insurance: "Financial Institutions" },
    { name: "Commercial Lines", insurance: "Financial Institutions" },
    { name: "Money Transfer", insurance: "Financial Institutions" },
    { name: "Payment Processor", insurance: "Financial Institutions" },
    { name: "Non-Bank Lending", insurance: "Financial Institutions" },
    { name: "Factoring", insurance: "Financial Institutions" },
    { name: "Retail Lending", insurance: "Financial Institutions" },
    { name: "Commercial Lending", insurance: "Financial Institutions" },
    { name: "Leasing", insurance: "Financial Institutions" },
    { name: "Stock Broker", insurance: "Financial Institutions" },
    { name: "Insurance Broker / Agency", insurance: "Financial Institutions" },
    { name: "M&A Advisory", insurance: "Financial Institutions" },
    { name: "Broker Dealer", insurance: "Financial Institutions" },
    { name: "Healthcare Facility", insurance: "Healthcare" },
    { name: "Hospital", insurance: "Healthcare" },
    { name: "General Medical Clinic", insurance: "Healthcare" },
    { name: "Specialist Medical Clinic", insurance: "Healthcare" },
    { name: "Senior Care Facility", insurance: "Healthcare" },
    { name: "Residential Care (Other)", insurance: "Healthcare" },
    { name: "Medical Diagnostic Facility", insurance: "Healthcare" },
    { name: "Healthcare Practitioner", insurance: "Healthcare" },
    { name: "General Practitioner", insurance: "Healthcare" },
    { name: "Specialist Practitioner", insurance: "Healthcare" },
    { name: "Surgeon", insurance: "Healthcare" },
    { name: "Senior Care (non-residential)", insurance: "Healthcare" },
    { name: "Home Healthcare", insurance: "Healthcare" },
    { name: "Pre-Schools", insurance: "Professions" },
    { name: "Nursery", insurance: "Professions" },
    { name: "Primary & Secondary Schools", insurance: "Professions" },
    { name: "State Primary School", insurance: "Professions" },
    { name: "State Secondary School", insurance: "Professions" },
    { name: "Independent School", insurance: "Professions" },
    { name: "Faith School", insurance: "Professions" },
    { name: "Academies & Free Schools", insurance: "Professions" },
    { name: "Colleges & Universities", insurance: "Professions" },
    { name: "Further Education College", insurance: "Professions" },
    { name: "Independent College", insurance: "Professions" },
    { name: "University", insurance: "Professions" },
    { name: "Professional Schools", insurance: "Professions" },
    { name: "Business & Secretarial School", insurance: "Professions" },
    { name: "Computer Training", insurance: "Professions" },
    { name: "Cosmetology & Barber School", insurance: "Professions" },
    { name: "Flight Training", insurance: "Professions" },
    { name: "Apprenticeship Training", insurance: "Professions" },
    { name: "Other Schools", insurance: "Professions" },
    { name: "Fine Arts Schools", insurance: "Professions" },
    { name: "Sports Instruction", insurance: "Professions" },
    { name: "Language School", insurance: "Professions" },
    { name: "Tutoring", insurance: "Professions" },
    { name: "Automobile Driving School", insurance: "Professions" },
    { name: "Power Generation", insurance: "Professions" },
    { name: "Power Distribution", insurance: "Professions" },
    { name: "Water & Sewage", insurance: "Professions" },
    { name: "Telecommunications", insurance: "Professions" },
    { name: "Waste Management", insurance: "Professions" },
    { name: "Foreign Exchange Bureau", insurance: "Financial Institutions" },
    { name: "Medical Devices", insurance: "Life Sciences" },
    { name: "Aviation", insurance: "Property and Casualty" },
    { name: "Automotive", insurance: "Property and Casualty" },
    { name: "Consumer Products", insurance: "Product Recall" },
    { name: "Food & Beverage", insurance: "Product Recall" },
    { name: "Materials", insurance: "Property and Casualty" },
    { name: "Health and Saftey Consultant", insurance: "Professions" },
    { name: "Policy and regulatory Consultancy", insurance: "Professions" },
    { name: "Onsite Safety Consulting and Audits", insurance: "Professions" },
    { name: "Onsite Safety Officer", insurance: "Professions" },
    { name: "Logistics Consultant", insurance: "Professions" },
    { name: "Advertising Agent", insurance: "Media" },
    { name: "Graphic Designer", insurance: "Professions" },
    { name: "Promotor", insurance: "Media" },
    { name: "Public Relations Consultant", insurance: "Media" },
    { name: "Photography", insurance: "Media" },
    { name: "Marketing", insurance: "Media" },
    { name: "Direct Mail Marketing", insurance: "Media" },
    { name: "Construction", insurance: "Property and Casualty" },
    { name: "Digital Marketing", insurance: "Media" },
    { name: "Non Research", insurance: "Professions" },
    { name: "Testing Laboratory", insurance: "Professions" },
    { name: "Batch Release", insurance: "Professions" },
    { name: "Environmental testing", insurance: "Professions" },
    { name: "Technician", insurance: "Professions" },
    { name: "Measurement - While - Drilling", insurance: "Professions" },
    { name: "Directional Drilling", insurance: "Professions" },
    { name: "Geosteering", insurance: "Professions" },
    { name: "Manager", insurance: "Professions" },
    { name: "Oil and Gas Manager", insurance: "Professions" },
    { name: "Supervisor", insurance: "Professions" },
    { name: "Project Manager", insurance: "Professions" },
    { name: "Health and Safety Manager", insurance: "Professions" },
    { name: "Company Man", insurance: "Professions" },
    { name: "Management of Companies and Enterprises", insurance: "Professions" },
    { name: "Franchisor", insurance: "Professions" },
    { name: "Consumer Product Design", insurance: "Product Recall" },
    { name: "Business Services", insurance: "Professions" },
    { name: "Administration Services", insurance: "Professions" },
    { name: "Mail Centres", insurance: "Professions" },
    { name: "Telephone Answering", insurance: "Professions" },
    { name: "Document Preparation", insurance: "Professions" },
    { name: "Telemarketing", insurance: "Professions" },
    { name: "Call Centres/Contact Centres", insurance: "Professions" },
    { name: "Debt Collection & Repossession Services", insurance: "Professions" },
    { name: "Credit Bureau", insurance: "Financial Institutions" },
    { name: "Transcription Services, Typing & Court Reporting", insurance: "Professions" },
    { name: "Pharmacy", insurance: "Healthcare" },
    { name: "Medical Equipment Supplier", insurance: "Healthcare" },
    { name: "Vending Machine Operator", insurance: "Professions" },
    { name: "Petrol Station", insurance: "Property and Casualty" },
    { name: "Online Retail", insurance: "Professions" },
    { name: "Online Gambling", insurance: "Media" },
    { name: "Travel Agency", insurance: "Professions" },
    { name: "Travel Operator", insurance: "Professions" },
    { name: "Visitor Centres", insurance: "Property and Casualty" },
    { name: "Web Development", insurance: "Tech" },
    { name: "Video Game Development", insurance: "Tech" },
    { name: "Artificial Intelligence", insurance: "Tech" },
    { name: "Chat Bot", insurance: "Tech" },
    { name: "Diagnostic Decision Support System", insurance: "Tech" },
    { name: "Image Processing", insurance: "Tech" },
    { name: "Account Information Service Provider (AISP)", insurance: "FinTech" },
    { name: "Fund Transfer Software", insurance: "FinTech" },
    { name: "Payment Initiation Service Provider (PISP)", insurance: "FinTech" },
    { name: "Payment Processing Software", insurance: "FinTech" },
    { name: "Investment Management Software", insurance: "FinTech" },
    { name: "Trading Software", insurance: "FinTech" },
    { name: "Remote Patient Monitoring", insurance: "Tech" },
    { name: "Diagnostic/Monitoring", insurance: "Tech" },
    { name: "Health/Fitness/Wellbeing", insurance: "Tech" },
    { name: "Therapeutic", insurance: "Healthcare" },
    { name: "Injury Prevention", insurance: "Healthcare" },
    { name: "Telemedicine", insurance: "Tech" },
    { name: "Software", insurance: "Tech" },
    { name: "Platform", insurance: "Tech" },
    { name: "Telehealth (lifestyle and fitness)", insurance: "Healthcare" },
    { name: "Telemedicine", insurance: "Tech" },
    { name: "Teleaudiology", insurance: "Healthcare" },
    { name: "Telecardiology", insurance: "Healthcare" },
    { name: "Teledentistry", insurance: "Healthcare" },
    { name: "Teledermatology", insurance: "Healthcare" },
    { name: "Teleendocrinologist", insurance: "Healthcare" },
    { name: "Teleendocrinology", insurance: "Healthcare" },
    { name: "Telefamilymedicine", insurance: "Healthcare" },
    { name: "Telegastroenterologists", insurance: "Healthcare" },
    { name: "Telegeriatricmedicine", insurance: "Healthcare" },
    { name: "Telegynocology", insurance: "Healthcare" },
    { name: "Teleheamatologists", insurance: "Healthcare" },
    { name: "Teleneonatologist", insurance: "Healthcare" },
    { name: "Telenephrologist", insurance: "Healthcare" },
    { name: "Teleneurology", insurance: "Healthcare" },
    { name: "Telenursing", insurance: "Healthcare" },
    { name: "Teleobstetrician", insurance: "Healthcare" },
    { name: "Teleoncology", insurance: "Healthcare" },
    { name: "Teleopthalmologist", insurance: "Healthcare" },
    { name: "Teleorthopedics", insurance: "Healthcare" },
    { name: "Teleotolaryngologist", insurance: "Healthcare" },
    { name: "Telepathology", insurance: "Healthcare" },
    { name: "Telepaediatrics", insurance: "Healthcare" },
    { name: "Teleophthalmology", insurance: "Healthcare" },
    { name: "Teleprescribing", insurance: "Healthcare" },
    { name: "Telepsychiatry", insurance: "Healthcare" },
    { name: "Telepsychology", insurance: "Healthcare" },
    { name: "Telepulmonologist", insurance: "Healthcare" },
    { name: "Teleradiology", insurance: "Healthcare" },
    { name: "Telerehabilitation", insurance: "Healthcare" },
    { name: "Telerheumatologist", insurance: "Healthcare" },
    { name: "Telesurgery", insurance: "Healthcare" },
    { name: "Teletrauma care", insurance: "Healthcare" },
    { name: "Teleurologist", insurance: "Healthcare" },
    { name: "mHealth", insurance: "Healthcare" },
    { name: "Software as a Medical Device", insurance: "Tech" },
    { name: "Diagnostic/Monitoring", insurance: "Tech" },
    { name: "Artificial Intelligence", insurance: "Tech" },
    { name: "Patient Monitoring", insurance: "Healthcare" },
    { name: "Therapeutic", insurance: "Healthcare" },
    { name: "Injury Prevention", insurance: "Healthcare" },
    { name: "Organisation Tool", insurance: "Professions" },
    { name: "Nursing Health System", insurance: "Healthcare" },
    { name: "Patient Records Locator", insurance: "Healthcare" },
    { name: "Life Science", insurance: "Life Sciences" },
    { name: "Research and Development", insurance: "Life Sciences" },
    { name: "Clinical Trial Management", insurance: "Life Sciences" },
    { name: "Laboratory Management Tool", insurance: "Life Sciences" },
    { name: "Applications", insurance: "Tech" },
    { name: "Training Software", insurance: "Tech" },
    { name: "Robot Process Automation", insurance: "Tech" },
    { name: "Autonomous Vehicles", insurance: "Tech" },
    { name: "Blockchain", insurance: "FinTech" },
    { name: "Cryptocurrency", insurance: "FinTech" },
    { name: "Fintech", insurance: "FinTech" },
    { name: "Cannabis Software", insurance: "Tech" },
    { name: "Computer Aided Design Software", insurance: "Tech" },
    { name: "ERP Software", insurance: "Tech" },
    { name: "CRM Software", insurance: "Tech" },
    { name: "Document Management Software", insurance: "Tech" },
    { name: "Security Software", insurance: "Tech" },
    { name: "Logistics and Shipping Software", insurance: "Tech" },
    { name: "SMS/Text Messaging Software", insurance: "Tech" },
    { name: "Content Management Software", insurance: "Tech" },
    { name: "Streaming Software", insurance: "Tech" },
    { name: "POS Software", insurance: "Tech" },
    { name: "Software Publishing", insurance: "Tech" },
    { name: "Web Publishing", insurance: "Tech" },
    { name: "Video Game Publishing", insurance: "Tech" },
    { name: "Gambling", insurance: "Media" },
    { name: "Payment processing", insurance: "FinTech" },
    { name: "Hardware", insurance: "Tech" },
    { name: "Hardware Assembly", insurance: "Tech" },
    { name: "Hardware Design", insurance: "Tech" },
    { name: "Robotics", insurance: "Tech" },
    { name: "Hardware Installation", insurance: "Tech" },
    { name: "Hardware Maintenance", insurance: "Tech" },
    { name: "Hardware Repair", insurance: "Tech" },
    { name: "Hardware Recycling", insurance: "Tech" },
    { name: "IT Project Management", insurance: "Tech" },
    { name: "IT Security Consulting", insurance: "Tech" },
    { name: "Systems Integration", insurance: "Tech" },
    { name: "Systems/Network Architecture", insurance: "Tech" },
    { name: "Administration Service", insurance: "Professions" },
    { name: "ePrescribing", insurance: "Healthcare" },
    { name: "eBooking", insurance: "Healthcare" },
    { name: "Clinical Administration", insurance: "Healthcare" },
    { name: "Data Centre Operation", insurance: "Tech" },
    { name: "Data Processing", insurance: "Tech" },
    { name: "Domain Name Registration", insurance: "Tech" },
    { name: "Data Aggregator", insurance: "Tech" },
    { name: "Health Information Exchange", insurance: "Healthcare" },
    { name: "IT Support", insurance: "Tech" },
    { name: "Helpdesk", insurance: "Tech" },
    { name: "Software Installation", insurance: "Tech" },
    { name: "Systems Maintenance", insurance: "Tech" },
    { name: "Backup and Recovery Services", insurance: "Tech" },
    { name: "Infrastructure Management and Monitoring", insurance: "Tech" },
    { name: "Managed Security Service Provision", insurance: "Tech" },
    { name: "Emergency Ambulance Services", insurance: "Healthcare" },
    { name: "Non-Emergency Ambulance Services", insurance: "Healthcare" },
    { name: "Medical Repatriation", insurance: "Healthcare" },
    { name: "Air Ambulance Services", insurance: "Healthcare" },
    { name: "Logistics", insurance: "Professions" },
    { name: "Road Logistics", insurance: "Professions" },
    { name: "Postal and Courrier Services", insurance: "Professions" },
    { name: "Rail Logistics", insurance: "Professions" },
    { name: "Marine Logistics", insurance: "Professions" },
    { name: "Warehousing", insurance: "Professions" },
    { name: "Pipeline Logistics", insurance: "Professions" },
    { name: "Transportation", insurance: "Professions" },
    { name: "Aviation", insurance: "Professions" },
    { name: "Medical Road Transport", insurance: "Healthcare" },
    { name: "Emergency Ambulance Services", insurance: "Healthcare" },
    { name: "Non-Emergency Ambulance Services", insurance: "Healthcare" },
    { name: "Taxi Services", insurance: "Professions" },
    { name: "Rail Transport", insurance: "Professions" },
    { name: "Aviation", insurance: "Professions" },
    { name: "Medical Repatriation", insurance: "Healthcare" },
    { name: "Air Ambulance Services", insurance: "Healthcare" },
    { name: "Marine Transport", insurance: "Professions" },
    { name: "Consumer Products", insurance: "Product Recall" },
    { name: "Personal Care", insurance: "Product Recall" },
    { name: "Hemp supplements", insurance: "Product Recall" },
    { name: "Hemp Ingestible", insurance: "Product Recall" },
    { name: "Hemp Topical", insurance: "Product Recall" },
    { name: "Sport Supplements", insurance: "Product Recall" },
    { name: "Weight Loss", insurance: "Product Recall" },
    { name: "Sexual Enhancement", insurance: "Product Recall" },
    { name: "Energy Shot", insurance: "Product Recall" },
    { name: "Pre workout Formula", insurance: "Product Recall" },
    { name: "Sport Equipment", insurance: "Product Recall" },
    { name: "Cosmetics", insurance: "Product Recall" },
    { name: "Sports Equipment", insurance: "Product Recall" },
    { name: "Food & Beverage", insurance: "Product Recall" },
    { name: "Pet food", insurance: "Product Recall" },
    { name: "Fruit and Vegetables", insurance: "Product Recall" },
    { name: "Bakery", insurance: "Product Recall" },
    { name: "Beverage", insurance: "Product Recall" },
    { name: "Medical Food", insurance: "Product Recall" },
    { name: "Functional Food", insurance: "Product Recall" },
    { name: "Herbs", insurance: "Product Recall" },
    { name: "Vitamins & Minerals", insurance: "Product Recall" },
    { name: "Prebiotics", insurance: "Product Recall" },
    { name: "Probiotics", insurance: "Product Recall" },
    { name: "Technology", insurance: "Tech" },
    { name: "Hardware Resale", insurance: "Tech" },
    { name: "OEM Resale", insurance: "Tech" },
    { name: "VAR Resale", insurance: "Tech" },
    { name: "Software Resale", insurance: "Tech" },
    { name: "Textiles", insurance: "Product Recall" },
    { name: "Clothing", insurance: "Product Recall" },
    { name: "Sports Clothing", insurance: "Product Recall" },
    { name: "Durable Medical Equipment Supplier", insurance: "Healthcare" },
    { name: "Medical Device", insurance: "Healthcare" },
    { name: "Non-invasive", insurance: "Healthcare" },
    { name: "Invasive", insurance: "Healthcare" },
    { name: "In vitro diagnostic device", insurance: "Healthcare" },
    { name: "Pharmaceuticals", insurance: "Healthcare" },
    { name: "Topical Applications", insurance: "Healthcare" },
    { name: "Over the counter pharmaceutical", insurance: "Healthcare" },
    { name: "Standard generic drugs", insurance: "Healthcare" },
    { name: "Ethical / on-patent drugs", insurance: "Healthcare" },
    { name: "Lifestyle drugs / exclusion buy-backs / blood products / vaccines", insurance: "Healthcare" },
    { name: "Biologics", insurance: "Healthcare" },
    { name: "Scientific", insurance: "Life Sciences" },
    { name: "Laboratory Equipment", insurance: "Life Sciences" },
    { name: "Process automation", insurance: "Life Sciences" },
    { name: "Cold Storage", insurance: "Life Sciences" },
    { name: "Reagents, proteins, lab consumables", insurance: "Life Sciences" },
    { name: "Clinical trial drug materials", insurance: "Life Sciences" },
    { name: "Agriculture and Environmental", insurance: "Professions" },
    { name: "Contracting", insurance: "Professions" },
    { name: "Carpentry and Woodwork", insurance: "Professions" },
    { name: "Electrical Contracting", insurance: "Professions" },
    { name: "HVAC and Plumbing", insurance: "Professions" },
    { name: "Landscaping and Gardening", insurance: "Professions" },
    { name: "Painting", insurance: "Professions" },
    { name: "Roofing", insurance: "Professions" },
    { name: "Residential Construction", insurance: "Property and Casualty" },
    { name: "Commercial & Institutional Construction", insurance: "Property and Casualty" },
    { name: "Utilities Construction", insurance: "Property and Casualty" },
    { name: "Pipeline Construction", insurance: "Property and Casualty" },
    { name: "Pipeline Construction/Maintenance (Water & Wastewater)", insurance: "Property and Casualty" },
    { name: "Pipeline Construction/Maintenance (Petrochemicals)", insurance: "Property and Casualty" },
    { name: "Communications & Power Line Construction/Maintenance", insurance: "Property and Casualty" },
    { name: "Civil Engineering Construction", insurance: "Property and Casualty" },
    { name: "Road Construction", insurance: "Property and Casualty" },
    { name: "Railway Construction", insurance: "Property and Casualty" },
    { name: "Bridge Construction", insurance: "Property and Casualty" },
    { name: "Tunnel Construction", insurance: "Property and Casualty" },
    { name: "Pre-Schools", insurance: "Professions" },
    { name: "Nursery", insurance: "Professions" },
    { name: "Primary & Secondary Schools", insurance: "Professions" },
    { name: "State Primary School", insurance: "Professions" },
    { name: "State Secondary School", insurance: "Professions" },
    { name: "Independent School", insurance: "Professions" },
    { name: "Faith School", insurance: "Professions" },
    { name: "Academies & Free Schools", insurance: "Professions" },
    { name: "Colleges & Universities", insurance: "Professions" },
    { name: "Further Education College", insurance: "Professions" },
    { name: "Independent College", insurance: "Professions" },
    { name: "University", insurance: "Professions" },
    { name: "Professional Schools", insurance: "Professions" },
    { name: "Business & Secretarial School", insurance: "Professions" },
    { name: "Computer Training", insurance: "Professions" },
    { name: "Cosmetology & Barber School", insurance: "Professions" },
    { name: "Flight Training", insurance: "Professions" },
    { name: "Apprenticeship Training", insurance: "Professions" },
    { name: "Other Schools", insurance: "Professions" },
    { name: "Fine Arts Schools", insurance: "Professions" },
    { name: "Sports Instruction", insurance: "Professions" },
    { name: "Language School", insurance: "Professions" },
    { name: "Tutoring", insurance: "Professions" },
    { name: "Automobile Driving School", insurance: "Professions" },
    { name: "National Government", insurance: "Professions" },
    { name: "Local Government", insurance: "Professions" },
    { name: "Municipality", insurance: "Professions" },
    { name: "Housing Authority", insurance: "Professions" },
    { name: "Social Services", insurance: "Professions" },
    { name: "Ex government authorities", insurance: "Professions" },
    { name: "Other Services", insurance: "Professions" },
    { name: "Security Services", insurance: "Professions" },
    { name: "Security Guard Services", insurance: "Professions" },
    { name: "Armored Car Services", insurance: "Professions" },
    { name: "Locksmiths", insurance: "Professions" },
    { name: "Pest Control & Extermination", insurance: "Professions" },
    { name: "Cleaning Services", insurance: "Professions" },
    { name: "Commercial Cleaning", insurance: "Professions" },
    { name: "Household Cleaning", insurance: "Professions" },
    { name: "Car Wash", insurance: "Professions" },
    { name: "Dry Cleaners", insurance: "Professions" },
    { name: "Landscaping", insurance: "Professions" },
    { name: "Grounds Maintenance", insurance: "Professions" },
    { name: "Waste Collection", insurance: "Professions" },
    { name: "Scrap Metal", insurance: "Professions" },
    { name: "Building Materials", insurance: "Professions" },
    { name: "Stone & Quarrying", insurance: "Professions" },
    { name: "Concrete & Cement", insurance: "Professions" },
    { name: "Glass & Glazing", insurance: "Professions" },
    { name: "Household Furniture", insurance: "Professions" },
    { name: "Textiles", insurance: "Professions" },
    { name: "Printing", insurance: "Professions" },
    { name: "Publication Printing", insurance: "Professions" },
    { name: "Packaging", insurance: "Professions" },
    { name: "Food Manufacturing", insurance: "Product Recall" },
    { name: "Pet Food", insurance: "Product Recall" },
    { name: "Fruit & Vegetables", insurance: "Product Recall" },
    { name: "Bakery", insurance: "Product Recall" },
    { name: "Beverage", insurance: "Product Recall" },
    { name: "Medical Food", insurance: "Product Recall" },
    { name: "Functional Food", insurance: "Product Recall" },
    { name: "Herbs", insurance: "Product Recall" },
    { name: "Vitamins & Minerals", insurance: "Product Recall" },
    { name: "Prebiotics", insurance: "Product Recall" },
    { name: "Probiotics", insurance: "Product Recall" },
    { name: "Technology", insurance: "Tech" },
    { name: "Hardware Resale", insurance: "Tech" },
    { name: "OEM Resale", insurance: "Tech" },
    { name: "VAR Resale", insurance: "Tech" },
    { name: "Software Resale", insurance: "Tech" },
    { name: "Textiles", insurance: "Product Recall" },
    { name: "Clothing", insurance: "Product Recall" },
    { name: "Sports Clothing", insurance: "Product Recall" },
    { name: "Durable Medical Equipment Supplier", insurance: "Healthcare" },
    { name: "Medical Device", insurance: "Healthcare" },
    { name: "Non-invasive", insurance: "Healthcare" },
    { name: "Invasive", insurance: "Healthcare" },
    { name: "In vitro diagnostic device", insurance: "Healthcare" },
    { name: "Pharmaceuticals", insurance: "Healthcare" },
    { name: "Topical Applications", insurance: "Healthcare" },
    { name: "Over the counter pharmaceutical", insurance: "Healthcare" },
    { name: "Standard generic drugs", insurance: "Healthcare" },
    { name: "Ethical / on-patent drugs", insurance: "Healthcare" },
    { name: "Lifestyle drugs / exclusion buy-backs / blood products / vaccines", insurance: "Healthcare" },
    { name: "Biologics", insurance: "Healthcare" },
    { name: "Scientific", insurance: "Life Sciences" },
    { name: "Laboratory Equipment", insurance: "Life Sciences" },
    { name: "Process automation", insurance: "Life Sciences" },
    { name: "Cold Storage", insurance: "Life Sciences" },
    { name: "Reagents, proteins, lab consumables", insurance: "Life Sciences" },
    { name: "Clinical trial drug materials", insurance: "Life Sciences" },
    { name: "Agriculture and Environmental", insurance: "Professions" },
    { name: "Contracting", insurance: "Professions" },
    { name: "Carpentry and Woodwork", insurance: "Professions" },
    { name: "Electrical Contracting", insurance: "Professions" },
    { name: "HVAC and Plumbing", insurance: "Professions" },
    { name: "Landscaping and Gardening", insurance: "Professions" },
    { name: "Painting", insurance: "Professions" },
    { name: "Roofing", insurance: "Professions" },
    { name: "Residential Construction", insurance: "Property and Casualty" },
    { name: "Commercial & Institutional Construction", insurance: "Property and Casualty" },
    { name: "Utilities Construction", insurance: "Property and Casualty" },
    { name: "Pipeline Construction", insurance: "Property and Casualty" },
    { name: "Pipeline Construction/Maintenance (Water & Wastewater)", insurance: "Property and Casualty" },
    { name: "Pipeline Construction/Maintenance (Petrochemicals)", insurance: "Property and Casualty" },
    { name: "Communications & Power Line Construction/Maintenance", insurance: "Property and Casualty" },
    { name: "Civil Engineering Construction", insurance: "Property and Casualty" },
    { name: "Road Construction", insurance: "Property and Casualty" },
    { name: "Railway Construction", insurance: "Property and Casualty" },
    { name: "Bridge Construction", insurance: "Property and Casualty" },
    { name: "Tunnel Construction", insurance: "Property and Casualty" },
];


console.log(professions);

// Function to find the best match for the user input using Fuse.js
function findBestMatch(input, professions) {
    const options = {
        keys: ['name'],
        threshold: 0.3
    };
    const fuse = new Fuse(professions, options);
    const result = fuse.search(input);

    return result.length ? result[0].item : { name: '', insurance: '' };
}

// Add event listener to the search box for suggestions
document.getElementById('searchBox').addEventListener('input', function() {
    const input = this.value.trim();
    const options = {
        keys: ['name'],
        threshold: 0.3
    };
    const fuse = new Fuse(professions, options);
    const results = fuse.search(input);

    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';

    if (input) {
        results.forEach(result => {
            const div = document.createElement('div');
            div.textContent = result.item.name;
            div.addEventListener('click', () => {
                document.getElementById('searchBox').value = result.item.name;
                suggestions.innerHTML = '';
                document.getElementById('searchButton').click();
            });
            suggestions.appendChild(div);
        });
    }
});

// Adjust the search function
document.getElementById('searchButton').addEventListener('click', function() {
    const input = document.getElementById('searchBox').value.trim();
    const bestMatch = findBestMatch(input, professions);

    if (bestMatch.name) {
        document.getElementById('resultBox').innerHTML = `Profession: ${bestMatch.name}<br>Insurance: ${bestMatch.insurance}`;
        displayLists(bestMatch.insurance);
    } else {
        document.getElementById('resultBox').innerHTML = 'Profession not found. Please try again.';
        clearLists();
    }
});

// Function to clear the lists
function clearLists() {
    document.getElementById('keywordsList').innerHTML = '';
    document.getElementById('avoidList').innerHTML = '';
}

// Function to display the relevant lists based on the insurance type
function displayLists(insurance) {
    const keywords = {
        "Property and Casualty": ["Building", "Combined liability", "Commercial combined", "Commercial Property", "Construction", "Environmental Impairment Liability (EIL)", "Location", "Office and retail premises", "Property", "Property managers / owners (commercial and residential)", "Residential Dwelling", "Specialist contractors (electrical, flooring, shop fitters)", "Tourist attractions", "Amusement arcades", "Construction projects", "General contractor", "Nightclubs and bars", "Standalone property cover"],
        "Product Recall": ["Ancillary product recall costs", "Contamination", "Product recall"],
        "Financial Institutions": ["Asset Management", "Bank", "Capital", "Credit Union", "Financial Advisors", "Financial Corporation", "Financial Services", "Fund", "Insurance Company", "Lending", "Mortgage", "Non-bank lenders", "Introductory services", "M&A advisors", "Brokers services", "Pay day lenders"],
        "Healthcare": ["Acupuncture", "Audiologists", "Beauticians/ Beauty salons", "Chiropractors", "Clinics", "Dieticians", "Drug Distribution", "ePharmacy", "Facial", "General Practice", "Gyms", "Health Screening", "Healthcare Consultants", "Home Healthcare", "Hospices", "Massage", "Medical", "Medical Practitioners", "Medical Schools", "Medical Staffing", "Medical Testing Labs", "Nails", "Nursing", "Nursing homes", "Nutritional Consulting", "Ophthalmology", "Opticians", "Pharmacy", "Pharmacists", "Phlebotomists", "Podiatry", "Psychologists", "Rehab Units", "Remote Patient Monitoring", "Speech Therapy", "Sports Injury", "STI Clinics and Health Centres", "Tanning", "Telemedicine", "Vets", "Wellness", "Anaesthetist", "Cardiologist", "Cardiothoracic Surgeon", "Dermatologist", "Endocrinologist", "Gastroenterologist", "Gynaecologist", "Maxillofacial Surgeon", "Neurologist", "Oncologist", "Ophthalmologist", "Orthopaedic Surgeon", "Otolaryngologist", "Plastic Surgeon", "Psychiatrist", "Radiologist", "Rheumatologist", "Urologist", "Vascular Surgeon"],
        "Management Liability": ["Crime", "Directors & Officers (D&O)", "Fiduciary"],
        "Media": ["Advertising Agency", "Artist", "Author", "Blogger / Vlogger", "Broadcaster", "Communication Consultants", "Digital Marketing", "Event organisers", "Film and TV Distributor", "Film and TV Production", "Magazine, Book, Newspaper Publishers", "Marketing", "Marketing and PR Companies", "Marketing Consultants", "Multimedia Companies", "Music Producers / Publishers / Composers / Songwriters", "New Media / digital agencies", "Photographers", "PR Consultants", "Press agencies", "Producers (TV, Film, Commercials)", "Public Relations", "Radio Stations", "Social Media Agencies"],
        "Professions": ["Agricultural consultants", "Business consultants", "Captives", "Civil Engineers", "Commercial lines insurance", "Conservation managers", "Construction", "Conveyancers", "Data processors", "Directional drillers", "Drilling consultants", "Driving / Haulage", "Education", "Electrical Engineers", "Engineering and technical", "Environmental Engineers", "Environmental consultants", "Estate agents (residential and commercial)", "Expert witnesses", "Feasibility studies", "Financial services", "Fire consultants", "Food consultants", "Foreclosure agents", "Geologists", "Geotechnical engineers", "Health and safety consultants", "Hospitality", "HR consultants", "HVAC engineers", "Hydraulic / fire engineers", "Interim Management", "Interior designers", "Investigators", "IT / Telecommunications", "Land brokers", "Land surveyors", "Landscape architects", "Management consultants", "Mechanical engineers", "Other professional services", "Personal lines", "Project managers", "Property developers", "Property leasing firms", "Property management companies", "Property management firms", "Property surveyors", "Quality assurance consultants", "Quarterly surveyors", "Recruitment", "Risk retention groups", "Staffing", "Structural architects / engineers / surveyors", "Town planning engineers", "Training companies"],
        "Tech": ["App developers", "Application service providers", "Bespoke software developers", "Business networking websites", "Computer games developers", "Corporate blogs", "Digital Marketing agencies", "Domain name registration (resellers)", "Educational games", "Email providers", "Encryption software providers", "Genealogy websites", "Hardware value added resellers", "Instant messaging applications", "Internet radio websites", "IT consultancy", "IT security consultants", "IT support and training", "Mobile content providers", "Mobile phone content developers", "Networking engineers", "Online dating agencies", "Online gaming providers", "Online games developers and publishers", "Online listings sites", "Packaged software developers", "Photo sharing websites", "Social networking websites", "Software value added resellers", "System integrators", "User-generated content sites", "Video sharing websites", "Web designers", "Web hosting (Reselling)", "Web-based communities", "Web-casters", "Web service providers"]
    };

    const avoidIndicators = {
        "Property and Casualty": ["Restaurant", "Leisure center", "Gym", "Cafe"],
        "Healthcare": ["Allied Health", "Ambulance", "Assisted Living", "Blood collection", "Clinic", "Drug distribution", "Health", "Facial", "Fitness", "General Practice", "Home Healthcare", "Massage", "Medical", "Medical practitioners", "Medical Staffing", "Nails", "Nursing", "Nursing homes", "Nutrition", "Ophthalmology", "Pharmacy", "Podiatry"],
        "Life Sciences": ["Animal Products", "Bio", "Biotics", "Blood bank", "Cannabis", "CBD", "Clinical Trials", "Drugs", "Hemp", "Laboratories", "Medical Devices (MD)", "Nutra", "Pain Relief", "Patients", "Research and Development (R&D)", "Research Trials", "Stem cell bank", "Supplements (food, dietary)", "Therapeutic devices", "Vitamins"]
    };

    const keywordList = document.getElementById('keywordsList');
    const avoidList = document.getElementById('avoidList');

    // Display keywords
    keywordList.innerHTML = `<h3>${insurance} Keywords</h3><ul>` + (keywords[insurance] || []).map(keyword => `<li>${keyword}</li>`).join('') + `</ul>`;

    // Display avoid indicators only if applicable
    if (insurance !== "Healthcare" && avoidIndicators[insurance] && avoidIndicators[insurance].length > 0) {
        if (insurance === "Property and Casualty") {
            avoidList.innerHTML = `<h3>Indicators to AVOID, consider selecting LIFE SCIENCE</h3><ul>` + avoidIndicators["Life Sciences"].map(indicator => `<li>${indicator}</li>`).join('') + `</ul>`;
            avoidList.innerHTML += `<h3>Indicators to AVOID, consider selecting HEALTHCARE</h3><ul>` + avoidIndicators["Healthcare"].map(indicator => `<li>${indicator}</li>`).join('') + `</ul>`;
        } else if (insurance === "Life Sciences") {
            avoidList.innerHTML = `<h3>Indicators to AVOID, consider selecting HEALTHCARE</h3><ul>` + avoidIndicators["Healthcare"].map(indicator => `<li>${indicator}</li>`).join('') + `</ul>`;
        } else {
            const alternative = insurance === "Healthcare" ? "LIFE SCIENCE" : "HEALTHCARE";
            avoidList.innerHTML = `<h3>Indicators to AVOID, consider selecting ${alternative}</h3><ul>` + avoidIndicators[alternative].map(indicator => `<li>${indicator}</li>`).join('') + `</ul>`;
        }
    } else if (insurance === "Healthcare") {
        avoidList.innerHTML = `<h3>Indicators to AVOID, consider selecting LIFE SCIENCE</h3><ul>` + avoidIndicators["Life Sciences"].map(indicator => `<li>${indicator}</li>`).join('') + `</ul>`;
    } else {
        avoidList.innerHTML = '';
    }
    // Add event listener to the search box for suggestions
document.getElementById('searchBox').addEventListener('input', function() {
    const input = this.value.trim();
    const options = {
        keys: ['name'],
        threshold: 0.3
    };
    const fuse = new Fuse(professions, options);
    const results = fuse.search(input);

    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';

    const seen = new Set(); // To keep track of already added suggestions

    if (input) {
        results.forEach(result => {
            if (!seen.has(result.item.name)) {
                seen.add(result.item.name);
                const div = document.createElement('div');
                div.textContent = result.item.name;
                div.addEventListener('click', () => {
                    document.getElementById('searchBox').value = result.item.name;
                    suggestions.innerHTML = '';
                    document.getElementById('searchButton').click();
                });
                suggestions.appendChild(div);
            }
        });
    }
});

// Add event listener for the enter key
document.getElementById('searchBox').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault(); // Prevent the default form submission behavior
        document.getElementById('searchButton').click();
    }
});

}
