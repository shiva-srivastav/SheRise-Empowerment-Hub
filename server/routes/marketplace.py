from flask import Blueprint, jsonify

marketplace_blueprint = Blueprint('marketplace', __name__)

# Demo product data (exported for use in API and frontend)
demo_products = [
    {"id": 1, "name": "Handmade Jewelry", "description": "Unique handmade jewelry crafted by women artisans.", "price": 1500, "seller": "Meena's Craft Collective"},
    {"id": 2, "name": "Organic Skincare", "description": "Natural skincare products made with traditional herbal ingredients.", "price": 800, "seller": "Priya Organics"},
    {"id": 3, "name": "Artisan Textiles", "description": "Eco-friendly textiles using traditional weaving techniques.", "price": 1200, "seller": "Village Weavers Co-op"},
    {"id": 4, "name": "Homemade Pickles", "description": "Traditional family recipes for authentic Indian pickles.", "price": 350, "seller": "Anita's Kitchen"},
    {"id": 5, "name": "Hand-embroidered Bags", "description": "Contemporary bags with traditional embroidery work.", "price": 950, "seller": "Craft Connections"},
    {"id": 6, "name": "Clay Pottery", "description": "Eco-friendly kitchen and home items made from local clay.", "price": 600, "seller": "Earth Works Collective"}
]

@marketplace_blueprint.route('/products', methods=['GET'])
def get_products():
    return jsonify(demo_products)