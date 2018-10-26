class Map
  def initialize
    @arr_map = []
  end

  def set(key, value)
    seen_key = false
    @arr_map.each do |pair|
      if pair[0] == key
        seen_key = true
        pair[1] = value
      end
    end
    @arr_map.push([key, value]) unless seen_key
  end

  def get(key)
    @arr_map.map.each do |pair|
      return pair[1] if pair[0] == key
    end
    nil
  end

  def delete(key)
    @arr_map.each_with_index do |el, idx|
      if el[0] == key
        @arr_map.delete_at(idx)
      end
    end
    nil
  end

  def show
    p @arr_map
  end
end

new_map = Map.new
new_map.show
new_map.set('ello', 5)
new_map.show
new_map.set('hello', 9)
new_map.show
p new_map.get('hell')
p new_map.get('hello')
new_map.delete('hello')
new_map.show
