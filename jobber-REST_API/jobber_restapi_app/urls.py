from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^emprego/(?P<post_id>\w+)$', views.emprego_by_idList.as_view(), name='emprego-list'),
    url(r'^utilizador/(?P<post_id>\w+)$', views.utilizador_by_idList.as_view(), name='emprego-list'),
    url(r'^empresa/(?P<post_id>\w+)$', views.empresa_by_idList.as_view(), name='emprego-list'),
    url(r'^emprego/$', views.empregoList.as_view(), name='emprego-list'),
    url(r'^utilizador/$', views.utilizadorList.as_view(), name='emprego-list'),
    url(r'^empresa/$', views.empresaList.as_view(), name='emprego-list'),
    url(r'^auth/login', views.login, name='login'),
    url(r'^auth/register', views.regist, name='regist'),
]
