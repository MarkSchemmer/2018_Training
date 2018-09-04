import unittest
from solution import min_value


class TestFormMinimum(unittest.TestCase):
    def test_beta(self):
        input,shouldBe = [1,3,1],13
        self.assertEqual(min_value(input), shouldBe)  
    def test_two(self):
        input,should=[4,7,5,7],457
        self.assertEqual(min_value(input), should)


if __name__ == '__main__':
    unittest.main()


