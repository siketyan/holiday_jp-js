import * as package_info from './../package.json';
import * as _holidays from './holidays';
import * as format from './format';

export const VERSION = package_info.version;
export const holidays = _holidays;

export function between(start, last) {
  var selected = [];
  var d;
  start = new Date(format(start));
  last = new Date(format(last));
  Object.keys(holidays).forEach(function (date) {
    d = new Date(holidays[date]['date']);
    if (start <= d && d <= last) {
      holidays[date]['date'] = d;
      selected.push(holidays[date]);
    }
  });
  return selected;
}

export function isHoliday(date) {
  if (date instanceof Date) {
    date = format(date);
  }
  if (holidays[date]) {
    return true;
  }
  return false;
}
