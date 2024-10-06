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
    planetary = models.CharField(max_length=3000, null=True, blank=True)
    orbit = models.CharField(max_length=3000, null=True, blank=True)
    gravity = models.CharField(max_length=3000, null=True, blank=True)
    habitability = models.CharField(max_length=3000, null=True, blank=True)
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
    type = models.CharField(max_length=3000, null=True, blank=True)
    mass = models.CharField(max_length=3000, null=True, blank=True)
    temp = models.CharField(max_length=3000, null=True, blank=True)
    lumi = models.CharField(max_length=3000, null=True, blank=True)
    radius = models.CharField(max_length=3000, null=True, blank=True)
    metal = models.CharField(max_length=3000, null=True, blank=True)
    age = models.CharField(max_length=3000, null=True, blank=True)
    starsystem = models.ForeignKey(SystemModel, on_delete=models.PROTECT, null=True)
    summary = models.CharField(max_length=3000, null=True, blank=True)
    url = models.CharField(max_length=50, blank=True, null=True)
    magnetic = models.CharField(max_length=3000, null=True, blank=True)

    def __str__(self) -> str:
        return self.name


class PlanetItems(models.Model):
    name = models.CharField(max_length=255)
    star = models.ForeignKey(StarItems, on_delete=models.PROTECT, blank=True)
    transit = models.CharField(max_length=3000, null=True, blank=True)
    classification = models.CharField(max_length=3000, null=True, blank=True)
    mass = models.CharField(max_length=3000, null=True, blank=True)
    radius = models.CharField(max_length=3000, null=True, blank=True)
    atmos = models.CharField(max_length=3000, null=True, blank=True)
    orbit = models.CharField(max_length=3000, null=True, blank=True)
    gravity = models.CharField(max_length=3000, null=True, blank=True)
    conditions = models.CharField(max_length=3000, null=True, blank=True)
    magnetic = models.CharField(max_length=3000, null=True, blank=True)
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



