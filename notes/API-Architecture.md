## API Structure

### User
- email: `string`
- password: `string`
- firstName: `string`
- lastName: `string`
- address: `string`
- uid: `int`
- isDoctor: `boolean`
- skills: `array` of strings
- conditions: `array` of strings
- createdAt: `new Date()`
- officeHour: {
    start: `int`, 
    end: `int`, 
    date: `string`
  }

### Meeting
- members: `array` of ids
- time: `string`
- address: `string` (address of doctor's office)



