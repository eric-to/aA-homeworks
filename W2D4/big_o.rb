fishies = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

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

def merge_sort(arr)
  return arr if arr.length <= 1
  pivot = arr.length / 2
  left = arr[0...pivot]
  right = arr[pivot..-1]
  merge_helper(merge_sort(left), merge_sort(right))
end

def merge_helper(left, right)
  combined_arr = []
  until left.empty? || right.empty?
    if left.first.length > right.first.length
      combined_arr << right.shift
    else
      combined_arr << left.shift
    end
  end
  combined_arr + left + right
end

def dominant_octo(arr)
  merge_sort(arr)[-1]
end

def clever_octo(arr)
  max_fish = ''
  arr.each do |fish|
    max_fish = fish if fish.length > max_fish.length
  end
  max_fish
end

def slow_dance(dir, arr)
  arr.each_with_index do |move, idx|
    return idx if move == dir
  end
end

tiles_hash = {
    "up" => 0,
    "right-up" => 1,
    "right"=> 2,
    "right-down" => 3,
    "down" => 4,
    "left-down" => 5,
    "left" => 6,
    "left-up" => 7
}

def constant_dance(dir, arr)
  arr[dir]
end

p sluggish_octo(fishies)
p dominant_octo(fishies)
p clever_octo(fishies)
p slow_dance("right-down", tiles_array)
p constant_dance("right-down", tiles_hash)
