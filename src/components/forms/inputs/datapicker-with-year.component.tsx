import { useState } from "react"
import dayjs from "dayjs"
import { Calendar as CalendarIcon, Divide } from "lucide-react"
import { cn } from "@/utilities"
import { Calendar, Button, Popover, PopoverContent, PopoverTrigger } from "@/components/common"
import { Controller, FieldValues, Control } from 'react-hook-form';
import { boolean } from "yup";

const years = [
    "2030",
    "2029",
    "2028",
    "2027",
    "2026",
    "2025",
    "2024",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
    "2012",
    "2011",
    "2010",
    "2009",
    "2008",
    "2007",
    "2006",
    "2005",
    "2004",
    "2003",
    "2002",
    "2001",
    "2000",
    "1999",
    "1998",
    "1997",
    "1996",
    "1995",
    "1994",
    "1993",
    "1992",
    "1991",
    "1990",
    "1989",
    "1988",
    "1987",
    "1986",
    "1985",
    "1984",
    "1983",
    "1982",
    "1981",
    "1980",
    "1979",
    "1978",
    "1977",
    "1976",
    "1975",
    "1974",
    "1973",
    "1972",
    "1971",
    "1970",
    "1969",
    "1968",
    "1967",
    "1966",
    "1965",
    "1964",
    "1963",
    "1962",
    "1961",
    "1960",
    "1959",
    "1958",
    "1957",
    "1956",
    "1955",
    "1954",
    "1953",
    "1952",
    "1951",
    "1950",
    "1949",
    "1948",
    "1947",
    "1946",
    "1945",
    "1944",
    "1943",
    "1942",
    "1941",
    "1940",
    "1939",
    "1938",
    "1937",
    "1936",
    "1935",
    "1934",
    "1933",
    "1932",
    "1931",
    "1930",
    "1929",
    "1928",
    "1927",
    "1926",
    "1925",
    "1924",
    "1923",
    "1922",
    "1921",
    "1920",
    "1919",
    "1918",

]

const SelectYear: React.FC<{
    hiddenSelectYear: () => void;
    selectYear: (year: string) => void;
}> = ({ hiddenSelectYear, selectYear }) => {
    return <div className="grid h-[280px] overflow-y-auto p-4 gap-4 bg-white rounded-lg grid-cols-4">
        {years.map((year) => (<div onClick={() => {
            selectYear(year);
            hiddenSelectYear();
        }} className="cursor-pointer p-2 rounded-lg hover:bg-gray-100" key={year}>{year}</div>))}
    </div>
}
const FooterCalendar: React.FC<{
    showSelectYear: () => void,
    date: Date
}> = ({ showSelectYear, date }) => {
    return <div onClick={showSelectYear} className="flex items-center justify-center">
        <p className="flex text-xs text-gray-200">selecionaste {dayjs(date).format('YYYY')} click here to change</p>
    </div>
}
const DatePickerWithYear: React.FC<{
    name: string;
    control?: Control<FieldValues>;
    rules?: any;
    className?: string;
}> = ({ name, rules, control, className, ...rest }) => {
    const [selectYear, setSelectYear] = useState(true)
    const [currentYear, setCurrentYear] = useState<string>('2023')
    const showSelectYear = () => setSelectYear(!selectYear)


    return <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field, fieldState }) => {
            return (
                <Popover>
                    <PopoverTrigger >
                        <div
                            //variant={"outline"}
                            className={cn(
                                "w-full h-14  bg-white border-2 border-primary-300 rounded-lg p-2 flex justify-between items-center text-left font-normal",

                                !field.value && "text-muted-foreground",
                                className)}
                        >
                            {field.value ? dayjs(field.value.toString()).format("M/D/YYYY") : <span>Pick a date</span>}
                            <CalendarIcon className="ml-4 h-4 w-4" />
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        {selectYear ? <SelectYear selectYear={setCurrentYear} hiddenSelectYear={showSelectYear} /> :

                            <Calendar
                                toYear={Number(currentYear)}
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                initialFocus
                                footer={<FooterCalendar showSelectYear={showSelectYear} date={field.value} />}
                            />
                        }
                    </PopoverContent>
                </Popover>
            )
        }}
    />
}

export default DatePickerWithYear