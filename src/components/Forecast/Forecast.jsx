import React from "react";
import "./Forecast.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import {
  calculateAverangeTemperatures,
  filterForecast,
  WEEK_DAYS,
} from "../../helpers/forecast";

const Forecast = ({ data }) => {
  const today = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(today, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, today)
  );

  const forecastArr = filterForecast(data);
  const averangeTemperatures = calculateAverangeTemperatures(forecastArr);

  const cardArr = data.list.filter(
    (item) => item.dt_txt.split(" ")[1] === "12:00:00"
  );

  return (
    <>
      <Accordion allowZeroExpanded>
        {cardArr.map((item, id) => (
          <AccordionItem key={id}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="tab">
                  <label className="day-lable">{forecastDays[id]}</label>
                  <div className="info">
                    {`${averangeTemperatures[id]}°C`}
                    <img
                      src={`img/icons/${item.weather[0].icon}.svg`}
                      alt="weather"
                      className="icon"
                    />
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="inform">
                <div className="item">
                  <div>Feels like</div>
                  <span>{Math.round(item.main.feels_like)}°C</span>
                </div>
                <div className="item">
                  <div>Wind</div>
                  <span>{Math.round(item.wind.speed)} m/s</span>
                </div>
                <div className="item">
                  <div>Humidity</div>
                  <span>{item.main.humidity}%</span>
                </div>
                <div className="item">
                  <div>Pressure</div>
                  <span>{item.main.pressure} hPa</span>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
