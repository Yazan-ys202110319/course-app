export const users = [
    {
      "id": 1,
      "name": "Yazan",
      "completedCourses": [
        {
          "id": "CMPS151",
          "grade": "90"
        },
        {
          "id": "CMPS251",
          "grade": "75"
        }
      ],
      "email": "yazan@qu.edu.qa",
      "password": "yazan123",
      "role": "student"
    },
    {
        "id": 2,
        "name": "Faisal",
        "completedCourses": [
          {
            "id": "CMPS151",
            "grade": "92"
          },
          {
            "id": "CMPS251",
            "grade": "84"
          },
          {
            "id": "CMPS303",
            "grade": "87"
          }
        ],
        "email": "faisal@qu.edu.qa",
        "password": "faisal123",
        "role": "student"
      },
    {
      "id": 3,
      "name": " Prof. Mahmoud",
      "areasOfExpertise": ["Web Development", "Cybersecurity"],
      "email": "barhamgi@qu.edu.qa",
      "password": "barhamgi123",
      "role": "instructor"
    },
    {
      "id": 5,
      "name": "Prof. Rehab",
      "areasOfExpertise": ["Artificial Intelligence", "Software Engineering"],
      "email": "Rehab@qu.edu.qa",
      "password": "Rehab123",
      "role": "instructor"
    },
    {
      "id": 6,
      "email": "admin@qu.edu.qa",
      "password": "admin123",
      "role": "admin",
      "responsibilities": ["Create Courses", "Approve Courses", "Manage Class Schedules"]
    }
];
