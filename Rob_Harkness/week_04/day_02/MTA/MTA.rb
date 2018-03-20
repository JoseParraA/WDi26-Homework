# TODO: make so can reverse trips, make method to pretty print directions

# MTA class
class MTA
  def initialize
    @lines = {
      N: ['Times Square', '34th', '28th(N)', '23rd(N)', 'Union Square', '8th(N)'],
      L: ['8th(L)', '6th', 'Union Square', '3rd', '1st'],
      SIX: ['Grand Central', '33rd', '28th(6)', '23rd(6)', 'Union Square', 'Astor Place'],
      new_line: ['1st stop', '33rd', '2nd', 'cool stop', '2nd last', 'end-stop']
    }
  end

  def get_lines
    @lines.each { |k, v| [k, v] }
  end

  def trip(l_one, start, l_two, stop)
    l_one = l_one.to_sym
    l_two = l_two.to_sym
    start_index = @lines[l_one].index(start)
    end_index = @lines[l_two].index(stop)
    change_stop = stop
    continue_stop_index = false
    unless l_one == l_two
      change_stop = (@lines[l_one] & @lines[l_two]).join('')
      continue_stop_index = @lines[l_two].index(change_stop)
    end
    change_stop_index = @lines[l_one].index(change_stop)

    [@lines[l_one][start_index..change_stop_index], continue_stop_index && @lines[l_two][continue_stop_index..end_index]]
  end
end

new_trip = MTA.new
p new_trip.trip('SIX', 'Grand Central', 'L', '1st')