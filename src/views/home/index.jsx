/* eslint-disable max-len */
import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
// import { MessageDisplay } from '@/components/common';
// import { ProductShowcaseGrid } from '@/components/product';
import bannerImg from '@/images/MainBanner.jpeg';
import {
  // FEATURED_PRODUCTS,
  // RECOMMENDED_PRODUCTS,
  SHOP
} from '@/constants/routes';
import {
  useDocumentTitle,
  // useFeaturedProducts,
  // useRecommendedProducts,
  useScrollTop
} from '@/hooks';


const Home = () => {
  useDocumentTitle('Wink | Home',);
  useScrollTop();

  // const {
  //   featuredProducts,
  //   fetchFeaturedProducts,
  //   isLoading: isLoadingFeatured,
  //   error: errorFeatured,
  // } = useFeaturedProducts(6,);
  // const {
  //   recommendedProducts,
  //   fetchRecommendedProducts,
  //   isLoading: isLoadingRecommended,
  //   error: errorRecommended,
  // } = useRecommendedProducts(6,);

  return (
    <main className="content">
      <div className="home">
        <div className="banner">
          <div className="banner-desc">
            <h1 className="text-thin">
              <strong>Wink Vapes</strong>
            </h1>
            <p>
              <strong>
                Discover the ultimate fusion of portability, discretion, and premium THC with our Wink THC Vape Pen. Designed to fit in the palm of your hand, our vape pen is the epitome of convenience. It&apos;s small enough to fit in your pocket or bag easily, making it the perfect companion for those always on the go.
                {/* Our THC vape pen offers a sleek, modern design that keeps your THC intake as inconspicuous as possible. The non-descript appearance and silent operation let you experience the soothing benefits of THC without drawing unwanted attention. The minimalist design aesthetic perfectly blends in with everyday objects, adding an additional layer of discretion to your THC use. */}
              </strong>
            </p>
            <br />
            <Link to={SHOP} className="button">
              Shop Now &nbsp;
              <ArrowRightOutlined />
            </Link>
          </div>
          <div className="banner-img"><img src={bannerImg} alt="" /></div>
        </div>
        {/* <div className="display">
          <div className="display-header">
            <h1>Featured Products</h1>
            <Link to={FEATURED_PRODUCTS}>See All</Link>
          </div>
          {(errorFeatured && !isLoadingFeatured) ? (
            <MessageDisplay
              message={errorFeatured}
              action={fetchFeaturedProducts}
              buttonLabel="Try Again"
            />
          ) : (
            <ProductShowcaseGrid
              products={featuredProducts}
              skeletonCount={6}
            />
          )}
        </div> */}
        {/* <div className="display">
          <div className="display-header">
            <h1>Recommended Products</h1>
            <Link to={RECOMMENDED_PRODUCTS}>See All</Link>
          </div>
          {(errorRecommended && !isLoadingRecommended) ? (
            <MessageDisplay
              message={errorRecommended}
              action={fetchRecommendedProducts}
              buttonLabel="Try Again"
            />
          ) : (
            <ProductShowcaseGrid
              products={recommendedProducts}
              skeletonCount={6}
            />
          )}
        </div> */}
      </div>
    </main>
  );
};

export default Home;
