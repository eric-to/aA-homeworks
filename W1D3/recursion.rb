def sum_to(n)
  return nil if n < 0
  return 1 if n == 1
  n + sum_to(n - 1)
end

# p sum_to(5)
# p sum_to(1)
# p sum_to(9)
# p sum_to(-8)

def add_numbers(nums_array)
  return nil if nums_array.empty?
  return nums_array[0] if nums_array.length == 1
  nums_array[0] + add_numbers(nums_array[1..-1])
end

# p add_numbers([1, 2, 3, 4])
# p add_numbers([3])
# p add_numbers([-80, 34, 7])
# p add_numbers([])

def gamma_fnc(n)
  return nil if n == 0
  return 1 if n == 1
  (n - 1) * gamma_fnc(n - 1)
end

# p gamma_fnc(0)
# p gamma_fnc(1)
# p gamma_fnc(4)
# p gamma_fnc(8)

def ice_cream_shop(flavor, favorite)
  return false if flavor.empty?
  return flavor[0] == favorite if flavor.length == 1
  return flavor[0] == favorite || ice_cream_shop(flavor[1..-1], favorite)
end

# p ice_cream_shop(['vanilla', 'strawberry'], 'blue moon')  # => returns false
# p ice_cream_shop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea')  # => returns true
# p ice_cream_shop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio')  # => returns false
# p ice_cream_shop(['moose tracks'], 'moose tracks')  # => returns true
# p ice_cream_shop([], 'honey lavender')  # => returns false

def reverse(string)
  return "" if string == ""
  return string if string.length == 1
  return string[-1] + reverse(string[0..-2])
end

# p reverse("house") # => "esuoh"
# p reverse("dog") # => "god"
# p reverse("atom") # => "mota"
# p reverse("q") # => "q"
# p reverse("id") # => "di"
# p reverse("") # => ""
