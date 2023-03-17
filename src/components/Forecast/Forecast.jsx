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
import Details from "../Details/Details";

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
              <div className="details">
                <Details data={item} />
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
