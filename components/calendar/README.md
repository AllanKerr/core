# Calendar

The `d2l-calendar` component can be used to display a responsively sized calendar that allows for date selection. It indicates the currently selected date if `selected-value` is specified, or if the user selects a date.

![Calendar](./screenshots/calendar.png?raw=true)

```html
<script type="module">
  import '@brightspace-ui/core/components/calendar/calendar.js';
</script>
<!-- Today is February 21, 2020 -->
<d2l-calendar
	selected-value="2020-02-09"
	summary="Click on a day to select it as the assignment due date.">
</d2l-calendar>
```

**Properties:**

- `selected-value` (String): Currently selected date. This should be in ISO 8601 calendar date format (`YYYY-MM-DD`) and should be localized to the user's timezone (if applicable).
- `summary` (String): Summary of the calendar for accessibility.

**Events:**

* `d2l-calendar-selected`: dispatched when a date is selected through click, space, or enter. `e.detail.date` is in ISO 8601 calendar date format (`YYYY-MM-DD`).