from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from . import views

app_name = "landingpage"
urlpatterns = [
    path("", views.IndexView.as_view(), name="index"),
    path("agenda", views.AgendaView.as_view(), name="agenda"),
    path("services", views.ServicesView.as_view(), name="services"),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)