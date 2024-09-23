from django.db import models


class SystemCategory(models.Model):
    slug = models.SlugField()
    title = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.title


class SystemModel(models.Model):
    name = models.CharField(max_length=255)
    category = models.ForeignKey(
        SystemCategory, blank=True, null=True, on_delete=models.PROTECT
    )

    def __str__(self) -> str:
        return self.name


class SelectedItem(models.Model):

    def __str__(self) -> str:
        return self.planet


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
    starsystem = models.ForeignKey(SystemModel, on_delete=models.PROTECT, null=True)

    def __str__(self) -> str:
        return self.name


class PlanetItems(models.Model):
    name = models.CharField(max_length=255)
    star = models.ForeignKey(StarItems, on_delete=models.PROTECT, blank=True)
    category = models.ForeignKey(PlanetCategory, on_delete=models.PROTECT, blank=True)
    image = models.ImageField(upload_to="Images/Planets/", null=True, blank=True)

    def __str__(self) -> str:
        return self.name


class SelectedItem(models.Model):
    planet = models.ForeignKey(
        PlanetItems, on_delete=models.PROTECT, blank=True, null=True
    )

    def __str__(self) -> str:
        return self.planet.name
