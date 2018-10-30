class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2
    @cups = Array.new(14) { Array.new }
    place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    @cups.each_with_index do |cup, idx|
      unless idx == 6 || idx == 13
        4.times do
          cup << :stone
        end
      end
    end
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" if start_pos < 0 || start_pos > 12
    raise "Starting cup is empty" if @cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    stones = @cups[start_pos]
    @cups[start_pos] = []
    until stones.empty?
      start_pos += 1
      start_pos = 0 if start_pos > 13
      if start_pos == 6
        @cups[6] << stones.pop if current_player_name == @name1
      elsif start_pos == 13
        @cups[13] << stones.pop if current_player_name == @name2
      else
        @cups[start_pos] << stones.pop
      end
    end

    render
    next_turn(start_pos)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
    if ending_cup_idx == 6 || ending_cup_idx == 13
      :prompt
    elsif @cups[ending_cup_idx].count == 1
      :switch
    else
      ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    side1_empty = @cups[0..5].all? { |cup| cup.empty? }
    side2_empty = @cups[7..12].all? { |cup| cup.empty? }
    side1_empty || side2_empty
  end

  def winner
    player1_score = @cups[6].count
    player2_score = @cups[13].count
    if player1_score == player2_score
      :draw
    else
      player1_score > player2_score ? @name1 : @name2
    end
  end
end
