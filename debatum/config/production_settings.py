from debatum.config.base_settings import *
DEBUG = True
TEMPLATE_DEBUG = True
# Parse database configuration from $DATABASE_URL
import dj_database_url
DATABASES = {
	'default': dj_database_url.config()
}
WSGI_APPLICATION = 'debatum.wsgi.application'
