from django.urls import path
from .views import (
    PlanetsView,
    PlanetSingleItem,
    PlanetCategoryView,
    StarsView,
    StarSingleItem,
    StarCategoryView,
    SelectedItemView,
)

urlpatterns = [
    path("planets/", PlanetsView.as_view()),
    path(
        "planets/<int:pk>/",
        PlanetSingleItem.as_view(),
    ),
    path(
        "systems/",
        PlanetsView.as_view(),
    ),
    path(
        "systems/<int:pk>/",
        PlanetSingleItem.as_view(),
    ),
    path(
        "selected-item/",
        SelectedItemView.as_view(),
    ),
    path(
        "planet-categories/",
        PlanetCategoryView.as_view(),
    ),
    path(
        "stars/",
        StarsView.as_view(),
    ),
    path(
        "stars/<int:pk>/",
        StarSingleItem.as_view(),
    ),
    path(
        "star-categories/",
        StarCategoryView.as_view(),
    ),
]
