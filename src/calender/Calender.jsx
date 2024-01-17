import { addDays } from 'date-fns';
import React, { useState } from 'react'
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './Calender.css'; // theme css file
import { FaStar } from "react-icons/fa";

const Calender = () => {
    const [state, setState] = useState({
        selection1: {
            startDate: addDays(new Date(), -6),
            endDate: new Date(),
            key: 'selection1'
        },
        selection2: {
            startDate: addDays(new Date(), 1),
            endDate: addDays(new Date(), 7),
            key: 'selection2'
        }
    });
    const [data, setData] = useState(
        [
            {
                "id": 38,
                "season_name": "high season",
                "season_calender_colour_code": "blue",
                "created_date": "2023-11-04T06:09:14.838755Z",
                "last_updated_date": "2023-11-04T06:09:14.838777Z",
                "is_active": true,
                "holiday_plan_name": null,
                "holiday_start_date": "2023-01-02",
                "holiday_end_date": "2023-01-06",
                "is_start_night": false,
                "is_holiday": false,
                "is_editable": false,
                "city_id": 11,
                "property_season_id": 22
            },
            {
                "id": 38,
                "season_name": "high season",
                "season_calender_colour_code": "pink",
                "created_date": "2023-11-04T06:09:14.838755Z",
                "last_updated_date": "2023-11-04T06:09:14.838777Z",
                "is_active": true,
                "holiday_plan_name": null,
                "holiday_start_date": "2023-02-09",
                "holiday_end_date": "2023-02-15",
                "is_start_night": false,
                "is_holiday": false,
                "is_editable": false,
                "city_id": 11,
                "property_season_id": 22
            },
            {
                "id": 42,
                "season_name": "Mid season",
                "season_calender_colour_code": "#33cccc",
                "created_date": "2023-11-04T06:14:51.779080Z",
                "last_updated_date": "2023-11-04T06:14:51.779101Z",
                "is_active": true,
                "holiday_plan_name": null,
                "holiday_start_date": "2023-03-10",
                "holiday_end_date": "2023-03-31",
                "is_start_night": true,
                "is_holiday": false,
                "is_editable": false,
                "city_id": 11,
                "property_season_id": 21
            },
            // {
            //     "id": 41,
            //     "season_name": "low seasons",
            //     "season_calender_colour_code": "#b03636",
            //     "created_date": "2023-11-04T06:13:47.771638Z",
            //     "last_updated_date": "2023-11-04T06:13:47.771661Z",
            //     "is_active": true,
            //     "holiday_plan_name": null,
            //     "holiday_start_date": "2024-06-11",
            //     "holiday_end_date": "2024-09-09",
            //     "is_start_night": false,
            //     "is_holiday": false,
            //     "is_editable": false,
            //     "city_id": 11,
            //     "property_season_id": 23
            // },
            // {
            //     "id": 43,
            //     "season_name": "high season",
            //     "season_calender_colour_code": "#af7e12",
            //     "created_date": "2023-11-04T06:16:42.257896Z",
            //     "last_updated_date": "2023-11-04T06:16:42.257922Z",
            //     "is_active": true,
            //     "holiday_plan_name": null,
            //     "holiday_start_date": "2024-11-01",
            //     "holiday_end_date": "2024-12-31",
            //     "is_start_night": false,
            //     "is_holiday": false,
            //     "is_editable": false,
            //     "city_id": 11,
            //     "property_season_id": 22
            // },
            // {
            //     "id": 65,
            //     "created_date": "2023-11-07T11:49:25.815685Z",
            //     "last_updated_date": "2023-11-07T11:49:25.815706Z",
            //     "is_active": true,
            //     "holiday_plan_name": null,
            //     "holiday_start_date": "2024-01-26",
            //     "holiday_end_date": "2024-01-26",
            //     "is_start_night": null,
            //     "is_holiday": true,
            //     "is_editable": false,
            //     "city_id": 11,
            //     "property_season_id": null
            // },
            // {
            //     "id": 46,
            //     "created_date": "2023-11-04T06:32:59.238519Z",
            //     "last_updated_date": "2023-11-04T06:32:59.238541Z",
            //     "is_active": true,
            //     "holiday_plan_name": null,
            //     "holiday_start_date": "2023-11-27",
            //     "holiday_end_date": "2023-11-27",
            //     "is_start_night": null,
            //     "is_holiday": true,
            //     "is_editable": false,
            //     "city_id": 11,
            //     "property_season_id": null
            // },
            // {
            //     "id": 47,
            //     "season_name": "Mid season",
            //     "season_calender_colour_code": "#33cccc",
            //     "created_date": "2023-11-04T12:03:48.248481Z",
            //     "last_updated_date": "2023-11-04T12:03:48.248501Z",
            //     "is_active": true,
            //     "holiday_plan_name": null,
            //     "holiday_start_date": "2023-11-09",
            //     "holiday_end_date": "2023-11-24",
            //     "is_start_night": false,
            //     "is_holiday": false,
            //     "is_editable": false,
            //     "city_id": 11,
            //     "property_season_id": 21
            // },
            // {
            //     "id": 71,
            //     "season_name": "high season",
            //     "season_calender_colour_code": "#af7e12",
            //     "created_date": "2023-11-08T09:29:42.915413Z",
            //     "last_updated_date": "2023-11-08T09:29:42.915433Z",
            //     "is_active": true,
            //     "holiday_plan_name": null,
            //     "holiday_start_date": "2023-01-01",
            //     "holiday_end_date": "2023-01-07",
            //     "is_start_night": false,
            //     "is_holiday": false,
            //     "is_editable": false,
            //     "city_id": 11,
            //     "property_season_id": 22
            // },
            // {
            //     "id": 72,
            //     "season_name": "Mid season",
            //     "season_calender_colour_code": "#33cccc",
            //     "created_date": "2023-11-08T09:30:08.171174Z",
            //     "last_updated_date": "2023-11-08T09:30:08.171200Z",
            //     "is_active": true,
            //     "holiday_plan_name": null,
            //     "holiday_start_date": "2023-02-19",
            //     "holiday_end_date": "2023-02-25",
            //     "is_start_night": false,
            //     "is_holiday": false,
            //     "is_editable": false,
            //     "city_id": 11,
            //     "property_season_id": 21
            // }
        ]
    );
    const generateHighlights = () => {
        return data.map((item, index) => ({
            // startDate: (item.holiday_start_date), endDate: (item.holiday_end_date),
            startDate: new Date(item.holiday_start_date),
            endDate: new Date(item.holiday_end_date),
            color: item.season_calender_colour_code,
            is_start_night: item.is_start_night,
            index: index, // Include the index in the highlight object
        }));
    };

    const isDateInRange = (date, startDate, endDate) => {
        const startOfDay = new Date(date);
        startOfDay.setHours(0, 0, 0, 0);

        const start = new Date(startDate);
        const end = new Date(endDate);

        return startOfDay >= start && startOfDay <= end;
    };

    const CustomDayContent = ({ day }) => {
        const isHighlighted = generateHighlights().some(
            (highlight) =>
                day >= (highlight.startDate) &&
                day <= (highlight.endDate)
        );

        let highlightedObject;

        for (const highlight of generateHighlights()) {
            if (isDateInRange(day, highlight.startDate, highlight.endDate)) {
                highlightedObject = highlight;
                // break; // Exit the loop once a match is found
            }
        }

        let Star_nightIcon = () => {
            return (<FaStar color='orange' style={{ position: 'absolute', top: '-5%', right: '50%', transform: ' translateX(50%)', }} />)
        }
        return (
            <div className='w-100 position-relative' style={{
                // color: 'black',
                borderBottom: `2px solid ${isHighlighted ? highlightedObject.color : 'transparent'}`
            }}
            >
                <Star_nightIcon />
                {day.getDate()}
            </div>
        );
    };
    const disabledDates = [
        new Date(),
        new Date(2023, 6, 1),
        // Add more dates as needed
    ];
    console.log("disabledDates", disabledDates)
    return (
        <div className='calenderPicker'>
            <DateRangePicker
                showDateDisplay={false}  //  this line to hide the left section
                onChange={(item) => { setState({ ...state, ...item }); console.log(item) }}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={12}
                ranges={[state.selection1, state.selection2]}
                // ranges={generateHighlights()}
                direction="horizontal"
                ariaLabels={{
                    dateInput: {
                        selection1: { startDate: "start date input of selction 1", endDate: "end date input of selction 1" },
                        selection2: { startDate: "start date input of selction 2", endDate: "end date input of selction 2" }
                    },
                    monthPicker: "month picker",
                    yearPicker: "year picker",
                    prevButton: "previous month button",
                    nextButton: "next month button",
                }}
                dayContentRenderer={(day, i) => <CustomDayContent day={day} i={i} />}
                // disabledDates={disabledDates}
                minDate={new Date()}
                // rangeColors={['yellow']}
            />
        </div>
    )
}

export default Calender
