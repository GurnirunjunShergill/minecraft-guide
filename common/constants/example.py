import json

def dict_to_list(input_path: str, output_path: str):
    # Load the JSON file
    with open(input_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    # Convert {key: value, ...} → [value, ...]
    if isinstance(data, dict):
        data_list = list(data.values())
    else:
        raise ValueError("Input JSON is not an object at the top level")

    # Save as a list
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(data_list, f, indent=2, ensure_ascii=False)

    print(f"Converted JSON object to list and saved at {output_path}")


# Example usage:
dict_to_list(
    r"C:\Users\Gurnirunjun Shergill\OneDrive\Documents\projects\minecraft-guide\common\constants\items.json",
    r"C:\Users\Gurnirunjun Shergill\OneDrive\Documents\projects\minecraft-guide\common\constants\items_list.json"
)

