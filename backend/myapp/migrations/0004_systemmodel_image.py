# Generated by Django 5.0.7 on 2024-09-24 12:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("myapp", "0003_staritems_starsystem"),
    ]

    operations = [
        migrations.AddField(
            model_name="systemmodel",
            name="image",
            field=models.ImageField(blank=True, null=True, upload_to="Images/Systems/"),
        ),
    ]
