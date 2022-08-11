import { ApprovalOutlined } from "@mui/icons-material";
import { HttpService } from "./base.service";

const BaseUrl = process.env.REACT_APP_WEATHER;

class WeatherService extends HttpService {
  constructor() {
    super(BaseUrl);
  }

  /**
   * @description get cities weather
   * @param city 
   * @param appId for authentication
   * @returns weather data of the city: object
   */
  getWeatherByCity = (
    city: String,
    appId: String,
    unit: String
  ): Promise<any> => this.get(`data/2.5/forecast?q=${city}&appid=${appId}&units=${unit}`);


  /**
   * @description get cities weather
   * @param zip 
   * @param appId for authentication
   * @returns weather data of the city: object
   */
   getWeatherByZip = (
    zip: String,
    appId: String,
    unit: String
  ): Promise<any> => this.get(`data/2.5/forecast?zip=${zip}&appid=${appId}$units=${unit}`);
}
export const weatherService = new WeatherService();