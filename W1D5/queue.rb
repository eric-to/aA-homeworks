class Queue
  def initialize
    @arr_queue = []
  end

  def enqueue(el)
    @arr_queue.unshift(el)
  end

  def dequeue
    @arr_queue.shift
  end

  def peek
    @arr_queue.first
  end

  def display
    p @arr_queue
  end
end

new_queue = Queue.new
new_queue.display
new_queue.enqueue(5)
new_queue.enqueue(6)
new_queue.display
new_queue.dequeue
new_queue.display
