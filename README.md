# NWPA

this is the source code for the North West Performance Archive

it is provided free of charge, and free for use, with the intention to inspire learning, creativity, and collaboration.

## Stack

- SvelteKit
- SurrealDB

## Models

### Performance

```
{
    title: string
    subtitle: string
    description?: string
}
```

### Maker

```
{
    name: string
}
```

### Discipline

```
{
    name: string
}
```

### Company

Producing organization, creative collective, etc. groups of Makers

```
{
    name: string
    founded: Date
}
```

### Venue

```
{
    name: string
    address: string
}
```

## Relationships

#### Made

Maker-> made->Performance

```
{
    discipline: thing
}
```

### Member

Maker->member->Company

```
{
    joined: Date
}
```

### Shown

Performance->shown->Venue

```
{
    start: Date
    end: Date
}
```
