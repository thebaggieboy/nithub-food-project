def transform_data(data):
    transformed = []
    for category, subcategories in data[0].items():
        for subcategory, details in subcategories.items():
            transformed.append({
                "category": category,
                "subcategory": subcategory,
                "id": details["id"],
                "quantity": details["quantity"]
            })
    return transformed

# Transform the data
transformed_data = transform_data(data)

# Print the transformed data
print(json.dumps(transformed_data, indent=2))