# jQuery-Title
Notifications allows you to show regularly in the title.

### Example

```javascript

jqueryTitle({
    title: 'New Title'
});

The above example will output: New Title
```

```javascript
jqueryTitle({
    titleLeft: '(NEW)',
    timeout  :  2000
});

The above example will output: (NEW) Old Title
After 2 seconds              : Old Title
```

```javascript
jqueryTitle({
    titleRight: '(NEW)',
    connect   : ' - '
});

The above example will output: Old Title - (NEW)

```


```javascript
jqueryTitle({
    titleRight: '(NEW)',
    connect   : ' - '
});


The above example will output: Old Title - (NEW)
```

### jQueryTitle Destroy
```javascript

jqueryTitle('destroy');
```

