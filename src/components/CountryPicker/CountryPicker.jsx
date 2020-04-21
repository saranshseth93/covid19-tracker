import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl, InputLabel} from '@material-ui/core';

import styles from './CountryPicker.module.css';

import {fetchCountries} from '../../api';

const CountryPicker = ({handleCountryChange}) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async() => {;
            setFetchedCountries(await fetchCountries())
        }

        fetchAPI();
    }, [setFetchedCountries]);

    return(
        <FormControl className={styles.formControl}>
        <InputLabel shrink id="country">Select Country:</InputLabel>
            <NativeSelect labelId="country" defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;