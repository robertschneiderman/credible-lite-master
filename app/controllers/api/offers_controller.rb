class Api::OffersController < ApplicationApiController
  def index
    @offers = submission.offers.joins(product: :lender).select('offers.*, products.term, lenders.name')
  end

protected
  def submission
    Submission.find(params[:submission_id])
  end
end
