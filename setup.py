from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in frappe_styler/__init__.py
from frappe_styler import __version__ as version

setup(
	name="frappe_styler",
	version=version,
	description="theme ",
	author="idara",
	author_email="theme@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
