import AboutImg from "../utils/assets/about-img.jpg";
import GooglePlayImg from "../utils/assets/icon-app-store.jpg";
import AppStoreImg from "../utils/assets/icon-google-play.jpg";
const About = () => {
  return (
    <div className="flex">
      <div className="w-1/2 p-6">
        <img
          src={AboutImg}
          className="rounded-lg w-full h-2/3 object-cover shadow-xl"
        />
      </div>
      <div className="p-6 w-1/2 flex flex-col gap-2">
        <h1 className="font-bold text-2xl text-gray-700">
          Sai Surya Teja Foods
        </h1>
        <h2 className="text-xl text-gray-600">Online Food Delivery</h2>
        <p className="text-gray-500">
          Sai Surya Teja Foods is a food delivery platform at its core, the
          services of which can be accessed from Android and IOS devices, and
          through the website. It partners with a wide range of restaurants and
          provides easy access to diverse food dishes from varying cuisines.
          Furthermore, it also accepts feedback and ratings from the customers
          that help others pick their restaurants and the choices of dishes
          wisely. As soon as a delivery is done, the customer is entitled to
          give feedback, and rate the food, and the delivery services.
          <br />
          The company uses these data to improve its services. Sai Surya Teja
          Foods essentially started as a food delivery service and saw quite an
          expansion. It already had its operation in 100 cities.
          <br />
          The revenue in the online food delivery space is estimated to reach
          $13.99 bn by the end of 2022. It is also estimated that the revenue
          will further grow at an annual growth rate of 11.92%, thereby becoming
          $21.95 bn by 2026.
        </p>
        <div className="flex gap-6">
          <img src={GooglePlayImg} />
          <img src={AppStoreImg} />
        </div>
      </div>
    </div>
  );
};

export default About;
