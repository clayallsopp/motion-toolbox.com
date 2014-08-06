module ToolboxHelpers
  def categories
    @categories ||= begin
      File.open("data.json", "r") do |f|
        JSON.parse(f.read)["categories"]
      end
    end
  end

  def tags
    @tags ||= categories.map {|c|
      c['wrappers'].map {|w|
        w['tags']
      }
    }.flatten.uniq.sort_by(&:downcase)
  end

  def alphabetize(list, attribute)
    list.sort do |item, other|
      item[attribute].downcase <=> other[attribute].downcase
    end
  end
end
