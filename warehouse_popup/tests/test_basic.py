import frappe
from frappe.tests.utils import FrappeTestCase

class TestBasic(FrappeTestCase):
	def test_app_installed(self):
		self.assertTrue(frappe.db.exists("Module Def", "warehouse_popup"))
