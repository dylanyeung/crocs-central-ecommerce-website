Pagy::DEFAULT[:limit] = 10 # items per page
Pagy::DEFAULT[:page] = 1
# Better user experience handled automatically
require "pagy/extras/overflow"
Pagy::DEFAULT[:overflow] = :last_page
