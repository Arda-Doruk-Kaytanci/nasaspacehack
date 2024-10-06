from django.contrib import admin
from .models import (
    StarCategory,
    StarItems,
    PlanetCategory,
    PlanetItems,
    SelectedItem,
    SystemCategory,
    UrlModel,
    SystemModel,
)


class PlanetItemsAdmin(admin.ModelAdmin):
    def __init__(self, model, admin_site):
        self.list_display = [field.name for field in model._meta.fields]
        super(PlanetItemsAdmin, self).__init__(model, admin_site)


class StarItemsAdmin(admin.ModelAdmin):
    def __init__(self, model, admin_site):
        self.list_display = [field.name for field in model._meta.fields]
        super(StarItemsAdmin, self).__init__(model, admin_site)


class SystemAdmin(admin.ModelAdmin):
    def __init__(self, model, admin_site):
        self.list_display = [field.name for field in model._meta.fields]
        super(SystemAdmin, self).__init__(model, admin_site)


admin.site.register(StarCategory)
admin.site.register(StarItems, StarItemsAdmin)
admin.site.register(PlanetCategory)
admin.site.register(PlanetItems, PlanetItemsAdmin)
admin.site.register(SelectedItem)
admin.site.register(SystemModel, SystemAdmin)
admin.site.register(SystemCategory)
admin.site.register(UrlModel)
