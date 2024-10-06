from django.db import models
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType


class SystemCategory(models.Model):
    slug = models.SlugField()
    title = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.title


class SystemModel(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to="Images/Systems/", null=True, blank=True)
    summary = models.CharField(max_length=3000, null=True, blank=True)
    category = models.ForeignKey(
        SystemCategory, blank=True, null=True, on_delete=models.PROTECT
    )
    url = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self) -> str:
        return self.name


class StarCategory(models.Model):
    slug = models.SlugField()
    title = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.title


class PlanetCategory(models.Model):
    slug = models.SlugField()
    title = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.title


class StarItems(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to="Images/Stars/", null=True, blank=True)
    category = models.ForeignKey(StarCategory, on_delete=models.PROTECT, blank=True)
    radius = models.IntegerField(null=True, blank=True)
    starsystem = models.ForeignKey(SystemModel, on_delete=models.PROTECT, null=True)
    summary = models.CharField(max_length=3000, null=True, blank=True)
    url = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self) -> str:
        return self.name


class PlanetItems(models.Model):
    name = models.CharField(max_length=255)
    star = models.ForeignKey(StarItems, on_delete=models.PROTECT, blank=True)
    category = models.ForeignKey(PlanetCategory, on_delete=models.PROTECT, blank=True)
    image = models.ImageField(upload_to="Images/Planets/", null=True, blank=True)
    summary = models.CharField(max_length=3000, null=True, blank=True)
    url = models.CharField(max_length=50, blank=True, null=True)    

    def __str__(self) -> str:
        return self.name


class SelectedItem(models.Model):
    planet = models.ForeignKey(
        PlanetItems, on_delete=models.PROTECT, blank=True, null=True
    )

    def __str__(self) -> str:
        return self.planet.name


class UrlModel(models.Model):
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    item = GenericForeignKey("content_type", "object_id")

    custom_url = models.URLField(max_length=200, null=True, blank=True)

    @property
    def url(self):
        if self.item and hasattr(self.item, "url"):
            return self.item.url
        return self.custom_url

    def save(self, *args, **kwargs):
        if not self.custom_url and self.item and hasattr(self.item, "url"):
            self.custom_url = self.item.url
        super(UrlModel, self).save(*args, **kwargs)

    def __str__(self):
        return f"URL: {self.url}, Item: {self.item}"
