from .base_settings import *
DEBUG = False
TEMPLATE_DEBUG = False
# Parse database configuration from $DATABASE_URL
import dj_database_url
DATABASES = {
	'default': dj_database_url.config(),
	'ENGINE': 'django.db.backends.postgresql_psycopg2'
}
WSGI_APPLICATION = 'debatum.wsgi.application'
