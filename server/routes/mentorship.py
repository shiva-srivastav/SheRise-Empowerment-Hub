from flask import Blueprint, jsonify

mentorship_blueprint = Blueprint('mentorship', __name__)

# Demo mentor data (exported for use in API and frontend)
demo_mentors = [
    {
        "id": 1, 
        "name": "Rita Sharma", 
        "expertise": "Finance & Marketing", 
        "bio": "Experienced entrepreneur with 15+ years in financial services. Specializes in helping women entrepreneurs secure funding.",
        "sessions": ["Financial Planning", "Investor Pitches"]
    },
    {
        "id": 2, 
        "name": "Anita Singh", 
        "expertise": "Tech & Innovation", 
        "bio": "Tech entrepreneur who built a successful e-commerce platform. Passionate about innovation and digital transformation.",
        "sessions": ["Digital Strategy", "Product Development"]
    },
    {
        "id": 3, 
        "name": "Sushma Gupta", 
        "expertise": "Operations", 
        "bio": "Operations expert with years of industry experience managing supply chains for major consumer brands.",
        "sessions": ["Supply Chain Management", "Scaling Operations"]
    },
    {
        "id": 4, 
        "name": "Lakshmi Venkatesh", 
        "expertise": "Marketing & Branding", 
        "bio": "Former marketing director with expertise in building brands for small businesses with limited budgets.",
        "sessions": ["Brand Building", "Digital Marketing"]
    },
    {
        "id": 5, 
        "name": "Dr. Kavita Patel", 
        "expertise": "Healthcare Entrepreneurship", 
        "bio": "Physician and entrepreneur who founded a chain of women's health clinics across three states.",
        "sessions": ["Healthcare Ventures", "Service Business Models"]
    }
]

@mentorship_blueprint.route('/mentors', methods=['GET'])
def get_mentors():
    return jsonify(demo_mentors)