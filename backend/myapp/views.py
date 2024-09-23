from rest_framework.pagination import PageNumberPagination
from rest_framework import generics, filters
from .models import (
    PlanetItems,
    StarItems,
    PlanetCategory,
    StarCategory,
    SystemCategory,
    SystemModel,
    SelectedItem,
)
from .serializers import (
    PlanetSerializer,
    StarSerializer,
    PlanetCategorySerializer,
    StarCategorySerializer,
    SystemCategorySerializer,
    SystemSerializer,
    SelectedItemSerializer,
)


class TenPerPagePagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = "page_size"
    max_page_size = 10


class PlanetsView(generics.ListAPIView):
    queryset = PlanetItems.objects.all()
    serializer_class = PlanetSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["name"]
    pagination_class = TenPerPagePagination


class PlanetSingleItem(generics.RetrieveAPIView):
    queryset = PlanetItems.objects.all()
    serializer_class = PlanetSerializer
    pagination_class = TenPerPagePagination


class PlanetCategoryView(generics.ListAPIView):
    queryset = PlanetCategory.objects.all()
    serializer_class = PlanetCategorySerializer
    pagination_class = TenPerPagePagination
    filter_backends = [filters.SearchFilter]
    search_fields = ["title"]


class StarsView(generics.ListAPIView):
    queryset = StarItems.objects.all()
    serializer_class = StarSerializer
    pagination_class = TenPerPagePagination
    filter_backends = [filters.SearchFilter]
    search_fields = ["name"]


class StarSingleItem(generics.RetrieveAPIView):
    queryset = StarItems.objects.all()
    serializer_class = StarSerializer
    pagination_class = TenPerPagePagination


class StarCategoryView(generics.ListAPIView):
    queryset = StarCategory.objects.all()
    serializer_class = StarCategorySerializer
    pagination_class = TenPerPagePagination
    filter_backends = [filters.SearchFilter]
    search_fields = ["title"]


class SystemCategoryView(generics.ListAPIView):
    queryset = SystemCategory.objects.all()
    serializer_class = SystemCategorySerializer
    pagination_class = TenPerPagePagination
    search_fields = ["title"]


class SystemView(generics.ListAPIView):
    queryset = SystemModel.objects.all()
    serializer_class = SystemSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["name"]
    pagination_class = TenPerPagePagination


class PlanetSingleItem(generics.RetrieveAPIView):
    queryset = SystemModel.objects.all()
    serializer_class = SystemSerializer


class SelectedItemView(generics.ListAPIView):
    queryset = SelectedItem.objects.all()
    serializer_class = SelectedItemSerializer
