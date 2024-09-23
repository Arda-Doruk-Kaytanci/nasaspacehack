from django.contrib import admin
from .models import StarCategory, StarItems, PlanetCategory, PlanetItems, SelectedItem, SystemCategory, SystemModel

admin.site.register(StarCategory)
admin.site.register(StarItems)
admin.site.register(PlanetCategory)
admin.site.register(PlanetItems)
admin.site.register(SelectedItem)
admin.site.register(SystemModel)
admin.site.register(SystemCategory)
