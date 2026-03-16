from django.views.generic import TemplateView

# Create your views here.
class IndexView(TemplateView):
    template_name = "landingpage/index.html"

class AgendaView(TemplateView):
    template_name = "landingpage/agenda.html"

class ServicesView(TemplateView):
    template_name = "landingpage/services.html"
    