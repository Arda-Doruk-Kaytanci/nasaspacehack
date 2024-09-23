from rest_framework import serializers
from .models import StarCategory, StarItems, PlanetCategory, PlanetItems, SelectedItem


class PlanetCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PlanetCategory
        fields = ["title", "id"]


class PlanetSerializer(serializers.ModelSerializer):
    category_id = serializers.IntegerField(write_only=True)
    category = PlanetCategorySerializer(read_only=True)

    class Meta:
        model = PlanetItems
        fields = [
            "name",
            "image",
            "category",
            "id",
            "category_id",
            "star",
        ]


class StarCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = StarCategory
        fields = ["title", "id"]


class StarSerializer(serializers.ModelSerializer):
    category_id = serializers.IntegerField(write_only=True)
    category = StarCategorySerializer(read_only=True)

    class Meta:
        model = StarItems
        fields = [
            "name",
            "image",
            "category",
            "id",
            "category_id",
        ]


class SelectedItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = SelectedItem
        fields = ["title", "id"]
