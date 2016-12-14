import nameInitials from '../name-initials'

describe('name-initials', () => {
  // E. => E
  it('works with single name initial', () => {
    var result = nameInitials('E.');

    expect(result).toEqual('E');
  });

  // Eric => E
  it('works with single name', () => {
    var result = nameInitials('Eric');

    expect(result).toEqual('E');
  });

  // E. Vera => EV
  it('works with initial and last name', () => {
    var result = nameInitials('E. Vera');

    expect(result).toEqual('EV');
  });

  // Eric V. => EV
  it('works with first name and last name initial', () => {
    var result = nameInitials('Eric V.');

    expect(result).toEqual('EV');
  });

  // Eric A. E. => EA
  it('works with name and two middle name initials', () => {
    var result = nameInitials('Eric A. E.');

    expect(result).toEqual('EA');
  });

  // Eric A. E. Vera => EV
  it('works with name with two middle name initials and a last name', () => {
    var result = nameInitials('Eric A. E. Vera ');

    expect(result).toEqual('EV');
  });

  // Eric A. Vera => EV
  it('works with name, middle name initials, and last name', () => {
    var result = nameInitials('Eric A. Vera');

    expect(result).toEqual('EV');
  });

  // Eric A. Vera Perez => EV
  it('works with name, middle name initials and two last names', () => {
    var result = nameInitials('Eric A. Vera Perez');

    expect(result).toEqual('EV');
  });

  // Eric Vera-Perez => EV
  it('works with name two last names separated by "-"', () => {
    var result = nameInitials('Eric Vera-Perez');

    expect(result).toEqual('EV');
  });

  // Eric A. Vera-Perez => EV
  it('works with name, middle initial, and two last names separated by "-"', () => {
    var result = nameInitials('Eric A. Vera-Perez');

    expect(result).toEqual('EV');
  });

  // Eric Vera Perez => EV
  it('works with name and two last names', () => {
    var result = nameInitials('Eric Vera Perez');

    expect(result).toEqual('EV');
  });

  // Eric A. de Vera Perez => ED
  it('works with name, middle name initial, and two last names (one starts with "de")', () => {
    var result = nameInitials('Eric A. de Vera Perez');

    expect(result).toEqual('ED');
  });

  // Eric A. de Vera-Perez => ED
  it('works with name, middle name initial, and two last names separated by "-" (one starts with "de")', () => {
    var result = nameInitials('Eric A. de Vera-Perez');

    expect(result).toEqual('ED');
  });

  // Eric A. Perez-de Vera => EP
  it('works with name, middle name initial, and two last names separated by "-" (second starts with "de")', () => {
    var result = nameInitials('Eric A. Perez-de Vera');

    expect(result).toEqual('EP');
  });

  // Eric A. Perez de Vera => EP
  it('works with name, middle name initial, and two last names (second starts with "de")', () => {
    var result = nameInitials('Eric A. Perez de Vera');

    expect(result).toEqual('EP');
  });

  // Eric (Instructor Somewhere) => E
  it('works with name and title in parenthesis', () => {
    var result = nameInitials('Eric (Instructor Somewhere)');

    expect(result).toEqual('E');
  });

  // Éric Vera => ÉV
  it('works with names that start with special characters', () => {
    var result = nameInitials('Éric Vera');

    expect(result).toEqual('ÉV');
  });

  // Vera-Perez => VP
  it('works with only last names separated by "-"', () => {
    var result = nameInitials('Vera-Perez');

    expect(result).toEqual('VP');
  });
  
  // Eric "No Nickname" Vera => E
  it('works with names with nicknames in the middle', () => {
    var result = nameInitials('Eric "No Nickname" Vera');

    expect(result).toEqual('E');
  });
});
