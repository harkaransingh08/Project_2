import {
  AcademicCapIcon,
  BuildingLibraryIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ClockIcon,
  BookOpenIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";


export const UniData = [
  {
    Slug: 'university-of-melbourne',
    name: 'University of Melbourne',
    bannerImgh: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?q=80&w=2070&auto=format&fit=crop',
    shortDes: 'Ranked #1 in Australia • Global Leader in Research & Innovation',
    title: 'A Legacy of Excellence',
    titleImg: 'https://sru.edu.in/assets/images/DJI.jpg',
    des: `Founded in 1853, the University of Melbourne is Australia's second oldest university and consistently ranks among the world's top institutions. Our commitment to research, innovation, and educational excellence has produced 7 Nobel laureates and countless industry leaders.`,
    course: [
      { name: "Bachelor of Business", duration: "3 Years", icon: BookOpenIcon, color: "from-blue-500 to-cyan-500" },
      { name: "Bachelor of Computer Science", duration: "3 Years", icon: AcademicCapIcon, color: "from-purple-500 to-pink-500" },
      { name: "Master of Data Science", duration: "2 Years", icon: GlobeAltIcon, color: "from-green-500 to-emerald-500" },
      { name: "Master of Engineering", duration: "2 Years", icon: BuildingLibraryIcon, color: "from-orange-500 to-red-500" },
      { name: "MBA (Master of Business Administration)", duration: "2 Years", icon: UserGroupIcon, color: "from-indigo-500 to-blue-500" },
      { name: "Bachelor of Arts", duration: "3 Years", icon: BookOpenIcon, color: "from-rose-500 to-pink-500" },
    ],
    fee: [
      { level: "Undergraduate", price: "AUD 35,000 – 45,000", period: "per year", icon: AcademicCapIcon, bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50" },
      { level: "Postgraduate", price: "AUD 40,000 – 55,000", period: "per year", icon: BuildingLibraryIcon, bgColor: "bg-gradient-to-br from-green-50 to-emerald-50" },
      { level: "MBA", price: "AUD 90,000+", period: "total program", icon: UserGroupIcon, bgColor: "bg-gradient-to-br from-purple-50 to-pink-50" },
    ],
    benefit: [
      "Top 50 universities globally (QS World Rankings)",
      "97% graduate employment rate within 6 months",
      "150+ student clubs and societies",
      "Research partnerships with 200+ institutions",
      "50,000+ students from 130+ countries",
      "Nobel laureates among alumni and faculty"
    ],
    CampusImg: [
      'https://sru.edu.in/assets/images/DJI.jpg',
      'https://www.unimelb.edu.au/__data/assets/image/0012/3798804/video.jpg',
      'https://biosciences.unimelb.edu.au/__data/assets/image/0008/4766975/industry-engagement.jpg'
    ]
  },
  {
    Slug: 'unsw-sydney',
    name: 'UNSW Sydney',
    bannerImgh: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe1?q=80&w=2070&auto=format&fit=crop',
    shortDes: 'Global Leader in Engineering & Technology • Top 20 Worldwide',
    title: 'The University of New South Wales',
    titleImg: 'https://www.unsw.edu.au/content/dam/pdfs/unsw-newsroom/2023/06/UNSW_Library_Lawn.jpg',
    des: `UNSW Sydney is a world-class teaching and research powerhouse. Known for its strong focus on technology and innovation, it attracts students from over 120 countries and is a founding member of the Group of Eight.`,
    course: [
      { name: "Bachelor of Engineering", duration: "4 Years", icon: BuildingLibraryIcon, color: "from-blue-600 to-blue-400" },
      { name: "Bachelor of Commerce", duration: "3 Years", icon: BookOpenIcon, color: "from-yellow-500 to-orange-500" },
      { name: "Master of IT", duration: "2 Years", icon: AcademicCapIcon, color: "from-indigo-600 to-purple-600" },
      { name: "Master of Architecture", duration: "2 Years", icon: GlobeAltIcon, color: "from-teal-500 to-emerald-500" },
      { name: "MBA (AGSM)", duration: "1.5 Years", icon: UserGroupIcon, color: "from-red-500 to-rose-500" },
      { name: "Bachelor of Design", duration: "3 Years", icon: BookOpenIcon, color: "from-pink-500 to-rose-400" },
    ],
    fee: [
      { level: "Undergraduate", price: "AUD 38,000 – 48,000", period: "per year", icon: AcademicCapIcon, bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50" },
      { level: "Postgraduate", price: "AUD 42,000 – 52,000", period: "per year", icon: BuildingLibraryIcon, bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50" },
      { level: "MBA", price: "AUD 85,000+", period: "total program", icon: UserGroupIcon, bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50" },
    ],
    benefit: [
      "Ranked #19 globally in QS World University Rankings",
      "World-leading Quantum Computing research hub",
      "Most preferred university by Australia’s top 100 employers",
      "Over 300 exchange partners worldwide",
      "Strong industry links with global tech giants",
      "State-of-the-art facilities and labs"
    ],
    CampusImg: [
      'https://www.unsw.edu.au/content/dam/images/campus/kensington/001_Kensington_Campus.jpg',
      'https://www.unsw.edu.au/content/dam/images/photos/campus-life/student-life.jpg',
      'https://www.unsw.edu.au/content/dam/images/photos/learning/library.jpg'
    ]
  },
  {
    Slug: 'university-of-sydney',
    name: 'University of Sydney',
    bannerImgh: 'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?q=80&w=2071&auto=format&fit=crop',
    shortDes: 'Australia’s First University • World-renowned Campus & Heritage',
    title: 'Leadership for Good',
    titleImg: 'https://www.sydney.edu.au/content/dam/corporate/images/campus-life/architecture/quadrangle-exterior.jpg',
    des: `Founded in 1850, the University of Sydney is a leading global university. It is consistently ranked in the top 50 universities in the world and is known for its beautiful sandstone architecture and pioneering research.`,
    course: [
      { name: "Bachelor of Economics", duration: "3 Years", icon: BookOpenIcon, color: "from-red-700 to-red-500" },
      { name: "Bachelor of Science", duration: "3 Years", icon: AcademicCapIcon, color: "from-blue-500 to-indigo-500" },
      { name: "Master of Management", duration: "1.5 Years", icon: GlobeAltIcon, color: "from-emerald-500 to-teal-500" },
      { name: "Master of Public Health", duration: "2 Years", icon: BuildingLibraryIcon, color: "from-orange-400 to-yellow-500" },
      { name: "Juris Doctor (Law)", duration: "3 Years", icon: UserGroupIcon, color: "from-slate-700 to-slate-500" },
      { name: "Bachelor of Nursing", duration: "3 Years", icon: BookOpenIcon, color: "from-rose-400 to-pink-500" },
    ],
    fee: [
      { level: "Undergraduate", price: "AUD 40,000 – 52,000", period: "per year", icon: AcademicCapIcon, bgColor: "bg-gradient-to-br from-red-50 to-orange-50" },
      { level: "Postgraduate", price: "AUD 44,000 – 58,000", period: "per year", icon: BuildingLibraryIcon, bgColor: "bg-gradient-to-br from-blue-50 to-slate-50" },
      { level: "MBA", price: "AUD 75,000+", period: "total program", icon: UserGroupIcon, bgColor: "bg-gradient-to-br from-teal-50 to-emerald-50" },
    ],
    benefit: [
      "1st in Australia for Graduate Employability",
      "Member of the prestigious Group of Eight",
      "One of the world's most beautiful campuses",
      "Over 400 areas of study available",
      "Largest library collection in the southern hemisphere",
      "Pioneer in medical and space research"
    ],
    CampusImg: [
      'https://www.sydney.edu.au/content/dam/corporate/images/campus-life/quad-dusk.jpg',
      'https://www.sydney.edu.au/content/dam/corporate/images/students/student-lifestyle.jpg',
      'https://www.sydney.edu.au/content/dam/corporate/images/research/labs/lab-research.jpg'
    ]
  },
  {
    Slug: 'australian-national-university',
    name: 'Australian National University',
    bannerImgh: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1974&auto=format&fit=crop',
    shortDes: 'National University of Australia • Excellence in Research',
    title: 'First Among Equals',
    titleImg: 'https://www.anu.edu.au/sites/default/files/styles/anu_full_width_image/public/ANU_Campus_Aerial.jpg',
    des: `Located in the capital city of Canberra, ANU is a world-leading center for research, education, and policy engagement. It holds a unique position as the only university created by the Parliament of Australia.`,
    course: [
      { name: "Bachelor of International Relations", duration: "3 Years", icon: GlobeAltIcon, color: "from-blue-800 to-blue-600" },
      { name: "Bachelor of Advanced Computing", duration: "4 Years", icon: AcademicCapIcon, color: "from-indigo-600 to-blue-500" },
      { name: "Master of Finance", duration: "2 Years", icon: BookOpenIcon, color: "from-yellow-600 to-amber-500" },
      { name: "Master of Cyber Security", duration: "2 Years", icon: BuildingLibraryIcon, color: "from-gray-800 to-gray-600" },
      { name: "Master of Public Policy", duration: "2 Years", icon: UserGroupIcon, color: "from-emerald-700 to-green-500" },
      { name: "Bachelor of Philosophy", duration: "4 Years", icon: BookOpenIcon, color: "from-purple-700 to-pink-500" },
    ],
    fee: [
      { level: "Undergraduate", price: "AUD 36,000 – 46,000", period: "per year", icon: AcademicCapIcon, bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50" },
      { level: "Postgraduate", price: "AUD 41,000 – 54,000", period: "per year", icon: BuildingLibraryIcon, bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50" },
      { level: "MBA", price: "AUD 82,000+", period: "total program", icon: UserGroupIcon, bgColor: "bg-gradient-to-br from-emerald-50 to-green-50" },
    ],
    benefit: [
      "Consistently ranked #1 in Australia",
      "Highest number of Nobel Laureates among staff/alumni",
      "Low student-to-faculty ratio for personalized learning",
      "Located in the heart of Australia’s political hub",
      "World-class facilities for physical and social sciences",
      "Strong focus on postgraduate research"
    ],
    CampusImg: [
      'https://www.anu.edu.au/sites/default/files/styles/anu_full_width_image/public/ANU_Old_Admin.jpg',
      'https://www.anu.edu.au/sites/default/files/styles/anu_full_width_image/public/ANU_Students_0.jpg',
      'https://www.anu.edu.au/sites/default/files/styles/anu_full_width_image/public/ANU_Library.jpg'
    ]
  },
  {
    Slug: 'monash-university',
    name: 'Monash University',
    bannerImgh: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop',
    shortDes: 'International Presence • Largest University in Australia',
    title: 'I am Still Learning',
    titleImg: 'https://www.monash.edu/__data/assets/image/0009/2544777/clayton-campus.jpg',
    des: `Monash University is a modern, global, research-intensive institution. With campuses across Australia, Malaysia, and Italy, Monash provides a truly international education and is ranked in the top 50 globally.`,
    course: [
      { name: "Bachelor of Pharmacy", duration: "4 Years", icon: AcademicCapIcon, color: "from-blue-600 to-teal-500" },
      { name: "Bachelor of IT", duration: "3 Years", icon: BookOpenIcon, color: "from-indigo-600 to-blue-500" },
      { name: "Master of Data Science", duration: "2 Years", icon: GlobeAltIcon, color: "from-purple-600 to-pink-500" },
      { name: "Master of Banking & Finance", duration: "2 Years", icon: BuildingLibraryIcon, color: "from-emerald-600 to-green-500" },
      { name: "Master of Laws", duration: "1 Year", icon: UserGroupIcon, color: "from-blue-900 to-blue-700" },
      { name: "Bachelor of Education", duration: "4 Years", icon: BookOpenIcon, color: "from-orange-500 to-red-500" },
    ],
    fee: [
      { level: "Undergraduate", price: "AUD 33,000 – 44,000", period: "per year", icon: AcademicCapIcon, bgColor: "bg-gradient-to-br from-blue-50 to-teal-50" },
      { level: "Postgraduate", price: "AUD 38,000 – 50,000", period: "per year", icon: BuildingLibraryIcon, bgColor: "bg-gradient-to-br from-purple-50 to-pink-50" },
      { level: "MBA", price: "AUD 70,000+", period: "total program", icon: UserGroupIcon, bgColor: "bg-gradient-to-br from-emerald-50 to-green-50" },
    ],
    benefit: [
      "Top 2 globally for Pharmacy and Pharmacology",
      "Part of the Group of Eight research-intensive universities",
      "Extensive global network with campuses on 3 continents",
      "Industry-integrated learning and internships",
      "Over 100 research centers and institutes",
      "Largest student body in Australia"
    ],
    CampusImg: [
      'https://www.monash.edu/__data/assets/image/0004/1138981/caulfield-campus.jpg',
      'https://www.monash.edu/__data/assets/image/0005/2399819/learning-teaching-building.jpg',
      'https://www.monash.edu/__data/assets/image/0010/2544778/student-union.jpg'
    ]
  },
  {
    Slug: 'university-of-queensland',
    name: 'University of Queensland',
    bannerImgh: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe1?q=80&w=2070&auto=format&fit=crop',
    shortDes: 'Research Excellence • Beautiful Subtropical Campus',
    title: 'Knowledge through Hard Work',
    titleImg: 'https://www.uq.edu.au/content/dam/uq-news/2021/08/St_Lucia_Campus_Aerial.jpg',
    des: `For more than a century, UQ has educated and worked with outstanding people to deliver knowledge leadership for a better world. UQ is a founding member of the national Group of Eight and is based in Brisbane.`,
    course: [
      { name: "Bachelor of Biomedical Science", duration: "3 Years", icon: AcademicCapIcon, color: "from-purple-600 to-blue-600" },
      { name: "Bachelor of Journalism", duration: "3 Years", icon: BookOpenIcon, color: "from-pink-600 to-rose-500" },
      { name: "Master of Biotechnology", duration: "2 Years", icon: GlobeAltIcon, color: "from-green-600 to-emerald-500" },
      { name: "Master of Engineering Science", duration: "2 Years", icon: BuildingLibraryIcon, color: "from-blue-700 to-indigo-600" },
      { name: "Master of Tourism", duration: "1.5 Years", icon: UserGroupIcon, color: "from-yellow-600 to-orange-500" },
      { name: "Bachelor of Veterinary Science", duration: "5 Years", icon: BookOpenIcon, color: "from-teal-600 to-cyan-500" },
    ],
    fee: [
      { level: "Undergraduate", price: "AUD 34,000 – 45,000", period: "per year", icon: AcademicCapIcon, bgColor: "bg-gradient-to-br from-purple-50 to-blue-50" },
      { level: "Postgraduate", price: "AUD 39,000 – 52,000", period: "per year", icon: BuildingLibraryIcon, bgColor: "bg-gradient-to-br from-green-50 to-emerald-50" },
      { level: "MBA", price: "AUD 88,000+", period: "total program", icon: UserGroupIcon, bgColor: "bg-gradient-to-br from-orange-50 to-yellow-50" },
    ],
    benefit: [
      "Top 50 global ranking for over a decade",
      "Inventor of the Gardasil (Cervical Cancer) vaccine",
      "Stunning sandstone campus at St Lucia",
      "More national teaching awards than any other Australian uni",
      "Over 2,000 research projects currently active",
      "Strong connections with Queensland government and industry"
    ],
    CampusImg: [
      'https://www.uq.edu.au/content/dam/uq-news/2020/05/Great_Court_UQ.jpg',
      'https://www.uq.edu.au/content/dam/uq-news/2019/11/UQ_Library_Aerial.jpg',
      'https://www.uq.edu.au/content/dam/uq-news/2021/01/uq-lakes.jpg'
    ]
  },
  {
    Slug: 'univ-of-western-australia',
    name: 'University of Western Australia',
    bannerImgh: 'https://images.unsplash.com/photo-1525921429624-479b6a29d84c?q=80&w=2070&auto=format&fit=crop',
    shortDes: 'Top Ranked in WA • Research-Intensive Institution',
    title: 'Seek Wisdom',
    titleImg: 'https://www.uwa.edu.au/news/-/media/Project/UWA/UWA/News-Article-Images/2022/Campus-scenic.jpg',
    des: `UWA is a research-intensive university in Perth, Western Australia. Established in 1911, it is known for its high-quality teaching, research facilities, and its beautiful location on the banks of the Swan River.`,
    course: [
      { name: "Bachelor of Marine Science", duration: "3 Years", icon: GlobeAltIcon, color: "from-blue-500 to-cyan-500" },
      { name: "Bachelor of Psychology", duration: "3 Years", icon: AcademicCapIcon, color: "from-indigo-500 to-purple-500" },
      { name: "Master of Professional Engineering", duration: "2 Years", icon: BuildingLibraryIcon, color: "from-slate-700 to-gray-500" },
      { name: "Master of Marketing", duration: "1.5 Years", icon: BookOpenIcon, color: "from-orange-500 to-amber-500" },
      { name: "Master of Physics", duration: "2 Years", icon: AcademicCapIcon, color: "from-blue-800 to-blue-600" },
      { name: "Bachelor of Commerce", duration: "3 Years", icon: UserGroupIcon, color: "from-emerald-600 to-teal-500" },
    ],
    fee: [
      { level: "Undergraduate", price: "AUD 32,000 – 42,000", period: "per year", icon: AcademicCapIcon, bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50" },
      { level: "Postgraduate", price: "AUD 37,000 – 49,000", period: "per year", icon: BuildingLibraryIcon, bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50" },
      { level: "MBA", price: "AUD 78,000+", period: "total program", icon: UserGroupIcon, bgColor: "bg-gradient-to-br from-slate-50 to-gray-50" },
    ],
    benefit: [
      "Ranked in the top 1% of universities worldwide",
      "5-star rating for student-to-staff ratio",
      "Member of the World Wide Universities Network",
      "Leader in Ocean Engineering and Mining",
      "Located in a time zone shared with 60% of the world’s population",
      "Extensive internship programs with global corporations"
    ],
    CampusImg: [
      'https://www.uwa.edu.au/news/-/media/Project/UWA/UWA/News-Article-Images/2023/Winthrop-Hall.jpg',
      'https://www.uwa.edu.au/news/-/media/Project/UWA/UWA/News-Article-Images/2023/Swan-River-Campus.jpg',
      'https://www.uwa.edu.au/news/-/media/Project/UWA/UWA/News-Article-Images/2023/Library.jpg'
    ]
  },
  {
    Slug: 'adelaide-university',
    name: 'University of Adelaide',
    bannerImgh: 'https://images.unsplash.com/photo-1541829070764-84a7d30dee63?q=80&w=2070&auto=format&fit=crop',
    shortDes: 'Research Powerhouse • 5 Nobel Laureates',
    title: 'The Light of the South',
    titleImg: 'https://www.adelaide.edu.au/brand/sites/default/files/styles/ua_image_extra_large/public/2018-09/north-terrace-campus.jpg',
    des: `The University of Adelaide is one of Australia's most prestigious universities and is ranked in the top 100 globally. Established in 1874, it is the third oldest university in Australia and a member of the Group of Eight.`,
    course: [
      { name: "Bachelor of Viticulture", duration: "3 Years", icon: GlobeAltIcon, color: "from-purple-800 to-pink-600" },
      { name: "Bachelor of Health Sciences", duration: "3 Years", icon: AcademicCapIcon, color: "from-blue-600 to-indigo-500" },
      { name: "Master of Clinical Nursing", duration: "2 Years", icon: BuildingLibraryIcon, color: "from-teal-600 to-emerald-500" },
      { name: "Master of Data Science", duration: "2 Years", icon: AcademicCapIcon, color: "from-indigo-700 to-blue-500" },
      { name: "MBA (Emerging Leaders)", duration: "1.5 Years", icon: UserGroupIcon, color: "from-amber-600 to-orange-500" },
      { name: "Bachelor of Music", duration: "3 Years", icon: BookOpenIcon, color: "from-red-600 to-rose-500" },
    ],
    fee: [
      { level: "Undergraduate", price: "AUD 33,000 – 43,000", period: "per year", icon: AcademicCapIcon, bgColor: "bg-gradient-to-br from-purple-50 to-pink-50" },
      { level: "Postgraduate", price: "AUD 38,000 – 51,000", period: "per year", icon: BuildingLibraryIcon, bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50" },
      { level: "MBA", price: "AUD 72,000+", period: "total program", icon: UserGroupIcon, bgColor: "bg-gradient-to-br from-amber-50 to-orange-50" },
    ],
    benefit: [
      "Top 100 globally in QS and THE rankings",
      "Member of the Group of Eight (Go8)",
      "Strong focus on AI and Machine Learning research",
      "World-class agricultural and wine research facilities",
      "Produced 5 Nobel Laureates and 100+ Rhodes Scholars",
      "Connected to a vibrant city-center campus"
    ],
    CampusImg: [
      'https://www.adelaide.edu.au/brand/sites/default/files/styles/ua_image_large/public/2018-10/Bonython_Hall.jpg',
      'https://www.adelaide.edu.au/brand/sites/default/files/styles/ua_image_large/public/2018-10/Hub_Central.jpg',
      'https://www.adelaide.edu.au/brand/sites/default/files/styles/ua_image_large/public/2018-10/Barr_Smith_Library.jpg'
    ]
  },

  // singapore
  {
    Slug: "national-university-of-singapore",
    name: "National University of Singapore (NUS)",
    bannerImgh: "https://images.unsplash.com/photo-1541339907198-e08756ebafe1?q=80&w=2070&auto=format&fit=crop",
    shortDes: "Ranked #8 Globally • Asia's Leading Research University",
    title: "Shaping the Future",
    titleImg: "https://news.nus.edu.sg/wp-content/uploads/2021/07/NUS-Campus.jpg",
    des: `Consistently ranked as Asia's top university, NUS is a world-leading institution centered in Singapore. It offers a global approach to education and research, with a focus on Asian perspectives and expertise. Its transformative education includes multi-disciplinary courses and high-impact research.`,
    course: [
      { name: "B.Sc. in Computer Science", duration: "4 Years", icon: AcademicCapIcon, color: "from-blue-700 to-indigo-600" },
      { name: "Bachelor of Engineering", duration: "4 Years", icon: BuildingLibraryIcon, color: "from-slate-700 to-slate-500" },
      { name: "Master of Data Science", duration: "1.5 Years", icon: GlobeAltIcon, color: "from-teal-600 to-emerald-500" },
      { name: "NUS MBA", duration: "1.5 Years", icon: UserGroupIcon, color: "from-amber-600 to-orange-500" },
      { name: "B.Soc.Sci in Psychology", duration: "4 Years", icon: BookOpenIcon, color: "from-purple-600 to-pink-500" },
    ],
    fee: [
      { level: "Undergraduate", price: "SGD 18,500 – 43,500", period: "per year", icon: AcademicCapIcon, bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50" },
      { level: "Postgraduate", price: "SGD 20,500 – 72,400", period: "per year", icon: BuildingLibraryIcon, bgColor: "bg-gradient-to-br from-teal-50 to-emerald-50" },
      { level: "MBA", price: "SGD 95,000+", period: "total program", icon: UserGroupIcon, bgColor: "bg-gradient-to-br from-amber-50 to-orange-50" },
    ],
    benefit: [
      "Top 10 globally in QS World University Rankings 2026",
      "95% Graduate employment rate within 6 months",
      "Home to 30+ university-level research institutes",
      "Extensive NUS Overseas Colleges (NOC) program",
      "Strong focus on AI and Smart Nation initiatives",
      "Multicultural campus with students from 100+ countries"
    ],
    CampusImg: [
      "https://nus.edu.sg/images/default-source/base/utown.jpg",
      "https://nus.edu.sg/images/default-source/base/campus-life.jpg",
      "https://news.nus.edu.sg/wp-content/uploads/2020/02/Kent-Ridge-Campus.jpg"
    ]
  },
  {
    Slug: "nanyang-technological-university",
    name: "Nanyang Technological University (NTU)",
    bannerImgh: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
    shortDes: "World-class Engineering & Technology • Global Rank #15",
    title: "Innovating for Tomorrow",
    titleImg: "https://www.ntu.edu.sg/images/default-source/ntu/about-ntu/campus-learning-hubs/the-hive.jpg",
    des: `NTU Singapore is a research-intensive public university, often ranked among the best young universities in the world. It is a pioneer in engineering, business, and science, boasting a "Smart Campus" that is a living lab for future technologies.`,
    course: [
      { name: "B.Eng in Aerospace", duration: "4 Years", icon: BuildingLibraryIcon, color: "from-red-600 to-orange-500" },
      { name: "M.Sc. in Analytics", duration: "1 Year", icon: GlobeAltIcon, color: "from-blue-600 to-cyan-500" },
      { name: "Bachelor of Business", duration: "3 Years", icon: UserGroupIcon, color: "from-indigo-600 to-purple-500" },
      { name: "M.Sc. in AI", duration: "1 Year", icon: AcademicCapIcon, color: "from-green-600 to-teal-500" },
    ],
    fee: [
      { level: "Undergraduate", price: "SGD 18,400 – 41,200", period: "per year", icon: AcademicCapIcon, bgColor: "bg-gradient-to-br from-red-50 to-orange-50" },
      { level: "Postgraduate", price: "SGD 19,500 – 63,200", period: "per year", icon: BuildingLibraryIcon, bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50" },
    ],
    benefit: [
      "Ranked #15 globally (QS World Rankings)",
      "Voted one of the world's most beautiful campuses",
      "Global leader in Sustainability and Green Tech",
      "Strong industry partnerships with Rolls-Royce, HP, and Alibaba",
      "High emphasis on experiential learning through the 'Hive' hub",
      "94% overall graduate placement rate"
    ],
    CampusImg: [
      "https://www.ntu.edu.sg/images/default-source/ntu/news/campus-scenery.jpg",
      "https://www.ntu.edu.sg/images/default-source/ntu/about-ntu/the-hive-aerial.jpg"
    ]
  },
  {
    Slug: "singapore-management-university",
    name: "Singapore Management University (SMU)",
    bannerImgh: "https://images.unsplash.com/photo-1560523160-754a9e25c68f?q=80&w=2036&auto=format&fit=crop",
    shortDes: "Premier Business & Management Education • City Campus",
    title: "The City University",
    titleImg: "https://www.smu.edu.sg/sites/default/files/campus-life/smu.jpg",
    des: `SMU is Singapore’s premier university for business and management. Located in the heart of the downtown district, it provides a seminar-style learning environment and is globally recognized for its professional services and social sciences education.`,
    course: [
      { name: "Bachelor of Business Mgmt", duration: "4 Years", icon: UserGroupIcon, color: "from-blue-800 to-indigo-700" },
      { name: "M.Sc. in Management", duration: "1 Year", icon: BookOpenIcon, color: "from-yellow-600 to-amber-500" },
      { name: "SMU MBA", duration: "15 Months", icon: AcademicCapIcon, color: "from-slate-800 to-slate-600" },
      { name: "Juris Doctor (Law)", duration: "3 Years", icon: BuildingLibraryIcon, color: "from-red-700 to-rose-600" },
    ],
    fee: [
      { level: "Undergraduate", price: "SGD 25,800 – 49,100", period: "per year", icon: AcademicCapIcon, bgColor: "bg-gradient-to-br from-blue-50 to-slate-50" },
      { level: "Postgraduate", price: "SGD 34,200 – 59,800", period: "per year", icon: BuildingLibraryIcon, bgColor: "bg-gradient-to-br from-yellow-50 to-amber-50" },
    ],
    benefit: [
      "Interactive seminar-style teaching in small classes",
      "Strategic city-center location near business hubs",
      "93% of graduates employed within 6 months",
      "Top-tier Business School (Triple Accredited)",
      "Mandatory global exposure for all undergraduate students",
      "Pioneer in 'SMU-X' experiential learning projects"
    ],
    CampusImg: [
      "https://www.smu.edu.sg/sites/default/files/styles/extra_large/public/about/campus.jpg",
      "https://www.smu.edu.sg/sites/default/files/campus-life/student-life.jpg"
    ]
  },
  {
    Slug: "sim-global-education",
    name: "SIM Global Education (SIM GE)",
    bannerImgh: "https://images.unsplash.com/photo-1541829070764-84a7d30dee63?q=80&w=2070&auto=format&fit=crop",
    shortDes: "Global Partnerships • Fast-track International Degrees",
    title: "Your Gateway to a Global Degree",
    titleImg: "https://www.simge.edu.sg/wp-content/uploads/2019/10/sim-campus-aerial.jpg",
    des: `SIM GE is a leading private education institution in Singapore, partnering with top universities from the UK, USA, and Australia. It offers a wide range of academic programs, from diplomas to doctoral degrees, aimed at industry relevance.`,
    course: [
      { name: "Bachelor of Business (RMIT)", duration: "3 Years", icon: UserGroupIcon, color: "from-blue-600 to-cyan-500" },
      { name: "B.Sc. Computing (UOL)", duration: "3 Years", icon: AcademicCapIcon, color: "from-emerald-600 to-teal-500" },
      { name: "M.Sc. in Digital Marketing", duration: "1 Year", icon: GlobeAltIcon, color: "from-pink-600 to-rose-500" },
    ],
    fee: [
      { level: "Degree Programs", price: "SGD 20,000 – 35,000", period: "total program", icon: AcademicCapIcon, bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50" },
      { level: "Postgraduate", price: "SGD 25,000 – 40,000", period: "total program", icon: BuildingLibraryIcon, bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50" },
    ],
    benefit: [
      "Degrees from globally top-ranked partners (UOL, RMIT, Buffalo)",
      "High Graduate Employability in the private sector",
      "Access to 80+ student clubs and high-end fitness facilities",
      "Flexible intake periods throughout the year",
      "Vibrant campus life with a mix of international students",
      "Career services and global alumni network"
    ],
    CampusImg: [
      "https://www.simge.edu.sg/wp-content/uploads/2019/10/sim-campus.jpg",
      "https://www.simge.edu.sg/wp-content/uploads/2019/10/sim-facilities.jpg"
    ]
  },
  {
    Slug: "psb-academy",
    name: "PSB Academy",
    bannerImgh: "https://images.unsplash.com/photo-1525921429624-479b6a29d84c?q=80&w=2070&auto=format&fit=crop",
    shortDes: "The Future Academy • Tech & Innovation Focus",
    title: "Empowering Futures",
    titleImg: "https://www.aecoverseas.com/wp-content/uploads/2023/09/PSB-2.jpg",
    des: `Known as "The Future Academy," PSB Academy provides a vibrant learning environment with a focus on future-ready skills. It partners with universities from Australia and the UK to deliver career-aligned degrees in business, STEM, and health.`,
    course: [
      { name: "Bachelor of IT (Newcastle)", duration: "2 Years", icon: AcademicCapIcon, color: "from-indigo-700 to-blue-600" },
      { name: "Bachelor of Business", duration: "2.5 Years", icon: UserGroupIcon, color: "from-teal-600 to-emerald-500" },
      { name: "M.Sc. in Cyber Security", duration: "1 Year", icon: BuildingLibraryIcon, color: "from-gray-800 to-gray-600" },
    ],
    fee: [
      { level: "Undergraduate", price: "SGD 22,000 – 32,000", period: "per year", icon: AcademicCapIcon, bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50" },
      { level: "Postgraduate", price: "SGD 24,000 – 38,000", period: "per year", icon: BuildingLibraryIcon, bgColor: "bg-gradient-to-br from-gray-50 to-slate-50" },
    ],
    benefit: [
      "State-of-the-art City Campus at Marina Bay",
      "Strong focus on STEM and Life Sciences",
      "Certified trainers with real-world industry experience",
      "Fast-track degree completion options",
      "Regular networking events with industry professionals",
      "86% Graduate employment rate"
    ],
    CampusImg: [
      "https://www.psb-academy.edu.sg/sites/default/files/city-campus-1.jpg",
      "https://www.psb-academy.edu.sg/sites/default/files/stem-campus.jpg"
    ]
  },

  //Canada
{
    Slug: "university-of-toronto",
    name: "University of Toronto",
    bannerImgh: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=2070&auto=format&fit=crop",
    shortDes: "Ranked #1 in Canada • Global Leader in Research & Innovation",
    title: "Velut Arbor Aevo",
    titleImg: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    des: `Founded in 1827, U of T is Canada's leading institution of learning, discovery, and knowledge creation. It is one of the world’s top research-intensive universities, driven to invent and innovate.`,
    course: [
      { name: "B.Sc. in Computer Science", duration: "4 Years", icon: AcademicCapIcon, color: "from-blue-700 to-indigo-600" },
      { name: "Bachelor of Commerce (Rotman)", duration: "4 Years", icon: UserGroupIcon, color: "from-amber-600 to-orange-500" },
      { name: "Master of Applied Science", duration: "2 Years", icon: BuildingLibraryIcon, color: "from-slate-700 to-slate-500" },
      { name: "Full-time MBA", duration: "2 Years", icon: AcademicCapIcon, color: "from-indigo-600 to-blue-500" },
    ],
    fee: [
      { level: "Undergraduate", price: "CAD 45,000 – 60,000", period: "per year", icon: AcademicCapIcon, bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50" },
      { level: "Postgraduate", price: "CAD 35,000 – 55,000", period: "per year", icon: BuildingLibraryIcon, bgColor: "bg-gradient-to-br from-teal-50 to-emerald-50" },
    ],
    benefit: [
      "Consistently ranked #1 in Canada",
      "World-renowned faculty and research output",
      "Unrivaled campus facilities in downtown Toronto",
      "Extensive alumni network of over 600,000 global leaders",
      "Pioneer in Artificial Intelligence and Medical Research"
    ],
    CampusImg: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541339907198-e08756ebafe1?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    Slug: "mcgill-university",
    name: "McGill University",
    bannerImgh: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=2070&auto=format&fit=crop",
    shortDes: "Canada’s Most International University • Located in Montreal",
    title: "Grandescunt Aucta Labore",
    titleImg: "https://images.macleans.ca/wp-content/uploads/2019/10/McGill-University-Ranking-Tuition-Profile-Macleans.jpg",
    des: `McGill University is one of Canada's best-known institutions of higher learning and one of the leading universities in the world. With students coming to McGill from over 150 countries, its student body is the most internationally diverse of any research-intensive university in the country.`,
    course: [
      { name: "Bachelor of Engineering", duration: "4 Years", icon: BuildingLibraryIcon, color: "from-red-700 to-rose-600" },
      { name: "B.Sc. in Biomedical Science", duration: "3-4 Years", icon: AcademicCapIcon, color: "from-blue-600 to-cyan-500" },
      { name: "Master of Management", duration: "1 Year", icon: UserGroupIcon, color: "from-indigo-800 to-purple-600" },
    ],
    fee: [
      { level: "Undergraduate", price: "CAD 30,000 – 52,000", period: "per year", icon: AcademicCapIcon, bgColor: "bg-gradient-to-br from-red-50 to-rose-50" },
      { level: "Postgraduate", price: "CAD 25,000 – 48,000", period: "per year", icon: BuildingLibraryIcon, bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50" },
    ],
    benefit: [
      "Ranked #30 globally (QS World Rankings)",
      "Highest average entering grades of any Canadian university",
      "Located in Montreal, the world's best student city",
      "Produced 12 Nobel Laureates and 147 Rhodes Scholars",
      "Strong reputation for Medicine and Law"
    ],
    CampusImg: [
      "https://www.mcgill.ca/about/files/about/mcgill_campus_summer.jpg"
    ]
  },
  {
    Slug: "university-of-british-columbia",
    name: "University of British Columbia",
    bannerImgh: "https://wallpapercave.com/wp/wp10285650.jpg",
    shortDes: "Global Center for Research • Breathtaking Vancouver Campus",
    title: "Tuum Est",
    titleImg: "https://images.unsplash.com/photo-1525921429624-479b6a29d84c?q=80&w=2070&auto=format&fit=crop",
    des: `The University of British Columbia is a global center for research and teaching, consistently ranked among the top 20 public universities in the world. UBC embraces innovation and transforms ideas into action.`,
    course: [
      { name: "Bachelor of Applied Science", duration: "4 Years", icon: BuildingLibraryIcon, color: "from-blue-800 to-indigo-700" },
      { name: "B.Sc. in Forestry", duration: "4 Years", icon: GlobeAltIcon, color: "from-emerald-600 to-teal-500" },
      { name: "Master of Data Science", duration: "10 Months", icon: AcademicCapIcon, color: "from-purple-600 to-pink-500" },
    ],
    fee: [
      { level: "Undergraduate", price: "CAD 40,000 – 55,000", period: "per year", icon: AcademicCapIcon, bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50" },
      { level: "Postgraduate", price: "CAD 28,000 – 50,000", period: "per year", icon: BuildingLibraryIcon, bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50" },
    ],
    benefit: [
      "Breathtaking campus overlooking the Pacific Ocean",
      "Top 3 in Canada for research impact",
      "North America’s most international university campus",
      "Leader in Climate Action and Sustainability research",
      "Extensive Co-op programs with global tech firms"
    ],
    CampusImg: [
      "https://visit.ubc.ca/wp-content/uploads/2019/04/UBC-Vancouver-Campus.jpg"
    ]
  },
  {
    Slug: "university-of-waterloo",
    name: "University of Waterloo",
    bannerImgh: "https://uwaterloo.ca/support/sites/default/files/uploads/images/c007222_main_entrance-1680x1050-wallpaper.jpg",
    shortDes: "World Leader in Co-op Education • Hub for Tech & Innovation",
    title: "Concordia Cum Veritate",
    titleImg: "https://uwaterloo.ca/about/sites/default/files/uploads/images/m3_building.jpg",
    des: `Waterloo is a world-leading hub of innovation, combining academic excellence with one of the world's largest post-secondary co-operative education programs. It is a catalyst for technology and entrepreneurship.`,
    course: [
      { name: "B.Math in Computer Science", duration: "4-5 Years", icon: AcademicCapIcon, color: "from-yellow-600 to-amber-500" },
      { name: "Bachelor of Engineering (Co-op)", duration: "5 Years", icon: BuildingLibraryIcon, color: "from-slate-700 to-gray-500" },
      { name: "M.Math in Quantum Information", duration: "2 Years", icon: GlobeAltIcon, color: "from-blue-600 to-cyan-500" },
    ],
    fee: [
      { level: "Undergraduate", price: "CAD 42,000 – 63,000", period: "per year", icon: AcademicCapIcon, bgColor: "bg-gradient-to-br from-yellow-50 to-amber-50" },
      { level: "Postgraduate", price: "CAD 22,000 – 45,000", period: "per year", icon: BuildingLibraryIcon, bgColor: "bg-gradient-to-br from-blue-50 to-slate-50" },
    ],
    benefit: [
      "World's largest Co-op program (work-integrated learning)",
      "Ranked #1 in Canada for Experiential Learning",
      "Primary talent source for Silicon Valley tech companies",
      "Pioneer in Quantum Computing and Cybersecurity",
      "Creator-owned Intellectual Property policy"
    ],
    CampusImg: [
      "https://uwaterloo.ca/about/sites/default/files/uploads/images/waterloo-campus-aerial.jpg"
    ]
  },
  {
    Slug: "mcmaster-university",
    name: "McMaster University",
    bannerImgh: "https://www.igniteastar.com/wp-content/uploads/2023/09/20180706-152629-McMaster-University-Campus-0004-1-1.jpg",
    shortDes: "Research-Intensive Medical-Doctoral University",
    title: "The Home of Problem-Based Learning",
    titleImg: "https://discover.mcmaster.ca/app/uploads/2019/06/McMaster-Campus.jpg",
    des: `McMaster University is a medical-doctoral, research-intensive public university in Hamilton, Ontario. It is best known for its world-class medical school and for pioneering the 'problem-based learning' curriculum now used worldwide.`,
    course: [
      { name: "B.Sc. in Health Sciences", duration: "4 Years", icon: AcademicCapIcon, color: "from-maroon-700 to-red-600" },
      { name: "Bachelor of Engineering", duration: "4 Years", icon: BuildingLibraryIcon, color: "from-gray-700 to-slate-600" },
      { name: "MBA (DeGroote)", duration: "20 Months", icon: UserGroupIcon, color: "from-red-600 to-orange-500" },
    ],
    fee: [
      { level: "Undergraduate", price: "CAD 35,000 – 48,000", period: "per year", icon: AcademicCapIcon, bgColor: "bg-gradient-to-br from-red-50 to-maroon-50" },
      { level: "Postgraduate", price: "CAD 20,000 – 40,000", period: "per year", icon: BuildingLibraryIcon, bgColor: "bg-gradient-to-br from-gray-50 to-slate-50" },
    ],
    benefit: [
      "Consistently ranked among the world's top 100 universities",
      "Home to Canada's most research-intensive faculty",
      "Inventor of the Problem-Based Learning (PBL) model",
      "World-renowned Nuclear Reactor for medical research",
      "Strong focus on Interdisciplinary Health Sciences"
    ],
    CampusImg: [
      "https://mcmaster.ca/about/images/campus-at-dusk.jpg"
    ]
  },
  {
    Slug: "university-of-alberta",
    name: "University of Alberta",
    bannerImgh: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop",
    shortDes: "Top Research Institution • Leader in Artificial Intelligence",
    title: "Quaecumque Vera",
    titleImg: "https://www.ualberta.ca/about/media-library/campus-images/quad-at-night.jpg",
    des: `The University of Alberta in Edmonton is one of Canada's top teaching and research universities, with an international reputation for excellence across the humanities, sciences, creative arts, business, and engineering.`,
    course: [
      { name: "B.Sc. in Computing Science", duration: "4 Years", icon: AcademicCapIcon, color: "from-green-700 to-teal-600" },
      { name: "Bachelor of Commerce", duration: "4 Years", icon: UserGroupIcon, color: "from-yellow-600 to-amber-500" },
      { name: "Master of Engineering", duration: "2 Years", icon: BuildingLibraryIcon, color: "from-blue-700 to-indigo-600" },
    ],
    fee: [
      { level: "Undergraduate", price: "CAD 28,000 – 40,000", period: "per year", icon: AcademicCapIcon, bgColor: "bg-gradient-to-br from-green-50 to-teal-50" },
      { level: "Postgraduate", price: "CAD 15,000 – 35,000", period: "per year", icon: BuildingLibraryIcon, bgColor: "bg-gradient-to-br from-yellow-50 to-amber-50" },
    ],
    benefit: [
      "Top 5 university in Canada",
      "World leader in Artificial Intelligence and Machine Learning",
      "Home to Nobel Laureate Michael Houghton",
      "Extensive scholarship programs for international students",
      "Strong connection to Canada's energy and tech sectors"
    ],
    CampusImg: [
      "https://www.ualberta.ca/about/media-library/campus-images/aerial-campus.jpg"
    ]
  },
  {
    Slug: "universite-de-montreal",
    name: "Université de Montréal",
    bannerImgh: "https://cms.macleans.ca/wp-content/uploads/2019/04/Montreal-University-Ranking-Tuition-Profile-Macleans.jpg",
    shortDes: "Leading French-Language Research University",
    title: "Fide Splendet et Scientia",
    titleImg: "https://www.umontreal.ca/public/images/recherche/campus-udem.jpg",
    des: `Université de Montréal is one of the world's leading French-language universities. Along with its affiliated schools, HEC Montréal and Polytechnique Montréal, it is the leading hub of higher education in Quebec.`,
    course: [
      { name: "B.Sc. in Cybersecurity", duration: "3 Years", icon: AcademicCapIcon, color: "from-blue-900 to-indigo-800" },
      { name: "Master in AI (MILA)", duration: "1.5 Years", icon: GlobeAltIcon, color: "from-purple-700 to-pink-600" },
      { name: "Master of Management (HEC)", duration: "1 Year", icon: UserGroupIcon, color: "from-orange-600 to-red-500" },
    ],
    fee: [
      { level: "Undergraduate", price: "CAD 25,000 – 35,000", period: "per year", icon: AcademicCapIcon, bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50" },
      { level: "Postgraduate", price: "CAD 20,000 – 32,000", period: "per year", icon: BuildingLibraryIcon, bgColor: "bg-gradient-to-br from-purple-50 to-pink-50" },
    ],
    benefit: [
      "World's leading French-language research institution",
      "MILA – Home to some of the world's best AI research labs",
      "Affiliated with top business school HEC Montréal",
      "Diverse and vibrant multicultural environment",
      "Lower cost of living compared to Toronto or Vancouver"
    ],
    CampusImg: [
      "https://static.udem.ca/images/campus-mont-royal.jpg"
    ]
  },
  {
    Slug: "western-university",
    name: "Western University",
    bannerImgh: "https://brand.westernu.ca/assets/img/assets/wallpaper/uc-tower-summer.png",
    shortDes: "Ranked #1 for Student Experience in Canada",
    title: "Veritas et Utilitas",
    titleImg: "https://www.westernu.ca/about/images/campus_scenery.jpg",
    des: `Western University is a research-intensive university founded in 1878. It offers more than 400 specializations, majors, and minors. Western is known for its high student satisfaction and beautiful gothic-style architecture.`,
    course: [
      { name: "HBA Business (Ivey)", duration: "2 Years", icon: UserGroupIcon, color: "from-purple-900 to-indigo-900" },
      { name: "Bachelor of Engineering Science", duration: "4 Years", icon: BuildingLibraryIcon, color: "from-blue-600 to-cyan-500" },
      { name: "Master of Data Analytics", duration: "1 Year", icon: AcademicCapIcon, color: "from-emerald-600 to-teal-500" },
    ],
    fee: [
      { level: "Undergraduate", price: "CAD 38,000 – 50,000", period: "per year", icon: AcademicCapIcon, bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50" },
      { level: "Postgraduate", price: "CAD 22,000 – 45,000", period: "per year", icon: BuildingLibraryIcon, bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50" },
    ],
    benefit: [
      "Home to the world-renowned Ivey Business School",
      "Consistently ranked #1 for student satisfaction in Canada",
      "Stunning residential campus with historic architecture",
      "Strong leadership development and internship programs",
      "Global leader in Wind Engineering and Brain Research"
    ],
    CampusImg: [
      "https://brand.westernu.ca/assets/img/campus-scenic.jpg"
    ]
  }
];