class Stack
  def initialize
    @arr_stack = []
  end

  def push(el)
    @arr_stack.push(el)
  end

  def pop
    @arr_stack.pop
  end

  def peek
    @arr_stack.last
  end

  def display
    p @arr_stack
  end
end

new_stack = Stack.new
new_stack.display
new_stack.push(1)
new_stack.display
new_stack.pop
new_stack.display
new_stack.push(2)
new_stack.push(5)
new_stack.push(6)
new_stack.display
new_stack.pop
new_stack.pop
new_stack.display
