from rest_framework.renderers import JSONRenderer
from rest_framework.pagination import PageNumberPagination
from rest_framework import generics
from .models import PlanetItems, StarItems, PlanetCategory, StarCategory
from .serializers import (
    PlanetSerializer,
    StarSerializer,
    PlanetCategorySerializer,
    StarCategorySerializer,
)


class TenPerPagePagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = "page_size"
    max_page_size = 10


# Planets views
class PlanetsView(generics.ListAPIView):
    queryset = PlanetItems.objects.all()
    serializer_class = PlanetSerializer
    search_fields = ["name"]
    pagination_class = TenPerPagePagination
    renderer_classes = [JSONRenderer]  # Enforce JSON response


class PlanetSingleItem(generics.RetrieveAPIView):
    queryset = PlanetItems.objects.all()
    serializer_class = PlanetSerializer
    pagination_class = TenPerPagePagination
    renderer_classes = [JSONRenderer]  # Enforce JSON response


class PlanetCategoryView(generics.ListAPIView):
    queryset = PlanetCategory.objects.all()
    serializer_class = PlanetCategorySerializer
    pagination_class = TenPerPagePagination
    renderer_classes = [JSONRenderer]  # Enforce JSON response


# Stars views
class StarsView(generics.ListAPIView):
    queryset = StarItems.objects.all()
    serializer_class = StarSerializer
    search_fields = ["name"]
    pagination_class = TenPerPagePagination
    renderer_classes = [JSONRenderer]  # Enforce JSON response


class StarSingleItem(generics.RetrieveAPIView):
    queryset = StarItems.objects.all()
    serializer_class = StarSerializer
    pagination_class = TenPerPagePagination
    renderer_classes = [JSONRenderer]  # Enforce JSON response


class StarCategoryView(generics.ListAPIView):
    queryset = StarCategory.objects.all()
    serializer_class = StarCategorySerializer
    pagination_class = TenPerPagePagination
    renderer_classes = [JSONRenderer]  # Enforce JSON response
