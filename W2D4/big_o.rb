def sluggish_octo(arr)
  arr.each_with_index do |fish1, i|
    found_max = true
    arr.each_with_index do |fish2, j|
      next if i == j
      found_max = false if fish2.length > fish1.length
    end
    return fish1 if found_max
  end
end

def dominant_octo(arr)
  nil
end

p dominant_octo(['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'])
