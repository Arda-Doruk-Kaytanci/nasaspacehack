from django.contrib import admin
from .models import StarCategory, StarItems, PlanetCategory, PlanetItems

admin.site.register(StarCategory)
admin.site.register(StarItems)
admin.site.register(PlanetCategory)
admin.site.register(PlanetItems)
