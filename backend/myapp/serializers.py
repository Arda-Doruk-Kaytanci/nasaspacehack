from rest_framework import serializers
from .models import (
    StarCategory,
    StarItems,
    PlanetCategory,
    PlanetItems,
    SelectedItem,
    SystemCategory,
    SystemModel,
)


class PlanetCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PlanetCategory
        fields = ["title", "id"]


class StarCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = StarCategory
        fields = ["title", "id"]


class SystemCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemCategory
        fields = ["title", "id"]


class SystemSerializer(serializers.ModelSerializer):
    category_id = serializers.IntegerField(write_only=True)
    category = SystemCategorySerializer(read_only=True)

    class Meta:
        model = PlanetItems
        fields = ["name", "category", "id", "category_id", "image", "summary", "url"]


class StarSerializer(serializers.ModelSerializer):
    category_id = serializers.IntegerField(write_only=True)
    category = StarCategorySerializer(read_only=True)
    starsystem = SystemSerializer(read_only=True)

    class Meta:
        model = StarItems
        fields = [
            "name",
            "image",
            "category",
            "id",
            "category_id",
            "starsystem",
            "summary",
            "url",
        ]


class PlanetSerializer(serializers.ModelSerializer):
    category_id = serializers.IntegerField(write_only=True)
    category = PlanetCategorySerializer(read_only=True)
    star = StarSerializer(read_only=True)

    class Meta:
        model = PlanetItems
        fields = [
            "name",
            "image",
            "category",
            "id",
            "category_id",
            "star",
            "summary",
            "url",
        ]


class SelectedItemSerializer(serializers.ModelSerializer):
    planet = PlanetSerializer(read_only=True)

    class Meta:
        model = SelectedItem
        fields = ["planet", "id"]
