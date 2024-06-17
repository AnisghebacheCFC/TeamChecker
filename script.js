const professions = [
    { name: "Oncologist", insurance: "Healthcare" },
    { name: "Software Developer", insurance: "Tech" },
    { name: "Financial Analyst", insurance: "FinTech" },
    { name: "IT Security Specialist", insurance: "Cyber" },
    { name: "Data Analyst", insurance: "Cyber" },
    { name: "Network Administrator", insurance: "Cyber" },
    { name: "System Administrator", insurance: "Cyber" },
    { name: "Web Developer", insurance: "Cyber" },
    { name: "Cybersecurity Consultant", insurance: "Cyber" },
    { name: "Information Security Officer", insurance: "Cyber" },
    { name: "Ethical Hacker", insurance: "Cyber" },
    { name: "Data Privacy Officer", insurance: "Cyber" },
    { name: "IT Auditor", insurance: "Cyber" },
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
    { name: "Blockchain Developer", insurance: "FinTech" },
    { name: "FinTech Product Manager", insurance: "FinTech" },
    { name: "Mobile Payment Developer", insurance: "FinTech" },
    { name: "Robo-Advisor Developer", insurance: "FinTech" },
    { name: "Cryptocurrency Trader", insurance: "FinTech" },
    { name: "InsurTech Specialist", insurance: "FinTech" },
    { name: "Payment Processor", insurance: "FinTech" },
    { name: "FinTech Compliance Specialist", insurance: "FinTech" },
    { name: "Digital Currency Analyst", insurance: "FinTech" },
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
    { name: "Construction Manager", insurance: "Property & Casualty" },
    { name: "Property Manager", insurance: "Property & Casualty" },
    { name: "Claims Adjuster", insurance: "Property & Casualty" },
    { name: "Underwriter", insurance: "Property & Casualty" },
    { name: "Risk Manager", insurance: "Property & Casualty" },
    { name: "Building Inspector", insurance: "Property & Casualty" },
    { name: "Insurance Broker", insurance: "Property & Casualty" },
    { name: "Loss Control Specialist", insurance: "Property & Casualty" },
    { name: "Fleet Manager", insurance: "Property & Casualty" },
    { name: "Safety Coordinator", insurance: "Property & Casualty" },
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
    { name: "Clinical Psychologist", insurance: "Healthcare" },
    { name: "Orthopedic Surgeon", insurance: "Healthcare" },
    { name: "Pediatrician", insurance: "Healthcare" },
    { name: "Oncologist", insurance: "Healthcare" },
    { name: "Cardiac Surgeon", insurance: "Healthcare" },
    { name: "Neonatologist", insurance: "Healthcare" },
    { name: "Occupational Health Specialist", insurance: "Healthcare" },
    { name: "Hospice Care Specialist", insurance: "Healthcare" },
    { name: "Geriatrician", insurance: "Healthcare" }
];

function searchProfession() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');

    const closestMatch = professions.reduce((prev, curr) => {
        const prevSimilarity = similarity(prev.name.toLowerCase(), input);
        const currSimilarity = similarity(curr.name.toLowerCase(), input);
        return currSimilarity > prevSimilarity ? curr : prev;
    });

    const similarityScore = similarity(closestMatch.name.toLowerCase(), input);
    
    if (similarityScore > 0.3) {  // Adjust the threshold as needed
        resultDiv.textContent = `Profession: ${closestMatch.name}, Insurance Type: ${closestMatch.insurance}`;
    } else {
        resultDiv.textContent = "Profession not found";
    }
}

function similarity(s1, s2) {
    let longer = s1;
    let shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    const longerLength = longer.length;
    if (longerLength === 0) {
        return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
    const costs = [];
    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i === 0) {
                costs[j] = j;
            } else {
                if (j > 0) {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
                        newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                    }
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0) {
            costs[s2.length] = lastValue;
        }
    }
    return costs[s2.length];
}
