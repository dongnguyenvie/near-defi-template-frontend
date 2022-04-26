### For modules

> There are some components which are not common component, but it will be reusing in the module or page. so we need define this folder base on structure of "/routes" folder
> <br/> We can use simple structure like below example

```
.
├── ...
├── components                      # common component
│   ├── modules
│   │   ├── PageA                   # components reuse in Leaderboard page only
│   │   │   ├── A.tsx
│   │   │   ├── B.tsx
│   │   │   └── ...
│   │   └── ...
│   ├── commonA.tsx                 # common components
│   ├── commonB.tsx                 # common components
│   └── ...                         # common components
│
├── roues                           # pages
│   ├── PageA.tsx                   # page A
│   ├── PageB.tsx
│   └── ...
└── ...
```
