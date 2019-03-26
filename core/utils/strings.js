import md5 from 'md5';

export const hashString = str => md5(str);

export const withPrefix = prefix => string => prefix + string;
