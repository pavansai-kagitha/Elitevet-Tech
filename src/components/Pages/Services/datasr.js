
import awsimg from "../../../assets/services/aws-color.svg"
import gcpimg from "../../../assets/services/gcp.svg"
import azureimg from "../../../assets/services/Microsoft_Azure.svg"
import microsofts from "../../../assets/services/Microsoft_Office.svg"
import palantirlogo from "../../../assets/services/PLTR.svg"
import salesforcelogo from "../../../assets/services/Salesforce.com_logo.svg"
import saplogo from "../../../assets/services/SAP.png"
import projectmanagerslogo from "../../../assets/services/p-management.webp"
import functionalConsultantslogo from "../../../assets/services/fc.jpg"
import strategicConsultantslogo from "../../../assets/services/strategic-consulting.png"
import businessAnalystslogo from "../../../assets/services/ba-sm.jpg"
import gis from "../../../assets/services/gis.png"
import heroImg from "../../../assets/Herobg.webp"
const servicesContent = {
  // add all 8 services here...
  "cloud-technologies":{
 aws: {
  bgimg:heroImg,
    imgs: awsimg,
    title: "AWS Cloud Services",
    description:
      "Empowering businesses with secure, scalable, and reliable AWS cloud solutions.",
    whyChoose: {
      title: "Why Choose AWS with EliteVet Tech?",
      description:
        "Secure, Scalable, and Optimized AWS Solutions",
      cards: [
        {
          id: 1,
          title: "Cloud Migration",
          description:
            "Seamless migration of your workloads to AWS with minimal downtime and maximum efficiency.",
        },
        {
          id: 2,
          title: "Cost Optimization",
          description:
            "Reduce AWS costs with automated tools, resource optimization, and strategic planning.",
        },
        {
          id: 3,
          title: "Security & Compliance",
          description:
            "Ensure enterprise-grade security and compliance across your AWS environment.",
        },
      ],
    },
    expertise: {
      title: "Our AWS Expertise",
      description:
        "EliteVet Tech Driving Cloud-Native Growth on AWS",
      areas: [
        {
          id: 1,
          title: "AWS EC2 & Networking",
          description:
            "High-performance compute and secure VPC networking tailored to your workloads.",
        },
        {
          id: 2,
          title: "AWS Lambda & Serverless",
          description:
            "Build scalable serverless applications with AWS Lambda and API Gateway.",
        },
        {
          id: 3,
          title: "Amazon S3 & Storage Solutions",
          description:
            "Reliable object storage with lifecycle policies, backup, and disaster recovery.",
        },
        {
          id: 4,
          title: "AWS RDS & Databases",
          description:
            "Fully managed relational and NoSQL databases optimized for performance.",
        },
      ],
    },
  },

  gcp: {
    bgimg:heroImg,
     imgs: gcpimg,
    title: "Google Cloud Services",
    description:
      "Accelerate innovation with secure, scalable, and AI-driven Google Cloud solutions.",
    whyChoose: {
      title: "Why Choose GCP with EliteVet Tech?",
      description:
        "Innovating with Google Cloud AI & Data",
      cards: [
        {
          id: 1,
          title: "AI & Machine Learning",
          description:
            "Leverage GCP’s AI/ML tools like Vertex AI to build intelligent applications.",
        },
        {
          id: 2,
          title: "Kubernetes & GKE",
          description:
            "Deploy and manage containerized applications with Google Kubernetes Engine.",
        },
        {
          id: 3,
          title: "BigQuery & Data Analytics",
          description:
            "Unlock insights from big data with GCP’s powerful analytics tools.",
        },
      ],
    },
    expertise: {
      title: "Our GCP Expertise",
      description:
        "Smarter Solutions with Deep Google Cloud Expertise",
      areas: [
        {
          id: 1,
          title: "Google Kubernetes Engine (GKE)",
          description:
            "Scalable and managed Kubernetes clusters for modern apps.",
        },
        {
          id: 2,
          title: "BigQuery & Data Warehouse",
          description:
            "Enterprise-grade analytics with fast, serverless queries on big data.",
        },
        {
          id: 3,
          title: "Cloud AI & Machine Learning",
          description:
            "Custom AI models and ML pipelines using GCP’s AI/ML platform.",
        },
        {
          id: 4,
          title: "Google Cloud Storage",
          description:
            "Secure, scalable object storage with multi-region replication.",
        },
      ],
    },
  },

  azure: {
    bgimg:heroImg,
    imgs:azureimg,
    title: "Microsoft Azure Services",
    description:
      "Unlock enterprise-grade cloud innovation with Microsoft Azure solutions.",
    whyChoose: {
      title: "Why Choose Azure with EliteVet Tech?",
      description:
        "Enterprise Innovation with Azure AI & Hybrid Cloud",
      cards: [
        {
          id: 1,
          title: "Hybrid Cloud Integration",
          description:
            "Seamless hybrid solutions with Azure Arc and on-premise integration.",
        },
        {
          id: 2,
          title: "Enterprise Security",
          description:
            "Advanced security with Azure Sentinel, AD, and compliance frameworks.",
        },
        {
          id: 3,
          title: "AI & Data Solutions",
          description:
            "Leverage Azure AI and Synapse for enterprise-grade data intelligence.",
        },
      ],
    },
    expertise: {
      title: "Our Azure Expertise",
      description:
        "EliteVet Tech Unlocking Growth with Azure Expertise",
      areas: [
        {
          id: 1,
          title: "Azure VMs & Networking",
          description:
            "Secure and scalable compute with virtual networking tailored to enterprise needs.",
        },
        {
          id: 2,
          title: "Azure AI & Cognitive Services",
          description:
            "Build intelligent apps with pre-built AI models and custom solutions.",
        },
        {
          id: 3,
          title: "Azure SQL & Databases",
          description:
            "Fully managed SQL and NoSQL databases with high availability.",
        },
        {
          id: 4,
          title: "Azure DevOps & CI/CD",
          description:
            "Modern DevOps pipelines with GitHub Actions and Azure DevOps.",
        },
      ],
    },
  },
  },
   microsoft: {
    bgimg:heroImg,
    bgimg:heroImg,
    imgs: microsofts,
    title: "Microsoft Suite",
    description:
      "Empower your business with Microsoft’s productivity, collaboration, and cloud-enabled solutions.",
    whyChoose: {
      title: "Why Choose Microsoft Suite with EliteVet Tech?",
      description:
        "Boost Productivity with Microsoft 365, Teams & Azure",
      cards: [
        {
          id: 1,
          title: "Productivity & Collaboration",
          description:
            "Streamline workflows with Microsoft 365 apps and Teams for team collaboration.",
        },
        {
          id: 2,
          title: "Cloud Integration",
          description:
            "Leverage Azure for secure cloud storage, computing, and business continuity.",
        },
        {
          id: 3,
          title: "Custom Solutions",
          description:
            "Tailored apps and automations to fit your specific business processes.",
        },
      ],
    },
    expertise: {
      title: "Our Microsoft Expertise",
      description:
        "Certified Microsoft Experts for Seamless Cloud Adoption",
      areas: [
        {
          id: 1,
          title: "Microsoft 365 & Teams",
          description: "Productivity apps and collaboration tools for modern teams.",
        },
        {
          id: 2,
          title: "Azure Cloud Services",
          description: "Secure, scalable, and reliable cloud solutions.",
        },
        {
          id: 3,
          title: "Power Platform",
          description: "Custom automations and app development using Power Apps & Power Automate.",
        },
        {
          id: 4,
          title: "Enterprise Security",
          description: "Protect data and users with Microsoft security tools.",
        },
      ],
    },
  },

  gis: {
    bgimg:heroImg,
    imgs: gis,
    title: "GIS Services & Solutions",
    description:
      "Unlock location-based insights to drive smarter decision-making and operational efficiency.",
    whyChoose: {
      title: "Why Choose GIS with EliteVet Tech?",
      description:
        "Harnessing Spatial Data for Smarter Decisions",
      cards: [
        {
          id: 1,
          title: "Advanced Spatial Analytics",
          description:
            "Transform GIS data into actionable insights for strategic planning.",
        },
        {
          id: 2,
          title: "Custom Mapping Solutions",
          description:
            "Interactive maps tailored to business requirements for better decision-making.",
        },
        {
          id: 3,
          title: "Integration & Optimization",
          description:
            "Seamless GIS integration with ERP, CRM, and enterprise systems.",
        },
      ],
    },
    expertise: {
      title: "Our GIS Expertise",
      description:
        "Expertise in Geospatial Analysis, Mapping & Insights",
      areas: [
        {
          id: 1,
          title: "Spatial Data Analysis",
          description: "Data-driven insights for optimized operations.",
        },
        {
          id: 2,
          title: "Cartography & Mapping",
          description: "Design and develop interactive and informative maps.",
        },
        {
          id: 3,
          title: "GIS Integration",
          description: "Integrate GIS with enterprise workflows and systems.",
        },
        {
          id: 4,
          title: "Remote Sensing & Satellite Data",
          description: "Leverage satellite imagery and remote sensing for insights.",
        },
      ],
    },
  },

  palantir: {
    bgimg:heroImg,
    bgimg:heroImg,
    imgs: palantirlogo,
    title: "Palantir Data Solutions",
    description:
      "Harness big data and AI to drive predictive analytics and operational excellence.",
    whyChoose: {
      title: "Why Choose Palantir with EliteVet Tech?",
      description:
        "Unifying Data for Insights and Smarter Decisions",
      cards: [
        {
          id: 1,
          title: "Data Integration",
          description:
            "Unify disparate data into a single platform for real-time insights.",
        },
        {
          id: 2,
          title: "Predictive Analytics",
          description:
            "Leverage AI-driven insights for smarter forecasting and planning.",
        },
        {
          id: 3,
          title: "Secure Data Governance",
          description:
            "Ensure compliance and security while handling critical business data.",
        },
      ],
    },
    expertise: {
      title: "Our Palantir Expertise",
      description:
        "Certified Palantir Specialists in AI & Advanced Analytics",
      areas: [
        {
          id: 1,
          title: "Palantir Foundry",
          description: "Platform for data integration, modeling, and analytics.",
        },
        {
          id: 2,
          title: "Data Pipelines & AI",
          description: "Build scalable AI pipelines and predictive models.",
        },
        {
          id: 3,
          title: "Operational Intelligence",
          description: "Transform data into actionable operational decisions.",
        },
        {
          id: 4,
          title: "Security & Compliance",
          description: "Enterprise-grade data protection and governance.",
        },
      ],
    },
  },

  salesforce: {
    bgimg:heroImg,
    imgs: salesforcelogo,
    title: "Salesforce CRM Solutions",
    description:
      "Elevate customer relationships, sales, and marketing strategies with Salesforce CRM.",
    whyChoose: {
      title: "Why Choose Salesforce with EliteVet Tech?",
      description:
        "Boost Customer Engagement with Salesforce CRM",
      cards: [
        {
          id: 1,
          title: "Customer 360° View",
          description:
            "Centralize customer data for improved engagement and satisfaction.",
        },
        {
          id: 2,
          title: "Sales & Marketing Automation",
          description:
            "Streamline campaigns, sales pipelines, and customer interactions.",
        },
        {
          id: 3,
          title: "Scalable CRM Solutions",
          description:
            "Flexible solutions for businesses of any size, tailored to your needs.",
        },
      ],
    },
    expertise: {
      title: "Our Salesforce Expertise",
      description:
        "Certified Salesforce Experts for Growth & Optimization",
      areas: [
        {
          id: 1,
          title: "Sales Cloud",
          description: "Automate and optimize your sales processes.",
        },
        {
          id: 2,
          title: "Service Cloud",
          description: "Deliver exceptional customer service and support.",
        },
        {
          id: 3,
          title: "Marketing Cloud",
          description: "Run personalized marketing campaigns at scale.",
        },
        {
          id: 4,
          title: "Salesforce Integration",
          description: "Connect CRM to ERP, apps, and enterprise systems.",
        },
      ],
    },
  },

  sap: {
    bgimg:heroImg,
    imgs: saplogo,
    title: "SAP Enterprise Solutions",
    description:
      "Transform enterprise operations with SAP’s ERP, finance, supply chain, and HR solutions.",
    whyChoose: {
      title: "Why Choose SAP with EliteVet Tech?",
      description:
        "Driving Efficiency and Insights with SAP Solutions",
      cards: [
        {
          id: 1,
          title: "Integrated ERP",
          description:
            "Manage finance, supply chain, HR, and operations from a single platform.",
        },
        {
          id: 2,
          title: "Real-Time Analytics",
          description:
            "Get actionable insights for faster, smarter business decisions.",
        },
        {
          id: 3,
          title: "Process Automation",
          description:
            "Automate workflows to reduce manual effort and errors.",
        },
      ],
    },
    expertise: {
      title: "Our SAP Expertise",
      description:
        "SAP-Certified Experts in ERP, Finance & Supply Chain",
      areas: [
        {
          id: 1,
          title: "SAP S/4HANA",
          description: "Next-gen ERP for intelligent enterprises.",
        },
        {
          id: 2,
          title: "SAP Fiori & UI5",
          description: "Modern, user-friendly interfaces for business apps.",
        },
        {
          id: 3,
          title: "SAP Analytics Cloud",
          description: "Real-time insights with cloud-based analytics.",
        },
        {
          id: 4,
          title: "SAP Integration",
          description: "Seamless integration with third-party systems and apps.",
        },
      ],
    },
  },
  "process": {
  "project-managers-progra-managers": {
      bgimg:projectmanagerslogo,
    imgs:projectmanagerslogo,
      title: "Project & Program Management",
      description:
        "Drive project success with experienced Project and Program Managers ensuring timely delivery, budget control, and stakeholder alignment.",
      whyChoose: {
        title: "Why Choose Our Project Managers?",
        description:
          "Certified Experts Driving Project & Program Success",
        cards: [
          {
            id: 1,
            title: "Program Planning & Execution",
            description:
              "Develop and execute structured project plans to meet objectives and deadlines.",
          },
          {
            id: 2,
            title: "Risk Management",
            description:
              "Identify, mitigate, and manage project risks to minimize impact.",
          },
          {
            id: 3,
            title: "Stakeholder Communication",
            description:
              "Transparent and timely communication to align stakeholders and team members.",
          },
        ],
      },
      expertise: {
        title: "Our Project Management Expertise",
        description:
          "End-to-End Project Management for Business Outcomes",
        areas: [
          {
            id: 1,
            title: "Agile & Waterfall Methodologies",
            description:
              "Implement appropriate methodologies to match project scope and business needs.",
          },
          {
            id: 2,
            title: "Resource Allocation & Optimization",
            description:
              "Efficiently allocate resources for optimal productivity and cost control.",
          },
          {
            id: 3,
            title: "Performance Tracking & Reporting",
            description:
              "Regular monitoring and reporting to track project progress and KPIs.",
          },
          {
            id: 4,
            title: "Change Management",
            description:
              "Manage organizational changes effectively during project lifecycles.",
          },
        ],
      },
    },

    "functional-consultants": {
      bgimg:functionalConsultantslogo,
     imgs:functionalConsultantslogo,
      title: "Functional Consulting",
      description:
        "Bridge business requirements and technology solutions with expert Functional Consultants across ERP, CRM, and cloud applications.",
      whyChoose: {
        title: "Why Choose Our Functional Consultants?",
        description:
          "Turning Complex Needs into Practical Solutions",
        cards: [
          {
            id: 1,
            title: "Business Process Optimization",
            description:
              "Analyze and streamline processes to maximize efficiency and reduce costs.",
          },
          {
            id: 2,
            title: "System Implementation Support",
            description:
              "Ensure smooth implementation of ERP, CRM, and other enterprise systems.",
          },
          {
            id: 3,
            title: "User Training & Support",
            description:
              "Enable teams to leverage technology effectively through training and guidance.",
          },
        ],
      },
      expertise: {
        title: "Our Functional Expertise",
        description:
          "Domain Expertise to Align Systems with Business Goals",
        areas: [
          {
            id: 1,
            title: "ERP Systems (SAP, Oracle, Dynamics)",
            description:
              "Expertise in configuring and supporting enterprise resource planning systems.",
          },
          {
            id: 2,
            title: "CRM Solutions",
            description:
              "Optimize customer engagement and sales processes using leading CRM platforms.",
          },
          {
            id: 3,
            title: "Process Documentation & Gap Analysis",
            description:
              "Document and improve workflows to address business gaps efficiently.",
          },
          {
            id: 4,
            title: "Business Requirement Gathering",
            description:
              "Collect and define clear requirements to ensure successful project outcomes.",
          },
        ],
      },
    },

    "stratergic-consultants": {
      bgimg:strategicConsultantslogo,
     imgs:strategicConsultantslogo,
      title: "Strategic Consulting",
      description:
        "Enable organizations to make data-driven strategic decisions and achieve long-term growth with expert consulting services.",
      whyChoose: {
        title: "Why Choose Our Strategic Consultants?",
        description:
          "Leaders in Strategy & Digital Transformation",
        cards: [
          {
            id: 1,
            title: "Business Strategy Development",
            description:
              "Design strategies to enhance growth, profitability, and competitive advantage.",
          },
          {
            id: 2,
            title: "Digital Transformation",
            description:
              "Drive transformation initiatives leveraging technology and innovation.",
          },
          {
            id: 3,
            title: "Market & Competitive Analysis",
            description:
              "Identify market opportunities and provide actionable insights for decision-making.",
          },
        ],
      },
      expertise: {
        title: "Our Strategic Expertise",
        description:
          "Consulting That Aligns Goals with Measurable Outcomes",
        areas: [
          {
            id: 1,
            title: "Business Planning & Forecasting",
            description:
              "Develop actionable plans with measurable objectives for sustainable growth.",
          },
          {
            id: 2,
            title: "Change & Transformation Management",
            description:
              "Guide organizations through complex change initiatives with minimal disruption.",
          },
          {
            id: 3,
            title: "Operational Excellence",
            description:
              "Improve operational efficiency and streamline business processes.",
          },
          {
            id: 4,
            title: "Innovation & Growth Strategies",
            description:
              "Implement innovative solutions to drive market differentiation and revenue growth.",
          },
        ],
      },
    },

    "business-analysts-scrum-masters": {
      bgimg:businessAnalystslogo,
       imgs:businessAnalystslogo,
      title: "Business Analysis & Scrum Masters",
      description:
        "Enhance project delivery and process efficiency with skilled Business Analysts and Scrum Masters guiding agile teams.",
      whyChoose: {
        title: "Why Choose Our Business Analysts & Scrum Masters?",
        description:
          "Driving Clarity, Alignment & Agile Excellence",
        cards: [
          {
            id: 1,
            title: "Requirements Elicitation & Analysis",
            description:
              "Gather and analyze business requirements to ensure successful solution delivery.",
          },
          {
            id: 2,
            title: "Agile Facilitation & Scrum",
            description:
              "Lead agile ceremonies and manage sprints to achieve project goals.",
          },
          {
            id: 3,
            title: "Process Improvement",
            description:
              "Identify and implement process improvements for efficiency and productivity.",
          },
        ],
      },
      expertise: {
        title: "Our Business Analysis & Scrum Expertise",
        description:
          "Actionable Insights and Leadership for Project Success",
        areas: [
          {
            id: 1,
            title: "Agile & Scrum Mastery",
            description:
              "Certified Scrum Masters ensuring agile best practices across teams.",
          },
          {
            id: 2,
            title: "Business Process Modeling",
            description:
              "Document and improve business processes for clarity and efficiency.",
          },
          {
            id: 3,
            title: "Stakeholder Engagement",
            description:
              "Maintain strong communication with stakeholders to align expectations and priorities.",
          },
          {
            id: 4,
            title: "User Story & Backlog Management",
            description:
              "Translate business requirements into actionable user stories and maintain prioritized backlogs.",
          },
        ],
      },
    },
  },
};

export default servicesContent;
