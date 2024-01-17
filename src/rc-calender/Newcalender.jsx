import Calendar from 'rc-year-calendar';
import { useEffect, useState } from 'react'
import './newcalender.css'
import ReactDOM from 'react-dom/client';

const Newcalender = () => {
    let Booked_days = [
        {
            "id": 38,
            "season_name": "high season",
            "season_calender_colour_code": "blue",
            "created_date": "2023-11-04T06:09:14.838755Z",
            "last_updated_date": "2023-11-04T06:09:14.838777Z",
            "is_active": true,
            "holiday_plan_name": null,
            "holiday_start_date": "2023-12-02",
            "holiday_end_date": "2023-12-16",
            "is_start_night": false,
            "is_holiday": false,
            "is_editable": false,
            "city_id": 11,
            "property_season_id": 22
        },
    ]

    const currentYear = new Date().getFullYear();
    const [disableDates, setDisableDates] = useState([new Date('Dec 03 2023'), new Date('Dec 12 2023')])
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
            {
                "id": 42,
                "season_name": "Mid season",
                "season_calender_colour_code": "red",
                "created_date": "2023-11-04T06:14:51.779080Z",
                "last_updated_date": "2023-11-04T06:14:51.779101Z",
                "is_active": true,
                "holiday_plan_name": null,
                "holiday_start_date": "2023-05-10",
                "holiday_end_date": "2023-05-21",
                "is_start_night": true,
                "is_holiday": false,
                "is_editable": false,
                "city_id": 11,
                "property_season_id": 21
            },
        ]
    )
    const [dataSource, setDataSource] = useState([
        {
            id: 0,
            location: 'San Francisco, CA',
            // startDate: new Date("2023-06-27T00:00:00.000Z"),
            // endDate: new Date("2023-07-02T00:00:00.000Z"),
            startDate: new Date(currentYear, 5, 20),
            endDate: new Date(currentYear, 5, 29),
            color: 'pink',
            name: "dateselection"
        },
        {
            id: 0,
            location: 'San Francisco, CA',
            startDate: new Date(currentYear, 0, 20),
            endDate: new Date(currentYear, 0, 29),
            color: 'pink',
            name: "dateselection"
        }
    ])
    const [dataSourceSecond, setDataSourceSecond] = useState([
        {
            startDate: new Date(currentYear, 1, 4),
            endDate: new Date(currentYear, 1, 15),
            color: 'pink'
        },
        {
            startDate: new Date(currentYear, 3, 5),
            endDate: new Date(currentYear, 5, 15),
            color: 'red'
        }
    ])
    const [state, setState] = useState(
        {
            currentYear: new Date().getFullYear(),
            minDate: null,
            maxDate: null,
            language: 'en',
            style: 'background',
            allowOverlap: true,
            enableRangeSelection: true,
            displayWeekNumber: false,
            roundRangeLimits: false,
            alwaysHalfDay: true
        }
    )

    const generateHighlights = () => {
        return data.map((item, index) => ({
            startDate: (item.holiday_start_date), endDate: (item.holiday_end_date),
            // startDate: new Date(item.holiday_start_date),
            // endDate: new Date(item.holiday_end_date),
            color: item.season_calender_colour_code,
            is_start_night: item.is_start_night,
            index: index,
        }));
    };

    const generateBookedDyas = () => {
        return Booked_days.map((item) => ({
            startDate: (item.holiday_start_date), endDate: (item.holiday_end_date),
        }));
    };

    const checkDateInRange = (date, startDate, endDate) => {
        const startOfDay = new Date(date);
        startOfDay.setHours(0, 0, 0, 0);

        const start = new Date(startDate);
        const end = new Date(endDate);

        return startOfDay >= start && startOfDay <= end;
    };
    const StartNightIcon = () => {
        return (
            <div style={{ position: 'absolute', top: '-16%', right: '35%' }}>
                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.58242 3.42777C5.95992 2.48667 6.14867 2.01611 6.47325 2.01611C6.79783 2.01611 6.98658 2.48667 7.36407 3.42777L7.38165 3.47159C7.59492 4.00327 7.70156 4.26911 7.91888 4.43069C8.13621 4.59227 8.4215 4.61782 8.99207 4.66892L9.09522 4.67816C10.029 4.76179 10.4959 4.8036 10.5959 5.10066C10.6958 5.39772 10.349 5.71318 9.65552 6.34412L9.42407 6.55469C9.07301 6.87408 8.89749 7.03377 8.81567 7.24308C8.80041 7.28212 8.78772 7.32212 8.77769 7.36282C8.72392 7.58102 8.77532 7.81269 8.87812 8.27602L8.91012 8.42025C9.09905 9.27177 9.19351 9.69753 9.02857 9.88118C8.96694 9.9498 8.88684 9.99921 8.79786 10.0235C8.55972 10.0885 8.22164 9.81298 7.54547 9.26199C7.10147 8.9002 6.87947 8.7193 6.62459 8.6786C6.52433 8.6626 6.42217 8.6626 6.32191 8.6786C6.06703 8.7193 5.84503 8.9002 5.40103 9.26199C4.72486 9.81298 4.38677 10.0885 4.14864 10.0235C4.05966 9.99921 3.97956 9.9498 3.91792 9.88118C3.75299 9.69753 3.84745 9.27177 4.03638 8.42025L4.06838 8.27602C4.17118 7.81269 4.22258 7.58102 4.1688 7.36282C4.15877 7.32212 4.14609 7.28212 4.13082 7.24308C4.04901 7.03377 3.87348 6.87408 3.52243 6.55469L3.29097 6.34412C2.59748 5.71318 2.25074 5.39772 2.35064 5.10066C2.45055 4.8036 2.91746 4.76179 3.85128 4.67816L3.95443 4.66892C4.525 4.61782 4.81029 4.59227 5.02761 4.43069C5.24494 4.26911 5.35158 4.00327 5.56484 3.47159L5.58242 3.42777Z" fill="#FFC46C" stroke="#FFC46C" stroke-width="1.64541" />
                </svg>
                {/* <FaStar size={10} color='orange' /> */}
            </div>
        );
    };


    let SelectWeek = (events) => {
        // Define the desired start and end days of the week (0 for Sunday, 1 for Monday, and so on,6 for sat)
        const startDayOfWeek = 1;
        const endDayOfWeek = 1;

        // as reguler
        // const startOfWeek = new Date(events.date);
        // startOfWeek.setDate(startOfWeek.getDate() - (startOfWeek.getDay() - startDayOfWeek + 7) % 7);

        // const endOfWeek = new Date(startOfWeek);
        // endOfWeek.setDate(endOfWeek.getDate() + (endDayOfWeek - startDayOfWeek + 7) % 7);

        // monday to monday
        // const startOfWeek = new Date(events.date);
        // startOfWeek.setDate(startOfWeek.getDate() - (startOfWeek.getDay() - 1 + 7) % 7);

        // const endOfWeek = new Date(startOfWeek);
        // endOfWeek.setDate(endOfWeek.getDate() + 7);


        // const currentDate = new Date(events.date);
        // const currentDayOfWeek = currentDate.getDay();

        // let startOfWeek = new Date(currentDate);
        // startOfWeek.setDate(currentDate.getDate() - (currentDayOfWeek - startDayOfWeek + 7) % 7);

        // let endOfWeek = new Date(startOfWeek);
        // endOfWeek.setDate(startOfWeek.getDate() + (endDayOfWeek - startDayOfWeek + 7) % 7);

        // // If startDayOfWeek and endDayOfWeek are the same, select the entire week
        // if (startDayOfWeek === endDayOfWeek) {
        //     endOfWeek.setDate(endOfWeek.getDate() + 7);
        // }

        // setDataSource(prev => [...prev, { startDate: startOfWeek, endDate: endOfWeek, name: "dateselection" }]);


        // Assuming disableDates is an array of dates to be disabled
        // const disableDates = [new Date('Dec 03 2023'), new Date('Dec 12 2023'),];


        const currentDate = new Date(events.date);
        const currentDayOfWeek = currentDate.getDay();

        let startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - (currentDayOfWeek - startDayOfWeek + 7) % 7);

        let endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + (endDayOfWeek - startDayOfWeek + 7) % 7);

        // If startDayOfWeek and endDayOfWeek are the same, select the entire week
        if (startDayOfWeek === endDayOfWeek) {
            endOfWeek.setDate(endOfWeek.getDate() + 7);
        }

        // Validation: Check if any date in the selected week is in the disabled dates array
        const isOverlap = disableDates.some(disabledDate =>
            disabledDate >= startOfWeek && disabledDate <= endOfWeek
        );

        if (isOverlap) {
            alert('Your booking overlaps with disabled dates. Please choose another date.');
        } else {
            // Proceed with setting the data source
            setDataSource(prev => [
                ...prev,
                { startDate: startOfWeek, endDate: endOfWeek, name: "dateselection" }
            ]);
        }



        // is_custume_selection is true and click on day then select only one day else select week
        // third
        // if (property_info?.booking_Rules?.is_custume_selection) {
        //     setDataSource([{ startDate: events.date, endDate: events.date, name: "dateselection" }]);
        // }
        // else {

        //     // Define the desired start and end days of the week (0 for Sunday, 1 for Monday, and so on,6 for sat)
        //     const startDayOfWeek = isNaN(property_info?.booking_Rules?.StartDayOf_Week) ? 1 : property_info?.booking_Rules?.StartDayOf_Week;
        //     const endDayOfWeek = isNaN(property_info?.booking_Rules?.endtDayOf_Week) ? 6 : property_info?.booking_Rules?.endtDayOf_Week;

        //     const currentDate = new Date(events.date);
        //     const currentDayOfWeek = currentDate.getDay();

        //     // Calculate the difference between the current day and the start day of the week
        //     const difference = currentDayOfWeek - startDayOfWeek;

        //     // Adjust the start and end of the week based on the difference
        //     let startOfWeek = new Date(currentDate);
        //     startOfWeek.setDate(currentDate.getDate() - difference);

        //     let endOfWeek = new Date(currentDate);
        //     endOfWeek.setDate(currentDate.getDate() + (endDayOfWeek - currentDayOfWeek));

        //     // If startDayOfWeek and endDayOfWeek are the same, select the entire week
        //     if (startDayOfWeek === endDayOfWeek) {
        //         endOfWeek.setDate(endOfWeek.getDate() + 7);
        //     }

        //     // check booking days overlap with star nights and  overlapwith maintenance days.
        //     const overlapwith_starNight = checkStarNightOverlap(property_info.alocated_star_nights, startOfWeek, endOfWeek);
        //     const overlapwith_maintenance_days = checkStarNightOverlap(property_info.maintenance_days, startOfWeek, endOfWeek);

        //     if (overlapwith_maintenance_days) {
        //         swal("Message", "Your booking days overlap with maintenance days. Please select other dates.", "warning");
        //     } else if (overlapwith_starNight && !IsAllow_for_StarNight_book) {
        //         swal("Message", "Your booking days contain star nights, and you exceed your start night quota. Please select other dates.", "warning");
        //     } else {
        //         setDataSource([{ startDate: startOfWeek, endDate: endOfWeek, name: "dateselection" }]);
        //     }
        // }




        // second
        // const startDayOfWeek = 5; // Friday
        // const endDayOfWeek = 6; // Saturday

        // const currentDate = new Date(events.date);
        // const currentDayOfWeek = currentDate.getDay();

        // let startOfWeek = new Date(currentDate);
        // startOfWeek.setDate(currentDate.getDate() - (currentDayOfWeek - startDayOfWeek + 7) % 7);

        // let endOfWeek = new Date(currentDate);
        // endOfWeek.setDate(currentDate.getDate() + (endDayOfWeek - currentDayOfWeek + 7) % 7);

        // // If startDayOfWeek and endDayOfWeek are the same, select the entire week
        // if (startDayOfWeek === endDayOfWeek) {
        //     endOfWeek.setDate(endOfWeek.getDate() + 7);
        // }

        // // Validation: Check if any date in the selected week is in the disabled dates array
        // const isOverlap = disableDates.some(disabledDate =>
        //     disabledDate >= startOfWeek && disabledDate <= endOfWeek
        // );

        // if (isOverlap) {
        //     alert('Your booking overlaps with disabled dates. Please choose another date.');
        // } else {
        //     // Proceed with setting the data source
        //     setDataSource([{ startDate: startOfWeek, endDate: endOfWeek, name: "dateselection" }]);
        // }




        // first
        // const startDayOfWeek = 5;
        // const endDayOfWeek = 6;

        // const currentDate = new Date(events.date);
        // const currentDayOfWeek = currentDate.getDay();

        // let startOfWeek = new Date(currentDate);
        // startOfWeek.setDate(currentDate.getDate() - (currentDayOfWeek - startDayOfWeek + 7) % 7);

        // let endOfWeek = new Date(startOfWeek);
        // endOfWeek.setDate(startOfWeek.getDate() + (endDayOfWeek - startDayOfWeek + 7) % 7);

        // // If startDayOfWeek and endDayOfWeek are the same, select the entire week
        // if (startDayOfWeek === endDayOfWeek) {
        //     endOfWeek.setDate(endOfWeek.getDate() + 7);
        // }

        // // Validation: Check if any date in the selected week is in the disabled dates array
        // const isOverlap = disableDates.some(disabledDate =>
        //     disabledDate >= startOfWeek && disabledDate <= endOfWeek
        // );

        // if (isOverlap) {
        //     alert('Your booking overlaps with disabled dates. Please choose another date.');
        // } else {
        //     // Proceed with setting the data source
        //     setDataSource([{ startDate: startOfWeek, endDate: endOfWeek, name: "dateselection" }]);
        // }

        // setDataSource(prev => [
        //     ...prev,
        //     { startDate: startOfWeek, endDate: endOfWeek, name: "dateselection" }
        // ]);

        // as reguler
        // const startOfWeek = new Date(events.date);
        // startOfWeek.setDate(startOfWeek.getDate() - (startOfWeek.getDay() - startDayOfWeek + 7) % 7);

        // const endOfWeek = new Date(startOfWeek);
        // endOfWeek.setDate(endOfWeek.getDate() + (endDayOfWeek - startDayOfWeek + 7) % 7);

        // monday to monday
        // const startOfWeek = new Date(events.date);
        // startOfWeek.setDate(startOfWeek.getDate() - (startOfWeek.getDay() - 1 + 7) % 7);

        // const endOfWeek = new Date(startOfWeek);
        // endOfWeek.setDate(endOfWeek.getDate() + 7);


        // const currentDate = new Date(events.date);
        // const currentDayOfWeek = currentDate.getDay();

        // let startOfWeek = new Date(currentDate);
        // startOfWeek.setDate(currentDate.getDate() - (currentDayOfWeek - startDayOfWeek + 7) % 7);

        // let endOfWeek = new Date(startOfWeek);
        // endOfWeek.setDate(startOfWeek.getDate() + (endDayOfWeek - startDayOfWeek + 7) % 7);

        // // If startDayOfWeek and endDayOfWeek are the same, select the entire week
        // if (startDayOfWeek === endDayOfWeek) {
        //     endOfWeek.setDate(endOfWeek.getDate() + 7);
        // }

        // setDataSource(prev => [...prev, { startDate: startOfWeek, endDate: endOfWeek, name: "dateselection" }]);




    }

    let SelectRange = (e) => {
        if (e.startDate.getTime() === e.endDate.getTime()) {
            // const startOfWeek = new Date(e.startDate);
            // startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay()); // Move to the start of the week

            // const endOfWeek = new Date(startOfWeek);
            // endOfWeek.setDate(startOfWeek.getDate() + 6); // Move to the end of the week

            // setDataSource(prev => [
            //     ...prev,
            //     { startDate: startOfWeek, endDate: endOfWeek, name: "dateselection" }
            // ]);
        } else {
            // Otherwise, select the range as usual
            setDataSource(prev => [...prev, { startDate: e.startDate, endDate: e.endDate, name: "dateselection" }]);
        }


         // setDataSource([{ startDate: e.startDate, endDate: e.endDate, name: "dateselection" }]);

        // if (e.startDate.getTime() === e.endDate.getTime()) {
        //     // const startOfWeek = new Date(e.startDate);
        //     // startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay()); // Move to the start of the week

        //     // const endOfWeek = new Date(startOfWeek);
        //     // endOfWeek.setDate(startOfWeek.getDate() + 6); // Move to the end of the week

        //     // setDataSource(prev => [...prev, { startDate: startOfWeek, endDate: endOfWeek, name: "dateselection" }]);
        // } else {
        //     // Otherwise, select the range as usual
        //     setDataSource([{ startDate: e.startDate, endDate: e.endDate, name: "dateselection" }]);
        //     // setDataSource(prev => [...prev, { startDate: e.startDate, endDate: e.endDate, name: "dateselection" }]);
        // }
    }
    useEffect(() => {
        const monthTitleElements = document.getElementsByClassName('month-title');

        for (let i = 0; i < monthTitleElements.length; i++) {
            const currentText = monthTitleElements[i].textContent.trim();

            // Check if the year is already present
            if (!/\d{4}$/.test(currentText)) {
                const currentYear = new Date().getFullYear();
                monthTitleElements[i].textContent = `${currentText} ${currentYear}`;
            }
        }

        let commonDates = []
        dataSource.forEach(obj => {
            dataSource.forEach(currentObj => {
                if (obj.startDate == currentObj.endDate) {
                    alert(JSON.stringify(obj.endDate))
                    // if (currentObj !== obj && currentObj.startDate === obj.endDate) {
                    commonDates.push(obj.endDate);
                }
            });
        });
        console.log("commonDates", commonDates);
    }, [dataSource]);
    return (
        <>
            <div className='Newcalender'>
                <Calendar
                    displayHeader={false}
                    style="background"
                    dataSource={dataSource}
                    enableContextMenu={true}
                    enableRangeSelection={true}  // if booking rule is weekly then false if custume then true

                    onRangeSelected={e => {  // if booking rule is custume then days selected on range 
                        SelectRange(e)
                    }}

                    onDayClick={(events,) => { // if booking rule is weekly then whole week is selected based on startDayOfWeek & endDayOfWeek
                        SelectWeek(events)
                    }}

                    minDate={new Date(currentYear, 4, 28)}

                    customDataSourceRenderer={(element, data, events) => {
                        console.log("djeid", element, data, events)
                        // element.setAttribute('date', new Date(data))
                        // element.style.backgroundColor = events[0].color
                        element.style.borderRadius = 0
                        // element.style.backgroundColor = 'transparent'
                        // element.style.color = "white"
                        // element.style.boxShadow = "inset 0 -4px 0 0 ".concat(events[0].color)


                        events.map((item, i) => {
                            // console.log("item", item)
                            if (item.name == "dateselection") {
                                element.parentElement.classList.add("range")
                                if (new Date(data).getTime() == new Date(item.startDate).getTime()) {
                                    element.parentElement.classList.add("range-start")
                                }
                                if (new Date(data).getTime() == new Date(item.endDate).getTime()) {
                                    element.parentElement.classList.add("range-end")
                                }
                            }
                        })


                    }}
                    customDayRenderer={(element, day) => {
                        const isDateInRange = generateHighlights().some(dateRange => {
                            const startDate = new Date(dateRange.startDate);
                            const endDate = new Date(dateRange.endDate);
                            return day >= startDate && day <= endDate;
                        });


                        let highlightedObject;
                        for (const highlight of generateHighlights()) {
                            if (checkDateInRange(day, highlight.startDate, highlight.endDate)) {
                                highlightedObject = highlight;
                            }
                        }

                        let bookedDay_class = 'a';
                        const bookedDays = generateBookedDyas();

                        for (let i = 0; i < bookedDays.length; i++) {
                            const dateRange = bookedDays[i];
                            const startDate = new Date(dateRange.startDate);
                            const endDate = new Date(dateRange.endDate);

                            startDate.setHours(0, 0, 0, 0);
                            endDate.setHours(0, 0, 0, 0);
                            day.setHours(0, 0, 0, 0);

                            if (day.getTime() === startDate.getTime()) {
                                alert("yes")
                                bookedDay_class = 'old-booking-start';
                                break;
                            } else if (day.getTime() === endDate.getTime()) {
                                alert("no")
                                bookedDay_class = 'old-booking-end';
                                break;
                            } else if (day.getTime() >= startDate.getTime() && day.getTime() <= endDate.getTime()) {
                                bookedDay_class = 'old-booking';
                                break;
                            } else if (day.getTime() > startDate.getTime() && day.getTime() < endDate.getTime()) {
                                bookedDay_class = 'old-booking';
                                break;
                            }
                        }

                        console.log(day, "bookedDay_class", bookedDay_class)
                        element.parentElement.classList.add(bookedDay_class)


                        // console.log(day, "isDateInRange", isDateInRange, "highlightedObject", highlightedObject)
                        // element.style.backgroundColor = 'pink'
                        element.style.boxShadow = "inset 0 -2px 0 0 ".concat(isDateInRange ? highlightedObject.color : 'transparent')
                        element.style.borderRadius = 0
                        element.style.position = 'relative'



                        // const container = document.createElement('div');
                        // container.className = 'start-night';
                        // const img = document.createElement('img');
                        // img.src = 'https://cdn-icons-png.flaticon.com/512/118/118669.png';
                        // img.style.height = '14px';
                        // img.style.width = '14px'
                        // img.alt = 'icon';
                        // container.appendChild(img);
                        // element.appendChild(container);

                        const container2 = document.createElement('div');
                        const root = ReactDOM.createRoot(container2);
                        root.render(<StartNightIcon />);
                        element.appendChild(container2);
                    }}

                    // roundRangeLimits={true}
                    // onDayEnter={(e) => { console.log("object", e) }}
                    // displayWeekNumber={true}
                    alwaysHalfDay={true}
                    // displayDisabledDataSource={true}
                    // disabledDays={[new Date('Dec 03 2023')]}
                    disabledDays={disableDates}
                />

            </div>



            <div className="Newcalender">
                <Calendar
                    year={state.currentYear}
                    minDate={state.minDate}
                    maxDate={state.maxDate}
                    language={state.language}
                    style={state.style}
                    allowOverlap={state.allowOverlap}
                    enableRangeSelection={state.enableRangeSelection}
                    displayWeekNumber={state.displayWeekNumber}
                    roundRangeLimits={state.roundRangeLimits}
                    alwaysHalfDay={state.alwaysHalfDay}
                    dataSource={dataSource}
                    onRangeSelected={e => { setDataSource(prev => [...prev, { startDate: e.startDate, endDate: e.endDate, name: "dateselection" }]); }}
                />
            </div>

        </>
    )
}

export default Newcalender
